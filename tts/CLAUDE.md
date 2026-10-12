# Working notes for Claude (and humans) on this project

The hard-won learnings from building the TTS Studio. Each entry is a real
trap I (or my predecessor) fell into — written so the *next* iteration
doesn't repeat it.

---

## Vue templates parsed in-browser

### NEVER self-close custom-component tags

```html
<!-- BAD: looks fine but the HTML5 parser ignores /> on non-void elements -->
<n-input v-model:value="x" placeholder="…" />
<n-tag size="small" round />

<!-- GOOD: explicit close tag -->
<n-input v-model:value="x" placeholder="…"></n-input>
<n-tag size="small" round></n-tag>
```

**Why this matters.** `index.html` runs through the browser's HTML parser
*before* Vue compiles the template. The HTML5 spec only allows self-closing
on void elements (`<br>`, `<img>`, `<input>`, `<meta>`, …). Self-closing
`<n-foo .../>` is silently ignored — the parser sees `<n-foo ...>` (open
tag) and **everything after gets nested inside it** until the next `</n-foo>`
or end of document. The Generate button vanished for an entire round of
debugging because an unclosed `<n-input ... />` had absorbed half the Text
card.

If you find yourself "fixing" why a Vue template doesn't render parts of
itself: grep for `/>` on `n-*` tags first. Always.

`<svg>`-namespaced elements (`<path/>`, `<circle/>`) and HTML void elements
(`<br>`, `<link>`, `<meta>`) ARE correctly self-closing in HTML5. Only
custom-component tags get bitten.

---

## Browser memory ceilings

### WebAssembly linear memory caps at 4 GB per tab

OuteTTS-0.2-500M fp32 weights (~2 GB) + tokenizer + WavTokenizer decoder
+ ORT scratch + transformers.js parsing duplicates **routinely OOMs the
WASM heap** during ONNX parse. The signature: onnxruntime-web throws a raw
*Number* (an emscripten exception pointer like `4023965016` ≈ `0xEFBA85D8`,
~3.8 GB into the heap) instead of a real `Error`.

**Default to q8 on WASM** for any model > 100 M params:

```js
// BAD: expensive, OOMs on memory-constrained tabs
dtype: "fp32"

// GOOD on WASM: ~4× smaller, perceptually identical at this scale
dtype: "q8"
```

Listening tests can't distinguish q8 from fp32 at TTS sizes; q8 is the
right default *on WASM* because of the 4 GB linear-memory ceiling.

### But NOT q8 on WebGPU — try fp16 first

The 4 GB ceiling doesn't apply on GPU (VRAM). Worse, q8 requires
`DequantizeLinear` shaders that fail to compile on some drivers and
browsers (Firefox in particular — stricter WGSL validation). When the
DequantizeLinear pipeline is invalid, ORT's WebGPU backend submits work
to it anyway and then hangs on an internal output queue that never
settles, so `await iface.generate(...)` never resolves OR rejects.
Downstream shaders like `LayerNormalization` *also* fail to compile —
likely because broken tensor metadata propagates through the graph.

fp16 sidesteps the entire dequantize path. Order on WebGPU:

```js
const dtypePlan = preferredDevice === "webgpu"
  ? [["webgpu", "fp16"], ["webgpu", "q8"], ["wasm", "q8"]]
  : [["wasm", "q8"]];
```

fp16 first (no DequantizeLinear, plenty of VRAM). q8 second only as a
fallback for devices that lack `shader-f16` but do support int8
dequantize. Then WASM as last resort.

### Numeric exceptions need explicit handling

```js
// BAD: prints "4023965016" and tells the user nothing
catch (err) { console.error(err); message.error(err.message); }

// GOOD: handles the case where err is a primitive
const detail = err instanceof Error
  ? `${err.name}: ${err.message}`
  : `${typeof err}: ${String(err)}`;
console.error(`[engine] load failed`, detail, err);
message.error(`Failed to load: ${detail}`);
```

Bare `err.message` is `undefined` when `err` is a Number, so the user
saw an empty toast for hours of debugging. **Always stringify the error
defensively** before showing it to a human.

---

## WebGPU validation errors are async — and on THREE channels, not one

### Don't trust `await InferenceSession.create()`

