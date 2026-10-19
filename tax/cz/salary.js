// Czech salary rules for income year 2026. Loaded by ../index.html?country=cz.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const MIN_ROLES = ['mp', 'minister', 'pm'];

  const P = {
    avg: 48967,
    maxBase: 2350416,
    top: 1762812,
    low: .15, high: .23,
    // Reference table: rates on gross pay.
    brackets: [[1762812, .15], [INF, .23]],
    payer: 30840,
    spouse: { amount: 24840, limit: 68000 },
    kids: [15204, 22320, 27840],
    bonusMin: 134400,
    ee: { soc: .071, hlth: .045 },
    er: { soc: .248, hlth: .09 },
  };
  const MIN_WAGE = 22400;

  // Monthly gross: minimum wage 2026, ČSÚ median (Q2 2025, the latest published) and mean (Q2 2026).
  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 41115, year: 2025, color: '--w-med' },
    { key: 'avg', m: 51966, year: 2026, color: '--w-avg' },
  ];

  // Monthly salary and tax-free expense allowance from 1 January 2026. Only the highest salary is paid.
  const ROLE = {
    pm: { m: 308700, allow: 39400 },
    minister: { m: 219300, allow: 32000 },
    mp: { m: 115000, allow: 17100 },
  };
  const DOC_PAY = 'https://www.e15.cz/platy-politiku-2026';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: ROLE.pm.m * 12, hi: ROLE.pm.m * 12, url: DOC_PAY },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: ROLE.minister.m * 12, hi: ROLE.minister.m * 12, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: ROLE.mp.m * 12, hi: ROLE.mp.m * 12, url: DOC_PAY },
    { kind: 'gov', name: 'Petr Pavel', role: 'president', lo: 383200 * 12, hi: 383200 * 12, url: DOC_PAY },
    { kind: 'gov', name: 'Aleš Michl', role: 'cnb', lo: 6850000, hi: 782463 * 12, url: 'https://www.seznamzpravy.cz/clanek/ekonomika-finance-guverner-cnb-ales-michl-bere-vic-nez-sef-fedu-302957' },
    { kind: 'corp', name: 'Daniel Beneš', role: 'cez', lo: 53000000, hi: 53000000, url: 'https://www.seznamzpravy.cz/clanek/ekonomika-finance-reditele-cez-si-mezirocne-pohorsili-vloni-vydelali-191-milionu-305140' },
  ];

  const SRC = {
    limits: 'https://www.forvismazars.com/cz/cs/prehledy/newslettery/newslettery-ze-mzdove-oblasti/payroll-newslettery-2026/payroll-newsletter-archiv-2026/zmeny-ve-mzdovych-limitech-a-sazbach-od-roku-2026',
    cssz: 'https://www.cssz.gov.cz/web/cz/-/prehled-nejdulezitejsich-udaju-pro-socialni-zabezpeceni-v-roce-2026',
    credits: 'https://portal.pohoda.cz/dane-ucetnictvi-mzdy/mzdy-a-prace/danove-zvyhodneni-na-deti-a-slevy-na-dani-v-roce-2026/',
    minWage: 'https://mpsv.gov.cz/minimalni-mzda',
    wages: 'https://csu.gov.cz/rychle-informace/prumerne-mzdy-2-ctvrtleti-2026',
    median: 'https://csu.gov.cz/rychle-informace/prumerne-mzdy-2-ctvrtleti-2025',
    vat: 'https://www.financnisprava.gov.cz/cs/dane/dane/dan-z-pridane-hodnoty',
    polPay: DOC_PAY,
  };

  const employee = G => {
    const soc = P.ee.soc * Math.min(G, P.maxBase), hlth = P.ee.hlth * G;
    return { G, soc, hlth, ins: soc + hlth, own: G - soc - hlth };
  };
  const employerSide = G => {
    const soc = P.er.soc * Math.min(G, P.maxBase), hlth = P.er.hlth * G;
    return { soc, hlth, er: soc + hlth };
  };

  // Tax before credits on gross pay (no super-gross since 2021).
  const rawTax = G => P.low * Math.min(G, P.top) + P.high * Math.max(0, G - P.top);

  // One taxpayer: credits, then the child credit, which becomes a bonus past zero tax if they earned 6x the minimum wage.
  function personTax(G, spouseCredit, kidCredit) {
    const raw = rawTax(G);
    const credits = P.payer + (spouseCredit ? P.spouse.amount : 0);
    const pre = Math.max(0, raw - credits);
    const canBonus = G >= P.bonusMin;
    const kidsUsed = canBonus ? kidCredit : Math.min(kidCredit, pre);
    return { G, raw, credits, spouseCredit, pre, kidCredit, kidsUsed, canBonus, tax: pre - kidsUsed };
  }

  const kidAmounts = n => Array.from({ length: n }, (_, i) => P.kids[Math.min(i, 2)]);

  // A couple can split the children between them; the household keeps the split with the lowest total.
  function householdTax(mine, partner, kids, under3) {
    const amounts = kidAmounts(kids);
    const total = amounts.reduce((a, b) => a + b, 0);
    if (!partner) {
      const me = personTax(mine.G, false, total);
      return { me, them: null, total: me.tax, pre: me.pre, kidsMine: total };
    }
    const spMe = under3 > 0 && partner.own <= P.spouse.limit;
    const spThem = under3 > 0 && mine.own <= P.spouse.limit;
    const n3 = Math.max(0, kids - 2);
    let best = null;
    for (const a of kids >= 1 ? [0, 1] : [0]) for (const b of kids >= 2 ? [0, 1] : [0]) for (let c = 0; c <= n3; c++) {
      const kidsMine = a * P.kids[0] + b * P.kids[1] + c * P.kids[2];
      const me = personTax(mine.G, spMe, kidsMine), them = personTax(partner.G, spThem, total - kidsMine);
      const sum = me.tax + them.tax;
      if (!best || sum < best.total - 1e-9) best = { me, them, total: sum, pre: me.pre + them.pre, kidsMine };
    }
    return best;
  }

  const none = { G: 0, soc: 0, hlth: 0, ins: 0, own: 0 };

  // Your share = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', pu = couple ? env.partner : null;
    const hh = householdTax(u, pu, s.children, s.under3);
    const wo = couple ? householdTax(none, pu, s.children, s.under3) : null;
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

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const capped = G => Math.min(G, P.maxBase);
    const irTable = (p, label) => `${label ? `<tr><td colspan="2"><b>${label}</b></td></tr>` : ''}
      ${row(`${pct(P.low, 0)} × ${eur(Math.min(p.G, P.top))}`, P.low * Math.min(p.G, P.top))}
      ${p.G > P.top ? row(`${pct(P.high, 0)} × ${eur(p.G - P.top)}`, P.high * (p.G - P.top)) : ''}
      ${row('− ' + t('bd.payer'), -Math.min(p.raw, P.payer))}
      ${p.spouseCredit ? row('− ' + t('bd.spouse'), -Math.min(Math.max(0, p.raw - P.payer), P.spouse.amount)) : ''}
      ${tot(t('tip.irPre'), p.pre)}`;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross', eur(ROLE[s.minRole].allow * 12))}</p>${sources('polPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('polPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.spouse.amount), eur(P.spouse.limit))}</p>${sources('credits')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er', eur(P.maxBase))}</p>${r ? `<table>
          ${row(`${t('bd.erSoc')} ${pct(P.er.soc, 1)} × ${eur(capped(r.G))}`, r.emp.soc)}
          ${row(`${t('bd.erHlth')} ${pct(P.er.hlth, 0)} × ${eur(r.G)}`, r.emp.hlth)}
          ${tot(`${t('total')} ${pct(r.parts.er / r.G, 2)}`, r.parts.er)}</table>` : ''}${sources('cssz', 'limits')}`,
      erSoc: r => `<h4>${t('bd.erSoc')}</h4><p>${t('tip.erSoc', eur(P.maxBase))}</p>${sources('cssz')}`,
      erHlth: r => `<h4>${t('bd.erHlth')}</h4><p>${t('tip.erHlth')}</p>${sources('limits')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.maxBase))}</p>${r ? `<table>
          ${row(`${t('bd.eeSoc')} ${pct(P.ee.soc, 1)} × ${eur(capped(r.G))}`, r.u.soc)}
          ${row(`${t('bd.eeHlth')} ${pct(P.ee.hlth, 1)} × ${eur(r.G)}`, r.u.hlth)}
          ${tot(t('youPay'), r.u.ins)}</table>` : ''}${sources('cssz', 'limits')}`,
      eeSoc: r => `<h4>${t('bd.eeSoc')}</h4><p>${t('tip.eeSoc', eur(P.maxBase))}</p>${sources('cssz')}`,
      eeHlth: r => `<h4>${t('bd.eeHlth')}</h4><p>${t('tip.eeHlth')}</p>${sources('limits')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable')}</p>`,
      payer: () => `<h4>${t('bd.payer')}</h4><p>${t('tip.payer', eur(P.payer))}</p>${sources('credits')}`,
      spouse: () => `<h4>${t('bd.spouse')}</h4><p>${t('tip.spouse', eur(P.spouse.amount), eur(P.spouse.limit))}</p>${sources('credits')}`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort', eur(P.top))}</p>${sources('limits', 'credits')}`;
        const h = r.tax.hh;
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM', eur(P.top))}</p><table>
          ${irTable(h.me, h.them ? t('tip.irYou') : '')}
          ${h.them ? irTable(h.them, t('tip.irPartner')) : ''}
          ${h.them ? `${tot(t('tip.irHousehold'), h.pre)}${row('− ' + t('tip.irWithout'), -r.tax.wo.pre)}${tot(t('tip.irYours'), r.parts.ir)}` : ''}
          </table>${sources('limits', 'credits')}`;
      },
      kids: r => {
        const h = r && r.tax.hh;
        const all = kidAmounts(s.children).reduce((a, b) => a + b, 0);
        return `<h4>${t('comp.kids')}</h4><p>${t('tip.kids', eur(P.kids[0]), eur(P.kids[1]), eur(P.kids[2]), eur(P.bonusMin))}</p>${h && s.children ? `<table>
          ${row(t('tip.kidsAll', s.children), all)}
          ${h.them ? row(t('tip.kidsMine'), h.kidsMine) : ''}
          ${row(t('tip.kidsUsedMe'), h.me.kidsUsed)}
          ${h.them ? row(t('tip.kidsUsedThem'), h.them.kidsUsed) : ''}
          ${h.them ? row('− ' + t('tip.kidsWithout'), -(r.tax.wo.pre - r.tax.wo.total)) : ''}
          ${tot(t('tip.irYours'), -r.parts.kids)}</table>
          ${h.me.kidCredit > h.me.kidsUsed + .5 ? `<p class="m">${t('tip.kidsLostNote', eur(P.bonusMin))}</p>` : ''}` : ''}${sources('credits')}`;
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
    const p = r.parts, min = r.regime === 'minister', me = r.tax.hh.me;
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'erSoc', label: t('bd.erSoc'), v: r.emp.soc, tax: r.emp.soc, cls: 'sub' },
      { op: '+', k: 'erHlth', label: t('bd.erHlth'), v: r.emp.hlth, tax: r.emp.hlth, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'eeSoc', label: t('bd.eeSoc'), v: r.u.soc, tax: r.u.soc },
      { op: '−', k: 'eeHlth', label: t('bd.eeHlth'), v: r.u.hlth, tax: r.u.hlth },
      { op: '', k: 'taxable', label: t('bd.taxable'), v: r.G, cls: 'sub' },
      { op: '', k: 'payer', label: t('bd.payer'), v: Math.min(me.raw, P.payer), cls: 'sub' },
    ];
    if (me.spouseCredit) L.push({ op: '', k: 'spouse', label: t('bd.spouse'), v: Math.min(Math.max(0, me.raw - P.payer), P.spouse.amount), cls: 'sub' });
    L.push({ op: p.ir < 0 ? '+' : '−', k: 'ir', label: t('comp.ir'), v: Math.abs(p.ir), tax: p.ir });
    if (Math.abs(p.kids) > .5) L.push({ op: p.kids < 0 ? '+' : '−', k: 'kids', label: t(p.kids < 0 ? 'kidsReceived' : 'kidsLost'), v: Math.abs(p.kids), tax: p.kids });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    if (min) L.push({ op: '+', k: 'allow', label: t('bd.allow'), v: ROLE[x.s.minRole].allow * 12, cls: 'sub' });
    return L;
  }

  // No benefit taper to show: low pay pays insurance from the first crown, income tax only once it beats the taxpayer credit.
  function trap(x) {
    const s = x.s, m = MIN_WAGE * 12 / s.factor;
    const zero = P.payer / P.low / s.factor;
    return { band: [m, m], text: [x.fmtM(m, 100), null, x.fmtM(zero, 100) + x.perUnit(), s.children > 0 ? x.fmtM(P.bonusMin / s.factor, 100) + x.perUnit() : null] };
  }

  // 23% above 36 average wages, then the social insurance cap at 48: the marginal rate drops back.
  function top(x) {
    const s = x.s;
    return { at: P.top / s.factor, text: [x.fmtM(P.top / s.factor, 100) + x.perUnit(), x.fmtM(P.maxBase / s.factor, 100) + x.perUnit()] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'CZK', nextStep: 2500,
    regions: [], sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 21,
    features: { under3: true },
    communes: false,
    local: null,
    state: { salary: 50000, factor: 12, minRole: 'minister', under3: 0, commune: '', region: '', local: 0, vatRate: 21, size: '' },
    urlFields: { under3: ['under3', 'num'], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => ROLE[role].m * 12,
    env: s => ({ partner: employee(Math.max(0, Number(s.partnerGross) || 0)) }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }, env).net, allow: ROLE[p.regime].allow * 12 }),
    segLabels: { kids: 'kidsLost' }, recvLabels: { kids: 'kidsReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.role,
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'polPay',
    refKeys: ['er', 'ee', 'ir', 'kids', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
