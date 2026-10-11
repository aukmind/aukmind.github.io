// Fonts beyond each app's built-ins: fonts installed on the device and font files the user adds.
// Keys: 'device:<family>' | 'file:<name>'. Each app passes its own built-ins to FontSelect.

import { pickFiles } from './dom.js';

const { defineComponent, reactive, computed, h, inject } = Vue;

// key -> { key, label, css, source: { regular, bold } } where each source returns the font file's bytes.
const custom = new Map();

export function customFont(key) {
    return custom.get(key) || null;
}

// CSS font-family for a key: one of `builtins` ({ key, css }), a device/added font, else the first built-in.
export function fontCss(key, builtins) {
    return (builtins.find(f => f.key === key) || custom.get(key) || builtins[0])?.css;
}

const deviceFontsSupported = typeof window !== 'undefined' && 'queryLocalFonts' in window;

const REGULAR = /^(regular|normal|book|roman|medium)$/i;
const ITALIC = /italic|oblique/i;

// Lists installed fonts (asks for permission the first time). Returns the registered entries, sorted.
async function loadDeviceFonts() {
    const faces = await window.queryLocalFonts();
    const families = new Map();
    for (const face of faces) {
        if (!families.has(face.family)) families.set(face.family, []);
        families.get(face.family).push(face);
    }
    const added = [];
    for (const [family, list] of families) {
        const upright = list.filter(f => !ITALIC.test(f.style));
        if (!upright.length) continue;
        const regular = upright.find(f => REGULAR.test(f.style)) || upright.find(f => !/bold|black|heavy/i.test(f.style)) || upright[0];
        const bold = upright.find(f => /^bold$/i.test(f.style)) || upright.find(f => /bold/i.test(f.style) && f !== regular);
        const entry = {
            key: `device:${family}`,
            label: family,
            css: `"${family}", sans-serif`,
            source: { regular: () => regular.blob().then(b => b.arrayBuffer()), bold: bold ? () => bold.blob().then(b => b.arrayBuffer()) : null },
        };
        custom.set(entry.key, entry);
        added.push(entry);
    }
    return added.sort((a, b) => a.label.localeCompare(b.label));
}

// A .ttf/.otf the user picked; also registered with the page so previews (and canvas text) use it.
async function addFontFile(file) {
    const bytes = await file.arrayBuffer();
    const label = file.name.replace(/\.[^.]+$/, '');
    const family = `userfont-${label}`;
    const face = new FontFace(family, bytes);
    await face.load();
    document.fonts.add(face);
    const entry = { key: `file:${label}`, label, css: `"${family}", sans-serif`, source: { regular: async () => bytes, bold: null } };
    custom.set(entry.key, entry);
    return entry;
}

const DEVICE = '__device';
const FILE = '__file';

const fonts = reactive({ device: [], files: [], deviceState: deviceFontsSupported ? 'idle' : 'unsupported' });

async function loadDevice() {
    if (fonts.deviceState === 'loading' || fonts.deviceState === 'done') return;
    fonts.deviceState = 'loading';
    try {
        fonts.device = (await loadDeviceFonts()).map(({ key, label, css }) => ({ key, label, css }));
        fonts.deviceState = 'done';
    } catch (err) {
        console.error(err);
        fonts.deviceState = 'denied';
    }
}

// Once allowed, the device's fonts are listed without asking again.
if (deviceFontsSupported) {
    navigator.permissions?.query({ name: 'local-fonts' })
        .then(status => { if (status.state === 'granted') loadDevice(); })
        .catch(() => {});
}

const option = (f) => ({ label: f.label, value: f.key, css: f.css });

// builtins: [{ key, label, css }]. Needs a provided 'store' with a naive-ui `message`.
export const FontSelect = defineComponent({
    props: {
        value: { type: String, required: true },
        builtins: { type: Array, required: true },
        builtinsLabel: { type: String, default: 'Fonts' },
    },
    emits: ['update:value'],
    setup(props, { emit }) {
        const store = inject('store');
        const options = computed(() => {
            const groups = [{ type: 'group', label: props.builtinsLabel, key: 'builtin', children: props.builtins.map(option) }];
            if (fonts.files.length) groups.push({ type: 'group', label: 'Added', key: 'files', children: fonts.files.map(option) });
            if (fonts.device.length) groups.push({ type: 'group', label: 'On this device', key: 'device', children: fonts.device.map(option) });
            const more = [];
            if (fonts.deviceState === 'idle' || fonts.deviceState === 'denied') more.push({ label: 'Fonts on this device…', value: DEVICE, action: true });
            if (fonts.deviceState === 'loading') more.push({ label: 'Loading fonts…', value: DEVICE, action: true, disabled: true });
            more.push({ label: 'Add a font file…', value: FILE, action: true });
            groups.push({ type: 'group', label: 'More', key: 'more', children: more });
            return groups;
        });

        const choose = async (value) => {
            if (value === DEVICE) {
                await loadDevice();
                if (fonts.deviceState === 'denied') store.message.warning('Allow font access in the browser to use the fonts on this device');
                return;
            }
            if (value === FILE) {
                const [file] = await pickFiles({ accept: '.ttf,.otf,font/ttf,font/otf' });
                if (!file) return;
                try {
                    const entry = await addFontFile(file);
                    if (!fonts.files.some(f => f.key === entry.key)) fonts.files.push({ key: entry.key, label: entry.label, css: entry.css });
                    emit('update:value', entry.key);
                } catch (err) {
                    console.error(err);
                    store.message.error(`${file.name} isn't a font this browser can read`);
                }
                return;
            }
            emit('update:value', value);
        };

        const renderLabel = (o) => (o.type === 'group' || o.action
            ? (o.action ? h('em', { class: 'font-select__action' }, o.label) : o.label)
            : h('span', { style: { fontFamily: o.css } }, o.label));

        return { options, choose, renderLabel };
    },
    template: `
        <n-select :value="value" @update:value="choose" :options="options" :render-label="renderLabel"
            filterable size="small" :consistent-menu-width="false" class="font-select"/>`,
});
