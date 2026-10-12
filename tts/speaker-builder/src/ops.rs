//! ML primitives matching PyTorch semantics. All ops operate on f32 ndarrays;
//! 1-D feature maps use channels-first layout `(channels, length)`.
//!
//! Performance notes:
//! - The general (non-depthwise) Conv1d uses **im2col + GEMM** so the heavy
//!   work falls on `matrixmultiply` (BLAS-quality on native, hand-tuned for
//!   WASM SIMD when built with `-C target-feature=+simd128`).
//! - Depthwise Conv1d uses a tight per-channel loop — there's no GEMM win
//!   when each output channel touches only one input channel.
//! - LayerNorm and per-channel scale are O(N) inplace where the borrow
//!   checker allows.
//! - Pairwise distance avoids the `||x||²` term per query and uses a single
//!   large matmul for the cross term.

use ndarray::{s, Array1, Array2, ArrayView1, ArrayView2, ArrayView3, Axis};

fn add_bias_inplace(out: &mut Array2<f32>, bias: ArrayView1<f32>) {
    let out_c = out.shape()[0];
    debug_assert_eq!(bias.len(), out_c);
    for c in 0..out_c {
        let bc = bias[c];
        out.row_mut(c).mapv_inplace(|x| x + bc);
    }
}

/// 1-D convolution. Matches `torch.nn.functional.conv1d`.
pub fn conv1d(
    input: ArrayView2<f32>,
    weight: ArrayView3<f32>,
    bias: Option<ArrayView1<f32>>,
    stride: usize,
    padding: usize,
    dilation: usize,
    groups: usize,
) -> Array2<f32> {
    if groups == input.shape()[0] && groups == weight.shape()[0] {
        depthwise_conv1d(input, weight, bias, stride, padding, dilation)
    } else if groups == 1 {
        gemm_conv1d(input, weight, bias, stride, padding, dilation)
    } else {
        grouped_conv1d(input, weight, bias, stride, padding, dilation, groups)
    }
}

fn out_len(in_len: usize, k: usize, stride: usize, padding: usize, dilation: usize) -> usize {
    let eff_k = dilation * (k - 1) + 1;
    (in_len + 2 * padding).saturating_sub(eff_k) / stride + 1
}

/// im2col + GEMM. For pointwise (`k=1, stride=1, padding=0`) convolutions —
/// which is the hot path inside ConvNeXt — we skip im2col entirely and treat
/// the conv as a direct `(out_c, in_c) @ (in_c, in_l)` matmul, taking a 2D
/// view of the kernel without any allocation. For larger kernels we fall
/// back to building a patches matrix.
fn gemm_conv1d(
    input: ArrayView2<f32>,
    weight: ArrayView3<f32>,
    bias: Option<ArrayView1<f32>>,
    stride: usize,
    padding: usize,
    dilation: usize,
) -> Array2<f32> {
    let (in_c, in_l) = (input.shape()[0], input.shape()[1]);
    let (out_c, w_in_c, k) = (weight.shape()[0], weight.shape()[1], weight.shape()[2]);
    debug_assert_eq!(in_c, w_in_c);

    if k == 1 && stride == 1 && padding == 0 {
        // weight: (out_c, in_c, 1) → take last-axis index 0 to get (out_c, in_c).
        let w2d = weight.index_axis(Axis(2), 0);
        let mut out = w2d.dot(&input);
        if let Some(b) = bias { add_bias_inplace(&mut out, b); }
        return out;
    }

    let out_l = out_len(in_l, k, stride, padding, dilation);
    let patch_rows = in_c * k;

    // Pack weights to (out_c, in_c*k).
    let weight_2d = {
        let mut m = Array2::<f32>::zeros((out_c, patch_rows));
        for oc in 0..out_c {
            for ic in 0..in_c {
                for kk in 0..k {
                    m[[oc, ic * k + kk]] = weight[[oc, ic, kk]];
                }
            }
        }
        m
    };

    let mut patches = Array2::<f32>::zeros((patch_rows, out_l));
    for o in 0..out_l {
        for ic in 0..in_c {
            for kk in 0..k {
                let i = (o * stride + kk * dilation) as isize - padding as isize;
                if i < 0 || i as usize >= in_l { continue; }
                patches[[ic * k + kk, o]] = input[[ic, i as usize]];
            }
        }
    }

    let mut out = weight_2d.dot(&patches);
    if let Some(b) = bias { add_bias_inplace(&mut out, b); }
    out
}

