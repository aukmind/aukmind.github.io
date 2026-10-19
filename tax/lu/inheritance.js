// Luxembourg inheritance tax (droits de succession) for deaths in 2026, by relationship. Loaded by ../inheritance.html?country=lu.
window.TAX_INHERIT = ({ t, eur, pct }) => {
  // Base rates on the legal share and on what a will adds beyond it.
  const BASE = {
    sibling: [.06, .15],
    nephew: [.09, .15],
    relative: [.10, .15],
    other: [.15, .15],
  };
  const DIRECT = { preciput: .025, surplus: .05 };
  // Each heir's whole taxable share is raised by a tenth per step once it passes 10 000 (loi du 13 juin 1984).
  const MAJ = [[10000, 0], [20000, 1], [30000, 2], [40000, 3], [50000, 4], [75000, 5], [100000, 6], [150000, 7], [200000, 8],
    [250000, 9], [380000, 12], [500000, 13], [620000, 14], [750000, 15], [870000, 16], [1000000, 17], [1250000, 18],
    [1500000, 19], [1750000, 20], [Infinity, 22]];
  const RELS = ['partner', 'child', 'grandchild', 'sibling', 'nephew', 'relative', 'other'];
  const SOURCES = [
    ['guichet', 'https://guichet.public.lu/fr/citoyens/fiscalite/heritage-donation/succession/droits-succession-heritage.html'],
    ['pfi', 'https://pfi.public.lu/fr/citoyen/successions/tarif.html'],
  ];
  const pos = v => Math.max(0, Number(v) || 0);
  const majOf = x => MAJ.find(([hi]) => x <= hi)[1] / 10;

  function inheritanceTax(inp, rel) {
    const share = pos(inp.share), gifts = pos(inp.gifts), life = pos(inp.life);
    const total = share + gifts + life;
    const lines = [{ label: t('inh.line.share'), amt: share }];
    if (gifts > 0) lines.push({ label: t('line.gifts'), amt: gifts, cls: 'sub' });
    if (life > 0) lines.push({ label: t('line.life'), amt: life, cls: 'sub' });

    // [amount, base rate, label] for each taxed slice of the share.
    let parts = [];
    if (rel === 'partner' && !inp.recent) {
      lines.push({ label: t('line.partner'), tax: 0, cls: 'sub' });
    } else if (rel === 'child' || (rel === 'grandchild' && inp.rep)) {
      const p = Math.min(pos(inp.preciput), total), sp = Math.min(pos(inp.surplus), total - p);
      lines.push({ label: t('line.direct'), amt: total - p - sp, tax: 0, cls: 'sub' });
      parts = [[p, DIRECT.preciput, 'line.preciput'], [sp, DIRECT.surplus, 'line.surplus']];
    } else if (rel === 'grandchild') {
      parts = [[total, DIRECT.preciput, 'line.grandWill']];
    } else if (rel === 'partner' || rel === 'other') {
      parts = [[total, BASE.other[0], rel === 'partner' ? 'line.recent' : 'line.other']];
    } else {
      const b = Math.min(pos(inp.beyond), total);
      parts = [[total - b, BASE[rel][0], 'line.legal'], [b, BASE[rel][1], 'line.beyond']];
    }
    parts = parts.filter(([a]) => a > 0);

    const taxable = parts.reduce((tot, [a]) => tot + a, 0);
    const m = majOf(taxable);
    if (m > 0) lines.push({ label: t('line.maj', Math.round(m * 10), eur(taxable)), cls: 'sub' });
    let tax = 0;
    for (const [a, r, key] of parts) {
      const rate = r * (1 + m);
      lines.push({ label: t(key, pct(r, r * 100 % 1 ? 1 : 0)), amt: a, rate, tax: a * rate });
      tax += a * rate;
    }
    return { tax, lines, total, taxable, m, avg: total > 0 ? tax / total : 0 };
  }

  const plain = { share: 0, rep: false, recent: false, preciput: 0, surplus: 0, beyond: 0, gifts: 0, life: 0 };
  const groups = ['sibling', 'nephew', 'relative', 'other'];
  function majTable() {
    let lo = 0;
    return MAJ.map(([hi, k]) => {
      const row = {
        to: hi === Infinity ? `> ${eur(lo)}` : `${eur(lo)} – ${eur(hi)}`,
        cells: [{ r: 0, txt: k ? `+${k}/10` : '–' }, ...groups.map(g => { const r = BASE[g][0] * (1 + k / 10); return { r, txt: pct(r, 1) }; })],
      };
      lo = hi;
      return row;
    });
  }

  return {
    SOURCES,
    state: { share: 200000, rel: 'child', rep: false, recent: false, preciput: 0, surplus: 0, beyond: 0, gifts: 0, life: 0 },
    urlFields: {
      share: ['share', 'num'], rel: ['rel', 'str', RELS], rep: ['rep', 'bool'], recent: ['recent', 'bool'],
      pre: ['preciput', 'num'], sur: ['surplus', 'num'], beyond: ['beyond', 'num'], gifts: ['gifts', 'num'], life: ['life', 'num'],
    },
    moreLabel: 'more',
    fields: [
      { key: 'share', type: 'money', label: 'inh.shareOf' },
      { key: 'rel', type: 'segCol', label: 'inh.youAre', options: RELS, optLabel: 'rel.' },
      { key: 'recent', type: 'check', label: 'recent', hint: 'recentHint', show: s => s.rel === 'partner' },
      { key: 'rep', type: 'check', label: 'rep', hint: 'repHint', show: s => s.rel === 'grandchild' },
      { key: 'preciput', type: 'money', label: 'preciput', hint: 'preciputHint', show: s => s.rel === 'child' || (s.rel === 'grandchild' && s.rep) },
      { key: 'surplus', type: 'money', label: 'surplus', hint: 'surplusHint', show: s => s.rel === 'child' || (s.rel === 'grandchild' && s.rep) },
      { key: 'beyond', type: 'money', label: 'beyond', hint: 'beyondHint', show: s => ['sibling', 'nephew', 'relative'].includes(s.rel) },
      { key: 'gifts', type: 'money', label: 'gifts', hint: 'giftsHint', more: true },
      { key: 'life', type: 'money', label: 'life', hint: 'lifeHint', more: true },
    ],
    totalLabel: 'totalTax',
    compute: s => inheritanceTax(s, s.rel),
    compare: {
      title: 'otherRels', head: 'relation',
      rows: s => RELS.map(k => ({ k, label: t('rel.' + k), color: `var(--r-${k})`, me: k === s.rel,
        ...inheritanceTax({ ...plain, share: s.share, gifts: s.gifts, life: s.life }, k) })),
    },
    chart: {
      xMax: 2000000, step: 5000, yMax: 50,
      title: () => t('chartTitle'),
      deps: s => [s.rel],
      lines: s => RELS.map(k => ({ label: t('rel.' + k), color: '--r-' + k, me: k === s.rel, f: x => inheritanceTax({ ...plain, share: x }, k).avg })),
    },
    ref: () => [
      { h: t('refBaseH'), list: ['partner', 'direct', 'sibling', 'nephew', 'relative', 'other'].map(k => t('base.' + k)) },
      { h: t('refMajH'), table: { head: [t('shareCol'), t('majCol'), ...groups.map(g => t('relShort.' + g))], rows: majTable() }, note: t('refNote') },
    ],
  };
};
