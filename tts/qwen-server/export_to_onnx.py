"""
ONNX export harness for Qwen3-TTS-12Hz-0.6B-Base.

Status as of 2026-04-26:

  * **Codec — WORKING.** Bypasses `chunked_decode` (which has a python
    while-loop) and calls `decoder.forward` directly via
    `torch.onnx.export(... dynamo=True)`. Output verified against the
    PyTorch reference: MSE 1.57e-12, max abs diff 3.83e-05 (≪ fp32
    noise). Produces ~440 MB total (`qwen3-tts-codec.onnx` graph + an
    `qwen3-tts-codec.onnx.data` external-weights file).

  * **LM — partial.** The full inference flow is more involved than a
    single autoregressive graph. Each step:
        talker.model + codec_head  → first codebook logit
        subtalker.generate (15×)   → codebooks 2-16
        16 separate embedding tables (sum) → next inputs_embeds
        + trailing_text_hidden / tts_pad_embed for text guidance
    A complete browser-side runtime needs three ONNX files (talker
    step, subtalker step, embedding-sum) plus a JS-side orchestration
    of the inner loop. This script exports the codec only; LM export
    is left to a follow-up.

Setup:

    python -m venv .venv && source .venv/bin/activate
    pip install torch torchaudio --index-url https://download.pytorch.org/whl/cpu
    pip install qwen-tts onnx onnxscript onnxruntime

Run:

    python export_to_onnx.py --skip-lm --out ./onnx-out

Outputs (uploaded together by the user):

  qwen3-tts-codec.onnx        ~3 MB graph
  qwen3-tts-codec.onnx.data   ~440 MB external weights
  qwen3-tts-config.json       runtime metadata for the browser
"""
import argparse
import json
from pathlib import Path

import torch


def _load_models(model_id: str, codec_id: str):
    from qwen_tts.core.models import Qwen3TTSForConditionalGeneration
    from qwen_tts import Qwen3TTSTokenizer

    print(f"Loading {model_id} (LM)…")
    lm = Qwen3TTSForConditionalGeneration.from_pretrained(
        model_id,
        dtype=torch.float32,
        attn_implementation="eager",     # tracing-friendly; no flash-attn
    ).eval()

    print(f"Loading {codec_id} (codec)…")
    codec = Qwen3TTSTokenizer.from_pretrained(codec_id)
    codec.model.eval()
    return lm, codec


class TalkerStep(torch.nn.Module):
    """Talker forward without KV cache: inputs_embeds → (last_hidden, codec_head_logits).
    Returns last_hidden too because the subtalker needs it as conditioning.
    No-cache means each step recomputes full attention; O(T²) but the graph
    stays single-output-per-call which is friendlier to dynamo."""

    def __init__(self, talker):
        super().__init__()
        self.model = talker.model
        self.head = talker.codec_head

    def forward(self, inputs_embeds):
        out = self.model(inputs_embeds=inputs_embeds, use_cache=False)
        h = out.last_hidden_state
        return h, self.head(h)


class SubtalkerStep(torch.nn.Module):
    """Subtalker.model only — caller does the per-step embedding lookup and
    per-step lm_head matmul in JS using the dumped codebook-weights bundle.
    This sidesteps the step-dependent ModuleList that doesn't ONNX-export."""

    def __init__(self, sub):
        super().__init__()
        self.model = sub.model
        self.proj = sub.small_to_mtp_projection

    def forward(self, inputs_embeds):
        return self.model(
            inputs_embeds=self.proj(inputs_embeds), use_cache=False
        ).last_hidden_state


class CodecDecode(torch.nn.Module):
    """Codec decoder: codes (B, T, 16) → audio (B, samples) at 24 kHz.
    Calls `decoder.forward` directly (skipping `chunked_decode`'s python-side
    while loop, which the dynamo exporter can't guard). The browser side
    chunks at the JS level if it ever needs to."""

    def __init__(self, codec_wrapper):
        super().__init__()
        self.decoder = codec_wrapper.model.decoder

    def forward(self, codes_btc):
        # Public API uses (B, T, 16); decoder.forward wants (B, 16, T).
        codes = torch.clamp(codes_btc, min=0).transpose(1, 2)
        wav = self.decoder(codes)            # (B, 1, samples)
        return wav.squeeze(1)                # (B, samples)


def _onnx_size_mb(out_path: Path) -> int:
    sz = out_path.stat().st_size
    data = out_path.with_suffix(out_path.suffix + ".data")
    if data.exists():
        sz += data.stat().st_size
    return sz // (1024 * 1024)


