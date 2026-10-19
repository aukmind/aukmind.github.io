window.TAX_STRINGS = {
  title: { en: `Japanese Buying Power`, nl: `Japanse koopkracht`, fr: `Pouvoir d'achat au Japon` },
  eyebrow: { en: `Japan · income 2026 · employee`, nl: `Japan · inkomen 2026 · werknemer`, fr: `Japon · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Japan · income 2026 · Diet and government`, nl: `Japan · inkomen 2026 · parlement en regering`, fr: `Japon · revenus 2026 · Diète et gouvernement` },
  lead: {
    en: `Every tax on a Japanese salary in 2026, from what your employer pays to what you can buy. National income tax with its reconstruction surtax, a flat 10% resident tax, and social insurance split half and half with your employer.`,
    nl: `Alle belastingen op een Japans loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Nationale inkomstenbelasting met haar wederopbouwtoeslag, een vlakke inwonersbelasting van 10% en sociale verzekeringen die je half om half met je werkgever betaalt.`,
    fr: `Tous les prélèvements sur un salaire japonais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. L'impôt national sur le revenu et sa surtaxe de reconstruction, une taxe de résidence unique de 10%, et des assurances sociales partagées moitié-moitié avec l'employeur.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married. Each spouse is taxed alone, but one can claim the other while the other earns little. Children are taken as under 16, who give no deduction.`,
    nl: `Gehuwd. Elke echtgenoot wordt apart belast, maar de ene mag de andere ten laste nemen zolang die weinig verdient. Kinderen worden als jonger dan 16 genomen; die geven geen aftrek.`,
    fr: `Marié(e). Chaque conjoint est imposé seul, mais l'un peut déclarer l'autre à charge tant qu'il gagne peu. Les enfants sont supposés avoir moins de 16 ans, ce qui ne donne aucune déduction.`,
  },
  commune: { en: `Prefecture (health insurance rate)`, nl: `Prefectuur (ziekteverzekeringstarief)`, fr: `Préfecture (taux d'assurance maladie)` },
  searchCommune: { en: `Search a prefecture`, nl: `Zoek een prefectuur`, fr: `Rechercher une préfecture` },
  searchN: { en: n => `Search ${n} prefectures`, nl: n => `Zoek in ${n} prefecturen`, fr: n => `Rechercher parmi ${n} préfectures` },
  loadingCommunes: { en: `Loading prefectures…`, nl: `Prefecturen laden…`, fr: `Chargement des préfectures…` },
  noCommune: { en: q => `No prefecture matches "${q}"`, nl: q => `Geen prefectuur gevonden voor "${q}"`, fr: q => `Aucune préfecture ne correspond à « ${q} »` },
  setByCommune: { en: `(set by the prefecture)`, nl: `(volgt uit de prefectuur)`, fr: `(déterminé par la préfecture)` },
  communesError: {
    en: `The prefecture list didn't load. Set the health insurance rate with the slider.`,
    nl: `De lijst met prefecturen laadde niet. Stel het ziekteverzekeringstarief in met de schuifregelaar.`,
    fr: `La liste des préfectures n'a pas pu être chargée. Réglez le taux d'assurance maladie avec le curseur.`,
  },
  kenpoLabel: { en: `Health insurance, total rate`, nl: `Ziekteverzekering, totaal tarief`, fr: `Assurance maladie, taux total` },
  kenpoHint: {
    en: r => `Kyokai Kenpo rate ${r} from March 2026, half paid by you, half by your employer.`,
    nl: r => `Tarief Kyokai Kenpo ${r} vanaf maart 2026, half door jou, half door je werkgever betaald.`,
    fr: r => `Taux Kyokai Kenpo de ${r} depuis mars 2026, payé pour moitié par vous et pour moitié par l'employeur.`,
  },
  employerSize: { en: `Your age`, nl: `Je leeftijd`, fr: `Votre âge` },
  'size.u40': { en: `Under 40 or 65+`, nl: `Jonger dan 40 of 65+`, fr: `Moins de 40 ans ou 65+` },
  'size.o40': { en: `40 to 64`, nl: `40 tot 64`, fr: `40 à 64 ans` },
  vatStandard: { en: `(Japan's standard rate is 10%)`, nl: `(het Japanse normale tarief is 10%)`, fr: `(le taux normal japonais est de 10%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'minRole.minOut': { en: `Minister, no seat`, nl: `Minister zonder zetel`, fr: `Ministre sans siège` },
  'minRole.mp': { en: `Diet member`, nl: `Parlementslid`, fr: `Parlementaire` },
  ministerHint: {
    en: `Since December 2025 a Diet member in government gets only the Diet pay. Taxed as employment income, with National Pension and National Health Insurance instead of employee insurance.`,
    nl: `Sinds december 2025 krijgt een parlementslid in de regering alleen het parlementsloon. Belast als arbeidsinkomen, met National Pension en National Health Insurance in plaats van de werknemersverzekering.`,
    fr: `Depuis décembre 2025, un parlementaire membre du gouvernement ne touche que son indemnité de la Diète. Imposée comme un salaire, avec la National Pension et la National Health Insurance au lieu des assurances des salariés.`,
  },
  minSalaryHint: {
    en: `Yearly pay: monthly pay × 12 plus the term-end allowances. The tax-free ¥1,000,000 a month allowance comes on top.`,
    nl: `Jaarloon: maandloon × 12 plus de eindejaarstoelagen. De belastingvrije toelage van ¥ 1.000.000 per maand komt erbovenop.`,
    fr: `Rémunération annuelle : mensuel × 12 plus les primes de fin de période. L'indemnité exonérée de 1 000 000 ¥ par mois s'y ajoute.`,
  },
  'tip.ministerRules': {
    en: `By law the Prime Minister earns ¥2,095,000 a month, a minister ¥1,528,000, a senior vice-minister ¥1,466,000. A Diet member normally gets the difference on top of the Diet pay, but a supplementary provision added in December 2025 stops that top-up "for the time being". So the Prime Minister and ministers who sit in the Diet get what every member gets: ¥1,294,000 a month, term-end allowances twice a year (about ¥6.35 million), and ¥1,000,000 a month tax-free for research, publicity and accommodation. A minister from outside the Diet keeps the full ministerial pay.`,
    nl: `Volgens de wet verdient de premier ¥ 2.095.000 per maand, een minister ¥ 1.528.000, een viceminister ¥ 1.466.000. Een parlementslid krijgt normaal het verschil bovenop het parlementsloon, maar een overgangsbepaling van december 2025 schort die aanvulling "voorlopig" op. De premier en ministers die in de Diète zetelen, krijgen dus wat elk lid krijgt: ¥ 1.294.000 per maand, twee keer per jaar een eindejaarstoelage (samen ongeveer ¥ 6,35 miljoen) en ¥ 1.000.000 per maand belastingvrij voor onderzoek, communicatie en verblijf. Een minister van buiten de Diète houdt het volle ministersloon.`,
    fr: `Selon la loi, le Premier ministre touche 2 095 000 ¥ par mois, un ministre 1 528 000 ¥, un vice-ministre 1 466 000 ¥. Un parlementaire reçoit normalement la différence en plus de son indemnité, mais une disposition ajoutée en décembre 2025 suspend ce complément « pour le moment ». Le Premier ministre et les ministres qui siègent à la Diète touchent donc ce que touche chaque membre : 1 294 000 ¥ par mois, des primes de fin de période deux fois par an (environ 6,35 millions ¥) et 1 000 000 ¥ par mois exonérés pour la recherche, la communication et le logement. Un ministre extérieur à la Diète garde la rémunération ministérielle complète.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.minOut': { en: `Minister, no seat (est.)`, nl: `Minister zonder zetel (sch.)`, fr: `Ministre sans siège (est.)` },
  'stat.mp': { en: `Diet member`, nl: `Parlementslid`, fr: `Parlementaire` },
  'stat.pmLaw': { en: `PM, full statutory pay (est.)`, nl: `Premier, volledig wettelijk loon (sch.)`, fr: `PM, rémunération légale complète (est.)` },
  'pol.stat.pm': { en: `Diet pay only since December 2025`, nl: `Alleen parlementsloon sinds december 2025`, fr: `Seulement l'indemnité de la Diète depuis décembre 2025` },
  'pol.stat.minOut': { en: `Full ministerial pay, with allowances and bonuses`, nl: `Volledig ministersloon, met toelagen en bonussen`, fr: `Rémunération ministérielle complète, avec indemnités et primes` },
  'pol.stat.mp': { en: `Monthly pay + term-end allowances`, nl: `Maandloon + eindejaarstoelagen`, fr: `Indemnité mensuelle + primes de fin de période` },
  'pol.stat.pmLaw': { en: `What the law sets, not paid at the moment`, nl: `Wat de wet vastlegt, nu niet uitbetaald`, fr: `Ce que fixe la loi, non versé actuellement` },
  'polNote.diet': {
    en: `Placed at the employee gross that nets the same, counting the tax-free ¥1,000,000 a month allowance.`,
    nl: `Geplaatst op het werknemersbruto met hetzelfde netto, de belastingvrije toelage van ¥ 1.000.000 per maand meegerekend.`,
    fr: `Placé au brut salarié qui donne le même net, en comptant l'indemnité exonérée de 1 000 000 ¥ par mois.`,
  },
  'polTipNote.minOut': {
    en: `¥1,528,000 a month by law, plus regional and term-end allowances: about ¥29 million a year, an estimate. Rare: most ministers sit in the Diet.`,
    nl: `¥ 1.528.000 per maand volgens de wet, plus standplaats- en eindejaarstoelagen: ongeveer ¥ 29 miljoen per jaar, een schatting. Zeldzaam: de meeste ministers zetelen in de Diète.`,
    fr: `1 528 000 ¥ par mois selon la loi, plus les indemnités de résidence et de fin de période : environ 29 millions ¥ par an, une estimation. Rare : la plupart des ministres siègent à la Diète.`,
  },
  'polTipNote.pmLaw': {
    en: `¥2,095,000 a month by law, about ¥40 million a year with allowances as commonly reported. Suspended for a Prime Minister who sits in the Diet since December 2025.`,
    nl: `¥ 2.095.000 per maand volgens de wet, ongeveer ¥ 40 miljoen per jaar met toelagen volgens gangbare berichten. Opgeschort voor een premier die in de Diète zetelt sinds december 2025.`,
    fr: `2 095 000 ¥ par mois selon la loi, environ 40 millions ¥ par an avec les indemnités selon les chiffres courants. Suspendu depuis décembre 2025 pour un Premier ministre qui siège à la Diète.`,
  },
  'polTipNote.pm': { en: `Paid as a Diet member.`, nl: `Betaald als parlementslid.`, fr: `Payé comme parlementaire.` },
  'polTipNote.mp': { en: `¥1,294,000 a month.`, nl: `¥ 1.294.000 per maand.`, fr: `1 294 000 ¥ par mois.` },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ months paid. Diet members pay no employee insurance and get a tax-free allowance, so they sit at the employee gross that nets the same. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ betaalde maanden. Parlementsleden betalen geen werknemersverzekering en krijgen een belastingvrije toelage, dus ze staan op het werknemersbruto met hetzelfde netto. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ mois payés. Les parlementaires ne paient pas les assurances des salariés et touchent une indemnité exonérée : ils sont placés au brut salarié qui donne le même net. Sources : ${links}.`,
  },
  'src.pol.pm': { en: `e-Gov: special posts pay act`, nl: `e-Gov: wet op de bezoldiging van bijzondere ambten`, fr: `e-Gov : loi sur la rémunération des postes spéciaux` },
  'src.pol.minOut': { en: `e-Gov: special posts pay act`, nl: `e-Gov: wet op de bezoldiging van bijzondere ambten`, fr: `e-Gov : loi sur la rémunération des postes spéciaux` },
  'src.pol.mp': { en: `e-Gov: Diet members' pay act`, nl: `e-Gov: wet op het parlementsloon`, fr: `e-Gov : loi sur l'indemnité des parlementaires` },
  'src.pol.pmLaw': { en: `e-Gov: special posts pay act`, nl: `e-Gov: wet op de bezoldiging van bijzondere ambten`, fr: `e-Gov : loi sur la rémunération des postes spéciaux` },
  bracketTop: { en: `45% bracket`, nl: `schijf van 45%`, fr: `tranche à 45%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: () => `What happens at low pay?`,
    nl: () => `Wat gebeurt er bij een laag loon?`,
    fr: () => `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, r110, i178, s106, s130) => `Japan has no in-work benefit to lose, only "walls" where each levy starts. Resident tax starts above a yearly salary of ${r110}, income tax above ${i178} in 2026 (less social insurance, so a little higher). Part-timers join employee insurance from about ${s106} a year at larger firms, and a spouse stops being covered by their partner's insurance at ${s130}. A full-time job at the minimum wage (${a}) is past all of them: this page always counts employee insurance.`,
    nl: (a, b, r110, i178, s106, s130) => `Japan heeft geen werkuitkering die je verliest, alleen "muren" waar elke heffing begint. Inwonersbelasting begint boven een jaarloon van ${r110}, inkomstenbelasting boven ${i178} in 2026 (min de sociale verzekering, dus iets hoger). Deeltijders gaan bij grotere werkgevers vanaf ongeveer ${s106} per jaar in de werknemersverzekering, en een echtgenoot is vanaf ${s130} niet meer meeverzekerd bij de partner. Een voltijdse baan aan het minimumloon (${a}) zit boven al die muren: deze pagina rekent altijd de werknemersverzekering mee.`,
    fr: (a, b, r110, i178, s106, s130) => `Le Japon n'a pas d'aide aux travailleurs qu'on perdrait, seulement des « murs » où chaque prélèvement commence. La taxe de résidence commence au-delà d'un salaire annuel de ${r110}, l'impôt sur le revenu au-delà de ${i178} en 2026 (moins les assurances sociales, donc un peu plus haut). Les temps partiels entrent dans les assurances des salariés vers ${s106} par an dans les grandes entreprises, et un conjoint cesse d'être couvert par l'assurance de l'autre à ${s130}. Un temps plein au salaire minimum (${a}) dépasse tous ces seuils : cette page compte toujours les assurances des salariés.`,
  },
  topTitle: {
    en: top => `What happens above ${top}?`,
    nl: top => `Wat gebeurt er boven ${top}?`,
    fr: top => `Que se passe-t-il au-delà de ${top} ?`,
  },
  topBody: {
    en: (top, rate, taper) => `Above ${top} your taxable income passes ¥40 million: each extra yen pays 45% income tax, 2.1% of that as surtax and 10% resident tax, ${rate} in all. Before that, from a salary of about ${taper}, the basic deduction shrinks in three steps and is gone at ¥25 million of income, so the rate jumps a little at each step.`,
    nl: (top, rate, taper) => `Boven ${top} komt je belastbaar inkomen boven ¥ 40 miljoen: elke extra yen betaalt 45% inkomstenbelasting, 2,1% daarvan als toeslag en 10% inwonersbelasting, samen ${rate}. Daarvoor, vanaf een loon van ongeveer ${taper}, krimpt de basisaftrek in drie stappen tot nul bij ¥ 25 miljoen inkomen; bij elke stap springt het tarief even.`,
    fr: (top, rate, taper) => `Au-delà de ${top}, votre revenu imposable dépasse 40 millions ¥ : chaque yen en plus paie 45% d'impôt, 2,1% de cet impôt en surtaxe et 10% de taxe de résidence, soit ${rate}. Avant cela, dès un salaire d'environ ${taper}, la déduction de base fond en trois paliers et disparaît à 25 millions ¥ de revenu : le taux saute un peu à chaque palier.`,
  },

  // Tax components
  'comp.er': { en: `Employer social insurance`, nl: `Sociale verzekering werkgever`, fr: `Assurances sociales employeur` },
  'comp.pen': { en: `Employee pension (kosei nenkin)`, nl: `Werknemerspensioen (kosei nenkin)`, fr: `Retraite des salariés (kosei nenkin)` },
  'comp.ee': { en: `Health, care and employment insurance`, nl: `Ziekte-, zorg- en werkloosheidsverzekering`, fr: `Assurances maladie, dépendance et chômage` },
  'comp.ir': { en: `National income tax`, nl: `Nationale inkomstenbelasting`, fr: `Impôt national sur le revenu` },
  'comp.res': { en: `Resident tax (jumin-zei)`, nl: `Inwonersbelasting (jumin-zei)`, fr: `Taxe de résidence (jumin-zei)` },
  'bd.minGross': { en: `Yearly pay`, nl: `Jaarloon`, fr: `Rémunération annuelle` },
  'bd.stateCost': { en: `Cost to the state`, nl: `Kost voor de staat`, fr: `Coût pour l'État` },
  'bd.np': { en: `National Pension`, nl: `National Pension`, fr: `National Pension` },
  'bd.nhi': { en: `National Health Insurance`, nl: `National Health Insurance`, fr: `National Health Insurance` },
  'bd.empDed': { en: `Employment income deduction`, nl: `Aftrek voor arbeidsinkomen`, fr: `Déduction sur revenus salariaux` },
  'bd.empInc': { en: `Employment income (income tax)`, nl: `Arbeidsinkomen (inkomstenbelasting)`, fr: `Revenu salarial (impôt sur le revenu)` },
  'bd.empIncR': { en: `Employment income (resident tax)`, nl: `Arbeidsinkomen (inwonersbelasting)`, fr: `Revenu salarial (taxe de résidence)` },
  'bd.basic': { en: `Basic deduction`, nl: `Basisaftrek`, fr: `Déduction de base` },
  'bd.ins': { en: `Social insurance paid`, nl: `Betaalde sociale verzekering`, fr: `Assurances sociales payées` },
  'bd.spouse': { en: `Spouse deduction`, nl: `Aftrek voor de echtgenoot`, fr: `Déduction pour conjoint` },
  'bd.taxableJp': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.surtax': { en: `Reconstruction surtax`, nl: `Wederopbouwtoeslag`, fr: `Surtaxe de reconstruction` },
  'bd.adj': { en: `Adjustment credit`, nl: `Correctiekrediet`, fr: `Crédit d'ajustement` },
  'bd.percap': { en: `Per-capita levy`, nl: `Hoofdelijke heffing`, fr: `Taxe par tête` },
  'bd.health': { en: `Health`, nl: `Ziekte`, fr: `Maladie` },
  'bd.care': { en: `Long-term care`, nl: `Langdurige zorg`, fr: `Dépendance` },
  'bd.kids': { en: `Child support levy`, nl: `Kinderopvoedingsheffing`, fr: `Contribution enfance` },
  'bd.pension': { en: `Pension`, nl: `Pensioen`, fr: `Retraite` },
  'bd.ei': { en: `Employment insurance`, nl: `Werkloosheidsverzekering`, fr: `Assurance chômage` },
  'bd.rosai': { en: `Work accident insurance`, nl: `Arbeidsongevallenverzekering`, fr: `Accidents du travail` },
  'bd.kidsEr': { en: `Child-rearing contribution`, nl: `Bijdrage kinderopvoeding`, fr: `Contribution pour l'enfance` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries and no bonus. Many Japanese employers pay two bonuses a year on top, in summer and winter.`,
    nl: `12 maandlonen en geen bonus. Veel Japanse werkgevers betalen er twee bonussen per jaar bovenop, in de zomer en de winter.`,
    fr: `12 salaires mensuels et pas de prime. Beaucoup d'employeurs japonais versent en plus deux primes par an, en été et en hiver.`,
  },
  'tip.fBonus': {
    en: n => `12 monthly salaries plus bonuses worth ${n} months, paid in two halves. Bonuses pay the same insurance with their own ceilings (pension: ¥1,500,000 per bonus; health: ¥5,730,000 a year) and the same taxes.`,
    nl: n => `12 maandlonen plus bonussen ter waarde van ${n} maanden, in twee helften betaald. Bonussen betalen dezelfde verzekeringen met eigen plafonds (pensioen: ¥ 1.500.000 per bonus; ziekte: ¥ 5.730.000 per jaar) en dezelfde belastingen.`,
    fr: n => `12 salaires mensuels plus des primes valant ${n} mois, versées en deux moitiés. Les primes paient les mêmes assurances avec leurs propres plafonds (retraite : 1 500 000 ¥ par prime ; maladie : 5 730 000 ¥ par an) et les mêmes impôts.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Japan taxes each spouse alone. A spouse earning up to ¥1,360,000 in salary can be claimed for a ¥380,000 deduction, which then shrinks to zero at ¥2,070,000 (¥1,330,000 of income); the claimant must earn under ¥10 million of income. Here the household takes the claim that saves most, and your share = the household's taxes with your pay − without it. Being claimed is never a cost to you on its own, but losing it as you earn more is.`,
    nl: `Japan belast elke echtgenoot apart. Een echtgenoot met tot ¥ 1.360.000 loon kan ten laste genomen worden voor een aftrek van ¥ 380.000, die daarna daalt tot nul bij ¥ 2.070.000 (¥ 1.330.000 inkomen); wie dat doet, moet onder ¥ 10 miljoen inkomen blijven. Hier kiest het gezin de voordeligste optie, en jouw deel = de belastingen van het gezin met jouw loon − zonder. Ten laste zijn kost je niets, maar het verliezen als je meer verdient wel.`,
    fr: `Le Japon impose chaque conjoint séparément. Un conjoint gagnant jusqu'à 1 360 000 ¥ de salaire peut être déclaré à charge pour une déduction de 380 000 ¥, qui fond ensuite jusqu'à zéro à 2 070 000 ¥ (1 330 000 ¥ de revenu) ; le déclarant doit avoir moins de 10 millions ¥ de revenu. Ici le foyer retient l'option la plus avantageuse, et votre part = les impôts du foyer avec votre salaire − sans. Être à charge ne vous coûte rien, mais perdre cet avantage en gagnant plus, si.`,
  },
  'tip.claim': {
    en: who => who === 'me' ? `You claim your partner as a spouse.` : `Your partner claims you as a spouse.`,
    nl: who => who === 'me' ? `Jij neemt je partner ten laste als echtgenoot.` : `Je partner neemt jou ten laste als echtgenoot.`,
    fr: who => who === 'me' ? `Vous déclarez votre conjoint à charge.` : `Votre conjoint vous déclare à charge.`,
  },
  'tip.age': {
    en: `From 40 to 64 you also pay long-term care insurance, 1.62% shared with your employer. At 65 it's charged separately on your pension, outside your pay.`,
    nl: `Van 40 tot 64 betaal je ook de verzekering voor langdurige zorg, 1,62% gedeeld met je werkgever. Vanaf 65 wordt ze apart op je pensioen geheven, buiten je loon.`,
    fr: `De 40 à 64 ans, vous payez aussi l'assurance dépendance, 1,62% partagés avec l'employeur. À 65 ans, elle est prélevée à part sur la retraite, hors salaire.`,
  },
  'tip.kenpoRule': {
    en: (lo, hi) => `Kyokai Kenpo, the health insurer of most small and mid-sized firms, sets one rate per prefecture, from ${lo} to ${hi} in 2026. Large firms often have their own health society with a lower rate.`,
    nl: (lo, hi) => `Kyokai Kenpo, de ziekteverzekeraar van de meeste kleine en middelgrote bedrijven, legt één tarief per prefectuur vast, van ${lo} tot ${hi} in 2026. Grote bedrijven hebben vaak een eigen ziekenfonds met een lager tarief.`,
    fr: (lo, hi) => `Kyokai Kenpo, l'assureur maladie de la plupart des PME, fixe un taux par préfecture, de ${lo} à ${hi} en 2026. Les grandes entreprises ont souvent leur propre caisse, à un taux plus bas.`,
  },
  'tip.costShort': { en: `Gross salary + the employer's half of social insurance and its own levies.`, nl: `Brutoloon + de werkgevershelft van de sociale verzekering en zijn eigen heffingen.`, fr: `Salaire brut + la moitié patronale des assurances sociales et ses propres cotisations.` },
  'tip.er': {
    en: `Your employer matches your health, care, child support and pension contributions, pays 0.85% employment insurance, work accident insurance (0.3% for office work, up to 8.8% in mining) and a 0.36% child-rearing contribution.`,
    nl: `Je werkgever betaalt evenveel ziekte-, zorg-, kinder- en pensioenbijdragen als jij, plus 0,85% werkloosheidsverzekering, arbeidsongevallenverzekering (0,3% voor kantoorwerk, tot 8,8% in de mijnbouw) en een bijdrage van 0,36% voor kinderopvoeding.`,
    fr: `Votre employeur paie autant que vous en maladie, dépendance, enfance et retraite, plus 0,85% d'assurance chômage, l'assurance accidents du travail (0,3% pour un travail de bureau, jusqu'à 8,8% dans les mines) et une contribution de 0,36% pour l'enfance.`,
  },
  'tip.pen': {
    en: `18.3% of pay, half each, on monthly pay up to ¥650,000 and bonuses up to ¥1,500,000 each. It builds your own pension on top of the basic one.`,
    nl: `18,3% van het loon, elk de helft, op maandloon tot ¥ 650.000 en bonussen tot ¥ 1.500.000 per stuk. Het bouwt je eigen pensioen op bovenop het basispensioen.`,
    fr: `18,3% du salaire, moitié chacun, sur le mensuel jusqu'à 650 000 ¥ et les primes jusqu'à 1 500 000 ¥ chacune. Elle constitue votre retraite en plus de la pension de base.`,
  },
  'tip.penBase': { en: `Pension base, capped`, nl: `Pensioenbasis, geplafonneerd`, fr: `Assiette retraite, plafonnée` },
  'tip.healthBase': { en: `Health base, capped`, nl: `Ziektebasis, geplafonneerd`, fr: `Assiette maladie, plafonnée` },
  'tip.ee': {
    en: `Half of health insurance (your prefecture's rate), half of long-term care if you are 40 to 64, half of the new 0.23% child support levy, and 0.5% employment insurance on all pay.`,
    nl: `De helft van de ziekteverzekering (tarief van je prefectuur), de helft van de zorgverzekering als je 40 tot 64 bent, de helft van de nieuwe kinderheffing van 0,23% en 0,5% werkloosheidsverzekering op het hele loon.`,
    fr: `La moitié de l'assurance maladie (taux de votre préfecture), la moitié de la dépendance de 40 à 64 ans, la moitié de la nouvelle contribution enfance de 0,23% et 0,5% d'assurance chômage sur tout le salaire.`,
  },
  'tip.eeM': {
    en: `Payslips use rounded "standard monthly pay" grades; this page uses your actual pay up to the ceilings (health ¥1,390,000 a month, ¥5,730,000 of bonuses a year).`,
    nl: `Loonstroken gebruiken afgeronde "standaardmaandloon"-klassen; deze pagina gebruikt je echte loon tot de plafonds (ziekte ¥ 1.390.000 per maand, ¥ 5.730.000 aan bonussen per jaar).`,
    fr: `Les fiches de paie utilisent des classes arrondies de « salaire mensuel standard » ; cette page prend votre salaire réel jusqu'aux plafonds (maladie 1 390 000 ¥ par mois, 5 730 000 ¥ de primes par an).`,
  },
  'tip.empDed': {
    en: `Employees don't deduct real expenses: a flat amount is taken off pay instead. In 2026 it is ¥740,000 up to ¥2,200,000 of salary, then 30% + ¥80,000, 20% + ¥440,000, 10% + ¥1,100,000, and at most ¥1,950,000 from ¥8,500,000. Resident tax still uses a ¥650,000 minimum.`,
    nl: `Werknemers trekken geen echte kosten af: er gaat een forfait van het loon af. In 2026 is dat ¥ 740.000 tot ¥ 2.200.000 loon, daarna 30% + ¥ 80.000, 20% + ¥ 440.000, 10% + ¥ 1.100.000, en hoogstens ¥ 1.950.000 vanaf ¥ 8.500.000. De inwonersbelasting gebruikt nog een minimum van ¥ 650.000.`,
    fr: `Les salariés ne déduisent pas leurs frais réels : un forfait est retiré du salaire. En 2026, il vaut 740 000 ¥ jusqu'à 2 200 000 ¥ de salaire, puis 30% + 80 000 ¥, 20% + 440 000 ¥, 10% + 1 100 000 ¥, et au plus 1 950 000 ¥ dès 8 500 000 ¥. La taxe de résidence garde un minimum de 650 000 ¥.`,
  },
  'tip.basic': {
    en: `Raised by the 2026 tax reform, for the whole of 2026: ¥1,040,000 up to ¥4,890,000 of income, ¥670,000 up to ¥6,550,000, ¥620,000 up to ¥23,500,000, then ¥480,000, ¥320,000 and ¥160,000, and nothing above ¥25,000,000. Resident tax keeps ¥430,000.`,
    nl: `Verhoogd door de belastinghervorming van 2026, voor heel 2026: ¥ 1.040.000 tot ¥ 4.890.000 inkomen, ¥ 670.000 tot ¥ 6.550.000, ¥ 620.000 tot ¥ 23.500.000, daarna ¥ 480.000, ¥ 320.000 en ¥ 160.000, en niets boven ¥ 25.000.000. De inwonersbelasting houdt ¥ 430.000.`,
    fr: `Relevée par la réforme fiscale 2026, pour toute l'année 2026 : 1 040 000 ¥ jusqu'à 4 890 000 ¥ de revenu, 670 000 ¥ jusqu'à 6 550 000 ¥, 620 000 ¥ jusqu'à 23 500 000 ¥, puis 480 000 ¥, 320 000 ¥ et 160 000 ¥, et rien au-delà de 25 000 000 ¥. La taxe de résidence garde 430 000 ¥.`,
  },
  'tip.taxable': {
    en: calc => `Employment income − basic deduction − all social insurance paid − any spouse deduction${calc}. Rounded down to ¥1,000.`,
    nl: calc => `Arbeidsinkomen − basisaftrek − alle betaalde sociale verzekering − eventuele aftrek voor de echtgenoot${calc}. Afgerond naar beneden op ¥ 1.000.`,
    fr: calc => `Revenu salarial − déduction de base − toutes les assurances sociales payées − déduction pour conjoint éventuelle${calc}. Arrondi au millier de yens inférieur.`,
  },
  'tip.irShort': {
    en: `Seven brackets from 5% to 45% on taxable income, plus a 2.1% surtax on the tax until 2037.`,
    nl: `Zeven schijven van 5% tot 45% op het belastbaar inkomen, plus een toeslag van 2,1% op de belasting tot 2037.`,
    fr: `Sept tranches de 5% à 45% sur le revenu imposable, plus une surtaxe de 2,1% de l'impôt jusqu'en 2037.`,
  },
  'tip.irM': {
    en: `The 2.1% reconstruction surtax pays for the 2011 earthquake. From 2027 it drops to 1.1% and a new 1% defence surtax starts.`,
    nl: `De wederopbouwtoeslag van 2,1% betaalt voor de aardbeving van 2011. Vanaf 2027 daalt ze tot 1,1% en start een nieuwe defensietoeslag van 1%.`,
    fr: `La surtaxe de reconstruction de 2,1% finance l'après-séisme de 2011. À partir de 2027, elle passe à 1,1% et une nouvelle surtaxe défense de 1% s'y ajoute.`,
  },
  'tip.irYou': { en: `You`, nl: `Jij`, fr: `Vous` },
  'tip.irPartner': { en: `Your partner`, nl: `Je partner`, fr: `Votre conjoint` },
  'tip.irPerson': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'tip.resPerson': { en: `Resident tax`, nl: `Inwonersbelasting`, fr: `Taxe de résidence` },
  'tip.irHousehold': { en: `Household`, nl: `Gezin`, fr: `Foyer` },
  'tip.irWithout': { en: `Household without your pay`, nl: `Gezin zonder jouw loon`, fr: `Foyer sans votre salaire` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.res': {
    en: `10% of taxable income (6% to the municipality, 4% to the prefecture), with smaller deductions than income tax, less a small adjustment credit, plus a ¥5,000 per-capita levy that includes the ¥1,000 forest tax.`,
    nl: `10% van het belastbaar inkomen (6% voor de gemeente, 4% voor de prefectuur), met kleinere aftrekken dan de inkomstenbelasting, min een klein correctiekrediet, plus een hoofdelijke heffing van ¥ 5.000 met daarin de bosbelasting van ¥ 1.000.`,
    fr: `10% du revenu imposable (6% pour la commune, 4% pour la préfecture), avec des déductions plus petites que pour l'impôt sur le revenu, moins un petit crédit d'ajustement, plus une taxe par tête de 5 000 ¥ qui inclut la taxe forestière de 1 000 ¥.`,
  },
  'tip.resM': {
    en: `Resident tax is billed from June of the next year on last year's income; this page shows the steady state, as if this year's pay went on. It's waived below about ¥1,100,000 of salary for a single person.`,
    nl: `De inwonersbelasting wordt vanaf juni van het volgende jaar op het inkomen van vorig jaar geïnd; deze pagina toont de vaste toestand, alsof dit loon zo doorloopt. Onder ongeveer ¥ 1.100.000 loon is ze voor een alleenstaande niet verschuldigd.`,
    fr: `La taxe de résidence est prélevée à partir de juin de l'année suivante sur le revenu de l'année écoulée ; cette page montre le régime de croisière, comme si ce salaire continuait. Elle n'est pas due sous environ 1 100 000 ¥ de salaire pour une personne seule.`,
  },
  'tip.resExempt': { en: `Below the non-taxable limit: nothing due.`, nl: `Onder de vrijstellingsgrens: niets verschuldigd.`, fr: `Sous le seuil de non-imposition : rien à payer.` },
  'tip.dietGross': {
    en: `¥1,294,000 a month and two term-end allowances, about ¥21.9 million a year, taxed as employment income. The ¥1,000,000 a month allowance for research, publicity and accommodation is tax-free and not counted here.`,
    nl: `¥ 1.294.000 per maand en twee eindejaarstoelagen, ongeveer ¥ 21,9 miljoen per jaar, belast als arbeidsinkomen. De toelage van ¥ 1.000.000 per maand voor onderzoek, communicatie en verblijf is belastingvrij en telt hier niet mee.`,
    fr: `1 294 000 ¥ par mois et deux primes de fin de période, environ 21,9 millions ¥ par an, imposés comme salaire. L'indemnité de 1 000 000 ¥ par mois pour la recherche, la communication et le logement est exonérée et n'est pas comptée ici.`,
  },
  'tip.minOutGross': {
    en: `Full ministerial pay with allowances, an estimate. Treated like an employee's pay with employee insurance, which is close to the civil servants' mutual aid scheme.`,
    nl: `Volledig ministersloon met toelagen, een schatting. Behandeld als werknemersloon met werknemersverzekering, wat dicht bij de onderlinge regeling voor ambtenaren ligt.`,
    fr: `Rémunération ministérielle complète avec indemnités, une estimation. Traitée comme un salaire avec les assurances des salariés, proches de la mutuelle des fonctionnaires.`,
  },
  'tip.stateCost': {
    en: `What the state pays: Diet members have no employer contributions.`,
    nl: `Wat de staat betaalt: voor parlementsleden zijn er geen werkgeversbijdragen.`,
    fr: `Ce que paie l'État : il n'y a pas de cotisations patronales pour les parlementaires.`,
  },
  'tip.dietEr': {
    en: `None: Diet members aren't in employee insurance.`,
    nl: `Geen: parlementsleden zitten niet in de werknemersverzekering.`,
    fr: `Aucune : les parlementaires ne relèvent pas des assurances des salariés.`,
  },
  'tip.dietPen': {
    en: `Diet members pay the flat National Pension, ¥17,920 a month in FY2026, like the self-employed. The Diet members' own pension was abolished in 2006.`,
    nl: `Parlementsleden betalen het vaste National Pension, ¥ 17.920 per maand in boekjaar 2026, zoals zelfstandigen. Het eigen parlementspensioen werd in 2006 afgeschaft.`,
    fr: `Les parlementaires paient la National Pension forfaitaire, 17 920 ¥ par mois pour l'exercice 2026, comme les indépendants. Leur régime propre a été supprimé en 2006.`,
  },
  'tip.dietNhi': {
    en: `National Health Insurance at its yearly ceiling: about ¥920,000 for health and elderly care, ¥170,000 for long-term care at 40 to 64, and the new child support levy. Municipal rates vary; at this pay everyone hits the ceiling.`,
    nl: `National Health Insurance aan het jaarplafond: ongeveer ¥ 920.000 voor ziekte en ouderenzorg, ¥ 170.000 voor langdurige zorg van 40 tot 64, en de nieuwe kinderheffing. Gemeentelijke tarieven verschillen; bij dit loon zit iedereen aan het plafond.`,
    fr: `National Health Insurance à son plafond annuel : environ 920 000 ¥ pour la maladie et les soins aux aînés, 170 000 ¥ pour la dépendance de 40 à 64 ans, et la nouvelle contribution enfance. Les taux communaux varient ; à ce niveau de revenu, tout le monde atteint le plafond.`,
  },
  'tip.vatM': {
    en: `Food, takeaway and newspaper subscriptions are at 8%, and rent, medical care and school fees are exempt, so this is an upper bound.`,
    nl: `Voeding, afhaalmaaltijden en krantenabonnementen zitten aan 8%, en huur, medische zorg en schoolgeld zijn vrijgesteld, dus dit is een bovengrens.`,
    fr: `L'alimentation, la vente à emporter et les abonnements aux journaux sont à 8%, et les loyers, soins médicaux et frais de scolarité exonérés : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − social insurance − income tax − resident tax.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − sociale verzekering − inkomstenbelasting − inwonersbelasting.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − assurances sociales − impôt sur le revenu − taxe de résidence.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [`Matches the employee's health, care, child support and pension contributions.`, `Employment insurance <span class="num">0.85%</span>, work accident insurance <span class="num">0.3%</span> (office work), child-rearing contribution <span class="num">0.36%</span> on the pension base.`] },
    nl: { h: `1 · Werkgever`, li: [`Betaalt evenveel ziekte-, zorg-, kinder- en pensioenbijdragen als de werknemer.`, `Werkloosheidsverzekering <span class="num">0,85%</span>, arbeidsongevallenverzekering <span class="num">0,3%</span> (kantoorwerk), bijdrage kinderopvoeding <span class="num">0,36%</span> op de pensioenbasis.`] },
    fr: { h: `1 · Employeur`, li: [`Paie autant que le salarié en maladie, dépendance, enfance et retraite.`, `Assurance chômage <span class="num">0,85%</span>, accidents du travail <span class="num">0,3%</span> (bureau), contribution enfance <span class="num">0,36%</span> sur l'assiette retraite.`] },
  },
  'ref.ee': {
    en: { h: `2 · Employee insurance`, li: [
      `Pension <span class="num">9.15%</span> on monthly pay up to ¥650,000 and up to ¥1,500,000 per bonus.`,
      `Health: half the prefecture's Kyokai Kenpo rate (<span class="num">9.21%</span> to <span class="num">10.55%</span>), long-term care <span class="num">0.81%</span> from 40 to 64, child support levy <span class="num">0.115%</span>, on monthly pay up to ¥1,390,000 and bonuses up to ¥5,730,000 a year.`,
      `Employment insurance <span class="num">0.5%</span> of all pay. All of it is deductible from income tax and resident tax.`,
    ] },
    nl: { h: `2 · Werknemersverzekering`, li: [
      `Pensioen <span class="num">9,15%</span> op maandloon tot ¥ 650.000 en tot ¥ 1.500.000 per bonus.`,
      `Ziekte: de helft van het Kyokai Kenpo-tarief van de prefectuur (<span class="num">9,21%</span> tot <span class="num">10,55%</span>), langdurige zorg <span class="num">0,81%</span> van 40 tot 64, kinderheffing <span class="num">0,115%</span>, op maandloon tot ¥ 1.390.000 en bonussen tot ¥ 5.730.000 per jaar.`,
      `Werkloosheidsverzekering <span class="num">0,5%</span> op het hele loon. Alles is aftrekbaar van inkomsten- en inwonersbelasting.`,
    ] },
    fr: { h: `2 · Assurances des salariés`, li: [
      `Retraite <span class="num">9,15%</span> sur le mensuel jusqu'à 650 000 ¥ et jusqu'à 1 500 000 ¥ par prime.`,
      `Maladie : la moitié du taux Kyokai Kenpo de la préfecture (<span class="num">9,21%</span> à <span class="num">10,55%</span>), dépendance <span class="num">0,81%</span> de 40 à 64 ans, contribution enfance <span class="num">0,115%</span>, sur le mensuel jusqu'à 1 390 000 ¥ et les primes jusqu'à 5 730 000 ¥ par an.`,
      `Assurance chômage <span class="num">0,5%</span> de tout le salaire. Le tout est déductible de l'impôt sur le revenu et de la taxe de résidence.`,
    ] },
  },
  'ref.empDed': {
    en: { h: `3 · Deductions`, li: [
      `Employment income deduction 2026: <span class="num">¥740,000</span> up to ¥2,200,000 of salary, then 30% + ¥80,000, 20% + ¥440,000, 10% + ¥1,100,000, capped at <span class="num">¥1,950,000</span>.`,
      `Basic deduction 2026: <span class="num">¥1,040,000</span> up to ¥4,890,000 of income, ¥670,000 up to ¥6,550,000, ¥620,000 up to ¥23,500,000, then falling to zero at ¥25,000,000.`,
    ] },
    nl: { h: `3 · Aftrekken`, li: [
      `Aftrek voor arbeidsinkomen 2026: <span class="num">¥ 740.000</span> tot ¥ 2.200.000 loon, daarna 30% + ¥ 80.000, 20% + ¥ 440.000, 10% + ¥ 1.100.000, met een plafond van <span class="num">¥ 1.950.000</span>.`,
      `Basisaftrek 2026: <span class="num">¥ 1.040.000</span> tot ¥ 4.890.000 inkomen, ¥ 670.000 tot ¥ 6.550.000, ¥ 620.000 tot ¥ 23.500.000, daarna dalend tot nul bij ¥ 25.000.000.`,
    ] },
    fr: { h: `3 · Déductions`, li: [
      `Déduction sur revenus salariaux 2026 : <span class="num">740 000 ¥</span> jusqu'à 2 200 000 ¥ de salaire, puis 30% + 80 000 ¥, 20% + 440 000 ¥, 10% + 1 100 000 ¥, plafonnée à <span class="num">1 950 000 ¥</span>.`,
      `Déduction de base 2026 : <span class="num">1 040 000 ¥</span> jusqu'à 4 890 000 ¥ de revenu, 670 000 ¥ jusqu'à 6 550 000 ¥, 620 000 ¥ jusqu'à 23 500 000 ¥, puis dégressive jusqu'à zéro à 25 000 000 ¥.`,
    ] },
  },
  'ref.ir': {
    en: br => ({ h: `4 · National income tax`, li: [`Brackets on taxable income:${br}`, `Plus the reconstruction surtax, <span class="num">2.1%</span> of the tax.`] }),
    nl: br => ({ h: `4 · Nationale inkomstenbelasting`, li: [`Schijven op het belastbaar inkomen:${br}`, `Plus de wederopbouwtoeslag, <span class="num">2,1%</span> van de belasting.`] }),
    fr: br => ({ h: `4 · Impôt national sur le revenu`, li: [`Tranches sur le revenu imposable :${br}`, `Plus la surtaxe de reconstruction, <span class="num">2,1%</span> de l'impôt.`] }),
  },
  'ref.res': {
    en: { h: `5 · Resident tax`, li: [`<span class="num">10%</span> of taxable income after a ¥430,000 basic deduction and the employment deduction with a ¥650,000 minimum, less an adjustment credit of at least ¥2,500, plus a <span class="num">¥5,000</span> per-capita levy.`, `Not due up to ¥450,000 of income for a single person (about ¥1,100,000 of salary).`] },
    nl: { h: `5 · Inwonersbelasting`, li: [`<span class="num">10%</span> van het belastbaar inkomen na een basisaftrek van ¥ 430.000 en de aftrek voor arbeidsinkomen met een minimum van ¥ 650.000, min een correctiekrediet van minstens ¥ 2.500, plus een hoofdelijke heffing van <span class="num">¥ 5.000</span>.`, `Niet verschuldigd tot ¥ 450.000 inkomen voor een alleenstaande (ongeveer ¥ 1.100.000 loon).`] },
    fr: { h: `5 · Taxe de résidence`, li: [`<span class="num">10%</span> du revenu imposable après une déduction de base de 430 000 ¥ et la déduction salariale avec un minimum de 650 000 ¥, moins un crédit d'ajustement d'au moins 2 500 ¥, plus une taxe par tête de <span class="num">5 000 ¥</span>.`, `Non due jusqu'à 450 000 ¥ de revenu pour une personne seule (environ 1 100 000 ¥ de salaire).`] },
  },
  'ref.couple': {
    en: { h: `6 · Spouse`, li: [`Spouse deduction <span class="num">¥380,000</span> (¥330,000 for resident tax) if the spouse's income is at most ¥620,000, then a special deduction falling to zero at ¥1,330,000 of income. Reduced from ¥9 million of the claimant's income, gone above ¥10 million.`] },
    nl: { h: `6 · Echtgenoot`, li: [`Aftrek voor de echtgenoot <span class="num">¥ 380.000</span> (¥ 330.000 voor de inwonersbelasting) als het inkomen van de echtgenoot hoogstens ¥ 620.000 is, daarna een bijzondere aftrek die daalt tot nul bij ¥ 1.330.000 inkomen. Verminderd vanaf ¥ 9 miljoen inkomen van wie aftrekt, weg boven ¥ 10 miljoen.`] },
    fr: { h: `6 · Conjoint`, li: [`Déduction pour conjoint <span class="num">380 000 ¥</span> (330 000 ¥ pour la taxe de résidence) si le revenu du conjoint ne dépasse pas 620 000 ¥, puis une déduction spéciale qui tombe à zéro à 1 330 000 ¥ de revenu. Réduite dès 9 millions ¥ de revenu du déclarant, supprimée au-delà de 10 millions.`] },
  },
  'ref.vat': {
    en: { h: `7 · Consumption tax`, li: [
      `Standard rate <span class="num">10%</span> (7.8% national, 2.2% local), applied to all of your net pay as if you spent it.`,
      `Tax inside a price = price × r / (100 + r): at 10% that's 10 / 110 = <span class="num">9.09%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Verbruiksbelasting`, li: [
      `Normaal tarief <span class="num">10%</span> (7,8% nationaal, 2,2% lokaal), toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Belasting in een prijs = prijs × r / (100 + r): bij 10% is dat 10 / 110 = <span class="num">9,09%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · Taxe sur la consommation`, li: [
      `Taux normal <span class="num">10%</span> (7,8% national, 2,2% local), appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `Taxe comprise dans un prix = prix × r / (100 + r) : à 10%, cela fait 10 / 110 = <span class="num">9,09%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Diet and government`, li: [
      `Diet members <span class="num">¥1,294,000</span> a month plus term-end allowances, about ¥21.9 million a year, and ¥1,000,000 a month tax-free. No ministerial top-up for Diet members since December 2025.`,
      `Statutory pay: Prime Minister ¥2,095,000 a month, minister ¥1,528,000, senior vice-minister ¥1,466,000, parliamentary vice-minister ¥1,250,000.`,
    ] },
    nl: { h: `8 · Diète en regering`, li: [
      `Parlementsleden <span class="num">¥ 1.294.000</span> per maand plus eindejaarstoelagen, ongeveer ¥ 21,9 miljoen per jaar, en ¥ 1.000.000 per maand belastingvrij. Geen ministeriële aanvulling voor parlementsleden sinds december 2025.`,
      `Wettelijk loon: premier ¥ 2.095.000 per maand, minister ¥ 1.528.000, viceminister ¥ 1.466.000, parlementair viceminister ¥ 1.250.000.`,
    ] },
    fr: { h: `8 · Diète et gouvernement`, li: [
      `Parlementaires <span class="num">1 294 000 ¥</span> par mois plus les primes de fin de période, environ 21,9 millions ¥ par an, et 1 000 000 ¥ par mois exonérés. Plus de complément ministériel pour les parlementaires depuis décembre 2025.`,
      `Rémunération légale : Premier ministre 2 095 000 ¥ par mois, ministre 1 528 000 ¥, vice-ministre 1 466 000 ¥, vice-ministre parlementaire 1 250 000 ¥.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Child allowance (paid whatever you earn), deductions for dependants aged 16 and over, life insurance, medical expenses, iDeCo and furusato nozei donations, and company health societies with their own rates.`,
      `Payslip rounding to standard pay grades, and the year's lag of resident tax. The 2027 changes (1.1% reconstruction surtax plus a 1% defence surtax) aren't applied.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Kinderbijslag (betaald ongeacht je loon), aftrekken voor personen ten laste van 16 jaar en ouder, levensverzekering, medische kosten, iDeCo en furusato nozei-giften, en bedrijfsziekenfondsen met eigen tarieven.`,
      `De afronding op standaardloonklassen en de vertraging van een jaar bij de inwonersbelasting. De wijzigingen van 2027 (wederopbouwtoeslag 1,1% plus een defensietoeslag van 1%) zijn niet toegepast.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les allocations familiales (versées quel que soit le salaire), les déductions pour personnes à charge de 16 ans et plus, l'assurance vie, les frais médicaux, iDeCo et les dons furusato nozei, et les caisses maladie d'entreprise à leurs propres taux.`,
      `L'arrondi aux classes de salaire standard et le décalage d'un an de la taxe de résidence. Les changements de 2027 (surtaxe de reconstruction à 1,1% plus une surtaxe défense de 1%) ne sont pas appliqués.`,
    ] },
  },

  inheritLink: {
    en: `What heirs pay on an estate, by family →`,
    nl: `Wat erfgenamen betalen op een nalatenschap, volgens gezin →`,
    fr: `Ce que paient les héritiers sur une succession, selon la famille →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your year-end adjustment and the National Tax Agency decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je eindejaarsafrekening en het Nationaal Belastingagentschap zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre régularisation de fin d'année et l'Agence nationale des impôts font foi.`,
  },

  'src.rates': { en: `NTA: income tax rates`, nl: `NTA: tarieven inkomstenbelasting`, fr: `NTA : barème de l'impôt sur le revenu` },
  'src.basic': { en: `NTA: basic deduction`, nl: `NTA: basisaftrek`, fr: `NTA : déduction de base` },
  'src.empDed': { en: `NTA: employment income deduction`, nl: `NTA: aftrek arbeidsinkomen`, fr: `NTA : déduction sur revenus salariaux` },
  'src.reform': { en: `NTA: 2026 reform Q&A`, nl: `NTA: vragen over de hervorming van 2026`, fr: `NTA : questions-réponses sur la réforme 2026` },
  'src.spouse': { en: `NTA: spouse deduction`, nl: `NTA: aftrek echtgenoot`, fr: `NTA : déduction pour conjoint` },
  'src.spouseSp': { en: `NTA: special spouse deduction`, nl: `NTA: bijzondere aftrek echtgenoot`, fr: `NTA : déduction spéciale pour conjoint` },
  'src.pwc': { en: `PwC: Japan individual taxes`, nl: `PwC: Japanse personenbelasting`, fr: `PwC : impôts des particuliers au Japon` },
  'src.kenpo': { en: `Kyokai Kenpo: rates FY2026`, nl: `Kyokai Kenpo: tarieven 2026`, fr: `Kyokai Kenpo : taux 2026` },
  'src.ei': { en: `MHLW: employment insurance rates`, nl: `MHLW: tarieven werkloosheidsverzekering`, fr: `MHLW : taux d'assurance chômage` },
  'src.np': { en: `Japan Pension Service: National Pension`, nl: `Japan Pension Service: National Pension`, fr: `Japan Pension Service : National Pension` },
  'src.minWage': { en: `MHLW: minimum wages FY2026`, nl: `MHLW: minimumlonen 2026`, fr: `MHLW : salaires minimums 2026` },
  'src.census': { en: `MHLW: wage census 2025`, nl: `MHLW: loonenquête 2025`, fr: `MHLW : enquête sur les salaires 2025` },
  'src.vat': { en: `NTA: consumption tax`, nl: `NTA: verbruiksbelasting`, fr: `NTA : taxe sur la consommation` },
  'src.minPay': { en: `e-Gov: special posts pay act`, nl: `e-Gov: wet op de bezoldiging van bijzondere ambten`, fr: `e-Gov : loi sur la rémunération des postes spéciaux` },
  'src.dietPay': { en: `e-Gov: Diet members' pay act`, nl: `e-Gov: wet op het parlementsloon`, fr: `e-Gov : loi sur l'indemnité des parlementaires` },
};
