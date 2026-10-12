# Image Toolbox — plan

Turn the single-screen Image Converter into an image toolbox, the way `pdfmerge/` became a PDF toolbox: one workspace, a tool rail, in-place edits with undo, and fast, private, in-browser processing. **Targets: Android, iOS, Firefox and Chrome** (phones first, desktop too). Android Chrome is where HEIC is hardest (Chrome has no built-in HEIC decoder on any platform) and the device we can test on; Firefox (desktop and Android) has no HEIC and no HEVC in WebCodecs, so it takes the WASM path; iOS (Safari, and every iOS browser since they all use WebKit) decodes HEIC natively. Every path is chosen by feature detection, never by user agent.

## Where it stands today

- `index.html` + `app.js`: one card, drop zone on the left, options on the right (format, quality, one global rotation, resize), "Convert Images".
- `image-worker.js`: decodes in a module worker; HEIC always goes through `libheif-js` WASM; output via `OffscreenCanvas.convertToBlob`.
- `pdf-handler.js`: pdf.js to read PDFs into JPEG pages; jsPDF to build PDFs.
- ImageMagick is already gone (commit `db89078`).

Problems that matter on phones:

| Problem | Where | Effect |
|---|---|---|
| HEIC is decoded in software, full size, every time | `image-worker.js` `decodeHeic()` | On Android, a 12 MP Samsung/iPhone HEIC runs libde265 in single-threaded WASM, then a JS YCbCr→RGBA pass, and is decoded again for every conversion |
| Full-resolution decode even when the output is small | `image-worker.js` | A 50 MP Samsung HEIF becomes a ~200 MB RGBA buffer before any resize: slow, and it can crash the tab on Android |
| HEIC never tries native decode | `image-worker.js` `process()` | Safari 17+ decodes HEIC natively in `createImageBitmap`, but WASM always runs |
| Previews are `<img src=objectURL>` of the original | `app.js` `wrapFile` | HEIC previews fail on Chrome/Firefox; full-size 12–48 MP photos held for thumbnails |
| Rotation/resize are global | `app.js` | Can't fix one sideways photo in a batch |
| Results only download, one fixed flow | `app.js` `triggerDownload` | No way to send a result to WhatsApp/Photos, and no way to fix one photo in a batch before saving |
| One worker, sequential | `image-handler.js` | No parallelism; one big HEIC blocks everything |

## Goals

- Same app shape as the PDF editor: landing with tool cards, labelled tool rail (bottom strip on phones), one workspace of images, selection bar, Download split button, undo.
- HEIC fast on phones: native wherever the browser can, WASM only as a fallback, and **decode each HEIC at most once**.
- Per-image, non-destructive edits; one encode at export, so quality isn't lost to repeated re-encoding.
- Save to Photos on phones through the share sheet.
- Never freeze the UI: all decode/encode off the main thread.

## Non-goals (this round)

- Server-side anything; accounts; cloud storage.
- RAW (DNG/CR2) decoding.
- Animated GIF/WebP editing (still images only, as now).

## HEIC strategy (the core of the phone work)

Where HEIC comes from on Android: Samsung cameras with "High efficiency pictures" on, photos shared from iPhones as originals (Google Photos, Drive, email, USB), and downloads. Pixel cameras save JPEG (Ultra HDR), which the native path already handles.

A HEIC photo is an ISO-BMFF container holding a **grid of HEVC intra-coded tiles** (iPhone: 512×512 tiles; Samsung: tiled too), plus a small **thumbnail** item, rotation/mirror/crop properties (`irot`, `imir`, `clap`) and color info (`colr`/`nclx`). Decoders, fastest first:

1. **Native decode** — `createImageBitmap(file)`. Works on Safari 17+; fails fast on Chrome. One failed probe per session skips this step afterwards. (Untested here; harmless when unsupported.)
2. **WebCodecs HEVC (hardware) — the main Android path.** Parse the container in JS (`js/img/heif.js`: `ftyp`, `meta` → `iinf`/`iloc`/`iref`/`iprp`/`ipco`/`ipma`, `hvcC`, `ispe`, `grid`, `irot`/`imir`/`clap`, `colr`). Configure a `VideoDecoder` with the codec string built from `hvcC` and `description` = the `hvcC` payload. Feed each tile as a key `EncodedVideoChunk` and draw each `VideoFrame` straight into an `OffscreenCanvas` at its grid position, **already scaled to the size we need** (so a 50 MP photo never exists at full size when the output is 2048 px). Apply `irot`/`imir`/`clap`, then close each frame.
   - Gate: `VideoDecoder.isConfigSupported(...)` for that exact `hvcC`. Chrome on Android uses the phone's hardware HEVC decoder when the device has one (nearly all phones since ~2016).
   - Needs a **secure context** (HTTPS or `localhost`), so it is available on aukmind.com and over USB port forwarding during testing.
   - Color: pass the `nclx` matrix/range to the `VideoFrame` color space, and check skin tones against the WASM output in the bench, since a wrong full-range flag washes out or crushes images.
   - Thumbnails: decode only the embedded thumbnail item (a single small HEVC frame): near-instant previews in the grid.
