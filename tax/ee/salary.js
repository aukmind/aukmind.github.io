// Estonian salary rules for income year 2026. Loaded by ../index.html?country=ee.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const INF = Infinity;
  const PILLARS = ['p2', 'p4', 'p6', 'p0'];
  const AGES = ['work', 'pension'];
  const MIN_ROLES = ['mp', 'min', 'pm', 'pres'];

  const P = {
    it: .22, soc: .33, uiEe: .016, uiEr: .008,
    pillar: { p0: 0, p2: .02, p4: .04, p6: .06 },
    // Basic exemption per month: flat from 2026, higher at old-age pension age.
    exempt: { work: 700, pension: 776 },
    // Social tax minimum obligation base per month.
    socMin: 886,
    brackets: [[INF, .22]],
  };
  const MIN_WAGE = 946;

  const REF_WAGES = [
    { key: 'min', m: MIN_WAGE, year: 2026, color: '--w-min' },
    { key: 'med', m: 1840, year: 2026, color: '--w-med' },
    { key: 'avg', m: 2243, year: 2026, color: '--w-avg' },
  ];

  // Monthly pay from 1 April 2026: top rate 10,239.71 (President basis) or the lower temporary rate 9,256.41 (PM basis) × coefficient.
  const MONTHLY = { pres: 10239.71, pm: 9256.41, dep: 8703.75, min: 7867.95, mp: 6655.81 };
  const GOV = Object.fromEntries(Object.entries(MONTHLY).map(([k, v]) => [k, Math.round(v * 12)]));
  const DOC_GOV = 'https://www.fin.ee/sites/default/files/documents/2026-03/korgemad_riigit_ametipalk_13032026_kodulehele.pdf';
  const POLITICIANS = [
    { kind: 'stat', key: 'pres', icon: '🏰', regime: 'official', lo: GOV.pres, hi: GOV.pres, url: DOC_GOV },
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'official', lo: GOV.pm, hi: GOV.pm, url: DOC_GOV },
    { kind: 'stat', key: 'dep', icon: '🪑', regime: 'official', lo: GOV.dep, hi: GOV.dep, url: DOC_GOV },
    { kind: 'stat', key: 'min', icon: '💼', regime: 'official', lo: GOV.min, hi: GOV.min, url: DOC_GOV },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'official', lo: GOV.mp, hi: GOV.mp, url: DOC_GOV },
  ];

  const SRC = {
    rates: 'https://emta.ee/eraklient/maksud-ja-tasumine/tulu-deklareerimine/maksumaarad',
    changes: 'https://emta.ee/uudised/maksumuudatused-2026',
    example: 'https://emta.ee/node/330/chapter/13291/pdf',
    rate22: 'https://www.grantthornton.ee/en/insights1/calculating-the-basic-exemption-from-2026/',
    ui: 'https://emta.ee/ariklient/maksud-ja-tasumine/tulumaks-ja-sotsiaalmaks/tootuskindlustusmakse',
    soc: 'https://emta.ee/ariklient/maksud-ja-tasumine/tulumaks-ja-sotsiaalmaks/sotsiaalmaks',
    transfer: 'https://emta.ee/eraklient/maksud-ja-tasumine/maksusoodustused/maksusoodustuste-ulekandmine',
    minWage: 'https://www.err.ee/1609943063/tooandjad-ja-ametiuhingud-joudsid-alampalga-kusimuses-kokkuleppele',
    wages: 'https://www.err.ee/1610126803/keskmine-palk-kasvas-aastaga-117-euro-vorra-2243-euroni',
    govPay: DOC_GOV,
  };

  // official: President, Riigikogu and government members are outside unemployment insurance.
  function person(G, s) {
    const official = s.regime === 'minister';
    const pension = !official && s.size === 'pension';
    const rate = P.pillar[s.region] ?? .02;
    const ui = official || pension ? 0 : P.uiEe * G;
    const ii = rate * G;
    const ex = P.exempt[pension ? 'pension' : 'work'] * 12;
    const afterContrib = G - ui - ii;
    const exUsed = Math.min(ex, Math.max(0, afterContrib));
    const base = Math.max(0, afterContrib - ex);
    return { G, official, pension, rate, ui, ii, ex, exUsed, base, it: P.it * base };
  }

  function compute(G, s) {
    const u = person(G, s);
    u.m = G / s.factor;
    const socBase = u.official || u.pension ? G : Math.max(G, P.socMin * 12);
    const soc = P.soc * socBase;
    const uiEr = u.official ? 0 : P.uiEr * G;
    const net = G - u.ui - u.ii - u.it;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost: G + soc + uiEr, net, u, socBase, vatShare, regime: u.official ? 'minister' : undefined,
      parts: { er: soc, eru: uiEr, ee: u.ui, ii: u.ii, ir: u.it, vat } };
  }

  const COMP_KEYS = ['er', 'eru', 'ee', 'ii', 'ir', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', eru: 'var(--k-vm)', ee: 'var(--k-ee)', ii: 'var(--k-csg)', ir: 'var(--k-ir)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'eru', 'ee', 'ii', 'ir', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'eru', 'ee', 'ii', 'ir'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'ii', 'ir'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const row = (label, v) => `<tr><td>${label}</td><td>${eur(v)}</td></tr>`;
    const tot = (label, v) => `<tr class="t"><td>${label}</td><td>${eur(v)}</td></tr>`;
    const pc = v => vr(v * 100) + '%';
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay', 'ui')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('transfer')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('rates')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('rates', 'ui', 'soc')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>${row(t('bd.gross'), r.G)}${row(t('comp.er'), r.parts.er)}${row(t('comp.eru'), r.parts.eru)}${tot(t('tip.costH'), r.cost)}</table><p class="m">${t('tip.costM')}</p>`;
      },
      er: r => `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>${r.socBase > r.G ? row(t('tip.socMin'), r.socBase) : ''}${tot(`33% × ${eur(r.socBase)}`, r.parts.er)}</table>` : ''}${sources('soc')}`,
      eru: r => `<h4>${t('comp.eru')}</h4><p>${t('tip.eru')}</p>${r ? `<table>${tot(`${pc(r.u.official ? 0 : P.uiEr)} × ${eur(r.G)}`, r.parts.eru)}</table>` : ''}${sources('ui')}`,
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>${tot(`${pc(r.u.ui ? P.uiEe : 0)} × ${eur(r.G)}`, r.u.ui)}</table>` : ''}${sources('ui')}`,
      ii: r => `<h4>${t('comp.ii')}</h4><p>${t('tip.ii')}</p>${r ? `<table>${tot(`${pc(r.u.rate)} × ${eur(r.G)}`, r.u.ii)}</table>` : ''}${sources('rates')}`,
      exempt: r => `<h4>${t('bd.exempt')}</h4><p>${t('tip.exempt')}</p>${r ? `<table>${row(t('tip.exemptYear'), r.u.ex)}${tot(t('tip.exemptUsed'), r.u.exUsed)}</table>` : ''}${sources('rates', 'changes')}`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.base)}</b>` : '')}</p>${sources('example')}`,
      ir: r => `<h4>${t('comp.ir')}</h4><p>${t('tip.ir')}</p>${r ? `<table>${row(t('bd.taxable'), r.u.base)}${tot(`22% × ${eur(r.u.base)}`, r.u.it)}</table>` : ''}${sources('rates', 'rate22')}`,
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(1000), eur(1000 + s.vatRate * 10), eur(s.vatRate * 10))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('rates')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips: {} };
  }

  function breakdown(r) {
    const p = r.parts;
    const L = [
      { op: '', k: 'gross', label: t(r.regime === 'minister' ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' },
    ];
    if (p.eru > 0) L.push({ op: '+', k: 'eru', label: t('comp.eru'), v: p.eru, tax: p.eru, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t('bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(r.regime === 'minister' ? 'bd.minGross' : 'bd.gross'), v: r.G },
    );
    if (p.ee > 0) L.push({ op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee });
    if (p.ii > 0) L.push({ op: '−', k: 'ii', label: t('comp.ii'), v: p.ii, tax: p.ii });
    L.push(
      { op: '', k: 'exempt', label: t('bd.exempt'), v: r.u.exUsed, cls: 'sub' },
      { op: '', k: 'taxable', label: t('bd.taxable'), v: r.u.base, cls: 'sub' },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // No income tax until pay after contributions passes the exemption; below 886 € the employer still pays social tax on 886 €.
  function trap(x) {
    const s = x.s;
    const ex = P.exempt[s.size === 'pension' ? 'pension' : 'work'];
    const keep = 1 - (s.size === 'pension' ? 0 : P.uiEe) - (P.pillar[s.region] ?? .02);
    const freeM = ex / keep * 12 / s.factor;
    const minM = P.socMin * 12 / s.factor;
    const pension = s.size === 'pension';
    return {
      band: pension ? [freeM, freeM] : [Math.min(freeM, minM), Math.max(freeM, minM)],
      text: [x.fmtM(freeM, 1), x.fmtM(minM, 1), pension ? 1 : 0, x.fmtM(MIN_WAGE * 12 / s.factor, 1)],
    };
  }

  return {
    GAPS: ['polApr', 'pension', 'wages', 'check', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'EUR', nextStep: 100,
    regions: PILLARS, sizes: AGES, minRoles: MIN_ROLES, factors: [12], factorDigits: 0, vatStandard: 24,
    features: {},
    communes: false,
    local: null,
    state: { salary: 2000, factor: 12, minRole: 'pm', commune: '', region: 'p2', local: 0, vatRate: 24, size: 'work' },
    urlFields: { pillar: ['region', 'str', PILLARS], age: ['size', 'str', AGES], role: ['minRole', 'str', MIN_ROLES] },
    minSalary: role => GOV[role],
    env: () => ({}),
    compute,
    own: (p, plain) => ({ net: compute(p.lo, { ...plain, regime: 'minister' }).net, allow: 0 }),
    segLabels: {}, recvLabels: {},
    polNote: () => 'polNote.official',
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: () => t('src.govPay'),
    polNoteLink: 'govPay',
    refKeys: ['er', 'ee', 'ir', 'pension', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top: () => null,
  };
};
