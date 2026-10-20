// French salary rules for income year 2026. Loaded by ../index.html?country=fr.
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const REGIONS = ['metro', 'am'];
  const SIZES = ['micro', 'small', 'big'];
  const MIN_ROLES = ['se', 'minister', 'pm'];
  const PASS = 48060;

  const P = {
    pass: PASS,
    // The RGDU keeps the SMIC of 1 Jan 2026 for the whole year, even after the June rise (décret 2026-509).
    rgdu: { tmin: .02, tdelta: { small: .3781, big: .3821 }, p: 1.75, smicYear: 12.02 * 1820 },
    er: {
      maladie: .13, vieilPlaf: .0855, vieilDeplaf: .0211, af: .0525, csa: .003, fnalSmall: .001, fnalBig: .005,
      atmp: .0208, chomage: .04, ags: .0025, aaT1: .0472, aaT2: .1295, cegT1: .0129, cegT2: .0162, cet: .0021,
      apec: .00036, dialogue: .00016, formMicro: .0055, formBig: .01, appr: .0068, apprAM: .0044, peec: .0045,
    },
    ee: { vieilPlaf: .069, vieilDeplaf: .004, aaT1: .0315, aaT2: .0864, cegT1: .0086, cegT2: .0108, cet: .0014, apec: .00024, am: .013 },
    csg: { ded: .068, nd: .024, crds: .005, base: .9825 },
    // Barème for 2026 income as tabled in the PLF 2027 (art. 2), voted on 20 Oct 2026.
    brackets: [[11844, 0], [30200, .11], [86353, .30], [185737, .41], [Infinity, .45]],
    abat: { pct: .10, min: 520, max: 14861 },
    qf: { half: 1845, isoleFirst: 4352 },
    decote: { single: 915, couple: 1513, k: .4525 },
    minTax: 61,
    cehr: { single: [[250000, 0], [500000, .03], [Infinity, .04]], couple: [[500000, 0], [1000000, .03], [Infinity, .04]] },
    pa: { mf: 638.28, rate: .5985, bonMax: 240.63, bonLo: 59 * 12.31, bonHi: 138 * 12.31, min: 15, af: [0, 0, 152.25, 347.32], afExtra: 195.07 },
    ircantec: { eeA: .028, eeB: .0695, erA: .042, erB: .1255 },
  };

  // Monthly gross, full-time: SMIC since 1 Jun 2026, INSEE private-sector median and mean (2024).
  const REF_WAGES = [
    { key: 'min', m: 1867.02, year: 2026, color: '--w-min' },
    { key: 'med', m: 2886, year: 2024, color: '--w-med' },
    { key: 'avg', m: 3602, year: 2024, color: '--w-avg' },
  ];

  // Index-linked public pay, frozen since the point d'indice of 1 Jan 2024 (5 931,95 € "hors échelle" average).
  const HE = 5931.95;
  const govMonthly = k => k * HE * 1.03 * 1.25;
  const GOV = {
    pm: govMonthly(2.1) * 12, minister: govMonthly(1.4) * 12, se: govMonthly(1.33) * 12,
    parl: 7637.39 * 12,
    // Monthly deductions from the assemblies' own pay sheets, at the base 7 637,39 €.
    mp: { pension: 828.66, other: 76.37 + 38.19 },
    senator: { pension: 1180.10, other: 40.34 },
    dfp: 7238.04, afm: 6600,
  };
  const DOC_GOV = 'https://www.senat.fr/reglement/pouvoirs_publics22.html';
  const DOC_MP = 'https://questions.assemblee-nationale.fr/contenu/telechargement/631144/file/Fiche%207%20corrig%C3%A9e%20-%20Situation%20mat%C3%A9rielle%20du%20d%C3%A9put%C3%A9_actualis%C3%A9e%20070525.pdf';
  const DOC_SEN = 'https://www.senat.fr/connaitre-le-senat/role-et-fonctionnement/lindemnite-parlementaire.html';
  const CAP_DECREE = 'https://www.legifrance.gouv.fr/jorf/id/JORFARTI000026227479';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.pm, hi: GOV.pm, url: DOC_GOV },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.minister, hi: GOV.minister, url: DOC_GOV },
    { kind: 'stat', key: 'se', icon: '📎', regime: 'se', lo: GOV.se, hi: GOV.se, url: DOC_GOV },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.parl, hi: GOV.parl, url: DOC_MP },
    { kind: 'stat', key: 'senator', icon: '🎩', regime: 'senator', lo: GOV.parl, hi: GOV.parl, url: DOC_SEN },
    { kind: 'gov', key: 'presAN', icon: '🔔', lo: 15335.89 * 12, hi: 15335.89 * 12, url: DOC_MP },
    { kind: 'gov', key: 'presSenat', icon: '🔔', lo: 15228.97 * 12, hi: 15228.97 * 12, url: DOC_SEN },
    { kind: 'gov', name: 'Emmanuel Moulin', role: 'bdf', lo: 315745, hi: 315745 + 6515 * 12, url: 'https://www.banque-france.fr/fr/rapport-annuel-2025-pdf' },
    { kind: 'gov', name: 'Olivier Sichel', role: 'cdc', lo: 400000, hi: 450000, url: 'https://www.caissedesdepots.fr/sites/cdc.fr/files/2026-04/Rapport_financier_2025_0.pdf' },
    { kind: 'gov', name: 'Marie-Anne Barbat-Layani', role: 'amf', lo: 231699, hi: 231699, url: 'https://www2.assemblee-nationale.fr/static/17/Annexes-DL/PLF2025-Jaunes/23-Jaune_AAPI.pdf' },
    { kind: 'corp', name: 'Stéphane Pallez', role: 'fdj', lo: 723187, hi: 1203187, url: 'https://www.fdjunited.com/wp-content/uploads/2026/04/AG2026Presentation.pdf' },
    { kind: 'corp', name: 'Bernard Fontana', role: 'edf', note: 'capped', lo: 450000, hi: 450000, url: 'https://www.edf.fr/sites/groupe/files/2026-04/2026-04-02-edf-urd-2025.pdf' },
    { kind: 'corp', name: 'Jean Castex', role: 'sncf', note: 'capped', lo: 450000, hi: 450000, url: 'https://www.groupe-sncf.com/medias-publics/2026-02/rapport-financier-annuel-2025-groupe-sncf.pdf' },
    { kind: 'corp', name: 'Marie-Ange Debon', role: 'laposte', note: 'capped', lo: 450000, hi: 450000, url: 'https://www.caissedesdepots.fr/sites/cdc.fr/files/2026-04/Rapport_financier_2025_0.pdf' },
    { kind: 'corp', name: 'Nicolas Dufourcq', role: 'bpi', note: 'capped', lo: 450000, hi: 450000, url: 'https://www.caissedesdepots.fr/sites/cdc.fr/files/2026-04/Rapport_financier_2025_0.pdf' },
    { kind: 'corp', name: 'Nicolas Maes', role: 'orano', note: 'capped', lo: 448625, hi: 448625, url: 'https://www.orano.group/finance-raa/2025/en/301/' },
    { kind: 'corp', name: 'Philippe Pascal', role: 'adp', note: 'capped', lo: 436849, hi: 436849, url: 'https://www.parisaeroport.fr/docs/default-source/groupe-fichiers/groupe-et-strategie/remuneration-mandataires-sociaux-au-titre-des-annees-2025-et-2026.pdf' },
    { kind: 'corp', name: 'Xavier Piechaczyk', role: 'ratp', note: 'capped', lo: 350000, hi: 450000, url: 'https://ratpgroup.com/api/media/rapport-financier-et-de-durabilite-annuel-2025---groupe-ratp.pdf' },
  ];

  const SRC = {
    rgdu: 'https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/reduction-generale-cotisation.html',
    rgduDecree: 'https://www.fhf.fr/sites/default/files/2026-06/D%C3%A9cret%202026-509%20RGDU.pdf',
    spRates: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24542',
    legisocial: 'https://www.legisocial.fr/reperes-sociaux/taux-cotisations-sociales-urssaf-2026.html',
    agirc: 'https://www.agirc-arrco.fr/storage/chiffrAA_2026_VF.pdf',
    deplaf: 'https://www.ffco.org/hausse-de-la-cotisation-patronale-deplafonnee-dassurance-vieillesse-au-1er-janvier-2026/',
    atmp: 'https://hayot-expertise.fr/blog/taux-at-mp-2026-tarification-reduire',
    ags: 'https://www.weblex.fr/weblex-actualite/ags-maintien-du-taux-au-1er-juillet-2026',
    am: 'https://calcunet.fr/articles/salaire-brut-net-alsace-moselle-2026/',
    vm: 'https://open.urssaf.fr/explore/dataset/table_taux_vmrr/',
    cog: 'https://www.insee.fr/fr/information/8740222',
    vmrr: 'https://www.banquedesterritoires.fr/versement-mobilite-regional-et-rural-le-decret-est-paru',
    plf2027: 'https://www.assemblee-nationale.fr/dyn/17/textes/l17b3210_projet-loi',
    bareme: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1419',
    qf: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2705',
    decote: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F34328',
    cehr: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F31130',
    pa: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2882',
    paCaf: 'https://www.caf.fr/allocataires/aides-et-demarches/droits-et-prestations/vie-professionnelle/la-prime-d-activite',
    bmaf: 'https://www.aide-sociale.fr/montant-allocation-familiale',
    smic: 'https://www.info.gouv.fr/actualite/le-smic-revalorise-le-1er-juin-2026',
    insee: 'https://www.insee.fr/fr/statistiques/fichier/8657156/ip2079.pdf',
    tva: 'https://www.service-public.gouv.fr/professionnels-entreprises/vosdroits/F23567',
    govPay: DOC_GOV,
    govTax: 'https://bofip.impots.gouv.fr/bofip/10890-PGP.html/identifiant=ACTU-2017-00142',
    govPension: 'https://questions.assemblee-nationale.fr/dyn/15/questions/QANR5L15QE16295.pdf',
    ircantec: 'https://www.ircantec.retraites.fr/employeur/cotisations/taux-et-assiette',
    mpPay: DOC_MP,
    senPay: DOC_SEN,
    capDecree: CAP_DECREE,
  };

  const bands = G => ({ T1: Math.min(G, PASS), T2: Math.min(Math.max(0, G - PASS), 7 * PASS), T4: Math.min(G, 4 * PASS) });
  const progressive = (x, br = P.brackets) => {
    let tot = 0, lo = 0;
    for (const [hi, r] of br) { if (x > lo) tot += (Math.min(x, hi) - lo) * r; lo = hi; }
    return tot;
  };
  const bracketRows = (x, br = P.brackets) => {
    const rows = []; let lo = 0;
    for (const [hi, r] of br) { if (x > lo) rows.push({ from: lo, to: Math.min(x, hi), r, amt: (Math.min(x, hi) - lo) * r }); lo = hi; }
    return rows;
  };
  const childParts = n => n <= 2 ? n / 2 : 1 + (n - 2);
  const partsOf = (couple, kids) => (couple ? 2 : 1) + childParts(kids) + (!couple && kids > 0 ? .5 : 0);

  function eeParts(G, s) {
    const { T1, T2, T4 } = bands(G), e = P.ee;
    return [
      { k: 'vieilPlaf', rate: e.vieilPlaf, base: T1 },
      { k: 'vieilDeplaf', rate: e.vieilDeplaf, base: G },
      { k: 'aaT1', rate: e.aaT1 + e.cegT1, base: T1 },
      { k: 'aaT2', rate: e.aaT2 + e.cegT2, base: T2 },
      { k: 'cet', rate: G > PASS ? e.cet : 0, base: T1 + T2 },
      { k: 'apec', rate: s.cadre ? e.apec : 0, base: T4 },
      { k: 'am', rate: s.region === 'am' ? e.am : 0, base: G },
    ].filter(p => p.rate > 0 && p.base > 0).map(p => ({ ...p, v: p.rate * p.base }));
  }

  function erParts(G, s) {
    const { T1, T2, T4 } = bands(G), e = P.er;
    return [
      { k: 'maladie', rate: e.maladie, base: G },
      { k: 'vieilPlaf', rate: e.vieilPlaf, base: T1 },
      { k: 'vieilDeplaf', rate: e.vieilDeplaf, base: G },
      { k: 'af', rate: e.af, base: G },
      { k: 'csa', rate: e.csa, base: G },
      s.size === 'big' ? { k: 'fnalBig', rate: e.fnalBig, base: G } : { k: 'fnalSmall', rate: e.fnalSmall, base: T1 },
      { k: 'atmp', rate: e.atmp, base: G },
      { k: 'chomage', rate: e.chomage, base: T4 },
      { k: 'ags', rate: e.ags, base: T4 },
      { k: 'aaT1', rate: e.aaT1 + e.cegT1, base: T1 },
      { k: 'aaT2', rate: e.aaT2 + e.cegT2, base: T2 },
      { k: 'cet', rate: G > PASS ? e.cet : 0, base: T1 + T2 },
      { k: 'apec', rate: s.cadre ? e.apec : 0, base: T4 },
      { k: 'dialogue', rate: e.dialogue, base: G },
      { k: 'formation', rate: s.size === 'micro' ? e.formMicro : e.formBig, base: G },
      { k: 'appr', rate: s.region === 'am' ? e.apprAM : e.appr, base: G },
      { k: 'peec', rate: s.size === 'big' ? e.peec : 0, base: G },
    ].filter(p => p.rate > 0 && p.base > 0).map(p => ({ ...p, v: p.rate * p.base }));
  }

  // RGDU coefficient: full at the SMIC, fading to the 2% floor at 3 SMIC, then nothing at all.
  function rgduCoef(G, s) {
    const r = P.rgdu, smic3 = 3 * r.smicYear;
    if (G <= 0 || G >= smic3) return 0;
    const td = s.size === 'big' ? r.tdelta.big : r.tdelta.small;
    const c = r.tmin + td * Math.pow(.5 * (smic3 / G - 1), r.p);
    // Payslips round c to 4 decimals; that's worth a few euros but makes the next-€ curve saw-toothed.
    return Math.min(r.tmin + td, c);
  }

  function finishEmployee(G, cot, csgBase) {
    const csgDed = P.csg.ded * csgBase, csgNd = P.csg.nd * csgBase, crds = P.csg.crds * csgBase;
    const taxable = G - cot - csgDed;
    const abat = G > 0 ? Math.min(taxable, Math.min(P.abat.max, Math.max(P.abat.min, P.abat.pct * taxable))) : 0;
    return { G, m: 0, cot, csgBase, csgDed, csgNd, crds, csg: csgDed + csgNd + crds, netSocial: G - cot - csgDed - csgNd - crds, taxable, abat, npi: Math.max(0, taxable - abat) };
  }

  function employeeSide(G, s) {
    const cot = eeParts(G, s).reduce((tot, p) => tot + p.v, 0);
    const csgBase = P.csg.base * Math.min(G, 4 * PASS) + Math.max(0, G - 4 * PASS);
    return finishEmployee(G, cot, csgBase);
  }

  // Household income tax after the quotient familial cap, décote and CEHR.
  function householdTax(rni, couple, kids) {
    const base = couple ? 2 : 1, isole = !couple && kids > 0;
    const parts = partsOf(couple, kids);
    const halves = Math.round((parts - base) * 2);
    const cap = isole ? P.qf.isoleFirst + Math.max(0, halves - 2) * P.qf.half : halves * P.qf.half;
    const withQf = parts * progressive(rni / parts);
    const plain = base * progressive(rni / base);
    const capped = halves > 0 && plain - withQf > cap;
    const beforeDecote = capped ? plain - cap : withQf;
    const D = couple ? P.decote.couple : P.decote.single;
    const decote = Math.max(0, Math.min(beforeDecote, D - P.decote.k * beforeDecote));
    const tax = beforeDecote - decote;
    const cehr = progressive(rni, couple ? P.cehr.couple : P.cehr.single);
    return { ir: (tax < P.minTax ? 0 : tax) + cehr, rni, parts, withQf, plain, capped, cap, beforeDecote, decote, cehr, small: tax > 0 && tax < P.minTax };
  }

  const bonif = m => {
    const p = P.pa;
    return m <= p.bonLo ? 0 : m >= p.bonHi ? p.bonMax : p.bonMax * (m - p.bonLo) / (p.bonHi - p.bonLo);
  };
  // 2nd person +50%, 3rd and 4th +30%, every child after the second +40%.
  function mfFor(couple, kids) {
    let k = couple ? 1.5 : 1;
    for (let i = 1; i <= Math.min(kids, 2); i++) k += (couple ? 2 : 1) + i === 2 ? .5 : .3;
    return P.pa.mf * (k + Math.max(0, kids - 2) * .4);
  }
  // Monthly prime d'activité from each worker's monthly net social pay, no housing aid, no other income.
  function primeActivite(earners, couple, kids) {
    const p = P.pa, E = earners.reduce((tot, m) => tot + m, 0);
    const af = kids < 2 ? 0 : kids <= 3 ? p.af[kids] : p.af[3] + (kids - 3) * p.afExtra;
    const mf = mfFor(couple, kids), bon = earners.reduce((tot, m) => tot + bonif(m), 0);
    const pa = mf + p.rate * E + bon - Math.max(mf, E + af);
    return { pa: E > 0 && pa >= p.min ? pa : 0, mf, af, E, bon };
  }

  // Your share of household taxes and benefits = the household with your pay minus the household without it.
  function incomeTaxes(u, s, env) {
    const couple = s.household === 'joint', kids = s.children, pu = couple ? env.partner : null;
    const hh = householdTax(u.npi + (pu ? pu.npi : 0), couple, kids);
    const without = couple ? householdTax(pu.npi, true, kids) : null;
    const ir = Math.max(0, hh.ir - (without ? without.ir : 0));
    let pa = 0, paDet = null;
    if (s.pa && s.regime !== 'minister') {
      const other = pu ? [pu.netSocial / 12] : [];
      const w = primeActivite([u.netSocial / 12, ...other], couple, kids);
      const wo = other.length ? primeActivite(other, couple, kids) : { pa: 0 };
      pa = 12 * (w.pa - wo.pa);
      paDet = { ...w, without: wo.pa };
    }
    return { ir, hh, without, pa, paDet };
  }

  // Members of government: CNAV + IRCANTEC on traitement + résidence, CSG/CRDS on all of it, taxed as a salary.
  function computeMinister(G, s, env, role = s.minRole) {
    const pb = G / 1.25, T1 = Math.min(pb, PASS), TB = Math.min(Math.max(0, pb - PASS), 7 * PASS), ir = P.ircantec;
    const cot = P.ee.vieilPlaf * T1 + P.ee.vieilDeplaf * pb + ir.eeA * T1 + ir.eeB * TB;
    const er = P.er.vieilPlaf * T1 + P.er.vieilDeplaf * pb + ir.erA * T1 + ir.erB * TB;
    const u = { ...finishEmployee(G, cot, G), pb, role };
    const tax = incomeTaxes(u, { ...s, regime: 'minister' }, env);
    const cost = G + er;
    const net = G - cot - u.csg - tax.ir;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return { G, cost, net, u, tax, rgdu: 0, erGross: er, vatShare, regime: 'minister',
      parts: { er, vm: 0, ee: cot, csg: u.csg, ir: tax.ir, pa: 0, vat } };
  }

  // Député or sénateur: own pension fund, CSG/CRDS on the full allowance, taxed as a salary.
  function computeParl(A, s, env, kind) {
    const d = GOV[kind], k = A / GOV.parl;
    const cot = 12 * k * (d.pension + d.other);
    const u = finishEmployee(A, cot, A);
    const tax = incomeTaxes(u, { ...s, pa: false }, env);
    return { net: A - cot - u.csg - tax.ir, taxes: cot + u.csg + tax.ir };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = employeeSide(G, s);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const ers = erParts(G, s);
    const erGross = ers.reduce((tot, p) => tot + p.v, 0);
    const coef = rgduCoef(G, s);
    const rgdu = coef * G;
    const er = Math.max(0, erGross - rgdu);
    const vm = s.size === 'micro' ? 0 : s.local / 100 * G;
    const cost = G + er + vm;
    const net = G - u.cot - u.csg - tax.ir + tax.pa;
    const vatShare = s.vatRate / (100 + s.vatRate);
    const vat = s.vat ? Math.max(0, net) * vatShare : 0;
    return {
      G, cost, net, u, tax, ers, erGross, rgdu, coef, vatShare,
      parts: { er, vm, ee: u.cot, csg: u.csg, ir: tax.ir, pa: -tax.pa, vat },
    };
  }

  const COMP_KEYS = ['er', 'vm', 'ee', 'csg', 'ir', 'pa', 'vat'];
  const COMP_COLORS = { er: 'var(--k-er)', vm: 'var(--k-vm)', ee: 'var(--k-ee)', csg: 'var(--k-csg)', ir: 'var(--k-ir)', pa: 'var(--k-pa)', vat: 'var(--k-vat)' };
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'vm', 'ee', 'csg', 'ir', 'pa', 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'vm', 'ee', 'csg', 'ir', 'pa'], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'csg', 'ir', 'pa'], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };
  const regionOf = dep => ['57', '67', '68'].includes(dep) ? 'am' : 'metro';

  function tips(x) {
    const s = x.s;
    const partRows = (list, label) => list.map(p => `<tr><td>${label(p.k)} ${pct(p.rate, p.rate < .001 ? 3 : 2)}${p.base !== (x.cur() && x.cur().G) ? ` × ${eur(p.base)}` : ''}</td><td>${eur(p.v)}</td></tr>`).join('');
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${r ? `<table>
        <tr><td>${t('tip.minBase')}</td><td>${eur(r.u.pb / 1.03)}</td></tr>
        <tr><td>${t('tip.minRes')}</td><td>${eur(r.u.pb - r.u.pb / 1.03)}</td></tr>
        <tr><td>${t('tip.minFn')}</td><td>${eur(r.G - r.u.pb)}</td></tr>
        <tr class="t"><td>${t('total')}</td><td>${eur(r.G)}</td></tr></table>` : ''}${sources('govPay')}`,
      cost: () => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>`,
      er: r => `<h4>${t('bd.minEr')}</h4><p>${t('tip.minEr')}</p>${r ? `<p><b>${eur(r.parts.er)}</b>${t('aYear')}</p>` : ''}${sources('govPension', 'ircantec')}`,
      ee: r => `<h4>${t('bd.minEe')}</h4><p>${t('tip.minEe')}</p>${r ? `<p><b>${eur(r.parts.ee)}</b>${t('aYear')}</p>` : ''}${sources('govPension', 'ircantec')}`,
      pa: () => `<h4>${t('comp.pa')}</h4><p>${t('tip.minPa')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay', 'govTax', 'govPension')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      factor14: () => `<h4>${t('tip.monthsPaid', 14)}</h4><p>${t('tip.f14')}</p>`,
      cadre: () => `<h4>${t('cadre')}</h4><p>${t('tip.cadre')}</p>${sources('agirc')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('qf')}`,
      paToggle: () => `<h4>${t('comp.pa')}</h4><p>${t('tip.paToggle')}</p>${sources('pa', 'paCaf')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('am')}`,
      vmRule: () => `<h4>${t('comp.vm')}</h4><p>${t('tip.vm', num(x.localMax(), 2) + '%')}</p>${sources('vm', 'vmrr')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size')}</p>${sources('spRates', 'rgdu')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          ${r.parts.vm > 0 ? `<tr><td>${t('comp.vm')}</td><td>${eur(r.parts.vm)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const G = r ? r.G : 0, list = r ? r.ers : erParts(1, s).map(p => ({ ...p, v: 0 }));
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>
          <table>${partRows(list, k => t('er.' + k))}
          ${r && r.rgdu > 0 ? `<tr><td>− ${t('bd.rgdu')}</td><td>−${eur(r.rgdu)}</td></tr>` : ''}
          ${r ? `<tr class="t"><td>${t('total')} ${pct(r.parts.er / G, 2)}</td><td>${eur(r.parts.er)}</td></tr>` : ''}</table>
          <p class="m">${t('tip.erM', pct(P.er.atmp, 2))}</p>
          ${sources('spRates', 'legisocial', 'agirc', 'deplaf', 'atmp', 'ags')}`;
      },
      rgdu: r => `<h4>${t('bd.rgdu')}</h4><p>${t('tip.rgdu', eur(3 * P.rgdu.smicYear), pct(P.rgdu.tmin + P.rgdu.tdelta[s.size === 'big' ? 'big' : 'small'], 2))}</p>
          ${r ? `<p>${t('tip.rgduCalc', pct(r.coef, 2), eur(r.G), eur(r.rgdu))}</p>` : ''}<p class="m">${t('tip.rgduM', eur(.02 * 3 * P.rgdu.smicYear))}</p>${sources('rgdu', 'rgduDecree')}`,
      vm: r => `<h4>${t('comp.vm')}</h4><p>${t('tip.vm', num(x.localMax(), 2) + '%')}</p>
          ${r ? `<p>${num(s.local, 2)}% × ${eur(r.G)} = <b>${eur(r.parts.vm)}</b>${s.size === 'micro' ? ' · ' + t('vmNotDue') : ''}</p>` : ''}${sources('vm', 'cog', 'vmrr')}`,
      ee: r => r ? `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p><table>${partRows(eeParts(r.G, s), k => t('ee.' + k))}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.parts.ee)}</td></tr></table>${sources('spRates', 'agirc')}`
        : `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${sources('spRates', 'agirc')}`,
      csg: r => `<h4>${t('comp.csg')}</h4><p>${t('tip.csg')}</p>${r ? `<table>
          <tr><td>${t('tip.csgBase')}</td><td>${eur(r.u.csgBase)}</td></tr>
          <tr><td>${t('tip.csgDed')} 6,8%</td><td>${eur(r.u.csgDed)}</td></tr>
          <tr><td>${t('tip.csgNd')} 2,4%</td><td>${eur(r.u.csgNd)}</td></tr>
          <tr><td>CRDS 0,5%</td><td>${eur(r.u.crds)}</td></tr>
          <tr class="t"><td>${t('total')}</td><td>${eur(r.parts.csg)}</td></tr></table>` : ''}${sources('spRates')}`,
      netSocial: r => `<h4>${t('bd.netSocial')}</h4><p>${t('tip.netSocial', r ? ` <b>${eur(r.u.netSocial)}</b>, ${eur(r.u.netSocial / 12)}${t('aMonth')}` : '')}</p>`,
      taxable: r => `<h4>${t('bd.taxable')}</h4><p>${t('tip.taxable', r ? ` = <b>${eur(r.u.taxable)}</b>` : '')}</p>`,
      abat: r => `<h4>${t('bd.abat')}</h4><p>${t('tip.abat', eur(P.abat.min), eur(P.abat.max), r ? `: <b>${eur(r.u.abat)}</b>` : '')}</p>${sources('plf2027')}`,
      npi: r => `<h4>${t('bd.npi')}</h4><p>${t('tip.npi', r ? ` = <b>${eur(r.u.npi)}</b>` : '')}</p>`,
      ir: r => {
        if (!r) return `<h4>${t('comp.ir')}</h4><p>${t('tip.irShort')}</p>${sources('plf2027', 'bareme')}`;
        const h = r.tax.hh, per = h.rni / h.parts;
        const br = bracketRows(per).filter(b => b.r > 0).map(b => `<tr><td>${eur(b.from)} – ${eur(b.to)} × ${pct(b.r, 0)}</td><td>${eur(b.amt)}</td></tr>`).join('');
        return `<h4>${t('comp.ir')}</h4><p class="m">${t('tip.irM')}</p><table>
          <tr><td>${t('tip.irRni')}</td><td>${eur(h.rni)}</td></tr>
          <tr><td>÷ ${t('tip.irParts', num(h.parts, 1))}</td><td>${eur(per)}</td></tr>
          ${br}
          <tr class="t"><td>× ${num(h.parts, 1)}</td><td>${eur(h.withQf)}</td></tr>
          ${h.capped ? `<tr><td>${t('tip.irCap', eur(h.cap))}</td><td>${eur(h.beforeDecote)}</td></tr>` : ''}
          ${h.decote > 0 ? `<tr><td>− ${t('tip.decote')}</td><td>−${eur(h.decote)}</td></tr>` : ''}
          ${h.small ? `<tr><td>${t('tip.under61')}</td><td>0</td></tr>` : ''}
          ${h.cehr > 0 ? `<tr><td>+ CEHR</td><td>${eur(h.cehr)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.irHousehold')}</td><td>${eur(h.ir)}</td></tr>
          ${r.tax.without ? `<tr><td>− ${t('tip.irWithout')}</td><td>−${eur(r.tax.without.ir)}</td></tr><tr class="t"><td>${t('tip.irYours')}</td><td>${eur(r.parts.ir)}</td></tr>` : ''}
          </table>${sources('plf2027', 'bareme', 'qf', 'decote', 'cehr')}`;
      },
      pa: r => {
        const d = r && r.tax.paDet;
        return `<h4>${t('comp.pa')}</h4><p>${t('tip.pa')}</p>${d ? `<table>
          <tr><td>${t('tip.paMf')}</td><td>${eur2(d.mf)}</td></tr>
          <tr><td>+ 59,85% × ${eur2(d.E)}</td><td>${eur2(P.pa.rate * d.E)}</td></tr>
          <tr><td>+ ${t('tip.paBon')}</td><td>${eur2(d.bon)}</td></tr>
          <tr><td>− ${t('tip.paRes')}${d.af ? ` (${t('tip.paAf', eur2(d.af))})` : ''}</td><td>−${eur2(Math.max(d.mf, d.E + d.af))}</td></tr>
          <tr class="t"><td>${t('tip.paMonth')}</td><td>${eur2(d.pa)}</td></tr>
          ${d.without ? `<tr><td>− ${t('tip.paWithout')}</td><td>−${eur2(d.without)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.paYear')}</td><td>${eur(-r.parts.pa)}</td></tr></table>` : ''}
          <p class="m">${t('tip.paM')}</p>${sources('pa', 'paCaf', 'bmaf')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('tva')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const s = x.s, p = r.parts, u = r.u, c = x.commune();
    const L = [{ op: '', k: 'gross', label: t(r.regime === 'minister' ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    if (r.regime === 'minister') L.push({ op: '+', k: 'er', label: t('bd.minEr'), v: p.er, tax: p.er, cls: 'sub' });
    else {
      L.push({ op: '+', k: 'er', label: t('comp.er'), v: r.erGross, tax: r.erGross, cls: 'sub' });
      if (r.rgdu > 0) L.push({ op: '−', k: 'rgdu', label: t('bd.rgdu'), v: r.rgdu, tax: -r.rgdu, cls: 'sub' });
      if (p.vm > 0) L.push({ op: '+', k: 'vm', label: `${t('comp.vm')} (${num(s.local, 2)}%${c ? ', ' + c.name : ''})`, v: p.vm, tax: p.vm, cls: 'sub' });
    }
    L.push(
      { op: '=', k: 'cost', label: t(r.regime === 'minister' ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(r.regime === 'minister' ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t(r.regime === 'minister' ? 'bd.minEe' : 'comp.ee'), v: p.ee, tax: p.ee },
      { op: '−', k: 'csg', label: t('comp.csg'), v: p.csg, tax: p.csg },
      { op: '=', k: 'netSocial', label: t('bd.netSocial'), v: u.netSocial, cls: 'tot' },
      { op: '+', k: 'taxable', label: t('bd.csgNd'), v: u.csgNd + u.crds, cls: 'sub' },
      { op: '=', k: 'taxable', label: t('bd.taxable'), v: u.taxable, cls: 'sub' },
      { op: '−', k: 'abat', label: t('bd.abat'), v: u.abat, cls: 'sub' },
      { op: '=', k: 'npi', label: t('bd.npi'), v: u.npi, cls: 'sub' },
      { op: '', k: 'netSocial', label: t('bd.netSocial'), v: u.netSocial },
      { op: '−', k: 'ir', label: t('comp.ir'), v: p.ir, tax: p.ir },
    );
    if (Math.abs(p.pa) > .5) L.push({ op: p.pa < 0 ? '+' : '−', k: 'pa', label: t('comp.pa'), v: Math.abs(p.pa), tax: p.pa });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-wage zone: from the SMIC to where the RGDU ends at 3 SMIC.
  function trap(x) {
    const s = x.s, band = [REF_WAGES[0].m * 12 / s.factor, 3 * P.rgdu.smicYear / s.factor];
    const paEnd = !s.pa ? null : x.firstMonthly(m => m * s.factor > P.rgdu.smicYear && compute(m * s.factor, s, x.env()).tax.pa <= 0, 1000, 20000);
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), paEnd ? x.fmtM(paEnd, 10) + x.perUnit() : null, eur(.02 * 3 * P.rgdu.smicYear)] };
  }

  function top(x) {
    const s = x.s, couple = s.household === 'joint', pn = couple ? x.env().partner.npi : 0, parts = partsOf(couple, s.children);
    const at = x.firstMonthly(m => (employeeSide(m * s.factor, s).npi + pn) / parts > P.brackets[3][0]);
    if (!at) return null;
    const cehr = x.firstMonthly(m => employeeSide(m * s.factor, s).npi + pn > (couple ? P.cehr.couple : P.cehr.single)[0][0]);
    return { at, text: [x.fmtM(at, 50) + x.perUnit(), cehr ? x.fmtM(cehr, 50) + x.perUnit() : null, eur(P.brackets[3][0]), num(parts, 1)] };
  }

  return {
    GAPS: ['plf', 'rgdu', 'atmp', 'vm', 'pa', 'paAf', 'kids', 'cehr', 'ministers', 'parl', 'companies', 'amf', 'wages', 'notIncl'],
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    regions: REGIONS, sizes: SIZES, minRoles: MIN_ROLES, factors: [12, 13, 14], factorDigits: 0, vatStandard: 20,
    features: { cadre: true, pa: true, partsHint: true },
    state: { salary: 3000, factor: 12, minRole: 'minister', cadre: false, pa: true, commune: 'Paris|75', region: 'metro', local: 3.2, vatRate: 20, size: 'small' },
    urlFields: {
      months: ['factor', 'num', [12, 13, 14]], cadre: ['cadre', 'bool'], pa: ['pa', 'bool'],
      commune: ['commune', 'str'], region: ['region', 'str', REGIONS], vm: ['local', 'num'],
      size: ['size', 'str', SIZES], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'vmLabel', tip: 'vmRule', digits: 2, step: .01, range: list => [0, list.length ? Math.max(...list.map(c => c.rate)) : 3.2], notDue: s => s.size === 'micro', hideInMinister: true },
    parseCommunes: list => list.map(([name, rate, dep]) => ({ name, rate, sub: dep, id: name + '|' + dep, region: regionOf(dep) })),
    communeLabel: c => `${c.name} (${c.sub})`,
    communeTag: c => `${t('vmShort')} ${num(c.rate, 2)}%`,
    communeHint: c => `${t('region.' + c.region)} · ${t('vmShort')} ${num(c.rate, 2)}%`,
    partsHint: x => t('partsHint', num(x.cur() ? x.cur().tax.hh.parts : partsOf(x.s.household === 'joint', x.s.children), 1)),
    minSalary: role => Math.round(GOV[role]),
    env: s => ({ partner: employeeSide(Math.max(0, s.partnerGross || 0), { ...s, cadre: false }) }),
    compute,
    own: (p, plain, env) => ({ net: (p.regime === 'mp' || p.regime === 'senator' ? computeParl(p.lo, plain, env, p.regime) : computeMinister(p.lo, plain, env, p.regime)).net, allow: 0 }),
    segLabels: { pa: 'paLost' }, recvLabels: { pa: 'paReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + (p.note || p.role || p.key),
    polSrc: p => t('src.pol.' + (p.role || p.key)),
    polNoteLink: 'capDecree',
    refKeys: ['er', 'rgdu', 'ee', 'taxable', 'qf', 'pa', 'vm', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
