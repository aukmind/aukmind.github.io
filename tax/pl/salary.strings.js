window.TAX_STRINGS = {
  title: { en: `Polish Buying Power`, nl: `Poolse koopkracht`, fr: `Pouvoir d'achat en Pologne` },
  eyebrow: { en: `Poland · 2026 income · employment contract`, nl: `Polen · inkomen 2026 · arbeidsovereenkomst`, fr: `Pologne · revenus 2026 · contrat de travail` },
  eyebrowMinister: { en: `Poland · 2026 income · minister`, nl: `Polen · inkomen 2026 · minister`, fr: `Pologne · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Polish salary in 2026, from what your employer pays to what you can buy. For a regular employment contract (umowa o pracę), taxed at the normal rates.`,
    nl: `Alle belastingen op een Pools loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Voor een gewone arbeidsovereenkomst (umowa o pracę), belast tegen de normale tarieven.`,
    fr: `Tous les prélèvements sur un salaire polonais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Pour un contrat de travail classique (umowa o pracę), imposé aux taux normaux.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married, filing one tax return together. The tax is worked out on half of what the couple earns, then doubled. The family allowance looks at the household's income per person.`,
    nl: `Getrouwd, met één gezamenlijke belastingaangifte. De belasting wordt berekend op de helft van wat het koppel verdient, en dan verdubbeld. De gezinsbijslag kijkt naar het inkomen per persoon in het gezin.`,
    fr: `Mariés, avec une seule déclaration commune. L'impôt est calculé sur la moitié de ce que gagne le couple, puis doublé. L'allocation familiale regarde le revenu du foyer par personne.`,
  },
  partsHint: {
    en: a => `The 800+ child payment gives ${a} a month whatever you earn. It doesn't change your tax rate, so it isn't counted.`,
    nl: a => `De kinderbijslag 800+ geeft ${a} per maand, wat je ook verdient. Hij verandert je belastingtarief niet en telt dus niet mee.`,
    fr: a => `L'allocation 800+ verse ${a} par mois quel que soit votre salaire. Elle ne change pas votre taux, elle n'est donc pas comptée.`,
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
    en: `A base salary + an allowance for the post, both set as multiples of a 2026 base amount. They pay social security (ZUS), the health contribution and income tax (PIT) like any employee.`,
    nl: `Een basisloon + een toeslag voor de functie, allebei vastgelegd als veelvoud van een basisbedrag voor 2026. Ze betalen sociale zekerheid (ZUS), de gezondheidsbijdrage en inkomstenbelasting (PIT) zoals elke werknemer.`,
    fr: `Un salaire de base + une indemnité de fonction, tous deux fixés en multiples d'un montant de base 2026. Ils paient la sécurité sociale (ZUS), la cotisation santé et l'impôt sur le revenu (PIT) comme tout salarié.`,
  },
  minSalaryHint: {
    en: `Pay for the year, set by law, without the bonus for years of service (up to 20%).`,
    nl: `Loon voor het jaar, vastgelegd in de wet, zonder de toeslag voor dienstjaren (tot 20%).`,
    fr: `Rémunération de l'année, fixée par la loi, sans la prime d'ancienneté (jusqu'à 20%).`,
  },
  'tip.ministerRules': {
    en: kb => `The 2026 budget law sets a base amount of ${kb}. A decree of the President multiplies it: Prime Minister 8.68 + 2.8, Deputy Prime Minister 7.98 + 2.24, minister 7.84 + 2.10, deputy minister 7.04 + 1.92 (base salary + allowance for the post). Ministers are appointed employees, so they pay social security (ZUS), the 9% health contribution and income tax (PIT) like anyone else. A bonus for years of service, up to 20%, comes on top and isn't counted. Ministers who are also MPs get no MP salary, but keep the parliamentary allowance.`,
    nl: kb => `De begrotingswet 2026 legt een basisbedrag van ${kb} vast. Een besluit van de president vermenigvuldigt het: premier 8,68 + 2,8, vicepremier 7,98 + 2,24, minister 7,84 + 2,10, viceminister 7,04 + 1,92 (basisloon + toeslag voor de functie). Ministers zijn benoemde werknemers, dus ze betalen sociale zekerheid (ZUS), de gezondheidsbijdrage van 9% en inkomstenbelasting (PIT) zoals iedereen. Een toeslag voor dienstjaren, tot 20%, komt erbovenop en telt niet mee. Ministers die ook parlementslid zijn, krijgen geen loon als parlementslid, maar houden de parlementaire vergoeding.`,
    fr: kb => `La loi de finances 2026 fixe un montant de base de ${kb}. Un décret du Président le multiplie : Premier ministre 8,68 + 2,8, vice-Premier ministre 7,98 + 2,24, ministre 7,84 + 2,10, vice-ministre 7,04 + 1,92 (salaire de base + indemnité de fonction). Les ministres sont des salariés nommés : ils paient la sécurité sociale (ZUS), la cotisation santé de 9% et l'impôt sur le revenu (PIT) comme tout le monde. Une prime d'ancienneté, jusqu'à 20%, s'ajoute et n'est pas comptée. Les ministres qui sont aussi députés ne touchent pas le salaire de député, mais gardent l'indemnité parlementaire.`,
  },
  'bd.minGross': { en: `Ministerial pay`, nl: `Ministersloon`, fr: `Rémunération ministérielle` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: kb => `Base salary + allowance for the post, as multiples of the 2026 base amount of ${kb}.`,
    nl: kb => `Basisloon + toeslag voor de functie, als veelvoud van het basisbedrag 2026 van ${kb}.`,
    fr: kb => `Salaire de base + indemnité de fonction, en multiples du montant de base 2026 de ${kb}.`,
  },
  'tip.minMonth': { en: `Per month`, nl: `Per maand`, fr: `Par mois` },
  'tip.stateCost': {
    en: `Pay + what the State pays on top for social security (ZUS) and the Labour Fund. State bodies don't pay into the fund that covers wages when a firm goes bankrupt. The tax rates on work and in total are measured against this amount.`,
    nl: `Loon + wat de staat erbovenop betaalt voor sociale zekerheid (ZUS) en het Arbeidsfonds. Overheidsinstellingen betalen niet in het fonds dat lonen dekt als een bedrijf failliet gaat. De belasting op arbeid en de totale belasting worden aan dit bedrag afgemeten.`,
    fr: `Rémunération + ce que l'État paie en plus pour la sécurité sociale (ZUS) et le Fonds du travail. Les organismes publics ne cotisent pas au fonds qui paie les salaires en cas de faillite. Les taux de prélèvement sur le travail et au total sont calculés sur ce montant.`,
  },
  'tip.minFund': {
    en: `The State pays 2.45% to the Labour Fund on ministers' pay, but nothing to the bankruptcy wage fund. MPs aren't employees, so neither applies to them.`,
    nl: `De staat betaalt 2,45% aan het Arbeidsfonds op het ministersloon, maar niets aan het loonfonds bij faillissement. Parlementsleden zijn geen werknemers, dus geen van beide geldt voor hen.`,
    fr: `L'État paie 2,45% au Fonds du travail sur la paie des ministres, mais rien au fonds des salaires en cas de faillite. Les députés ne sont pas salariés : ni l'un ni l'autre ne s'applique à eux.`,
  },
  'tip.minZr': { en: `Not counted in minister mode.`, nl: `Niet meegeteld in ministermodus.`, fr: `Non compté en mode ministre.` },
  polAllow: { en: `Parliamentary allowance, after tax`, nl: `Parlementaire vergoeding, na belasting`, fr: `Indemnité parlementaire, après impôt` },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.vpm': { en: `Deputy Prime Minister`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'stat.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.sec': { en: `Deputy minister`, nl: `Viceminister`, fr: `Vice-ministre` },
  'stat.mp': { en: `MP (Sejm)`, nl: `Parlementslid (Sejm)`, fr: `Député (Sejm)` },
  'pol.stat.pm': { en: `Base salary + allowance for the post (11.48 × base amount)`, nl: `Basisloon + toeslag voor de functie (11,48 × basisbedrag)`, fr: `Salaire de base + indemnité de fonction (11,48 × montant de base)` },
  'pol.stat.vpm': { en: `Base salary + allowance for the post (10.22 × base amount)`, nl: `Basisloon + toeslag voor de functie (10,22 × basisbedrag)`, fr: `Salaire de base + indemnité de fonction (10,22 × montant de base)` },
  'pol.stat.min': { en: `Base salary + allowance for the post (9.94 × base amount)`, nl: `Basisloon + toeslag voor de functie (9,94 × basisbedrag)`, fr: `Salaire de base + indemnité de fonction (9,94 × montant de base)` },
  'pol.stat.sec': { en: `Base salary + allowance for the post (8.96 × base amount)`, nl: `Basisloon + toeslag voor de functie (8,96 × basisbedrag)`, fr: `Salaire de base + indemnité de fonction (8,96 × montant de base)` },
  'pol.stat.mp': { en: `MP salary (80% of a deputy minister's pay), plus a parliamentary allowance worth 25% of it`, nl: `Loon als parlementslid (80% van het loon van een viceminister), plus een parlementaire vergoeding van 25% daarvan`, fr: `Salaire de député (80% de celui d'un vice-ministre), plus une indemnité parlementaire égale à 25% de ce salaire` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-controlled companies, gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon`, fr: `Dirigeants d'entreprises contrôlées par l'État, rémunération brute` },
  'pol.nbp': { en: `President, National Bank of Poland`, nl: `President, Nationale Bank van Polen`, fr: `Président de la Banque nationale de Pologne` },
  'pol.orlen': { en: `CEO, Orlen`, nl: `CEO, Orlen`, fr: `Président du directoire d'Orlen` },
  'polNote.minister': {
    en: `Base salary + allowance for the post, taxed like any salary: social security (ZUS), 9% health contribution, income tax (PIT). The bonus for years of service and the official home aren't counted. The head marks the employee salary that leaves the same net pay, for your household. The dot is their real gross pay.`,
    nl: `Basisloon + toeslag voor de functie, belast zoals elk loon: sociale zekerheid (ZUS), gezondheidsbijdrage van 9%, inkomstenbelasting (PIT). De toeslag voor dienstjaren en de ambtswoning tellen niet mee. Het hoofdje staat bij het werknemersloon dat hetzelfde netto oplevert, voor jouw gezin. Het bolletje is hun echte brutoloon.`,
    fr: `Salaire de base + indemnité de fonction, imposés comme tout salaire : sécurité sociale (ZUS), cotisation santé de 9%, impôt sur le revenu (PIT). La prime d'ancienneté et le logement de fonction ne sont pas comptés. La tête marque le salaire d'un salarié qui donne le même net, pour votre foyer. Le point est leur vrai salaire brut.`,
  },
  'polNote.mp': {
    en: `MP salary with social security (ZUS), health contribution and income tax (PIT), plus the parliamentary allowance. That allowance is tax-free up to zł 3,000 a month, and the rest is taxed. Fixed sums for an office and housing aren't counted. The head marks the employee salary that leaves the same net pay.`,
    nl: `Loon als parlementslid met sociale zekerheid (ZUS), gezondheidsbijdrage en inkomstenbelasting (PIT), plus de parlementaire vergoeding. Die vergoeding is belastingvrij tot zł 3.000 per maand, de rest wordt belast. Vaste bedragen voor een kantoor en huisvesting tellen niet mee. Het hoofdje staat bij het werknemersloon dat hetzelfde netto oplevert.`,
    fr: `Salaire de député avec sécurité sociale (ZUS), cotisation santé et impôt sur le revenu (PIT), plus l'indemnité parlementaire. Celle-ci est exonérée jusqu'à 3 000 zł par mois, le reste est imposé. Les sommes fixes pour un bureau et un logement ne sont pas comptées. La tête marque le salaire d'un salarié qui donne le même net.`,
  },
  'polTipNote.nbp': {
    en: `zł 1,379,946 paid in 2024 (the bank's own figure: salary, allowance for the post and bonuses). One news site reported zł 1,591,068 for 2025; the bank hasn't confirmed it yet.`,
    nl: `zł 1.379.946 uitbetaald in 2024 (het cijfer van de bank zelf: loon, toeslag voor de functie en premies). Eén nieuwssite meldde zł 1.591.068 voor 2025; de bank heeft dat nog niet bevestigd.`,
    fr: `1 379 946 zł versés en 2024 (chiffre de la banque elle-même : salaire, indemnité de fonction et primes). Un site d'info a annoncé 1 591 068 zł pour 2025 ; la banque ne l'a pas encore confirmé.`,
  },
  'polTipNote.orlen': {
    en: `Fixed pay of zł 1,498,000 agreed for 2025. A bonus of up to 100% of that can come on top, and isn't counted.`,
    nl: `Vast loon van zł 1.498.000 afgesproken voor 2025. Een bonus tot 100% daarvan kan erbij komen, en telt niet mee.`,
    fr: `Rémunération fixe de 1 498 000 zł convenue pour 2025. Un bonus jusqu'à 100% de ce montant peut s'ajouter, et n'est pas compté.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. Pay is per year, shown on the chart as the year's pay ÷ 12. Ministers and MPs sit where an employee would take home the same net pay. The others sit at their gross pay. Pay rules: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Het loon is per jaar, op de grafiek als jaarloon ÷ 12. Ministers en parlementsleden staan waar een werknemer hetzelfde netto zou overhouden. De anderen staan op hun brutoloon. Loonregels: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La rémunération est annuelle, placée sur le graphique en montant de l'année ÷ 12. Les ministres et les députés sont placés là où un salarié toucherait le même net. Les autres sont à leur brut. Règles de rémunération : ${links}.`,
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
      ? `Your household's income per person goes above zł 674 a month, the limit for the family allowance. Above it, you lose one zloty of allowance for each zloty of net income. That comes on top of social security (ZUS), the health contribution and income tax (PIT), so the next zloty you earn can leave you almost nothing. The allowance is gone at ${b}. The minimum wage is ${mw}.`
      : `Social security (13.71%) and the 9% health contribution are taken from the very first zloty. Income tax (PIT) starts once your taxed income passes zł 30,000 a year, so you already pay it at the minimum wage of ${a}. The health contribution can't be taken off your tax.`,
    nl: (a, b, mw) => b
      ? `Het inkomen per persoon in je gezin gaat boven zł 674 per maand, de grens voor de gezinsbijslag. Daarboven verlies je één zloty bijslag per zloty netto-inkomen. Dat komt bovenop sociale zekerheid (ZUS), gezondheidsbijdrage en inkomstenbelasting (PIT), dus van de volgende zloty die je verdient, kan bijna niets overblijven. De bijslag is weg bij ${b}. Het minimumloon is ${mw}.`
      : `Sociale zekerheid (13,71%) en de gezondheidsbijdrage van 9% gaan er al vanaf de eerste zloty af. Inkomstenbelasting (PIT) begint zodra je belast inkomen zł 30.000 per jaar passeert, dus je betaalt ze al op het minimumloon van ${a}. De gezondheidsbijdrage mag niet van je belasting af.`,
    fr: (a, b, mw) => b
      ? `Le revenu par personne de votre foyer dépasse 674 zł par mois, la limite de l'allocation familiale. Au-delà, vous perdez un zloty d'allocation par zloty de revenu net. Cela s'ajoute à la sécurité sociale (ZUS), à la cotisation santé et à l'impôt (PIT) : le zloty suivant peut ne vous laisser presque rien. L'allocation disparaît à ${b}. Le salaire minimum est de ${mw}.`
      : `La sécurité sociale (13,71%) et la cotisation santé de 9% sont prises dès le premier zloty. L'impôt sur le revenu (PIT) commence quand votre revenu imposé dépasse 30 000 zł par an : vous le payez donc déjà au salaire minimum de ${a}. La cotisation santé ne peut pas être déduite de l'impôt.`,
  },
  topTitle: {
    en: (top, end) => `What changes at ${top} and ${end}?`,
    nl: (top, end) => `Wat verandert er bij ${top} en ${end}?`,
    fr: (top, end) => `Que se passe-t-il à ${top} et à ${end} ?`,
  },
  topBody: {
    en: (top, end, cap) => `From about ${top} gross, your taxed income passes zł 120,000 a year, and income tax on each extra zloty jumps from 12% to 32%. From ${end}, your pay for the year passes ${cap}, the upper limit for pension and disability contributions. They stop for the rest of the year, so the share taken from the next zloty falls again. The health contribution has no upper limit.`,
    nl: (top, end, cap) => `Vanaf ongeveer ${top} bruto passeert je belast inkomen zł 120.000 per jaar, en de inkomstenbelasting op elke extra zloty springt van 12% naar 32%. Vanaf ${end} passeert je jaarloon ${cap}, de bovengrens voor pensioen- en arbeidsongeschiktheidsbijdragen. Die stoppen voor de rest van het jaar, dus het deel dat van de volgende zloty afgaat, daalt weer. De gezondheidsbijdrage heeft geen bovengrens.`,
    fr: (top, end, cap) => `À partir d'environ ${top} brut, votre revenu imposé dépasse 120 000 zł par an, et l'impôt sur chaque zloty en plus passe de 12% à 32%. À partir de ${end}, votre salaire de l'année dépasse ${cap}, le plafond des cotisations retraite et invalidité. Elles s'arrêtent pour le reste de l'année, donc la part prise sur le zloty suivant redescend. La cotisation santé n'a pas de plafond.`,
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
    en: `12 monthly salaries, the usual case in Poland. A 13th month's pay only exists in the public sector, and it is taxed like any pay.`,
    nl: `12 maandlonen, het gewone geval in Polen. Een dertiende maand bestaat alleen in de publieke sector, en wordt belast zoals elk loon.`,
    fr: `12 salaires mensuels, le cas habituel en Pologne. Un 13e mois n'existe que dans le secteur public, et il est imposé comme tout salaire.`,
  },
  'tip.youth': {
    en: lim => `Until you turn 26, pay up to ${lim} a year has no income tax (PIT). You still pay social security (ZUS) and the health contribution. The flat amount for work costs only applies to the part that is taxed.`,
    nl: lim => `Tot je 26 wordt, betaal je geen inkomstenbelasting (PIT) op loon tot ${lim} per jaar. Sociale zekerheid (ZUS) en de gezondheidsbijdrage betaal je wel. Het vaste bedrag voor werkkosten geldt alleen voor het deel dat belast wordt.`,
    fr: lim => `Jusqu'à vos 26 ans, le salaire jusqu'à ${lim} par an n'a pas d'impôt sur le revenu (PIT). Vous payez toujours la sécurité sociale (ZUS) et la cotisation santé. Le forfait pour frais de travail ne vaut que pour la part imposée.`,
  },
  'tip.jointH': { en: `Couples and parents`, nl: `Koppels en ouders`, fr: `Couples et parents` },
  'tip.joint': {
    en: `A married couple can file one return. The tax is worked out on half of what they earn together, then doubled. That helps when one earns much more than the other. A single parent can do the same with their child. Here, your tax is the household's tax minus what it would pay if you earned nothing.`,
    nl: `Een getrouwd koppel kan één aangifte doen. De belasting wordt berekend op de helft van wat ze samen verdienen, en dan verdubbeld. Dat helpt als de ene veel meer verdient dan de andere. Een alleenstaande ouder kan hetzelfde doen met het kind. Hier is jouw belasting die van het gezin min wat het zou betalen als jij niets verdiende.`,
    fr: `Un couple marié peut faire une seule déclaration. L'impôt est calculé sur la moitié de ce qu'ils gagnent ensemble, puis doublé. Cela aide quand l'un gagne beaucoup plus que l'autre. Un parent isolé peut faire de même avec son enfant. Ici, votre impôt est celui du foyer moins ce qu'il paierait si vous ne gagniez rien.`,
  },
  'tip.paToggle': {
    en: (crit, amt) => `A monthly payment for low-income families, about ${amt} per child (zł 95 to zł 135 depending on age). You get it when the household earns less than ${crit} per person per month. It really looks at last year's income; here this year's pay is used. Extras (single parent, big family, start of school) are left out.`,
    nl: (crit, amt) => `Een maandelijkse uitkering voor gezinnen met een laag inkomen, ongeveer ${amt} per kind (zł 95 tot zł 135 naargelang de leeftijd). Je krijgt ze als het gezin minder dan ${crit} per persoon per maand verdient. In werkelijkheid kijkt ze naar het inkomen van vorig jaar; hier wordt het loon van dit jaar gebruikt. Extra's (alleenstaande ouder, groot gezin, begin van het schooljaar) zijn niet meegerekend.`,
    fr: (crit, amt) => `Une aide mensuelle pour les familles à bas revenu, environ ${amt} par enfant (95 à 135 zł selon l'âge). Vous la recevez quand le foyer gagne moins de ${crit} par personne et par mois. En réalité, elle regarde les revenus de l'année précédente ; ici, le salaire de l'année est utilisé. Les suppléments (parent isolé, famille nombreuse, rentrée scolaire) ne sont pas comptés.`,
  },
  'tip.costShort': { en: `Gross salary + what the employer pays on top for social security (ZUS) and two funds.`, nl: `Brutoloon + wat de werkgever er bovenop betaalt voor sociale zekerheid (ZUS) en twee fondsen.`, fr: `Salaire brut + ce que l'employeur paie en plus pour la sécurité sociale (ZUS) et deux fonds.` },
  'tip.er': {
    en: cap => `Your employer pays these on top of your gross salary: pension 9.76% and disability 6.5%, on pay up to ${cap} a year, and work-accident insurance 1.67% (the rate for firms with up to 9 insured people; bigger firms get their own rate).`,
    nl: cap => `Je werkgever betaalt deze bovenop je brutoloon: pensioen 9,76% en arbeidsongeschiktheid 6,5%, op het loon tot ${cap} per jaar, en ongevallenverzekering 1,67% (het tarief voor bedrijven met hoogstens 9 verzekerden; grotere bedrijven krijgen een eigen tarief).`,
    fr: cap => `Votre employeur les paie en plus de votre salaire brut : retraite 9,76% et invalidité 6,5%, sur le salaire jusqu'à ${cap} par an, et assurance accidents du travail 1,67% (le taux des entreprises de 9 assurés au plus ; les plus grandes ont leur propre taux).`,
  },
  'tip.fund': {
    en: `Your employer also pays these, on all your pay: the Labour Fund, 2.45% (of which 1.45% goes to the Solidarity Fund), and 0.10% to a fund that pays wages if a firm goes bankrupt. They give you no rights of your own, so they work like a tax on wages.`,
    nl: `Je werkgever betaalt ook deze, op je hele loon: het Arbeidsfonds, 2,45% (waarvan 1,45% naar het Solidariteitsfonds gaat), en 0,10% aan een fonds dat lonen betaalt als een bedrijf failliet gaat. Ze geven jou zelf geen rechten, dus ze werken als een belasting op lonen.`,
    fr: `Votre employeur paie aussi ceux-ci, sur tout votre salaire : le Fonds du travail, 2,45% (dont 1,45% vont au Fonds de solidarité), et 0,10% à un fonds qui paie les salaires en cas de faillite. Ils ne vous ouvrent aucun droit, ils agissent donc comme une taxe sur les salaires.`,
  },
  'tip.ee': {
    en: cap => `Taken from your pay: pension 9.76% and disability 1.5%, on pay up to ${cap} a year, and sickness 2.45% on all of it. 13.71% in total. You pay no income tax on this money.`,
    nl: cap => `Afgehouden van je loon: pensioen 9,76% en arbeidsongeschiktheid 1,5%, op het loon tot ${cap} per jaar, en ziekte 2,45% op het hele loon. Samen 13,71%. Op dit geld betaal je geen inkomstenbelasting.`,
    fr: cap => `Retenu sur votre paie : retraite 9,76% et invalidité 1,5%, sur le salaire jusqu'à ${cap} par an, et maladie 2,45% sur tout le salaire. 13,71% au total. Cet argent n'est pas imposé.`,
  },
  'tip.em': { en: `Pension`, nl: `Pensioen`, fr: `Retraite` },
  'tip.rent': { en: `Disability`, nl: `Arbeidsongeschiktheid`, fr: `Invalidité` },
  'tip.wyp': { en: `Accident`, nl: `Ongevallen`, fr: `Accidents du travail` },
  'tip.chor': { en: `Sickness`, nl: `Ziekte`, fr: `Maladie` },
  'tip.fp': { en: `Labour Fund`, nl: `Arbeidsfonds`, fr: `Fonds du travail` },
  'tip.fgsp': { en: `Wage guarantee fund`, nl: `Loongarantiefonds`, fr: `Fonds de garantie des salaires` },
  'tip.nfz': {
    en: `9% of gross pay minus your social security (ZUS), on all of it. It pays for public health care. Since 2022, employees can no longer take it off their tax.`,
    nl: `9% van het brutoloon min je sociale zekerheid (ZUS), op het hele bedrag. Het betaalt de openbare gezondheidszorg. Sinds 2022 mogen werknemers het niet meer van hun belasting aftrekken.`,
    fr: `9% du salaire brut moins votre sécurité sociale (ZUS), sur tout le montant. Elle paie la santé publique. Depuis 2022, les salariés ne peuvent plus la déduire de leur impôt.`,
  },
  'tip.kup': {
    en: `A flat zł 250 a month (zł 3,000 a year) for the cost of getting to work, or zł 300 if you live in another town. You pay no tax on it.`,
    nl: `Een vast bedrag van zł 250 per maand (zł 3.000 per jaar) voor de kosten om naar je werk te gaan, of zł 300 als je in een andere stad woont. Daarop betaal je geen belasting.`,
    fr: `Un forfait de 250 zł par mois (3 000 zł par an) pour vos frais de trajet, ou 300 zł si vous habitez une autre ville. Il n'est pas imposé.`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − your social security (ZUS) − the flat amount for work costs${calc}. The health contribution can't be taken off.`,
    nl: calc => `Brutoloon − je sociale zekerheid (ZUS) − het vaste bedrag voor werkkosten${calc}. De gezondheidsbijdrage mag er niet af.`,
    fr: calc => `Salaire brut − votre sécurité sociale (ZUS) − le forfait pour frais de travail${calc}. La cotisation santé ne peut pas être déduite.`,
  },
  'tip.irShort': {
    en: `12% on taxed income up to zł 120,000, 32% above, minus zł 3,600 (so the first zł 30,000 is tax-free). Then the tax credit for children comes off.`,
    nl: `12% op belast inkomen tot zł 120.000, 32% daarboven, min zł 3.600 (dus de eerste zł 30.000 is belastingvrij). Daarna gaat de belastingkorting voor kinderen eraf.`,
    fr: `12% sur le revenu imposé jusqu'à 120 000 zł, 32% au-delà, moins 3 600 zł (les 30 000 premiers zł ne sont donc pas imposés). Puis le crédit d'impôt pour enfants est retiré.`,
  },
  'tip.irM': {
    en: m => m === 'joint' ? `Married couple filing together: the tax on half of what they earn together, doubled.` : m === 'parent' ? `Single parent filing with their child: the tax on half of your income, doubled.` : `Filing alone, at the 2026 rates.`,
    nl: m => m === 'joint' ? `Getrouwd koppel met gezamenlijke aangifte: de belasting op de helft van wat ze samen verdienen, verdubbeld.` : m === 'parent' ? `Alleenstaande ouder met aangifte samen met het kind: de belasting op de helft van je inkomen, verdubbeld.` : `Eigen aangifte, tegen de tarieven van 2026.`,
    fr: m => m === 'joint' ? `Couple marié en déclaration commune : l'impôt sur la moitié de ce qu'ils gagnent ensemble, doublé.` : m === 'parent' ? `Parent isolé déclarant avec son enfant : l'impôt sur la moitié de vos revenus, doublé.` : `Déclaration seule, au barème 2026.`,
  },
  'tip.irIncome': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'tip.irReduction': { en: `Amount taken off the tax`, nl: `Bedrag dat van de belasting afgaat`, fr: `Montant retiré de l'impôt` },
  'tip.irBase': { en: `PIT before credits`, nl: `PIT vóór kortingen`, fr: `PIT avant crédits` },
  'tip.irHousehold': { en: `Household PIT`, nl: `PIT van het gezin`, fr: `PIT du foyer` },
  'tip.irWithout': { en: `Household PIT if you earned nothing`, nl: `PIT als jij niets verdiende`, fr: `PIT du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.child': {
    en: lim => `A discount on your tax: zł 1,112.04 a year for each of the first two children, zł 2,000.04 for the third, zł 2,700 for each one after that. With only one child, you get it only if the household earns less than ${lim}. If your tax is too small to use it all, the rest is paid to you, up to what you paid in social security and health contributions.`,
    nl: lim => `Een korting op je belasting: zł 1.112,04 per jaar voor elk van de eerste twee kinderen, zł 2.000,04 voor het derde, zł 2.700 voor elk kind daarna. Met maar één kind krijg je ze alleen als het gezin minder dan ${lim} verdient. Is je belasting te klein om alles te gebruiken, dan krijg je de rest uitbetaald, tot wat je aan sociale zekerheid en gezondheidsbijdrage betaalde.`,
    fr: lim => `Une réduction de votre impôt : 1 112,04 zł par an pour chacun des deux premiers enfants, 2 000,04 zł pour le troisième, 2 700 zł pour chaque enfant suivant. Avec un seul enfant, seulement si le foyer gagne moins de ${lim}. Si votre impôt est trop faible pour tout utiliser, le reste vous est versé, dans la limite de ce que vous avez payé en sécurité sociale et en cotisation santé.`,
  },
  'tip.childFull': { en: n => `Credit for ${n} child${n > 1 ? 'ren' : ''}`, nl: n => `Korting voor ${n} kind${n > 1 ? 'eren' : ''}`, fr: n => `Crédit pour ${n} enfant${n > 1 ? 's' : ''}` },
  'tip.childUsed': { en: `Taken off the tax or paid to you`, nl: `Van de belasting afgetrokken of aan jou uitbetaald`, fr: `Retiré de l'impôt ou versé` },
  'tip.zr': {
    en: (crit, amt) => `Family allowance: about ${amt} a month per child, for households earning less than ${crit} net per person per month. Above that limit, you lose one zloty of it for each zloty over, and it stops once it would be under zł 20. Your pay can cost the household part or all of it.`,
    nl: (crit, amt) => `Gezinsbijslag: ongeveer ${amt} per maand per kind, voor gezinnen die minder dan ${crit} netto per persoon per maand verdienen. Boven die grens verlies je één zloty ervan per zloty erboven, en hij stopt zodra hij onder zł 20 zou zakken. Jouw loon kan het gezin een deel of alles ervan kosten.`,
    fr: (crit, amt) => `Allocation familiale : environ ${amt} par mois et par enfant, pour les foyers qui gagnent moins de ${crit} nets par personne et par mois. Au-delà, vous en perdez un zloty par zloty de dépassement, et elle s'arrête dès qu'elle passerait sous 20 zł. Votre salaire peut en faire perdre une partie ou la totalité au foyer.`,
  },
  'tip.zrFull': { en: n => `Full allowance for ${n} child${n > 1 ? 'ren' : ''}, per month`, nl: n => `Volledige bijslag voor ${n} kind${n > 1 ? 'eren' : ''}, per maand`, fr: n => `Allocation pleine pour ${n} enfant${n > 1 ? 's' : ''}, par mois` },
  'tip.zrWith': { en: `With your pay, per month`, nl: `Met jouw loon, per maand`, fr: `Avec votre salaire, par mois` },
  'tip.zrWithout': { en: `If you earned nothing, per month`, nl: `Als jij niets verdiende, per maand`, fr: `Sans vos revenus, par mois` },
  'tip.zrYear': { en: `Lost because of your pay, per year`, nl: `Verloren door je loon, per jaar`, fr: `Perdue à cause de votre salaire, par an` },
  'tip.vatM': {
    en: `Basic food and books are taxed at 5%, many other foods, restaurants and housing at 8%, and rent has no VAT. So the real amount is lower than this.`,
    nl: `Basisvoeding en boeken hebben 5% btw, veel andere voeding, restaurants en woningen 8%, en op huur zit geen btw. Het echte bedrag ligt dus lager.`,
    fr: `L'alimentation de base et les livres sont à 5%, beaucoup d'autres aliments, la restauration et le logement à 8%, et les loyers n'ont pas de TVA. Le montant réel est donc plus bas.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − your social security (ZUS) − health contribution − income tax (after the child credit), − any family allowance your pay costs the household.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − je sociale zekerheid (ZUS) − gezondheidsbijdrage − inkomstenbelasting (na de kinderkorting), − de gezinsbijslag die je loon het gezin eventueel kost.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − votre sécurité sociale (ZUS) − cotisation santé − impôt sur le revenu (après le crédit enfants), − l'allocation familiale que votre salaire fait éventuellement perdre au foyer.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · 2026 income (income tax law as of April 2026, budget law 2026)`,
    nl: `Gebruikte regels · inkomen 2026 (inkomstenbelastingwet stand april 2026, begrotingswet 2026)`,
    fr: `Règles utilisées · revenus 2026 (loi sur l'impôt sur le revenu d'avril 2026, loi de finances 2026)`,
  },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Pension <span class="num">9.76%</span> and disability <span class="num">6.5%</span> on pay up to <span class="num">zł 282,600</span> a year (30 × the expected average wage), work accidents <span class="num">1.67%</span>.`,
      `Labour Fund <span class="num">2.45%</span>, bankruptcy wage fund <span class="num">0.10%</span>, on all pay. About 20.5% in total.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Pensioen <span class="num">9,76%</span> en arbeidsongeschiktheid <span class="num">6,5%</span> op het loon tot <span class="num">zł 282.600</span> per jaar (30 × het verwachte gemiddelde loon), arbeidsongevallen <span class="num">1,67%</span>.`,
      `Arbeidsfonds <span class="num">2,45%</span>, loonfonds bij faillissement <span class="num">0,10%</span>, op het hele loon. Samen ongeveer 20,5%.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Retraite <span class="num">9,76%</span> et invalidité <span class="num">6,5%</span> sur le salaire jusqu'à <span class="num">282 600 zł</span> par an (30 × le salaire moyen prévu), accidents du travail <span class="num">1,67%</span>.`,
      `Fonds du travail <span class="num">2,45%</span>, fonds des salaires en cas de faillite <span class="num">0,10%</span>, sur tout le salaire. Environ 20,5% au total.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee social security (ZUS)`, li: [
      `Pension <span class="num">9.76%</span> and disability <span class="num">1.5%</span> on pay up to zł 282,600 a year, sickness <span class="num">2.45%</span> on all pay: <span class="num">13.71%</span>.`,
    ] },
    nl: { h: `2 · Sociale zekerheid werknemer (ZUS)`, li: [
      `Pensioen <span class="num">9,76%</span> en arbeidsongeschiktheid <span class="num">1,5%</span> op het loon tot zł 282.600 per jaar, ziekte <span class="num">2,45%</span> op het hele loon: <span class="num">13,71%</span>.`,
    ] },
    fr: { h: `2 · Sécurité sociale du salarié (ZUS)`, li: [
      `Retraite <span class="num">9,76%</span> et invalidité <span class="num">1,5%</span> sur le salaire jusqu'à 282 600 zł par an, maladie <span class="num">2,45%</span> sur tout le salaire : <span class="num">13,71%</span>.`,
    ] },
  },
  'ref.nfz': {
    en: { h: `3 · Health contribution`, li: [`<span class="num">9%</span> of gross pay minus social security (ZUS), on all of it. It can't be taken off your tax.`] },
    nl: { h: `3 · Gezondheidsbijdrage`, li: [`<span class="num">9%</span> van het brutoloon min sociale zekerheid (ZUS), op het hele bedrag. Ze mag niet van je belasting af.`] },
    fr: { h: `3 · Cotisation santé`, li: [`<span class="num">9%</span> du brut moins la sécurité sociale (ZUS), sur tout le montant. Elle ne peut pas être déduite de l'impôt.`] },
  },
  'ref.ir': {
    en: br => ({ h: `4 · Income tax (PIT)`, li: [
      `Rates on taxed income (gross − social security − zł 3,000 flat for work costs), with the zł 3,600 discount already included:${br}`,
      `Married couples filing together, and single parents: the tax on half the income, doubled.`,
      `Under 26: pay up to <span class="num">zł 85,528</span> a year has no income tax.`,
    ] }),
    nl: br => ({ h: `4 · Inkomstenbelasting (PIT)`, li: [
      `Tarieven op belast inkomen (bruto − sociale zekerheid − zł 3.000 vast voor werkkosten), met de korting van zł 3.600 er al in verwerkt:${br}`,
      `Getrouwde koppels met gezamenlijke aangifte, en alleenstaande ouders: de belasting op de helft van het inkomen, verdubbeld.`,
      `Onder 26: op loon tot <span class="num">zł 85.528</span> per jaar betaal je geen inkomstenbelasting.`,
    ] }),
    fr: br => ({ h: `4 · Impôt sur le revenu (PIT)`, li: [
      `Taux sur le revenu imposé (brut − sécurité sociale − 3 000 zł fixes de frais de travail), avec la réduction de 3 600 zł déjà incluse :${br}`,
      `Couples mariés en déclaration commune, et parents isolés : l'impôt sur la moitié des revenus, doublé.`,
      `Moins de 26 ans : pas d'impôt sur le revenu jusqu'à <span class="num">85 528 zł</span> de salaire par an.`,
    ] }),
  },
  'ref.child': {
    en: { h: `5 · Tax credit for children`, li: [
      `<span class="num">zł 1,112.04</span> a year for the 1st and 2nd child, <span class="num">zł 2,000.04</span> for the 3rd, <span class="num">zł 2,700</span> for each one after that.`,
      `With one child: only if the household earns less than zł 112,000. What your tax can't absorb is paid to you, up to the contributions you paid.`,
    ] },
    nl: { h: `5 · Belastingkorting voor kinderen`, li: [
      `<span class="num">zł 1.112,04</span> per jaar voor het 1ste en 2de kind, <span class="num">zł 2.000,04</span> voor het 3de, <span class="num">zł 2.700</span> voor elk kind daarna.`,
      `Met één kind: alleen als het gezin minder dan zł 112.000 verdient. Wat je belasting niet kan opvangen, krijg je uitbetaald, tot de bijdragen die je betaalde.`,
    ] },
    fr: { h: `5 · Crédit d'impôt pour enfants`, li: [
      `<span class="num">1 112,04 zł</span> par an pour le 1er et le 2e enfant, <span class="num">2 000,04 zł</span> pour le 3e, <span class="num">2 700 zł</span> pour chaque enfant suivant.`,
      `Avec un enfant : seulement si le foyer gagne moins de 112 000 zł. Ce que votre impôt ne peut pas absorber vous est versé, dans la limite des cotisations payées.`,
    ] },
  },
  'ref.zr': {
    en: { h: `6 · Family benefits`, li: [
      `Family allowance <span class="num">zł 95</span> to <span class="num">zł 135</span> a month per child, for households under <span class="num">zł 674</span> net per person. Above that, you lose one zloty of it per zloty over. Counted here at zł 124 (age 5 to 18).`,
      `800+: <span class="num">zł 800</span> a month per child under 18, for everyone. Since it doesn't depend on pay, it isn't counted in the rates.`,
    ] },
    nl: { h: `6 · Gezinsuitkeringen`, li: [
      `Gezinsbijslag <span class="num">zł 95</span> tot <span class="num">zł 135</span> per maand per kind, voor gezinnen onder <span class="num">zł 674</span> netto per persoon. Daarboven verlies je één zloty ervan per zloty erboven. Hier geteld aan zł 124 (5 tot 18 jaar).`,
      `800+: <span class="num">zł 800</span> per maand per kind onder 18, voor iedereen. Omdat het niet van het loon afhangt, telt het niet mee in de tarieven.`,
    ] },
    fr: { h: `6 · Prestations familiales`, li: [
      `Allocation familiale de <span class="num">95 zł</span> à <span class="num">135 zł</span> par mois et par enfant, pour les foyers sous <span class="num">674 zł</span> nets par personne. Au-delà, vous en perdez un zloty par zloty de dépassement. Comptée ici à 124 zł (5 à 18 ans).`,
      `800+ : <span class="num">800 zł</span> par mois et par enfant de moins de 18 ans, pour tous. Comme elle ne dépend pas du salaire, elle n'est pas comptée dans les taux.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">23%</span>, applied to all your net pay as if you spent all of it. Use the slider to try other rates.`,
      `The VAT hidden in a price = price × r / (100 + r). At 23% that's 23 / 123 = <span class="num">18.70%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">23%</span>, toegepast op je hele nettoloon alsof je alles uitgeeft. Gebruik de schuifregelaar om andere tarieven te proberen.`,
      `De btw in een prijs = prijs × r / (100 + r). Bij 23% is dat 23 / 123 = <span class="num">18,70%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">23%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour essayer d'autres taux.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 23%, cela fait 23 / 123 = <span class="num">18,70%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government and Parliament`, li: [
      `Base amount 2026 <span class="num">zł 1,935.26</span>. Pay per month: Prime Minister <span class="num">zł 22,216.78</span>, Deputy PM <span class="num">zł 19,778.36</span>, minister <span class="num">zł 19,236.48</span>, deputy minister <span class="num">zł 17,339.93</span>.`,
      `MP salary <span class="num">zł 13,871.94</span> (80% of a deputy minister) + parliamentary allowance <span class="num">zł 4,334.98</span> (25%), tax-free up to zł 3,000 a month.`,
    ] },
    nl: { h: `8 · Regering en parlement`, li: [
      `Basisbedrag 2026 <span class="num">zł 1.935,26</span>. Loon per maand: premier <span class="num">zł 22.216,78</span>, vicepremier <span class="num">zł 19.778,36</span>, minister <span class="num">zł 19.236,48</span>, viceminister <span class="num">zł 17.339,93</span>.`,
      `Loon parlementslid <span class="num">zł 13.871,94</span> (80% van een viceminister) + parlementaire vergoeding <span class="num">zł 4.334,98</span> (25%), belastingvrij tot zł 3.000 per maand.`,
    ] },
    fr: { h: `8 · Gouvernement et Parlement`, li: [
      `Montant de base 2026 <span class="num">1 935,26 zł</span>. Paie mensuelle : Premier ministre <span class="num">22 216,78 zł</span>, vice-Premier ministre <span class="num">19 778,36 zł</span>, ministre <span class="num">19 236,48 zł</span>, vice-ministre <span class="num">17 339,93 zł</span>.`,
      `Salaire de député <span class="num">13 871,94 zł</span> (80% d'un vice-ministre) + indemnité parlementaire <span class="num">4 334,98 zł</span> (25%), exonérée jusqu'à 3 000 zł par mois.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Working for yourself (B2B, 19% flat tax, simplified flat rates) and civil-law contracts (zlecenie, dzieło). Only a regular employment contract is calculated.`,
      `The PPK workplace pension savings (2% from you, 1.5% from the employer, you can opt out), the higher zł 300 work-cost amount, other tax breaks (4+ children, moving back to Poland, working pensioners), perks like a company car, extras on the family allowance, and housing benefit.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Werken als zelfstandige (B2B, vlaktaks van 19%, vereenvoudigde vaste tarieven) en burgerrechtelijke contracten (zlecenie, dzieło). Alleen een gewone arbeidsovereenkomst wordt berekend.`,
      `Het PPK-pensioensparen via het werk (2% van jou, 1,5% van de werkgever, je kunt uitstappen), het hogere vaste bedrag van zł 300 voor werkkosten, andere belastingvoordelen (4+ kinderen, terugkeer naar Polen, werkende gepensioneerden), voordelen zoals een auto van de zaak, extra's op de gezinsbijslag, en huursteun.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Le travail à son compte (B2B, impôt fixe de 19%, forfaits simplifiés) et les contrats de droit civil (zlecenie, dzieło). Seul un contrat de travail classique est calculé.`,
      `L'épargne retraite d'entreprise PPK (2% de votre part, 1,5% de l'employeur, vous pouvez en sortir), le forfait majoré de 300 zł pour frais de travail, les autres avantages fiscaux (4 enfants et plus, retour en Pologne, retraités qui travaillent), les avantages comme une voiture de société, les suppléments de l'allocation familiale et l'aide au logement.`,
    ] },
  },

  inheritLink: {
    en: `What heirs pay on an inheritance, by relationship →`,
    nl: `Wat erfgenamen betalen op een erfenis, volgens verwantschap →`,
    fr: `Ce que paient les héritiers sur une succession, selon le lien →`,
  },
  disclaimer: {
    en: `This is only an estimate to help you get an idea. Your payslip and your income tax return have the final word.`,
    nl: `Dit is alleen een schatting om je een idee te geven. Je loonstrook en je belastingaangifte zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation pour vous donner une idée. Seuls votre fiche de paie et votre déclaration de revenus font foi.`,
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

  // Known gaps
  'gap.zr': {
    en: `Family allowance: zł 124 a month per child (the middle of zł 95 to zł 135, depending on age) and the zł 674 per person limit come from other websites, not from the law itself. The real check uses last year's income; here this year's pay is used.`,
    nl: `Gezinsbijslag: zł 124 per maand per kind (het midden van zł 95 tot zł 135, naargelang de leeftijd) en de grens van zł 674 per persoon komen van andere websites, niet uit de wet zelf. De echte toets kijkt naar het inkomen van vorig jaar; hier wordt het loon van dit jaar gebruikt.`,
    fr: `Allocation familiale : 124 zł par mois et par enfant (le milieu de 95 à 135 zł selon l'âge) et la limite de 674 zł par personne viennent d'autres sites, pas de la loi elle-même. Le vrai calcul regarde les revenus de l'année précédente ; ici, le salaire de l'année est utilisé.`,
  },
  'gap.accident': {
    en: `Work-accident insurance at 1.67% is the rate for employers with up to 9 insured people (from other websites). Bigger employers get their own rate, from 0.67% to 3.33%.`,
    nl: `De ongevallenverzekering van 1,67% is het tarief voor werkgevers met hoogstens 9 verzekerden (van andere websites). Grotere werkgevers krijgen een eigen tarief, van 0,67% tot 3,33%.`,
    fr: `L'assurance accidents du travail à 1,67% est le taux des employeurs de 9 assurés au plus (d'après d'autres sites). Les plus grands employeurs ont leur propre taux, de 0,67% à 3,33%.`,
  },
  'gap.labourFund': {
    en: `The Labour Fund (2.45%) is counted on all pay. It isn't really due on pay below the minimum wage or for older workers, but that isn't applied here.`,
    nl: `Het Arbeidsfonds (2,45%) wordt op elk loon geteld. In werkelijkheid is het niet verschuldigd op loon onder het minimumloon of voor oudere werknemers, maar dat wordt hier niet toegepast.`,
    fr: `Le Fonds du travail (2,45%) est compté sur tout salaire. Il n'est en réalité pas dû sous le salaire minimum ni pour les travailleurs âgés, mais ce n'est pas appliqué ici.`,
  },
  'gap.married': {
    en: `A couple is taken as married, so they can always file together. Unmarried partners are each taxed alone.`,
    nl: `Een koppel wordt als getrouwd beschouwd, dus ze kunnen altijd samen aangifte doen. Ongehuwde partners worden elk apart belast.`,
    fr: `Un couple est considéré comme marié, il peut donc toujours déclarer ensemble. Des partenaires non mariés sont imposés chacun seul.`,
  },
  'gap.annual': {
    en: `Tax is worked out for the whole year, as in the yearly tax return. The amount taken from each monthly payslip is a bit different, and the difference is settled in the spring.`,
    nl: `De belasting wordt voor het hele jaar berekend, zoals in de jaarlijkse aangifte. Het bedrag dat elke maand van je loon gaat, is wat anders, en het verschil wordt in het voorjaar verrekend.`,
    fr: `L'impôt est calculé sur toute l'année, comme dans la déclaration annuelle. Le montant retenu chaque mois sur la fiche de paie est un peu différent, et l'écart est régularisé au printemps.`,
  },
  'gap.check': {
    en: `No net pay was checked against an official Polish calculator.`,
    nl: `Geen enkel nettoloon werd nagekeken met een officiële Poolse rekenmodule.`,
    fr: `Aucun net n'a été vérifié avec un simulateur officiel polonais.`,
  },
  'gap.wages': {
    en: `The reference wages are older than 2026. The median (zł 6,856.75: half of workers earn more, half less) is from October 2024, reported by the press. The average (zł 8,903.56) is for 2025.`,
    nl: `De referentielonen zijn ouder dan 2026. De mediaan (zł 6.856,75: de helft van de werknemers verdient meer, de helft minder) is van oktober 2024, via de pers. Het gemiddelde (zł 8.903,56) geldt voor 2025.`,
    fr: `Les salaires de référence sont antérieurs à 2026. La médiane (6 856,75 zł : la moitié des salariés gagne plus, l'autre moitié moins) date d'octobre 2024, d'après la presse. La moyenne (8 903,56 zł) vaut pour 2025.`,
  },
  'gap.mpInsurance': {
    en: `MPs are treated like employees for social security, sickness insurance included, but pay nothing to the Labour Fund since they aren't employees. Both are our assumptions, not confirmed in the law.`,
    nl: `Parlementsleden worden voor de sociale zekerheid als werknemers behandeld, ziekteverzekering inbegrepen, maar betalen niets aan het Arbeidsfonds omdat ze geen werknemers zijn. Beide zijn onze aannames, niet bevestigd in de wet.`,
    fr: `Les députés sont traités comme des salariés pour la sécurité sociale, assurance maladie comprise, mais ne paient rien au Fonds du travail puisqu'ils ne sont pas salariés. Ce sont deux hypothèses de notre part, non confirmées dans la loi.`,
  },
  'gap.mpAllow': {
    en: `The part of the parliamentary allowance above zł 3,000 a month is all taxed at 32% here, though in reality some of it can be taxed at 12%.`,
    nl: `Het deel van de parlementaire vergoeding boven zł 3.000 per maand wordt hier volledig aan 32% belast, al kan een deel ervan in werkelijkheid aan 12% belast worden.`,
    fr: `La part de l'indemnité parlementaire au-delà de 3 000 zł par mois est ici entièrement imposée à 32%, alors qu'en réalité une partie peut l'être à 12%.`,
  },
  'gap.seniority': {
    en: `Ministers' pay here is only the base salary plus the allowance for the post. The bonus for years of service, up to 20%, is left out, so most of them earn more than shown.`,
    nl: `Het ministersloon is hier alleen het basisloon plus de toeslag voor de functie. De toeslag voor dienstjaren, tot 20%, is weggelaten, dus de meesten verdienen meer dan getoond.`,
    fr: `La paie des ministres ne compte ici que le salaire de base et l'indemnité de fonction. La prime d'ancienneté, jusqu'à 20%, est omise : la plupart gagnent donc plus que ce qui est affiché.`,
  },
  'gap.nbp': {
    en: `Central bank president: zł 1,379,946 for 2024 is the bank's own figure. zł 1,591,068 for 2025 comes from only one news site.`,
    nl: `President van de centrale bank: zł 1.379.946 voor 2024 is het cijfer van de bank zelf. zł 1.591.068 voor 2025 komt van maar één nieuwssite.`,
    fr: `Président de la banque centrale : 1 379 946 zł pour 2024 est le chiffre de la banque elle-même. 1 591 068 zł pour 2025 ne vient que d'un seul site d'info.`,
  },
  'gap.orlen': {
    en: `Orlen CEO: the zł 1,498,000 fixed pay agreed for 2025, from the press. We didn't find the 2025 pay report, and the bonus isn't counted.`,
    nl: `CEO van Orlen: het vaste loon van zł 1.498.000 afgesproken voor 2025, uit de pers. We vonden het loonverslag 2025 niet, en de bonus telt niet mee.`,
    fr: `PDG d'Orlen : la rémunération fixe de 1 498 000 zł convenue pour 2025, d'après la presse. Nous n'avons pas trouvé le rapport de rémunération 2025, et le bonus n'est pas compté.`,
  },
  'gap.notIncl': {
    en: `Working for yourself, civil-law contracts, PPK pension savings and several tax breaks aren't calculated: see "What's not included" above.`,
    nl: `Werken als zelfstandige, burgerrechtelijke contracten, PPK-pensioensparen en verschillende belastingvoordelen worden niet berekend: zie "Wat niet is meegerekend" hierboven.`,
    fr: `Le travail à son compte, les contrats de droit civil, l'épargne retraite PPK et plusieurs avantages fiscaux ne sont pas calculés : voir « Ce qui n'est pas inclus » plus haut.`,
  },
};
