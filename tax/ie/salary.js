// Irish salary rules for income year 2026. Loaded by ../index.html?country=ie.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const MIN_ROLES = ['mos', 'minister', 'taoiseach'];
  const INF = Infinity;

  const P = {
    // Rates and bands unchanged by Budget 2026 (Finance Act 2025); Budget 2027 moves the band to €46 500 from 2027.
    brackets: [[44000, .20], [INF, .40]],
    band: { single: 44000, parent: 48000, couple: 53000, coupleInc: 35000 },
    credit: { personal: 2000, married: 4000, employee: 2000, spccc: 1900, homeCarer: 1950, hcLimit: 7200 },
    usc: { exempt: 13000, brackets: [[12012, .005], [28700, .02], [70044, .03], [INF, .08]] },
    // PRSI rises 0.15 points on 1 Oct 2026: 9 months at the first rate, 3 at the second.
    prsi: {
      split: [.75, .25], ee: [.042, .0435], erLow: [.09, .0915], erHigh: [.1125, .114], k: [.042, .0435],
      eeFloor: 352, creditMax: 12, creditEnd: 424, erThreshold: 552, kFloor: 100,
    },
    ae: { ee: .015, er: .015, state: .005, min: 20000, cap: 80000 },
    wfp: { limits: [765, 866, 967, 1058, 1184, 1300, 1436, 1532], rate: .6, min: 20, hours: 19 },
    asc: [[34500, 0], [60000, .10], [INF, .105]],
    membersPension: .06,
    minWageHour: 14.15,
  };
  const blend = rates => P.prsi.split.reduce((tot, f, i) => tot + f * rates[i], 0);

  // Full-time minimum wage (39 h), CSO median and mean weekly earnings of all employments (EAADS 2025).
  const REF_WAGES = [
    { key: 'min', m: P.minWageHour * 39 * 52 / 12, year: 2026, color: '--w-min' },
    { key: 'med', m: 759.21 * 52 / 12, year: 2025, color: '--w-med' },
    { key: 'avg', m: 974.08 * 52 / 12, year: 2025, color: '--w-avg' },
  ];

  // Rates from 1 June 2026: TD or Senator salary plus the office allowance.
  const TD = 119467, SEN = 83666;
  const GOV = { taoiseach: TD + 136844, tanaiste: TD + 116960, minister: TD + 97669, mos: TD + 48292, td: TD, senator: SEN };
  const DOC_PAY = 'https://www.oireachtas.ie/en/members/salaries-and-allowances/salaries/';
  const POLITICIANS = [
    { kind: 'stat', key: 'taoiseach', icon: '⭐', regime: 'taoiseach', lo: GOV.taoiseach, hi: GOV.taoiseach, url: DOC_PAY },
    { kind: 'stat', key: 'tanaiste', icon: '🎖️', regime: 'tanaiste', lo: GOV.tanaiste, hi: GOV.tanaiste, url: DOC_PAY },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_PAY },
    { kind: 'stat', key: 'mos', icon: '📎', regime: 'mos', lo: GOV.mos, hi: GOV.mos, url: DOC_PAY },
    { kind: 'stat', key: 'td', icon: '🏛️', regime: 'td', lo: GOV.td, hi: GOV.td, url: DOC_PAY },
    { kind: 'stat', key: 'senator', icon: '🎩', regime: 'senator', lo: GOV.senator, hi: GOV.senator, url: DOC_PAY },
    { kind: 'gov', key: 'ceann', icon: '🔔', lo: TD + 149055, hi: TD + 149055, url: DOC_PAY },
    { kind: 'gov', name: 'Gabriel Makhlouf', role: 'cbi', lo: 342239, hi: 342239, url: 'https://www.rte.ie/news/business/2026/0605/1576935-central-bank-of-irelands-2025-results/' },
    { kind: 'corp', name: 'Paddy Hayes', role: 'esb', lo: 318083, hi: 410000, url: 'https://www.irishtimes.com/business/2026/08/04/esb-secures-29-rise-in-pay-to-410000-for-chief-executive-paddy-hayes/' },
    { kind: 'corp', name: 'Tom Donnellan', role: 'bnm', lo: 225000, hi: 225000, url: 'https://www.rte.ie/news/business/2026/0710/1582797-ceo-pay-state/' },
  ];

  const SRC = {
    taxCharts: 'https://www.revenue.ie/en/personal-tax-credits-reliefs-and-exemptions/tax-relief-charts/index.aspx',
    usc: 'https://www.revenue.ie/en/jobs-and-pensions/usc/standard-rates-thresholds.aspx',
    prsi: 'https://www.brightpay.ie/docs/2026/payroll-deductions/prsi/',
    taxFacts: 'https://www.zellis.com/wp-content/uploads/2026/01/Tax-Facts-Ireland-v1.0-Jan-2026_220126.pdf',
    budget2026: 'https://www.brightpay.ie/docs/2026/2026-budget-employer-summary/',
    ae: 'https://www.gov.ie/en/department-of-social-protection/campaigns/auto-enrolment/',
    wfp: 'https://www.gov.ie/en/department-of-social-protection/services/working-family-payment-wfp/',
    wfpRules: 'https://inou.ie/information/back-to-work-supports1/working-family-payment',
    minWage: 'https://www.gov.ie/ga/an-roinn-fiontar-turas%C3%B3ireachta-agus-fosta%C3%ADochta/feachtais/low-pay-commission',
    cso: 'https://www.cso.ie/en/releasesandpublications/ep/p-eaads/earningsanalysisusingadministrativedatasources2025/keyfindings/',
    vat: 'https://www.revenue.ie/en/vat/vat-rates/index.aspx',
    oirPay: DOC_PAY,
    oirGuide: 'https://data.oireachtas.ie/ie/oireachtas/members/parliamentaryAllowances/other/2024/2024-12-02_guide-to-salary-and-allowances_en.pdf',
    asc: 'https://www.brightpay.ie/docs/2026/payroll-deductions/additional-superannuation-contribution-asc/',
  };

  const progressive = (x, br) => {
    let tot = 0, lo = 0;
    for (const [hi, r] of br) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };

  // Weekly PRSI on a steady weekly wage: the credit tapers out by €424, the employer rate jumps above €552.
  function prsiOf(G) {
    const w = G / 52, p = P.prsi;
    const credit = w <= p.eeFloor ? 0 : Math.max(0, p.creditMax - (w - p.eeFloor) / 6);
    const ee = w <= p.eeFloor ? 0 : 52 * p.split.reduce((tot, f, i) => tot + f * Math.max(0, p.ee[i] * w - credit), 0);
    const er = G * blend(w <= p.erThreshold ? p.erLow : p.erHigh);
    return { ee, er, credit: 52 * credit, w };
  }
  const uscOf = G => G <= P.usc.exempt ? 0 : progressive(G, P.usc.brackets);

  function employeeSide(G, s) {
    const { ee: prsi, er } = prsiOf(G);
    const usc = uscOf(G);
    const ae = s.cadre && G >= P.ae.min ? Math.min(G, P.ae.cap) : 0;
    return { G, prsi, er, usc, aeEe: P.ae.ee * ae, aeEr: P.ae.er * ae, aeState: P.ae.state * ae, taxable: G, pension: 0, asc: 0 };
  }

  // Office holders: Class K PRSI, members' pension and ASC, both relieved from income tax. No employer side.
  function officeSide(G) {
    const pension = P.membersPension * G, asc = progressive(G, P.asc);
    const prsi = G / 52 > P.prsi.kFloor ? G * blend(P.prsi.k) : 0;
    return { G, prsi, er: 0, usc: uscOf(G), aeEe: 0, aeEr: 0, aeState: 0, pension, asc, taxable: G - pension - asc };
  }

  // Jointly assessed household: the band grows by the lower income (max €35 000); the home carer credit is the alternative.
  function householdTax(incomes, couple, kids) {
    const c = P.credit, b = P.band, I = incomes.reduce((tot, x) => tot + x, 0);
    const empCredit = incomes.reduce((tot, x) => tot + Math.min(c.employee, .2 * x), 0);
    const gross = band => .2 * Math.min(I, band) + .4 * Math.max(0, I - band);
    if (!couple) {
      const band = kids > 0 ? b.parent : b.single;
      const credits = c.personal + empCredit + (kids > 0 ? c.spccc : 0);
      const g = gross(band);
      return { it: Math.max(0, g - credits), I, band, credits, gross: g, inc: 0, hc: 0 };
    }
    const lower = Math.min(...incomes);
    const inc = incomes.every(x => x > 0) ? Math.min(b.coupleInc, lower) : 0;
    const credits = c.married + empCredit;
    const g = gross(b.couple + inc);
    const plain = { it: Math.max(0, g - credits), I, band: b.couple + inc, credits, gross: g, inc, hc: 0 };
    const hc = kids > 0 ? Math.max(0, c.homeCarer - Math.max(0, lower - c.hcLimit) / 2) : 0;
    if (hc <= 0) return plain;
    const g2 = gross(b.couple);
    const alt = { it: Math.max(0, g2 - credits - hc), I, band: b.couple, credits: credits + hc, gross: g2, inc: 0, hc };
    return alt.it < plain.it ? alt : plain;
  }

  // Weekly WFP for the household, from each earner's pay after PRSI, USC, pension savings and the household's income tax.
  function wfpFor(sides, it, kids) {
    if (!kids) return { wfp: 0, net: 0, limit: 0 };
    const p = P.wfp, limit = p.limits[Math.min(kids, p.limits.length) - 1];
    const G = sides.reduce((tot, u) => tot + u.G, 0);
    const net = (sides.reduce((tot, u) => tot + u.G - u.prsi - u.usc - u.aeEe - u.pension - u.asc, 0) - it) / 52;
    // Needs 38 hours a fortnight between the couple: taken as at least 19 hours a week at the minimum wage.
    if (G < p.hours * P.minWageHour * 52) return { wfp: 0, net, limit, hoursShort: true };
    const gap = p.rate * (limit - net);
    return { wfp: gap > 0 ? Math.max(p.min, gap) : 0, net, limit };
  }

  // Your share of household taxes and benefits = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', kids = s.children, pu = couple ? env.partner : null;
    const hh = householdTax(pu ? [u.taxable, pu.taxable] : [u.taxable], couple, kids);
    const without = couple ? householdTax([0, pu.taxable], true, kids) : null;
    const it = Math.max(0, hh.it - (without ? without.it : 0));
    let wfp = 0, wfpDet = null;
    if (s.pa && s.regime === 'employee' && kids > 0) {
      const w = wfpFor(pu ? [u, pu] : [u], hh.it, kids);
      const wo = pu ? wfpFor([pu], without.it, kids) : { wfp: 0 };
      wfp = 52 * (w.wfp - wo.wfp);
      wfpDet = { ...w, without: wo.wfp };
    }
    return { it, hh, without, wfp, wfpDet };
  }

  const vatOf = (net, s) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;

  function computeOffice(G, s, env, role) {
    const u = { ...officeSide(G), role };
    const tax = incomeTaxes(u, { ...s, regime: 'minister' }, env);
    const net = G - u.prsi - u.pension - u.asc - u.usc - tax.it;
    return { G, cost: G, net, u, tax, regime: 'minister',
      parts: { er: 0, ae: 0, ee: u.prsi, pen: u.pension + u.asc, usc: u.usc, it: tax.it, wfp: 0, vat: vatOf(net, s) } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeOffice(G, s, env, s.minRole);
    const u = employeeSide(G, s);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const cost = G + u.er + u.aeEr;
    const net = G - u.prsi - u.usc - tax.it - u.aeEe + tax.wfp;
    return { G, cost, net, u, tax,
      parts: { er: u.er, ae: u.aeEe + u.aeEr, ee: u.prsi, pen: 0, usc: u.usc, it: tax.it, wfp: -tax.wfp, vat: vatOf(net, s) } };
  }

  // Auto-enrolment goes into your own pension pot, so it's shown but never counted as tax.
  const COMP_KEYS = ['er', 'ee', 'pen', 'usc', 'it', 'wfp', 'ae', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', pen: 'var(--k-bbsz)', usc: 'var(--k-csg)', it: 'var(--k-ir)', wfp: 'var(--k-pa)', ae: 'var(--k-vm)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'pen', 'usc', 'it', 'wfp', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'pen', 'usc', 'it', 'wfp'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'pen', 'usc', 'it', 'wfp'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const uscRows = G => {
      if (G <= P.usc.exempt) return `<tr><td>${t('tip.uscExempt', eur(P.usc.exempt))}</td><td>0</td></tr>`;
      let lo = 0;
      return P.usc.brackets.map(([hi, r]) => {
        const a = Math.max(0, Math.min(G, hi) - lo), row = a > 0 ? `<tr><td>${eur(lo)} – ${hi === INF ? '…' : eur(hi)} × ${pct(r, r < .01 ? 1 : 0)}</td><td>${eur(a * r)}</td></tr>` : '';
        lo = hi; return row;
      }).join('');
    };
    const itTable = r => {
      const h = r.tax.hh;
      return `<table>
        <tr><td>${t(h.I === r.u.taxable ? 'tip.itIncome' : 'tip.itHhIncome')}</td><td>${eur(h.I)}</td></tr>
        <tr><td>${pct(.2, 0)} × ${eur(Math.min(h.I, h.band))}${h.inc ? ` (${t('tip.itBandInc', eur(h.inc))})` : ''}</td><td>${eur(.2 * Math.min(h.I, h.band))}</td></tr>
        ${h.I > h.band ? `<tr><td>${pct(.4, 0)} × ${eur(h.I - h.band)}</td><td>${eur(.4 * (h.I - h.band))}</td></tr>` : ''}
        <tr><td>− ${t('tip.itCredits')}${h.hc ? ` (${t('tip.itHc', eur(h.hc))})` : ''}</td><td>−${eur(Math.min(h.gross, h.credits))}</td></tr>
        <tr class="t"><td>${t('tip.itHousehold')}</td><td>${eur(h.it)}</td></tr>
        ${r.tax.without ? `<tr><td>− ${t('tip.itWithout')}</td><td>−${eur(r.tax.without.it)}</td></tr><tr class="t"><td>${t('tip.itYours')}</td><td>${eur(r.parts.it)}</td></tr>` : ''}
        </table>`;
    };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${r ? `<table>
        <tr><td>${t('tip.minTd')}</td><td>${eur(TD)}</td></tr>
        <tr><td>${t('tip.minAllow')}</td><td>${eur(r.G - TD)}</td></tr>
        <tr class="t"><td>${t('total')}</td><td>${eur(r.G)}</td></tr></table>` : ''}${sources('oirPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>`,
      ee: r => `<h4>${t('bd.prsiK')}</h4><p>${t('tip.minPrsi')}</p>${r ? `<p><b>${eur(r.u.prsi)}</b>${t('aYear')}</p>` : ''}${sources('oirGuide', 'taxFacts')}`,
      wfp: () => `<h4>${t('comp.wfp')}</h4><p>${t('tip.minWfp')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('oirPay', 'oirGuide', 'asc')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      cadre: () => `<h4>${t('comp.ae')}</h4><p>${t('tip.aeToggle')}</p>${sources('ae')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('taxCharts')}`,
      paToggle: () => `<h4>${t('comp.wfp')}</h4><p>${t('tip.wfpToggle')}</p>${sources('wfp', 'wfpRules')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.u.er)}</td></tr>
          ${r.u.aeEr > 0 ? `<tr><td>${t('bd.aeEr')}</td><td>${eur(r.u.aeEr)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.prsi.erThreshold))}</p>
        ${r ? `<p>${pct(r.u.er / r.G, 2)} × ${eur(r.G)} = <b>${eur(r.u.er)}</b></p>` : ''}<p class="m">${t('tip.erM')}</p>${sources('taxFacts', 'prsi')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.prsi.eeFloor), eur(P.prsi.creditEnd))}</p>
        ${r ? `<table><tr><td>${t('tip.eeWeek')}</td><td>${eur2(r.G / 52)}</td></tr>
          ${r.G / 52 > P.prsi.eeFloor && r.G / 52 < P.prsi.creditEnd ? `<tr><td>− ${t('tip.eeCredit')}</td><td>−${eur2(prsiOf(r.G).credit / 52)}</td></tr>` : ''}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.u.prsi)}</td></tr></table>` : ''}${sources('prsi', 'taxFacts')}`,
      usc: r => `<h4>${t('comp.usc')}</h4><p>${t('tip.usc', eur(P.usc.exempt))}</p>${r ? `<table>${uscRows(r.G)}<tr class="t"><td>${t('total')}</td><td>${eur(r.u.usc)}</td></tr></table>` : ''}${sources('usc')}`,
      it: r => r ? `<h4>${t('comp.it')}</h4><p class="m">${t('tip.itM')}</p>${itTable(r)}${sources('taxCharts')}`
        : `<h4>${t('comp.it')}</h4><p>${t('tip.itShort')}</p>${sources('taxCharts')}`,
      ae: r => `<h4>${t('comp.ae')}</h4><p>${t('tip.ae', eur(P.ae.min), eur(P.ae.cap))}</p>${r && r.u.aeEe ? `<table>
        <tr><td>${t('bd.aeEe')}</td><td>${eur(r.u.aeEe)}</td></tr>
        <tr><td>${t('bd.aeEr')}</td><td>${eur(r.u.aeEr)}</td></tr>
        <tr><td>${t('tip.aeState')}</td><td>${eur(r.u.aeState)}</td></tr>
        <tr class="t"><td>${t('tip.aePot')}</td><td>${eur(r.u.aeEe + r.u.aeEr + r.u.aeState)}</td></tr></table>` : ''}${sources('ae')}`,
      wfp: r => {
        const d = r && r.tax.wfpDet;
        return `<h4>${t('comp.wfp')}</h4><p>${t('tip.wfp')}</p>${d && d.limit ? `<table>
          <tr><td>${t('tip.wfpLimit', s.children)}</td><td>${eur2(d.limit)}</td></tr>
          <tr><td>− ${t('tip.wfpNet')}</td><td>−${eur2(d.net)}</td></tr>
          <tr><td>× 60%${d.wfp === P.wfp.min ? ` (${t('tip.wfpMin', eur(P.wfp.min))})` : ''}</td><td>${eur2(d.wfp)}</td></tr>
          ${d.without ? `<tr><td>− ${t('tip.wfpWithout')}</td><td>−${eur2(d.without)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.wfpYear')}</td><td>${eur(-r.parts.wfp)}</td></tr></table>` : ''}
          ${d && d.hoursShort ? `<p class="m">${t('tip.wfpHours')}</p>` : ''}${sources('wfp', 'wfpRules')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      pen: r => `<h4>${t('comp.pen')}</h4><p>${t('tip.pension')} ${t('tip.asc')}</p>${r && r.u.pension ? `<table>
        <tr><td>${t('bd.pension')}</td><td>${eur(r.u.pension)}</td></tr>
        <tr><td>${t('bd.asc')}</td><td>${eur(r.u.asc)}</td></tr>
        <tr class="t"><td>${t('total')}</td><td>${eur(r.parts.pen)}</td></tr></table>` : ''}${sources('oirGuide', 'asc')}`,
      asc: () => `<h4>${t('bd.asc')}</h4><p>${t('tip.asc')}</p>${sources('asc')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r) {
    const p = r.parts, u = r.u, office = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(office ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (!office) {
      L.push({ op: '+', k: 'er', label: t('comp.er'), v: u.er, tax: u.er, cls: 'sub' });
      if (u.aeEr > 0) L.push({ op: '+', k: 'ae', label: t('bd.aeEr'), v: u.aeEr, cls: 'sub' });
    }
    L.push(
      { op: '=', k: 'cost', label: t(office ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(office ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (office) L.push(
      { op: '−', k: 'ee', label: t('bd.prsiK'), v: u.prsi, tax: u.prsi },
      { op: '−', k: 'pen', label: t('bd.pension'), v: u.pension, tax: u.pension },
      { op: '−', k: 'asc', label: t('bd.asc'), v: u.asc, tax: u.asc },
    );
    else L.push({ op: '−', k: 'ee', label: t('comp.ee'), v: u.prsi, tax: u.prsi });
    L.push(
      { op: '−', k: 'usc', label: t('comp.usc'), v: u.usc, tax: u.usc },
      { op: '−', k: 'it', label: t('comp.it'), v: p.it, tax: p.it },
    );
    if (u.aeEe > 0) L.push({ op: '−', k: 'ae', label: t('bd.aeEe'), v: u.aeEe });
    if (Math.abs(p.wfp) > .5) L.push({ op: p.wfp < 0 ? '+' : '−', k: 'wfp', label: t('comp.wfp'), v: Math.abs(p.wfp), tax: p.wfp });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-pay zone: from the end of the USC exemption to the employer's higher PRSI rate.
  function trap(x) {
    const s = x.s, band = [P.usc.exempt / s.factor, P.prsi.erThreshold * 52 / s.factor];
    const lo = P.wfp.hours * P.minWageHour * 52 / s.factor;
    const wfpEnd = s.pa && s.children > 0 ? x.firstMonthly(m => m > lo && compute(m * s.factor, s, x.env()).tax.wfp <= 0, lo, 20000) : null;
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), wfpEnd ? x.fmtM(wfpEnd, 10) + x.perUnit() : null, eur(P.prsi.eeFloor), eur(P.prsi.erThreshold)] };
  }

  function top(x) {
    const s = x.s, env = x.env();
    if (s.regime === 'minister') return null;
    const at = x.firstMonthly(m => {
      const G = m * s.factor, h = compute(G, s, env).tax.hh;
      return h.I > h.band;
    });
    if (!at) return null;
    const usc8 = x.firstMonthly(m => m * s.factor > P.usc.brackets[2][0]);
    const h = x.cur() ? x.cur().tax.hh : null;
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), usc8 ? x.fmtM(usc8, 50) + x.perUnit() : null, eur(h ? h.band : P.band.single)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR',
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 23,
    features: { cadre: true, pa: true },
    state: { salary: 3500, factor: 12, minRole: 'minister', cadre: false, pa: true, commune: '', region: '', local: 0, vatRate: 23, size: '' },
    urlFields: { ae: ['cadre', 'bool'], wfp: ['pa', 'bool'], role: ['minRole', 'str', MIN_ROLES] },
    communes: false,
    local: null,
    parseCommunes: () => [], communeLabel: () => '', communeTag: () => '', communeHint: () => '',
    partsHint: x => x.s.children > 0 ? t(x.s.household === 'joint' ? 'partsHint.couple' : 'partsHint.single') : '',
    minSalary: role => GOV[role],
    env: s => ({ partner: employeeSide(Math.max(0, s.partnerGross || 0), { ...s, cadre: false }) }),
    compute,
    own: (p, plain, env) => ({ net: computeOffice(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: { wfp: 'wfpLost' }, recvLabels: { wfp: 'wfpReceived' },
    polNote: p => 'polNote.' + (p.regime === 'td' || p.regime === 'senator' ? 'member' : 'office'),
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'oirPay',
    refKeys: ['prsi', 'usc', 'it', 'couple', 'wfp', 'ae', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
