# TTS Studio

Browser-only text-to-speech with voice cloning. Three engines, one UI:

| Engine | Where it runs | Voices | Cloning | Notes |
| --- | --- | --- | --- | --- |
| **Kokoro 82M** | In your browser | 28 prebuilt | No | ~80 MB. Real-time on WebGPU. Default engine. |
| **OuteTTS 500M** | In your browser | 6 default + cloned | **Yes (raw audio in)** | ~500 MB. Voice cloning via the bundled Rust+WASM WavTokenizer encoder. |
| **Qwen3-TTS** | **In your browser** *or* self-hosted *or* DashScope | 13 prebuilt + cloned | Yes (DashScope clone API) | Open source weights. Three modes; pick one in the engine card. |

Open the app, pick an engine, the model downloads once and caches. WebGPU is auto-detected; WASM CPU path is the fallback.

---

## Quickstart

You don't need to build anything to use the basic app. Open `index.html` through any static-file server.

```sh
cd /path/to/aukmind.github.io
python3 -m http.server 8765
# → open http://localhost:8765/tts/
```

Pick **Kokoro** in the engine card, type something, hit **Generate**. First request downloads ~80 MB of model weights; after that it's instant.

---

## What's in this folder

```
tts/
├── README.md                      ← you are here
├── index.html, app.js, styles.css     ← Vue 3 + Naive UI app
├── browser-utils.js               ← Shared helpers (fetchBytes, webgpuAvailable)
├── tts-handler.js                 ← Engine wrappers (Kokoro, OuteTTS, Qwen)
├── speaker-builder.js             ← In-browser voice-cloning pipeline (OuteTTS path)
├── qwen-browser.js                ← In-browser Qwen3-TTS pipeline (talker + subtalker + codec)
├── pkg/                           ← Built WASM artefacts (committed; rebuild via speaker-builder/scripts/build.sh)
├── speaker-builder/               ← Rust crate: WavTokenizer encoder + tests + benches
│   ├── src/, benches/, tests/, tools/
│   ├── scripts/build.sh
│   └── README.md                  ← crate-specific docs
└── qwen-server/                   ← Self-hosted Qwen3-TTS + ONNX exporter
    ├── serve_qwen.py              ← FastAPI server
    ├── export_to_onnx.py          ← exports talker + subtalker + codec + codebook weights + text embeddings + config
    ├── reference/                 ← reference runtime config (committed)
    └── README.md                  ← Qwen-specific docs
```

---

## Engines: setup details

### Kokoro 82M (default — no setup)

Just works. 28 prebuilt voices (American/British, male/female). Best perf on Chrome/Edge with WebGPU. The badge in the header shows the active backend.

### OuteTTS 500M (voice cloning)

Two cloning paths, both available in the UI under the engine card's **Voices** section.

#### Path A — Speaker JSON (no setup)

If you already have an OuteTTS speaker JSON (created elsewhere via the Python `outetts` package), drop it into the **Speaker JSON** tab. Browser app uses it as-is.

#### Path B — Build from raw audio (in-browser)

Requires a one-time setup: export the WavTokenizer encoder weights from the PyTorch checkpoint and host them somewhere CORS-friendly. After that, every clone runs 100% locally.

```sh
cd speaker-builder/tools

python -m venv .venv && source .venv/bin/activate
pip install torch torchaudio safetensors einops huggingface_hub
git clone https://github.com/jishengpeng/WavTokenizer
cd WavTokenizer && pip install -e . && cd ..

huggingface-cli download novateur/WavTokenizer-large-speech-75token \
  wavtokenizer_large_speech_320_24k.ckpt --local-dir checkpoints
huggingface-cli download novateur/WavTokenizer-large-speech-75token \
  wavtokenizer_smalldata_frame75_3s_nq1_code4096_dim512_kmeans200_attn.yaml \
  --local-dir configs

python export_weights.py \
  --config configs/wavtokenizer_smalldata_frame75_3s_nq1_code4096_dim512_kmeans200_attn.yaml \
  --ckpt   checkpoints/wavtokenizer_large_speech_320_24k.ckpt \
  --out    wavtokenizer-encoder.safetensors
```

Upload `wavtokenizer-encoder.safetensors` + `wavtokenizer-encoder.json` to any public location (HF model repo, S3, GitHub Pages assets), paste the URLs into the **From audio** tab → "Encoder URLs".

Validate before trusting outputs (recommended):

```sh
cd speaker-builder
cargo build --release --bin encode --features cli
python tools/parity_check.py \
  --weights ../tools/wavtokenizer-encoder.safetensors \
  --config  ../tools/wavtokenizer-encoder.json \
  --ckpt    ../tools/checkpoints/wavtokenizer_large_speech_320_24k.ckpt \
  --yaml    ../tools/configs/...yaml \
  --audio   sample.wav \
  --rust-bin target/release/encode
```

