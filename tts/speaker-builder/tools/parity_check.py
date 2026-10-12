"""
Parity check: encode the same clip through the PyTorch reference and the Rust
CLI, then compare the integer codes. Use this to validate the export *before*
trusting the WASM build for production cloning.

Healthy outcome: codes match exactly (since both quantize via argmin against
the same codebook). Even tiny numeric drift in the encoder features can flip
codes on the boundary, so a small mismatch rate (<1%) is usually fine; >5%
suggests an architectural mismatch (probably the ConvNeXt module names in
your checkpoint differ from the schema in `src/weights.rs`).

Setup:
    cargo build --release --bin encode  # produces target/release/encode

Run:
    python parity_check.py \\
        --weights wavtokenizer-encoder.safetensors \\
        --config  wavtokenizer-encoder.json \\
        --ckpt    /path/to/wavtokenizer.ckpt \\
        --yaml    /path/to/wavtokenizer.yaml \\
        --audio   sample.wav \\
        --rust-bin ../target/release/encode

Output: a one-line summary plus the first few mismatching positions, if any.
"""
import argparse
import subprocess
import sys
from pathlib import Path

import numpy as np


def encode_with_rust(rust_bin: Path, weights: Path, config: Path, audio: Path) -> np.ndarray:
    out = subprocess.run(
        [str(rust_bin), str(weights), str(config), str(audio)],
        check=True, capture_output=True, text=True,
    )
    return np.array([int(line) for line in out.stdout.splitlines() if line.strip()], dtype=np.int64)


def encode_with_pytorch(yaml: Path, ckpt: Path, audio: Path) -> np.ndarray:
    import torch
    import torchaudio
    from decoder.pretrained import WavTokenizer

    model = WavTokenizer.from_pretrained0802(str(yaml), str(ckpt)).eval()
    wav, sr = torchaudio.load(str(audio))
    if wav.shape[0] > 1:
        wav = wav.mean(dim=0, keepdim=True)
    if sr != 24000:
        wav = torchaudio.functional.resample(wav, sr, 24000)
    with torch.no_grad():
        codes = model.encode_infer(wav.unsqueeze(0))    # (nq, 1, T)
    return codes[0, 0].cpu().numpy().astype(np.int64)


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--weights", required=True, type=Path)
    p.add_argument("--config", required=True, type=Path)
    p.add_argument("--ckpt", required=True, type=Path)
    p.add_argument("--yaml", required=True, type=Path)
    p.add_argument("--audio", required=True, type=Path)
    p.add_argument("--rust-bin", required=True, type=Path)
    args = p.parse_args()

    rust = encode_with_rust(args.rust_bin, args.weights, args.config, args.audio)
    py   = encode_with_pytorch(args.yaml, args.ckpt, args.audio)

    if len(rust) != len(py):
        print(f"FAIL: length mismatch — rust={len(rust)} py={len(py)}", file=sys.stderr)
        sys.exit(1)

    diffs = np.where(rust != py)[0]
    rate = len(diffs) / len(py)
    print(f"frames: {len(py)}, mismatches: {len(diffs)} ({rate:.2%})")
    if len(diffs) > 0:
        print("first 10 mismatching positions (idx, rust, py):")
        for i in diffs[:10]:
            print(f"  {i}: {rust[i]} vs {py[i]}")
    if rate > 0.05:
        sys.exit(1)


if __name__ == "__main__":
    main()
