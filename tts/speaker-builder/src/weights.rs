//! Load encoder + quantizer weights from a single `.safetensors` file.
//!
//! Naming convention (mirrored by `tools/export_weights.py`):
//!
//!   input_proj.weight       (dim, n_mels, k)        Conv1d
//!   input_proj.bias         (dim,)
//!   blocks.{i}.dw.weight    (dim, 1, kernel)        depthwise Conv1d
//!   blocks.{i}.dw.bias      (dim,)
//!   blocks.{i}.ln.weight    (dim,)                  LayerNorm γ
//!   blocks.{i}.ln.bias      (dim,)                  LayerNorm β
//!   blocks.{i}.pw1.weight   (intermediate, dim, 1)  pointwise expand
//!   blocks.{i}.pw1.bias     (intermediate,)
//!   blocks.{i}.pw2.weight   (dim, intermediate, 1)  pointwise project
//!   blocks.{i}.pw2.bias     (dim,)
//!   blocks.{i}.gamma        (dim,)                  per-channel scale
//!   final_ln.weight         (dim,)
//!   final_ln.bias           (dim,)
//!   quant.in_proj.weight    (codebook_dim, dim)     Linear
//!   quant.codebook          (codebook_size, codebook_dim)
//!
//! Note: Vocos puts the projection from encoder-dim to codebook-dim *inside*
//! the quantizer (`quant.in_proj`), not at the end of the backbone — so the
//! encoder weights stop at `final_ln`, and the encoder output is `(T, dim)`.

use ndarray::{Array1, Array2, Array3};
use safetensors::tensor::SafeTensors;

use crate::encoder::EncoderConfig;

#[derive(Debug)]
pub struct ConvNeXtBlockWeights {
    pub dw_weight:  Array3<f32>,
    pub dw_bias:    Array1<f32>,
    pub ln_weight:  Array1<f32>,
    pub ln_bias:    Array1<f32>,
    pub pw1_weight: Array3<f32>,
    pub pw1_bias:   Array1<f32>,
    pub pw2_weight: Array3<f32>,
    pub pw2_bias:   Array1<f32>,
    pub gamma:      Array1<f32>,
}

#[derive(Debug)]
pub struct EncoderWeights {
    pub input_proj_weight:  Array3<f32>,
    pub input_proj_bias:    Array1<f32>,
    pub blocks:             Vec<ConvNeXtBlockWeights>,
    pub final_ln_weight:    Array1<f32>,
    pub final_ln_bias:      Array1<f32>,
}

#[derive(Debug)]
pub struct QuantizerWeights {
    pub in_proj_weight: Array2<f32>,
    pub codebook:       Array2<f32>,
}

#[derive(Debug)]
pub struct LoadedModel {
    pub encoder:   EncoderWeights,
    pub quantizer: QuantizerWeights,
}

#[derive(Debug)]
pub enum LoadError {
    Parse(String),
    Missing(String),
    Shape { name: String, expected: Vec<usize>, got: Vec<usize> },
}

impl std::fmt::Display for LoadError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::Parse(e) => write!(f, "safetensors parse: {e}"),
            Self::Missing(n) => write!(f, "missing tensor: {n}"),
            Self::Shape { name, expected, got } =>
                write!(f, "shape mismatch for {name}: expected {expected:?}, got {got:?}"),
        }
    }
}

impl std::error::Error for LoadError {}

impl LoadedModel {
    pub fn from_safetensors_bytes(bytes: &[u8], cfg: &EncoderConfig) -> Result<Self, LoadError> {
        let st = SafeTensors::deserialize(bytes).map_err(|e| LoadError::Parse(e.to_string()))?;

        let read1 = |name: &str, expected: usize| -> Result<Array1<f32>, LoadError> {
            let t = st.tensor(name).map_err(|_| LoadError::Missing(name.into()))?;
            let shape = t.shape().to_vec();
            if shape != [expected] {
                return Err(LoadError::Shape { name: name.into(), expected: vec![expected], got: shape });
            }
            Ok(Array1::from_vec(bytes_to_f32(t.data())))
        };
        let read2 = |name: &str, e0: usize, e1: usize| -> Result<Array2<f32>, LoadError> {
            let t = st.tensor(name).map_err(|_| LoadError::Missing(name.into()))?;
            let shape = t.shape().to_vec();
            if shape != [e0, e1] {
                return Err(LoadError::Shape { name: name.into(), expected: vec![e0, e1], got: shape });
            }
            Ok(Array2::from_shape_vec((e0, e1), bytes_to_f32(t.data())).unwrap())
        };
        let read3 = |name: &str, e0: usize, e1: usize, e2: usize| -> Result<Array3<f32>, LoadError> {
            let t = st.tensor(name).map_err(|_| LoadError::Missing(name.into()))?;
            let shape = t.shape().to_vec();
            if shape != [e0, e1, e2] {
                return Err(LoadError::Shape { name: name.into(), expected: vec![e0, e1, e2], got: shape });
            }
            Ok(Array3::from_shape_vec((e0, e1, e2), bytes_to_f32(t.data())).unwrap())
        };

        let dim = cfg.dim;
        let inter = cfg.intermediate_dim;
        let mels = cfg.n_mels;
        let k = cfg.kernel_size;

        let input_proj_weight = read3("input_proj.weight", dim, mels, k)?;
        let input_proj_bias   = read1("input_proj.bias", dim)?;
        let final_ln_weight   = read1("final_ln.weight", dim)?;
        let final_ln_bias     = read1("final_ln.bias", dim)?;

        let mut blocks = Vec::with_capacity(cfg.num_layers);
        for i in 0..cfg.num_layers {
            blocks.push(ConvNeXtBlockWeights {
                dw_weight:  read3(&format!("blocks.{i}.dw.weight"), dim, 1, k)?,
                dw_bias:    read1(&format!("blocks.{i}.dw.bias"), dim)?,
                ln_weight:  read1(&format!("blocks.{i}.ln.weight"), dim)?,
                ln_bias:    read1(&format!("blocks.{i}.ln.bias"), dim)?,
                pw1_weight: read3(&format!("blocks.{i}.pw1.weight"), inter, dim, 1)?,
                pw1_bias:   read1(&format!("blocks.{i}.pw1.bias"), inter)?,
                pw2_weight: read3(&format!("blocks.{i}.pw2.weight"), dim, inter, 1)?,
                pw2_bias:   read1(&format!("blocks.{i}.pw2.bias"), dim)?,
                gamma:      read1(&format!("blocks.{i}.gamma"), dim)?,
            });
        }

        let quant = QuantizerWeights {
            in_proj_weight: read2("quant.in_proj.weight", cfg.codebook_dim, dim)?,
            codebook:       read2("quant.codebook", cfg.codebook_size, cfg.codebook_dim)?,
        };

        Ok(LoadedModel {
            encoder: EncoderWeights {
                input_proj_weight, input_proj_bias,
                blocks,
                final_ln_weight, final_ln_bias,
            },
            quantizer: quant,
        })
    }
}

/// Reinterpret a little-endian f32 byte slice as Vec<f32>. safetensors stores
/// raw bytes, alignment isn't guaranteed across platforms, so we copy.
fn bytes_to_f32(bytes: &[u8]) -> Vec<f32> {
    assert!(bytes.len() % 4 == 0, "f32 buffer length not divisible by 4");
    bytes.chunks_exact(4)
        .map(|c| f32::from_le_bytes([c[0], c[1], c[2], c[3]]))
        .collect()
}
