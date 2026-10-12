// Tiny utilities shared by speaker-builder.js, qwen-browser.js, and
// tts-handler.js. Extract point so the same fetch/feature-detect code
// doesn't drift across three files.

/** Fetch a URL into a Uint8Array, streaming progress fractions to the
 *  callback. Returns the bytes fully downloaded. */
export async function fetchBytes(url, onProgress) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Fetch ${url}: ${resp.status}`);
  const total = Number(resp.headers.get("content-length")) || 0;
  if (!total || !resp.body) {
    return new Uint8Array(await resp.arrayBuffer());
  }
  const reader = resp.body.getReader();
  const chunks = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;
    onProgress?.(received / total);
  }
  const out = new Uint8Array(received);
  let off = 0;
  for (const c of chunks) { out.set(c, off); off += c.length; }
  return out;
}

/** True if `navigator.gpu.requestAdapter()` returns a usable adapter. */
export async function webgpuAvailable() {
  if (typeof navigator === "undefined" || !navigator.gpu) return false;
  try { return !!(await navigator.gpu.requestAdapter()); }
  catch { return false; }
}

/** Convenience: returns "webgpu" or "wasm" depending on what's available. */
export async function detectBackend() {
  return (await webgpuAvailable()) ? "webgpu" : "wasm";
}

// ─── Cache-API persistence ───────────────────────────────────────────
//
// localStorage caps at ~5-10 MB and only stores strings. The Cache API
// (the same one the kokoro-js / transformers.js libs use internally) is
// designed for Response objects, persists across sessions, and the
// browser handles eviction under storage pressure.

const TTS_CACHE = "tts-studio-v1";

/** Same as `fetchBytes` but transparently checks the Cache API first.
 *  On a cache hit, `onProgress(1)` fires once and the bytes return
 *  instantly. On a miss, it streams progress as normal and writes the
 *  full response into the cache for next time. Failure to access the
 *  cache (private mode, quota, no SW context, …) silently falls back
 *  to a plain `fetchBytes`. */
export async function cachedFetchBytes(url, onProgress, cacheName = TTS_CACHE) {
  const cache = await openCache(cacheName);
  if (cache) {
    try {
      const hit = await cache.match(url);
      if (hit) {
        const bytes = new Uint8Array(await hit.arrayBuffer());
        onProgress?.(1);
        return bytes;
      }
    } catch (e) { console.warn("cache.match failed", e); }
  }
  const bytes = await fetchBytes(url, onProgress);
  if (cache) {
    try {
      await cache.put(url, new Response(bytes, {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Length": String(bytes.byteLength),
        },
      }));
    } catch (e) { console.warn("cache.put failed", e); }
  }
  return bytes;
}

async function openCache(name) {
  if (typeof caches === "undefined") return null;
  try { return await caches.open(name); }
  catch { return null; }
}

/** Approximate cached-bytes total across **every** Cache-API store on
 *  this origin (ours, transformers.js's `transformers-cache`, kokoro-js's
 *  `kokoro-voices`, …). Sums Content-Length headers; a lower bound when
 *  entries don't advertise their size. */
export async function cachedSizeBytes(_unused) {
  if (typeof caches === "undefined") return 0;
  let total = 0;
  try {
    const names = await caches.keys();
    for (const name of names) {
      const cache = await caches.open(name);
      const keys = await cache.keys();
      for (const req of keys) {
        const resp = await cache.match(req);
        const len = Number(resp?.headers.get("content-length") || 0);
        if (len > 0) total += len;
      }
    }
  } catch (e) { console.warn("cachedSizeBytes failed", e); }
  return total;
}

/** Drop the entire shared cache. Resolves to true if it existed. */
export async function clearCache(cacheName = TTS_CACHE) {
  if (typeof caches === "undefined") return false;
  try { return await caches.delete(cacheName); }
  catch { return false; }
}

/** Wipe every Cache-API entry on this origin: ours (`tts-studio-v1`),
 *  transformers.js's (`transformers-cache`), kokoro-js's
 *  (`kokoro-voices`), plus anything else accumulated. Used when the user
 *  hits a corrupted cached model and a normal "clear" isn't enough. */
export async function clearAllCaches() {
  if (typeof caches === "undefined") return 0;
  try {
    const names = await caches.keys();
    let cleared = 0;
    for (const n of names) {
      if (await caches.delete(n)) cleared++;
    }
    return cleared;
  } catch (e) {
    console.warn("clearAllCaches failed", e);
    return 0;
  }
}

// ─── Voice store (IndexedDB) ─────────────────────────────────────────
//
// Cloned OuteTTS speakers (the JSON the encoder produces) and pasted
// Qwen custom voice IDs need to survive page reload. localStorage is
// 5-10 MB and string-only — too small for OuteTTS speakers and awkward
// for binary code arrays. Cache API is for Response objects. IndexedDB
// is the right home: arbitrary structured-clonable values, multi-GB
// quota, persistent.

const VOICE_DB = "tts-studio-voices";
const VOICE_STORE = "voices";

function openVoiceDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === "undefined") {
      return reject(new Error("IndexedDB unavailable"));
    }
    const req = indexedDB.open(VOICE_DB, 1);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = () => req.result.createObjectStore(VOICE_STORE);
  });
}

/** Store a voice under `key`. Value can be any structured-clonable JSON. */
export async function saveVoice(key, value) {
  try {
    const db = await openVoiceDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(VOICE_STORE, "readwrite");
      tx.objectStore(VOICE_STORE).put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) { console.warn("saveVoice failed", e); }
}

export async function deleteVoice(key) {
  try {
    const db = await openVoiceDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(VOICE_STORE, "readwrite");
      tx.objectStore(VOICE_STORE).delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  } catch (e) { console.warn("deleteVoice failed", e); }
}

/** Returns `[{ key, value }, …]` for every saved voice. Empty list if IDB
 *  is unavailable or the DB is empty. */
export async function listVoices() {
  try {
    const db = await openVoiceDb();
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(VOICE_STORE, "readonly");
      const store = tx.objectStore(VOICE_STORE);
      const items = [];
      const req = store.openCursor();
      req.onsuccess = (ev) => {
        const cur = ev.target.result;
        if (cur) { items.push({ key: cur.key, value: cur.value }); cur.continue(); }
        else resolve(items);
      };
      req.onerror = () => reject(req.error);
    });
  } catch (e) { console.warn("listVoices failed", e); return []; }
}
