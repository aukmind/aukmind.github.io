const { onMounted, onBeforeUnmount } = Vue;

// Zoom gestures on a scrolling element: ctrl/⌘ + wheel (trackpad pinch), Safari gesture events, two-finger touch pinch.
// get() returns the current zoom; set(zoom, point) applies it, keeping `point` ({ clientX, clientY }) in place.
// The element needs `touch-action: pan-x pan-y` so the browser pans but leaves pinches to us.
export function usePinchZoom(el, { get, set }) {
    const onWheel = (e) => {
        if (!e.ctrlKey && !e.metaKey) return;
        e.preventDefault();
        set(get() * Math.exp(-e.deltaY * 0.01), e);
    };

    let gestureBase = 1;
    const onGestureStart = (e) => { e.preventDefault(); gestureBase = get(); };
    const onGestureChange = (e) => { e.preventDefault(); set(gestureBase * e.scale, e); };

    let pinch = null;
    const spread = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const middle = (t) => ({ clientX: (t[0].clientX + t[1].clientX) / 2, clientY: (t[0].clientY + t[1].clientY) / 2 });
    const onTouchStart = (e) => {
        if (e.touches.length !== 2) return;
        pinch = { distance: spread(e.touches) || 1, base: get() };
        // A one-finger drag that started first (crop box, drawing) must not keep following the pinch.
        window.dispatchEvent(new PointerEvent('pointercancel'));
    };
    // Touch moves outrun the screen: apply the latest pinch once per frame (each set() lays the page out again).
    let frame = 0, latest = null;
    const onTouchMove = (e) => {
        if (!pinch || e.touches.length !== 2) return;
        e.preventDefault();
        latest = [pinch.base * (spread(e.touches) / pinch.distance), middle(e.touches)];
        frame ||= requestAnimationFrame(() => {
            frame = 0;
            set(...latest);
        });
    };
    const onTouchEnd = (e) => { if (e.touches.length < 2) pinch = null; };

    onMounted(() => {
        const node = el.value;
        node.addEventListener('wheel', onWheel, { passive: false });
        node.addEventListener('gesturestart', onGestureStart);
        node.addEventListener('gesturechange', onGestureChange);
        node.addEventListener('touchstart', onTouchStart, { passive: true });
        node.addEventListener('touchmove', onTouchMove, { passive: false });
        node.addEventListener('touchend', onTouchEnd);
        node.addEventListener('touchcancel', onTouchEnd);
    });
    onBeforeUnmount(() => {
        const node = el.value;
        if (!node) return;
        node.removeEventListener('wheel', onWheel);
        node.removeEventListener('gesturestart', onGestureStart);
        node.removeEventListener('gesturechange', onGestureChange);
        node.removeEventListener('touchstart', onTouchStart);
        node.removeEventListener('touchmove', onTouchMove);
        node.removeEventListener('touchend', onTouchEnd);
        node.removeEventListener('touchcancel', onTouchEnd);
    });
}
