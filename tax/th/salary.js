// Thailand salary rules for tax year 2026 (calendar year). Loaded by ../index.html?country=th.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['mp', 'minister', 'dpm', 'pm'];

  const P = {
    brackets: [[150000, 0], [300000, .05], [500000, .10], [750000, .15], [1000000, .20], [2000000, .25], [5000000, .30], [INF, .35]],
    expense: { rate: .5, max: 100000 },
    pers: 60000, spouse: 60000,
    // Second and later children born from 2018 get double; children are assumed born after 2018.
    child: 30000, childLater: 60000,
    ss: { rate: .05, cap: 17500 },
  };

  // Highest daily minimum wage (Bangkok and a few provinces), × 30 days.
  const REF_WAGES = [
    { key: 'min', m: 400 * 30, year: 2026, color: '--w-min' },
  ];

  // Royal Decree on political office pay (2011): monthly salary + position allowance.
  const PAY = { pm: (75590 + 50000) * 12, dpm: (74420 + 45500) * 12, minister: (73240 + 42500) * 12, mp: (71230 + 42330) * 12 };
  const DOC_PM = 'https://en.wikipedia.org/wiki/Prime_Minister_of_Thailand';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: PAY.pm, hi: PAY.pm, url: DOC_PM },
    { kind: 'stat', key: 'dpm', icon: '🎖️', regime: 'dpm', lo: PAY.dpm, hi: PAY.dpm, url: DOC_PM },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: PAY.minister, hi: PAY.minister, url: DOC_PM },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: PAY.mp, hi: PAY.mp, url: DOC_PM },
  ];

  const SRC = {
    pit: 'https://taxsummaries.pwc.com/thailand/individual/taxes-on-personal-income',
    ded: 'https://taxsummaries.pwc.com/thailand/individual/deductions',
    ss: 'https://taxsummaries.pwc.com/thailand/individual/other-taxes',
    sso: 'https://www.sso.go.th/',
    rd: 'https://www.rd.go.th/english/',
    vat: 'https://taxsummaries.pwc.com/thailand/corporate/other-taxes',
    minWage: 'https://tradingeconomics.com/thailand/minimum-wages',
    pol: DOC_PM,
  };

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const childAllow = n => n > 0 ? P.child + P.childLater * (n - 1) : 0;

  // Social security on the monthly salary only: bonuses aren't contributory wages.
  const ssOf = (G, factor) => G > 0 ? P.ss.rate * Math.min(G / factor, P.ss.cap) * 12 : 0;
  const employee = (G, factor) => ({ G, ss: ssOf(G, factor) });

  function personTax(G, ss, spouse, kids) {
    if (G <= 0) return { G: 0, expense: 0, allow: 0, ss: 0, taxable: 0, slices: [], tax: 0, spouse: false, kidsA: 0 };
    const expense = Math.min(G * P.expense.rate, P.expense.max);
    const kidsA = childAllow(kids);
    const allow = P.pers + (spouse ? P.spouse : 0) + kidsA;
    const taxable = Math.max(0, G - expense - allow - ss);
    const sl = slices(taxable, P.brackets);
    return { G, expense, allow, ss, taxable, slices: sl, tax: sl.reduce((a, b) => a + b.amt, 0), spouse, kidsA };
  }

  // Each spouse files alone; one with no income gives the other the spouse allowance. Each earning parent claims the children.
  function householdTax(me, partner, kids) {
    if (!partner) { const m = personTax(me.G, me.ss, false, kids); return { me: m, them: null, total: m.tax }; }
    const m = personTax(me.G, me.ss, partner.G <= 0, kids);
    const th = personTax(partner.G, partner.ss, me.G <= 0, kids);
    return { me: m, them: th, total: m.tax + th.tax };
  }

  function incomeTax(u, s, env) {
    const pu = s.household === 'joint' ? env.partner : null;
    const hh = householdTax(u, pu, s.children);
    const wo = pu ? householdTax({ G: 0, ss: 0 }, pu, s.children) : null;
    return { hh, wo, ir: hh.total - (wo ? wo.total : 0) };
  }

  const withVat = (s, net) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  // Political office holders aren't under the Social Security Act; their salary and allowance are taxed as employment income.
  function computeMinister(G, s, env, role = s.minRole) {
    const u = { G, ss: 0, role };
    const tax = incomeTax(u, s, env);
    const net = G - tax.ir;
    return { G, cost: G, net, u, tax, regime: 'minister', parts: { er: 0, ee: 0, ir: tax.ir, vat: withVat(s, net) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = employee(G, s.factor);
    u.m = G / s.factor;
    const tax = incomeTax(u, s, env);
    const er = u.ss;
    const net = G - u.ss - tax.ir;
    return { G, cost: G + er, net, u, tax, parts: { er, ee: u.ss, ir: tax.ir, vat: withVat(s, net) } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const irTable = (p, label) => {
      const br = p.slices.filter(b => b.r > 0).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}`, b.amt)).join('');
      return `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
        ${row(t('tip.irIncome'), p.G)}${row('− ' + t('bd.expense'), -p.expense)}${row('− ' + t('bd.allow'), -p.allow)}${p.ss ? row('− ' + t('comp.ee'), -p.ss) : ''}
        ${row('= ' + t('bd.taxable'), p.taxable)}${br}${tot(t('tip.irPerson'), p.tax)}`;
    };
    const ssRow = r => {
      const m = Math.min(r.u.m, P.ss.cap);
      return row(`5% × ${eur(m)} × 12`, r.u.ss);
    };
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('pol')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minSs')}</p>`,
      ee: () => `<h4>${t('comp.ee')}</h4><p>${t('tip.minSs')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pol')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.fBonus')}</p>`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.fBonus')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('ded')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.u.m != null ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r && r.u.ss ? `<table>${ssRow(r)}${tot(t('total'), r.parts.er)}</table>` : ''}${sources('ss', 'sso')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r && r.u.ss ? `<table>${ssRow(r)}${tot(t('youPay'), r.u.ss)}</table>` : ''}${sources('ss', 'sso')}`,
      expense: r => `<h4>${t('bd.expense')}</h4><p>${t('tip.expense', r && r.tax ? ` <b>${eur(r.tax.hh.me.expense)}</b>` : '')}</p>${sources('ded')}`,
      allow: r => {
        const me = r && r.tax.hh.me;
        return `<h4>${t('bd.allow')}</h4><p>${t('tip.allow')}</p>${me && me.G > 0 ? `<table>
          ${row(t('tip.allowPers'), P.pers)}
          ${me.spouse ? row(t('tip.allowSpouse'), P.spouse) : ''}
          ${me.kidsA ? row(t('tip.allowKids', s.children), me.kidsA) : ''}
          ${tot(t('total'), me.allow)}</table>` : ''}${sources('ded')}`;
      },
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.tax.hh.me.taxable)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('pit')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><table>
          ${irTable(h.me, h.them ? t('tip.irYou') : '')}
          ${h.them && h.them.G > 0 ? irTable(h.them, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.total)}${row('− ' + t('tip.irWithout'), -r.tax.wo.total)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${sources('pit', 'ded')}`;
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
    const p = r.parts, me = r.tax.hh.me, min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (p.er > .5) L.push({ op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (p.ee > .5) L.push({ op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee });
    L.push(
      { op: '', k: 'expense', label: t('bd.expense'), v: me.expense, cls: 'sub' },
      { op: '', k: 'allow', label: t('bd.allow'), v: me.allow, cls: 'sub' },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: me.taxable, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // No means-tested benefit for workers, so no trap: the note says where income tax starts.
  function trap(x) {
    const s = x.s, m = REF_WAGES[0].m;
    const free = x.firstMonthly(v => compute(v * s.factor, s, x.env()).parts.ir > 0, 0, 200000);
    return { band: [m, m], text: [x.fmtM(m, 10), free ? x.fmtM(free, 100) + x.perUnit() : null] };
  }

  // The 35% bracket starts at 5 million baht of net income.
  function top(x) {
    const s = x.s;
    const at = x.firstMonthly(v => compute(v * s.factor, s, x.env()).tax.hh.me.taxable > 5000000, 100000, 2000000);
    if (!at) return null;
    return { at, text: [x.fmtM(at, 1000) + x.perUnit(), null, x.fmtM(P.ss.cap, 10)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'THB', nextStep: 4000,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12, 13, 14], factorDigits: 0, vatStandard: 7,
    features: {},
    communes: false,
    local: null,
    state: { salary: 30000, factor: 12, minRole: 'minister', commune: '', region: '', local: 0, vatRate: 7, size: '' },
    urlFields: { role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => PAY[role],
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0), 12) }),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: p => 'polNote.office',
    polTipNote: p => 'polNote.office',
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'pol',
    refKeys: ['ss', 'ir', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
