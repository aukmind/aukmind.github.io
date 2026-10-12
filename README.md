# aukmind.com

Static GitHub Pages site, no build step. One repo: the landing page, `tools.html` and every tool.

    python3 -m http.server 8000    # from the repo root, then open /tools.html

## Layout

- `index.html`, `tools.html`, `site.css` — landing page and the tools shell (loads each tool in an iframe).
- `<tool>/` — one folder per tool (`pdfmerge/`, `image/`, `linkedin/`, `tts/`). Its own `index.html`, styles, JS and tests.
- `shared/` — code used by more than one tool. Import with absolute paths: `import { pickFiles } from '/shared/dom.js'`.

## Shared modules

| File | What |
|---|---|
| `theme.js` | `aukmindTheme` (naive-ui overrides), `useNaiveTheme`, `useNaiveOverrides` (dark mode) |
| `theme.css` | colour tokens, light and dark |
| `phone.css` | what phones hide |
| `dom.js` | listeners, `useKeydown`, `useFileDrop`, `pickFiles`, `useObjectUrls`, `useMedia`, drag/rect helpers, `useSortable` |
| `icons.js` | `Icon`, `ICONS` |
| `options.js` | `OptionsToggle`, `OptionsPanel` |
| `fonts.js` | `FontSelect`, `fontCss`, `customFont` |
| `zoom.js` | `usePinchZoom` |
| `load.js` | `loadScript`, `once` |
| `handoff.js` | `sendHandoff`, `takeHandoff` — pass files between tools via IndexedDB |

Shared modules expect Vue and naive-ui as globals (CDN `<script>` tags), so tool entry scripts must be `type="module"`.

## Tests

Per tool: `cd pdfmerge && npm test` (same for `image/`).
