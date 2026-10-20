// Japanese salary rules for income year 2026 (calendar year). Loaded by ../index.html?country=jp.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const AGES = ['u40', 'o40'];
  const MIN_ROLES = ['pm', 'minOut', 'mp'];
  const pos = v => Math.max(0, Number(v) || 0);

  const P = {
    // National income tax on taxable income, plus the 2.1% reconstruction surtax.
    brackets: [[1950000, .05], [3300000, .10], [6950000, .20], [9000000, .23], [18000000, .33], [40000000, .40], [INF, .45]],
    surtax: .021,
    // Basic deduction for 2026 and 2027, by total income (2026 tax reform, in force 1 December 2026 for the whole year).
    basic: [[4890000, 1040000], [6550000, 670000], [23500000, 620000], [24000000, 480000], [24500000, 320000], [25000000, 160000], [INF, 0]],
    // Resident tax keeps its own, smaller deductions.
    res: { rate: .10, basic: [[24000000, 430000], [24500000, 290000], [25000000, 150000], [INF, 0]], percap: 5000, adj: .05, alone: 450000, per: 350000, add: 100000, addDep: 210000 },
    spouse: {
      it: { limit: 620000, top: 10000000, ded: [380000, 260000, 130000] },
      res: { limit: 580000, top: 10000000, ded: [330000, 220000, 110000] },
      // Special spouse deduction by the spouse's income, for a taxpayer with income up to 9, 9.5 and 10 million yen.
      steps: [950000, 1000000, 1050000, 1100000, 1150000, 1200000, 1250000, 1300000, 1330000],
      itSpecial: [[380000, 360000, 310000, 260000, 210000, 160000, 110000, 60000, 30000], [260000, 240000, 210000, 180000, 140000, 110000, 80000, 40000, 20000], [130000, 120000, 110000, 90000, 70000, 60000, 40000, 20000, 10000]],
      resSpecial: [[330000, 330000, 310000, 260000, 210000, 160000, 110000, 60000, 30000], [220000, 220000, 210000, 180000, 140000, 110000, 80000, 40000, 20000], [110000, 110000, 110000, 90000, 70000, 60000, 40000, 20000, 10000]],
    },
    // Kyokai Kenpo and employee pension, FY2026 (from March 2026). Health varies by prefecture: s.local.
    si: {
      pen: .183, penCap: 650000, penBonusCap: 1500000,
      care: .0162, kids: .0023, healthCap: 1390000, healthBonusCap: 5730000,
      eiEe: .005, eiEr: .0085, rosai: .003, kidsEr: .0036,
    },
    // Diet members: National Pension and National Health Insurance instead of employee schemes.
    diet: { np: 17920 * 12, nhi: 920000 + 30000, nhiCare: 170000, allow: 1000000 * 12 },
  };
  const MIN_WAGE = 1177 * 40 * 52 / 12;

  // Monthly scheduled pay, without overtime or bonuses: FY2026 minimum wage (weighted average, 40 h/week), 2025 wage census median and mean.
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 296600, year: 2025, color: '--w-med' },
    { key: 'avg', m: 340600, year: 2025, color: '--w-avg' },
  ];

  // Diet members get 1,294,000 yen a month plus about 6.35 million yen of term-end allowances. Since December 2025 a Diet member
  // who is Prime Minister or minister gets no ministerial top-up, so the Prime Minister and most ministers are paid as MPs.
  const SAIHI = 1294000, BONUS = Math.round(SAIHI * 1.45 * 3.4 / 1000) * 1000;
  const GOV = { mp: SAIHI * 12 + BONUS, pm: SAIHI * 12 + BONUS, minOut: 29000000, pmLaw: 40600000 };
  const DOC_LAW = 'https://laws.e-gov.go.jp/law/324AC0000000252';
  const DOC_DIET = 'https://laws.e-gov.go.jp/law/322AC1000000080';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'mp', lo: GOV.pm, hi: GOV.pm, url: DOC_LAW },
    { kind: 'stat', key: 'minOut', icon: '💼', lo: GOV.minOut, hi: GOV.minOut, url: DOC_LAW },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.mp, hi: GOV.mp, url: DOC_DIET },
    { kind: 'stat', key: 'pmLaw', icon: '📜', lo: GOV.pmLaw, hi: GOV.pmLaw, url: DOC_LAW },
  ];

  const SRC = {
    rates: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm',
    basic: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm',
    empDed: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm',
    reform: 'https://www.nta.go.jp/users/gensen/2026kiso/pdf/0026005-024.pdf',
    spouse: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1191.htm',
    spouseSp: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1195.htm',
    pwc: 'https://taxsummaries.pwc.com/japan/individual/taxes-on-personal-income',
    kenpo: 'https://www.kyoukaikenpo.or.jp/about/business/insurance_rate/premium_prefectures/r08',
    ei: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000108634.html',
    np: 'https://www.nenkin.go.jp/service/kokunen/hokenryo/hokenryo.html',
    minWage: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/minimumichiran/',
    census: 'https://www.mhlw.go.jp/toukei/itiran/roudou/chingin/kouzou/z2025/index.html',
    vat: 'https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6303.htm',
    minPay: DOC_LAW,
    dietPay: DOC_DIET,
  };

  const progressive = (x, br) => { let lo = 0, tax = 0; for (const [hi, r] of br) { if (x > lo) tax += (Math.min(x, hi) - lo) * r; lo = hi; } return tax; };
  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const step = (x, table) => table.find(([hi]) => x <= hi)[1];
  // Employment income deduction: 2026 table for income tax, the older 650,000 yen minimum for resident tax.
  const empDed = (G, min = 740000) => Math.min(G, Math.max(min, G <= 3600000 ? .3 * G + 80000 : G <= 6600000 ? .2 * G + 440000 : G <= 8500000 ? .1 * G + 1100000 : 1950000));

  // Employee social insurance on regular pay plus bonuses (two payments a year), each with its own ceilings.
  function social(G, factor, o40, health) {
    const m = G / factor, bonus = Math.max(0, G - 12 * m), q = P.si;
    const hBase = 12 * Math.min(m, q.healthCap) + Math.min(bonus, q.healthBonusCap);
    const pBase = 12 * Math.min(m, q.penCap) + 2 * Math.min(bonus / 2, q.penBonusCap);
    const care = o40 ? q.care : 0;
    const ee = { health: hBase * health / 2, care: hBase * care / 2, kids: hBase * q.kids / 2, pen: pBase * q.pen / 2, ei: G * q.eiEe };
    const er = { ...ee, ei: G * q.eiEr, rosai: G * q.rosai, kidsEr: pBase * q.kidsEr };
    const sum = o => Object.values(o).reduce((a, b) => a + b, 0);
    return { m, bonus, hBase, pBase, ee, er, eeTot: sum(ee), erTot: sum(er), pen: ee.pen, other: sum(ee) - ee.pen };
  }

  function employee(G, s) {
    const si = social(G, s.factor || 12, s.size === 'o40', (Number(s.local) || 9.85) / 100);
    return { G, si, ins: si.eeTot, inc: Math.max(0, G - empDed(G)), incR: Math.max(0, G - empDed(G, 650000)) };
  }

  const tier = inc => inc <= 9000000 ? 0 : inc <= 9500000 ? 1 : 2;
  function spouseDed(own, sp, which) {
    const q = P.spouse, c = q[which];
    if (sp == null || own > c.top) return 0;
    if (sp <= c.limit) return c.ded[tier(own)];
    const i = q.steps.findIndex(hi => sp <= hi);
    return i < 0 ? 0 : q[which === 'it' ? 'itSpecial' : 'resSpecial'][tier(own)][i];
  }

  // One person's income tax and resident tax. sp is the spouse's income when this person claims the spouse, deps the dependants.
  function personTax(p, sp, deps) {
    const basic = step(p.inc, P.basic);
    const spIt = spouseDed(p.inc, sp, 'it');
    const taxable = Math.max(0, Math.floor((p.inc - basic - p.ins - spIt) / 1000) * 1000);
    const base = progressive(taxable, P.brackets), surtax = base * P.surtax;
    const r = P.res, basicR = step(p.incR, r.basic), spR = spouseDed(p.incR, sp, 'res');
    const n = deps + (sp != null && sp <= P.spouse.res.limit ? 1 : 0);
    const exempt = p.incR <= (n ? r.per * (1 + n) + r.add + r.addDep : r.alone);
    const taxableR = Math.max(0, Math.floor((p.incR - basicR - p.ins - spR) / 1000) * 1000);
    const diff = 50000 + Math.max(0, spIt - spR);
    const adj = p.incR > 25000000 || !taxableR ? 0 : r.adj * (taxableR <= 2000000 ? Math.min(diff, taxableR) : Math.max(diff - (taxableR - 2000000), 50000));
    const income = exempt ? 0 : Math.max(0, r.rate * taxableR - adj);
    const res = exempt ? 0 : income + r.percap;
    return { basic, spIt, taxable, base, surtax, it: base + surtax, basicR, spR, taxableR, adj, income, percap: exempt ? 0 : r.percap, exempt, res, slices: slices(taxable, P.brackets) };
  }

  // Each spouse is taxed alone; one of them may claim the other. The household takes whichever claim costs least.
  function household(me, partner, kids) {
    const none = null;
    if (!partner) { const m = personTax(me, none, kids); return { me: m, them: null, claim: '', it: m.it, res: m.res }; }
    const meKids = me.inc >= partner.inc ? kids : 0, themKids = kids - meKids;
    let best = null;
    for (const claim of ['', 'me', 'them']) {
      const m = personTax(me, claim === 'me' ? partner.inc : none, meKids);
      const th = personTax(partner, claim === 'them' ? me.inc : none, themKids);
      const tot = m.it + m.res + th.it + th.res;
      if (!best || tot < best.tot - .5) best = { me: m, them: th, claim, it: m.it + th.it, res: m.res + th.res, tot };
    }
    return best;
  }

  function incomeTaxes(u, s, env) {
    const partner = s.household === 'joint' ? env.partner : null;
    const hh = household(u, partner, s.children);
    const wo = partner ? household({ G: 0, ins: 0, inc: 0, incR: 0 }, partner, s.children) : null;
    return { hh, wo, it: hh.it - (wo ? wo.it : 0), res: hh.res - (wo ? wo.res : 0) };
  }

  const vatOf = (net, s) => { const vatShare = s.vatRate / (100 + s.vatRate); return { vatShare, vat: s.vat ? Math.max(0, net) * vatShare : 0 }; };

  // Diet members: employment income, but National Pension and National Health Insurance (at its ceiling at this pay), no employer side.
  function computeDiet(G, s, env) {
    const d = P.diet, nhi = d.nhi + d.nhiCare;
    const u = { G, si: null, ins: d.np + nhi, np: d.np, nhi, inc: Math.max(0, G - empDed(G)), incR: Math.max(0, G - empDed(G, 650000)) };
    u.m = G / 12;
    const tax = incomeTaxes(u, s, env);
    const net = G - u.ins - tax.it - tax.res;
    const { vatShare, vat } = vatOf(net, s);
    return { G, cost: G, net, u, tax, vatShare, regime: 'minister', diet: true,
      parts: { er: 0, pen: d.np, ee: nhi, ir: tax.it, res: tax.res, vat } };
  }

  function computeEmployee(G, s, env) {
    const u = employee(G, s);
    u.m = u.si.m;
    const tax = incomeTaxes(u, s, env);
    const er = u.si.erTot;
    const net = G - u.ins - tax.it - tax.res;
    const { vatShare, vat } = vatOf(net, s);
    return { G, cost: G + er, net, u, tax, vatShare,
      parts: { er, pen: u.si.pen, ee: u.si.other, ir: tax.it, res: tax.res, vat } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') {
      if (s.minRole === 'minOut') return { ...computeEmployee(G, { ...s, factor: 12, size: 'o40' }, env), regime: 'minister' };
      return computeDiet(G, s, env);
    }
    return computeEmployee(G, s, env);
  }

  const COMP_KEYS = ['er', 'pen', 'ee', 'ir', 'res', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', pen: 'var(--k-csg)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', res: 'var(--k-com)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'pen', 'ee', 'ir', 'res', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'pen', 'ee', 'ir', 'res'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['pen', 'ee', 'ir', 'res'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const hRate = () => pct(s.local / 100, 2);
    const irTable = (p, d, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${row(t('bd.empInc'), d.inc)}${row('− ' + t('bd.basic'), -p.basic)}${row('− ' + t('bd.ins'), -d.ins)}
      ${p.spIt ? row('− ' + t('bd.spouse'), -p.spIt) : ''}${row('= ' + t('bd.taxableJp'), p.taxable)}
      ${p.slices.map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}`, b.amt)).join('')}
      ${row(`+ ${t('bd.surtax')} 2.1%`, p.surtax)}${tot(t('tip.irPerson'), p.it)}`;
    const resTable = (p, d, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${p.exempt ? `<tr><td colspan="2">${t('tip.resExempt')}</td></tr>` : `
      ${row(t('bd.empIncR'), d.incR)}${row('− ' + t('bd.basic'), -p.basicR)}${row('− ' + t('bd.ins'), -d.ins)}
      ${p.spR ? row('− ' + t('bd.spouse'), -p.spR) : ''}${row('= ' + t('bd.taxableJp'), p.taxableR)}
      ${row(`10% × ${eur(p.taxableR)}`, .1 * p.taxableR)}${p.adj ? row('− ' + t('bd.adj'), -p.adj) : ''}${row('+ ' + t('bd.percap'), p.percap)}`}
      ${tot(t('tip.resPerson'), p.res)}`;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t(r && r.diet ? 'tip.dietGross' : 'tip.minOutGross')}</p>${sources('dietPay', 'minPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('comp.er')}</h4><p>${t(r && r.diet ? 'tip.dietEr' : 'tip.er')}</p>`,
      pen: r => r && r.diet ? `<h4>${t('comp.pen')}</h4><p>${t('tip.dietPen')}</p><table>${tot('12 × ' + eur(17920), P.diet.np)}</table>${sources('np')}` : `<h4>${t('comp.pen')}</h4><p>${t('tip.pen')}</p>`,
      ee: r => r && r.diet ? `<h4>${t('bd.nhi')}</h4><p>${t('tip.dietNhi')}</p><table>${tot(t('bd.nhi'), r.parts.ee)}</table>` : `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('minPay', 'dietPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.fBonus', 2)}</p>`,
      factor16: () => `<h4>${t('tip.monthsPaid', 16)}</h4><p>${t('tip.fBonus', 4)}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('spouse', 'spouseSp')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.age')}</p>${sources('kenpo')}`,
      kenpoRule: () => `<h4>${t('kenpoLabel')}</h4><p>${t('tip.kenpoRule', num(x.localRange()[0], 2) + '%', num(x.localRange()[1], 2) + '%')}</p>${sources('kenpo')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const e = r && r.u.si && r.u.si.er;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${e ? `<table>
          ${row(`${t('bd.health')} ${pct(s.local / 200, 3)}`, e.health)}
          ${e.care ? row(`${t('bd.care')} 0.81%`, e.care) : ''}
          ${row(`${t('bd.kids')} 0.115%`, e.kids)}
          ${row(`${t('bd.pension')} 9.15%`, e.pen)}
          ${row(`${t('bd.ei')} 0.85%`, e.ei)}
          ${row(`${t('bd.rosai')} 0.3%`, e.rosai)}
          ${row(`${t('bd.kidsEr')} 0.36%`, e.kidsEr)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}${sources('kenpo', 'ei')}`;
      },
      pen: r => {
        const si = r && r.u.si;
        return `<h4>${t('comp.pen')}</h4><p>${t('tip.pen')}</p>${si ? `<table>${row(t('tip.penBase'), si.pBase)}${tot(`9.15% × ${eur(si.pBase)}`, si.ee.pen)}</table>` : ''}${sources('kenpo')}`;
      },
      ee: r => {
        const si = r && r.u.si;
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${si ? `<table>
          ${row(t('tip.healthBase'), si.hBase)}
          ${row(`${t('bd.health')} ${pct(s.local / 200, 3)}`, si.ee.health)}
          ${si.ee.care ? row(`${t('bd.care')} 0.81%`, si.ee.care) : ''}
          ${row(`${t('bd.kids')} 0.115%`, si.ee.kids)}
          ${row(`${t('bd.ei')} 0.5% × ${eur(r.G)}`, si.ee.ei)}
          ${tot(t('youPay'), si.other)}</table>` : ''}<p class="m">${t('tip.eeM')}</p>${sources('kenpo', 'ei')}`;
      },
      empDed: r => `<h4>${t('bd.empDed')}</h4><p>${t('tip.empDed')}</p>${r ? `<p>${eur(r.G)} − ${eur(r.G - r.u.inc)} = <b>${eur(r.u.inc)}</b></p>` : ''}${sources('empDed', 'reform')}`,
      basic: r => `<h4>${t('bd.basic')}</h4><p>${t('tip.basic')}</p>${r ? `<p><b>${eur(r.tax.hh.me.basic)}</b></p>` : ''}${sources('basic', 'reform')}`,
      taxable: r => `<h4>${t('bd.taxableJp')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.tax.hh.me.taxable)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('rates')}`;
        const h = r.tax.hh, d = r.u;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>
          ${irTable(h.me, d, h.them ? t('tip.irYou') : '')}
          ${h.them ? irTable(h.them, x.env().partner, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.it)}${row('− ' + t('tip.irWithout'), -r.tax.wo.it)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${h.claim ? `<p>${t('tip.claim', h.claim)}</p>` : ''}${sources('rates', 'basic', 'spouse')}`;
      },
      res: r => {
        if (!r) return `<h4>${t('comp.res')}</h4><p>${t('tip.res')}</p>${sources('pwc')}`;
        const h = r.tax.hh, d = r.u;
        return `<h4>${t('comp.res')}</h4><p>${t('tip.res')}</p><table>
          ${resTable(h.me, d, h.them ? t('tip.irYou') : '')}
          ${h.them ? resTable(h.them, x.env().partner, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.res)}${row('− ' + t('tip.irWithout'), -r.tax.wo.res)}${tot(t('tip.irYours'), r.parts.res)}` : ''}
          </table><p class="m">${t('tip.resM')}</p>${sources('pwc')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, me = r.tax.hh.me, d = r.u, min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (!r.diet) L.push({ op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'pen', label: t(r.diet ? 'bd.np' : 'comp.pen'), v: p.pen, tax: p.pen },
      { op: '−', k: 'ee', label: t(r.diet ? 'bd.nhi' : 'comp.ee'), v: p.ee, tax: p.ee },
      { op: '', k: 'empDed', label: t('bd.empDed'), v: r.G - d.inc, cls: 'sub' },
      { op: '', k: 'basic', label: t('bd.basic'), v: me.basic, cls: 'sub' },
      { op: '=', k: 'taxable', label: t('bd.taxableJp'), v: me.taxable, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '−', k: 'res', label: t('comp.res'), v: p.res, tax: p.res },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // No benefit to lose at low pay: the walls are where each tax starts.
  function trap(x) {
    const s = x.s, minM = MIN_WAGE * 12 / s.factor;
    return { band: [minM, minM], text: [x.fmtM(minM, 100) + x.perUnit(), null, eur(1100000), eur(1780000), eur(1060000), eur(1300000)] };
  }

  // The 45% bracket starts at 40 million yen of taxable income.
  function top(x) {
    const s = x.s;
    if (s.regime === 'minister') return null;
    const env = x.env();
    const at = x.firstMonthly(m => compute(m * s.factor, s, env).tax.hh.me.taxable > 40000000, 0, 1e7);
    if (!at) return null;
    return { at, text: [x.fmtM(at, 10000) + x.perUnit(), pct(.45 * 1.021 + .1, 1), eur(23500000 + 1950000)] };
  }

  return {
    GAPS: ['noCheck', 'basicReform', 'resTax', 'insRates', 'bonusSplit', 'minWage', 'census', 'topup', 'termEnd', 'dietNhi', 'dietAllow', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'JPY', nextStep: 15000,
    regions: [], sizes: AGES, minRoles: MIN_ROLES, factors: [12, 14, 16], factorDigits: 0, vatStandard: 10,
    features: {},
    state: { salary: 300000, factor: 14, minRole: 'pm', commune: '13', region: '', local: 9.85, vatRate: 10, size: 'u40' },
    urlFields: {
      months: ['factor', 'num', [12, 14, 16]], age: ['size', 'str', AGES],
      pref: ['commune', 'str'], kenpo: ['local', 'num'], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'kenpoLabel', tip: 'kenpoRule', digits: 2, step: .01, range: list => list.length ? [Math.min(...list.map(c => c.rate)), Math.max(...list.map(c => c.rate))] : [9.2, 10.6], notDue: () => false, hideInMinister: true },
    parseCommunes: list => list.map(([name, rate, sub, id]) => ({ name, rate, region: '', sub, id })),
    communeLabel: c => c.name,
    communeTag: c => `${num(c.rate, 2)}%`,
    communeHint: c => t('kenpoHint', num(c.rate, 2) + '%'),
    minSalary: role => GOV[role],
    env: s => ({ partner: employee(pos(s.partnerGross), s) }),
    compute,
    own: (p, plain, env) => ({ net: computeDiet(p.lo, plain, env).net + P.diet.allow, allow: P.diet.allow }),
    segLabels: {}, recvLabels: {},
    polNote: () => 'polNote.diet',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'dietPay',
    refKeys: ['er', 'ee', 'empDed', 'ir', 'res', 'couple', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
