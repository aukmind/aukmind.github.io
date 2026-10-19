// Belgian salary rules for income year 2026. Loaded by ../index.html?country=be.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const REGIONS = ['vl', 'wal', 'bru'];

  const P = {
    brackets: [[16720, .25], [29510, .40], [51070, .45], [Infinity, .50]],
    taxFree: 11550,
    child: [0, 2130, 5130, 11440, 18510], childExtra: 7070, under3: 740, singleParent: 1980, childRefundMax: 550,
    profPct: .30, profMax: 6070,
    mqPct: .30, mqMax: 11780,
    ee: .1307,
    er: { basic: .1988, wageMod: .0512, fsoSmall: .0032, fsoBig: .0037, tempUnemp: .0009, riskGroups: .0010, asbestos: .0001 * 3 / 4 },
    wbA: { max: 127.54, lo: 2937.93, hi: 3336.98, k: .3196 },
    wbB: { max: 171.99, lo: 2300.62, hi: 2937.93, k: .2699 },
    fwb: { a: .3314, b: .5254, max: 2000 },
    struct: [[.14, 11687.74], [.16, 9738.14]],
    autonomy: .24957,
    surcharge: { vl: .33257, wal: .33257, bru: .32591 },
  };

  // Monthly gross, full-time: legal minimum (NAR, 1 Apr 2026) and Statbel's latest wage survey (2022).
  const REF_WAGES = [
    { key: 'min', m: 2189.81, year: 2026, color: '--w-min' },
    { key: 'med', m: 3728, year: 2022, color: '--w-med' },
    { key: 'avg', m: 4076, year: 2022, color: '--w-avg' },
  ];

  const GOV = {
    minister: { salary: 254433.93, holFix: 1545.01, holPct: .011, eoyFix: 480.03, eoyPct: .025, repr: 392.45 * 12, reprPM: 784.91 * 12, housing: 1962.28 * 12 },
    mp: { pay: 107888.16, pension: .085, expenses: 31798.56, forfait: [[7540, .287], [14970, .10], [24920, .05], [Infinity, .03]], forfaitMax: 5210 },
  };
  const MIN_TOTAL = GOV.minister.salary * (1 + GOV.minister.holPct + GOV.minister.eoyPct) + GOV.minister.holFix + GOV.minister.eoyFix;
  const DOC_MINISTERS = 'https://www.lachambre.be/FLWB/PDF/56/0918/56K0918001.pdf';
  const DOC_MP = 'https://www.lachambre.be/kvvcr/pdf_sections/depute/statut%20du%20membre.pdf';

  // Total declared gross pay for 2024, all mandates, from Cumuleo (federal declaration 2026). Brackets give a range;
  // pub is the part paid by the public company itself.
  const CUMULEO_RANKING = 'https://www.cumuleo.be/cumul-mandats/remuneration-2024.php';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: MIN_TOTAL, hi: MIN_TOTAL, url: DOC_MINISTERS },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: MIN_TOTAL, hi: MIN_TOTAL, url: DOC_MINISTERS },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.mp.pay, hi: GOV.mp.pay, url: DOC_MP },
    { kind: 'gov', name: 'Pierre Wunsch', role: 'bnb', lo: 572602, hi: 699998, url: CUMULEO_RANKING },
    { kind: 'gov', name: 'Maxime Prévot', role: 'prevot', lo: 365752.40, hi: 533182.40, url: CUMULEO_RANKING },
    { kind: 'gov', name: 'Alexander De Croo', role: 'pm', regime: 'pm', lo: 279463.46, hi: 279463.46, url: CUMULEO_RANKING },
    { kind: 'gov', name: 'Bart De Wever', role: 'dewever', lo: 261862.39, hi: 390590.39, url: 'https://www.cumuleo.be/mandataire/11423-bart-de-wever.php' },
    { kind: 'gov', name: 'Paul Magnette', role: 'magnette', lo: 198582.27, hi: 327313.27, url: 'https://www.cumuleo.be/mandataire/11386-paul-magnette.php' },
    { kind: 'corp', name: 'Marc Raisière', role: 'belfius', lo: 1149512.78, hi: 1149512.78, pub: 1149512.78, url: 'https://www.cumuleo.be/mandataire/27590-marc-raisiere.php' },
    { kind: 'corp', name: 'Philippe Lallemand', role: 'ethias', lo: 667710.26, hi: 716749.26, pub: 655448.26, url: 'https://www.cumuleo.be/mandataire/4643-philippe-lallemand.php' },
    { kind: 'corp', name: 'Dirk Terweduwe', role: 'credendo', lo: 520992.45, hi: 527120.45, pub: 474402.61, url: 'https://www.cumuleo.be/mandataire/11832-dirk-terweduwe.php' },
    { kind: 'corp', name: 'Sophie Dutordoir', role: 'sncb', lo: 401655.84, hi: 505861.84, pub: 377130.84, url: 'https://www.cumuleo.be/mandataire/11601-sophie-dutordoir.php' },
    { kind: 'corp', name: 'Jannie Haek', role: 'lottery', lo: 393881.02, hi: 393881.02, pub: 393881.02, url: 'https://www.cumuleo.be/mandataire/5451-jannie-haek.php' },
    { kind: 'corp', name: 'Benoît Gilson', role: 'infrabel', lo: 373066.97, hi: 379194.97, pub: 373065.97, url: 'https://www.cumuleo.be/mandataire/32482-benoit-gilson.php' },
    { kind: 'corp', name: 'Koenraad Van Loo', role: 'sfpi', lo: 313280, hi: 417486, pub: 283255, url: 'https://www.cumuleo.be/mandataire/1193-koenraad-van-loo.php' },
    { kind: 'corp', name: 'Geoffray Robert', role: 'skeyes', lo: 310498.40, hi: 310498.40, pub: 310498.40, url: 'https://www.cumuleo.be/mandataire/31509-geoffray-robert.php' },
    { kind: 'corp', name: 'Audrey Hanard', role: 'bpost', lo: 280819.52, hi: 308216.52, pub: 158217.52, url: 'https://www.cumuleo.be/mandataire/34411-audrey-hanard.php' },
  ];

  const SRC = {
    rates: 'https://fin.belgium.be/en/private-individuals/tax-return/income/tax-rates',
    indexed: 'https://www.practicali.be/blog/geindexeerde-bedragen-aj-2027',
    taxFree: 'https://www.liantis.be/nl/nieuws/hervorming-personenbelasting-belastingvrije-som-stijgt-stapsgewijs-vanaf-2026',
    mq: 'https://www.securex.be/nl/lex4you/werkgever/themas/verlonen/burgerlijke-staat-personen-ten-laste/huwelijksquotient',
    regional: 'https://docs.vlaamsparlement.be/files/pfile?id=1908771',
    autonomy: 'https://news.belgium.be/nl/vaststelling-van-de-definitieve-autonomiefactor-het-kader-van-de-wet-betreffende-de-financiering',
    communal: 'https://fin.belgium.be/nl/particulieren/belastingaangifte/aanslagbiljet/gemeentebelasting',
    statbel: 'https://statbel.fgov.be/nl/over-statbel/methodologie/classificaties/geografie',
    rszContrib: 'https://www.socialsecurity.be/employer/instructions/dmfa/nl/latest/instructions/socialsecuritycontributions/contributions.html',
    vbo2026: 'https://www.vbo-feb.be/nl/nieuws/de-sociale-nieuwigheden-op-1-januari-2026/',
    vboQ1: 'https://www.vbo-feb.be/nl/nieuws/sociale-bijdragen-eerste-kwartaal-2026/',
    struct: 'https://www.partena-professional.be/en/our-insights/infoflashes/nsso-structural-reduction-1-januari-2026',
    structCalc: 'https://www.securex.be/nl/lex4you/werkgever/themas/loonbeleid-optimaliseren/rsz-kortingen-alle-gewesten/de-berekening-van-het-theoretisch-verminderingsbedrag',
    wb: 'https://www.securex.be/nl/lex4you/werkgever/actuele-bedragen/sociaalrechtelijke-bedragen/werkbonus',
    minWage: 'https://cnt-nar.be/nl/thema-dossiers/minimumloon',
    wages: 'https://statbel.fgov.be/en/themes/work-training/wages-and-labourcost/overview-belgian-wages-and-salaries',
    wbRsz: 'https://www.socialsecurity.be/employer/instructions/dmfa/nl/latest/instructions/deductions/workers_reductions/workbonus.html',
    bbsz: 'https://www.socialsecurity.be/employer/instructions/dmfa/nl/latest/instructions/special_contributions/other_specialcontributions/specialsocialsecuritycontribution.html',
    vat: 'https://news.belgium.be/nl/hervorming-van-bepaalde-btw-tarieven',
    vatGuide: 'https://www.accountable.eu/nl-be/blog/btw-tarieven-belgie/',
    cumuleoRanking: 'https://www.cumuleo.be/cumul-mandats/remuneration-2024.php',
    ministers: DOC_MINISTERS,
    mpStatute: DOC_MP,
    bosaHoliday: 'https://bosa.belgium.be/sites/default/files/publications/documents/PP_vakantiegeld_2026_berekening_NL.pdf',
    bosaEoy: 'https://bosa.belgium.be/sites/default/files/documents/20251127_PP_Eindejaarstoelage_berekeningNL.pdf',
    dmfaMps: 'https://www.socialsecurity.be/employer/instructions/dmfa/fr/latest/instructions/persons/specific/mps.html',
    cumuleoDeWever: 'https://www.cumuleo.be/mandataire/11423-bart-de-wever.php',
    cumuleoMagnette: 'https://www.cumuleo.be/mandataire/11386-paul-magnette.php',
  };

  const progressive = x => {
    let t = 0, lo = 0;
    for (const [hi, r] of P.brackets) { if (x > lo) t += (Math.min(x, hi) - lo) * r; lo = hi; }
    return t;
  };
  const bracketRows = x => {
    const rows = []; let lo = 0;
    for (const [hi, r] of P.brackets) { if (x > lo) rows.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return rows;
  };
  const childSupp = (n, u3) => (n <= 4 ? P.child[n] : P.child[4] + (n - 4) * P.childExtra) + u3 * P.under3;

  function workBonus(m) {
    const band = b => m <= 0 ? 0 : m <= b.lo ? b.max : m < b.hi ? b.max - b.k * (m - b.lo) : 0;
    return { A: band(P.wbA), B: band(P.wbB) };
  }

  function employeeSide(G, factor) {
    const m = G / factor;
    const hol = Math.max(0, factor - 13);
    const holExempt = Math.max(0, hol - .85) * m;
    const eeBase = G - holExempt;
    const erBase = G - hol * m;
    const { A, B } = workBonus(m);
    const sscGross = P.ee * eeBase;
    const wbRaw = 12 * (A + B);
    const ratio = wbRaw > 0 ? Math.min(1, sscGross / wbRaw) : 0;
    const wb = wbRaw * ratio;
    const ssc = sscGross - wb;
    const taxable = G - ssc;
    const prof = Math.min(P.profPct * taxable, P.profMax);
    const fwb = Math.min(P.fwb.max, 12 * ratio * (P.fwb.a * A + P.fwb.b * B));
    return { m, hol: hol * m, holExempt, eeBase, erBase, sscGross, wb, ssc, taxable, prof, npi: taxable - prof, fwb };
  }

  // tax = before refundable child credit; refund = unused child allowance offset
  function columnTax(income, allowance, fwb, childPart, nChildren) {
    const base = progressive(income), red = progressive(allowance);
    const tax = Math.max(0, Math.max(0, base - red) - fwb);
    const refund = nChildren
      ? Math.min(P.childRefundMax * nChildren, Math.max(0, red - Math.max(base, progressive(allowance - childPart))))
      : 0;
    return { tax, refund, base, red };
  }

  function federalTax(user, partner, ctx) {
    const cs = childSupp(ctx.children, ctx.under3);
    if (ctx.household !== 'joint') {
      const allow = P.taxFree + cs + (ctx.children > 0 ? P.singleParent : 0);
      const c = columnTax(user.npi, allow, user.fwb, cs, ctx.children);
      return { tax: c.tax, net: Math.max(0, c.tax - c.refund), det: { joint: false, allow, ...c } };
    }
    // Your share = what your income adds to the couple's bill.
    const withUser = jointTax(user, partner, cs, ctx.children);
    const without = jointTax({ npi: 0, fwb: 0 }, partner, cs, ctx.children);
    return {
      tax: Math.max(0, withUser.tax - without.tax),
      net: Math.max(0, (withUser.tax - withUser.refund) - (without.tax - without.refund)),
      det: { joint: true, withUser, without },
    };
  }

  function jointTax(user, partner, cs, nChildren) {
    let a = user.npi, b = partner.npi, q = 0;
    const total = a + b, userHigher = a >= b;
    if (total > 0) {
      const lo = Math.min(a, b);
      if (lo < P.mqPct * total) {
        q = Math.min(P.mqPct * total - lo, P.mqMax);
        if (userHigher) { a -= q; b += q; } else { b -= q; a += q; }
      }
    }
    let allowA = P.taxFree + (userHigher ? cs : 0);
    let allowB = P.taxFree + (userHigher ? 0 : cs);
    const sA = Math.max(0, allowA - a), sB = Math.max(0, allowB - b);
    if (sA > 0 && sB === 0) { allowA -= sA; allowB += sA; }
    else if (sB > 0 && sA === 0) { allowB -= sB; allowA += sB; }
    const colA = columnTax(a, allowA, user.fwb, userHigher ? cs : 0, userHigher ? nChildren : 0);
    const colB = columnTax(b, allowB, partner.fwb, userHigher ? 0 : cs, userHigher ? 0 : nChildren);
    return { tax: colA.tax + colB.tax, refund: colA.refund + colB.refund, q };
  }

  function bbszQuarter(M, scale) {
    const Q = 3 * M;
    if (scale === 'single') {
      if (Q <= 5836.14) return 0;
      if (Q <= 6570.54) return 3 * .0422 * (M - 1945.38);
      if (Q <= 11211) return 30.99 + 3 * .011 * (M - 2190.18);
      if (Q <= 12300) return 82.05 + 3 * .0338 * (M - 3737);
      return Math.min(182.82, 118.83 + 3 * .011 * (M - 4100));
    }
    const withIncome = scale === 'jointWith';
    if (Q <= 5836.14) return withIncome && Q >= 3285.29 ? 15.45 : 0;
    if (Q <= 6570.54) return Math.max(withIncome ? 15.45 : 0, 3 * .059 * (M - 1945.38));
    return Math.min(withIncome ? 154.92 : 182.82, 43.32 + 3 * .011 * (M - 2190.18));
  }

  function erParts(s) {
    const e = P.er;
    return [
      { label: t('er.basic'), rate: e.basic },
      { label: t('er.wageMod'), rate: e.wageMod },
      { label: t('er.fso', s.size === 'big'), rate: s.size === 'big' ? e.fsoBig : e.fsoSmall },
      { label: t('er.tempUnemp'), rate: e.tempUnemp },
      { label: t('er.riskGroups'), rate: e.riskGroups },
      { label: t('er.asbestos'), rate: e.asbestos },
    ];
  }

  function incomeTaxes(u, s, env) {
    const fed = federalTax(u, s.household === 'joint' ? env.partner : null, s);
    const keep = 1 - P.autonomy, sur = P.surcharge[s.region];
    return { fed, federal: fed.net * keep, regional: fed.net * keep * sur, communal: fed.tax * keep * (1 + sur) * s.local / 100 };
  }

  // Federal minister, from the Chamber's summary of the 3 Feb 2025 circular and BOSA's payroll guides.
  // G is the yearly taxable total: salary + holiday pay + end-of-year allowance.
  function computeMinister(G, s, env, pm = s.minRole === 'pm') {
    const m = GOV.minister;
    const salary = Math.max(0, (G - m.holFix - m.eoyFix) / (1 + m.holPct + m.eoyPct));
    const hol = G > 0 ? Math.min(G, m.holFix + m.holPct * salary) : 0;
    // 13.07% only on holiday pay; no contribution on the salary, none from the state as employer.
    const ee = P.ee * hol;
    const taxable = G - ee;
    const prof = Math.min(P.profPct * taxable, P.profMax);
    const u = { m: G / 12, hol, holExempt: 0, eeBase: hol, erBase: 0, sscGross: ee, wb: 0, ssc: ee, taxable, prof, npi: taxable - prof, fwb: 0, salary, eoy: G - salary - hol };
    const { fed, federal, regional, communal } = incomeTaxes(u, s, env);
    const allow = G > 0 ? (pm ? m.reprPM : m.repr) + m.housing : 0;
    const cost = G + allow;
    const net = G - ee - federal - regional - communal + allow;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return {
      G, cost, net, u, fed, allow, structRed: 0, erRate: 0, bbszScale: 'single', vatShare, regime: 'minister',
      parts: { er: 0, ee, fed: federal, reg: regional, com: communal, bbsz: 0, vat },
    };
  }

  // Federal MP, from the Chamber member statute: 8.5% pension contribution, taxed as profits, 28% tax-free expenses.
  function computeMP(A, s, env) {
    const m = GOV.mp;
    const pension = m.pension * A;
    const taxable = A - pension;
    let prof = 0, lo = 0;
    for (const [hi, r] of m.forfait) { if (taxable > lo) prof += (Math.min(taxable, hi) - lo) * r; lo = hi; }
    prof = Math.min(prof, m.forfaitMax);
    const u = { taxable, npi: taxable - prof, fwb: 0 };
    const { federal, regional, communal } = incomeTaxes(u, s, env);
    return { net: A - pension - federal - regional - communal + m.expenses, allow: m.expenses, taxes: pension + federal + regional + communal };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = employeeSide(G, s.factor);
    const { fed, federal, regional, communal } = incomeTaxes(u, s, env);
    const bbszScale = s.household !== 'joint' ? 'single' : (s.partnerGross > 0 ? 'jointWith' : 'jointWithout');
    const bbsz = G > 0 ? 4 * bbszQuarter(u.eeBase / 12, bbszScale) : 0;

    const erRate = erParts(s).reduce((t, p) => t + p.rate, 0);
    const q = u.erBase / 4;
    const structRed = G > 0 ? 4 * P.struct.reduce((t, [k, S]) => t + Math.max(0, k * (S - q)), 0) : 0;
    const er = Math.max(0, erRate * u.erBase - structRed);
    const cost = G + er;

    const net = G - u.ssc - federal - regional - communal - bbsz;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return {
      G, cost, net, u, fed, structRed, erRate, bbszScale, vatShare,
      parts: { er, ee: u.ssc, fed: federal, reg: regional, com: communal, bbsz, vat },
    };
  }

  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', fed: 'var(--k-fed)', reg: 'var(--k-reg)', com: 'var(--k-com)', bbsz: 'var(--k-bbsz)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'fed', 'reg', 'com', 'bbsz', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'fed', 'reg', 'com', 'bbsz'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'fed', 'reg', 'com', 'bbsz'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };
  function tips(x) {
    const s = x.s;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(GOV.minister.salary))}</p>${r ? `<table>
        <tr><td>${t('tip.minSalary')}</td><td>${eur(r.u.salary)}</td></tr>
        <tr><td>${t('tip.minHol')}</td><td>${eur(r.u.hol)}</td></tr>
        <tr><td>${t('tip.minEoy')}</td><td>${eur(r.u.eoy)}</td></tr>
        <tr class="t"><td>${t('total')}</td><td>${eur(r.G)}</td></tr></table>` : ''}${sources('ministers', 'bosaHoliday', 'bosaEoy')}`,
      allow: r => `<h4>${t('bd.allow')}</h4><p>${t('tip.allow', eur(GOV.minister.repr / 12, 2), eur(GOV.minister.reprPM / 12, 2), eur(GOV.minister.housing / 12, 2))}</p>${r ? `<p><b>${eur(r.allow)}</b>${t('aYear')}</p>` : ''}${sources('ministers')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: () => `<h4>${t('comp.er')}</h4><p>${t('tip.minEr')}</p>${sources('dmfaMps')}`,
      ee: r => `<h4>${t('bd.minSoc')}</h4><p>${t('tip.minEe')}</p>${r ? `<p>${pct(P.ee, 2)} × ${eur(r.u.hol)} = <b>${eur(r.parts.ee)}</b></p>` : ''}${sources('dmfaMps', 'bosaHoliday', 'bosaEoy')}`,
      bbsz: () => `<h4>${t('comp.bbsz')}</h4><p>${t('tip.minBbsz')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('ministers', 'bosaHoliday', 'dmfaMps')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      'factor13.85': () => `<h4>${t('tip.monthsPaid', num(13.85, 2))}</h4><p>${t('tip.f1385')}</p><p class="m">${t('tip.f1385m')}</p>`,
      'factor13.92': () => `<h4>${t('tip.monthsPaid', num(13.92, 2))}</h4><p>${t('tip.f1392')}</p><p class="m">${t('tip.f1392m')}</p>${sources('rszContrib')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.mqMax))}</p>${sources('mq', 'indexed')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), num(s.factor, 2), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const parts = erParts(s);
        const base = r ? r.u.erBase : null;
        const rowsHtml = parts.map(p => `<tr><td>${p.label} ${pct(p.rate, p.rate < .001 ? 4 : 2)}</td><td>${base != null ? eur(p.rate * base) : ''}</td></tr>`).join('');
        return `<h4>${t('comp.er')}</h4>
          <p>${r ? t('tip.er', eur(base), eur(r.u.hol)) : t('tip.er')}</p>
          <table>${rowsHtml}
          ${r && r.structRed > 0 ? `<tr><td>− ${t('tip.structShort')}</td><td>−${eur(r.structRed)}</td></tr>` : ''}
          <tr class="t"><td>${t('total')} ${pct(r ? r.parts.er / base : parts.reduce((t, p) => t + p.rate, 0), 2)}</td><td>${r ? eur(r.parts.er) : ''}</td></tr></table>
          <p class="m">${t('tip.erM')}</p>
          ${sources('vboQ1', 'vbo2026', 'rszContrib')}`;
      },
      struct: r => {
        const q = r ? r.u.erBase / 4 : 0;
        return `<h4>${t('tip.structH')}</h4><p>${t('tip.struct')}</p>
          ${r ? `<p>${t('tip.structCalc', eur2(q), eur2(r.structRed / 4), eur(r.structRed))}</p>` : ''}${sources('struct', 'structCalc')}`;
      },
      ee: r => `<h4>${t('comp.ee')}</h4>
        <p>${t('tip.ee')}</p>
        ${r ? `<table>
          <tr><td>${pct(P.ee, 2)} × ${eur(r.u.eeBase)}</td><td>${eur(r.u.sscGross)}</td></tr>
          ${r.u.holExempt > 0 ? `<tr><td colspan="2" class="m">${t('tip.eeExempt', eur(r.u.holExempt))}</td></tr>` : ''}
          ${r.u.wb > 0 ? `<tr><td>− ${t('wb')}</td><td>−${eur(r.u.wb)}</td></tr>` : ''}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.u.ssc)}</td></tr></table>` : ''}
        ${sources('rszContrib', 'wb')}`,
      wb: r => `<h4>${t('wb')}</h4><p>${t('tip.wb')}</p>
        ${r ? `<p>${t('tip.wbCalc', eur2(r.u.m), eur(r.u.wb), eur(r.u.fwb))}</p>` : ''}${sources('wb', 'wbRsz')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = ${eur(r.G)} − ${eur(r.u.ssc)} = <b>${eur(r.u.taxable)}</b>` : '')}</p>`,
      prof: r => `<h4>${t('bd.prof')}</h4><p>${t('tip.prof', eur(P.profMax), r ? `: min(30% × ${eur(r.u.taxable)}, ${eur(P.profMax)}) = <b>${eur(r.u.prof)}</b>` : '')}</p>${sources('indexed')}`,
      npi: r => `<h4>${t('bd.npi')}</h4><p>${t('tip.npi', r ? ` = <b>${eur(r.u.npi)}</b>` : '')}</p>`,
      fed: r => {
        const keep = pct(1 - P.autonomy, 3);
        if (!r) return `<h4>${t('comp.fed')}</h4><p>${t('tip.fedShort', keep)}</p>${sources('rates', 'autonomy')}`;
        const d = r.fed.det;
        let body;
        if (!d.joint) {
          const br = bracketRows(r.u.npi).map(b => `<tr><td>${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}</td><td>${eur(b.amt)}</td></tr>`).join('');
          body = `<table>${br}
            <tr class="t"><td>${t('tip.taxOn', eur(r.u.npi))}</td><td>${eur(d.base)}</td></tr>
            <tr><td>− ${t('tip.allowance', eur(d.allow))}</td><td>−${eur(Math.min(d.red, d.base))}</td></tr>
            ${r.u.fwb > 0 ? `<tr><td>− ${t('tip.fwb')}</td><td>−${eur(r.u.fwb)}</td></tr>` : ''}
            ${d.refund > 0 ? `<tr><td>− ${t('tip.childRefund')}</td><td>−${eur(Math.min(d.refund, d.tax))}</td></tr>` : ''}
            <tr class="t"><td>${t('tip.basicTax')}</td><td>${eur(r.fed.net)}</td></tr>
            <tr><td>${t('tip.fedShare', keep)}</td><td>${eur(r.parts.fed)}</td></tr></table>`;
        } else {
          body = `<p>${t('tip.fedJoint', eur(d.withUser.tax - d.withUser.refund), eur(d.without.tax - d.without.refund), eur(r.fed.net), eur(d.withUser.q))}</p>
            <p>${t('tip.fedShare', keep)} = <b>${eur(r.parts.fed)}</b></p>`;
        }
        return `<h4>${t('comp.fed')}</h4><p class="m">${t('tip.fedM', eur(P.taxFree), pct(P.autonomy, 3))}</p>${body}${sources('rates', 'indexed', 'taxFree', 'autonomy')}`;
      },
      reg: r => {
        const sur = P.surcharge[s.region];
        return `<h4>${t('comp.reg')}</h4><p>${t('tip.reg', pct(sur, 3), t('region.' + s.region))}</p>
          ${r ? `<p>${eur(r.fed.net)} × ${pct(1 - P.autonomy, 3)} × ${pct(sur, 3)} = <b>${eur(r.parts.reg)}</b></p>` : ''}
          <p class="m">${t('tip.regM')}</p>${sources('regional', 'autonomy')}`;
      },
      com: r => `<h4>${t('comp.com')}</h4><p>${t('tip.com', x.commune() && esc(x.commune().name), x.commune() && num(x.commune().rate, 1) + '%', num(x.localRange()[0], 1) + '%', num(x.localRange()[1], 1) + '%')}</p>
        ${r ? `<p>(${eur(r.parts.fed)} + ${eur(r.parts.reg)}) × ${num(s.local, 1)}% = <b>${eur(r.parts.com)}</b></p>` : ''}
        <p class="m">${t('tip.comM')}</p>${sources('communal', 'statbel')}`,
      bbsz: r => `<h4>${t('comp.bbsz')}</h4><p>${t('tip.bbsz')}</p>
          ${r ? `<p>${t('tip.bbszCalc', t('scale.' + r.bbszScale), eur2(r.u.eeBase / 12), eur(r.parts.bbsz))}</p>` : ''}${sources('bbsz')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat', 'vatGuide')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const s = x.s, p = r.parts, u = r.u, c = x.commune();
    const levels = [
      { op: '', k: 'taxable', label: t('bd.taxable'), v: u.taxable },
      { op: '−', k: 'fed', label: t('comp.fed'), v: p.fed, tax: p.fed },
      { op: '−', k: 'reg', label: `${t('comp.reg')} (${t('region.' + s.region)})`, v: p.reg, tax: p.reg },
      { op: '−', k: 'com', label: `${t('comp.com')} (${num(s.local, 1)}%${c ? ', ' + c.name : ''})`, v: p.com, tax: p.com },
    ];
    if (r.regime === 'minister') return [
      { op: '', k: 'gross', label: t('bd.minGross'), v: r.G },
      { op: '+', k: 'allow', label: t('bd.allow'), v: r.allow, cls: 'sub' },
      { op: '=', k: 'cost', label: t('bd.stateCost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.minGross'), v: r.G },
      { op: '−', k: 'ee', label: t('bd.minSoc'), v: p.ee, tax: p.ee },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.taxable, cls: 'tot' },
      { op: '−', k: 'prof', label: t('bd.prof'), v: u.prof, cls: 'sub' },
      { op: '=', k: 'npi', label: t('bd.npi'), v: u.npi, cls: 'sub' },
      ...levels,
      { op: '+', k: 'allow', label: t('bd.allow'), v: r.allow, cls: 'sub' },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    ];
    const L = [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er + r.structRed, tax: p.er + r.structRed, cls: 'sub' },
    ];
    if (r.structRed > 0) L.push({ op: '−', k: 'struct', label: t('bd.struct'), v: r.structRed, tax: -r.structRed, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: `${t('comp.ee')} (${pct(P.ee, 2)})`, v: u.sscGross, tax: u.sscGross },
    );
    if (u.wb > 0) L.push({ op: '+', k: 'wb', label: t('bd.wb'), v: u.wb, tax: -u.wb, cls: 'sub' });
    L.push(
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.taxable, cls: 'tot' },
      { op: '−', k: 'prof', label: t('bd.prof'), v: u.prof, cls: 'sub' },
      { op: '=', k: 'npi', label: t('bd.npi'), v: u.npi, cls: 'sub' },
      ...levels,
      { op: '−', k: 'bbsz', label: t('comp.bbsz'), v: p.bbsz, tax: p.bbsz },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // Where the work bonus and the structural reduction phase out.
  function trap(x) {
    const s = x.s, band = [P.wbB.lo, Math.max(P.wbA.hi, 4 * P.struct[0][1] / Math.min(s.factor, 13))];
    return { band, text: [x.fmtM(band[0], 100), x.fmtM(band[1], 100) + x.perUnit()] };
  }

  function top(x) {
    const s = x.s, env = x.env();
    const capAmt = 4 * (s.household !== 'joint' ? 182.82 : s.partnerGross > 0 ? 154.92 : 182.82);
    const at = x.firstMonthly(m => employeeSide(m * s.factor, s.factor).npi > P.brackets[2][0]);
    if (!at) return null;
    const cap = x.firstMonthly(m => compute(m * s.factor, s, env).parts.bbsz >= capAmt - 0.01);
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), cap && cap > at ? x.fmtM(cap, 50) + x.perUnit() : null, eur(P.brackets[2][0]), eur(capAmt)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS: ['er', 'ee', 'fed', 'reg', 'com', 'bbsz', 'vat'], COMP_COLORS, BASE_TIP,
    regions: REGIONS, sizes: ['small', 'big'], minRoles: ['minister', 'pm'], factors: [12, 13.85, 13.92], factorDigits: 2, vatStandard: 21,
    features: { under3: true },
    state: { salary: 3800, factor: 13.92, minRole: 'minister', under3: 0, commune: 'Antwerpen', region: 'vl', local: 7, vatRate: 21, size: 'small' },
    urlFields: {
      months: ['factor', 'num', [12, 13.85, 13.92]], under3: ['under3', 'num'],
      commune: ['commune', 'str'], region: ['region', 'str', REGIONS], communal: ['local', 'num'],
      size: ['size', 'str', ['small', 'big']], role: ['minRole', 'str', ['minister', 'pm']],
    },
    local: { label: 'communalLabel', tip: null, digits: 1, step: .1, range: list => list.length ? [Math.min(...list.map(c => c.rate)), Math.max(...list.map(c => c.rate))] : [0, 12], notDue: () => false, hideInMinister: false },
    parseCommunes: list => list.map(c => ({ name: c.name, rate: c.rate, region: c.region, sub: '', id: c.name })),
    communeLabel: c => c.name,
    communeTag: c => `${num(c.rate, 1)}% · ${t('region.' + c.region)}`,
    communeHint: c => `${t('region.' + c.region)} · ${num(c.rate, 1)}%`,
    minSalary: () => Math.round(MIN_TOTAL),
    env: s => ({ partner: employeeSide(Math.max(0, s.partnerGross || 0), 13.92) }),
    compute,
    own: (p, plain, env) => p.regime === 'mp' ? computeMP(p.lo, plain, env) : computeMinister(p.lo, plain, env, p.regime === 'pm'),
    segLabels: {}, recvLabels: {},
    polNote: p => p.regime === 'mp' ? 'polMpNote' : 'polMinNote',
    polTipNote: () => 'polTipNote',
    polSrc: p => p.kind === 'stat' ? t('src.' + (p.regime === 'mp' ? 'mpStatute' : 'ministers')) : 'Cumuleo: ' + esc(p.name),
    polNoteLink: 'cumuleoRanking',
    refKeys: ['er', 'ee', 'taxable', 'allow', 'couple', 'levels', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
