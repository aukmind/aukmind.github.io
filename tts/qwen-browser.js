// In-browser Qwen3-TTS — the entire pipeline running in this tab via
// onnxruntime-web. No server required after the initial download of the
// six artefacts produced by qwen-server/export_to_onnx.py.
//
// Per-step generation flow (mirrors `Qwen3TTSTalkerForConditionalGeneration
// .forward` in qwen_tts):
//
//   1. Talker.model(inputs_embeds) → last_hidden, cb0_logits
//   2. Argmax cb0_logits → next cb0 token
//   3. last_id_hidden = cb0_embedding[cb0]
//   4. Subtalker.generate (loop 15 times):
//        a. concat(running, last_id_hidden_for_step) → embed via cb_embeddings[step]
//        b. subtalker.model(...) → hidden
//        c. logits = hidden @ cb_heads[step]
//        d. argmax → cbN token, append to current step's codes
//   5. Embed all 16 codes through their tables, sum → next inputs_embeds
//   6. Append to running sequence; re-run talker (no KV cache means O(T²),
//      but the graph stays simple).
//   7. Stop on cb0 == codec_eos.
//   8. Codec.decode(all_codes) → 24 kHz audio.
//
// Honest status: this is a correct-looking first-pass implementation
// based on reading the qwen-tts source. End-to-end audio quality has
// not been verified against the PyTorch reference in this session
// (the ONNX exports themselves are verified at the per-call level).
// Expect to refine the prompt construction (language tag, voice prefix,
// speaker conditioning) and add missing terms (trailing_text_hidden,
// past_hidden windowing) before output matches the reference.

import * as ort from "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.18.0/dist/ort.min.js";
import { AutoTokenizer } from "https://esm.sh/@huggingface/transformers@3.8.1";
import { cachedFetchBytes, webgpuAvailable } from "./browser-utils.js";

ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.18.0/dist/";
// Quiet shape-op fallback warnings (see tts-handler.js for the rationale).
ort.env.logLevel = "error";

// ───────── helpers ─────────

/** Parse a safetensors blob into `{ name → { dtype, shape, data: Float32Array } }`.
 *  Only the f32 dtype is needed for our use; quantised exports would extend this. */
function parseSafetensors(buf) {
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const headerLen = Number(view.getBigUint64(0, true));
  const headerJson = new TextDecoder().decode(buf.subarray(8, 8 + headerLen));
  const header = JSON.parse(headerJson);
  const dataStart = 8 + headerLen;
  const out = {};
  for (const [name, meta] of Object.entries(header)) {
    if (name === "__metadata__") continue;
    if (meta.dtype !== "F32") {
      throw new Error(`safetensors: dtype ${meta.dtype} not supported (need F32)`);
    }
    const [a, b] = meta.data_offsets;
    const slice = buf.subarray(dataStart + a, dataStart + b);
    // F32 = 4 bytes; use a copy because the underlying ArrayBuffer's
    // alignment isn't guaranteed.
    const arr = new Float32Array(slice.byteLength / 4);
    new Uint8Array(arr.buffer).set(slice);
    out[name] = { dtype: meta.dtype, shape: meta.shape, data: arr };
  }
  return out;
}

function silu(x) { return x / (1 + Math.exp(-x)); }

/** Naïve f32 matmul `(M, K) @ (K, N) → (M, N)`. Hot enough that any future
 *  speedup should land here first (e.g. via gemm.js or SIMD). */
function matmul(a, M, K, b, N) {
  const out = new Float32Array(M * N);
  for (let m = 0; m < M; m++) {
    for (let k = 0; k < K; k++) {
      const aik = a[m * K + k];
      if (aik === 0) continue;
      const bRow = k * N;
      for (let n = 0; n < N; n++) out[m * N + n] += aik * b[bRow + n];
    }
  }
  return out;
}

function addBias(out, bias, M, N) {
  for (let m = 0; m < M; m++) {
    for (let n = 0; n < N; n++) out[m * N + n] += bias[n];
  }
  return out;
}

function applySilu(arr) {
  for (let i = 0; i < arr.length; i++) arr[i] = silu(arr[i]);
  return arr;
}

// ───────── backend ─────────

export class QwenBrowserBackend {
  constructor() {
    this.cfg = null;
    this.tokenizer = null;
    this.tokenizerId = null;
    this.device = null;

    this.talker = null;
    this.subtalker = null;
    this.codec = null;

    // Loose-typed tensor bundles from safetensors.
    this.codebookWeights = null;     // { cb0_embedding, cb_embeddings, cb_heads, text_projection.* }
    this.textEmbeddings = null;      // { text_embeddings: (vocab, text_hidden) }
  }

