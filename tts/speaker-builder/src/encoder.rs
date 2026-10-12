//! WavTokenizer encoder forward pass.
//!
//! Audio (24 kHz mono) → mel spectrogram → input projection → N×ConvNeXt
//! → final LayerNorm → output projection → encoder features. The encoder is
//! agnostic to the quantizer; see `quantizer.rs` for the codebook lookup.
//!
//! Architecture parameters (mel n_fft, channel widths, block count, kernel
//! size, intermediate-dim ratio) MUST match the values stored in the
//! checkpoint. The Python export script (`tools/export_weights.py`) writes
//! `config.json` next to the safetensors file with the actual values.
//!
//! Performance: an `Encoder` caches the realfft planner, hann window, and
//! mel filterbank, so building one is `O(n_fft)` but every subsequent
//! `encode()` call reuses them. Construct once, call many times.

use ndarray::{Array2, ArrayView1, ArrayView2};
use realfft::{RealFftPlanner, RealToComplex};
use serde::Deserialize;
use std::sync::Arc;

use crate::ops::{add_scaled_inplace, conv1d, gelu, layer_norm_cl_inplace, reflect_pad1d};
use crate::weights::EncoderWeights;

#[derive(Debug, Clone, Deserialize)]
pub struct EncoderConfig {
    pub n_fft: usize,
    pub hop_length: usize,
    pub n_mels: usize,
    pub dim: usize,
    pub intermediate_dim: usize,
    pub num_layers: usize,
    pub kernel_size: usize,
    pub layer_scale_init: f32,
    pub sample_rate: usize,
    pub codebook_size: usize,
    pub codebook_dim: usize,
}

impl EncoderConfig {
    pub fn frames_per_second(&self) -> f32 {
        self.sample_rate as f32 / self.hop_length as f32
    }
}

/// Stateless mel spectrogram computation. Holds the realfft planner, window,
/// and Slaney mel filterbank — all derivable from `EncoderConfig`. Construct
/// once and reuse across calls.
pub struct MelEngine {
    cfg: EncoderConfig,
    fft: Arc<dyn RealToComplex<f32>>,
    window: Vec<f32>,
    mel_fb: Array2<f32>,
}

impl MelEngine {
    pub fn new(cfg: EncoderConfig) -> Self {
        let mut planner = RealFftPlanner::<f32>::new();
        let fft = planner.plan_fft_forward(cfg.n_fft);
        let window = hann_window(cfg.n_fft);
        let mel_fb = mel_filterbank(cfg.sample_rate, cfg.n_fft, cfg.n_mels);
        Self { cfg, fft, window, mel_fb }
    }

    pub fn config(&self) -> &EncoderConfig { &self.cfg }

    /// Returns a `(n_mels, num_frames)` log-mel spectrogram.
    pub fn compute(&self, audio: ArrayView1<f32>) -> Array2<f32> {
        compute_mel(audio, &self.cfg, &*self.fft, &self.window, &self.mel_fb)
    }
}

pub struct Encoder<'a> {
    cfg: EncoderConfig,
    weights: &'a EncoderWeights,
    fft: Arc<dyn RealToComplex<f32>>,
    window: Vec<f32>,
    mel_fb: Array2<f32>,                   // (n_mels, n_fft/2+1)
}

impl<'a> Encoder<'a> {
    pub fn new(weights: &'a EncoderWeights, cfg: EncoderConfig) -> Self {
        let mut planner = RealFftPlanner::<f32>::new();
        let fft = planner.plan_fft_forward(cfg.n_fft);
        let window = hann_window(cfg.n_fft);
        let mel_fb = mel_filterbank(cfg.sample_rate, cfg.n_fft, cfg.n_mels);
        Self { cfg, weights, fft, window, mel_fb }
    }

    pub fn config(&self) -> &EncoderConfig { &self.cfg }

    /// Encode raw 24 kHz mono audio into `(num_frames, codebook_dim)` features.
    pub fn encode(&self, audio: ArrayView1<f32>) -> Array2<f32> {
        let mel = self.mel_spectrogram(audio);
        self.run_backbone(mel.view())
    }

    fn mel_spectrogram(&self, audio: ArrayView1<f32>) -> Array2<f32> {
        compute_mel(audio, &self.cfg, &*self.fft, &self.window, &self.mel_fb)
    }

    fn run_backbone(&self, mel: ArrayView2<f32>) -> Array2<f32> {
        let w = self.weights;
        let cfg = &self.cfg;

        let mut x = conv1d(
            mel,
            w.input_proj_weight.view(),
            Some(w.input_proj_bias.view()),
            1, (cfg.kernel_size - 1) / 2, 1, 1,
        );

        for block in &w.blocks {
            self.convnext_block_inplace(&mut x, block);
        }

        layer_norm_cl_inplace(
            &mut x,
            w.final_ln_weight.view(),
            w.final_ln_bias.view(),
            1e-6,
        );

        x.t().to_owned()
        // (T, dim) — quantizer projects to codebook_dim and looks up codes.
    }

