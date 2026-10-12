import { aukmindTheme } from "/shared/theme.js";
import { TTSHandler } from "./tts-handler.js";
import { cachedSizeBytes, clearCache, clearAllCaches } from "./browser-utils.js";

const { createApp, defineComponent, ref, reactive, computed, watch, onMounted, onBeforeUnmount } = Vue;
const naive = window.naive;

const STATUS_TAG = {
  ready:   { type: "success", text: "Ready" },
  loading: { type: "info",    text: "Loading…" },
  error:   { type: "error",   text: "Failed to load" },
  idle:    { type: "default", text: "Idle" },
};

// Single source-of-truth for the cloning pipeline stages: keys, display
// labels, and aliases that map progress events to stage rows.
const CLONE_STAGES = [
  { key: "decode",  label: "Decode + resample audio",        aliases: [] },
  { key: "weights", label: "Fetch encoder weights",          aliases: ["gpu_init"] },
  { key: "whisper", label: "Load Whisper for alignment",     aliases: [] },
  { key: "align",   label: "Align words to audio",           aliases: [] },
  { key: "encode",  label: "Encode audio with WavTokenizer", aliases: [] },
];
const STAGE_KEY_BY_ALIAS = (() => {
  const m = new Map();
  for (const s of CLONE_STAGES) { m.set(s.key, s.key); for (const a of s.aliases) m.set(a, s.key); }
  return m;
})();

// Shared mapping from a wgpu device label / cloning backend tag to a Naive
// UI tag descriptor — saves repeating the type/text branch.
function backendTag(value, prefix = "") {
  if (!value) return null;
  const map = {
    webgpu: { text: "WebGPU",     type: "success" },
    gpu:    { text: "WebGPU",     type: "success" },
    wasm:   { text: "WASM (CPU)", type: "info" },
    cpu:    { text: "WASM (CPU)", type: "info" },
    local:  { text: "Local",      type: "success" },
    cloud:  { text: "Cloud",      type: "warning" },
  };
  const entry = map[value] || { text: value, type: "default" };
  return { text: prefix + entry.text, type: entry.type };
}

const LS = {
  TEXT:           "tts.text",
  ENGINE:         "tts.engine",
  VOICE:          "tts.selectedVoiceId",
  ENC_W_URL:      "tts.encoderWeightsUrl",
  ENC_C_URL:      "tts.encoderConfigUrl",
  QWEN_MODE:      "tts.qwenMode",
  QWEN_KEY:       "tts.qwenApiKey",
  QWEN_EP:        "tts.qwenEndpoint",
  QWEN_MODEL:     "tts.qwenModel",
  QWEN_LM_URL:    "tts.qwenLmUrl",
  QWEN_CODEC_URL: "tts.qwenCodecUrl",
  QWEN_CFG_URL:   "tts.qwenConfigUrl",
  QWEN_TOK_ID:    "tts.qwenTokenizerId",
};

// Debounced setter so we don't write to localStorage on every keystroke.
function debounceSetter(key) {
  let timer;
  return (v) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try { localStorage.setItem(key, v ?? ""); } catch {}
    }, 250);
  };
}

