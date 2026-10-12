// Browser-only TTS engine wrapper.
//
// Cloning paths:
//   1. Upload a pre-built OuteTTS speaker JSON — instant, requires offline prep.
//   2. Build the JSON in-browser from raw audio + transcript using the local
//      Rust+WASM speaker-builder (Whisper alignment + WavTokenizer encoder).
//      Needs a one-time encoder-weights URL to be configured.

// Silence onnxruntime's "Some nodes were not assigned to the preferred
// execution providers" warnings before any model loads. Those happen
// because WebGPU doesn't implement every shape-related op, so ORT falls
// those nodes back to CPU — the model still runs correctly. The warning
// is emitted by the WASM blob's C++ logger; setting env.logLevel before
// the first session is created drops it. transformers.js, kokoro-js,
// and our direct onnxruntime-web import all share the same env instance,
// so one setter covers all engines.
import { env as transformersEnv } from "https://esm.sh/@huggingface/transformers@3.8.1";
transformersEnv.backends.onnx.logLevel = "error";

import { KokoroTTS } from "https://esm.sh/kokoro-js@1.2.1";
import { createSpeaker as buildSpeakerFromAudio, transcribeAudio } from "./speaker-builder.js";
import { saveVoice, deleteVoice, listVoices as listSavedVoices } from "./browser-utils.js";

// Qwen3-TTS-Flash via Alibaba DashScope. Not 100% local — the engine card
// surfaces this. Endpoint and model are configurable so users can point at
// the international ("dashscope-intl.aliyuncs.com") or mainland endpoints,
// or run via a CORS-friendly proxy.
const QWEN_DEFAULT_ENDPOINT = "https://dashscope-intl.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation";
const QWEN_DEFAULT_MODEL = "qwen3-tts-flash";

const QWEN_VOICES = [
  { id: "Cherry",  meta: "female · warm" },
  { id: "Ethan",   meta: "male · clear" },
  { id: "Chelsie", meta: "female · expressive" },
  { id: "Serena",  meta: "female · gentle" },
  { id: "Dylan",   meta: "male · neutral" },
  { id: "Jada",    meta: "female · bright" },
  { id: "Sunlin",  meta: "female · soft" },
  { id: "Marcus",  meta: "male · deep" },
  { id: "Roy",     meta: "male · authoritative" },
  { id: "Peter",   meta: "male · friendly" },
  { id: "Rocky",   meta: "male · energetic" },
  { id: "Kiki",    meta: "female · youthful" },
  { id: "Eric",    meta: "male · natural" },
];

const KOKORO_MODEL_ID = "onnx-community/Kokoro-82M-v1.0-ONNX";
const OUTETTS_MODEL_ID = "onnx-community/OuteTTS-0.2-500M";
const OUTETTS_PKG = "https://esm.sh/outetts@0.2.0";

// On hybrid-graphics systems (laptop with integrated + discrete GPU),
// browsers default to the integrated GPU for power savings — Firefox
// gives us Intel UHD 630 (RAM=0, shared, ~256 MB available for WebGPU)
// instead of the discrete card (e.g. GTX 1650 with 4 GB VRAM). The TTS
// model needs more memory than the integrated GPU can spare, so we
// force `powerPreference: "high-performance"` on EVERY requestAdapter
// call — including ORT-web's internal one, which is why this has to be
// a global override and not an option we pass to detectDevice alone.
if (typeof navigator !== "undefined" && navigator.gpu && !navigator.gpu.__pwgPrefInstalled) {
  const orig = navigator.gpu.requestAdapter.bind(navigator.gpu);
  navigator.gpu.requestAdapter = (opts = {}) =>
    orig({ powerPreference: "high-performance", ...opts });
  navigator.gpu.__pwgPrefInstalled = true;
}

async function detectDevice() {
  if (typeof navigator !== "undefined" && navigator.gpu) {
    try {
      const adapter = await navigator.gpu.requestAdapter();
      if (adapter) {
        // Log adapter limits once so OOM diagnostics are visible. The
        // two limits below tell us whether failures are likely
        // single-buffer-size (split by newer ORT helps) or total-VRAM
        // exhaustion (no library change rescues that).
        const l = adapter.limits || {};
        const fmt = (n) => n ? `${(n / 1024 / 1024).toFixed(0)} MB` : "?";
        const info = (await adapter.requestAdapterInfo?.().catch(() => null)) || {};
        console.log(
          `[webgpu] adapter ${info.vendor || ""} ${info.architecture || ""} ${info.device || ""}`.trim() +
          ` · maxBufferSize=${fmt(l.maxBufferSize)}` +
          ` · maxStorageBufferBindingSize=${fmt(l.maxStorageBufferBindingSize)}` +
          ` · maxComputeWorkgroupStorageSize=${fmt(l.maxComputeWorkgroupStorageSize)}`
        );
        return "webgpu";
      }
    } catch {}
  }
  return "wasm";
}

