// Shared handling for the tax pages: language detection, country loading, t(), and number formats.
(function () {
  const LANGS = ['en', 'nl', 'fr'];
  const COUNTRIES = ['be', 'fr'];
  const KEY = 'aukmind.tax.lang';
  const GEO_URL = 'https://get.geojs.io/v1/ip/geo.json';

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

  const store = key => ({
    get() { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(key, v); } catch (e) {} },
  });
  const langStore = store(KEY);

  // One IP lookup at most per page load, for the language guess.
  let geoPromise = null;
  const geo = () => geoPromise || (geoPromise = (async () => {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 1200);
    try { return await fetch(GEO_URL, { signal: ctl.signal }).then(r => r.json()); }
    catch (e) { return null; }
    finally { clearTimeout(timer); }
  })());

  // ?x= wins, then a saved choice, then IP geolocation (first visit only, cached).
  async function pick(param, allowed, st, fromGeo) {
    const q = new URLSearchParams(location.search).get(param);
    if (allowed.includes(q)) { st.set(q); return q; }
    const saved = st.get();
    if (allowed.includes(saved)) return saved;
    const g = await geo();
    // A failed lookup isn't saved, so the next visit tries again.
    if (!g) return fromGeo({});
    const v = fromGeo(g);
    st.set(v);
    return v;
  }
  const FLAGS = { be: '🇧🇪', fr: '🇫🇷' };
  // Inside a tax/<country>/ wrapper (embed.js), the page reports its URL so the address bar stays shareable.
  const wrapper = (() => { try { return window.parent !== window ? window.parent.TaxEmbed || null : null; } catch (e) { return null; } })();
  function syncUrl() {
    if (!wrapper) return;
    const q = new URLSearchParams(location.search);
    q.delete('country');
    wrapper.update({ page: location.pathname.split('/').pop().replace(/\.html$/, '') || 'index', search: q.toString(), title: document.title });
  }
  const shareUrl = () => { try { if (wrapper) return window.parent.location.href; } catch (e) {} return location.href; };
  // The public URLs are tax/<country>/ and tax/<country>/inheritance/; links always go there.
  const framed = window.parent !== window;
  const wrapPath = (c, page) => `${c}/${page === 'index' ? '' : page + '/'}`;
  const pageLink = (c, page, lang) => ({ href: `${wrapPath(c, page)}?lang=${lang}`, target: '_top' });

  const setParam = (k, v) => {
    const q = new URLSearchParams(location.search);
    q.set(k, v);
    try { history.replaceState(null, '', location.pathname + '?' + q + location.hash); } catch (e) {}
    syncUrl();
  };

  const loadScript = src => new Promise((ok, fail) => {
    const el = document.createElement('script');
    el.src = src;
    el.onload = ok;
    el.onerror = () => fail(new Error('Could not load ' + src));
    document.head.appendChild(el);
  });

  // Loads <country>/<page>.strings.js then <country>/<page>.js. Opened directly rather than through
  // tax/<country>/, the page moves to that URL instead (never when framed: file:// hides the wrapper).
  async function loadCountry(page) {
    // Belgium unless the URL says otherwise; tax/<country>/ always passes it.
    const q0 = new URLSearchParams(location.search).get('country');
    const country = COUNTRIES.includes(q0) ? q0 : 'be';
    if (!framed) {
      const q = new URLSearchParams(location.search);
      q.delete('country');
      const file = location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
      location.replace(wrapPath(country, file) + (q.toString() ? '?' + q : '') + location.hash);
      return new Promise(() => {});
    }
    setParam('country', country);
    await loadScript(`${country}/${page}.strings.js`);
    await loadScript(`${country}/${page}.js`);
    return country;
  }

  function create(pageDict) {
    const dict = { ...window.TAX_COMMON, ...pageDict };
    const lang = Vue.ref('en');
    const t = (key, ...args) => {
      const e = dict[key];
      if (!e) return key;
      const v = e[lang.value] ?? e.en;
      return typeof v === 'function' ? v(...args) : v;
    };
    const has = key => key in dict;
    const locale = () => lang.value === 'nl' ? 'nl-BE' : 'fr-BE';
    const nbsp = s => s.replace(/ /g, ' ');
    const eur = (v, d = 0) => nbsp(new Intl.NumberFormat(locale(), { style: 'currency', currency: 'EUR', minimumFractionDigits: d, maximumFractionDigits: d }).format(v || 0));
    const num = (v, d = 0) => lang.value === 'en' ? (v || 0).toFixed(d) : (v || 0).toFixed(d).replace('.', ',');
    const int = v => new Intl.NumberFormat(locale()).format(v);
    const pct = (v, d = 1) => num((v || 0) * 100, d) + '%';
    const eurK = (v, d = 0) => {
      const k = num(v / 1000, d) + 'k';
      return lang.value === 'fr' ? k + ' €' : lang.value === 'nl' ? '€ ' + k : '€' + k;
    };
    const setLang = l => {
      if (!LANGS.includes(l)) return;
      lang.value = l;
      document.documentElement.lang = l;
      langStore.set(l);
      setParam('lang', l);
    };
    const ready = pick('lang', LANGS, langStore, langFromGeo).then(l => { lang.value = l; document.documentElement.lang = l; });
    return { lang, LANGS, t, has, eur, eurK, num, int, pct, setLang, ready };
  }

  // The page title with its {flag} turned into a country menu.
  const FlagTitle = {
    props: ['text', 'country', 'page', 'lang', 't'],
    data: () => ({ open: false, countries: COUNTRIES }),
    computed: { parts() { return this.text.split('{flag}'); } },
    methods: {
      flag: c => FLAGS[c],
      link(c) { return pageLink(c, this.page, this.lang); },
      leave(e) { if (!e.currentTarget.contains(e.relatedTarget)) this.open = false; },
    },
    template: `<h1>{{ parts[0] }}<span class="flag-pick" @focusout="leave" @keydown.esc="open = false"><button type="button" class="flag" :aria-expanded="open" aria-haspopup="true" :aria-label="t('countryAria')" @click="open = !open">{{ flag(country) }}<svg class="chev" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg></button><span class="flag-menu" v-if="open"><a v-for="c in countries" :key="c" :href="link(c).href" :target="link(c).target" :class="{on: c === country}"><span>{{ flag(c) }}</span>{{ t('country.' + c) }}</a></span></span>{{ parts[1] }}</h1>`,
  };

  window.TaxI18n = { create, loadCountry, syncUrl, shareUrl, pageLink, FlagTitle, COUNTRIES };
})();
