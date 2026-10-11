// Small DOM and Vue helpers both apps use: listeners, file pickers, blob URLs, pointer drags, sortable grids.

const { ref, shallowRef, onMounted, onBeforeUnmount } = Vue;

export function useWindowListener(type, handler, options) {
    onMounted(() => window.addEventListener(type, handler, options));
    onBeforeUnmount(() => window.removeEventListener(type, handler, options));
}

// Keyboard shortcuts that leave text fields and sliders their own keys. Buttons are fine: a shortcut that also
// means something to a focused button (Enter) calls preventDefault.
export function useKeydown(handler) {
    useWindowListener('keydown', (e) => {
        if (e.defaultPrevented) return;
        const t = e.target;
        if (t instanceof Element && t.closest('input, textarea, select, [contenteditable], [role="slider"]')) return;
        handler(e);
    });
}

export function pickFiles({ accept = '', capture = null, multiple = false } = {}) {
    return new Promise((resolve) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = accept;
        input.multiple = multiple;
        if (capture) input.capture = capture;
        input.onchange = () => resolve([...input.files]);
        input.oncancel = () => resolve([]);
        input.click();
    });
}

// Files dropped anywhere on the page (and pasted, if asked). Returns a ref that is true while files hover.
export function useFileDrop(onFiles, { paste = false } = {}) {
    const dragging = ref(false);
    let depth = 0;
    const isFileDrag = (e) => [...(e.dataTransfer?.types || [])].includes('Files');
    useWindowListener('dragenter', (e) => { if (isFileDrag(e)) { depth++; dragging.value = true; } });
    useWindowListener('dragover', (e) => { if (isFileDrag(e)) e.preventDefault(); });
    useWindowListener('dragleave', (e) => { if (isFileDrag(e) && --depth <= 0) { depth = 0; dragging.value = false; } });
    useWindowListener('drop', (e) => {
        if (!isFileDrag(e)) return;
        e.preventDefault();
        depth = 0;
        dragging.value = false;
        onFiles([...e.dataTransfer.files]);
    });
    if (paste) {
        useWindowListener('paste', (e) => {
            const files = [...(e.clipboardData?.files || [])];
            if (files.length) onFiles(files);
        });
    }
    return dragging;
}

// Holds blob URLs (a string or an object of them) and revokes whatever it replaces or outlives.
export function useObjectUrls() {
    const value = shallowRef(null);
    let token = 0;
    const urlsOf = (v) => (!v ? [] : typeof v === 'string' ? [v] : Object.values(v).filter(u => typeof u === 'string'));
    const revoke = (v) => urlsOf(v).forEach(u => URL.revokeObjectURL(u));

    const clear = () => {
        token++;
        revoke(value.value);
        value.value = null;
    };
    // Shows produce()'s result unless a newer load started meanwhile; keep=true leaves the old one up until then.
    const load = async (produce, { keep = false } = {}) => {
        const mine = ++token;
        if (!keep) {
            revoke(value.value);
            value.value = null;
        }
        const next = await produce();
        if (mine !== token) {
            revoke(next);
            return false;
        }
        revoke(value.value);
        value.value = next;
        return true;
    };
    onBeforeUnmount(clear);
    return { value, load, clear };
}

export const clamp01 = (v) => Math.min(1, Math.max(0, v));

export function pointIn(event, el) {
    const r = el.getBoundingClientRect();
    return { x: clamp01((event.clientX - r.left) / r.width), y: clamp01((event.clientY - r.top) / r.height) };
}

export function boxStyle(rect) {
    return { left: `${rect.x * 100}%`, top: `${rect.y * 100}%`, width: `${rect.w * 100}%`, height: `${rect.h * 100}%` };
}

// Drags one edge or corner (handle like 'nw', 'e') of a normalized rect, keeping a minimum size.
export function resizeRect(orig, handle, dx, dy, minW, minH = minW) {
    let left = orig.x, top = orig.y, right = orig.x + orig.w, bottom = orig.y + orig.h;
    if (handle.includes('w')) left = Math.min(clamp01(left + dx), right - minW);
    if (handle.includes('e')) right = Math.max(clamp01(right + dx), left + minW);
    if (handle.includes('n')) top = Math.min(clamp01(top + dy), bottom - minH);
    if (handle.includes('s')) bottom = Math.max(clamp01(bottom + dy), top + minH);
    return { x: left, y: top, w: right - left, h: bottom - top };
}

// Pointer drags in normalized coordinates of `el`. onMove(point, start, event) runs until release;
// onEnd gets null for the point when the drag was cancelled (a pinch started).
export function startDrag(event, el, onMove, onEnd = null) {
    event.preventDefault();
    event.stopPropagation();
    const start = pointIn(event, el);
    const move = (e) => onMove(pointIn(e, el), start, e);
    const up = (e) => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('pointercancel', up);
        onEnd?.(e.clientX || e.clientY ? pointIn(e, el) : null, start, e);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    return start;
}

// Sortable moves DOM nodes itself; put the node back and report the move so Vue stays in charge.
export function useSortable(el, onMove, options = {}) {
    let sortable = null;
    onMounted(() => {
        sortable = Sortable.create(el.value, {
            animation: 150,
            delay: 180,
            delayOnTouchOnly: true,
            ghostClass: 'page-card--ghost',
            filter: '.page-card__tool',
            preventOnFilter: false,
            draggable: '.page-card',
            ...options,
            onEnd: ({ item, from, oldIndex, newIndex }) => {
                if (oldIndex === newIndex) return;
                const cards = [...from.children].filter(n => n !== item && n.matches('.page-card'));
                item.remove();
                if (cards[oldIndex]) from.insertBefore(item, cards[oldIndex]);
                else if (cards.length) cards[cards.length - 1].after(item);
                else from.prepend(item);
                onMove(oldIndex, newIndex);
            },
        });
    });
    onBeforeUnmount(() => sortable?.destroy());
}
