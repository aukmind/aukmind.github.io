// Shared by the apps under aukmind.github.io (pdfmerge, image). Plain ES module, needs the global Vue.

const { defineComponent } = Vue;

export const ICONS = {
    rotateLeft: 'M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5',
    rotateRight: 'M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5',
    trash: 'M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15',
    zoom: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-4.3-4.3M11 8v6M8 11h6',
    undo: 'M9 14L4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3',
    download: 'M12 3v12M7 10l5 5 5-5M5 21h14',
    close: 'M18 6L6 18M6 6l12 12',
    check: 'M5 12l5 5L20 7',
    left: 'M15 18l-6-6 6-6',
    right: 'M9 18l6-6-6-6',
    lock: 'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4',
    alert: 'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
    upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
    camera: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    image: 'M4 5h16v14H4zM4 15l4-4 4 4 3-3 5 5M15 9h.01',
    text: 'M4 7V4h16v3M9 20h6M12 4v16',
    square: 'M4 4h16v16H4z',
    circle: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
    line: 'M5 19L19 5',
    highlight: 'M9 11l-6 6v3h6l6-6M14 4l6 6-8 8-6-6z',
    eraser: 'M20 20H8l-4-4 10-10 7 7-7 7M7 11l6 6',
    pointer: 'M4 3l7 17 2.5-7.5L21 10z',
    signature: 'M3 17c3-4 5-9 7-9s-1 9 2 9 3-4 5-4 2 3 4 3M3 21h18',
    calendar: 'M4 5h16v16H4zM4 10h16M9 3v4M15 3v4',
    copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
    grid: 'M3 3h7v9H3zM14 3h7v9h-7zM3 15h7v6H3zM14 15h7v6h-7z',
    page: 'M5 3h14v18H5z',
    plus: 'M12 5v14M5 12h14',
    minus: 'M5 12h14',
    down: 'M6 9l6 6 6-6',
    settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
    pencil: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z',
    share: 'M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4',
    flipH: 'M12 3v18M8 7L3 12l5 5V7zM16 7l5 5-5 5V7z',
    flipV: 'M3 12h18M7 8l5-5 5 5H7zM7 16l5 5 5-5H7z',
    crop: 'M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14',
    sliders: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
    info: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16v-4M12 8h.01',
    arrow: 'M5 19L19 5M9 5h10v10',
    file: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
    zip: 'M21 8v13H3V3h12zM10 3v2M10 7v2M10 11v2M9 15h2v3H9z',
};

export const Icon = defineComponent({
    props: { d: { type: String, required: true }, size: { type: Number, default: 16 } },
    template: `<svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="icon-svg"><path :d="d"/></svg>`,
});
