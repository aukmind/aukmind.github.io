//! Buffer-creation helpers + uniform-param structs used by the kernels.

use bytemuck::{Pod, Zeroable};
use wgpu::util::DeviceExt;

#[repr(C)]
#[derive(Copy, Clone, Pod, Zeroable)]
pub struct MatmulParams { pub m: u32, pub n: u32, pub k: u32, pub _pad: u32 }

#[repr(C)]
#[derive(Copy, Clone, Pod, Zeroable)]
pub struct ConvK7Params {
    pub t: u32, pub in_c: u32, pub out_c: u32, pub k: u32,
    pub pad: u32, pub _pad0: u32, pub _pad1: u32, pub _pad2: u32,
}

#[repr(C)]
#[derive(Copy, Clone, Pod, Zeroable)]
pub struct DwLnParams { pub t: u32, pub dim: u32, pub eps: f32, pub _pad: u32 }

#[repr(C)]
#[derive(Copy, Clone, Pod, Zeroable)]
pub struct LnQuantParams {
    pub t: u32, pub dim: u32, pub cb_size: u32, pub cb_dim: u32,
    pub eps: f32, pub _pad0: u32, pub _pad1: u32, pub _pad2: u32,
}

pub fn buf_storage(device: &wgpu::Device, label: &str, bytes: u64) -> wgpu::Buffer {
    device.create_buffer(&wgpu::BufferDescriptor {
        label: Some(label),
        size: bytes,
        usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_SRC | wgpu::BufferUsages::COPY_DST,
        mapped_at_creation: false,
    })
}

pub fn buf_upload(device: &wgpu::Device, label: &str, data: &[u8]) -> wgpu::Buffer {
    device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some(label),
        contents: data,
        usage: wgpu::BufferUsages::STORAGE | wgpu::BufferUsages::COPY_DST,
    })
}

pub fn buf_uniform<T: Pod>(device: &wgpu::Device, label: &str, value: T) -> wgpu::Buffer {
    device.create_buffer_init(&wgpu::util::BufferInitDescriptor {
        label: Some(label),
        contents: bytemuck::bytes_of(&value),
        usage: wgpu::BufferUsages::UNIFORM | wgpu::BufferUsages::COPY_DST,
    })
}

/// Bytes-of helper accepting a slice of f32.
pub fn f32s(slice: &[f32]) -> &[u8] { bytemuck::cast_slice(slice) }
