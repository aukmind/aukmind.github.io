// Estonia: no inheritance or gift tax. Loaded by ../inheritance.html?country=ee.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'cohab', 'child', 'grandchild', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', cohab: 'relative', child: 'child', grandchild: 'grandchild', parent: 'parent', sibling: 'sibling', other: 'other' };
  const SOURCES = [
    ['emta', 'https://emta.ee/eraklient/maksud-ja-tasumine/muud-maksud/parandvara'],
    ['tums', 'https://www.riigiteataja.ee/akt/TuMS'],
    ['pars', 'https://www.riigiteataja.ee/akt/PärS'],
    ['court', 'https://www.emta.ee/uudised/paritud-vara-voorandamisel-saadud-kasu-maksustamine-taiendatud-10062015'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
    ];
    if (rel === 'cohab') lines.push({ label: t('line.cohab'), cls: 'sub' });
    lines.push({ label: t('line.cost'), cls: 'sub' });
    return { tax: 0, lines, total: share, avg: 0 };
  }

  return {
    GAPS: ['cost', 'fees', 'employer', 'abroad'],
    SOURCES, currency: 'EUR', nextStep: 100,
    state: { share: 100000, rel: 'child' },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 5000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 1000000, step: 10000, yMax: 10,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['none', 'gifts', 'cost', 'home', 'notary', 'heirs', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
