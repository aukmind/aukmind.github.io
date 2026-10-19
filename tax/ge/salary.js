// Georgian salary rules for income year 2026. Loaded by ../index.html?country=ge.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['std', 'lone', 'dis'];
  const SIZES = ['in', 'out'];
  const MIN_ROLES = ['pm', 'min', 'mp', 'pres'];

  const P = {
    pit: .20,
    fundEe: .02, fundEr: .02,
    // State top-up per calendar year: 2% of the first 24,000, 1% up to 60,000.
    stateBands: [[24000, .02], [60000, .01]],
    exempt: { std: 0, lone: 3000, dis: 6000 },
    brackets: [[INF, .20]],
  };

  const REF_WAGES = [
    { key: 'med', m: 1531, year: 2025, color: '--w-med' },
    { key: 'avg', m: 2165, year: 2025, color: '--w-avg' },
  ];

  const TOP = 10000 * 12, TOP_MAX = 13000 * 12;
  const GOV = { pm: TOP, pres: TOP, min: 8500 * 12, mp: 7250 * 12 };
  const DOC_PAY = 'https://www.transparency.ge/sites/default/files/labor-remuneration.pdf';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', lo: TOP, hi: TOP_MAX, url: 'https://en.wikipedia.org/wiki/Prime_Minister_of_Georgia' },
    { kind: 'stat', key: 'pres', icon: '🇬🇪', lo: TOP, hi: TOP_MAX, url: 'https://en.wikipedia.org/wiki/President_of_Georgia' },
    { kind: 'stat', key: 'speaker', icon: '🏛️', lo: TOP, hi: TOP_MAX, url: DOC_PAY },
    { kind: 'stat', key: 'min', icon: '💼', lo: 8500 * 12, hi: 11050 * 12, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🗳️', lo: 7250 * 12, hi: 9425 * 12, url: DOC_PAY },
  ];

  const SRC = {
    pit: 'https://matsne.gov.ge/en/document/view/1043717',
    pwc: 'https://taxsummaries.pwc.com/georgia/individual/taxes-on-personal-income',
    fund: 'https://matsne.gov.ge/en/document/view/4280127',
    other: 'https://taxsummaries.pwc.com/georgia/individual/other-taxes',
    wages: 'https://www.geostat.ge/en/modules/categories/39/wages',
    pay: DOC_PAY,
  };

  function stateTopUp(G) {
    let lo = 0, v = 0;
    for (const [hi, r] of P.stateBands) { v += r * Math.max(0, Math.min(G, hi) - lo); lo = hi; }
    return v;
  }

  function compute(G, s) {
    const inFund = s.size !== 'out';
    const fee = inFund ? P.fundEe * G : 0, fer = inFund ? P.fundEr * G : 0;
    const state = inFund ? stateTopUp(G) : 0;
    const base = G - fee;
    const exempt = Math.min(base, P.exempt[s.region] || 0);
    const ir = P.pit * (base - exempt);
    const net = G - fee - ir;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    const u = { m: G / s.factor, fee, fer, state, base, exempt, taxable: base - exempt, inFund };
    return { G, cost: G + fer, net, u, vatShare,
      parts: { ir, fund: fee + fer, vat } };
  }

  // The funded pension goes into your own account, so it's shown but never counted as tax.
  const COMP_KEYS = ['ir', 'fund', 'vat'];
  const COMP_COLORS = { ir: 'var(--k-ir)', fund: 'var(--k-vm)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const fundTable = u => `<table>${row(t('bd.fundEe'), u.fee)}${row(t('bd.fundEr'), u.fer)}${row(t('tip.fundState'), u.state)}${tot(t('tip.fundPot'), u.fee + u.fer + u.state)}</table>`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg', eur(P.exempt.lone), eur(P.exempt.dis))}</p>${sources('pit')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('fund')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('bd.fundEr'), r.u.fer)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      fund: r => `<h4>${t('comp.fund')}</h4><p>${t('tip.fund', eur(24000), eur(60000))}</p>${r && r.u.inFund ? fundTable(r.u) : ''}${sources('fund')}`,
      fundEe: r => `<h4>${t('bd.fundEe')}</h4><p>${t('tip.fundEe')}</p>${r && r.u.inFund ? fundTable(r.u) : ''}${sources('fund')}`,
      fundEr: r => `<h4>${t('bd.fundEr')}</h4><p>${t('tip.fundEr')}</p>${sources('fund')}`,
      taxable: r => `<h4>${t('bd.taxableGe')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.taxable)}</b>` : '')}</p>${sources('pit')}`,
      ex: r => `<h4>${t('bd.ex')}</h4><p>${t('tip.reg', eur(P.exempt.lone), eur(P.exempt.dis))}</p>${sources('pit')}`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${tot(`20% × ${eur(r.u.taxable)}`, r.parts.ir)}</table>` : ''}${sources('pit', 'pwc')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('other')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const u = r.u, p = r.parts;
    const L = [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
    ];
    if (u.inFund) L.push({ op: '+', k: 'fundEr', label: t('bd.fundEr'), v: u.fer, cls: 'sub' });
    L.push({ op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' });
    L.push({ op: '', k: 'gross', label: t('bd.gross'), v: r.G });
    if (u.inFund) L.push({ op: '−', k: 'fundEe', label: t('bd.fundEe'), v: u.fee });
    if (u.exempt > 0) L.push({ op: '−', k: 'ex', label: t('bd.ex'), v: u.exempt, cls: 'sub' });
    if (u.inFund || u.exempt > 0) L.push({ op: '', k: 'taxable', label: t('bd.taxableGe'), v: u.taxable, cls: 'sub' });
    L.push({ op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  function trap(x) {
    return { band: [0, 0], text: [eur(P.exempt.lone), eur(P.exempt.dis)] };
  }

  // The state's top-up stops at 60,000 a year; it changes what goes into the pension pot, not the tax.
  function top(x) {
    if (x.s.size === 'out') return null;
    const at = 60000 / x.s.factor;
    return { at, text: [x.fmtM(at, 1) + x.perUnit(), x.fmtM(24000 / x.s.factor, 1) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'GEL', nextStep: 300,
    regions: REGIONS, sizes: SIZES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 18,
    features: {},
    communes: false,
    local: null,
    state: { salary: 2000, factor: 12, minRole: 'pm', commune: '', region: 'std', local: 0, vatRate: 18, size: 'in' },
    urlFields: { status: ['region', 'str', REGIONS], pension: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'pay',
    refKeys: ['ir', 'fund', 'ex', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
