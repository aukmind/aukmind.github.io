# PDF Editor — project context

Working knowledge for anyone (human or agent) changing this app. The README covers what the tools do; this file covers how the app is meant to behave, why, and the traps already found.

## What it is

A PDF toolbox served as a static page under `aukmind.github.io/pdfmerge/`. Everything runs in the browser: no upload, no server, no build step. Libraries come from CDNs with pinned versions (see `index.html`); qpdf-wasm is fetched only when a password tool is used.

## Product decisions (from user feedback — keep them)

- **One document, built in memory.** No tabs. The first PDF added becomes the document (`state.doc`); every later PDF is appended at the end as one undoable edit. Organize always shows all of its pages.
- **Documents are edited in place.** Tools that modify the document replace it under the same name. Each edit is undoable (up to 20 versions, `Undo change` in the header, plus a short bottom toast with Undo after each edit). There is no result banner: it was removed as clutter. An edited document shows an amber dot.
- **Locked/damaged files wait** in a notice strip (`PendingFiles`) with "Unlock & add" / "Repair & add"; they never become the document until readable.
- **Dropped images are converted and appended** right away (size of the image, no margin). Image pages carry a `/PdfEditorImage` tag in the page dict (survives `copyPages`); the store keeps the original image per tag so Organize → Image options can rebuild those pages. Only the To PDF tool keeps its own image list (`accepts: 'images'`).
- **Download is a split button**: the main part downloads; the arrow opens a small menu (Download, Sign, Protect with a password). Plain buttons in an `n-popover`, not `n-dropdown`.
- **Image options mode**: while that panel is open, Organize shows only image pages (labelled with their real page numbers), can't reorder or delete, and the selection picks which image pages get the settings (none picked = all).
- **Separate files are downloaded.** Extract pages, To PDF, Protect go straight to Downloads.
- **Options behind a toggle**: `OptionsToggle`/`OptionsPanel` (`components/options.js`) show secondary options only on click; toggles sharing a v-model are exclusive. Organize uses it for Page numbers and Image options.
- **Sign**: Signature only (no separate Initials). Picking a signature arms it; each click on the page places one (~1.5 cm tall, ≤ 5.3 cm wide), clicks on placed elements select them, Esc stops.
- **Opening a document lands in Organize** unless a tool was chosen first (landing card, or a link opened fresh — `state.toolChosen`). The hash also persists the last tool across reloads, so a reload doesn't count as choosing.
- **Page numbers live only in Organize** (the standalone tool was removed; `#numbers` opens Organize with that panel).
- **Fonts**: every text option uses `FontSelect` (`components/fonts.js`): PDF standard fonts, device fonts via `queryLocalFonts()` (Chromium only, permission once; auto-listed when already granted) and added .ttf/.otf files. Registry and bytes in `pdf/fonts.js`; `ops.fontLoader` embeds non-standard fonts as subsets through fontkit (lazy-loaded). Keys look like `device:<family>` / `file:<name>`.
- **Zoom in the page stage** (Crop, Edit, Sign, Redact): ctrl/⌘ + wheel (trackpad pinch), Safari gesture events, two-finger touch pinch and a −/%/+ pill; the page re-renders at the zoomed resolution (capped at 36 MP). Browser zoom is intercepted on the stage because it only stretched a low-res render.
- **Header is one row**: tool icon, name and hint on the left, document on the right; slim 52 px app bar.
- **Compare** compares the document with its version before your changes, or a PDF picked inside the tool (never appended).
- **Tools live in a right rail**, labelled icons, grouped like iLovePDF except Watermark (user wants it under Security): Organize / Edit (Edit, Crop, Page numbers, Fill form) / Convert (From PDF, To PDF) / Security (Protect, Sign, Redact, Watermark, Compare). Every icon keeps a visible label ("clearer than Adobe").
- **Convert is two tools with a format picker**, not one tool per format. Old hash links (`#to-images`, `#scan`, `#convert`, …) are mapped in `store.js` (`LEGACY`).
- **Crop is page by page**: big current page, small previous/next on the sides; "Crop page N & next" keeps the same box; after the last page (or Crop all) it switches to Organize.
- **Redaction must be real**: boxes render fully black; applying rasterizes redacted pages (or all pages) so text can't be copied. The notice explaining this is always visible in Redact (no layout shift when the first box appears). Black/white boxes drawn in Edit trigger a warning pointing to Redact.
- **Stamps scale with the page**: page-number and watermark sizes are given for the widest page; smaller (cropped) pages get them scaled by width ratio so they look the same everywhere (`stampScale`/`referenceWidth` in `ops.js`).
- **Signatures are remembered only on opt-in** ("Remember on this device", localStorage).
- **Dark mode is real**: colours come only from the tokens in `/shared/theme.css` (PDF pages use `--paper`, white in both modes), naive-ui follows the device (`/shared/theme.js`), and `color-scheme: light dark` stops browsers from force-darkening the page. Never write a raw colour in `styles.css`.
- **Phones and tablets**: tools in a strip at the bottom, + docked in the action bar (phones) or the strip (tablets); `/shared/phone.css` hides what a phone has no room for (hints, sizes, odd/even/invert, the thumbnail size slider).
- **UI must not move under the user**: reserved space for the editor properties panel, fixed rotate-button labels, static redact notice. Treat any layout shift on interaction as a bug.

