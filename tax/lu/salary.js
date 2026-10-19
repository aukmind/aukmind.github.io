// Luxembourg salary rules for income year 2026. Loaded by ../index.html?country=lu.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const SIZES = ['m1', 'm2', 'm3', 'm4'];
  const MIN_ROLES = ['minister', 'pm'];

  const P = {
    // Art. 118 LIR, unchanged since income year 2025.
    brackets: [[13230, 0], [15435, .08], [17640, .09], [19845, .10], [22050, .11], [24255, .12], [26550, .14], [28845, .16],
      [31140, .18], [33435, .20], [35730, .22], [38025, .24], [40320, .26], [42615, .28], [44910, .30], [47205, .32],
      [49500, .34], [51795, .36], [54090, .38], [117450, .39], [176160, .40], [234870, .41], [Infinity, .42]],
    // Class 1a: income cut by a quarter of its shortfall to 79 380, marginal rate capped at the plain rate from 51 804.
    c1a: { ref: 79380, cap: 51804 },
    fe: { lo: .07, hi: .09, thr: { 1: 150000, '1a': 150000, 2: 300000 } },
    fo: 540, ds: 480, abat: 4500,
    cis: { min: 936, lo: 11265, mid: 40000, hi: 80000, base: 300, k: .029, max: 600, fade: .015 },
    co2: { max: 216, fade: .0054 },
    cissm: { lo: 1800, mid: 3000, hi: 3600, max: 81 },
    cim: { max: 3504, lo: 60000, hi: 105000, k: .0612, min: 750 },
    // Annual ceiling = 5 SSM, with the June 2026 index step already in it.
    ceiling: 164589.81,
    ee: { health: .0305, healthBonus: .028, pension: .085, dep: .014 },
    er: { health: .0305, healthBonus: .028, pension: .085, accident: .0065, stm: .0014 },
    mutual: { m1: .0023, m2: .0095, m3: .0156, m4: .0266 },
    // A quarter of the SSM per month: 675.94 until May, 692.83 from June.
    depAllow: 5 * 675.94 + 7 * 692.83,
  };

  // Monthly gross: SSM since 1 June 2026, STATEC full-time median and mean (2022, bonuses included).
  const REF_WAGES = [
    { key: 'min', m: 2771.33, year: 2026, color: '--w-min' },
    { key: 'med', m: 58126 / 12, year: 2022, color: '--w-med' },
    { key: 'avg', m: 75919 / 12, year: 2022, color: '--w-avg' },
  ];

  // State pay is a number of index points times the point value.
  const POINT = 25.0672518, POINT_NP = 23.7362898;
  const GOV = {
    pm: { points: 940, repr: 400 },
    minister: { points: 805, repr: 150 },
    mp: { points: 375, repr: 0 },
  };
  const govPay = role => 12 * GOV[role].points * POINT;
  const govRepr = role => 12 * GOV[role].repr * POINT_NP;
  const DOC_GOV = 'https://lequotidien.lu/a-la-une/les-salaires-de-vos-ministres-passes-au-crible/';
  const DOC_POINT = 'https://fonction-publique.public.lu/fr/carriere/parcours-remuneration/fonctionnaire/traitement.html';
  const DOC_MP = 'https://wdocs-pub.chd.lu/docs/exped/134/251/123530.pdf';
  const DOC_BCL = 'https://www.bcl.lu/fr/publications/rapports_annuels/2025/239623_BCL_RAPPORT_ANNUEL_2025_FR_CHAP02.pdf';
  const DOC_BCEE = 'https://www.spuerkeess.lu/fileadmin/mediatheque/documents/about_us/rapports_annuels/BCE_03350_25_BCEE_Rapport_et_bilan_2025_inside_WEB5.pdf';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: govPay('pm'), hi: govPay('pm'), url: DOC_GOV },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: govPay('minister'), hi: govPay('minister'), url: DOC_GOV },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: govPay('mp'), hi: govPay('mp'), url: DOC_MP },
    { kind: 'gov', name: 'Gaston Reinesch', role: 'bcl', lo: 924932 / 3, hi: 924932 / 3, url: DOC_BCL },
    { kind: 'corp', name: 'Françoise Thoma', role: 'bcee', lo: 1287563 / 5, hi: 1287563 / 5, url: DOC_BCEE },
  ];

  const SRC = {
    lir: 'https://impotsdirects.public.lu/dam-assets/fr/legislation/LIR/texte-coordonn-en-vigueur-au-1er-janvier-2026-ver-08052026.pdf',
    tarif: 'https://impotsdirects.public.lu/fr/az/t/tarif_pers.html',
    formulas: 'https://impotsdirects.public.lu/fr/baremes.html',
    classes: 'https://impotsdirects.public.lu/fr/az/c/class_resid.html',
    fe: 'https://impotsdirects.public.lu/fr/az/f/fond_empl.html',
    cis: 'https://impotsdirects.public.lu/fr/az/c/credit-impot-salaries/cis2026.html',
    cissm: 'https://impotsdirects.public.lu/fr/az/c/credit-impot-salaire-social-minimum/cism2025.html',
    ds: 'https://impotsdirects.public.lu/fr/az/d/depens_spe.html',
    budget: 'https://legilux.public.lu/eli/etat/leg/loi/2025/12/19/a591/jo',
    social: 'https://www.bdo.lu/getattachment/a441b97d-9eb0-40fe-91f8-b79bf0ee61a2/Parametres-sociaux-au-01-06-2026.pdf',
    statec: 'https://chronicle.lu/category/working-in-luxembourg/50606-luxembourg-average-salary-reaches-eur76k-median-salary-stands-at-eur58k-in-2022',
    vat: 'https://guichet.public.lu/fr/entreprises/fiscalite/tva/declaration-paiement/taux-tva.html',
    point: DOC_POINT,
    govPay: DOC_GOV,
    mpPay: DOC_MP,
    bcl: DOC_BCL,
    bcee: DOC_BCEE,
  };

  const progressive = x => {
    let tot = 0, lo = 0;
    for (const [hi, r] of P.brackets) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };
  const bracketRows = x => {
    const rows = []; let lo = 0;
    for (const [hi, r] of P.brackets) { if (x > lo && r > 0) rows.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return rows;
  };
  function tax1a(x) {
    const { ref, cap } = P.c1a;
    if (x <= cap) return progressive(x - (ref - x) / 4);
    let tot = progressive(cap - (ref - cap) / 4), lo = cap;
    for (const [hi, r] of P.brackets) { if (hi > cap && x > lo) { tot += (Math.min(x, hi) - lo) * Math.max(r, .39); lo = hi; } }
    return tot;
  }
  const tariff = (x, cls) => x <= 0 ? 0 : cls === 2 ? 2 * progressive(x / 2) : cls === '1a' ? tax1a(x) : progressive(x);
  // Above the threshold the surcharge moves to 9% of the extra tax only, so there's no jump.
  function surcharge(I, x, cls) {
    const thr = P.fe.thr[cls];
    return x <= thr ? P.fe.lo * I : P.fe.hi * I - (P.fe.hi - P.fe.lo) * tariff(thr, cls);
  }

  function cisOf(G) {
    const c = P.cis;
    if (G < c.min || G >= c.hi) return { cis: 0, co2: 0 };
    const cis = G <= c.lo ? c.base + (G - c.min) * c.k : G <= c.mid ? c.max : c.max - (G - c.mid) * c.fade;
    const co2 = G <= c.mid ? P.co2.max : P.co2.max - (G - c.mid) * P.co2.fade;
    return { cis, co2 };
  }
  const cissmMonth = m => { const c = P.cissm; return m < c.lo || m >= c.hi ? 0 : m <= c.mid ? c.max : c.max / (c.hi - c.mid) * (c.hi - m); };
  // A 13th month above 3 000 € counts in the month it's paid, which then gets no CISSM.
  const cissmOf = (m, factor) => m > 0 ? (factor > 12 && m * (factor - 12) > 3000 ? 11 : 12) * cissmMonth(m) : 0;
  const cimOf = X => { const c = P.cim; return X < c.lo ? c.max : X <= c.hi ? c.max - (X - c.lo) * c.k : c.min; };

  function employeeSide(G, factor) {
    const m = G / factor, regular = Math.min(G, 12 * m), bonus = G - regular;
    const capReg = Math.min(regular, P.ceiling), capBonus = Math.min(bonus, P.ceiling - capReg), capped = capReg + capBonus;
    const health = P.ee.health * capReg + P.ee.healthBonus * capBonus;
    const pension = P.ee.pension * capped;
    const dep = G > 0 ? P.ee.dep * Math.max(0, G - P.depAllow) : 0;
    const taxable = G - health - pension;
    const fo = G > 0 ? Math.min(P.fo, taxable) : 0;
    const ds = G > 0 ? Math.min(P.ds, taxable - fo) : 0;
    const { cis, co2 } = cisOf(G);
    const cissm = cissmOf(m, factor);
    return { G, m, regular, bonus, capReg, capBonus, capped, health, pension, ee: health + pension, dep, taxable, fo, ds, net: taxable - fo - ds, cis, co2, cissm };
  }

  function erParts(u, s) {
    const e = P.er;
    return [
      { k: 'health', rate: e.health, v: e.health * u.capReg + e.healthBonus * u.capBonus },
      { k: 'pension', rate: e.pension, v: e.pension * u.capped },
      { k: 'accident', rate: e.accident, v: e.accident * u.capped },
      { k: 'stm', rate: e.stm, v: e.stm * u.capped },
      { k: 'mutual', rate: P.mutual[s.size], v: P.mutual[s.size] * u.capped },
    ];
  }

  // Household income tax for a given class and adjusted taxable income.
  function householdTax(X, cls) {
    X = Math.max(0, X);
    const I = tariff(X, cls), fe = surcharge(I, X, cls);
    return { X, cls, I, fe, tot: I + fe };
  }

  // Your share of a joint bill = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', kids = s.children;
    if (!couple) {
      const cls = kids > 0 ? '1a' : 1;
      const h = householdTax(u.net, cls);
      const cim = kids > 0 && u.G > 0 ? cimOf(h.X) : 0;
      return { ir: h.I, fe: h.fe, cim, h, without: null, cls };
    }
    const p = env.partner;
    const ab = u.G > 0 && p.G > 0 ? Math.min(P.abat, u.net, p.net) : 0;
    const h = householdTax(u.net + p.net - ab, 2);
    const without = householdTax(p.net, 2);
    return { ir: h.I - without.I, fe: h.fe - without.fe, cim: 0, h, without, ab, cls: 2 };
  }

  function finish(G, u, er, s, env, extra = {}) {
    const tax = incomeTaxes(u, s, env);
    const cred = u.cis + u.co2 + u.cissm + tax.cim;
    const allow = extra.allow || 0;
    const cost = G + er + allow;
    const net = G - u.ee - u.dep - tax.ir - tax.fe + cred + allow;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost, net, u, tax, cred, allow, vatShare, ...extra,
      parts: { er, ee: u.ee, dep: u.dep, ir: tax.ir, fe: tax.fe, cred: -cred, vat } };
  }

  // Members of government and deputies: State pay in index points, modelled with employee contributions;
  // the State pays the employer's health and pension share. The representation allowance is tax-free.
  function computeGov(G, s, env, role) {
    const u = employeeSide(G, 12);
    const er = G > 0 ? (P.er.health * u.capReg + P.er.pension * u.capped) : 0;
    return finish(G, u, er, s, env, { regime: 'minister', role, allow: G > 0 ? govRepr(role) : 0 });
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeGov(G, s, env, s.minRole);
    const u = employeeSide(G, s.factor);
    const ers = G > 0 ? erParts(u, s) : [];
    const er = ers.reduce((tot, p) => tot + p.v, 0);
    return finish(G, u, er, s, env, { ers });
  }

  const COMP_KEYS = ['er', 'ee', 'dep', 'ir', 'fe', 'cred', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', dep: 'var(--k-csg)', ir: 'var(--k-ir)', fe: 'var(--k-reg)', cred: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'dep', 'ir', 'fe', 'cred', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'dep', 'ir', 'fe', 'cred'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'dep', 'ir', 'fe', 'cred'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const credRows = r => `<table>
      ${r.u.cis > 0 ? `<tr><td>${t('tip.cis')}</td><td>${eur2(r.u.cis)}</td></tr>` : ''}
      ${r.u.co2 > 0 ? `<tr><td>${t('tip.co2')}</td><td>${eur2(r.u.co2)}</td></tr>` : ''}
      ${r.u.cissm > 0 ? `<tr><td>${t('tip.cissmRow')}</td><td>${eur2(r.u.cissm)}</td></tr>` : ''}
      ${r.tax.cim > 0 ? `<tr><td>${t('tip.cimRow')}</td><td>${eur2(r.tax.cim)}</td></tr>` : ''}
      <tr class="t"><td>${t('total')}</td><td>${eur(r.cred)}</td></tr></table>`;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', num(POINT, 4))}</p>${r ? `<p>${int(GOV[r.role].points)} × ${eur2(POINT)} × 12 = <b>${eur(govPay(r.role))}</b></p>` : ''}${sources('point', 'govPay')}`,
      allow: r => `<h4>${t('bd.allow')}</h4><p>${t('tip.allow')}</p>${r ? `<p>${int(GOV[r.role].repr)} × ${eur2(POINT_NP)} × 12 = <b>${eur(r.allow)}</b></p>` : ''}${sources('point', 'govPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr')}</p>${r ? `<p><b>${eur(r.parts.er)}</b>${t('aYear')}</p>` : ''}`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('point', 'govPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.abat))}</p>${sources('classes', 'lir')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('social')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const list = r && r.ers ? r.ers : erParts(employeeSide(0, 12), s);
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.ceiling))}</p>
          <table>${list.map(p => `<tr><td>${t('er.' + p.k)} ${pct(p.rate, 2)}</td><td>${r ? eur(p.v) : ''}</td></tr>`).join('')}
          ${r ? `<tr class="t"><td>${t('total')} ${pct(r.parts.er / Math.max(1, r.G), 2)}</td><td>${eur(r.parts.er)}</td></tr>` : ''}</table>
          <p class="m">${t('tip.erM')}</p>${sources('social')}`;
      },
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.ceiling))}</p>${r ? `<table>
          <tr><td>${t('ee.health')}</td><td>${eur(r.u.health)}</td></tr>
          <tr><td>${t('ee.pension')} ${pct(P.ee.pension, 1)}</td><td>${eur(r.u.pension)}</td></tr>
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.u.ee)}</td></tr></table>` : ''}${sources('social')}`,
      dep: r => `<h4>${t('comp.dep')}</h4><p>${t('tip.dep', eur2(P.depAllow / 12))}</p>
          ${r ? `<p>${pct(P.ee.dep, 1)} × (${eur(r.G)} − ${eur(P.depAllow)}) = <b>${eur(r.parts.dep)}</b></p>` : ''}${sources('social')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.taxable)}</b>` : '')}</p>`,
      fo: () => `<h4>${t('bd.fo')}</h4><p>${t('tip.fo', eur(P.fo))}</p>${sources('lir')}`,
      ds: () => `<h4>${t('bd.ds')}</h4><p>${t('tip.ds', eur(P.ds))}</p>${sources('ds')}`,
      abat: r => `<h4>${t('bd.abat')}</h4><p>${t('tip.abat', eur(P.abat))}</p>${r && r.tax.ab ? `<p><b>${eur(r.tax.ab)}</b></p>` : ''}${sources('lir')}`,
      npi: r => `<h4>${t('bd.npi')}</h4><p>${t('tip.npi', r ? ` = <b>${eur(r.u.net)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('tarif', 'lir')}`;
        const h = r.tax.h, cls = r.tax.cls;
        const base = cls === 2 ? h.X / 2 : h.X;
        const br = cls === '1a' ? '' : bracketRows(base).map(b => `<tr><td>${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}</td><td>${eur(b.amt)}</td></tr>`).join('');
        return `<h4>${t('comp.ir')}</h4><p>${t('tip.irClass.' + cls)}</p><table>
          <tr><td>${t('tip.irX')}</td><td>${eur(h.X)}</td></tr>
          ${cls === 2 ? `<tr><td>÷ 2</td><td>${eur(base)}</td></tr>` : ''}
          ${br}
          ${cls === 2 ? `<tr><td>× 2</td><td>${eur(h.I)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.irHousehold')}</td><td>${eur(h.I)}</td></tr>
          ${r.tax.without ? `<tr><td>− ${t('tip.irWithout')}</td><td>−${eur(r.tax.without.I)}</td></tr><tr class="t"><td>${t('tip.irYours')}</td><td>${eur(r.parts.ir)}</td></tr>` : ''}
          </table>${sources('tarif', 'lir', 'formulas')}`;
      },
      fe: r => `<h4>${t('comp.fe')}</h4><p>${t('tip.fe')}</p>${r ? `<p><b>${eur(r.parts.fe)}</b>${t('aYear')}</p>` : ''}${sources('fe', 'formulas')}`,
      cred: r => `<h4>${t('comp.cred')}</h4><p>${t('tip.cred')}</p>${r ? credRows(r) : ''}<p class="m">${t('tip.credM')}</p>${sources('cis', 'cissm', 'lir', 'budget')}`,
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
    const p = r.parts, u = r.u, gov = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(gov ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    L.push({ op: '+', k: 'er', label: t(gov ? 'bd.minEr' : 'comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    if (gov && r.allow > 0) L.push({ op: '+', k: 'allow', label: t('bd.allow'), v: r.allow, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(gov ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(gov ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.taxable, cls: 'tot' },
      { op: '−', k: 'fo', label: t('bd.fo'), v: u.fo, cls: 'sub' },
      { op: '−', k: 'ds', label: t('bd.ds'), v: u.ds, cls: 'sub' },
      { op: '=', k: 'npi', label: t('bd.npi'), v: u.net, cls: 'sub' },
    );
    if (r.tax.ab) L.push({ op: '−', k: 'abat', label: t('bd.abat'), v: r.tax.ab, cls: 'sub' });
    L.push(
      { op: '', k: 'taxable', label: t('bd.taxable'), v: u.taxable },
      { op: '−', k: 'dep', label: t('comp.dep'), v: p.dep, tax: p.dep },
      { op: '−', k: 'ir', label: `${t('comp.ir')} (${t('class.' + r.tax.cls)})`, v: p.ir, tax: p.ir },
      { op: '−', k: 'fe', label: t('comp.fe'), v: p.fe, tax: p.fe },
    );
    if (r.cred > .5) L.push({ op: '+', k: 'cred', label: t('comp.cred'), v: r.cred, tax: -r.cred });
    if (gov && r.allow > 0) L.push({ op: '+', k: 'allow', label: t('bd.allow'), v: r.allow, cls: 'sub' });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-wage zone: the CISSM fades from 3 000 to 3 600 a month, the CIS and CI-CO2 from 40 000 to 80 000 a year.
  function trap(x) {
    const s = x.s, band = [P.cissm.mid, P.cis.hi / s.factor];
    const cim = s.household !== 'joint' && s.children > 0;
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), x.fmtM(P.cissm.hi, 10), x.fmtM(P.cis.mid / s.factor, 10), cim ? eur(P.cim.lo) : null] };
  }

  function top(x) {
    const s = x.s, couple = s.household === 'joint';
    const pn = couple ? x.env().partner.net : 0;
    const topAt = couple ? 2 * P.brackets[P.brackets.length - 2][0] : P.brackets[P.brackets.length - 2][0];
    const at = x.firstMonthly(m => employeeSide(m * s.factor, s.factor).net + pn > topAt);
    if (!at) return null;
    const thr = couple ? P.fe.thr[2] : P.fe.thr[1];
    const fe = x.firstMonthly(m => employeeSide(m * s.factor, s.factor).net + pn > thr);
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), fe && fe < at ? x.fmtM(fe, 50) + x.perUnit() : null, eur(topAt), eur(thr)] };
  }

  const classOf = s => s.household === 'joint' ? 2 : s.children > 0 ? '1a' : 1;

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR',
    communes: false, local: null,
    regions: [], sizes: SIZES, minRoles: MIN_ROLES, factors: [12, 13], factorDigits: 0, vatStandard: 17,
    features: {},
    state: { salary: 5000, factor: 12, minRole: 'minister', commune: '', region: '', local: 0, vatRate: 17, size: 'm1' },
    urlFields: {
      months: ['factor', 'num', [12, 13]], size: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    parseCommunes: () => [], communeLabel: () => '', communeTag: () => '', communeHint: () => '',
    partsHint: x => t('classHint', t('class.' + classOf(x.s))),
    minSalary: role => Math.round(govPay(role)),
    env: s => ({ partner: employeeSide(Math.max(0, s.partnerGross || 0), 12) }),
    compute,
    own: (p, plain, env) => { const r = computeGov(p.lo, plain, env, p.regime); return { net: r.net, allow: r.allow }; },
    segLabels: { cred: 'credLost' }, recvLabels: { cred: 'credReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'point',
    refKeys: ['ee', 'er', 'taxable', 'classes', 'credits', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
