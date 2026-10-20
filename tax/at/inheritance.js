// Austria: no inheritance tax since August 2008. Inherited land still pays real estate transfer tax. Loaded by ../inheritance.html?country=at.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'cohab', 'child', 'grandchild', 'parent', 'sibling', 'nephew', 'other'];
  const COLORS = { partner: 'partner', cohab: 'relative', child: 'child', grandchild: 'grandchild', parent: 'parent', sibling: 'sibling', nephew: 'nephew', other: 'other' };
  const FAMILY = ['partner', 'cohab', 'child', 'grandchild', 'parent', 'sibling', 'nephew'];
  // GrEStG §7(1)Z2a: every acquisition on death is "unentgeltlich", so every heir gets the step rates.
  const STEPS = [[250000, .005], [400000, .02], [Infinity, .035]];
  const FEE = .011;
  const SOURCES = [
    ['vfgh', 'https://de.wikipedia.org/wiki/Erbschaftssteuer_in_%C3%96sterreich'],
    ['grest7', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10004531&Paragraf=7'],
    ['grest3', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10004531&Paragraf=3'],
    ['usp', 'https://www.usp.gv.at/themen/steuern-finanzen/weitere-steuern-und-abgaben/grunderwerbsteuer.html'],
    ['ggg', 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10002667'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  function steps(v) {
    let tax = 0, lo = 0;
    for (const [hi, r] of STEPS) { if (v > lo) tax += (Math.min(v, hi) - lo) * r; lo = hi; }
    return tax;
  }

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const land = Math.min(pos(inp.land), share), prior = pos(inp.prior);
    const exempt = rel === 'partner' && !!inp.home;
    const grest = land && !exempt ? steps(prior + land) - steps(prior) : 0;
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share - land, rate: 0, tax: 0 },
    ];
    if (land) {
      lines.push({ label: t(exempt ? 'line.homeFree' : 'line.grest'), amt: land, rate: land ? grest / land : 0, tax: grest });
      if (prior && !exempt) lines.push({ label: t('line.prior', eur(prior)), cls: 'sub' });
      lines.push({ label: t(FAMILY.includes(rel) ? 'line.feeFamily' : 'line.fee', eur(land * FEE)), cls: 'sub' });
    }
    if (rel === 'cohab') lines.push({ label: t('line.cohab'), cls: 'sub' });
    return { tax: grest, lines, total: share, avg: share ? grest / share : 0 };
  }

  return {
    SOURCES, currency: 'EUR', nextStep: 100,
    GAPS: ['fee', 'value', 'home150', 'business', 'prior', 'unsourced', 'vfgh', 'abroad'],
    state: { share: 300000, rel: 'child', land: 0, home: false, prior: 0 },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], land: ['land', 'num'], home: ['home', 'bool'], prior: ['prior', 'num'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'land', type: 'money', label: 'land', hint: 'landHint', step: 10000 },
      { key: 'home', type: 'check', label: 'home', hint: 'homeHint', show: s => s.rel === 'partner' && pos(s.land) > 0 },
      { key: 'prior', type: 'money', label: 'prior', hint: 'priorHint', step: 10000, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    // Average transfer tax on an inherited property, by its value.
    chart: {
      xMax: 2000000, step: 20000, yMax: 4,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.home, s.prior],
      lines: s => {
        const free = s.rel === 'partner' && !!s.home;
        return [
          { label: t('chart.heir'), color: '--r-child', me: !free, f: x => (steps(pos(s.prior) + x) - steps(pos(s.prior))) / x },
          { label: t('chart.home'), color: '--r-partner', me: free, f: () => 0 },
        ];
      },
    },
    ref: () => [
      { h: t('refGrestH'), table: { head: [t('inh.upTo'), t('inh.rate')], rows: STEPS.map(([hi, r]) => ({
        to: hi === Infinity ? t('inh.above') : eur(hi), cells: [{ r, txt: pct(r, r * 1000 % 10 ? 1 : 0) }],
      })) }, note: t('refGrestNote') },
      { h: t('refNoneH'), list: ['abolished', 'gifts', 'home', 'fee', 'farm', 'insurance', 'abroad'].map(k => t('who.' + k)) },
    ],
  };
};
