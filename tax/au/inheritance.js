// Australia: no inheritance, estate or gift tax since 1979. Super death benefits to non-dependants are taxed. Loaded by ../inheritance.html?country=au.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RELS = ['partner', 'minor', 'child', 'grandchild', 'parent', 'sibling', 'other'];
  const COLORS = { partner: 'partner', minor: 'step', child: 'child', grandchild: 'grandchild', parent: 'parent', sibling: 'sibling', other: 'other' };
  // Spouse, de facto, child under 18 and financial dependants receive super death benefits tax-free.
  const DEPENDANT = { partner: true, minor: true };
  const SUPER = { tax: .15, medicare: .02 };
  const SOURCES = [
    ['pwc', 'https://taxsummaries.pwc.com/australia/individual/other-taxes'],
    ['superWiki', 'https://en.wikipedia.org/wiki/Superannuation_in_Australia'],
    ['history', 'https://en.wikipedia.org/wiki/Inheritance_tax'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), sup = pos(inp.sup);
    const dep = DEPENDANT[rel] || inp.dependant;
    const rate = dep ? 0 : SUPER.tax + (inp.estate ? 0 : SUPER.medicare);
    const tax = rate * sup, total = share + sup;
    const lines = [
      { label: t('inh.line.share'), amt: share },
      { label: t('line.none'), amt: share, rate: 0, tax: 0 },
    ];
    if (sup > 0) {
      lines.push({ label: t('line.super'), amt: sup });
      lines.push({ label: t(dep ? 'line.superDep' : inp.estate ? 'line.superEstate' : 'line.superDirect'), amt: sup, rate, tax });
    }
    lines.push({ label: t('line.cgt'), cls: 'sub' });
    return { tax, lines, total, avg: total > 0 ? tax / total : 0 };
  }

  return {
    GAPS: ['noWeb', 'taxable', 'untaxed', 'dependant', 'estate', 'pension', 'cgt', 'abroad'],
    SOURCES, currency: 'AUD', nextStep: 150000,
    state: { share: 500000, sup: 300000, rel: 'child', dependant: false, estate: false },
    urlFields: { share: ['share', 'num'], super: ['sup', 'num'], rel: ['rel', 'str', RELS], dep: ['dependant', 'bool'], estate: ['estate', 'bool'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', hint: 'hint.share', step: 50000 },
      { key: 'sup', type: 'money', label: 'superOf', hint: 'hint.super', step: 25000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'dependant', type: 'check', label: 'dependant', hint: 'hint.dependant', show: s => !DEPENDANT[s.rel], more: true },
      { key: 'estate', type: 'check', label: 'viaEstate', hint: 'hint.estate', show: s => !DEPENDANT[s.rel] && !s.dependant, more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax({ ...s, dependant: false }, k) })),
    },
    chart: {
      xMax: 2000000, step: 50000, yMax: 20,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.estate, s.dependant],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ share: 0, sup: x, estate: s.estate }, k).avg })),
    },
    ref: () => [
      { h: t('refNoneH'), list: ['abolished', 'cgt', 'home', 'super', 'probate', 'abroad'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
