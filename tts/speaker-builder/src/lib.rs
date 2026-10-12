//! Pure-Rust WavTokenizer encoder for in-browser voice cloning.
//!
//! Compiled to WASM via wasm-pack; the JS side hands us 24 kHz mono audio +
//! a config + safetensors weights, and we hand back integer codes (one per
//! 320 audio samples). The JS side does Whisper alignment and JSON assembly.
//!
//! Native builds are also fully supported — useful for offline batch use
//! and for the `cargo bench` / `cargo test` paths.

pub mod encoder;
pub mod ops;
pub mod quantizer;
pub mod weights;

#[cfg(feature = "webgpu")]
pub mod gpu;

use ndarray::ArrayView1;
use wasm_bindgen::prelude::*;

use crate::encoder::{Encoder, EncoderConfig};
use crate::quantizer::Quantizer;
use crate::weights::LoadedModel;

/// Convenience: encode + quantize end-to-end. Returns codes as `Vec<u32>`.
pub fn encode_audio(audio: ArrayView1<f32>, model: &LoadedModel, cfg: EncoderConfig) -> Vec<u32> {
    let encoder = Encoder::new(&model.encoder, cfg);
    let features = encoder.encode(audio);
    let q = Quantizer {
        in_proj: model.quantizer.in_proj_weight.view(),
        codebook: model.quantizer.codebook.view(),
    };
    q.encode(features.view())
}

// ────────────────────────── WASM bindings ──────────────────────────

#[wasm_bindgen(start)]
pub fn _start() {
    #[cfg(feature = "panic-hook")]
    console_error_panic_hook::set_once();
}

/// Opaque handle to a loaded encoder + quantizer. Construct once with
/// `WasmModel.new(weights, config)` and reuse for every clip.
#[wasm_bindgen]
pub struct WasmModel {
    inner: LoadedModel,
    cfg: EncoderConfig,
}

#[wasm_bindgen]
impl WasmModel {
    /// `weights_bytes` — raw `.safetensors` file as `Uint8Array`.
    /// `config_json`   — JSON string of `EncoderConfig`.
    #[wasm_bindgen(constructor)]
    pub fn new(weights_bytes: &[u8], config_json: &str) -> Result<WasmModel, JsError> {
        let cfg: EncoderConfig = serde_json::from_str(config_json)
            .map_err(|e| JsError::new(&format!("config json: {e}")))?;
        let inner = LoadedModel::from_safetensors_bytes(weights_bytes, &cfg)
            .map_err(|e| JsError::new(&format!("{e}")))?;
        Ok(WasmModel { inner, cfg })
    }

    /// Returns frames per second of the encoded code stream (sample_rate / hop).
    /// Useful for slicing codes by Whisper word timestamps on the JS side.
    pub fn frames_per_second(&self) -> f32 {
        self.cfg.frames_per_second()
    }

    /// Encode 24 kHz mono audio. Returns the integer code sequence.
    pub fn encode(&self, audio: &[f32]) -> Vec<u32> {
        let view = ArrayView1::from(audio);
        encode_audio(view, &self.inner, self.cfg.clone())
    }

    /// Encode + return codes as a single contiguous `Uint32Array`.
    /// Same as `encode` but spelled to make the JS shape obvious.
    pub fn encode_to_array(&self, audio: &[f32]) -> js_sys::Uint32Array {
        let codes = self.encode(audio);
        let arr = js_sys::Uint32Array::new_with_length(codes.len() as u32);
        arr.copy_from(&codes);
        arr
    }
}

// ────────────────────── WebGPU bindings ──────────────────────

#[cfg(feature = "webgpu")]
#[wasm_bindgen]
pub struct WasmGpuModel {
    encoder: gpu::GpuEncoder,
}

#[cfg(feature = "webgpu")]
#[wasm_bindgen]
impl WasmGpuModel {
    /// Construct a GPU-accelerated model. `weights_bytes` and `config_json`
    /// have the same shape as `WasmModel::new`. `max_t` is an upper bound on
    /// the number of mel frames per encode (sets buffer sizes); 1024 covers
    /// up to ~13.6s of audio at 320-hop / 24 kHz.
    ///
    /// Async because GPU device creation is async on WebGPU. Call once at
    /// app startup; reuse the returned handle for every encode.
    pub async fn new(weights_bytes: Vec<u8>, config_json: String, max_t: u32) -> Result<WasmGpuModel, JsError> {
        let cfg: EncoderConfig = serde_json::from_str(&config_json)
            .map_err(|e| JsError::new(&format!("config json: {e}")))?;
        let model = LoadedModel::from_safetensors_bytes(&weights_bytes, &cfg)
            .map_err(|e| JsError::new(&format!("{e}")))?;
        let ctx = gpu::GpuContext::new().await
            .map_err(|e| JsError::new(&format!("gpu init: {e}")))?;
        let encoder = gpu::GpuEncoder::new(ctx, &model, cfg, max_t);
        Ok(WasmGpuModel { encoder })
    }

    /// Encode 24 kHz mono audio, returning a `Uint32Array` of integer codes.
    pub async fn encode(&self, audio: Vec<f32>) -> js_sys::Uint32Array {
        let view = ArrayView1::from(&audio);
        let codes = self.encoder.encode(view).await;
        let arr = js_sys::Uint32Array::new_with_length(codes.len() as u32);
        arr.copy_from(&codes);
        arr
    }
}

