// Georgian income tax on inherited and gifted property for 2026 (Tax Code art. 81-82), paid by each heir. Loaded by ../inheritance.html?country=ge.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const RATE = .20, LINE34 = 150000, GIFT = 1000;
  const RELS = ['partner', 'child', 'parent', 'sibling', 'grandparent', 'uncle', 'other'];
  const LINE12 = ['partner', 'child', 'parent', 'sibling'];
  const LINE3 = ['grandparent', 'uncle'];
  const COLORS = { partner: '--r-partner', child: '--r-child', parent: '--r-parent', sibling: '--r-sibling', grandparent: '--r-grandchild', uncle: '--r-relative', other: '--r-other' };
  const SOURCES = [
    ['code', 'https://matsne.gov.ge/en/document/view/1043717'],
    ['pwc', 'https://taxsummaries.pwc.com/georgia/individual/taxes-on-personal-income'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);

  function duty(inp, rel) {
    const share = pos(inp.share), prior = pos(inp.prior);
    const lines = [{ label: t('line.share'), amt: share }];
    let free = 0;
    if (LINE12.includes(rel)) {
      lines.push({ label: t('line.close'), tax: 0, cls: 'sub' });
      return { tax: 0, lines, total: share, avg: 0 };
    }
    if (LINE3.includes(rel)) {
      free = Math.min(share, Math.max(0, LINE34 - prior));
      lines.push({ label: t('line.free34'), amt: -free, cls: 'sub' });
    } else if (inp.gift) {
      free = Math.min(share, Math.max(0, GIFT - prior));
      lines.push({ label: t('line.gift'), amt: -free, cls: 'sub' });
    }
    const taxed = share - free, tax = taxed * RATE;
    lines.push({ label: t('line.pit'), amt: taxed, rate: RATE, tax });
    return { tax, lines, total: share, avg: share > 0 ? tax / share : 0 };
  }

  return {
    SOURCES,
    currency: 'GEL',
    nextStep: 1000,
    state: { share: 200000, rel: 'uncle', gift: false, prior: 0 },
    urlFields: { share: ['share', 'num'], rel: ['rel', 'str', RELS], gift: ['gift', 'bool'], prior: ['prior', 'num'] },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'shareLabel', hint: 'shareHint', step: 10000 },
      { key: 'rel', type: 'segCol', label: 'heirIs', options: RELS, optLabel: 'rel.' },
      { key: 'gift', type: 'check', label: 'gift', hint: 'giftHint' },
      { key: 'prior', type: 'money', label: 'prior', hint: 'priorHint', more: true, step: 10000, show: s => !LINE12.includes(s.rel) },
    ],
    totalLabel: 'totalTax',
    compute: s => duty(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(${COLORS[k]})`, me: k === s.rel, ...duty(s, k) })),
    },
    chart: {
      xMax: 1000000, step: 10000, yMax: 25,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.gift, s.prior],
      lines: s => [
        { label: t('chartClose'), color: '--r-partner', me: LINE12.includes(s.rel), f: () => 0 },
        { label: t('chartLine34'), color: '--r-relative', me: LINE3.includes(s.rel), f: x => duty({ share: x, prior: s.prior }, 'uncle').avg },
        { label: t('rel.other'), color: '--r-other', me: s.rel === 'other', f: x => duty({ share: x, prior: s.prior, gift: s.gift }, 'other').avg },
      ],
    },
    ref: () => [
      { table: { head: [t('relation'), t('refFree'), t('refRate')], rows: [
        { to: t('refLine12'), cells: [{ r: 0, txt: t('refAll') }, { r: 0, txt: '0%' }] },
        { to: t('refLine34'), cells: [{ r: 0, txt: eur(LINE34) }, { r: RATE, txt: pct(RATE, 0) }] },
        { to: t('refOther'), cells: [{ r: RATE, txt: t('refGiftOnly', eur(GIFT)) }, { r: RATE, txt: pct(RATE, 0) }] },
      ] } },
      { h: t('refRulesH'), list: ['close', 'line34', 'other', 'year', 'partner', 'notary'].map(k => t('rule.' + k)), note: t('refNote') },
    ],
  };
};