  isReady() {
    return !!(this.cfg && this.talker && this.subtalker && this.codec
              && this.codebookWeights && this.textEmbeddings && this.tokenizer);
  }
  get deviceLabel() { return this.device === "webgpu" ? "webgpu" : "wasm"; }

  async load({ talkerUrl, subtalkerUrl, codecUrl, codebookWeightsUrl,
               textEmbeddingsUrl, configUrl, tokenizerId, onProgress }) {
    if (!talkerUrl || !subtalkerUrl || !codecUrl || !codebookWeightsUrl
        || !textEmbeddingsUrl || !configUrl) {
      throw new Error("Browser ONNX needs all six artefact URLs (talker, subtalker, codec, codebook weights, text embeddings, config). See qwen-server/export_to_onnx.py.");
    }

    onProgress?.({ stage: "qwen_config", progress: 0 });
    this.cfg = JSON.parse(await (await fetch(configUrl)).text());
    onProgress?.({ stage: "qwen_config", progress: 1 });

    this.device = (await webgpuAvailable()) ? "webgpu" : "wasm";
    const sessionOpts = {
      executionProviders: this.device === "webgpu" ? ["webgpu", "wasm"] : ["wasm"],
      graphOptimizationLevel: "all",
    };

    // Pull all five heavy artefacts in parallel. Cache-API hits return
    // instantly on subsequent loads — only the first session pays the
    // ~3.9 GB download cost.
    const [talkerBytes, subBytes, codecBytes, cbBytes, teBytes] = await Promise.all([
      cachedFetchBytes(talkerUrl,          p => onProgress?.({ stage: "qwen_talker",   progress: p })),
      cachedFetchBytes(subtalkerUrl,       p => onProgress?.({ stage: "qwen_subtalker", progress: p })),
      cachedFetchBytes(codecUrl,           p => onProgress?.({ stage: "qwen_codec",    progress: p })),
      cachedFetchBytes(codebookWeightsUrl, p => onProgress?.({ stage: "qwen_codebook", progress: p })),
      cachedFetchBytes(textEmbeddingsUrl,  p => onProgress?.({ stage: "qwen_text_emb", progress: p })),
    ]);

    onProgress?.({ stage: "qwen_compile", progress: 0 });
    // Each InferenceSession.create is CPU-bound and independent of the
    // others — run them in parallel to shave seconds off cold start.
    [this.talker, this.subtalker, this.codec] = await Promise.all([
      ort.InferenceSession.create(talkerBytes, sessionOpts),
      ort.InferenceSession.create(subBytes,    sessionOpts),
      ort.InferenceSession.create(codecBytes,  sessionOpts),
    ]);
    this.codebookWeights = parseSafetensors(cbBytes);
    this.textEmbeddings  = parseSafetensors(teBytes);
    this._cacheCodebookViews();
    onProgress?.({ stage: "qwen_compile", progress: 1 });

    onProgress?.({ stage: "qwen_tokenizer", progress: 0 });
    this.tokenizerId = tokenizerId || "Qwen/Qwen3-0.6B";
    this.tokenizer = await AutoTokenizer.from_pretrained(this.tokenizerId, {
      progress_callback: p => onProgress?.({ stage: "qwen_tokenizer", progress: (p?.progress || 0) / 100 }),
    });
    onProgress?.({ stage: "qwen_tokenizer", progress: 1, backend: this.device === "webgpu" ? "gpu" : "cpu" });
  }

  // ───── per-component primitives ─────

  /** Cache shape constants and stride pointers for the codebook-weight
   *  bundles. Computed once in `load`, used by the per-step accessors. */
  _cacheCodebookViews() {
    const cb = this.codebookWeights;
    const embShape = cb.cb_embeddings.shape;       // (15, V_sub, H)
    const headShape = cb.cb_heads.shape;           // (15, H, V_sub)
    this._cbEmbStride  = embShape[1] * embShape[2];
    this._cbHeadStride = headShape[1] * headShape[2];
    this._subVocab     = embShape[1];
    this._cbHeadHidden = headShape[1];
    this._cbHeadVocab  = headShape[2];
    this._cb0Vocab     = cb.cb0_embedding.shape[0];
  }

  /** Embedding lookup for codebook 0 (talker vocab). */
  _embedCb0(token, H) {
    return this._embed(this.codebookWeights.cb0_embedding.data,
                       [token], this._cb0Vocab, H);
  }

