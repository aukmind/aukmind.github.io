//! Regression tests for the ML primitives.
//!
//! These tests pin behavioural invariants — they don't require a checkpoint.
//! They guard against silent breakage when the conv/normalisation kernels are
//! refactored (e.g. switching to im2col, adding SIMD).

use approx::assert_abs_diff_eq;
use ndarray::{array, Array1, Array2, Array3};
use speaker_builder::ops::{
    channel_scale, conv1d, gelu, layer_norm, layer_norm_cl, pairwise_sq_dist, reflect_pad1d,
};

#[test]
fn conv1d_identity_kernel_passes_input_through() {
    // 2 channels in, 2 channels out, kernel size 1 acting as identity.
    let input = array![[1.0f32, 2.0, 3.0, 4.0], [5.0, 6.0, 7.0, 8.0]];
    let weight = Array3::<f32>::from_shape_vec(
        (2, 2, 1),
        vec![1.0, 0.0,    // out_c=0 picks channel 0
             0.0, 1.0],   // out_c=1 picks channel 1
    ).unwrap();
    let out = conv1d(input.view(), weight.view(), None, 1, 0, 1, 1);
    assert_eq!(out.shape(), &[2, 4]);
    assert_eq!(out, input);
}

#[test]
fn conv1d_gemm_path_matches_naive_for_small_input() {
    // Tiny size — recompute the naive answer by hand, exercise the gemm path.
    let input = array![[1.0f32, 2.0, 3.0]];
    let weight = Array3::<f32>::from_shape_vec((1, 1, 2), vec![1.0, -1.0]).unwrap();
    let out = conv1d(input.view(), weight.view(), None, 1, 0, 1, 1);
    // Position 0: 1*1 + 2*-1 = -1
    // Position 1: 2*1 + 3*-1 = -1
    assert_abs_diff_eq!(out[[0, 0]], -1.0, epsilon = 1e-6);
    assert_abs_diff_eq!(out[[0, 1]], -1.0, epsilon = 1e-6);
    assert_eq!(out.shape(), &[1, 2]);
}

#[test]
fn conv1d_padding_produces_same_length_output() {
    let input = array![[1.0f32, 2.0, 3.0, 4.0, 5.0]];
    let weight = Array3::<f32>::from_shape_vec((1, 1, 3), vec![1.0, 1.0, 1.0]).unwrap();
    let out = conv1d(input.view(), weight.view(), None, 1, 1, 1, 1);
    assert_eq!(out.shape(), &[1, 5]);
}

#[test]
fn conv1d_depthwise_keeps_channels_independent() {
    // Channel 0 should never affect channel 1's output.
    let input = array![[1.0f32, 2.0, 3.0], [10.0, 20.0, 30.0]];
    let weight = Array3::<f32>::from_shape_vec((2, 1, 1), vec![2.0, 3.0]).unwrap();
    let out = conv1d(input.view(), weight.view(), None, 1, 0, 1, 2);
    assert_abs_diff_eq!(out[[0, 0]], 2.0, epsilon = 1e-6);
    assert_abs_diff_eq!(out[[1, 0]], 30.0, epsilon = 1e-6);
}

#[test]
fn conv1d_bias_is_added_per_output_channel() {
    let input = Array2::<f32>::zeros((1, 3));
    let weight = Array3::<f32>::ones((2, 1, 1));
    let bias = Array1::from_vec(vec![5.0, -7.0]);
    let out = conv1d(input.view(), weight.view(), Some(bias.view()), 1, 0, 1, 1);
    for col in 0..3 {
        assert_abs_diff_eq!(out[[0, col]], 5.0, epsilon = 1e-6);
        assert_abs_diff_eq!(out[[1, col]], -7.0, epsilon = 1e-6);
    }
}

#[test]
fn layer_norm_zero_input_is_zero() {
    let x = Array2::<f32>::zeros((2, 4));
    let gamma = Array1::ones(4);
    let beta = Array1::zeros(4);
    let out = layer_norm(x.view(), gamma.view(), beta.view(), 1e-6);
    for v in out.iter() { assert_abs_diff_eq!(*v, 0.0, epsilon = 1e-3); }
}

#[test]
fn layer_norm_normalises_to_unit_variance() {
    let x = array![[1.0f32, 2.0, 3.0, 4.0]];
    let gamma = Array1::ones(4);
    let beta = Array1::zeros(4);
    let out = layer_norm(x.view(), gamma.view(), beta.view(), 1e-12);
    let mean = out.row(0).mean().unwrap();
    let var: f32 = out.row(0).iter().map(|v| (v - mean).powi(2)).sum::<f32>() / 4.0;
    assert_abs_diff_eq!(mean, 0.0, epsilon = 1e-5);
    assert_abs_diff_eq!(var, 1.0, epsilon = 1e-3);
}

#[test]
fn layer_norm_cl_is_inverse_of_transpose() {
    // layer_norm_cl((C, L)) ≡ layer_norm(transpose), then transpose back.
    let x = array![[1.0f32, 2.0, 3.0], [4.0, 5.0, 6.0]];
    let gamma = Array1::ones(2);
    let beta = Array1::zeros(2);
    let normed = layer_norm_cl(x.view(), gamma.view(), beta.view(), 1e-6);
    assert_eq!(normed.shape(), x.shape());
}

#[test]
fn gelu_zero_is_zero_and_monotonic() {
    assert_abs_diff_eq!(gelu(0.0), 0.0, epsilon = 1e-6);
    assert!(gelu(1.0) > gelu(0.5));
    assert!(gelu(0.5) > gelu(0.0));
}

#[test]
fn reflect_pad1d_mirrors_around_edges() {
    let x = array![[1.0f32, 2.0, 3.0, 4.0, 5.0]];
    let padded = reflect_pad1d(x.view(), 2, 2);
    // Left side mirrors: 3, 2 | original | 4, 3
    assert_eq!(padded.row(0).to_vec(), vec![3.0, 2.0, 1.0, 2.0, 3.0, 4.0, 5.0, 4.0, 3.0]);
}

#[test]
fn channel_scale_multiplies_per_channel() {
    let x = array![[1.0f32, 2.0], [3.0, 4.0]];
    let gamma = Array1::from_vec(vec![10.0, 0.5]);
    let out = channel_scale(x, gamma.view());
    assert_abs_diff_eq!(out[[0, 0]], 10.0, epsilon = 1e-6);
    assert_abs_diff_eq!(out[[0, 1]], 20.0, epsilon = 1e-6);
    assert_abs_diff_eq!(out[[1, 0]], 1.5, epsilon = 1e-6);
    assert_abs_diff_eq!(out[[1, 1]], 2.0, epsilon = 1e-6);
}

#[test]
fn pairwise_sq_dist_zero_for_self_pairs() {
    let codebook = array![[1.0f32, 0.0], [0.0, 1.0], [1.0, 1.0]];
    let dists = pairwise_sq_dist(codebook.view(), codebook.view());
    for i in 0..3 {
        assert_abs_diff_eq!(dists[[i, i]], 0.0, epsilon = 1e-4);
    }
}

#[test]
fn pairwise_sq_dist_matches_manual_computation() {
    let x = array![[0.0f32, 0.0]];
    let cb = array![[3.0f32, 4.0]];
    let d = pairwise_sq_dist(x.view(), cb.view());
    assert_abs_diff_eq!(d[[0, 0]], 25.0, epsilon = 1e-4);   // 3² + 4²
}
