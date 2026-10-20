// Canada salary rules for tax year 2026. Loaded by ../index.html?country=ca.
// Provincial and territorial rules come from communes.js (rebuilt by update_communes.py ca).
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['mp', 'sec', 'min', 'pm'];

  const P = {
    fed: { b: [[0, .14], [58523, .205], [117045, .26], [181440, .29], [258482, .33]],
      bpa: { max: 16452, min: 14829, from: 181440, to: 258482 }, cea: 1501, abate: .165 },
    cpp: { ympe: 74600, yampe: 85000, ex: 3500, rate: .0595, base: .0495, rate2: .04 },
    qpp: { rate: .063, base: .053 },
    ei: { max: 68900, rate: .0163, qc: .013, er: 1.4 },
    qpip: { max: 103000, ee: .0043, er: .00602 },
    ccb: { u6: 8157, o6: 6883, t1: 38237, t2: 82847, r1: [.07, .135, .19, .23], base2: [3123, 6022, 8476, 10260], r2: [.032, .057, .08, .095] },
    cwb: { min: 3000, rate: .27, max: { s: 1665, f: 2869 }, from: { s: 27392, f: 31251 }, out: .15, sec: 16714 },
    lift: { rate: .0505, max: 875, from: 32500, fromF: 65000, out: .10 },
    // Reference table: federal brackets on taxable income, after the basic personal amount.
    brackets: [[16452, 0], [58523, .14], [117045, .205], [181440, .26], [258482, .29], [INF, .33]],
  };
  const MIN_WAGE = 18.15 * 40 * 52 / 12;

  // Monthly gross: federal minimum wage at 40 h/week (1 April 2026); LFS average hourly wage (September 2026) at 37.5 h/week.
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'avg', m: 37.64 * 37.5 * 52 / 12, year: 2026, color: '--w-avg' },
  ];

  // Sessional allowance plus additional salary, from 1 April 2026.
  const GOV = { mp: 217700, sec: 217700 + 77500, min: 217700 + 103600, pm: 217700 + 217700 };
  const DOC_PAY = 'https://www.ourcommons.ca/boie/en/by-laws-and-policies/mas/allowance-and-additional-salaries';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_PAY },
    { kind: 'stat', key: 'min', icon: '💼', regime: 'min', lo: GOV.min, hi: GOV.min, url: DOC_PAY },
    { kind: 'stat', key: 'sec', icon: '📋', regime: 'sec', lo: GOV.sec, hi: GOV.sec, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.mp, hi: GOV.mp, url: DOC_PAY },
  ];

  const T4127 = 'https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jan.html';
  const SRC = {
    t4127: T4127,
    t4127jul: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/payroll/t4127-payroll-deductions-formulas/t4127-jul.html',
    index: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/adjustment-personal-income-tax-benefit-amounts.html',
    ccb: 'https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview/canada-child-benefit-we-calculate-your-ccb.html',
    cwb: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/topics/about-your-tax-return/tax-return/completing-a-tax-return/deductions-credits-expenses/line-45300-canada-workers-benefit-cwb/how-much-you-can-get.html',
    pwc: 'https://taxsummaries.pwc.com/canada/individual/taxes-on-personal-income',
    pwcOther: 'https://taxsummaries.pwc.com/canada/corporate/other-taxes',
    eyQc: 'https://www.ey.com/content/dam/ey-unified-site/ey-com/en-ca/services/tax/tax-calculators/2026/ey-tax-rates-quebec-2026-06-15.pdf',
    pay: DOC_PAY,
    minWage: 'https://minwage-salairemin.service.canada.ca/en/general.html',
    lfs: 'https://www150.statcan.gc.ca/n1/daily-quotidien/261009/dq261009a-eng.htm',
  };

  // Filled by parseCommunes: rules by province code.
  let PROV = {};

  const slices = (x, br) => {
    const out = [];
    br.forEach(([lo, r], i) => {
      const hi = i + 1 < br.length ? br[i + 1][0] : INF;
      if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r });
    });
    return out;
  };
  const sum = sl => sl.reduce((a, b) => a + b.amt, 0);
  const clamp01 = v => Math.min(1, Math.max(0, v));

  const fedBpa = ni => { const b = P.fed.bpa; return b.max - (b.max - b.min) * clamp01((ni - b.from) / (b.to - b.from)); };

  function ohp(a) {
    if (a <= 20000) return 0;
    if (a <= 36000) return Math.min(300, .06 * (a - 20000));
    if (a <= 48000) return Math.min(450, 300 + .06 * (a - 36000));
    if (a <= 72000) return Math.min(600, 450 + .25 * (a - 48000));
    if (a <= 200000) return Math.min(750, 600 + .25 * (a - 72000));
    return Math.min(900, 750 + .25 * (a - 200000));
  }

  // Employee CPP/QPP, EI and QPIP. MPs and ministers aren't insurable for EI.
  function contrib(G, qc, noEi) {
    const c = P.cpp, rate = qc ? P.qpp.rate : c.rate, base = qc ? P.qpp.base : c.base;
    const c1 = rate * Math.max(0, Math.min(G, c.ympe) - c.ex);
    const c2 = c.rate2 * Math.max(0, Math.min(G, c.yampe) - c.ympe);
    const ei = noEi ? 0 : Math.min(G, P.ei.max) * (qc ? P.ei.qc : P.ei.rate);
    const qpip = qc ? Math.min(G, P.qpip.max) * P.qpip.ee : 0;
    return { c1, c2, cBase: c1 * base / rate, cAdd: c1 * (1 - base / rate) + c2, ei, qpip, total: c1 + c2 + ei + qpip };
  }

  // One person's income taxes. o: { spouseNet, dep, kids, famNet, noEi }.
  function person(G, code, o) {
    const pr = PROV[code] || { b: [[0, 0]], bpa: 0 }, qc = code === 'QC';
    const k = contrib(G, qc, o.noEi);
    const ptax = (pr.ptax || 0) / 100 * G;
    const ni = Math.max(0, G - k.cAdd);

    // Federal
    const bpaF = fedBpa(ni);
    const spF = o.spouseNet != null ? Math.max(0, bpaF - o.spouseNet) : 0;
    const depF = o.dep ? bpaF : 0;
    const credF = { bpa: bpaF, spouse: spF, dep: depF, cpp: k.cBase, ei: k.ei + k.qpip, cea: Math.min(G, P.fed.cea) };
    const credFsum = Object.values(credF).reduce((a, b) => a + b, 0);
    const slF = slices(ni, P.fed.b), basicF = sum(slF);
    const t3 = Math.max(0, basicF - .14 * credFsum);
    const abate = qc ? P.fed.abate * t3 : 0;
    const fed = t3 - abate;

    // Provincial
    let pv;
    if (qc) {
      const ed = Math.min(pr.empDed.max, pr.empDed.rate * G);
      const ti = Math.max(0, ni - ed);
      const sp = o.spouseNet != null ? Math.max(0, pr.bpa - o.spouseNet) : 0;
      const sl = slices(ti, pr.b), gross = sum(sl);
      const cred = pr.b[0][1] * (pr.bpa + sp);
      pv = { ti, ed, slices: sl, gross, bpa: pr.bpa, spouse: sp, dep: 0, cred, surtax: 0, red: 0, lift: 0, ohp: 0, tax: Math.max(0, gross - cred) };
    } else {
      const low = pr.b[0][1];
      let bpa = pr.bpaFed ? fedBpa(ni) : pr.bpa;
      if (pr.bpaPhase) bpa *= 1 - clamp01((ni - pr.bpaPhase[0]) / (pr.bpaPhase[1] - pr.bpaPhase[0]));
      const sp = o.spouseNet != null ? Math.max(0, bpa - o.spouseNet) : 0, dep = o.dep ? bpa : 0;
      const base = bpa + sp + dep + k.cBase + k.ei + (pr.cea ? Math.min(G, pr.cea) : 0);
      let cred = low * base;
      if (pr.supp) cred += Math.max(0, (cred - pr.supp.floor) * pr.supp.rate);
      const sl = slices(ni, pr.b), gross = sum(sl);
      const t4 = Math.max(0, gross - cred);
      let surtax = 0, red = 0, lift = 0, oh = 0;
      if (pr.surtax) surtax = pr.surtax.reduce((a, [th, r]) => a + r * Math.max(0, t4 - th), 0);
      if (pr.otr) red = Math.max(0, Math.min(t4 + surtax, 2 * (pr.otr.base + pr.otr.kid * (o.kids || 0)) - (t4 + surtax)));
      if (pr.red) red = Math.min(t4, Math.max(0, pr.red.max - pr.red.rate * Math.max(0, ni - pr.red.from)));
      if (code === 'ON') {
        const L = P.lift, cut = Math.max(L.out * Math.max(0, ni - L.from), o.famNet != null ? L.out * Math.max(0, o.famNet - L.fromF) : 0);
        lift = Math.min(t4 + surtax - red, Math.max(0, Math.min(L.max, L.rate * G) - cut));
        oh = pr.ohp ? ohp(ni) : 0;
      }
      pv = { ti: ni, slices: sl, gross, bpa, spouse: sp, dep, cred, t4, surtax, red, lift, ohp: oh, tax: t4 + surtax - red - lift + oh };
    }
    return { G, k, ptax, ni, fed: { slices: slF, basic: basicF, cred: credF, credSum: credFsum, t3, abate, tax: fed }, pv };
  }

  function ccb(afni, kids, u6) {
    if (!kids) return 0;
    const c = P.ccb, n = Math.min(4, kids) - 1;
    const max = Math.min(u6, kids) * c.u6 + (kids - Math.min(u6, kids)) * c.o6;
    const cut = afni <= c.t1 ? 0 : afni <= c.t2 ? c.r1[n] * (afni - c.t1) : c.base2[n] + c.r2[n] * (afni - c.t2);
    return Math.max(0, max - cut);
  }

  function cwb(wages, nets, fam) {
    const c = P.cwb, k = fam ? 'f' : 's';
    const W = wages.reduce((a, b) => a + b, 0);
    let adj = nets.reduce((a, b) => a + b, 0);
    if (nets.length > 1) adj -= Math.min(c.sec, Math.min(...nets));
    const inn = Math.min(c.max[k], c.rate * Math.max(0, W - c.min));
    return { v: Math.max(0, inn - c.out * Math.max(0, adj - c.from[k])), max: c.max[k], from: c.from[k], adj };
  }

  function household(wages, s, couple, noEi) {
    const code = s.region, kids = s.children;
    const hiIdx = wages.length > 1 && wages[1] > wages[0] ? 1 : 0;
    const pre = wages.map(G => Math.max(0, G - contrib(G, code === 'QC').cAdd));
    const famNet = couple ? pre[0] + pre[1] : null;
    const ps = wages.map((G, i) => person(G, code, {
      spouseNet: couple && i === hiIdx ? pre[1 - i] : null,
      dep: !couple && kids > 0,
      kids: i === hiIdx ? kids : 0,
      famNet, noEi: noEi && i === 0,
    }));
    const nets = ps.map(p => p.ni);
    const afni = nets.reduce((a, b) => a + b, 0);
    const b = ccb(afni, kids, Math.min(s.under3 || 0, kids));
    const w = s.pa && s.regime !== 'minister' ? cwb(wages, nets, couple || kids > 0) : { v: 0, max: 0, from: 0, adj: afni };
    return { ps, afni, ccb: b, cwb: w, fed: ps.reduce((a, p) => a + p.fed.tax, 0), prov: ps.reduce((a, p) => a + p.pv.tax, 0) };
  }

  function incomeTaxes(G, s, env, noEi) {
    const couple = s.household === 'joint', pG = couple ? env.partner : 0;
    const hh = household(couple ? [G, pG] : [G], s, couple, noEi);
    const wo = household(couple ? [0, pG] : [0], s, couple, noEi);
    return {
      hh, wo, me: hh.ps[0],
      fed: hh.fed - wo.fed,
      prov: hh.prov - wo.prov,
      cwb: -(hh.cwb.v - wo.cwb.v),
      ccb: wo.ccb - hh.ccb,
    };
  }

  function finish(s, r) {
    const vatShare = s.vatRate / (100 + s.vatRate);
    r.vatShare = vatShare;
    r.parts.vat = s.vat ? Math.max(0, r.net) * vatShare : 0;
    return r;
  }

  function employer(G, s) {
    const pr = PROV[s.region] || {}, qc = s.region === 'QC', k = contrib(G, qc);
    const ei = Math.min(G, P.ei.max) * (qc ? P.ei.qc : P.ei.rate) * P.ei.er;
    const qpip = qc ? Math.min(G, P.qpip.max) * P.qpip.er : 0;
    const large = s.size !== 'small';
    const ehtRate = (large ? pr.eht : pr.ehtS) || 0;
    const eht = ehtRate / 100 * G;
    const cnt = pr.cnt ? pr.cnt / 100 * Math.min(G, P.qpip.max) : 0;
    const wsdrf = pr.wsdrf && large ? pr.wsdrf / 100 * G : 0;
    const cpp = k.c1 + k.c2;
    return { cpp, ei, qpip, eht, ehtRate, cnt, wsdrf, payroll: eht + cnt + wsdrf, total: cpp + ei + qpip + eht + cnt + wsdrf };
  }

  // Members of Parliament and ministers: employment income with CPP/QPP; no EI; the federal Crown pays no provincial payroll tax.
  function computeMinister(G, s, env, role = s.minRole) {
    const tax = incomeTaxes(G, { ...s, regime: 'minister' }, env, true);
    const k = tax.me.k, ptax = tax.me.ptax;
    const er = k.c1 + k.c2;
    const net = G - k.total - ptax - tax.fed - tax.prov - tax.ccb;
    return finish(s, { G, cost: G + er, net, tax, k, ptax, emp: { cpp: er, ei: 0, qpip: 0, eht: 0, cnt: 0, wsdrf: 0, payroll: 0, total: er }, role, regime: 'minister',
      parts: { er, ee: k.total, sp: ptax, fed: tax.fed, prov: tax.prov, cwb: 0, ccb: tax.ccb } });
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const tax = incomeTaxes(G, s, env, false);
    const k = tax.me.k, ptax = tax.me.ptax, emp = employer(G, s);
    const net = G - k.total - ptax - tax.fed - tax.prov - tax.cwb - tax.ccb;
    return finish(s, { G, m: G / s.factor, cost: G + emp.total, net, tax, k, ptax, emp,
      parts: { er: emp.total, ee: k.total, sp: ptax, fed: tax.fed, prov: tax.prov, cwb: tax.cwb, ccb: tax.ccb } });
  }

  const COMP_KEYS = ['er', 'ee', 'sp', 'fed', 'prov', 'cwb', 'ccb', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', sp: 'var(--k-vm)', fed: 'var(--k-fed)', prov: 'var(--k-reg)', cwb: 'var(--k-pa)', ccb: 'var(--k-csg)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: COMP_KEYS, base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'sp', 'fed', 'prov', 'cwb', 'ccb'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'sp', 'fed', 'prov', 'cwb', 'ccb'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  const rate = v => num(v, Math.min(3, (String(v).split('.')[1] || '').length)) + '%';
  const prName = code => code ? t('prov.' + code) : t('noProv');

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const brRows = sl => sl.filter(b => b.r > 0).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, b.r * 1e4 % 100 ? 2 : 0)}`, b.amt)).join('');
    const yours = (h, w, f, label) => s.household === 'joint'
      ? `${tot(t('tip.hhWith'), f(h))}${row('− ' + t('tip.hhWithout'), -f(w))}${tot(label || t('tip.yours'), f(h) - f(w))}` : '';
    const qc = () => s.region === 'QC';
    const contribRows = k => `${row(t(qc() ? 'bd.qpp' : 'bd.cpp'), k.c1)}${k.c2 ? row(t(qc() ? 'bd.qpp2' : 'bd.cpp2'), k.c2) : ''}${k.ei ? row(t('bd.ei'), k.ei) : ''}${k.qpip ? row(t('bd.qpip'), k.qpip) : ''}`;
    const ministerTips = {
      gross: () => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('pay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr')}</p>${r ? `<table>${row(t(qc() ? 'bd.qpp' : 'bd.cpp'), r.parts.er)}${tot(t('total'), r.parts.er)}</table>` : ''}${sources('t4127')}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe')}</p>${r ? `<table>${contribRows(r.k)}${tot(t('youPay'), r.parts.ee)}</table>` : ''}${sources('t4127')}`,
      cwb: () => `<h4>${t('comp.cwb')}</h4><p>${t('tip.minCwb')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('pay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('index', 'ccb')}`,
      paToggle: () => `<h4>${t('comp.cwb')}</h4><p>${t('tip.paToggle')}</p>${sources('cwb', 'index')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('pwcOther')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r && r.m ? t('tip.grossCalc', eur2(r.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const e = r && r.emp;
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${e ? `<table>
          ${row(t(qc() ? 'bd.qpp' : 'bd.cpp') + ' + ' + t(qc() ? 'bd.qpp2' : 'bd.cpp2'), e.cpp)}
          ${row(`${t('bd.ei')} × 1.4`, e.ei)}
          ${e.qpip ? row(t('bd.qpip'), e.qpip) : ''}
          ${e.eht ? row(`${t(qc() ? 'bd.fss' : 'bd.eht')} ${rate(e.ehtRate)}`, e.eht) : ''}
          ${e.cnt ? row(t('bd.cnt'), e.cnt) : ''}
          ${e.wsdrf ? row(t('bd.wsdrf'), e.wsdrf) : ''}
          ${tot(`${t('total')} ${pct(e.total / r.G, 2)}`, e.total)}</table>` : ''}<p class="m">${t('tip.erM')}</p>${sources('t4127', 'pwcOther')}`;
      },
      eht: () => `<h4>${t(qc() ? 'bd.fss' : 'bd.eht')}</h4><p>${t('tip.eht')}</p>${sources('pwcOther')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t(qc() ? 'tip.eeQc' : 'tip.ee')}</p>${r ? `<table>${contribRows(r.k)}${tot(t('youPay'), r.parts.ee)}</table>` : ''}${sources('t4127')}`,
      cpp: r => tipBuilders.ee(r),
      ei: r => tipBuilders.ee(r),
      sp: r => `<h4>${t('comp.sp')}</h4><p>${t('tip.sp')}</p>${r && r.ptax ? `<p>2% × ${eur(r.G)} = <b>${eur(r.ptax)}</b></p>` : ''}${sources('pwcOther')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable')}</p>${r ? `<p>${eur(r.G)} − ${eur(r.k.cAdd)} = <b>${eur(r.tax.me.ni)}</b></p>` : ''}${sources('t4127')}`,
      fed: r => {
        if (!r) return `<h4>${t('comp.fed')}</h4><p>${t('tip.fedShort')}</p>${sources('t4127')}`;
        const f = r.tax.me.fed, c = f.cred;
        return `<h4>${t('comp.fed')}</h4><table>
          ${row(t('bd.taxable'), r.tax.me.ni)}${brRows(f.slices)}
          ${row('− 14% × ' + t('tip.bpa') + ' ' + eur(c.bpa), -.14 * c.bpa)}
          ${c.spouse ? row('− 14% × ' + t('tip.spouseAmt'), -.14 * c.spouse) : ''}
          ${c.dep ? row('− 14% × ' + t('tip.depAmt'), -.14 * c.dep) : ''}
          ${row('− 14% × ' + t('tip.contribCred'), -.14 * (c.cpp + c.ei))}
          ${row('− 14% × ' + t('tip.cea'), -.14 * c.cea)}
          ${f.abate ? row('− ' + t('tip.abate'), -f.abate) : ''}
          ${tot(t('comp.fed'), f.tax)}
          ${yours(r.tax.hh, r.tax.wo, h => h.fed)}</table><p class="m">${t('tip.fedM')}</p>${sources('t4127', 'index')}`;
      },
      prov: r => {
        if (!r) return `<h4>${t('comp.prov')}</h4><p>${t('tip.provShort')}</p>${sources('t4127', 't4127jul')}`;
        const v = r.tax.me.pv, low = (PROV[s.region] || { b: [[0, 0]] }).b[0][1];
        return `<h4>${t('comp.prov')} · ${esc(prName(s.region))}</h4><table>
          ${v.ed ? row('− ' + t('tip.qcEd'), -v.ed) : ''}
          ${row(t(qc() ? 'tip.qcTaxable' : 'bd.taxable'), v.ti)}${brRows(v.slices)}
          ${row(`− ${pct(low, 2)} × ${t(qc() ? 'tip.bpa' : 'tip.provCred')}`, -v.cred)}
          ${v.surtax ? row('+ ' + t('bd.surtax'), v.surtax) : ''}
          ${v.red ? row('− ' + t(s.region === 'ON' ? 'bd.otr' : 'bd.bcRed'), -v.red) : ''}
          ${v.lift ? row('− ' + t('bd.lift'), -v.lift) : ''}
          ${v.ohp ? row('+ ' + t('bd.ohp'), v.ohp) : ''}
          ${tot(t('comp.prov'), v.tax)}
          ${yours(r.tax.hh, r.tax.wo, h => h.prov)}</table><p class="m">${t(qc() ? 'tip.provQcM' : 'tip.provM')}</p>${sources('t4127', 't4127jul', qc() ? 'eyQc' : 'pwc')}`;
      },
      surtax: () => `<h4>${t('bd.surtax')}</h4><p>${t('tip.surtax')}</p>${sources('t4127')}`,
      ohp: () => `<h4>${t('bd.ohp')}</h4><p>${t('tip.ohp')}</p>${sources('t4127')}`,
      cwb: r => {
        const h = r && r.tax.hh;
        return `<h4>${t('comp.cwb')}</h4><p>${t('tip.cwb')}</p>${h ? `<table>${row(t('tip.cwbHh'), h.cwb.v)}${yours(r.tax.hh, r.tax.wo, z => z.cwb.v)}</table>` : ''}<p class="m">${t('tip.cwbM')}</p>${sources('cwb', 'index')}`;
      },
      ccb: r => {
        const h = r && r.tax;
        return `<h4>${t('comp.ccb')}</h4><p>${t('tip.ccb')}</p>${h && s.children ? `<table>
          ${row(t('tip.ccbWo'), h.wo.ccb)}${row(t('tip.ccbWith'), h.hh.ccb)}${tot(t('ccbLostShort'), h.ccb)}</table>` : ''}<p class="m">${t('tip.ccbM')}</p>${sources('ccb')}`;
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

  function breakdown(r, x) {
    const p = r.parts, min = r.regime === 'minister', e = r.emp, k = r.k, qc = x.s.region === 'QC';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    L.push({ op: '+', k: 'er', label: t(qc ? 'bd.erQpp' : 'bd.erCpp'), v: e.cpp, tax: e.cpp, cls: 'sub' });
    if (e.ei) L.push({ op: '+', k: 'er', label: t('bd.erEi'), v: e.ei, tax: e.ei, cls: 'sub' });
    if (e.qpip) L.push({ op: '+', k: 'er', label: t('bd.erQpip'), v: e.qpip, tax: e.qpip, cls: 'sub' });
    if (e.payroll > .5) L.push({ op: '+', k: 'eht', label: t(qc ? 'bd.fssAll' : 'bd.eht'), v: e.payroll, tax: e.payroll, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'cpp', label: t(qc ? 'bd.qppAll' : 'bd.cppAll'), v: k.c1 + k.c2, tax: k.c1 + k.c2 },
    );
    if (k.ei) L.push({ op: '−', k: 'ei', label: t('bd.ei'), v: k.ei, tax: k.ei });
    if (k.qpip) L.push({ op: '−', k: 'ee', label: t('bd.qpip'), v: k.qpip, tax: k.qpip });
    if (p.sp > .5) L.push({ op: '−', k: 'sp', label: t('comp.sp'), v: p.sp, tax: p.sp });
    L.push(
      { op: '', k: 'taxable', label: t('bd.taxable'), v: r.tax.me.ni, cls: 'sub' },
      { op: '−', k: 'fed', label: t('comp.fed'), v: p.fed, tax: p.fed },
      { op: '−', k: 'prov', label: `${t('comp.prov')} (${prName(x.s.region)})`, v: p.prov, tax: p.prov },
    );
    if (r.tax.me.pv.ohp > .5) L.push({ op: '', k: 'ohp', label: t('bd.ohpIncl'), v: r.tax.me.pv.ohp, cls: 'sub' });
    if (Math.abs(p.cwb) > .5) L.push({ op: p.cwb < 0 ? '+' : '−', k: 'cwb', label: t(p.cwb < 0 ? 'comp.cwb' : 'cwbLostShort'), v: Math.abs(p.cwb), tax: p.cwb });
    if (Math.abs(p.ccb) > .5) L.push({ op: p.ccb < 0 ? '+' : '−', k: 'ccb', label: t(p.ccb < 0 ? 'ccbGained' : 'ccbLostShort'), v: Math.abs(p.ccb), tax: p.ccb });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-wage zone: where the Canada Workers Benefit is withdrawn.
  function trap(x) {
    const s = x.s, lo = MIN_WAGE * 12 / s.factor;
    const none = { band: [lo, lo], text: [x.fmtM(lo, 10), null, null, null] };
    if (!s.pa || s.regime === 'minister') return none;
    const couple = s.household === 'joint', fam = couple || s.children > 0, c = P.cwb, k = fam ? 'f' : 's';
    const pG = couple ? x.env().partner : 0;
    const pN = Math.max(0, pG - contrib(pG, s.region === 'QC').cAdd);
    const exempt = couple ? Math.min(c.sec, pN) : 0;
    const startNet = Math.max(0, c.from[k] - pN + exempt), endNet = startNet + c.max[k] / c.out;
    const m0 = startNet / s.factor, m1 = endNet / s.factor;
    if (m1 <= lo / 2) return none;
    return { band: [m0, m1], text: [x.fmtM(m0, 10), x.fmtM(m1, 10) + x.perUnit(), pct(c.out, 0), eur(c.max[k])] };
  }

  // Above the second CPP ceiling, pension contributions stop.
  function top(x) {
    const s = x.s, at = P.cpp.yampe / s.factor;
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), eur(P.ei.max)] };
  }

  return {
    GAPS: ['noCheck', 'payrollTax', 'nunavut', 'qcEmpDed', 'ccbYear', 'minWage', 'avgWage', 'mpPension', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'CAD', nextStep: 150,
    regions: [], sizes: ['small', 'large'], minRoles: MIN_ROLES, factors: [12], factorDigits: 0,
    vatStandard: region => (PROV[region] && PROV[region].sales) ?? 13,
    features: { pa: true, under3: true },
    local: null,
    state: { salary: 5500, factor: 12, minRole: 'mp', pa: true, under3: 0, commune: 'ON', region: 'ON', local: 13.16, vatRate: 13, size: 'large' },
    urlFields: {
      cwb: ['pa', 'bool'], prov: ['commune', 'str'], u6: ['under3', 'num'], size: ['size', 'str', ['small', 'large']], role: ['minRole', 'str', MIN_ROLES],
    },
    parseCommunes: list => {
      PROV = {};
      return list.map(([name, code, top, sales, spec]) => {
        PROV[code] = { ...spec, sales };
        return { name, rate: top, region: code, sub: code, id: code };
      });
    },
    communeLabel: c => t('prov.' + c.id),
    communeTag: c => rate(c.rate),
    communeHint: c => t('provHint.' + (c.id === 'QC' ? 'qc' : c.id === 'ON' ? 'on' : 'std'), rate(c.rate), rate(PROV[c.id] ? PROV[c.id].sales : 0)),
    minSalary: role => GOV[role],
    env: s => ({ partner: Math.max(0, Number(s.partnerGross) || 0) }),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: { cwb: 'cwbLost', ccb: 'ccbLost' }, recvLabels: { cwb: 'cwbReceived', ccb: 'ccbReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polNote.' + p.regime,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'pay',
    refKeys: ['er', 'ee', 'fed', 'prov', 'qc', 'cr', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
