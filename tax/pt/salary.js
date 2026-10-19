// Portuguese salary rules for income year 2026. Loaded by ../index.html?country=pt.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const REGIONS = ['cont', 'mad', 'acor'];
  // The employer-size row carries the IRS Jovem year instead: Portuguese contributions don't depend on firm size.
  const SIZES = ['none', 'y1', 'y2', 'y5', 'y8'];
  const MIN_ROLES = ['se', 'minister', 'pm'];
  const IAS = 537.13;
  const INF = Infinity;
  const LIMITS = [8342, 12587, 17838, 23089, 29397, 43090, 46566, 86634, INF];
  const table = rates => LIMITS.map((hi, i) => [hi, rates[i]]);

  const P = {
    ias: IAS, rmmg: 920,
    ss: { ee: .11, er: .2375 },
    // Art. 68 rates after the cut authorised on 9 Oct 2026 (Proposta de Lei 108/XVII), retroactive to January.
    brackets: table([.122, .152, .207, .236, .306, .346, .431, .446, .48]),
    oe2026: [.125, .157, .212, .241, .311, .349, .431, .446, .48],
    // Madeira's own table (DLR 8/2025/M); the Azores take 30% off the national rates.
    mad: table([.0875, .1099, .1484, .1687, .2177, .2443, .3017, .3122, .336]),
    acorCut: .3,
    de: 8.54 * IAS,
    mex: { ref: 12880, b: 2.6, c: 1.35, k: 3.6, excl: 2.2 * 14 * IAS },
    dep: { base: 600, under3: 126, young: 300 },
    dgf: { std: 250, parent: 335 },
    solid: [[80000, 0], [250000, .025], [INF, .05]],
    jovem: { none: 0, y1: 1, y2: .75, y5: .5, y8: .25, cap: 55 * IAS },
    munMax: .05,
    abono: { lim: [.5, 1, 1.7, 2.5].map(k => k * 14 * IAS), u3: [190.98, 161.65, 132.07, 88.43], older: [75.13, 75.13, 54.35, 0], single: .5 },
  };
  const bracketsFor = region => region === 'mad' ? P.mad : region === 'acor' ? P.brackets.map(([hi, r]) => [hi, r * (1 - P.acorCut)]) : P.brackets;

  // Monthly gross, full-time, paid 14 times: minimum wage 2026, INE mean 2025 (12 × 1 694 € ÷ 14), Quadros de Pessoal median 2024.
  const REF_WAGES = [
    { key: 'min', m: 920, year: 2026, color: '--w-min' },
    { key: 'med', m: 1186, year: 2024, color: '--w-med' },
    { key: 'avg', m: 1452, year: 2025, color: '--w-avg' },
  ];

  // Lei 4/85: every office is a share of the President's base salary, plus a representation allowance.
  const PR_BASE = 8370.14;
  const ROLE = { pm: [.75, .40], minister: [.65, .40], se: [.60, .35], mp: [.50, .10], par: [.80, .40], pr: [1, .40] };
  const yearly = role => { const [k, rep] = ROLE[role]; return PR_BASE * k * (14 + 12 * rep); };
  const DOC_POL = 'https://www.e-konomista.pt/quanto-ganha-o-presidente-da-republica-em-portugal/';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: yearly('pm'), hi: yearly('pm'), url: DOC_POL },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: yearly('minister'), hi: yearly('minister'), url: DOC_POL },
    { kind: 'stat', key: 'se', icon: '📎', regime: 'se', lo: yearly('se'), hi: yearly('se'), url: DOC_POL },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: yearly('mp'), hi: yearly('mp'), url: DOC_POL },
    { kind: 'gov', key: 'pr', icon: '🔔', lo: yearly('pr'), hi: yearly('pr'), url: DOC_POL },
    { kind: 'gov', key: 'par', icon: '🔔', lo: yearly('par'), hi: yearly('par'), url: DOC_POL },
    { kind: 'gov', name: 'Álvaro Santos Pereira', role: 'bdp', lo: 19915.57 * 14, hi: 19915.57 * 14, url: 'https://postal.pt/nacional/governador-banco-portugal-ganha-quase-20-000-euros-mes-mas-so-tem-este-valor-conta/' },
    { kind: 'corp', name: 'Paulo Macedo', role: 'cgd', lo: 433000, hi: 966000, url: 'https://www.essential-business.pt/2026/04/17/13-bankers-in-portugal-earn-over-e1-million/' },
  ];

  const SRC = {
    rates2026: 'https://www.cgd.pt/Site/Saldo-Positivo/leis-e-impostos/Pages/novidades-IRS.aspx',
    cut: 'https://eco.sapo.pt/2026/10/09/parlamento-autoriza-governo-a-baixar-irs-ate-ao-sexto-escalao/',
    cutStatus: 'https://gestorfinanceiro.pt/blog/irs-desce-sexto-escalao-retroativo-janeiro-2026',
    mex: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs70.aspx',
    mexSim: 'https://simula.pt/simuladores/simulador_minimo_existencia',
    de: 'https://www.santander.pt/salto/irs-2026',
    dep: 'https://informador.pt/legislacao/lexit/codigos/direito-fiscal/codigo-do-irs/capitulo-iv-liquidacao/artigo-78-o-a-deducoes-dos-dependentes-e-ascendentes/',
    jovem: 'https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/informacoes_vinculativas/rendimento/cirs/Documents/PIV_27756.pdf',
    joint: 'https://contasconnosco.cofidis.pt/impostos/escaloes-irs',
    mun: 'https://www.portaldasfinancas.gov.pt/pt/consultarTaxasIRSMunicipiosForm.action',
    munCaop: 'https://ogcapi.dgterritorio.gov.pt/collections/municipios',
    mad: 'https://www.madeira.gov.pt/Portals/25/Documentos/Legislacao/Decreto%20Legislativo%20Regional%20n.%C2%BA%208_2025_M%2C%20de%2030%20de%20dezembro.pdf',
    acor: 'https://www.occ.pt/sites/default/files/public/2025-12/OE202631dez_v2.pdf',
    tsu: 'https://www.santander.pt/salto/taxa-social-unica',
    fgct: 'https://simula.pt/simuladores/simulador_custo_de_funcionario',
    rmmg: 'https://www.sabado.pt/dinheiro/detalhe/subida-do-salario-minimo-para-920-euros-em-2026-publicada-em-diario-da-republica',
    ias: 'https://apcmc.pt/legislacao/ias-para-2026-fixado-em-e-53713/',
    abono: 'https://www.doutorfinancas.pt/vida-e-familia/aumento-abono-de-familia-2026/',
    abonoSs: 'https://www.seg-social.pt/ptss/pssd/documento/cmc1z745z00j4kl2yl81nyy2v',
    ine: 'https://portugal.gov.pt/gc25/comunicacao/noticias/salarios-reais-cresceram-32-em-2025',
    median: 'https://simula.pt/simuladores/simulador_salario_medio',
    politicalPay: DOC_POL,
    politicalCuts: 'https://eco.sapo.pt/2025/01/22/salario-de-marcelo-sobe-650-euros-e-montenegro-ganha-mais-500-com-fim-dos-cortes-ordenados-ainda-sao-baixos-dizem-peritos/',
  };

  const progressive = (x, br) => {
    let tot = 0, lo = 0;
    for (const [hi, r] of br) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };
  const bracketRows = (x, br) => {
    const rows = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) rows.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return rows;
  };

  // Mínimo de existência (art. 70): taken off taxable income, shrinking 2.60 € per gross euro, then 1.35 €.
  function mexAbat(rb, ds) {
    const m = P.mex, t1 = P.brackets[0][1], lim1 = P.brackets[0][0], X = P.dgf.std / t1;
    const L = m.ref + (lim1 - X) / m.k;
    const a = rb <= m.ref ? m.ref - (ds + X) : rb <= L ? m.ref - m.b * (rb - m.ref) - (ds + X) : L - lim1 - m.c * (rb - L) - ds;
    return Math.max(0, Math.min(a, rb - ds));
  }

  function employeeSide(G, jov = 'none') {
    const ee = P.ss.ee * G;
    const exempt = Math.min(P.jovem[jov] * G, P.jovem.cap);
    const taxedGross = G - exempt;
    const de = Math.min(taxedGross, Math.max(P.de, ee));
    const abat = G > 0 ? mexAbat(G, de) : 0;
    const base = Math.max(0, taxedGross - de), tot = Math.max(0, G - de);
    return { G, m: 0, ee, exempt, taxedGross, de, abat, base, tot, rc: Math.max(0, base - abat), net0: G - ee };
  }

  const depAmount = (kids, u3) => kids * P.dep.base + u3 * P.dep.under3 + Math.min(u3, Math.max(0, kids - 1)) * P.dep.young;

  // One tax return: a single earner, one spouse filing separately, or a couple filing jointly (quotient 2).
  function returnTax(units, { joint, depShare, singleParent, region, local, kids, u3 }) {
    const q = joint ? 2 : 1;
    const excluded = units.reduce((tot, u) => tot + u.G, 0) > P.mex.excl * units.length;
    const rc = units.reduce((tot, u) => tot + Math.max(0, u.base - (excluded ? 0 : u.abat)), 0);
    const rt = units.reduce((tot, u) => tot + Math.max(0, u.tot - (excluded ? 0 : u.abat)), 0);
    const br = bracketsFor(region);
    // IRS Jovem: exempt pay still sets the rate (art. 22 n.º 4).
    const coleta = rt > 0 ? q * progressive(rt / q, br) * rc / rt : 0;
    const solid = q * progressive(rc / q, P.solid);
    const deps = depShare * depAmount(kids, u3);
    const dgf = (singleParent ? P.dgf.parent : P.dgf.std) * units.length;
    const ded = Math.min(coleta, deps + dgf);
    const liq = coleta - ded;
    return { q, rc, rt, coleta, solid, deps, dgf, ded, liq, excluded, state: (1 - P.munMax) * liq + solid, mun: local / 100 * liq, paid: (1 - P.munMax + local / 100) * liq + solid };
  }

  // The couple picks whichever is cheaper, joint or separate; your share = the household with your pay − without it.
  function householdTax(u, s, env) {
    const kids = s.children, u3 = Math.min(s.under3 || 0, kids), base = { region: s.region, local: s.local, kids, u3 };
    if (s.household !== 'joint') {
      const r = returnTax([u], { ...base, joint: false, depShare: 1, singleParent: kids > 0 });
      return { mode: 'single', ...r };
    }
    const pu = env.partner;
    const joint = returnTax([u, pu], { ...base, joint: true, depShare: 1, singleParent: false });
    const a = returnTax([u], { ...base, joint: false, depShare: .5, singleParent: false });
    const b = returnTax([pu], { ...base, joint: false, depShare: .5, singleParent: false });
    const sep = { state: a.state + b.state, mun: a.mun + b.mun, paid: a.paid + b.paid, liq: a.liq + b.liq, solid: a.solid + b.solid, a, b };
    return joint.paid <= sep.paid ? { mode: 'joint', ...joint, joint, sep } : { mode: 'sep', ...sep, joint, sep };
  }

  // Monthly abono de família from the household's gross pay, per child; the youngest are the under-3s.
  function abono(gross, kids, u3, single) {
    if (!kids) return { m: 0, esc: null, ref: 0 };
    const ref = gross / (kids + 1), A = P.abono;
    const esc = A.lim.findIndex(l => ref <= l);
    if (esc < 0) return { m: 0, esc: 4, ref };
    const m = (u3 * A.u3[esc] + (kids - u3) * A.older[esc]) * (single ? 1 + A.single : 1);
    return { m, esc, ref };
  }

  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', zero = employeeSide(0);
    const hh = householdTax(u, s, env);
    const without = couple ? householdTax(zero, s, env) : null;
    const state = hh.state - (without ? without.state : 0), mun = hh.mun - (without ? without.mun : 0);
    let ab = 0, abDet = null;
    if (s.pa && s.regime !== 'minister') {
      const kids = s.children, u3 = Math.min(s.under3 || 0, kids), pg = couple ? env.partner.G : 0;
      const w = abono(u.G + pg, kids, u3, !couple), wo = abono(pg, kids, u3, !couple);
      ab = 12 * (w.m - (couple ? wo.m : 0));
      abDet = { ...w, without: couple ? wo : null };
    }
    return { hh, without, state, mun, ab, abDet };
  }

  // Ministers and MPs: a share of the President's base × 14 plus a representation allowance × 12, taxed as pay;
  // social security only on the base.
  function computeOffice(G, s, env, role) {
    const [, rep] = ROLE[role];
    const payBase = G / (14 + 12 * rep) * 14;
    const ee = P.ss.ee * payBase, er = P.ss.er * payBase;
    const de = Math.min(G, Math.max(P.de, ee)), taxable = Math.max(0, G - de);
    const u = { ...employeeSide(G), ee, de, abat: 0, base: taxable, tot: taxable, rc: taxable, role, payBase, rep: G - payBase };
    const tax = incomeTaxes(u, { ...s, regime: 'minister' }, env);
    const net = G - ee - tax.state - tax.mun;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + er, net, u, tax, vatShare, regime: 'minister', parts: { er, ee, ir: tax.state, com: tax.mun, ab: 0, vat } };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeOffice(G, s, env, s.minRole);
    const u = employeeSide(G, s.size);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const er = P.ss.er * G;
    const net = G - u.ee - tax.state - tax.mun + tax.ab;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + er, net, u, tax, vatShare, parts: { er, ee: u.ee, ir: tax.state, com: tax.mun, ab: -tax.ab, vat } };
  }

  const COMP_KEYS = ['er', 'ee', 'ir', 'com', 'ab', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', com: 'var(--k-com)', ab: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'com', 'ab', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'com', 'ab'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'com', 'ab'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const brTable = (amount, br) => bracketRows(amount, br).map(b => `<tr><td>${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, b.r * 1000 % 10 ? 2 : 1)}</td><td>${eur(b.amt)}</td></tr>`).join('');
    const returnRows = (h, label) => `
      <tr class="t"><td>${label}</td><td></td></tr>
      <tr><td>${t('tip.irRc', num(h.q))}</td><td>${eur(h.rc)}</td></tr>
      ${brTable(h.rt / h.q, bracketsFor(s.region))}
      <tr><td>${t('tip.irColeta')}${h.rt > h.rc + 1 ? ' ' + t('tip.irJovemRate') : ''}</td><td>${eur(h.coleta)}</td></tr>
      ${h.deps > 0 ? `<tr><td>− ${t('tip.irDeps')}</td><td>−${eur(Math.min(h.deps, h.coleta))}</td></tr>` : ''}
      <tr><td>− ${t('tip.irDgf')}</td><td>−${eur(h.ded - Math.min(h.deps, h.coleta))}</td></tr>
      <tr><td>${t('tip.irLiq')}</td><td>${eur(h.liq)}</td></tr>
      ${h.solid > 0 ? `<tr><td>+ ${t('tip.irSolid')}</td><td>${eur(h.solid)}</td></tr>` : ''}`;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${r ? `<table>
        <tr><td>${t('tip.minBase')}</td><td>${eur(r.u.payBase)}</td></tr>
        <tr><td>${t('tip.minRep')}</td><td>${eur(r.u.rep)}</td></tr>
        <tr class="t"><td>${t('total')}</td><td>${eur(r.G)}</td></tr></table>` : ''}${sources('politicalPay', 'politicalCuts')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr')}</p>${r ? `<p><b>${eur(r.parts.er)}</b>${t('aYear')}</p>` : ''}${sources('tsu')}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe')}</p>${r ? `<p><b>${eur(r.parts.ee)}</b>${t('aYear')}</p>` : ''}${sources('tsu')}`,
      ab: () => `<h4>${t('comp.ab')}</h4><p>${t('tip.minAb')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('politicalPay', 'politicalCuts')}`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.f14')}</p>`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('joint')}`,
      paToggle: () => `<h4>${t('comp.ab')}</h4><p>${t('tip.paToggle')}</p>${sources('abono', 'abonoSs')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('mad', 'acor')}`,
      munRule: () => `<h4>${t('comp.com')}</h4><p>${t('tip.mun')}</p>${sources('mun')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.jovem', eur(P.jovem.cap))}</p>${sources('jovem', 'rates2026')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<p>23,75% × ${eur(r.G)} = <b>${eur(r.parts.er)}</b></p>` : ''}<p class="m">${t('tip.erM')}</p>${sources('tsu', 'fgct')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<p>11% × ${eur(r.G)} = <b>${eur(r.parts.ee)}</b></p>` : ''}${sources('tsu')}`,
      jovem: r => `<h4>${t('bd.jovem')}</h4><p>${t('tip.jovem', eur(P.jovem.cap))}</p>${r ? `<p>${pct(P.jovem[s.size], 0)} × ${eur(r.G)}${r.u.exempt >= P.jovem.cap - .5 ? ' (' + t('tip.capped') + ')' : ''} = <b>${eur(r.u.exempt)}</b></p>` : ''}${sources('jovem')}`,
      de: r => `<h4>${t('bd.de')}</h4><p>${t('tip.de', eur(P.de))}</p>${r ? `<p><b>${eur(r.u.de)}</b></p>` : ''}${sources('de')}`,
      mex: r => `<h4>${t('bd.mex')}</h4><p>${t('tip.mex', eur(P.mex.ref), eur(P.mex.excl))}</p>${r ? `<p><b>${eur(r.u.abat)}</b>${r.tax.hh.excluded ? ' · ' + t('tip.mexExcl') : ''}</p>` : ''}${sources('mex', 'mexSim')}`,
      rc: r => `<h4>${t('bd.rc')}</h4><p>${t('tip.rc', r ? ` = <b>${eur(r.u.rc)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p><p class="m">${t('tip.irM')}</p>${sources('cut', 'rates2026')}`;
        const h = r.tax.hh;
        let body;
        if (h.mode === 'single') body = returnRows(h, t('tip.irReturn'));
        else if (h.mode === 'joint') body = returnRows(h, t('tip.irJoint', eur(h.sep.paid)));
        else body = returnRows(h.a, t('tip.irSepYou', eur(h.joint.paid))) + returnRows(h.b, t('tip.irSepPartner'));
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>${body}
          <tr class="t"><td>${t('tip.irState')}</td><td>${eur(h.state)}</td></tr>
          ${r.tax.without ? `<tr><td>− ${t('tip.irWithout')}</td><td>−${eur(r.tax.without.state)}</td></tr><tr class="t"><td>${t('tip.irYours')}</td><td>${eur(r.parts.ir)}</td></tr>` : ''}
          </table>${sources('cut', 'rates2026', 'dep', 'joint')}`;
      },
      com: r => `<h4>${t('comp.com')}</h4><p>${t('tip.mun')}</p>
        ${r ? `<p>${t('tip.munCalc', num(s.local, 2) + '%', eur(r.tax.hh.liq), eur(r.parts.com), num(5 - s.local, 2) + '%')}</p>` : ''}
        <p class="m">${t('tip.munM')}</p>${sources('mun', 'munCaop')}`,
      ab: r => {
        const d = r && r.tax.abDet;
        return `<h4>${t('comp.ab')}</h4><p>${t('tip.ab')}</p>${d && s.children ? `<table>
          <tr><td>${t('tip.abRef')}</td><td>${eur(d.ref)}</td></tr>
          <tr><td>${t('tip.abEsc')}</td><td>${d.esc != null && d.esc < 4 ? d.esc + 1 : '5'}</td></tr>
          <tr class="t"><td>${t('tip.abMonth')}</td><td>${eur2(d.m)}</td></tr>
          ${d.without ? `<tr><td>− ${t('tip.abWithout')}</td><td>−${eur2(d.without.m)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.abYear')}</td><td>${eur(-r.parts.ab)}</td></tr></table>` : ''}
          <p class="m">${t('tip.abM')}</p>${sources('abono', 'abonoSs')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const s = x.s, p = r.parts, u = r.u, c = x.commune(), office = r.regime === 'minister';
    const L = [
      { op: '', k: 'gross', label: t(office ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t(office ? 'bd.minEr' : 'comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t(office ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(office ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t(office ? 'bd.minEe' : 'comp.ee'), v: p.ee, tax: p.ee },
    ];
    if (u.exempt > 0) L.push({ op: '−', k: 'jovem', label: t('bd.jovem'), v: u.exempt, cls: 'sub' });
    L.push({ op: '−', k: 'de', label: t('bd.de'), v: u.de, cls: 'sub' });
    if (u.abat > 0 && !r.tax.hh.excluded) L.push({ op: '−', k: 'mex', label: t('bd.mex'), v: u.abat, cls: 'sub' });
    L.push(
      { op: '=', k: 'rc', label: t('bd.rc'), v: r.tax.hh.excluded ? u.base : u.rc, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '−', k: 'com', label: `${t('comp.com')} (${num(s.local, 2)}%${c ? ', ' + c.name : ''})`, v: p.com, tax: p.com },
    );
    if (Math.abs(p.ab) > .5) L.push({ op: p.ab < 0 ? '+' : '−', k: 'ab', label: t('comp.ab'), v: Math.abs(p.ab), tax: p.ab });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // From the minimum wage to where the mínimo de existência runs out.
  function trap(x) {
    const s = x.s;
    const end = x.firstMonthly(m => m * s.factor > P.mex.ref && employeeSide(m * s.factor, s.size).abat <= 0, 0, 5000) || P.mex.ref / s.factor;
    const band = [P.rmmg * 14 / s.factor, end];
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), s.pa && s.children > 0] };
  }

  function top(x) {
    const s = x.s, couple = s.household === 'joint', pu = x.env().partner, q = couple ? 2 : 1;
    const rcOf = m => (employeeSide(m * s.factor, s.size).rc + (couple ? pu.rc : 0)) / q;
    const sol = x.firstMonthly(m => rcOf(m) > P.solid[0][0]);
    const at = x.firstMonthly(m => rcOf(m) > LIMITS[7]);
    if (!sol && !at) return null;
    return { at: sol || at, text: [sol ? x.fmtM(sol, 50) + x.perUnit() : null, at ? x.fmtM(at, 50) + x.perUnit() : null, eur(P.solid[0][0]), eur(LIMITS[7]), couple] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    regions: REGIONS, sizes: SIZES, minRoles: MIN_ROLES, factors: [14, 12], factorDigits: 0, vatStandard: r => ({ mad: 22, acor: 16 })[r] ?? 23,
    features: { under3: true, pa: true },
    state: { salary: 1500, factor: 14, minRole: 'minister', under3: 0, pa: true, commune: 'Lisboa|Lisboa', region: 'cont', local: 0, vatRate: 23, size: 'none' },
    urlFields: {
      months: ['factor', 'num', [14, 12]], under3: ['under3', 'num'], abono: ['pa', 'bool'],
      commune: ['commune', 'str'], region: ['region', 'str', REGIONS], mun: ['local', 'num'],
      jovem: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'munLabel', tip: 'munRule', digits: 2, step: .05, range: () => [0, 5], notDue: () => false, hideInMinister: false },
    parseCommunes: list => list.map(([name, rate, sub, region]) => ({ name, rate, sub, region, id: name + '|' + sub })),
    communeLabel: c => `${c.name} (${c.sub})`,
    communeTag: c => `${num(c.rate, 2)}%`,
    communeHint: c => `${t('region.' + c.region)} · ${t('munShort')} ${num(c.rate, 2)}%`,
    minSalary: role => Math.round(yearly(role)),
    env: s => ({ partner: employeeSide(Math.max(0, s.partnerGross || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: computeOffice(p.lo, plain, env, p.regime).net, allow: 0 }),
    segLabels: { ab: 'abLost' }, recvLabels: { ab: 'abReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'politicalPay',
    refKeys: ['ss', 'taxable', 'mex', 'deductions', 'mun', 'regions', 'abono', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
