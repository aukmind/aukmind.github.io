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
  coupleHint: { en: `Married, or partners who chose to be taxed together: tax class 2.`, nl: `Gehuwd, of partners die kozen om samen belast te worden: belastingklasse 2.`, fr: `Mariés, ou partenaires qui ont choisi d'être imposés ensemble : classe d'impôt 2.` },
  classHint: { en: c => `You're taxed in ${c}. The class sets which tax scale you use. A single parent with children is in class 1a.`, nl: c => `Je wordt belast in ${c}. De klasse bepaalt welke belastingschaal je gebruikt. Een alleenstaande ouder met kinderen valt in klasse 1a.`, fr: c => `Vous êtes imposé en ${c}. La classe fixe le barème utilisé. Un parent seul avec des enfants est en classe 1a.` },
  'class.1': { en: `class 1`, nl: `klasse 1`, fr: `classe 1` },
  'class.1a': { en: `class 1a`, nl: `klasse 1a`, fr: `classe 1a` },
  'class.2': { en: `class 2`, nl: `klasse 2`, fr: `classe 2` },
  employerSize: { en: `Your employer's sick-leave rate (Mutualité)`, nl: `Ziekteverzuim bij je werkgever (Mutualité)`, fr: `Taux d'absences maladie de l'employeur (Mutualité)` },
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
    en: `Government members follow their own rules: their pay is set in State "index points", it is taxed like a salary, and they get extra money for official expenses that is not taxed.`,
    nl: `Regeringsleden hebben eigen regels: hun loon wordt vastgelegd in "indexpunten" van de staat, het wordt belast als een loon, en ze krijgen extra geld voor representatiekosten zonder belasting.`,
    fr: `Les membres du gouvernement ont leurs propres règles : leur traitement est fixé en « points indiciaires » de l'État, il est imposé comme un salaire, et ils reçoivent en plus de l'argent pour leurs frais de représentation, sans impôt.`,
  },
  minSalaryHint: {
    en: `Yearly pay: number of points × value of one point × 12. By default, the amount set by law.`,
    nl: `Jaarloon: aantal punten × waarde van één punt × 12. Standaard het bedrag dat de wet vastlegt.`,
    fr: `Traitement annuel : nombre de points × valeur d'un point × 12. Par défaut, le montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: `The Prime Minister gets 940 points a month and a minister 805, at €25.07 a point. On top, money for official expenses, with no tax: 400 points for the Prime Minister, 150 for a minister. The pay is taxed like a salary. Not confirmed: what exactly government members pay to social security. Here we treat them like employees, with the State paying the employer's part for health and pension.`,
    nl: `De premier krijgt 940 punten per maand en een minister 805, aan € 25,07 per punt. Daarbovenop geld voor representatiekosten, zonder belasting: 400 punten voor de premier, 150 voor een minister. Het loon wordt belast als een loon. Niet bevestigd: wat regeringsleden precies aan de sociale zekerheid betalen. Hier behandelen we hen als werknemers, waarbij de staat het werkgeversdeel voor ziekte en pensioen betaalt.`,
    fr: `Le Premier ministre reçoit 940 points par mois et un ministre 805, à 25,07 € le point. En plus, de l'argent pour les frais de représentation, sans impôt : 400 points pour le Premier ministre, 150 pour un ministre. Le traitement est imposé comme un salaire. Non confirmé : ce que les membres du gouvernement paient exactement à la sécurité sociale. Ici, nous les traitons comme des salariés, l'État payant la part employeur pour la maladie et la pension.`,
  },
  'bd.minGross': { en: `Traitement (index points)`, nl: `Wedde (indexpunten)`, fr: `Traitement (points indiciaires)` },
  'bd.minEr': { en: `State health and pension share`, nl: `Aandeel van de staat voor ziekte en pensioen`, fr: `Part de l'État maladie et pension` },
  'bd.allow': { en: `Representation allowance (tax-free)`, nl: `Representatievergoeding (belastingvrij)`, fr: `Indemnité de représentation (exonérée)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: v => `Government members are paid in State "index points". One point is worth €${v} a month since pay last went up with prices.`,
    nl: v => `Regeringsleden worden betaald in "indexpunten" van de staat. Eén punt is € ${v} per maand waard sinds de lonen laatst met de prijzen stegen.`,
    fr: v => `Les membres du gouvernement sont payés en « points indiciaires » de l'État. Un point vaut ${v} € par mois depuis la dernière hausse des salaires liée aux prix.`,
  },
  'tip.allow': {
    en: `Monthly money for official expenses. It is not taxed and does not count for the pension. You only get it once: a Deputy Prime Minister who is also Foreign Minister doesn't get it twice.`,
    nl: `Maandelijks geld voor representatiekosten. Het wordt niet belast en telt niet mee voor het pensioen. Je krijgt het maar één keer: een vicepremier die ook minister van Buitenlandse Zaken is, krijgt het niet twee keer.`,
    fr: `De l'argent mensuel pour les frais de représentation. Il n'est pas imposé et ne compte pas pour la pension. On ne le touche qu'une fois : un vice-Premier ministre aussi ministre des Affaires étrangères ne le reçoit pas deux fois.`,
  },
  'tip.stateCost': {
    en: `Pay + what the State pays for health and pension + the money for official expenses. This is everything the post costs, and the tax rates on the page are compared to it.`,
    nl: `Loon + wat de staat voor ziekte en pensioen betaalt + het geld voor representatiekosten. Dit is alles wat de functie kost, en de belastingtarieven op de pagina worden ermee vergeleken.`,
    fr: `Traitement + ce que l'État paie pour la maladie et la pension + l'argent pour frais de représentation. C'est tout ce que coûte la fonction, et les taux de la page sont comparés à ce montant.`,
  },
  'tip.minEr': {
    en: `We count the employer's part for health (3.05%) and pension (8.5%), up to the ceiling. Nothing for work accidents or the sick-pay fund (Mutualité).`,
    nl: `We rekenen het werkgeversdeel voor ziekte (3,05%) en pensioen (8,5%), tot het plafond. Niets voor arbeidsongevallen of het fonds voor ziekteloon (Mutualité).`,
    fr: `Nous comptons la part employeur pour la maladie (3,05%) et la pension (8,5%), jusqu'au plafond. Rien pour les accidents du travail ni pour la Mutualité.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `Member of Parliament (député)`, nl: `Parlementslid (député)`, fr: `Député` },
  'pol.stat.pm': { en: `940 index points, plus 400 points for expenses with no tax`, nl: `940 indexpunten, plus 400 punten voor onkosten zonder belasting`, fr: `940 points indiciaires, plus 400 points pour frais sans impôt` },
  'pol.stat.minister': { en: `805 index points, plus 150 points for expenses with no tax`, nl: `805 indexpunten, plus 150 punten voor onkosten zonder belasting`, fr: `805 points indiciaires, plus 150 points pour frais sans impôt` },
  'pol.stat.mp': { en: `MP pay of 375 index points`, nl: `Loon van een parlementslid: 375 indexpunten`, fr: `Indemnité de député de 375 points indiciaires` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Heads of state-owned companies, 2025 gross pay`, nl: `Topmensen van staatsbedrijven, brutoloon 2025`, fr: `Dirigeants d'entreprises publiques, rémunération brute 2025` },
  'pol.bcl': { en: `Director General, Banque centrale du Luxembourg`, nl: `Directeur-generaal, Banque centrale du Luxembourg`, fr: `Directeur général de la Banque centrale du Luxembourg` },
  'pol.bcee': { en: `CEO, Spuerkeess (State savings bank)`, nl: `CEO, Spuerkeess (staatsspaarbank)`, fr: `Directrice générale de la Spuerkeess (BCEE)` },
  'polNote.pm': {
    en: `Taxed like a salary, with the same contributions as an employee. The money for expenses, with no tax, is added to the net. The head shows which employee salary would leave the same net pay, with your household; the dot shows what they really earn before tax.`,
    nl: `Belast als een loon, met dezelfde bijdragen als een werknemer. Het geld voor onkosten, zonder belasting, komt bij het netto. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren, met jouw gezin; het bolletje toont wat ze echt verdienen voor belastingen.`,
    fr: `Imposé comme un salaire, avec les mêmes cotisations qu'un salarié. L'argent pour frais, sans impôt, s'ajoute au net. La tête montre quel salaire d'un salarié donnerait le même net, avec votre foyer ; le point montre ce qu'ils gagnent vraiment avant impôts.`,
  },
  'polNote.minister': {
    en: `Taxed like a salary, with the same contributions as an employee. The money for expenses, with no tax, is added to the net. The head shows which employee salary would leave the same net pay, with your household; the dot shows what they really earn before tax.`,
    nl: `Belast als een loon, met dezelfde bijdragen als een werknemer. Het geld voor onkosten, zonder belasting, komt bij het netto. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren, met jouw gezin; het bolletje toont wat ze echt verdienen voor belastingen.`,
    fr: `Imposé comme un salaire, avec les mêmes cotisations qu'un salarié. L'argent pour frais, sans impôt, s'ajoute au net. La tête montre quel salaire d'un salarié donnerait le même net, avec votre foyer ; le point montre ce qu'ils gagnent vraiment avant impôts.`,
  },
  'polNote.mp': {
    en: `Taxed like a salary, with the same contributions as an employee. Not confirmed: the 375 points date from 2013 and we assume they haven't changed. The head shows which employee salary would leave the same net pay.`,
    nl: `Belast als een loon, met dezelfde bijdragen als een werknemer. Niet bevestigd: de 375 punten dateren van 2013 en we gaan ervan uit dat ze niet veranderd zijn. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren.`,
    fr: `Imposée comme un salaire, avec les mêmes cotisations qu'un salarié. Non confirmé : les 375 points datent de 2013 et nous supposons qu'ils n'ont pas changé. La tête montre quel salaire d'un salarié donnerait le même net.`,
  },
  'polTipNote.bcl': {
    en: `The BCL only publishes the total for its 3 directors together: €924 932 in 2025, expenses included. This is the average per person; the Director General probably earns more.`,
    nl: `De BCL publiceert alleen het totaal voor haar 3 directeuren samen: € 924.932 in 2025, onkosten inbegrepen. Dit is het gemiddelde per persoon; de directeur-generaal verdient waarschijnlijk meer.`,
    fr: `La BCL ne publie que le total pour ses 3 directeurs ensemble : 924 932 € en 2025, frais compris. C'est la moyenne par personne ; le directeur général gagne sans doute davantage.`,
  },
  'polTipNote.bcee': {
    en: `Spuerkeess only publishes the total for its 5 top managers together: €1 287 563 in 2025. This is the average per person; the CEO probably earns more.`,
    nl: `Spuerkeess publiceert alleen het totaal voor haar 5 topmanagers samen: € 1.287.563 in 2025. Dit is het gemiddelde per persoon; de CEO verdient waarschijnlijk meer.`,
    fr: `La Spuerkeess ne publie que le total pour ses 5 dirigeants ensemble : 1 287 563 € en 2025. C'est la moyenne par personne ; la directrice générale gagne sans doute davantage.`,
  },
  polNote: {
    en: links => `Point at a name to see details, click it to zoom in. Yearly pay before tax, placed on the chart as yearly ÷ months paid. Government members and MPs are placed where an employee would take home the same net pay; the others are placed at their pay before tax. State pay follows the value of the index point, see ${links}.`,
    nl: links => `Wijs een naam aan voor details, klik om in te zoomen. Jaarloon voor belastingen, op de grafiek geplaatst als jaarbedrag ÷ betaalde maanden. Regeringsleden en parlementsleden staan waar een werknemer hetzelfde netto zou overhouden; de anderen staan op hun loon voor belastingen. Het loon van de staat volgt de waarde van het indexpunt, zie ${links}.`,
    fr: links => `Pointez un nom pour voir les détails, cliquez pour zoomer. Rémunération annuelle brute, placée sur le graphique en montant annuel ÷ mois payés. Les membres du gouvernement et les députés sont placés là où un salarié toucherait le même net ; les autres à leur brut. Les rémunérations de l'État suivent la valeur du point indiciaire, voir ${links}.`,
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
    en: (a, b, end, cis, cim) => `Three tax credits are paid to workers even if they owe no tax, and they shrink as pay goes up. The minimum-wage credit (CISSM, €81 a month) drops from ${a} to ${end} a month: you lose 13.5 cents of it for each extra euro. The employee credit (CIS) and the CO2 credit (€816 a year together) drop from ${cis} to ${b}, about 2 cents per euro.${cim ? ` The single-parent credit (CIM) loses 6.12 cents per euro of taxable income above ${cim}, down to €750.` : ''}`,
    nl: (a, b, end, cis, cim) => `Drie belastingkredieten worden aan werkenden uitbetaald, ook als ze geen belasting verschuldigd zijn, en ze krimpen als het loon stijgt. Het minimumloonkrediet (CISSM, € 81 per maand) daalt van ${a} tot ${end} per maand: je verliest er 13,5 cent van per extra euro. Het werknemerskrediet (CIS) en het CO2-krediet (samen € 816 per jaar) dalen van ${cis} tot ${b}, ongeveer 2 cent per euro.${cim ? ` Het krediet voor alleenstaande ouders (CIM) verliest 6,12 cent per euro belastbaar inkomen boven ${cim}, tot € 750.` : ''}`,
    fr: (a, b, end, cis, cim) => `Trois crédits d'impôt sont versés aux salariés même sans impôt à payer, et ils baissent quand le salaire monte. Le crédit salaire social minimum (CISSM, 81 € par mois) baisse de ${a} à ${end} par mois : vous en perdez 13,5 centimes par euro en plus. Le crédit salarié (CIS) et le crédit CO2 (816 € par an ensemble) baissent de ${cis} à ${b}, environ 2 centimes par euro.${cim ? ` Le crédit monoparental (CIM) perd 6,12 centimes par euro de revenu imposable au-delà de ${cim}, jusqu'à 750 €.` : ''}`,
  },
  topTitle: {
    en: (top, fe) => `Why the step at ${top}${fe ? ` and the one before, at ${fe}` : ''}?`,
    nl: (top, fe) => `Waarom de sprong bij ${top}${fe ? ` en die ervoor, bij ${fe}` : ''}?`,
    fr: (top, fe) => `Pourquoi la marche à ${top}${fe ? ` et celle d'avant, à ${fe}` : ''} ?`,
  },
  topBody: {
    en: (top, fe, br, thr) => `${fe ? `From ${fe}, your household's taxable income goes above ${thr}: the extra tax for the employment fund goes from 7% to 9% of the tax above that point. ` : ''}From ${top} it goes above ${br}. Every euro above that is taxed at the highest rate, 42%, or 44.9% with the employment fund extra.`,
    nl: (top, fe, br, thr) => `${fe ? `Vanaf ${fe} komt het belastbaar inkomen van je gezin boven ${thr}: de extra belasting voor het werkgelegenheidsfonds gaat van 7% naar 9% van de belasting boven dat punt. ` : ''}Vanaf ${top} komt het boven ${br}. Elke euro daarboven wordt belast aan het hoogste tarief, 42%, of 44,9% met de extra voor het werkgelegenheidsfonds.`,
    fr: (top, fe, br, thr) => `${fe ? `À partir de ${fe}, le revenu imposable de votre foyer dépasse ${thr} : la contribution au fonds pour l'emploi passe de 7% à 9% de l'impôt au-delà de ce seuil. ` : ''}À partir de ${top}, il dépasse ${br}. Chaque euro au-dessus est imposé au taux le plus haut, 42%, soit 44,9% avec la contribution au fonds pour l'emploi.`,
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
  'er.mutual': { en: `Mutualité (fund that pays sick staff)`, nl: `Mutualité (fonds dat zieke werknemers betaalt)`, fr: `Mutualité des employeurs (salaire des malades)` },
  'ee.health': { en: `Health 3.05% (2.80% on bonuses)`, nl: `Ziekte 3,05% (2,80% op premies)`, fr: `Maladie 3,05% (2,80% sur les gratifications)` },
  'ee.pension': { en: `Pension`, nl: `Pensioen`, fr: `Pension` },
  'bd.taxable': { en: `Gross − contributions`, nl: `Bruto − bijdragen`, fr: `Brut − cotisations` },
  'bd.fo': { en: `Flat amount for work costs`, nl: `Vast bedrag voor beroepskosten`, fr: `Forfait frais d'obtention (frais de travail)` },
  'bd.ds': { en: `Flat amount for insurance, interest…`, nl: `Vast bedrag voor verzekeringen, interesten…`, fr: `Forfait dépenses spéciales (assurances, intérêts…)` },
  'bd.abat': { en: `Couple allowance (both working)`, nl: `Aftrek voor werkende koppels`, fr: `Abattement extra-professionnel` },
  'bd.npi': { en: `Your taxable income`, nl: `Jouw belastbaar inkomen`, fr: `Votre revenu imposable` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the most common case in Luxembourg. Your paid holidays are already in the monthly salary.`,
    nl: `12 maandlonen, het vaakst voorkomende geval in Luxemburg. Je betaald verlof zit al in het maandloon.`,
    fr: `12 salaires mensuels, le cas le plus courant au Luxembourg. Vos congés payés sont déjà compris dans le salaire mensuel.`,
  },
  'tip.f13': {
    en: `12 months + a 13th month, common in banks and insurance. Health insurance takes 2.80% of it instead of 3.05%. If it is over €3 000, the month it is paid gets no minimum-wage credit.`,
    nl: `12 maanden + een dertiende maand, gebruikelijk bij banken en verzekeraars. De ziekteverzekering neemt er 2,80% van in plaats van 3,05%. Is ze meer dan € 3.000, dan krijg je in de maand van uitbetaling geen minimumloonkrediet.`,
    fr: `12 mois + un 13e mois, courant dans la banque et l'assurance. L'assurance maladie y prend 2,80% au lieu de 3,05%. S'il dépasse 3 000 €, le mois où il est versé ne donne pas droit au crédit salaire minimum (CISSM).`,
  },
  'tip.jointH': { en: `Joint taxation (class 2)`, nl: `Gezamenlijke belasting (klasse 2)`, fr: `Imposition collective (classe 2)` },
  'tip.joint': {
    en: ab => `Married couples, and partners who ask for it, are taxed together. The tax is worked out on half their total income, then doubled. That lowers the tax when one earns more than the other. If both work, ${ab} is taken off their income first. Here, your tax = the couple's tax − what the couple would pay if you earned nothing.`,
    nl: ab => `Gehuwden, en partners die erom vragen, worden samen belast. De belasting wordt berekend op de helft van hun totale inkomen en dan verdubbeld. Dat verlaagt de belasting als de ene meer verdient dan de andere. Werken ze allebei, dan gaat er eerst ${ab} van hun inkomen af. Hier is jouw belasting = de belasting van het koppel − wat het koppel zou betalen als jij niets verdiende.`,
    fr: ab => `Les époux, et les partenaires qui le demandent, sont imposés ensemble. L'impôt est calculé sur la moitié de leur revenu total, puis doublé. Cela réduit l'impôt quand l'un gagne plus que l'autre. Si les deux travaillent, ${ab} sont d'abord retirés de leur revenu. Ici, votre impôt = l'impôt du couple − ce que paierait le couple si vous ne gagniez rien.`,
  },
  'tip.size': {
    en: `Employers pay into a shared fund (Mutualité des employeurs) that pays the salary of staff who are off sick. Firms where people are often off sick pay more: there are four rates. Most firms pay one of the lower ones.`,
    nl: `Werkgevers betalen in een gemeenschappelijk fonds (Mutualité des employeurs) dat het loon van zieke werknemers betaalt. Bedrijven waar mensen vaak ziek zijn, betalen meer: er zijn vier tarieven. De meeste bedrijven betalen een van de lagere.`,
    fr: `Les employeurs cotisent à un fonds commun (Mutualité des employeurs) qui paie le salaire des salariés malades. Les entreprises où les absences maladie sont fréquentes paient plus : il y a quatre taux. La plupart des entreprises paient l'un des plus bas.`,
  },
  'tip.costShort': { en: `Gross salary + what your employer pays on top.`, nl: `Brutoloon + wat je werkgever erbovenop betaalt.`, fr: `Salaire brut + ce que votre employeur paie en plus.` },
  'tip.er': {
    en: c => `Your employer pays these on top of your gross salary. Pay above 5 times the minimum wage (${c} a year in 2026) is not charged.`,
    nl: c => `Je werkgever betaalt deze bovenop je brutoloon. Op loon boven 5 keer het minimumloon (${c} per jaar in 2026) wordt niets aangerekend.`,
    fr: c => `Votre employeur les paie en plus de votre salaire brut. Rien n'est pris sur le salaire au-delà de 5 salaires minimum (${c} par an en 2026).`,
  },
  'tip.erM': {
    en: `Work accident insurance: the 2026 base rate. Employers with fewer or more accidents than average pay a bit less or more. The 0.14% for workplace health checks applies to firms using the shared national service.`,
    nl: `Verzekering arbeidsongevallen: het basistarief van 2026. Werkgevers met minder of meer ongevallen dan gemiddeld betalen iets minder of meer. De 0,14% voor arbeidsgeneeskunde geldt voor bedrijven die de gemeenschappelijke nationale dienst gebruiken.`,
    fr: `Assurance accident : le taux de base 2026. Les employeurs avec moins ou plus d'accidents que la moyenne paient un peu moins ou plus (bonus-malus). Les 0,14% de santé au travail concernent les entreprises qui passent par le service national commun.`,
  },
  'tip.ee': {
    en: c => `Taken from your pay, on pay up to ${c} a year: health 3.05% (2.80% on a 13th month) and pension 8.5%, up from 8% since the January 2026 pension reform. You pay no income tax on what goes into these.`,
    nl: c => `Afgehouden van je loon, op loon tot ${c} per jaar: ziekte 3,05% (2,80% op een dertiende maand) en pensioen 8,5%, sinds de pensioenhervorming van januari 2026 verhoogd van 8%. Op wat hierin gaat betaal je geen inkomstenbelasting.`,
    fr: c => `Retirées de votre paie, sur le salaire jusqu'à ${c} par an : maladie 3,05% (2,80% sur un 13e mois) et pension 8,5%, contre 8% avant la réforme des pensions de janvier 2026. Vous ne payez pas d'impôt sur ce qui y part.`,
  },
  'tip.dep': {
    en: a => `1.4% of all your pay, with no upper limit, after the first quarter of the minimum wage each month (${a} on average in 2026). It pays for care when people can no longer look after themselves. You still pay income tax on this money.`,
    nl: a => `1,4% van je hele loon, zonder bovengrens, na het eerste kwart van het minimumloon per maand (gemiddeld ${a} in 2026). Het betaalt zorg voor wie niet meer voor zichzelf kan zorgen. Op dit geld betaal je toch inkomstenbelasting.`,
    fr: a => `1,4% de toute votre rémunération, sans limite haute, après le premier quart du salaire minimum chaque mois (${a} en moyenne en 2026). Elle finance l'aide aux personnes qui ne peuvent plus se débrouiller seules. Vous payez quand même l'impôt sur cet argent.`,
  },
  'tip.taxable': {
    en: calc => `Gross − health and pension contributions${calc}.`,
    nl: calc => `Bruto − bijdragen voor ziekte en pensioen${calc}.`,
    fr: calc => `Brut − cotisations maladie et pension${calc}.`,
  },
  'tip.fo': {
    en: v => `${v} for work costs is not taxed, on every salary. Travel to work is a separate deduction of €99 per km after the first 4 (straight line between towns), not counted here.`,
    nl: v => `${v} voor beroepskosten wordt niet belast, op elk loon. Woon-werkverkeer is een aparte aftrek van € 99 per km na de eerste 4 (in rechte lijn tussen gemeenten), hier niet meegerekend.`,
    fr: v => `${v} pour frais de travail ne sont pas imposés, sur tout salaire. Les trajets domicile-travail sont une déduction à part de 99 € par km au-delà des 4 premiers (en ligne droite entre communes), non comptée ici.`,
  },
  'tip.ds': {
    en: v => `${v} a year is not taxed, for insurance, loan interest and similar costs. You can declare more if you spent more.`,
    nl: v => `${v} per jaar wordt niet belast, voor verzekeringen, interesten op leningen en dergelijke. Je kunt meer aangeven als je meer uitgaf.`,
    fr: v => `${v} par an ne sont pas imposés, pour les assurances, les intérêts d'emprunt et dépenses similaires. Vous pouvez déclarer plus si vous avez dépensé plus.`,
  },
  'tip.abat': {
    en: v => `When both partners in a couple taxed together work, ${v} of their income is not taxed, but no more than the smaller of the two incomes.`,
    nl: v => `Werken beide partners van een koppel dat samen belast wordt, dan wordt ${v} van hun inkomen niet belast, maar niet meer dan het kleinste van de twee inkomens.`,
    fr: v => `Quand les deux membres d'un couple imposé ensemble travaillent, ${v} de leur revenu ne sont pas imposés, mais pas plus que le plus petit des deux revenus.`,
  },
  'tip.npi': {
    en: calc => `Gross − contributions − the two flat amounts${calc}. For a couple, it is added to your partner's.`,
    nl: calc => `Bruto − bijdragen − de twee vaste bedragen${calc}. Bij een koppel opgeteld met dat van je partner.`,
    fr: calc => `Brut − cotisations − les deux forfaits${calc}. Pour un couple, il est ajouté à celui du partenaire.`,
  },
  'tip.irShort': {
    en: `23 tax brackets from 0% to 42%: the higher part of your income is taxed at a higher rate. Class 1 uses them as they are. Class 2 (couples) taxes half the income, then doubles it. Class 1a (single parents) makes the low rates last longer.`,
    nl: `23 belastingschijven van 0% tot 42%: het hogere deel van je inkomen wordt zwaarder belast. Klasse 1 gebruikt ze zoals ze zijn. Klasse 2 (koppels) belast de helft van het inkomen en verdubbelt dat dan. Klasse 1a (alleenstaande ouders) laat de lage tarieven langer gelden.`,
    fr: `23 tranches de 0% à 42% : la partie haute du revenu est taxée à un taux plus élevé. La classe 1 les applique telles quelles. La classe 2 (couples) taxe la moitié du revenu puis double le résultat. La classe 1a (parents seuls) fait durer plus longtemps les taux bas.`,
  },
  'tip.irClass.1': { en: `Class 1: the brackets applied to your taxable income.`, nl: `Klasse 1: de schijven toegepast op je belastbaar inkomen.`, fr: `Classe 1 : le barème appliqué à votre revenu imposable.` },
  'tip.irClass.1a': {
    en: `Class 1a: before the brackets, your income is lowered by a quarter of what it lacks to reach €79 380. From €51 804, each extra euro is taxed at 39% to 42% at most.`,
    nl: `Klasse 1a: voor de schijven wordt je inkomen verlaagd met een kwart van wat het tekortkomt tot € 79.380. Vanaf € 51.804 wordt elke extra euro belast aan hoogstens 39% tot 42%.`,
    fr: `Classe 1a : avant le barème, votre revenu est réduit d'un quart de ce qui lui manque pour atteindre 79 380 €. À partir de 51 804 €, chaque euro en plus est taxé à 39% à 42% au plus.`,
  },
  'tip.irClass.2': { en: `Class 2: the tax on half the couple's income, doubled.`, nl: `Klasse 2: de belasting op de helft van het inkomen van het koppel, verdubbeld.`, fr: `Classe 2 : l'impôt sur la moitié du revenu du couple, doublé.` },
  'tip.irX': { en: `Household taxable income`, nl: `Belastbaar gezinsinkomen`, fr: `Revenu imposable du foyer` },
  'tip.irHousehold': { en: `Household tax`, nl: `Belasting van het gezin`, fr: `Impôt du foyer` },
  'tip.irWithout': { en: `Household tax if you earned nothing`, nl: `Belasting als jij niets verdiende`, fr: `Impôt du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.fe': {
    en: `Income tax goes up by 7% to fund the employment fund (which pays unemployment benefits). Above €150 000 of taxable income (€300 000 in class 2), the tax on the part above goes up by 9%.`,
    nl: `De inkomstenbelasting gaat 7% omhoog voor het werkgelegenheidsfonds (dat werkloosheidsuitkeringen betaalt). Boven € 150.000 belastbaar inkomen (€ 300.000 in klasse 2) gaat de belasting op het deel daarboven 9% omhoog.`,
    fr: `L'impôt sur le revenu augmente de 7% pour le fonds pour l'emploi (qui paie le chômage). Au-delà de 150 000 € de revenu imposable (300 000 € en classe 2), l'impôt sur la partie au-dessus augmente de 9%.`,
  },
  'tip.cred': {
    en: `Money added to your pay, even if you owe no tax. CIS: up to €600 a year, shrinking to zero between €40 000 and €80 000 of gross pay. CO2 credit: €216, shrinking over the same range. CISSM: €81 a month for a monthly gross between €1 800 and €3 000, shrinking to zero at €3 600. CIM: up to €3 504 for a single parent.`,
    nl: `Geld dat bij je loon komt, ook als je geen belasting verschuldigd bent. CIS: tot € 600 per jaar, dat tot nul daalt tussen € 40.000 en € 80.000 brutoloon. CO2-krediet: € 216, dat over hetzelfde traject daalt. CISSM: € 81 per maand voor een brutomaandloon tussen € 1.800 en € 3.000, tot nul op € 3.600. CIM: tot € 3.504 voor een alleenstaande ouder.`,
    fr: `De l'argent ajouté à votre paie, même sans impôt à payer. CIS : jusqu'à 600 € par an, qui descend à zéro entre 40 000 € et 80 000 € de brut. Crédit CO2 : 216 €, qui baisse sur la même plage. CISSM : 81 € par mois pour un brut mensuel entre 1 800 € et 3 000 €, nul à 3 600 €. CIM : jusqu'à 3 504 € pour un parent seul.`,
  },
  'tip.cis': { en: `Employee credit (CIS)`, nl: `Werknemerskrediet (CIS)`, fr: `Crédit d'impôt salarié (CIS)` },
  'tip.co2': { en: `CO2 credit`, nl: `CO2-krediet`, fr: `Crédit d'impôt CO2` },
  'tip.cissmRow': { en: `Minimum-wage credit (CISSM)`, nl: `Minimumloonkrediet (CISSM)`, fr: `Crédit salaire social minimum (CISSM)` },
  'tip.cimRow': { en: `Single-parent credit (CIM)`, nl: `Krediet alleenstaande ouder (CIM)`, fr: `Crédit d'impôt monoparental (CIM)` },
  'tip.credM': {
    en: `The CO2 credit went up from €192 to €216 with the 2026 budget law. For the CIM, we assume you don't live with the other parent and the child gets no more than €2 712 a year in child support.`,
    nl: `Het CO2-krediet steeg van € 192 naar € 216 met de begrotingswet 2026. Voor de CIM gaan we ervan uit dat je niet samenwoont met de andere ouder en dat het kind niet meer dan € 2.712 per jaar onderhoudsgeld krijgt.`,
    fr: `Le crédit CO2 est passé de 192 € à 216 € avec la loi budgétaire 2026. Pour le CIM, nous supposons que vous ne vivez pas avec l'autre parent et que l'enfant ne reçoit pas plus de 2 712 € par an de pension alimentaire.`,
  },
  'tip.vatM': {
    en: `Some things have lower VAT: 14%, 8% or 3% (some wine, energy, food, books, medicines). Rent has none. We ignore that here, so the real VAT you pay is probably lower.`,
    nl: `Sommige dingen hebben minder btw: 14%, 8% of 3% (sommige wijnen, energie, voeding, boeken, geneesmiddelen). Op huur zit geen btw. Dat negeren we hier, dus de echte btw die je betaalt ligt waarschijnlijk lager.`,
    fr: `Certaines choses ont une TVA plus basse : 14%, 8% ou 3% (certains vins, énergie, alimentation, livres, médicaments). Le loyer n'en a pas. Nous l'ignorons ici, la TVA que vous payez vraiment est donc sans doute plus basse.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross − contributions − long-term care − income tax and employment fund extra + tax credits.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − bijdragen − zorgverzekering − inkomstenbelasting en extra voor het werkgelegenheidsfonds + belastingkredieten.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisations − dépendance − impôt et contribution au fonds pour l'emploi + crédits d'impôt.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026`,
    nl: `Gebruikte regels · inkomstenjaar 2026`,
    fr: `Règles utilisées · revenus 2026`,
  },
  'ref.ee': {
    en: { h: `1 · Employee contributions`, li: [
      `Taken from your pay: health <span class="num">3.05%</span> (2.80% on bonuses), pension <span class="num">8.5%</span>, on pay up to <span class="num">€164 590</span> a year (5 minimum wages).`,
      `Long-term care <span class="num">1.4%</span> on all pay, after the first quarter of the minimum wage each month.`,
    ] },
    nl: { h: `1 · Werknemersbijdragen`, li: [
      `Afgehouden van je loon: ziekte <span class="num">3,05%</span> (2,80% op premies), pensioen <span class="num">8,5%</span>, op loon tot <span class="num">€ 164.590</span> per jaar (5 minimumlonen).`,
      `Zorgverzekering <span class="num">1,4%</span> op het hele loon, na het eerste kwart van het minimumloon per maand.`,
    ] },
    fr: { h: `1 · Cotisations salariales`, li: [
      `Retirées de votre paie : maladie <span class="num">3,05%</span> (2,80% sur les primes), pension <span class="num">8,5%</span>, sur le salaire jusqu'à <span class="num">164 590 €</span> par an (5 salaires minimum).`,
      `Dépendance <span class="num">1,4%</span> sur tout le salaire, après le premier quart du salaire minimum chaque mois.`,
    ] },
  },
  'ref.er': {
    en: { h: `2 · Employer contributions`, li: [
      `Paid by your employer on top: health <span class="num">3.05%</span>, pension <span class="num">8.5%</span>, work accidents <span class="num">0.65%</span>, workplace health checks <span class="num">0.14%</span>, sick-pay fund (Mutualité) <span class="num">0.23%</span> to <span class="num">2.66%</span>, all on pay up to the same limit.`,
    ] },
    nl: { h: `2 · Werkgeversbijdragen`, li: [
      `Betaald door je werkgever bovenop: ziekte <span class="num">3,05%</span>, pensioen <span class="num">8,5%</span>, arbeidsongevallen <span class="num">0,65%</span>, arbeidsgeneeskunde <span class="num">0,14%</span>, fonds voor ziekteloon (Mutualité) <span class="num">0,23%</span> tot <span class="num">2,66%</span>, allemaal op loon tot dezelfde grens.`,
    ] },
    fr: { h: `2 · Cotisations patronales`, li: [
      `Payées par votre employeur en plus : maladie <span class="num">3,05%</span>, pension <span class="num">8,5%</span>, accidents du travail <span class="num">0,65%</span>, santé au travail <span class="num">0,14%</span>, Mutualité (salaire des malades) <span class="num">0,23%</span> à <span class="num">2,66%</span>, toutes sur le salaire jusqu'à la même limite.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `3 · Income tax`, li: [
      `Gross − health and pension − <span class="num">€540</span> for work costs − <span class="num">€480</span> for insurance, interest and similar.`,
      `Brackets (unchanged since 2025). The higher part of your income is taxed at a higher rate:${br}`,
      `+7% on top for the employment fund, 9% on the tax above €150 000 of income (€300 000 in class 2).`,
    ] }),
    nl: br => ({ h: `3 · Inkomstenbelasting`, li: [
      `Bruto − ziekte en pensioen − <span class="num">€ 540</span> voor beroepskosten − <span class="num">€ 480</span> voor verzekeringen, interesten en dergelijke.`,
      `Schijven (ongewijzigd sinds 2025). Het hogere deel van je inkomen wordt zwaarder belast:${br}`,
      `+7% bovenop voor het werkgelegenheidsfonds, 9% op de belasting boven € 150.000 inkomen (€ 300.000 in klasse 2).`,
    ] }),
    fr: br => ({ h: `3 · Impôt sur le revenu`, li: [
      `Brut − maladie et pension − <span class="num">540 €</span> de frais de travail − <span class="num">480 €</span> pour assurances, intérêts et dépenses similaires.`,
      `Barème (inchangé depuis 2025). La partie haute du revenu est taxée à un taux plus élevé :${br}`,
      `+7% en plus pour le fonds pour l'emploi, 9% sur l'impôt au-delà de 150 000 € de revenu (300 000 € en classe 2).`,
    ] }),
  },
  'ref.classes': {
    en: { h: `4 · Tax classes`, li: [
      `Your class sets the tax scale. Class 1: single. Class 1a: single parent, widowed, or 64 and over. Class 2: married, or partners taxed together.`,
      `Class 2 pays the tax on half the income, doubled. Couples where both work take <span class="num">€4 500</span> off their income.`,
      `Couples: your tax = the couple's tax − the couple's tax without your income.`,
    ] },
    nl: { h: `4 · Belastingklassen`, li: [
      `Je klasse bepaalt de belastingschaal. Klasse 1: alleenstaand. Klasse 1a: alleenstaande ouder, weduw(e)naar of 64 en ouder. Klasse 2: gehuwd, of partners die samen belast worden.`,
      `Klasse 2 betaalt de belasting op de helft van het inkomen, verdubbeld. Koppels die allebei werken halen <span class="num">€ 4.500</span> van hun inkomen af.`,
      `Koppels: jouw belasting = belasting van het koppel − belasting van het koppel zonder jouw inkomen.`,
    ] },
    fr: { h: `4 · Classes d'impôt`, li: [
      `Votre classe fixe le barème. Classe 1 : personne seule. Classe 1a : parent seul, veuf ou 64 ans et plus. Classe 2 : mariés, ou partenaires imposés ensemble.`,
      `La classe 2 paie l'impôt sur la moitié du revenu, doublé. Les couples où les deux travaillent retirent <span class="num">4 500 €</span> de leur revenu.`,
      `Couple : votre impôt = impôt du couple − impôt du couple sans vos revenus.`,
    ] },
  },
  'ref.credits': {
    en: { h: `5 · Tax credits`, li: [
      `Money added to your pay. Employee credit (CIS) <span class="num">€600</span> and CO2 credit <span class="num">€216</span>, shrinking from €40 000 to €80 000 of gross pay.`,
      `Minimum-wage credit (CISSM) <span class="num">€81</span> a month for a monthly gross of €1 800 to €3 000, down to zero at €3 600.`,
      `Single-parent credit (CIM) <span class="num">€3 504</span>, down to €750 between €60 000 and €105 000 of taxable income.`,
    ] },
    nl: { h: `5 · Belastingkredieten`, li: [
      `Geld dat bij je loon komt. Werknemerskrediet (CIS) <span class="num">€ 600</span> en CO2-krediet <span class="num">€ 216</span>, dalend van € 40.000 tot € 80.000 brutoloon.`,
      `Minimumloonkrediet (CISSM) <span class="num">€ 81</span> per maand voor een brutomaandloon van € 1.800 tot € 3.000, tot nul op € 3.600.`,
      `Krediet voor alleenstaande ouders (CIM) <span class="num">€ 3.504</span>, tot € 750 tussen € 60.000 en € 105.000 belastbaar inkomen.`,
    ] },
    fr: { h: `5 · Crédits d'impôt`, li: [
      `De l'argent ajouté à votre paie. Crédit salarié (CIS) <span class="num">600 €</span> et crédit CO2 <span class="num">216 €</span>, qui baissent de 40 000 € à 80 000 € de brut.`,
      `Crédit salaire social minimum (CISSM) <span class="num">81 €</span> par mois pour un brut mensuel de 1 800 € à 3 000 €, nul à 3 600 €.`,
      `Crédit monoparental (CIM) <span class="num">3 504 €</span>, ramené à 750 € entre 60 000 € et 105 000 € de revenu imposable.`,
    ] },
  },
  'ref.vat': {
    en: { h: `6 · VAT on spending`, li: [
      `VAT is the tax included in shop prices. Normal rate <span class="num">17%</span>. We act as if you spend all your net pay. Use the slider to try other rates.`,
      `The VAT hidden in a price = price × r / (100 + r). At 17% that's 17 / 117 = <span class="num">14.53%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Btw op uitgaven`, li: [
      `Btw is de belasting die in winkelprijzen zit. Normaal tarief <span class="num">17%</span>. We doen alsof je je hele nettoloon uitgeeft. Gebruik de schuifregelaar om andere tarieven te proberen.`,
      `De btw die in een prijs zit = prijs × r / (100 + r). Bij 17% is dat 17 / 117 = <span class="num">14,53%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · TVA sur les dépenses`, li: [
      `La TVA est l'impôt compris dans les prix en magasin. Taux normal <span class="num">17%</span>. Nous faisons comme si vous dépensiez tout votre salaire net. Utilisez le curseur pour essayer d'autres taux.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 17%, cela fait 17 / 117 = <span class="num">14,53%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and parliament`, li: [
      `Prime Minister <span class="num">940</span> index points a month, minister <span class="num">805</span>, MP <span class="num">375</span>, at <span class="num">€25.07</span> a point.`,
      `Money for official expenses, with no tax: 400 points for the Prime Minister, 150 for a minister.`,
    ] },
    nl: { h: `7 · Regering en parlement`, li: [
      `Premier <span class="num">940</span> indexpunten per maand, minister <span class="num">805</span>, parlementslid <span class="num">375</span>, aan <span class="num">€ 25,07</span> per punt.`,
      `Geld voor representatiekosten, zonder belasting: 400 punten voor de premier, 150 voor een minister.`,
    ] },
    fr: { h: `7 · Gouvernement et Chambre`, li: [
      `Premier ministre <span class="num">940</span> points indiciaires par mois, ministre <span class="num">805</span>, député <span class="num">375</span>, à <span class="num">25,07 €</span> le point.`,
      `De l'argent pour les frais de représentation, sans impôt : 400 points pour le Premier ministre, 150 pour un ministre.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Travel-to-work deduction, real work costs, child benefits (not linked to pay), the cost-of-living allowance (allocation de vie chère), meal vouchers, overtime, extra company pensions.`,
      `People who live abroad and work in Luxembourg: they are taxed under other rules. The figures are your final tax for the year, not the tax taken from your pay each month.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Aftrek voor woon-werkverkeer, echte beroepskosten, kinderbijslag (niet aan het loon gekoppeld), de koopkrachttoelage (allocation de vie chère), maaltijdcheques, overuren, aanvullende bedrijfspensioenen.`,
      `Mensen die in het buitenland wonen en in Luxemburg werken: zij worden volgens andere regels belast. De bedragen zijn je uiteindelijke belasting voor het jaar, niet de belasting die elke maand van je loon gaat.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Déduction des trajets domicile-travail, frais réels, allocations familiales (non liées au salaire), allocation de vie chère, chèques-repas, heures supplémentaires, pensions complémentaires d'entreprise.`,
      `Les frontaliers, qui vivent à l'étranger et travaillent au Luxembourg : ils sont imposés selon d'autres règles. Les montants sont votre impôt final de l'année, pas la retenue de chaque mois.`,
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
  'gap.point': { en: `Value of one State pay point: €25.0672518, from the public-service website, which shows no date. If it is from before the June 2026 pay rise (+2.5%), public pay here is about 2.5% too low.`, nl: `Waarde van één punt van het overheidsloon: € 25,0672518, van de website van het openbaar ambt, die geen datum vermeldt. Is die van voor de loonsverhoging van juni 2026 (+2,5%), dan ligt het overheidsloon hier ongeveer 2,5% te laag.`, fr: `Valeur d'un point indiciaire : 25,0672518 €, d'après le site de la fonction publique, qui n'indique pas de date. S'il date d'avant la hausse de juin 2026 (+2,5%), les rémunérations publiques sont ici environ 2,5% trop basses.` },
  'gap.govPoints': { en: `Government pay: 940 points for the Prime Minister and 805 for a minister, plus 400 and 150 points for expenses, from a December 2023 newspaper article (Le Quotidien). We assume they haven't changed.`, nl: `Loon van de regering: 940 punten voor de premier en 805 voor een minister, plus 400 en 150 punten voor onkosten, uit een krantenartikel van december 2023 (Le Quotidien). We gaan ervan uit dat ze niet veranderd zijn.`, fr: `Rémunération du gouvernement : 940 points pour le Premier ministre et 805 pour un ministre, plus 400 et 150 points pour frais, d'après un article de presse de décembre 2023 (Le Quotidien). Nous supposons qu'ils n'ont pas changé.` },
  'gap.mpPoints': { en: `MPs: 375 points, from a 2013 Chamber document. We assume this hasn't changed.`, nl: `Parlementsleden: 375 punten, uit een document van de Kamer van 2013. We gaan ervan uit dat dit niet veranderd is.`, fr: `Députés : 375 points, d'après un document de la Chambre de 2013. Nous supposons que cela n'a pas changé.` },
  'gap.govSocial': { en: `Government members and MPs: we treat their social contributions like an employee's, with the State paying the employer's part for health and pension. Their real system is not confirmed.`, nl: `Regeringsleden en parlementsleden: we behandelen hun sociale bijdragen zoals die van een werknemer, waarbij de staat het werkgeversdeel voor ziekte en pensioen betaalt. Hun echte regeling is niet bevestigd.`, fr: `Membres du gouvernement et députés : nous traitons leurs cotisations sociales comme celles d'un salarié, l'État payant la part employeur pour la maladie et la pension. Leur vrai régime n'est pas confirmé.` },
  'gap.bank': { en: `BCL and Spuerkeess heads: the 2025 average pay of their top team (3 and 5 people), not the governor's or the CEO's own pay.`, nl: `Topmensen van de BCL en Spuerkeess: het gemiddelde loon van hun topteam in 2025 (3 en 5 personen), niet het eigen loon van de gouverneur of de CEO.`, fr: `Dirigeants de la BCL et de la Spuerkeess : la rémunération moyenne 2025 de leur équipe de direction (3 et 5 personnes), pas celle du gouverneur ou de la directrice générale elle-même.` },
  'gap.mutual': { en: `Sick-pay fund (Mutualité des employeurs): the lowest rate (0.23%) by default. Your employer's rate depends on how often staff are off sick and can go up to 2.66%.`, nl: `Fonds voor ziekteloon (Mutualité des employeurs): standaard het laagste tarief (0,23%). Het tarief van je werkgever hangt af van hoe vaak werknemers ziek zijn en kan tot 2,66% gaan.`, fr: `Mutualité des employeurs : le taux le plus bas (0,23%) par défaut. Le taux de votre employeur dépend de la fréquence des absences maladie et peut aller jusqu'à 2,66%.` },
  'gap.accident': { en: `Work accident insurance: 0.65%, before the adjustment for each employer's accident record. The 0.14% for workplace health checks assumes the employer uses the national service (STM).`, nl: `Verzekering arbeidsongevallen: 0,65%, voor de aanpassing volgens het aantal ongevallen bij elke werkgever. De 0,14% voor arbeidsgeneeskunde gaat ervan uit dat de werkgever de nationale dienst (STM) gebruikt.`, fr: `Assurance accident : 0,65%, avant l'ajustement selon les accidents de chaque employeur (bonus-malus). Les 0,14% de santé au travail supposent un employeur qui passe par le service national (STM).` },
  'gap.nettoCalc': { en: `Cross-check: the NettoCalc simulator gives about €10 a month more net pay, because of lower income tax. We couldn't explain the difference.`, nl: `Controle: de simulator NettoCalc geeft ongeveer € 10 per maand meer netto, door een lagere inkomstenbelasting. We konden het verschil niet verklaren.`, fr: `Vérification : le simulateur NettoCalc donne environ 10 € de net en plus par mois, à cause d'un impôt sur le revenu plus bas. Nous n'avons pas pu expliquer l'écart.` },
  'gap.class1a': { en: `Tax class: chosen only from your household and children. Widowed people and those aged 64 or more, who also get class 1a, are not covered.`, nl: `Belastingklasse: alleen gekozen op basis van je gezin en kinderen. Weduwen, weduwnaars en 64-plussers, die ook klasse 1a krijgen, zitten er niet in.`, fr: `Classe d'impôt : choisie seulement d'après le ménage et les enfants. Les veufs et les personnes de 64 ans ou plus, aussi en classe 1a, ne sont pas couverts.` },
  'gap.wages': { en: `Typical pay: STATEC 2022, bonuses included. Half of employees earned more than €4 844 a month, and the average was €6 327. Not updated since for price increases.`, nl: `Gangbare lonen: STATEC 2022, premies inbegrepen. De helft van de werknemers verdiende meer dan € 4.844 per maand, en het gemiddelde was € 6.327. Sindsdien niet aangepast aan de prijsstijgingen.`, fr: `Salaires courants : STATEC 2022, primes comprises. La moitié des salariés gagnaient plus de 4 844 € par mois, et la moyenne était de 6 327 €. Pas mis à jour depuis pour la hausse des prix.` },
  'gap.notIncl': { en: `Travel-to-work deduction, the cost-of-living allowance and people living abroad are left out: see What's not included below.`, nl: `Aftrek voor woon-werkverkeer, de koopkrachttoelage en mensen die in het buitenland wonen zijn niet meegerekend: zie Wat niet is meegerekend hieronder.`, fr: `Déduction des trajets, allocation de vie chère et frontaliers ne sont pas inclus : voir Ce qui n'est pas inclus plus bas.` },
};
