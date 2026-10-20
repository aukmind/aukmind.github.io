// South Korean salary rules for income year 2026 (Income Tax Act as in force 1 January 2026). Loaded by ../index.html?country=kr.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const AGES = ['old', 'young'];
  const SIZES = ['s', 'p', 'm', 'l'];
  const MIN_ROLES = ['min', 'pm', 'dpm', 'pres', 'mp'];

  const P = {
    pen: .0475, penCaps: [6370000, 6590000],
    hlt: .03595, ltc: .1314, hltCap: 4591740,
    ei: .009, eiEr: { s: .0025, p: .0045, m: .0065, l: .0085 }, acc: .0147,
    earned: [[5e6, .70], [15e6, .40], [45e6, .15], [100e6, .05], [INF, .02]], earnedMax: 20e6,
    brackets: [[14e6, .06], [50e6, .15], [88e6, .24], [150e6, .35], [300e6, .38], [500e6, .40], [1e9, .42], [INF, .45]],
    personal: 1.5e6, spouseMax: 5e6, std: 130000,
    child: [0, 250000, 550000], childExtra: 400000,
    local: .10,
  };
  const MIN_WAGE = 10320 * 209;

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 2670000, year: 2023, color: '--w-med' },
    { key: 'avg', m: 3630000, year: 2023, color: '--w-avg' },
  ];

  // Fixed yearly pay of political officials, 공무원보수규정 별표 32 as amended on 7 July 2026.
  const GOV = { pres: 271772000, pm: 210690000, dpm: 159401000, min: 154932000, vmin: 150467000, mp: 157000000 };
  const DOC_PAY = 'https://www.law.go.kr/법령/공무원보수규정';
  const DOC_MP = 'https://www.law.go.kr/법령/국회의원의보좌직원과수당등에관한법률';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '🇰🇷', lo: GOV.pres, hi: GOV.pres, url: DOC_PAY },
    { kind: 'stat', key: 'pm', icon: '⭐', lo: GOV.pm, hi: GOV.pm, url: DOC_PAY },
    { kind: 'stat', key: 'dpm', icon: '🧭', lo: GOV.dpm, hi: GOV.dpm, url: DOC_PAY },
    { kind: 'stat', key: 'min', icon: '💼', lo: GOV.min, hi: GOV.min, url: DOC_PAY },
    { kind: 'stat', key: 'vmin', icon: '📎', lo: GOV.vmin, hi: GOV.vmin, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🏛️', lo: GOV.mp, hi: GOV.mp, url: DOC_MP },
  ];

  const SRC = {
    itax: 'https://www.law.go.kr/법령/소득세법',
    pwcRates: 'https://taxsummaries.pwc.com/republic-of-korea/individual/taxes-on-personal-income',
    pwcDed: 'https://taxsummaries.pwc.com/republic-of-korea/individual/deductions',
    pwcCredits: 'https://taxsummaries.pwc.com/republic-of-korea/individual/other-tax-credits-and-incentives',
    social: 'https://taxsummaries.pwc.com/republic-of-korea/individual/other-taxes',
    nps: 'https://www.nps.or.kr/',
    nhis: 'https://www.nhis.or.kr/',
    ei: 'https://www.ei.go.kr/',
    comwel: 'https://www.comwel.or.kr/',
    minWage: 'https://www.minimumwage.go.kr/',
    wages: 'https://kostat.go.kr/',
    govPay: DOC_PAY,
    mpPay: DOC_MP,
  };

  function onScale(T, br) {
    let tax = 0, lo = 0;
    for (const [hi, r] of br) {
      if (T > lo) tax += (Math.min(T, hi) - lo) * r;
      lo = hi;
    }
    return tax;
  }
  const earnedDed = G => Math.min(P.earnedMax, onScale(G, P.earned));
  function earnedCredit(scale, G) {
    const raw = scale <= 1.3e6 ? .55 * scale : 715000 + .30 * (scale - 1.3e6);
    let cap;
    if (G <= 33e6) cap = 740000;
    else if (G <= 70e6) cap = Math.max(660000, 740000 - (G - 33e6) * .008);
    else if (G <= 120e6) cap = Math.max(500000, 660000 - (G - 70e6) / 2);
    else cap = Math.max(200000, 500000 - (G - 120e6) / 2);
    return Math.min(raw, cap);
  }
  const childCredit = n => n <= 2 ? P.child[n] : P.child[2] + (n - 2) * P.childExtra;

  function social(G, size) {
    const m = G / 12;
    const pen = P.pen * P.penCaps.reduce((a, cap) => a + 6 * Math.min(m, cap), 0);
    const health = Math.min(m * P.hlt, P.hltCap) * 12;
    const hlt = health * (1 + P.ltc);
    const ei = P.ei * G;
    const eiEr = (P.ei + P.eiEr[size]) * G, acc = P.acc * G;
    return { m, pen, health, hlt, ei, eiEr, acc, er: pen + hlt + eiEr + acc };
  }

  // Year-end settlement: the premiums deduction or the flat 130,000 credit, whichever leaves less tax.
  function incomeTax(G, so, kids, old, spouse) {
    const ded = earnedDed(G), wage = G - ded;
    const basic = P.personal * (1 + (spouse ? 1 : 0) + kids);
    const cc = old ? childCredit(kids) : 0;
    const run = itemised => {
      const prem = itemised ? so.hlt + so.ei : 0;
      const base = Math.max(0, wage - basic - so.pen - prem);
      const scale = onScale(base, P.brackets);
      const ec = earnedCredit(scale, G);
      const std = itemised ? 0 : P.std;
      const credits = Math.min(scale, ec + cc + std);
      return { prem, base, scale, ec, cc: Math.min(cc, Math.max(0, scale - ec)), std, credits, tax: scale - credits };
    };
    const a = run(true), b = run(false);
    return { ded, wage, basic, ...(b.tax < a.tax ? b : a), itemised: !(b.tax < a.tax) };
  }

  function compute(G, s, env) {
    const so = social(G, s.size);
    const spouse = s.household === 'joint' && env && env.partnerG <= P.spouseMax;
    const it = incomeTax(G, so, s.children, s.region === 'old', spouse);
    const ir = it.tax, loc = P.local * ir;
    const net = G - so.pen - so.hlt - so.ei - ir - loc;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + so.er, net, u: { ...so, ...it, spouse }, vatShare,
      parts: { er: so.er, pen: so.pen, hlt: so.hlt, ei: so.ei, ir, loc, vat } };
  }

  const COMP_KEYS = ['er', 'pen', 'hlt', 'ei', 'ir', 'loc', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', pen: 'var(--k-ee)', hlt: 'var(--k-vm)', ei: 'var(--k-bbsz)', ir: 'var(--k-ir)', loc: 'var(--k-com)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: COMP_KEYS, base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'pen', 'hlt', 'ei', 'ir', 'loc'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['pen', 'hlt', 'ei', 'ir', 'loc'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  const pc = r => pct(r, Math.round(r * 1e4) % 100 ? (Math.round(r * 1e5) % 10 ? 3 : 2) : 0);

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const scaleRows = r => {
      let lo = 0;
      return P.brackets.map(([hi, rate]) => {
        const part = Math.max(0, Math.min(r.u.base, hi) - lo);
        const out = part > 0 ? row(`${pc(rate)} × ${eur(part)}`, part * rate) : '';
        lo = hi;
        return out;
      }).join('');
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.spouseMax), eur(P.personal))}</p>${sources('itax')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg', eur(P.child[1]), eur(P.child[2]), eur(P.childExtra))}</p>${sources('itax')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('ei', 'social')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>
          ${row(t('tip.erPen'), r.u.pen)}${row(t('tip.erHlt'), r.u.hlt)}
          ${row(`${pc(P.ei + P.eiEr[s.size])} × ${eur(r.G)} (${t('comp.ei')})`, r.u.eiEr)}
          ${row(`${pc(P.acc)} × ${eur(r.G)} (${t('tip.acc')})`, r.u.acc)}
          ${tot(t('comp.er'), r.parts.er)}</table>` : ''}${sources('social', 'comwel')}`,
      pen: r => `<h4>${t('comp.pen')}</h4><p>${t('tip.pen', eur(P.penCaps[0]), eur(P.penCaps[1]))}</p>${r ? `<table>${tot(`4.75% × ${eur(r.u.pen / P.pen)}`, r.u.pen)}</table>` : ''}${sources('social', 'nps')}`,
      hlt: r => `<h4>${t('comp.hlt')}</h4><p>${t('tip.hlt', eur(P.hltCap))}</p>${r ? `<table>${row(`3.595% × ${eur(r.G)}`, r.u.health)}${row(`13.14% × ${eur(r.u.health)}`, r.u.health * P.ltc)}${tot(t('comp.hlt'), r.parts.hlt)}</table>` : ''}${sources('social', 'nhis')}`,
      ei: r => `<h4>${t('comp.ei')}</h4><p>${t('tip.ei')}</p>${r ? `<table>${tot(`0.9% × ${eur(r.G)}`, r.parts.ei)}</table>` : ''}${sources('social', 'ei')}`,
      earned: r => `<h4>${t('bd.earned')}</h4><p>${t('tip.earned')}</p>${r ? `<table>${row(t('bd.gross'), r.G)}${row('− ' + t('bd.earned'), -r.u.ded)}${tot(t('tip.wageIncome'), r.u.wage)}</table>` : ''}${sources('itax', 'pwcDed')}`,
      taxable: r => `<h4>${t('bd.taxableKr')}</h4><p>${t('tip.taxable')}</p>${r ? `<table>
          ${row(t('tip.wageIncome'), r.u.wage)}
          ${row(t('tip.basic', 1 + (r.u.spouse ? 1 : 0) + s.children), -r.u.basic)}
          ${row(t('comp.pen'), -r.u.pen)}
          ${r.u.itemised ? row(t('tip.prem'), -r.u.prem) : ''}
          ${tot(t('bd.taxableKr'), r.u.base)}</table>` : ''}${sources('itax', 'pwcDed')}`,
      scale: r => `<h4>${t('bd.scale')}</h4><p>${t('tip.scale')}</p>${r ? `<table>${scaleRows(r)}${tot(t('bd.scale'), r.u.scale)}</table>` : ''}${sources('itax', 'pwcRates')}`,
      cred: r => `<h4>${t('bd.cred')}</h4><p>${t('tip.cred')}</p>${r ? `<table>
          ${row(t('tip.ec'), r.u.ec)}
          ${r.u.cc ? row(t('tip.cc', s.children), r.u.cc) : ''}
          ${r.u.std ? row(t('tip.std'), r.u.std) : ''}
          ${tot(t('tip.credUsed'), r.u.credits)}</table><p class="m">${t(r.u.itemised ? 'tip.choseItem' : 'tip.choseStd')}</p>` : ''}${sources('itax', 'pwcCredits')}`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${row(t('bd.scale'), r.u.scale)}${row('− ' + t('bd.cred'), -r.u.credits)}${tot(t('comp.ir'), r.parts.ir)}</table>` : ''}${sources('itax', 'pwcRates')}`,
      loc: r => `<h4>${t('comp.loc')}</h4><p>${t('tip.loc')}</p>${r ? `<table>${tot(`10% × ${eur(r.parts.ir)}`, r.parts.loc)}</table>` : ''}${sources('pwcRates')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000000), eur(1000000 + s.vatRate * 10000), eur(s.vatRate * 10000))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('social')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const p = r.parts, u = r.u;
    return [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '−', k: 'pen', label: t('comp.pen'), v: p.pen, tax: p.pen },
      { op: '−', k: 'hlt', label: t('comp.hlt'), v: p.hlt, tax: p.hlt },
      { op: '−', k: 'ei', label: t('comp.ei'), v: p.ei, tax: p.ei },
      { op: '', k: 'earned', label: t('bd.earned'), v: -u.ded, cls: 'sub' },
      { op: '', k: 'taxable', label: t('bd.taxableKr'), v: u.base, cls: 'sub' },
      { op: '', k: 'scale', label: t('bd.scale'), v: u.scale, cls: 'sub' },
      { op: '', k: 'cred', label: t('bd.cred'), v: -u.credits, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '−', k: 'loc', label: t('comp.loc'), v: p.loc, tax: p.loc },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    ];
  }

  // Deductions and the 55% wage credit cancel income tax on low pay.
  function trap(x) {
    const s = x.s, minM = MIN_WAGE, env = x.env();
    const start = x.firstMonthly(m => compute(m * 12, s, env).parts.ir > 1, 0, 2e7);
    if (!start || start <= minM + 1) return { band: [minM, minM], text: [x.fmtM(minM, 1), null] };
    return { band: [minM, start], text: [x.fmtM(minM, 1), x.fmtM(start, 10000) + x.perUnit()] };
  }

  // Above the pension ceiling the 4.75% stops.
  function top(x) {
    return { at: P.penCaps[1], text: [x.fmtM(P.penCaps[1], 1) + x.perUnit()] };
  }

  return {
    GAPS: ['noCheck', 'yearEnd', 'acc', 'hltCap', 'eiEr', 'minWage', 'wages', 'mp', 'polInsured', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'KRW', nextStep: 150000,
    regions: AGES, sizes: SIZES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 10,
    features: {},
    communes: false,
    local: null,
    state: { salary: 3500000, factor: 12, minRole: 'min', commune: '', region: 'old', local: 0, vatRate: 10, size: 's' },
    urlFields: { ages: ['region', 'str', AGES], size: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: s => ({ partnerG: Math.max(0, Number(s.partnerGross) || 0) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'govPay',
    refKeys: ['er', 'social', 'earned', 'ir', 'cred', 'loc', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
