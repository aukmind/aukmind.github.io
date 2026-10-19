// India salary rules for tax year 2026-27 (1 April 2026 to 31 March 2027). Loaded by ../index.html?country=in.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  // The region row picks the income tax regime; the size row picks how the employer pays the provident fund.
  const REGIONS = ['new', 'old'];
  const SIZES = ['cap', 'full', 'none'];
  const MIN_ROLES = ['mos', 'cabinet', 'pm'];

  const P = {
    slabs: {
      new: [[400000, 0], [800000, .05], [1200000, .10], [1600000, .15], [2000000, .20], [2400000, .25], [INF, .30]],
      old: [[250000, 0], [500000, .05], [1000000, .20], [INF, .30]],
    },
    std: { new: 75000, old: 50000 },
    rebate: { new: { max: 60000, upTo: 1200000, relief: true }, old: { max: 12500, upTo: 500000, relief: false } },
    surcharge: {
      new: [[5000000, .10], [10000000, .15], [20000000, .25], [50000000, .25]],
      old: [[5000000, .10], [10000000, .15], [20000000, .25], [50000000, .37]],
    },
    cess: .04,
    c80: 150000,
    // Reference table only: new regime on taxable income.
    brackets: [[400000, 0], [800000, .05], [1200000, .10], [1600000, .15], [2000000, .20], [2400000, .25], [INF, .30]],
    pf: { ee: .12, er: .12, eps: .0833, edli: .005, admin: .005, ceiling: 15000, basic: .5 },
    esi: { ee: .0075, er: .0325, upTo: 21000 },
    pt: { lo: 7500, hi: 10000, mid: 175 * 12, top: 2500 },
    mp: 124000,
    sumptuary: { pm: 3000, cabinet: 2000, mos: 1000 },
    da: .58,
  };

  const REF_WAGES = [
    { key: 'min', m: 18456, year: 2025, color: '--w-min' },
  ];

  const PAY = Object.fromEntries(MIN_ROLES.map(k => [k, (P.mp + P.sumptuary[k]) * 12]));
  PAY.mp = P.mp * 12;
  const DOC_MP = 'https://en.wikipedia.org/wiki/Member_of_Parliament,_Lok_Sabha';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: PAY.pm, hi: PAY.pm, url: DOC_MP },
    { kind: 'stat', key: 'cabinet', icon: '💼', regime: 'cabinet', lo: PAY.cabinet, hi: PAY.cabinet, url: DOC_MP },
    { kind: 'stat', key: 'mos', icon: '📎', regime: 'mos', lo: PAY.mos, hi: PAY.mos, url: DOC_MP },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: PAY.mp, hi: PAY.mp, url: DOC_MP },
    { kind: 'gov', name: 'Surya Kant', role: 'cji', lo: 280000 * 12, hi: 280000 * 12 * (1 + P.da), url: 'https://en.wikipedia.org/wiki/Chief_Justice_of_India' },
    { kind: 'gov', name: 'T. V. Somanathan', role: 'cabsec', lo: 250000 * 12, hi: 250000 * 12 * (1 + P.da), url: 'https://en.wikipedia.org/wiki/Cabinet_Secretary_(India)' },
  ];

  const SRC = {
    rates: 'https://taxsummaries.pwc.com/india/individual/taxes-on-personal-income',
    slabs: 'https://cleartax.in/s/income-tax-slabs',
    other: 'https://taxsummaries.pwc.com/india/individual/other-taxes',
    pf: 'https://en.wikipedia.org/wiki/Employees%27_Provident_Fund_Organisation',
    ceiling: 'https://www.scconline.com/blog/post/2026/06/01/15000-wage-ceiling-epf-coverage-membership-contributions/',
    codes: 'https://en.wikipedia.org/wiki/Code_on_Social_Security,_2020',
    esi: 'https://en.wikipedia.org/wiki/Employees%27_State_Insurance',
    pt: 'https://en.wikipedia.org/wiki/Professional_tax',
    minWage: 'https://www.simpliance.in/uploads/notifdocs/2626/the-delhi-minimum-wages-notification-apr-2025.pdf',
    mp: DOC_MP,
    vat: 'https://taxsummaries.pwc.com/india/individual/other-taxes',
  };

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const slabTax = (ti, reg) => slices(ti, P.slabs[reg]).reduce((a, b) => a + b.amt, 0);

  // Tax after the 87A rebate, before surcharge. The new regime caps the tax just above 12 lakh at the income above it.
  function afterRebate(ti, reg) {
    const base = slabTax(ti, reg), rb = P.rebate[reg];
    if (ti <= rb.upTo) return { base, rebate: Math.min(base, rb.max), tax: Math.max(0, base - rb.max) };
    if (rb.relief && base > ti - rb.upTo) return { base, rebate: base - (ti - rb.upTo), tax: ti - rb.upTo };
    return { base, rebate: 0, tax: base };
  }

  // Surcharge with marginal relief: tax + surcharge can't rise by more than the income above each threshold.
  function surcharge(ti, tax, reg) {
    const steps = P.surcharge[reg];
    let i = -1;
    steps.forEach(([at], k) => { if (ti > at) i = k; });
    if (i < 0) return { rate: 0, sc: 0, relief: 0 };
    const [T, rate] = steps[i];
    const rateT = i > 0 ? steps[i - 1][1] : 0;
    const full = tax * rate;
    const capped = afterRebate(T, reg).tax * (1 + rateT) + (ti - T) - tax;
    const sc = Math.max(0, Math.min(full, capped));
    return { rate, sc, relief: full - sc };
  }

  function incomeTax(ti, reg) {
    const ab = afterRebate(ti, reg);
    const s = surcharge(ti, ab.tax, reg);
    const cess = P.cess * (ab.tax + s.sc);
    return { ti, reg, slices: slices(ti, P.slabs[reg]), ...ab, ...s, cess, total: ab.tax + s.sc + cess };
  }

  // Maharashtra rates: ₹200 a month above ₹10,000 (₹300 in February), ₹175 from ₹7,501.
  const profTax = (G, on) => {
    if (!on) return 0;
    const m = G / 12;
    return m > P.pt.hi ? P.pt.top : m > P.pt.lo ? P.pt.mid : 0;
  };

  // Labour Codes: wages for the provident fund are at least half of pay, so basic is taken as 50% of gross.
  function employeeSide(G, s) {
    const basic = P.pf.basic * G / 12;
    const w = s.size === 'none' ? 0 : s.size === 'full' ? basic : Math.min(basic, P.pf.ceiling);
    const wc = Math.min(w, P.pf.ceiling);
    const eePf = P.pf.ee * w * 12;
    const eps = P.pf.eps * wc * 12, epf = P.pf.er * w * 12 - eps;
    const edli = P.pf.edli * wc * 12, admin = P.pf.admin * w * 12;
    const esiOn = G > 0 && G / 12 <= P.esi.upTo;
    const esiEe = esiOn ? P.esi.ee * G : 0, esiEr = esiOn ? P.esi.er * G : 0;
    const pt = profTax(G, s.cadre);
    return { G, m: G / s.factor, w, eePf, eps, epf, edli, admin, esiEe, esiEr, pt,
      er: eps + epf + edli + admin + esiEr, ee: eePf + esiEe };
  }

  const taxableOf = (u, reg) => {
    const std = Math.min(u.G, P.std[reg]);
    const ptDed = reg === 'old' ? u.pt : 0;
    const c80 = reg === 'old' ? Math.min(P.c80, u.eePf) : 0;
    return { std, ptDed, c80, ti: Math.max(0, u.G - std - ptDed - c80) };
  };

  const vatOf = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // MPs' and ministers' pay is taxed as income from other sources: no standard deduction, no provident fund.
  function computeMinister(G, s, env, role = s.minRole) {
    const it = incomeTax(G, 'new');
    const net = G - it.total;
    return { G, cost: G, net, u: { G, role }, tx: { std: 0, ptDed: 0, c80: 0, ti: G }, it, regime: 'minister',
      parts: { er: 0, ee: 0, ir: it.total, pt: 0, vat: vatOf(s, net) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const reg = s.region === 'old' ? 'old' : 'new';
    const u = employeeSide(G, s);
    const tx = taxableOf(u, reg);
    const it = incomeTax(tx.ti, reg);
    const net = G - u.ee - u.pt - it.total;
    return { G, cost: G + u.er, net, u, tx, it,
      parts: { er: u.er, ee: u.ee, ir: it.total, pt: u.pt, vat: vatOf(s, net) } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'pt', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', pt: 'var(--k-com)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'pt', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'pt'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'pt'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const irTable = it => {
      const br = it.slices.filter(b => b.r > 0).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}`, b.amt)).join('');
      return `${row(t('bd.taxable'), it.ti)}${br}
        ${it.rebate > 0 ? row('− ' + t('bd.rebate'), -it.rebate) : ''}
        ${it.sc > 0 ? row(`+ ${t('bd.surcharge')} ${pct(it.rate, 0)}`, it.sc) : ''}
        ${it.relief > .5 ? row(t('tip.scRelief'), -it.relief) : ''}
        ${it.cess > 0 ? row(`+ ${t('bd.cess')} 4%`, it.cess) : ''}
        ${tot(t('comp.ir'), it.total)}`;
    };
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('mp')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>`,
      ee: () => `<h4>${t('comp.ee')}</h4><p>${t('tip.minEe')}</p>`,
      pt: () => `<h4>${t('comp.pt')}</h4><p>${t('tip.minPt')}</p>`,
      std: () => `<h4>${t('bd.std')}</h4><p>${t('tip.minStd')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('mp')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('rates')}`,
      cadre: () => `<h4>${t('comp.pt')}</h4><p>${t('tip.pt')}</p>${sources('pt')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('slabs', 'rates')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('pf', 'ceiling', 'codes', 'other')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.u.m != null ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const u = r && r.u;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${u && u.eps != null ? `<table>
          ${u.w ? row(t('tip.pfWage'), u.w * 12) : ''}
          ${u.eps ? row(`${t('bd.eps')} 8.33%`, u.eps) : ''}
          ${u.epf ? row(`${t('bd.epf')} 3.67%`, u.epf) : ''}
          ${u.edli ? row(`${t('bd.edli')} 0.5%`, u.edli) : ''}
          ${u.admin ? row(`${t('bd.admin')} 0.5%`, u.admin) : ''}
          ${u.esiEr ? row(`${t('bd.esi')} 3.25%`, u.esiEr) : ''}
          ${tot(t('total'), r.parts.er)}</table>` : ''}${sources('pf', 'ceiling', 'esi')}`;
      },
      ee: r => {
        const u = r && r.u;
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${u && u.eePf != null ? `<table>
          ${u.w ? row(t('tip.pfWage'), u.w * 12) : ''}
          ${u.eePf ? row(`${t('bd.epf')} 12%`, u.eePf) : ''}
          ${u.esiEe ? row(`${t('bd.esi')} 0.75%`, u.esiEe) : ''}
          ${tot(t('youPay'), r.parts.ee)}</table>` : ''}${sources('pf', 'esi')}`;
      },
      pt: r => `<h4>${t('comp.pt')}</h4><p>${t('tip.pt')}</p>${r && r.parts.pt ? `<table>${tot(t('youPay'), r.parts.pt)}</table>` : ''}${sources('pt')}`,
      std: r => `<h4>${t('bd.std')}</h4><p>${t('tip.std')}</p>${r ? `<p>${eur(r.tx.std)}</p>` : ''}${sources('slabs')}`,
      c80: r => `<h4>${t('bd.c80')}</h4><p>${t('tip.c80')}</p>${r ? `<p>${eur(r.tx.c80)}</p>` : ''}${sources('slabs')}`,
      ptDed: () => `<h4>${t('bd.ptDed')}</h4><p>${t('tip.ptDed')}</p>${sources('pt')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.tx.ti)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('rates', 'slabs')}`;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM', t('region.' + r.it.reg))}</p><table>${irTable(r.it)}</table>${sources('rates', 'slabs')}`;
      },
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
    const p = r.parts, min = r.regime === 'minister', u = r.u;
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (!min) {
      if (u.eps + u.epf > .5) L.push({ op: '+', k: 'er', label: t('bd.erPf'), v: u.eps + u.epf + u.edli + u.admin, tax: u.eps + u.epf + u.edli + u.admin, cls: 'sub' });
      if (u.esiEr > .5) L.push({ op: '+', k: 'er', label: t('bd.esiEr'), v: u.esiEr, tax: u.esiEr, cls: 'sub' });
    }
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (!min) {
      if (u.eePf > .5) L.push({ op: '−', k: 'ee', label: t('bd.eePf'), v: u.eePf, tax: u.eePf });
      if (u.esiEe > .5) L.push({ op: '−', k: 'ee', label: t('bd.esiEe'), v: u.esiEe, tax: u.esiEe });
      if (p.pt > .5) L.push({ op: '−', k: 'pt', label: t('comp.pt'), v: p.pt, tax: p.pt });
    }
    L.push({ op: '', k: 'std', label: t('bd.std'), v: r.tx.std, cls: 'sub' });
    if (r.tx.ptDed > .5) L.push({ op: '', k: 'ptDed', label: t('bd.ptDed'), v: r.tx.ptDed, cls: 'sub' });
    if (r.tx.c80 > .5) L.push({ op: '', k: 'c80', label: t('bd.c80'), v: r.tx.c80, cls: 'sub' });
    L.push(
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: r.tx.ti, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  const regOf = s => s.regime === 'minister' ? 'new' : s.region === 'old' ? 'old' : 'new';

  // The rebate cliff: new regime, every rupee above 12 lakh of taxable income is taxed until normal tax takes over.
  function trap(x) {
    const s = x.s, reg = regOf(s), env = x.env();
    const start = x.firstMonthly(m => compute(m * s.factor, s, env).it.base > 0 && compute(m * s.factor, s, env).it.total > 0, 1000, 2e6);
    if (!start) return { band: [0, 0], text: [x.fmtM(REF_WAGES[0].m, 100), null, reg] };
    if (reg === 'old') return { band: [start, start], text: [x.fmtM(start, 100), null, reg] };
    const end = x.firstMonthly(m => m > start && compute(m * s.factor, s, env).it.rebate <= 0, start, 2e6);
    return { band: [start, end || start], text: [x.fmtM(start, 100), x.fmtM(end || start, 100) + x.perUnit(), reg] };
  }

  // The 10% surcharge from 50 lakh of taxable income, phased in through marginal relief.
  function top(x) {
    const s = x.s, env = x.env();
    const at = x.firstMonthly(m => compute(m * s.factor, s, env).it.sc > 0, 1e5, 2e7);
    if (!at) return null;
    const end = x.firstMonthly(m => m > at && compute(m * s.factor, s, env).it.relief <= .5, at, 2e7);
    return { at, text: [x.fmtM(at, 1000) + x.perUnit(), x.fmtM(end || at, 1000) + x.perUnit(), regOf(s)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'INR', nextStep: 10000,
    regions: REGIONS, sizes: SIZES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 18,
    features: { cadre: true },
    communes: false,
    local: null,
    state: { salary: 80000, factor: 12, minRole: 'cabinet', cadre: true, commune: '', region: 'new', local: 0, vatRate: 18, size: 'cap' },
    urlFields: {
      ptax: ['cadre', 'bool'], taxregime: ['region', 'str', REGIONS], pf: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    minSalary: role => PAY[role],
    env: () => ({}),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: p => p.regime === 'mp' ? 'polNote.mp' : 'polNote.minister',
    polTipNote: p => p.role ? 'polTipNote.' + p.role : 'polNote.minister',
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'mp',
    refKeys: ['er', 'ee', 'ir', 'old', 'pt', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
