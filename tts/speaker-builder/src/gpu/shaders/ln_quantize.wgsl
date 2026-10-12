// Fused LayerNorm + project + nearest-codebook.
//
// One workgroup per frame. 256 threads cooperatively:
//   1. Load row of (T, dim) input into shared_x; accumulate sum / sum_sq.
//   2. Reduce → mean, inv_std.
//   3. Normalize + affine in shared_x.
//   4. Project shared_x through in_proj into a per-frame slice of `scratch`.
//   5. Scan codebook for nearest entry; reduce → write code.
//
// Eliminates the `final_x_buf` intermediate of the unfused pipeline.

struct Params {
    t: u32, dim: u32, cb_size: u32, cb_dim: u32,
    eps: f32, _pad0: u32, _pad1: u32, _pad2: u32,
}

const WG_SIZE: u32 = 256u;
const MAX_DIM: u32 = 512u;

@group(0) @binding(0) var<storage, read>       input: array<f32>;
@group(0) @binding(1) var<storage, read>       ln_w: array<f32>;
@group(0) @binding(2) var<storage, read>       ln_b: array<f32>;
@group(0) @binding(3) var<storage, read>       in_proj: array<f32>;
@group(0) @binding(4) var<storage, read>       codebook: array<f32>;
@group(0) @binding(5) var<storage, read_write> codes: array<u32>;
@group(0) @binding(6) var<storage, read_write> scratch: array<f32>;
@group(0) @binding(7) var<uniform>             p: Params;

var<workgroup> shared_x: array<f32, 512>;
var<workgroup> shared_sum: array<f32, 256>;
var<workgroup> shared_sum2: array<f32, 256>;
var<workgroup> best_d: array<f32, 256>;
var<workgroup> best_i: array<u32, 256>;

@compute @workgroup_size(256)
fn main(@builtin(workgroup_id) wg: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
    let frame = wg.x;
    if (frame >= p.t) { return; }
    let tid = lid.x;
    let dim = p.dim;
    let cb_dim = p.cb_dim;
    let cb_size = p.cb_size;
    let cols_per_thread = (dim + WG_SIZE - 1u) / WG_SIZE;

    // Step 1: load + sum / sum_sq.
    var local_sum: f32 = 0.0;
    var local_sum2: f32 = 0.0;
    for (var i: u32 = 0u; i < cols_per_thread; i++) {
        let c = tid + i * WG_SIZE;
        if (c < dim) {
            let v = input[frame * dim + c];
            shared_x[c] = v;
            local_sum  += v;
            local_sum2 += v * v;
        }
    }
    shared_sum[tid]  = local_sum;
    shared_sum2[tid] = local_sum2;
    workgroupBarrier();

    var s: u32 = 128u;
    loop {
        if (s == 0u) { break; }
        if (tid < s) {
            shared_sum[tid]  += shared_sum[tid + s];
            shared_sum2[tid] += shared_sum2[tid + s];
        }
        workgroupBarrier();
        s >>= 1u;
    }
    let dim_f = f32(dim);
    let mean = shared_sum[0] / dim_f;
    let inv_std = 1.0 / sqrt(shared_sum2[0] / dim_f - mean * mean + p.eps);

    // Step 2: normalize + affine in-place in shared_x.
    for (var i: u32 = 0u; i < cols_per_thread; i++) {
        let c = tid + i * WG_SIZE;
        if (c < dim) {
            shared_x[c] = (shared_x[c] - mean) * inv_std * ln_w[c] + ln_b[c];
        }
    }
    workgroupBarrier();

    // Step 3: project to scratch (per-frame slice of cb_dim entries).
    let cbd_per_thread = (cb_dim + WG_SIZE - 1u) / WG_SIZE;
    let scratch_base = frame * cb_dim;
    for (var i: u32 = 0u; i < cbd_per_thread; i++) {
        let d = tid + i * WG_SIZE;
        if (d < cb_dim) {
            var sum: f32 = 0.0;
            for (var k: u32 = 0u; k < dim; k++) {
                sum += shared_x[k] * in_proj[d * dim + k];
            }
            scratch[scratch_base + d] = sum;
        }
    }
    workgroupBarrier();

    // Step 4: scan codebook for nearest.
    var local_best_d: f32 = 1.0e30;
    var local_best_i: u32 = 0u;
    var c2 = tid;
    loop {
        if (c2 >= cb_size) { break; }
        var dist: f32 = 0.0;
        for (var i: u32 = 0u; i < cb_dim; i++) {
            let diff = scratch[scratch_base + i] - codebook[c2 * cb_dim + i];
            dist += diff * diff;
        }
        if (dist < local_best_d) { local_best_d = dist; local_best_i = c2; }
        c2 += WG_SIZE;
    }
    best_d[tid] = local_best_d;
    best_i[tid] = local_best_i;
    workgroupBarrier();

    var sr: u32 = 128u;
    loop {
        if (sr == 0u) { break; }
        if (tid < sr) {
            if (best_d[tid + sr] < best_d[tid]) {
                best_d[tid] = best_d[tid + sr];
                best_i[tid] = best_i[tid + sr];
            }
        }
        workgroupBarrier();
        sr >>= 1u;
    }
    if (tid == 0u) { codes[frame] = best_i[0]; }
}