3. **WASM fallback** (`libheif`) for files the hardware path rejects (10-bit, odd profiles, auxiliary alpha) or devices without an HEVC decoder:
   - Worker pool: `min(navigator.hardwareConcurrency - 1, deviceMemory >= 4 ? 2 : 1)`, at least 1.
   - Profile before choosing the binding. If `libheif-js`'s `display()` (JS colour conversion) dominates, use a binding that outputs interleaved RGBA from WASM with a SIMD build.
   - Multithreaded WASM needs `SharedArrayBuffer`, which needs COOP/COEP headers. GitHub Pages can't set them; `coi-serviceworker` with `COEP: credentialless` can (Chrome Android supports it). Decide from the bench whether that speedup is worth the service worker.
4. **Decode once.** Files the browser can't decode natively (HEIC on Chrome/Firefox) get a **proxy** (JPEG q 0.95, capped at 24 MP) plus a 320 px thumbnail; natively decodable files are used as they are. Previews, edits and export use the proxy through native `createImageBitmap`, so HEIC is decoded once.
   - **"Highest resolution" checkbox** (save settings, remembered): exports render from the original file at full size instead of the proxy, so nothing is lost to the 24 MP cap or the proxy's JPEG pass. That costs one more HEIC decode per photo at export. It is off by default; the checkbox says what it does and only matters for files that have a proxy.
5. **Memory guard.** Android Chrome kills tabs that use too much memory. Strictly one large decode at a time; close `VideoFrame`s and bitmaps immediately; render straight at the target size whenever the save settings allow it.

iPhone extra (cheap, unverified): on iOS, drop explicit HEIC types from `accept` so the Photos picker transcodes to JPEG itself; keep them everywhere else, including Android, so `.heic` files stay pickable.

Performance targets on a mid-range Android phone (to confirm with the bench on your phone):
- 12 MP HEIC: grid thumbnail < 0.5 s (embedded thumbnail via WebCodecs); full proxy < 1.5 s via WebCodecs (WASM fallback: < 6 s).
- Export after the proxy exists: < 1 s per photo at 12 MP.
- No main-thread task > 100 ms while processing; no tab crash on a batch of 20 Samsung 12 MP HEIFs or one 50 MP HEIF.

## UX principles (carried over from the PDF editor)

These come from feedback on `pdfmerge/` and are requirements, not nice-to-haves. Any change that breaks one is a bug.

- **Phone first.** Design at 412 px wide first, then widen. Thumb-reachable primary action (sticky bottom bar), tool strip at the bottom, ≥ 44 px touch targets, two-finger pinch zoom wherever there's a big image.
- **One workspace, no clutter.** One set of images, no tabs, no left pane, no step numbers ("1 Input / 2 Options" go away). Adding files appends them, **in the order they were added**. Opening files lands on the main tool unless the user picked a tool first.
- **Edits happen in place and are always undoable.** The grid shows the current result; `Undo change` is always in the header; after an edit, a small toast with Undo fades away on its own. **No result banners** and no "next step" suggestions.
- **Options only when asked.** Secondary settings sit behind a toggle button (`OptionsToggle`/`OptionsPanel`) and open only on click; toggles in one tool are exclusive.
- **Every tool icon keeps a visible label**, grouped in a rail ("clearer than Adobe").
- **The UI never moves under the user's finger.** Reserve space for panels, labels and notices; disable controls rather than hiding them when a mode makes them unavailable; changing hints go after the controls, not before them.
- **One header row.** Tool icon, name and hint on the left; the workspace summary (n images · size) and Undo / Save (split button) on the right. Slim app bar.
- **Picking, not configuring.** A mode that applies to a subset (e.g. per-image crop) shows only the relevant images, labelled with their real position, and the selection decides what gets changed; no selection means all.
- **Click to place, real-world sizes.** Things placed on an image (text, stamps) land where you tap, at a sensible default size for the image, and stay armed for repeated taps; tapping an existing item selects it.
- **Fonts everywhere text is drawn**: built-ins, device fonts, added font files (shared `FontSelect`).
- **Private by design and says so**: "100% local" badge; nothing uploaded; metadata stripped on save unless the user keeps it.
- **Fast feels fast**: thumbnails stream in, the newest requests first; heavy work in workers; a top progress bar plus a small toast with a percentage for long jobs.

