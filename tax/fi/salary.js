// Finnish salary rules for income year 2026. Loaded by ../index.html?country=fi.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const SIZES = ['small', 'big'];
  const MIN_ROLES = ['minister', 'pm'];

  const P = {
    brackets: [[22000, .1264], [32600, .19], [40100, .3025], [52100, .3325], [Infinity, .375]],
    // TVL 124 § 5: Åland kept its old municipal rates, so its residents get a lower state scale.
    bracketsAx: [[22000, 0], [32600, .0636], [40100, .1761], [52100, .2061], [Infinity, .2486]],
    ee: { pension: .073, unemp: .0089, day: .0088, dayMin: 17255 },
    er: { pension: .1755, sick: .0191, unempSmall: .0031, unempBig: .0123, accident: .0051, life: .0006 },
    earnedDed: 750,
    basic: { max: 4265, k: .18 },
    basicAx: { max: 3925, k: .084 },
    work: { rate: .18, max: 3430, child: 105, lo: 35000, hi: 50550, k: .02 },
    hc: .011,
    yle: { rate: .025, lo: 15150, max: 160 },
    media: { lo: 14000, fee: 128 },
    churchAvg: 1.38,
  };

  // Monthly gross, full-time, total earnings without the holiday bonus. No legal minimum wage.
  const REF_WAGES = [
    { key: 'med', m: 3611, year: 2024, color: '--w-med' },
    { key: 'avg', m: 4070, year: 2024, color: '--w-avg' },
  ];

  // Fees after the 5% government cut (until the end of the term), plus half the MP fee for a minister who is an MP.
  const MP = 7637, MP12 = 8393;
  const GOV = {
    minister: (11344.90 + MP / 2) * 12,
    pm: (14549.25 + MP12 / 2) * 12,
    mp: MP * 12,
    mpAllow: 986.81 * 12,
    speaker: 15315 * 12,
  };
  const DOC_GOV = 'https://duunitori.fi/tyoelama/paaministerin-palkka';
  const DOC_MP = 'https://www.verkkouutiset.fi/a/kansanedustajat-saavat-jopa-500-euron-palkankorotuksen/';
  const DOC_CUT = 'https://yle.fi/a/74-20183764';
  const DOC_CEO = 'https://yle.fi/a/74-20193503';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_GOV },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_GOV },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.mp, hi: MP12 * 12, url: DOC_MP },
    { kind: 'gov', key: 'speaker', icon: '🔔', lo: GOV.speaker, hi: GOV.speaker, url: DOC_MP },
    { kind: 'corp', name: 'Markus Rauramo', role: 'fortum', lo: 1200000, hi: 1741200, url: 'https://www.fortum.com/fi/tietoa-meista/sijoittajille/hallinto-ja-johtaminen/palkitseminen' },
    { kind: 'corp', name: 'Antti Jääskeläinen', role: 'posti', note: 'taxdata', lo: 1100000, hi: 1100000, url: DOC_CEO },
    { kind: 'corp', name: 'Esa Rautalinko', role: 'patria', note: 'taxdata', lo: 1000000, hi: 1000000, url: DOC_CEO },
    { kind: 'corp', name: 'Turkka Kuusisto', role: 'finnair', note: 'taxdata', lo: 980000, hi: 980000, url: DOC_CEO },
    { kind: 'corp', name: 'Elisa Markula', role: 'vr', note: 'taxdata', lo: 700000, hi: 700000, url: DOC_CEO },
    { kind: 'corp', name: 'Olli Sarekoski', role: 'veikkaus', note: 'taxdata', lo: 470000, hi: 470000, url: DOC_CEO },
    { kind: 'corp', name: 'Leena Laitinen', role: 'alko', note: 'taxdata', lo: 460000, hi: 460000, url: DOC_CEO },
  ];

  const SRC = {
    scale: 'https://www.veronmaksajat.fi/neuvot/henkiloverotus/tyo-elake-ja-etuudet/ansiotulojen-verot-ja-maksut/valtion-tulovero/',
    veroperusteet: 'https://vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/verokortti/veroprosentti-ja-tuloraja/veroperusteet/',
    deductions: 'https://www.veronmaksajat.fi/neuvot/henkiloverotus/tyo-elake-ja-etuudet/verovahennykset/2026/ansiotulosta-tehtavat-vahennykset-2026/',
    changes: 'https://www.veronmaksajat.fi/tutkimus-ja-tilastot/suomen-verot-ja-menot/veromuutokset/veromuutoksia-2026/',
    rates: 'https://www.vero.fi/syventavat-vero-ohjeet/paatokset/47465/kuntien-ja-seurakuntien-tuloveroprosentit-vuonna-2026/',
    kunnat: 'https://stat.fi/fi/luokitukset/kunta/',
    aland: 'https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/48911/ahvenanmaan-verotus10/',
    yle: 'https://vero.fi/tietoa-verohallinnosta/uutishuone/esitys_ja_opetusmateriaali/ylevero/',
    social: 'https://www.elo.fi/-/media/files/vakuuttaminen-esitteet/sosiaalivakuutusmaksut_2026.pdf',
    etk: 'https://www.etk.fi/wp-content/uploads/2026/01/lakisaateiset-sosiaalivakuutusmaksut-suomessa-2026-suomi-1.pdf',
    check: 'https://www.veronmaksajat.fi/luvut/Laskelmat/Palkansaajan-veroprosentit/',
    wages: 'https://stat.fi/julkaisu/cm1ks981cdm5107w7zeme1ot7',
    vat: 'https://vero.fi/yritykset-ja-yhteisot/verot-ja-maksut/arvonlisaverotus/arvonlisaveroprosentit/',
    govPay: DOC_GOV,
    govCut: DOC_CUT,
    mpPay: DOC_MP,
    ceoPay: DOC_CEO,
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
  const basicDed = (net, b) => Math.min(net, Math.max(0, b.max - b.k * Math.max(0, net - b.max)));

  // Filled from communes.js: church rates and Åland membership by commune id. The ref makes the page recompute once they load.
  const COMMUNE = new Map();
  const loaded = Vue.ref(0);
  const place = s => {
    const c = loaded.value >= 0 && COMMUNE.get(s.commune);
    return { aland: c ? c.region === 'ax' : false, church: c ? c.church : P.churchAvg };
  };

  // Income taxes on earned income for one person. ee = their deductible contributions.
  function incomeTax(G, ee, s) {
    const pl = place(s), aland = pl.aland;
    const earnedDed = Math.min(P.earnedDed, G);
    const pure = G - earnedDed;
    const net = Math.max(0, pure - ee);
    const basic = basicDed(net, P.basic);
    const basicMuni = aland ? basicDed(net, P.basicAx) : basic;
    const stateBase = net - basic, muniBase = net - basicMuni;
    const stateGross = progressive(stateBase, aland ? P.bracketsAx : P.brackets);
    const muniGross = s.local / 100 * muniBase;
    const churchRate = s.cadre ? pl.church : 0;
    const churchGross = churchRate / 100 * muniBase;
    const hcGross = P.hc * muniBase;

    const kids = s.children || 0, sole = s.household !== 'joint' && kids > 0;
    const workMax = P.work.max + kids * P.work.child * (sole ? 2 : 1);
    const workFull = Math.min(P.work.rate * G, workMax);
    const workCut = P.work.k * Math.max(0, Math.min(pure, P.work.hi) - P.work.lo);
    const work = Math.max(0, workFull - workCut);
    // The credit goes against state tax first, then the other income taxes in proportion.
    const fromState = Math.min(stateGross, work);
    const others = muniGross + churchGross + hcGross;
    const fromOthers = Math.min(others, work - fromState);
    const share = others > 0 ? 1 - fromOthers / others : 1;

    const yle = aland ? (pure > P.media.lo ? P.media.fee : 0) : Math.min(P.yle.max, Math.max(0, P.yle.rate * (pure - P.yle.lo)));
    return {
      G, earnedDed, pure, ee, net, basic, basicMuni, stateBase, muniBase, aland, churchRate,
      stateGross, muniGross, churchGross, hcGross, workMax, workFull, workCut, work, fromState, fromOthers, unused: work - fromState - fromOthers,
      state: stateGross - fromState, muni: muniGross * share, church: churchGross * share, hc: hcGross * share, yle,
    };
  }

  function eeParts(G, minister) {
    const e = P.ee;
    return [
      { k: 'pension', rate: e.pension, base: G },
      { k: 'unemp', rate: minister ? 0 : e.unemp, base: G },
      { k: 'day', rate: G >= e.dayMin ? e.day : 0, base: G },
    ].filter(p => p.rate > 0 && p.base > 0).map(p => ({ ...p, v: p.rate * p.base }));
  }

  function erParts(G, s) {
    const e = P.er;
    return [
      { k: 'pension', rate: e.pension, base: G },
      { k: 'sick', rate: e.sick, base: G },
      { k: 'unemp', rate: s.size === 'big' ? e.unempBig : e.unempSmall, base: G },
      { k: 'accident', rate: e.accident, base: G },
      { k: 'life', rate: e.life, base: G },
    ].filter(p => p.base > 0).map(p => ({ ...p, v: p.rate * p.base }));
  }
  // Elected office: the State pays pension and sickness insurance, no unemployment or accident insurance.
  const erElected = G => [
    { k: 'pension', rate: P.er.pension, base: G, v: P.er.pension * G },
    { k: 'sick', rate: P.er.sick, base: G, v: P.er.sick * G },
  ];

  function finish(G, s, ees, ers, regime) {
    const ee = ees.reduce((tot, p) => tot + p.v, 0);
    const er = ers.reduce((tot, p) => tot + p.v, 0);
    const u = incomeTax(G, ee, s);
    const cost = G + er;
    const net = G - ee - u.state - u.muni - u.church - u.hc - u.yle;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return {
      G, cost, net, u, ees, ers, vatShare, regime,
      parts: { er, ee, state: u.state, muni: u.muni, church: u.church, hc: u.hc, yle: u.yle, vat },
    };
  }

  const computeMinister = (G, s) => finish(G, s, eeParts(G, true), erElected(G), 'minister');

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s);
    return finish(G, s, eeParts(G, false), erParts(G, s));
  }

  const COMP_KEYS = ['er', 'ee', 'state', 'muni', 'church', 'hc', 'yle', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', ee: 'var(--k-ee)', state: 'var(--k-fed)', muni: 'var(--k-com)', church: 'var(--k-vm)', hc: 'var(--k-csg)', yle: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'ee', 'state', 'muni', 'church', 'hc', 'yle', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'ee', 'state', 'muni', 'church', 'hc', 'yle'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'state', 'muni', 'church', 'hc', 'yle'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  function tips(x) {
    const s = x.s;
    const partRows = (list, label) => list.map(p => `<tr><td>${label(p.k)} ${pct(p.rate, 2)}</td><td>${eur(p.v)}</td></tr>`).join('');
    const placeHint = () => { const c = x.commune(); return c ? `${c.name}: ` : ''; };
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('govPay', 'govCut')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr')}</p>${r ? `<table>${partRows(r.ers, k => t('er.' + k))}</table>` : ''}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe')}</p>${r ? `<table>${partRows(r.ees, k => t('ee.' + k))}</table>` : ''}`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay', 'govCut', 'mpPay')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      'factor12.5': () => `<h4>${t('tip.monthsPaid', num(12.5, 1))}</h4><p>${t('tip.f125')}</p>${sources('check')}`,
      cadre: () => `<h4>${t('comp.church')}</h4><p>${t('tip.churchToggle', num(P.churchAvg, 2) + '%')}</p>${sources('rates')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('deductions')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('social')}`,
      muniRule: () => `<h4>${t('comp.muni')}</h4><p>${t('tip.muniRule', num(x.localRange()[0], 2) + '%', num(x.localRange()[1], 2) + '%')}</p>${sources('rates', 'kunnat', 'aland')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.G / s.factor), num(s.factor, 1), eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>`;
      },
      er: r => {
        const list = r ? r.ers : erParts(1, s).map(p => ({ ...p, v: 0 }));
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>
          <table>${partRows(list, k => t('er.' + k))}
          ${r ? `<tr class="t"><td>${t('total')} ${pct(r.parts.er / r.G, 2)}</td><td>${eur(r.parts.er)}</td></tr>` : ''}</table>
          <p class="m">${t('tip.erM')}</p>${sources('social', 'etk')}`;
      },
      ee: r => `<h4>${t('comp.ee')}</h4><p>${t('tip.ee', eur(P.ee.dayMin))}</p>${r ? `<table>${partRows(r.ees, k => t('ee.' + k))}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.parts.ee)}</td></tr></table>` : ''}${sources('social', 'veroperusteet')}`,
      netPay: r => `<h4>${t('bd.netPay')}</h4><p>${t('tip.netPay')}</p>`,
      deductions: r => `<h4>${t('bd.deductions')}</h4><p>${t('tip.deductions', eur(P.earnedDed), eur(P.basic.max))}</p>${r ? `<table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>− ${t('tip.earnedDed')}</td><td>−${eur(r.u.earnedDed)}</td></tr>
          <tr><td>− ${t('comp.ee')}</td><td>−${eur(r.u.ee)}</td></tr>
          <tr class="t"><td>${t('tip.netIncome')}</td><td>${eur(r.u.net)}</td></tr>
          <tr><td>− ${t('tip.basic')}</td><td>−${eur(r.u.basic)}</td></tr>
          <tr class="t"><td>${t('bd.taxable')}</td><td>${eur(r.u.stateBase)}</td></tr>
          ${r.u.aland ? `<tr><td>${t('tip.muniBaseAx')}</td><td>${eur(r.u.muniBase)}</td></tr>` : ''}</table>` : ''}${sources('deductions')}`,
      taxable: r => tipBuilders.deductions(r),
      state: r => {
        if (!r) return `<h4>${t('comp.state')}</h4><p>${t('tip.stateShort')}</p>${sources('scale')}`;
        const u = r.u, rows = bracketRows(u.stateBase, u.aland ? P.bracketsAx : P.brackets).filter(b => b.r > 0)
          .map(b => `<tr><td>${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 2)}</td><td>${eur(b.amt)}</td></tr>`).join('');
        return `<h4>${t('comp.state')}</h4><p class="m">${t(u.aland ? 'tip.stateAx' : 'tip.stateM')}</p><table>
          <tr><td>${t('bd.taxable')}</td><td>${eur(u.stateBase)}</td></tr>${rows}
          <tr class="t"><td>${t('tip.stateBefore')}</td><td>${eur(u.stateGross)}</td></tr>
          <tr><td>− ${t('bd.work')}</td><td>−${eur(u.fromState)}</td></tr>
          <tr class="t"><td>${t('tip.yours')}</td><td>${eur(u.state)}</td></tr></table>${sources('scale', u.aland ? 'aland' : 'deductions')}`;
      },
      work: r => `<h4>${t('bd.work')}</h4><p>${t('tip.work', eur(P.work.max), eur(P.work.child), eur(P.work.lo), eur(P.work.hi))}</p>${r ? `<table>
          <tr><td>18% × ${eur(r.G)}, ${t('tip.workMax', eur(r.u.workMax))}</td><td>${eur(r.u.workFull)}</td></tr>
          ${r.u.workCut > 0 ? `<tr><td>− 2% × (${eur(Math.min(r.u.pure, P.work.hi))} − ${eur(P.work.lo)})</td><td>−${eur(r.u.workCut)}</td></tr>` : ''}
          <tr class="t"><td>${t('bd.work')}</td><td>${eur(r.u.work)}</td></tr>
          <tr><td>${t('tip.workState')}</td><td>${eur(r.u.fromState)}</td></tr>
          <tr><td>${t('tip.workOthers')}</td><td>${eur(r.u.fromOthers)}</td></tr>
          ${r.u.unused > .5 ? `<tr><td>${t('tip.workUnused')}</td><td>${eur(r.u.unused)}</td></tr>` : ''}</table>` : ''}${sources('deductions', 'changes')}`,
      muni: r => `<h4>${t('comp.muni')}</h4><p>${t('tip.muni')}</p>${r ? `<p>${placeHint()}${num(s.local, 2)}% × ${eur(r.u.muniBase)} = ${eur(r.u.muniGross)}${r.u.fromOthers > 0 ? `, ${t('tip.afterWork')} <b>${eur(r.parts.muni)}</b>` : ''}</p>` : ''}${sources('rates')}`,
      church: r => `<h4>${t('comp.church')}</h4><p>${t('tip.church')}</p>${r && r.u.churchRate ? `<p>${placeHint()}${num(r.u.churchRate, 2)}% × ${eur(r.u.muniBase)} = <b>${eur(r.parts.church)}</b></p>` : ''}${sources('rates')}`,
      hc: r => `<h4>${t('comp.hc')}</h4><p>${t('tip.hc')}</p>${r ? `<p>${pct(P.hc, 2)} × ${eur(r.u.muniBase)} = ${eur(r.u.hcGross)}${r.u.fromOthers > 0 ? `, ${t('tip.afterWork')} <b>${eur(r.parts.hc)}</b>` : ''}</p>` : ''}${sources('veroperusteet')}`,
      yle: r => `<h4>${t('comp.yle')}</h4><p>${t(r && r.u.aland ? 'tip.media' : 'tip.yle', eur(P.yle.lo), eur(P.yle.max), eur(P.media.fee), eur(P.media.lo))}</p>${sources('yle')}`,
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
    const p = r.parts, u = r.u, min = r.regime === 'minister', c = x.commune();
    const L = [
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '+', k: 'er', label: t(min ? 'bd.minEr' : 'comp.er'), v: p.er, tax: p.er, cls: 'sub' },
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t(min ? 'bd.minEe' : 'comp.ee'), v: p.ee, tax: p.ee },
      { op: '=', k: 'netPay', label: t('bd.netPay'), v: r.G - p.ee, cls: 'tot' },
      { op: '−', k: 'deductions', label: t('bd.deductions'), v: u.earnedDed + u.basic, cls: 'sub' },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.stateBase, cls: 'sub' },
      { op: '', k: 'work', label: t('bd.workLine'), v: u.work, cls: 'sub' },
      { op: '', k: 'netPay', label: t('bd.netPay'), v: r.G - p.ee },
      { op: '−', k: 'state', label: t('comp.state'), v: p.state, tax: p.state },
      { op: '−', k: 'muni', label: `${t('comp.muni')} (${num(x.s.local, 2)}%${c ? ', ' + c.name : ''})`, v: p.muni, tax: p.muni },
    ];
    if (p.church > .5) L.push({ op: '−', k: 'church', label: `${t('comp.church')} (${num(u.churchRate, 2)}%)`, v: p.church, tax: p.church });
    L.push(
      { op: '−', k: 'hc', label: t('comp.hc'), v: p.hc, tax: p.hc },
      { op: '−', k: 'yle', label: t(u.aland ? 'comp.media' : 'comp.yle'), v: p.yle, tax: p.yle },
      { op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' },
    );
    return L;
  }

  // Annual gross where the basic deduction has run out, for this household.
  const basicEnd = s => {
    let lo = 0, hi = 100000;
    for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; if (compute(m, s, {}).u.basic > 0) lo = m; else hi = m; }
    return hi;
  };

  // Low-wage zone: the work income deduction stops growing, the daily allowance charge starts, and the basic deduction fades.
  function trap(x) {
    const s = x.s, kids = s.children || 0, sole = s.household !== 'joint' && kids > 0;
    const workCap = (P.work.max + kids * P.work.child * (sole ? 2 : 1)) / P.work.rate;
    const band = [Math.min(P.ee.dayMin, workCap) / s.factor, basicEnd({ ...s, regime: 'employee' }) / s.factor];
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), x.fmtM(workCap / s.factor, 10) + x.perUnit(), eur(P.ee.dayMin)] };
  }

  function top(x) {
    const s = x.s, top = P.brackets[3][0];
    const at = x.firstMonthly(m => compute(m * s.factor, { ...s, regime: 'employee' }, {}).u.stateBase > top);
    if (!at) return null;
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), null, eur(top)] };
  }

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    GAPS: ['earnedAllow', 'alandBase', 'erPension', 'erInsurance', 'erUnemp', 'church', 'holiday', 'onlyWage', 'check', 'notIncl', 'wages', 'govPay', 'ministerMp', 'govSocial', 'mpAllow', 'ceoPay'],
    currency: 'EUR',
    regions: [], sizes: SIZES, minRoles: MIN_ROLES, factors: [12, 12.5], factorDigits: 1, vatStandard: 25.5,
    features: { cadre: true, partsHint: true },
    state: { salary: 3600, factor: 12.5, minRole: 'minister', cadre: false, commune: 'Helsinki', region: 'fi', local: 5.3, vatRate: 25.5, size: 'small' },
    urlFields: {
      months: ['factor', 'num', [12, 12.5]], church: ['cadre', 'bool'],
      commune: ['commune', 'str'], muni: ['local', 'num'],
      size: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'muniLabel', tip: 'muniRule', digits: 2, step: .05, range: list => list.length ? [Math.min(...list.map(c => c.rate)), Math.max(...list.map(c => c.rate))] : [4.7, 19.7], notDue: () => false, hideInMinister: false },
    parseCommunes: list => {
      const out = [];
      for (const [name, sv, rate, church, orth, region] of list) {
        COMMUNE.set(name, { church, orth, region });
        out.push({ name, rate, region, sub: sv, id: name, orth });
        if (sv) {
          COMMUNE.set(sv, { church, orth, region });
          out.push({ name: sv, rate, region, sub: name, id: sv, orth });
        }
      }
      loaded.value++;
      return out;
    },
    communeLabel: c => c.sub ? `${c.name} (${c.sub})` : c.name,
    communeTag: c => `${num(c.rate, 2)}%`,
    communeHint: c => t(c.region === 'ax' ? 'communeHintAx' : 'communeHint', num(c.rate, 2) + '%', num(COMMUNE.get(c.id).church, 2) + '%', num(c.orth, 2) + '%'),
    partsHint: x => t('partsHint', eur(P.work.child), eur(2 * P.work.child)),
    minSalary: role => Math.round(GOV[role] * 100) / 100,
    env: () => ({}),
    compute,
    own: (p, plain) => {
      if (p.regime === 'mp') {
        const r = computeMinister(p.lo, plain);
        return { net: r.net + GOV.mpAllow, allow: GOV.mpAllow };
      }
      return { net: computeMinister(p.lo, plain).net, allow: 0 };
    },
    segLabels: {}, recvLabels: {},
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + (p.note || p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'govCut',
    refKeys: ['er', 'ee', 'taxable', 'work', 'muni', 'aland', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
