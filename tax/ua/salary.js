// Ukrainian salary rules for income year 2026, under martial law. Loaded by ../index.html?country=ua.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['none', 'lone'];
  const MIN_ROLES = ['min', 'pm', 'mp', 'pres'];

  const MIN_WAGE = 8647;
  const P = {
    pdfo: .18, vz: .05, esv: .22,
    esvMin: MIN_WAGE, esvMax: 20 * MIN_WAGE,
    // Податкова соціальна пільга: half the 3,328 subsistence minimum; the income limit scales with the children.
    psp: 1664, pspLimit: 4660,
    brackets: [[INF, .18]],
  };

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'avg', m: 32243, year: 2026, color: '--w-avg' },
  ];

  const PM = 141700 * 12, MIN = 1750000, MP = 33280 * 12, PRES = 336000;
  const GOV = { pm: PM, min: MIN, mp: MP, pres: PRES };
  const DOC_CAB = 'https://dengi.ua/ua/career/9760822-129-tis-grn-na-ruki-khto-v-kerivnitstvi-kabminu-zarobiv-bilshe-za-premjera-v-travni';
  const DOC_MIN = 'https://www.slovoidilo.ua/2026/04/01/infografika/polityka/deklaracziyi-ministriv-skilky-zarobyv-chynnyj-sklad-kabminu-2025-roczi';
  const DOC_MP = 'https://netfreedom.org.ua/zarplata-deputata-realni-czyfry-ta-detali-2026-roku/';
  const DOC_PRES = 'https://www.president.gov.ua/news/prezident-ukrayini-oprilyudniv-deklaraciyu-pro-dohodi-j-vitr-103625';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', lo: PM, hi: PM, url: DOC_CAB },
    { kind: 'stat', key: 'dpm', icon: '🧭', lo: 167400 * 12, hi: 167400 * 12, url: DOC_CAB },
    { kind: 'stat', key: 'min', icon: '💼', lo: 1734000, hi: 1793000, url: DOC_MIN },
    { kind: 'stat', key: 'mp', icon: '🏛️', lo: MP, hi: 731200, url: DOC_MP },
    { kind: 'stat', key: 'pres', icon: '🇺🇦', lo: PRES, hi: PRES, url: DOC_PRES },
    { kind: 'gov', name: 'Андрій Пишний', role: 'nbu', lo: 7020000, hi: 7020000, url: 'https://news.telegraf.com.ua/ukr/dengi/2025-04-15/5905654-desyatki-milyoniv-zarplati-i-shaleni-pensii-khto-v-pravlinni-nbu-zarobiv-naybilshe-reyting' },
    { kind: 'corp', name: 'Сергій Корецький', role: 'naftogaz', lo: Math.round(14400000 / 7.5 * 12), hi: Math.round(14400000 / 7.5 * 12), url: 'https://tsn.ua/ukrayina/novyy-premyer-zadeklaruvav-milyonni-vyplaty-vid-naftohazu-z-choho-sklalasia-suma-3135353.html' },
  ];

  const SRC = {
    pdfo: 'https://tax.gov.ua/data/material/000/840/976506/Podatkov_Zm_ni_2026_klyuchov_pokazniki_1_.pdf',
    vz: 'https://sud.ua/uk/news/ukraine/362568-voennyy-sbor-na-nasledstvo-i-darovanie-komu-pridetsya-platit-5',
    esv: 'https://buhplatforma.com.ua/news/111740-maksymalna-baza-narakhuvannia-yesv-u-2026-rotsi',
    psp: 'https://news.dtkt.ua/taxation/pdfo/109194-podatkova-socialna-pilga-na-ditei-u-2026-roci-rozraxunok-granicnogo-doxodu-ta-dokumentalne-pidtverdzennia',
    minWage: 'https://biz.ligazakon.net/aktualno/15504_mnmalna-zarplata-ta-prozhitkoviy-mnmum-2026-yak-zmnyatsya-podatki-ta-shtrafi-dlya-pdprimtsv',
    avgWage: 'https://kurs.com.ua/novost/1481867-zarplati-v-ukrayini-znizhujutsja-drugii-misjac-skilki-platjat-zaraz',
    vat: 'https://zakon.rada.gov.ua/laws/show/2755-17#n4528',
    cabPay: DOC_CAB,
    minPay: DOC_MIN,
    mpPay: DOC_MP,
    presPay: DOC_PRES,
  };

  // Monthly relief and its limit, by number of children and single-parent status.
  function pspRule(kids, lone) {
    if (lone && kids > 0) return { per: 1.5 * P.psp, amount: 1.5 * P.psp * kids, limit: P.pspLimit * kids };
    if (kids >= 2) return { per: P.psp, amount: P.psp * kids, limit: P.pspLimit * kids };
    return { per: P.psp, amount: P.psp, limit: P.pspLimit };
  }

  function compute(G, s) {
    const m = G / s.factor;
    const rule = pspRule(s.children, s.region === 'lone');
    const psp = m > 0 && m <= rule.limit ? Math.min(rule.amount, m) : 0;
    const esvBase = m > 0 ? Math.min(Math.max(m, P.esvMin), P.esvMax) : 0;
    const er = P.esv * esvBase * s.factor;
    const ir = P.pdfo * G, relief = P.pdfo * psp * s.factor, vz = P.vz * G;
    const net = G - ir + relief - vz;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    const u = { m, rule, psp, esvBase, taxable: G - psp * s.factor };
    return { G, cost: G + er, net, u, vatShare,
      parts: { er, vz, ir, psp: -relief, vat } };
  }

  const COMP_KEYS = ['er', 'vz', 'ir', 'psp', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', vz: 'var(--k-csg)', ir: 'var(--k-ir)', psp: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'vz', 'ir', 'psp', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'vz', 'ir', 'psp'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['vz', 'ir', 'psp'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('cabPay', 'minPay', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('psp')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg', eur(1.5 * P.psp))}</p>${sources('psp')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.esvMin), eur(P.esvMax))}</p>${r ? `<table>${row(t('tip.esvBase'), r.u.esvBase)}${tot(`22% × ${eur(r.u.esvBase)} × ${s.factor}`, r.parts.er)}</table>` : ''}${sources('esv', 'minWage')}`,
      vz: r => `<h4>${t('comp.vz')}</h4><p>${t('tip.vz')}</p>${r ? `<table>${tot(`5% × ${eur(r.G)}`, r.parts.vz)}</table>` : ''}${sources('vz')}`,
      taxable: r => `<h4>${t('bd.taxableUa')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.taxable)}</b>` : '')}</p>`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${tot(`18% × ${eur(r.G)}`, r.parts.ir)}</table>` : ''}${sources('pdfo')}`,
      psp: r => {
        const u = r && r.u;
        return `<h4>${t('comp.psp')}</h4><p>${t('tip.psp', eur(P.psp), eur(P.pspLimit))}</p>${u ? `<table>
          ${row(t('tip.pspAmount'), u.rule.amount)}
          ${row(t('tip.pspLimit'), u.rule.limit)}
          ${row(t('tip.pspYourPay'), u.m)}
          ${tot(t('tip.pspValue'), -r.parts.psp)}</table>` : ''}<p class="m">${t('tip.pspM')}</p>${sources('psp')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const p = r.parts;
    const L = [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '−', k: 'vz', label: t('comp.vz'), v: p.vz, tax: p.vz },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
    ];
    if (Math.abs(p.psp) > .5) {
      L.push({ op: '', k: 'taxable', label: t('bd.taxableUa'), v: r.u.taxable, cls: 'sub' });
      L.push({ op: '+', k: 'psp', label: t('comp.psp'), v: -p.psp, tax: p.psp });
    }
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // The relief stops entirely once monthly pay passes its limit: a real cliff.
  function trap(x) {
    const s = x.s, minM = MIN_WAGE * 12 / s.factor;
    const rule = pspRule(s.children, s.region === 'lone');
    const relief = eur(P.pdfo * rule.amount);
    if (rule.limit <= minM) return { band: [minM, minM], text: [x.fmtM(minM, 1), null, null] };
    return { band: [minM, rule.limit], text: [x.fmtM(minM, 1), x.fmtM(rule.limit, 1) + x.perUnit(), relief] };
  }

  // Above 20 minimum wages the employer's 22% stops.
  function top(x) {
    return { at: P.esvMax, text: [x.fmtM(P.esvMax, 1) + x.perUnit()] };
  }

  return {
    GAPS: ['wartime', 'lonePsp', 'pspMonth', 'esvCap', 'avgWage', 'pmPay', 'minPay', 'mpPay', 'declared', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'UAH', nextStep: 5000,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 20,
    features: {},
    communes: false,
    local: null,
    state: { salary: 30000, factor: 12, minRole: 'pm', commune: '', region: 'none', local: 0, vatRate: 20, size: 'all' },
    urlFields: { parent: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    segLabels: { psp: 'pspLost' }, recvLabels: { psp: 'pspReceived' },
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'cabPay',
    refKeys: ['er', 'vz', 'ir', 'psp', 'vat', 'minister', 'war', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