// Capture device-level WebGPU errors that bypass `unhandledrejection`.
// onnxruntime-web reports shader-compile / pipeline-validation failures
// via `GPUDevice.onuncapturederror`, which we can't reach because ORT
// owns the device. Monkey-patch `GPUAdapter.prototype.requestDevice` so
// every device ORT (or anything else) requests gets an error listener
// that pushes into a module-scoped queue. Engines drain the queue across
// each load attempt and treat a non-empty queue as a failure for that
// attempt. Patch is installed once at module load.
const _wgpuDeviceErrors = [];
function drainWgpuDeviceErrors() { return _wgpuDeviceErrors.splice(0); }
if (typeof GPUAdapter !== "undefined" && !GPUAdapter.prototype.__pwgInstalled) {
  const orig = GPUAdapter.prototype.requestDevice;
  GPUAdapter.prototype.requestDevice = async function(...args) {
    const device = await orig.apply(this, args);
    device.addEventListener("uncapturederror", (ev) => {
      const msg = ev.error?.message || String(ev.error || "uncaptured");
      _wgpuDeviceErrors.push(msg);
    });
    return device;
  };
  GPUAdapter.prototype.__pwgInstalled = true;
}

class KokoroEngine {
  constructor() {
    this.tts = null;
    this.device = null;
    this.loadPromise = null;
  }

  isReady() { return !!this.tts; }

  async load(onProgress) {
    if (this.tts) return this.tts;
    if (this.loadPromise) return this.loadPromise;

    this.loadPromise = (async () => {
      this.device = await detectDevice();
      const dtype = this.device === "webgpu" ? "fp32" : "q8";
      this.tts = await KokoroTTS.from_pretrained(KOKORO_MODEL_ID, {
        dtype, device: this.device, progress_callback: onProgress,
      });
      return this.tts;
    })();

    try { return await this.loadPromise; }
    catch (err) { this.loadPromise = null; throw err; }
  }

  listVoices() {
    if (!this.tts) return [];
    return Object.entries(this.tts.voices).map(([nativeId, info]) => ({
      id: `kokoro:${nativeId}`,
      kind: "kokoro",
      nativeId,
      label: info.name || nativeId,
      meta: `${info.language || ""} · ${info.gender || ""}`.trim(),
      removable: false,
    }));
  }

  async generate({ voice, text }) {
    const audio = await this.tts.generate(text, { voice: voice.nativeId });
    return { samples: audio.audio, sample_rate: audio.sampling_rate };
  }
}

// Self-hosted endpoints (localhost / 127.0.0.1 / private LANs) don't need
// an API key — typically a `serve_qwen.py` or vLLM behind no auth. We use
// this both to skip the "API key required" check and to flip the engine
// badge from "Cloud" to "Local".
function isLocalEndpoint(url) {
  if (!url) return false;
  try {
    const u = new URL(url);
    if (u.hostname === "localhost" || u.hostname === "127.0.0.1" || u.hostname === "::1") return true;
    if (/^10\./.test(u.hostname)) return true;
    if (/^192\.168\./.test(u.hostname)) return true;
    if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(u.hostname)) return true;
    return false;
  } catch { return false; }
}

class QwenEngine {
  constructor() {
    // Modes:
    //   "http"    — POST to DashScope or a self-hosted server.
    //   "browser" — in-browser ONNX inference via QwenBrowserBackend.
    //               Loaded lazily so the 600 MB ONNX isn't fetched until
    //               the user actually picks the mode.
    this.mode = "http";
    this.apiKey = null;
    this.endpoint = QWEN_DEFAULT_ENDPOINT;
    this.model = QWEN_DEFAULT_MODEL;
    this.customVoices = new Map();
    this.browser = null;
    // Browser mode loads six artefacts produced by qwen-server/export_to_onnx.py
    // from one base directory. The user pastes the directory URL, we derive
    // each filename from the standard layout.
    this.browserBaseUrl = "";
    this.browserTokenizerId = "";
  }

