// Shared language handling for the tax pages: detection, t(), and number formats.
(function () {
  const LANGS = ['en', 'nl', 'fr'];
  const KEY = 'aukmind.tax.lang';
  const GEO_URL = 'https://get.geojs.io/v1/ip/geo.json';

  const COMMON = {
    share: { en: '🔗 Share link', nl: '🔗 Link delen', fr: '🔗 Partager le lien' },
    copied: { en: 'Copied to clipboard', nl: 'Gekopieerd naar het klembord', fr: 'Copié dans le presse-papiers' },
    shareAria: { en: 'Link to these settings', nl: 'Link naar deze instellingen', fr: 'Lien vers ces réglages' },
    langAria: { en: 'Language', nl: 'Taal', fr: 'Langue' },
    sources: { en: 'Sources', nl: 'Bronnen', fr: 'Sources' },
    'region.vl': { en: 'Flanders', nl: 'Vlaanderen', fr: 'Flandre' },
    'region.wal': { en: 'Wallonia', nl: 'Wallonië', fr: 'Wallonie' },
    'region.bru': { en: 'Brussels', nl: 'Brussel', fr: 'Bruxelles' },
  };

  const browserLang = () => (navigator.languages || [navigator.language || ''])
    .map(l => l.slice(0, 2).toLowerCase()).find(l => LANGS.includes(l));

  function langFromGeo(geo) {
    const cc = (geo.country_code || '').toUpperCase(), region = geo.region || '';
    if (cc === 'BE') {
      if (/flanders|vlaanderen/i.test(region)) return 'nl';
      if (/wallonia|wallonie/i.test(region)) return 'fr';
      // Brussels is bilingual: trust the browser if it says nl, else French.
      return browserLang() === 'nl' ? 'nl' : 'fr';
    }
    if (cc === 'NL' || cc === 'SR') return 'nl';
    if (['FR', 'LU', 'MC'].includes(cc)) return 'fr';
    return browserLang() === 'fr' || browserLang() === 'nl' ? browserLang() : 'en';
  }

  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} },
  };

  // ?lang= wins, then a saved choice, then IP geolocation (first visit only, cached).
  async function detect() {
    const q = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(q)) { store.set(q); return q; }
    const saved = store.get();
    if (LANGS.includes(saved)) return saved;
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 1200);
      const geo = await fetch(GEO_URL, { signal: ctl.signal }).then(r => r.json());
      clearTimeout(timer);
      const l = langFromGeo(geo);
      store.set(l);
      return l;
    } catch (e) {
      return langFromGeo({});
    }
  }

  function create(pageDict) {
    const dict = { ...COMMON, ...pageDict };
    const lang = Vue.ref('en');
    const t = (key, ...args) => {
      const e = dict[key];
      if (!e) return key;
      const v = e[lang.value] ?? e.en;
      return typeof v === 'function' ? v(...args) : v;
    };
    const locale = () => lang.value === 'nl' ? 'nl-BE' : 'fr-BE';
    const nbsp = s => s.replace(/ /g, ' ');
    const eur = (v, d = 0) => nbsp(new Intl.NumberFormat(locale(), { style: 'currency', currency: 'EUR', minimumFractionDigits: d, maximumFractionDigits: d }).format(v || 0));
    const num = (v, d = 0) => lang.value === 'en' ? (v || 0).toFixed(d) : (v || 0).toFixed(d).replace('.', ',');
    const pct = (v, d = 1) => num((v || 0) * 100, d) + '%';
    const eurK = (v, d = 0) => {
      const k = num(v / 1000, d) + 'k';
      return lang.value === 'fr' ? k + '\u00a0€' : lang.value === 'nl' ? '€\u00a0' + k : '€' + k;
    };
    const setLang = l => {
      if (!LANGS.includes(l)) return;
      lang.value = l;
      document.documentElement.lang = l;
      store.set(l);
      const q = new URLSearchParams(location.search);
      q.set('lang', l);
      try { history.replaceState(null, '', location.pathname + '?' + q + location.hash); } catch (e) {}
    };
    const ready = detect().then(l => { lang.value = l; document.documentElement.lang = l; });
    return { lang, LANGS, t, eur, eurK, num, pct, setLang, ready };
  }

  window.TaxI18n = { create };
})();
