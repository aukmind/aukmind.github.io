// US salary rules for tax year 2026 (federal law after the One Big Beautiful Bill Act). Loaded by ../index.html?country=us.
// State and local income taxes come from communes.js (rebuilt by update_communes.py us).
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['rep', 'sec', 'vp', 'pres'];

  const P = {
    sd: { s: 16100, m: 32200, h: 24150 },
    br: {
      s: [[12400, .10], [50400, .12], [105700, .22], [201775, .24], [256225, .32], [640600, .35], [INF, .37]],
      m: [[24800, .10], [100800, .12], [211400, .22], [403550, .24], [512450, .32], [768700, .35], [INF, .37]],
      h: [[17700, .10], [67450, .12], [105700, .22], [201750, .24], [256200, .32], [640600, .35], [INF, .37]],
    },
    // Reference table: single filer, on gross pay with the standard deduction.
    brackets: [[16100, 0], [28500, .10], [66500, .12], [121800, .22], [217875, .24], [272325, .32], [656700, .35], [INF, .37]],
    ctc: { amt: 2200, ref: 1700, floor: 2500, rate: .15, po: { s: 200000, h: 200000, m: 400000 }, cut: .05 },
    // Earned income amount, maximum credit, phase-out start and end (other filers, then married filing jointly), by children 0-3.
    eitc: { ei: [8680, 13020, 18290, 18290], max: [664, 4427, 7316, 8231],
      th: [10860, 23890, 23890, 23890], end: [19540, 51593, 58629, 62974],
      thM: [18140, 31160, 31160, 31160], endM: [26820, 58863, 65899, 70244] },
    ss: { rate: .062, base: 184500 }, med: .0145, addl: { rate: .009, s: 200000, h: 200000, m: 250000 },
    futa: { rate: .006, base: 7000 },
    // FERS-FRAE: 4.4% from the member, agency rate from the first pay period of October 2026.
    fers: { ee: .044, er: .159 },
    // Employee payroll programs by state: [key, rate, wage cap, yearly maximum].
    payroll: {
      CA: [['sdi', .013, null, null]],
      NY: [['dbl', .005, null, 31.2], ['pfl', .00432, null, 411.91]],
      NJ: [['uiw', .00425, 44800, null], ['tdi', .0019, 171100, null], ['fli', .0023, 171100, null]],
      MA: [['pfml', .0046, 184500, null]],
      WA: [['pfml', .00807, 184500, null], ['cares', .0058, null, null]],
      OR: [['pfml', .006, 132900, null]],
      CO: [['pfml', .0044, 184500, null]],
      CT: [['pfml', .005, 184500, null]],
      DE: [['pfml', .004, 184500, null]],
      MN: [['pfml', .0044, 184500, null]],
      ME: [['pfml', .005, 184500, null]],
      RI: [['tdi', .012, 89200, null]],
      PA: [['uiw', .0007, null, null]],
      AK: [['uiw', .005, 51700, null]],
    },
  };
  const MIN_WAGE = 7.25 * 40 * 52 / 12;

  // Monthly gross: federal minimum wage at 40 h/week, BLS median full-time weekly earnings (Q2 2026), OEWS mean wage (May 2025).
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 1251 * 52 / 12, year: 2026, color: '--w-med' },
    { key: 'avg', m: 69770 / 12, year: 2025, color: '--w-avg' },
  ];

  // Payable rates: the Vice President and Cabinet stay on the frozen 2024 rates (Level I is $253,100 on paper).
  const GOV = { rep: 174000, sec: 246400, vp: 284600, pres: 400000 };
  const DOC_EX = 'https://piv.opm.gov/policy-data-oversight/pay-leave/salaries-wages/salary-tables/26Tables/exec/pdf/EX.pdf';
  const DOC_CRS = 'https://www.congress.gov/crs-product/97-1011';
  const DOC_PRES = 'https://www.law.cornell.edu/uscode/text/3/102';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '⭐', regime: 'pres', lo: GOV.pres, hi: GOV.pres, url: DOC_PRES },
    { kind: 'stat', key: 'vp', icon: '🎖️', regime: 'vp', lo: GOV.vp, hi: GOV.vp, url: DOC_EX },
    { kind: 'stat', key: 'sec', icon: '💼', regime: 'sec', lo: GOV.sec, hi: 253100, url: DOC_EX },
    { kind: 'stat', key: 'rep', icon: '🏛️', regime: 'rep', lo: GOV.rep, hi: GOV.rep, url: DOC_CRS },
    { kind: 'gov', name: 'Kevin Warsh', role: 'fed', lo: 246400, hi: 253100, url: DOC_EX },
    { kind: 'corp', name: 'David Steiner', role: 'usps', lo: 346780, hi: 346780, url: 'https://about.usps.com/what/financials/periodic-reports-8k/05-12-2025.pdf' },
  ];

  const SRC = {
    rp: 'https://www.irs.gov/pub/irs-drop/rp-25-32.pdf',
    irs2026: 'https://www.irs.gov/newsroom/irs-releases-tax-inflation-adjustments-for-tax-year-2026-including-amendments-from-the-one-big-beautiful-bill',
    ctc: 'https://www.irs.gov/credits-deductions/individuals/child-tax-credit',
    eitc: 'https://www.irs.gov/credits-deductions/individuals/earned-income-tax-credit-eitc',
    fica: 'https://www.ssa.gov/oact/cola/cbb.html',
    addl: 'https://www.irs.gov/taxtopics/tc560',
    futa: 'https://www.irs.gov/individuals/international-taxpayers/federal-unemployment-tax',
    states: 'https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/',
    sales: 'https://taxfoundation.org/data/all/state/sales-tax-rates/',
    local: 'https://taxfoundation.org/research/all/state/local-income-taxes-2023/',
    md: 'https://www.marylandcomptroller.gov/content/dam/mdcomp/tax/legal-publications/alerts/tax-alert-changes-to-standard-and-itemized-deductions-and-to-state-and-local-income-tax-rates-from-the-2025-legislative-session.pdf',
    sdi: 'https://edd.ca.gov/en/payroll_taxes/rates_and_withholding/',
    nypfl: 'https://paidfamilyleave.ny.gov/2026',
    nj: 'https://www.nj.gov/labor/ea/employer-services/rate-info/',
    minWage: 'https://www.dol.gov/agencies/whd/minimum-wage',
    median: 'https://www.bls.gov/news.release/archives/wkyeng_07212026.htm',
    oews: 'https://www.bls.gov/news.release/archives/ocwage_05152026.htm',
    ex: DOC_EX,
    crs: DOC_CRS,
    pres: DOC_PRES,
    fers: 'https://www.opm.gov/retirement-center/publications-forms/benefits-administration-letters/2026/26-307.pdf',
  };

  // Filled by parseCommunes: state rules by postal code, local taxes by id, average sales tax by state.
  let STATES = {}, LOCAL = {}, SALES = {};

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const sum = sl => sl.reduce((tot, b) => tot + b.amt, 0);
  // State tables list the bottom of each band.
  const fromBottoms = b => b.map(([lo, r], i) => [i + 1 < b.length ? b[i + 1][0] : INF, r]);
  const statusOf = (s, couple) => couple ? 'm' : s.children > 0 ? 'h' : 's';

  function eitc(earned, kids, status) {
    const k = Math.min(3, kids), e = P.eitc, mar = status === 'm';
    const th = (mar ? e.thM : e.th)[k], end = (mar ? e.endM : e.end)[k];
    const phaseIn = Math.min(e.max[k], earned * e.max[k] / e.ei[k]);
    const cut = Math.max(0, earned - th) * e.max[k] / (end - th);
    return { credit: Math.max(0, phaseIn - cut), k, th, end, max: e.max[k], inRate: e.max[k] / e.ei[k], outRate: e.max[k] / (end - th) };
  }

  function federal(agi, status, kids, pa) {
    const sd = P.sd[status], taxable = Math.max(0, agi - sd);
    const sl = slices(taxable, P.br[status]), gross = sum(sl);
    const c = P.ctc, ctcMax = Math.max(0, kids * c.amt - c.cut * Math.max(0, agi - c.po[status]));
    const nonref = Math.min(gross, ctcMax);
    const actc = Math.min(ctcMax - nonref, kids * c.ref, c.rate * Math.max(0, agi - c.floor));
    const ei = pa ? eitc(agi, kids, status) : null;
    const addl = P.addl.rate * Math.max(0, agi - P.addl[status]);
    return { agi, sd, taxable, slices: sl, gross, nonref, ctcMax, actc, eitc: ei ? ei.credit : 0, ei, addl, tax: gross - nonref, refund: actc + (ei ? ei.credit : 0) };
  }

  // Linear phase-out from a to b, down to the floor f; a == b is a cliff.
  const phase = (v, p, i, agi) => {
    const a = p.a[i], b = p.b[i], f = p.f[i];
    if (agi <= a) return v;
    if (agi >= b) return Math.min(v, f);
    return f + (v - f) * (b - agi) / (b - a);
  };

  function stateTax(code, status, agi, kids, fedTax) {
    const st = STATES[code];
    if (!st || st.none) return { code, none: true, tax: 0, taxable: 0, slices: [], sd: 0, ex: 0, cr: 0, fedDed: 0 };
    const mar = status === 'm', i = mar ? 1 : 0;
    let sd = st.sd[i], exP = st.ex[i], exD = st.ex[2] * kids;
    let cr = st.cr ? st.cr[i] + st.cr[2] * kids : 0;
    if (st.exSteps) {
      const per = st.exSteps.find(([hi]) => hi == null || agi <= hi)[1];
      exP = per * (mar ? 2 : 1); exD = per * kids;
    }
    for (const p of st.po || []) {
      if (p.k === 'sd') sd = phase(sd, p, i, agi);
      if (p.k === 'ex') { exP = phase(exP, p, i, agi); exD = phase(exD, p, i, agi); }
      if (p.k === 'cr') cr = phase(cr, p, i, agi);
    }
    if (st.ut) {
      const u = st.ut;
      cr = Math.max(0, u.base[i] + u.rate * u.dep * kids - u.po * Math.max(0, agi - u.a[i]));
    }
    const fedDed = st.fedDed ? fedTax : 0;
    const taxable = Math.max(0, agi - sd - exP - exD - fedDed);
    const br = fromBottoms(mar && st.m ? st.m : st.s);
    const sl = slices(taxable, br), gross = sum(sl);
    return { code, taxable, slices: sl, gross, sd, ex: exP + exD, cr: Math.min(gross, cr), fedDed, tax: Math.max(0, gross - cr) };
  }

  function localTax(id, code, ctx) {
    const c = LOCAL[id];
    if (!c || c.region !== code) return { tax: 0, none: true };
    const L = c.spec, mar = ctx.status === 'm';
    const br = L.b ? fromBottoms(mar && L.bm ? L.bm : ctx.status === 'h' && L.bh ? L.bh : L.b) : null;
    let base;
    if (L.base === 'wage') base = ctx.wages;
    else if (L.base === 'agi') base = Math.max(0, ctx.agi - L.ex * ((mar ? 2 : 1) + ctx.kids));
    else if (L.base === 'stax') base = ctx.stax;
    else base = ctx.sti;
    const tax = br ? sum(slices(base, br)) : base * L.r;
    return { id, base, tax, r: L.r, br };
  }

  function payroll(G, code) {
    const lines = (P.payroll[code] || []).map(([key, rate, cap, max]) => {
      let v = rate * (cap ? Math.min(G, cap) : G);
      if (max != null) v = Math.min(v, max);
      return { key, rate, cap, max, v };
    });
    return { lines, total: lines.reduce((tot, l) => tot + l.v, 0) };
  }

  const fica = G => P.ss.rate * Math.min(G, P.ss.base) + P.med * G;

  // Every household tax for given wages; your share is the household with your pay minus without it.
  function household(wages, s, couple) {
    const agi = wages.reduce((a, b) => a + b, 0), status = statusOf(s, couple), kids = s.children;
    const fed = federal(agi, status, kids, !!s.pa && s.regime !== 'minister');
    const st = stateTax(s.region, status, agi, kids, fed.tax);
    const loc = localTax(s.commune, s.region, { wages: agi, agi, status, kids, sti: st.taxable, stax: st.tax });
    return { agi, status, fed, st, loc };
  }

  function incomeTaxes(G, s, env) {
    const couple = s.household === 'joint', pG = couple ? env.partner : 0;
    const hh = household(couple ? [G, pG] : [G], s, couple);
    const wo = household(couple ? [0, pG] : [0], s, couple);
    return {
      hh, wo,
      fed: hh.fed.tax - wo.fed.tax,
      cr: -(hh.fed.refund - wo.fed.refund),
      addl: hh.fed.addl - wo.fed.addl,
      st: hh.st.tax - wo.st.tax,
      loc: hh.loc.tax - wo.loc.tax,
    };
  }

  function finish(G, s, r) {
    const vatShare = s.vatRate / (100 + s.vatRate);
    r.vatShare = vatShare;
    r.parts.vat = s.vat ? Math.max(0, r.net) * vatShare : 0;
    return r;
  }

  // Elected officials and Cabinet: wages with FICA; Members and Secretaries also pay into FERS (after tax).
  function computeMinister(G, s, env, role = s.minRole) {
    const fers = role === 'rep' || role === 'sec';
    const tax = incomeTaxes(G, { ...s, regime: 'minister' }, env);
    const sp = payroll(G, s.region);
    const ee = fica(G), pen = fers ? P.fers.ee * G : 0;
    const erFica = fica(G), erPen = fers ? P.fers.er * G : 0;
    const net = G - ee - tax.addl - pen - sp.total - tax.fed - tax.cr - tax.st - tax.loc;
    return finish(G, s, { G, cost: G + erFica + erPen, net, tax, sp, ee, pen, erFica, erPen, role, regime: 'minister',
      parts: { er: erFica + erPen, ee: ee + tax.addl + pen, sp: sp.total, fed: tax.fed, cr: tax.cr, st: tax.st, loc: tax.loc } });
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const tax = incomeTaxes(G, s, env);
    const sp = payroll(G, s.region);
    const ee = fica(G);
    const erFica = fica(G), futa = P.futa.rate * Math.min(G, P.futa.base);
    const net = G - ee - tax.addl - sp.total - tax.fed - tax.cr - tax.st - tax.loc;
    return finish(G, s, { G, m: G / s.factor, cost: G + erFica + futa, net, tax, sp, ee, pen: 0, erFica, futa,
      parts: { er: erFica + futa, ee: ee + tax.addl, sp: sp.total, fed: tax.fed, cr: tax.cr, st: tax.st, loc: tax.loc } });
  }

  const COMP_KEYS = ['er', 'ee', 'sp', 'fed', 'cr', 'st', 'loc', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', sp: 'var(--k-vm)', fed: 'var(--k-fed)', cr: 'var(--k-pa)', st: 'var(--k-reg)', loc: 'var(--k-com)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: COMP_KEYS, base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'sp', 'fed', 'cr', 'st', 'loc'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'sp', 'fed', 'cr', 'st', 'loc'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  const rate = v => num(v, Math.min(3, (String(v).split('.')[1] || '').length)) + '%';
  const stName = code => code ? t('state.' + code) : t('noState');

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const brRows = sl => sl.filter(b => b.r > 0).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, b.r * 1e4 % 100 ? 2 : 0)}`, b.amt)).join('');
    const yours = (h, w, f, label) => s.household === 'joint'
      ? `${tot(t('tip.hhWith'), f(h))}${row('− ' + t('tip.hhWithout'), -f(w))}${tot(label || t('tip.yours'), f(h) - f(w))}` : '';
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('ex', 'crs', 'pres')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr', pct(P.fers.er, 1))}</p>${r ? `<table>${row(t('tip.erFica'), r.erFica)}${row(t('tip.erPen'), r.erPen)}${tot(t('total'), r.parts.er)}</table>` : ''}${sources('fica', 'fers')}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe', pct(P.fers.ee, 1))}</p>${r ? `<table>${row(t('tip.eeFica'), r.ee)}${r.tax.addl ? row(t('bd.addl'), r.tax.addl) : ''}${row(t('tip.eePen'), r.pen)}${tot(t('youPay'), r.parts.ee)}</table>` : ''}${sources('fica', 'fers')}`,
      cr: () => `<h4>${t('comp.cr')}</h4><p>${t('tip.minCr')}</p>${sources('ctc')}`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('ex', 'crs', 'pres', 'fers')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('irs2026')}`,
      paToggle: () => `<h4>${t('comp.eitc')}</h4><p>${t('tip.paToggle')}</p>${sources('eitc')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.m ? t('tip.grossCalc', eur2(r.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.ss.base))}</p>${r && r.futa != null ? `<table>
          ${row(`6.2% × ${eur(Math.min(r.G, P.ss.base))}`, P.ss.rate * Math.min(r.G, P.ss.base))}
          ${row(`1.45% × ${eur(r.G)}`, P.med * r.G)}
          ${row(`${t('bd.futa')} 0.6% × ${eur(Math.min(r.G, P.futa.base))}`, r.futa)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}<p class="m">${t('tip.suta')}</p>${sources('fica', 'futa')}`,
      futa: () => `<h4>${t('bd.futa')}</h4><p>${t('tip.futa')}</p><p class="m">${t('tip.suta')}</p>${sources('futa')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.ss.base))}</p>${r ? `<table>
          ${row(`6.2% × ${eur(Math.min(r.G, P.ss.base))}`, P.ss.rate * Math.min(r.G, P.ss.base))}
          ${row(`1.45% × ${eur(r.G)}`, P.med * r.G)}
          ${r.tax.addl ? row(t('bd.addl'), r.tax.addl) : ''}
          ${tot(t('youPay'), r.parts.ee)}</table>` : ''}${sources('fica', 'addl')}`,
      addl: r => `<h4>${t('bd.addl')}</h4><p>${t('tip.addl')}</p>${r ? `<p>${eur(r.tax.addl)}</p>` : ''}${sources('addl')}`,
      sp: r => {
        const L = r ? r.sp.lines : [];
        return `<h4>${t('comp.sp')}</h4><p>${t('tip.sp')}</p>${L.length ? `<table>${L.map(l => row(`${t('sp.' + l.key)} ${pct(l.rate, 3)}${l.cap ? ' ≤ ' + eur(l.cap) : ''}`, l.v)).join('')}${tot(t('youPay'), r.sp.total)}</table>` : ''}${sources('sdi', 'nypfl', 'nj')}`;
      },
      sd: r => `<h4>${t('bd.sd')}</h4><p>${t('tip.sd', eur(P.sd.s), eur(P.sd.m), eur(P.sd.h))}</p>${r ? `<p>${t('tip.status.' + r.tax.hh.status)}: <b>${eur(r.tax.hh.fed.sd)}</b></p>` : ''}${sources('rp')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable')}</p>${r ? `<p>${eur(r.tax.hh.agi)} − ${eur(r.tax.hh.fed.sd)} = <b>${eur(r.tax.hh.fed.taxable)}</b></p>` : ''}`,
      fed: r => {
        if (!r) return `<h4>${t('comp.fed')}</h4><p>${t('tip.fedShort')}</p>${sources('rp')}`;
        const f = r.tax.hh.fed;
        return `<h4>${t('comp.fed')}</h4><p class="m">${t('tip.fedM', t('tip.status.' + r.tax.hh.status))}</p><table>
          ${row(t('bd.taxable'), f.taxable)}${brRows(f.slices)}
          ${f.nonref ? row('− ' + t('tip.ctcNonref'), -f.nonref) : ''}
          ${tot(t('tip.fedTax'), f.tax)}
          ${yours(r.tax.hh, r.tax.wo, h => h.fed.tax)}</table>${sources('rp', 'ctc')}`;
      },
      cr: r => {
        const f = r && r.tax.hh.fed;
        return `<h4>${t('comp.cr')}</h4><p>${t('tip.cr')}</p>${f ? `<table>
          ${row(t('tip.actc'), f.actc)}
          ${row(t('comp.eitc'), f.eitc)}
          ${tot(t('tip.refund'), f.refund)}
          ${yours(r.tax.hh, r.tax.wo, h => h.fed.refund)}</table>` : ''}<p class="m">${t('tip.crM')}</p>${sources('ctc', 'eitc')}`;
      },
      st: r => {
        if (!r) return `<h4>${t('comp.st')}</h4><p>${t('tip.stShort')}</p>${sources('states')}`;
        const st = r.tax.hh.st;
        if (st.none) return `<h4>${t('comp.st')}</h4><p>${t('tip.stNone', stName(s.region))}</p>${sources('states')}`;
        return `<h4>${t('comp.st')} · ${esc(stName(s.region))}</h4><table>
          ${row(t('tip.agi'), r.tax.hh.agi)}
          ${st.sd ? row('− ' + t('tip.stSd'), -st.sd) : ''}
          ${st.ex ? row('− ' + t('tip.stEx'), -st.ex) : ''}
          ${st.fedDed ? row('− ' + t('tip.stFed'), -st.fedDed) : ''}
          ${tot(t('tip.stTaxable'), st.taxable)}${brRows(st.slices)}
          ${st.cr ? row('− ' + t('tip.stCr'), -st.cr) : ''}
          ${tot(t('tip.stTax'), st.tax)}
          ${yours(r.tax.hh, r.tax.wo, h => h.st.tax)}</table><p class="m">${t('tip.stM')}</p>${sources('states')}`;
      },
      loc: r => {
        const c = x.commune();
        const L = r && r.tax.hh.loc;
        return `<h4>${t('comp.loc')}${c && c.city ? ' · ' + esc(c.name) : ''}</h4><p>${t('tip.loc')}</p>${L && !L.none ? `<table>
          ${row(t('loc.base.' + c.spec.base), L.base)}
          ${tot(L.r != null ? `× ${pct(L.r, 3)}` : t('tip.locBr'), L.tax)}
          ${yours(r.tax.hh, r.tax.wo, h => h.loc.tax)}</table>` : ''}${sources('local', 'md')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('sales')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const p = r.parts, min = r.regime === 'minister', f = r.tax.hh.fed, c = x.commune();
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    L.push({ op: '+', k: 'er', label: t('tip.erFica'), v: r.erFica, tax: r.erFica, cls: 'sub' });
    if (min) { if (r.erPen) L.push({ op: '+', k: 'er', label: t('tip.erPen'), v: r.erPen, tax: r.erPen, cls: 'sub' }); }
    else L.push({ op: '+', k: 'futa', label: t('bd.futa'), v: r.futa, tax: r.futa, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('tip.eeFica'), v: r.ee, tax: r.ee },
    );
    if (r.tax.addl > .5) L.push({ op: '−', k: 'addl', label: t('bd.addl'), v: r.tax.addl, tax: r.tax.addl });
    if (r.pen) L.push({ op: '−', k: 'ee', label: t('tip.eePen'), v: r.pen, tax: r.pen });
    if (p.sp > .5) L.push({ op: '−', k: 'sp', label: t('comp.sp'), v: p.sp, tax: p.sp });
    L.push(
      { op: '', k: 'sd', label: t('bd.sd'), v: f.sd, cls: 'sub' },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: f.taxable, cls: 'sub' },
      { op: '−', k: 'fed', label: t('comp.fed'), v: p.fed, tax: p.fed },
    );
    if (Math.abs(p.cr) > .5) L.push({ op: p.cr < 0 ? '+' : '−', k: 'cr', label: t(p.cr < 0 ? 'comp.cr' : 'crLostShort'), v: Math.abs(p.cr), tax: p.cr });
    L.push({ op: '−', k: 'st', label: `${t('comp.st')} (${stName(x.s.region)})`, v: p.st, tax: p.st });
    if (Math.abs(p.loc) > .5) L.push({ op: '−', k: 'loc', label: `${t('comp.loc')}${c && c.city ? ' (' + c.name + ')' : ''}`, v: p.loc, tax: p.loc });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-wage zone: where the Earned Income Tax Credit is withdrawn.
  function trap(x) {
    const s = x.s, lo = MIN_WAGE * 12 / s.factor;
    const couple = s.household === 'joint', status = statusOf(s, couple);
    if (!s.pa || s.regime === 'minister') return { band: [lo, lo], text: [x.fmtM(lo, 10), null, null, null] };
    const e = eitc(0, s.children, status), pG = couple ? x.env().partner : 0;
    const m0 = Math.max(0, e.th - pG) / s.factor, m1 = Math.max(0, e.end - pG) / s.factor;
    if (m1 <= 0) return { band: [lo, lo], text: [x.fmtM(lo, 10), null, null, null] };
    return { band: [m0, m1], text: [x.fmtM(m0, 10), x.fmtM(m1, 10) + x.perUnit(), pct(e.outRate, 2), eur(e.max)] };
  }

  // Above the Social Security wage base the 6.2% employee and employer tax stops.
  function top(x) {
    const s = x.s, at = P.ss.base / s.factor;
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), eur(P.addl[statusOf(s, s.household === 'joint')])] };
  }

  return {
    GAPS: ['statePayroll', 'hohState', 'stateRules', 'localTax', 'salesTax', 'futa', 'minWage', 'wages', 'payFreeze', 'fers', 'fedChair', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'USD', nextStep: 100,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0,
    vatStandard: region => SALES[region] ?? 7.5,
    features: { pa: true },
    local: null,
    state: { salary: 5000, factor: 12, minRole: 'rep', pa: true, commune: 'CA', region: '', local: 0, vatRate: 7.5, size: '' },
    urlFields: {
      eitc: ['pa', 'bool'], state: ['commune', 'str'], role: ['minRole', 'str', MIN_ROLES],
    },
    parseCommunes: list => {
      STATES = {}; LOCAL = {}; SALES = {};
      return list.map(([name, code, id, top, sales, spec]) => {
        const city = id !== code;
        if (city) LOCAL[id] = { region: code, spec };
        else { STATES[code] = spec; SALES[code] = sales; }
        return { name, rate: top, region: code, sub: city ? code : '', id, city, spec };
      });
    },
    communeLabel: c => c.city ? `${c.name}, ${c.region}` : c.name,
    communeTag: c => c.city ? '+' + rate(c.rate) : c.rate ? rate(c.rate) : t('noIncomeTax'),
    communeHint: c => c.city ? t('cityHint', t('state.' + c.region)) : c.rate ? t('stateHint', rate(c.rate), rate(SALES[c.region])) : t('stateHintNone', rate(SALES[c.region])),
    minSalary: role => GOV[role],
    env: s => ({ partner: Math.max(0, Number(s.partnerGross) || 0) }),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: { cr: 'crLost' }, recvLabels: { cr: 'crReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'ex',
    refKeys: ['er', 'ee', 'fed', 'cr', 'st', 'loc', 'sp', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
