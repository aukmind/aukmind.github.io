// Hong Kong salary rules for the year of assessment 2026/27 (1 April 2026 to 31 March 2027). Loaded by ../index.html?country=hk.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['legco', 'dsec', 'cs', 'ce'];

  const P = {
    bands: [[50000, .02], [100000, .06], [150000, .10], [200000, .14], [INF, .17]],
    std: [[5000000, .15], [INF, .16]],
    allow: { basic: 145000, married: 290000, single: 145000, child: 140000 },
    mpf: { rate: .05, min: 7100, max: 30000, ded: 18000 },
    // Working Family Allowance, monthly. Limits by household size (1 to 6+) at full, 3/4 and half rate.
    wfa: {
      limits: [[12500, 15000, 17500], [16800, 20100, 23500], [21000, 25200, 29400], [26500, 31700, 37000], [26500, 31700, 37000], [27600, 33100, 38600]],
      tier: { medium: 1380, higher: 1610 }, child: 1610, scale: [1, .75, .5],
    },
    brackets: [[50000, .02], [100000, .06], [150000, .10], [200000, .14], [INF, .17]],
  };
  const MIN_WAGE = 43.1 * 44 * 52 / 12;

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 22200, year: 2025, color: '--w-med' },
  ];

  const DOC_PAO = 'https://www.thestandard.com.hk/breaking-news/article/223687/Top-officials-annual-salaries-add-up-to-over-HK180-million';
  const DOC_LEGCO = 'https://www.legco.gov.hk/general/english/sec/corg_ser/admin_mirr.pdf';
  const PAY = { ce: 469495 * 12, cs: 417330 * 12, fs: 403215 * 12, sj: 389580 * 12, dsec: 382990 * 12, pres: 221060 * 12, legco: 110530 * 12 };
  const POLITICIANS = [
    { kind: 'stat', key: 'ce', icon: '⭐', regime: 'ce', lo: PAY.ce, hi: PAY.ce, url: DOC_PAO },
    { kind: 'stat', key: 'cs', icon: '💼', regime: 'cs', lo: PAY.cs, hi: PAY.cs, url: DOC_PAO },
    { kind: 'stat', key: 'fs', icon: '💰', regime: 'fs', lo: PAY.fs, hi: PAY.fs, url: DOC_PAO },
    { kind: 'stat', key: 'sj', icon: '⚖️', regime: 'sj', lo: PAY.sj, hi: PAY.sj, url: DOC_PAO },
    { kind: 'stat', key: 'dsec', icon: '📎', regime: 'dsec', lo: PAY.dsec, hi: PAY.dsec, url: DOC_PAO },
    { kind: 'stat', key: 'pres', icon: '🔔', regime: 'pres', lo: PAY.pres, hi: PAY.pres, url: DOC_LEGCO },
    { kind: 'stat', key: 'legco', icon: '🏛️', regime: 'legco', lo: PAY.legco, hi: PAY.legco, url: DOC_LEGCO },
  ];
  const isLegco = role => role === 'legco' || role === 'pres';

  const SRC = {
    rates: 'https://taxsummaries.pwc.com/hong-kong-sar/individual/taxes-on-personal-income',
    allow: 'https://www.ird.gov.hk/eng/tax/budget.htm',
    deduct: 'https://taxsummaries.pwc.com/hong-kong-sar/individual/deductions',
    joint: 'https://www.gov.hk/en/residents/taxes/salaries/allowances/allowances/allowances.htm',
    mpf: 'https://www.mpfa.org.hk/en/mpf-system/mandatory-contributions/employees',
    wfa: 'https://www.wfsfaa.gov.hk/en/wfao/wfas/eligibility.php',
    wfaNotes: 'https://www.wfsfaa.gov.hk/wfao/pdf/WFA100B.pdf',
    minWage: 'https://www.labour.gov.hk/eng/news/mwo.htm',
    wages: 'https://www.censtatd.gov.hk/en/web_table.html?id=220-23011',
    noVat: 'https://taxsummaries.pwc.com/hong-kong-sar/individual/other-taxes',
    pao: DOC_PAO,
    legco: DOC_LEGCO,
    freeze: 'https://www.budget.gov.hk/2025/eng/budget48.html',
  };

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const sum = sl => sl.reduce((a, b) => a + b.amt, 0);

  // Salaries tax: progressive rates on income after allowances, capped at the standard rate on income before allowances.
  function assess(N, allow) {
    const nci = Math.max(0, N - allow);
    const prog = slices(nci, P.bands), std = slices(Math.max(0, N), P.std);
    const pT = sum(prog), sT = sum(std);
    return { N, allow, nci, prog, std, pT, sT, useStd: sT < pT, tax: Math.min(pT, sT) };
  }

  // Couple: separate assessment (the married allowance goes to an earner whose spouse has no income) or joint, whichever is lower.
  function householdTax(me, them, kids) {
    const A = P.allow;
    if (them == null) {
      const allow = A.basic + kids * A.child + (kids > 0 ? A.single : 0);
      const a = assess(me, allow);
      return { mode: 'single', me: a, them: null, total: a.tax, useStd: a.useStd };
    }
    let best = null;
    for (const k of new Set([kids, 0])) {
      const am = assess(me, (them > 0 || me <= 0 ? A.basic : A.married) + k * A.child);
      const at = assess(them, (me > 0 || them <= 0 ? A.basic : A.married) + (kids - k) * A.child);
      const total = (me > 0 ? am.tax : 0) + (them > 0 ? at.tax : 0);
      if (!best || total < best.total - .005) best = { mode: 'sep', me: am, them: at, total, useStd: am.useStd };
    }
    if (me > 0 && them > 0) {
      const j = assess(me + them, A.married + kids * A.child);
      if (j.tax < best.total - .005) best = { mode: 'joint', me: j, them: null, joint: true, total: j.tax, useStd: j.useStd, parts: [me, them] };
    }
    return best;
  }

  // MPF works on each month's relevant income; double pay lands in one month, where the cap bites.
  function mpf(G, factor, covered = true) {
    if (!covered || G <= 0) return { ee: 0, er: 0, ded: 0, months: [] };
    const m = G / factor, months = Array(12).fill(m);
    months[11] += Math.max(0, factor - 12) * m;
    let ee = 0, er = 0;
    for (const mi of months) {
      const base = Math.min(mi, P.mpf.max) * P.mpf.rate;
      er += base;
      if (mi >= P.mpf.min) ee += base;
    }
    return { ee, er, ded: Math.min(ee, P.mpf.ded), m };
  }

  const employee = (G, factor) => {
    const c = mpf(G, factor);
    return { G, m: G / factor, mpf: c, N: G - c.ded, wfaInc: G > 0 ? G / factor - (G / factor >= P.mpf.min ? Math.min(G / factor, P.mpf.max) * P.mpf.rate : 0) : 0 };
  };

  // WFA for a month: household income test, then the hours tier. One full-time earner is taken as 168 to 191 hours,
  // two earners or a working single parent as the top tier.
  function wfaMonth(incomes, couple, kids) {
    const workers = incomes.filter(v => v > 0).length;
    if (!workers) return { total: 0, rate: null, size: 0 };
    const size = 1 + (couple ? 1 : 0) + kids;
    const lim = P.wfa.limits[Math.min(size, 6) - 1];
    const inc = incomes.reduce((a, b) => a + b, 0);
    const i = lim.findIndex(l => inc <= l);
    if (i < 0) return { total: 0, rate: null, size, inc, lim };
    const tier = workers > 1 || (!couple && kids > 0) ? 'higher' : 'medium';
    const sc = P.wfa.scale[i];
    const base = P.wfa.tier[tier] * sc, child = kids * P.wfa.child * sc;
    return { total: base + child, base, child, tier, rate: i, size, inc, lim };
  }

  // Your share of household tax and benefits = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env, minister = false) {
    const couple = s.household === 'joint', kids = s.children, pu = couple ? env.partner : null;
    const hh = householdTax(u.N, pu ? pu.N : null, kids);
    const wo = couple ? householdTax(0, pu.N, kids) : null;
    const ir = hh.total - (wo ? wo.total : 0);
    let wfa = 0, wfaDet = null, wfaWo = null;
    if (s.pa && !minister) {
      const pInc = pu ? pu.wfaInc : 0;
      wfaDet = wfaMonth(couple ? [u.wfaInc, pInc] : [u.wfaInc], couple, kids);
      wfaWo = wfaMonth(couple ? [0, pInc] : [0], couple, kids);
      wfa = 12 * (wfaDet.total - wfaWo.total);
    }
    return { ir, hh, wo, wfa, wfaDet, wfaWo };
  }

  const withVat = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // Officials are taxed like employees; LegCo members aren't employees and have no MPF.
  function computeMinister(G, s, env, role = s.minRole) {
    const c = mpf(G, 12, !isLegco(role));
    const u = { G, m: G / 12, mpf: c, N: G - c.ded, wfaInc: 0, role };
    const tax = incomeTaxes(u, s, env, true);
    const net = G - c.ee - tax.ir;
    return { G, cost: G + c.er, net, u, tax, regime: 'minister',
      parts: { er: c.er, ee: c.ee, ir: tax.ir, wfa: 0, vat: withVat(s, net) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = employee(G, s.factor);
    const tax = incomeTaxes(u, s, env);
    const net = G - u.mpf.ee - tax.ir + tax.wfa;
    return { G, cost: G + u.mpf.er, net, u, tax,
      parts: { er: u.mpf.er, ee: u.mpf.ee, ir: tax.ir, wfa: -tax.wfa, vat: withVat(s, net) } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'wfa', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', wfa: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'wfa', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'wfa'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'wfa'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const aTable = (a, label) => {
      const br = a.prog.filter(b => b.amt > 0).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}`, b.amt)).join('');
      const sr = a.std.filter(b => b.amt > 0).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}`, b.amt)).join('');
      return `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
        ${row(t('bd.netIncome'), a.N)}${row('− ' + t('bd.allow'), a.allow)}${row('= ' + t('bd.nci'), a.nci)}${br}
        ${row(t('tip.progTotal'), a.pT)}${sr}${row(t('tip.stdTotal'), a.sT)}
        ${tot(t(a.useStd ? 'tip.taxStd' : 'tip.taxProg'), a.tax)}`;
    };
    const mpfTable = (c, who) => c && c.er ? `<table>
      ${row(t('tip.mpfMonthly'), Math.min(c.m || 0, P.mpf.max))}
      ${tot(who === 'er' ? t('total') : t('youPay'), who === 'er' ? c.er : c.ee)}</table>` : '';
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t(isLegco(s.minRole) ? 'tip.minGrossLegco' : 'tip.minGross')}</p>${sources(isLegco(s.minRole) ? 'legco' : 'pao')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t(isLegco(s.minRole) ? 'tip.minErLegco' : 'tip.minEr')}</p>${r && r.parts.er ? `<table>${tot(t('total'), r.parts.er)}</table>` : ''}${sources('mpf')}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t(isLegco(s.minRole) ? 'tip.minEeLegco' : 'tip.minEe')}</p>${r && r.parts.ee ? `<table>${tot(t('youPay'), r.parts.ee)}</table>` : ''}${sources('mpf')}`,
      wfa: () => `<h4>${t('comp.wfa')}</h4><p>${t('tip.minWfa')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pao', 'legco', 'freeze')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('joint', 'allow')}`,
      paToggle: () => `<h4>${t('comp.wfa')}</h4><p>${t('tip.paToggle')}</p>${sources('wfa', 'wfaNotes')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.u.m != null ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? mpfTable(r.u.mpf, 'er') : ''}${sources('mpf')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? mpfTable(r.u.mpf, 'ee') : ''}${sources('mpf')}`,
      mpfDed: r => `<h4>${t('bd.mpfDed')}</h4><p>${t('tip.mpfDed', eur(P.mpf.ded))}</p>${r ? `<p><b>${eur(r.u.mpf.ded)}</b></p>` : ''}${sources('deduct')}`,
      netIncome: r => `<h4>${t('bd.netIncome')}</h4><p>${t('tip.netIncome')}</p>${r ? `<p><b>${eur(r.u.N)}</b></p>` : ''}`,
      allow: r => `<h4>${t('bd.allow')}</h4><p>${t('tip.allow', eur(P.allow.basic), eur(P.allow.married), eur(P.allow.child), eur(P.allow.single))}</p>${r ? `<p><b>${eur(r.tax.hh.me.allow)}</b></p>` : ''}${sources('allow')}`,
      nci: r => `<h4>${t('bd.nci')}</h4><p>${t('tip.nci')}</p>${r ? `<p><b>${eur(r.tax.hh.me.nci)}</b></p>` : ''}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('rates', 'allow')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM', h.mode)}</p><table>
          ${aTable(h.me, h.mode === 'joint' ? t('tip.irJoint') : h.mode === 'sep' ? t('tip.irYou') : '')}
          ${h.mode === 'sep' && h.them && h.them.N > 0 ? aTable(h.them, t('tip.irPartner')) : ''}
          ${h.mode !== 'single' ? `${tot(t('tip.irHousehold'), h.total)}${row('− ' + t('tip.irWithout'), -r.tax.wo.total)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${sources('rates', 'allow', 'joint')}`;
      },
      wfa: r => {
        const d = r && r.tax.wfaDet, w = r && r.tax.wfaWo;
        return `<h4>${t('comp.wfa')}</h4><p>${t('tip.wfa')}</p>${d ? `<table>
          ${d.inc != null ? row(t('tip.wfaInc', d.size), d.inc) : ''}
          ${d.base ? row(t('tip.wfaBase', d.tier, d.rate), d.base) : ''}
          ${d.child ? row(t('tip.wfaChild', s.children), d.child) : ''}
          ${tot(t('tip.wfaMonth'), d.total)}
          ${w && w.total ? row('− ' + t('tip.wfaWithout'), -w.total) : ''}
          ${tot(t('tip.wfaYear'), -r.parts.wfa)}</table>` : ''}
          <p class="m">${t('tip.wfaM')}</p>${sources('wfa', 'wfaNotes')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('noVat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, min = r.regime === 'minister', a = r.tax.hh.me;
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (p.er > .5) L.push({ op: '+', k: 'er', label: t(min ? 'bd.minEr' : 'comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (p.ee > .5) L.push({ op: '−', k: 'ee', label: t(min ? 'bd.minEe' : 'comp.ee'), v: p.ee, tax: p.ee });
    L.push(
      { op: '', k: 'mpfDed', label: t('bd.mpfDed'), v: r.u.mpf.ded, cls: 'sub' },
      { op: '', k: 'netIncome', label: t(r.tax.hh.mode === 'joint' ? 'bd.netIncomeJoint' : 'bd.netIncome'), v: a.N, cls: 'sub' },
      { op: '', k: 'allow', label: t('bd.allow'), v: a.allow, cls: 'sub' },
      { op: '=', k: 'nci', label: t('bd.nci'), v: a.nci, cls: 'sub' },
      { op: '−', k: 'ir', label: t(a.useStd ? 'bd.irStd' : 'comp.ir'), v: p.ir, tax: p.ir },
    );
    if (Math.abs(p.wfa) > .5) L.push({ op: p.wfa < 0 ? '+' : '−', k: 'wfa', label: t('comp.wfa'), v: Math.abs(p.wfa), tax: p.wfa });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low pay: the WFA steps down at the 3/4 and half-rate limits, then stops; the employee MPF starts at 7,100 a month.
  function trap(x) {
    const s = x.s, lo = MIN_WAGE * 12 / s.factor;
    const env = x.env();
    const on = s.pa && s.regime !== 'minister';
    const end = on && compute(lo * s.factor, s, env).tax.wfaDet.total > 0
      ? x.firstMonthly(m => m > lo && compute(m * s.factor, s, env).tax.wfaDet.total <= 0, lo, 200000) : null;
    return { band: [lo, end || lo], text: [x.fmtM(lo, 10), end ? x.fmtM(end, 10) + x.perUnit() : null, eur(P.mpf.min)] };
  }

  // The standard rate caps the tax: from there the marginal rate falls from 17% to 15%.
  function top(x) {
    const s = x.s, env = x.env();
    if (s.regime === 'minister') return null;
    const at = x.firstMonthly(m => compute(m * s.factor, s, env).tax.hh.useStd, 0, 2000000);
    if (!at) return null;
    return { at, text: [x.fmtM(at, 1000) + x.perUnit(), eur(P.std[0][0]), eur(P.mpf.max)] };
  }

  return {
    GAPS: ['noCheck', 'paoPay', 'paoMpf', 'legco', 'wfaHours', 'wfaLimits', 'wfaYear', 'kids', 'oneOff', 'doublePay', 'wages', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'HKD', nextStep: 1000,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12, 13], factorDigits: 0, vatStandard: 0,
    features: { pa: true },
    communes: false,
    local: null,
    state: { salary: 25000, factor: 12, minRole: 'cs', pa: true, commune: '', region: '', local: 0, vatRate: 0, size: '' },
    urlFields: {
      wfa: ['pa', 'bool'], role: ['minRole', 'str', MIN_ROLES],
    },
    minSalary: role => PAY[role],
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0), s.factor) }),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: { wfa: 'wfaLost' }, recvLabels: { wfa: 'wfaReceived' },
    polNote: p => isLegco(p.regime) ? 'polNote.legco' : 'polNote.pao',
    polTipNote: p => isLegco(p.regime) ? 'polNote.legco' : 'polNote.pao',
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'pao',
    refKeys: ['ir', 'allow', 'mpf', 'wfa', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