const TtsApp = defineComponent({
  template: "#tts-app-template",
  setup() {
    const message = naive.useMessage();
    const handler = new TTSHandler();

    const engine = ref(localStorage.getItem(LS.ENGINE) || "kokoro");
    const engineStatus = ref("idle");
    const device = ref("");
    const text = ref(localStorage.getItem(LS.TEXT) || "");
    const voices = ref([]);
    const selectedVoiceId = ref(localStorage.getItem(LS.VOICE) || null);
    const generating = ref(false);
    const progress = ref(0);
    const outputs = ref([]);

    const cloneFileList = ref([]);
    const audioCloneFileList = ref([]);
    const cloneTab = ref("audio");
    const pendingAudio = ref(null);
    const cloneTranscript = ref("");
    const cloneName = ref("");
    const cloning = ref(false);
    const cloneStages = ref([]);                 // stream of {key, label, status, percent}
    const encoderWeightsUrl = ref(localStorage.getItem(LS.ENC_W_URL) || "");
    const encoderConfigUrl = ref(localStorage.getItem(LS.ENC_C_URL) || "");

    // Qwen settings — three deployment modes share the same engine.
    const qwenMode = ref(localStorage.getItem(LS.QWEN_MODE) || "http");   // "http" | "browser"
    const qwenApiKey = ref(localStorage.getItem(LS.QWEN_KEY) || "");
    const qwenEndpoint = ref(localStorage.getItem(LS.QWEN_EP) || "");
    const qwenModel = ref(localStorage.getItem(LS.QWEN_MODEL) || "");
    const qwenBaseUrl = ref(localStorage.getItem(LS.QWEN_LM_URL) || "");   // re-uses LS slot for compatibility
    const qwenTokenizerId = ref(localStorage.getItem(LS.QWEN_TOK_ID) || "");
    const qwenCustomVoiceId = ref("");
    const qwenCustomVoiceName = ref("");

    const pushQwenConfig = () => {
      handler.configureQwen({
        mode: qwenMode.value,
        apiKey: qwenApiKey.value.trim() || null,
        endpoint: qwenEndpoint.value.trim() || undefined,
        model: qwenModel.value.trim() || undefined,
        baseUrl: qwenBaseUrl.value.trim(),
        tokenizerId: qwenTokenizerId.value.trim(),
      });
    };
    pushQwenConfig();
    // True when the user has entered enough config that load() can succeed.
    const qwenConfigured = computed(() => {
      if (qwenMode.value === "browser") return !!qwenBaseUrl.value.trim();
      // HTTP mode — local endpoints don't need a key, anything else does.
      const ep = qwenEndpoint.value.trim();
      const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\]|10\.|192\.168\.|172\.(1[6-9]|2\d|3[0-1])\.)/i.test(ep);
      return isLocal || !!qwenApiKey.value.trim();
    });
    watch([qwenMode, qwenApiKey, qwenEndpoint, qwenModel,
           qwenBaseUrl, qwenTokenizerId], () => {
      pushQwenConfig();
      // Don't reload on every keystroke; only retrigger when the engine is
      // active AND the user has supplied enough config.
      if (engine.value !== "qwen") return;
      if (qwenConfigured.value) {
        ensureEngineLoaded();
        refreshVoices();
      } else {
        // Roll the status back to "idle" so we don't sit on a stale
        // "Failed to load" while the user is mid-typing.
        engineStatus.value = "idle";
      }
    });

    // Cold-load progress: keyed by task id. `reactive` lets Vue track per-key
    // mutations so high-frequency progress events (transformers.js fires 10s/s
    // per file) only invalidate the rows that actually changed.
    const loadingTasks = reactive({});
    const setTask = (id, label, percent, status = "loading") => {
      loadingTasks[id] = { id, label, percent, status };
    };
    const finishTask = (id) => {
      const t = loadingTasks[id];
      if (!t) return;
      loadingTasks[id] = { ...t, percent: 100, status: "done" };
      setTimeout(() => { delete loadingTasks[id]; }, 1200);
    };

    const taskList = computed(() =>
      Object.values(loadingTasks).sort((a, b) => a.id.localeCompare(b.id))
    );
    const isBusy = computed(() => Object.keys(loadingTasks).length > 0);

    // transformers.js progress hooks fire { status, file, progress, loaded, total }.
    // Group by file so each downloaded blob gets its own row.
    const makeEngineProgressHandler = (engineKey) => (p) => {
      if (!p || typeof p !== "object") return;
      const file = p.file || engineKey;
      const id = `${engineKey}:${file}`;
      const label = file === engineKey
        ? `Loading ${engineKey}`
        : `${engineKey} · ${file}`;
      if (p.status === "initiate" || p.status === "download") {
        setTask(id, label, 0);
      } else if (p.status === "progress") {
        setTask(id, label, Math.min(99, Math.round(p.progress || 0)));
      } else if (p.status === "done" || p.status === "ready") {
        finishTask(id);
      }
    };

    // ───────── Persistence (debounced) ─────────
    watch(text, debounceSetter(LS.TEXT));
    watch(engine, (v) => localStorage.setItem(LS.ENGINE, v));
    watch(selectedVoiceId, (v) => { if (v) localStorage.setItem(LS.VOICE, v); });
    watch(encoderWeightsUrl, debounceSetter(LS.ENC_W_URL));
    watch(encoderConfigUrl,  debounceSetter(LS.ENC_C_URL));
    watch(qwenMode,        (v) => localStorage.setItem(LS.QWEN_MODE, v));
    watch(qwenApiKey,      debounceSetter(LS.QWEN_KEY));
    watch(qwenEndpoint,    debounceSetter(LS.QWEN_EP));
    watch(qwenModel,       debounceSetter(LS.QWEN_MODEL));
    watch(qwenBaseUrl,     debounceSetter(LS.QWEN_LM_URL));
    watch(qwenTokenizerId, debounceSetter(LS.QWEN_TOK_ID));

    const addQwenCustomVoice = () => {
      const id = qwenCustomVoiceId.value.trim();
      const name = qwenCustomVoiceName.value.trim() || id;
      if (!id) return;
      handler.addQwenCustomVoice({ id, name });
      qwenCustomVoiceId.value = "";
      qwenCustomVoiceName.value = "";
      refreshVoices();
      selectedVoiceId.value = `qwen-custom:${id}`;
    };

    // ───────── Generation cancellation ─────────
    let abortFlag = { aborted: false };
    const cancelGenerate = () => { abortFlag.aborted = true; };

    // ───────── Engine lifecycle ─────────
    const selectedVoice = computed(() =>
      voices.value.find(v => v.id === selectedVoiceId.value) || null
    );
    const statusTag = computed(() => STATUS_TAG[engineStatus.value] || STATUS_TAG.idle);

    const refreshVoices = () => {
      voices.value = handler.listVoices(engine.value);
      if (!voices.value.find(v => v.id === selectedVoiceId.value)) {
        selectedVoiceId.value = voices.value[0]?.id || null;
      }
    };

    const ensureEngineLoaded = async () => {
      const name = engine.value;
      if (handler.isEngineReady(name)) {
        device.value = handler.getDevice(name);
        engineStatus.value = "ready";
        refreshVoices();
        refreshCacheStats();
        return;
      }
      if (name === "qwen" && !qwenConfigured.value) {
        engineStatus.value = "idle";
        return;
      }
      engineStatus.value = "loading";
      progress.value = 0;
      // Synthetic task in the cold-load panel so the user sees the engine
      // is loading even when the underlying package (OuteTTS) doesn't
      // surface download-progress callbacks. transformers.js-emitting
      // engines (Kokoro) will *also* push their own granular file rows
      // through `makeEngineProgressHandler`; this task is a fallback that
      // covers the silent path.
      const fallbackTaskId = `engine:${name}`;
      const fallbackLabel = {
        kokoro: "Loading Kokoro 82M (~80 MB)…",
        outetts: "Loading OuteTTS 500M (~500 MB, first time only, then cached)…",
        qwen: "Loading Qwen3-TTS…",
      }[name] || `Loading ${name}…`;
      setTask(fallbackTaskId, fallbackLabel, 0);
      try {
        await handler.loadEngine(name, makeEngineProgressHandler(name));
        device.value = handler.getDevice(name);
        engineStatus.value = "ready";
        refreshVoices();
        refreshCacheStats();
        finishTask(fallbackTaskId);
      } catch (err) {
        // Spell the error out in case it's a primitive (onnxruntime-web
        // sometimes throws a raw WASM memory pointer as a Number). Logging
        // the bare value alone produces unhelpful "4023965016" lines.
        const detail = err instanceof Error
          ? `${err.name}: ${err.message}`
          : `${typeof err}: ${String(err)}`;
        console.error(`[${name}] load failed`, detail, err);
        engineStatus.value = "error";
        message.error(`Failed to load ${name}: ${detail}`);
        loadingTasks[fallbackTaskId] = {
          id: fallbackTaskId, label: `${fallbackLabel} failed: ${detail}`,
          percent: 0, status: "error",
        };
        setTimeout(() => { delete loadingTasks[fallbackTaskId]; }, 8000);
      } finally {
        progress.value = 0;
      }
    };

    // ───────── Voice cloning ─────────
    const handleAudioPick = ({ fileList }) => {
      const item = fileList[fileList.length - 1];
      audioCloneFileList.value = [];
      if (!item?.file) return;
      pendingAudio.value = item.file;
      if (!cloneName.value) cloneName.value = item.file.name.replace(/\.[^.]+$/, "");
    };

    const transcribing = ref(false);
    const autoTranscribe = async () => {
      if (!pendingAudio.value || transcribing.value) return;
      transcribing.value = true;
      try {
        const text = await handler.transcribeAudio({
          audioBlob: pendingAudio.value,
          onProgress: ({ stage, progress: pct }) => {
            const key = `transcribe:${stage}`;
            const pretty = { decode: "Decode reference clip",
                             whisper: "Load Whisper",
                             transcribe: "Transcribe" }[stage] || stage;
            const status = pct >= 1 ? "done" : "loading";
            setTask(key, pretty, Math.round((pct || 0) * 100), status);
            if (status === "done") finishTask(key);
          },
        });
        cloneTranscript.value = text;
        if (!text) message.warning("Whisper produced no text. Try a clearer clip");
        else      message.success("Transcribed. Review and edit before building");
      } catch (err) {
        console.error(err);
        message.error(`Transcribe failed: ${err.message}`);
      } finally {
        transcribing.value = false;
      }
    };

    const setCloneStage = (key, label, status, percent) => {
      const arr = [...cloneStages.value];
      const idx = arr.findIndex(s => s.key === key);
      const next = { key, label, status, percent };
      if (idx >= 0) arr[idx] = next; else arr.push(next);
      cloneStages.value = arr;
    };

    const cloneFromAudio = async () => {
      if (!pendingAudio.value || !cloneTranscript.value.trim() || !cloneName.value.trim()) return;
      cloning.value = true;
      cloneStages.value = CLONE_STAGES.map(s => ({
        key: s.key, label: s.label, status: "pending", percent: 0,
      }));
      try {
        const id = `c_${Date.now()}`;
        await handler.createSpeakerFromAudio({
          id,
          name: cloneName.value.trim(),
          audioBlob: pendingAudio.value,
          transcript: cloneTranscript.value.trim(),
          weightsUrl: encoderWeightsUrl.value.trim(),
          configUrl: encoderConfigUrl.value.trim(),
          onProgress: ({ stage, progress: pct, backend }) => {
            const key = STAGE_KEY_BY_ALIAS.get(stage) || stage;
            const def = CLONE_STAGES.find(s => s.key === key);
            const status = pct >= 1 ? "done" : "active";
            setCloneStage(key, def?.label || stage, status, Math.round((pct || 0) * 100));
            if (backend) cloneBackend.value = backend;
          },
        });
        message.success(`Cloned voice "${cloneName.value}"`);
        pendingAudio.value = null;
        cloneTranscript.value = "";
        cloneName.value = "";
        refreshVoices();
        selectedVoiceId.value = `outetts-custom:${id}`;
      } catch (err) {
        console.error(err);
        message.error(`Cloning failed: ${err.message}`);
      } finally {
        cloning.value = false;
        // Keep stages visible briefly so user sees the final state.
        setTimeout(() => { cloneStages.value = []; }, 2000);
      }
    };

    const cloneBackend = ref(null);             // "gpu" or "cpu" — set when first cloning completes

    const handleVoiceUpload = async ({ fileList }) => {
      const item = fileList[fileList.length - 1];
      cloneFileList.value = [];
      if (!item?.file) return;
      try {
        const json = JSON.parse(await item.file.text());
        const nativeId = `c_${Date.now()}`;
        const name = item.file.name.replace(/\.json$/i, "");
        handler.addSpeakerFromJSON("outetts", { id: nativeId, name, json });
        message.success(`Loaded cloned voice "${name}"`);
        refreshVoices();
        selectedVoiceId.value = `outetts-custom:${nativeId}`;
      } catch (err) {
        console.error(err);
        message.error(`Failed to load speaker JSON: ${err.message}`);
      }
    };

    const removeVoice = (voice) => {
      handler.removeCustomSpeaker(engine.value, voice.nativeId);
      refreshVoices();
    };

    // ───────── Generation ─────────
    const genTotalChars = ref(0);
    const genDoneChars = ref(0);
    const genStartTime = ref(0);
    const genEtaSeconds = computed(() => {
      if (!generating.value || genDoneChars.value === 0) return null;
      const elapsed = (performance.now() - genStartTime.value) / 1000;
      const rate = genDoneChars.value / elapsed;          // chars/s
      const remaining = genTotalChars.value - genDoneChars.value;
      if (rate <= 0) return null;
      return Math.max(0, Math.round(remaining / rate));
    });

    /**
     * Generate audio.
     *   "live"     — chunk-by-chunk streaming: each text chunk plays the
     *                instant the engine finishes generating it, while the
     *                next chunk is still being computed. Output card stays
     *                in the history (without autoplay — already played live).
     *   "download" — generate fully, save as WAV, also add to history.
     */
    const handleGenerate = async (mode = "live") => {
      if (!text.value.trim() || !selectedVoice.value) return;
      generating.value = true;
      progress.value = 0;
      genTotalChars.value = text.value.trim().length;
      genDoneChars.value = 0;
      genStartTime.value = performance.now();
      abortFlag = { aborted: false };
      const myAbort = abortFlag;

      // Web Audio scheduling state for live mode. The ctx is created
      // inside the click handler so the user-gesture autoplay rule is
      // satisfied; nextStart anchors each chunk's start time to the
      // previous chunk's end so playback is gapless when the engine
      // keeps up, or pauses naturally when it doesn't.
      let liveCtx = null;
      let nextStart = 0;
      const liveSources = [];      // for cancel cleanup
      if (mode === "live") {
        try {
          liveCtx = new (window.AudioContext || window.webkitAudioContext)();
          if (liveCtx.state === "suspended") await liveCtx.resume();
          nextStart = liveCtx.currentTime + 0.05;
        } catch (e) { console.warn("AudioContext unavailable", e); }
      }

      try {
        const result = await handler.synthesize({
          engineName: engine.value,
          voice: selectedVoice.value,
          text: text.value,
          abortFlag: myAbort,
          onProgress: (p) => { progress.value = p; },
          onChunk: (chunkChars, totalChars) => {
            genDoneChars.value = chunkChars;
            genTotalChars.value = totalChars;
          },
          onSamples: liveCtx ? (samples, sampleRate /*, isLast */) => {
            if (myAbort.aborted) return;
            const buf = liveCtx.createBuffer(1, samples.length, sampleRate);
            buf.getChannelData(0).set(samples);
            const src = liveCtx.createBufferSource();
            src.buffer = buf;
            src.connect(liveCtx.destination);
            const startAt = Math.max(nextStart, liveCtx.currentTime + 0.01);
            src.start(startAt);
            nextStart = startAt + buf.duration;
            liveSources.push(src);
          } : undefined,
        });

        if (myAbort.aborted) {
          message.info("Generation cancelled");
          return;
        }

        const elapsed = Math.round(performance.now() - genStartTime.value);
        const out = {
          id: `o_${Date.now()}`,
          url: URL.createObjectURL(result.blob),
          blob: result.blob,
          samples: result.samples,
          sampleRate: result.sample_rate,
          waveform: waveformPath(result.samples),
          name: `tts_${outputs.value.length + 1}.wav`,
          voice: selectedVoice.value.label,
          duration: result.duration.toFixed(1),
          elapsed,
          // Live mode already played via Web Audio — don't auto-replay
          // through the <audio> element. User can scrub manually.
          autoplay: false,
        };
        outputs.value.unshift(out);
        if (mode === "download") saveAs(result.blob, out.name);
        message.success(`Generated ${result.duration.toFixed(1)}s of audio in ${elapsed} ms`);
      } catch (err) {
        console.error(err);
        if (myAbort.aborted) message.info("Generation cancelled");
        else                  message.error(`Generation failed: ${err.message}`);
      } finally {
        // Stop any in-flight live sources if the user cancelled mid-stream.
        if (myAbort.aborted) {
          for (const s of liveSources) { try { s.stop(); } catch {} }
        }
        // Schedule liveCtx close after the last chunk has finished playing
        // (otherwise we'd cut off the tail).
        if (liveCtx) {
          const tailDelay = Math.max(0, (nextStart - liveCtx.currentTime) * 1000) + 250;
          setTimeout(() => liveCtx.close().catch(() => {}), tailDelay);
        }
        generating.value = false;
        progress.value = 0;
        genDoneChars.value = 0;
        genTotalChars.value = 0;
      }
    };

    const downloadOutput = (out) => saveAs(out.blob, out.name);
    const removeOutput = (idx) => {
      const [removed] = outputs.value.splice(idx, 1);
      if (removed) URL.revokeObjectURL(removed.url);
    };

    // ───────── Waveform rendering ─────────
    // SVG path "d" attribute computed from min/max of audio samples binned
    // into N buckets. Lighter than Canvas, scales for free, no high-dpi math.
    const waveformPath = (samples, buckets = 200) => {
      if (!samples || samples.length === 0) return "";
      const step = Math.max(1, Math.floor(samples.length / buckets));
      const w = 1000;          // viewBox width
      const h = 100;
      const mid = h / 2;
      const cmds = [];
      for (let b = 0; b < buckets; b++) {
        let mn = 0, mx = 0;
        const start = b * step;
        const end = Math.min(samples.length, start + step);
        for (let i = start; i < end; i++) {
          const v = samples[i];
          if (v < mn) mn = v;
          if (v > mx) mx = v;
        }
        const x = (b / (buckets - 1)) * w;
        cmds.push(`M${x.toFixed(1)},${(mid + mn * mid).toFixed(1)} L${x.toFixed(1)},${(mid + mx * mid).toFixed(1)}`);
      }
      return cmds.join(" ");
    };

    // ───────── Backend label ─────────
    const backendLabel = computed(() => backendTag(device.value));
    const cloneBackendLabel = computed(() => backendTag(cloneBackend.value, "Clone: "));

    // ───────── Lifecycle ─────────
    watch(engine, () => {
      voices.value = [];
      selectedVoiceId.value = null;
      ensureEngineLoaded();
    });

    // ───── Cache-API stats + clear ─────
    const cachedMB = ref(0);
    const refreshCacheStats = async () => {
      cachedMB.value = Math.round((await cachedSizeBytes()) / (1024 * 1024));
    };
    const clearModelCache = async () => {
      // Nuke every cache the page has accumulated — ours, transformers.js's,
      // kokoro-js's voice cache, anything else. Engines that are already
      // loaded keep working (in-memory state isn't touched), but the next
      // engine load will re-download from scratch.
      const cleared = await clearAllCaches();
      if (cleared > 0) message.success(`Cleared ${cleared} cache${cleared === 1 ? "" : "s"}. Reload to re-download`);
      else             message.info("No cache to clear");
      cachedMB.value = 0;
    };

    onMounted(async () => {
      ensureEngineLoaded();
      refreshCacheStats();
    });
    onBeforeUnmount(() => {
      for (const o of outputs.value) URL.revokeObjectURL(o.url);
    });

    return {
      engine, engineStatus, statusTag, device, backendLabel, cloneBackendLabel,
      text, voices, selectedVoiceId,
      generating, progress, outputs,
      cloneFileList, audioCloneFileList, cloneTab,
      pendingAudio, cloneTranscript, cloneName, cloning, cloneStages,
      transcribing, autoTranscribe,
      cachedMB, refreshCacheStats, clearModelCache,
      encoderWeightsUrl, encoderConfigUrl,
      qwenMode, qwenApiKey, qwenEndpoint, qwenModel,
      qwenBaseUrl, qwenTokenizerId,
      qwenCustomVoiceId, qwenCustomVoiceName, addQwenCustomVoice,
      loadingTasks, taskList, isBusy,
      genTotalChars, genDoneChars, genEtaSeconds,
      handleVoiceUpload, removeVoice,
      handleAudioPick, cloneFromAudio,
      handleGenerate, cancelGenerate, downloadOutput, removeOutput,
      waveformPath,
    };
  },
});

const app = createApp({
  setup() { return { theme: aukmindTheme }; },
});

app.use(naive);
app.component("tts-app", TtsApp);
app.mount("#app");
