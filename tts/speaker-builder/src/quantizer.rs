//! Residual vector quantizer (single-stage, matching WavTokenizer-75's nq=1).
//!
//! WavTokenizer's quantizer is EnCodec-style: an input projection maps encoder
//! features into the codebook space, the nearest codebook vector is looked up
//! (giving an integer code), and a separate output projection would map the
//! quantized vector back to the encoder dim. For *cloning* we only need the
//! integer codes — not the dequantized vectors — so the output projection is
//! never run.
//!
//! Layouts:
//!   - features: `(num_frames, encoder_dim)`
//!   - in_proj:  `(codebook_dim, encoder_dim)`  → applied as `features @ in_proj.T`
//!   - codebook: `(codebook_size, codebook_dim)`
//!   - codes:    `(num_frames,)` u32, ranging `0..codebook_size`

use ndarray::{Array2, ArrayView2};

use crate::ops::pairwise_sq_dist;

pub struct Quantizer<'a> {
    pub in_proj: ArrayView2<'a, f32>,    // (D, E) where D = codebook_dim, E = encoder_dim
    pub codebook: ArrayView2<'a, f32>,   // (K, D)
}

impl<'a> Quantizer<'a> {
    /// Encode a batch of feature vectors into integer codes.
    pub fn encode(&self, features: ArrayView2<f32>) -> Vec<u32> {
        let projected = project(features, self.in_proj);
        argmin_to_codebook(projected.view(), self.codebook)
    }
}

fn project(features: ArrayView2<f32>, in_proj: ArrayView2<f32>) -> Array2<f32> {
    // (T, E) @ (D, E)^T = (T, D)
    features.dot(&in_proj.t())
}

fn argmin_to_codebook(x: ArrayView2<f32>, codebook: ArrayView2<f32>) -> Vec<u32> {
    let dists = pairwise_sq_dist(x, codebook);
    dists.outer_iter()
        .map(|row| {
            let mut best = (0u32, f32::INFINITY);
            for (j, &v) in row.iter().enumerate() {
                if v < best.1 { best = (j as u32, v); }
            }
            best.0
        })
        .collect()
}
