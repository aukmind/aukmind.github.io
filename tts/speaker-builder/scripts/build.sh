#!/usr/bin/env bash
# Build the speaker-builder WASM bundle and copy it next to the browser app.
# Output: ../pkg/speaker_builder.{js,_bg.wasm,.d.ts}
set -euo pipefail
cd "$(dirname "$0")/.."

wasm-pack build --release --target web --out-dir ../pkg --out-name speaker_builder

echo "Built. Size:"
du -h ../pkg/speaker_builder_bg.wasm
