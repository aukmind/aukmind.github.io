//! `GpuContext`: device + queue + compiled compute pipelines.
//!
//! Construction is async (wgpu adapter/device requests are async on web). On
//! native we expose a `pollster::block_on` wrapper for tests/benches.

use wgpu::PipelineCompilationOptions;

const SHADER_MATMUL_BT_BIAS_GELU: &str       = include_str!("shaders/matmul_bt_bias_gelu.wgsl");
const SHADER_MATMUL_BT_BIAS_SCALE_RES: &str  = include_str!("shaders/matmul_bt_bias_scale_residual.wgsl");
const SHADER_CONV1D_K7: &str                 = include_str!("shaders/conv1d_k7_reflect.wgsl");
const SHADER_DW_LN_K7: &str                  = include_str!("shaders/dw_ln_k7.wgsl");
const SHADER_LN_QUANTIZE: &str               = include_str!("shaders/ln_quantize.wgsl");

pub struct GpuContext {
    pub device: wgpu::Device,
    pub queue: wgpu::Queue,
    pub pl_matmul_bt_bias_gelu: wgpu::ComputePipeline,
    pub pl_matmul_bt_bias_scale_res: wgpu::ComputePipeline,
    pub pl_conv1d_k7: wgpu::ComputePipeline,
    pub pl_dw_ln_k7: wgpu::ComputePipeline,
    pub pl_ln_quantize: wgpu::ComputePipeline,
}

impl GpuContext {
    #[cfg(not(target_arch = "wasm32"))]
    pub fn new_blocking() -> Result<Self, String> {
        pollster::block_on(Self::new())
    }

    pub async fn new() -> Result<Self, String> {
        let instance = wgpu::Instance::new(&wgpu::InstanceDescriptor::default());
        let adapter = instance
            .request_adapter(&wgpu::RequestAdapterOptions {
                power_preference: wgpu::PowerPreference::HighPerformance,
                force_fallback_adapter: false,
                compatible_surface: None,
            })
            .await
            .ok_or_else(|| "no GPU adapter available".to_string())?;

        // The fused `matmul_bt_bias_scale_residual` shader needs 5 storage
        // buffers per stage. WebGPU mandates ≥8 by spec; downlevel_defaults
        // caps at 4, which is too low. Pull the relevant minimum from the
        // adapter so this works on both WebGPU (web) and conservative native
        // backends (e.g. GL on cheap Intel iGPUs).
        let mut limits = wgpu::Limits::downlevel_defaults();
        let adapter_limits = adapter.limits();
        limits.max_storage_buffers_per_shader_stage = adapter_limits.max_storage_buffers_per_shader_stage.max(8);

        let (device, queue) = adapter
            .request_device(&wgpu::DeviceDescriptor {
                label: Some("speaker-builder"),
                required_features: wgpu::Features::empty(),
                required_limits: limits,
                memory_hints: wgpu::MemoryHints::Performance,
            }, None)
            .await
            .map_err(|e| format!("request_device: {e}"))?;

        let mk = |label: &'static str, src: &str, entry: &'static str| {
            let module = device.create_shader_module(wgpu::ShaderModuleDescriptor {
                label: Some(label),
                source: wgpu::ShaderSource::Wgsl(src.into()),
            });
            device.create_compute_pipeline(&wgpu::ComputePipelineDescriptor {
                label: Some(label),
                layout: None,
                module: &module,
                entry_point: Some(entry),
                compilation_options: PipelineCompilationOptions::default(),
                cache: None,
            })
        };

        Ok(Self {
            pl_matmul_bt_bias_gelu:      mk("matmul_bt_bias_gelu",       SHADER_MATMUL_BT_BIAS_GELU,      "main"),
            pl_matmul_bt_bias_scale_res: mk("matmul_bt_bias_scale_res",  SHADER_MATMUL_BT_BIAS_SCALE_RES, "main"),
            pl_conv1d_k7:                mk("conv1d_k7",                 SHADER_CONV1D_K7,                "main"),
            pl_dw_ln_k7:                 mk("dw_ln_k7",                  SHADER_DW_LN_K7,                 "main"),
            pl_ln_quantize:              mk("ln_quantize",               SHADER_LN_QUANTIZE,              "main"),
            device,
            queue,
        })
    }
}

pub(crate) fn div_ceil(a: u32, b: u32) -> u32 { (a + b - 1) / b }
