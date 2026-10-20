// Danish boafgift for deaths in 2026, by relationship. Loaded by ../inheritance.html?country=dk.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  const BUND = 392300;
  const BO = .15, EXTRA = .25;
  const RELS = ['partner', 'cohab', 'child', 'parent', 'sibling', 'nephew', 'other'];
  const COLORS = { partner: 'partner', cohab: 'relative', child: 'child', parent: 'grandchild', sibling: 'sibling', nephew: 'nephew', other: 'other' };
  const SOURCES = [
    ['rsm', 'https://www.rsm.global/denmark/sites/default/files/media/ePublikationer/Satser%20og%20bel%C3%B8bsgr%C3%A6nser%2020252026%20-%20RSM%20-%20NET_0.pdf'],
    ['aeldre', 'https://www.aeldresagen.dk/viden-og-raadgivning/vaerd-at-vide/a/arv-testamente-doedsbo-gaver/boafgift/boafgift-og-bundfradrag'],
    ['skm', 'https://skm.dk/media/apqahpml/faktaark-9-boafgift.pdf'],
    ['d24', 'https://dokument24.dk/testamente/boafgift'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  // Siblings who lived with the deceased for two years count as cohabitants.
  const close = (inp, rel) => rel === 'cohab' || rel === 'child' || rel === 'parent' || (rel === 'sibling' && inp.lived);

  // The allowance belongs to the estate, so heirs sharing it equally each use their part.
  function inheritanceTax(inp, rel) {
    const share = pos(inp.share);
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (rel === 'partner') {
      lines.push({ label: t('line.partner'), tax: 0, cls: 'sub' });
      return { tax: 0, bo: 0, extra: 0, lines, total: share, avg: 0 };
    }
    const allow = BUND * (inp.uskiftet ? 2 : 1) / Math.max(1, inp.heirs || 1);
    const used = Math.min(share, allow);
    lines.push({ label: t('line.allow', eur(allow)), amt: -used, cls: 'sub' });
    const bo = BO * (share - used);
    lines.push({ label: t('line.bo'), amt: share - used, rate: BO, tax: bo });
    let extra = 0;
    if (!close(inp, rel)) {
      extra = EXTRA * (share - bo);
      lines.push({ label: t('line.extra'), amt: share - bo, rate: EXTRA, tax: extra });
    }
    return { tax: bo + extra, bo, extra, lines, total: share, avg: share > 0 ? (bo + extra) / share : 0 };
  }

  const plain = { share: 0, heirs: 1, uskiftet: false, lived: false };

  return {
    SOURCES, currency: 'DKK', nextStep: 1000,
    GAPS: ['bund', 'nephew', 'sibling2027', 'closeList', 'heirsEqual', 'insurance', 'business'],
    state: { share: 1000000, rel: 'child', heirs: 1, uskiftet: false, lived: false },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], heirs: ['heirs', 'num'],
      usk: ['uskiftet', 'bool'], lived: ['lived', 'bool'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf', step: 50000 },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'lived', type: 'check', label: 'lived', hint: 'livedHint', show: s => s.rel === 'sibling' },
      { key: 'heirs', type: 'stepper', min: 1, label: 'heirs', hint: 'heirsHint', show: s => s.rel !== 'partner' },
      { key: 'uskiftet', type: 'check', label: 'uskiftet', hint: 'uskiftetHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => {
      const r = inheritanceTax(s, s.rel);
      return { ...r, segs: [
        { k: 'bo', label: t('seg.bo'), v: r.bo, color: 'var(--k-tax)' },
        { k: 'extra', label: t('seg.extra'), v: r.extra, color: 'var(--k-rate)' },
      ] };
    },
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${COLORS[k]})`, me: k === s.rel, ...inheritanceTax(s, k) })),
    },
    chart: {
      xMax: 5000000, step: 25000, yMax: 40,
      title: () => t('chartTitle'),
      deps: s => [s.rel, s.heirs, s.uskiftet, s.lived],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + COLORS[k], me: k === s.rel, f: x => inheritanceTax({ ...plain, heirs: s.heirs, uskiftet: s.uskiftet, lived: s.lived, share: x }, k).avg })),
    },
    ref: () => [
      { table: { head: [t('inh.upTo'), t('relShort.close'), t('relShort.other')], rows: [
        { to: eur(BUND), cells: [{ r: 0, txt: '0%' }, { r: EXTRA, txt: pct(EXTRA, 0) }] },
        { to: t('inh.above'), cells: [{ r: BO, txt: pct(BO, 0) }, { r: .3625, txt: pct(.3625, 2) }] },
      ] }, note: t('refTableNote') },
      { h: t('refWhoH'), list: ['partner', 'close', 'other', 'gifts', 'insurance', 'y2027'].map(k => t('who.' + k)), note: t('refNote') },
    ],
  };
};
