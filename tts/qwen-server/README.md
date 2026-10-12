# Local Qwen3-TTS server + ONNX harness

Two scripts:

- **`serve_qwen.py`** — Working FastAPI server. Wraps the open-source
  Qwen3-TTS weights and exposes the same wire format the browser app's
  Qwen engine speaks. The simplest path for self-hosting today.
- **`export_to_onnx.py`** — ONNX export. **Codec works end-to-end at
  numerical parity. Talker step exports cleanly. Subtalker still TODO**
  (see status section).

## serve_qwen.py — the simplest local path

```sh
python -m venv .venv && source .venv/bin/activate
pip install fastapi uvicorn torch torchaudio transformers soundfile

export QWEN_TTS_MODEL=Qwen/Qwen3-TTS-12Hz-0.6B-Base
python serve_qwen.py
# → listening on http://127.0.0.1:8000
```

In the browser app, switch the Qwen engine to **HTTP** mode, set
**Endpoint URL** to `http://127.0.0.1:8000`, leave the API key blank.
The badge flips to **Local** (green).

For higher throughput, prefer vLLM:

```sh
vllm serve Qwen/Qwen3-TTS-12Hz-0.6B-Base --task tts
```

## export_to_onnx.py — current status

Run:

```sh
python -m venv .venv && source .venv/bin/activate
pip install torch torchaudio --index-url https://download.pytorch.org/whl/cpu
pip install qwen-tts onnx onnxscript onnxruntime numpy
python export_to_onnx.py --out ./onnx-out
```

### What's working

| Artefact | Status | Notes |
| --- | --- | --- |
| `qwen3-tts-codec.onnx` (+ `.data`) | ✅ verified | MSE vs PyTorch: **1.6e-12**. ~440 MB total fp32. |
| `qwen3-tts-talker.onnx` (+ `.data`) | ✅ verified | MSE vs PyTorch: **3.7e-10**. ~1.7 GB fp32. No-cache export. |
| `qwen3-tts-config.json` | ✅ | Token IDs, language IDs, layer counts, sample rate. |

The codec was the trickier one — `chunked_decode` has a python while loop
that the dynamo exporter can't guard. We bypass it by calling
`decoder.forward` directly (the browser side chunks at the JS level if
ever needed). The talker exports cleanly under the dynamo path once you
go through `talker.model + talker.codec_head` directly instead of
`talker.forward` (which mixes `past_hidden`/`trailing_text_hidden`
inputs that don't fit a single ONNX graph).

### What's still TODO

The full inference flow is **not** a single autoregressive graph. Each
generation step:

1. Talker step (`talker.model` + `codec_head`) → first-codebook logit
2. **Subtalker** (`code_predictor.generate`) runs autoregressively 15
   times → codebooks 2-16
3. The 16 codebooks are embedded through 16 separate embedding tables
   (`get_input_embeddings()` for codebook 0, `code_predictor
   .get_input_embeddings()[i-1]` for codebooks 1-15) and **summed**
4. Optional `trailing_text_hidden[step]` or `tts_pad_embed` is added
   to nudge the model toward the next text token

So a complete browser-side runtime needs four things on top of what's
already exported:

- **Subtalker step ONNX** — same shape as talker step, smaller model
  (lives at `lm.talker.code_predictor.model` etc).
- **Embedding-sum ONNX (or pure-JS impl)** — the 16 embedding tables
  could be exported as one tiny graph, or just dumped as numpy and
  done in JS.
- **Prefill graph** — text inputs → text_projection → talker.model
  (large prefill) → past_hidden + kv_cache + trailing_text_hidden.
- **JS orchestration** — drive the outer + inner loops, manage state.

Realistic scope for someone picking this up: a few solid days of
torch-onnx work plus the JS-side orchestration in `qwen-browser.js`.

### Size reality check

fp32 totals ~2.1 GB (1.7 GB talker + 0.4 GB codec). Naive dynamic int8
quantisation cuts the talker to 427 MB but degrades quality
significantly (MSE 5.5 vs 3.7e-10 for fp32). Calibration-based int8 or
GPTQ-style quantisation would be needed for a usable browser build —
that's another notable chunk of work.

So for the moment: the export is real and verified, but a v1 browser
deployment that respects realistic mobile/desktop bandwidth needs the
quantisation work to land too.

## Wire format (HTTP path)

```
POST /
Content-Type: application/json

{
  "model": "qwen3-tts-12hz-0b6",
  "input": { "text": "Hello world" },
  "parameters": { "voice": "Cherry" }
}

→ { "output": { "audio": { "data": "<base64-encoded WAV>" } } }
```

Same shape as DashScope so the browser engine code is identical
between local and cloud paths.
