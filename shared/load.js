// Libraries loaded on first use. A failed load is forgotten so the next call retries.

// fn() once; while it's pending or after it succeeded, the same promise. A rejection clears it.
export function once(fn) {
    let promise = null;
    return () => (promise ??= fn().catch((err) => {
        promise = null;
        throw err;
    }));
}

const scripts = new Map();

// A classic <script>, resolving to window[global].
export function loadScript(url, global) {
    if (!scripts.has(url)) {
        scripts.set(url, once(() => new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.src = url;
            s.onload = () => resolve(window[global]);
            s.onerror = () => {
                s.remove();
                reject(new Error(`Couldn't download ${url.split('/').pop()}`));
            };
            document.head.appendChild(s);
        })));
    }
    return scripts.get(url)();
}
