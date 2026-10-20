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
    en: `Married. Each spouse pays their own tax, but one can lower their tax by claiming the other while the other earns little. We count children as under 16, an age that gives no tax break.`,
    nl: `Gehuwd. Elke echtgenoot betaalt eigen belasting, maar de ene kan zijn belasting verlagen door de andere ten laste te nemen zolang die weinig verdient. We rekenen kinderen als jonger dan 16, een leeftijd die geen belastingvoordeel geeft.`,
    fr: `Marié(e). Chaque conjoint paie son propre impôt, mais l'un peut réduire le sien en déclarant l'autre à charge tant qu'il gagne peu. On compte les enfants comme ayant moins de 16 ans, un âge qui ne donne aucun avantage fiscal.`,
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
    en: r => `Health insurance with Kyokai Kenpo costs ${r} of your pay from March 2026. You pay half, your employer pays the other half.`,
    nl: r => `De ziekteverzekering bij Kyokai Kenpo kost ${r} van je loon vanaf maart 2026. Jij betaalt de helft, je werkgever de andere helft.`,
    fr: r => `L'assurance maladie Kyokai Kenpo coûte ${r} de votre salaire depuis mars 2026. Vous en payez la moitié, votre employeur l'autre moitié.`,
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
    en: `Since December 2025, a Diet (parliament) member who joins the government gets only the normal Diet pay. It is taxed like a salary. Instead of employee insurance, they pay the National Pension and National Health Insurance, like the self-employed.`,
    nl: `Sinds december 2025 krijgt een lid van de Diète (het parlement) dat in de regering zit alleen het gewone parlementsloon. Het wordt belast zoals een loon. In plaats van de werknemersverzekering betalen ze National Pension en National Health Insurance, zoals zelfstandigen.`,
    fr: `Depuis décembre 2025, un membre de la Diète (le parlement) qui entre au gouvernement ne touche que l'indemnité normale de la Diète. Elle est imposée comme un salaire. Au lieu des assurances des salariés, il paie la National Pension et la National Health Insurance, comme les indépendants.`,
  },
  minSalaryHint: {
    en: `Pay for the year: monthly pay × 12, plus the two bonuses paid at the end of each half-year. On top comes ¥1,000,000 a month for expenses, with no tax on it.`,
    nl: `Loon per jaar: maandloon × 12, plus de twee bonussen aan het eind van elk halfjaar. Daarbovenop komt ¥ 1.000.000 per maand voor onkosten, zonder belasting.`,
    fr: `Rémunération de l'année : mensuel × 12, plus les deux primes versées à la fin de chaque semestre. S'y ajoutent 1 000 000 ¥ par mois pour les frais, sans impôt.`,
  },
  'tip.ministerRules': {
    en: `The law gives the Prime Minister ¥2,095,000 a month, a minister ¥1,528,000 and a senior vice-minister ¥1,466,000. A Diet member in government normally gets the gap between that and their Diet pay as an extra. But a rule added in December 2025 stops that extra "for the time being". So the Prime Minister and ministers who sit in the Diet get the same as any member: ¥1,294,000 a month, two bonuses a year (about ¥6.35 million in all), and ¥1,000,000 a month tax-free for research, publicity and housing. A minister who isn't in the Diet still gets the full minister's pay.`,
    nl: `De wet geeft de premier ¥ 2.095.000 per maand, een minister ¥ 1.528.000 en een viceminister ¥ 1.466.000. Een parlementslid in de regering krijgt normaal het verschil met zijn parlementsloon als extra. Maar een regel uit december 2025 schort dat extra "voorlopig" op. De premier en ministers die in de Diète zetelen, krijgen dus hetzelfde als elk lid: ¥ 1.294.000 per maand, twee bonussen per jaar (samen ongeveer ¥ 6,35 miljoen) en ¥ 1.000.000 per maand belastingvrij voor onderzoek, communicatie en huisvesting. Een minister die niet in de Diète zit, krijgt nog het volle ministersloon.`,
    fr: `La loi accorde au Premier ministre 2 095 000 ¥ par mois, à un ministre 1 528 000 ¥ et à un vice-ministre 1 466 000 ¥. Un parlementaire au gouvernement reçoit normalement en plus l'écart avec son indemnité de la Diète. Mais une règle ajoutée en décembre 2025 suspend ce supplément « pour le moment ». Le Premier ministre et les ministres qui siègent à la Diète touchent donc comme tout membre : 1 294 000 ¥ par mois, deux primes par an (environ 6,35 millions ¥ au total) et 1 000 000 ¥ par mois sans impôt pour la recherche, la communication et le logement. Un ministre qui n'est pas à la Diète garde la paie complète de ministre.`,
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
    en: `Placed at the salary an ordinary employee would need to take home the same, counting the tax-free ¥1,000,000 a month.`,
    nl: `Staat bij het loon dat een gewone werknemer nodig heeft om hetzelfde over te houden, de belastingvrije ¥ 1.000.000 per maand meegerekend.`,
    fr: `Placé au salaire dont un salarié ordinaire aurait besoin pour toucher le même net, en comptant les 1 000 000 ¥ par mois sans impôt.`,
  },
  'polTipNote.minOut': {
    en: `¥1,528,000 a month by law, plus extras for where they live and twice-yearly bonuses: about ¥29 million a year (our estimate). This is rare: most ministers sit in the Diet.`,
    nl: `¥ 1.528.000 per maand volgens de wet, plus extra's voor de woonplaats en twee bonussen per jaar: ongeveer ¥ 29 miljoen per jaar (onze schatting). Dit is zeldzaam: de meeste ministers zetelen in de Diète.`,
    fr: `1 528 000 ¥ par mois selon la loi, plus des suppléments selon le lieu de vie et deux primes par an : environ 29 millions ¥ par an (notre estimation). C'est rare : la plupart des ministres siègent à la Diète.`,
  },
  'polTipNote.pmLaw': {
    en: `¥2,095,000 a month by law, about ¥40 million a year with extras, as often reported. Not paid since December 2025 to a Prime Minister who sits in the Diet.`,
    nl: `¥ 2.095.000 per maand volgens de wet, ongeveer ¥ 40 miljoen per jaar met extra's, zoals vaak gemeld. Sinds december 2025 niet uitbetaald aan een premier die in de Diète zetelt.`,
    fr: `2 095 000 ¥ par mois selon la loi, environ 40 millions ¥ par an avec les suppléments, selon les chiffres souvent cités. Plus versé depuis décembre 2025 à un Premier ministre qui siège à la Diète.`,
  },
  'polTipNote.pm': { en: `Paid the same as any Diet member.`, nl: `Betaald zoals elk parlementslid.`, fr: `Payé comme n'importe quel parlementaire.` },
  'polTipNote.mp': { en: `¥1,294,000 a month.`, nl: `¥ 1.294.000 per maand.`, fr: `1 294 000 ¥ par mois.` },
  polNote: {
    en: links => `Hover a name for details, click it to zoom in. Their yearly pay is shown per month paid. Diet members pay no employee insurance and get a tax-free allowance, so each one sits where an ordinary employee would take home the same. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Hun jaarloon staat per betaalde maand op de grafiek. Parlementsleden betalen geen werknemersverzekering en krijgen een belastingvrije toelage, dus elk staat waar een gewone werknemer hetzelfde zou overhouden. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Leur paie annuelle est montrée par mois payé. Les parlementaires ne paient pas les assurances des salariés et touchent une indemnité sans impôt : chacun est donc placé là où un salarié ordinaire toucherait le même net. Sources : ${links}.`,
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
    en: (a, b, r110, i178, s106, s130) => `Japan has no low-income benefit that you lose when you earn more. There are only "walls": pay levels where a new charge starts. Resident tax starts above ${r110} of yearly salary. Income tax starts above ${i178} in 2026 (a bit higher in practice, because social insurance is taken off first). At bigger firms, part-timers must join employee insurance from about ${s106} a year. And at ${s130} a spouse can no longer be covered by their partner's insurance for free. A full-time job at the minimum wage (${a}) is above all these walls, so this page always counts employee insurance.`,
    nl: (a, b, r110, i178, s106, s130) => `Japan heeft geen uitkering voor lage inkomens die je verliest als je meer verdient. Er zijn alleen "muren": loonniveaus waar een nieuwe heffing begint. Inwonersbelasting begint boven ${r110} jaarloon. Inkomstenbelasting begint boven ${i178} in 2026 (in de praktijk iets hoger, omdat de sociale verzekering eerst wordt afgetrokken). Bij grotere bedrijven moeten deeltijders vanaf ongeveer ${s106} per jaar in de werknemersverzekering. En vanaf ${s130} kan een echtgenoot niet meer gratis meeverzekerd zijn bij de partner. Een voltijdse baan aan het minimumloon (${a}) zit boven al die muren, dus deze pagina rekent altijd de werknemersverzekering mee.`,
    fr: (a, b, r110, i178, s106, s130) => `Le Japon n'a pas d'aide aux bas revenus qu'on perdrait en gagnant plus. Il n'y a que des « murs » : des niveaux de salaire où un nouveau prélèvement commence. La taxe de résidence commence au-delà de ${r110} de salaire annuel. L'impôt sur le revenu commence au-delà de ${i178} en 2026 (un peu plus haut en pratique, car les assurances sociales sont retirées d'abord). Dans les grandes entreprises, les temps partiels doivent entrer dans les assurances des salariés vers ${s106} par an. Et à ${s130}, un conjoint ne peut plus être couvert gratuitement par l'assurance de l'autre. Un temps plein au salaire minimum (${a}) dépasse tous ces murs : cette page compte donc toujours les assurances des salariés.`,
  },
  topTitle: {
    en: top => `What happens above ${top}?`,
    nl: top => `Wat gebeurt er boven ${top}?`,
    fr: top => `Que se passe-t-il au-delà de ${top} ?`,
  },
  topBody: {
    en: (top, rate, taper) => `Above ${top}, the part of your income that is taxed goes past ¥40 million. Each extra yen then pays 45% income tax, a 2.1% surtax on that tax, and 10% resident tax: ${rate} in all. Before that, from a salary of about ${taper}, your tax-free amount (basic deduction) gets smaller in three steps and is gone at ¥25 million of income. So the rate jumps a little at each step.`,
    nl: (top, rate, taper) => `Boven ${top} komt het belaste deel van je inkomen boven ¥ 40 miljoen. Elke extra yen betaalt dan 45% inkomstenbelasting, een toeslag van 2,1% op die belasting en 10% inwonersbelasting: samen ${rate}. Daarvoor, vanaf een loon van ongeveer ${taper}, krimpt je belastingvrije bedrag (basisaftrek) in drie stappen en is het weg bij ¥ 25 miljoen inkomen. Bij elke stap springt het tarief dus even.`,
    fr: (top, rate, taper) => `Au-delà de ${top}, la part imposée de votre revenu dépasse 40 millions ¥. Chaque yen en plus paie alors 45% d'impôt sur le revenu, une surtaxe de 2,1% de cet impôt et 10% de taxe de résidence : ${rate} au total. Avant cela, dès un salaire d'environ ${taper}, votre montant non imposé (déduction de base) diminue en trois paliers et disparaît à 25 millions ¥ de revenu. Le taux saute donc un peu à chaque palier.`,
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
  'bd.adj': { en: `Small tax reduction (adjustment credit)`, nl: `Kleine belastingvermindering (correctiekrediet)`, fr: `Petite réduction d'impôt (crédit d'ajustement)` },
  'bd.percap': { en: `Flat charge per person`, nl: `Vast bedrag per persoon`, fr: `Montant fixe par personne` },
  'bd.health': { en: `Health`, nl: `Ziekte`, fr: `Maladie` },
  'bd.care': { en: `Long-term care`, nl: `Langdurige zorg`, fr: `Dépendance` },
  'bd.kids': { en: `Child support levy`, nl: `Kinderopvoedingsheffing`, fr: `Contribution enfance` },
  'bd.pension': { en: `Pension`, nl: `Pensioen`, fr: `Retraite` },
  'bd.ei': { en: `Employment insurance`, nl: `Werkloosheidsverzekering`, fr: `Assurance chômage` },
  'bd.rosai': { en: `Work accident insurance`, nl: `Arbeidsongevallenverzekering`, fr: `Accidents du travail` },
  'bd.kidsEr': { en: `Child-rearing contribution`, nl: `Bijdrage kinderopvoeding`, fr: `Contribution pour l'enfance` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries and no bonus. Many Japanese employers also pay two bonuses a year, in summer and winter.`,
    nl: `12 maandlonen en geen bonus. Veel Japanse werkgevers betalen daarbovenop twee bonussen per jaar, in de zomer en de winter.`,
    fr: `12 salaires mensuels et pas de prime. Beaucoup d'employeurs japonais versent en plus deux primes par an, en été et en hiver.`,
  },
  'tip.fBonus': {
    en: n => `12 monthly salaries plus bonuses worth ${n} months, paid in two halves. Bonuses pay the same insurance and taxes as pay, but with their own upper limits (pension: ¥1,500,000 per bonus; health: ¥5,730,000 a year).`,
    nl: n => `12 maandlonen plus bonussen ter waarde van ${n} maanden, in twee helften betaald. Op bonussen betaal je dezelfde verzekeringen en belastingen als op loon, maar met eigen bovengrenzen (pensioen: ¥ 1.500.000 per bonus; ziekte: ¥ 5.730.000 per jaar).`,
    fr: n => `12 salaires mensuels plus des primes valant ${n} mois, versées en deux moitiés. Les primes paient les mêmes assurances et impôts que le salaire, mais avec leurs propres plafonds (retraite : 1 500 000 ¥ par prime ; maladie : 5 730 000 ¥ par an).`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `In Japan each spouse pays their own tax. If your spouse earns up to ¥1,360,000 in salary, you can take ¥380,000 off your taxed income. That amount then gets smaller and is gone once they earn ¥2,070,000 (¥1,330,000 of income after the work deduction). You can only do this if your own income is under ¥10 million. Here the household picks whichever way saves the most. Your share = the household's taxes with your pay minus the taxes without it. Being claimed never costs you anything by itself, but losing it when you earn more does.`,
    nl: `In Japan betaalt elke echtgenoot eigen belasting. Verdient je partner tot ¥ 1.360.000 loon, dan mag je ¥ 380.000 van je belast inkomen aftrekken. Dat bedrag wordt daarna kleiner en valt weg zodra je partner ¥ 2.070.000 verdient (¥ 1.330.000 inkomen na de aftrek voor werk). Dat mag alleen als je eigen inkomen onder ¥ 10 miljoen blijft. Hier kiest het gezin de manier die het meest bespaart. Jouw deel = de belastingen van het gezin met jouw loon min die zonder. Ten laste zijn kost je op zich niets, maar het verliezen als je meer verdient wel.`,
    fr: `Au Japon, chaque conjoint paie son propre impôt. Si votre conjoint gagne jusqu'à 1 360 000 ¥ de salaire, vous pouvez retirer 380 000 ¥ de votre revenu imposé. Ce montant diminue ensuite et disparaît quand il gagne 2 070 000 ¥ (1 330 000 ¥ de revenu après la déduction pour le travail). Ce n'est possible que si votre propre revenu reste sous 10 millions ¥. Ici, le foyer choisit l'option qui fait le plus économiser. Votre part = les impôts du foyer avec votre salaire moins ceux sans. Être à charge ne vous coûte rien en soi, mais perdre cet avantage en gagnant plus, si.`,
  },
  'tip.claim': {
    en: who => who === 'me' ? `You claim your partner as a spouse.` : `Your partner claims you as a spouse.`,
    nl: who => who === 'me' ? `Jij neemt je partner ten laste als echtgenoot.` : `Je partner neemt jou ten laste als echtgenoot.`,
    fr: who => who === 'me' ? `Vous déclarez votre conjoint à charge.` : `Votre conjoint vous déclare à charge.`,
  },
  'tip.age': {
    en: `From 40 to 64 you also pay insurance for long-term care in old age: 1.62%, split with your employer. From 65 it is taken from your pension instead, not from your pay.`,
    nl: `Van 40 tot 64 betaal je ook een verzekering voor langdurige zorg op oudere leeftijd: 1,62%, gedeeld met je werkgever. Vanaf 65 wordt ze van je pensioen afgehouden, niet van je loon.`,
    fr: `De 40 à 64 ans, vous payez aussi l'assurance dépendance (soins de longue durée pour les personnes âgées) : 1,62%, partagés avec votre employeur. Dès 65 ans, elle est prélevée sur votre retraite, plus sur votre salaire.`,
  },
  'tip.kenpoRule': {
    en: (lo, hi) => `Most small and medium firms use the same health insurer, Kyokai Kenpo. Its rate depends on the prefecture (region) you work in: from ${lo} to ${hi} in 2026. Big companies often run their own health fund, usually at a lower rate.`,
    nl: (lo, hi) => `De meeste kleine en middelgrote bedrijven gebruiken dezelfde ziekteverzekeraar, Kyokai Kenpo. Het tarief hangt af van de prefectuur (regio) waar je werkt: van ${lo} tot ${hi} in 2026. Grote bedrijven hebben vaak een eigen ziekenfonds, meestal met een lager tarief.`,
    fr: (lo, hi) => `La plupart des PME passent par le même assureur maladie, Kyokai Kenpo. Son taux dépend de la préfecture (région) où vous travaillez : de ${lo} à ${hi} en 2026. Les grandes entreprises ont souvent leur propre caisse, en général à un taux plus bas.`,
  },
  'tip.costShort': { en: `Your gross salary plus what your employer pays on top: its half of social insurance and a few charges of its own.`, nl: `Je brutoloon plus wat je werkgever bovenop betaalt: zijn helft van de sociale verzekering en een paar eigen heffingen.`, fr: `Votre salaire brut plus ce que votre employeur paie en plus : sa moitié des assurances sociales et quelques cotisations à lui.` },
  'tip.er': {
    en: `Your employer pays the same as you for health, long-term care, the child support levy and pension. On top it pays 0.85% for unemployment insurance, insurance for accidents at work (0.3% for office jobs, up to 8.8% in mining) and 0.36% towards child-rearing support.`,
    nl: `Je werkgever betaalt evenveel als jij voor ziekte, langdurige zorg, de kinderheffing en pensioen. Daarbovenop betaalt hij 0,85% voor de werkloosheidsverzekering, een verzekering voor arbeidsongevallen (0,3% voor kantoorwerk, tot 8,8% in de mijnbouw) en 0,36% voor steun aan gezinnen met kinderen.`,
    fr: `Votre employeur paie autant que vous pour la maladie, la dépendance, la contribution enfance et la retraite. En plus, il paie 0,85% d'assurance chômage, l'assurance accidents du travail (0,3% pour un travail de bureau, jusqu'à 8,8% dans les mines) et 0,36% pour l'aide aux familles avec enfants.`,
  },
  'tip.pen': {
    en: `18.3% of your pay, half paid by you and half by your employer. Monthly pay above ¥650,000 and bonuses above ¥1,500,000 each don't count. It earns you a work pension on top of the basic state pension.`,
    nl: `18,3% van je loon, de helft door jou en de helft door je werkgever. Maandloon boven ¥ 650.000 en bonussen boven ¥ 1.500.000 per stuk tellen niet mee. Zo bouw je een werkpensioen op, bovenop het basispensioen van de staat.`,
    fr: `18,3% de votre salaire, moitié payée par vous, moitié par votre employeur. La part du mensuel au-delà de 650 000 ¥ et des primes au-delà de 1 500 000 ¥ chacune ne compte pas. Elle vous ouvre une retraite liée au travail, en plus de la pension de base de l'État.`,
  },
  'tip.penBase': { en: `Pay that counts for the pension (up to the limit)`, nl: `Loon dat meetelt voor het pensioen (tot de grens)`, fr: `Salaire pris en compte pour la retraite (jusqu'au plafond)` },
  'tip.healthBase': { en: `Pay that counts for health insurance (up to the limit)`, nl: `Loon dat meetelt voor de ziekteverzekering (tot de grens)`, fr: `Salaire pris en compte pour l'assurance maladie (jusqu'au plafond)` },
  'tip.ee': {
    en: `Half of the health insurance (at your prefecture's rate), half of the long-term care insurance if you are 40 to 64, half of the new 0.23% child support levy, and 0.5% of all your pay for unemployment insurance.`,
    nl: `De helft van de ziekteverzekering (aan het tarief van je prefectuur), de helft van de verzekering voor langdurige zorg als je 40 tot 64 bent, de helft van de nieuwe kinderheffing van 0,23%, en 0,5% van je hele loon voor de werkloosheidsverzekering.`,
    fr: `La moitié de l'assurance maladie (au taux de votre préfecture), la moitié de l'assurance dépendance si vous avez 40 à 64 ans, la moitié de la nouvelle contribution enfance de 0,23%, et 0,5% de tout votre salaire pour l'assurance chômage.`,
  },
  'tip.eeM': {
    en: `Real payslips round your pay into fixed bands ("standard monthly pay"). This page uses your exact pay, up to the limits (health: ¥1,390,000 a month and ¥5,730,000 of bonuses a year).`,
    nl: `Echte loonstroken ronden je loon af naar vaste klassen ("standaardmaandloon"). Deze pagina gebruikt je exacte loon, tot de grenzen (ziekte: ¥ 1.390.000 per maand en ¥ 5.730.000 aan bonussen per jaar).`,
    fr: `Les vraies fiches de paie arrondissent votre salaire à des classes fixes (« salaire mensuel standard »). Cette page prend votre salaire exact, jusqu'aux plafonds (maladie : 1 390 000 ¥ par mois et 5 730 000 ¥ de primes par an).`,
  },
  'tip.empDed': {
    en: `Employees can't deduct their real work costs. Instead, a fixed amount is taken off their pay before tax. In 2026 it is ¥740,000 for a salary up to ¥2,200,000. Above that it is 30% of the salary + ¥80,000, then 20% + ¥440,000, then 10% + ¥1,100,000, and never more than ¥1,950,000 (reached at ¥8,500,000). For resident tax the lowest amount is still ¥650,000.`,
    nl: `Werknemers kunnen hun echte werkkosten niet aftrekken. In de plaats gaat er een vast bedrag van hun loon af voor de belasting. In 2026 is dat ¥ 740.000 bij een loon tot ¥ 2.200.000. Daarboven is het 30% van het loon + ¥ 80.000, dan 20% + ¥ 440.000, dan 10% + ¥ 1.100.000, en nooit meer dan ¥ 1.950.000 (bereikt bij ¥ 8.500.000). Voor de inwonersbelasting is het laagste bedrag nog ¥ 650.000.`,
    fr: `Les salariés ne peuvent pas déduire leurs vrais frais de travail. À la place, un montant fixe est retiré de leur salaire avant l'impôt. En 2026, c'est 740 000 ¥ pour un salaire jusqu'à 2 200 000 ¥. Au-delà, c'est 30% du salaire + 80 000 ¥, puis 20% + 440 000 ¥, puis 10% + 1 100 000 ¥, et jamais plus de 1 950 000 ¥ (atteint à 8 500 000 ¥). Pour la taxe de résidence, le montant minimum reste 650 000 ¥.`,
  },
  'tip.basic': {
    en: `An amount of income everyone gets tax-free. The 2026 tax reform raised it, for all of 2026: ¥1,040,000 if your income is up to ¥4,890,000, ¥670,000 up to ¥6,550,000, ¥620,000 up to ¥23,500,000, then ¥480,000, ¥320,000 and ¥160,000, and nothing above ¥25,000,000. For resident tax it stays ¥430,000.`,
    nl: `Een bedrag aan inkomen dat iedereen belastingvrij krijgt. De belastinghervorming van 2026 verhoogde het, voor heel 2026: ¥ 1.040.000 bij een inkomen tot ¥ 4.890.000, ¥ 670.000 tot ¥ 6.550.000, ¥ 620.000 tot ¥ 23.500.000, daarna ¥ 480.000, ¥ 320.000 en ¥ 160.000, en niets boven ¥ 25.000.000. Voor de inwonersbelasting blijft het ¥ 430.000.`,
    fr: `Une part du revenu que chacun reçoit sans impôt. La réforme fiscale 2026 l'a relevée, pour toute l'année 2026 : 1 040 000 ¥ si votre revenu va jusqu'à 4 890 000 ¥, 670 000 ¥ jusqu'à 6 550 000 ¥, 620 000 ¥ jusqu'à 23 500 000 ¥, puis 480 000 ¥, 320 000 ¥ et 160 000 ¥, et rien au-delà de 25 000 000 ¥. Pour la taxe de résidence, elle reste à 430 000 ¥.`,
  },
  'tip.taxable': {
    en: calc => `The part of your income that is taxed: your pay after the work deduction, minus the tax-free basic amount, minus all the social insurance you paid, minus any spouse deduction${calc}. Rounded down to the nearest ¥1,000.`,
    nl: calc => `Het deel van je inkomen dat belast wordt: je loon na de aftrek voor werk, min het belastingvrije basisbedrag, min alle betaalde sociale verzekering, min een eventuele aftrek voor je echtgenoot${calc}. Afgerond naar beneden op ¥ 1.000.`,
    fr: calc => `La part de votre revenu qui est imposée : votre salaire après la déduction pour le travail, moins le montant de base non imposé, moins toutes les assurances sociales payées, moins une éventuelle déduction pour conjoint${calc}. Arrondi au millier de yens inférieur.`,
  },
  'tip.irShort': {
    en: `The more you earn, the higher the rate on the next part: seven steps from 5% to 45%. Plus an extra 2.1% of the tax itself until 2037.`,
    nl: `Hoe meer je verdient, hoe hoger het tarief op het volgende deel: zeven stappen van 5% tot 45%. Plus een extra 2,1% van de belasting zelf tot 2037.`,
    fr: `Plus vous gagnez, plus le taux sur la tranche suivante est élevé : sept paliers de 5% à 45%. Plus 2,1% de l'impôt lui-même en supplément jusqu'en 2037.`,
  },
  'tip.irM': {
    en: `The extra 2.1% pays for rebuilding after the 2011 earthquake. From 2027 it falls to 1.1% and a new 1% extra for defence starts.`,
    nl: `De extra 2,1% betaalt de wederopbouw na de aardbeving van 2011. Vanaf 2027 daalt hij tot 1,1% en start een nieuwe extra van 1% voor defensie.`,
    fr: `Le supplément de 2,1% finance la reconstruction après le séisme de 2011. À partir de 2027, il passe à 1,1% et un nouveau supplément de 1% pour la défense commence.`,
  },
  'tip.irYou': { en: `You`, nl: `Jij`, fr: `Vous` },
  'tip.irPartner': { en: `Your partner`, nl: `Je partner`, fr: `Votre conjoint` },
  'tip.irPerson': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'tip.resPerson': { en: `Resident tax`, nl: `Inwonersbelasting`, fr: `Taxe de résidence` },
  'tip.irHousehold': { en: `Household`, nl: `Gezin`, fr: `Foyer` },
  'tip.irWithout': { en: `Household without your pay`, nl: `Gezin zonder jouw loon`, fr: `Foyer sans votre salaire` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.res': {
    en: `A local tax: 10% of the taxed part of your income (6% to your city or town, 4% to the prefecture). Its tax-free amounts are smaller than for income tax. A small reduction is taken off, and a flat ¥5,000 per person is added, which includes a ¥1,000 forest tax.`,
    nl: `Een lokale belasting: 10% van het belaste deel van je inkomen (6% voor je gemeente, 4% voor de prefectuur). De belastingvrije bedragen zijn kleiner dan bij de inkomstenbelasting. Er gaat een kleine vermindering af, en er komt een vast bedrag van ¥ 5.000 per persoon bij, met daarin een bosbelasting van ¥ 1.000.`,
    fr: `Un impôt local : 10% de la part imposée de votre revenu (6% pour votre commune, 4% pour la préfecture). Les montants non imposés sont plus petits que pour l'impôt sur le revenu. Une petite réduction est retirée, et un montant fixe de 5 000 ¥ par personne s'ajoute, dont une taxe forestière de 1 000 ¥.`,
  },
  'tip.resM': {
    en: `Resident tax is charged from June of the next year, on last year's income. This page shows a normal year, as if your pay stayed the same. A single person earning less than about ¥1,100,000 of salary pays none.`,
    nl: `De inwonersbelasting wordt vanaf juni van het volgende jaar geheven, op het inkomen van vorig jaar. Deze pagina toont een gewoon jaar, alsof je loon gelijk blijft. Een alleenstaande met minder dan ongeveer ¥ 1.100.000 loon betaalt niets.`,
    fr: `La taxe de résidence est prélevée à partir de juin de l'année suivante, sur le revenu de l'année passée. Cette page montre une année normale, comme si votre salaire restait le même. Une personne seule qui gagne moins d'environ 1 100 000 ¥ de salaire ne paie rien.`,
  },
  'tip.resExempt': { en: `Income too low to pay it: nothing due.`, nl: `Inkomen te laag om ze te betalen: niets verschuldigd.`, fr: `Revenu trop bas pour la payer : rien à payer.` },
  'tip.dietGross': {
    en: `¥1,294,000 a month and two bonuses a year, about ¥21.9 million a year, taxed like a salary. The ¥1,000,000 a month for research, publicity and housing is tax-free and not counted here.`,
    nl: `¥ 1.294.000 per maand en twee bonussen per jaar, ongeveer ¥ 21,9 miljoen per jaar, belast zoals een loon. De ¥ 1.000.000 per maand voor onderzoek, communicatie en huisvesting is belastingvrij en telt hier niet mee.`,
    fr: `1 294 000 ¥ par mois et deux primes par an, environ 21,9 millions ¥ par an, imposés comme un salaire. Les 1 000 000 ¥ par mois pour la recherche, la communication et le logement sont sans impôt et ne sont pas comptés ici.`,
  },
  'tip.minOutGross': {
    en: `The full minister's pay with extras (our estimate). We treat it like an employee's pay with employee insurance, which is close to the civil servants' own insurance scheme.`,
    nl: `Het volle ministersloon met extra's (onze schatting). We behandelen het als werknemersloon met werknemersverzekering, wat dicht bij de eigen verzekering van ambtenaren ligt.`,
    fr: `La paie complète de ministre avec suppléments (notre estimation). On la traite comme un salaire avec les assurances des salariés, proches du régime propre aux fonctionnaires.`,
  },
  'tip.stateCost': {
    en: `What the state pays. For Diet members it pays nothing on top as an employer.`,
    nl: `Wat de staat betaalt. Voor parlementsleden betaalt hij als werkgever niets bovenop.`,
    fr: `Ce que paie l'État. Pour les parlementaires, il ne paie rien en plus comme employeur.`,
  },
  'tip.dietEr': {
    en: `Nothing: Diet members aren't covered by employee insurance.`,
    nl: `Niets: parlementsleden vallen niet onder de werknemersverzekering.`,
    fr: `Rien : les parlementaires ne sont pas couverts par les assurances des salariés.`,
  },
  'tip.dietPen': {
    en: `Diet members pay the same fixed amount for the National Pension as the self-employed: ¥17,920 a month in FY2026 (April 2026 to March 2027). Their own special pension was scrapped in 2006.`,
    nl: `Parlementsleden betalen hetzelfde vaste bedrag voor het National Pension als zelfstandigen: ¥ 17.920 per maand in boekjaar 2026 (april 2026 tot maart 2027). Hun eigen pensioenregeling werd in 2006 afgeschaft.`,
    fr: `Les parlementaires paient le même montant fixe de National Pension que les indépendants : 17 920 ¥ par mois pour l'exercice 2026 (avril 2026 à mars 2027). Leur régime de retraite propre a été supprimé en 2006.`,
  },
  'tip.dietNhi': {
    en: `National Health Insurance at the most anyone pays in a year: about ¥920,000 for health and care of the elderly, ¥170,000 for long-term care at 40 to 64, and the new child support levy. Rates differ by city, but at this pay everyone pays the maximum.`,
    nl: `National Health Insurance aan het maximum dat iemand per jaar betaalt: ongeveer ¥ 920.000 voor ziekte en ouderenzorg, ¥ 170.000 voor langdurige zorg van 40 tot 64, en de nieuwe kinderheffing. De tarieven verschillen per gemeente, maar bij dit loon betaalt iedereen het maximum.`,
    fr: `La National Health Insurance au maximum payé par an : environ 920 000 ¥ pour la maladie et les soins aux aînés, 170 000 ¥ pour la dépendance de 40 à 64 ans, et la nouvelle contribution enfance. Les taux varient selon la commune, mais à ce niveau de revenu tout le monde paie le maximum.`,
  },
  'tip.vatM': {
    en: `Food, takeaway and newspaper subscriptions are taxed at only 8%, and rent, medical care and school fees have no tax at all. So the real tax you pay is usually lower than this.`,
    nl: `Voeding, afhaalmaaltijden en krantenabonnementen worden maar aan 8% belast, en op huur, medische zorg en schoolgeld zit helemaal geen belasting. De belasting die je echt betaalt is dus meestal lager.`,
    fr: `L'alimentation, la vente à emporter et les abonnements aux journaux ne sont taxés qu'à 8%, et les loyers, soins médicaux et frais de scolarité pas du tout. La taxe que vous payez vraiment est donc souvent plus basse.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. That's your gross, minus social insurance, income tax and resident tax.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Dat is je bruto, min sociale verzekering, inkomstenbelasting en inwonersbelasting.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. C'est votre brut, moins les assurances sociales, l'impôt sur le revenu et la taxe de résidence.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [`Pays the same as the employee for health, long-term care, the child support levy and pension.`, `On top: unemployment insurance <span class="num">0.85%</span>, insurance for accidents at work <span class="num">0.3%</span> (office jobs), and <span class="num">0.36%</span> for child-rearing support, on the pay that counts for the pension.`] },
    nl: { h: `1 · Werkgever`, li: [`Betaalt evenveel als de werknemer voor ziekte, langdurige zorg, de kinderheffing en pensioen.`, `Daarbovenop: werkloosheidsverzekering <span class="num">0,85%</span>, verzekering voor arbeidsongevallen <span class="num">0,3%</span> (kantoorwerk), en <span class="num">0,36%</span> voor steun aan gezinnen met kinderen, op het loon dat meetelt voor het pensioen.`] },
    fr: { h: `1 · Employeur`, li: [`Paie autant que le salarié pour la maladie, la dépendance, la contribution enfance et la retraite.`, `En plus : assurance chômage <span class="num">0,85%</span>, assurance accidents du travail <span class="num">0,3%</span> (bureau), et <span class="num">0,36%</span> pour l'aide aux familles avec enfants, sur le salaire pris en compte pour la retraite.`] },
  },
  'ref.ee': {
    en: { h: `2 · Employee insurance`, li: [
      `Pension <span class="num">9.15%</span>, counting monthly pay up to ¥650,000 and each bonus up to ¥1,500,000.`,
      `Health: half of your prefecture's Kyokai Kenpo rate (<span class="num">9.21%</span> to <span class="num">10.55%</span>), long-term care <span class="num">0.81%</span> from 40 to 64, child support levy <span class="num">0.115%</span>. These count monthly pay up to ¥1,390,000 and bonuses up to ¥5,730,000 a year.`,
      `Unemployment insurance <span class="num">0.5%</span> of all pay. Everything you pay here lowers the income on which income tax and resident tax are charged.`,
    ] },
    nl: { h: `2 · Werknemersverzekering`, li: [
      `Pensioen <span class="num">9,15%</span>, op maandloon tot ¥ 650.000 en elke bonus tot ¥ 1.500.000.`,
      `Ziekte: de helft van het Kyokai Kenpo-tarief van je prefectuur (<span class="num">9,21%</span> tot <span class="num">10,55%</span>), langdurige zorg <span class="num">0,81%</span> van 40 tot 64, kinderheffing <span class="num">0,115%</span>. Die tellen maandloon tot ¥ 1.390.000 en bonussen tot ¥ 5.730.000 per jaar.`,
      `Werkloosheidsverzekering <span class="num">0,5%</span> van het hele loon. Alles wat je hier betaalt, verlaagt het inkomen waarop inkomsten- en inwonersbelasting worden geheven.`,
    ] },
    fr: { h: `2 · Assurances des salariés`, li: [
      `Retraite <span class="num">9,15%</span>, sur le mensuel jusqu'à 650 000 ¥ et chaque prime jusqu'à 1 500 000 ¥.`,
      `Maladie : la moitié du taux Kyokai Kenpo de votre préfecture (<span class="num">9,21%</span> à <span class="num">10,55%</span>), dépendance <span class="num">0,81%</span> de 40 à 64 ans, contribution enfance <span class="num">0,115%</span>. Elles comptent le mensuel jusqu'à 1 390 000 ¥ et les primes jusqu'à 5 730 000 ¥ par an.`,
      `Assurance chômage <span class="num">0,5%</span> de tout le salaire. Tout ce que vous payez ici réduit le revenu sur lequel l'impôt sur le revenu et la taxe de résidence sont calculés.`,
    ] },
  },
  'ref.empDed': {
    en: { h: `3 · Amounts taken off before tax`, li: [
      `Fixed work deduction 2026 (instead of real work costs): <span class="num">¥740,000</span> for a salary up to ¥2,200,000, then 30% + ¥80,000, 20% + ¥440,000, 10% + ¥1,100,000, at most <span class="num">¥1,950,000</span>.`,
      `Tax-free basic amount 2026: <span class="num">¥1,040,000</span> for income up to ¥4,890,000, ¥670,000 up to ¥6,550,000, ¥620,000 up to ¥23,500,000, then shrinking to zero at ¥25,000,000.`,
    ] },
    nl: { h: `3 · Bedragen die vóór de belasting afgaan`, li: [
      `Vaste aftrek voor werk 2026 (in plaats van echte werkkosten): <span class="num">¥ 740.000</span> bij een loon tot ¥ 2.200.000, daarna 30% + ¥ 80.000, 20% + ¥ 440.000, 10% + ¥ 1.100.000, hoogstens <span class="num">¥ 1.950.000</span>.`,
      `Belastingvrij basisbedrag 2026: <span class="num">¥ 1.040.000</span> bij een inkomen tot ¥ 4.890.000, ¥ 670.000 tot ¥ 6.550.000, ¥ 620.000 tot ¥ 23.500.000, daarna dalend tot nul bij ¥ 25.000.000.`,
    ] },
    fr: { h: `3 · Montants retirés avant l'impôt`, li: [
      `Déduction fixe pour le travail 2026 (au lieu des frais réels) : <span class="num">740 000 ¥</span> pour un salaire jusqu'à 2 200 000 ¥, puis 30% + 80 000 ¥, 20% + 440 000 ¥, 10% + 1 100 000 ¥, au plus <span class="num">1 950 000 ¥</span>.`,
      `Montant de base non imposé 2026 : <span class="num">1 040 000 ¥</span> pour un revenu jusqu'à 4 890 000 ¥, 670 000 ¥ jusqu'à 6 550 000 ¥, 620 000 ¥ jusqu'à 23 500 000 ¥, puis diminuant jusqu'à zéro à 25 000 000 ¥.`,
    ] },
  },
  'ref.ir': {
    en: br => ({ h: `4 · National income tax`, li: [`Each slice of the taxed income pays its own rate:${br}`, `Plus an extra <span class="num">2.1%</span> of the tax to pay for rebuilding after the 2011 earthquake.`] }),
    nl: br => ({ h: `4 · Nationale inkomstenbelasting`, li: [`Elke schijf van het belaste inkomen heeft haar eigen tarief:${br}`, `Plus een extra <span class="num">2,1%</span> van de belasting voor de wederopbouw na de aardbeving van 2011.`] }),
    fr: br => ({ h: `4 · Impôt national sur le revenu`, li: [`Chaque tranche du revenu imposé a son propre taux :${br}`, `Plus <span class="num">2,1%</span> de l'impôt en supplément pour la reconstruction après le séisme de 2011.`] }),
  },
  'ref.res': {
    en: { h: `5 · Resident tax`, li: [`<span class="num">10%</span> of the taxed income. Before that, a ¥430,000 tax-free basic amount and the work deduction (at least ¥650,000) are taken off. Then a small reduction of at least ¥2,500 comes off, and a flat <span class="num">¥5,000</span> per person is added.`, `A single person pays none up to ¥450,000 of income (about ¥1,100,000 of salary).`] },
    nl: { h: `5 · Inwonersbelasting`, li: [`<span class="num">10%</span> van het belaste inkomen. Daarvoor gaan een belastingvrij basisbedrag van ¥ 430.000 en de aftrek voor werk (minstens ¥ 650.000) af. Daarna gaat er een kleine vermindering van minstens ¥ 2.500 af, en komt er een vast bedrag van <span class="num">¥ 5.000</span> per persoon bij.`, `Een alleenstaande betaalt niets tot ¥ 450.000 inkomen (ongeveer ¥ 1.100.000 loon).`] },
    fr: { h: `5 · Taxe de résidence`, li: [`<span class="num">10%</span> du revenu imposé. Avant cela, on retire un montant de base non imposé de 430 000 ¥ et la déduction pour le travail (au moins 650 000 ¥). Puis une petite réduction d'au moins 2 500 ¥ est retirée, et un montant fixe de <span class="num">5 000 ¥</span> par personne s'ajoute.`, `Une personne seule ne paie rien jusqu'à 450 000 ¥ de revenu (environ 1 100 000 ¥ de salaire).`] },
  },
  'ref.couple': {
    en: { h: `6 · Spouse`, li: [`If your spouse's income is ¥620,000 or less, you take <span class="num">¥380,000</span> off your taxed income (¥330,000 for resident tax). Above that a smaller amount applies, falling to zero at ¥1,330,000 of their income. You get less once your own income passes ¥9 million, and nothing above ¥10 million.`] },
    nl: { h: `6 · Echtgenoot`, li: [`Is het inkomen van je partner ¥ 620.000 of minder, dan trek je <span class="num">¥ 380.000</span> af van je belast inkomen (¥ 330.000 voor de inwonersbelasting). Daarboven geldt een kleiner bedrag, dat daalt tot nul bij ¥ 1.330.000 inkomen van je partner. Je krijgt minder zodra je eigen inkomen boven ¥ 9 miljoen komt, en niets boven ¥ 10 miljoen.`] },
    fr: { h: `6 · Conjoint`, li: [`Si le revenu de votre conjoint est de 620 000 ¥ ou moins, vous retirez <span class="num">380 000 ¥</span> de votre revenu imposé (330 000 ¥ pour la taxe de résidence). Au-delà, un montant plus petit s'applique, qui tombe à zéro à 1 330 000 ¥ de revenu du conjoint. Vous recevez moins dès que votre propre revenu dépasse 9 millions ¥, et rien au-delà de 10 millions.`] },
  },
  'ref.vat': {
    en: { h: `7 · Consumption tax`, li: [
      `Usual rate <span class="num">10%</span> (7.8% to the state, 2.2% local). We count it on all your take-home pay, as if you spent it all.`,
      `How much of a price is tax: price × r / (100 + r). At 10% that's 10 / 110 = <span class="num">9.09%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Verbruiksbelasting`, li: [
      `Gewoon tarief <span class="num">10%</span> (7,8% voor de staat, 2,2% lokaal). We rekenen het op je hele nettoloon, alsof je alles uitgeeft.`,
      `Hoeveel van een prijs belasting is: prijs × r / (100 + r). Bij 10% is dat 10 / 110 = <span class="num">9,09%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · Taxe sur la consommation`, li: [
      `Taux habituel <span class="num">10%</span> (7,8% pour l'État, 2,2% local). On l'applique à tout votre salaire net, comme si vous dépensiez tout.`,
      `La part de taxe dans un prix : prix × r / (100 + r). À 10%, cela fait 10 / 110 = <span class="num">9,09%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Diet and government`, li: [
      `Diet members: <span class="num">¥1,294,000</span> a month plus two bonuses a year, about ¥21.9 million a year, and ¥1,000,000 a month tax-free. Since December 2025, Diet members in government get no extra minister's pay.`,
      `Pay set by law: Prime Minister ¥2,095,000 a month, minister ¥1,528,000, senior vice-minister ¥1,466,000, parliamentary vice-minister ¥1,250,000.`,
    ] },
    nl: { h: `8 · Diète en regering`, li: [
      `Parlementsleden: <span class="num">¥ 1.294.000</span> per maand plus twee bonussen per jaar, ongeveer ¥ 21,9 miljoen per jaar, en ¥ 1.000.000 per maand belastingvrij. Sinds december 2025 krijgen parlementsleden in de regering geen extra ministersloon.`,
      `Loon volgens de wet: premier ¥ 2.095.000 per maand, minister ¥ 1.528.000, viceminister ¥ 1.466.000, parlementair viceminister ¥ 1.250.000.`,
    ] },
    fr: { h: `8 · Diète et gouvernement`, li: [
      `Parlementaires : <span class="num">1 294 000 ¥</span> par mois plus deux primes par an, environ 21,9 millions ¥ par an, et 1 000 000 ¥ par mois sans impôt. Depuis décembre 2025, les parlementaires au gouvernement ne touchent plus de supplément de ministre.`,
      `Paie fixée par la loi : Premier ministre 2 095 000 ¥ par mois, ministre 1 528 000 ¥, vice-ministre 1 466 000 ¥, vice-ministre parlementaire 1 250 000 ¥.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Child allowance (paid whatever you earn), tax breaks for family members aged 16 or more, life insurance, medical costs, iDeCo (private pension savings) and furusato nozei (donations to a hometown that lower your tax), and company health funds with their own rates.`,
      `The rounding of pay into fixed bands on payslips, and the one-year delay of resident tax. The 2027 changes (rebuilding extra down to 1.1%, plus a new 1% for defence) aren't applied.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Kinderbijslag (betaald wat je ook verdient), belastingvoordelen voor gezinsleden van 16 of ouder, levensverzekering, medische kosten, iDeCo (privé-pensioensparen) en furusato nozei (giften aan een thuisgemeente die je belasting verlagen), en bedrijfsziekenfondsen met eigen tarieven.`,
      `De afronding van het loon naar vaste klassen op loonstroken, en de vertraging van een jaar bij de inwonersbelasting. De wijzigingen van 2027 (wederopbouwtoeslag naar 1,1%, plus een nieuwe 1% voor defensie) zijn niet toegepast.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les allocations familiales (versées quel que soit le salaire), les avantages fiscaux pour les proches à charge de 16 ans ou plus, l'assurance vie, les frais médicaux, iDeCo (épargne retraite privée) et furusato nozei (dons à une commune qui réduisent l'impôt), et les caisses maladie d'entreprise à leurs propres taux.`,
      `L'arrondi du salaire à des classes fixes sur les fiches de paie, et le décalage d'un an de la taxe de résidence. Les changements de 2027 (supplément de reconstruction ramené à 1,1%, plus un nouveau 1% pour la défense) ne sont pas appliqués.`,
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

  // Known gaps and caveats
  'gap.noCheck': {
    en: `We put these rules together without a last check online, and we didn't compare any result with an official or payroll calculator.`,
    nl: `We hebben deze regels samengesteld zonder laatste controle online, en geen enkel resultaat vergeleken met een officiële of loonrekentool.`,
    fr: `Nous avons rassemblé ces règles sans dernière vérification en ligne, et n'avons comparé aucun résultat à un calculateur officiel ou de paie.`,
  },
  'gap.basicReform': {
    en: `The bigger tax-free basic amount from the 2026 reform (¥1,040,000 for income up to ¥4.89 million) is used for the whole year here. In real life it starts on 1 December 2026, through the year-end tax correction your employer makes.`,
    nl: `Het hogere belastingvrije basisbedrag van de hervorming van 2026 (¥ 1.040.000 bij een inkomen tot ¥ 4,89 miljoen) geldt hier voor het hele jaar. In het echt start het op 1 december 2026, via de eindejaarscorrectie die je werkgever maakt.`,
    fr: `Le montant de base non imposé relevé par la réforme 2026 (1 040 000 ¥ pour un revenu jusqu'à 4,89 millions ¥) s'applique ici à toute l'année. En réalité, il démarre le 1er décembre 2026, via la régularisation de fin d'année faite par votre employeur.`,
  },
  'gap.resTax': {
    en: `Some resident tax details are not confirmed: the ¥430,000 tax-free basic amount, the ¥650,000 minimum work deduction, the small reduction, and the ¥450,000 income below which you pay none.`,
    nl: `Enkele details van de inwonersbelasting zijn niet bevestigd: het belastingvrije basisbedrag van ¥ 430.000, de minimale aftrek voor werk van ¥ 650.000, de kleine vermindering, en de ¥ 450.000 inkomen waaronder je niets betaalt.`,
    fr: `Certains détails de la taxe de résidence ne sont pas confirmés : le montant de base non imposé de 430 000 ¥, la déduction minimale pour le travail de 650 000 ¥, la petite réduction, et le revenu de 450 000 ¥ sous lequel on ne paie rien.`,
  },
  'gap.insRates': {
    en: `Unemployment insurance (0.5% for the employee) and insurance for accidents at work (0.3%) use the rates for ordinary businesses and office work. Building, farming and some other trades pay more.`,
    nl: `De werkloosheidsverzekering (0,5% voor de werknemer) en de verzekering voor arbeidsongevallen (0,3%) gebruiken de tarieven voor gewone bedrijven en kantoorwerk. Bouw, landbouw en enkele andere sectoren betalen meer.`,
    fr: `L'assurance chômage (0,5% pour le salarié) et l'assurance accidents du travail (0,3%) utilisent les taux des entreprises ordinaires et du travail de bureau. Le bâtiment, l'agriculture et certains autres métiers paient davantage.`,
  },
  'gap.bonusSplit': {
    en: `With 14 or 16 months, we pay the extra months as two equal bonuses, each with its own social insurance limit. Real bonuses differ in size and in when they are paid.`,
    nl: `Bij 14 of 16 maanden betalen we de extra maanden uit als twee gelijke bonussen, elk met een eigen grens voor de sociale verzekering. Echte bonussen verschillen in grootte en in wanneer ze betaald worden.`,
    fr: `Avec 14 ou 16 mois, nous versons les mois en plus en deux primes égales, chacune avec son propre plafond de cotisations. Les vraies primes varient en montant et en date de versement.`,
  },
  'gap.minWage': {
    en: `The minimum wage line is the national average (¥1,177 an hour, weighted by how many people work in each prefecture) at 40 hours a week. Each prefecture sets its own minimum, and the new ones start on different dates from October 2026.`,
    nl: `De lijn van het minimumloon is het nationale gemiddelde (¥ 1.177 per uur, gewogen naar hoeveel mensen in elke prefectuur werken) bij 40 uur per week. Elke prefectuur bepaalt haar eigen minimum, en de nieuwe gaan vanaf oktober 2026 op verschillende data in.`,
    fr: `La ligne du salaire minimum est la moyenne nationale (1 177 ¥ de l'heure, pondérée par le nombre de travailleurs de chaque préfecture) à 40 heures par semaine. Chaque préfecture fixe son propre minimum, et les nouveaux démarrent à des dates différentes à partir d'octobre 2026.`,
  },
  'gap.census': {
    en: `The median (half of employees earn more, half earn less) and the average come from the 2025 wage survey. They cover normal monthly pay, without overtime or bonuses.`,
    nl: `De mediaan (de helft van de werknemers verdient meer, de helft minder) en het gemiddelde komen uit de loonenquête van 2025. Ze gaan over het gewone maandloon, zonder overuren of bonussen.`,
    fr: `La médiane (la moitié des salariés gagne plus, l'autre moitié moins) et la moyenne viennent de l'enquête sur les salaires 2025. Elles portent sur le salaire mensuel normal, sans heures supplémentaires ni primes.`,
  },
  'gap.topup': {
    en: `The Prime Minister and ministers who sit in the Diet are shown with Diet pay only. That's how we read the December 2025 law that stops the minister's extra pay; no published pay figure confirms it.`,
    nl: `De premier en ministers die in de Diète zetelen, staan hier alleen met hun parlementsloon. Zo lezen wij de wet van december 2025 die het extra ministersloon stopt; geen gepubliceerd loonbedrag bevestigt het.`,
    fr: `Le Premier ministre et les ministres qui siègent à la Diète sont montrés avec la seule indemnité parlementaire. C'est notre lecture de la loi de décembre 2025 qui suspend le supplément de ministre ; aucun montant publié ne le confirme.`,
  },
  'gap.termEnd': {
    en: `Diet members' two yearly bonuses (about ¥6.35 million a year) are our estimate: 3.4 months of pay times 1.45. The full minister's pay (about ¥29 million) and the Prime Minister's pay set by law (about ¥40 million) are estimates too.`,
    nl: `De twee jaarlijkse bonussen van parlementsleden (ongeveer ¥ 6,35 miljoen per jaar) zijn onze schatting: 3,4 maanden loon maal 1,45. Het volle ministersloon (ongeveer ¥ 29 miljoen) en het wettelijke loon van de premier (ongeveer ¥ 40 miljoen) zijn ook schattingen.`,
    fr: `Les deux primes annuelles des parlementaires (environ 6,35 millions ¥ par an) sont notre estimation : 3,4 mois d'indemnité fois 1,45. La paie complète de ministre (environ 29 millions ¥) et celle fixée par la loi pour le Premier ministre (environ 40 millions ¥) sont aussi des estimations.`,
  },
  'gap.dietNhi': {
    en: `We assume Diet members pay the most anyone pays for National Health Insurance in a year. That maximum and the rates depend on the city, so this isn't confirmed.`,
    nl: `We gaan ervan uit dat parlementsleden het maximum betalen dat iemand per jaar voor de nationale ziekteverzekering betaalt. Dat maximum en de tarieven hangen af van de gemeente, dus dit is niet bevestigd.`,
    fr: `Nous supposons que les parlementaires paient le maximum annuel de l'assurance maladie nationale. Ce maximum et les taux dépendent de la commune : ce n'est donc pas confirmé.`,
  },
  'gap.dietAllow': {
    en: `The Diet's ¥1 million a month for research and communication is added, tax-free, to what Diet members take home, even though it is meant to cover costs.`,
    nl: `De ¥ 1 miljoen per maand van de Diète voor onderzoek en communicatie wordt belastingvrij opgeteld bij wat parlementsleden overhouden, ook al is het bedoeld voor onkosten.`,
    fr: `Le million de yens par mois de la Diète pour la recherche et la communication est ajouté, sans impôt, à ce que touchent les parlementaires, même s'il est destiné à couvrir des frais.`,
  },
  'gap.notIncl': {
    en: `Left out: child allowance, other tax breaks, company health funds, payslip rounding, the one-year delay of resident tax and the 2027 changes to the extra taxes. See "What's not included".`,
    nl: `Niet meegerekend: kinderbijslag, andere belastingvoordelen, bedrijfsziekenfondsen, afronding op de loonstrook, de vertraging van een jaar bij de inwonersbelasting en de wijzigingen van de toeslagen in 2027. Zie "Wat niet is meegerekend".`,
    fr: `Non comptés : les allocations familiales, les autres avantages fiscaux, les caisses maladie d'entreprise, l'arrondi des fiches de paie, le décalage d'un an de la taxe de résidence et les changements de surtaxe de 2027. Voir « Ce qui n'est pas inclus ».`,
  },
};
