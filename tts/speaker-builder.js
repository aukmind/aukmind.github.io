// In-browser speaker-JSON builder.
//
// Pipeline:
//   1. Decode the uploaded audio file → resample to 24 kHz mono via Web Audio.
//   2. Run Whisper word-timestamps via transformers.js (16 kHz mono is fine
//      for alignment — we only use the timestamps, not the codes).
//   3. Hand the 24 kHz samples to the Rust WASM encoder → integer codes at
//      75 codes/s.
//   4. Slice codes per word using the Whisper timestamps → assemble the
//      OuteTTS-compatible speaker JSON.
//
// The WASM module is loaded lazily; nothing is fetched until the user
// actually clicks "Clone from audio".

import init, { WasmModel, WasmGpuModel } from "./pkg/speaker_builder.js";
import { cachedFetchBytes, webgpuAvailable } from "./browser-utils.js";

const WHISPER_MODEL = "onnx-community/whisper-tiny";
const ENCODER_TARGET_SR = 24000;
const WHISPER_TARGET_SR = 16000;
const GPU_MAX_T = 1024;            // ~13.6s of audio at 320-hop / 24 kHz

let wasmInitPromise = null;
let model = null;
let modelKey = null;
let modelKind = null;              // "gpu" | "cpu"
let whisperPipelinePromise = null;

/**
 * Configure the URLs for the WavTokenizer encoder weights + config.
 * Call once before `createSpeaker`. Both URLs are fetched lazily.
 */
export function configureModel({ weightsUrl, configUrl }) {
  modelKey = `${weightsUrl}|${configUrl}`;
  // Don't load yet — defer until first createSpeaker call.
  model = null;
  return { weightsUrl, configUrl };
}

async function ensureWasm() {
  if (!wasmInitPromise) wasmInitPromise = init();
  return wasmInitPromise;
}

async function ensureModel({ weightsUrl, configUrl, onProgress, preferGpu = true }) {
  await ensureWasm();
  if (model && modelKey === `${weightsUrl}|${configUrl}`) return model;

  onProgress?.({ stage: "weights", progress: 0 });
  const [weightsBytes, configText] = await Promise.all([
    cachedFetchBytes(weightsUrl, p => onProgress?.({ stage: "weights", progress: p })),
    fetch(configUrl).then(r => r.text()),
  ]);

  const useGpu = preferGpu && await webgpuAvailable();
  if (useGpu) {
    onProgress?.({ stage: "gpu_init", progress: 0 });
    model = await WasmGpuModel.new(weightsBytes, configText, GPU_MAX_T);
    modelKind = "gpu";
    onProgress?.({ stage: "gpu_init", progress: 1, backend: "gpu" });
  } else {
    model = new WasmModel(weightsBytes, configText);
    modelKind = "cpu";
    onProgress?.({ stage: "weights", progress: 1, backend: "cpu" });
  }
  modelKey = `${weightsUrl}|${configUrl}`;
  return model;
}

async function modelEncode(audioSamples) {
  if (modelKind === "gpu") {
    return await model.encode(audioSamples);
  }
  return model.encode_to_array(audioSamples);
}

function modelFramesPerSecond(sampleRate, hopLength) {
  return sampleRate / hopLength;
}

export function activeBackend() { return modelKind; }

/**
 * Transcribe an audio blob to text via the same Whisper-tiny pipeline
 * `createSpeaker` uses for word alignment. Lets the cloning UI auto-fill
 * the transcript field instead of asking users to type it by hand.
 *
 * @param {object} args
 * @param {Blob}    args.audioBlob
 * @param {string} [args.language="english"]
 * @param {function} [args.onProgress]   ({ stage, progress }) → void
 * @returns {Promise<string>}
 */
export async function transcribeAudio({ audioBlob, language = "english", onProgress }) {
  onProgress?.({ stage: "decode", progress: 0 });
  const samples = await decodeAndResample(audioBlob, WHISPER_TARGET_SR);
  onProgress?.({ stage: "decode", progress: 1 });

  onProgress?.({ stage: "whisper", progress: 0 });
  const transcriber = await ensureWhisper(onProgress);
  onProgress?.({ stage: "whisper", progress: 1 });

  onProgress?.({ stage: "transcribe", progress: 0 });
  const result = await transcriber(samples, { language, task: "transcribe" });
  onProgress?.({ stage: "transcribe", progress: 1 });
  return (result?.text || "").trim();
}

