// Andorran salary rules for income year 2026. Loaded by ../index.html?country=ad.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['minister', 'pm'];

  const P = {
    ee: { gen: .03, pen: .035 },
    er: { gen: .07, pen: .085 },
    exp: { rate: .03, max: 2500 },
    min: 24000, minSpouse: 40000,
    kid: 1000,
    rate: .10,
    bonus: { share: .5, max: 800 },
    // Reference table: rates on net work income for a single person.
    brackets: [[24000, 0], [40000, .05], [INF, .10]],
  };
  const MIN_WAGE = 1568.67;

  // Monthly gross: minimum wage from 1 July 2026, CASS median and mean of May 2026.
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 2235.73, year: 2026, color: '--w-med' },
    { key: 'avg', m: 2760.46, year: 2026, color: '--w-avg' },
  ];

  // Monthly gross, February 2020: the latest figures the Govern has published.
  const ROLE = {
    pm: { m: 6849.38 },
    minister: { m: 5823.07 },
  };
  const DOC_PAY = 'https://www.consellgeneral.ad/fitxers/documents/bcg-2020/39-2020';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: ROLE.pm.m * 12, hi: ROLE.pm.m * 12, url: DOC_PAY },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: ROLE.minister.m * 12, hi: ROLE.minister.m * 12, url: DOC_PAY },
  ];

  const SRC = {
    law: 'https://www.consellgeneral.ad/ca/arxiu/arxiu-de-lleis-i-textos-aprovats-en-legislatures-anteriors/vi-legislatura-2011-2015/copy_of_lleis-aprovades/llei-5-2014-del-24-d2019abril-de-l2019impost-sobre-la-renda-de-les-persones-fisiques/at_download/PDF',
    guide: 'https://www.govern.ad/documents/d/guest/guia_irpf',
    cass: 'https://www.consellgeneral.ad/fitxers/documents/lleis-2008/llei-17-2008.pdf',
    minWage: 'https://www.alto.ad/business/andorra-raises-minimum-wage-to-1-525-33-wit-260114',
    wages: 'https://www.alto.ad/business/2026/08/andorra-jobseekers-drop-job-openings-hires-july',
    vat: 'https://andorra-solutions.com/taxes-andorra',
    polPay: DOC_PAY,
  };

  const employee = G => {
    const gen = P.ee.gen * G, pen = P.ee.pen * G, ins = gen + pen;
    const exp = Math.min(P.exp.rate * G, P.exp.max);
    return { G, gen, pen, ins, exp, N: Math.max(0, G - ins - exp) };
  };
  const employerSide = G => {
    const gen = P.er.gen * G, pen = P.er.pen * G;
    return { gen, pen, er: gen + pen };
  };

  // One taxpayer. The bonus is always worked out on the plain 24,000 minimum, before family reductions.
  function personTax(N, M, fam) {
    const minUsed = Math.min(N, M), famUsed = Math.min(Math.max(0, N - M), fam);
    const base = Math.max(0, N - M - fam);
    const quota = P.rate * base;
    const bonusMax = Math.min(P.bonus.max, P.bonus.share * P.rate * Math.max(0, N - P.min));
    const bonus = Math.min(bonusMax, quota);
    return { N, M, minUsed, fam, famUsed, base, quota, bonusMax, bonus, tax: quota - bonus };
  }

  // A spouse with little or no income hands over the unused part of their minimum, up to 40,000 between the two.
  const minFor = (mine, other) => other ? Math.max(P.min, P.minSpouse - Math.min(other.N, P.min)) : P.min;

  function householdTax(mine, partner, kids) {
    const share = partner ? .5 : 1;
    const fam = kids * P.kid * share;
    const me = personTax(mine.N, minFor(mine, partner), fam);
    const meNoKids = personTax(mine.N, minFor(mine, partner), 0);
    const them = partner ? personTax(partner.N, minFor(partner, mine), fam) : null;
    const themNoKids = partner ? personTax(partner.N, minFor(partner, mine), 0) : null;
    const pre = meNoKids.tax + (themNoKids ? themNoKids.tax : 0);
    const total = me.tax + (them ? them.tax : 0);
    return { me, them, meNoKids, themNoKids, pre, total };
  }

  const none = employee(0);

  // Your share = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', pu = couple ? env.partner : null;
    const hh = householdTax(u, pu, s.children);
    const wo = couple ? householdTax(none, pu, s.children) : null;
    const preWo = wo ? wo.pre : 0, totWo = wo ? wo.total : 0;
    const ir = hh.pre - preWo;
    const kids = (hh.total - hh.pre) - (totWo - preWo);
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

  // Gross pay whose net work income reaches N (the 3% expense cap binds above 83,333).
  const grossFor = N => {
    const g = N / (1 - P.ee.gen - P.ee.pen - P.exp.rate);
    return g * P.exp.rate <= P.exp.max ? g : (N + P.exp.max) / (1 - P.ee.gen - P.ee.pen);
  };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const irTable = (p, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${row(t('bd.taxable'), p.N)}
      ${row('− ' + t('bd.minimum'), -p.minUsed)}
      ${row(`${pct(P.rate, 0)} × ${eur(p.base)}`, p.quota)}
      ${p.bonus > .005 ? row('− ' + t('bd.bonus'), -p.bonus) : ''}
      ${tot(t('tip.irPre'), p.tax)}`;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('polPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('polPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.f14')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.min), eur(P.minSpouse))}</p>${sources('guide')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>
          ${row(`${t('bd.erGen')} ${pct(P.er.gen, 0)} × ${eur(r.G)}`, r.emp.gen)}
          ${row(`${t('bd.erPen')} ${pct(P.er.pen, 1)} × ${eur(r.G)}`, r.emp.pen)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 1)}`, r.parts.er)}</table>` : ''}${sources('cass')}`,
      erGen: () => `<h4>${t('bd.erGen')}</h4><p>${t('tip.erGen')}</p>${sources('cass')}`,
      erPen: () => `<h4>${t('bd.erPen')}</h4><p>${t('tip.erPen')}</p>${sources('cass')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>
          ${row(`${t('bd.eeGen')} ${pct(P.ee.gen, 0)} × ${eur(r.G)}`, r.u.gen)}
          ${row(`${t('bd.eePen')} ${pct(P.ee.pen, 1)} × ${eur(r.G)}`, r.u.pen)}
          ${tot(t('youPay'), r.u.ins)}</table>` : ''}${sources('cass')}`,
      eeGen: () => `<h4>${t('bd.eeGen')}</h4><p>${t('tip.eeGen')}</p>${sources('cass')}`,
      eePen: () => `<h4>${t('bd.eePen')}</h4><p>${t('tip.eePen')}</p>${sources('cass')}`,
      exp: r => `<h4>${t('bd.exp')}</h4><p>${t('tip.exp', eur(P.exp.max))}</p>${sources('guide')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', eur(P.exp.max))}</p>${r ? `<table>
          ${row(t('bd.gross'), r.G)}${row('− ' + t('comp.ee'), -r.u.ins)}${row('− ' + t('bd.exp'), -r.u.exp)}${tot(t('bd.taxable'), r.u.N)}</table>` : ''}${sources('guide')}`,
      minimum: () => `<h4>${t('bd.minimum')}</h4><p>${t('tip.minimum', eur(P.min), eur(P.minSpouse))}</p>${sources('guide')}`,
      bonus: () => `<h4>${t('bd.bonus')}</h4><p>${t('tip.bonus', eur(P.min), eur(P.bonus.max), eur(P.min + P.bonus.max / (P.bonus.share * P.rate)))}</p>${sources('guide', 'law')}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort', eur(P.min), eur(40000))}</p>${sources('guide', 'law')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>
          ${irTable(h.meNoKids, h.them ? t('tip.irYou') : '')}
          ${h.them ? irTable(h.themNoKids, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.pre)}${row('− ' + t('tip.irWithout'), -r.tax.wo.pre)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${sources('guide', 'law')}`;
      },
      kids: r => {
        const h = r && r.tax.hh;
        return `<h4>${t('comp.kids')}</h4><p>${t('tip.kids', eur(P.kid), eur(P.kid * P.rate))}</p>${h && s.children ? `<table>
          ${row(t('tip.kidsBase', s.children), h.me.fam)}
          ${row(t('tip.kidsUsedMe'), h.me.famUsed)}
          ${h.them ? row(t('tip.kidsUsedThem'), h.them.famUsed) : ''}
          ${tot(t('tip.irYours'), -r.parts.kids)}</table>` : ''}${sources('guide')}`;
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

  function breakdown(r, x) {
    const p = r.parts, min = r.regime === 'minister', me = r.tax.hh.meNoKids;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'erGen', label: t('bd.erGen'), v: r.emp.gen, tax: r.emp.gen, cls: 'sub' },
      { op: '+', k: 'erPen', label: t('bd.erPen'), v: r.emp.pen, tax: r.emp.pen, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'eeGen', label: t('bd.eeGen'), v: r.u.gen, tax: r.u.gen },
      { op: '−', k: 'eePen', label: t('bd.eePen'), v: r.u.pen, tax: r.u.pen },
      { op: '', k: 'exp', label: t('bd.exp'), v: r.u.exp, cls: 'sub' },
      { op: '', k: 'taxable', label: t('bd.taxable'), v: r.u.N, cls: 'sub' },
      { op: '', k: 'minimum', label: t('bd.minimum'), v: me.minUsed, cls: 'sub' },
    ];
    if (me.bonus > .5) L.push({ op: '', k: 'bonus', label: t('bd.bonus'), v: me.bonus, cls: 'sub' });
    L.push({ op: p.ir < 0 ? '+' : '−', k: 'ir', label: t('comp.ir'), v: Math.abs(p.ir), tax: p.ir });
    if (Math.abs(p.kids) > .5) L.push({ op: p.kids < 0 ? '+' : '−', k: 'kids', label: t(p.kids < 0 ? 'kidsReceived' : 'kidsLost'), v: Math.abs(p.kids), tax: p.kids });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // No benefit taper: CASS from the first euro, income tax only once net work income passes 24,000.
  function trap(x) {
    const s = x.s, m = MIN_WAGE * 12 / s.factor;
    return { band: [m, m], text: [x.fmtM(m, 100), null, x.fmtM(grossFor(P.min) / s.factor, 100) + x.perUnit()] };
  }

  // The 50% bonus runs out at 40,000 of net work income: from there each extra euro is taxed at 10%.
  function top(x) {
    const s = x.s, at = grossFor(P.min + P.bonus.max / (P.bonus.share * P.rate)) / s.factor;
    return { at, text: [x.fmtM(at, 100) + x.perUnit(), x.fmtM(grossFor(48000) / s.factor, 100) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12, 14], factorDigits: 0, vatStandard: 4.5,
    features: {},
    communes: false,
    local: null,
    state: { salary: 2800, factor: 12, minRole: 'minister', commune: '', region: '', local: 0, vatRate: 4.5, size: '' },
    urlFields: { role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => ROLE[role].m * 12,
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: 0 }),
    segLabels: { kids: 'kidsLost' }, recvLabels: { kids: 'kidsReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'polPay',
    refKeys: ['er', 'ee', 'ir', 'kids', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