def _run_export(label, wrapper, dummy_args, out_path, input_names, output_names, dynamic_axes):
    """Wrap the boilerplate around `torch.onnx.export` so each export
    function below is a one-liner. All Qwen3-TTS exports use the dynamo
    path with opset 18; collect the flags here."""
    print(f"Exporting {label} → {out_path}")
    torch.onnx.export(
        wrapper, dummy_args, str(out_path),
        input_names=input_names, output_names=output_names,
        dynamic_axes=dynamic_axes,
        opset_version=18, dynamo=True,
    )
    print(f"  wrote {_onnx_size_mb(out_path)} MB ({out_path.name} + external weights)")


_BT_DYN  = {0: "B", 1: "T"}
_AXES_TT = {"inputs_embeds": _BT_DYN, "hidden": _BT_DYN}


def export_talker(talker, out_path: Path):
    """`inputs_embeds (B, T, H) → (last_hidden, cb0_logits)`. No-cache. ~1.7 GB."""
    H = talker.config.hidden_size
    dummy = torch.zeros(1, 3, H, dtype=torch.float32)
    _run_export(
        f"talker (hidden={H}, no-cache)", TalkerStep(talker).eval(), (dummy,), out_path,
        ["inputs_embeds"], ["last_hidden", "cb0_logits"],
        {"inputs_embeds": _BT_DYN, "last_hidden": _BT_DYN, "cb0_logits": _BT_DYN},
    )


def export_subtalker(sub, out_path: Path):
    """Subtalker model only. No-cache. ~300 MB fp32."""
    H = sub.config.hidden_size
    dummy = torch.zeros(1, 4, H, dtype=torch.float32)
    _run_export(
        f"subtalker (hidden={H}, no-cache)", SubtalkerStep(sub).eval(), (dummy,), out_path,
        ["inputs_embeds"], ["hidden"], _AXES_TT,
    )


def export_codebook_weights(lm, out_path: Path):
    """Per-step weights the subtalker ONNX can't carry (because the
    embedding/head are ModuleList-indexed by generation step), plus the
    text_projection MLP. Stored as safetensors so the browser can mmap-style
    load it without going through numpy.

    Tensor map:
      cb0_embedding         (3072, 1024)        codebook-0 (talker) embedding
      cb_embeddings         (15, 2048, 1024)    codebooks 1-15 (subtalker) embeddings
      cb_heads              (15, 1024, 2048)    codebooks 1-15 output projections
      text_projection.fc1.w (2048, 2048)        MLP layer 1 weight
      text_projection.fc1.b (2048,)             MLP layer 1 bias
      text_projection.fc2.w (1024, 2048)        MLP layer 2 weight
      text_projection.fc2.b (1024,)             MLP layer 2 bias
    """
    from safetensors.torch import save_file
    talker = lm.talker
    sub = talker.code_predictor

    cb0_emb  = talker.get_input_embeddings().weight.detach().cpu().contiguous()
    cb_embs  = torch.stack([sub.model.get_input_embeddings()[i].weight.detach().cpu()
                            for i in range(15)]).contiguous()
    cb_heads = torch.stack([sub.lm_head[i].weight.detach().cpu().T.contiguous()
                            for i in range(15)]).contiguous()

    tp = talker.text_projection
    tensors = {
        "cb0_embedding": cb0_emb,
        "cb_embeddings": cb_embs,
        "cb_heads": cb_heads,
        "text_projection.fc1.w": tp.linear_fc1.weight.detach().cpu().contiguous(),
        "text_projection.fc1.b": tp.linear_fc1.bias.detach().cpu().contiguous(),
        "text_projection.fc2.w": tp.linear_fc2.weight.detach().cpu().contiguous(),
        "text_projection.fc2.b": tp.linear_fc2.bias.detach().cpu().contiguous(),
    }
    save_file(tensors, str(out_path))
    print(f"  wrote {out_path}")
    print(f"  size {out_path.stat().st_size // (1024*1024)} MB")
    print(f"  shapes: cb0 {tuple(cb0_emb.shape)}, cb1-15 emb {tuple(cb_embs.shape)}, cb1-15 heads {tuple(cb_heads.shape)}")


