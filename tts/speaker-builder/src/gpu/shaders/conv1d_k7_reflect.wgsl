// 1D convolution, kernel size 7, reflect-padded by (k-1)/2.
// General (non-depthwise) version used for the input projection
// (mel features → encoder dim).
//
//   input:  (T, in_c)
//   weight: (out_c, in_c, K)         row-major
//   bias:   (out_c,)
//   output: (T, out_c)
//
// One thread per output element. For each output, walks K positions × in_c
// channels. Cost is K * in_c FMAs per output element — small in_c (n_mels=100)
// keeps this a non-bottleneck even with 75 × 512 outputs.

struct Params { t: u32, in_c: u32, out_c: u32, k: u32, pad: u32, _pad0: u32, _pad1: u32, _pad2: u32, }

@group(0) @binding(0) var<storage, read>       input: array<f32>;
@group(0) @binding(1) var<storage, read>       weight: array<f32>;
@group(0) @binding(2) var<storage, read>       bias: array<f32>;
@group(0) @binding(3) var<storage, read_write> output: array<f32>;
@group(0) @binding(4) var<uniform>             p: Params;

fn reflect_idx(i: i32, len: i32) -> i32 {
    var r = i;
    if (r < 0) { r = -r; }
    if (r >= len) { r = 2 * (len - 1) - r; }
    if (r < 0) { r = 0; }
    if (r >= len) { r = len - 1; }
    return r;
}

@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
    let t = gid.x;
    let oc = gid.y;
    if (t >= p.t || oc >= p.out_c) { return; }

    let pad = i32(p.pad);
    let t_len = i32(p.t);

    var acc = bias[oc];
    for (var kk: u32 = 0u; kk < p.k; kk++) {
        let i = i32(t) + i32(kk) - pad;
        let ri = u32(reflect_idx(i, t_len));
        let in_base = ri * p.in_c;
        let w_base = oc * (p.in_c * p.k) + kk;       // weight[oc, ic, kk] = oc*(in_c*k) + ic*k + kk
        for (var ic: u32 = 0u; ic < p.in_c; ic++) {
            acc += input[in_base + ic] * weight[w_base + ic * p.k];
        }
    }
    output[t * p.out_c + oc] = acc;
}
