"""
Export the WavTokenizer encoder + quantizer to a single `.safetensors` file
that the Rust speaker-builder crate can load.

This script is intentionally architecture-aware: it reads the PyTorch
checkpoint, walks the modules, renames tensors to the schema documented in
`src/weights.rs`, and writes the weights + a `config.json` describing
the architecture.

Setup (one-time):

    python -m venv .venv && source .venv/bin/activate
    pip install torch torchaudio safetensors einops huggingface_hub
    git clone https://github.com/jishengpeng/WavTokenizer
    cd WavTokenizer && pip install -e . && cd ..

Download the 75-token-3s checkpoint:

    huggingface-cli download novateur/WavTokenizer-large-speech-75token \\
        wavtokenizer_large_speech_320_24k.ckpt \\
        --local-dir checkpoints

    huggingface-cli download novateur/WavTokenizer-large-speech-75token \\
        wavtokenizer_smalldata_frame75_3s_nq1_code4096_dim512_kmeans200_attn.yaml \\
        --local-dir configs

Run:

    python export_weights.py \\
        --config configs/wavtokenizer_smalldata_frame75_3s_nq1_code4096_dim512_kmeans200_attn.yaml \\
        --ckpt checkpoints/wavtokenizer_large_speech_320_24k.ckpt \\
        --out wavtokenizer-encoder.safetensors

Validate parity (recommended before trusting the Rust output):

    python parity_check.py --weights wavtokenizer-encoder.safetensors \\
        --rust-bin ../target/release/encoder_cli  # build cli separately

Why this script and not torch.onnx.export? The Rust crate runs its own
inference (no onnxruntime dependency), so we only need the raw weights.
A safetensors file is smaller, simpler to load, and avoids onnx-runtime
quirks around dynamic axes.
"""
import argparse
import json
from pathlib import Path

import torch
from safetensors.torch import save_file


def collect_encoder_tensors(model) -> dict:
    """Walk the WavTokenizer model and produce tensors keyed by the names the
    Rust loader expects. Architecture is Vocos backbone (ConvNeXt blocks)."""
    backbone = model.feature_extractor.encodec.encoder         # adjust if your fork differs
    head = model.feature_extractor.encodec.quantizer

    tensors = {}

    # Input mel projection (first Conv1d before the ConvNeXt stack).
    tensors["input_proj.weight"] = backbone.embed.weight.detach().contiguous()
    tensors["input_proj.bias"]   = backbone.embed.bias.detach().contiguous()

    for i, block in enumerate(backbone.convnext):
        tensors[f"blocks.{i}.dw.weight"]  = block.dwconv.weight.detach().contiguous()
        tensors[f"blocks.{i}.dw.bias"]    = block.dwconv.bias.detach().contiguous()
        tensors[f"blocks.{i}.ln.weight"]  = block.norm.weight.detach().contiguous()
        tensors[f"blocks.{i}.ln.bias"]    = block.norm.bias.detach().contiguous()
        # Vocos uses `pwconv1` (expand) and `pwconv2` (project) as nn.Linear.
        # Rewrap as conv1d-shape (out, in, 1) so the Rust path treats them
        # as 1×1 convolutions.
        tensors[f"blocks.{i}.pw1.weight"] = block.pwconv1.weight.detach().unsqueeze(-1).contiguous()
        tensors[f"blocks.{i}.pw1.bias"]   = block.pwconv1.bias.detach().contiguous()
        tensors[f"blocks.{i}.pw2.weight"] = block.pwconv2.weight.detach().unsqueeze(-1).contiguous()
        tensors[f"blocks.{i}.pw2.bias"]   = block.pwconv2.bias.detach().contiguous()
        tensors[f"blocks.{i}.gamma"]      = block.gamma.detach().contiguous()

    tensors["final_ln.weight"] = backbone.final_layer_norm.weight.detach().contiguous()
    tensors["final_ln.bias"]   = backbone.final_layer_norm.bias.detach().contiguous()

    # Quantizer: Vocos's residual VQ uses a single in_proj + a codebook.
    # WavTokenizer-75 has nq=1; we only emit the first (and only) layer.
    rvq = head.vq.layers[0]
    tensors["quant.in_proj.weight"] = rvq.project_in.weight.detach().contiguous()
    tensors["quant.codebook"]       = rvq._codebook.embed.detach().contiguous()

    return tensors


def make_config(args, tensors) -> dict:
    """Derive an EncoderConfig from the actual tensor shapes."""
    dim = tensors["input_proj.weight"].shape[0]
    n_mels = tensors["input_proj.weight"].shape[1]
    kernel_size = tensors["input_proj.weight"].shape[2]

    intermediate_dim = tensors["blocks.0.pw1.weight"].shape[0]
    num_layers = sum(1 for k in tensors if k.endswith(".dw.weight"))

    codebook_dim = tensors["quant.in_proj.weight"].shape[0]
    codebook_size = tensors["quant.codebook"].shape[0]

    return {
        "n_fft": args.n_fft,
        "hop_length": args.hop_length,
        "n_mels": n_mels,
        "dim": dim,
        "intermediate_dim": intermediate_dim,
        "num_layers": num_layers,
        "kernel_size": kernel_size,
        "layer_scale_init": 1e-6,
        "sample_rate": args.sample_rate,
        "codebook_size": codebook_size,
        "codebook_dim": codebook_dim,
    }


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--config", required=True, help="WavTokenizer YAML config")
    p.add_argument("--ckpt", required=True, help="WavTokenizer .ckpt")
    p.add_argument("--out", default="wavtokenizer-encoder.safetensors")
    p.add_argument("--n_fft", type=int, default=1024)
    p.add_argument("--hop_length", type=int, default=320)
    p.add_argument("--sample_rate", type=int, default=24000)
    args = p.parse_args()

    from decoder.pretrained import WavTokenizer  # from the WavTokenizer repo
    model = WavTokenizer.from_pretrained0802(args.config, args.ckpt).eval()

    tensors = collect_encoder_tensors(model)
    cfg = make_config(args, tensors)

    out_path = Path(args.out)
    save_file(tensors, str(out_path))
    cfg_path = out_path.with_suffix(".json")
    cfg_path.write_text(json.dumps(cfg, indent=2))

    print(f"Wrote {out_path} ({sum(t.numel() * 4 for t in tensors.values()) // 1024} KiB)")
    print(f"Wrote {cfg_path}: {cfg}")
    print("\nUpload both files to your HF repo, then point the browser app at them.")


if __name__ == "__main__":
    main()
