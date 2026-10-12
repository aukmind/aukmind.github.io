//! Benchmarks for the encoder hot paths.
//!
//! Run with `cargo bench`. The encoder benchmark uses a config that mirrors
//! WavTokenizer-75-3s (n_fft=1024, n_mels=100, dim=512, intermediate=1536,
//! 8 ConvNeXt blocks). Adjust to your real config once weights are exported.
//!
//! Reported numbers will be conservative — wasm-pack release builds are
//! comparable to cargo --release, but the WASM SIMD path (only available
//! when built with `RUSTFLAGS="-C target-feature=+simd128"`) can be ~2x
//! faster than scalar WASM.

use criterion::{black_box, criterion_group, criterion_main, BenchmarkId, Criterion, Throughput};
use ndarray::{Array1, Array2, Array3};
use speaker_builder::encoder::{Encoder, EncoderConfig};
use speaker_builder::ops::{conv1d, layer_norm, pairwise_sq_dist};
use speaker_builder::quantizer::Quantizer;
use speaker_builder::weights::{ConvNeXtBlockWeights, EncoderWeights};

fn realistic_config() -> EncoderConfig {
    EncoderConfig {
        n_fft: 1024,
        hop_length: 320,
        n_mels: 100,
        dim: 512,
        intermediate_dim: 1536,
        num_layers: 8,
        kernel_size: 7,
        layer_scale_init: 1e-6,
        sample_rate: 24000,
        codebook_size: 4096,
        codebook_dim: 512,
    }
}

fn synth_weights(cfg: &EncoderConfig) -> EncoderWeights {
    let small = |s: (usize, usize, usize)| Array3::from_shape_fn(s, |_| 0.001);
    let one1 = |n| Array1::from_elem(n, 1.0);
    let zero1 = |n| Array1::zeros(n);
    EncoderWeights {
        input_proj_weight:  small((cfg.dim, cfg.n_mels, cfg.kernel_size)),
        input_proj_bias:    zero1(cfg.dim),
        blocks: (0..cfg.num_layers).map(|_| ConvNeXtBlockWeights {
            dw_weight:  small((cfg.dim, 1, cfg.kernel_size)),
            dw_bias:    zero1(cfg.dim),
            ln_weight:  one1(cfg.dim),
            ln_bias:    zero1(cfg.dim),
            pw1_weight: small((cfg.intermediate_dim, cfg.dim, 1)),
            pw1_bias:   zero1(cfg.intermediate_dim),
            pw2_weight: small((cfg.dim, cfg.intermediate_dim, 1)),
            pw2_bias:   zero1(cfg.dim),
            gamma:      Array1::from_elem(cfg.dim, cfg.layer_scale_init),
        }).collect(),
        final_ln_weight: one1(cfg.dim),
        final_ln_bias:   zero1(cfg.dim),
    }
}

fn bench_encode(c: &mut Criterion) {
    let cfg = realistic_config();
    let w = synth_weights(&cfg);
    let encoder = Encoder::new(&w, cfg);

    let mut group = c.benchmark_group("encode");
    for &seconds in &[1usize, 3, 5] {
        let n = seconds * 24000;
        group.throughput(Throughput::Elements(n as u64));
        let audio: Array1<f32> = Array1::from_iter((0..n).map(|i| ((i as f32) * 0.01).sin()));
        group.bench_with_input(BenchmarkId::from_parameter(seconds), &audio, |b, audio| {
            b.iter(|| black_box(encoder.encode(audio.view())));
        });
    }
    group.finish();
}

fn bench_conv1d(c: &mut Criterion) {
    // Realistic shape: pointwise expand inside a ConvNeXt block.
    let input = Array2::<f32>::from_shape_fn((512, 75), |(i, j)| (i + j) as f32 * 0.001);
    let weight = Array3::<f32>::from_shape_fn((1536, 512, 1), |_| 0.0001);
    c.bench_function("conv1d_pointwise_expand", |b| {
        b.iter(|| black_box(conv1d(input.view(), weight.view(), None, 1, 0, 1, 1)));
    });

    let dw_input = Array2::<f32>::from_shape_fn((512, 81), |(i, j)| (i + j) as f32 * 0.001);
    let dw_weight = Array3::<f32>::from_shape_fn((512, 1, 7), |_| 0.001);
    c.bench_function("conv1d_depthwise_k7", |b| {
        b.iter(|| black_box(conv1d(dw_input.view(), dw_weight.view(), None, 1, 0, 1, 512)));
    });
}