Healthy: ≤ 5 % code mismatch (ours is 0.3 % at the boundary). Higher means the ConvNeXt module names in your fork differ from the schema in `src/weights.rs` — adjust `collect_encoder_tensors()` in the export script.

### Qwen3-TTS

Three modes share a single engine card. **Pick one in the Qwen settings.**

#### Mode 1: HTTP — DashScope (cloud, simplest)

Paste a DashScope API key in the **API key** field, leave **Endpoint URL** blank. The engine uses `dashscope-intl` by default. Yellow **Cloud** badge. CORS may need a tiny proxy on some routes.

#### Mode 2: HTTP — self-hosted (local Python)

```sh
cd qwen-server
python -m venv .venv && source .venv/bin/activate
pip install fastapi uvicorn torch torchaudio transformers soundfile
export QWEN_TTS_MODEL=Qwen/Qwen3-TTS-12Hz-0.6B-Base
python serve_qwen.py
# → listening on http://127.0.0.1:8000
```

In the Qwen settings, set **Endpoint URL** to `http://127.0.0.1:8000`, leave the API key blank. Engine detects loopback / RFC1918 endpoints, skips auth, shows a green **Local** badge.

For higher throughput, use vLLM instead:

```sh
vllm serve Qwen/Qwen3-TTS-12Hz-0.6B-Base --task tts
```

#### Mode 3: Browser ONNX — runs in this tab

Generates speech entirely in the browser via `onnxruntime-web`. Six artefacts (~3.9 GB fp32 total) are produced once by the export script, hosted anywhere CORS-friendly, and pulled in by the browser engine on first use. WebGPU is auto-detected; WASM is the fallback.

**One-time export:**

```sh
cd qwen-server
python -m venv .venv && source .venv/bin/activate
pip install torch torchaudio --index-url https://download.pytorch.org/whl/cpu
pip install qwen-tts onnx onnxscript onnxruntime safetensors numpy
python export_to_onnx.py --out ./onnx-out
```

You get six files:

| File | Size (fp32) | Verified |
| --- | --- | --- |
| `qwen3-tts-talker.onnx` (+ `.data`) | 1.7 GB | MSE vs PyTorch: **3.7e-10** |
| `qwen3-tts-subtalker.onnx` (+ `.data`) | 300 MB | model-only, per-step head/embed in JS |
| `qwen3-tts-codec.onnx` (+ `.data`) | 440 MB | MSE vs PyTorch: **1.6e-12** |
| `qwen3-tts-codebook-weights.safetensors` | 276 MB | cb0 emb + 15 cb embs + 15 lm_heads + text_projection MLP |
| `qwen3-tts-text-embeddings.safetensors` | 1.2 GB | 151936 × 2048 — the size killer |
| `qwen3-tts-config.json` | < 1 KB | runtime metadata |

Upload the directory anywhere CORS-friendly (HF model repo, S3, GitHub Pages). In the **Browser ONNX** mode, paste the directory URL into **Base URL**; the engine derives all six filenames from the standard layout.

**How the in-tab pipeline works** (`qwen-browser.js`):

1. Tokenize via Qwen3 BPE (transformers.js).
2. Embed text → run `text_projection` MLP in JS (the MLP weights live in the codebook bundle).
3. Per generation step:
   - `talker.run(running_inputs_embeds)` → `(last_hidden, cb0_logits)` → argmax cb0.
   - 15× subtalker inner loop: embed previous codebook → `subtalker.run(growing_ctx)` → matmul with `cb_heads[step]` → argmax.
   - Sum all 16 codebook embeddings → next inputs_embeds; append to running sequence.
   - Stop on cb0 == codec_eos.
4. `codec.run(all_codes)` → 24 kHz audio.

**Honest status.** Per-component ONNX outputs match PyTorch within fp32 noise (verified). End-to-end audio quality vs the PyTorch reference has not been A/B tested in this session — prompt construction (chat template, language tag, voice marker, `trailing_text_hidden`, `past_hidden` windowing) follows my reading of `qwen_tts` source but may need refinement before output exactly matches. Bugs there are localised to the prompt-build section in `qwen-browser.js`, not the per-component runs.

**Size and perf reality.** 3.9 GB fp32 is loadable in Chrome (multi-GB blobs work via IndexedDB / OPFS) but rough on mobile. The driver is also no-cache — each generation step recomputes full attention, O(T²). The two follow-up wins, both meaningful but each a separate engineering pass:
- **Re-export with KV cache** (`use_cache=True`, expose `past_key_values` as graph I/O). Cuts the per-step talker call from O(T) attention work to O(1).
- **Calibration-based int8 / GPTQ** quantisation. Cuts the bundle from ~3.9 GB to ~1 GB. Naive dynamic int8 degrades MSE catastrophically (5.5 vs 3.7e-10) — calibration is required.