  _browserUrls() {
    const base = this.browserBaseUrl.replace(/\/+$/, "");
    return {
      talkerUrl:           `${base}/qwen3-tts-talker.onnx`,
      subtalkerUrl:        `${base}/qwen3-tts-subtalker.onnx`,
      codecUrl:            `${base}/qwen3-tts-codec.onnx`,
      codebookWeightsUrl:  `${base}/qwen3-tts-codebook-weights.safetensors`,
      textEmbeddingsUrl:   `${base}/qwen3-tts-text-embeddings.safetensors`,
      configUrl:           `${base}/qwen3-tts-config.json`,
      tokenizerId:         this.browserTokenizerId || undefined,
    };
  }

  get device() {
    if (this.mode === "browser") return this.browser?.deviceLabel || "wasm";
    return isLocalEndpoint(this.endpoint) ? "local" : "cloud";
  }

  isReady() {
    if (this.mode === "browser") return !!this.browser?.isReady();
    return isLocalEndpoint(this.endpoint) || !!this.apiKey;
  }

  async load(onProgress) {
    if (this.mode === "browser") {
      if (!this.browserBaseUrl) {
        throw new Error("Browser mode needs a Base URL pointing at the export directory (see qwen-server/export_to_onnx.py)");
      }
      // Lazy import so HTTP-only users never fetch onnxruntime-web.
      const mod = await import("./qwen-browser.js");
      this.browser = new mod.QwenBrowserBackend();
      await this.browser.load({ ...this._browserUrls(), onProgress });
      return this;
    }
    if (!this.isReady()) {
      throw new Error("Qwen needs an API key. Paste it, or point Endpoint URL at a local server");
    }
    return this;
  }

  configure({ mode, apiKey, endpoint, model, baseUrl, tokenizerId }) {
    if (mode) this.mode = mode;
    if (apiKey !== undefined) this.apiKey = apiKey || null;
    if (endpoint) this.endpoint = endpoint;
    if (model) this.model = model;
    if (baseUrl !== undefined)     this.browserBaseUrl     = baseUrl;
    if (tokenizerId !== undefined) this.browserTokenizerId = tokenizerId;
    if (mode && mode !== "browser") this.browser = null;
  }

  addCustomVoice({ id, name, persist = true }) {
    if (!id) throw new Error("Custom voice id required");
    const entry = { name: name || id };
    this.customVoices.set(id, entry);
    if (persist) saveVoice(`qwen:${id}`, entry);
  }

  removeSpeaker(nativeId) {
    const had = this.customVoices.delete(nativeId);
    deleteVoice(`qwen:${nativeId}`);
    return had;
  }

  async restoreFromStorage() {
    const all = await listSavedVoices();
    for (const { key, value } of all) {
      if (!key.startsWith("qwen:") || !value?.name) continue;
      this.addCustomVoice({ id: key.slice("qwen:".length), name: value.name, persist: false });
    }
  }

  listVoices() {
    const builtins = QWEN_VOICES.map(v => ({
      id: `qwen:${v.id}`,
      kind: "qwen",
      nativeId: v.id,
      label: v.id,
      meta: v.meta,
      removable: false,
    }));
    const custom = Array.from(this.customVoices.entries()).map(([id, info]) => ({
      id: `qwen-custom:${id}`,
      kind: "qwen-custom",
      nativeId: id,
      label: info.name,
      meta: "custom",
      removable: true,
    }));
    return [...builtins, ...custom];
  }

