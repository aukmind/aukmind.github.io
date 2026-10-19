// United Arab Emirates (Dubai) salary rules for 2026. Loaded by ../index.html?country=ae.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  // The region row picks who you are: expats pay no social contributions, Emiratis pay GPSSA under the 2023 or the 1999 law.
  const REGIONS = ['expat', 'nat', 'natOld'];
  const SIZES = ['private', 'gov'];
  const MIN_ROLES = ['fnc', 'asec', 'usec'];

  const P = {
    // Federal Decree-Law 57 of 2023, Emiratis first employed from 31 October 2023. Monthly contribution account salary.
    gNew: { ee: .11, er: .15, govShare: .025, govBelow: 20000, min: 3000, max: { private: 70000, gov: 100000 } },
    // Federal Law 7 of 1999, Emiratis registered before.
    gOld: { ee: .05, er: { private: .125, gov: .15 }, govShare: .025, min: 1000, max: { private: 50000, gov: 50000 } },
    iloe: { tier: 16000, lo: 5, hi: 10 },
    fnc: { pen: 2000 },
    brackets: [[INF, 0]],
  };

  const REF_WAGES = [
    { key: 'min', m: 6000, year: 2026, color: '--w-min' },
  ];

  const DOC_FAHR = 'https://fahr.gov.ae/Portal/Userfiles/Assets/Documents/1b46f5fb.pdf';
  const DOC_FNC = 'https://www.khaleejtimes.com/uae/what-perks-do-uaes-fnc-members-get';
  const PAY = { fnc: 50000 * 12, asec: 107000 * 12, usec: 131250 * 12 };
  const POLITICIANS = [
    { kind: 'stat', key: 'usec', icon: '💼', regime: 'usec', lo: PAY.usec, hi: PAY.usec, url: DOC_FAHR },
    { kind: 'stat', key: 'asec', icon: '📎', regime: 'asec', lo: PAY.asec, hi: PAY.asec, url: DOC_FAHR },
    { kind: 'stat', key: 'fnc', icon: '🏛️', regime: 'fnc', lo: PAY.fnc, hi: PAY.fnc, url: DOC_FNC },
  ];

  const SRC = {
    noTax: 'https://u.ae/en/information-and-services/finance-and-investment/taxation',
    gpssa: 'https://gpssa.gov.ae/pages/en/media-center/news/gpssa-reviews-most-prominent-features-federal-law-no-57-2023',
    gpssaNews: 'https://en.aletihad.ae/news/uae/4500975/gpssa-announces-17-304-emirati-contributors-under-federal-la',
    cas: 'https://www.kayrouzandassociates.com/insights/gpssa-registration-emirati-employees-uae',
    iloe: 'https://www.iloe.ae/',
    vat: 'https://tax.gov.ae/en/taxes/vat.aspx',
    minWage: 'https://taxnews.ey.com/news/2026-0219-uae-raises-minimum-salary-for-emirati-employees-in-the-private-sector-effective-1-january-2026',
    fahr: DOC_FAHR,
    fnc: DOC_FNC,
  };

  // GPSSA contributions on the monthly contribution account salary, clamped to the law's floor and ceiling.
  function pension(G, region, size) {
    const none = { cas: 0, ee: 0, er: 0, gov: 0, erRate: 0, govRate: 0 };
    if (region === 'expat' || G <= 0) return none;
    const law = region === 'nat' ? P.gNew : P.gOld;
    const cas = Math.min(Math.max(G / 12, law.min), law.max[size]);
    let erRate, govRate = 0;
    if (region === 'nat') {
      govRate = size === 'private' && cas < law.govBelow ? law.govShare : 0;
      erRate = law.er - govRate;
    } else {
      erRate = law.er[size];
      govRate = size === 'private' ? law.govShare : 0;
    }
    return { cas, ee: law.ee * cas * 12, er: erRate * cas * 12, gov: govRate * cas * 12, erRate, govRate, eeRate: law.ee, law };
  }

  // Unemployment insurance (ILOE), paid by the employee. The tier is set on basic salary; here the whole gross counts as basic.
  const iloe = G => G > 0 ? 12 * (G / 12 <= P.iloe.tier ? P.iloe.lo : P.iloe.hi) : 0;

  const withVat = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // Office holders are Emiratis in the federal government, under the 2023 law; FNC members pay a flat pension deduction.
  function computeMinister(G, s, env, role = s.minRole) {
    const pen = role === 'fnc' ? (G > 0 ? P.fnc.pen * 12 : 0) : pension(G, 'nat', 'gov').ee;
    const er = role === 'fnc' ? 0 : pension(G, 'nat', 'gov').er;
    const net = G - pen;
    const vat = withVat(s, net);
    return { G, cost: G + er, net, u: { G, pen, role }, regime: 'minister',
      parts: { er, ee: pen, iloe: 0, vat } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const pen = pension(G, s.region, s.size);
    const ui = iloe(G);
    const net = G - pen.ee - ui;
    const vat = withVat(s, net);
    return { G, cost: G + pen.er, net, u: { G, m: G / s.factor }, pen, ui,
      parts: { er: pen.er, ee: pen.ee, iloe: ui, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'iloe', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', iloe: 'var(--k-csg)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'iloe', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'iloe'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'iloe'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const casRow = p => row(t('tip.cas'), p.cas * 12);
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('fahr', 'fnc')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t(s.minRole === 'fnc' ? 'tip.minErFnc' : 'tip.minEr')}</p>${r && r.parts.er ? `<table>${tot(t('total'), r.parts.er)}</table>` : ''}${sources('gpssa')}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t(s.minRole === 'fnc' ? 'tip.minEeFnc' : 'tip.minEe')}</p>${r ? `<table>${tot(t('youPay'), r.parts.ee)}</table>` : ''}${sources(s.minRole === 'fnc' ? 'fnc' : 'gpssa')}`,
      iloe: () => `<h4>${t('comp.iloe')}</h4><p>${t('tip.minIloe')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('fahr', 'fnc')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('noTax')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('gpssaNews', 'cas')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('gpssa')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.u.m != null ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const p = r && r.pen;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${p && p.cas ? `<table>
          ${casRow(p)}
          ${row(`${pct(p.erRate, 1)} × ${eur(p.cas * 12)}`, p.er)}
          ${p.gov ? row(t('tip.govPays', pct(p.govRate, 1)), p.gov) : ''}
          ${tot(t('total'), r.parts.er)}</table>` : `<p>${t('tip.noErExpat')}</p>`}${sources('gpssa', 'gpssaNews')}`;
      },
      govShare: r => `<h4>${t('bd.govShare')}</h4><p>${t('tip.govShare')}</p>${r && r.pen && r.pen.gov ? `<p>${eur(r.pen.gov)}</p>` : ''}${sources('gpssaNews')}`,
      ee: r => {
        const p = r && r.pen;
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${p && p.cas ? `<table>
          ${casRow(p)}
          ${row(`${pct(p.eeRate, 0)} × ${eur(p.cas * 12)}`, p.ee)}
          ${tot(t('youPay'), p.ee)}</table>` : `<p>${t('tip.noEeExpat')}</p>`}${sources('gpssa', 'cas')}`;
      },
      iloe: r => `<h4>${t('comp.iloe')}</h4><p>${t('tip.iloe')}</p>${r && r.ui ? `<table>${tot(t('youPay'), r.ui)}</table>` : ''}${sources('iloe')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (p.er > .5) L.push({ op: '+', k: 'er', label: t(min ? 'bd.minEr' : 'comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    if (!min && r.pen.gov > .5) L.push({ op: '', k: 'govShare', label: t('bd.govShare'), v: r.pen.gov, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t(min ? 'bd.minEe' : 'comp.ee'), v: p.ee, tax: p.ee },
    );
    if (p.iloe > .5) L.push({ op: '−', k: 'iloe', label: t('comp.iloe'), v: p.iloe, tax: p.iloe });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // No income tax and no means-tested benefit, so no low-wage zone: the note explains what a low salary pays.
  function trap(x) {
    const m = REF_WAGES[0].m;
    return { band: [m, m], text: [x.fmtM(m, 10), null] };
  }

  // Emiratis under the 2023 law in the private sector: the government's 2.5% stops at 20,000 a month, then the ceiling.
  function top(x) {
    const s = x.s;
    if (s.region === 'expat') return null;
    const law = s.region === 'nat' ? P.gNew : P.gOld;
    const cap = law.max[s.size];
    const cliff = s.region === 'nat' && s.size === 'private';
    const at = cliff ? law.govBelow : cap;
    return {
      at: at * 12 / s.factor,
      text: [x.fmtM(at * 12 / s.factor, 50) + x.perUnit(), x.fmtM(cap * 12 / s.factor, 50) + x.perUnit(), cliff ? 'cliff' : 'cap', eur(law.govShare * law.govBelow * 12)],
    };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'AED', nextStep: 500,
    regions: REGIONS, sizes: SIZES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 5,
    features: {},
    communes: false,
    local: null,
    state: { salary: 15000, factor: 12, minRole: 'fnc', commune: '', region: 'expat', local: 0, vatRate: 5, size: 'private' },
    urlFields: {
      status: ['region', 'str', REGIONS], sector: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    minSalary: role => PAY[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: p => p.regime === 'fnc' ? 'polNote.fnc' : 'polNote.civil',
    polTipNote: p => 'polNote.civil',
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'fahr',
    refKeys: ['noTax', 'gpssa', 'old', 'iloe', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
