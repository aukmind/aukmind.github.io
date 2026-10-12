// Fused: out = gelu(A @ B^T + bias)
//
// Asymmetric tiles: TM=64, TN=128 (vs the more common 128×128). Our M
// dimension is num-frames (~75 for 1s of audio), so a 128-row tile leaves
// half the workgroup idle. Halving TM doubles the M-direction workgroup
// count and significantly improves GPU occupancy on skinny-M problems.
//
// Per-thread accumulator: SUB_M × SUB_N = 4 × 8 = 32 outputs (was 64).
// Shared memory: 64*9 + 128*9 = 1728 f32 = 6912 bytes (well under 16 KB spec).

struct Params { m: u32, n: u32, k: u32, _pad: u32, }

@group(0) @binding(0) var<storage, read>       a: array<f32>;
@group(0) @binding(1) var<storage, read>       b: array<f32>;
@group(0) @binding(2) var<storage, read_write> out: array<f32>;
@group(0) @binding(3) var<uniform>             p: Params;
@group(0) @binding(4) var<storage, read>       bias: array<f32>;

const TM: u32 = 64u;
const TN: u32 = 128u;
const TK: u32 = 8u;
const WG: u32 = 16u;
const SUB_M: u32 = 4u;
const SUB_N: u32 = 8u;
const WG_SIZE: u32 = 256u;
const SA_S: u32 = TK + 1u;        // 9, bank-padding
const SB_S: u32 = TK + 1u;
const SQRT_2_OVER_PI: f32 = 0.7978845608;

var<workgroup> sa: array<f32, 576>;        // TM * SA_S
var<workgroup> sb: array<f32, 1152>;       // TN * SB_S

fn gelu(x: f32) -> f32 {
    let x3 = x * x * x;
    return 0.5 * x * (1.0 + tanh(SQRT_2_OVER_PI * (x + 0.044715 * x3)));
}

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
        // Load A tile (TM × TK = 64 × 8 = 512 cells). 256 threads × 2 = 512.
        for (var i = 0u; i < 2u; i++) {
            let idx = flat + WG_SIZE * i;
            let row = idx / TK; let col = idx % TK;
            var v = 0.0f;
            if (gm + row < p.m && gk + col < p.k) { v = a[(gm + row) * p.k + gk + col]; }
            sa[row * SA_S + col] = v;
        }
        // Load B tile (TN × TK = 128 × 8 = 1024 cells). 256 threads × 4 = 1024.
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
                out[or * p.n + oc] = gelu(acc[r * SUB_N + cc] + bias[oc]);
            }
        }
    }
}
