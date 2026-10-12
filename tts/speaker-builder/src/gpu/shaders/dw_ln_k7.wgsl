// Fused depthwise k=7 reflect-pad + LayerNorm.
//
// One workgroup per row of (T, dim). 256 threads cooperatively:
//   1. Load 7 input rows (with reflect padding) into shared memory.
//   2. Compute the depthwise output for *this* row across all `dim` channels
//      (per-thread, into stack-local registers).
//   3. Reduce sum and sum_sq across `dim`, derive mean/inv_std.
//   4. Apply LN affine and write to output.
//
// Eliminates the dw scratch buffer of the unfused pipeline (one full
// `(T, dim)` write + read per block × 8 blocks ≈ 1.2 MB / encode).
//
// Shared memory:
//   sa[7 * MAX_DIM] = 14 KB           reused as sum/sum_sq scratch after dw.
// Total < 16 KB (WebGPU min spec).

struct Params { t: u32, dim: u32, eps: f32, _pad: u32, }

const KERNEL: u32 = 7u;
const PAD: u32 = 3u;
const MAX_DIM: u32 = 512u;
const WG_SIZE: u32 = 256u;

@group(0) @binding(0) var<storage, read>       input: array<f32>;
@group(0) @binding(1) var<storage, read>       dw_w: array<f32>;     // (dim, K)
@group(0) @binding(2) var<storage, read>       dw_b: array<f32>;
@group(0) @binding(3) var<storage, read>       ln_w: array<f32>;
@group(0) @binding(4) var<storage, read>       ln_b: array<f32>;
@group(0) @binding(5) var<storage, read_write> output: array<f32>;
@group(0) @binding(6) var<uniform>             p: Params;

var<workgroup> sa: array<f32, 3584>;       // 7 * 512

fn reflect_idx(i: i32, len: i32) -> i32 {
    var r = i;
    if (r < 0) { r = -r; }
    if (r >= len) { r = 2 * (len - 1) - r; }
    if (r < 0) { r = 0; }
    if (r >= len) { r = len - 1; }
    return r;
}

@compute @workgroup_size(256)
fn main(@builtin(workgroup_id) wg: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
    let row = wg.x;
    if (row >= p.t) { return; }
    let tid = lid.x;
    let dim = p.dim;
    let t_len = i32(p.t);
    let cols_per_thread = (dim + WG_SIZE - 1u) / WG_SIZE;

    // Step 1: load 7 input rows into shared memory.
    for (var i: u32 = 0u; i < cols_per_thread; i++) {
        let c = tid + i * WG_SIZE;
        if (c < dim) {
            for (var r: u32 = 0u; r < KERNEL; r++) {
                let src_row = u32(reflect_idx(i32(row) + i32(r) - i32(PAD), t_len));
                sa[r * MAX_DIM + c] = input[src_row * dim + c];
            }
        }
    }
    workgroupBarrier();

    // Step 2: compute depthwise output for this row, accumulate sum/sum_sq.
    // Each thread holds its own outputs in stack-local registers (≤ 4 cols).
    var dw_out: array<f32, 4>;
    var local_sum: f32 = 0.0;
    var local_sum2: f32 = 0.0;
    for (var i: u32 = 0u; i < cols_per_thread; i++) {
        let c = tid + i * WG_SIZE;
        if (c < dim) {
            var acc = dw_b[c];
            for (var r: u32 = 0u; r < KERNEL; r++) {
                acc += sa[r * MAX_DIM + c] * dw_w[c * KERNEL + r];
            }
            dw_out[i] = acc;
            local_sum  += acc;
            local_sum2 += acc * acc;
        }
    }
    workgroupBarrier();

    // Step 3: reduce sum/sum_sq across the workgroup. Reuse sa[0..512] as scratch.
    sa[tid]            = local_sum;
    sa[WG_SIZE + tid]  = local_sum2;
    workgroupBarrier();
    var s: u32 = 128u;
    loop {
        if (s == 0u) { break; }
        if (tid < s) {
            sa[tid]            += sa[tid + s];
            sa[WG_SIZE + tid]  += sa[WG_SIZE + tid + s];
        }
        workgroupBarrier();
        s >>= 1u;
    }
    let dim_f = f32(dim);
    let mean = sa[0] / dim_f;
    let inv_std = 1.0 / sqrt(sa[WG_SIZE] / dim_f - mean * mean + p.eps);

    // Step 4: normalize + affine, write to output.
    for (var i: u32 = 0u; i < cols_per_thread; i++) {
        let c = tid + i * WG_SIZE;
        if (c < dim) {
            output[row * dim + c] = (dw_out[i] - mean) * inv_std * ln_w[c] + ln_b[c];
        }
    }
}
