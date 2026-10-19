// Singapore salary rules for income year 2026 (YA2027). Loaded by ../index.html?country=sg.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  // Region row: citizens and PRs (from the 3rd year) pay CPF, foreigners on a work pass don't.
  const REGIONS = ['cit', 'for'];
  // Size row: CPF age band.
  const AGES = ['a55', 'a60', 'a65', 'a70', 'a99'];
  const MIN_ROLES = ['mp', 'min', 'pm'];

  const P = {
    cpf: {
      a55: { er: .17, ee: .20 }, a60: { er: .16, ee: .18 }, a65: { er: .125, ee: .125 },
      a70: { er: .09, ee: .075 }, a99: { er: .075, ee: .05 },
      ow: 8000, annual: 102000, floor: 50, eeFrom: 500, eeFull: 750,
    },
    sdl: { rate: .0025, min: 2, max: 11.25 },
    eir: { a55: 1000, a60: 6000, a65: 8000, a70: 8000, a99: 8000 },
    spouse: { relief: 2000, maxIncome: 8000 },
    qcr: 4000,
    reliefCap: 80000,
    brackets: [[20000, 0], [30000, .02], [40000, .035], [80000, .07], [120000, .115], [160000, .15], [200000, .18],
      [240000, .19], [280000, .195], [320000, .2], [500000, .22], [1000000, .23], [INF, .24]],
  };

  const REF_WAGES = [
    { key: 'med', m: 4936, year: 2025, color: '--w-med' },
    { key: 'avg', m: 5645, year: 2026, color: '--w-avg' },
  ];

  const PAY = { pres: 1568900, pm: 2200000, min: 1100000, mp: 192500 };
  const DOC_PSD = 'https://web.archive.org/web/20150507095558/http://www.psd.gov.sg/white-paper/white-paper';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: PAY.pm, hi: PAY.pm, url: 'https://en.wikipedia.org/wiki/Prime_Minister_of_Singapore' },
    { kind: 'stat', key: 'pres', icon: '🏰', regime: 'pres', lo: PAY.pres, hi: PAY.pres, url: 'https://en.wikipedia.org/wiki/President_of_Singapore' },
    { kind: 'stat', key: 'min', icon: '💼', regime: 'min', lo: PAY.min, hi: PAY.min, url: 'https://en.wikipedia.org/wiki/Cabinet_of_Singapore' },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: PAY.mp, hi: PAY.mp, url: 'https://en.wikipedia.org/wiki/Parliament_of_Singapore' },
  ];

  const SRC = {
    rates: 'https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individual-income-tax-rates',
    pwc: 'https://taxsummaries.pwc.com/singapore/individual/taxes-on-personal-income',
    reliefs: 'https://taxsummaries.pwc.com/singapore/individual/deductions',
    cpf: 'https://www.cpf.gov.sg/employer/employer-obligations/how-much-cpf-contributions-to-pay',
    other: 'https://taxsummaries.pwc.com/singapore/individual/other-taxes',
    wis: 'https://www.cpf.gov.sg/service/article/how-much-workfare-income-supplement-will-i-get',
    wages: 'https://stats.mom.gov.sg/Pages/Income-Summary-Table.aspx',
    psd: DOC_PSD,
  };

  const pos = v => Math.max(0, v || 0);

  // CPF on even monthly ordinary wages plus the bonus months as additional wages. Low-wage bands use the monthly wage.
  function cpf(G, factor, region, age) {
    const c = P.cpf, r = c[age] || c.a55;
    const m = G / factor, aw = G - 12 * m;
    const none = { m, ow: 0, aw: 0, er: 0, ee: 0, rate: r, phase: false };
    if (region !== 'cit' || m <= c.floor) return none;
    const owM = Math.min(m, c.ow);
    const awBase = Math.min(aw, Math.max(0, c.annual - 12 * owM));
    const er = r.er * (12 * owM + awBase);
    let eeM = 0;
    if (m > c.eeFull) eeM = r.ee * owM;
    else if (m > c.eeFrom) eeM = 3 * r.ee * (m - c.eeFrom);
    const ee = 12 * eeM + (m > c.eeFrom ? r.ee * awBase : 0);
    return { m, ow: 12 * owM, aw: awBase, er, ee, rate: r, phase: m > c.eeFrom && m <= c.eeFull, low: m <= c.eeFrom };
  }

  // Skills Development Levy each month; the bonus is paid in one extra month's wages.
  function sdl(G, factor) {
    if (G <= 0) return 0;
    const m = G / factor, s = P.sdl;
    const one = w => Math.min(s.max, Math.max(s.min, s.rate * w));
    return 11 * one(m) + one(G - 11 * m);
  }

  function bracketTax(ci) {
    let lo = 0, tax = 0;
    for (const [hi, r] of P.brackets) {
      if (ci > lo) tax += (Math.min(ci, hi) - lo) * r;
      lo = hi;
    }
    return tax;
  }

  // One person's return. kidsShare: number of children whose relief this person claims.
  function personTax(G, ee, age, spouseRelief, kidsShare) {
    const eir = Math.min(G, P.eir[age] || P.eir.a55);
    const sp = spouseRelief && G > 0 ? P.spouse.relief : 0;
    const qcr = G > 0 ? kidsShare * P.qcr : 0;
    const raw = eir + ee + sp + qcr;
    const reliefs = Math.min(raw, P.reliefCap);
    const ci = pos(G - reliefs);
    return { G, eir, cpfRel: ee, sp, qcr, raw, reliefs, capped: raw > P.reliefCap, ci, tax: bracketTax(ci) };
  }

  // Household tax; child relief goes to whichever parent it saves more for.
  function household(me, partner, kids) {
    if (!partner) return { me: personTax(me.G, me.ee, me.age, false, kids), them: null, total: null };
    let best = null;
    for (const toMe of [true, false]) {
      const a = personTax(me.G, me.ee, me.age, partner.G <= P.spouse.maxIncome, toMe ? kids : 0);
      const b = personTax(partner.G, partner.ee, partner.age, me.G <= P.spouse.maxIncome, toMe ? 0 : kids);
      const total = a.tax + b.tax;
      if (!best || total < best.total - 1e-9) best = { me: a, them: b, total, toMe };
    }
    return best;
  }

  const withVat = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // Office holders: income tax only. Their pay doesn't go through CPF.
  function computeOfficial(G, s, env, role = s.minRole) {
    const couple = s.household === 'joint' && env.partner;
    const hh = household({ G, ee: 0, age: 'a55' }, couple ? env.partner : null, s.children);
    const wo = couple ? household({ G: 0, ee: 0, age: 'a55' }, env.partner, s.children) : null;
    const ir = couple ? hh.total - wo.total : hh.me.tax;
    const net = G - ir;
    return { G, cost: G, net, regime: 'minister', u: { G, m: G / 12, role }, hh, wo, ir, cp: cpf(0, 12, 'for', 'a55'), sd: 0,
      parts: { er: 0, sdl: 0, ee: 0, ir, vat: withVat(s, net) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeOfficial(G, s, env);
    const age = AGES.includes(s.size) ? s.size : 'a55';
    const cp = cpf(G, s.factor, s.region, age);
    const sd = sdl(G, s.factor);
    const couple = s.household === 'joint' && env.partner;
    const hh = household({ G, ee: cp.ee, age }, couple ? env.partner : null, s.children);
    const wo = couple ? household({ G: 0, ee: 0, age }, env.partner, s.children) : null;
    const ir = couple ? hh.total - wo.total : hh.me.tax;
    const net = G - cp.ee - ir;
    return { G, cost: G + cp.er + sd, net, u: { G, m: G / s.factor, age }, cp, sd, hh, wo, ir,
      parts: { er: cp.er, sdl: sd, ee: cp.ee, ir, vat: withVat(s, net) } };
  }

  // The partner is taken as a citizen of the same status paid 12 even months, aged 55 or under.
  function env(s) {
    const G = pos(Number(s.partnerGross));
    const ee = cpf(G, 12, s.region, 'a55').ee;
    return { partner: { G, ee, age: 'a55' } };
  }

  const COMP_KEYS = ['er', 'sdl', 'ee', 'ir', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', sdl: 'var(--k-vm)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'sdl', 'ee', 'ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'sdl', 'ee', 'ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const pc = v => vr(v * 100) + '%';
    const reliefRows = p => `${row(t('bd.eir'), p.eir)}${p.cpfRel ? row(t('bd.cpfRel'), p.cpfRel) : ''}${p.sp ? row(t('bd.spouse'), p.sp) : ''}${p.qcr ? row(t('bd.qcr'), p.qcr) : ''}${p.capped ? row(t('tip.cap'), P.reliefCap) : ''}`;
    const irTable = r => {
      const me = r.hh.me;
      let h = `<table>${row(t('bd.gross'), me.G)}${reliefRows(me)}${row(t('bd.taxable'), me.ci)}${tot(t('tip.yourReturn'), me.tax)}`;
      if (r.wo) h += row(t('tip.partnerWith'), r.hh.them.tax) + row(t('tip.partnerWithout'), r.wo.total) + tot(t('tip.yourShare'), r.ir);
      return h + '</table>';
    };
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('psd')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      ee: () => `<h4>${t('comp.ee')}</h4><p>${t('tip.minEe')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEe')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('psd')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>${sources('cpf')}`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.f14')}</p>${sources('cpf')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('reliefs')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('cpf', 'pwc')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('cpf', 'reliefs')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.u.m != null ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${row(t('comp.sdl'), r.parts.sdl)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const c = r && r.cp;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${c && c.er ? `<table>
          ${row(`${pc(c.rate.er)} × ${eur(c.ow)}`, c.rate.er * c.ow)}
          ${c.aw ? row(`${pc(c.rate.er)} × ${eur(c.aw)} ${t('tip.awShort')}`, c.rate.er * c.aw) : ''}
          ${tot(t('total'), c.er)}</table>` : `<p>${t(s.region === 'for' ? 'tip.noCpfFor' : 'tip.noCpfLow')}</p>`}${sources('cpf', 'other')}`;
      },
      sdl: r => `<h4>${t('comp.sdl')}</h4><p>${t('tip.sdl')}</p>${r && r.sd ? `<table>${tot(t('total'), r.sd)}</table>` : ''}${sources('other')}`,
      ee: r => {
        const c = r && r.cp;
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${c && c.ee ? `<table>
          ${c.phase ? row(t('tip.phase', pc(3 * c.rate.ee), eur(P.cpf.eeFrom)), c.ee) : row(`${pc(c.rate.ee)} × ${eur(c.ow + c.aw)}`, c.ee)}
          ${tot(t('youPay'), c.ee)}</table>` : `<p>${t(s.region === 'for' ? 'tip.noCpfFor' : 'tip.noCpfLow')}</p>`}${sources('cpf')}`;
      },
      eir: () => `<h4>${t('bd.eir')}</h4><p>${t('tip.eir')}</p>${sources('reliefs')}`,
      cpfRel: () => `<h4>${t('bd.cpfRel')}</h4><p>${t('tip.cpfRel')}</p>${sources('reliefs')}`,
      spouse: () => `<h4>${t('bd.spouse')}</h4><p>${t('tip.spouse')}</p>${sources('reliefs')}`,
      qcr: () => `<h4>${t('bd.qcr')}</h4><p>${t('tip.qcr')}</p>${sources('reliefs')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable')}</p>${r ? `<table>${row(t('bd.gross'), r.hh.me.G)}${reliefRows(r.hh.me)}${tot(t('bd.taxable'), r.hh.me.ci)}</table>` : ''}${sources('reliefs')}`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? irTable(r) : ''}${sources('rates', 'pwc')}`,
      partner: r => `<h4>${t('bd.partner')}</h4><p>${t('tip.partner')}</p>${r && r.wo ? `<table>${row(t('tip.partnerWith'), r.hh.them.tax)}${row(t('tip.partnerWithout'), r.wo.total)}</table>` : ''}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('other')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, min = r.regime === 'minister', me = r.hh.me;
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (p.er > .5) L.push({ op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    if (p.sdl > .5) L.push({ op: '+', k: 'sdl', label: t('comp.sdl'), v: p.sdl, tax: p.sdl, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (p.ee > .5) L.push({ op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee });
    L.push({ op: '', k: 'eir', label: t('bd.eir'), v: me.eir, cls: 'sub' });
    if (me.cpfRel > .5) L.push({ op: '', k: 'cpfRel', label: t('bd.cpfRel'), v: me.cpfRel, cls: 'sub' });
    if (me.sp) L.push({ op: '', k: 'spouse', label: t('bd.spouse'), v: me.sp, cls: 'sub' });
    if (me.qcr) L.push({ op: '', k: 'qcr', label: t('bd.qcr'), v: me.qcr, cls: 'sub' });
    L.push({ op: '', k: 'taxable', label: t('bd.taxable'), v: me.ci, cls: 'sub' });
    if (r.wo) {
      const dp = r.hh.them.tax - r.wo.total;
      L.push({ op: '−', k: 'ir', label: t('tip.yourReturn'), v: me.tax, tax: me.tax });
      if (Math.abs(dp) > .5) L.push({ op: dp < 0 ? '+' : '−', k: 'partner', label: t('bd.partner'), v: Math.abs(dp), tax: dp });
    } else L.push({ op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Employee CPF phases in between 500 and 750 a month at three times the normal rate; no tax below 20,000 chargeable.
  function trap(x) {
    const s = x.s;
    const free = x.firstMonthly(m => compute(m * s.factor, s, x.env()).ir > 0, 500, 20000);
    if (s.region === 'cit') {
      const r = (P.cpf[s.size] || P.cpf.a55).ee;
      return { band: [P.cpf.eeFrom * 12 / s.factor, P.cpf.eeFull * 12 / s.factor],
        text: [x.fmtM(P.cpf.eeFull * 12 / s.factor, 10), x.fmtM(free || 0, 10), 1, pct(3 * r, 1), x.fmtM(P.cpf.eeFrom * 12 / s.factor, 10)] };
    }
    return { band: [free || 0, free || 0], text: [x.fmtM(free || 0, 10), x.fmtM(free || 0, 10), 0, '', ''] };
  }

  // Citizens: CPF stops at the 8,000 ordinary wage ceiling. Foreigners: the 24% band from 1 million chargeable.
  function top(x) {
    const s = x.s;
    if (s.region === 'cit') {
      const at = P.cpf.ow * 12 / s.factor;
      return { at, text: [x.fmtM(at, 50) + x.perUnit(), 'cpf'] };
    }
    const at = x.firstMonthly(m => compute(m * s.factor, s, x.env()).hh.me.ci > 1e6, 50000, 200000);
    return at ? { at, text: [x.fmtM(at, 50) + x.perUnit(), 'top'] } : null;
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'SGD', nextStep: 150,
    regions: REGIONS, sizes: AGES, minRoles: MIN_ROLES, factors: [12, 13, 14], factorDigits: 0, vatStandard: 9,
    features: {},
    communes: false,
    local: null,
    state: { salary: 5000, factor: 12, minRole: 'min', commune: '', region: 'cit', local: 0, vatRate: 9, size: 'a55' },
    urlFields: { status: ['region', 'str', REGIONS], age: ['size', 'str', AGES], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => PAY[role],
    env,
    compute,
    own: (p, plain, en) => ({ net: computeOfficial(p.lo, plain, en || env(plain), p.regime).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: () => 'polNote.official',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'psd',
    refKeys: ['er', 'ee', 'ir', 'reliefs', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