## Project structure (same shape as `pdfmerge/`)

```
image/
├── index.html            CDN scripts (pinned versions), #app; prod Vue build (dev build only while testing)
├── styles.css            plain CSS; naive-ui overrides scoped under a parent class
├── package.json          "test": "node --test tests/*.test.mjs" (no build step, no bundler)
├── README.md             what the tools do, how to run, libraries
├── context.md            how the app is meant to behave, decisions from feedback, traps found
├── bench.html            phase 1 decode benchmark (kept: re-run it when decoders change)
├── js/
│   ├── main.js           app shell: landing, rail, header row, viewer, drop overlay, + / camera; TOOL_VIEWS map
│   ├── store.js          shared state; the ONLY place that mutates images (add, applyOp, undo, run, save)
│   ├── tools.js          tool registry: id, group, label, hint, icon, scope, keepsState
│   ├── util.js           tiny helpers (mapLimit, …)
│   ├── img/              image logic, no Vue: decode.js, heif.js, pool.js, worker.js, render.js, encode.js, meta.js, pdf.js
│   └── components/       one file per tool (convert, compress, resize, crop, rotate, adjust, annotate, blur, metadata, watermark) + shared.js (grid, selection bar, stage)
└── tests/                node:test on the pure modules in js/img/ (fixtures in tests/fixtures/, personal photos in tests/fixtures/private/, git-ignored)
```

