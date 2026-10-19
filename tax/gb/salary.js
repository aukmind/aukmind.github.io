// UK salary rules for tax year 2026/27 (6 April 2026 to 5 April 2027). Loaded by ../index.html?country=gb.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['ruk', 'scot'];
  const SIZES = ['solo', 'small', 'big'];
  const MIN_ROLES = ['pus', 'mos', 'cabinet', 'pm'];

  const P = {
    pa: 12570, taperFrom: 100000,
    // Bands on taxable income, after the personal allowance.
    bands: {
      ruk: [[37700, .20], [125140, .40], [INF, .45]],
      scot: [[3967, .19], [16956, .20], [31092, .21], [62430, .42], [125140, .45], [INF, .48]],
    },
    // Reference table only: rUK bands on gross income with the full allowance.
    brackets: [[12570, 0], [50270, .20], [125140, .40], [INF, .45]],
    ni: { pt: 12570, uel: 50270, main: .08, upper: .02, st: 5000, er: .15, ea: 10500, levy: .005 },
    ma: { amount: 1260, rate: { ruk: .20, scot: .19 }, maxIncome: { ruk: 50270, scot: 43662 } },
    cb: { first: 27.05, other: 17.90, weeks: 52, from: 60000, to: 80000 },
    uc: { single: 424.90, couple: 666.97, child: 303.94, wa: 710, taper: .55 },
    scp: 28.20,
    mp: 98599,
    // MPs' Pension Scheme: member rate under the net pay arrangement; Exchequer rate from the last published valuation.
    pen: { ee: .1109, er: .129 },
  };
  const NLW = 12.71 * 37.5 * 52 / 12;

  // Monthly gross, full-time: National Living Wage at 37.5 h/week, ONS ASHE median and mean (April 2025).
  const REF_WAGES = [
    { key: 'min', m: NLW, year: 2026, color: '--w-min' },
    { key: 'med', m: 766.60 * 52 / 12, year: 2025, color: '--w-med' },
    { key: 'avg', m: 920.80 * 52 / 12, year: 2025, color: '--w-avg' },
  ];

  // Ministerial salaries actually claimed (frozen since 2008), on top of the MP salary.
  const MIN_PAY = { pm: 75440, cabinet: 67505, mos: 31680, pus: 22375 };
  const GOV = Object.fromEntries(Object.entries(MIN_PAY).map(([k, v]) => [k, P.mp + v]));
  const DOC_MIN = 'https://www.gov.uk/government/publications/ministerial-salary-data/salaries-of-members-of-his-majestys-government-september-2026';
  const DOC_MP = 'https://www.theipsa.org.uk/news/ipsa-confirms-decision-on-mps-pay-for-2026-27';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_MIN },
    { kind: 'stat', key: 'cabinet', icon: '💼', regime: 'cabinet', lo: GOV.cabinet, hi: GOV.cabinet, url: DOC_MIN },
    { kind: 'stat', key: 'mos', icon: '📎', regime: 'mos', lo: GOV.mos, hi: GOV.mos, url: DOC_MIN },
    { kind: 'stat', key: 'pus', icon: '🖇️', regime: 'pus', lo: GOV.pus, hi: GOV.pus, url: DOC_MIN },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: P.mp, hi: P.mp, url: DOC_MP },
    { kind: 'gov', name: 'Andrew Bailey', role: 'boe', lo: 495000, hi: 598325, url: 'https://www.bankofengland.co.uk/-/media/boe/files/annual-report/2026/boe-2026.pdf' },
    { kind: 'corp', name: 'Mark Wild', role: 'hs2', lo: 600000, hi: 660081, url: 'https://www.gov.uk/government/publications/hs2-ltd-annual-report-and-accounts-2025-to-2026' },
    { kind: 'corp', name: 'Andrew Haines', role: 'nr', lo: 590000, hi: 593000, url: 'https://www.networkrail.co.uk/wp-content/uploads/2025/08/Directors-remuneration-committee-report-2025.pdf' },
  ];

  const SRC = {
    rates: 'https://www.gov.uk/income-tax-rates',
    taper: 'https://www.gov.uk/income-tax-rates/income-over-100000',
    scot: 'https://www.gov.uk/scottish-income-tax',
    ma: 'https://www.gov.uk/marriage-allowance',
    employers: 'https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027',
    ea: 'https://www.gov.uk/claim-employment-allowance',
    levy: 'https://www.gov.uk/guidance/pay-apprenticeship-levy',
    cb: 'https://www.gov.uk/child-benefit',
    hicbc: 'https://www.gov.uk/child-benefit-tax-charge',
    uc: 'https://www.gov.uk/universal-credit',
    ucWages: 'https://www.gov.uk/universal-credit/how-your-wages-affect-your-payments',
    scp: 'https://www.socialsecurity.gov.scot/news/2026/05/over-321000-children-getting-vital-support',
    nlw: 'https://www.gov.uk/national-minimum-wage-rates',
    ashe: 'https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/bulletins/annualsurveyofhoursandearnings/2025',
    vat: 'https://www.gov.uk/vat-rates',
    minSal: DOC_MIN,
    mpPay: DOC_MP,
    pcpf: 'https://www.gov.uk/government/publications/actuarial-valuation-of-the-parliamentary-contributory-pension-fund-as-at-1-april-2014',
  };

  const slices = (x, br) => {
    const out = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) out.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return out;
  };
  const allowanceFor = income => Math.max(0, P.pa - Math.max(0, income - P.taperFrom) / 2);

  // One person's income tax. maOut gives away part of the allowance, maIn is the Marriage Allowance tax cut received.
  function personTax(income, region, maOut = 0, maIn = 0) {
    const pa = Math.max(0, allowanceFor(income) - maOut);
    const taxable = Math.max(0, income - pa);
    const sl = slices(taxable, P.bands[region]);
    const gross = sl.reduce((tot, b) => tot + b.amt, 0);
    const relief = Math.min(gross, maIn);
    return { income, pa, taxable, slices: sl, gross, relief, tax: gross - relief };
  }

  // Couple's income tax, with the Marriage Allowance if it lowers the total.
  function householdTax(mine, partner, region) {
    const base = { me: personTax(mine, region), them: partner == null ? null : personTax(partner, region), ma: null };
    if (partner == null) return { ...base, total: base.me.tax };
    let best = { ...base, total: base.me.tax + base.them.tax };
    const m = P.ma, relief = m.amount * m.rate[region];
    const can = (from, to) => from <= P.pa && to > P.pa && to <= m.maxIncome[region];
    if (can(partner, mine)) {
      const me = personTax(mine, region, 0, relief), them = personTax(partner, region, m.amount);
      if (me.tax + them.tax < best.total) best = { me, them, ma: 'in', total: me.tax + them.tax };
    }
    if (can(mine, partner)) {
      const me = personTax(mine, region, m.amount), them = personTax(partner, region, 0, relief);
      if (me.tax + them.tax < best.total) best = { me, them, ma: 'out', total: me.tax + them.tax };
    }
    return best;
  }

  const employeeNi = G => P.ni.main * Math.min(Math.max(0, G - P.ni.pt), P.ni.uel - P.ni.pt) + P.ni.upper * Math.max(0, G - P.ni.uel);
  const employee = G => ({ G, ni: employeeNi(G), pen: 0, ani: G });

  const childBenefit = kids => kids > 0 ? (P.cb.first + P.cb.other * (kids - 1)) * P.cb.weeks : 0;
  // The partner with the higher adjusted net income pays it.
  const hicbc = (anis, kids) => {
    const top = Math.max(0, ...anis);
    return childBenefit(kids) * Math.min(1, Math.max(0, (top - P.cb.from) / (P.cb.to - P.cb.from)));
  };

  // Monthly Universal Credit for a household with no housing costs, no savings and adults aged 25+.
  function universalCredit(netMonthly, couple, kids, region) {
    const u = P.uc;
    const max = (couple ? u.couple : u.single) + kids * u.child;
    const wa = kids > 0 ? u.wa : 0;
    const uc = Math.max(0, max - u.taper * Math.max(0, netMonthly - wa));
    const scp = region === 'scot' && uc > 0 ? kids * P.scp * 52 / 12 : 0;
    return { uc, scp, total: uc + scp, max, wa, E: netMonthly };
  }

  // Your share of household taxes and benefits = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', kids = s.children, pu = couple ? env.partner : null;
    const hh = householdTax(u.ani, pu ? pu.ani : null, s.region);
    const wo = couple ? householdTax(0, pu.ani, s.region) : null;
    const ir = hh.total - (wo ? wo.total : 0);
    const cbWith = hicbc([u.ani, pu ? pu.ani : 0], kids), cbWo = hicbc([pu ? pu.ani : 0], kids);
    const cb = cbWith - cbWo;
    let uc = 0, ucDet = null, ucWo = null;
    if (s.pa && s.regime !== 'minister') {
      const pNet = pu ? pu.G - pu.ni : 0;
      ucDet = universalCredit((u.G - u.ni + pNet - hh.total) / 12, couple, kids, s.region);
      // As for France's prime d'activité, an out-of-work award isn't counted as something your job takes away.
      ucWo = pNet > 0 ? universalCredit((pNet - wo.total) / 12, couple, kids, s.region) : universalCredit(Infinity, couple, kids, s.region);
      uc = 12 * (ucDet.total - ucWo.total);
    }
    return { ir, hh, wo, cb, cbWith, cbWo, cbYear: childBenefit(kids), uc, ucDet, ucWo };
  }

  function employerSide(G, size) {
    const ni = P.ni.er * Math.max(0, G - P.ni.st);
    const ea = size === 'solo' ? Math.min(ni, P.ni.ea) : 0;
    const levy = size === 'big' ? P.ni.levy * G : 0;
    return { ni, ea, levy, er: ni - ea + levy };
  }

  // Ministers and MPs: Class 1 NI on all pay, pension contributions taken before tax, taxed as employment income.
  function computeMinister(G, s, env, role = s.minRole) {
    const pen = P.pen.ee * G;
    const u = { G, ni: employeeNi(G), pen, ani: G - pen, role };
    const tax = incomeTaxes(u, { ...s, regime: 'minister', pa: false }, env);
    const erNi = P.ni.er * Math.max(0, G - P.ni.st), erPen = P.pen.er * G;
    const er = erNi + erPen;
    const net = G - pen - u.ni - tax.ir - tax.cb;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + er, net, u, tax, erNi, erPen, vatShare, regime: 'minister',
      parts: { er, ee: u.ni + pen, ir: tax.ir, cb: tax.cb, uc: 0, vat } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = employee(G);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const emp = employerSide(G, s.size);
    const net = G - u.ni - tax.ir - tax.cb + tax.uc;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + emp.er, net, u, tax, emp, vatShare,
      parts: { er: emp.er, ee: u.ni, ir: tax.ir, cb: tax.cb, uc: -tax.uc, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'cb', 'uc', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', cb: 'var(--k-csg)', uc: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'cb', 'uc', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'cb', 'uc'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'cb', 'uc'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const irTable = (p, label) => {
      const br = p.slices.filter(b => b.r > 0).map(b => row(`${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}`, b.amt)).join('');
      return `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
        ${row(t('tip.irIncome'), p.income)}${row('− ' + t('bd.persAllow'), p.pa)}${row('= ' + t('bd.taxableGb'), p.taxable)}${br}
        ${p.relief > 0 ? row('− ' + t('tip.maRelief'), -p.relief) : ''}${tot(t('tip.irPerson'), p.tax)}`;
    };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${r ? `<table>
        ${row(t('tip.mpSalary'), P.mp)}${row(t('tip.minSalary'), r.G - P.mp)}${tot(t('total'), r.G)}</table>` : ''}${sources('minSal', 'mpPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr', pct(P.pen.er, 1))}</p>${r ? `<table>${row(t('tip.erNi'), r.erNi)}${row(t('tip.erPen'), r.erPen)}${tot(t('total'), r.parts.er)}</table>` : ''}${sources('employers', 'pcpf')}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe', pct(P.pen.ee, 2))}</p>${r ? `<table>${row(t('tip.eePen'), r.u.pen)}${row(t('tip.eeNi'), r.u.ni)}${tot(t('youPay'), r.parts.ee)}</table>` : ''}${sources('employers')}`,
      uc: () => `<h4>${t('comp.uc')}</h4><p>${t('tip.minUc')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('minSal', 'mpPay', 'pcpf')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('ma', 'hicbc', 'uc')}`,
      paToggle: () => `<h4>${t('comp.uc')}</h4><p>${t('tip.paToggle')}</p>${sources('uc', 'ucWages')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('scot')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size', eur(P.ni.ea))}</p>${sources('ea', 'levy')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r && r.emp ? `<table>
          ${row(`15% × (${eur(r.G)} − ${eur(P.ni.st)})`, r.emp.ni)}
          ${r.emp.ea > 0 ? row('− ' + t('bd.ea'), -r.emp.ea) : ''}
          ${r.emp.levy > 0 ? row(`+ ${t('bd.levy')} 0.5%`, r.emp.levy) : ''}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}${sources('employers', 'ea', 'levy')}`,
      ea: r => `<h4>${t('bd.ea')}</h4><p>${t('tip.ea', eur(P.ni.ea))}</p>${r && r.emp ? `<p>−${eur(r.emp.ea)}</p>` : ''}${sources('ea')}`,
      levy: () => `<h4>${t('bd.levy')}</h4><p>${t('tip.levy')}</p>${sources('levy')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>
          ${row(`8% × ${eur(Math.min(Math.max(0, r.G - P.ni.pt), P.ni.uel - P.ni.pt))}`, P.ni.main * Math.min(Math.max(0, r.G - P.ni.pt), P.ni.uel - P.ni.pt))}
          ${r.G > P.ni.uel ? row(`2% × ${eur(r.G - P.ni.uel)}`, P.ni.upper * (r.G - P.ni.uel)) : ''}
          ${tot(t('youPay'), r.u.ni)}</table>` : ''}${sources('employers')}`,
      persAllow: r => `<h4>${t('bd.persAllow')}</h4><p>${t('tip.persAllow', r ? ` <b>${eur(r.tax.hh.me.pa)}</b>` : '')}</p>${sources('rates', 'taper')}`,
      taxable: r => `<h4>${t('bd.taxableGb')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.tax.hh.me.taxable)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('rates', 'scot')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM', t('region.' + s.region))}</p><table>
          ${irTable(h.me, h.them ? t('tip.irYou') : '')}
          ${h.them ? irTable(h.them, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.total)}${row('− ' + t('tip.irWithout'), -r.tax.wo.total)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${h.ma ? `<p>${t('tip.maUsed', h.ma)}</p>` : ''}${sources('rates', 'scot', 'ma')}`;
      },
      cb: r => {
        const d = r && r.tax;
        return `<h4>${t('comp.cb')}</h4><p>${t('tip.cb')}</p>${d && d.cbYear ? `<table>
          ${row(t('tip.cbYear', s.children), d.cbYear)}
          ${tot(t('tip.cbWith'), d.cbWith)}
          ${d.cbWo ? row('− ' + t('tip.cbWithout'), -d.cbWo) : ''}
          ${tot(t('tip.irYours'), d.cb)}</table>` : ''}${sources('cb', 'hicbc')}`;
      },
      uc: r => {
        const d = r && r.tax.ucDet, w = r && r.tax.ucWo;
        return `<h4>${t('comp.uc')}</h4><p>${t('tip.uc')}</p>${d ? `<table>
          ${row(t('tip.ucMax'), d.max)}
          ${row(`− 55% × (${eur(d.E)} − ${eur(d.wa)})`, -P.uc.taper * Math.max(0, d.E - d.wa))}
          ${tot(t('tip.ucMonth'), d.uc)}
          ${d.scp ? row('+ ' + t('tip.scp'), d.scp) : ''}
          ${w && w.total ? row('− ' + t('tip.ucWithout'), -w.total) : ''}
          ${tot(t('tip.ucYear'), -r.parts.uc)}</table>` : ''}
          <p class="m">${t('tip.ucM')}</p>${sources('uc', 'ucWages', 'scp')}`;
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
    const p = r.parts, me = r.tax.hh.me, min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (min) L.push({ op: '+', k: 'er', label: t('bd.minEr'), v: p.er, tax: p.er, cls: 'sub' });
    else {
      L.push({ op: '+', k: 'er', label: t('comp.er'), v: r.emp.ni, tax: r.emp.ni, cls: 'sub' });
      if (r.emp.ea > 0) L.push({ op: '−', k: 'ea', label: t('bd.ea'), v: r.emp.ea, tax: -r.emp.ea, cls: 'sub' });
      if (r.emp.levy > 0) L.push({ op: '+', k: 'levy', label: t('bd.levy'), v: r.emp.levy, tax: r.emp.levy, cls: 'sub' });
    }
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (min) L.push({ op: '−', k: 'ee', label: t('tip.eePen'), v: r.u.pen, tax: r.u.pen });
    L.push(
      { op: '−', k: 'ee', label: t(min ? 'tip.eeNi' : 'comp.ee'), v: r.u.ni, tax: r.u.ni },
      { op: '', k: 'persAllow', label: t('bd.persAllow'), v: me.pa, cls: 'sub' },
      { op: '=', k: 'taxable', label: t('bd.taxableGb'), v: me.taxable, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
    );
    if (p.cb > .5) L.push({ op: '−', k: 'cb', label: t('comp.cb'), v: p.cb, tax: p.cb });
    if (Math.abs(p.uc) > .5) L.push({ op: p.uc < 0 ? '+' : '−', k: 'uc', label: t('comp.uc'), v: Math.abs(p.uc), tax: p.uc });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-wage zone: from the National Living Wage to where Universal Credit runs out.
  function trap(x) {
    const s = x.s, nlw = NLW * 12 / s.factor;
    const end = s.pa && s.regime !== 'minister' ? x.firstMonthly(m => m > nlw && compute(m * s.factor, s, x.env()).tax.ucDet.total <= 0, nlw, 20000) : null;
    if (!end || end <= nlw + 1) return { band: [nlw, nlw], text: [x.fmtM(nlw, 10), null, null] };
    const scp = s.region === 'scot' && s.children > 0 ? eur(s.children * P.scp * 52) : null;
    return { band: [nlw, end], text: [x.fmtM(nlw, 10), x.fmtM(end, 10) + x.perUnit(), scp] };
  }

  // The personal allowance taper: 60% (62% with NI) between £100,000 and £125,140, more in Scotland.
  function top(x) {
    const s = x.s;
    const rate = s.region === 'scot' ? .45 * 1.5 : .40 * 1.5;
    return {
      at: P.taperFrom / s.factor,
      text: [x.fmtM(P.taperFrom / s.factor, 50) + x.perUnit(), x.fmtM(125140 / s.factor, 50) + x.perUnit(), pct(rate + P.ni.upper, 1),
        s.children > 0 ? eur(P.cb.from) : null, eur(P.cb.to)],
    };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'GBP',
    regions: REGIONS, sizes: SIZES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 20,
    features: { pa: true },
    communes: false,
    local: null,
    state: { salary: 3000, factor: 12, minRole: 'cabinet', pa: true, commune: '', region: 'ruk', local: 0, vatRate: 20, size: 'big' },
    urlFields: {
      uc: ['pa', 'bool'], region: ['region', 'str', REGIONS], size: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    minSalary: role => GOV[role],
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: computeMinister(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: { uc: 'ucLost' }, recvLabels: { uc: 'ucReceived' },
    polNote: p => p.regime === 'mp' ? 'polNote.mp' : 'polNote.minister',
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'minSal',
    refKeys: ['er', 'ee', 'ir', 'scot', 'cb', 'uc', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
