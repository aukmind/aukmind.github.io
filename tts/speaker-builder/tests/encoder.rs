//! Smoke tests for the full encoder pipeline.
//!
//! Without a real WavTokenizer checkpoint we can't check numerics against the
//! PyTorch reference — that's what `tools/parity_check.py` is for. These
//! tests run the encoder with random weights and verify:
//!   - it doesn't panic on a range of input lengths
//!   - the number of output frames matches `floor(num_samples / hop_length) + 1`
//!   - quantisation produces codes inside `[0, codebook_size)`
//!   - `encode()` is deterministic

use ndarray::{Array1, Array2, Array3, ArrayView1};
use speaker_builder::encoder::{Encoder, EncoderConfig};
use speaker_builder::quantizer::Quantizer;
use speaker_builder::weights::{ConvNeXtBlockWeights, EncoderWeights};

/// Build a small but architecturally-faithful encoder with random-ish weights.
/// Sizes are small for fast tests; real WavTokenizer-75 is much larger.
fn tiny_config() -> EncoderConfig {
    EncoderConfig {
        n_fft: 256,
        hop_length: 64,
        n_mels: 16,
        dim: 32,
        intermediate_dim: 64,
        num_layers: 2,
        kernel_size: 7,
        layer_scale_init: 1e-6,
        sample_rate: 24000,
        codebook_size: 64,
        codebook_dim: 16,
    }
}

fn random_weights(cfg: &EncoderConfig) -> EncoderWeights {
    use std::cell::Cell;
    let seed = Cell::new(0x9E3779B97F4A7C15u64);
    let next = || -> f32 {
        let mut x = seed.get();
        x ^= x << 13;
        x ^= x >> 7;
        x ^= x << 17;
        seed.set(x);
        ((x as i32 as f32) / (i32::MAX as f32)) * 0.05
    };
    let fill1 = |n: usize, default: f32| -> Array1<f32> {
        Array1::from_iter((0..n).map(|_| { let _ = next(); default }))
    };
    let fill3_rand = |s: (usize, usize, usize)| -> Array3<f32> {
        Array3::from_shape_simple_fn(s, &mut || next())
    };

    let mut blocks = Vec::with_capacity(cfg.num_layers);
    for _ in 0..cfg.num_layers {
        blocks.push(ConvNeXtBlockWeights {
            dw_weight:  fill3_rand((cfg.dim, 1, cfg.kernel_size)),
            dw_bias:    fill1(cfg.dim, 0.0),
            ln_weight:  fill1(cfg.dim, 1.0),
            ln_bias:    fill1(cfg.dim, 0.0),
            pw1_weight: fill3_rand((cfg.intermediate_dim, cfg.dim, 1)),
            pw1_bias:   fill1(cfg.intermediate_dim, 0.0),
            pw2_weight: fill3_rand((cfg.dim, cfg.intermediate_dim, 1)),
            pw2_bias:   fill1(cfg.dim, 0.0),
            gamma:      fill1(cfg.dim, cfg.layer_scale_init),
        });
    }

    EncoderWeights {
        input_proj_weight: fill3_rand((cfg.dim, cfg.n_mels, cfg.kernel_size)),
        input_proj_bias:   fill1(cfg.dim, 0.0),
        blocks,
        final_ln_weight:   fill1(cfg.dim, 1.0),
        final_ln_bias:     fill1(cfg.dim, 0.0),
    }
}

fn random_codebook(cfg: &EncoderConfig) -> (Array2<f32>, Array2<f32>) {
    // Quantizer in_proj maps encoder-dim features → codebook_dim.
    let in_proj = Array2::from_shape_fn((cfg.codebook_dim, cfg.dim), |(i, j)| {
        ((i + j) as f32 * 0.001) - 0.05
    });
    let codebook = Array2::from_shape_fn((cfg.codebook_size, cfg.codebook_dim), |(i, j)| {
        ((i * 7 + j * 11) as f32 * 0.01).sin()
    });
    (in_proj, codebook)
}

#[test]
fn encoder_handles_a_range_of_input_lengths() {
    let cfg = tiny_config();
    let w = random_weights(&cfg);
    let encoder = Encoder::new(&w, cfg.clone());

    for n_samples in [256, 512, 1024, 4096, 24000] {
        let audio = Array1::from_iter((0..n_samples).map(|i| ((i as f32) * 0.01).sin()));
        let features = encoder.encode(audio.view());
        let expected_frames = 1 + n_samples / cfg.hop_length;
        assert_eq!(features.shape()[0], expected_frames, "frame count for {n_samples}");
        assert_eq!(features.shape()[1], cfg.dim);
    }
}

#[test]
fn encoder_is_deterministic() {
    let cfg = tiny_config();
    let w = random_weights(&cfg);
    let encoder = Encoder::new(&w, cfg);

    let audio: Array1<f32> = Array1::from_iter((0..2400).map(|i| ((i as f32) * 0.02).sin()));
    let a = encoder.encode(audio.view());
    let b = encoder.encode(audio.view());
    assert_eq!(a, b);
}

#[test]
fn quantizer_codes_are_in_range() {
    let cfg = tiny_config();
    let w = random_weights(&cfg);
    let (in_proj, codebook) = random_codebook(&cfg);
    let encoder = Encoder::new(&w, cfg.clone());

    let audio: Array1<f32> = Array1::from_iter((0..4800).map(|i| ((i as f32) * 0.03).sin()));
    let features = encoder.encode(audio.view());
    let q = Quantizer { in_proj: in_proj.view(), codebook: codebook.view() };
    let codes = q.encode(features.view());

    assert_eq!(codes.len(), features.shape()[0]);
    for &c in &codes {
        assert!(c < cfg.codebook_size as u32, "code {c} out of range");
    }
}

#[test]
fn frames_per_second_matches_sr_over_hop() {
    let cfg = tiny_config();
    let _ = ArrayView1::<f32>::from(&[]);   // touch ArrayView1 for import
    assert!((cfg.frames_per_second() - 24000.0 / 64.0).abs() < 1e-4);
}