Conventions, as in pdfmerge:
- Vue 3 + naive-ui from CDN, ES modules served as-is. Serve the **site root** (`cd aukmind.github.io && python3 -m http.server`) so `/naive-ui-theme.js` and `/shared/` resolve.
- `js/img/` has no Vue and is unit-tested; components never touch decoders or encoders directly, only through the store.
- Tools remount when the workspace revision changes unless `keepsState` (same `viewKey` rule as pdfmerge).
- Old hash links keep working through a `LEGACY` map in `store.js`; the hash remembers the last tool, but a reload doesn't count as choosing one.
- `context.md` is kept up to date with every user decision (same sections as pdfmerge's: what it is, product decisions, architecture, traps, running and testing, conventions).
- Comments only for a non-obvious *why*; docs describe shapes and decisions, not code.
- Syntax-check modules with `node --input-type=module --check < file.js` (plain `node --check` parses as CommonJS and misses errors).
- Work on a branch; commit only when asked.

## Architecture

Module responsibilities (paths as in *Project structure*).

- `js/main.js` — shell: landing, tool rail (bottom strip < 700 px), tool header row + workspace bar (one row, as in pdfmerge), drop overlay, `+` FAB, camera button on phones.
- `js/store.js` — the only place that mutates images:
  - `state.images`: ordered `ImageItem[]`; `state.selected`: ids; `state.tool`, `state.toolChosen` (lands in the main tool unless a tool was chosen, same rule as pdfmerge).
  - `add(files)` keeps drop order; PDFs expand to page images (pdf.js); HEIC goes through the decode pipeline above.
  - `applyOp(ids, op, label)` / `undo()` — pushes ops onto each image's stack; bumps `revisions[id]` so thumbnails redraw.
  - `run(label, fn)` — serialised long jobs with a progress toast, as in pdfmerge.
  - `save(ids, { as: 'files' | 'zip' | 'pdf', via: 'share' | 'download' })`.
- `js/tools.js` — registry: `id`, `group`, `label`, `hint`, `icon`, `scope` (`each` per-image / `batch` applies to selection), `keepsState`.
- `js/img/decode.js` — picks the path (native → WebCodecs HEVC → WASM) per file with a capability cache; talks to the pool.
- `js/img/heif.js` — pure HEIF container parser: items, tile grid, thumbnail item, `hvcC` → codec string, transforms, colour info. No decoding; unit-testable on fixture files.
- `js/img/pool.js` — worker pool with transferable bitmaps/blobs, priority (visible thumbnails first, newest request first, like pdfmerge's thumbnail queue).
- `js/img/worker.js` — decode (native / WebCodecs tiles / WASM), proxy + thumbnail, render(ops) + encode. (`VideoDecoder` and `OffscreenCanvas` are both available in dedicated workers on Chrome Android.)
- `js/img/render.js` — pure: ops → canvas steps (output size, transform matrix, crop rect, filter string). Shared by the worker and the live preview.
- `js/img/encode.js` — format/quality/target-size encoding.
- `js/img/meta.js` — read EXIF/GPS for display (`exifr`, lazy-loaded); stripping happens naturally because canvas output carries no metadata.
- `js/components/` — one file per tool, plus `shared.js` (image grid with selection, selection bar).

Shared with pdfmerge (move to the site root `/shared/`, following the `/naive-ui-theme.js` precedent; both apps import from there):
- `options.js` (OptionsToggle/OptionsPanel), `fonts.js` (FontSelect, device fonts, font files), the zoomable stage (`PageStage` zoom: wheel, Safari gesture, buttons), icons.
- Add **two-finger touch pinch** to the shared stage. Phones need it here, and pdfmerge's zoom currently has no touch pinch either.

### Data model

`ImageItem`: `{ id, name, source: File, proxy: Blob | null, thumb: url, width, height, ops: Op[], undo: Op[][] }`

`Op` (applied in order, all cheap to re-run on a proxy):
- `rotate {deg}`, `flip {axis}`, `crop {x,y,w,h normalized, aspect}`, `resize {mode, percent | w,h, lock}`
- `adjust {brightness, contrast, saturation, …}` (canvas `filter` string — native and fast)
- `annotate {elements}`, `watermark {text|image, opacity, angle, tile, font}`, `blur {rects, kind: blur|pixelate}`

Edits are in place (like pdfmerge): the grid always shows the current result; `Undo change` pops the last op batch. Output format/quality are **save settings**, not ops.

## Tools (rail groups)

| Group | Tool | Notes |
|---|---|---|
| Convert | Convert | PNG / JPG / WEBP / PDF (+ AVIF only where `convertToBlob('image/avif')` works); quality |
| | Compress | Quality slider **or** "under N KB" (binary search on quality in the worker) |
| | Resize | Percent / pixels / longest side / presets (e.g. 1080 px, 2048 px) |
| Edit | Crop | Per image, page-by-page like pdfmerge Crop (big current, next/prev on the sides); aspect presets (free, 1:1, 4:3, 16:9, 9:16); pinch zoom |
| | Rotate & flip | Per image (the grid card) and for the selection |
| | Adjust | Brightness, contrast, saturation, warmth, B&W; live preview with CSS filters on the thumbnail |
| | Annotate | Text, arrows, boxes, freehand, highlight; reuses FontSelect |
| Privacy | Blur | Draw boxes to blur or pixelate (faces, plates, addresses) |
| | Metadata | Shows what's in the file (GPS on a map link, camera, date); everything is stripped on save; optional "keep date taken" |
| | Watermark | Text/image, tile, opacity, angle; reuses FontSelect |

Save: split button like pdfmerge. The main button downloads the selection in the current format (on Android, downloads land in Downloads and show up in the gallery). The arrow offers **Share…** (`navigator.share({ files })` when `canShare`: send to WhatsApp or Google Photos, or "Save to Photos" on iOS), **Download ZIP**, **Make a PDF**, **Open in PDF Editor**.

## Phone specifics (on top of the UX principles)

- Tool strip at the bottom; primary action in a sticky bottom bar within thumb reach; ≥ 44 px targets.
- Camera input (`capture="environment"`) next to `+`.
- Android: download is the primary save, share is in the menu. iOS: share first, because downloads go to Files.
- Android back button: closes the open panel or viewer first (`popstate` with a pushed state), not the app.
- Big batches: thumbnails stream in as they're ready; the grid never waits for the whole batch.
- No layout shift on interaction (same rule as pdfmerge): reserve space for option panels and labels.

## Decision points

1. **HEIC decoder order** → native → WebCodecs HEVC tiles → WASM. *Why:* hardware HEVC is on nearly every Android phone and is far faster than single-threaded WASM; WASM stays as the safety net. *Cost:* we own a small HEIF parser (boxes are well specified; fixtures cover iPhone and Samsung layouts).
2. **iOS `accept` without HEIC** → yes, iOS only, low risk. *Why:* the OS transcode is free speed there; can't be tested here, but it only changes what the picker returns.
3. **Proxy format** → JPEG q 0.95. *Why:* native decode everywhere, fast to encode; PNG encode is too slow on phones. Exports to PNG still render from the proxy (visually lossless at 0.95).
4. **Non-destructive ops vs baking each edit** → ops. *Why:* instant undo, one encode, edits stay adjustable.
5. **Shared code** → `/shared/` at the site root. *Why:* both apps already depend on root `/naive-ui-theme.js`. *Cost:* `/shared/` has to be deployed before the apps that use it.
6. **PDF output** → pdf-lib (drop jsPDF), matching pdfmerge; "Open in PDF Editor" hands files over through IndexedDB and opens `/pdfmerge/#import`.
7. **Better encoders (MozJPEG/AVIF via jSquash WASM)** → not by default; offered only in Compress when native output is larger than wanted. *Why:* extra download and slower on phones.
8. **Proxy vs full resolution** → proxy by default, "Highest resolution" checkbox for full-size exports from the original. *Why:* fast edits on phones by default, and no silent quality loss when it matters.

## Phases

Each phase ends with one narrow test run of its new code; the full suite runs once at the end.

0. **Shared modules.** Move options/fonts/stage zoom/icons to `/shared/`; pdfmerge imports them; add touch pinch to the stage. Check: pdfmerge still works (Organize, Edit zoom, fonts) in the browser.
1. **Decode pipeline + bench.** `heif.js` parser, `decode.js`, `pool.js`, `worker.js` (native → WebCodecs → WASM, proxy, thumbnail), and `bench.html`. The bench runs every available path on the same files, shows per-file timings, path, peak size and a side-by-side colour check, and has a **Copy results** button so you can paste the numbers back. Check: parser unit tests on fixtures; desktop Chrome run (WebCodecs HEVC also exists on desktop Chrome with hardware support); **you run the bench on your Android phone** with your own Samsung/iPhone HEIC files. The WASM binding and the threads/service-worker question are decided from those numbers.
2. **Shell + workspace.** Landing, rail/bottom strip, grid with selection bar, store with ops and undo, save split button with share. Check: browser at desktop width and 412×915 with touch emulation; then on your Android phone.
3. **Convert / Compress / Resize** ported onto ops + save settings, including target-size compression. Check: unit tests for size math and the quality search.
4. **Rotate & flip, Crop** with the shared zoom stage. Check: crop math unit tests; browser crop at 1×/4× zoom.
5. **Adjust, Annotate, Watermark, Blur.** Check: render-op unit tests; browser visual check.
6. **Metadata** (read + strip + optional keep-date). Check: a fixture JPEG with GPS comes out without it.
7. **PDF:** pdf-lib output, PDF input pages, hand-off to the PDF editor. Check: browser round trip image → PDF editor.
8. **Docs + full run:** README, `context.md` (same format as pdfmerge's), full `npm test` once, final phone pass.

## Tests

- `npm test` (`node:test`) on pure modules: `heif.js` (fixture HEIC files from an iPhone and a Samsung: grid layout, thumbnail item, `irot`/`imir`, codec string), `render.js` (ops → size/matrix/crop/filter), resize math, target-size search, filename/extension rules, decode path selection (stubbed capabilities), op undo stack.
- Desktop browser checks with Claude-in-Chrome in a dedicated tab, with `saveAs`/`navigator.share` stubbed; Android layout checked at 412×915 (a typical Android viewport) with touch emulation.
- **On your Android phone** (the real target):
  - Serve over USB so the phone has a secure context: `adb reverse tcp:8000 tcp:8000`, then open `http://localhost:8000/image/` in Chrome on the phone. A LAN IP over plain HTTP would disable WebCodecs and service workers. Alternatively, use the deployed HTTPS site.
  - Optional remote DevTools: `chrome://inspect` on the desktop shows the phone tab's console and performance profile.
  - Script per phase: the bench (phase 1); add 10–20 HEIC photos, crop one, compress the batch to under 500 KB, download and share (phases 2–4); a final pass at the end.
  - Fixtures: a synthetic grid HEIC (built by `tests/fixtures/make-heic.py` and committed) plus your own photos in `tests/fixtures/private/` (git-ignored).
- Firefox: desktop Firefox is run by Playwright (WASM HEIC path, encoders, layout); Firefox Android uses the same engine paths.
- iPhone: untested by us; it relies on feature detection only (native decode probe, `canShare`), so unsupported paths fall back to the Android/desktop behaviour.

## Answered questions

- **Targets**: Android, iOS, Firefox, Chrome.
- **Quality**: "Highest resolution" checkbox renders exports from the original (see HEIC strategy, step 4).
- **Metadata**: a full editor (view, keep/remove, edit, bulk over the selection) instead of strip + "keep date"; a remembered default for unedited photos (remove all / keep all but location / keep all); saved JPG/PNG always carry `Software: https://aukmind.com/image`.
- **Blur**: boxes or circles. **Watermark**: text, logo or both, repeated patterns with grid lines, 1° angles, live overlay preview, "Watermark & save all".
- **Compress under N KB**: shrink the pixels when quality alone can't reach the size.
- Not answered, so the plan's defaults apply: no background removal (40 MB model); metadata stripped by default; AVIF offered only where the browser can encode it.
