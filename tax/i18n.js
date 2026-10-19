// Shared handling for the tax pages: language detection, country loading, t(), and number formats.
(function () {
  const LANGS = ['en', 'nl', 'fr'];
  // Signs several currencies share ($, ¥) get the country in front, everywhere amounts are shown.
  const SIGNS = { AUD: 'AU$', CAD: 'CA$', HKD: 'HK$', MXN: 'MX$', NZD: 'NZ$', SGD: 'SG$', CNY: 'CN¥' };
  const COUNTRIES = ['be', 'fr', 'lu', 'pt', 'es', 'ie', 'gb', 'ch', 'dk', 'nl', 'it', 'de', 'fi', 'se', 'pl', 'cz', 'hu', 'at', 'gr', 'sk', 'si', 'hr', 'ro', 'bg', 'ee', 'lv', 'lt', 'cy', 'mt', 'ad', 'ua', 'li', 'us', 'ae', 'ca', 'jp', 'au', 'kr', 'br', 'mx', 'in', 'cn', 'no', 'is', 'sg', 'hk', 'nz', 'mc', 'ge', 'th', 'qa', 'sa'];
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
  const FLAGS = { be: '🇧🇪', fr: '🇫🇷', lu: '🇱🇺', pt: '🇵🇹', es: '🇪🇸', ie: '🇮🇪', gb: '🇬🇧', ch: '🇨🇭', dk: '🇩🇰', nl: '🇳🇱', it: '🇮🇹', de: '🇩🇪', fi: '🇫🇮', se: '🇸🇪', pl: '🇵🇱', cz: '🇨🇿', hu: '🇭🇺', at: '🇦🇹', gr: '🇬🇷', sk: '🇸🇰', si: '🇸🇮', hr: '🇭🇷', ro: '🇷🇴', bg: '🇧🇬', ee: '🇪🇪', lv: '🇱🇻', lt: '🇱🇹', cy: '🇨🇾', mt: '🇲🇹', ad: '🇦🇩', ua: '🇺🇦', li: '🇱🇮', us: '🇺🇸', ae: '🇦🇪', ca: '🇨🇦', jp: '🇯🇵', au: '🇦🇺', kr: '🇰🇷', br: '🇧🇷', mx: '🇲🇽', 'in': '🇮🇳', cn: '🇨🇳', no: '🇳🇴', is: '🇮🇸', sg: '🇸🇬', hk: '🇭🇰', nz: '🇳🇿', mc: '🇲🇨', ge: '🇬🇪', th: '🇹🇭', qa: '🇶🇦', sa: '🇸🇦' };
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
  // What follows the visitor to another country's same page. Money is in the source country's currency,
  // so `from` tells the next page what to convert from.
  const CARRY = {
    index: { keep: ['salary', 'per', 'household', 'partner', 'kids', 'vat', 'regime'], money: ['salary', 'partner'] },
    inheritance: { keep: ['share', 'rel', 'home', 'gifts'], money: ['share', 'home', 'gifts'] },
  };
  const thisPage = () => location.pathname.split('/').pop().replace(/\.html$/, '') || 'index';
  let localCur = 'EUR';
  // `shown` is the display currency picked by hand (null for the country's own); it follows the visitor.
  const pageLink = (c, page, lang, shown) => {
    const q = new URLSearchParams({ lang });
    if (shown) q.set('currency', shown);
    if (page === thisPage()) {
      // Only what the visitor set travels, and that is exactly what is in the URL.
      const cur = new URLSearchParams(location.search);
      for (const k of CARRY[page].keep) if (cur.has(k)) q.set(k, cur.get(k));
      if (CARRY[page].money.some(k => q.has(k))) q.set('from', localCur);
    }
    return { href: `${wrapPath(c, page)}?${q}`, target: '_top' };
  };
  // Runs once the country's currency is known, before the page reads its state from the URL.
  function adoptUrl(currency) {
    const q = new URLSearchParams(location.search);
    const from = q.get('from');
    if (from && from !== currency) {
      for (const k of (CARRY[thisPage()] || { money: [] }).money) {
        const v = Number(q.get(k));
        const out = q.has(k) && Number.isFinite(v) ? fx(v, from, currency) : null;
        if (out != null) q.set(k, Math.round(out));
      }
    }
    q.delete('from');
    // The country's own currency is the default: it never stays in the URL.
    if (q.get('currency') === currency) q.delete('currency');
    try { history.replaceState(null, '', location.pathname + '?' + q + location.hash); } catch (e) {}
  }

  const setParam = (k, v) => {
    const q = new URLSearchParams(location.search);
    if (v == null) q.delete(k); else q.set(k, v);
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
    // English pages use English grouping for every non-euro currency (en-PL would write 1.234 zł next to 13.7%).
    const locale = () => lang.value === 'nl' ? 'nl-BE' : lang.value === 'en' && cur() !== 'EUR' ? 'en-GB' : 'fr-BE';
    const nbsp = s => s.replace(/ /g, ' ');
    // The model always works in the country's currency; amounts are converted only when shown.
    let currency = 'EUR';
    const shown = Vue.ref(null);
    const cur = () => shown.value || currency;
    const currencies = () => Object.keys((window.TAX_FX || {}).perEur || { EUR: 1 });
    const setShown = c => {
      if (!currencies().includes(c)) return;
      shown.value = c === currency ? null : c;
      setParam('currency', shown.value);
    };
    // Set by the page once the country module says which currency it uses; ?currency= then picks the display.
    const setCurrency = c => {
      currency = localCur = c || 'EUR';
      adoptUrl(currency);
      const q = new URLSearchParams(location.search).get('currency');
      shown.value = q && q !== currency && currencies().includes(q) ? q : null;
    };
    const toShown = v => shown.value ? fx(v, currency, shown.value) : v;
    const fromShown = v => shown.value ? fx(v, shown.value, currency) : v;
    const eur = (v, d = 0) => nbsp(new Intl.NumberFormat(locale(), { style: 'currency', currency: cur(), currencyDisplay: 'narrowSymbol', minimumFractionDigits: d, maximumFractionDigits: d }).formatToParts(toShown(v || 0)).map(p => p.type === 'currency' ? SIGNS[cur()] || p.value : p.value).join(''));
    const sym = () => SIGNS[cur()] || new Intl.NumberFormat(locale(), { style: 'currency', currency: cur(), currencyDisplay: 'narrowSymbol' }).formatToParts(0).find(p => p.type === 'currency').value;
    const num = (v, d = 0) => lang.value === 'en' ? (v || 0).toFixed(d) : (v || 0).toFixed(d).replace('.', ',');
    const int = v => new Intl.NumberFormat(locale()).format(v);
    const pct = (v, d = 1) => num((v || 0) * 100, d) + '%';
    const eurK = (v, d = 0) => {
      v = toShown(v);
      // Converted ticks land between round numbers: keep one decimal so they stay distinct.
      const k = num(v / 1000, shown.value && !d ? 1 : d) + 'k';
      if (lang.value === 'en' && cur() === 'EUR') return '€' + k;
      const parts = new Intl.NumberFormat(locale(), { style: 'currency', currency: cur(), currencyDisplay: 'narrowSymbol', maximumFractionDigits: 0 }).formatToParts(1);
      const i = parts.findIndex(p => p.type === 'currency'), c = SIGNS[cur()] || parts[i].value;
      return i === 0 ? c + (parts[1].type === 'literal' ? ' ' : '') + k : k + ' ' + c;
    };
    const setLang = l => {
      if (!LANGS.includes(l)) return;
      lang.value = l;
      document.documentElement.lang = l;
      langStore.set(l);
      setParam('lang', l);
    };
    const ready = pick('lang', LANGS, langStore, langFromGeo).then(l => { lang.value = l; document.documentElement.lang = l; });
    const money = { cur, shown, currencies, setShown, toShown, fromShown, local: () => currency };
    return { lang, LANGS, t, has, eur, eurK, sym, setCurrency, money, num, int, pct, setLang, ready };
  }

  // The local sign (zł, Kč, $), not the code; currencies without one (CHF, AED) give their code back.
  const curSign = c => SIGNS[c] || new Intl.NumberFormat('en', { style: 'currency', currency: c, currencyDisplay: 'narrowSymbol' }).formatToParts(0).find(p => p.type === 'currency').value;
  const fold = x => x.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  // The page title with {flag} turned into a country menu and {currency} into a currency menu.
  const FlagTitle = {
    props: ['text', 'country', 'page', 'lang', 't', 'money'],
    data: () => ({ open: '', q: '', cq: '' }),
    computed: {
      parts() { return this.text.split(/(\{flag\}|\{currency\})/); },
      // Sorted by name in the page language; the filter matches the name or the code, accents ignored.
      countries() {
        const q = fold(this.q.trim());
        return COUNTRIES.map(c => ({ c, name: this.t('country.' + c) }))
          .filter(x => !q || fold(x.name).includes(q) || x.c === q)
          .sort((a, b) => a.name.localeCompare(b.name, this.lang));
      },
      currencyList() {
        if (!this.money) return [];
        const q = fold(this.cq.trim());
        return this.money.currencies().map(c => ({ c, sign: curSign(c), name: this.curName(c) }))
          .filter(x => !q || fold(x.c).includes(q) || fold(x.name).includes(q) || fold(x.sign) === q);
      },
    },
    methods: {
      flag: c => FLAGS[c],
      link(c) { return pageLink(c, this.page, this.lang, this.money && this.money.shown.value); },
      leave(e) { if (!e.currentTarget.contains(e.relatedTarget)) this.open = ''; },
      toggle(m) {
        this.open = this.open === m ? '' : m;
        if (!this.open) return;
        this.q = this.cq = '';
        const ref = this.open === 'flag' ? 'filter' : 'curFilter';
        this.$nextTick(() => { const r = this.$refs[ref]; (Array.isArray(r) ? r[0] : r)?.focus(); });
      },
      // Enter goes to the first match, like clicking it (links open in the top window).
      goFirst() {
        const first = this.countries[0];
        if (first) window.top.location.href = new URL(this.link(first.c).href, location.href).href;
      },
      curName(c) { try { return new Intl.DisplayNames([this.lang], { type: 'currency' }).of(c); } catch (e) { return c; } },
      pickCur(c) { this.money.setShown(c); this.open = ''; },
    },
    template: `<h1><template v-for="(p, i) in parts" :key="i"><span v-if="p === '{flag}'" class="flag-pick" @focusout="leave" @keydown.esc="open = ''"><button type="button" class="flag" :aria-expanded="open === 'flag'" aria-haspopup="true" :aria-label="t('countryAria')" @click="toggle('flag')">{{ flag(country) }}<svg class="chev" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg></button><span class="flag-menu" v-if="open === 'flag'"><input ref="filter" v-model="q" class="flag-filter" type="search" autocomplete="off" spellcheck="false" :placeholder="t('countryFilter')" :aria-label="t('countryFilter')" @keydown.enter.prevent="goFirst"><a v-for="x in countries" :key="x.c" :href="link(x.c).href" :target="link(x.c).target" :class="{on: x.c === country}"><span>{{ flag(x.c) }}</span>{{ x.name }}</a><span class="flag-none" v-if="!countries.length">{{ t('countryNone') }}</span></span></span><span v-else-if="p === '{currency}' && money" class="flag-pick" @focusout="leave" @keydown.esc="open = ''"><button type="button" class="flag cur-pick" :aria-expanded="open === 'cur'" aria-haspopup="true" :aria-label="t('currencyAria')" @click="toggle('cur')">{{ money.cur() }}<svg class="chev" viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg></button><span class="flag-menu" v-if="open === 'cur'"><input ref="curFilter" v-model="cq" class="flag-filter" type="search" autocomplete="off" spellcheck="false" :placeholder="t('currencyFilter')" :aria-label="t('currencyFilter')" @keydown.enter.prevent="currencyList[0] && pickCur(currencyList[0].c)"><a v-for="x in currencyList" :key="x.c" href="#" role="button" :class="{on: x.c === money.cur()}" @click.prevent="pickCur(x.c)"><span class="cur-code">{{ x.c }}</span><span class="cur-sign">{{ x.sign !== x.c ? x.sign : '' }}</span>{{ x.name }}</a><span class="flag-none" v-if="!currencyList.length">{{ t('currencyNone') }}</span></span></span><template v-else-if="p !== '{currency}'">{{ p }}</template></template></h1>`,
  };

  // Any pair goes through the euro: currencies.js only stores units per euro.
  const fx = (v, from, to = 'EUR') => {
    const r = (window.TAX_FX || {}).perEur || { EUR: 1 };
    if (!(from in r) || !(to in r)) return null;
    return v / r[from] * r[to];
  };
  window.TaxI18n = { create, fx, FLAGS, loadCountry, syncUrl, shareUrl, pageLink, FlagTitle, COUNTRIES };
})();
