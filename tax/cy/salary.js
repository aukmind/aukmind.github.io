// Cyprus salary rules for income year 2026 (tax reform in force from 1 January 2026). Loaded by ../index.html?country=cy.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['mp', 'minister', 'president'];

  const P = {
    brackets: [[22000, 0], [32000, .20], [42000, .25], [72000, .30], [INF, .35]],
    si: { ee: .088, er: .088, cap: 68904, red: .012, hrd: .005, coh: .02 },
    gesy: { ee: .0265, er: .029, cap: 180000 },
    kids: [1000, 1250, 1500],
    // Gross family income limit by number of dependent children.
    kidLimit: n => n <= 2 ? 100000 : n <= 4 ? 150000 : 200000,
  };
  const MIN_WAGE = 1088;

  // Monthly gross: minimum wage after six months with the employer, CYSTAT median (2025) and mean (Q1 2026).
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 1968, year: 2025, color: '--w-med' },
    { key: 'avg', m: 2601, year: 2026, color: '--w-avg' },
  ];

  // Monthly gross with allowances, from 1 January 2026 (Treasury). A 13th payment of basic pay comes on top.
  const ROLE = { president: 14401, ag: 13531, speaker: 11456, minister: 9343, mp: 7911 };
  const DOC_PAY = 'https://en.sigmalive.com/cyprus-treasury-publishes-salaries-of-all-state-officials/';
  const DOC_MP = 'https://www.kiprinform.com/en/news/cyprus-mps-to-take-home-about-e5-500-a-month-official-data-shows/';
  const stat = (key, icon, url, hi) => ({ kind: 'stat', key, icon, regime: key, lo: ROLE[key] * 12, hi: hi || ROLE[key] * 12, url });
  const POLITICIANS = [
    stat('president', '⭐', DOC_PAY),
    stat('ag', '⚖️', DOC_PAY),
    stat('speaker', '🎙️', DOC_PAY),
    stat('minister', '💼', DOC_PAY),
    stat('mp', '🏛️', DOC_MP, 99612),
  ];

  const SRC = {
    scale: 'https://www.businessincyprus.gov.cy/business-sectors/registering-for-income-tax-and-value-added-tax/',
    reform: 'https://www.grantthornton.com.cy/globalassets/1.-member-firms/cyprus/shareable-pdf/grant-thornton-cyprus---tax-reform-package-2026.11.pdf',
    kidsDed: 'https://pgeconomides.eu/news/cyprus-tax-reform-2026-personal-tax-changes-impacting-payroll/',
    si: 'https://www.mondaq.com/cyprus/insurance-laws-and-products/1731958/amendment-to-the-maximum-amount-of-insurable-earnings-for-2026',
    si13: 'https://eurofast.eu/cyprus-the-13th-14th-salary-in-private-sector/',
    gesy: 'https://accounts-os.com/cy/questions/what-are-the-employer-payroll-contributions-in-cyprus',
    minWage: 'https://www.harriskyriakides.law/insights/news/cyprus-minimum-wage-2026-employer-duties/',
    wages: 'https://cyprus-mail.com/2026/07/29/average-monthly-pay-in-cyprus-rises-to-e2601-but-1-in-3-workers-earn-less-than-e1500',
    vat: 'https://taxsummaries.pwc.com/cyprus/individual/other-taxes',
    polPay: DOC_PAY,
    mpPay: DOC_MP,
  };

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const scale = x => slices(x, P.brackets).reduce((a, b) => a + b.amt, 0);

  const employee = G => {
    const si = P.si.ee * Math.min(G, P.si.cap), gesy = P.gesy.ee * Math.min(G, P.gesy.cap);
    return { G, si, gesy, ins: si + gesy };
  };
  const employerSide = G => {
    const capped = Math.min(G, P.si.cap);
    const si = P.si.er * capped, funds = (P.si.red + P.si.hrd) * capped, coh = P.si.coh * G, gesy = P.gesy.er * Math.min(G, P.gesy.cap);
    return { si, funds, coh, gesy, er: si + funds + coh + gesy };
  };

  const kidTotal = n => Array.from({ length: n }, (_, i) => P.kids[Math.min(i, 2)]).reduce((a, b) => a + b, 0);

  // One person: contributions come off within the 1/5 cap, then the child deduction.
  function personTax(u, kidDed) {
    const contrib = Math.min(u.ins, u.G / 5);
    const before = Math.max(0, u.G - contrib);
    const taxable = Math.max(0, before - kidDed);
    const raw = scale(before);
    return { G: u.G, contrib, before, kidDed, taxable, raw, slices: slices(before, P.brackets), tax: scale(taxable) };
  }

  // Each parent deducts the full amount (a single parent twice), if gross family income stays under the limit.
  function householdTax(mine, partner, kids) {
    const family = mine.G + (partner ? partner.G : 0);
    const ok = kids > 0 && family <= P.kidLimit(kids);
    const per = ok ? kidTotal(kids) * (partner ? 1 : 2) : 0;
    const me = personTax(mine, per), them = partner ? personTax(partner, per) : null;
    const raw = me.raw + (them ? them.raw : 0), total = me.tax + (them ? them.tax : 0);
    return { me, them, family, ok, per, raw, total };
  }

  const none = employee(0);

  // Your share = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', pu = couple ? env.partner : null;
    const hh = householdTax(u, pu, s.children);
    const wo = couple ? householdTax(none, pu, s.children) : null;
    const ir = hh.raw - (wo ? wo.raw : 0);
    const kids = (hh.total - hh.raw) - (wo ? wo.total - wo.raw : 0);
    return { hh, wo, ir, kids };
  }

  function compute(G, s, env) {
    const u = employee(G);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const emp = employerSide(G);
    const net = G - u.ins - tax.ir - tax.kids;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + emp.er, net, u, tax, emp, vatShare, regime: s.regime === 'minister' ? 'minister' : undefined,
      parts: { er: emp.er, ee: u.ins, ir: tax.ir, kids: tax.kids, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'kids', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', kids: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'kids', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'kids'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'kids'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const capped = G => Math.min(G, P.si.cap);
    const irTable = p => `${row(t('tip.irIncome'), p.G)}${row('− ' + t('bd.contrib'), -p.contrib)}${row('= ' + t('bd.taxable'), p.before)}
      ${p.slices.filter(b => b.r > 0).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}`, b.amt)).join('')}
      ${tot(t('tip.irPerson'), p.raw)}`;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('polPay', 'mpPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('polPay', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>${sources('si13')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('kidsDed', 'reform')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.si.cap), eur(P.gesy.cap))}</p>${r ? `<table>
          ${row(`${t('bd.erSi')} ${pct(P.si.er, 1)} × ${eur(capped(r.G))}`, r.emp.si)}
          ${row(`${t('bd.erFunds')} ${pct(P.si.red + P.si.hrd, 1)} × ${eur(capped(r.G))}`, r.emp.funds)}
          ${row(`${t('bd.erCoh')} ${pct(P.si.coh, 0)} × ${eur(r.G)}`, r.emp.coh)}
          ${row(`${t('bd.erGesy')} ${pct(P.gesy.er, 1)} × ${eur(Math.min(r.G, P.gesy.cap))}`, r.emp.gesy)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}${sources('si', 'gesy')}`,
      erSi: () => `<h4>${t('bd.erSi')}</h4><p>${t('tip.erSi', eur(P.si.cap))}</p>${sources('si')}`,
      erFunds: () => `<h4>${t('bd.erFunds')}</h4><p>${t('tip.erFunds', eur(P.si.cap))}</p>${sources('si')}`,
      erCoh: () => `<h4>${t('bd.erCoh')}</h4><p>${t('tip.erCoh')}</p>${sources('si')}`,
      erGesy: () => `<h4>${t('bd.erGesy')}</h4><p>${t('tip.erGesy', eur(P.gesy.cap))}</p>${sources('gesy')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.si.cap), eur(P.gesy.cap))}</p>${r ? `<table>
          ${row(`${t('bd.eeSi')} ${pct(P.si.ee, 1)} × ${eur(capped(r.G))}`, r.u.si)}
          ${row(`${t('bd.eeGesy')} ${pct(P.gesy.ee, 2)} × ${eur(Math.min(r.G, P.gesy.cap))}`, r.u.gesy)}
          ${tot(t('youPay'), r.u.ins)}</table>` : ''}${sources('si', 'gesy')}`,
      eeSi: () => `<h4>${t('bd.eeSi')}</h4><p>${t('tip.eeSi', eur(P.si.cap))}</p>${sources('si', 'si13')}`,
      eeGesy: () => `<h4>${t('bd.eeGesy')}</h4><p>${t('tip.eeGesy', eur(P.gesy.cap))}</p>${sources('gesy')}`,
      contrib: () => `<h4>${t('bd.contrib')}</h4><p>${t('tip.contrib')}</p>${sources('reform')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.tax.hh.me.before)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('scale', 'reform')}`;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>${irTable(r.tax.hh.me)}</table>${sources('scale', 'reform')}`;
      },
      kids: r => {
        const d = r && r.tax;
        const limit = P.kidLimit(Math.max(1, s.children));
        return `<h4>${t('comp.kids')}</h4><p>${t('tip.kids', eur(P.kids[0]), eur(P.kids[1]), eur(P.kids[2]), eur(limit))}</p>${d && s.children ? `<table>
          ${row(t('tip.kidsFamily'), d.hh.family)}
          ${row(t('tip.kidsPer'), d.hh.per)}
          ${row(t('tip.kidsSaved'), d.hh.raw - d.hh.total)}
          ${d.wo ? row('− ' + t('tip.kidsWithout'), -(d.wo.raw - d.wo.total)) : ''}
          ${tot(t('tip.irYours'), -r.parts.kids)}</table>
          ${!d.hh.ok ? `<p class="m">${t('tip.kidsLost', eur(limit))}</p>` : ''}` : ''}${sources('kidsDed', 'reform')}`;
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
    const p = r.parts, min = r.regime === 'minister', me = r.tax.hh.me;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'erSi', label: t('bd.erSi'), v: r.emp.si, tax: r.emp.si, cls: 'sub' },
      { op: '+', k: 'erFunds', label: t('bd.erFunds'), v: r.emp.funds, tax: r.emp.funds, cls: 'sub' },
      { op: '+', k: 'erCoh', label: t('bd.erCoh'), v: r.emp.coh, tax: r.emp.coh, cls: 'sub' },
      { op: '+', k: 'erGesy', label: t('bd.erGesy'), v: r.emp.gesy, tax: r.emp.gesy, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'eeSi', label: t('bd.eeSi'), v: r.u.si, tax: r.u.si },
      { op: '−', k: 'eeGesy', label: t('bd.eeGesy'), v: r.u.gesy, tax: r.u.gesy },
      { op: '', k: 'contrib', label: t('bd.contrib'), v: me.contrib, cls: 'sub' },
    ];
    L.push(
      { op: '', k: 'taxable', label: t('bd.taxable'), v: me.before, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
    );
    if (Math.abs(p.kids) > .5) L.push({ op: p.kids < 0 ? '+' : '−', k: 'kids', label: t(p.kids < 0 ? 'kidsReceived' : 'kidsLost'), v: Math.abs(p.kids), tax: p.kids });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // No benefit modelled here: contributions from the first euro, income tax only above the 22,000 band.
  function trap(x) {
    const s = x.s, m = MIN_WAGE * 12 / s.factor;
    const zero = x.firstMonthly(mm => personTax(employee(mm * s.factor), 0).before > P.brackets[0][0], 0, 20000);
    return { band: [m, m], text: [x.fmtM(m, 10), null, zero ? x.fmtM(zero, 10) + x.perUnit() : ''] };
  }

  // 35% from 72,000 taxable; the social insurance ceiling lowers the marginal rate; the child deduction stops at a family income limit.
  function top(x) {
    const s = x.s;
    const at = x.firstMonthly(mm => personTax(employee(mm * s.factor), 0).before > P.brackets[3][0], 0, 50000);
    const kidsAt = s.children > 0 ? P.kidLimit(s.children) - (s.household === 'joint' ? x.env().partner.G : 0) : null;
    return {
      at: at || 0,
      text: [x.fmtM(at || 0, 10) + x.perUnit(), x.fmtM(P.si.cap / s.factor, 10) + x.perUnit(),
        kidsAt != null && kidsAt > 0 ? x.fmtM(kidsAt / s.factor, 10) + x.perUnit() : null, s.children > 0 ? eur(P.kidLimit(s.children)) : null],
    };
  }

  return {
    GAPS: ['kidsCliff', 'singleParent', 'kidsAge', 'si13', 'deductions', 'median', 'minWage', 'official13', 'officialTax', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12, 13], factorDigits: 0, vatStandard: 19,
    features: {},
    communes: false,
    local: null,
    state: { salary: 2000, factor: 12, minRole: 'minister', commune: '', region: '', local: 0, vatRate: 19, size: '' },
    urlFields: { role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => ROLE[role] * 12,
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: 0 }),
    segLabels: { kids: 'kidsLost' }, recvLabels: { kids: 'kidsReceived' },
    polNote: p => 'polNote.' + (p.regime === 'mp' ? 'mp' : 'official'),
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'polPay',
    refKeys: ['er', 'ee', 'ir', 'kids', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