/// Depthwise: groups == in_c == out_c. One channel of input × one kernel row.
fn depthwise_conv1d(
    input: ArrayView2<f32>,
    weight: ArrayView3<f32>,
    bias: Option<ArrayView1<f32>>,
    stride: usize,
    padding: usize,
    dilation: usize,
) -> Array2<f32> {
    let (c, in_l) = (input.shape()[0], input.shape()[1]);
    let k = weight.shape()[2];
    let out_l = out_len(in_l, k, stride, padding, dilation);
    let mut out = Array2::<f32>::zeros((c, out_l));

    for ch in 0..c {
        let in_row = input.row(ch);
        let kernel = weight.slice(s![ch, 0, ..]);
        let bias_v = bias.map(|b| b[ch]).unwrap_or(0.0);
        let mut out_row = out.row_mut(ch);
        for o in 0..out_l {
            let mut acc = bias_v;
            for kk in 0..k {
                let i = (o * stride + kk * dilation) as isize - padding as isize;
                if i < 0 || i as usize >= in_l { continue; }
                acc += in_row[i as usize] * kernel[kk];
            }
            out_row[o] = acc;
        }
    }
    out
}

fn grouped_conv1d(
    input: ArrayView2<f32>,
    weight: ArrayView3<f32>,
    bias: Option<ArrayView1<f32>>,
    stride: usize,
    padding: usize,
    dilation: usize,
    groups: usize,
) -> Array2<f32> {
    let (in_c, _) = (input.shape()[0], input.shape()[1]);
    let (out_c, _, _) = (weight.shape()[0], weight.shape()[1], weight.shape()[2]);
    let in_per = in_c / groups;
    let out_per = out_c / groups;

    let mut pieces = Vec::with_capacity(groups);
    for g in 0..groups {
        let in_g = input.slice(s![g * in_per..(g + 1) * in_per, ..]);
        let w_g  = weight.slice(s![g * out_per..(g + 1) * out_per, .., ..]);
        let b_g = bias.map(|b| b.slice_move(s![g * out_per..(g + 1) * out_per]));
        pieces.push(gemm_conv1d(in_g, w_g, b_g, stride, padding, dilation));
    }

    let out_l = pieces[0].shape()[1];
    let mut out = Array2::<f32>::zeros((out_c, out_l));
    for (g, piece) in pieces.into_iter().enumerate() {
        out.slice_mut(s![g * out_per..(g + 1) * out_per, ..]).assign(&piece);
    }
    out
}

/// LayerNorm over the last axis of a `(N, D)` tensor.
pub fn layer_norm(
    input: ArrayView2<f32>,
    weight: ArrayView1<f32>,
    bias: ArrayView1<f32>,
    eps: f32,
) -> Array2<f32> {
    let d = input.shape()[1];
    debug_assert_eq!(weight.len(), d);
    debug_assert_eq!(bias.len(), d);
    let mut out = input.to_owned();
    for mut row in out.axis_iter_mut(Axis(0)) {
        let mean = row.mean().unwrap_or(0.0);
        let var: f32 = row.iter().map(|x| (x - mean).powi(2)).sum::<f32>() / d as f32;
        let inv = 1.0 / (var + eps).sqrt();
        for j in 0..d {
            row[j] = (row[j] - mean) * inv * weight[j] + bias[j];
        }
    }
    out
}

/// LayerNorm applied per-position to a channels-first `(C, L)` tensor.
pub fn layer_norm_cl(
    input: ArrayView2<f32>,
    weight: ArrayView1<f32>,
    bias: ArrayView1<f32>,
    eps: f32,
) -> Array2<f32> {
    let mut out = input.to_owned();
    layer_norm_cl_inplace(&mut out, weight, bias, eps);
    out
}