    /// Single ConvNeXt block, fused to minimise allocations:
    /// padded buffer → depthwise conv → in-place LayerNorm → pw1 + GELU
    /// → pw2 → fused (residual += pw2 * gamma).
    fn convnext_block_inplace(
        &self,
        x: &mut Array2<f32>,
        block: &crate::weights::ConvNeXtBlockWeights,
    ) {
        let cfg = &self.cfg;
        let pad = (cfg.kernel_size - 1) / 2;

        let padded = reflect_pad1d(x.view(), pad, pad);
        let mut dw = conv1d(
            padded.view(), block.dw_weight.view(),
            Some(block.dw_bias.view()),
            1, 0, 1, cfg.dim,                       // depthwise: groups = dim
        );
        layer_norm_cl_inplace(&mut dw, block.ln_weight.view(), block.ln_bias.view(), 1e-6);

        let mut activated = conv1d(
            dw.view(), block.pw1_weight.view(),
            Some(block.pw1_bias.view()),
            1, 0, 1, 1,
        );
        activated.mapv_inplace(gelu);
        let pw2 = conv1d(
            activated.view(), block.pw2_weight.view(),
            Some(block.pw2_bias.view()),
            1, 0, 1, 1,
        );

        add_scaled_inplace(x, pw2.view(), block.gamma.view());
    }
}

fn compute_mel(
    audio: ArrayView1<f32>,
    cfg: &EncoderConfig,
    fft: &dyn RealToComplex<f32>,
    window: &[f32],
    mel_fb: &Array2<f32>,
) -> Array2<f32> {
    let n = audio.len();
    let half = cfg.n_fft / 2;

    let mut padded = vec![0.0f32; n + 2 * half];
    for i in 0..half {
        padded[i] = audio[(half - i).min(n - 1)];
    }
    padded[half..half + n].copy_from_slice(audio.as_slice().unwrap());
    for i in 0..half {
        padded[half + n + i] = audio[n - 2 - i.min(n - 2)];
    }

    let num_frames = 1 + n / cfg.hop_length;
    let n_bins = cfg.n_fft / 2 + 1;
    let mut frame = fft.make_input_vec();
    let mut spec = fft.make_output_vec();
    let mut mag = Array2::<f32>::zeros((n_bins, num_frames));

    for t in 0..num_frames {
        let off = t * cfg.hop_length;
        for k in 0..cfg.n_fft {
            frame[k] = padded[off + k] * window[k];
        }
        fft.process(&mut frame, &mut spec).expect("FFT failed");
        for f in 0..n_bins {
            let c = spec[f];
            mag[[f, t]] = (c.re * c.re + c.im * c.im).sqrt();
        }
    }

    let mel = mel_fb.dot(&mag);
    mel.mapv(|x| x.max(1e-5).ln())
}

fn hann_window(n: usize) -> Vec<f32> {
    (0..n).map(|i| {
        0.5 - 0.5 * ((2.0 * std::f32::consts::PI * i as f32) / (n - 1) as f32).cos()
    }).collect()
}

/// Slaney-norm mel filterbank, shape `(n_mels, n_fft/2+1)`.
fn mel_filterbank(sr: usize, n_fft: usize, n_mels: usize) -> Array2<f32> {
    let f_min = 0.0f32;
    let f_max = sr as f32 / 2.0;
    let m_min = hz_to_mel(f_min);
    let m_max = hz_to_mel(f_max);
    let mel_pts: Vec<f32> = (0..n_mels + 2)
        .map(|i| m_min + (m_max - m_min) * (i as f32) / (n_mels as f32 + 1.0))
        .collect();
    let hz_pts: Vec<f32> = mel_pts.iter().map(|&m| mel_to_hz(m)).collect();
    let bins: Vec<f32> = hz_pts.iter()
        .map(|&hz| hz * (n_fft as f32) / (sr as f32))
        .collect();

    let n_bins = n_fft / 2 + 1;
    let mut fb = Array2::<f32>::zeros((n_mels, n_bins));
    for m in 0..n_mels {
        let (l, c, r) = (bins[m], bins[m + 1], bins[m + 2]);
        let norm = 2.0 / (hz_pts[m + 2] - hz_pts[m]);   // Slaney
        for k in 0..n_bins {
            let kf = k as f32;
            let v = if kf < l || kf > r { 0.0 }
                    else if kf <= c { (kf - l) / (c - l) }
                    else            { (r - kf) / (r - c) };
            fb[[m, k]] = v * norm;
        }
    }
    fb
}

fn hz_to_mel(hz: f32) -> f32 { 2595.0 * (1.0 + hz / 700.0).log10() }
fn mel_to_hz(mel: f32) -> f32 { 700.0 * (10f32.powf(mel / 2595.0) - 1.0) }
