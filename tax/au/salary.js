// Australian salary rules for income year 2026-27 (1 July 2026 to 30 June 2027). Loaded by ../index.html?country=au.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['nsw', 'vic', 'qld', 'wa', 'sa', 'tas', 'act', 'nt'];
  const SIZES = ['small', 'large'];
  const MIN_ROLES = ['assistant', 'minister', 'cabinet', 'pm'];

  const P = {
    brackets: [[18200, 0], [45000, .15], [135000, .30], [190000, .37], [INF, .45]],
    deduction: 1000,
    lito: { max: 700, full: 37500, mid: 45000, midAmt: 325, end: 66667, r1: .05, r2: .015 },
    // Low-income thresholds for 2025-26 (Budget 2026-27); the 2026-27 ones are set next budget.
    ml: { rate: .02, phase: .10, single: 28011, family: 47238, child: 4338 },
    mls: { single: [105000, 123000, 164000], family: [210000, 246000, 328000], child: 1500, rates: [.01, .0125, .015] },
    sg: { rate: .12, cap: 250000, tax: .15, div293: 250000, listo: { max: 500, min: 10, income: 37000 } },
    // Rate for an employer above the threshold and any phase-out, below the big-payroll surcharges.
    ptax: { nsw: .0545, vic: .0485, qld: .0475, wa: .055, sa: .0495, tas: .061, act: .0685, nt: .055 },
    ptaxThr: { nsw: 1200000, vic: 1000000, qld: 1300000, wa: 1000000, sa: 1500000, tas: 1250000, act: 2000000, nt: 2500000 },
    mpSuper: .154,
    minWageHour: 26.44,
  };

  const REF_WAGES = [
    { key: 'min', m: 1004.90 * 52 / 12, year: 2026, color: '--w-min' },
    { key: 'med', m: 1425 * 52 / 12, year: 2025, color: '--w-med' },
    { key: 'avg', m: 2083.70 * 52 / 12, year: 2026, color: '--w-avg' },
  ];

  // Base salary in force on 3 July 2026, plus the office holder's percentage, rounded up to $10.
  const BASE = 239270;
  const office = p => BASE + Math.ceil(BASE * p / 10) * 10;
  const GOV = { pm: office(1.6), dpm: office(1.05), treasurer: office(.875), cabinet: office(.725), minister: office(.575), assistant: office(.25), opp: office(.85), speaker: office(.75), mp: BASE };
  const DOC_MP = 'https://www.legislation.gov.au/F2024L00799/latest/text';
  const DOC_MIN = 'https://en.wikipedia.org/wiki/Parliament_of_Australia#Salaries_of_parliamentarians';
  const stat = (key, icon) => ({ kind: 'stat', key, icon, regime: key, lo: GOV[key], hi: GOV[key], url: key === 'mp' ? DOC_MP : DOC_MIN });
  const POLITICIANS = [
    stat('pm', '⭐'), stat('dpm', '🎖️'), stat('treasurer', '💰'), stat('opp', '📣'), stat('cabinet', '💼'),
    stat('speaker', '🔔'), stat('minister', '📎'), stat('assistant', '🖇️'), stat('mp', '🏛️'),
  ];

  const SRC = {
    rates: 'https://taxsummaries.pwc.com/australia/individual/taxes-on-personal-income',
    credits: 'https://taxsummaries.pwc.com/australia/individual/other-tax-credits-and-incentives',
    other: 'https://taxsummaries.pwc.com/australia/individual/other-taxes',
    deductions: 'https://taxsummaries.pwc.com/australia/individual/deductions',
    budget: 'https://budget.gov.au/content/bp2/download/bp2_02_receipt_payment.pdf',
    mls: 'https://privatehealth.gov.au/health_insurance/surcharges_incentives/medicare_levy.htm',
    super: 'https://en.wikipedia.org/wiki/Superannuation_in_Australia',
    nsw: 'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/payroll-tax/lodge-and-pay-returns/thresholds-and-rates',
    vic: 'https://www.sro.vic.gov.au/about-us/rates-and-statistics/current-rates/payroll-tax-current-rates',
    qld: 'https://qro.qld.gov.au/payroll-tax/calculate/rates-thresholds/',
    wa: 'https://www.wa.gov.au/organisation/department-of-finance/payroll-tax',
    sa: 'https://www.revenuesa.sa.gov.au/payrolltax',
    tas: 'https://www.sro.tas.gov.au/payroll-tax',
    act: 'https://www.revenue.act.gov.au/payroll-tax',
    nt: 'https://treasury.nt.gov.au/dtf/territory-revenue-office/payroll-tax',
    minWage: 'https://www.abc.net.au/news/2026-06-02/minimum-wage-increase-june-2026-australia/106746542',
    awe: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/average-weekly-earnings-australia/latest-release',
    ee: 'https://www.abs.gov.au/statistics/labour/earnings-and-working-conditions/employee-earnings/latest-release',
    mpPay: DOC_MP,
    minPay: DOC_MIN,
  };

  const progressive = (x, br) => {
    let tot = 0, lo = 0;
    for (const [hi, r] of br) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };

  function litoOf(TI) {
    const l = P.lito;
    if (TI <= l.full) return l.max;
    if (TI <= l.mid) return l.max - l.r1 * (TI - l.full);
    return Math.max(0, l.midAmt - l.r2 * (TI - l.mid));
  }

  // One person's income tax: brackets on taxable income, minus LITO (it can't go below zero).
  function personTax(G) {
    const ded = Math.min(P.deduction, Math.max(0, G));
    const TI = Math.max(0, G - ded);
    const gross = progressive(TI, P.brackets), lito = Math.min(gross, litoOf(TI));
    return { G, ded, TI, gross, lito, it: gross - lito };
  }

  const mlAlone = TI => TI <= P.ml.single ? 0 : Math.min(P.ml.rate * TI, P.ml.phase * (TI - P.ml.single));

  // Couples and sole parents share the family threshold: the family's levy is capped at 10% of the excess, split by income.
  function medicare(incs, family, kids) {
    const each = incs.map(mlAlone);
    if (!family) return { each, total: each[0], cap: null };
    const F = incs.reduce((a, b) => a + b, 0), thr = P.ml.family + kids * P.ml.child;
    const cap = P.ml.phase * Math.max(0, F - thr);
    const red = each.map((v, i) => F > 0 ? Math.min(v, cap * incs[i] / F) : 0);
    return { each: red, total: red.reduce((a, b) => a + b, 0), cap, thr, F };
  }

  // Everyone pays the tier rate on their own income; a family is tiered on combined income. Nothing below the levy threshold.
  function surcharge(incs, family, kids) {
    const m = P.mls, F = incs.reduce((a, b) => a + b, 0);
    const lim = family ? m.family.map(v => v + Math.max(0, kids - 1) * m.child) : m.single;
    const tier = lim.filter(v => (family ? F : incs[0]) > v).length;
    const rate = tier ? m.rates[tier - 1] : 0;
    const each = incs.map(x => x > P.ml.single ? rate * x : 0);
    return { each, total: each.reduce((a, b) => a + b, 0), rate, lim, tier };
  }

  function superOf(G, TI, rate = P.sg.rate, cap = P.sg.cap) {
    const sg = rate * Math.min(G, cap), q = P.sg;
    const ctax = q.tax * sg;
    const listo = TI <= q.listo.income ? Math.max(q.listo.min, Math.min(q.listo.max, ctax)) : 0;
    const div293 = q.tax * Math.min(sg, Math.max(0, TI + sg - q.div293));
    return { sg, ctax, listo: Math.min(listo, ctax), div293, stax: ctax - Math.min(listo, ctax) + div293 };
  }

  // Your share of household levies = the household with your pay minus the household without it.
  function levies(me, s, env, cover) {
    const couple = s.household === 'joint', kids = s.children, family = couple || kids > 0;
    const pTI = couple ? env.partner.TI : 0;
    const incs = couple ? [me.TI, pTI] : [me.TI];
    const ml = medicare(incs, family, kids), mlWo = couple ? medicare([0, pTI], true, kids) : null;
    const mls = cover ? null : surcharge(incs, family, kids), mlsWo = !cover && couple ? surcharge([0, pTI], true, kids) : null;
    return {
      ml, mlWo, mls, mlsWo,
      mlYou: ml.total - (mlWo ? mlWo.total : 0),
      mlsYou: mls ? mls.total - (mlsWo ? mlsWo.total : 0) : 0,
    };
  }

  const vatOf = (net, s) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  function computeOffice(G, s, env, role) {
    const u = { ...personTax(G), role };
    const lv = levies(u, s, env, true);
    const sup = superOf(G, u.TI, P.mpSuper, INF);
    const net = G - u.it - lv.mlYou;
    return { G, cost: G + sup.sg, net, u, lv, sup, ptax: 0, regime: 'minister',
      parts: { ptax: 0, stax: sup.stax, ml: lv.mlYou, mls: 0, it: u.it, super: sup.sg - sup.stax, vat: vatOf(net, s) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeOffice(G, s, env, s.minRole);
    const u = personTax(G);
    u.m = G / s.factor;
    const lv = levies(u, s, env, !s.cadre);
    const sup = superOf(G, u.TI);
    const ptax = s.size === 'large' ? P.ptax[s.region] * (G + sup.sg) : 0;
    const net = G - u.it - lv.mlYou - lv.mlsYou;
    return { G, cost: G + sup.sg + ptax, net, u, lv, sup, ptax,
      parts: { ptax, stax: sup.stax, ml: lv.mlYou, mls: lv.mlsYou, it: u.it, super: sup.sg - sup.stax, vat: vatOf(net, s) } };
  }

  // Super goes into your own fund, so it's shown but never counted as tax; the fund's contributions tax is.
  const COMP_KEYS = ['ptax', 'stax', 'ml', 'mls', 'it', 'super', 'vat'];
  const COMP_COLORS = { ptax: 'var(--k-reg)', stax: 'var(--k-bbsz)', ml: 'var(--k-ee)', mls: 'var(--k-csg)', it: 'var(--k-ir)', super: 'var(--k-vm)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['ptax', 'stax', 'ml', 'mls', 'it', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['ptax', 'stax', 'ml', 'mls', 'it'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ml', 'mls', 'it'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const itRows = u => {
      let lo = 0;
      const br = P.brackets.map(([hi, r]) => {
        const a = Math.max(0, Math.min(u.TI, hi) - lo), out = a > 0 && r > 0 ? row(`${eur(lo)} – ${hi === INF ? '…' : eur(hi)} × ${pct(r, 0)}`, a * r) : '';
        lo = hi; return out;
      }).join('');
      return `${row(t('bd.gross'), u.G)}${row('− ' + t('bd.ded'), -u.ded)}${row('= ' + t('bd.ti'), u.TI)}${br}
        ${u.lito > 0 ? row('− ' + t('bd.lito'), -u.lito) : ''}${tot(t('comp.it'), u.it)}`;
    };
    const supTable = r => `<table>
      ${row(t(r.regime === 'minister' ? 'tip.mpSuper' : 'bd.sg'), r.sup.sg)}
      ${row('− ' + t('tip.ctax'), -r.sup.ctax)}
      ${r.sup.listo ? row('+ ' + t('tip.listo'), r.sup.listo) : ''}
      ${r.sup.div293 ? row('− ' + t('tip.div293'), -r.sup.div293) : ''}
      ${tot(t('tip.superNet'), r.sup.sg - r.sup.stax)}</table>`;
    const mlTable = r => {
      const l = r.lv.ml;
      return `<table>${row(t('bd.ti'), r.u.TI)}
        ${row(t('tip.mlAlone'), mlAlone(r.u.TI))}
        ${l.cap != null ? row(t('tip.mlFamily', eur(l.thr)), l.each[0]) : ''}
        ${r.lv.mlWo ? `${tot(t('tip.hh'), l.total)}${row('− ' + t('tip.hhWithout'), -r.lv.mlWo.total)}` : ''}
        ${tot(t('tip.yours'), r.parts.ml)}</table>`;
    };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${r ? `<table>
        ${row(t('tip.minBase'), BASE)}${row(t('tip.minOffice'), r.G - BASE)}${tot(t('total'), r.G)}</table>` : ''}${sources('mpPay', 'minPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      ptax: () => `<h4>${t('comp.ptax')}</h4><p>${t('tip.minPtax')}</p>`,
      mls: () => `<h4>${t('comp.mls')}</h4><p>${t('tip.minMls')}</p>`,
      super: r => `<h4>${t('comp.super')}</h4><p>${t('tip.minSuper')}</p>${r ? supTable(r) : ''}${sources('super')}`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('mpPay', 'minPay', 'super')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      cadre: () => `<h4>${t('comp.mls')}</h4><p>${t('tip.cadre')}</p>${sources('mls')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('budget', 'mls')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources(...REGIONS)}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size', eur(P.ptaxThr[s.region]))}</p>${sources(s.region)}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('bd.sg'), r.sup.sg)}${r.ptax ? row(t('comp.ptax'), r.ptax) : ''}${tot(t('tip.costH'), r.cost)}</table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      ptax: r => `<h4>${t('comp.ptax')}</h4><p>${t('tip.ptax', t('region.' + s.region), pct(P.ptax[s.region], 2), eur(P.ptaxThr[s.region]))}</p>
        ${r && r.ptax ? `<p>${pct(P.ptax[s.region], 2)} × (${eur(r.G)} + ${eur(r.sup.sg)}) = <b>${eur(r.ptax)}</b></p>` : `<p>${t('tip.ptaxSmall')}</p>`}
        <p class="m">${t('tip.ptaxM')}</p>${sources(s.region)}`,
      super: r => `<h4>${t('comp.super')}</h4><p>${t('tip.super', eur(P.sg.cap))}</p>${r ? supTable(r) : ''}${sources('other', 'super')}`,
      sg: r => tipBuilders.super(r),
      stax: r => `<h4>${t('comp.stax')}</h4><p>${t('tip.stax', eur(P.sg.listo.income), eur(P.sg.div293))}</p>${r ? supTable(r) : ''}${sources('super')}`,
      ml: r => `<h4>${t('comp.ml')}</h4><p>${t('tip.ml', eur(P.ml.single), eur(P.ml.single * 1.25), eur(P.ml.family), eur(P.ml.child))}</p>${r ? mlTable(r) : ''}${sources('budget', 'other')}`,
      mls: r => {
        const m = r && r.lv.mls;
        return `<h4>${t('comp.mls')}</h4><p>${t('tip.mls', eur(P.mls.single[0]), eur(P.mls.family[0]))}</p>${m ? `<table>
          <tr><td>${t('tip.mlsTier')}</td><td>${pct(m.rate, 2)}</td></tr>
          ${row(`${pct(m.rate, 2)} × ${eur(r.u.TI)}`, m.each[0])}
          ${r.lv.mlsWo ? `${tot(t('tip.hh'), m.total)}${row('− ' + t('tip.hhWithout'), -r.lv.mlsWo.total)}` : ''}
          ${tot(t('tip.yours'), r.parts.mls)}</table>` : `<p>${t('tip.mlsCovered')}</p>`}${sources('mls')}`;
      },
      it: r => r ? `<h4>${t('comp.it')}</h4><p class="m">${t('tip.itM')}</p><table>${itRows(r.u)}</table>${sources('rates', 'credits', 'deductions')}`
        : `<h4>${t('comp.it')}</h4><p>${t('tip.itShort')}</p>${sources('rates')}`,
      ded: () => `<h4>${t('bd.ded')}</h4><p>${t('tip.ded')}</p>${sources('deductions', 'budget')}`,
      ti: r => `<h4>${t('bd.ti')}</h4><p>${t('tip.ti')}${r ? ` <b>${eur(r.u.TI)}</b>` : ''}</p>`,
      lito: r => `<h4>${t('bd.lito')}</h4><p>${t('tip.lito')}</p>${r ? `<p><b>${eur(r.u.lito)}</b></p>` : ''}${sources('credits')}`,
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
    const p = r.parts, u = r.u, min = r.regime === 'minister';
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'super', label: t(min ? 'tip.mpSuper' : 'bd.sg'), v: r.sup.sg, cls: 'sub' },
      { op: '', k: 'stax', label: t('bd.stax'), v: p.stax, tax: p.stax, cls: 'sub' },
    ];
    if (r.ptax) L.push({ op: '+', k: 'ptax', label: t('comp.ptax'), v: r.ptax, tax: r.ptax, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ded', label: t('bd.ded'), v: u.ded, cls: 'sub' },
      { op: '=', k: 'ti', label: t('bd.ti'), v: u.TI, cls: 'sub' },
      { op: '−', k: 'it', label: t('comp.it'), v: p.it, tax: p.it },
      { op: '−', k: 'ml', label: t('comp.ml'), v: p.ml, tax: p.ml },
    );
    if (p.mls > .5) L.push({ op: '−', k: 'mls', label: t('comp.mls'), v: p.mls, tax: p.mls });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-pay zone: from the tax-free threshold to where the Medicare levy reaches its full 2%.
  function trap(x) {
    const s = x.s, d = P.deduction;
    const band = [(P.brackets[0][0] + d) / s.factor, (P.ml.single * 1.25 + d) / s.factor];
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), eur(P.ml.single), eur(P.ml.single * 1.25), eur(P.lito.full), eur(P.lito.end)] };
  }

  function top(x) {
    const s = x.s;
    const at = (P.brackets[3][0] + P.deduction) / s.factor;
    const mlsAt = s.regime !== 'minister' && s.cadre && s.household !== 'joint' && !s.children ? (P.mls.single[0] + P.deduction) / s.factor : null;
    const div = x.firstMonthly(m => compute(m * s.factor, s, x.env()).sup.div293 > 0);
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), mlsAt ? x.fmtM(mlsAt, 50) + x.perUnit() : null, div ? x.fmtM(div, 50) + x.perUnit() : null] };
  }

  return {
    GAPS: ['noCheck', 'ded', 'ml', 'lito', 'listo', 'sgCap', 'ptax', 'ptaxFlat', 'family', 'mpSuper', 'office', 'mpCover', 'ceo', 'median', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'AUD', nextStep: 150,
    regions: REGIONS, sizes: SIZES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 10,
    features: { cadre: true },
    state: { salary: 7500, factor: 12, minRole: 'cabinet', cadre: false, commune: '', region: 'nsw', local: 0, vatRate: 10, size: 'large' },
    urlFields: { nocover: ['cadre', 'bool'], state: ['region', 'str', REGIONS], size: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES] },
    communes: false,
    local: null,
    parseCommunes: () => [], communeLabel: () => '', communeTag: () => '', communeHint: () => '',
    partsHint: x => x.s.children > 0 ? t(x.s.household === 'joint' ? 'partsHint.couple' : 'partsHint.single') : '',
    minSalary: role => GOV[role],
    env: s => ({ partner: personTax(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: computeOffice(p.lo, plain, env, p.regime).net, allow: 0 }),
    polNote: p => 'polNote.' + (p.regime === 'mp' ? 'member' : 'office'),
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + (p.key === 'mp' ? 'mp' : 'office')),
    polNoteLink: 'mpPay',
    refKeys: ['it', 'ml', 'mls', 'super', 'ptax', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
