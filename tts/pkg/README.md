# speaker-builder

Pure-Rust WavTokenizer encoder for in-browser voice cloning. Compiles to a
~480 KB WASM blob (SIMD-enabled). Used by the parent TTS Studio to turn a raw
audio clip + transcript into the OuteTTS speaker JSON format, fully locally.

## What it does

```
audio.wav (any format)
   │
   ▼  Web Audio API: decode + resample to 24 kHz mono
samples: Float32Array
   │                    ┌────────────────────────────┐
   ├─→ 16 kHz mono ────►│ Whisper (transformers.js)  │
   │                    │  word-level timestamps     │
   │                    └────────────────────────────┘
   ▼  Rust+WASM encoder
 codes: Uint32Array (75 codes / second)
   │
   ▼  Slice codes per word using Whisper timestamps
{ text, language, words: [{ word, duration, codes }, ...] }   ← OuteTTS speaker JSON
```

The Rust crate owns the **encoder** (mel spectrogram → ConvNeXt backbone →
quantizer codebook lookup). Whisper alignment and final JSON assembly stay in
JavaScript because transformers.js already provides them.

## Layout

```
speaker-builder/
├── Cargo.toml
├── src/
│   ├── lib.rs          wasm-bindgen surface (WasmModel.encode)
│   ├── encoder.rs      Vocos backbone (mel → ConvNeXt × N → final LayerNorm)
│   ├── ops.rs          Conv1d (im2col + GEMM), LayerNorm, GELU, reflect pad
│   ├── quantizer.rs    Single-stage VQ (in_proj + nearest-codebook)
│   └── weights.rs      safetensors loader, expected tensor schema
├── tests/              regression tests for ops + encoder smoke tests
├── benches/            criterion benchmarks
├── tools/
│   └── export_weights.py    one-time PyTorch → safetensors export
└── scripts/
    └── build.sh             wasm-pack build wrapper (SIMD enabled)
```

## Build

```sh
# Native (tests + benches):
cargo test --release
cargo bench

# WASM (browser bundle, with SIMD):
./scripts/build.sh
# → ../pkg/speaker_builder.{js,_bg.wasm,.d.ts}
```

The browser app loads `../pkg/speaker_builder.js` from `speaker-builder.js`.

## Weight export (one-time)

The Rust crate doesn't include weights — bring your own:

```sh
cd tools
python export_weights.py \
    --config <wavtokenizer.yaml> \
    --ckpt   <wavtokenizer.ckpt> \
    --out    wavtokenizer-encoder.safetensors
```

This writes `wavtokenizer-encoder.safetensors` (~250 MB) and an
`wavtokenizer-encoder.json` config alongside it. Upload both to a public
HF repo and paste the URLs into the TTS Studio "From audio" tab.

## Verifying numerics (recommended)

Encoder code paths are unit-tested for shape and determinism, but **numeric
parity with the PyTorch reference is not auto-verified**. Before trusting
the codes for cloning, run a parity check: encode the same clip in Python
and Rust, compare the integer codes (should match exactly), and the
pre-quantizer features (MSE < 1e-4 is healthy).

A starter script lives at `tools/parity_check.py` (write-it-yourself based
on the export script — tooling intentionally minimal).

## Performance

Native release on AMD x86_64 (CPU = single thread + matrixmultiply,
GPU = Vulkan integrated):

| Audio | CPU encode | GPU encode | Speedup |
| --- | --- | --- | --- |
| 1 s   | 36 ms  | 24 ms   | 1.5× |
| 3 s   | 92 ms  | 51 ms   | 1.8× |
| 5 s   | 148 ms | ~80 ms  | 1.8× |

The GPU pipeline runs **the entire encoder + quantizer on the GPU** — mel is
the only CPU step. Seven WGSL kernels (matmul_bt_bias, matmul_bt_bias_gelu,
matmul_bt_bias_scale_residual, layer_norm, conv1d_dw_k7_reflect,
conv1d_k7_reflect, quantize) live in `src/gpu/shaders/`. The pw2 kernel fuses
matmul + bias + per-channel γ + residual add; the quantizer fuses projection +
nearest-codebook lookup. Bind groups are pre-created at construction so a
forward pass is `3 + 4×num_layers + 2` dispatch calls and zero allocations.

Browser WebGPU on a discrete GPU or Apple silicon is typically 3-5× faster
than the integrated-Vulkan numbers above. For the worst case (no WebGPU at
all), the CPU path is the automatic fallback — use `WasmModel` instead of
`WasmGpuModel`.
