import { useMedia } from './dom.js';

const { computed } = Vue;

// theme.css's dark-mode blues: the light #2563eb is too dark to read on dark surfaces.
const DARK_PRIMARY = { primaryColor: '#3b82f6', primaryColorHover: '#60a5fa', primaryColorPressed: '#2563eb', primaryColorSuppl: '#60a5fa' };

// naive-ui's dark theme while the device is in dark mode, following changes live (pairs with theme.css).
export function useNaiveTheme() {
    const dark = useMedia('(prefers-color-scheme: dark)');
    return computed(() => (dark.value ? window.naive.darkTheme : null));
}

export function useNaiveOverrides(theme, base = window.aukmindTheme || null) {
    return computed(() => (theme.value ? { ...base, common: { ...base?.common, ...DARK_PRIMARY } } : base));
}
