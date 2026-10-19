window.TAX_STRINGS = {
  title: { en: `Luxembourg Buying Power`, nl: `Luxemburgse koopkracht`, fr: `Pouvoir d'achat au Luxembourg` },
  eyebrow: { en: `Luxembourg · income year 2026 · resident private-sector employee`, nl: `Luxemburg · inkomstenjaar 2026 · ingezeten werknemer in de privésector`, fr: `Luxembourg · revenus 2026 · salarié résident du privé` },
  eyebrowMinister: { en: `Luxembourg · income year 2026 · member of government`, nl: `Luxemburg · inkomstenjaar 2026 · regeringslid`, fr: `Luxembourg · revenus 2026 · membre du gouvernement` },
  lead: {
    en: `Every tax on a Luxembourg salary in 2026, from what your employer pays to what you can buy. For residents taxed in Luxembourg; cross-border workers follow other rules.`,
    nl: `Alle belastingen op een Luxemburgs loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Voor inwoners die in Luxemburg belast worden; grensarbeiders volgen andere regels.`,
    fr: `Tous les prélèvements sur un salaire luxembourgeois en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Pour les résidents imposés au Luxembourg ; les frontaliers suivent d'autres règles.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: { en: `Married or partners taxed jointly: tax class 2.`, nl: `Gehuwd of partners die samen belast worden: belastingklasse 2.`, fr: `Mariés ou partenaires imposés collectivement : classe d'impôt 2.` },
  classHint: { en: c => `You're taxed in ${c}. With children, a single parent is in class 1a.`, nl: c => `Je wordt belast in ${c}. Met kinderen valt een alleenstaande ouder in klasse 1a.`, fr: c => `Vous êtes imposé en ${c}. Avec des enfants, un parent seul est en classe 1a.` },
  'class.1': { en: `class 1`, nl: `klasse 1`, fr: `classe 1` },
  'class.1a': { en: `class 1a`, nl: `klasse 1a`, fr: `classe 1a` },
  'class.2': { en: `class 2`, nl: `klasse 2`, fr: `classe 2` },
  employerSize: { en: `Employer's absenteeism class (Mutualité)`, nl: `Absenteïsmeklasse van de werkgever (Mutualité)`, fr: `Classe d'absentéisme de l'employeur (Mutualité)` },
  'size.m1': { en: `0.23%`, nl: `0,23%`, fr: `0,23%` },
  'size.m2': { en: `0.95%`, nl: `0,95%`, fr: `0,95%` },
  'size.m3': { en: `1.56%`, nl: `1,56%`, fr: `1,56%` },
  'size.m4': { en: `2.66%`, nl: `2,66%`, fr: `2,66%` },
  vatStandard: { en: `(Luxembourg standard rate is 17%)`, nl: `(het Luxemburgse normale tarief is 17%)`, fr: `(le taux normal luxembourgeois est de 17%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Government rules: pay set in State index points, taxed as a salary, plus a tax-free representation allowance.`,
    nl: `Regels voor regeringsleden: loon in indexpunten van de staat, belast als loon, plus een belastingvrije representatievergoeding.`,
    fr: `Règles du gouvernement : traitement en points indiciaires de l'État, imposé comme un salaire, plus une indemnité de représentation exonérée.`,
  },
  minSalaryHint: {
    en: `Yearly traitement: index points × point value × 12. Statutory amount by default.`,
    nl: `Jaarlijkse wedde: indexpunten × puntwaarde × 12. Standaard het wettelijke bedrag.`,
    fr: `Traitement annuel : points indiciaires × valeur du point × 12. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `The Prime Minister gets 940 index points a month, a minister 805, at €25.07 a point. The Prime Minister adds a 400-point representation allowance, a minister 150 points, paid tax-free. The pay is taxed like a salary. Not confirmed: the exact social contributions of members of government; they're modelled here like an employee's, with the State paying the employer's health and pension share.`,
    nl: `De premier krijgt 940 indexpunten per maand, een minister 805, aan € 25,07 per punt. De premier krijgt daarbovenop een representatievergoeding van 400 punten, een minister 150 punten, belastingvrij. Het loon wordt belast als een loon. Niet bevestigd: de precieze sociale bijdragen van regeringsleden; hier berekend zoals bij een werknemer, waarbij de staat het werkgeversdeel voor ziekte en pensioen betaalt.`,
    fr: `Le Premier ministre perçoit 940 points indiciaires par mois, un ministre 805, à 25,07 € le point. S'y ajoute une indemnité de représentation de 400 points pour le Premier ministre et de 150 points pour un ministre, exonérée d'impôt. Le traitement est imposé comme un salaire. Non confirmé : les cotisations sociales exactes des membres du gouvernement ; elles sont calculées ici comme pour un salarié, l'État payant la part patronale maladie et pension.`,
  },
  'bd.minGross': { en: `Traitement (index points)`, nl: `Wedde (indexpunten)`, fr: `Traitement (points indiciaires)` },
  'bd.minEr': { en: `State health and pension share`, nl: `Aandeel van de staat voor ziekte en pensioen`, fr: `Part de l'État maladie et pension` },
  'bd.allow': { en: `Representation allowance (tax-free)`, nl: `Representatievergoeding (belastingvrij)`, fr: `Indemnité de représentation (exonérée)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: v => `Members of government are paid in State index points. One point is worth €${v} a month since the last index step.`,
    nl: v => `Regeringsleden worden betaald in indexpunten van de staat. Eén punt is € ${v} per maand waard sinds de laatste indexstap.`,
    fr: v => `Les membres du gouvernement sont payés en points indiciaires de l'État. Un point vaut ${v} € par mois depuis la dernière tranche indiciaire.`,
  },
  'tip.allow': {
    en: `A monthly allowance for representation costs, in non-pensionable points, not taxed. It isn't cumulative: a Deputy Prime Minister who is also Foreign Minister gets it once.`,
    nl: `Een maandelijkse vergoeding voor representatiekosten, in niet-pensioengevende punten, onbelast. Ze is niet cumuleerbaar: een vicepremier die ook minister van Buitenlandse Zaken is, krijgt ze één keer.`,
    fr: `Une indemnité mensuelle pour frais de représentation, en points non pensionnables, non imposée. Elle ne se cumule pas : un vice-Premier ministre également ministre des Affaires étrangères la touche une fois.`,
  },
  'tip.stateCost': {
    en: `Traitement + the State's health and pension share + the representation allowance. The work and full tax rates are measured against it.`,
    nl: `Wedde + het aandeel van de staat voor ziekte en pensioen + de representatievergoeding. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `Traitement + part de l'État maladie et pension + indemnité de représentation. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },
  'tip.minEr': {
    en: `Modelled as the employer's health (3.05%) and pension (8.5%) share up to the ceiling. No accident or Mutualité contribution.`,
    nl: `Berekend als het werkgeversdeel voor ziekte (3,05%) en pensioen (8,5%) tot het plafond. Geen bijdrage voor ongevallen of Mutualité.`,
    fr: `Calculée comme la part patronale maladie (3,05%) et pension (8,5%) jusqu'au plafond. Pas de cotisation accident ni Mutualité.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `Member of Parliament (député)`, nl: `Parlementslid (député)`, fr: `Député` },
  'pol.stat.pm': { en: `940 index points, plus a tax-free 400-point allowance`, nl: `940 indexpunten, plus een belastingvrije vergoeding van 400 punten`, fr: `940 points indiciaires, plus une indemnité exonérée de 400 points` },
  'pol.stat.minister': { en: `805 index points, plus a tax-free 150-point allowance`, nl: `805 indexpunten, plus een belastingvrije vergoeding van 150 punten`, fr: `805 points indiciaires, plus une indemnité exonérée de 150 points` },
  'pol.stat.mp': { en: `Parliamentary allowance of 375 index points`, nl: `Parlementaire vergoeding van 375 indexpunten`, fr: `Indemnité parlementaire de 375 points indiciaires` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-owned companies, 2025 gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon 2025`, fr: `Dirigeants d'entreprises publiques, rémunération brute 2025` },
  'pol.bcl': { en: `Director General, Banque centrale du Luxembourg`, nl: `Directeur-generaal, Banque centrale du Luxembourg`, fr: `Directeur général de la Banque centrale du Luxembourg` },
  'pol.bcee': { en: `CEO, Spuerkeess (State savings bank)`, nl: `CEO, Spuerkeess (staatsspaarbank)`, fr: `Directrice générale de la Spuerkeess (BCEE)` },
  'polNote.pm': {
    en: `Taxed as a salary, modelled with employee contributions. The tax-free representation allowance is added to the net. The head sits at the employee salary with the same net, with your household; the dot is their actual gross.`,
    nl: `Belast als loon, berekend met werknemersbijdragen. De belastingvrije representatievergoeding komt bij het netto. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin; het bolletje is hun echte bruto.`,
    fr: `Imposé comme un salaire, calculé avec les cotisations d'un salarié. L'indemnité de représentation exonérée s'ajoute au net. La tête est au salaire d'un salarié au même net, avec votre foyer ; le point est leur vrai brut.`,
  },
  'polNote.minister': {
    en: `Taxed as a salary, modelled with employee contributions. The tax-free representation allowance is added to the net. The head sits at the employee salary with the same net, with your household; the dot is their actual gross.`,
    nl: `Belast als loon, berekend met werknemersbijdragen. De belastingvrije representatievergoeding komt bij het netto. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin; het bolletje is hun echte bruto.`,
    fr: `Imposé comme un salaire, calculé avec les cotisations d'un salarié. L'indemnité de représentation exonérée s'ajoute au net. La tête est au salaire d'un salarié au même net, avec votre foyer ; le point est leur vrai brut.`,
  },
  'polNote.mp': {
    en: `Taxed as a salary, modelled with employee contributions. Not confirmed: the 375 points date from 2013 and are assumed unchanged. The head sits at the employee salary with the same net.`,
    nl: `Belast als loon, berekend met werknemersbijdragen. Niet bevestigd: de 375 punten dateren van 2013 en worden ongewijzigd verondersteld. Het hoofdje staat bij het werknemersloon met hetzelfde netto.`,
    fr: `Imposée comme un salaire, calculée avec les cotisations d'un salarié. Non confirmé : les 375 points datent de 2013 et sont supposés inchangés. La tête est au salaire d'un salarié au même net.`,
  },
  'polTipNote.bcl': {
    en: `The BCL publishes only the total for its three-member Direction: €924 932 in 2025, representation costs included. This is the average per member; the Director General likely earns more.`,
    nl: `De BCL publiceert enkel het totaal voor haar driekoppige directie: € 924.932 in 2025, representatiekosten inbegrepen. Dit is het gemiddelde per lid; de directeur-generaal verdient wellicht meer.`,
    fr: `La BCL ne publie que le total de sa Direction de trois membres : 924 932 € en 2025, frais de représentation compris. C'est la moyenne par membre ; le directeur général gagne sans doute davantage.`,
  },
  'polTipNote.bcee': {
    en: `Spuerkeess publishes only the total for its five-member executive committee: €1 287 563 in 2025. This is the average per member; the CEO likely earns more.`,
    nl: `Spuerkeess publiceert enkel het totaal voor haar vijfkoppige directiecomité: € 1.287.563 in 2025. Dit is het gemiddelde per lid; de CEO verdient wellicht meer.`,
    fr: `La Spuerkeess ne publie que le total de son comité de direction de cinq membres : 1 287 563 € en 2025. C'est la moyenne par membre ; la directrice générale gagne sans doute davantage.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ months paid. Members of government and parliament are placed where an employee would earn the same net; the others sit at their gross. State pay follows the index point, see ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ betaalde maanden. Regerings- en parlementsleden staan waar een werknemer hetzelfde netto zou verdienen; de anderen staan op hun bruto. Het loon van de staat volgt het indexpunt, zie ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ mois payés. Les membres du gouvernement et les députés sont placés là où un salarié gagnerait le même net ; les autres à leur brut. Les rémunérations de l'État suivent le point indiciaire, voir ${links}.`,
  },
  'src.pol.pm': { en: `Le Quotidien: ministers' pay`, nl: `Le Quotidien: loon van de ministers`, fr: `Le Quotidien : salaires des ministres` },
  'src.pol.minister': { en: `Le Quotidien: ministers' pay`, nl: `Le Quotidien: loon van de ministers`, fr: `Le Quotidien : salaires des ministres` },
  'src.pol.mp': { en: `Chamber of Deputies: parliamentary allowance`, nl: `Kamer: parlementaire vergoeding`, fr: `Chambre des Députés : indemnité parlementaire` },
  'src.pol.bcl': { en: `BCL: annual report 2025`, nl: `BCL: jaarverslag 2025`, fr: `BCL : rapport annuel 2025` },
  'src.pol.bcee': { en: `Spuerkeess: annual report 2025`, nl: `Spuerkeess: jaarverslag 2025`, fr: `Spuerkeess : rapport annuel 2025` },
  bracketTop: { en: `42% bracket`, nl: `schijf van 42%`, fr: `tranche à 42%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: { en: (a, b) => `Why so high between ${a} and ${b}?`, nl: (a, b) => `Waarom zo hoog tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi si élevé entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, end, cis, cim) => `Three tax credits are paid to workers whatever tax they owe, and they shrink as pay grows. The minimum-wage credit (CISSM, €81 a month) fades from ${a} to ${end} a month: 13.5 cents of each extra euro. The employee credit (CIS) and the CO2 credit (€816 a year together) fade from ${cis} to ${b}, about 2 cents per euro.${cim ? ` The single-parent credit (CIM) loses 6.12 cents per euro of taxable income above ${cim}, down to €750.` : ''}`,
    nl: (a, b, end, cis, cim) => `Drie belastingkredieten worden aan werkenden uitbetaald, hoeveel belasting ze ook verschuldigd zijn, en ze krimpen naarmate het loon stijgt. Het minimumloonkrediet (CISSM, € 81 per maand) daalt van ${a} tot ${end} per maand: 13,5 cent van elke extra euro. Het werknemerskrediet (CIS) en het CO2-krediet (samen € 816 per jaar) dalen van ${cis} tot ${b}, ongeveer 2 cent per euro.${cim ? ` Het krediet voor alleenstaande ouders (CIM) verliest 6,12 cent per euro belastbaar inkomen boven ${cim}, tot € 750.` : ''}`,
    fr: (a, b, end, cis, cim) => `Trois crédits d'impôt sont versés aux salariés quel que soit leur impôt, et ils diminuent quand le salaire augmente. Le crédit salaire social minimum (CISSM, 81 € par mois) baisse de ${a} à ${end} par mois : 13,5 centimes de chaque euro en plus. Le crédit salarié (CIS) et le crédit CO2 (816 € par an ensemble) baissent de ${cis} à ${b}, environ 2 centimes par euro.${cim ? ` Le crédit monoparental (CIM) perd 6,12 centimes par euro de revenu imposable au-delà de ${cim}, jusqu'à 750 €.` : ''}`,
  },
  topTitle: {
    en: (top, fe) => `Why the step at ${top}${fe ? ` and the one before, at ${fe}` : ''}?`,
    nl: (top, fe) => `Waarom de sprong bij ${top}${fe ? ` en die ervoor, bij ${fe}` : ''}?`,
    fr: (top, fe) => `Pourquoi la marche à ${top}${fe ? ` et celle d'avant, à ${fe}` : ''} ?`,
  },
  topBody: {
    en: (top, fe, br, thr) => `${fe ? `From ${fe} your household's taxable income passes ${thr}: the employment fund surcharge goes from 7% to 9% of the extra tax. ` : ''}From ${top} it passes ${br}, so the top 42% bracket starts: 44.9% with the surcharge.`,
    nl: (top, fe, br, thr) => `${fe ? `Vanaf ${fe} komt het belastbaar inkomen van je gezin boven ${thr}: de toeslag voor het werkgelegenheidsfonds gaat van 7% naar 9% van de extra belasting. ` : ''}Vanaf ${top} komt het boven ${br}: de hoogste schijf van 42% begint, 44,9% met de toeslag.`,
    fr: (top, fe, br, thr) => `${fe ? `À partir de ${fe}, le revenu imposable de votre foyer dépasse ${thr} : la contribution au fonds pour l'emploi passe de 7% à 9% de l'impôt supplémentaire. ` : ''}À partir de ${top}, il dépasse ${br} : la tranche à 42% commence, 44,9% avec la contribution.`,
  },

  // Tax components
  'comp.er': { en: `Employer contributions`, nl: `Werkgeversbijdragen`, fr: `Cotisations patronales` },
  'comp.ee': { en: `Employee contributions (health, pension)`, nl: `Werknemersbijdragen (ziekte, pensioen)`, fr: `Cotisations salariales (maladie, pension)` },
  'comp.dep': { en: `Long-term care contribution`, nl: `Bijdrage zorgverzekering`, fr: `Contribution dépendance` },
  'comp.ir': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'comp.fe': { en: `Employment fund surcharge`, nl: `Toeslag werkgelegenheidsfonds`, fr: `Contribution au fonds pour l'emploi` },
  'comp.cred': { en: `Tax credits (CIS, CO2, CISSM, CIM)`, nl: `Belastingkredieten (CIS, CO2, CISSM, CIM)`, fr: `Crédits d'impôt (CIS, CO2, CISSM, CIM)` },
  credReceived: { en: `+ Tax credits, paid with your salary`, nl: `+ Belastingkredieten, uitbetaald met je loon`, fr: `+ Crédits d'impôt, versés avec le salaire` },
  credLost: { en: `Tax credits your pay costs the household`, nl: `Belastingkredieten die je loon het gezin kost`, fr: `Crédits d'impôt que votre salaire fait perdre au foyer` },
  'er.health': { en: `Health`, nl: `Ziekte`, fr: `Maladie` },
  'er.pension': { en: `Pension`, nl: `Pensioen`, fr: `Pension` },
  'er.accident': { en: `Work accidents`, nl: `Arbeidsongevallen`, fr: `Accident` },
  'er.stm': { en: `Occupational health service`, nl: `Arbeidsgeneeskunde`, fr: `Santé au travail` },
  'er.mutual': { en: `Mutualité (sick pay pool)`, nl: `Mutualité (pool voor ziekteloon)`, fr: `Mutualité des employeurs` },
  'ee.health': { en: `Health 3.05% (2.80% on bonuses)`, nl: `Ziekte 3,05% (2,80% op premies)`, fr: `Maladie 3,05% (2,80% sur les gratifications)` },
  'ee.pension': { en: `Pension`, nl: `Pensioen`, fr: `Pension` },
  'bd.taxable': { en: `Gross − contributions`, nl: `Bruto − bijdragen`, fr: `Brut − cotisations` },
  'bd.fo': { en: `Work expenses lump sum`, nl: `Forfait beroepskosten`, fr: `Forfait frais d'obtention` },
  'bd.ds': { en: `Special expenses lump sum`, nl: `Forfait bijzondere uitgaven`, fr: `Forfait dépenses spéciales` },
  'bd.abat': { en: `Couple allowance (both working)`, nl: `Aftrek voor werkende koppels`, fr: `Abattement extra-professionnel` },
  'bd.npi': { en: `Your taxable income`, nl: `Jouw belastbaar inkomen`, fr: `Votre revenu imposable` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the most common package in Luxembourg. Paid holidays are part of the monthly salary.`,
    nl: `12 maandlonen, het gebruikelijkste pakket in Luxemburg. Betaald verlof zit in het maandloon.`,
    fr: `12 salaires mensuels, le cas le plus courant au Luxembourg. Les congés payés sont compris dans le salaire mensuel.`,
  },
  'tip.f13': {
    en: `12 months + a 13th month, common in banking and insurance. Health takes 2.80% on it instead of 3.05%, and if it's over €3 000 the month it's paid gets no minimum-wage credit.`,
    nl: `12 maanden + een dertiende maand, gebruikelijk bij banken en verzekeraars. Ziekte neemt er 2,80% op in plaats van 3,05%, en boven € 3.000 krijgt de maand van uitbetaling geen minimumloonkrediet.`,
    fr: `12 mois + un 13e mois, courant dans la banque et l'assurance. La cotisation maladie y est de 2,80% au lieu de 3,05%, et au-delà de 3 000 € le mois de versement ne donne pas droit au CISSM.`,
  },
  'tip.jointH': { en: `Joint taxation (class 2)`, nl: `Gezamenlijke belasting (klasse 2)`, fr: `Imposition collective (classe 2)` },
  'tip.joint': {
    en: ab => `Married couples and partners who ask for it are taxed together: twice the tax on half their income (splitting). If both work, ${ab} is taken off their income. Here, your tax = the couple's tax − what the couple would pay if you earned nothing.`,
    nl: ab => `Gehuwden en partners die erom vragen, worden samen belast: twee keer de belasting op de helft van hun inkomen (splitting). Werken ze allebei, dan gaat er ${ab} van hun inkomen af. Hier is jouw belasting = de belasting van het koppel − wat het koppel zou betalen als jij niets verdiende.`,
    fr: ab => `Les époux et les partenaires qui le demandent sont imposés ensemble : deux fois l'impôt sur la moitié de leur revenu (splitting). Si les deux travaillent, ${ab} sont déduits de leur revenu. Ici, votre impôt = l'impôt du couple − ce que paierait le couple si vous ne gagniez rien.`,
  },
  'tip.size': {
    en: `The Mutualité des employeurs refunds employers the pay of sick staff. Its rate depends on the firm's absenteeism, in four classes; most firms are in the lower ones.`,
    nl: `De Mutualité des employeurs betaalt werkgevers het loon van zieke werknemers terug. Het tarief hangt af van het absenteïsme van het bedrijf, in vier klassen; de meeste bedrijven zitten in de lagere.`,
    fr: `La Mutualité des employeurs rembourse aux employeurs le salaire des salariés malades. Son taux dépend de l'absentéisme de l'entreprise, en quatre classes ; la plupart des entreprises sont dans les plus basses.`,
  },
  'tip.costShort': { en: `Gross salary + employer contributions.`, nl: `Brutoloon + werkgeversbijdragen.`, fr: `Salaire brut + cotisations patronales.` },
  'tip.er': {
    en: c => `Paid by your employer on top of your gross salary, all up to the ceiling of 5 minimum wages (${c} a year in 2026).`,
    nl: c => `Betaald door je werkgever bovenop je brutoloon, allemaal tot het plafond van 5 minimumlonen (${c} per jaar in 2026).`,
    fr: c => `Payées par votre employeur en plus de votre salaire brut, toutes jusqu'au plafond de 5 salaires minimum (${c} par an en 2026).`,
  },
  'tip.erM': {
    en: `Accident insurance uses the 2026 base rate before the bonus-malus factor. The 0.14% occupational health fee applies to firms in the multi-sector service.`,
    nl: `De ongevallenverzekering gebruikt het basistarief van 2026 vóór de bonus-malus. De 0,14% voor arbeidsgeneeskunde geldt voor bedrijven in de multisectorale dienst.`,
    fr: `L'assurance accident est au taux de base 2026, avant le facteur bonus-malus. Les 0,14% de santé au travail concernent les entreprises affiliées au service multisectoriel.`,
  },
  'tip.ee': {
    en: c => `Withheld from your pay up to the ceiling (${c} a year): health 3.05% (2.80% on a 13th month) and pension 8.5%, up from 8% since the January 2026 pension reform. Both are deductible from taxable income.`,
    nl: c => `Ingehouden op je loon tot het plafond (${c} per jaar): ziekte 3,05% (2,80% op een dertiende maand) en pensioen 8,5%, sinds de pensioenhervorming van januari 2026 verhoogd van 8%. Beide zijn aftrekbaar van het belastbaar inkomen.`,
    fr: c => `Retenues sur votre salaire jusqu'au plafond (${c} par an) : maladie 3,05% (2,80% sur un 13e mois) et pension 8,5%, contre 8% avant la réforme des pensions de janvier 2026. Les deux sont déductibles du revenu imposable.`,
  },
  'tip.dep': {
    en: a => `1.4% of all your pay, with no ceiling, after a monthly allowance of a quarter of the minimum wage (${a} on average in 2026). It funds long-term care and is not deductible from taxable income.`,
    nl: a => `1,4% van je hele loon, zonder plafond, na een maandelijkse vrijstelling van een kwart van het minimumloon (gemiddeld ${a} in 2026). Ze financiert de zorgverzekering en is niet aftrekbaar van het belastbaar inkomen.`,
    fr: a => `1,4% de toute votre rémunération, sans plafond, après un abattement mensuel d'un quart du salaire minimum (${a} en moyenne en 2026). Elle finance l'assurance dépendance et n'est pas déductible du revenu imposable.`,
  },
  'tip.taxable': {
    en: calc => `Gross − health and pension contributions${calc}.`,
    nl: calc => `Bruto − bijdragen voor ziekte en pensioen${calc}.`,
    fr: calc => `Brut − cotisations maladie et pension${calc}.`,
  },
  'tip.fo': {
    en: v => `${v} for work costs, deducted from every salary. Commuting is a separate allowance of €99 per km beyond the first 4 (by straight line between communes), not counted here.`,
    nl: v => `${v} voor beroepskosten, afgetrokken van elk loon. Woon-werkverkeer is een aparte aftrek van € 99 per km na de eerste 4 (in rechte lijn tussen gemeenten), hier niet meegerekend.`,
    fr: v => `${v} de frais d'obtention, déduits de tout salaire. Les frais de déplacement sont un forfait à part de 99 € par unité au-delà des 4 premières (distance en ligne droite entre communes), non compté ici.`,
  },
  'tip.ds': {
    en: v => `${v} a year for insurance premiums, interest and similar costs, unless you declare more.`,
    nl: v => `${v} per jaar voor verzekeringspremies, interesten en dergelijke, tenzij je meer aangeeft.`,
    fr: v => `${v} par an pour primes d'assurance, intérêts débiteurs et dépenses similaires, sauf si vous déclarez davantage.`,
  },
  'tip.abat': {
    en: v => `A couple taxed jointly where both work gets ${v} off its taxable income, at most the lower of the two incomes.`,
    nl: v => `Een koppel dat samen belast wordt en waarvan beiden werken, krijgt ${v} aftrek op zijn belastbaar inkomen, hoogstens het laagste van beide inkomens.`,
    fr: v => `Un couple imposé collectivement dont les deux membres travaillent déduit ${v} de son revenu imposable, au plus le plus faible des deux revenus.`,
  },
  'tip.npi': {
    en: calc => `Gross − contributions − the two lump sums${calc}. Added to your partner's for a couple.`,
    nl: calc => `Bruto − bijdragen − de twee forfaits${calc}. Bij een koppel opgeteld met dat van je partner.`,
    fr: calc => `Brut − cotisations − les deux forfaits${calc}. Additionné à celui du partenaire pour un couple.`,
  },
  'tip.irShort': {
    en: `23 brackets from 0% to 42%. Class 1 uses them directly, class 2 splits the income in two, class 1a stretches the lower brackets.`,
    nl: `23 schijven van 0% tot 42%. Klasse 1 gebruikt ze rechtstreeks, klasse 2 splitst het inkomen in twee, klasse 1a rekt de lage schijven op.`,
    fr: `23 tranches de 0% à 42%. La classe 1 les applique directement, la classe 2 divise le revenu par deux, la classe 1a étire les tranches basses.`,
  },
  'tip.irClass.1': { en: `Class 1: the brackets on your taxable income.`, nl: `Klasse 1: de schijven op je belastbaar inkomen.`, fr: `Classe 1 : le barème sur votre revenu imposable.` },
  'tip.irClass.1a': {
    en: `Class 1a: the brackets on your income reduced by a quarter of what it lacks to reach €79 380, with the rate on each extra euro capped at 39% to 42% from €51 804.`,
    nl: `Klasse 1a: de schijven op je inkomen, verminderd met een kwart van wat het tekortkomt tot € 79.380, met het tarief op elke extra euro begrensd op 39% tot 42% vanaf € 51.804.`,
    fr: `Classe 1a : le barème sur votre revenu réduit d'un quart de son complément à 79 380 €, avec un taux marginal plafonné de 39% à 42% à partir de 51 804 €.`,
  },
  'tip.irClass.2': { en: `Class 2: twice the tax on half the couple's income.`, nl: `Klasse 2: twee keer de belasting op de helft van het inkomen van het koppel.`, fr: `Classe 2 : deux fois l'impôt sur la moitié du revenu du couple.` },
  'tip.irX': { en: `Household taxable income`, nl: `Belastbaar gezinsinkomen`, fr: `Revenu imposable du foyer` },
  'tip.irHousehold': { en: `Household tax`, nl: `Belasting van het gezin`, fr: `Impôt du foyer` },
  'tip.irWithout': { en: `Household tax if you earned nothing`, nl: `Belasting als jij niets verdiende`, fr: `Impôt du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.fe': {
    en: `Income tax is raised by 7% to fund the employment fund. Above €150 000 of taxable income (€300 000 in class 2) the tax beyond that point is raised by 9%.`,
    nl: `De inkomstenbelasting wordt met 7% verhoogd voor het werkgelegenheidsfonds. Boven € 150.000 belastbaar inkomen (€ 300.000 in klasse 2) wordt de belasting daarboven met 9% verhoogd.`,
    fr: `L'impôt sur le revenu est majoré de 7% au profit du fonds pour l'emploi. Au-delà de 150 000 € de revenu imposable (300 000 € en classe 2), l'impôt au-delà de ce seuil est majoré de 9%.`,
  },
  'tip.cred': {
    en: `Paid through your payslip even if you owe no tax. CIS: up to €600 a year, fading out between €40 000 and €80 000 of gross pay. CO2 credit: €216, fading over the same range. CISSM: €81 a month between €1 800 and €3 000 of monthly gross, fading to zero at €3 600. CIM: up to €3 504 for a single parent.`,
    nl: `Uitbetaald via je loonstrook, ook als je geen belasting verschuldigd bent. CIS: tot € 600 per jaar, afbouw tussen € 40.000 en € 80.000 brutoloon. CO2-krediet: € 216, afbouw over hetzelfde traject. CISSM: € 81 per maand tussen € 1.800 en € 3.000 bruto per maand, tot nul op € 3.600. CIM: tot € 3.504 voor een alleenstaande ouder.`,
    fr: `Versés avec le salaire, même sans impôt à payer. CIS : jusqu'à 600 € par an, dégressif entre 40 000 € et 80 000 € de brut. Crédit CO2 : 216 €, dégressif sur la même plage. CISSM : 81 € par mois entre 1 800 € et 3 000 € de brut mensuel, nul à 3 600 €. CIM : jusqu'à 3 504 € pour un parent seul.`,
  },
  'tip.cis': { en: `Employee credit (CIS)`, nl: `Werknemerskrediet (CIS)`, fr: `Crédit d'impôt salarié (CIS)` },
  'tip.co2': { en: `CO2 credit`, nl: `CO2-krediet`, fr: `Crédit d'impôt CO2` },
  'tip.cissmRow': { en: `Minimum-wage credit (CISSM)`, nl: `Minimumloonkrediet (CISSM)`, fr: `Crédit salaire social minimum (CISSM)` },
  'tip.cimRow': { en: `Single-parent credit (CIM)`, nl: `Krediet alleenstaande ouder (CIM)`, fr: `Crédit d'impôt monoparental (CIM)` },
  'tip.credM': {
    en: `The CO2 credit rose from €192 to €216 with the 2026 budget law. The CIM assumes you don't live with the other parent and the child gets no maintenance above €2 712 a year.`,
    nl: `Het CO2-krediet steeg van € 192 naar € 216 met de begrotingswet 2026. De CIM veronderstelt dat je niet samenwoont met de andere ouder en dat het kind geen onderhoudsgeld boven € 2.712 per jaar krijgt.`,
    fr: `Le crédit CO2 est passé de 192 € à 216 € avec la loi budgétaire 2026. Le CIM suppose que vous ne vivez pas avec l'autre parent et que l'enfant ne touche pas plus de 2 712 € de pension alimentaire par an.`,
  },
  'tip.vatM': {
    en: `The 14%, 8% and 3% rates (some wine, energy, food, books, medicines) and VAT-free spending such as rent are left out, so this is an upper bound.`,
    nl: `De tarieven van 14%, 8% en 3% (sommige wijnen, energie, voeding, boeken, geneesmiddelen) en btw-vrije uitgaven zoals huur zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Les taux de 14%, 8% et 3% (certains vins, énergie, alimentation, livres, médicaments) et les dépenses sans TVA comme le loyer ne sont pas pris en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − contributions − long-term care − income tax and surcharge + tax credits.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − bijdragen − zorgverzekering − inkomstenbelasting en toeslag + belastingkredieten.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisations − dépendance − impôt et contribution + crédits d'impôt.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026`,
    nl: `Gebruikte regels · inkomstenjaar 2026`,
    fr: `Règles utilisées · revenus 2026`,
  },
  'ref.ee': {
    en: { h: `1 · Employee contributions`, li: [
      `Health <span class="num">3.05%</span> (2.80% on bonuses), pension <span class="num">8.5%</span>, up to <span class="num">€164 590</span> a year (5 minimum wages).`,
      `Long-term care <span class="num">1.4%</span> on all pay after a quarter of the minimum wage per month.`,
    ] },
    nl: { h: `1 · Werknemersbijdragen`, li: [
      `Ziekte <span class="num">3,05%</span> (2,80% op premies), pensioen <span class="num">8,5%</span>, tot <span class="num">€ 164.590</span> per jaar (5 minimumlonen).`,
      `Zorgverzekering <span class="num">1,4%</span> op het hele loon na een kwart van het minimumloon per maand.`,
    ] },
    fr: { h: `1 · Cotisations salariales`, li: [
      `Maladie <span class="num">3,05%</span> (2,80% sur les gratifications), pension <span class="num">8,5%</span>, jusqu'à <span class="num">164 590 €</span> par an (5 salaires minimum).`,
      `Dépendance <span class="num">1,4%</span> sur toute la rémunération après un quart du salaire minimum par mois.`,
    ] },
  },
  'ref.er': {
    en: { h: `2 · Employer contributions`, li: [
      `Health <span class="num">3.05%</span>, pension <span class="num">8.5%</span>, accident <span class="num">0.65%</span>, occupational health <span class="num">0.14%</span>, Mutualité <span class="num">0.23%</span> to <span class="num">2.66%</span>, all up to the ceiling.`,
    ] },
    nl: { h: `2 · Werkgeversbijdragen`, li: [
      `Ziekte <span class="num">3,05%</span>, pensioen <span class="num">8,5%</span>, ongevallen <span class="num">0,65%</span>, arbeidsgeneeskunde <span class="num">0,14%</span>, Mutualité <span class="num">0,23%</span> tot <span class="num">2,66%</span>, allemaal tot het plafond.`,
    ] },
    fr: { h: `2 · Cotisations patronales`, li: [
      `Maladie <span class="num">3,05%</span>, pension <span class="num">8,5%</span>, accident <span class="num">0,65%</span>, santé au travail <span class="num">0,14%</span>, Mutualité <span class="num">0,23%</span> à <span class="num">2,66%</span>, toutes jusqu'au plafond.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `3 · Income tax`, li: [
      `Gross − health and pension − <span class="num">€540</span> work expenses − <span class="num">€480</span> special expenses.`,
      `Brackets (unchanged since 2025):${br}`,
      `+7% for the employment fund, 9% on the tax above €150 000 of income (€300 000 in class 2).`,
    ] }),
    nl: br => ({ h: `3 · Inkomstenbelasting`, li: [
      `Bruto − ziekte en pensioen − <span class="num">€ 540</span> beroepskosten − <span class="num">€ 480</span> bijzondere uitgaven.`,
      `Schijven (ongewijzigd sinds 2025):${br}`,
      `+7% voor het werkgelegenheidsfonds, 9% op de belasting boven € 150.000 inkomen (€ 300.000 in klasse 2).`,
    ] }),
    fr: br => ({ h: `3 · Impôt sur le revenu`, li: [
      `Brut − maladie et pension − <span class="num">540 €</span> de frais d'obtention − <span class="num">480 €</span> de dépenses spéciales.`,
      `Barème (inchangé depuis 2025) :${br}`,
      `+7% pour le fonds pour l'emploi, 9% sur l'impôt au-delà de 150 000 € de revenu (300 000 € en classe 2).`,
    ] }),
  },
  'ref.classes': {
    en: { h: `4 · Tax classes`, li: [
      `Class 1: single. Class 1a: single parent, widowed, or 64 and over. Class 2: married or partners taxed jointly.`,
      `Class 2 pays twice the tax on half the income. Couples who both work deduct <span class="num">€4 500</span>.`,
      `Couples: your tax = the couple's tax − the couple's tax without your income.`,
    ] },
    nl: { h: `4 · Belastingklassen`, li: [
      `Klasse 1: alleenstaand. Klasse 1a: alleenstaande ouder, weduw(e)naar of 64 en ouder. Klasse 2: gehuwd of partners die samen belast worden.`,
      `Klasse 2 betaalt twee keer de belasting op de helft van het inkomen. Koppels die allebei werken trekken <span class="num">€ 4.500</span> af.`,
      `Koppels: jouw belasting = belasting van het koppel − belasting van het koppel zonder jouw inkomen.`,
    ] },
    fr: { h: `4 · Classes d'impôt`, li: [
      `Classe 1 : personne seule. Classe 1a : parent seul, veuf ou 64 ans et plus. Classe 2 : mariés ou partenaires imposés collectivement.`,
      `La classe 2 paie deux fois l'impôt sur la moitié du revenu. Les couples où les deux travaillent déduisent <span class="num">4 500 €</span>.`,
      `Couple : votre impôt = impôt du couple − impôt du couple sans vos revenus.`,
    ] },
  },
  'ref.credits': {
    en: { h: `5 · Tax credits`, li: [
      `CIS <span class="num">€600</span> and CO2 credit <span class="num">€216</span>, fading from €40 000 to €80 000 of gross pay.`,
      `CISSM <span class="num">€81</span> a month for a monthly gross of €1 800 to €3 000, fading to zero at €3 600.`,
      `CIM <span class="num">€3 504</span> for a single parent, down to €750 between €60 000 and €105 000 of taxable income.`,
    ] },
    nl: { h: `5 · Belastingkredieten`, li: [
      `CIS <span class="num">€ 600</span> en CO2-krediet <span class="num">€ 216</span>, afbouw van € 40.000 tot € 80.000 brutoloon.`,
      `CISSM <span class="num">€ 81</span> per maand voor een brutomaandloon van € 1.800 tot € 3.000, tot nul op € 3.600.`,
      `CIM <span class="num">€ 3.504</span> voor een alleenstaande ouder, tot € 750 tussen € 60.000 en € 105.000 belastbaar inkomen.`,
    ] },
    fr: { h: `5 · Crédits d'impôt`, li: [
      `CIS <span class="num">600 €</span> et crédit CO2 <span class="num">216 €</span>, dégressifs de 40 000 € à 80 000 € de brut.`,
      `CISSM <span class="num">81 €</span> par mois pour un brut mensuel de 1 800 € à 3 000 €, nul à 3 600 €.`,
      `CIM <span class="num">3 504 €</span> pour un parent seul, ramené à 750 € entre 60 000 € et 105 000 € de revenu imposable.`,
    ] },
  },
  'ref.vat': {
    en: { h: `6 · VAT on spending`, li: [
      `Standard rate <span class="num">17%</span>, applied to all of your net pay as if you spent it. Use the slider to see other rates.`,
      `VAT inside a price = price × r / (100 + r): at 17% that's 17 / 117 = <span class="num">14.53%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">17%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar om andere tarieven te bekijken.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 17% is dat 17 / 117 = <span class="num">14,53%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">17%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour voir d'autres taux.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 17%, cela fait 17 / 117 = <span class="num">14,53%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and parliament`, li: [
      `Prime Minister <span class="num">940</span> index points a month, minister <span class="num">805</span>, deputy <span class="num">375</span>, at <span class="num">€25.07</span> a point.`,
      `Tax-free representation allowance: 400 points for the Prime Minister, 150 for a minister.`,
    ] },
    nl: { h: `7 · Regering en parlement`, li: [
      `Premier <span class="num">940</span> indexpunten per maand, minister <span class="num">805</span>, parlementslid <span class="num">375</span>, aan <span class="num">€ 25,07</span> per punt.`,
      `Belastingvrije representatievergoeding: 400 punten voor de premier, 150 voor een minister.`,
    ] },
    fr: { h: `7 · Gouvernement et Chambre`, li: [
      `Premier ministre <span class="num">940</span> points indiciaires par mois, ministre <span class="num">805</span>, député <span class="num">375</span>, à <span class="num">25,07 €</span> le point.`,
      `Indemnité de représentation exonérée : 400 points pour le Premier ministre, 150 pour un ministre.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Commuting allowance, actual expenses, family allowances (not linked to pay), the cost-of-living allowance (allocation de vie chère), meal vouchers, overtime, supplementary pensions.`,
      `Cross-border workers, who are taxed as non-residents. Figures are your final annual tax, not the monthly withholding.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Aftrek voor woon-werkverkeer, werkelijke kosten, kinderbijslag (niet aan het loon gekoppeld), de koopkrachttoelage (allocation de vie chère), maaltijdcheques, overuren, aanvullende pensioenen.`,
      `Grensarbeiders, die als niet-inwoners belast worden. De bedragen zijn je uiteindelijke jaarbelasting, niet de maandelijkse inhouding.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Frais de déplacement, frais réels, allocations familiales (non liées au salaire), allocation de vie chère, chèques-repas, heures supplémentaires, pensions complémentaires.`,
      `Les frontaliers, imposés comme non-résidents. Les montants sont votre impôt annuel définitif, pas la retenue mensuelle.`,
    ] },
  },

  inheritLink: {
    en: `What you'd pay on what you inherit, by relationship →`,
    nl: `Wat je zou betalen op wat je erft, volgens verwantschap →`,
    fr: `Ce que vous paieriez sur un héritage, selon le lien de parenté →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your actual tax assessment decides.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je echte aanslag is bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seul votre bulletin d'impôt fait foi.`,
  },

  'src.lir': { en: `Income tax law (LIR), text in force on 1 Jan 2026`, nl: `Wet op de inkomstenbelasting (LIR), tekst van 1 jan 2026`, fr: `L.I.R., texte coordonné au 1er janvier 2026` },
  'src.tarif': { en: `ACD: tax brackets`, nl: `ACD: belastingschijven`, fr: `ACD : tarif de base` },
  'src.formulas': { en: `ACD: tax formulas by class`, nl: `ACD: belastingformules per klasse`, fr: `ACD : barèmes et formules par classe` },
  'src.classes': { en: `ACD: tax classes`, nl: `ACD: belastingklassen`, fr: `ACD : classes d'impôt` },
  'src.fe': { en: `ACD: employment fund`, nl: `ACD: werkgelegenheidsfonds`, fr: `ACD : fonds pour l'emploi` },
  'src.cis': { en: `ACD: CIS and CO2 credit 2026`, nl: `ACD: CIS en CO2-krediet 2026`, fr: `ACD : CIS et CI-CO2 2026` },
  'src.cissm': { en: `ACD: CISSM`, nl: `ACD: CISSM`, fr: `ACD : CISSM` },
  'src.ds': { en: `ACD: special expenses`, nl: `ACD: bijzondere uitgaven`, fr: `ACD : dépenses spéciales` },
  'src.budget': { en: `Budget law 2026`, nl: `Begrotingswet 2026`, fr: `Loi budgétaire 2026` },
  'src.social': { en: `BDO: social parameters on 1 June 2026`, nl: `BDO: sociale parameters op 1 juni 2026`, fr: `BDO : paramètres sociaux au 1er juin 2026` },
  'src.statec': { en: `STATEC wages 2022 (Chronicle)`, nl: `STATEC-lonen 2022 (Chronicle)`, fr: `Salaires STATEC 2022 (Chronicle)` },
  'src.vat': { en: `Guichet.lu: VAT rates`, nl: `Guichet.lu: btw-tarieven`, fr: `Guichet.lu : taux de TVA` },
  'src.point': { en: `the civil service portal`, nl: `het portaal van het openbaar ambt`, fr: `le portail de la fonction publique` },
  'src.govPay': { en: `Le Quotidien: ministers' pay`, nl: `Le Quotidien: loon van de ministers`, fr: `Le Quotidien : salaires des ministres` },
  'src.mpPay': { en: `Chamber of Deputies: parliamentary allowance`, nl: `Kamer: parlementaire vergoeding`, fr: `Chambre des Députés : indemnité parlementaire` },
  'src.bcl': { en: `BCL: annual report 2025`, nl: `BCL: jaarverslag 2025`, fr: `BCL : rapport annuel 2025` },
  'src.bcee': { en: `Spuerkeess: annual report 2025`, nl: `Spuerkeess: jaarverslag 2025`, fr: `Spuerkeess : rapport annuel 2025` },
};
