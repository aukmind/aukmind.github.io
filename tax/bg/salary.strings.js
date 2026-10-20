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
    en: `Living together, married or not. Each of you is taxed on your own. Only the tax break for children can move from one parent to the other.`,
    nl: `Samenwonend, getrouwd of niet. Elk van jullie wordt apart belast. Alleen het belastingvoordeel voor kinderen kan van de ene ouder naar de andere gaan.`,
    fr: `En couple, marié ou non. Chacun est imposé séparément. Seul l'avantage fiscal pour enfants peut passer d'un parent à l'autre.`,
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
    en: `Base pay since the June 2026 pay freeze. Taxed like any salary: 10% income tax, plus social insurance on pay up to the monthly limit.`,
    nl: `Basisloon sinds de loonstop van juni 2026. Belast zoals elk loon: 10% inkomstenbelasting, plus sociale verzekering op loon tot de maandgrens.`,
    fr: `Paie de base depuis le gel de juin 2026. Imposée comme tout salaire : 10% d'impôt sur le revenu, plus cotisations sociales sur la paie jusqu'à la limite mensuelle.`,
  },
  minSalaryHint: {
    en: `Pay for the whole year: today's monthly amount × 12. It starts at the amount set by law.`,
    nl: `Loon voor het hele jaar: het huidige maandbedrag × 12. Het begint bij het bedrag dat de wet vastlegt.`,
    fr: `Paie pour toute l'année : le montant mensuel actuel × 12. On part du montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: `An MP's base pay is three times the average public-sector wage. In June 2026 Parliament froze it at 4 236 € a month (the March 2026 average was 1 412 €). All other pay follows from it: the Prime Minister gets 55% more (6 566 €, like the Speaker), a minister 35% more (about 5 719 €), a Deputy Prime Minister 6 142 €, and the President twice the MP pay (8 472 €). All of it is taxed and insured like a normal salary.`,
    nl: `Het basisloon van een parlementslid is drie keer het gemiddelde loon in de publieke sector. In juni 2026 bevroor het parlement het op € 4.236 per maand (het gemiddelde in maart 2026 was € 1.412). Alle andere lonen volgen daaruit: de premier krijgt 55% meer (€ 6.566, zoals de voorzitter), een minister 35% meer (ongeveer € 5.719), een vicepremier € 6.142, en de president het dubbele van een parlementslid (€ 8.472). Alles wordt belast en verzekerd als een gewoon loon.`,
    fr: `L'indemnité de base d'un député vaut trois fois le salaire moyen du secteur public. En juin 2026, le Parlement l'a gelée à 4 236 € par mois (la moyenne de mars 2026 était de 1 412 €). Toutes les autres paies en découlent : le Premier ministre touche 55% de plus (6 566 €, comme le président de l'Assemblée), un ministre 35% de plus (environ 5 719 €), un vice-Premier ministre 6 142 €, et le Président deux fois l'indemnité de député (8 472 €). Tout est imposé et cotisé comme un salaire normal.`,
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
    en: `Taxed like any salary. The face on the chart sits at their pay before tax.`,
    nl: `Belast zoals elk loon. Het gezichtje op de grafiek staat op hun loon vóór belasting.`,
    fr: `Imposé comme tout salaire. Le visage sur le graphique est placé à leur salaire avant impôts.`,
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
    en: `4 236 € a month since the June 2026 freeze. Before, it was updated every three months to follow public-sector pay. Committee jobs pay more; office and travel budgets are not counted.`,
    nl: `€ 4.236 per maand sinds de loonstop van juni 2026. Daarvoor werd het elke drie maanden aangepast aan de lonen in de publieke sector. Functies in commissies betalen meer; kantoor- en reisbudgetten tellen niet mee.`,
    fr: `4 236 € par mois depuis le gel de juin 2026. Avant, elle était mise à jour tous les trois mois pour suivre les salaires publics. Les postes en commission paient plus ; les budgets de bureau et de déplacement ne sont pas comptés.`,
  },
  polNote: {
    en: links => `Point at a name to see details, click it to zoom in. Pay is for the year before tax; the chart shows it per month (÷ 12). Bulgarian politicians are taxed and insured like normal employees, so each one sits at their pay before tax. Sources: ${links}.`,
    nl: links => `Wijs een naam aan voor details, klik om in te zoomen. Het loon is voor het jaar vóór belasting; de grafiek toont het per maand (÷ 12). Bulgaarse politici worden belast en verzekerd als gewone werknemers, dus elk staat op het eigen loon vóór belasting. Bronnen: ${links}.`,
    fr: links => `Pointez un nom pour voir les détails, cliquez pour zoomer. La paie est celle de l'année avant impôts ; le graphique la montre par mois (÷ 12). Les politiciens bulgares sont imposés et cotisent comme des salariés ordinaires : chacun est placé à son salaire avant impôts. Sources : ${links}.`,
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
      ? `Your children give the household a tax cut worth ${fam} a month. Up to ${b}, that wipes out all of your 10% income tax. The 13.78% social insurance is still taken. Above that, each extra euro pays the full tax again.`
      : `Bulgaria has no tax-free amount. From the first euro, even at the minimum wage of ${a}, you pay 13.78% social insurance and 10% income tax on the rest. Your employer pays about 19.3% on top.${fam ? ` Your tax cut for children (${fam} a month) is already used up by your partner's tax, or fully used by yours.` : ''}`,
    nl: (a, b, fam) => b
      ? `Je kinderen geven het gezin een belastingkorting van ${fam} per maand. Tot ${b} valt daardoor al je inkomstenbelasting van 10% weg. De sociale verzekering van 13,78% wordt nog wel afgehouden. Daarboven betaalt elke extra euro weer de volle belasting.`
      : `Bulgarije heeft geen belastingvrij bedrag. Vanaf de eerste euro, ook op het minimumloon van ${a}, betaal je 13,78% sociale verzekering en 10% inkomstenbelasting op de rest. Je werkgever betaalt er ongeveer 19,3% bovenop.${fam ? ` Je belastingkorting voor kinderen (${fam} per maand) is al opgebruikt door de belasting van je partner, of helemaal door de jouwe.` : ''}`,
    fr: (a, b, fam) => b
      ? `Vos enfants donnent au foyer une baisse d'impôt de ${fam} par mois. Jusqu'à ${b}, cela efface tout votre impôt de 10%. Les 13,78% de cotisations sociales restent prélevés. Au-delà, chaque euro en plus paie à nouveau l'impôt complet.`
      : `La Bulgarie n'a pas de montant libre d'impôt. Dès le premier euro, même au salaire minimum de ${a}, vous payez 13,78% de cotisations sociales et 10% d'impôt sur le reste. Votre employeur paie environ 19,3% en plus.${fam ? ` Votre baisse d'impôt pour enfants (${fam} par mois) est déjà utilisée par l'impôt de votre conjoint, ou entièrement par le vôtre.` : ''}`,
  },
  topTitle: {
    en: top => `Why the drop at ${top}?`,
    nl: top => `Waarom de daling bij ${top}?`,
    fr: top => `Pourquoi la baisse à ${top} ?`,
  },
  topBody: {
    en: (top, first) => `Social insurance is only charged on pay up to a monthly limit: ${first} until July 2026, ${top} from August. Above it, each extra euro only pays the 10% income tax, and your employer pays nothing more. So the tax on the next euro drops from about 40% of what you cost your employer to 10%.`,
    nl: (top, first) => `Sociale verzekering wordt alleen betaald op loon tot een maandgrens: ${first} tot juli 2026, ${top} vanaf augustus. Daarboven betaalt elke extra euro alleen de 10% inkomstenbelasting, en je werkgever betaalt niets meer. De belasting op de volgende euro zakt dus van ongeveer 40% van wat je je werkgever kost naar 10%.`,
    fr: (top, first) => `Les cotisations sociales ne portent que sur la paie jusqu'à une limite mensuelle : ${first} jusqu'en juillet 2026, ${top} depuis août. Au-delà, chaque euro en plus ne paie que les 10% d'impôt, et votre employeur ne paie plus rien. Le prélèvement sur l'euro suivant passe donc d'environ 40% de ce que vous coûtez à l'employeur à 10%.`,
  },

  // Tax components
  'comp.er': { en: `Employer social insurance`, nl: `Sociale verzekering werkgever`, fr: `Cotisations patronales` },
  'comp.ee': { en: `Employee social insurance`, nl: `Sociale verzekering werknemer`, fr: `Cotisations salariales` },
  'comp.ir': { en: `Personal income tax (DDFL)`, nl: `Personenbelasting (DDFL)`, fr: `Impôt sur le revenu (DDFL)` },
  'comp.fam': { en: `Child relief`, nl: `Korting voor kinderen`, fr: `Allègement pour enfants` },
  famReceived: { en: `+ Child relief used`, nl: `+ Gebruikte korting voor kinderen`, fr: `+ Allègement pour enfants utilisé` },
  famLost: { en: `Child relief your pay costs the household`, nl: `Korting voor kinderen die je loon het gezin kost`, fr: `Allègement pour enfants que votre salaire fait perdre au foyer` },
  'bd.insured': { en: `Pay that contributions are charged on (capped)`, nl: `Loon waarop bijdragen worden geheven (begrensd)`, fr: `Salaire soumis aux cotisations (plafonné)` },
  'bd.taxableBg': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'fund.pen': { en: `Pension (DOO)`, nl: `Pensioen (DOO)`, fr: `Retraite (DOO)` },
  'fund.sick': { en: `Sickness and maternity`, nl: `Ziekte en moederschap`, fr: `Maladie et maternité` },
  'fund.unemp': { en: `Unemployment`, nl: `Werkloosheid`, fr: `Chômage` },
  'fund.upf': { en: `Private pension fund (UPF)`, nl: `Privé-pensioenfonds (UPF)`, fr: `Fonds de pension privé (UPF)` },
  'fund.health': { en: `Health`, nl: `Gezondheid`, fr: `Santé` },
  'fund.tzpb': { en: `Work accidents (TZPB)`, nl: `Arbeidsongevallen (TZPB)`, fr: `Accidents du travail (TZPB)` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the usual in Bulgaria. Bonuses are taxed and pay contributions like normal pay, up to the monthly limit.`,
    nl: `12 maandlonen, het gebruikelijke in Bulgarije. Op bonussen betaal je belasting en bijdragen zoals op gewoon loon, tot de maandgrens.`,
    fr: `12 salaires mensuels, l'habitude en Bulgarie. Les primes sont imposées et cotisées comme une paie normale, jusqu'à la limite mensuelle.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Bulgaria taxes each person on their own. Only the tax break for children is shared: one parent claims it, and what their tax can't use passes to the other on the yearly tax returns. Here, your share = the break the household uses − what it would use if you earned nothing.`,
    nl: `Bulgarije belast elke persoon apart. Alleen het belastingvoordeel voor kinderen wordt gedeeld: één ouder vraagt het aan, en wat diens belasting niet kan gebruiken, gaat via de jaarlijkse aangiften naar de andere. Hier is jouw deel = het voordeel dat het gezin gebruikt − wat het zou gebruiken als jij niets verdiende.`,
    fr: `La Bulgarie impose chaque personne séparément. Seul l'avantage pour enfants est partagé : un parent le demande, et ce que son impôt ne peut pas utiliser passe à l'autre via les déclarations annuelles. Ici, votre part = l'avantage utilisé par le foyer − celui qu'il utiliserait si vous ne gagniez rien.`,
  },
  'tip.size': {
    en: `Your employer also pays for insurance against accidents and illness caused by work (TZPB): 0.4% to 1.1% of your pay up to the monthly limit, set each year by type of business. Most office jobs pay 0.4%.`,
    nl: `Je werkgever betaalt ook een verzekering tegen ongevallen en ziekte door het werk (TZPB): 0,4% tot 1,1% van je loon tot de maandgrens, elk jaar per soort bedrijf vastgelegd. De meeste kantoorbanen betalen 0,4%.`,
    fr: `Votre employeur paie aussi une assurance contre les accidents et maladies dus au travail (TZPB) : 0,4% à 1,1% de votre paie jusqu'à la limite mensuelle, fixé chaque année selon le type d'activité. La plupart des emplois de bureau paient 0,4%.`,
  },
  'tip.costShort': { en: `Your gross salary plus about 19.3% social insurance that your employer pays on top, up to the monthly limit.`, nl: `Je brutoloon plus ongeveer 19,3% sociale verzekering die je werkgever erbovenop betaalt, tot de maandgrens.`, fr: `Votre salaire brut plus environ 19,3% de cotisations sociales que votre employeur paie en plus, jusqu'à la limite mensuelle.` },
  'tip.insured': {
    en: (c1, c2, y) => `Contributions are only charged on pay up to a monthly limit: ${c1} a month from January to July, ${c2} from August 2026. With the same pay each month, that's at most ${y} for the year.`,
    nl: (c1, c2, y) => `Bijdragen worden alleen geheven op loon tot een maandgrens: ${c1} per maand van januari tot juli, ${c2} vanaf augustus 2026. Met elke maand hetzelfde loon is dat hoogstens ${y} voor het jaar.`,
    fr: (c1, c2, y) => `Les cotisations ne portent que sur la paie jusqu'à une limite mensuelle : ${c1} par mois de janvier à juillet, ${c2} depuis août 2026. Avec le même salaire chaque mois, cela fait au plus ${y} sur l'année.`,
  },
  'tip.er': {
    en: `Your employer pays this on top of your gross salary, on pay up to the monthly limit: 18.92%, plus the rate for accidents at work.`,
    nl: `Je werkgever betaalt dit bovenop je brutoloon, op loon tot de maandgrens: 18,92%, plus het tarief voor arbeidsongevallen.`,
    fr: `Votre employeur paie ceci en plus de votre salaire brut, sur la paie jusqu'à la limite mensuelle : 18,92%, plus le taux accidents du travail.`,
  },
  'tip.ee': {
    en: `Taken from your pay, up to the monthly limit: 13.78% if you were born after 1959.`,
    nl: `Afgehouden van je loon, tot de maandgrens: 13,78% als je na 1959 geboren bent.`,
    fr: `Pris sur votre paie, jusqu'à la limite mensuelle : 13,78% si vous êtes né après 1959.`,
  },
  'tip.taxable': {
    en: calc => `The part of your pay that income tax is charged on: gross pay minus your social insurance${calc}. There is no tax-free amount and no deduction for work costs.`,
    nl: calc => `Het deel van je loon waarop inkomstenbelasting wordt geheven: brutoloon min je sociale verzekering${calc}. Er is geen belastingvrij bedrag en geen aftrek voor beroepskosten.`,
    fr: calc => `La part de votre salaire sur laquelle l'impôt est calculé : salaire brut moins vos cotisations sociales${calc}. Il n'y a ni montant libre d'impôt ni déduction pour frais professionnels.`,
  },
  'tip.ir': {
    en: `A single rate of 10% on taxable income, whatever you earn. Your employer takes it from your pay every month.`,
    nl: `Eén tarief van 10% op het belastbaar inkomen, hoeveel je ook verdient. Je werkgever houdt het elke maand van je loon af.`,
    fr: `Un taux unique de 10% sur le revenu imposable, quel que soit votre salaire. Votre employeur le prend sur votre paie chaque mois.`,
  },
  'tip.fam': {
    en: `Parents of children under 18 pay no tax on part of their income each year: 3 067,75 € for one child, 6 135,50 € for two, 9 203,25 € for three or more (6 000, 12 000 and 18 000 lev). Since 2026 you can get it every month through your employer. It only lowers income tax, never social insurance.`,
    nl: `Ouders van kinderen onder 18 betalen elk jaar geen belasting op een deel van hun inkomen: € 3.067,75 voor één kind, € 6.135,50 voor twee, € 9.203,25 voor drie of meer (6.000, 12.000 en 18.000 lev). Sinds 2026 kun je het elke maand via je werkgever krijgen. Het verlaagt alleen de inkomstenbelasting, nooit de sociale verzekering.`,
    fr: `Les parents d'enfants de moins de 18 ans ne paient pas d'impôt sur une partie de leur revenu chaque année : 3 067,75 € pour un enfant, 6 135,50 € pour deux, 9 203,25 € pour trois ou plus (6 000, 12 000 et 18 000 leva). Depuis 2026, on peut l'avoir chaque mois via l'employeur. Cela ne baisse que l'impôt, jamais les cotisations sociales.`,
  },
  'tip.famBase': { en: n => `Tax base reduction for ${n} child${n > 1 ? 'ren' : ''}, per year`, nl: n => `Vermindering belastbare basis voor ${n} kind${n > 1 ? 'eren' : ''}, per jaar`, fr: n => `Réduction de base pour ${n} enfant${n > 1 ? 's' : ''}, par an` },
  'tip.famValue': { en: `Worth at 10%`, nl: `Waard aan 10%`, fr: `Valeur à 10%` },
  'tip.famUsed': { en: `Used by the household`, nl: `Gebruikt door het gezin`, fr: `Utilisé par le foyer` },
  'tip.famWithout': { en: `Used if you earned nothing`, nl: `Gebruikt als jij niets verdiende`, fr: `Utilisé sans vos revenus` },
  'tip.famYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.famM': {
    en: `A child with a disability of 50% or more adds 6 135,50 € a year; we don't count that. Child benefit from the social welfare agency is also left out.`,
    nl: `Een kind met een handicap van 50% of meer voegt € 6.135,50 per jaar toe; dat rekenen we niet mee. Kinderbijslag van het sociale bijstandsagentschap telt ook niet mee.`,
    fr: `Un enfant handicapé à 50% ou plus ajoute 6 135,50 € par an ; nous ne le comptons pas. Les allocations familiales de l'agence d'aide sociale ne sont pas comptées non plus.`,
  },
  'tip.vatM': {
    en: `Restaurants, hotels and some baby products have lower VAT (9%), and rent has none. So the real VAT you pay is probably lower than this.`,
    nl: `Restaurants, hotels en sommige babyproducten hebben minder btw (9%), en op huur zit geen btw. De echte btw die je betaalt, ligt dus waarschijnlijk lager.`,
    fr: `Les restaurants, hôtels et certains produits pour bébés ont une TVA plus basse (9%), et les loyers n'en ont pas. La TVA réelle que vous payez est donc sans doute plus basse.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross pay minus social insurance minus income tax, plus the child tax break you use.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon min sociale verzekering min inkomstenbelasting, plus het voordeel voor kinderen dat je gebruikt.`,
    fr: calc => `Ce qui arrive sur votre compte en banque sur l'année${calc}. Salaire brut moins cotisations moins impôt, plus l'avantage pour enfants utilisé.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Pension 8.22%, sick and maternity pay 2.10%, unemployment 0.60%, private pension fund 2.80%, health 4.80%: <span class="num">18.92%</span>.`,
      `Accidents at work (TZPB) <span class="num">0.4% to 1.1%</span> by type of business. Fund that pays wages if the employer goes bust: 0%.`,
      `Contributions only on pay up to <span class="num">2 111,64 €</span> a month until July 2026, <span class="num">2 300 €</span> from August.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Pensioen 8,22%, ziekte- en moederschapsuitkering 2,10%, werkloosheid 0,60%, privé-pensioenfonds 2,80%, gezondheid 4,80%: <span class="num">18,92%</span>.`,
      `Arbeidsongevallen (TZPB) <span class="num">0,4% tot 1,1%</span> volgens soort bedrijf. Fonds dat lonen betaalt als de werkgever failliet gaat: 0%.`,
      `Bijdragen alleen op loon tot <span class="num">€ 2.111,64</span> per maand tot juli 2026, <span class="num">€ 2.300</span> vanaf augustus.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Retraite 8,22%, indemnités maladie et maternité 2,10%, chômage 0,60%, fonds de pension privé 2,80%, santé 4,80% : <span class="num">18,92%</span>.`,
      `Accidents du travail (TZPB) <span class="num">0,4% à 1,1%</span> selon le type d'activité. Fonds qui paie les salaires si l'employeur fait faillite : 0%.`,
      `Cotisations seulement sur la paie jusqu'à <span class="num">2 111,64 €</span> par mois jusqu'en juillet 2026, <span class="num">2 300 €</span> depuis août.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee social insurance`, li: [`Pension 6.58%, sick and maternity pay 1.40%, unemployment 0.40%, private pension fund 2.20%, health 3.20%: <span class="num">13.78%</span>, up to the same limit. For someone born after 1959.`] },
    nl: { h: `2 · Sociale verzekering werknemer`, li: [`Pensioen 6,58%, ziekte- en moederschapsuitkering 1,40%, werkloosheid 0,40%, privé-pensioenfonds 2,20%, gezondheid 3,20%: <span class="num">13,78%</span>, tot dezelfde grens. Voor wie na 1959 geboren is.`] },
    fr: { h: `2 · Cotisations salariales`, li: [`Retraite 6,58%, indemnités maladie et maternité 1,40%, chômage 0,40%, fonds de pension privé 2,20%, santé 3,20% : <span class="num">13,78%</span>, jusqu'à la même limite. Pour une personne née après 1959.`] },
  },
  'ref.ir': {
    en: { h: `3 · Personal income tax`, li: [`<span class="num">10%</span> of gross pay minus your social insurance. No tax-free amount, and the same rate at every income.`] },
    nl: { h: `3 · Personenbelasting`, li: [`<span class="num">10%</span> van het brutoloon min je sociale verzekering. Geen belastingvrij bedrag, en hetzelfde tarief bij elk inkomen.`] },
    fr: { h: `3 · Impôt sur le revenu`, li: [`<span class="num">10%</span> du salaire brut moins vos cotisations sociales. Pas de montant libre d'impôt, et le même taux à tous les revenus.`] },
  },
  'ref.fam': {
    en: { h: `4 · Tax break for children`, li: [
      `Income not taxed each year: <span class="num">3 067,75 €</span> for one child, <span class="num">6 135,50 €</span> for two, <span class="num">9 203,25 €</span> for three or more.`,
      `One parent claims it, each month through the employer or on the yearly tax return. What's left over can pass to the other parent.`,
    ] },
    nl: { h: `4 · Belastingvoordeel voor kinderen`, li: [
      `Inkomen dat elk jaar niet belast wordt: <span class="num">€ 3.067,75</span> voor één kind, <span class="num">€ 6.135,50</span> voor twee, <span class="num">€ 9.203,25</span> voor drie of meer.`,
      `Eén ouder vraagt het aan, elke maand via de werkgever of in de jaarlijkse aangifte. Wat overblijft, kan naar de andere ouder gaan.`,
    ] },
    fr: { h: `4 · Avantage fiscal pour enfants`, li: [
      `Revenu non imposé chaque année : <span class="num">3 067,75 €</span> pour un enfant, <span class="num">6 135,50 €</span> pour deux, <span class="num">9 203,25 €</span> pour trois ou plus.`,
      `Un parent le demande, chaque mois via l'employeur ou dans la déclaration annuelle. Le reste peut passer à l'autre parent.`,
    ] },
  },
  'ref.vat': {
    en: { h: `5 · VAT on spending`, li: [
      `VAT is the tax hidden in shop prices. Normal rate <span class="num">20%</span>, counted here as if you spent all your net pay.`,
      `The VAT part of a price = price × r / (100 + r). At 20%, that's 20 / 120 = <span class="num">16.67%</span> of what you pay.`,
    ] },
    nl: { h: `5 · Btw op uitgaven`, li: [
      `Btw is de belasting die in winkelprijzen zit. Normaal tarief <span class="num">20%</span>, hier gerekend alsof je je hele nettoloon uitgeeft.`,
      `Het btw-deel van een prijs = prijs × r / (100 + r). Bij 20% is dat 20 / 120 = <span class="num">16,67%</span> van wat je betaalt.`,
    ] },
    fr: { h: `5 · TVA sur les dépenses`, li: [
      `La TVA est la taxe cachée dans les prix. Taux normal <span class="num">20%</span>, compté ici comme si vous dépensiez tout votre salaire net.`,
      `La part de TVA dans un prix = prix × r / (100 + r). À 20%, cela fait 20 / 120 = <span class="num">16,67%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `6 · Government and Parliament`, li: [
      `Per month before tax: MP base pay <span class="num">4 236 €</span>, frozen in June 2026. Prime Minister <span class="num">6 566 €</span>, Deputy Prime Minister 6 142 €, ministers about 5 719 €, President 8 472 €.`,
      `Taxed and insured like any salary.`,
    ] },
    nl: { h: `6 · Regering en parlement`, li: [
      `Per maand vóór belasting: basisloon parlementslid <span class="num">€ 4.236</span>, bevroren in juni 2026. Premier <span class="num">€ 6.566</span>, vicepremier € 6.142, ministers ongeveer € 5.719, president € 8.472.`,
      `Belast en verzekerd zoals elk loon.`,
    ] },
    fr: { h: `6 · Gouvernement et Parlement`, li: [
      `Par mois avant impôts : indemnité de base d'un député <span class="num">4 236 €</span>, gelée en juin 2026. Premier ministre <span class="num">6 566 €</span>, vice-Premier ministre 6 142 €, ministres environ 5 719 €, Président 8 472 €.`,
      `Imposés et cotisés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Workers born before 1960 (no private pension fund; 19.8% goes to the state pension instead), the tax break for a disabled child, deductions for voluntary pension and insurance, the mortgage tax break for young families, and civil servants, who split contributions differently.`,
      `Contributions are always charged on at least a minimum pay set for each job; here we assume full-time pay above it. The amounts are the tax for the whole year, with the same pay every month.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Werknemers geboren vóór 1960 (geen privé-pensioenfonds; in de plaats gaat 19,8% naar het staatspensioen), het belastingvoordeel voor een kind met een handicap, aftrek voor vrijwillige pensioen- en verzekeringsbijdragen, het hypotheekvoordeel voor jonge gezinnen, en ambtenaren, die de bijdragen anders verdelen.`,
      `Bijdragen worden altijd geheven op minstens een minimumloon dat per functie vastligt; hier gaan we uit van een voltijds loon daarboven. De bedragen zijn de belasting voor het hele jaar, met elke maand hetzelfde loon.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les salariés nés avant 1960 (pas de fonds de pension privé ; 19,8% vont à la place à la retraite publique), l'avantage pour enfant handicapé, les déductions pour retraite et assurance volontaires, l'avantage hypothécaire des jeunes familles, et les fonctionnaires, qui répartissent les cotisations autrement.`,
      `Les cotisations portent toujours au moins sur une paie minimale fixée pour chaque poste ; ici nous supposons un temps plein au-dessus. Les montants sont l'impôt de toute l'année, avec le même salaire chaque mois.`,
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

  'gap.polPay': {
    en: `Pay of the President, Prime Minister, Deputy Prime Minister and ministers comes from one newspaper report (Fakti, May 2026). Only the MPs' 4 236 € is confirmed, by the news of the pay freeze.`,
    nl: `Het loon van de president, de premier, de vicepremier en de ministers komt uit één krantenartikel (Fakti, mei 2026). Alleen de € 4.236 van parlementsleden is bevestigd, door het nieuws over de loonstop.`,
    fr: `La paie du Président, du Premier ministre, du vice-Premier ministre et des ministres vient d'un seul article de presse (Fakti, mai 2026). Seuls les 4 236 € des députés sont confirmés, par l'annonce du gel.`,
  },
  'gap.polIns': {
    en: `Here, politicians are taxed and insured like employees. We did not check in the law how their insurance really works.`,
    nl: `Hier worden politici belast en verzekerd als werknemers. We hebben niet in de wet nagekeken hoe hun verzekering echt werkt.`,
    fr: `Ici, les politiciens sont imposés et assurés comme des salariés. Nous n'avons pas vérifié dans la loi comment leur assurance fonctionne vraiment.`,
  },
  'gap.wages': {
    en: `The average wage (1 444 €, Q2 2026) comes from a second-hand source quoting NSI. We found no median wage (the pay that half of workers earn more than), so there is no line for it.`,
    nl: `Het gemiddelde loon (€ 1.444, Q2 2026) komt uit een tweedehands bron die het NSI citeert. We vonden geen mediaanloon (het loon waarboven de helft van de werknemers zit), dus daar is geen lijn voor.`,
    fr: `Le salaire moyen (1 444 €, T2 2026) vient d'une source indirecte citant le NSI. Nous n'avons pas trouvé de salaire médian (celui au-dessus duquel gagne la moitié des salariés), donc il n'a pas de ligne.`,
  },
  'gap.ceiling': {
    en: `The yearly limit assumes the same pay every month: 2 111.64 € a month until July and 2 300 € from August. Bonuses or pay that changes from month to month would change it.`,
    nl: `De jaargrens gaat uit van elke maand hetzelfde loon: € 2.111,64 per maand tot juli en € 2.300 vanaf augustus. Bonussen of een loon dat van maand tot maand verandert, zouden dat veranderen.`,
    fr: `La limite annuelle suppose le même salaire chaque mois : 2 111,64 € par mois jusqu'en juillet et 2 300 € dès août. Des primes ou une paie qui change d'un mois à l'autre la modifieraient.`,
  },
  'gap.tzpb': {
    en: `You pick one of three rates for accidents at work (0.4%, 0.7%, 1.1%). The real rate depends on your employer's type of business.`,
    nl: `Je kiest een van drie tarieven voor arbeidsongevallen (0,4%, 0,7%, 1,1%). Het echte tarief hangt af van het soort bedrijf van je werkgever.`,
    fr: `Vous choisissez un des trois taux accidents du travail (0,4%, 0,7%, 1,1%). Le taux réel dépend du type d'activité de votre employeur.`,
  },
  'gap.kids': {
    en: `That you can get the child tax break monthly through your employer comes from second-hand sources. That the unused part passes to the other parent on the yearly returns is our assumption.`,
    nl: `Dat je het belastingvoordeel voor kinderen maandelijks via je werkgever kunt krijgen, komt uit tweedehands bronnen. Dat het ongebruikte deel via de jaarlijkse aangiften naar de andere ouder gaat, is onze aanname.`,
    fr: `Le fait de pouvoir obtenir l'avantage pour enfants chaque mois via l'employeur vient de sources indirectes. Le passage de la partie non utilisée à l'autre parent via les déclarations annuelles est notre hypothèse.`,
  },
  'gap.notIncl': {
    en: `Workers born before 1960, the tax break for a disabled child, voluntary deductions and the young families' mortgage break are left out. See "What's not included" below.`,
    nl: `Werknemers geboren vóór 1960, het belastingvoordeel voor een kind met een handicap, vrijwillige aftrekken en het hypotheekvoordeel voor jonge gezinnen tellen niet mee. Zie "Wat niet is meegerekend" hieronder.`,
    fr: `Les salariés nés avant 1960, l'avantage pour enfant handicapé, les déductions volontaires et l'avantage hypothécaire des jeunes familles ne sont pas comptés. Voir « Ce qui n'est pas inclus » plus bas.`,
  },
};