---

## Building the WASM blob

`pkg/` is checked in, so you don't need to build anything to run the app. To rebuild after changing the Rust crate:

```sh
cd speaker-builder
./scripts/build.sh
```

Requires `cargo` and `wasm-pack` (the script installs the wasm target if missing). Output: `tts/pkg/speaker_builder.{js,_bg.wasm}` (about 480 KB SIMD-enabled).

The crate has both a CPU encoder and a full WebGPU pipeline in `src/gpu/`. Tests + benches:

```sh
cd speaker-builder
cargo test --release           # 18 tests including GPU↔CPU parity
cargo bench --bench encoder_bench
```

CPU encode for a 1 s clip: ~36 ms native. GPU encode (Vulkan integrated): ~20 ms. Browser WebGPU on a discrete GPU is typically 3-5× faster than the integrated-Vulkan numbers.

See [`speaker-builder/README.md`](./speaker-builder/README.md) for the kernel layout, fusion strategy, and how to run the parity check.

---

## How the UI is structured

- **Cold-load progress panel** — sticky card showing every model being downloaded (Kokoro, OuteTTS, Whisper, encoder weights). Per-file rows with percent, fades when done. Driven by transformers.js / onnxruntime-web progress callbacks.
- **Persistent model cache** — every artefact bigger than the page itself is stored in the browser's Cache API (the same one transformers.js + kokoro-js use). Subsequent loads come from cache instantly. A `💾 X MB cached · clear` badge in the header shows the current size; click to wipe.
- **Engine card** — radio for the three engines. Engine-specific settings (Qwen URLs / OuteTTS encoder URLs) collapse under `<details>` so the common path stays minimal.
- **Voice list** — built-ins + cloned voices for each engine. Click to select. Selected voice + last-used engine + text input persist to `localStorage`.
- **Generate panel** — char-level progress with ETA, **Cancel** button that bails between text chunks (preserves audio already generated).
- **Output cards** — SVG min/max waveform precomputed at insert time, audio player, download/remove buttons.

Backend badges in the header tell you what perf class is active: **WebGPU** (green), **WASM (CPU)** (blue), **Local** (green, for self-hosted Qwen), **Cloud** (yellow, for DashScope).

---

## Browser support

| Path | Chrome/Edge 113+ | Safari 17.4+ | Firefox |
| --- | --- | --- | --- |
| Kokoro WebGPU | ✅ | ✅ | Behind flag |
| Kokoro WASM | ✅ | ✅ | ✅ |
| OuteTTS + encoder WebGPU | ✅ | ✅ | Behind flag |
| OuteTTS WASM-only | ✅ | ✅ | ✅ |
| Qwen HTTP | ✅ | ✅ | ✅ |
| Qwen Browser ONNX | ✅ | ✅ | Behind flag |

WebGPU is detected via `navigator.gpu.requestAdapter()` at engine load time. Where it's missing, everything still works on WASM — the speed drop varies by engine (negligible for Kokoro, ~3-5× for OuteTTS).

---

## Troubleshooting

**"Failed to load Kokoro / OuteTTS"** — model download from Hugging Face failed. Check network / CORS / browser console. The model URLs are baked into `kokoro-js` and `transformers.js`; they fetch from `huggingface.co/onnx-community/...`.

**"Cloning failed: Browser ONNX mode needs LM/codec/config URLs"** — the encoder URLs aren't filled in for OuteTTS audio cloning. Run the export step in `speaker-builder/tools/export_weights.py`, host the files, paste URLs into the UI.

**"Qwen API ###: ..."** — DashScope rejected the request. 401 = bad API key. CORS errors mean the browser can't reach DashScope directly; route through a thin proxy (e.g. a one-line Cloudflare worker) and put the proxy URL in the **Endpoint URL** field.

**"Local Qwen server connection refused"** — `serve_qwen.py` isn't running, or it's on a different port. The engine probes `127.0.0.1:8000` by default. Check the server's output for the actual port.

**"GPU mismatch rate exceeded 5 %"** in the OuteTTS WASM encoder parity test — the ConvNeXt module names in your WavTokenizer fork differ from the schema in `src/weights.rs`. Adjust `collect_encoder_tensors()` in the export script.

---

## License

The app code is MIT. Engines have their own licenses (Kokoro Apache 2.0, OuteTTS Apache 2.0, Qwen3-TTS Apache 2.0, WavTokenizer Apache 2.0). Check each repo for details.
