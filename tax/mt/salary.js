// Maltese salary rules for basis year 2026. Loaded by ../index.html?country=mt.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const MIN_ROLES = ['minister', 'pm'];
  const INF = Infinity;

  // Rate tables as [upper bound, rate]; the "subtract" figures in the official tables follow from them.
  const T = {
    single: [[12000, 0], [16000, .15], [60000, .25], [INF, .35]],
    married: [[15000, 0], [23000, .15], [60000, .25], [INF, .35]],
    married1: [[17500, 0], [26500, .15], [60000, .25], [INF, .35]],
    married2: [[22500, 0], [32000, .15], [60000, .25], [INF, .35]],
    parent: [[13000, 0], [17500, .15], [60000, .25], [INF, .35]],
    parent1: [[14500, 0], [21000, .15], [60000, .25], [INF, .35]],
    parent2: [[18500, 0], [25500, .15], [60000, .25], [INF, .35]],
  };
  const P = {
    brackets: T.single,
    lowIncome: { limit: 12445, deduct: 12000 },
    ssc: { rate: .10, mf: .003, capWeek: 559.30, minWeek: 229.44 },
    bonus: { june: 135.10, dec: 135.10, march: 121.16, sept: 121.16 },
    minWeek: 229.44,
    // In-Work Benefit 2026, yearly per child: [floor, full-rate ceiling, full rate, end of the €327 tier].
    iwb: { single: [6600, 24181, 1627, 35000], both: [10000, 36847, 1627, 50000], one: [6600, 27181, 856, 35000], low: 327, partnerMin: 3000 },
  };
  const BONUS = P.bonus.june + P.bonus.dec + P.bonus.march + P.bonus.sept;
  const SSC_CAP_YEAR = P.ssc.capWeek * 52 + BONUS;

  // NSO: median annual basic salary 2024 (provisional) and mean monthly basic salary Q2 2026 (provisional); both exclude bonuses.
  const REF_WAGES = [
    { key: 'min', m: (P.minWeek * 52 + BONUS) / 12, year: 2026, color: '--w-min' },
    { key: 'med', m: 20800 / 12, year: 2024, color: '--w-med' },
    { key: 'avg', m: 2282, year: 2026, color: '--w-avg' },
  ];

  // Pegged to the top civil service scale (€51 893 in 2026): 125% for the Prime Minister, 110% for ministers.
  const SCALE1 = 51893;
  const GOV = { pm: Math.round(SCALE1 * 1.25), minister: Math.round(SCALE1 * 1.10) };
  const DOC_PAY = 'https://newsbook.com.mt/en/alex-borg-demands-pm-withdraw-e1700-ministerial-pay-rise/';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', lo: GOV.pm, hi: GOV.pm, url: DOC_PAY },
    { kind: 'stat', key: 'minister', icon: '💼', lo: GOV.minister, hi: GOV.minister, url: DOC_PAY },
  ];

  const SRC = {
    pwcIt: 'https://taxsummaries.pwc.com/malta/individual/taxes-on-personal-income',
    pwcOther: 'https://taxsummaries.pwc.com/malta/individual/other-taxes',
    kpmg: 'https://kpmg.com/mt/en/home/insights/2025/11/malta-budget-2026.html',
    rsm: 'https://www.rsm.global/malta/node/556',
    mtca: 'https://mtca.gov.mt/personal-tax/tax-rates/tax-ratesindividuals/2026',
    ssc: 'https://www.pwc.com/mt/en/publications/tax-legal/payroll-updates-2026.html',
    hub: 'https://freemalta.com/hub/tax',
    iwb: 'https://socialsecurity.gov.mt/information-and-applications-for-benefits-and-services/work-incentives-and-unemployment-benefits/in-work-benefit/',
    minWage: 'https://wageindicator.org/ai/work/minimum-wage/countries/malta/',
    median: 'https://www.parlament.mt/media/136697/pq32824.pdf',
    pay: DOC_PAY,
  };

  const progressive = (x, br) => {
    let tot = 0, lo = 0;
    for (const [hi, r] of br) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };
  const kidKey = kids => kids >= 2 ? '2' : kids === 1 ? '1' : '';

  // Single rates: employment income up to €12 445 first loses €12 000, so the minimum wage pays nothing.
  const singleTax = I => I <= P.lowIncome.limit ? 0 : progressive(I, T.single);

  // Statutory bonuses and weekly allowances are inside the gross but carry no social security.
  function employeeSide(G) {
    const basic = Math.max(0, G - BONUS), w = basic / 52, base = Math.min(w, P.ssc.capWeek);
    return { G, basic, w, ee: 52 * P.ssc.rate * base, er: 52 * P.ssc.rate * base, mf: 52 * P.ssc.mf * base };
  }

  // Single or parent computation for one person; married couples are taxed jointly unless separate is cheaper.
  function householdTax(incomes, couple, kids) {
    const I = incomes.reduce((a, b) => a + b, 0);
    if (!couple) {
      const single = singleTax(I);
      if (!kids) return { it: single, I, table: 'single' };
      const key = 'parent' + kidKey(kids), parent = progressive(I, T[key]);
      return parent < single ? { it: parent, I, table: key } : { it: single, I, table: 'single' };
    }
    const key = 'married' + kidKey(kids), joint = progressive(I, T[key]);
    const sep = incomes.reduce((tot, x) => tot + singleTax(x), 0);
    return sep < joint ? { it: sep, I, table: 'separate' } : { it: joint, I, table: key };
  }

  // In-Work Benefit for the household, from its employment income net of social security and income tax.
  function iwbFor(sides, it, couple, kids) {
    if (!kids || !sides.some(u => u.G > 0)) return { iwb: 0, net: 0, type: null };
    const net = sides.reduce((tot, u) => tot + u.G - u.ee, 0) - it;
    const type = !couple ? 'single' : sides.length === 2 && sides.every(u => u.G - u.ee >= P.iwb.partnerMin) ? 'both' : 'one';
    const [floor, full, rate, end] = P.iwb[type];
    const per = net < floor ? 0 : net < full ? rate : net <= end ? P.iwb.low : 0;
    return { iwb: per * kids, net, type, per };
  }

  // Your share of household taxes and benefits = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', kids = s.children, pu = couple ? env.partner : null;
    const hh = householdTax(pu ? [u.G, pu.G] : [u.G], couple, kids);
    const without = couple ? householdTax([0, pu.G], true, kids) : null;
    const it = Math.max(0, hh.it - (without ? without.it : 0));
    let iwb = 0, iwbDet = null;
    if (s.pa && s.regime !== 'minister' && kids > 0) {
      const w = iwbFor(pu ? [u, pu] : [u], hh.it, couple, kids);
      const wo = pu ? iwbFor([pu], without.it, true, kids) : { iwb: 0 };
      iwb = w.iwb - wo.iwb;
      iwbDet = { ...w, without: wo.iwb };
    }
    return { it, hh, without, iwb, iwbDet };
  }

  const vatOf = (net, s) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  function compute(G, s, env) {
    const u = employeeSide(G);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const cost = G + u.er + u.mf;
    const net = G - u.ee - tax.it + tax.iwb;
    return { G, cost, net, u, tax, regime: s.regime === 'minister' ? 'minister' : undefined,
      parts: { er: u.er, mf: u.mf, ee: u.ee, it: tax.it, iwb: -tax.iwb, vat: vatOf(net, s) } };
  }

  const COMP_KEYS = ['er', 'mf', 'ee', 'it', 'iwb', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', mf: 'var(--k-vm)', ee: 'var(--k-ee)', it: 'var(--k-ir)', iwb: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'mf', 'ee', 'it', 'iwb', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'mf', 'ee', 'it', 'iwb'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'it', 'iwb'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const tableRows = (I, br) => {
      let lo = 0;
      return br.map(([hi, r]) => {
        const a = Math.max(0, Math.min(I, hi) - lo);
        const row = a > 0 ? `<tr><td>${eur(lo)} – ${hi === INF ? '…' : eur(hi)} × ${pct(r, 0)}</td><td>${eur(a * r)}</td></tr>` : '';
        lo = hi; return row;
      }).join('');
    };
    const itTable = r => {
      const h = r.tax.hh, couple = !!r.tax.without;
      let body;
      if (h.table === 'separate') body = `<tr><td colspan="2">${t('tip.itSeparate')}</td></tr>`;
      else if (h.table === 'single' && h.I <= P.lowIncome.limit) body = `<tr><td>${t('tip.itLow', eur(P.lowIncome.limit))}</td><td>0</td></tr>`;
      else body = tableRows(h.I, T[h.table]);
      return `<table>
        <tr><td>${t(couple ? 'tip.itHhIncome' : 'tip.itIncome')}</td><td>${eur(h.I)}</td></tr>
        <tr><td colspan="2">${t('table.' + h.table)}</td></tr>
        ${body}
        <tr class="t"><td>${t('tip.itHousehold')}</td><td>${eur(h.it)}</td></tr>
        ${couple ? `<tr><td>− ${t('tip.itWithout')}</td><td>−${eur(r.tax.without.it)}</td></tr><tr class="t"><td>${t('tip.itYours')}</td><td>${eur(r.parts.it)}</td></tr>` : ''}
        </table>`;
    };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${r ? `<p><b>${eur(r.G)}</b>${t('aYear')}</p>` : ''}${sources('pay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      iwb: () => `<h4>${t('comp.iwb')}</h4><p>${t('tip.minIwb')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12', eur2(BONUS))}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('pwcIt')}`,
      paToggle: () => `<h4>${t('comp.iwb')}</h4><p>${t('tip.iwbToggle')}</p>${sources('iwb')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')} ${t('tip.grossBonus', eur2(BONUS))}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t(r.regime ? 'bd.stateCost' : 'bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.u.er)}</td></tr>
          <tr><td>${t('comp.mf')}</td><td>${eur(r.u.mf)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur2(P.ssc.capWeek), eur2(P.ssc.capWeek * P.ssc.rate))}</p>
        ${r ? `<p>${pct(P.ssc.rate, 0)} × ${eur2(Math.min(r.u.w, P.ssc.capWeek))} × 52 = <b>${eur(r.u.er)}</b></p>` : ''}${sources('ssc', 'pwcOther')}`,
      mf: r => `<h4>${t('comp.mf')}</h4><p>${t('tip.mf')}</p>${r ? `<p><b>${eur(r.u.mf)}</b>${t('aYear')}</p>` : ''}${sources('ssc')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur2(P.ssc.capWeek), eur2(P.ssc.capWeek * P.ssc.rate), eur(SSC_CAP_YEAR))}</p>
        ${r ? `<table><tr><td>${t('tip.eeWeek')}</td><td>${eur2(r.u.w)}</td></tr>
          <tr><td>× ${pct(P.ssc.rate, 0)}${r.u.w > P.ssc.capWeek ? ` (${t('tip.eeCapped')})` : ''} × 52</td><td>${eur(r.u.ee)}</td></tr>
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.u.ee)}</td></tr></table>` : ''}${sources('ssc', 'pwcOther')}`,
      it: r => r ? `<h4>${t('comp.it')}</h4><p class="m">${t('tip.itM')}</p>${itTable(r)}${sources('pwcIt', 'kpmg')}`
        : `<h4>${t('comp.it')}</h4><p>${t('tip.itShort')}</p>${sources('pwcIt')}`,
      iwb: r => {
        const d = r && r.tax.iwbDet;
        return `<h4>${t('comp.iwb')}</h4><p>${t('tip.iwb')}</p>${d && d.type ? `<table>
          <tr><td>${t('tip.iwbNet')}</td><td>${eur(d.net)}</td></tr>
          <tr><td>${t('iwbType.' + d.type)}</td><td>${eur(d.per)} × ${s.children}</td></tr>
          ${d.without ? `<tr><td>− ${t('tip.iwbWithout')}</td><td>−${eur(d.without)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.iwbYear')}</td><td>${eur(-r.parts.iwb)}</td></tr></table>` : ''}${sources('iwb')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('pwcOther')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, u = r.u, office = r.regime === 'minister';
    const L = [
      { op: '', k: 'gross', label: t(office ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: u.er, tax: u.er, cls: 'sub' },
      { op: '+', k: 'mf', label: t('comp.mf'), v: u.mf, tax: u.mf, cls: 'sub' },
      { op: '=', k: 'cost', label: t(office ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(office ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: u.ee, tax: u.ee },
      { op: '−', k: 'it', label: t('comp.it'), v: p.it, tax: p.it },
    ];
    if (Math.abs(p.iwb) > .5) L.push({ op: p.iwb < 0 ? '+' : '−', k: 'iwb', label: t('comp.iwb'), v: Math.abs(p.iwb), tax: p.iwb });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-pay zone: from the end of the minimum wage exemption to the end of the 15% band (or of the In-Work Benefit).
  function trap(x) {
    const s = x.s, env = x.env();
    const lo = P.lowIncome.limit / s.factor;
    const iwbEnd = s.pa && s.children > 0 ? x.firstMonthly(m => m > lo && compute(m * s.factor, s, env).tax.iwb <= 0, lo, 20000) : null;
    const hi = Math.max(T.single[1][0] / s.factor, iwbEnd || 0);
    return { band: [lo, hi], text: [x.fmtM(lo, 10), x.fmtM(hi, 10) + x.perUnit(), iwbEnd ? x.fmtM(iwbEnd, 10) + x.perUnit() : null, eur(P.lowIncome.limit)] };
  }

  function top(x) {
    const s = x.s, env = x.env();
    if (s.regime === 'minister') return null;
    const at = x.firstMonthly(m => compute(m * s.factor, s, env).tax.hh.I > 60000);
    if (!at) return null;
    const cap = x.firstMonthly(m => m * s.factor > SSC_CAP_YEAR);
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), cap ? x.fmtM(cap, 50) + x.perUnit() : null] };
  }

  return {
    GAPS: ['iwbBands', 'iwbSteps', 'iwbYear', 'bonuses', 'maternity', 'born1962', 'childRates', 'wages', 'govPay', 'noMp', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR',
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 18,
    features: { pa: true },
    state: { salary: 2000, factor: 12, minRole: 'minister', pa: true, commune: '', region: '', local: 0, vatRate: 18, size: '' },
    urlFields: { iwb: ['pa', 'bool'], role: ['minRole', 'str', MIN_ROLES] },
    communes: false,
    local: null,
    parseCommunes: () => [], communeLabel: () => '', communeTag: () => '', communeHint: () => '',
    partsHint: x => x.s.children > 0 ? t(x.s.household === 'joint' ? 'partsHint.couple' : 'partsHint.single') : '',
    minSalary: role => GOV[role],
    env: s => ({ partner: employeeSide(Math.max(0, s.partnerGross || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    segLabels: { iwb: 'iwbLost' }, recvLabels: { iwb: 'iwbReceived' },
    polNote: () => 'polNote.office',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'pay',
    refKeys: ['ssc', 'it', 'couple', 'iwb', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