## Architecture

- `js/main.js` — app shell: landing page (shown when nothing is open), document bar, tool rail, tool header, page viewer, drop overlay, `+` button. `TOOL_VIEWS` maps tool ids to components.
- `js/store.js` — shared state and the only place that mutates documents:
  - `loadFiles` (keeps drop order; runs of images go through `convertImages`) / `append(names)` / `resolvePending` — growing the document; appends keep existing pages' thumbnails and set `state.appended` so Organize can extend an unsaved board.
  - `edit(label, fn, summary)` / `undoEdit` — in-place changes; bump `state.revisions[name]` so views redraw.
  - `output(label, name, fn)` — new file → download.
  - `run(label, fn)` — serialises long operations, busy state, error toasts (translates pdf-lib "cannot encode" font errors).
  - thumbnail queue (`thumb()`), per-file caches keyed by name.
- `js/tools.js` — registry: `group`, `needs` (`doc` | `none`), `accepts: 'images'`, `keepsState` (stay mounted across in-place edits: Organize, Crop, Protect). The Protect tool's id stays `security` so links keep working; `#protect` maps to it.
- `js/pdf/handler.js` — loads files (status `ok` | `locked` | `broken`), caches the pdf-lib parse (`doc()`, read-only) and pdf.js document, geometry, text runs; `replace()`/`undo()` keep the version stack; `generation` invalidates in-flight thumbnails.
- `js/pdf/ops.js` — pdf-lib operations (compose/merge, stamps, crop, annotations, forms, images → PDF, redact, repair). `geometry.js` maps display coordinates (top-left, /Rotate applied, normalized) to PDF space. `qpdf.js` wraps qpdf-wasm (encrypt/decrypt only).
- `js/components/` — one file per tool; `shared.js` holds the page grid, page stage, selection bar, drag/resize helpers, `useObjectUrls`, `useSortable`.
- `/shared/` at the site root (shared with `/image/`): `icons.js`, `options.js`, `fonts.js` (FontSelect takes the built-ins as a prop; `components/fonts.js` passes the PDF fonts), `zoom.js` (ctrl/⌘ + wheel, Safari gestures, two-finger touch pinch). Deploy `/shared/` before the apps that use it.
- `#import` takes files another app on the site left through `/shared/handoff.js` (e.g. the image toolbox's "Open in PDF Editor") and loads them; hand-offs older than 10 minutes are dropped.
- Tools remount when the document or its revision changes (`viewKey` in `main.js`) unless `keepsState`.

## Traps already hit

- **pdf.js takes ownership of the buffer** it is given; always pass a fresh copy and share one load per document (`_pdf()`).
- **pdf-lib `getPage(i)` walks the whole page tree** — O(N). Call `getPages()` once; geometry is cached per document.
- **pdf-lib `copyPages` follows links into other pages**, leaking content of pages that were "removed" or redacted. `copySource` blanks unused pages first; keep using it.
- **pdf-lib "loads" junk without error** (no page tree); `add()` checks `getPageCount()`.
- **The qpdf-wasm build cannot repair damaged files**; Repair uses pdf-lib re-save, then pdf.js rasterization as fallback.
- **Standard PDF fonts only cover WinAnsi**: non-Latin text (and some locales' date digits) can't be drawn with the built-in fonts.
- **Vue reactivity**: mutating the plain object you pushed into a reactive array does not redraw — use the reactive element (`elements.value.at(-1)`). This caused the "redaction drag draws from the previous click" bug.
- **`backdrop-filter` creates a containing block**, breaking `position: fixed` children (the phone action bar); it is disabled on the tool bar under 700px.
- **Don't name a local `ref`** inside `setup()` — it shadows Vue's `ref` and crashes the component (TDZ).
- **The production Vue build hides template warnings** (missing bindings fail silently). Test UI changes with `vue.global.js`, then switch back to `vue.global.prod.js`.
- **ES modules are cached hard**: hard-reload (Ctrl+Shift+R) after edits, or a stale module gets mixed with new ones.
- **A hidden/occluded Chrome window stops painting**, which stalls pdf.js rendering and IntersectionObserver; it is not an app bug. Bring the window forward (or force frames) when testing.
- **`node --check file.js` parses as CommonJS** and accepts a stray top-level `return`; syntax-check with `node --input-type=module --check < file.js`.
- **naive-ui's styles override plain class selectors** (e.g. `n-input` width): scope overrides under a parent class.
- **naive-ui injects its styles at runtime**, after `styles.css`; the few `!important` rules (upload dragger) exist for that reason.

## Running and testing

- Serve the site root so `/shared/` resolves: `cd aukmind.github.io && python3 -m http.server`, open `/pdfmerge/`.
- `npm test` runs `node:test` on the pure modules (ranges, geometry, markdown). Anything touching pdf-lib/pdf.js is verified in a browser.
- Browser checks are done with the Claude-in-Chrome tools in a dedicated tab (the user may be using another tab of the same window — never drive theirs). Stub `window.saveAs` to capture downloads instead of writing files.

## Conventions

- Comments only for non-obvious *why*; no narration.
- Docs/specs describe shapes and decisions, not full code.
- Commit only when asked; work happens on branch `pdf-toolbox`.