  /** Embedding lookup for codebooks 1-15 at the given step. */
  _embedCbStep(step, token, H) {
    const data = this.codebookWeights.cb_embeddings.data;
    const off = step * this._cbEmbStride;
    return this._embed(data.subarray(off, off + this._cbEmbStride),
                       [token], this._subVocab, H);
  }

  /** lm_head slice for codebook step+1 — shape (H, V_sub). */
  _cbHeadSlice(step) {
    const data = this.codebookWeights.cb_heads.data;
    const off = step * this._cbHeadStride;
    return data.subarray(off, off + this._cbHeadStride);
  }

  /** Look up `(B*T,)` int64 ids in an `(V, D)` row-major table. */
  _embed(table, ids, V, D) {
    const out = new Float32Array(ids.length * D);
    for (let i = 0; i < ids.length; i++) {
      const id = Number(ids[i]);
      if (id < 0 || id >= V) continue;
      const src = id * D;
      out.set(table.subarray(src, src + D), i * D);
    }
    return out;
  }

  /** text_projection: silu(x @ W1 + b1) @ W2 + b2  — 2-layer MLP, in JS. */
  _textProjection(text_emb_flat, T) {
    const cb = this.codebookWeights;
    const W1 = cb["text_projection.fc1.w"].data;   // (2048, 2048)
    const b1 = cb["text_projection.fc1.b"].data;
    const W2 = cb["text_projection.fc2.w"].data;   // (1024, 2048)
    const b2 = cb["text_projection.fc2.b"].data;

    // PyTorch nn.Linear stores W as (out, in); for `x @ W^T` we want W's
    // logical (in, out) layout, which is just iterating `out` in the inner
    // loop. The matmul helper expects `(M, K) @ (K, N)`, so transpose W
    // mentally: K = in (2048), N = out.
    // Step 1: (T, 2048) @ W1^T → (T, 2048). Then SiLU. Then @ W2^T → (T, 1024).
    const intermediate = matmulXWt(text_emb_flat, T, 2048, W1, 2048);
    addBias(intermediate, b1, T, 2048);
    applySilu(intermediate);
    const out = matmulXWt(intermediate, T, 2048, W2, 1024);
    addBias(out, b2, T, 1024);
    return out;
  }

  // ───── generation ─────

