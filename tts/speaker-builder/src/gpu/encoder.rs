//! GPU encoder. Uploads weights once, reuses bind groups for every encode.
//!
//! Buffer roles inside a forward pass (after fusion):
//!
//!   x         (T, dim)             residual carrier — read+write at pw2
//!   postln    (T, dim)             dw_ln output → pw1 input
//!   inter     (T, intermediate)    pw1 output → pw2 input
//!   q_scratch (T, codebook_dim)    per-frame projected vector for ln_quantize
//!   codes     (T,) u32             output integer codes
//!
//! Per-block dispatches (3 instead of 4 before fusion):
//!   1. dw_ln_k7              : x  → postln    (depthwise + bias + LN)
//!   2. matmul_bt_bias_gelu   : postln → inter (pw1 + bias + GELU)
//!   3. matmul_bt_bias_scale_res : inter → x   (pw2 + bias + γ + residual)
//!
//! Around the blocks: input_proj (mel → x) + ln_quantize (x → codes).

use ndarray::{Array2, ArrayView1};
use futures_channel;

use super::buffers::*;
use super::context::{div_ceil, GpuContext};
use crate::encoder::{EncoderConfig, MelEngine};
use crate::weights::LoadedModel;

#[allow(dead_code)]
struct GpuBlock {
    dw_w: wgpu::Buffer, dw_b: wgpu::Buffer,
    ln_w: wgpu::Buffer, ln_b: wgpu::Buffer,
    pw1_w: wgpu::Buffer, pw1_b: wgpu::Buffer,
    pw2_w: wgpu::Buffer, pw2_b: wgpu::Buffer,
    gamma: wgpu::Buffer,
    u_dw_ln: wgpu::Buffer, u_pw1: wgpu::Buffer, u_pw2: wgpu::Buffer,

    bg_dw_ln: wgpu::BindGroup,
    bg_pw1: wgpu::BindGroup,
    bg_pw2: wgpu::BindGroup,
}

#[allow(dead_code)]
pub struct GpuEncoder {
    pub ctx: GpuContext,
    cfg: EncoderConfig,
    mel: MelEngine,

    input_proj_w: wgpu::Buffer, input_proj_b: wgpu::Buffer,
    final_ln_w: wgpu::Buffer, final_ln_b: wgpu::Buffer,
    quant_in_proj: wgpu::Buffer, quant_codebook: wgpu::Buffer,

    mel_buf: wgpu::Buffer,
    x_buf: wgpu::Buffer,
    postln_buf: wgpu::Buffer,
    inter_buf: wgpu::Buffer,
    q_scratch: wgpu::Buffer,
    codes_buf: wgpu::Buffer,
    readback: wgpu::Buffer,

    u_input_proj: wgpu::Buffer,
    u_ln_quant: wgpu::Buffer,

    bg_input_proj: wgpu::BindGroup,
    blocks: Vec<GpuBlock>,
    bg_ln_quant: wgpu::BindGroup,

    dim: u32,
    inter: u32,
    n_mels: u32,
    cb_dim: u32,
    cb_size: u32,
}

