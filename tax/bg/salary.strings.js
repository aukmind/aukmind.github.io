window.TAX_STRINGS = {
  title: { en: `Bulgarian Buying Power`, nl: `Bulgaarse koopkracht`, fr: `Pouvoir d'achat en Bulgarie` },
  eyebrow: { en: `Bulgaria · income 2026 · employee`, nl: `Bulgarije · inkomen 2026 · werknemer`, fr: `Bulgarie · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Bulgaria · income 2026 · minister`, nl: `Bulgarije · inkomen 2026 · minister`, fr: `Bulgarie · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Bulgarian salary in 2026, from what your employer pays to what you can buy. A 10% flat income tax, social insurance up to a ceiling, and a child relief. Bulgaria has paid in euro since 1 January 2026.`,
    nl: `Alle belastingen op een Bulgaars loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Een vlakke inkomstenbelasting van 10%, sociale verzekering tot een plafond en een korting voor kinderen. Bulgarije betaalt sinds 1 januari 2026 in euro.`,
    fr: `Tous les prélèvements sur un salaire bulgare en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Un impôt sur le revenu unique de 10%, des cotisations sociales plafonnées et un allègement pour enfants. La Bulgarie paie en euro depuis le 1er janvier 2026.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Living together, married or not. Each partner is taxed alone; only the child relief can move from one parent to the other.`,
    nl: `Samenwonend, gehuwd of niet. Elke partner wordt apart belast; alleen de korting voor kinderen kan van de ene ouder naar de andere gaan.`,
    fr: `En couple, marié ou non. Chacun est imposé séparément ; seul l'allègement pour enfants peut passer d'un parent à l'autre.`,
  },
  employerSize: { en: `Employer's work accident rate (TZPB)`, nl: `Arbeidsongevallenpremie van de werkgever (TZPB)`, fr: `Taux accidents du travail de l'employeur (TZPB)` },
  'size.z04': { en: `0.4% (offices, IT)`, nl: `0,4% (kantoor, IT)`, fr: `0,4% (bureaux, IT)` },
  'size.z07': { en: `0.7% (industry)`, nl: `0,7% (industrie)`, fr: `0,7% (industrie)` },
  'size.z11': { en: `1.1% (mining, building)`, nl: `1,1% (mijnbouw, bouw)`, fr: `1,1% (mines, BTP)` },
  vatStandard: { en: `(Bulgaria's standard rate is 20%)`, nl: `(het Bulgaarse normale tarief is 20%)`, fr: `(le taux normal bulgare est de 20%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.dpm': { en: `Deputy Prime Minister`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Base pay since the June 2026 freeze. Taxed like any salary: 10% income tax and social insurance up to the ceiling.`,
    nl: `Basisloon sinds de bevriezing van juni 2026. Belast zoals elk loon: 10% inkomstenbelasting en sociale verzekering tot het plafond.`,
    fr: `Rémunération de base depuis le gel de juin 2026. Imposée comme tout salaire : 10% d'impôt sur le revenu et cotisations sociales jusqu'au plafond.`,
  },
  minSalaryHint: {
    en: `Yearly pay, current monthly amount × 12. Statutory amount by default.`,
    nl: `Jaarloon, huidig maandbedrag × 12. Standaard het wettelijke bedrag.`,
    fr: `Rémunération annuelle, montant mensuel actuel × 12. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `An MP's base pay is three times the average public-sector wage; in June 2026 Parliament froze it at 4 236 € a month (March 2026 average: 1 412 €). Everything else follows it: the Prime Minister gets 55% more (6 566 €, like the Speaker), a minister 35% more (about 5 719 €), a Deputy Prime Minister 6 142 €, the President twice the MP pay (8 472 €). All of it is employment income, taxed and insured like a salary.`,
    nl: `Het basisloon van een parlementslid is drie keer het gemiddelde loon in de publieke sector; in juni 2026 bevroor het parlement het op € 4.236 per maand (gemiddelde maart 2026: € 1.412). De rest volgt: de premier krijgt 55% meer (€ 6.566, zoals de voorzitter), een minister 35% meer (ongeveer € 5.719), een vicepremier € 6.142, de president het dubbele van een parlementslid (€ 8.472). Alles is arbeidsinkomen, belast en verzekerd zoals een loon.`,
    fr: `L'indemnité de base d'un député vaut trois fois le salaire moyen du secteur public ; en juin 2026, le Parlement l'a gelée à 4 236 € par mois (moyenne de mars 2026 : 1 412 €). Tout le reste en découle : le Premier ministre touche 55% de plus (6 566 €, comme le président de l'Assemblée), un ministre 35% de plus (environ 5 719 €), un vice-Premier ministre 6 142 €, le Président deux fois l'indemnité de député (8 472 €). Tout est un revenu salarial, imposé et cotisé comme un salaire.`,
  },

  // Politicians on the chart
  'stat.pres': { en: `President`, nl: `President`, fr: `Président` },
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.dpm': { en: `Deputy Prime Minister`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'stat.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'pol.stat.pres': { en: `2 × MP pay`, nl: `2 × parlementsloon`, fr: `2 × indemnité de député` },
  'pol.stat.pm': { en: `MP pay + 55%`, nl: `Parlementsloon + 55%`, fr: `Indemnité de député + 55%` },
  'pol.stat.dpm': { en: `Same as a deputy Speaker`, nl: `Zoals een ondervoorzitter van het parlement`, fr: `Comme un vice-président de l'Assemblée` },
  'pol.stat.min': { en: `MP pay + 35%`, nl: `Parlementsloon + 35%`, fr: `Indemnité de député + 35%` },
  'pol.stat.mp': { en: `3 × public-sector average, frozen June 2026`, nl: `3 × gemiddelde publieke sector, bevroren in juni 2026`, fr: `3 × moyenne du secteur public, gelée en juin 2026` },
  'polNote.stat': {
    en: `Taxed like any salary. The head sits at its gross.`,
    nl: `Belast zoals elk loon. Het hoofdje staat op het bruto.`,
    fr: `Imposé comme tout salaire. La tête est placée à son brut.`,
  },
  'polTipNote.pres': {
    en: `Twice an MP's base pay: 8 472 € a month.`,
    nl: `Twee keer het basisloon van een parlementslid: € 8.472 per maand.`,
    fr: `Deux fois l'indemnité de base d'un député : 8 472 € par mois.`,
  },
  'polTipNote.pm': {
    en: `Rumen Radev, Prime Minister since 8 May 2026: 6 566 € a month, the MP base pay plus 55%.`,
    nl: `Rumen Radev, premier sinds 8 mei 2026: € 6.566 per maand, het basisloon van een parlementslid plus 55%.`,
    fr: `Roumen Radev, Premier ministre depuis le 8 mai 2026 : 6 566 € par mois, l'indemnité de base d'un député plus 55%.`,
  },
  'polTipNote.dpm': {
    en: `6 142 € a month, the pay of a deputy Speaker of the National Assembly.`,
    nl: `€ 6.142 per maand, het loon van een ondervoorzitter van de Nationale Assemblee.`,
    fr: `6 142 € par mois, la rémunération d'un vice-président de l'Assemblée nationale.`,
  },
  'polTipNote.min': {
    en: `About 5 719 € a month, the MP base pay plus 35%, like a committee chair.`,
    nl: `Ongeveer € 5.719 per maand, het basisloon van een parlementslid plus 35%, zoals een commissievoorzitter.`,
    fr: `Environ 5 719 € par mois, l'indemnité de base d'un député plus 35%, comme un président de commission.`,
  },
  'polTipNote.mp': {
    en: `4 236 € a month since the June 2026 freeze, which ended the quarterly link to the public-sector average. Committee posts pay more; office and travel budgets aren't counted.`,
    nl: `€ 4.236 per maand sinds de bevriezing van juni 2026, die de driemaandelijkse koppeling aan het gemiddelde van de publieke sector beëindigde. Commissiefuncties betalen meer; kantoor- en reisbudgetten tellen niet mee.`,
    fr: `4 236 € par mois depuis le gel de juin 2026, qui a mis fin à l'indexation trimestrielle sur la moyenne du secteur public. Les fonctions en commission paient plus ; les budgets de bureau et de déplacement ne sont pas comptés.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. Bulgarian politicians are taxed and insured like employees, so everyone sits at their gross. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Bulgaarse politici worden belast en verzekerd als werknemers, dus iedereen staat op het eigen bruto. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. Les politiciens bulgares sont imposés et cotisent comme des salariés : chacun est placé à son brut. Sources : ${links}.`,
  },
  'src.pol.pres': { en: `Fakti: pay of the new government, May 2026`, nl: `Fakti: lonen van de nieuwe regering, mei 2026`, fr: `Fakti : salaires du nouveau gouvernement, mai 2026` },
  'src.pol.pm': { en: `Fakti: pay of the new government, May 2026`, nl: `Fakti: lonen van de nieuwe regering, mei 2026`, fr: `Fakti : salaires du nouveau gouvernement, mai 2026` },
  'src.pol.dpm': { en: `Fakti: pay of the new government, May 2026`, nl: `Fakti: lonen van de nieuwe regering, mei 2026`, fr: `Fakti : salaires du nouveau gouvernement, mai 2026` },
  'src.pol.min': { en: `Fakti: pay of the new government, May 2026`, nl: `Fakti: lonen van de nieuwe regering, mei 2026`, fr: `Fakti : salaires du nouveau gouvernement, mai 2026` },
  'src.pol.mp': { en: `Novinite: MPs' pay frozen, June 2026`, nl: `Novinite: parlementsloon bevroren, juni 2026`, fr: `Novinite : indemnité des députés gelée, juin 2026` },
  bracketTop: { en: `flat rate`, nl: `vlak tarief`, fr: `taux unique` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why no income tax up to ${b}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom geen inkomstenbelasting tot ${b}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi aucun impôt sur le revenu jusqu'à ${b} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, fam) => b
      ? `Your children give the household a tax relief worth ${fam} a month. Up to ${b} it cancels all of your 10% income tax; the 13.78% social insurance is still withheld. Above that, each extra euro pays the full tax again.`
      : `Bulgaria has no tax-free amount: from the first euro, even at the minimum wage of ${a}, you pay 13.78% social insurance and 10% income tax on the rest, and your employer about 19.3%.${fam ? ` Your child relief (${fam} a month) is already used by your partner's tax or fully absorbed by yours.` : ''}`,
    nl: (a, b, fam) => b
      ? `Je kinderen geven het gezin een belastingkorting van ${fam} per maand. Tot ${b} valt daardoor je hele inkomstenbelasting van 10% weg; de sociale verzekering van 13,78% blijft ingehouden. Daarboven betaalt elke extra euro weer de volle belasting.`
      : `Bulgarije heeft geen belastingvrije som: vanaf de eerste euro, ook op het minimumloon van ${a}, betaal je 13,78% sociale verzekering en 10% inkomstenbelasting op de rest, en je werkgever ongeveer 19,3%.${fam ? ` Je korting voor kinderen (${fam} per maand) wordt al gebruikt door de belasting van je partner of volledig door de jouwe opgevangen.` : ''}`,
    fr: (a, b, fam) => b
      ? `Vos enfants donnent au foyer un allègement d'impôt de ${fam} par mois. Jusqu'à ${b}, il annule tout votre impôt de 10% ; les 13,78% de cotisations sociales restent retenus. Au-delà, chaque euro en plus paie à nouveau l'impôt plein.`
      : `La Bulgarie n'a pas d'abattement : dès le premier euro, même au salaire minimum de ${a}, vous payez 13,78% de cotisations sociales et 10% d'impôt sur le reste, et votre employeur environ 19,3%.${fam ? ` Votre allègement pour enfants (${fam} par mois) est déjà utilisé par l'impôt de votre conjoint ou entièrement absorbé par le vôtre.` : ''}`,
  },
  topTitle: {
    en: top => `Why the drop at ${top}?`,
    nl: top => `Waarom de daling bij ${top}?`,
    fr: top => `Pourquoi la baisse à ${top} ?`,
  },
  topBody: {
    en: (top, first) => `Social insurance stops at the maximum insurable income: ${first} a month until July 2026, ${top} from August. Above it, each extra euro pays only the 10% income tax, and no employer contributions, so the rate on the next euro falls from about 40% of the employer's cost to 10%.`,
    nl: (top, first) => `De sociale verzekering stopt bij het maximaal verzekerbaar inkomen: ${first} per maand tot juli 2026, ${top} vanaf augustus. Daarboven betaalt elke extra euro enkel de 10% inkomstenbelasting en geen werkgeversbijdragen, dus het tarief op de volgende euro zakt van ongeveer 40% van de loonkost naar 10%.`,
    fr: (top, first) => `Les cotisations sociales s'arrêtent au revenu assurable maximal : ${first} par mois jusqu'en juillet 2026, ${top} depuis août. Au-delà, chaque euro en plus ne paie que les 10% d'impôt, sans cotisation patronale : le taux sur l'euro suivant passe d'environ 40% du coût employeur à 10%.`,
  },

  // Tax components
  'comp.er': { en: `Employer social insurance`, nl: `Sociale verzekering werkgever`, fr: `Cotisations patronales` },
  'comp.ee': { en: `Employee social insurance`, nl: `Sociale verzekering werknemer`, fr: `Cotisations salariales` },
  'comp.ir': { en: `Personal income tax (DDFL)`, nl: `Personenbelasting (DDFL)`, fr: `Impôt sur le revenu (DDFL)` },
  'comp.fam': { en: `Child relief`, nl: `Korting voor kinderen`, fr: `Allègement pour enfants` },
  famReceived: { en: `+ Child relief used`, nl: `+ Gebruikte korting voor kinderen`, fr: `+ Allègement pour enfants utilisé` },
  famLost: { en: `Child relief your pay costs the household`, nl: `Korting voor kinderen die je loon het gezin kost`, fr: `Allègement pour enfants que votre salaire fait perdre au foyer` },
  'bd.insured': { en: `Insured pay (capped)`, nl: `Verzekerd loon (geplafonneerd)`, fr: `Salaire assuré (plafonné)` },
  'bd.taxableBg': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'fund.pen': { en: `Pension (DOO)`, nl: `Pensioen (DOO)`, fr: `Retraite (DOO)` },
  'fund.sick': { en: `Sickness and maternity`, nl: `Ziekte en moederschap`, fr: `Maladie et maternité` },
  'fund.unemp': { en: `Unemployment`, nl: `Werkloosheid`, fr: `Chômage` },
  'fund.upf': { en: `Second-pillar pension (UPF)`, nl: `Pensioen tweede pijler (UPF)`, fr: `Retraite deuxième pilier (UPF)` },
  'fund.health': { en: `Health`, nl: `Gezondheid`, fr: `Santé` },
  'fund.tzpb': { en: `Work accidents (TZPB)`, nl: `Arbeidsongevallen (TZPB)`, fr: `Accidents du travail (TZPB)` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the norm in Bulgaria. Bonuses are taxed and insured like any pay, within the monthly ceiling.`,
    nl: `12 maandlonen, de norm in Bulgarije. Bonussen worden belast en verzekerd zoals elk loon, binnen het maandplafond.`,
    fr: `12 salaires mensuels, la norme en Bulgarie. Les primes sont imposées et cotisées comme tout salaire, dans la limite du plafond mensuel.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Bulgaria taxes each person alone. Only the child relief is shared: one parent claims it, and what their tax can't absorb passes to the other through the annual returns. Here, your share = the relief the household uses − what it would use if you earned nothing.`,
    nl: `Bulgarije belast elke persoon apart. Alleen de korting voor kinderen wordt gedeeld: één ouder vraagt ze aan, en wat diens belasting niet opvangt, gaat via de jaarlijkse aangiften naar de andere. Hier is jouw deel = de korting die het gezin gebruikt − wat het zou gebruiken als jij niets verdiende.`,
    fr: `La Bulgarie impose chaque personne séparément. Seul l'allègement pour enfants est partagé : un parent le demande, et ce que son impôt ne peut absorber passe à l'autre par les déclarations annuelles. Ici, votre part = l'allègement utilisé par le foyer − celui qu'il utiliserait sans vos revenus.`,
  },
  'tip.size': {
    en: `The employer also pays the work accident and occupational disease contribution (TZPB): 0.4% to 1.1% of insured pay, set each year by economic activity. Most office jobs pay 0.4%.`,
    nl: `De werkgever betaalt ook de bijdrage voor arbeidsongevallen en beroepsziekten (TZPB): 0,4% tot 1,1% van het verzekerde loon, elk jaar per economische activiteit vastgelegd. De meeste kantoorbanen betalen 0,4%.`,
    fr: `L'employeur paie aussi la cotisation accidents du travail et maladies professionnelles (TZPB) : 0,4% à 1,1% du salaire assuré, fixée chaque année selon l'activité. La plupart des emplois de bureau paient 0,4%.`,
  },
  'tip.costShort': { en: `Gross salary + about 19.3% employer social insurance, up to the ceiling.`, nl: `Brutoloon + ongeveer 19,3% sociale verzekering werkgever, tot het plafond.`, fr: `Salaire brut + environ 19,3% de cotisations patronales, jusqu'au plafond.` },
  'tip.insured': {
    en: (c1, c2, y) => `Contributions are due on pay up to the maximum insurable income: ${c1} a month from January to July, ${c2} from August 2026. With even monthly pay, that is at most ${y} for the year.`,
    nl: (c1, c2, y) => `Bijdragen zijn verschuldigd op het loon tot het maximaal verzekerbaar inkomen: ${c1} per maand van januari tot juli, ${c2} vanaf augustus 2026. Met een gelijk maandloon is dat hoogstens ${y} voor het jaar.`,
    fr: (c1, c2, y) => `Les cotisations portent sur le salaire jusqu'au revenu assurable maximal : ${c1} par mois de janvier à juillet, ${c2} depuis août 2026. Avec un salaire mensuel régulier, cela fait au plus ${y} sur l'année.`,
  },
  'tip.er': {
    en: `Paid by your employer on top of your gross salary, on pay up to the ceiling: 18.92% plus the work accident rate.`,
    nl: `Betaald door je werkgever bovenop je brutoloon, op het loon tot het plafond: 18,92% plus de arbeidsongevallenpremie.`,
    fr: `Payées par votre employeur en plus de votre salaire brut, sur le salaire jusqu'au plafond : 18,92% plus le taux accidents du travail.`,
  },
  'tip.ee': {
    en: `Withheld from your pay, up to the ceiling: 13.78% for someone born after 1959.`,
    nl: `Ingehouden op je loon, tot het plafond: 13,78% voor wie na 1959 geboren is.`,
    fr: `Retenues sur votre paie, jusqu'au plafond : 13,78% pour une personne née après 1959.`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − employee social insurance${calc}. There is no tax-free amount and no deduction for work expenses.`,
    nl: calc => `Brutoloon − sociale verzekering werknemer${calc}. Er is geen belastingvrije som en geen aftrek voor beroepskosten.`,
    fr: calc => `Salaire brut − cotisations salariales${calc}. Il n'y a ni abattement personnel ni déduction de frais professionnels.`,
  },
  'tip.ir': {
    en: `One flat rate of 10% on taxable income, withheld monthly by the employer.`,
    nl: `Eén vlak tarief van 10% op het belastbaar inkomen, maandelijks ingehouden door de werkgever.`,
    fr: `Un taux unique de 10% sur le revenu imposable, retenu chaque mois par l'employeur.`,
  },
  'tip.fam': {
    en: `Parents of children under 18 take a yearly amount off their taxable income: 3 067,75 € for one child, 6 135,50 € for two, 9 203,25 € for three or more (6 000, 12 000 and 18 000 lev). Since 2026 it can be taken monthly through the employer. It only reduces the income tax, never the social insurance.`,
    nl: `Ouders van kinderen onder 18 trekken een jaarbedrag af van hun belastbaar inkomen: € 3.067,75 voor één kind, € 6.135,50 voor twee, € 9.203,25 voor drie of meer (6.000, 12.000 en 18.000 lev). Sinds 2026 kan dat maandelijks via de werkgever. Ze verlaagt enkel de inkomstenbelasting, nooit de sociale verzekering.`,
    fr: `Les parents d'enfants de moins de 18 ans déduisent un montant annuel de leur revenu imposable : 3 067,75 € pour un enfant, 6 135,50 € pour deux, 9 203,25 € pour trois ou plus (6 000, 12 000 et 18 000 leva). Depuis 2026, il peut être pris chaque mois via l'employeur. Il ne réduit que l'impôt, jamais les cotisations.`,
  },
  'tip.famBase': { en: n => `Tax base reduction for ${n} child${n > 1 ? 'ren' : ''}, per year`, nl: n => `Vermindering belastbare basis voor ${n} kind${n > 1 ? 'eren' : ''}, per jaar`, fr: n => `Réduction de base pour ${n} enfant${n > 1 ? 's' : ''}, par an` },
  'tip.famValue': { en: `Worth at 10%`, nl: `Waard aan 10%`, fr: `Valeur à 10%` },
  'tip.famUsed': { en: `Used by the household`, nl: `Gebruikt door het gezin`, fr: `Utilisé par le foyer` },
  'tip.famWithout': { en: `Used if you earned nothing`, nl: `Gebruikt als jij niets verdiende`, fr: `Utilisé sans vos revenus` },
  'tip.famYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.famM': {
    en: `A child with a disability of 50% or more adds 6 135,50 € a year; not modelled. Child benefits from the social assistance agency are left out.`,
    nl: `Een kind met een handicap van 50% of meer geeft € 6.135,50 per jaar extra; niet meegerekend. Kinderbijslag van het sociaal bijstandsagentschap is weggelaten.`,
    fr: `Un enfant handicapé à 50% ou plus ajoute 6 135,50 € par an ; non modélisé. Les allocations familiales de l'agence d'aide sociale ne sont pas comptées.`,
  },
  'tip.vatM': {
    en: `Restaurants, hotels and some baby products are at 9%, and rent is exempt, so this is an upper bound.`,
    nl: `Restaurants, hotels en sommige babyproducten hebben 9%, en huur is vrijgesteld, dus dit is een bovengrens.`,
    fr: `Restaurants, hôtels et certains produits pour bébés sont à 9%, et les loyers exonérés : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − social insurance − income tax + the child relief you use.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − sociale verzekering − inkomstenbelasting + de korting voor kinderen die je gebruikt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisations − impôt + l'allègement pour enfants utilisé.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Pension 8.22%, sickness and maternity 2.10%, unemployment 0.60%, second-pillar pension 2.80%, health 4.80%: <span class="num">18.92%</span>.`,
      `Work accidents (TZPB) <span class="num">0.4% to 1.1%</span> by activity. Guaranteed wage claims fund 0%.`,
      `Maximum insurable income <span class="num">2 111,64 €</span> a month until July 2026, <span class="num">2 300 €</span> from August.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Pensioen 8,22%, ziekte en moederschap 2,10%, werkloosheid 0,60%, pensioen tweede pijler 2,80%, gezondheid 4,80%: <span class="num">18,92%</span>.`,
      `Arbeidsongevallen (TZPB) <span class="num">0,4% tot 1,1%</span> volgens activiteit. Waarborgfonds voor loonvorderingen 0%.`,
      `Maximaal verzekerbaar inkomen <span class="num">€ 2.111,64</span> per maand tot juli 2026, <span class="num">€ 2.300</span> vanaf augustus.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Retraite 8,22%, maladie et maternité 2,10%, chômage 0,60%, retraite deuxième pilier 2,80%, santé 4,80% : <span class="num">18,92%</span>.`,
      `Accidents du travail (TZPB) <span class="num">0,4% à 1,1%</span> selon l'activité. Fonds de garantie des salaires 0%.`,
      `Revenu assurable maximal <span class="num">2 111,64 €</span> par mois jusqu'en juillet 2026, <span class="num">2 300 €</span> depuis août.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee social insurance`, li: [`Pension 6.58%, sickness and maternity 1.40%, unemployment 0.40%, second-pillar pension 2.20%, health 3.20%: <span class="num">13.78%</span> up to the same ceiling. For someone born after 1959.`] },
    nl: { h: `2 · Sociale verzekering werknemer`, li: [`Pensioen 6,58%, ziekte en moederschap 1,40%, werkloosheid 0,40%, pensioen tweede pijler 2,20%, gezondheid 3,20%: <span class="num">13,78%</span> tot hetzelfde plafond. Voor wie na 1959 geboren is.`] },
    fr: { h: `2 · Cotisations salariales`, li: [`Retraite 6,58%, maladie et maternité 1,40%, chômage 0,40%, retraite deuxième pilier 2,20%, santé 3,20% : <span class="num">13,78%</span> jusqu'au même plafond. Pour une personne née après 1959.`] },
  },
  'ref.ir': {
    en: { h: `3 · Personal income tax`, li: [`<span class="num">10%</span> of gross pay minus employee social insurance. No tax-free amount, no brackets.`] },
    nl: { h: `3 · Personenbelasting`, li: [`<span class="num">10%</span> van het brutoloon min de sociale verzekering werknemer. Geen belastingvrije som, geen schijven.`] },
    fr: { h: `3 · Impôt sur le revenu`, li: [`<span class="num">10%</span> du salaire brut moins les cotisations salariales. Ni abattement ni tranches.`] },
  },
  'ref.fam': {
    en: { h: `4 · Child relief`, li: [
      `Yearly tax base reduction: <span class="num">3 067,75 €</span> for one child, <span class="num">6 135,50 €</span> for two, <span class="num">9 203,25 €</span> for three or more.`,
      `Claimed by one parent, through the employer each month or in the annual return; what is left can pass to the other parent.`,
    ] },
    nl: { h: `4 · Korting voor kinderen`, li: [
      `Jaarlijkse vermindering van de belastbare basis: <span class="num">€ 3.067,75</span> voor één kind, <span class="num">€ 6.135,50</span> voor twee, <span class="num">€ 9.203,25</span> voor drie of meer.`,
      `Aangevraagd door één ouder, maandelijks via de werkgever of in de jaarlijkse aangifte; wat overblijft, kan naar de andere ouder gaan.`,
    ] },
    fr: { h: `4 · Allègement pour enfants`, li: [
      `Réduction annuelle de la base : <span class="num">3 067,75 €</span> pour un enfant, <span class="num">6 135,50 €</span> pour deux, <span class="num">9 203,25 €</span> pour trois ou plus.`,
      `Demandé par un parent, chaque mois via l'employeur ou dans la déclaration annuelle ; le reste peut passer à l'autre parent.`,
    ] },
  },
  'ref.vat': {
    en: { h: `5 · VAT on spending`, li: [
      `Standard rate <span class="num">20%</span>, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × r / (100 + r): at 20% that's 20 / 120 = <span class="num">16.67%</span> of what you pay.`,
    ] },
    nl: { h: `5 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">20%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 20% is dat 20 / 120 = <span class="num">16,67%</span> van wat je betaalt.`,
    ] },
    fr: { h: `5 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">20%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 20%, cela fait 20 / 120 = <span class="num">16,67%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `6 · Government and Parliament`, li: [
      `MP base pay <span class="num">4 236 €</span> a month, frozen in June 2026. Prime Minister <span class="num">6 566 €</span>, Deputy Prime Minister 6 142 €, ministers about 5 719 €, President 8 472 €.`,
      `Taxed and insured like any salary.`,
    ] },
    nl: { h: `6 · Regering en parlement`, li: [
      `Basisloon parlementslid <span class="num">€ 4.236</span> per maand, bevroren in juni 2026. Premier <span class="num">€ 6.566</span>, vicepremier € 6.142, ministers ongeveer € 5.719, president € 8.472.`,
      `Belast en verzekerd zoals elk loon.`,
    ] },
    fr: { h: `6 · Gouvernement et Parlement`, li: [
      `Indemnité de base d'un député <span class="num">4 236 €</span> par mois, gelée en juin 2026. Premier ministre <span class="num">6 566 €</span>, vice-Premier ministre 6 142 €, ministres environ 5 719 €, Président 8 472 €.`,
      `Imposés et cotisés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Workers born before 1960 (no second pillar, 19.8% pension instead), the disabled-child relief, voluntary pension and insurance deductions, the mortgage relief for young families, and civil-service contracts with their own split.`,
      `Contributions are due on at least the minimum insurable income for the job; here pay is assumed full-time and above it. Figures are the year's tax, assuming even monthly pay.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Werknemers geboren voor 1960 (geen tweede pijler, in plaats daarvan 19,8% pensioen), de korting voor een kind met een handicap, aftrek van vrijwillige pensioen- en verzekeringsbijdragen, de hypotheekkorting voor jonge gezinnen en ambtenaren met een eigen verdeling.`,
      `Bijdragen zijn verschuldigd op minstens het minimaal verzekerbaar inkomen voor de functie; hier is het loon voltijds en daarboven. De bedragen zijn de belasting voor het jaar, met een gelijk maandloon.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les salariés nés avant 1960 (sans deuxième pilier, 19,8% de retraite à la place), l'allègement pour enfant handicapé, les déductions de cotisations volontaires de retraite et d'assurance, l'allègement hypothécaire des jeunes familles et les fonctionnaires avec leur propre répartition.`,
      `Les cotisations portent au moins sur le revenu assurable minimal du poste ; ici le salaire est supposé à temps plein et au-dessus. Les montants sont l'impôt de l'année, pour un salaire mensuel régulier.`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance, by relationship →`,
    nl: `Wat een erfgenaam betaalt op een erfenis, volgens verwantschap →`,
    fr: `Ce que paie un héritier sur une succession, selon le lien →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and the NRA (NAP) decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en de NAP zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et la NAP font foi.`,
  },

  'src.tax': { en: `NAP: personal income tax`, nl: `NAP: personenbelasting`, fr: `NAP : impôt sur le revenu` },
  'src.contrib': { en: `KiK Info: contribution rates 2026`, nl: `KiK Info: bijdragevoeten 2026`, fr: `KiK Info : taux de cotisation 2026` },
  'src.cap': { en: `Eurofast: new ceiling from August 2026`, nl: `Eurofast: nieuw plafond vanaf augustus 2026`, fr: `Eurofast : nouveau plafond depuis août 2026` },
  'src.tzpb': { en: `KiK Info: changes from 1 August 2026`, nl: `KiK Info: wijzigingen vanaf 1 augustus 2026`, fr: `KiK Info : changements au 1er août 2026` },
  'src.fam': { en: `Trud i pravo: child relief through the employer, 2026`, nl: `Trud i pravo: korting voor kinderen via de werkgever, 2026`, fr: `Trud i pravo : allègement pour enfants via l'employeur, 2026` },
  'src.famShare': { en: `Innovires: child relief guide 2026`, nl: `Innovires: gids korting voor kinderen 2026`, fr: `Innovires : guide de l'allègement pour enfants 2026` },
  'src.minWage': { en: `BNT: minimum wage 2026`, nl: `BNT: minimumloon 2026`, fr: `BNT : salaire minimum 2026` },
  'src.nsi': { en: `NSI via Finorum: average wage, Q2 2026`, nl: `NSI via Finorum: gemiddeld loon, K2 2026`, fr: `NSI via Finorum : salaire moyen, T2 2026` },
  'src.vat': { en: `NAP: VAT`, nl: `NAP: btw`, fr: `NAP : TVA` },
  'src.govPay': { en: `Fakti: government pay`, nl: `Fakti: regeringslonen`, fr: `Fakti : salaires du gouvernement` },
  'src.mpPay': { en: `Novinite: MPs' pay`, nl: `Novinite: parlementsloon`, fr: `Novinite : indemnité des députés` },
};
