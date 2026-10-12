import { useMedia } from './dom.js';

const { computed } = Vue;

export const aukmindTheme = {
    common: {
        primaryColor: '#2563eb',
        primaryColorHover: '#3b82f6',
        primaryColorPressed: '#1d4ed8',
        primaryColorSuppl: '#60a5fa',
        infoColor: '#0ea5e9',
        successColor: '#22c55e',
        warningColor: '#f59e0b',
        errorColor: '#ef4444',
        fontFamily: '"Inter", sans-serif',
        fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
};

// theme.css's dark-mode blues: the light #2563eb is too dark to read on dark surfaces.
const DARK_PRIMARY = { primaryColor: '#3b82f6', primaryColorHover: '#60a5fa', primaryColorPressed: '#2563eb', primaryColorSuppl: '#60a5fa' };

// naive-ui's dark theme while the device is in dark mode, following changes live (pairs with theme.css).
export function useNaiveTheme() {
    const dark = useMedia('(prefers-color-scheme: dark)');
    return computed(() => (dark.value ? window.naive.darkTheme : null));
}

export function useNaiveOverrides(theme, base = aukmindTheme) {
    return computed(() => (theme.value ? { ...base, common: { ...base.common, ...DARK_PRIMARY } } : base));
}
