// Fused: residual[m, n] += (A @ B^T + bias)[m, n] * gamma[n]
//
// Asymmetric tiles (TM=64, TN=128): see matmul_bt_bias_gelu.wgsl for rationale.

struct Params { m: u32, n: u32, k: u32, _pad: u32, }

@group(0) @binding(0) var<storage, read>       a: array<f32>;
@group(0) @binding(1) var<storage, read>       b: array<f32>;
@group(0) @binding(2) var<storage, read_write> residual: array<f32>;
@group(0) @binding(3) var<uniform>             p: Params;
@group(0) @binding(4) var<storage, read>       bias: array<f32>;
@group(0) @binding(5) var<storage, read>       gamma: array<f32>;

const TM: u32 = 64u;
const TN: u32 = 128u;
const TK: u32 = 8u;
const WG: u32 = 16u;
const SUB_M: u32 = 4u;
const SUB_N: u32 = 8u;
const WG_SIZE: u32 = 256u;
const SA_S: u32 = TK + 1u;
const SB_S: u32 = TK + 1u;

var<workgroup> sa: array<f32, 576>;
var<workgroup> sb: array<f32, 1152>;

@compute @workgroup_size(16, 16)
fn main(@builtin(workgroup_id) wg: vec3<u32>,
        @builtin(local_invocation_id) lid: vec3<u32>) {
    let tx = lid.x; let ty = lid.y;
    let flat = ty * WG + tx;
    let gm = wg.y * TM; let gn = wg.x * TN;

    var acc: array<f32, 32>;
    for (var i = 0u; i < 32u; i++) { acc[i] = 0.0; }

    for (var t = 0u; t < (p.k + TK - 1u) / TK; t++) {
        let gk = t * TK;
        for (var i = 0u; i < 2u; i++) {
            let idx = flat + WG_SIZE * i;
            let row = idx / TK; let col = idx % TK;
            var v = 0.0f;
            if (gm + row < p.m && gk + col < p.k) { v = a[(gm + row) * p.k + gk + col]; }
            sa[row * SA_S + col] = v;
        }
        for (var i = 0u; i < 4u; i++) {
            let idx = flat + WG_SIZE * i;
            let row = idx / TK; let col = idx % TK;
            var v = 0.0f;
            if (gn + row < p.n && gk + col < p.k) { v = b[(gn + row) * p.k + gk + col]; }
            sb[row * SB_S + col] = v;
        }
        workgroupBarrier();

        for (var kk = 0u; kk < TK; kk++) {
            var av: array<f32, 4>; var bv: array<f32, 8>;
            for (var r = 0u; r < SUB_M; r++) { av[r] = sa[(ty * SUB_M + r) * SA_S + kk]; }
            for (var cc = 0u; cc < SUB_N; cc++) { bv[cc] = sb[(tx * SUB_N + cc) * SB_S + kk]; }
            for (var r = 0u; r < SUB_M; r++) {
                for (var cc = 0u; cc < SUB_N; cc++) {
                    acc[r * SUB_N + cc] += av[r] * bv[cc];
                }
            }
        }
        workgroupBarrier();
    }

    for (var r = 0u; r < SUB_M; r++) {
        for (var cc = 0u; cc < SUB_N; cc++) {
            let or = gm + ty * SUB_M + r;
            let oc = gn + tx * SUB_N + cc;
            if (or < p.m && oc < p.n) {
                let val = (acc[r * SUB_N + cc] + bias[oc]) * gamma[oc];
                residual[or * p.n + oc] = residual[or * p.n + oc] + val;
            }
        }
    }
}