  async generate({ voice, text }) {
    if (!this.isReady()) {
      throw new Error("Qwen not ready. Set an API key, point at a local server, or load browser ONNX");
    }
    if (this.mode === "browser") {
      return await this.browser.generate({ voice: voice.nativeId, text });
    }
    const body = {
      model: this.model,
      input: { text },
      parameters: { voice: voice.nativeId },
    };
    const headers = { "Content-Type": "application/json" };
    if (this.apiKey) headers["Authorization"] = `Bearer ${this.apiKey}`;
    const resp = await fetch(this.endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    if (!resp.ok) {
      const detail = await resp.text().catch(() => "");
      throw new Error(`Qwen API ${resp.status}: ${detail.slice(0, 200) || resp.statusText}`);
    }
    const data = await resp.json();
    const audioBytes = await extractQwenAudio(data);
    return decodeBytesToSamples(audioBytes);
  }
}

// Pull audio out of a DashScope response. Two known shapes: inline base64
// (`output.audio.data`) or a fetchable URL (`output.audio.url`). The exact
// path varies by model variant — we try both.
async function extractQwenAudio(data) {
  const audio = data?.output?.audio || data?.output;
  if (!audio) throw new Error(`Qwen response missing 'output.audio': ${JSON.stringify(data).slice(0, 200)}`);
  if (audio.data) {
    const bin = atob(audio.data);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes.buffer;
  }
  if (audio.url) {
    const r = await fetch(audio.url);
    if (!r.ok) throw new Error(`Fetching audio.url failed: ${r.status}`);
    return await r.arrayBuffer();
  }
  throw new Error("Qwen response had no audio.data or audio.url");
}

// Decode an MP3/WAV/etc. blob into the (samples, sample_rate) shape the rest
// of the synthesize loop expects. Uses Web Audio for format-agnostic decoding.
async function decodeBytesToSamples(buffer) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  try {
    const decoded = await ctx.decodeAudioData(buffer.slice ? buffer.slice(0) : buffer);
    const ch = decoded.numberOfChannels;
    let samples;
    if (ch === 1) {
      samples = decoded.getChannelData(0).slice();
    } else {
      // Mix down to mono so downstream concat + WAV encoding stays uniform.
      const len = decoded.length;
      samples = new Float32Array(len);
      for (let c = 0; c < ch; c++) {
        const data = decoded.getChannelData(c);
        for (let i = 0; i < len; i++) samples[i] += data[i];
      }
      for (let i = 0; i < len; i++) samples[i] /= ch;
    }
    return { samples, sample_rate: decoded.sampleRate };
  } finally {
    ctx.close().catch(() => {});
  }
}

