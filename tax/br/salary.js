// Brazilian salary rules for income year 2026 (CLT employee). Loaded by ../index.html?country=br.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const SIZES = ['general', 'simples'];
  const MIN_ROLES = ['min', 'pres'];

  const P = {
    // INSS employee, by slice of the monthly pay (Portaria MPS/MF 13/2026).
    inss: [[1621, .075], [2902.84, .09], [4354.27, .12], [8475.55, .14]],
    // IRPF, Receita Federal tables from January 2026.
    monthly: [[2428.80, 0], [2826.65, .075], [3751.05, .15], [4664.68, .225], [INF, .275]],
    brackets: [[29145.60, 0], [33919.80, .075], [45012.60, .15], [55976.16, .225], [INF, .275]],
    dep: { m: 189.59, y: 2275.08 },
    simp: { m: 607.20, rate: .20, y: 17640 },
    // Lei 15.270/2025: reductions that zero the tax up to R$ 5,000 a month (R$ 60,000 a year), phasing out to R$ 7,350 (R$ 88,200).
    redM: { full: 5000, end: 7350, a: 978.62, b: .133145 },
    redY: { full: 60000, end: 88200, a: 8429.73, b: .095575 },
    er: { inss: .20, rat: .02, third: .058, fgts: .08 },
    // Salário-família, per child under 14, for monthly pay up to the limit.
    sf: { quota: 67.54, limit: 1980.38 },
  };
  const MIN_WAGE = 1621;

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'avg', m: 3621, year: 2026, color: '--w-avg' },
  ];

  // Federal pay since February 2025: deputies, senators, President, Vice-President and ministers alike, 13 times a year.
  const FED = 46366.19;
  const GOV = { pres: FED * 13, min: FED * 13 };
  const DOC_DEP = 'https://www.camara.leg.br/deputados/160541';
  const DOC_DL = 'https://www12.senado.leg.br/noticias/materias/2022/12/21/aprovado-aumento-na-remuneracao-dos-ministros-do-stf-de-membros-da-dpu-e-da-pgr';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '⭐', lo: GOV.pres, hi: GOV.pres, url: DOC_DL },
    { kind: 'stat', key: 'min', icon: '💼', lo: GOV.min, hi: GOV.min, url: DOC_DL },
    { kind: 'stat', key: 'mp', icon: '🏛️', lo: FED * 13, hi: FED * 13, url: DOC_DEP },
  ];

  const SRC = {
    irpf: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/tabelas/2026',
    lei: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15270.htm',
    inss: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/inscricao-e-contribuicao/tabela-de-contribuicao-mensal',
    sf: 'https://www.gov.br/inss/pt-br/direitos-e-deveres/salario-familia/valor-limite-para-direito-ao-salario-familia',
    pwc: 'https://taxsummaries.pwc.com/brazil/individual/other-taxes',
    l8212: 'https://www.planalto.gov.br/ccivil_03/leis/l8212cons.htm',
    fgts: 'https://www.planalto.gov.br/ccivil_03/leis/l8036consol.htm',
    simples: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm',
    ibge: 'https://apisidra.ibge.gov.br/values/t/5442/n1/all/p/last%201',
    reform: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214.htm',
    depPay: DOC_DEP,
    govPay: DOC_DL,
  };

  const slices = (x, br) => { let tax = 0, lo = 0; for (const [hi, r] of br) { if (x > lo) tax += (Math.min(x, hi) - lo) * r; lo = hi; } return tax; };
  const inss = m => slices(Math.max(0, m), P.inss);
  const reduction = (income, R, tax) => income <= R.full ? tax : Math.min(tax, Math.max(0, R.a - R.b * income));

  // One person's year: 12 months (one with the vacation third), then the 13th taxed alone at source.
  function person(G, factor, deps = 0) {
    const m = G > 0 ? G / factor : 0;
    const thirteenth = factor >= 13 ? m : 0;
    const vac = Math.max(0, G - 12 * m - thirteenth);
    const R = 12 * m + vac;
    const inssY = 11 * inss(m) + inss(m + vac);
    const inss13 = inss(thirteenth);
    const legal = inssY + deps * P.dep.y;
    const simp = Math.min(P.simp.rate * R, P.simp.y);
    const useSimp = simp > legal;
    const base = Math.max(0, R - Math.max(legal, simp));
    const gross = slices(base, P.brackets);
    const redY = reduction(R, P.redY, gross);
    const irY = gross - redY;
    // The 13th: monthly table, its own INSS, the monthly simplified discount when it beats the legal deductions.
    const base13 = Math.max(0, thirteenth - Math.max(inss13 + deps * P.dep.m, thirteenth > 0 ? P.simp.m : 0));
    const gross13 = slices(base13, P.monthly);
    const red13 = reduction(thirteenth, P.redM, gross13);
    const ir13 = gross13 - red13;
    return { G, m, thirteenth, vac, R, inssY, inss13, inss: inssY + inss13, legal, simp, useSimp, base, gross, redY, irY, base13, gross13, red13, ir13, ir: irY + ir13, deps };
  }

  // Children are dependents of one parent: the couple picks the split that costs least.
  function household(me, partnerG, factor, kids) {
    let best = null;
    for (let k = 0; k <= kids; k++) {
      const a = person(me, factor, k), b = partnerG > 0 ? person(partnerG, factor, kids - k) : null;
      const total = a.ir + (b ? b.ir : 0);
      if (!best || total < best.total - .005) best = { total, a, b, k };
      if (!b) break;
    }
    return best;
  }

  function compute(G, s, env) {
    const minister = s.regime === 'minister';
    const joint = s.household === 'joint' && env.partnerG > 0;
    const kids = s.children || 0;
    let u, ir, irWo = 0;
    if (joint) {
      const h = household(G, env.partnerG, s.factor, kids);
      u = h.a;
      irWo = person(env.partnerG, s.factor, kids).ir;
      ir = h.total - irWo;
    } else {
      u = person(G, s.factor, kids);
      ir = u.ir;
    }
    const sf = !minister && u.m > 0 && u.m <= P.sf.limit ? kids * P.sf.quota * 12 : 0;
    const simples = s.size === 'simples';
    const erRate = minister ? P.er.inss : simples ? 0 : P.er.inss + P.er.rat + P.er.third;
    const er = erRate * G;
    const fgts = minister ? 0 : P.er.fgts * G;
    const net = G - u.inss - ir + sf;
    const vat = s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;
    return { G, cost: G + er + fgts, net, u, ir, irWo, joint, sf, er, erRate, fgts, regime: minister ? 'minister' : undefined,
      parts: { er, ee: u.inss, ir, fam: -sf, fgts, vat } };
  }

  // FGTS goes into the employee's own account, so it's shown but never counted as tax.
  const COMP_KEYS = ['er', 'ee', 'ir', 'fam', 'fgts', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', ir: 'var(--k-ir)', fam: 'var(--k-pa)', fgts: 'var(--k-vm)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'ir', 'fam', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'ir', 'fam'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ir', 'fam'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules', eur(FED))}</p>${sources('depPay', 'govPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      'factor13.33': () => `<h4>${t('tip.monthsPaid', num(13.33, 2))}</h4><p>${t('tip.f1333')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('irpf')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('simples', 'l8212')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), num(s.factor, 2), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.er)}${row(t('comp.fgts'), r.fgts)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r && r.er ? `<table>${tot(`${pct(r.erRate, 1)} × ${eur(r.G)}`, r.er)}</table>` : ''}${sources('l8212', 'pwc')}`,
      fgts: r => `<h4>${t('comp.fgts')}</h4><p>${t('tip.fgts')}</p>${r && r.fgts ? `<table>${tot(`8% × ${eur(r.G)}`, r.fgts)}</table>` : ''}${sources('fgts')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>
        ${row(t('tip.inssMonths'), r.u.inssY)}${r.u.inss13 ? row(t('tip.inss13'), r.u.inss13) : ''}${tot(t('comp.ee'), r.u.inss)}</table>` : ''}${sources('inss')}`,
      deduct: r => `<h4>${t('bd.deduct')}</h4><p>${t('tip.deduct')}</p>${r ? `<table>
        ${row(t('tip.legal', r.u.deps), r.u.legal)}${row(t('tip.simp'), r.u.simp)}</table>` : ''}${sources('irpf')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.base)}</b>` : '')}</p>`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>
        ${row(t('tip.irTable'), r.u.gross)}${r.u.redY ? row('− ' + t('tip.red'), -r.u.redY) : ''}${row(t('tip.irYear'), r.u.irY)}
        ${r.u.thirteenth ? row(t('tip.ir13', eur(r.u.base13)), r.u.ir13) : ''}
        ${r.joint && Math.abs(r.ir - r.u.ir) > .5 ? row(t('tip.irJoint'), r.ir - r.u.ir) : ''}
        ${tot(t('comp.ir'), r.ir)}</table>` : ''}${sources('irpf', 'lei')}`,
      fam: r => `<h4>${t('comp.fam')}</h4><p>${t('tip.fam', eur(P.sf.quota), eur(P.sf.limit))}</p>${r && r.sf ? `<table>${tot(`${s.children} × ${eur(P.sf.quota)} × 12`, r.sf)}</table>` : ''}${sources('sf')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('reform')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const p = r.parts;
    const L = [{ op: '', k: 'gross', label: t('bd.gross'), v: r.G }];
    if (p.er > 0) L.push({ op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    if (p.fgts > 0) L.push({ op: '+', k: 'fgts', label: t('comp.fgts'), v: p.fgts, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
      { op: '', k: 'deduct', label: r.u.useSimp ? t('bd.simp') : t('bd.legal'), v: Math.max(r.u.legal, r.u.simp), cls: 'sub' },
      { op: '', k: 'taxable', label: t('bd.taxable'), v: r.u.base, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
    );
    if (r.sf > 0) L.push({ op: '+', k: 'fam', label: t('comp.fam'), v: r.sf, tax: p.fam });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // No income tax up to about R$ 5,000 a month since 2026; salário-família stops dead above its limit.
  function trap(x) {
    const s = x.s, env = x.env();
    const minM = MIN_WAGE;
    const end = x.firstMonthly(m => compute(m * s.factor, s, env).ir > 1, 0, 1e6);
    const sf = s.children > 0 ? x.fmtM(P.sf.limit, 1) : null;
    if (!end || end <= minM + 1) return { band: [minM, minM], text: [x.fmtM(minM, 1), null, sf] };
    return { band: [minM, end], text: [x.fmtM(minM, 1), x.fmtM(end, 10) + x.perUnit(), sf] };
  }

  // The 2026 reduction phases out up to R$ 88,200 a year: a steep marginal rate until then.
  function top(x) {
    const s = x.s, k = s.factor >= 13 ? s.factor - 1 : s.factor;
    const at = P.redY.end / k;
    return { at, text: [x.fmtM(at, 1) + x.perUnit(), x.fmtM(P.inss[P.inss.length - 1][0], 1)] };
  }

  return {
    GAPS: ['noCheck', 'rat', 'third', 'simples', 'simp13', 'consumption', 'pol', 'polCost', 'median', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'BRL', nextStep: 500,
    regions: [], sizes: SIZES, minRoles: MIN_ROLES, factors: [12, 13, 13.33], factorDigits: 2, vatStandard: 28,
    features: {},
    communes: false,
    local: null,
    state: { salary: 4000, factor: 13.33, minRole: 'pres', commune: '', region: '', local: 0, vatRate: 28, size: 'general' },
    urlFields: { months: ['factor', 'num', [12, 13, 13.33]], employer: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: s => ({ partnerG: Math.max(0, Number(s.partnerGross) || 0) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    segLabels: { fam: 'famLost' }, recvLabels: { fam: 'famReceived' },
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + (p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'depPay',
    refKeys: ['er', 'ee', 'ir', 'red', 'fam', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
