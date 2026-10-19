// Saudi Arabia salary rules for 2026. Loaded by ../index.html?country=sa.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  // The region row picks who you are: Saudis under the 2024 or the old GOSI rules, or an expat.
  const REGIONS = ['expat', 'nat', 'natOld'];
  const MIN_ROLES = ['min'];

  const P = {
    // Social Insurance Law (Royal Decree M/273), Saudis first registered from 3 July 2024: the pension rate on each side rises 0.5 point every July up to 11% in 2028.
    nat: { pen: .10, saned: .0075, ohi: .02 },
    natOld: { pen: .09, saned: .0075, ohi: .02 },
    expat: { pen: 0, saned: 0, ohi: .02 },
    base: { min: 1500, minExpat: 400, max: 45000 },
    levy: 800,
    dep: 400,
    civil: { ee: .09, er: .09 },
    brackets: [[INF, 0]],
  };

  const REF_WAGES = [
    { key: 'min', m: 4000, year: 2026, color: '--w-min' },
    { key: 'avg', m: 10500, year: 2025, color: '--w-avg' },
  ];

  const DOC_MIN = 'https://en.wikipedia.org/wiki/List_of_salaries_of_heads_of_state_and_government';
  // USD 132,400 a year at the 3.75 peg.
  const PAY = { min: 496500 };
  const POLITICIANS = [
    { kind: 'stat', key: 'min', icon: '💼', regime: 'min', lo: PAY.min, hi: PAY.min, url: DOC_MIN },
  ];

  const SRC = {
    noTax: 'https://taxsummaries.pwc.com/saudi-arabia/individual/taxes-on-personal-income',
    gosi: 'https://taxsummaries.pwc.com/saudi-arabia/individual/other-taxes',
    newLaw: 'https://www.rivermate.com/guides/saudi-arabia/taxes',
    vat: 'https://taxsummaries.pwc.com/saudi-arabia/corporate/other-taxes',
    zatca: 'https://zatca.gov.sa/en/RulesRegulations/Taxes/Pages/default.aspx',
    wages: 'https://www.rivermate.com/guides/saudi-arabia',
    minWage: 'https://en.wikipedia.org/wiki/List_of_countries_by_minimum_wage',
    mol: 'https://www.hrsd.gov.sa/en',
    pol: DOC_MIN,
  };

  const dependents = s => s.region === 'expat' ? (s.children || 0) + (s.household === 'joint' && !(s.partnerGross > 0) ? 1 : 0) : 0;

  // GOSI on the monthly base (basic + housing, here the whole gross), between a floor and SAR 45,000.
  function gosi(G, region) {
    const r = P[region];
    if (G <= 0) return { base: 0, ee: 0, er: 0, pen: 0, saned: 0, ohi: 0, r };
    const base = Math.min(Math.max(G / 12, region === 'expat' ? P.base.minExpat : P.base.min), P.base.max) * 12;
    const pen = r.pen * base, saned = r.saned * base, ohi = r.ohi * base;
    return { base, pen, saned, ohi, ee: pen + saned, er: pen + saned + ohi, r };
  }

  const withVat = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // Ministers are Saudis in the civil pension scheme: 9% each side, taken here on the whole pay.
  function computeMinister(G, s, env, role = s.minRole) {
    const ee = P.civil.ee * G, er = P.civil.er * G;
    const net = G - ee;
    return { G, cost: G + er, net, u: { G, role }, regime: 'minister',
      parts: { er, levy: 0, ee, dep: 0, vat: withVat(s, net) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const g = gosi(G, s.region);
    const expat = s.region === 'expat' && G > 0;
    const levy = expat ? P.levy * 12 : 0;
    const nDep = expat ? dependents(s) : 0;
    const dep = nDep * P.dep * 12;
    const net = G - g.ee - dep;
    return { G, cost: G + g.er + levy, net, u: { G, m: G / s.factor, nDep }, g,
      parts: { er: g.er, levy, ee: g.ee, dep, vat: withVat(s, net) } };
  }

  const COMP_KEYS = ['er', 'levy', 'ee', 'dep', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', levy: 'var(--k-vm)', ee: 'var(--k-ee)', dep: 'var(--k-csg)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'levy', 'ee', 'dep', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'levy', 'ee', 'dep'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'dep'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const baseRow = g => row(t('tip.base'), g.base);
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('pol')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr')}</p>${r ? `<table>${tot(t('total'), r.parts.er)}</table>` : ''}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe')}</p>${r ? `<table>${tot(t('youPay'), r.parts.ee)}</table>` : ''}`,
      levy: () => `<h4>${t('comp.levy')}</h4><p>${t('tip.minNone')}</p>`,
      dep: () => `<h4>${t('comp.dep')}</h4><p>${t('tip.minNone')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pol')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('noTax')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('gosi', 'newLaw')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.u.m != null ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${r.parts.levy ? row(t('comp.levy'), r.parts.levy) : ''}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const g = r && r.g;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${g && g.base ? `<table>
          ${baseRow(g)}
          ${g.pen ? row(`${t('tip.pen')} ${pct(g.r.pen, 1)}`, g.pen) : ''}
          ${g.saned ? row(`${t('tip.saned')} ${pct(g.r.saned, 2)}`, g.saned) : ''}
          ${row(`${t('tip.ohi')} ${pct(g.r.ohi, 0)}`, g.ohi)}
          ${tot(t('total'), r.parts.er)}</table>` : ''}${sources('gosi', 'newLaw')}`;
      },
      levy: r => `<h4>${t('comp.levy')}</h4><p>${t('tip.levy')}</p>${r && r.parts.levy ? `<table>${tot(t('total'), r.parts.levy)}</table>` : `<p>${t('tip.noLevy')}</p>`}${sources('mol')}`,
      ee: r => {
        const g = r && r.g;
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${g && g.ee ? `<table>
          ${baseRow(g)}
          ${row(`${t('tip.pen')} ${pct(g.r.pen, 1)}`, g.pen)}
          ${row(`${t('tip.saned')} ${pct(g.r.saned, 2)}`, g.saned)}
          ${tot(t('youPay'), g.ee)}</table>` : `<p>${t('tip.noEeExpat')}</p>`}${sources('gosi', 'newLaw')}`;
      },
      dep: r => `<h4>${t('comp.dep')}</h4><p>${t('tip.dep')}</p>${r && r.parts.dep ? `<table>${row(t('tip.depN', r.u.nDep), r.parts.dep)}${tot(t('youPay'), r.parts.dep)}</table>` : ''}${sources('mol')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat', 'zatca')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (p.er > .5) L.push({ op: '+', k: 'er', label: t(min ? 'bd.minEr' : 'comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    if (p.levy > .5) L.push({ op: '+', k: 'levy', label: t('comp.levy'), v: p.levy, tax: p.levy, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (p.ee > .5 || !min) L.push({ op: '−', k: 'ee', label: t(min ? 'bd.minEe' : 'comp.ee'), v: p.ee, tax: p.ee });
    if (p.dep > .5) L.push({ op: '−', k: 'dep', label: t('comp.dep'), v: p.dep, tax: p.dep });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // No income tax and no means-tested benefit; for expats the flat levy and dependant fees weigh most on low pay.
  function trap(x) {
    const m = REF_WAGES[0].m;
    return { band: [m, m], text: [x.fmtM(m, 10), eur(P.levy), eur(P.dep)] };
  }

  function top(x) {
    const s = x.s;
    const at = P.base.max * 12 / s.factor;
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), x.fmtM(at, 50) + x.perUnit(), s.region === 'expat' ? 'expat' : 'nat'] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'SAR', nextStep: 400,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 15,
    features: {},
    communes: false,
    local: null,
    state: { salary: 12000, factor: 12, minRole: 'min', commune: '', region: 'expat', local: 0, vatRate: 15, size: '' },
    urlFields: {
      status: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES],
    },
    minSalary: role => PAY[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: p => 'polNote.civil',
    polTipNote: p => 'polNote.civil',
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'pol',
    refKeys: ['noTax', 'gosi', 'old', 'expat', 'levy', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
