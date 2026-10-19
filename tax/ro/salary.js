// Romanian salary rules for income year 2026, at the rates in force since 1 July 2026. Loaded by ../index.html?country=ro.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const REGIONS = ['o26', 'u26'];
  const MIN_ROLES = ['mp', 'min', 'pm', 'pres'];

  const MIN_WAGE = 4325;
  const P = {
    cas: .25, cass: .10, cam: .0225, ir: .10,
    // Untaxed part of a minimum wage (OUG 89/2025): 200 lei since July, while gross stays at or under 4,600.
    untaxed: 200, untaxedCeil: 4600,
    // Deducere personală, % of the minimum wage by number of dependants (0..4+), 0.5 point less per 50 lei above it.
    ded: [.20, .25, .30, .35, .45], dedSpan: 2000, dedStep: 50, dedCut: .005,
    u26: .15, school: 100, depMax: .20,
    brackets: [[INF, .10]],
  };

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'avg', m: 9497, year: 2026, color: '--w-avg' },
  ];

  // Law 153/2017, annex IX: coefficient × 2,080 lei, frozen since 2019.
  const MONTHLY = { pres: 24960, pm: 23920, min: 21840, mp: 18720 };
  const GOV = Object.fromEntries(Object.entries(MONTHLY).map(([k, v]) => [k, v * 12]));
  const DOC_PAY = 'https://www.cotidianul.ro/politicienii-vor-incasa-si-cu-30-in-plus-pe-noua-lege-a-salarizarii-cum-arata-lefurile-demnitarilor-pe-formula-de-crestere-etapizata/';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '⭐', lo: GOV.pres, hi: GOV.pres, url: DOC_PAY },
    { kind: 'stat', key: 'pm', icon: '🏛️', lo: GOV.pm, hi: GOV.pm, url: 'https://www.capital.ro/ce-beneficii-pastreaza-bolojan-dupa-functia-de-premier-ce-venit-va-avea-pana-la-instalarea-unui-nou-guvern.html' },
    { kind: 'stat', key: 'min', icon: '💼', lo: GOV.min, hi: GOV.min, url: DOC_PAY },
    { kind: 'stat', key: 'mp', icon: '📎', lo: GOV.mp, hi: GOV.mp, url: 'https://folositor.ro/ghid/cat-castiga-un-parlamentar-in-romania-2026' },
  ];

  const SRC = {
    cf: 'https://static.anaf.ro/static/10/Anaf/legislatie/Cod_fiscal_norme_2023.htm',
    untaxed: 'https://www.contzilla.ro/noutati-in-salarizare-incepand-cu-1-iulie-2026/',
    untaxedEx: 'https://profit.ro/taxe-si-consultanta/vin-bani-mai-multi-pentru-unii-angajati-bani-in-plus-in-mana-dupa-cresterea-salariului-minim-din-vara-calcul-concret-cat-primeste-angajatul-cat-ia-statul-22286563',
    minWage: 'https://permisdeantreprenor.ro/salariul-minim-2026-4325-lei-1-iulie/',
    ins: 'https://www.cotidianul.ro/?p=1023198',
    vat: 'https://static.anaf.ro/static/10/Anaf/legislatie/Cod_fiscal_norme_2023.htm',
    govPay: DOC_PAY,
  };

  const dedPct = (m, deps) => {
    const base = P.ded[Math.min(deps, 4)];
    if (m <= MIN_WAGE) return base;
    if (m > MIN_WAGE + P.dedSpan) return 0;
    return Math.max(0, base - P.dedCut * Math.ceil((m - MIN_WAGE) / P.dedStep));
  };

  // One person's month. o: { deps, u26, school }.
  function month(m, o) {
    if (m <= 0) return { m: 0, deps: o.deps, untaxed: 0, base: 0, cas: 0, cass: 0, ded: 0, dedBase: 0, dedU26: 0, dedSchool: 0, taxable: 0, ir: 0, cam: 0, topUp: 0 };
    // Part-time at the minimum rate: the untaxed amount is taken pro rata.
    const untaxed = m > P.untaxedCeil ? 0 : P.untaxed * Math.min(1, m / MIN_WAGE);
    const base = m - untaxed;
    const cas = P.cas * base, cass = P.cass * base;
    // Contributions can't fall below those on a full minimum wage; the employer pays the gap.
    const floor = MIN_WAGE - P.untaxed;
    const topUp = base < floor ? (P.cas + P.cass) * (floor - base) : 0;
    const dedBase = dedPct(m, o.deps) * MIN_WAGE;
    const dedU26 = o.u26 && m <= MIN_WAGE + P.dedSpan ? P.u26 * MIN_WAGE : 0;
    const dedSchool = P.school * (o.school || 0);
    const room = Math.max(0, base - cas - cass);
    const ded = Math.min(room, dedBase + dedU26 + dedSchool);
    const taxable = room - ded;
    return { m, deps: o.deps, untaxed, base, cas, cass, ded, dedBase, dedU26, dedSchool, taxable, ir: P.ir * taxable, cam: P.cam * base, topUp };
  }

  const isDep = m => m <= P.depMax * MIN_WAGE;

  // Household income tax for a month; the 100 lei per child at school goes to whichever parent it saves more.
  function household(mMe, mPartner, kids, u26, couple) {
    if (!couple) return { me: month(mMe, { deps: kids, u26, school: kids }), partner: null };
    const dMe = kids + (isDep(mPartner) ? 1 : 0), dP = kids + (isDep(mMe) ? 1 : 0);
    const a = { me: month(mMe, { deps: dMe, u26, school: kids }), partner: month(mPartner, { deps: dP, school: 0 }) };
    const b = { me: month(mMe, { deps: dMe, u26, school: 0 }), partner: month(mPartner, { deps: dP, school: kids }) };
    return a.me.ir + a.partner.ir <= b.me.ir + b.partner.ir ? a : b;
  }

  function compute(G, s, env) {
    const m = G / s.factor;
    const couple = s.household === 'joint';
    const mp = couple ? env.partnerM : 0;
    const u26 = s.region === 'u26';
    const h = household(m, mp, s.children, u26, couple);
    const u = h.me;
    u.G = G;
    let irPartner = 0;
    if (couple) {
      const w = household(0, mp, s.children, u26, true);
      irPartner = h.partner.ir - w.partner.ir;
    }
    const k = s.factor;
    const er = (u.cam + u.topUp) * k, cas = u.cas * k, cass = u.cass * k, irMe = u.ir * k, irP = irPartner * k;
    const ir = irMe + irP;
    const net = G - cas - cass - irMe;
    const hhNet = net - irP;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, hhNet) * vatShare : 0;
    return { G, cost: G + er, net: hhNet, payNet: net, u, k, irMe, irP, er, vatShare,
      parts: { er, cas, cass, ir, vat } };
  }

  const COMP_KEYS = ['er', 'cas', 'cass', 'ir', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', cas: 'var(--k-ee)', cass: 'var(--k-csg)', ir: 'var(--k-ir)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'cas', 'cass', 'ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'cas', 'cass', 'ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['cas', 'cass', 'ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint', eur(P.depMax * MIN_WAGE))}</p>${sources('cf')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg', eur(P.u26 * MIN_WAGE), eur(MIN_WAGE + P.dedSpan))}</p>${sources('cf')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>${row(`2.25% × ${eur(r.u.base * r.k)}`, r.u.cam * r.k)}${r.u.topUp ? row(t('tip.topUp'), r.u.topUp * r.k) : ''}${tot(t('comp.er'), r.er)}</table>` : ''}${sources('cf')}`,
      untaxed: r => `<h4>${t('bd.untaxed')}</h4><p>${t('tip.untaxed', eur(P.untaxed), eur(MIN_WAGE), eur(P.untaxedCeil))}</p>${r ? `<p>−${eur(r.u.untaxed * r.k)}</p>` : ''}${sources('untaxed', 'untaxedEx')}`,
      cas: r => `<h4>${t('comp.cas')}</h4><p>${t('tip.cas')}</p>${r ? `<table>${tot(`25% × ${eur(r.u.base * r.k)}`, r.parts.cas)}</table>` : ''}${sources('cf')}`,
      cass: r => `<h4>${t('comp.cass')}</h4><p>${t('tip.cass')}</p>${r ? `<table>${tot(`10% × ${eur(r.u.base * r.k)}`, r.parts.cass)}</table>` : ''}${sources('cf')}`,
      ded: r => {
        const u = r && r.u;
        return `<h4>${t('bd.ded')}</h4><p>${t('tip.ded', eur(MIN_WAGE), eur(MIN_WAGE + P.dedSpan))}</p>${u ? `<table>
          ${row(t('tip.dedBase', pct(dedPct(u.m, u.deps), 1)), u.dedBase * r.k)}
          ${u.dedU26 ? row(t('tip.dedU26'), u.dedU26 * r.k) : ''}
          ${u.dedSchool ? row(t('tip.dedSchool'), u.dedSchool * r.k) : ''}
          ${tot(t('tip.dedUsed'), u.ded * r.k)}</table>` : ''}<p class="m">${t('tip.dedM')}</p>${sources('cf')}`;
      },
      taxable: r => `<h4>${t('bd.taxableRo')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.taxable * r.k)}</b>` : '')}</p>`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${row(t('bd.taxableRo'), r.u.taxable * r.k)}${row(`10% × ${eur(r.u.taxable * r.k)}`, r.irMe)}${r.irP ? row(t('tip.irPartner'), r.irP) : ''}${tot(t('comp.ir'), r.parts.ir)}</table>` : ''}${sources('cf')}`,
      irP: r => `<h4>${t('bd.irPartner')}</h4><p>${t('tip.irPartnerLong', eur(P.depMax * MIN_WAGE))}</p>${r ? `<p>${eur(r.irP)}</p>` : ''}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const p = r.parts, u = r.u, k = r.k;
    const L = [
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t('bd.gross'), v: r.G },
    ];
    if (u.untaxed > 0) L.push({ op: '', k: 'untaxed', label: t('bd.untaxed'), v: u.untaxed * k, cls: 'sub' });
    L.push(
      { op: '−', k: 'cas', label: t('comp.cas'), v: p.cas, tax: p.cas },
      { op: '−', k: 'cass', label: t('comp.cass'), v: p.cass, tax: p.cass },
    );
    if (u.ded > 0) L.push({ op: '', k: 'ded', label: t('bd.ded'), v: u.ded * k, cls: 'sub' });
    L.push(
      { op: '', k: 'taxable', label: t('bd.taxableRo'), v: u.taxable * k, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: r.irMe, tax: r.irMe },
    );
    if (Math.abs(r.irP) > .5) L.push({ op: '−', k: 'irP', label: t('bd.irPartner'), v: r.irP, tax: r.irP });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // The untaxed 200 lei stops at 4,600 and the personal deduction tapers off up to the minimum wage + 2,000.
  function trap(x) {
    const s = x.s, k = s.factor;
    return {
      band: [MIN_WAGE * 12 / k, (MIN_WAGE + P.dedSpan) * 12 / k],
      text: [x.fmtM(MIN_WAGE * 12 / k, 1), x.fmtM((MIN_WAGE + P.dedSpan) * 12 / k, 1), x.fmtM(P.untaxedCeil * 12 / k, 1)],
    };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'RON', nextStep: 500,
    regions: REGIONS, sizes: [], minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 21,
    features: {},
    communes: false,
    local: null,
    state: { salary: 6000, factor: 12, minRole: 'pm', commune: '', region: 'o26', local: 0, vatRate: 21, size: 'all' },
    urlFields: { age: ['region', 'str', REGIONS], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: s => ({ partnerM: Math.max(0, Number(s.partnerGross) || 0) / 12 }),
    compute,
    own: (p, plain, env) => ({ net: compute(p.lo, plain, env).net, allow: 0 }),
    polNote: () => 'polNote.stat',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'govPay',
    refKeys: ['er', 'ee', 'untaxed', 'ded', 'ir', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top: () => null,
  };
};