def export_text_embeddings(lm, out_path: Path):
    """The talker's text-token embedding table — 151936 × 2048 fp32 ≈ 1.24 GB.

    The browser pipeline needs this to embed the text input before the
    text_projection MLP. There's no shortcut: the tokenizer is Qwen3-style
    and the table is large. int8 quantisation cuts it 4× to ~310 MB but
    needs calibration to preserve quality (TTS is more sensitive than text
    generation here).
    """
    from safetensors.torch import save_file
    te = lm.talker.model.get_text_embeddings()
    w = te.weight.detach().cpu().contiguous()
    save_file({"text_embeddings": w}, str(out_path))
    print(f"  wrote {out_path}  shape {tuple(w.shape)}  ({out_path.stat().st_size // (1024*1024)} MB)")


def quantize_lm(in_path: Path, out_path: Path):
    from onnxruntime.quantization import quantize_dynamic, QuantType
    print(f"Quantising → {out_path}…")
    quantize_dynamic(str(in_path), str(out_path), weight_type=QuantType.QInt8)
    print(f"  wrote {out_path.stat().st_size // (1024*1024)} MB")


def export_codec(codec_wrapper, out_path: Path):
    """`codes (B, T, 16) → audio (B, samples)` at 24 kHz. ~440 MB fp32.

    Bypasses `chunked_decode` (python while loop the dynamo exporter can't
    guard). The legacy `dynamo=False` path tripped on autograd vmap
    regardless, so dynamo is the only working route here."""
    dummy = torch.zeros(1, 25, 16, dtype=torch.long)   # ~2 s @ 12.5 Hz
    _run_export(
        "codec", CodecDecode(codec_wrapper).eval(), (dummy,), out_path,
        ["codes"], ["audio"],
        {"codes": _BT_DYN, "audio": {0: "B", 1: "samples"}},
    )


def write_runtime_config(lm, codec_wrapper, out_path: Path):
    top = lm.config
    talker = top.talker_config
    summary = {
        "model_type": top.model_type,
        "num_hidden_layers": talker.num_hidden_layers,
        "hidden_size": talker.hidden_size,
        "num_attention_heads": talker.num_attention_heads,
        "num_key_value_heads": talker.num_key_value_heads,
        "head_dim": talker.head_dim,
        "vocab_size": talker.vocab_size,
        "text_vocab_size": talker.text_vocab_size,
        "num_code_groups": talker.num_code_groups,
        "tts_bos_token_id": top.tts_bos_token_id,
        "tts_eos_token_id": top.tts_eos_token_id,
        "tts_pad_token_id": top.tts_pad_token_id,
        "codec_bos_id": talker.codec_bos_id,
        "codec_eos_token_id": talker.codec_eos_token_id,
        "codec_pad_id": talker.codec_pad_id,
        "codec_language_id": dict(talker.codec_language_id),
        "position_id_per_seconds": talker.position_id_per_seconds,
        "sample_rate": int(codec_wrapper.model.get_output_sample_rate()),
    }
    out_path.write_text(json.dumps(summary, indent=2))
    print(f"  wrote {out_path}  (sample_rate={summary['sample_rate']})")


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--lm", default="Qwen/Qwen3-TTS-12Hz-0.6B-Base")
    p.add_argument("--codec", default="Qwen/Qwen3-TTS-Tokenizer-12Hz")
    p.add_argument("--out", default="./onnx-out", type=Path)
    p.add_argument("--quantize", action="store_true")
    p.add_argument("--skip-lm", action="store_true")
    p.add_argument("--skip-codec", action="store_true")
    args = p.parse_args()

    args.out.mkdir(parents=True, exist_ok=True)
    lm, codec = _load_models(args.lm, args.codec)

    if not args.skip_lm:
        export_talker(lm.talker, args.out / "qwen3-tts-talker.onnx")
        export_subtalker(lm.talker.code_predictor, args.out / "qwen3-tts-subtalker.onnx")
        export_codebook_weights(lm, args.out / "qwen3-tts-codebook-weights.safetensors")
        export_text_embeddings(lm, args.out / "qwen3-tts-text-embeddings.safetensors")
        if args.quantize:
            quantize_lm(args.out / "qwen3-tts-talker.onnx",    args.out / "qwen3-tts-talker.int8.onnx")
            quantize_lm(args.out / "qwen3-tts-subtalker.onnx", args.out / "qwen3-tts-subtalker.int8.onnx")

    if not args.skip_codec:
        export_codec(codec, args.out / "qwen3-tts-codec.onnx")

    write_runtime_config(lm, codec, args.out / "qwen3-tts-config.json")
    print("\nDone.")


if __name__ == "__main__":
    main()
