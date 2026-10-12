"""
Minimal local server for Qwen3-TTS, matching the wire format the browser
app's Qwen engine speaks. Lets you run the open-source Qwen3-TTS weights
on your own machine and avoid DashScope (and any privacy / cost concerns).

Why this exists: Qwen3-TTS is open source (Apache 2.0, weights on Hugging
Face), but there's no first-party HTTP server. This script is the smallest
thing that wraps the model in an endpoint the browser app can hit.

Setup:

    python -m venv .venv && source .venv/bin/activate
    pip install fastapi uvicorn torch torchaudio transformers soundfile

    # Choose one of the released Qwen3-TTS variants:
    #   Qwen/Qwen3-TTS-Flash         — fastest, ~0.6B
    #   Qwen/Qwen3-TTS-Flash-Realtime — streaming variant
    #   Qwen/Qwen3-TTS                — base, larger
    export QWEN_TTS_MODEL=Qwen/Qwen3-TTS-Flash

Run:

    python serve_qwen.py
    # → listening on http://127.0.0.1:8000

In the browser app, switch to the **Qwen3-TTS** engine card and set:
  Endpoint URL = http://127.0.0.1:8000
  API key      = (leave blank — localhost auth is skipped)

Wire format (matches DashScope so the same browser code paths work):

    POST /
    Content-Type: application/json
    Body: { "model": "...", "input": { "text": "..." },
            "parameters": { "voice": "Cherry" } }
    Response: { "output": { "audio": { "data": "<base64-WAV>" } } }

This script is intentionally bare — it's a reference, not a production
server. For high-throughput / streaming, prefer vLLM:

    vllm serve Qwen/Qwen3-TTS-Flash --task tts

…then point the browser app at vLLM's `/v1/audio/speech` endpoint (the
engine accepts any URL).
"""
import base64
import io
import os
from typing import Any

import torch
import torchaudio
from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoModelForCausalLM, AutoTokenizer, AutoProcessor

MODEL_ID = os.environ.get("QWEN_TTS_MODEL", "Qwen/Qwen3-TTS-Flash")
DEVICE = "cuda" if torch.cuda.is_available() else (
    "mps" if torch.backends.mps.is_available() else "cpu"
)


class Input(BaseModel):
    text: str


class Parameters(BaseModel):
    voice: str = "Cherry"


class GenerateRequest(BaseModel):
    model: str | None = None
    input: Input
    parameters: Parameters = Parameters()


print(f"Loading {MODEL_ID} on {DEVICE} (this can take a minute on first run)…")
tokenizer = AutoTokenizer.from_pretrained(MODEL_ID, trust_remote_code=True)
processor = AutoProcessor.from_pretrained(MODEL_ID, trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID, torch_dtype="auto", device_map=DEVICE, trust_remote_code=True,
).eval()
print(f"Loaded. Voices: {getattr(processor, 'voices', '(see model card)')}")

app = FastAPI()


def encode_wav_base64(samples: torch.Tensor, sample_rate: int) -> str:
    """Pack a mono waveform tensor into a base64-encoded 16-bit WAV string."""
    if samples.dim() == 1:
        samples = samples.unsqueeze(0)
    buf = io.BytesIO()
    torchaudio.save(buf, samples.cpu().to(torch.float32), sample_rate, format="wav")
    return base64.b64encode(buf.getvalue()).decode("ascii")


@app.post("/")
def generate(req: GenerateRequest) -> dict[str, Any]:
    text = req.input.text
    voice = req.parameters.voice
    # The exact API surface depends on the Qwen3-TTS revision; consult the
    # model card. This call shape works with the public Qwen3-TTS-Flash:
    inputs = processor(text=text, voice=voice, return_tensors="pt").to(DEVICE)
    with torch.no_grad():
        out = model.generate(**inputs, max_new_tokens=4096)
    audio, sample_rate = processor.decode_audio(out)
    return {"output": {"audio": {"data": encode_wav_base64(audio, sample_rate)}}}


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "model": MODEL_ID, "device": DEVICE}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
