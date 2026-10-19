window.TAX_STRINGS = {
  title: { en: `Polish Buying Power`, nl: `Poolse koopkracht`, fr: `Pouvoir d'achat en Pologne` },
  eyebrow: { en: `Poland · 2026 income · employment contract`, nl: `Polen · inkomen 2026 · arbeidsovereenkomst`, fr: `Pologne · revenus 2026 · contrat de travail` },
  eyebrowMinister: { en: `Poland · 2026 income · minister`, nl: `Polen · inkomen 2026 · minister`, fr: `Pologne · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Polish salary in 2026, from what your employer pays to what you can buy. Employment contract (umowa o pracę) on the general tax scale.`,
    nl: `Alle belastingen op een Pools loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Arbeidsovereenkomst (umowa o pracę) volgens de gewone belastingschaal.`,
    fr: `Tous les prélèvements sur un salaire polonais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Contrat de travail (umowa o pracę) au barème général.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married, filing one joint return: the tax is worked out on half the couple's income, then doubled. The family allowance looks at the household's income per person.`,
    nl: `Gehuwd, met één gezamenlijke aangifte: de belasting wordt berekend op de helft van het inkomen van het koppel en dan verdubbeld. De gezinsbijslag kijkt naar het inkomen per persoon in het gezin.`,
    fr: `Mariés, avec une déclaration commune : l'impôt est calculé sur la moitié des revenus du couple, puis doublé. L'allocation familiale regarde le revenu du foyer par personne.`,
  },
  partsHint: {
    en: a => `800+ adds ${a} a month whatever you earn, so it doesn't change your tax rate and isn't counted.`,
    nl: a => `800+ geeft ${a} per maand ongeacht je loon, dus het verandert je belastingtarief niet en telt niet mee.`,
    fr: a => `Le 800+ ajoute ${a} par mois quel que soit votre salaire : il ne change pas votre taux et n'est pas compté.`,
  },
  includePa: { en: `Count the family allowance`, nl: `Gezinsbijslag meetellen`, fr: `Compter l'allocation familiale` },
  cadre: { en: `Under 26 (youth relief)`, nl: `Jonger dan 26 (jongerenvrijstelling)`, fr: `Moins de 26 ans (exonération jeunes)` },
  vatStandard: { en: `(Polish standard rate is 23%)`, nl: `(het Poolse normale tarief is 23%)`, fr: `(le taux normal polonais est de 23%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.sec': { en: `Deputy minister`, nl: `Viceminister`, fr: `Vice-ministre` },
  'minRole.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.vpm': { en: `Deputy PM`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Base salary + function allowance, both a multiple of the 2026 base amount. ZUS, health contribution and PIT like any employee.`,
    nl: `Basisloon + functietoeslag, allebei een veelvoud van het basisbedrag 2026. ZUS, gezondheidsbijdrage en PIT zoals elke werknemer.`,
    fr: `Salaire de base + indemnité de fonction, chacun un multiple du montant de base 2026. ZUS, cotisation santé et PIT comme tout salarié.`,
  },
  minSalaryHint: {
    en: `Yearly pay set by law, without the seniority bonus (up to 20%).`,
    nl: `Wettelijk jaarloon, zonder anciënniteitstoeslag (tot 20%).`,
    fr: `Rémunération annuelle légale, hors prime d'ancienneté (jusqu'à 20%).`,
  },
  'tip.ministerRules': {
    en: kb => `The budget act sets a base amount of ${kb} for 2026. A presidential regulation multiplies it: Prime Minister 8.68 + 2.8, Deputy Prime Minister 7.98 + 2.24, minister 7.84 + 2.10, deputy minister 7.04 + 1.92 (base salary + function allowance). Ministers are appointed employees: ZUS, the 9% health contribution and PIT apply as for anyone else. A seniority bonus of up to 20% comes on top and isn't counted. Ministers who sit in the Sejm get no MP salary, but keep the parliamentary allowance.`,
    nl: kb => `De begrotingswet legt voor 2026 een basisbedrag van ${kb} vast. Een presidentieel besluit vermenigvuldigt het: premier 8,68 + 2,8, vicepremier 7,98 + 2,24, minister 7,84 + 2,10, viceminister 7,04 + 1,92 (basisloon + functietoeslag). Ministers zijn benoemde werknemers: ZUS, de gezondheidsbijdrage van 9% en PIT gelden zoals voor iedereen. Een anciënniteitstoeslag tot 20% komt erbovenop en telt niet mee. Ministers die in de Sejm zetelen krijgen geen loon als parlementslid, maar houden de parlementaire vergoeding.`,
    fr: kb => `La loi de finances fixe un montant de base de ${kb} pour 2026. Un règlement présidentiel le multiplie : Premier ministre 8,68 + 2,8, vice-Premier ministre 7,98 + 2,24, ministre 7,84 + 2,10, vice-ministre 7,04 + 1,92 (salaire de base + indemnité de fonction). Les ministres sont des salariés nommés : ZUS, cotisation santé de 9% et PIT s'appliquent comme pour tout le monde. Une prime d'ancienneté jusqu'à 20% s'ajoute et n'est pas comptée. Les ministres députés ne touchent pas le salaire de député mais gardent l'indemnité parlementaire.`,
  },
  'bd.minGross': { en: `Ministerial pay`, nl: `Ministersloon`, fr: `Rémunération ministérielle` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: kb => `Base salary + function allowance, as multiples of the 2026 base amount of ${kb}.`,
    nl: kb => `Basisloon + functietoeslag, als veelvoud van het basisbedrag 2026 van ${kb}.`,
    fr: kb => `Salaire de base + indemnité de fonction, en multiples du montant de base 2026 de ${kb}.`,
  },
  'tip.minMonth': { en: `Per month`, nl: `Per maand`, fr: `Par mois` },
  'tip.stateCost': {
    en: `Pay + employer ZUS + the Labour Fund. State bodies don't pay into the wage guarantee fund. The work and full tax rates are measured against it.`,
    nl: `Loon + werkgevers-ZUS + het Arbeidsfonds. Overheidsinstellingen betalen niet in het loongarantiefonds. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `Rémunération + ZUS employeur + Fonds du travail. Les organismes publics ne cotisent pas au fonds de garantie des salaires. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },
  'tip.minFund': {
    en: `The State pays the 2.45% Labour Fund on ministers' pay, but not the wage guarantee fund. MPs aren't employees: neither applies.`,
    nl: `De staat betaalt het Arbeidsfonds van 2,45% op het ministersloon, maar niet het loongarantiefonds. Parlementsleden zijn geen werknemers: geen van beide is verschuldigd.`,
    fr: `L'État paie le Fonds du travail de 2,45% sur la rémunération des ministres, mais pas le fonds de garantie des salaires. Les députés ne sont pas salariés : ni l'un ni l'autre.`,
  },
  'tip.minZr': { en: `Not counted in minister mode.`, nl: `Niet meegeteld in ministermodus.`, fr: `Non compté en mode ministre.` },
  polAllow: { en: `Parliamentary allowance, after tax`, nl: `Parlementaire vergoeding, na belasting`, fr: `Indemnité parlementaire, après impôt` },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.vpm': { en: `Deputy Prime Minister`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'stat.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.sec': { en: `Deputy minister`, nl: `Viceminister`, fr: `Vice-ministre` },
  'stat.mp': { en: `MP (Sejm)`, nl: `Parlementslid (Sejm)`, fr: `Député (Sejm)` },
  'pol.stat.pm': { en: `Base salary + function allowance (11.48 × base amount)`, nl: `Basisloon + functietoeslag (11,48 × basisbedrag)`, fr: `Salaire de base + indemnité de fonction (11,48 × montant de base)` },
  'pol.stat.vpm': { en: `Base salary + function allowance (10.22 × base amount)`, nl: `Basisloon + functietoeslag (10,22 × basisbedrag)`, fr: `Salaire de base + indemnité de fonction (10,22 × montant de base)` },
  'pol.stat.min': { en: `Base salary + function allowance (9.94 × base amount)`, nl: `Basisloon + functietoeslag (9,94 × basisbedrag)`, fr: `Salaire de base + indemnité de fonction (9,94 × montant de base)` },
  'pol.stat.sec': { en: `Base salary + function allowance (8.96 × base amount)`, nl: `Basisloon + functietoeslag (8,96 × basisbedrag)`, fr: `Salaire de base + indemnité de fonction (8,96 × montant de base)` },
  'pol.stat.mp': { en: `MP salary, 80% of a deputy minister's pay, plus a parliamentary allowance of 25%`, nl: `Loon als parlementslid, 80% van het loon van een viceminister, plus een parlementaire vergoeding van 25%`, fr: `Salaire de député, 80% de celui d'un vice-ministre, plus une indemnité parlementaire de 25%` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-controlled companies, gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon`, fr: `Dirigeants d'entreprises contrôlées par l'État, rémunération brute` },
  'pol.nbp': { en: `President, National Bank of Poland`, nl: `President, Nationale Bank van Polen`, fr: `Président de la Banque nationale de Pologne` },
  'pol.orlen': { en: `CEO, Orlen`, nl: `CEO, Orlen`, fr: `Président du directoire d'Orlen` },
  'polNote.minister': {
    en: `Base salary + function allowance, taxed like any salary: ZUS, 9% health contribution, PIT. Seniority bonus and official housing not counted. The head sits at the employee salary with the same net, with your household; the dot is their actual gross.`,
    nl: `Basisloon + functietoeslag, belast zoals elk loon: ZUS, gezondheidsbijdrage van 9%, PIT. Anciënniteitstoeslag en ambtswoning niet meegeteld. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin; het bolletje is hun echte bruto.`,
    fr: `Salaire de base + indemnité de fonction, imposés comme tout salaire : ZUS, cotisation santé de 9%, PIT. Prime d'ancienneté et logement de fonction non comptés. La tête est au salaire d'un salarié au même net, avec votre foyer ; le point est leur vrai brut.`,
  },
  'polNote.mp': {
    en: `MP salary with ZUS, health contribution and PIT, plus the parliamentary allowance: tax-free up to zł 3,000 a month, the rest taxed. Office and housing lump sums not counted. The head sits at the employee salary with the same net.`,
    nl: `Loon als parlementslid met ZUS, gezondheidsbijdrage en PIT, plus de parlementaire vergoeding: belastingvrij tot zł 3.000 per maand, de rest belast. Forfaits voor kantoor en huisvesting niet meegeteld. Het hoofdje staat bij het werknemersloon met hetzelfde netto.`,
    fr: `Salaire de député avec ZUS, cotisation santé et PIT, plus l'indemnité parlementaire : exonérée jusqu'à 3 000 zł par mois, le reste imposé. Forfaits de bureau et de logement non comptés. La tête est au salaire d'un salarié au même net.`,
  },
  'polTipNote.nbp': {
    en: `zł 1,379,946 paid in 2024 (NBP figure, salary, function allowance and bonuses); zł 1,591,068 reported for 2025 by one outlet, not yet confirmed by the NBP.`,
    nl: `zł 1.379.946 uitbetaald in 2024 (cijfer van de NBP, loon, functietoeslag en premies); zł 1.591.068 gemeld voor 2025 door één medium, nog niet bevestigd door de NBP.`,
    fr: `1 379 946 zł versés en 2024 (chiffre de la NBP, salaire, indemnité de fonction et primes) ; 1 591 068 zł rapportés pour 2025 par un seul média, pas encore confirmés par la NBP.`,
  },
  'polTipNote.orlen': {
    en: `Fixed pay of zł 1,498,000 agreed for 2025. A variable part of up to 100% of fixed pay can come on top and isn't counted.`,
    nl: `Vast loon van zł 1.498.000 afgesproken voor 2025. Een variabel deel tot 100% van het vaste loon kan erbij komen en telt niet mee.`,
    fr: `Rémunération fixe de 1 498 000 zł convenue pour 2025. Une part variable jusqu'à 100% du fixe peut s'ajouter et n'est pas comptée.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. Ministers and MPs are placed where an employee would earn the same net; the others sit at their gross. Pay rules: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Ministers en parlementsleden staan waar een werknemer hetzelfde netto zou verdienen; de anderen staan op hun bruto. Loonregels: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. Les ministres et les députés sont placés là où un salarié gagnerait le même net ; les autres à leur brut. Règles de rémunération : ${links}.`,
  },
  'src.pol.pm': { en: `Presidential regulation on state officials' pay`, nl: `Presidentieel besluit over de lonen van staatsambten`, fr: `Règlement présidentiel sur la rémunération des hauts responsables` },
  'src.pol.vpm': { en: `Presidential regulation on state officials' pay`, nl: `Presidentieel besluit over de lonen van staatsambten`, fr: `Règlement présidentiel sur la rémunération des hauts responsables` },
  'src.pol.min': { en: `Presidential regulation on state officials' pay`, nl: `Presidentieel besluit over de lonen van staatsambten`, fr: `Règlement présidentiel sur la rémunération des hauts responsables` },
  'src.pol.sec': { en: `Presidential regulation on state officials' pay`, nl: `Presidentieel besluit over de lonen van staatsambten`, fr: `Règlement présidentiel sur la rémunération des hauts responsables` },
  'src.pol.mp': { en: `RMF24: MPs' pay in 2026`, nl: `RMF24: loon parlementsleden 2026`, fr: `RMF24 : salaire des députés en 2026` },
  'src.pol.nbp': { en: `Bankier.pl: NBP president's pay`, nl: `Bankier.pl: loon van de NBP-president`, fr: `Bankier.pl : rémunération du président de la NBP` },
  'src.pol.orlen': { en: `Money.pl: Orlen board pay`, nl: `Money.pl: loon van het Orlen-bestuur`, fr: `Money.pl : rémunération du directoire d'Orlen` },
  bracketTop: { en: `32% bracket`, nl: `schijf van 32%`, fr: `tranche à 32%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why so high between ${a} and ${b}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom zo hoog tussen ${a} en ${b}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi si élevé entre ${a} et ${b} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, mw) => b
      ? `Your household's income per person passes the zł 674 a month limit of the family allowance. Above it the allowance shrinks zloty for zloty with net income, on top of ZUS, the health contribution and PIT, so the next zloty earned can leave almost nothing. It's gone at ${b}. The minimum wage is ${mw}.`
      : `Social contributions (13.71%) and the 9% health contribution are due from the first zloty. PIT starts once taxable income passes zł 30,000 a year, so it's already due at the minimum wage of ${a}. The health contribution can't be deducted from tax.`,
    nl: (a, b, mw) => b
      ? `Het inkomen per persoon in je gezin passeert de grens van zł 674 per maand van de gezinsbijslag. Daarboven krimpt de bijslag zloty voor zloty met het netto-inkomen, bovenop ZUS, gezondheidsbijdrage en PIT, dus van de volgende verdiende zloty blijft bijna niets over. Hij is weg bij ${b}. Het minimumloon is ${mw}.`
      : `Sociale bijdragen (13,71%) en de gezondheidsbijdrage van 9% zijn verschuldigd vanaf de eerste zloty. PIT begint zodra het belastbaar inkomen zł 30.000 per jaar passeert, dus is al verschuldigd op het minimumloon van ${a}. De gezondheidsbijdrage is niet aftrekbaar van de belasting.`,
    fr: (a, b, mw) => b
      ? `Le revenu par personne de votre foyer dépasse le plafond de 674 zł par mois de l'allocation familiale. Au-delà, l'allocation baisse d'un zloty par zloty de revenu net, en plus des ZUS, de la cotisation santé et du PIT : le zloty suivant ne laisse presque rien. Elle disparaît à ${b}. Le salaire minimum est de ${mw}.`
      : `Les cotisations sociales (13,71%) et la cotisation santé de 9% sont dues dès le premier zloty. Le PIT commence quand le revenu imposable dépasse 30 000 zł par an : il est donc déjà dû au salaire minimum de ${a}. La cotisation santé n'est pas déductible de l'impôt.`,
  },
  topTitle: {
    en: (top, end) => `What changes at ${top} and ${end}?`,
    nl: (top, end) => `Wat verandert er bij ${top} en ${end}?`,
    fr: (top, end) => `Que se passe-t-il à ${top} et à ${end} ?`,
  },
  topBody: {
    en: (top, end, cap) => `From about ${top} gross, taxable income passes zł 120,000 a year and the PIT rate jumps from 12% to 32%. From ${end}, pay passes the ${cap} yearly ceiling for pension and disability contributions: they stop for the rest of the year, so the rate on the next zloty falls back. The health contribution has no ceiling.`,
    nl: (top, end, cap) => `Vanaf ongeveer ${top} bruto passeert het belastbaar inkomen zł 120.000 per jaar en springt het PIT-tarief van 12% naar 32%. Vanaf ${end} passeert het loon het jaarplafond van ${cap} voor pensioen- en arbeidsongeschiktheidsbijdragen: die stoppen voor de rest van het jaar, dus het tarief op de volgende zloty daalt weer. De gezondheidsbijdrage heeft geen plafond.`,
    fr: (top, end, cap) => `À partir d'environ ${top} brut, le revenu imposable dépasse 120 000 zł par an et le taux du PIT passe de 12% à 32%. À partir de ${end}, le salaire dépasse le plafond annuel de ${cap} des cotisations retraite et invalidité : elles s'arrêtent pour le reste de l'année, le taux sur le zloty suivant redescend. La cotisation santé n'a pas de plafond.`,
  },

  // Tax components
  'comp.er': { en: `Employer ZUS`, nl: `Werkgevers-ZUS`, fr: `ZUS employeur` },
  'comp.fund': { en: `Labour Fund and wage guarantee fund`, nl: `Arbeidsfonds en loongarantiefonds`, fr: `Fonds du travail et fonds de garantie` },
  'comp.ee': { en: `Employee ZUS`, nl: `Werknemers-ZUS`, fr: `ZUS salariale` },
  'comp.nfz': { en: `Health contribution (NFZ)`, nl: `Gezondheidsbijdrage (NFZ)`, fr: `Cotisation santé (NFZ)` },
  'comp.ir': { en: `Income tax (PIT)`, nl: `Inkomstenbelasting (PIT)`, fr: `Impôt sur le revenu (PIT)` },
  'comp.zr': { en: `Family allowance`, nl: `Gezinsbijslag`, fr: `Allocation familiale` },
  'comp.child': { en: `Child tax credit`, nl: `Belastingkorting voor kinderen`, fr: `Crédit d'impôt pour enfants` },
  irRefund: { en: `+ Child credit refund, paid by the tax office`, nl: `+ Terugbetaalde kinderkorting, van de belastingdienst`, fr: `+ Crédit enfants remboursé par le fisc` },
  zrLost: { en: `Family allowance your pay costs the household`, nl: `Gezinsbijslag die je loon het gezin kost`, fr: `Allocation familiale que votre salaire fait perdre au foyer` },
  'bd.kup': { en: `Work expense deduction`, nl: `Aftrek beroepskosten`, fr: `Frais professionnels forfaitaires` },
  'bd.exempt': { en: `PIT-free under 26`, nl: `PIT-vrij onder 26`, fr: `Exonéré de PIT avant 26 ans` },
  'bd.taxablePl': { en: `Taxable income (gross − ZUS − expenses)`, nl: `Belastbaar inkomen (bruto − ZUS − kosten)`, fr: `Revenu imposable (brut − ZUS − frais)` },
  'bd.childIn': { en: `of which child tax credit`, nl: `waarvan belastingkorting voor kinderen`, fr: `dont crédit d'impôt pour enfants` },
  'bd.irRefund': { en: `Child credit refund`, nl: `Terugbetaalde kinderkorting`, fr: `Crédit enfants remboursé` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the norm in Poland. A 13th salary exists only in the public sector and is taxed like any pay.`,
    nl: `12 maandlonen, de norm in Polen. Een 13de maand bestaat enkel in de publieke sector en wordt belast zoals elk loon.`,
    fr: `12 salaires mensuels, la norme en Pologne. Un 13e mois n'existe que dans le secteur public et est imposé comme tout salaire.`,
  },
  'tip.youth': {
    en: lim => `Until 26, pay up to ${lim} a year is free of PIT. ZUS and the health contribution are still due, and the expense deduction only applies to the taxed part.`,
    nl: lim => `Tot 26 jaar is loon tot ${lim} per jaar vrij van PIT. ZUS en de gezondheidsbijdrage blijven verschuldigd en de kostenaftrek geldt enkel voor het belaste deel.`,
    fr: lim => `Jusqu'à 26 ans, le salaire est exonéré de PIT jusqu'à ${lim} par an. Les ZUS et la cotisation santé restent dues, et les frais forfaitaires ne s'appliquent qu'à la part imposée.`,
  },
  'tip.jointH': { en: `Couples and parents`, nl: `Koppels en ouders`, fr: `Couples et parents` },
  'tip.joint': {
    en: `Spouses can file one return: the tax on half their combined income, doubled, which helps when one earns much more. A single parent can do the same with their child. Here, your tax = the household's tax − what it would pay if you earned nothing.`,
    nl: `Echtgenoten kunnen één aangifte doen: de belasting op de helft van hun samengeteld inkomen, verdubbeld, wat helpt als één van beiden veel meer verdient. Een alleenstaande ouder kan hetzelfde doen met het kind. Hier is jouw belasting = de belasting van het gezin − wat het zou betalen als jij niets verdiende.`,
    fr: `Les époux peuvent faire une déclaration commune : l'impôt sur la moitié de leurs revenus cumulés, doublé, ce qui aide quand l'un gagne beaucoup plus. Un parent isolé peut faire de même avec son enfant. Ici, votre impôt = l'impôt du foyer − ce qu'il paierait si vous ne gagniez rien.`,
  },
  'tip.paToggle': {
    en: (crit, amt) => `A means-tested monthly benefit of about ${amt} per child (zł 95 to zł 135 by age), paid when household income is under ${crit} per person per month. It's based on last year's income; here this year's pay is used. Supplements (single parent, large family, school) are left out.`,
    nl: (crit, amt) => `Een inkomensafhankelijke maandelijkse uitkering van ongeveer ${amt} per kind (zł 95 tot zł 135 volgens leeftijd), betaald als het gezinsinkomen onder ${crit} per persoon per maand ligt. Ze is gebaseerd op het inkomen van vorig jaar; hier wordt het loon van dit jaar gebruikt. Toeslagen (alleenstaande ouder, groot gezin, school) zijn niet meegerekend.`,
    fr: (crit, amt) => `Une prestation mensuelle sous conditions de ressources d'environ ${amt} par enfant (95 à 135 zł selon l'âge), versée quand le revenu du foyer est inférieur à ${crit} par personne et par mois. Elle se base sur les revenus de l'année précédente ; ici, le salaire de l'année est utilisé. Les suppléments (parent isolé, famille nombreuse, rentrée scolaire) ne sont pas comptés.`,
  },
  'tip.costShort': { en: `Gross salary + employer ZUS + Labour Fund and wage guarantee fund.`, nl: `Brutoloon + werkgevers-ZUS + Arbeidsfonds en loongarantiefonds.`, fr: `Salaire brut + ZUS employeur + Fonds du travail et fonds de garantie.` },
  'tip.er': {
    en: cap => `Paid by your employer on top of your gross salary: pension 9.76% and disability 6.5% up to the ${cap} yearly ceiling, accident insurance 1.67% (the rate for firms with up to 9 insured; larger firms get their own rate).`,
    nl: cap => `Betaald door je werkgever bovenop je brutoloon: pensioen 9,76% en arbeidsongeschiktheid 6,5% tot het jaarplafond van ${cap}, ongevallenverzekering 1,67% (het tarief voor firma's tot 9 verzekerden; grotere firma's krijgen een eigen tarief).`,
    fr: cap => `Payées par votre employeur en plus du salaire brut : retraite 9,76% et invalidité 6,5% jusqu'au plafond annuel de ${cap}, accidents du travail 1,67% (le taux des entreprises jusqu'à 9 assurés ; les plus grandes ont leur propre taux).`,
  },
  'tip.fund': {
    en: `Also paid by your employer, with no ceiling: the Labour Fund 2.45% (including 1.45% for the Solidarity Fund) and the wage guarantee fund 0.10%. They don't build any right of yours, so they work as a payroll tax.`,
    nl: `Ook betaald door je werkgever, zonder plafond: het Arbeidsfonds 2,45% (waarvan 1,45% voor het Solidariteitsfonds) en het loongarantiefonds 0,10%. Ze bouwen geen rechten voor jou op en werken dus als loonbelasting.`,
    fr: `Également payés par votre employeur, sans plafond : Fonds du travail 2,45% (dont 1,45% pour le Fonds de solidarité) et fonds de garantie des salaires 0,10%. Ils n'ouvrent aucun droit pour vous et agissent comme une taxe sur les salaires.`,
  },
  'tip.ee': {
    en: cap => `Withheld from your pay: pension 9.76% and disability 1.5% up to the ${cap} yearly ceiling, sickness 2.45% with no ceiling. 13.71% in all, deducted from taxable income.`,
    nl: cap => `Ingehouden op je loon: pensioen 9,76% en arbeidsongeschiktheid 1,5% tot het jaarplafond van ${cap}, ziekte 2,45% zonder plafond. Samen 13,71%, aftrekbaar van het belastbaar inkomen.`,
    fr: cap => `Retenues sur votre paie : retraite 9,76% et invalidité 1,5% jusqu'au plafond annuel de ${cap}, maladie 2,45% sans plafond. 13,71% au total, déductibles du revenu imposable.`,
  },
  'tip.em': { en: `Pension`, nl: `Pensioen`, fr: `Retraite` },
  'tip.rent': { en: `Disability`, nl: `Arbeidsongeschiktheid`, fr: `Invalidité` },
  'tip.wyp': { en: `Accident`, nl: `Ongevallen`, fr: `Accidents du travail` },
  'tip.chor': { en: `Sickness`, nl: `Ziekte`, fr: `Maladie` },
  'tip.fp': { en: `Labour Fund`, nl: `Arbeidsfonds`, fr: `Fonds du travail` },
  'tip.fgsp': { en: `Wage guarantee fund`, nl: `Loongarantiefonds`, fr: `Fonds de garantie des salaires` },
  'tip.nfz': {
    en: `9% of gross pay minus employee ZUS, with no ceiling. It funds public healthcare and, since 2022, can't be deducted from tax for employees.`,
    nl: `9% van het brutoloon min werknemers-ZUS, zonder plafond. Het financiert de openbare gezondheidszorg en is sinds 2022 niet meer aftrekbaar van de belasting voor werknemers.`,
    fr: `9% du salaire brut moins les ZUS salariales, sans plafond. Elle finance la santé publique et, depuis 2022, n'est plus déductible de l'impôt pour les salariés.`,
  },
  'tip.kup': {
    en: `A flat zł 250 a month (zł 3,000 a year) for the cost of getting to work, zł 300 if you live in another town.`,
    nl: `Een forfait van zł 250 per maand (zł 3.000 per jaar) voor de kosten om naar het werk te gaan, zł 300 als je in een andere stad woont.`,
    fr: `Un forfait de 250 zł par mois (3 000 zł par an) pour les frais de trajet, 300 zł si vous habitez une autre ville.`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − employee ZUS − the expense deduction${calc}. The health contribution isn't deductible.`,
    nl: calc => `Brutoloon − werknemers-ZUS − de kostenaftrek${calc}. De gezondheidsbijdrage is niet aftrekbaar.`,
    fr: calc => `Salaire brut − ZUS salariales − frais forfaitaires${calc}. La cotisation santé n'est pas déductible.`,
  },
  'tip.irShort': {
    en: `12% up to zł 120,000 of taxable income, 32% above, minus zł 3,600 (so the first zł 30,000 is tax-free). Then the child credit.`,
    nl: `12% tot zł 120.000 belastbaar inkomen, 32% daarboven, min zł 3.600 (dus de eerste zł 30.000 is belastingvrij). Daarna de kinderkorting.`,
    fr: `12% jusqu'à 120 000 zł de revenu imposable, 32% au-delà, moins 3 600 zł (les premiers 30 000 zł sont donc exonérés). Puis le crédit pour enfants.`,
  },
  'tip.irM': {
    en: m => m === 'joint' ? `Joint return for spouses: twice the tax on half the combined income.` : m === 'parent' ? `Single-parent return: twice the tax on half your income.` : `Individual return on the 2026 scale.`,
    nl: m => m === 'joint' ? `Gezamenlijke aangifte voor echtgenoten: tweemaal de belasting op de helft van het samengeteld inkomen.` : m === 'parent' ? `Aangifte als alleenstaande ouder: tweemaal de belasting op de helft van je inkomen.` : `Individuele aangifte volgens de schaal van 2026.`,
    fr: m => m === 'joint' ? `Déclaration commune des époux : deux fois l'impôt sur la moitié des revenus cumulés.` : m === 'parent' ? `Déclaration de parent isolé : deux fois l'impôt sur la moitié de vos revenus.` : `Déclaration individuelle au barème 2026.`,
  },
  'tip.irIncome': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'tip.irReduction': { en: `Tax-reducing amount`, nl: `Belastingverminderend bedrag`, fr: `Montant de réduction d'impôt` },
  'tip.irBase': { en: `PIT before credits`, nl: `PIT vóór kortingen`, fr: `PIT avant crédits` },
  'tip.irHousehold': { en: `Household PIT`, nl: `PIT van het gezin`, fr: `PIT du foyer` },
  'tip.irWithout': { en: `Household PIT if you earned nothing`, nl: `PIT als jij niets verdiende`, fr: `PIT du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.child': {
    en: lim => `zł 1,112.04 a year for each of the first two children, zł 2,000.04 for the third, zł 2,700 for each next one. With one child only if the household's income is under ${lim}. What the tax can't absorb is paid back, up to the ZUS and health contributions paid.`,
    nl: lim => `zł 1.112,04 per jaar voor elk van de eerste twee kinderen, zł 2.000,04 voor het derde, zł 2.700 voor elk volgend. Bij één kind enkel als het gezinsinkomen onder ${lim} ligt. Wat de belasting niet opslorpt, wordt terugbetaald, tot de betaalde ZUS- en gezondheidsbijdragen.`,
    fr: lim => `1 112,04 zł par an pour chacun des deux premiers enfants, 2 000,04 zł pour le troisième, 2 700 zł pour chaque suivant. Avec un seul enfant, seulement si le revenu du foyer est inférieur à ${lim}. Ce que l'impôt ne peut absorber est remboursé, dans la limite des cotisations ZUS et santé payées.`,
  },
  'tip.childFull': { en: n => `Credit for ${n} child${n > 1 ? 'ren' : ''}`, nl: n => `Korting voor ${n} kind${n > 1 ? 'eren' : ''}`, fr: n => `Crédit pour ${n} enfant${n > 1 ? 's' : ''}` },
  'tip.childUsed': { en: `Used against tax or paid back`, nl: `Gebruikt tegen belasting of terugbetaald`, fr: `Imputé ou remboursé` },
  'tip.zr': {
    en: (crit, amt) => `Family allowance, about ${amt} a month per child, for households under ${crit} of net income per person per month. Above the limit it's cut by the excess, zloty for zloty, and stops below zł 20. Your pay can cost the household some or all of it.`,
    nl: (crit, amt) => `Gezinsbijslag, ongeveer ${amt} per maand per kind, voor gezinnen onder ${crit} netto-inkomen per persoon per maand. Boven de grens wordt ze verminderd met het verschil, zloty voor zloty, en stopt ze onder zł 20. Jouw loon kan het gezin een deel of alles ervan kosten.`,
    fr: (crit, amt) => `Allocation familiale, environ ${amt} par mois et par enfant, pour les foyers sous ${crit} de revenu net par personne et par mois. Au-delà, elle est réduite du dépassement, zloty pour zloty, et s'arrête sous 20 zł. Votre salaire peut en faire perdre tout ou partie au foyer.`,
  },
  'tip.zrFull': { en: n => `Full allowance for ${n} child${n > 1 ? 'ren' : ''}, per month`, nl: n => `Volledige bijslag voor ${n} kind${n > 1 ? 'eren' : ''}, per maand`, fr: n => `Allocation pleine pour ${n} enfant${n > 1 ? 's' : ''}, par mois` },
  'tip.zrWith': { en: `With your pay, per month`, nl: `Met jouw loon, per maand`, fr: `Avec votre salaire, par mois` },
  'tip.zrWithout': { en: `If you earned nothing, per month`, nl: `Als jij niets verdiende, per maand`, fr: `Sans vos revenus, par mois` },
  'tip.zrYear': { en: `Lost because of your pay, per year`, nl: `Verloren door je loon, per jaar`, fr: `Perdue à cause de votre salaire, par an` },
  'tip.vatM': {
    en: `Basic food and books are at 5%, many other foods, restaurants and housing at 8%, and rent is exempt, so this is an upper bound.`,
    nl: `Basisvoeding en boeken staan op 5%, veel andere voeding, restaurants en woningbouw op 8%, en huur is vrijgesteld, dus dit is een bovengrens.`,
    fr: `L'alimentation de base et les livres sont à 5%, beaucoup d'autres aliments, la restauration et le logement à 8%, et les loyers exonérés : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − employee ZUS − health contribution − PIT (after the child credit), − any family allowance your pay costs the household.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − werknemers-ZUS − gezondheidsbijdrage − PIT (na kinderkorting), − de gezinsbijslag die je loon het gezin eventueel kost.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − ZUS salariales − cotisation santé − PIT (après crédit enfants), − l'allocation familiale que votre salaire fait éventuellement perdre.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · 2026 income (PIT act as of April 2026, budget act 2026)`,
    nl: `Gebruikte regels · inkomen 2026 (PIT-wet stand april 2026, begrotingswet 2026)`,
    fr: `Règles utilisées · revenus 2026 (loi PIT d'avril 2026, loi de finances 2026)`,
  },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Pension <span class="num">9.76%</span> and disability <span class="num">6.5%</span> up to <span class="num">zł 282,600</span> a year (30 × the forecast average wage), accident <span class="num">1.67%</span>.`,
      `Labour Fund <span class="num">2.45%</span>, wage guarantee fund <span class="num">0.10%</span>, no ceiling. About 20.5% in all.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Pensioen <span class="num">9,76%</span> en arbeidsongeschiktheid <span class="num">6,5%</span> tot <span class="num">zł 282.600</span> per jaar (30 × het verwachte gemiddelde loon), ongevallen <span class="num">1,67%</span>.`,
      `Arbeidsfonds <span class="num">2,45%</span>, loongarantiefonds <span class="num">0,10%</span>, zonder plafond. Samen ongeveer 20,5%.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Retraite <span class="num">9,76%</span> et invalidité <span class="num">6,5%</span> jusqu'à <span class="num">282 600 zł</span> par an (30 × le salaire moyen prévu), accidents du travail <span class="num">1,67%</span>.`,
      `Fonds du travail <span class="num">2,45%</span>, fonds de garantie <span class="num">0,10%</span>, sans plafond. Environ 20,5% au total.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee ZUS`, li: [
      `Pension <span class="num">9.76%</span> and disability <span class="num">1.5%</span> up to zł 282,600 a year, sickness <span class="num">2.45%</span> without ceiling: <span class="num">13.71%</span>.`,
    ] },
    nl: { h: `2 · Werknemers-ZUS`, li: [
      `Pensioen <span class="num">9,76%</span> en arbeidsongeschiktheid <span class="num">1,5%</span> tot zł 282.600 per jaar, ziekte <span class="num">2,45%</span> zonder plafond: <span class="num">13,71%</span>.`,
    ] },
    fr: { h: `2 · ZUS salariales`, li: [
      `Retraite <span class="num">9,76%</span> et invalidité <span class="num">1,5%</span> jusqu'à 282 600 zł par an, maladie <span class="num">2,45%</span> sans plafond : <span class="num">13,71%</span>.`,
    ] },
  },
  'ref.nfz': {
    en: { h: `3 · Health contribution`, li: [`<span class="num">9%</span> of gross pay minus employee ZUS, no ceiling, not deductible.`] },
    nl: { h: `3 · Gezondheidsbijdrage`, li: [`<span class="num">9%</span> van het brutoloon min werknemers-ZUS, zonder plafond, niet aftrekbaar.`] },
    fr: { h: `3 · Cotisation santé`, li: [`<span class="num">9%</span> du brut moins les ZUS salariales, sans plafond, non déductible.`] },
  },
  'ref.ir': {
    en: br => ({ h: `4 · Income tax (PIT)`, li: [
      `Scale on taxable income (gross − ZUS − zł 3,000 expenses), with the zł 3,600 reduction built in:${br}`,
      `Spouses filing jointly and single parents: twice the tax on half the income.`,
      `Under 26: pay up to <span class="num">zł 85,528</span> a year is PIT-free.`,
    ] }),
    nl: br => ({ h: `4 · Inkomstenbelasting (PIT)`, li: [
      `Schaal op belastbaar inkomen (bruto − ZUS − zł 3.000 kosten), met de vermindering van zł 3.600 erin verwerkt:${br}`,
      `Echtgenoten met gezamenlijke aangifte en alleenstaande ouders: tweemaal de belasting op de helft van het inkomen.`,
      `Onder 26: loon tot <span class="num">zł 85.528</span> per jaar is vrij van PIT.`,
    ] }),
    fr: br => ({ h: `4 · Impôt sur le revenu (PIT)`, li: [
      `Barème sur le revenu imposable (brut − ZUS − 3 000 zł de frais), avec la réduction de 3 600 zł intégrée :${br}`,
      `Époux en déclaration commune et parents isolés : deux fois l'impôt sur la moitié des revenus.`,
      `Moins de 26 ans : salaire exonéré de PIT jusqu'à <span class="num">85 528 zł</span> par an.`,
    ] }),
  },
  'ref.child': {
    en: { h: `5 · Child tax credit`, li: [
      `<span class="num">zł 1,112.04</span> a year for the 1st and 2nd child, <span class="num">zł 2,000.04</span> for the 3rd, <span class="num">zł 2,700</span> for each next.`,
      `One child: only if the household's income is under zł 112,000. Unused credit is refunded up to the contributions paid.`,
    ] },
    nl: { h: `5 · Belastingkorting voor kinderen`, li: [
      `<span class="num">zł 1.112,04</span> per jaar voor het 1ste en 2de kind, <span class="num">zł 2.000,04</span> voor het 3de, <span class="num">zł 2.700</span> voor elk volgend.`,
      `Eén kind: enkel als het gezinsinkomen onder zł 112.000 ligt. Ongebruikte korting wordt terugbetaald tot de betaalde bijdragen.`,
    ] },
    fr: { h: `5 · Crédit d'impôt pour enfants`, li: [
      `<span class="num">1 112,04 zł</span> par an pour le 1er et le 2e enfant, <span class="num">2 000,04 zł</span> pour le 3e, <span class="num">2 700 zł</span> pour chaque suivant.`,
      `Un seul enfant : seulement si le revenu du foyer est inférieur à 112 000 zł. Le crédit inutilisé est remboursé dans la limite des cotisations payées.`,
    ] },
  },
  'ref.zr': {
    en: { h: `6 · Family benefits`, li: [
      `Family allowance <span class="num">zł 95</span> to <span class="num">zł 135</span> a month per child below <span class="num">zł 674</span> net per person; cut zloty for zloty above. Modelled at zł 124 (age 5 to 18).`,
      `800+: <span class="num">zł 800</span> a month per child under 18 for everyone, so not counted in the rates.`,
    ] },
    nl: { h: `6 · Gezinsuitkeringen`, li: [
      `Gezinsbijslag <span class="num">zł 95</span> tot <span class="num">zł 135</span> per maand per kind onder <span class="num">zł 674</span> netto per persoon; daarboven zloty voor zloty verminderd. Berekend aan zł 124 (5 tot 18 jaar).`,
      `800+: <span class="num">zł 800</span> per maand per kind onder 18 voor iedereen, dus niet in de tarieven.`,
    ] },
    fr: { h: `6 · Prestations familiales`, li: [
      `Allocation familiale de <span class="num">95 zł</span> à <span class="num">135 zł</span> par mois et par enfant sous <span class="num">674 zł</span> nets par personne ; réduite zloty pour zloty au-delà. Calculée à 124 zł (5 à 18 ans).`,
      `800+ : <span class="num">800 zł</span> par mois et par enfant de moins de 18 ans pour tous, donc hors des taux.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">23%</span>, applied to all of your net pay as if you spent it. Use the slider to see other rates.`,
      `VAT inside a price = price × r / (100 + r): at 23% that's 23 / 123 = <span class="num">18.70%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">23%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar om andere tarieven te bekijken.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 23% is dat 23 / 123 = <span class="num">18,70%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">23%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour voir d'autres taux.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 23%, cela fait 23 / 123 = <span class="num">18,70%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government and Parliament`, li: [
      `Base amount 2026 <span class="num">zł 1,935.26</span>. Monthly pay: Prime Minister <span class="num">zł 22,216.78</span>, Deputy PM <span class="num">zł 19,778.36</span>, minister <span class="num">zł 19,236.48</span>, deputy minister <span class="num">zł 17,339.93</span>.`,
      `MP salary <span class="num">zł 13,871.94</span> (80% of a deputy minister) + parliamentary allowance <span class="num">zł 4,334.98</span> (25%), tax-free up to zł 3,000 a month.`,
    ] },
    nl: { h: `8 · Regering en parlement`, li: [
      `Basisbedrag 2026 <span class="num">zł 1.935,26</span>. Maandloon: premier <span class="num">zł 22.216,78</span>, vicepremier <span class="num">zł 19.778,36</span>, minister <span class="num">zł 19.236,48</span>, viceminister <span class="num">zł 17.339,93</span>.`,
      `Loon parlementslid <span class="num">zł 13.871,94</span> (80% van een viceminister) + parlementaire vergoeding <span class="num">zł 4.334,98</span> (25%), belastingvrij tot zł 3.000 per maand.`,
    ] },
    fr: { h: `8 · Gouvernement et Parlement`, li: [
      `Montant de base 2026 <span class="num">1 935,26 zł</span>. Rémunération mensuelle : Premier ministre <span class="num">22 216,78 zł</span>, vice-Premier ministre <span class="num">19 778,36 zł</span>, ministre <span class="num">19 236,48 zł</span>, vice-ministre <span class="num">17 339,93 zł</span>.`,
      `Salaire de député <span class="num">13 871,94 zł</span> (80% d'un vice-ministre) + indemnité parlementaire <span class="num">4 334,98 zł</span> (25%), exonérée jusqu'à 3 000 zł par mois.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Self-employment (B2B, 19% flat tax, lump sums) and civil contracts (zlecenie, dzieło): only the employment contract is modelled.`,
      `PPK workplace pension (2% employee, 1.5% employer, opt-out savings), the higher zł 300 expense deduction, other reliefs (4+ children, return, working pensioners), benefits in kind, family allowance supplements and housing benefit.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Zelfstandigen (B2B, vlaktaks van 19%, forfaits) en burgerlijke contracten (zlecenie, dzieło): enkel de arbeidsovereenkomst is berekend.`,
      `PPK-bedrijfspensioen (2% werknemer, 1,5% werkgever, sparen met opt-out), de hogere kostenaftrek van zł 300, andere vrijstellingen (4+ kinderen, terugkeer, werkende gepensioneerden), voordelen in natura, toeslagen op de gezinsbijslag en huurtoelage.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Indépendants (B2B, impôt forfaitaire de 19%, forfaits) et contrats civils (zlecenie, dzieło) : seul le contrat de travail est modélisé.`,
      `Épargne retraite PPK (2% salarié, 1,5% employeur, avec opt-out), les frais majorés de 300 zł, les autres exonérations (4 enfants et plus, retour au pays, retraités actifs), avantages en nature, suppléments de l'allocation familiale et aide au logement.`,
    ] },
  },

  inheritLink: {
    en: `What heirs pay on an inheritance, by relationship →`,
    nl: `Wat erfgenamen betalen op een erfenis, volgens verwantschap →`,
    fr: `Ce que paient les héritiers sur une succession, selon le lien →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and your PIT return decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en je PIT-aangifte zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et votre déclaration PIT font foi.`,
  },

  'src.act': { en: `PIT act, consolidated text 2026`, nl: `PIT-wet, gecoördineerde tekst 2026`, fr: `Loi PIT, texte consolidé 2026` },
  'src.pit': { en: `podatki.gov.pl: PIT`, nl: `podatki.gov.pl: PIT`, fr: `podatki.gov.pl : PIT` },
  'src.zus': { en: `ZUS: contribution rates`, nl: `ZUS: bijdragevoeten`, fr: `ZUS : taux de cotisation` },
  'src.cap': { en: `Ministry notice: 2026 contribution ceiling`, nl: `Ministeriële bekendmaking: bijdrageplafond 2026`, fr: `Avis ministériel : plafond des cotisations 2026` },
  'src.zr': { en: `gov.pl: family allowance`, nl: `gov.pl: gezinsbijslag`, fr: `gov.pl : allocation familiale` },
  'src.b800': { en: `gov.pl: 800+`, nl: `gov.pl: 800+`, fr: `gov.pl : 800+` },
  'src.minWage': { en: `gov.pl: minimum wage 2026`, nl: `gov.pl: minimumloon 2026`, fr: `gov.pl : salaire minimum 2026` },
  'src.gus': { en: `GUS: average wage 2025`, nl: `GUS: gemiddeld loon 2025`, fr: `GUS : salaire moyen 2025` },
  'src.median': { en: `Money.pl: GUS median wage (October 2024)`, nl: `Money.pl: mediaanloon GUS (oktober 2024)`, fr: `Money.pl : salaire médian GUS (octobre 2024)` },
  'src.vat': { en: `podatki.gov.pl: VAT`, nl: `podatki.gov.pl: btw`, fr: `podatki.gov.pl : TVA` },
  'src.reg': { en: `the presidential regulation on state officials' pay`, nl: `het presidentieel besluit over de lonen van staatsambten`, fr: `le règlement présidentiel sur la rémunération des hauts responsables` },
  'src.budget': { en: `Budget act 2026 (base amount)`, nl: `Begrotingswet 2026 (basisbedrag)`, fr: `Loi de finances 2026 (montant de base)` },
  'src.mpPay': { en: `RMF24: MPs' pay 2026`, nl: `RMF24: loon parlementsleden 2026`, fr: `RMF24 : salaire des députés 2026` },
};