  /**
   * @param {object} args
   * @param {string} args.text
   * @param {string} [args.voice]      — voice tag prepended to the prompt
   * @param {string} [args.language]   — "english" / "chinese" / etc.
   * @param {number} [args.maxFrames]
   * @returns {Promise<{ samples: Float32Array, sample_rate: number }>}
   */
  async generate({ text, voice, language = "english", maxFrames = 600 }) {
    if (!this.isReady()) throw new Error("Qwen browser backend not loaded");
    const cfg = this.cfg;
    const langId = cfg.codec_language_id?.[language] ?? cfg.codec_language_id?.english;

    // 1. Tokenize and embed text. Voice/language-tag prefixes are passed
    //    through verbatim — the actual chat template Qwen3-TTS uses lives
    //    in `qwen_tts.inference.qwen3_tts_model` and is more involved; this
    //    is the minimum that keeps generation deterministic.
    const prompt = `${voice ? `<|voice:${voice}|>` : ""}${text}`;
    const { input_ids } = await this.tokenizer(prompt, { add_special_tokens: false });
    const ids = Array.from(input_ids.data, x => Number(x));

    const textEmb = this.textEmbeddings.text_embeddings.data;       // (V, 2048)
    const textVocab = this.textEmbeddings.text_embeddings.shape[0];
    const textHidden = this.textEmbeddings.text_embeddings.shape[1];
    const text_embedded = this._embed(textEmb, ids, textVocab, textHidden);

    // 2. Project to talker hidden dim.
    const projected = this._textProjection(text_embedded, ids.length);
    const H = cfg.hidden_size;

    // 3. Initial inputs_embeds = projected text + lang/bos markers (embedded
    //    via cb0_embedding since they live in the codec vocab).
    const initMarkers = [cfg.tts_bos_token_id - cfg.text_vocab_size, langId, cfg.codec_bos_id]
        .filter(x => x >= 0 && x < this._cb0Vocab);
    const markerEmb = this._embed(this.codebookWeights.cb0_embedding.data,
                                  initMarkers, this._cb0Vocab, H);

    let running = new Float32Array(projected.length + markerEmb.length);
    running.set(projected, 0);
    running.set(markerEmb, projected.length);
    let runningT = ids.length + initMarkers.length;

    // 4. Generation loop.
    const codes = Array.from({ length: cfg.num_code_groups }, () => []);
    for (let frame = 0; frame < maxFrames; frame++) {
      // 4a. Talker on full running context.
      const talkerInput = new ort.Tensor("float32", running, [1, runningT, H]);
      const tOut = await this.talker.run({ inputs_embeds: talkerInput });
      const lastHidden = tOut.last_hidden;                          // (1, T, H)
      const cb0Logits  = tOut.cb0_logits;                           // (1, T, V0)
      const V0 = cb0Logits.dims[2];
      const cb0Step = argmaxLast(cb0Logits.data, runningT, V0);
      if (cb0Step === cfg.codec_eos_token_id) break;
      codes[0].push(cb0Step);

      // 4b. Subtalker — predicts codebooks 1-15 autoregressively.
      const lastH = lastHidden.data.subarray((runningT - 1) * H, runningT * H);
      const cbStep = [cb0Step];
      const cbStepCount = cfg.num_code_groups - 1;
      // Preallocate the subtalker context buffer for all 16 positions.
      const subBuf = new Float32Array((cbStepCount + 1) * H);
      subBuf.set(lastH, 0);
      let subT = 1;
      for (let step = 0; step < cbStepCount; step++) {
        const lastEmb = this._embedCbStep(step, cbStep[step], H);
        subBuf.set(lastEmb, subT * H);
        subT += 1;

        const subView = subBuf.subarray(0, subT * H);
        const sOut = await this.subtalker.run({
          inputs_embeds: new ort.Tensor("float32", subView, [1, subT, H]),
        });
        const subHidden = sOut.hidden;
        const lastSubH = subHidden.data.subarray((subT - 1) * H, subT * H);
        const stepLogits = matmul(lastSubH, 1, H, this._cbHeadSlice(step), this._cbHeadVocab);
        const tok = argmax(stepLogits, 0, this._cbHeadVocab);
        cbStep.push(tok);
        codes[step + 1].push(tok);
      }

      // 4c. Build next inputs_embeds: sum of all 16 codebook embeddings.
      const sumEmb = new Float32Array(H);
      const e0 = this._embedCb0(cbStep[0], H);
      for (let i = 0; i < H; i++) sumEmb[i] += e0[i];
      for (let step = 0; step < cbStepCount; step++) {
        const e = this._embedCbStep(step, cbStep[step + 1], H);
        for (let i = 0; i < H; i++) sumEmb[i] += e[i];
      }

      // Append next inputs_embeds to running sequence.
      const newRunning = new Float32Array(running.length + H);
      newRunning.set(running, 0);
      newRunning.set(sumEmb, running.length);
      running = newRunning;
      runningT += 1;
    }

    // 5. Codec.
    const T = codes[0].length;
    if (T === 0) throw new Error("LM produced no codes. Check prompt or model URLs");
    const flat = new BigInt64Array(T * cfg.num_code_groups);
    for (let t = 0; t < T; t++) {
      for (let g = 0; g < cfg.num_code_groups; g++) {
        flat[t * cfg.num_code_groups + g] = BigInt(codes[g][t] ?? 0);
      }
    }
    const codesTensor = new ort.Tensor("int64", flat, [1, T, cfg.num_code_groups]);
    const audioOut = await this.codec.run({ codes: codesTensor });
    const samples = new Float32Array(audioOut.audio.data);
    return { samples, sample_rate: cfg.sample_rate || 24000 };
  }
}

// ───── small numeric helpers ─────

/** `(M, K) @ W^T` where W is row-major (out, in) i.e. (N, K). */
function matmulXWt(x, M, K, W, N) {
  const out = new Float32Array(M * N);
  for (let m = 0; m < M; m++) {
    for (let n = 0; n < N; n++) {
      let acc = 0;
      const xRow = m * K;
      const wRow = n * K;
      for (let k = 0; k < K; k++) acc += x[xRow + k] * W[wRow + k];
      out[m * N + n] = acc;
    }
  }
  return out;
}

function argmax(arr, off, n) {
  let best = 0, bestV = -Infinity;
  for (let i = 0; i < n; i++) {
    const v = arr[off + i];
    if (v > bestV) { bestV = v; best = i; }
  }
  return best;
}

function argmaxLast(data, T, V) {
  return argmax(data, (T - 1) * V, V);
}