async function ensureWhisper(onProgress) {
  if (whisperPipelinePromise) return whisperPipelinePromise;
  whisperPipelinePromise = (async () => {
    const { pipeline } = await import("https://esm.sh/@huggingface/transformers@3.8.1");
    return pipeline("automatic-speech-recognition", WHISPER_MODEL, {
      progress_callback: p => {
        if (typeof p?.progress === "number") onProgress?.({ stage: "whisper", progress: p.progress / 100 });
      },
    });
  })();
  return whisperPipelinePromise;
}

/**
 * Decode an audio File/Blob and resample to a target sample rate.
 * Uses OfflineAudioContext so the result is deterministic and fast.
 */
async function decodeAndResample(blob, targetSr) {
  const buf = await blob.arrayBuffer();
  const tmpCtx = new (window.AudioContext || window.webkitAudioContext)();
  const decoded = await tmpCtx.decodeAudioData(buf.slice(0));
  await tmpCtx.close();

  const targetLen = Math.round(decoded.duration * targetSr);
  const off = new OfflineAudioContext(1, targetLen, targetSr);
  const src = off.createBufferSource();

  // Mix down to mono if needed.
  const mono = off.createBuffer(1, decoded.length, decoded.sampleRate);
  if (decoded.numberOfChannels === 1) {
    mono.copyToChannel(decoded.getChannelData(0), 0);
  } else {
    const out = mono.getChannelData(0);
    for (let i = 0; i < decoded.length; i++) {
      let s = 0;
      for (let c = 0; c < decoded.numberOfChannels; c++) s += decoded.getChannelData(c)[i];
      out[i] = s / decoded.numberOfChannels;
    }
  }
  src.buffer = mono;
  src.connect(off.destination);
  src.start(0);
  const rendered = await off.startRendering();
  return rendered.getChannelData(0).slice();
}

/**
 * Build a speaker JSON from raw audio + transcript.
 *
 * @param {object} args
 * @param {Blob}   args.audioBlob     reference audio (any decode-able format)
 * @param {string} args.transcript    plain-text transcript of the audio
 * @param {string} args.weightsUrl    URL to wavtokenizer-encoder.safetensors
 * @param {string} args.configUrl     URL to wavtokenizer-encoder.json
 * @param {function} [args.onProgress]  ({ stage, progress }) → void
 * @returns {Promise<object>} OuteTTS-compatible speaker JSON
 */
export async function createSpeaker({
  audioBlob,
  transcript,
  weightsUrl,
  configUrl,
  onProgress,
}) {
  if (!transcript?.trim()) throw new Error("transcript is required");

  // Resample to both rates in parallel (different consumers).
  onProgress?.({ stage: "decode", progress: 0 });
  const [samples24k, samples16k, modelHandle, transcriber] = await Promise.all([
    decodeAndResample(audioBlob, ENCODER_TARGET_SR),
    decodeAndResample(audioBlob, WHISPER_TARGET_SR),
    ensureModel({ weightsUrl, configUrl, onProgress }),
    ensureWhisper(onProgress),
  ]);
  onProgress?.({ stage: "decode", progress: 1 });

  onProgress?.({ stage: "align", progress: 0 });
  const whisperResult = await transcriber(samples16k, {
    return_timestamps: "word",
    language: "english",
    task: "transcribe",
  });
  onProgress?.({ stage: "align", progress: 1 });

  onProgress?.({ stage: "encode", progress: 0 });
  const codes = await modelEncode(samples24k);              // Uint32Array
  const fps = modelFramesPerSecond(ENCODER_TARGET_SR, 320);
  onProgress?.({ stage: "encode", progress: 1, backend: modelKind });

  const words = sliceCodesPerWord(codes, fps, whisperResult.chunks || []);
  return {
    text: transcript.trim(),
    language: "en",
    words,
  };
}

function sliceCodesPerWord(codes, framesPerSec, whisperWords) {
  const totalFrames = codes.length;
  const totalDur = totalFrames / framesPerSec;

  if (whisperWords.length === 0) {
    return [{ word: "audio", duration: totalDur, codes: Array.from(codes) }];
  }

  const out = [];
  for (let i = 0; i < whisperWords.length; i++) {
    const w = whisperWords[i];
    const ts = w.timestamp || w.timestamps || [0, totalDur];
    const start = clamp(ts[0] ?? 0, 0, totalDur);
    const end   = clamp(ts[1] ?? totalDur, start, totalDur);

    const startIdx = Math.floor(start * framesPerSec);
    const endIdx   = Math.min(totalFrames, Math.max(startIdx + 1, Math.floor(end * framesPerSec)));

    const text = (w.text ?? "").trim();
    if (!text) continue;
    out.push({
      word: text,
      duration: Number((end - start).toFixed(3)),
      codes: Array.from(codes.subarray(startIdx, endIdx)),
    });
  }
  return out;
}

function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }
