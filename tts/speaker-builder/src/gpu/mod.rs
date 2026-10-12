//! WebGPU acceleration for the encoder + quantizer.
//!
//! Layout convention on the GPU: feature maps are `(T, C)` row-major where
//! T is the time/frame axis and C the channel axis. This is the natural
//! input layout for our matmul kernels (`A @ B^T + bias`), so all the heavy
//! kernels operate without intermediate transposes.
//!
//! The CPU encoder uses `(C, T)` channels-first; we transpose at the boundary
//! when uploading weights and the mel spectrogram, and at the readback when
//! returning codes (which are 1-D so no transpose needed).
//!
//! Pipeline:
//!   mel (CPU)
//!   → upload to GPU as (T, n_mels)
//!   → conv1d_k7_reflect → (T, dim)
//!   → for each ConvNeXt block:
//!       depthwise conv1d_dw_k7_reflect → (T, dim)
//!       layer_norm                     → (T, dim)
//!       matmul_bt_bias_gelu (pw1)      → (T, intermediate_dim)
//!       matmul_bt_bias_scale_residual  → (T, dim)   [pw2 + γ * + residual]
//!   → final layer_norm                 → (T, dim)
//!   → quantize (project + nearest-codebook) → (T,) u32
//!   → readback codes
//!
//! The encoder pre-allocates every intermediate buffer and pre-creates every
//! bind group at construction. A forward pass is 3 + 4*num_layers + 2 dispatch
//! calls and zero allocations.

#![cfg(feature = "webgpu")]

mod context;
mod encoder;
mod buffers;

pub use context::GpuContext;
pub use encoder::GpuEncoder;