/// In-place version. The `(C, L)` tensor is row-major, so naïve per-column
/// iteration would stride by `L` elements per access and thrash cache. Instead
/// we run **three contiguous passes** along the L axis, accumulating per-column
/// statistics in side buffers. Each pass scans the matrix in memory order,
/// staying cache-friendly even at large channel widths.
pub fn layer_norm_cl_inplace(
    input: &mut Array2<f32>,
    weight: ArrayView1<f32>,
    bias: ArrayView1<f32>,
    eps: f32,
) {
    let (c, l) = (input.shape()[0], input.shape()[1]);
    debug_assert_eq!(weight.len(), c);
    debug_assert_eq!(bias.len(), c);
    let inv_c = 1.0 / c as f32;

    // Pass 1: per-column sums (then convert to means in-place).
    let mut means = vec![0.0f32; l];
    for ch in 0..c {
        let row = input.row(ch);
        let row_s = row.as_slice().expect("row contiguous");
        for col in 0..l { means[col] += row_s[col]; }
    }
    for m in means.iter_mut() { *m *= inv_c; }

    // Pass 2: per-column squared deviations → invs.
    let mut invs = vec![0.0f32; l];
    for ch in 0..c {
        let row = input.row(ch);
        let row_s = row.as_slice().expect("row contiguous");
        for col in 0..l {
            let d = row_s[col] - means[col];
            invs[col] += d * d;
        }
    }
    for col in 0..l { invs[col] = 1.0 / (invs[col] * inv_c + eps).sqrt(); }

    // Pass 3: normalise + affine.
    for ch in 0..c {
        let w = weight[ch];
        let b = bias[ch];
        let mut row = input.row_mut(ch);
        let row_s = row.as_slice_mut().expect("row contiguous");
        for col in 0..l {
            row_s[col] = (row_s[col] - means[col]) * invs[col] * w + b;
        }
    }
}

/// Fused `out += rhs * gamma_per_channel` — replaces a chain of
/// `channel_scale(rhs, gamma); &out + &scaled` with a single pass over the
/// data, avoiding the temporary scaled buffer.
pub fn add_scaled_inplace(
    out: &mut Array2<f32>,
    rhs: ArrayView2<f32>,
    gamma: ArrayView1<f32>,
) {
    let (c, l) = (out.shape()[0], out.shape()[1]);
    debug_assert_eq!(rhs.shape(), &[c, l]);
    debug_assert_eq!(gamma.len(), c);
    for ch in 0..c {
        let g = gamma[ch];
        for col in 0..l {
            out[[ch, col]] += rhs[[ch, col]] * g;
        }
    }
}

/// GELU (PyTorch default = "tanh approximation").
pub fn gelu(x: f32) -> f32 {
    const C: f32 = 0.7978845608028654;       // sqrt(2/pi)
    let inner = C * (x + 0.044715 * x * x * x);
    0.5 * x * (1.0 + inner.tanh())
}

/// Reflect-pad a `(C, L)` tensor along the length axis.
pub fn reflect_pad1d(input: ArrayView2<f32>, left: usize, right: usize) -> Array2<f32> {
    let (c, l) = (input.shape()[0], input.shape()[1]);
    let new_l = l + left + right;
    let mut out = Array2::<f32>::zeros((c, new_l));
    for ch in 0..c {
        for i in 0..left {
            out[[ch, i]] = input[[ch, left - i]];
        }
        for i in 0..l {
            out[[ch, left + i]] = input[[ch, i]];
        }
        for i in 0..right {
            out[[ch, left + l + i]] = input[[ch, l - 2 - i]];
        }
    }
    out
}

/// Element-wise per-channel scale.
pub fn channel_scale(mut input: Array2<f32>, gamma: ArrayView1<f32>) -> Array2<f32> {
    let c = input.shape()[0];
    debug_assert_eq!(gamma.len(), c);
    for ch in 0..c {
        let g = gamma[ch];
        input.row_mut(ch).mapv_inplace(|x| x * g);
    }
    input
}

/// Squared L2 distance from each row of `x` to each row of `codebook`.
/// Computed via the GEMM identity `||x-c||² = ||x||² + ||c||² - 2 x·c`.
/// `x`: `(N, D)`, `codebook`: `(K, D)` ⇒ output `(N, K)`.
pub fn pairwise_sq_dist(x: ArrayView2<f32>, codebook: ArrayView2<f32>) -> Array2<f32> {
    let n = x.shape()[0];
    let k = codebook.shape()[0];
    let x_sq: Array1<f32> = x.outer_iter().map(|r| r.dot(&r)).collect();
    let c_sq: Array1<f32> = codebook.outer_iter().map(|r| r.dot(&r)).collect();
    let mut out = x.dot(&codebook.t());                   // (N, K), starts as x·c
    for i in 0..n {
        let xi = x_sq[i];
        for j in 0..k {
            out[[i, j]] = xi + c_sq[j] - 2.0 * out[[i, j]];
        }
    }
    out
}