// Force WebGPU shader pipelines to compile during load. WebGPU compiles
// shaders lazily on first GPU work, so InterfaceHF resolving doesn't
// prove the GPU can actually run the model — failures otherwise surface
// at the user's first Generate, past our fallback machinery.
//
// When a pipeline IS invalid, ORT's WebGPU backend submits compute work
// to it and then awaits an internal output promise that never settles
// (the buffer-mapping rejection happens on a detached promise ORT does
// not observe). The awaited generate() therefore hangs forever, so we
// race it with a hard timeout — the timeout firing IS the signal that
// WebGPU is broken on this device, and the caller falls through.
//
// `onProgress` receives synthetic transformers.js-shaped events so the
// warm-up appears as its own row in the loading panel.
async function warmUpWebGPU(iface, { onProgress, label = "warm-up", timeoutMs = 10000 } = {}) {
  onProgress?.({ status: "initiate", file: label });
  onProgress?.({ status: "progress", file: label, progress: 0 });
  const speaker = iface.load_default_speaker("male_1");
  const work = iface.generate({
    text: "hi",
    speaker,
    temperature: 0.4,
    repetition_penalty: 1.1,
    max_length: 32,
  });
  let timer;
  const timeout = new Promise((_, rej) => {
    timer = setTimeout(() => rej(new Error(`warm-up timed out after ${timeoutMs} ms`)), timeoutMs);
  });
  try {
    await Promise.race([work, timeout]);
    onProgress?.({ status: "done", file: label });
  } catch (err) {
    onProgress?.({ status: "done", file: label });   // remove row; outer catch surfaces the error
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

class OuteTTSEngine {
  constructor() {
    this.iface = null;
    this.outetts = null;
    this.device = null;
    this.loadPromise = null;
    this.customSpeakers = new Map();   // nativeId -> { name, speaker }
  }

  isReady() { return !!this.iface; }

  async load(onProgress) {
    if (this.iface) return this.iface;
    if (this.loadPromise) return this.loadPromise;

    this.loadPromise = (async () => {
      const [preferredDevice, outetts] = await Promise.all([detectDevice(), import(OUTETTS_PKG)]);
      this.outetts = outetts;

      // dtype plan rationale:
      //
      // WASM: q8 only. The 4 GB WebAssembly linear-memory ceiling means
      // fp32 (~2 GB weights) plus tokenizer plus WavTokenizer decoder
      // plus ORT scratch reliably OOMs the heap mid-load (the numeric
      // emscripten-exception-pointer trap, e.g. `4023965016`). q8 fits
      // comfortably and is perceptually indistinguishable at this size.
      //
      // WebGPU: q4, then q4f16, then q8. fp16 dropped — observed to OOM
      // on constrained GPUs after a 74 s wait, with no quality benefit
      // worth that latency penalty. Reasoning:
      //  - q4 / q4f16 use ORT's `MatMulNBits` kernel — a fused
      //    unpack-and-multiply shader, NOT the broken `DequantizeLinear`
      //    + float MatMul pair that q8 uses. So q4 dodges the shader-
      //    compile bug on Firefox / older drivers entirely.
      //  - q4 first because it's the most universal: fp32 activations
      //    work on every WebGPU device. q4f16 needs `shader-f16` and
      //    only marginally faster.
      //  - q8 last as a final attempt for rare devices where
      //    MatMulNBits is unavailable but DequantizeLinear works.
      const dtypePlan = preferredDevice === "webgpu"
        ? [["webgpu", "q4"], ["webgpu", "q4f16"], ["webgpu", "q8"], ["wasm", "q8"]]
        : [["wasm", "q8"]];

      const errors = [];
      for (const [device, dtype] of dtypePlan) {
        const t0 = performance.now();
        // Two channels emit WebGPU failures and we have to listen on both:
        //   - `unhandledrejection`: ORT's `buffer.mapAsync()` rejection for
        //     "Mapping WebGPU buffer failed: Invalid buffer". Bubbles to
        //     window because ORT doesn't observe it.
        //   - `GPUDevice.uncapturederror`: shader-compile / pipeline-validation
        //     errors ("Buffer with '' label is invalid",
        //     "ComputePipeline with 'DequantizeLinear' label is invalid"). These
        //     never reach window — they're collected via the `requestDevice`
        //     monkey-patch at module top into `_wgpuDeviceErrors`.
        const wgpuErrors = [];
        const onReject = (ev) => {
          const m = ev.reason?.message || String(ev.reason || "");
          if (/WebGPU|DequantizeLinear|LayerNormalization|ComputePipeline|shader module|Mapping|Invalid buffer/i.test(m)) {
            wgpuErrors.push(m);
            ev.preventDefault();
          }
        };
        if (device === "webgpu") {
          window.addEventListener("unhandledrejection", onReject);
          drainWgpuDeviceErrors();   // clear any stale errors from a previous attempt
        }
        const collectWgpuFailures = () => [...wgpuErrors, ...drainWgpuDeviceErrors()];
        try {
          console.log(`[outetts] attempting device=${device} dtype=${dtype}`);
          const cfg = new outetts.HFModelConfig_v1({
            model_path: OUTETTS_MODEL_ID,
            language: "en",
            dtype, device,
            max_seq_length: 4096,
          });
          this.iface = await outetts.InterfaceHF({ model_version: "0.2", cfg });
          await new Promise(r => setTimeout(r, 50));
          let failures = collectWgpuFailures();
          if (failures.length > 0) {
            this.iface = null;
            throw new Error(`WebGPU validation errors during load: ${failures[0].slice(0, 80)}`);
          }
          // WebGPU shaders are JIT-compiled on first GPU work, not on
          // session-create. A short warm-up forces compilation so failures
          // surface here (where we can fall through to WASM) instead of
          // at the user's first Generate. The warm-up is timeout-raced
          // because invalid pipelines cause ORT to hang indefinitely
          // rather than reject the awaited generate().
          if (device === "webgpu") {
            await warmUpWebGPU(this.iface, {
              onProgress,
              label: `warm-up · ${device}+${dtype}`,
            });
            await new Promise(r => setTimeout(r, 50));
            failures = collectWgpuFailures();
            if (failures.length > 0) {
              this.iface = null;
              throw new Error(`WebGPU validation errors during warm-up: ${failures[0].slice(0, 80)}`);
            }
          }
          this.device = device;
          console.log(`[outetts] loaded on ${device}/${dtype} in ${Math.round(performance.now() - t0)} ms`);
          return this.iface;
        } catch (err) {
          this.iface = null;
          const detail = err instanceof Error
            ? `${err.name}: ${err.message}`
            : `${typeof err}: ${String(err)}`;
          console.warn(`[outetts] ${device}+${dtype} failed (${Math.round(performance.now() - t0)} ms):`, detail, err);
          errors.push(`${device}+${dtype}: ${detail.slice(0, 50)}`);
        } finally {
          if (device === "webgpu") window.removeEventListener("unhandledrejection", onReject);
        }
      }

      // All combinations failed. The combined symptoms (consistent
      // numeric trap, both backends, all dtypes) point at the WASM
      // heap ceiling; surface that directly so the user has actionable
      // next steps instead of a cryptic number.
      const allNumericTraps = errors.every(e => /\d{6,}/.test(e));
      const cause = allNumericTraps
        ? "OuteTTS-0.2-500M is too large for this browser tab: onnxruntime-web's WebAssembly heap maxed out during model load."
        : "OuteTTS failed to initialise.";
      throw new Error(
        `${cause}\n\n` +
        `Try:\n` +
        ` 1. Close other tabs and reload to free up shared WASM memory.\n` +
        ` 2. Use Chrome or Edge, which handle large WASM allocations better than Firefox.\n` +
        ` 3. Click the 💾 "clear" badge in the header, then reload to fix corrupted cached files.\n` +
        ` 4. Switch to Kokoro (no cloning, but real-time fast) or Qwen3-TTS HTTP via serve_qwen.py if cloning isn't required.\n\n` +
        `Tried: ${errors.join(" | ")}`
      );
    })();

    try { return await this.loadPromise; }
    catch (err) { this.loadPromise = null; throw err; }
  }

  listVoices() {
    if (!this.iface) return [];
    // The npm package keys default speakers as `_DEFAULT_SPEAKERS["en"][name]`
    // where the name is `male_1` etc. — the language is the OUTER object
    // key, NOT a prefix on the speaker id. Passing `en_male_1` here threw
    // 'Speaker en_male_1 not found for language en' on Generate.
    const ENGLISH_DEFAULTS = [
      { id: "male_1",   label: "Male 1",   meta: "en · male"   },
      { id: "male_2",   label: "Male 2",   meta: "en · male"   },
      { id: "male_3",   label: "Male 3",   meta: "en · male"   },
      { id: "male_4",   label: "Male 4",   meta: "en · male"   },
      { id: "female_1", label: "Female 1", meta: "en · female" },
      { id: "female_2", label: "Female 2", meta: "en · female" },
    ];
    const defaults = ENGLISH_DEFAULTS.map(s => ({
      id: `outetts-default:${s.id}`,
      kind: "outetts-default",
      nativeId: s.id,
      label: s.label,
      meta: s.meta,
      removable: false,
    }));
    const custom = Array.from(this.customSpeakers.entries()).map(([nativeId, s]) => ({
      id: `outetts-custom:${nativeId}`,
      kind: "outetts-custom",
      nativeId,
      label: s.name,
      meta: "cloned",
      removable: true,
    }));
    return [...defaults, ...custom];
  }

  addSpeakerFromJSON({ id, name, json, persist = true }) {
    if (!json || typeof json !== "object") throw new Error("Speaker JSON is not an object");
    if (!Array.isArray(json.words) || json.words.length === 0) {
      throw new Error("Speaker JSON missing 'words' array");
    }
    if (typeof json.text !== "string") {
      throw new Error("Speaker JSON missing 'text' field");
    }
    const speaker = { ...json, language: json.language || "en" };
    this.customSpeakers.set(id, { name, speaker });
    if (persist) saveVoice(`outetts:${id}`, { name, json: speaker });
  }

  removeSpeaker(nativeId) {
    const had = this.customSpeakers.delete(nativeId);
    deleteVoice(`outetts:${nativeId}`);
    return had;
  }

  /** Restore voices saved in a previous session. Called once after `load()`. */
  async restoreFromStorage() {
    const all = await listSavedVoices();
    for (const { key, value } of all) {
      if (!key.startsWith("outetts:") || !value?.json) continue;
      const id = key.slice("outetts:".length);
      try { this.addSpeakerFromJSON({ id, name: value.name, json: value.json, persist: false }); }
      catch (e) { console.warn(`restore ${key} failed`, e); }
    }
  }

  async generate({ voice, text }) {
    let speaker;
    if (voice.kind === "outetts-custom") {
      const entry = this.customSpeakers.get(voice.nativeId);
      if (!entry) throw new Error("Cloned voice not found");
      speaker = entry.speaker;
    } else {
      speaker = this.iface.load_default_speaker(voice.nativeId);
    }
    const output = await this.iface.generate({
      text, speaker,
      temperature: 0.4,
      repetition_penalty: 1.1,
      max_length: 4096,
    });
    return { samples: output.audio.data, sample_rate: output.sr };
  }
}

// Encode Float32Array PCM to a 16-bit mono WAV Blob.
function floatToWavBlob(samples, sampleRate) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  const writeStr = (off, s) => {
    for (let i = 0; i < s.length; i++) view.setUint8(off + i, s.charCodeAt(i));
  };
  writeStr(0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, "data");
  view.setUint32(40, samples.length * 2, true);
  let off = 44;
  for (let i = 0; i < samples.length; i++, off += 2) {
    const s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(off, s < 0 ? s * 0x8000 : s * 0x7fff, true);
  }
  return new Blob([buffer], { type: "audio/wav" });
}

function concatFloat32(chunks) {
  const total = chunks.reduce((sum, c) => sum + c.length, 0);
  const out = new Float32Array(total);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out;
}

// Words that legitimately end with `.` mid-sentence — splitting after these
// would chop a sentence in half. Lowercased; checked after stripping the dot.
const ABBREV = new Set([
  "mr", "mrs", "ms", "dr", "prof", "sr", "jr", "st",
  "vs", "etc", "e.g", "i.e", "cf", "approx", "fig",
  "jan", "feb", "mar", "apr", "jun", "jul", "aug", "sep", "sept", "oct", "nov", "dec",
  "u.s", "u.k", "u.s.a",
]);

function isSentenceEnd(text, i) {
  const ch = text[i];
  if (ch !== "." && ch !== "!" && ch !== "?") return false;
  // Acronyms like "U.S.": a single letter + dot + letter? Treat as not-end.
  if (ch === "." && i >= 1 && /[A-Za-z]/.test(text[i - 1]) && /[A-Za-z]/.test(text[i + 1] || "")) {
    if (i < 2 || !/[A-Za-z]/.test(text[i - 2])) return false;
  }
  // Trailing word check for abbreviations.
  if (ch === ".") {
    let j = i - 1;
    while (j >= 0 && /[A-Za-z.]/.test(text[j])) j--;
    const word = text.slice(j + 1, i).toLowerCase();
    if (ABBREV.has(word)) return false;
  }
  // Real end requires whitespace (or EOS) after — and possibly closing quotes.
  let n = i + 1;
  while (n < text.length && /["'’”)\]]/.test(text[n])) n++;
  return n >= text.length || /\s/.test(text[n]);
}

function splitSentences(text) {
  const out = [];
  let start = 0;
  for (let i = 0; i < text.length; i++) {
    if (isSentenceEnd(text, i)) {
      let n = i + 1;
      while (n < text.length && /["'’”)\]]/.test(text[n])) n++;
      const piece = text.slice(start, n).trim();
      if (piece) out.push(piece);
      start = n;
    }
  }
  const tail = text.slice(start).trim();
  if (tail) out.push(tail);
  return out;
}

/**
 * Split text into chunks for sequential TTS generation.
 *
 * - OuteTTS has a 4096-token sequence cap; long text must be split.
 * - Both engines produce better prosody on shorter, sentence-bounded inputs.
 *
 * Strategy: split paragraphs → sentences → greedy-pack into chunks ≤ maxChars.
 * If a single sentence exceeds maxChars, fall back to clause splits on
 * `;` `,`, then a hard cut as a last resort.
 */
function chunkText(text, maxChars = 400) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  const paragraphs = trimmed.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
  const out = [];
  let buf = "";
  const flush = () => { if (buf) { out.push(buf); buf = ""; } };

  for (const para of paragraphs) {
    flush();
    for (const sentence of splitSentences(para)) {
      const pieces = sentence.length > maxChars ? splitLong(sentence, maxChars) : [sentence];
      for (const p of pieces) {
        if (!buf) { buf = p; continue; }
        if (buf.length + 1 + p.length <= maxChars) { buf += " " + p; }
        else { flush(); buf = p; }
      }
    }
    flush();
  }
  return out.length > 0 ? out : [trimmed];
}

function splitLong(s, maxChars) {
  // Break on clause boundaries first.
  const clauses = s.split(/([;,])\s+/);
  const merged = [];
  for (let i = 0; i < clauses.length; i += 2) {
    const piece = clauses[i] + (clauses[i + 1] || "");
    merged.push(piece.trim());
  }
  const out = [];
  let buf = "";
  for (const c of merged) {
    if (c.length > maxChars) {
      if (buf) { out.push(buf); buf = ""; }
      for (let i = 0; i < c.length; i += maxChars) out.push(c.slice(i, i + maxChars));
      continue;
    }
    if (!buf) { buf = c; }
    else if (buf.length + 1 + c.length <= maxChars) { buf += " " + c; }
    else { out.push(buf); buf = c; }
  }
  if (buf) out.push(buf);
  return out;
}

export class TTSHandler {
  constructor() {
    this.engines = {
      kokoro: new KokoroEngine(),
      outetts: new OuteTTSEngine(),
      qwen: new QwenEngine(),
    };
  }

  /** Configure the Qwen engine — API key + optional endpoint/model overrides. */
  configureQwen(opts) {
    this._engine("qwen").configure(opts);
  }

  /** Add a custom DashScope voice id (from a prior voice-clone job). */
  addQwenCustomVoice(params) {
    this._engine("qwen").addCustomVoice(params);
  }

  _engine(name) {
    const e = this.engines[name];
    if (!e) throw new Error(`Unknown engine: ${name}`);
    return e;
  }

  isEngineReady(name) { return this._engine(name).isReady(); }
  getDevice(name) { return this._engine(name).device || ""; }
  async loadEngine(name, onProgress) {
    const eng = this._engine(name);
    const r = await eng.load(onProgress);
    // Refill in-memory custom-voice maps from IndexedDB now that the
    // underlying iface is ready to accept them.
    if (typeof eng.restoreFromStorage === "function") {
      try { await eng.restoreFromStorage(); }
      catch (e) { console.warn(`${name} restoreFromStorage failed`, e); }
    }
    return r;
  }
  listVoices(name) { return this._engine(name).listVoices(); }

  addSpeakerFromJSON(name, params) {
    if (name !== "outetts") throw new Error("Speaker JSON import is OuteTTS-only");
    return this._engine(name).addSpeakerFromJSON(params);
  }

  /** Whisper-tiny transcription of a reference clip — used by the UI to
   *  auto-fill the transcript field for OuteTTS audio cloning. */
  transcribeAudio(args) {
    return transcribeAudio(args);
  }

  /**
   * Build a speaker JSON from raw audio + transcript using the local WASM
   * encoder, then register it with the OuteTTS engine. Returns the registered
   * voice id.
   */
  async createSpeakerFromAudio({ id, name, audioBlob, transcript, weightsUrl, configUrl, onProgress }) {
    const json = await buildSpeakerFromAudio({
      audioBlob, transcript, weightsUrl, configUrl, onProgress,
    });
    this._engine("outetts").addSpeakerFromJSON({ id, name, json });
    return json;
  }

  removeCustomSpeaker(name, nativeId) {
    const eng = this._engine(name);
    if (typeof eng.removeSpeaker === "function") return eng.removeSpeaker(nativeId);
    return false;
  }

  /**
   * @param {object} args
   * @param {string} args.engineName
   * @param {object} args.voice
   * @param {string} args.text
   * @param {function} [args.onProgress]  fraction 0..1
   * @param {function} [args.onChunk]     (charsDone, totalChars) per chunk
   * @param {function} [args.onSamples]   (samples, sample_rate, isLast) per chunk —
   *                                      fires the moment a chunk finishes
   *                                      generating, before the next one starts.
   *                                      Lets the caller pipe each chunk into
   *                                      a Web Audio queue for true streaming
   *                                      playback while later chunks are still
   *                                      cooking.
   * @param {{aborted: boolean}} [args.abortFlag]
   */
  async synthesize({ engineName, voice, text, onProgress, onChunk, onSamples, abortFlag }) {
    const eng = this._engine(engineName);
    const chunks = chunkText(text);
    const totalChars = chunks.reduce((s, c) => s + c.length, 0);
    const audioChunks = [];
    let sampleRate = 24000;
    let charsDone = 0;
    for (let i = 0; i < chunks.length; i++) {
      if (abortFlag?.aborted) break;
      onProgress?.(i / chunks.length);
      const result = await eng.generate({ voice, text: chunks[i] });
      audioChunks.push(result.samples);
      sampleRate = result.sample_rate;
      charsDone += chunks[i].length;
      const isLast = i === chunks.length - 1;
      onSamples?.(result.samples, sampleRate, isLast);
      onChunk?.(charsDone, totalChars);
    }
    onProgress?.(1);
    const merged = concatFloat32(audioChunks);
    return {
      samples: merged,
      sample_rate: sampleRate,
      blob: floatToWavBlob(merged, sampleRate),
      duration: merged.length / sampleRate,
    };
  }
}