fn bench_quantizer(c: &mut Criterion) {
    let n = 75;
    let d = 512;
    let k = 4096;
    let features = Array2::<f32>::from_shape_fn((n, d), |(i, j)| ((i + j) as f32).sin());
    let codebook = Array2::<f32>::from_shape_fn((k, d), |(i, j)| ((i + j) as f32 * 0.01).cos());
    let in_proj = Array2::<f32>::eye(d);
    let q = Quantizer { in_proj: in_proj.view(), codebook: codebook.view() };

    c.bench_function("quantizer_75_frames_4096_codes", |b| {
        b.iter(|| black_box(q.encode(features.view())));
    });

    c.bench_function("pairwise_sq_dist_75x4096", |b| {
        b.iter(|| black_box(pairwise_sq_dist(features.view(), codebook.view())));
    });
}

fn bench_layer_norm(c: &mut Criterion) {
    let x = Array2::<f32>::from_shape_fn((75, 512), |(i, j)| (i + j) as f32);
    let g = Array1::from_elem(512, 1.0);
    let b = Array1::zeros(512);
    c.bench_function("layer_norm_75x512", |bench| {
        bench.iter(|| black_box(layer_norm(x.view(), g.view(), b.view(), 1e-6)));
    });
}

#[cfg(feature = "webgpu")]
fn bench_gpu_encode(c: &mut Criterion) {
    use speaker_builder::gpu::{GpuContext, GpuEncoder};
    use speaker_builder::weights::{ConvNeXtBlockWeights, EncoderWeights, LoadedModel, QuantizerWeights};

    let cfg = realistic_config();
    let small3 = |s: (usize, usize, usize)| Array3::from_shape_fn(s, |_| 0.001f32);
    let small2 = |s: (usize, usize)| ndarray::Array2::from_shape_fn(s, |_| 0.001f32);
    let one1 = |n| Array1::from_elem(n, 1.0);
    let zero1 = |n| Array1::zeros(n);
    let model = LoadedModel {
        encoder: EncoderWeights {
            input_proj_weight: small3((cfg.dim, cfg.n_mels, cfg.kernel_size)),
            input_proj_bias:   zero1(cfg.dim),
            blocks: (0..cfg.num_layers).map(|_| ConvNeXtBlockWeights {
                dw_weight:  small3((cfg.dim, 1, cfg.kernel_size)),
                dw_bias:    zero1(cfg.dim),
                ln_weight:  one1(cfg.dim),
                ln_bias:    zero1(cfg.dim),
                pw1_weight: small3((cfg.intermediate_dim, cfg.dim, 1)),
                pw1_bias:   zero1(cfg.intermediate_dim),
                pw2_weight: small3((cfg.dim, cfg.intermediate_dim, 1)),
                pw2_bias:   zero1(cfg.dim),
                gamma:      Array1::from_elem(cfg.dim, cfg.layer_scale_init),
            }).collect(),
            final_ln_weight: one1(cfg.dim),
            final_ln_bias:   zero1(cfg.dim),
        },
        quantizer: QuantizerWeights {
            in_proj_weight: small2((cfg.codebook_dim, cfg.dim)),
            codebook:       small2((cfg.codebook_size, cfg.codebook_dim)),
        },
    };

    let ctx = match GpuContext::new_blocking() {
        Ok(c) => c,
        Err(e) => { eprintln!("skipping GPU bench: {e}"); return; }
    };
    let gpu_enc = GpuEncoder::new(ctx, &model, cfg, 1024);

    let mut group = c.benchmark_group("encode_gpu");
    for &seconds in &[1usize, 3, 5] {
        let n = seconds * 24000;
        group.throughput(Throughput::Elements(n as u64));
        let audio: Array1<f32> = Array1::from_iter((0..n).map(|i| ((i as f32) * 0.01).sin()));
        group.bench_with_input(BenchmarkId::from_parameter(seconds), &audio, |b, audio| {
            b.iter(|| {
                let codes = pollster::block_on(gpu_enc.encode(audio.view()));
                black_box(codes);
            });
        });
    }
    group.finish();
}

#[cfg(feature = "webgpu")]
criterion_group!(benches, bench_encode, bench_conv1d, bench_quantizer, bench_layer_norm, bench_gpu_encode);
#[cfg(not(feature = "webgpu"))]
criterion_group!(benches, bench_encode, bench_conv1d, bench_quantizer, bench_layer_norm);
criterion_main!(benches);