impl GpuEncoder {
    pub fn new(ctx: GpuContext, model: &LoadedModel, cfg: EncoderConfig, max_t: u32) -> Self {
        let dim = cfg.dim as u32;
        let inter = cfg.intermediate_dim as u32;
        let n_mels = cfg.n_mels as u32;
        let cb_dim = cfg.codebook_dim as u32;
        let cb_size = cfg.codebook_size as u32;
        let kernel_size = cfg.kernel_size as u32;
        let pad = (cfg.kernel_size as u32 - 1) / 2;
        let device = &ctx.device;

        let dim_bytes = (max_t as u64) * (dim as u64) * 4;
        let inter_bytes = (max_t as u64) * (inter as u64) * 4;
        let mel_bytes = (max_t as u64) * (n_mels as u64) * 4;
        let cbd_bytes = (max_t as u64) * (cb_dim as u64) * 4;
        let codes_bytes = (max_t as u64) * 4;

        let mel_buf    = buf_storage(device, "mel",      mel_bytes);
        let x_buf      = buf_storage(device, "x",        dim_bytes);
        let postln_buf = buf_storage(device, "postln",   dim_bytes);
        let inter_buf  = buf_storage(device, "inter",    inter_bytes);
        let q_scratch  = buf_storage(device, "qscratch", cbd_bytes);
        let codes_buf = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("codes"), size: codes_bytes,
            usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_SRC,
            mapped_at_creation: false,
        });
        let readback = device.create_buffer(&wgpu::BufferDescriptor {
            label: Some("readback"), size: codes_bytes,
            usage: wgpu::BufferUsages::COPY_DST | wgpu::BufferUsages::MAP_READ,
            mapped_at_creation: false,
        });

        // Input projection (k=7).
        let input_proj_w = buf_upload(device, "input_proj.w",
            f32s(model.encoder.input_proj_weight.as_slice().unwrap()));
        let input_proj_b = buf_upload(device, "input_proj.b",
            f32s(model.encoder.input_proj_bias.as_slice().unwrap()));
        let u_input_proj = buf_uniform(device, "u_input_proj", ConvK7Params {
            t: 0, in_c: n_mels, out_c: dim, k: kernel_size, pad,
            _pad0: 0, _pad1: 0, _pad2: 0,
        });
        let bg_input_proj = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("bg.input_proj"),
            layout: &ctx.pl_conv1d_k7.get_bind_group_layout(0),
            entries: &[
                bge(0, &mel_buf), bge(1, &input_proj_w), bge(2, &input_proj_b),
                bge(3, &x_buf),   bge(4, &u_input_proj),
            ],
        });

        // ConvNeXt blocks.
        let mut blocks = Vec::with_capacity(model.encoder.blocks.len());
        for blk in &model.encoder.blocks {
            let dw_w  = buf_upload(device, "dw.w",  f32s(blk.dw_weight.as_slice().unwrap()));
            let dw_b  = buf_upload(device, "dw.b",  f32s(blk.dw_bias.as_slice().unwrap()));
            let ln_w  = buf_upload(device, "ln.w",  f32s(blk.ln_weight.as_slice().unwrap()));
            let ln_b  = buf_upload(device, "ln.b",  f32s(blk.ln_bias.as_slice().unwrap()));
            let pw1_w = buf_upload(device, "pw1.w", f32s(blk.pw1_weight.as_slice().unwrap()));
            let pw1_b = buf_upload(device, "pw1.b", f32s(blk.pw1_bias.as_slice().unwrap()));
            let pw2_w = buf_upload(device, "pw2.w", f32s(blk.pw2_weight.as_slice().unwrap()));
            let pw2_b = buf_upload(device, "pw2.b", f32s(blk.pw2_bias.as_slice().unwrap()));
            let gamma = buf_upload(device, "gamma", f32s(blk.gamma.as_slice().unwrap()));

            let u_dw_ln = buf_uniform(device, "u_dw_ln", DwLnParams { t: 0, dim, eps: 1e-6, _pad: 0 });
            let u_pw1 = buf_uniform(device, "u_pw1", MatmulParams { m: 0, n: inter, k: dim, _pad: 0 });
            let u_pw2 = buf_uniform(device, "u_pw2", MatmulParams { m: 0, n: dim, k: inter, _pad: 0 });

            // dw_ln: x → postln_buf
            let bg_dw_ln = device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("bg.dw_ln"),
                layout: &ctx.pl_dw_ln_k7.get_bind_group_layout(0),
                entries: &[
                    bge(0, &x_buf),     bge(1, &dw_w),     bge(2, &dw_b),
                    bge(3, &ln_w),      bge(4, &ln_b),
                    bge(5, &postln_buf),bge(6, &u_dw_ln),
                ],
            });
            // pw1+gelu: postln → inter
            let bg_pw1 = device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("bg.pw1"),
                layout: &ctx.pl_matmul_bt_bias_gelu.get_bind_group_layout(0),
                entries: &[bge(0, &postln_buf), bge(1, &pw1_w), bge(2, &inter_buf), bge(3, &u_pw1), bge(4, &pw1_b)],
            });
            // pw2 + γ + residual: x += (inter @ pw2_w + pw2_b) * gamma
            let bg_pw2 = device.create_bind_group(&wgpu::BindGroupDescriptor {
                label: Some("bg.pw2"),
                layout: &ctx.pl_matmul_bt_bias_scale_res.get_bind_group_layout(0),
                entries: &[bge(0, &inter_buf), bge(1, &pw2_w), bge(2, &x_buf),
                           bge(3, &u_pw2), bge(4, &pw2_b), bge(5, &gamma)],
            });

            blocks.push(GpuBlock {
                dw_w, dw_b, ln_w, ln_b, pw1_w, pw1_b, pw2_w, pw2_b, gamma,
                u_dw_ln, u_pw1, u_pw2,
                bg_dw_ln, bg_pw1, bg_pw2,
            });
        }

        // Final LN + Quantizer (fused).
        let final_ln_w = buf_upload(device, "final_ln.w",
            f32s(model.encoder.final_ln_weight.as_slice().unwrap()));
        let final_ln_b = buf_upload(device, "final_ln.b",
            f32s(model.encoder.final_ln_bias.as_slice().unwrap()));
        let quant_in_proj = buf_upload(device, "q.in_proj",
            f32s(model.quantizer.in_proj_weight.as_slice().unwrap()));
        let quant_codebook = buf_upload(device, "q.codebook",
            f32s(model.quantizer.codebook.as_slice().unwrap()));
        let u_ln_quant = buf_uniform(device, "u_ln_quant", LnQuantParams {
            t: 0, dim, cb_size, cb_dim, eps: 1e-6,
            _pad0: 0, _pad1: 0, _pad2: 0,
        });
        let bg_ln_quant = device.create_bind_group(&wgpu::BindGroupDescriptor {
            label: Some("bg.ln_quant"),
            layout: &ctx.pl_ln_quantize.get_bind_group_layout(0),
            entries: &[
                bge(0, &x_buf), bge(1, &final_ln_w), bge(2, &final_ln_b),
                bge(3, &quant_in_proj), bge(4, &quant_codebook),
                bge(5, &codes_buf), bge(6, &q_scratch),
                bge(7, &u_ln_quant),
            ],
        });

        let mel = MelEngine::new(cfg.clone());

        Self {
            ctx, cfg, mel,
            input_proj_w, input_proj_b, final_ln_w, final_ln_b,
            quant_in_proj, quant_codebook,
            mel_buf, x_buf, postln_buf, inter_buf, q_scratch, codes_buf, readback,
            u_input_proj, u_ln_quant,
            bg_input_proj, blocks, bg_ln_quant,
            dim, inter, n_mels, cb_dim, cb_size,
        }
    }

    pub async fn encode(&self, audio: ArrayView1<'_, f32>) -> Vec<u32> {
        let mel_ct = self.mel.compute(audio);
        let t = mel_ct.shape()[1] as u32;
        let mel_tc: Array2<f32> = mel_ct.t().as_standard_layout().to_owned();
        let mel_bytes = bytemuck::cast_slice(mel_tc.as_slice().expect("contiguous mel"));

        let device = &self.ctx.device;
        let queue = &self.ctx.queue;

        queue.write_buffer(&self.u_input_proj, 0, bytemuck::bytes_of(&ConvK7Params {
            t, in_c: self.n_mels, out_c: self.dim,
            k: self.cfg.kernel_size as u32,
            pad: (self.cfg.kernel_size as u32 - 1) / 2,
            _pad0: 0, _pad1: 0, _pad2: 0,
        }));
        for block in &self.blocks {
            queue.write_buffer(&block.u_dw_ln, 0, bytemuck::bytes_of(&DwLnParams {
                t, dim: self.dim, eps: 1e-6, _pad: 0,
            }));
            queue.write_buffer(&block.u_pw1, 0, bytemuck::bytes_of(&MatmulParams {
                m: t, n: self.inter, k: self.dim, _pad: 0,
            }));
            queue.write_buffer(&block.u_pw2, 0, bytemuck::bytes_of(&MatmulParams {
                m: t, n: self.dim, k: self.inter, _pad: 0,
            }));
        }
        queue.write_buffer(&self.u_ln_quant, 0, bytemuck::bytes_of(&LnQuantParams {
            t, dim: self.dim, cb_size: self.cb_size, cb_dim: self.cb_dim, eps: 1e-6,
            _pad0: 0, _pad1: 0, _pad2: 0,
        }));

        queue.write_buffer(&self.mel_buf, 0, mel_bytes);

        let mut enc = device.create_command_encoder(&wgpu::CommandEncoderDescriptor {
            label: Some("encode"),
        });
        {
            let mut cp = enc.begin_compute_pass(&wgpu::ComputePassDescriptor {
                label: Some("encode.pass"),
                timestamp_writes: None,
            });
            cp.set_pipeline(&self.ctx.pl_conv1d_k7);
            cp.set_bind_group(0, &self.bg_input_proj, &[]);
            cp.dispatch_workgroups(div_ceil(t, 16), div_ceil(self.dim, 16), 1);

            for block in &self.blocks {
                cp.set_pipeline(&self.ctx.pl_dw_ln_k7);
                cp.set_bind_group(0, &block.bg_dw_ln, &[]);
                cp.dispatch_workgroups(t, 1, 1);

                // Asymmetric tile: TM=64 in M (frames), TN=128 in N (channels).
                cp.set_pipeline(&self.ctx.pl_matmul_bt_bias_gelu);
                cp.set_bind_group(0, &block.bg_pw1, &[]);
                cp.dispatch_workgroups(div_ceil(self.inter, 128), div_ceil(t, 64), 1);

                cp.set_pipeline(&self.ctx.pl_matmul_bt_bias_scale_res);
                cp.set_bind_group(0, &block.bg_pw2, &[]);
                cp.dispatch_workgroups(div_ceil(self.dim, 128), div_ceil(t, 64), 1);
            }

            cp.set_pipeline(&self.ctx.pl_ln_quantize);
            cp.set_bind_group(0, &self.bg_ln_quant, &[]);
            cp.dispatch_workgroups(t, 1, 1);
        }
        enc.copy_buffer_to_buffer(&self.codes_buf, 0, &self.readback, 0, (t as u64) * 4);
        queue.submit(Some(enc.finish()));

        let (tx, rx) = futures_channel::oneshot::channel();
        let slice = self.readback.slice(..((t as u64) * 4));
        slice.map_async(wgpu::MapMode::Read, move |r| { let _ = tx.send(r); });
        // Native: pump the device's queue so the map_async callback fires.
        // Web: the browser drives the queue from its own event loop, so the
        // explicit poll is a no-op (and would waste a microtask). Just await
        // the channel — the JS event loop will resolve it for us.
        #[cfg(not(target_arch = "wasm32"))]
        { let _ = device.poll(wgpu::Maintain::Wait); }
        let _ = rx.await;

        let data = slice.get_mapped_range();
        let codes: Vec<u32> = bytemuck::cast_slice(&data).to_vec();
        drop(data);
        self.readback.unmap();
        codes
    }
}

fn bge<'a>(binding: u32, buf: &'a wgpu::Buffer) -> wgpu::BindGroupEntry<'a> {
    wgpu::BindGroupEntry { binding, resource: buf.as_entire_binding() }
}
