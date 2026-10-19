// Qatar salary rules for 2026. Loaded by ../index.html?country=qa.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  // The region row picks who you are: only Qataris pay into the social insurance fund.
  const REGIONS = ['expat', 'nat'];
  const MIN_ROLES = ['gov'];

  const P = {
    // Social Insurance Law (Law No. 1 of 2022), art. 11: monthly contribution salary up to QAR 100,000.
    si: { ee: .07, er: .14, max: 100000, housingMax: 6000 },
    minPension: 15000,
    brackets: [[INF, 0]],
  };

  const REF_WAGES = [
    { key: 'min', m: 1800, year: 2021, color: '--w-min' },
  ];

  // Ministers' pay isn't published; minister mode takes the pay you enter, starting at 12 × the minimum government pension.
  const PAY = { gov: P.minPension * 12 };
  const POLITICIANS = [];

  const SRC = {
    pit: 'https://taxsummaries.pwc.com/qatar/individual/taxes-on-personal-income',
    other: 'https://taxsummaries.pwc.com/qatar/individual/other-taxes',
    corp: 'https://taxsummaries.pwc.com/qatar/corporate/other-taxes',
    law: 'https://www.daman.gov.qa/English/Pensions/Pages/Laws-and-Legislations.aspx',
    rivermate: 'https://www.rivermate.com/guides/qatar/taxes',
    minWage: 'https://www.globalization-partners.com/globalpedia/qatar/',
  };

  // Social insurance on the monthly contribution salary, Qataris only.
  function social(G, region) {
    if (region !== 'nat' || G <= 0) return { cas: 0, ee: 0, er: 0 };
    const cas = Math.min(G / 12, P.si.max);
    return { cas, ee: P.si.ee * cas * 12, er: P.si.er * cas * 12 };
  }

  const withVat = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // In government the State is the employer and pays the 14%.
  function computeMinister(G, s) {
    const si = social(G, 'nat');
    const net = G - si.ee;
    return { G, cost: G + si.er, net, u: { G }, si, regime: 'minister',
      parts: { er: si.er, ee: si.ee, vat: withVat(s, net) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s);
    const si = social(G, s.region);
    const net = G - si.ee;
    return { G, cost: G + si.er, net, u: { G, m: G / s.factor }, si,
      parts: { er: si.er, ee: si.ee, vat: withVat(s, net) } };
  }

  const COMP_KEYS = ['er', 'ee', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const siTable = (si, rate, v, label) => `<table>${row(t('tip.cas'), si.cas * 12)}${row(`${pct(rate, 0)} × ${eur(si.cas * 12)}`, v)}${tot(label, v)}</table>`;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('law')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr')}</p>${r && r.si && r.si.cas ? siTable(r.si, P.si.er, r.parts.er, t('total')) : ''}${sources('law')}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe')}</p>${r && r.si && r.si.cas ? siTable(r.si, P.si.ee, r.parts.ee, t('youPay')) : ''}${sources('law')}`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('law')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('pit')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('corp', 'law')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.u.m != null ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r && r.si && r.si.cas ? siTable(r.si, P.si.er, r.parts.er, t('total')) : `<p>${t('tip.noErExpat')}</p>`}${sources('law', 'rivermate')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r && r.si && r.si.cas ? siTable(r.si, P.si.ee, r.parts.ee, t('youPay')) : `<p>${t('tip.noEeExpat')}</p>`}${sources('law', 'rivermate')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vatNone')}</p>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('other', 'corp')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (p.er > .5) L.push({ op: '+', k: 'er', label: t(min ? 'bd.minEr' : 'comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t(min ? 'bd.minEe' : 'comp.ee'), v: p.ee, tax: p.ee },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // No income tax and no means-tested benefit: the note only explains the minimum wage.
  function trap(x) {
    const m = REF_WAGES[0].m;
    return { band: [m, m], text: [x.fmtM(m, 10), null] };
  }

  // Qataris: contributions stop at the QAR 100,000 monthly ceiling.
  function top(x) {
    const s = x.s;
    if (s.regime !== 'minister' && s.region !== 'nat') return null;
    const at = P.si.max * 12 / s.factor;
    return { at, text: [x.fmtM(at, 50) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'QAR', nextStep: 400,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 0,
    features: {},
    communes: false,
    local: null,
    state: { salary: 15000, factor: 12, minRole: 'gov', commune: '', region: 'expat', local: 0, vatRate: 0, size: 'private' },
    urlFields: {
      status: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES],
    },
    minSalary: role => PAY[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: () => 'polNote.none',
    polTipNote: () => 'polNote.none',
    polSrc: () => t('src.law'),
    polNoteLink: 'law',
    refKeys: ['noTax', 'si', 'expat', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
