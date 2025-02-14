/**
 * Naive UI Theme Configuration for Aukmind
 * This file provides a shared Naive UI theme matching Aukmind's brand colors
 * (e.g., Tailwind blue-600 as the primary color).
 * 
 * Usage in Vue 3 (via CDN):
 * 1. Import Naive UI script: <script src="https://unpkg.com/naive-ui"></script>
 * 2. Import this theme script: <script src="/naive-ui-theme.js"></script>
 * 3. Use it in the Vue component template:
 *    <n-config-provider :theme-overrides="aukmindTheme">
 *      ...
 *    </n-config-provider>
 */

window.aukmindTheme = {
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
    fontFamilyMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  }
};