If onnxruntime-web fails to compile a WebGPU shader (e.g. `DequantizeLinear`
for a q8 model on a GPU that doesn't support every op), `InterfaceHF` /
`InferenceSession.create` **still resolves successfully**. Worse, the
errors don't all surface through one channel — they're split across three:

1. **`window.unhandledrejection`** — ORT's `buffer.mapAsync()` rejection
   ("Mapping WebGPU buffer failed: Invalid buffer"). Bubbles up because
   ORT does not observe it.
2. **`GPUDevice.uncapturederror`** — shader-compile / pipeline-validation
   errors ("Buffer with '' label is invalid", "ComputePipeline with
   'DequantizeLinear' label is invalid"). These **never reach window**.
   ORT owns the device, so without intercepting it, they're invisible.
3. **A hung `await`** — when a pipeline is invalid, ORT submits compute
   work and then awaits an *internal* output queue that never settles
   (the buffer-mapping rejection is on a detached promise ORT does not
   observe). The awaited `generate()` neither resolves nor rejects.
   This is what makes the load appear to "hang forever".

A pure `unhandledrejection` listener catches *only* channel 1. You must
handle all three.

### Channel 2: monkey-patch `GPUAdapter.prototype.requestDevice`

```js
const _wgpuDeviceErrors = [];
function drainWgpuDeviceErrors() { return _wgpuDeviceErrors.splice(0); }
if (typeof GPUAdapter !== "undefined" && !GPUAdapter.prototype.__pwgInstalled) {
  const orig = GPUAdapter.prototype.requestDevice;
  GPUAdapter.prototype.requestDevice = async function(...args) {
    const device = await orig.apply(this, args);
    device.addEventListener("uncapturederror", (ev) => {
      _wgpuDeviceErrors.push(ev.error?.message || String(ev.error));
    });
    return device;
  };
  GPUAdapter.prototype.__pwgInstalled = true;
}
```

Every device anything on the page requests now reports `uncapturederror`
into a module-scoped queue. Drain it at the start of each load attempt
(so stale errors from a previous combo don't poison the next), then
re-check after each await point.

### Channel 3: timeout-race the warm-up

```js
async function warmUpWebGPU(iface, timeoutMs = 10000) {
  const speaker = iface.load_default_speaker("male_1");
  const work = iface.generate({ text: "hi", speaker, max_length: 32, ... });
  let timer;
  const timeout = new Promise((_, rej) => {
    timer = setTimeout(() => rej(new Error(`warm-up timed out after ${timeoutMs}`)), timeoutMs);
  });
  try { await Promise.race([work, timeout]); }
  finally { clearTimeout(timer); }
}
```

The timeout firing **is** the signal that WebGPU is broken on this
device. Without it, the failure manifests as a frozen UI with no logs
and no fallback ever triggered.

### And do the warm-up at all

`InterfaceHF()` only creates sessions; it doesn't run shaders. WebGPU
compiles pipelines lazily on first GPU work. So a 50 ms post-load yield
catches *zero* of the real failures — every error in this list fires
during inference, not during session create. A short timeout-raced
`generate()` (max_length=32 is enough to cover prefill + at least one
autoregressive decode step, which exercises DequantizeLinear,
LayerNormalization, and KV-cache attention pipelines) converts an
inference-time failure into a load-time failure that the existing
device-fallback machinery can handle.

### `iface = null` on failure

In a fall-through-to-WASM loop, if a WebGPU attempt sets `this.iface`
and then throws, the next iteration sees a non-null `iface` and the
`if (this.iface) return ...` short-circuit at the top of `load()` skips
the WASM attempt entirely. Always `this.iface = null` in the per-attempt
catch.

---

## Browser caches

### One Cache API entry per origin can poison every load

A corrupted entry in `transformers-cache` survives reloads, refreshes, and
even our own Cache API clear (since they're separate stores). Symptom: the
same numeric trap on every retry, even after "clearing" what you think is
the cache.

The right "clear cache" button calls `caches.keys()` and deletes
**every** cache:

```js
export async function clearAllCaches() {
  const names = await caches.keys();           // ours, transformers-cache,
  for (const n of names) await caches.delete(n); // kokoro-voices, …
}
```

### Cache-API for blobs, IndexedDB for structured data

- **Cache API**: stores `Response` objects. Use for the heavy artefacts
  we fetch directly (Qwen ONNX, WavTokenizer encoder weights). The browser
  manages eviction.
- **IndexedDB**: stores structured-clonable values. Use for cloned voice
  JSONs, custom voice IDs, anything that's not a fetched binary.
- **localStorage**: 5-10 MB cap, strings only. Use **only** for small
  preferences (selected engine, text input draft, API keys). Never for
  model bytes.

`browser-utils.js` has helpers for all three: `cachedFetchBytes`,
`saveVoice`/`listVoices`, plus `clearAllCaches`/`cachedSizeBytes`.

---

## Loading UX

### Engines without progress callbacks need synthetic tasks

Kokoro emits transformers.js `progress_callback` events; we render real
percent rows. **OuteTTS does not** — the `outetts` npm package doesn't
plumb a progress hook through. Without intervention, the cold-load panel
stays empty for 30+ seconds while ~500 MB silently downloads.

Pattern in `app.js::ensureEngineLoaded`:

```js
const fallbackTaskId = `engine:${name}`;
setTask(fallbackTaskId, `Loading ${name}…`, 0);   // synthetic row
try {
  await handler.loadEngine(name, makeEngineProgressHandler(name));
  finishTask(fallbackTaskId);
} catch (err) {
  loadingTasks[fallbackTaskId] = { ...errored };  // visible error
}
```

### Indeterminate progress when percent stays at 0

```css
.loading-bar--indeterminate::after {
  background: linear-gradient(90deg, transparent, rgba(37,99,235,.65), transparent);
  background-size: 40% 100%;
  animation: indeterminate-slide 1.4s linear infinite;
}
```

```html
<div class="loading-bar"
     :class="{ 'loading-bar--indeterminate': task.status === 'loading' && !task.percent }">
```

Without this, OuteTTS looks frozen. With it, the bar pulses so users know
something is happening.

---

## Live TTS streaming

### Generate one chunk at a time, play immediately

```js
// In synthesize():
for (const chunk of chunks) {
  const result = await eng.generate({ voice, text: chunk });
  audioChunks.push(result.samples);
  onSamples?.(result.samples, result.sample_rate, isLast);  // ← key line
}
```

The caller (in `app.js::handleGenerate`) builds a Web Audio queue:

```js
const ctx = new AudioContext();    // MUST be inside the user-gesture click
let nextStart = ctx.currentTime + 0.05;
const onSamples = (samples, sr) => {
  const buf = ctx.createBuffer(1, samples.length, sr);
  buf.getChannelData(0).set(samples);
  const src = ctx.createBufferSource();
  src.buffer = buf;
  src.connect(ctx.destination);
  src.start(Math.max(nextStart, ctx.currentTime + 0.01));
  nextStart += buf.duration;     // gapless if engine keeps up
};
```

**Gotchas:**
- `AudioContext` must be created in the user-gesture callback (Chrome
  autoplay policy). Creating it later silently fails to play.
- Track every `BufferSource` for cancel — call `.stop()` on each when
  the user aborts so audio cuts immediately.
- Close the context with a tail delay so already-scheduled chunks finish.

---

## ONNX exports & dynamo path

### Bypass python-side control flow before exporting

`torch.onnx.export(..., dynamo=True)` chokes on data-dependent control flow
(while loops, length-dependent slicing). Fix: wrap the model and call the
purely-tensor inner method directly.

For the WavTokenizer codec, `chunked_decode` had a python `while` loop:

```python
class CodecDecode(torch.nn.Module):
    def __init__(self, codec_wrapper):
        super().__init__()
        # decoder.forward is pure tensor ops; chunked_decode is a python
        # while loop wrapping it for memory savings during training.
        self.decoder = codec_wrapper.model.decoder
    def forward(self, codes_btc):
        codes = torch.clamp(codes_btc, 0).transpose(1, 2)
        return self.decoder(codes).squeeze(1)   # bypass chunked_decode
```

After bypass: dynamo path works, MSE 1.6e-12 vs PyTorch reference.

### dynamo=False (legacy) trips on autograd vmap

If the model uses gradient checkpointing (`supports_gradient_checkpointing
= True`), legacy ONNX export fails with `RuntimeError: unordered_map::at`
inside `pyfunctorch.dispatch_functorch`. dynamo path is the only working
route for HF-style models in 2026.

### opset 18 + external weights

```python
torch.onnx.export(
    wrapper, dummy, str(out_path),
    input_names=[...], output_names=[...],
    dynamic_axes={...},
    opset_version=18,
    dynamo=True,
)
# Weights > 2 GB are written to a sibling `.onnx.data` file automatically.
# onnxruntime-web loads them transparently if both are at the same URL.
```

### wasm-pack + WebGPU SIMD needs explicit feature flags

The `wasm-opt` bundled with `wasm-pack` rejects WebGPU SIMD output unless
several feature flags are set explicitly:

```toml
# Cargo.toml
[package.metadata.wasm-pack.profile.release]
wasm-opt = ["-O3", "--enable-simd", "--enable-bulk-memory",
            "--enable-nontrapping-float-to-int",
            "--enable-mutable-globals", "--enable-sign-ext"]
```

Without these, `wasm-pack build --target web` fails post-compile with
"Bulk memory operations require bulk memory" or similar.

---

## Self-hosted model exports

### `pkg/.gitignore` is auto-generated as `*` — DELETE IT

`wasm-pack build` writes `pkg/.gitignore` containing just `*`, which makes
git silently exclude the entire build directory. Either remove that file
after every build, or add `pkg/` to your build script's post-step:

```sh
wasm-pack build --release --target web --out-dir ../pkg --out-name speaker_builder
rm -f ../pkg/.gitignore       # critical
```

Without this, you commit broken builds where the WASM blob is missing
and only the JS shim ships.

### Test fixtures vs. shipped artefacts

Don't commit the giant ONNX exports themselves — they're regeneratable
from `qwen-server/export_to_onnx.py`. Do commit:
- The Python export script.
- The runtime config JSON (token IDs, language IDs, layer counts, sample
  rate) — small, useful for debugging without booting the model.
- A README pointing at where to host the actual artefacts.

`qwen-server/reference/qwen3-tts-config.json` is committed for this
reason.

---

## Native components

### Embedded git repos

`tts/` has its own `.git` directory; the parent `aukmind.github.io/`
repo is separate. Always `cd tts/` before staging/committing TTS-related
changes — running `git add -A` from the parent picks up `tts/` as an
embedded repo (warning: `warning: adding embedded git repository: tts`)
which is rarely what you want.

If you accidentally do this: `git reset` from the parent to unstage,
then `cd tts/` and try again.

### Python venvs

`qwen-server/.venv-qwen/` is git-ignored. The Python environment for the
ONNX export is heavy (torch, transformers, onnx, ~3 GB) — never commit it.
The `.gitignore` in `qwen-server/` handles this:

```
.venv*/
onnx-out/
__pycache__/
*.onnx
```

---

## Onnxruntime-web specifics

### Quiet the EP-fallback warnings

```js
import { env } from "@huggingface/transformers";
env.backends.onnx.logLevel = "error";
```

By default ORT spams `VerifyEachNodeIsAssignedToAnEp` warnings on every
session creation when WebGPU doesn't implement every shape op (Reshape,
Squeeze, etc.). They're benign — the missing nodes silently fall to CPU
EP — but they bury real errors. Setting `logLevel = "error"` keeps real
errors visible while suppressing noise.

Apply in `tts-handler.js` at module top, before any model loads. Both
transformers.js, kokoro-js, and our direct `import * as ort` share the
same env instance.

### onnxruntime-web shape-output quirk

`x.dot(&codebook.t())` (in ndarray-rs) sometimes produces a non-contiguous
result depending on the backend. `as_slice_mut()` returns `None` and
panics. Always `.as_standard_layout().to_owned()` if you need a contiguous
buffer:

```rust
// BAD: may panic
let mat = x.dot(&codebook.t());
let s = mat.as_slice_mut().expect("contiguous");

// GOOD:
let mat = x.dot(&codebook.t());
let mat = mat.as_standard_layout().into_owned();   // forces row-major
```

---

## Don'ts (in short)

- **Don't** self-close custom Vue components.
- **Don't** assume `err.message` exists. Stringify defensively.
- **Don't** fp32 by default — q8 is almost always good enough.
- **Don't** trust `InferenceSession.create()` to throw synchronously on
  WebGPU shader-compile failures. Catch async rejections too.
- **Don't** clear only your own Cache-API store. Sweep them all.
- **Don't** call IndexedDB from a JS context that doesn't have access
  (private mode, some workers). Wrap with try/catch and fall back gracefully.
- **Don't** create the AudioContext anywhere except inside the user-gesture
  click handler.
- **Don't** commit `pkg/.gitignore` — wasm-pack writes `*` and silently
  hides the build artefacts.
- **Don't** stage from the parent repo when working inside `tts/`. The
  embedded-repo warning is real.

---

## Do's (in short)

- **Do** put a synthetic loading task on every engine load, even the ones
  that don't surface progress.
- **Do** show indeterminate animation when percent is 0.
- **Do** stream TTS chunk-by-chunk via Web Audio for live mode.
- **Do** persist user-built voices in IndexedDB so they survive reloads.
- **Do** version the Cache-API store (`tts-studio-v1`) so future schema
  changes are clean breaks.
- **Do** include the runtime config JSON in the repo even when the giant
  ONNX exports stay out — it's how someone recovers if `export_to_onnx.py`
  changes.
- **Do** let the engine try multiple (device, dtype) combos before
  failing. The matrix is small and the user gets a working engine more
  often.
- **Do** rebuild WASM whenever the Rust crate changes, and verify via
  `cargo test --release` that the GPU↔CPU parity test still passes
  before committing.
