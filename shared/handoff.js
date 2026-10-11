// Files passed from one app on this site to another (the image toolbox's "Open in PDF Editor" → /pdfmerge/#import),
// through IndexedDB. One pending hand-off at a time; one older than MAX_AGE is dropped instead of opened by surprise.

const DB = 'aukmind-handoff';
const STORE = 'files';
const KEY = 'pending';
const MAX_AGE = 10 * 60_000;

function open() {
    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB, 1);
        req.onupgradeneeded = () => req.result.createObjectStore(STORE);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function transact(fn) {
    const db = await open();
    try {
        return await new Promise((resolve, reject) => {
            const tx = db.transaction(STORE, 'readwrite');
            let result;
            fn(tx.objectStore(STORE), (v) => { result = v; });
            tx.oncomplete = () => resolve(result);
            tx.onerror = () => reject(tx.error);
        });
    } finally {
        db.close();
    }
}

export function sendHandoff(files) {
    return transact((store) => {
        store.put({ at: Date.now(), files: files.map(f => ({ name: f.name, type: f.type, blob: f })) }, KEY);
    });
}

// The pending files (and forgets them), or [].
export function takeHandoff() {
    return transact((store, done) => {
        const get = store.get(KEY);
        get.onsuccess = () => {
            store.delete(KEY);
            const entry = get.result;
            done(entry && Date.now() - entry.at < MAX_AGE ? entry.files.map(f => new File([f.blob], f.name, { type: f.type })) : []);
        };
    });
}
