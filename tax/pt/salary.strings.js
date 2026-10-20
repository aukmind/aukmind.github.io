window.TAX_STRINGS = {
  title: { en: `Portuguese Buying Power`, nl: `Portugese koopkracht`, fr: `Pouvoir d'achat au Portugal` },
  eyebrow: { en: `Portugal · income year 2026 · employee`, nl: `Portugal · inkomstenjaar 2026 · werknemer`, fr: `Portugal · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Portugal · income year 2026 · member of government`, nl: `Portugal · inkomstenjaar 2026 · regeringslid`, fr: `Portugal · revenus 2026 · membre du gouvernement` },
  lead: {
    en: `Every tax on a Portuguese salary in 2026, from what your employer pays to what you can buy. Mainland, Madeira and the Azores.`,
    nl: `Alle belastingen op een Portugees loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Vasteland, Madeira en de Azoren.`,
    fr: `Tous les prélèvements sur un salaire portugais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Continent, Madère et Açores.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married or living together as a couple: you can file one tax form together or two separate ones. We pick whichever costs less.`,
    nl: `Gehuwd of samenwonend als koppel: je kunt samen één aangifte of twee aparte indienen. We kiezen wat het minst kost.`,
    fr: `Mariés ou en couple de fait : vous pouvez faire une déclaration commune ou deux séparées. Nous prenons la moins chère.`,
  },
  under3: { en: `Of whom under 3`, nl: `Waarvan jonger dan 3`, fr: `Dont moins de 3 ans` },
  fewerUnder3: { en: `Fewer children under 3`, nl: `Minder kinderen onder 3`, fr: `Moins d'enfants de moins de 3 ans` },
  moreUnder3: { en: `More children under 3`, nl: `Meer kinderen onder 3`, fr: `Plus d'enfants de moins de 3 ans` },
  includePa: { en: `Count the abono de família`, nl: `Abono de família meetellen`, fr: `Compter l'abono de família` },
  communesError: {
    en: `Couldn't load the list of municipalities (communes.js next to this page). Set the rate by hand below.`,
    nl: `Kon de lijst met gemeenten niet laden (communes.js naast deze pagina). Stel het tarief hieronder zelf in.`,
    fr: `Impossible de charger la liste des municipalités (communes.js à côté de cette page). Réglez le taux à la main ci-dessous.`,
  },
  region: { en: `Tax region`, nl: `Belastinggebied`, fr: `Région fiscale` },
  'region.cont': { en: `Mainland`, nl: `Vasteland`, fr: `Continent` },
  'region.mad': { en: `Madeira`, nl: `Madeira`, fr: `Madère` },
  'region.acor': { en: `Azores`, nl: `Azoren`, fr: `Açores` },
  munShort: { en: `IRS share`, nl: `IRS-aandeel`, fr: `Part IRS` },
  munLabel: { en: `Municipal share of IRS:`, nl: `Gemeentelijk aandeel in de IRS:`, fr: `Part municipale de l'IRS :` },
  vatStandard: {
    en: `(mainland 23%, Madeira 22%, Azores 16%)`,
    nl: `(vasteland 23%, Madeira 22%, Azoren 16%)`,
    fr: `(continent 23%, Madère 22%, Açores 16%)`,
  },
  employerSize: { en: `IRS Jovem (under 35)`, nl: `IRS Jovem (jonger dan 35)`, fr: `IRS Jovem (moins de 35 ans)` },
  'size.none': { en: `No`, nl: `Nee`, fr: `Non` },
  'size.y1': { en: `Year 1`, nl: `Jaar 1`, fr: `Année 1` },
  'size.y2': { en: `2 to 4`, nl: `2 tot 4`, fr: `2 à 4` },
  'size.y5': { en: `5 to 7`, nl: `5 tot 7`, fr: `5 à 7` },
  'size.y8': { en: `8 to 10`, nl: `8 tot 10`, fr: `8 à 10` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.se': { en: `Secretary of State`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Government members follow their own rules: they get a share of the President's salary plus extra money for official expenses. Social security is only taken from the salary, and everything is taxed like normal pay.`,
    nl: `Regeringsleden hebben eigen regels: ze krijgen een deel van het loon van de president plus extra geld voor representatiekosten. Sociale bijdragen gaan alleen van het loon af, en alles wordt belast als gewoon loon.`,
    fr: `Les membres du gouvernement ont leurs propres règles : ils touchent une part du traitement du Président plus de l'argent pour les frais de représentation. La sécurité sociale n'est prise que sur le traitement, et tout est imposé comme un salaire normal.`,
  },
  minSalaryHint: {
    en: `Monthly salary × 14 + monthly expense allowance × 12, all taxed. By default, the amount set by law.`,
    nl: `Maandloon × 14 + maandelijkse onkostenvergoeding × 12, alles belast. Standaard het bedrag dat de wet vastlegt.`,
    fr: `Traitement mensuel × 14 + frais de représentation mensuels × 12, tout imposé. Par défaut, le montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: `Under Lei 4/85, every political salary is a share of the President's base pay (€8 370 a month in 2026, paid 14 times): Prime Minister 75%, minister 65%, secretary of State 60%, MP 50%. On top comes money for official expenses: 40%, 40%, 35% and 10% (for MPs who do no other job). The 5% pay cut from 2010 ended in January 2025. Not confirmed: that this expense money is paid 12 times, taxed like a salary and has no social security taken from it. We assume all three here.`,
    nl: `Volgens Lei 4/85 is elk politiek loon een deel van het basisloon van de president (€ 8.370 per maand in 2026, 14 keer betaald): premier 75%, minister 65%, staatssecretaris 60%, parlementslid 50%. Daarbovenop komt geld voor representatiekosten: 40%, 40%, 35% en 10% (voor parlementsleden zonder andere job). De loonsverlaging met 5% uit 2010 eindigde in januari 2025. Niet bevestigd: dat dit onkostengeld 12 keer betaald wordt, als loon belast wordt en er geen sociale bijdragen van afgaan. Dat nemen we hier alle drie aan.`,
    fr: `Selon la Lei 4/85, chaque rémunération politique est une part du traitement de base du Président (8 370 € par mois en 2026, versé 14 fois) : Premier ministre 75%, ministre 65%, secrétaire d'État 60%, député 50%. S'y ajoute de l'argent pour les frais de représentation : 40%, 40%, 35% et 10% (pour les députés sans autre emploi). La baisse de 5% de 2010 a pris fin en janvier 2025. Non confirmé : que cet argent est versé 12 fois, imposé comme un salaire et sans cotisations sociales. Nous supposons les trois ici.`,
  },
  'bd.minGross': { en: `Taxable pay (salary + representation)`, nl: `Belastbaar loon (loon + representatie)`, fr: `Rémunération imposable (traitement + représentation)` },
  'bd.minEr': { en: `State social security (23.75%)`, nl: `Sociale bijdrage van de staat (23,75%)`, fr: `Cotisation de l'État (23,75%)` },
  'bd.minEe': { en: `Social security on the salary (11%)`, nl: `Sociale bijdrage op het loon (11%)`, fr: `Sécurité sociale sur le traitement (11%)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The job's share of the President's base salary, 14 times a year, plus the monthly money for official expenses.`,
    nl: `Het deel van het basisloon van de president dat bij de functie hoort, 14 keer per jaar, plus het maandelijkse geld voor representatiekosten.`,
    fr: `La part du traitement de base du Président liée à la fonction, 14 fois par an, plus l'argent mensuel pour les frais de représentation.`,
  },
  'tip.minBase': { en: `Salary × 14`, nl: `Loon × 14`, fr: `Traitement × 14` },
  'tip.minRep': { en: `Representation allowance × 12`, nl: `Representatievergoeding × 12`, fr: `Frais de représentation × 12` },
  'tip.stateCost': {
    en: `Taxable pay + the 23.75% the State pays to social security on the salary. This is everything the post costs, and the tax rates on the page are compared to it.`,
    nl: `Belastbaar loon + de 23,75% die de staat op het loon aan de sociale zekerheid betaalt. Dit is alles wat de functie kost, en de belastingtarieven op de pagina worden ermee vergeleken.`,
    fr: `Rémunération imposable + les 23,75% que l'État paie à la sécurité sociale sur le traitement. C'est tout ce que coûte la fonction, et les taux de la page sont comparés à ce montant.`,
  },
  'tip.minEr': {
    en: `The State pays 23.75% on the salary, like any employer. We assume it pays nothing on the expense money.`,
    nl: `De staat betaalt 23,75% op het loon, zoals elke werkgever. We gaan ervan uit dat hij niets betaalt op het onkostengeld.`,
    fr: `L'État paie 23,75% sur le traitement, comme tout employeur. Nous supposons qu'il ne paie rien sur l'argent pour frais.`,
  },
  'tip.minEe': {
    en: `11% of the salary. Members who are civil servants can stay in the civil servants' pension fund (CGA) instead, at the same rate.`,
    nl: `11% van het loon. Leden die ambtenaar zijn, kunnen in het pensioenfonds voor ambtenaren (CGA) blijven, aan hetzelfde tarief.`,
    fr: `11% du traitement. Les membres fonctionnaires peuvent rester à la caisse de retraite des fonctionnaires (CGA), au même taux.`,
  },
  'tip.minAb': { en: `Not paid at this level of income.`, nl: `Niet uitbetaald bij dit inkomen.`, fr: `Pas versé à ce niveau de revenu.` },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.se': { en: `Secretary of State`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'stat.mp': { en: `MP (deputado)`, nl: `Parlementslid (deputado)`, fr: `Député` },
  'stat.pr': { en: `President of the Republic`, nl: `President van de Republiek`, fr: `Président de la République` },
  'stat.par': { en: `President of the Assembly`, nl: `Voorzitter van het parlement`, fr: `Président de l'Assemblée` },
  'pol.stat.pm': { en: `75% of the President's salary + 40% for expenses`, nl: `75% van het loon van de president + 40% voor onkosten`, fr: `75% du traitement du Président + 40% pour frais` },
  'pol.stat.minister': { en: `65% of the President's salary + 40% for expenses`, nl: `65% van het loon van de president + 40% voor onkosten`, fr: `65% du traitement du Président + 40% pour frais` },
  'pol.stat.se': { en: `60% of the President's salary + 35% for expenses`, nl: `60% van het loon van de president + 35% voor onkosten`, fr: `60% du traitement du Président + 35% pour frais` },
  'pol.stat.mp': { en: `50% of the President's salary + 10% for full-time MPs, without the untaxed travel money`, nl: `50% van het loon van de president + 10% voor voltijdse leden, zonder het onbelaste reisgeld`, fr: `50% du traitement du Président + 10% pour les députés à plein temps, sans l'argent de déplacement non imposé` },
  'pol.stat.pr': { en: `Base salary + 40% for expenses`, nl: `Basisloon + 40% voor onkosten`, fr: `Traitement de base + 40% pour frais` },
  'pol.stat.par': { en: `80% of the President's salary + 40% for expenses`, nl: `80% van het loon van de president + 40% voor onkosten`, fr: `80% du traitement du Président + 40% pour frais` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Head of a state-owned company, 2025 gross pay`, nl: `Topman van een staatsbedrijf, brutoloon 2025`, fr: `Dirigeant d'une entreprise publique, rémunération brute 2025` },
  'pol.bdp': { en: `Governor, Banco de Portugal (since Oct 2025)`, nl: `Gouverneur, Banco de Portugal (sinds okt 2025)`, fr: `Gouverneur de la Banco de Portugal (depuis oct. 2025)` },
  'pol.cgd': { en: `CEO, Caixa Geral de Depósitos (100% state-owned)`, nl: `CEO, Caixa Geral de Depósitos (100% van de staat)`, fr: `Directeur général de la Caixa Geral de Depósitos (100% publique)` },
  'polNote.pm': {
    en: `Social security on the salary, everything taxed like normal pay. The official residence is not counted. The head shows which employee salary would leave the same net pay, with your household; the dot shows what they really earn before tax.`,
    nl: `Sociale bijdragen op het loon, alles belast als gewoon loon. De ambtswoning telt niet mee. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren, met jouw gezin; het bolletje toont wat ze echt verdienen voor belastingen.`,
    fr: `Sécurité sociale sur le traitement, tout imposé comme un salaire normal. La résidence officielle n'est pas comptée. La tête montre quel salaire d'un salarié donnerait le même net, avec votre foyer ; le point montre ce qu'ils gagnent vraiment avant impôts.`,
  },
  'polNote.minister': {
    en: `Social security on the salary, everything taxed like normal pay. The head shows which employee salary would leave the same net pay, with your household; the dot shows what they really earn before tax.`,
    nl: `Sociale bijdragen op het loon, alles belast als gewoon loon. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren, met jouw gezin; het bolletje toont wat ze echt verdienen voor belastingen.`,
    fr: `Sécurité sociale sur le traitement, tout imposé comme un salaire normal. La tête montre quel salaire d'un salarié donnerait le même net, avec votre foyer ; le point montre ce qu'ils gagnent vraiment avant impôts.`,
  },
  'polNote.se': {
    en: `Same rules as a minister, on 60% of the President's salary. The head shows which employee salary would leave the same net pay; the dot shows what they really earn before tax.`,
    nl: `Dezelfde regels als een minister, op 60% van het loon van de president. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren; het bolletje toont wat ze echt verdienen voor belastingen.`,
    fr: `Mêmes règles qu'un ministre, sur 60% du traitement du Président. La tête montre quel salaire d'un salarié donnerait le même net ; le point montre ce qu'ils gagnent vraiment avant impôts.`,
  },
  'polNote.mp': {
    en: `Taxed like normal pay, social security on the salary. Money for travel and stays away from home is not taxed and not counted. The head shows which employee salary would leave the same net pay.`,
    nl: `Belast als gewoon loon, sociale bijdragen op het loon. Geld voor reizen en verblijf weg van huis wordt niet belast en telt niet mee. Het hoofdje toont welk werknemersloon hetzelfde netto zou opleveren.`,
    fr: `Imposé comme un salaire normal, sécurité sociale sur le traitement. L'argent pour les déplacements et les séjours hors de chez soi n'est pas imposé et pas compté. La tête montre quel salaire d'un salarié donnerait le même net.`,
  },
  'polTipNote.pr': {
    en: `€8 370 a month × 14 + 40% for expenses × 12. The President has their own rules, so this one is placed at their pay before tax.`,
    nl: `€ 8.370 per maand × 14 + 40% voor onkosten × 12. De president heeft eigen regels, dus dit staat op het loon voor belastingen.`,
    fr: `8 370 € par mois × 14 + 40% pour frais × 12. Le Président a ses propres règles : la tête est placée au brut.`,
  },
  'polTipNote.par': {
    en: `80% of the President's salary × 14 + 40% for expenses × 12, placed at the pay before tax.`,
    nl: `80% van het loon van de president × 14 + 40% voor onkosten × 12, geplaatst op het loon voor belastingen.`,
    fr: `80% du traitement du Président × 14 + 40% pour frais × 12, placé au brut.`,
  },
  'polTipNote.bdp': {
    en: `€19 915.57 a month × 14 in 2026, set by the bank's pay committee, with no bonus. The central bank doesn't have to follow the pay limit for public jobs.`,
    nl: `€ 19.915,57 per maand × 14 in 2026, vastgelegd door het looncomité van de bank, zonder bonus. De centrale bank hoeft de loongrens voor overheidsfuncties niet te volgen.`,
    fr: `19 915,57 € par mois × 14 en 2026, fixé par la commission des rémunérations de la banque, sans prime. La banque centrale n'a pas à suivre la limite de salaire des emplois publics.`,
  },
  'polTipNote.cgd': {
    en: `2025: €433 000 fixed. The top of the range adds €423 000 in bonus and €110 000 in other perks. CGD doesn't have to follow the rule that public managers can't earn more than the Prime Minister.`,
    nl: `2025: € 433.000 vast. De bovenkant van de vork telt € 423.000 bonus en € 110.000 andere extraatjes mee. CGD hoeft de regel niet te volgen dat openbare bestuurders niet meer mogen verdienen dan de premier.`,
    fr: `2025 : 433 000 € de fixe. Le haut de la fourchette ajoute 423 000 € de prime et 110 000 € d'autres avantages. La CGD n'a pas à suivre la règle qui interdit aux gestionnaires publics de gagner plus que le Premier ministre.`,
  },
  polNote: {
    en: links => `Point at a name to see details, click it to zoom in. Yearly pay before tax, placed on the chart as yearly ÷ months paid. Government members and MPs are placed where an employee would take home the same net pay; the others are placed at their pay before tax. Political pay follows ${links}.`,
    nl: links => `Wijs een naam aan voor details, klik om in te zoomen. Jaarloon voor belastingen, op de grafiek geplaatst als jaarbedrag ÷ betaalde maanden. Regeringsleden en parlementsleden staan waar een werknemer hetzelfde netto zou overhouden; de anderen staan op hun loon voor belastingen. Politieke lonen volgen ${links}.`,
    fr: links => `Pointez un nom pour voir les détails, cliquez pour zoomer. Rémunération annuelle brute, placée sur le graphique en montant annuel ÷ mois payés. Les membres du gouvernement et les députés sont placés là où un salarié toucherait le même net ; les autres à leur brut. Les rémunérations politiques suivent ${links}.`,
  },
  'src.pol.pm': { en: `Political salaries 2026 (Lei 4/85)`, nl: `Politieke lonen 2026 (Lei 4/85)`, fr: `Rémunérations politiques 2026 (Lei 4/85)` },
  'src.pol.minister': { en: `Political salaries 2026 (Lei 4/85)`, nl: `Politieke lonen 2026 (Lei 4/85)`, fr: `Rémunérations politiques 2026 (Lei 4/85)` },
  'src.pol.se': { en: `Political salaries 2026 (Lei 4/85)`, nl: `Politieke lonen 2026 (Lei 4/85)`, fr: `Rémunérations politiques 2026 (Lei 4/85)` },
  'src.pol.mp': { en: `Political salaries 2026 (Lei 4/85)`, nl: `Politieke lonen 2026 (Lei 4/85)`, fr: `Rémunérations politiques 2026 (Lei 4/85)` },
  'src.pol.pr': { en: `Political salaries 2026 (Lei 4/85)`, nl: `Politieke lonen 2026 (Lei 4/85)`, fr: `Rémunérations politiques 2026 (Lei 4/85)` },
  'src.pol.par': { en: `Political salaries 2026 (Lei 4/85)`, nl: `Politieke lonen 2026 (Lei 4/85)`, fr: `Rémunérations politiques 2026 (Lei 4/85)` },
  'src.pol.bdp': { en: `Postal: the governor's pay table 2026`, nl: `Postal: looncomité gouverneur 2026`, fr: `Postal : rémunération du gouverneur 2026` },
  'src.pol.cgd': { en: `Lusa: bank CEO pay 2025`, nl: `Lusa: loon van bank-CEO's 2025`, fr: `Lusa : rémunération des patrons de banque 2025` },
  bracketTop: { en: `48% bracket`, nl: `schijf van 48%`, fr: `tranche à 48%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: { en: (a, b) => `Why so high between ${a} and ${b}?`, nl: (a, b) => `Waarom zo hoog tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi si élevé entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, kids) => `At the minimum wage (${a}), a rule called "mínimo de existência" (minimum to live on) means you pay no income tax at all. Above it, this protection shrinks fast: each extra euro of gross pay adds €2.60 of taxed income, then €1.35, until it is gone at ${b}. Add the 11% social security and you lose close to half of each extra euro there.${kids ? ` With children, the child benefit (abono de família) also drops a whole step when the household's income per person crosses a limit. So a small raise can cost you more than it brings in.` : ''}`,
    nl: (a, b, kids) => `Op het minimumloon (${a}) zorgt een regel, de "mínimo de existência" (minimum om van te leven), ervoor dat je helemaal geen inkomstenbelasting betaalt. Daarboven krimpt die bescherming snel: elke extra euro brutoloon voegt € 2,60 belast inkomen toe, daarna € 1,35, tot ze weg is bij ${b}. Tel de 11% sociale bijdrage erbij en je verliest daar bijna de helft van elke extra euro.${kids ? ` Met kinderen zakt ook de kinderbijslag (abono de família) een hele trap als het gezinsinkomen per persoon een grens overschrijdt. Een kleine opslag kan je dus meer kosten dan hij oplevert.` : ''}`,
    fr: (a, b, kids) => `Au salaire minimum (${a}), une règle appelée « mínimo de existência » (minimum pour vivre) fait que vous ne payez aucun impôt sur le revenu. Au-delà, cette protection diminue vite : chaque euro brut en plus ajoute 2,60 € de revenu imposé, puis 1,35 €, jusqu'à disparaître à ${b}. Avec les 11% de sécurité sociale, vous perdez près de la moitié de chaque euro en plus.${kids ? ` Avec des enfants, l'allocation familiale (abono de família) baisse aussi d'une marche entière quand le revenu du foyer par personne franchit une limite. Une petite hausse peut donc coûter plus qu'elle ne rapporte.` : ''}`,
  },
  topTitle: {
    en: (sol, top) => `Why the step${sol ? ` at ${sol}` : ''}${sol && top ? ' and' : ''}${top ? ` at ${top}` : ''}?`,
    nl: (sol, top) => `Waarom de sprong${sol ? ` bij ${sol}` : ''}${sol && top ? ' en' : ''}${top ? ` bij ${top}` : ''}?`,
    fr: (sol, top) => `Pourquoi la marche${sol ? ` à ${sol}` : ''}${sol && top ? ' et' : ''}${top ? ` à ${top}` : ''} ?`,
  },
  topBody: {
    en: (sol, top, solAmt, brAmt, couple) => `${sol ? `From ${sol}, your taxable income${couple ? ' (per partner, in a joint return)' : ''} goes above ${solAmt}: an extra "solidarity" tax adds 2.5% on the part above, 5% from €250 000. ` : ''}${top ? `From ${top} it goes above ${brAmt}. Every euro above that is taxed at the highest rate, 48%.` : ''}`,
    nl: (sol, top, solAmt, brAmt, couple) => `${sol ? `Vanaf ${sol} komt je belastbaar inkomen${couple ? ' (per partner, bij een gezamenlijke aangifte)' : ''} boven ${solAmt}: een extra "solidariteitsbelasting" telt 2,5% bij op het deel daarboven, 5% vanaf € 250.000. ` : ''}${top ? `Vanaf ${top} komt het boven ${brAmt}. Elke euro daarboven wordt belast aan het hoogste tarief, 48%.` : ''}`,
    fr: (sol, top, solAmt, brAmt, couple) => `${sol ? `À partir de ${sol}, votre revenu imposable${couple ? ' (par conjoint, en déclaration commune)' : ''} dépasse ${solAmt} : une taxe de « solidarité » ajoute 2,5% sur la partie au-dessus, 5% au-delà de 250 000 €. ` : ''}${top ? `À partir de ${top}, il dépasse ${brAmt}. Chaque euro au-dessus est imposé au taux le plus haut, 48%.` : ''}`,
  },

  // Tax components
  'comp.er': { en: `Employer social security`, nl: `Werkgeversbijdrage`, fr: `Cotisations patronales` },
  'comp.ee': { en: `Employee social security`, nl: `Werknemersbijdrage`, fr: `Cotisations salariales` },
  'comp.ir': { en: `Income tax (IRS)`, nl: `Inkomstenbelasting (IRS)`, fr: `Impôt sur le revenu (IRS)` },
  'comp.com': { en: `Municipal share of IRS`, nl: `Gemeentelijk aandeel in de IRS`, fr: `Part municipale de l'IRS` },
  'comp.ab': { en: `Abono de família`, nl: `Abono de família`, fr: `Abono de família` },
  abReceived: { en: `+ Abono de família, paid by Social Security`, nl: `+ Abono de família, betaald door de sociale zekerheid`, fr: `+ Abono de família, versé par la Sécurité sociale` },
  abLost: { en: `Abono de família your pay costs the household`, nl: `Abono de família die je loon het gezin kost`, fr: `Abono de família que votre salaire fait perdre au foyer` },
  'bd.jovem': { en: `Untaxed income for young workers (IRS Jovem)`, nl: `Onbelast inkomen voor jonge werkenden (IRS Jovem)`, fr: `Revenu non imposé des jeunes (IRS Jovem)` },
  'bd.de': { en: `Standard deduction for workers`, nl: `Standaardaftrek voor werkenden`, fr: `Déduction forfaitaire des salariés` },
  'bd.mex': { en: `Protection for low incomes (mínimo de existência)`, nl: `Bescherming voor lage inkomens (mínimo de existência)`, fr: `Protection des bas revenus (mínimo de existência)` },
  'bd.rc': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },

  // Tooltips
  'tip.f14': {
    en: `12 monthly salaries + one extra month for holidays and one at Christmas. That is the rule by law in Portugal.`,
    nl: `12 maandlonen + één extra maand voor vakantie en één met Kerstmis. Zo staat het in de Portugese wet.`,
    fr: `12 salaires mensuels + un mois en plus pour les vacances et un à Noël. C'est la règle prévue par la loi au Portugal.`,
  },
  'tip.f12': {
    en: `The same yearly pay spread over 12 months. Contributions and tax are worked out on the whole year, so only the monthly amount changes.`,
    nl: `Hetzelfde jaarloon gespreid over 12 maanden. Bijdragen en belasting worden op het hele jaar berekend, dus alleen het maandbedrag verandert.`,
    fr: `Le même salaire annuel réparti sur 12 mois. Cotisations et impôt se calculent sur toute l'année : seul le montant mensuel change.`,
  },
  'tip.jointH': { en: `Joint or separate return`, nl: `Gezamenlijke of aparte aangifte`, fr: `Déclaration commune ou séparée` },
  'tip.joint': {
    en: `Married couples and couples living together file separately, unless they choose one joint form. Then their incomes are added, halved, taxed, and the tax is doubled. That lowers the tax when one earns more than the other. Here we take whichever costs less, and your tax = the household's tax − what it would pay if you earned nothing.`,
    nl: `Gehuwden en samenwonende koppels dienen apart aangifte in, tenzij ze voor één gezamenlijke aangifte kiezen. Dan worden hun inkomens opgeteld, gehalveerd, belast, en wordt de belasting verdubbeld. Dat verlaagt de belasting als de ene meer verdient dan de andere. Hier nemen we wat het minst kost, en jouw belasting = de belasting van het gezin − wat het zou betalen als jij niets verdiende.`,
    fr: `Les couples mariés ou en union de fait déclarent séparément, sauf s'ils choisissent une déclaration commune. Leurs revenus sont alors additionnés, divisés par deux, imposés, puis l'impôt est doublé. Cela réduit l'impôt quand l'un gagne plus que l'autre. Ici nous prenons la moins chère, et votre impôt = l'impôt du foyer − ce qu'il paierait si vous ne gagniez rien.`,
  },
  'tip.paToggle': {
    en: `Monthly money per child from Social Security. The amount depends on the household's gross income per person (children + 1), in four steps; above the fourth step, nothing. It isn't a tax, but losing it as your pay rises works like one. In real life it is based on the income of an earlier year; here it follows your current pay.`,
    nl: `Maandelijks geld per kind van de sociale zekerheid. Het bedrag hangt af van het bruto gezinsinkomen per persoon (kinderen + 1), in vier trappen; boven de vierde trap niets. Het is geen belasting, maar het verliezen als je loon stijgt werkt als een belasting. In werkelijkheid gaat het uit van het inkomen van een vroeger jaar; hier volgt het je huidige loon.`,
    fr: `De l'argent mensuel par enfant versé par la Sécurité sociale. Le montant dépend du revenu brut du foyer par personne (enfants + 1), en quatre paliers ; au-delà du quatrième, rien. Ce n'est pas un impôt, mais le perdre quand le salaire monte agit comme un impôt. En réalité il se base sur le revenu d'une année passée ; ici il suit votre salaire actuel.`,
  },
  'tip.reg': {
    en: `Madeira and the Azores set their own income tax rates, up to 30% lower than on the mainland. Madeira has its own table (8.75% to 33.6%); the Azores take 30% off every national rate. Social security is the same everywhere. VAT is 22% in Madeira and 16% in the Azores: set it with the slider.`,
    nl: `Madeira en de Azoren bepalen hun eigen tarieven voor de inkomstenbelasting, tot 30% lager dan op het vasteland. Madeira heeft een eigen tabel (8,75% tot 33,6%); de Azoren halen 30% van elk nationaal tarief af. De sociale bijdragen zijn overal gelijk. De btw is 22% op Madeira en 16% op de Azoren: stel ze in met de schuifregelaar.`,
    fr: `Madère et les Açores fixent leurs propres taux d'impôt sur le revenu, jusqu'à 30% plus bas que sur le continent. Madère a son propre barème (8,75% à 33,6%) ; les Açores retirent 30% de chaque taux national. La sécurité sociale est la même partout. La TVA est de 22% à Madère et de 16% aux Açores : réglez-la avec le curseur.`,
  },
  'tip.mun': {
    en: `Each town can keep up to 5% of the income tax its residents pay. Most keep less and give the rest back to you as a discount on your tax: at 0% you pay 5% less income tax, at 5% you get nothing back. The slider is the share your town keeps.`,
    nl: `Elke gemeente mag tot 5% houden van de inkomstenbelasting die haar inwoners betalen. De meeste houden minder en geven de rest terug als korting op je belasting: bij 0% betaal je 5% minder inkomstenbelasting, bij 5% krijg je niets terug. De schuifregelaar is het deel dat je gemeente houdt.`,
    fr: `Chaque municipalité peut garder jusqu'à 5% de l'impôt sur le revenu de ses habitants. La plupart en gardent moins et vous rendent le reste en réduction d'impôt : à 0% vous payez 5% d'impôt en moins, à 5% rien ne revient. Le curseur est la part que garde votre municipalité.`,
  },
  'tip.munCalc': {
    en: (rate, liq, com, back) => `${rate} × ${liq} = <b>${com}</b> goes to your town; the other ${back} comes back to you.`,
    nl: (rate, liq, com, back) => `${rate} × ${liq} = <b>${com}</b> gaat naar je gemeente; de andere ${back} krijg je terug.`,
    fr: (rate, liq, com, back) => `${rate} × ${liq} = <b>${com}</b> va à votre municipalité ; les ${back} restants vous reviennent.`,
  },
  'tip.munM': {
    en: `Rates for 2026 income that towns sent to the tax office by 31 December 2025. 12 towns sent nothing, so they keep the full 5%.`,
    nl: `Tarieven voor het inkomen van 2026 die gemeenten uiterlijk 31 december 2025 aan de belastingdienst stuurden. 12 gemeenten stuurden niets en houden dus de volle 5%.`,
    fr: `Taux des revenus 2026 que les municipalités ont envoyés au fisc avant le 31 décembre 2025. 12 n'ont rien envoyé : elles gardent les 5%.`,
  },
  'tip.jovem': {
    en: cap => `If you are under 35 and nobody claims you as a dependant, part of your work income in your first 10 working years is not taxed: 100% in year 1, 75% in years 2 to 4, 50% in years 5 to 7, 25% in years 8 to 10, at most ${cap} a year. You still pay social security. The untaxed part still counts to decide the tax rate on the rest.`,
    nl: cap => `Ben je jonger dan 35 en niet ten laste van iemand, dan wordt een deel van je arbeidsinkomen in je eerste 10 werkjaren niet belast: 100% in jaar 1, 75% in jaar 2 tot 4, 50% in jaar 5 tot 7, 25% in jaar 8 tot 10, hoogstens ${cap} per jaar. Sociale bijdragen betaal je nog wel. Het onbelaste deel telt nog mee om het tarief op de rest te bepalen.`,
    fr: cap => `Si vous avez moins de 35 ans et n'êtes à la charge de personne, une partie de vos revenus du travail des 10 premières années n'est pas imposée : 100% l'année 1, 75% les années 2 à 4, 50% les années 5 à 7, 25% les années 8 à 10, au plus ${cap} par an. La sécurité sociale reste due. La part non imposée compte toujours pour fixer le taux sur le reste.`,
  },
  'tip.capped': { en: `capped`, nl: `begrensd`, fr: `plafonné` },
  'tip.costShort': { en: `Gross salary + what your employer pays to social security on top.`, nl: `Brutoloon + wat je werkgever daarbovenop aan de sociale zekerheid betaalt.`, fr: `Salaire brut + ce que votre employeur paie en plus à la sécurité sociale.` },
  'tip.er': {
    en: `Your employer pays 23.75% on top of all your gross pay, holiday and Christmas months included, with no upper limit (the "taxa social única").`,
    nl: `Je werkgever betaalt 23,75% bovenop je hele brutoloon, vakantie- en kerstmaand inbegrepen, zonder bovengrens (de "taxa social única").`,
    fr: `Votre employeur paie 23,75% en plus de tout votre salaire brut, mois de vacances et de Noël compris, sans limite haute (la « taxa social única »).`,
  },
  'tip.erM': {
    en: `Work accident insurance is required but bought from private insurers, so it's left out. Payments to the fund that guarantees unpaid wages (FGCT) are paused until the end of 2026. Some new hires get a temporary 50% discount (first job, people unemployed for a long time).`,
    nl: `De verzekering voor arbeidsongevallen is verplicht maar wordt bij privéverzekeraars afgesloten, dus ze telt niet mee. De stortingen aan het fonds dat onbetaalde lonen waarborgt (FGCT) zijn opgeschort tot eind 2026. Sommige nieuwe aanwervingen krijgen tijdelijk 50% korting (eerste job, langdurig werklozen).`,
    fr: `L'assurance accidents du travail est obligatoire mais souscrite auprès d'assureurs privés : elle n'est pas comptée. Les versements au fonds qui garantit les salaires impayés (FGCT) sont suspendus jusqu'à fin 2026. Certaines embauches ont une réduction temporaire de 50% (premier emploi, chômeurs de longue durée).`,
  },
  'tip.ee': {
    en: `11% of all your gross pay, taken every month. It pays for pensions, sick pay, unemployment and family benefits. No upper limit.`,
    nl: `11% van je hele brutoloon, elke maand afgehouden. Het betaalt pensioenen, ziekte-uitkeringen, werkloosheid en gezinsbijslag. Geen bovengrens.`,
    fr: `11% de tout votre salaire brut, retirés chaque mois. Cela paie les retraites, les indemnités maladie, le chômage et les aides familiales. Pas de limite haute.`,
  },
  'tip.de': {
    en: de => `Every worker gets ${de} (8.54 × IAS, a reference amount for benefits) taken off their pay before tax. If your social security contributions are higher, those are taken off instead.`,
    nl: de => `Elke werkende krijgt ${de} (8,54 × IAS, een referentiebedrag voor uitkeringen) van zijn loon afgetrokken voor de belasting. Zijn je sociale bijdragen hoger, dan worden die afgetrokken.`,
    fr: de => `Chaque salarié a ${de} (8,54 × IAS, un montant de référence des aides sociales) retirés de son salaire avant l'impôt. Si vos cotisations sociales sont plus élevées, ce sont elles qui sont retirées.`,
  },
  'tip.mex': {
    en: (ref, excl) => `Nobody earning up to ${ref} gross a year (14 × the minimum wage) pays income tax. Above it, this protection shrinks by €2.60, then €1.35, for each extra euro, so it's gone at about €15 900. It doesn't apply if the gross income on the tax form is more than ${excl} per person.`,
    nl: (ref, excl) => `Wie tot ${ref} bruto per jaar verdient (14 × het minimumloon), betaalt geen inkomstenbelasting. Daarboven krimpt deze bescherming met € 2,60, daarna € 1,35, per extra euro, dus ze is weg rond € 15.900. Ze geldt niet als het bruto inkomen op de aangifte meer dan ${excl} per persoon is.`,
    fr: (ref, excl) => `Personne ne paie d'impôt sur le revenu jusqu'à ${ref} brut par an (14 × le salaire minimum). Au-delà, cette protection baisse de 2,60 €, puis de 1,35 €, par euro en plus, et disparaît vers 15 900 €. Elle ne s'applique pas si le revenu brut de la déclaration dépasse ${excl} par personne.`,
  },
  'tip.mexExcl': { en: `not applied: the income on the tax form is too high`, nl: `niet toegepast: het inkomen op de aangifte is te hoog`, fr: `non appliqué : revenu de la déclaration trop élevé` },
  'tip.rc': {
    en: calc => `Gross − untaxed part for young workers − standard deduction − low-income protection${calc}. The tax brackets are applied to this.`,
    nl: calc => `Bruto − onbelast deel voor jonge werkenden − standaardaftrek − bescherming voor lage inkomens${calc}. De belastingschijven worden hierop toegepast.`,
    fr: calc => `Brut − part non imposée des jeunes − déduction forfaitaire − protection des bas revenus${calc}. Le barème s'applique à ce montant.`,
  },
  'tip.irShort': {
    en: `Income tax works in brackets: the higher part of your income is taxed at a higher rate. Then €600 per child and €250 per taxpayer for household costs come off the tax. High incomes pay an extra solidarity tax.`,
    nl: `De inkomstenbelasting werkt met schijven: het hogere deel van je inkomen wordt zwaarder belast. Daarna gaat er € 600 per kind en € 250 per belastingplichtige voor gezinskosten van de belasting af. Hoge inkomens betalen een extra solidariteitsbelasting.`,
    fr: `L'impôt fonctionne par tranches : la partie haute de vos revenus est taxée à un taux plus élevé. Ensuite, 600 € par enfant et 250 € par contribuable pour les dépenses du foyer sont retirés de l'impôt. Les hauts revenus paient en plus une taxe de solidarité.`,
  },
  'tip.irM': {
    en: `The rates of the first six brackets go down by 0.3 to 0.5 points for all of 2026. Parliament approved this on 9 October 2026, but the official decree is not published yet. Brackets from the 2026 budget (Lei 73-A/2025). The State keeps 95% here; the town's share is shown separately.`,
    nl: `De tarieven van de eerste zes schijven dalen met 0,3 tot 0,5 punt voor heel 2026. Het parlement keurde dat goed op 9 oktober 2026, maar het officiële decreet is nog niet gepubliceerd. Schijven uit de begroting 2026 (Lei 73-A/2025). De staat houdt hier 95%; het deel van de gemeente staat apart.`,
    fr: `Les taux des six premières tranches baissent de 0,3 à 0,5 point pour tout 2026. Le Parlement l'a voté le 9 octobre 2026, mais le décret officiel n'est pas encore publié. Tranches du budget 2026 (Lei 73-A/2025). L'État garde ici 95% ; la part de la municipalité est montrée à part.`,
  },
  'tip.irReturn': { en: `Your return`, nl: `Jouw aangifte`, fr: `Votre déclaration` },
  'tip.irJoint': { en: sep => `Joint return (separate: ${sep})`, nl: sep => `Gezamenlijke aangifte (apart: ${sep})`, fr: sep => `Déclaration commune (séparée : ${sep})` },
  'tip.irSepYou': { en: joint => `Your separate return (joint: ${joint})`, nl: joint => `Jouw aparte aangifte (gezamenlijk: ${joint})`, fr: joint => `Votre déclaration séparée (commune : ${joint})` },
  'tip.irSepPartner': { en: `Your partner's return`, nl: `Aangifte van je partner`, fr: `Déclaration de votre conjoint` },
  'tip.irRc': { en: q => q > 1 ? `Taxable income, halved` : `Taxable income`, nl: q => q > 1 ? `Belastbaar inkomen, gehalveerd` : `Belastbaar inkomen`, fr: q => q > 1 ? `Revenu imposable, divisé par deux` : `Revenu imposable` },
  'tip.irColeta': { en: `Tax from the brackets`, nl: `Belasting volgens de schijven`, fr: `Impôt selon le barème` },
  'tip.irJovemRate': { en: `(rate set as if the untaxed part were included)`, nl: `(tarief bepaald alsof het onbelaste deel meetelt)`, fr: `(taux fixé comme si la part non imposée comptait)` },
  'tip.irDeps': { en: `Children`, nl: `Kinderen`, fr: `Enfants` },
  'tip.irDgf': { en: `Household expenses`, nl: `Gezinsuitgaven`, fr: `Dépenses du foyer` },
  'tip.irLiq': { en: `Net tax`, nl: `Netto belasting`, fr: `Impôt net` },
  'tip.irSolid': { en: `Solidarity tax on high incomes`, nl: `Solidariteitsbelasting op hoge inkomens`, fr: `Taxe de solidarité sur les hauts revenus` },
  'tip.irState': { en: `State's 95% + surcharge`, nl: `95% voor de staat + toeslag`, fr: `95% pour l'État + surtaxe` },
  'tip.irWithout': { en: `Household tax if you earned nothing`, nl: `Belasting als jij niets verdiende`, fr: `Impôt du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.ab': {
    en: `Paid each month per child by Social Security. Your step depends on the household's yearly gross income ÷ (children + 1): up to 0.5, 1, 1.7 and 2.5 × 14 × IAS (a reference amount for benefits). Young children get more. From age 6, step 4 gets nothing. Single parents get 50% more.`,
    nl: `Elke maand per kind betaald door de sociale zekerheid. Je trap hangt af van het bruto jaarinkomen van het gezin ÷ (kinderen + 1): tot 0,5, 1, 1,7 en 2,5 × 14 × IAS (een referentiebedrag voor uitkeringen). Jonge kinderen krijgen meer. Vanaf 6 jaar krijgt trap 4 niets. Alleenstaande ouders krijgen 50% meer.`,
    fr: `Versé chaque mois par enfant par la Sécurité sociale. Votre palier dépend du revenu brut annuel du foyer ÷ (enfants + 1) : jusqu'à 0,5, 1, 1,7 et 2,5 × 14 × IAS (un montant de référence des aides). Les jeunes enfants touchent plus. Dès 6 ans, le palier 4 ne touche rien. Les parents seuls touchent 50% de plus.`,
  },
  'tip.abRef': { en: `Income per person`, nl: `Inkomen per persoon`, fr: `Revenu par personne` },
  'tip.abEsc': { en: `Step (5 = none)`, nl: `Trap (5 = niets)`, fr: `Palier (5 = rien)` },
  'tip.abMonth': { en: `Abono per month`, nl: `Abono per maand`, fr: `Abono par mois` },
  'tip.abWithout': { en: `Abono if you earned nothing`, nl: `Abono als jij niets verdiende`, fr: `Abono sans vos revenus` },
  'tip.abYear': { en: `Your share, per year`, nl: `Jouw deel, per jaar`, fr: `Votre part, par an` },
  'tip.abM': {
    en: `2026 amounts (+2.2%). Children aged 3 to 6 are counted as older children. Extras for large families, for disability and the double payment in September are left out.`,
    nl: `Bedragen 2026 (+2,2%). Kinderen van 3 tot 6 worden als oudere kinderen geteld. De extra's voor grote gezinnen, voor een handicap en de dubbele uitbetaling in september zijn niet meegerekend.`,
    fr: `Montants 2026 (+2,2%). Les enfants de 3 à 6 ans sont comptés comme plus âgés. Les suppléments pour familles nombreuses, pour handicap et le double versement de septembre ne sont pas pris en compte.`,
  },
  'tip.vatM': {
    en: `Some things have lower VAT: 13% or 6% (restaurants, food, energy, books, medicines). Rent has none. We ignore that here, so the real VAT you pay is probably lower.`,
    nl: `Sommige dingen hebben minder btw: 13% of 6% (restaurants, voeding, energie, boeken, geneesmiddelen). Op huur zit geen btw. Dat negeren we hier, dus de echte btw die je betaalt ligt waarschijnlijk lager.`,
    fr: `Certaines choses ont une TVA plus basse : 13% ou 6% (restauration, alimentation, énergie, livres, médicaments). Le loyer n'en a pas. Nous l'ignorons ici, la TVA que vous payez vraiment est donc sans doute plus basse.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross − social security − income tax, + child benefit (abono de família) if you count it.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − sociale bijdrage − inkomstenbelasting, + kinderbijslag (abono de família) als je die meetelt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − sécurité sociale − impôt sur le revenu, + allocation familiale (abono de família) si vous la comptez.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026 (taxed in 2027)`,
    nl: `Gebruikte regels · inkomstenjaar 2026 (belast in 2027)`,
    fr: `Règles utilisées · revenus 2026 (imposés en 2027)`,
  },
  'ref.ss': {
    en: { h: `1 · Social security`, li: [
      `You pay <span class="num">11%</span>, your employer pays <span class="num">23.75%</span> on top, on all gross pay including the holiday and Christmas months. No upper limit.`,
      `Minimum wage <span class="num">€920</span> a month × 14 in 2026. IAS (a reference amount used to set benefits) <span class="num">€537.13</span>.`,
    ] },
    nl: { h: `1 · Sociale zekerheid`, li: [
      `Jij betaalt <span class="num">11%</span>, je werkgever betaalt <span class="num">23,75%</span> bovenop, op het hele brutoloon met de vakantie- en kerstmaand. Geen bovengrens.`,
      `Minimumloon <span class="num">€ 920</span> per maand × 14 in 2026. IAS (een referentiebedrag om uitkeringen te bepalen) <span class="num">€ 537,13</span>.`,
    ] },
    fr: { h: `1 · Sécurité sociale`, li: [
      `Vous payez <span class="num">11%</span>, votre employeur paie <span class="num">23,75%</span> en plus, sur tout le brut, mois de vacances et de Noël compris. Pas de limite haute.`,
      `Salaire minimum <span class="num">920 €</span> par mois × 14 en 2026. IAS (un montant de référence pour fixer les aides) <span class="num">537,13 €</span>.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `2 · Income tax (IRS)`, li: [
      `Gross − standard deduction (<span class="num">€4 587.09</span>, or your social security if higher).`,
      `Brackets for 2026 income, with the October 2026 cut. The higher part of your income is taxed at a higher rate:${br}`,
      `The cut only becomes law once its decree is published. The 2026 budget rates were 12.5%, 15.7%, 21.2%, 24.1%, 31.1% and 34.9% for the first six brackets.`,
      `Extra solidarity tax: <span class="num">2.5%</span> of taxable income above €80 000, <span class="num">5%</span> above €250 000.`,
    ] }),
    nl: br => ({ h: `2 · Inkomstenbelasting (IRS)`, li: [
      `Bruto − standaardaftrek (<span class="num">€ 4.587,09</span>, of je sociale bijdragen als die hoger zijn).`,
      `Schijven voor het inkomen van 2026, met de verlaging van oktober 2026. Het hogere deel van je inkomen wordt zwaarder belast:${br}`,
      `De verlaging wordt pas wet als het decreet gepubliceerd is. De tarieven van de begroting 2026 waren 12,5%, 15,7%, 21,2%, 24,1%, 31,1% en 34,9% voor de eerste zes schijven.`,
      `Extra solidariteitsbelasting: <span class="num">2,5%</span> van het belastbaar inkomen boven € 80.000, <span class="num">5%</span> boven € 250.000.`,
    ] }),
    fr: br => ({ h: `2 · Impôt sur le revenu (IRS)`, li: [
      `Brut − déduction forfaitaire (<span class="num">4 587,09 €</span>, ou vos cotisations sociales si plus élevées).`,
      `Barème des revenus 2026, avec la baisse d'octobre 2026. La partie haute du revenu est taxée à un taux plus élevé :${br}`,
      `La baisse ne devient loi qu'à la publication de son décret. Les taux du budget 2026 étaient 12,5%, 15,7%, 21,2%, 24,1%, 31,1% et 34,9% pour les six premières tranches.`,
      `Taxe de solidarité en plus : <span class="num">2,5%</span> du revenu imposable au-delà de 80 000 €, <span class="num">5%</span> au-delà de 250 000 €.`,
    ] }),
  },
  'ref.mex': {
    en: { h: `3 · Protection for low incomes (mínimo de existência)`, li: [
      `No income tax up to <span class="num">€12 880</span> gross a year. Above that, the protection shrinks by 2.60 then 1.35 per extra euro and ends around <span class="num">€15 900</span>.`,
      `It doesn't apply if the gross income on the tax form is more than 2.2 × 14 × IAS (<span class="num">€16 544</span>) per person.`,
    ] },
    nl: { h: `3 · Bescherming voor lage inkomens (mínimo de existência)`, li: [
      `Geen inkomstenbelasting tot <span class="num">€ 12.880</span> bruto per jaar. Daarboven krimpt de bescherming met 2,60 en dan 1,35 per extra euro en stopt ze rond <span class="num">€ 15.900</span>.`,
      `Ze geldt niet als het bruto inkomen op de aangifte meer is dan 2,2 × 14 × IAS (<span class="num">€ 16.544</span>) per persoon.`,
    ] },
    fr: { h: `3 · Protection des bas revenus (mínimo de existência)`, li: [
      `Pas d'impôt sur le revenu jusqu'à <span class="num">12 880 €</span> brut par an. Au-delà, la protection baisse de 2,60 puis 1,35 par euro en plus et s'arrête vers <span class="num">15 900 €</span>.`,
      `Elle ne s'applique pas si le revenu brut de la déclaration dépasse 2,2 × 14 × IAS (<span class="num">16 544 €</span>) par personne.`,
    ] },
  },
  'ref.deductions': {
    en: { h: `4 · Deductions and household`, li: [
      `<span class="num">€600</span> off the tax per child, +€126 up to age 3, +€300 for the second and later children up to age 6. Split 50/50 when partners file separately.`,
      `Household costs: <span class="num">€250</span> per taxpayer (€335 for a single parent); we assume you spend enough to get it all. Deductions for health, school, housing and rent are left out.`,
      `Couples: whichever costs less between one joint form (income halved, taxed, doubled) and two separate ones. Your tax = the household's − the household's without your pay.`,
      `Young workers (IRS Jovem): 100% / 75% / 50% / 25% of pay not taxed in years 1 / 2-4 / 5-7 / 8-10, up to <span class="num">€29 542</span> a year.`,
    ] },
    nl: { h: `4 · Aftrekken en gezin`, li: [
      `<span class="num">€ 600</span> minder belasting per kind, +€ 126 tot 3 jaar, +€ 300 voor het tweede en volgende kinderen tot 6 jaar. 50/50 verdeeld als partners apart aangeven.`,
      `Gezinskosten: <span class="num">€ 250</span> per belastingplichtige (€ 335 voor een alleenstaande ouder); we gaan ervan uit dat je genoeg uitgeeft om alles te krijgen. Aftrekken voor gezondheid, school, woning en huur zijn niet meegerekend.`,
      `Koppels: wat het minst kost, één gezamenlijke aangifte (inkomen gehalveerd, belast, verdubbeld) of twee aparte. Jouw belasting = die van het gezin − die van het gezin zonder jouw loon.`,
      `Jonge werkenden (IRS Jovem): 100% / 75% / 50% / 25% van het loon niet belast in jaar 1 / 2-4 / 5-7 / 8-10, tot <span class="num">€ 29.542</span> per jaar.`,
    ] },
    fr: { h: `4 · Déductions et foyer`, li: [
      `<span class="num">600 €</span> d'impôt en moins par enfant, +126 € jusqu'à 3 ans, +300 € pour le deuxième enfant et les suivants jusqu'à 6 ans. Partagé 50/50 en déclarations séparées.`,
      `Dépenses du foyer : <span class="num">250 €</span> par contribuable (335 € pour un parent seul) ; nous supposons que vous dépensez assez pour tout obtenir. Les déductions santé, école, logement et loyer ne sont pas prises en compte.`,
      `Couples : la moins chère entre une déclaration commune (revenu divisé par deux, imposé, doublé) et deux séparées. Votre impôt = celui du foyer − celui du foyer sans votre salaire.`,
      `Jeunes (IRS Jovem) : 100% / 75% / 50% / 25% du salaire non imposé les années 1 / 2-4 / 5-7 / 8-10, jusqu'à <span class="num">29 542 €</span> par an.`,
    ] },
  },
  'ref.mun': {
    en: { h: `5 · Town's share`, li: [
      `Rates of all 308 towns for 2026 income, from the tax office's table. 44 keep nothing (Lisbon and Funchal among them). 99 keep the full 5%, 12 of them because they sent no decision.`,
      `The town's share is part of your income tax: what your town doesn't keep comes off your tax bill.`,
    ] },
    nl: { h: `5 · Deel van de gemeente`, li: [
      `Tarieven van alle 308 gemeenten voor het inkomen van 2026, uit de tabel van de belastingdienst. 44 houden niets (o.a. Lissabon en Funchal). 99 houden de volle 5%, waarvan 12 omdat ze geen beslissing stuurden.`,
      `Het deel van de gemeente is een stuk van je inkomstenbelasting: wat je gemeente niet houdt, gaat van je belasting af.`,
    ] },
    fr: { h: `5 · Part de la municipalité`, li: [
      `Taux des 308 municipalités pour les revenus 2026, d'après la table du fisc. 44 ne gardent rien (dont Lisbonne et Funchal). 99 gardent les 5%, dont 12 parce qu'elles n'ont envoyé aucune décision.`,
      `La part municipale est une partie de votre impôt sur le revenu : ce que votre municipalité ne garde pas est retiré de votre impôt.`,
    ] },
  },
  'ref.regions': {
    en: { h: `6 · Madeira and the Azores`, li: [
      `Madeira 2026: <span class="num">8.75%</span> to <span class="num">33.6%</span> on the same brackets (DLR 8/2025/M), not yet updated for the October cut.`,
      `Azores: every national rate − 30%. VAT 22% (Madeira) and 16% (Azores).`,
    ] },
    nl: { h: `6 · Madeira en de Azoren`, li: [
      `Madeira 2026: <span class="num">8,75%</span> tot <span class="num">33,6%</span> op dezelfde schijven (DLR 8/2025/M), nog niet aangepast aan de verlaging van oktober.`,
      `Azoren: elk nationaal tarief − 30%. Btw 22% (Madeira) en 16% (Azoren).`,
    ] },
    fr: { h: `6 · Madère et Açores`, li: [
      `Madère 2026 : <span class="num">8,75%</span> à <span class="num">33,6%</span> sur les mêmes tranches (DLR 8/2025/M), pas encore mis à jour pour la baisse d'octobre.`,
      `Açores : chaque taux national − 30%. TVA 22% (Madère) et 16% (Açores).`,
    ] },
  },
  'ref.abono': {
    en: { h: `7 · Child benefit (abono de família)`, li: [
      `Per child per month, steps 1 to 4: under 3 <span class="num">€190.98 / 161.65 / 132.07 / 88.43</span>; older <span class="num">€75.13 / 75.13 / 54.35 / 0</span>.`,
      `Your step depends on gross income ÷ (children + 1): up to €3 760, €7 520, €12 784 and €18 800 a year. Single parents get 50% more.`,
    ] },
    nl: { h: `7 · Kinderbijslag (abono de família)`, li: [
      `Per kind per maand, trap 1 tot 4: onder 3 <span class="num">€ 190,98 / 161,65 / 132,07 / 88,43</span>; ouder <span class="num">€ 75,13 / 75,13 / 54,35 / 0</span>.`,
      `Je trap hangt af van het bruto inkomen ÷ (kinderen + 1): tot € 3.760, € 7.520, € 12.784 en € 18.800 per jaar. Alleenstaande ouders krijgen 50% meer.`,
    ] },
    fr: { h: `7 · Allocation familiale (abono de família)`, li: [
      `Par enfant et par mois, paliers 1 à 4 : moins de 3 ans <span class="num">190,98 / 161,65 / 132,07 / 88,43 €</span> ; plus âgés <span class="num">75,13 / 75,13 / 54,35 / 0 €</span>.`,
      `Votre palier dépend du revenu brut ÷ (enfants + 1) : jusqu'à 3 760 €, 7 520 €, 12 784 € et 18 800 € par an. Les parents seuls touchent 50% de plus.`,
    ] },
  },
  'ref.vat': {
    en: { h: `8 · VAT on spending`, li: [
      `VAT is the tax included in shop prices. Normal rate on the mainland <span class="num">23%</span>. We act as if you spend all your net pay. Use the slider for other rates.`,
      `The VAT hidden in a price = price × r / (100 + r). At 23% that's 23 / 123 = <span class="num">18.70%</span> of what you pay.`,
    ] },
    nl: { h: `8 · Btw op uitgaven`, li: [
      `Btw is de belasting die in winkelprijzen zit. Normaal tarief op het vasteland <span class="num">23%</span>. We doen alsof je je hele nettoloon uitgeeft. Gebruik de schuifregelaar voor andere tarieven.`,
      `De btw die in een prijs zit = prijs × r / (100 + r). Bij 23% is dat 23 / 123 = <span class="num">18,70%</span> van wat je betaalt.`,
    ] },
    fr: { h: `8 · TVA sur les dépenses`, li: [
      `La TVA est l'impôt compris dans les prix en magasin. Taux normal sur le continent <span class="num">23%</span>. Nous faisons comme si vous dépensiez tout votre salaire net. Utilisez le curseur pour d'autres taux.`,
      `La TVA cachée dans un prix = prix × r / (100 + r). À 23%, cela fait 23 / 123 = <span class="num">18,70%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `9 · Government and parliament`, li: [
      `President <span class="num">€8 370</span>/month × 14 + 40% for expenses. Prime Minister 75%, minister 65%, secretary of State 60%, MP 50% of that.`,
      `Money for expenses: 40%, 40%, 35%, 10% (MPs with no other job). Public managers can't earn more than the Prime Minister, except at CGD and the central bank.`,
    ] },
    nl: { h: `9 · Regering en parlement`, li: [
      `President <span class="num">€ 8.370</span>/maand × 14 + 40% voor onkosten. Premier 75%, minister 65%, staatssecretaris 60%, parlementslid 50% daarvan.`,
      `Geld voor onkosten: 40%, 40%, 35%, 10% (parlementsleden zonder andere job). Openbare bestuurders mogen niet meer verdienen dan de premier, behalve bij CGD en de centrale bank.`,
    ] },
    fr: { h: `9 · Gouvernement et Parlement`, li: [
      `Président <span class="num">8 370 €</span>/mois × 14 + 40% pour frais. Premier ministre 75%, ministre 65%, secrétaire d'État 60%, député 50% de ce montant.`,
      `Argent pour frais : 40%, 40%, 35%, 10% (députés sans autre emploi). Les gestionnaires publics ne peuvent pas gagner plus que le Premier ministre, sauf à la CGD et à la banque centrale.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Work accident insurance, meal allowance (no tax up to €6 a day in cash, €10.20 on a card), overtime, profit-sharing, untaxed bonuses, and deductions for health, school, housing and rent.`,
      `Children aged 3 to 6 are counted as older children. The figures are your final tax for the year, not the tax taken from your pay each month.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Verzekering arbeidsongevallen, maaltijdvergoeding (geen belasting tot € 6 per dag in cash, € 10,20 op een kaart), overuren, winstdeling, onbelaste premies, en aftrekken voor gezondheid, school, woning en huur.`,
      `Kinderen van 3 tot 6 worden als oudere kinderen geteld. De bedragen zijn je uiteindelijke belasting voor het jaar, niet de belasting die elke maand van je loon gaat.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Assurance accidents du travail, indemnité repas (sans impôt jusqu'à 6 € par jour en espèces, 10,20 € sur carte), heures supplémentaires, intéressement, primes non imposées, et déductions santé, école, logement et loyer.`,
      `Les enfants de 3 à 6 ans sont comptés comme plus âgés. Les montants sont votre impôt final de l'année, pas la retenue de chaque mois.`,
    ] },
  },

  inheritLink: {
    en: `What you'd pay on what you inherit, by relationship →`,
    nl: `Wat je zou betalen op wat je erft, volgens verwantschap →`,
    fr: `Ce que vous paieriez sur un héritage, selon le lien de parenté →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your actual tax assessment (nota de liquidação) decides.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je echte aanslag (nota de liquidação) is bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seul votre avis d'imposition (nota de liquidação) fait foi.`,
  },

  'src.rates2026': { en: `CGD: IRS brackets 2026`, nl: `CGD: IRS-schijven 2026`, fr: `CGD : tranches IRS 2026` },
  'src.cut': { en: `ECO: Parliament approves the 2026 cut`, nl: `ECO: parlement keurt verlaging 2026 goed`, fr: `ECO : le Parlement vote la baisse 2026` },
  'src.cutStatus': { en: `Gestor Financeiro: status of the cut`, nl: `Gestor Financeiro: stand van de verlaging`, fr: `Gestor Financeiro : état de la baisse` },
  'src.mex': { en: `CIRS art. 70: mínimo de existência`, nl: `CIRS art. 70: mínimo de existência`, fr: `CIRS art. 70 : mínimo de existência` },
  'src.mexSim': { en: `Simula: mínimo de existência 2026`, nl: `Simula: mínimo de existência 2026`, fr: `Simula : mínimo de existência 2026` },
  'src.de': { en: `Santander: IRS 2026 changes`, nl: `Santander: IRS-wijzigingen 2026`, fr: `Santander : nouveautés IRS 2026` },
  'src.dep': { en: `CIRS art. 78-A: dependants`, nl: `CIRS art. 78-A: personen ten laste`, fr: `CIRS art. 78-A : personnes à charge` },
  'src.jovem': { en: `Tax authority ruling on IRS Jovem`, nl: `Ruling belastingdienst over IRS Jovem`, fr: `Rescrit du fisc sur l'IRS Jovem` },
  'src.joint': { en: `Cofidis: brackets and joint returns`, nl: `Cofidis: schijven en gezamenlijke aangifte`, fr: `Cofidis : tranches et déclaration commune` },
  'src.mun': { en: `Tax authority: municipal IRS rates`, nl: `Belastingdienst: gemeentelijke IRS-tarieven`, fr: `Fisc : taux municipaux d'IRS` },
  'src.munCaop': { en: `DGT: official municipality list (CAOP 2025)`, nl: `DGT: officiële gemeentelijst (CAOP 2025)`, fr: `DGT : liste officielle des municipalités (CAOP 2025)` },
  'src.mad': { en: `DLR 8/2025/M: Madeira budget 2026`, nl: `DLR 8/2025/M: begroting Madeira 2026`, fr: `DLR 8/2025/M : budget de Madère 2026` },
  'src.acor': { en: `OCC: 2026 budget analysis`, nl: `OCC: analyse begroting 2026`, fr: `OCC : analyse du budget 2026` },
  'src.tsu': { en: `Santander: taxa social única`, nl: `Santander: taxa social única`, fr: `Santander : taxa social única` },
  'src.fgct': { en: `Simula: employer cost 2026`, nl: `Simula: loonkost 2026`, fr: `Simula : coût employeur 2026` },
  'src.rmmg': { en: `Minimum wage 2026 (DL 139/2025)`, nl: `Minimumloon 2026 (DL 139/2025)`, fr: `Salaire minimum 2026 (DL 139/2025)` },
  'src.ias': { en: `IAS 2026`, nl: `IAS 2026`, fr: `IAS 2026` },
  'src.abono': { en: `Doutor Finanças: abono 2026`, nl: `Doutor Finanças: abono 2026`, fr: `Doutor Finanças : abono 2026` },
  'src.abonoSs': { en: `Social Security guide`, nl: `Gids sociale zekerheid`, fr: `Guide de la Sécurité sociale` },
  'src.ine': { en: `INE: wages 2025`, nl: `INE: lonen 2025`, fr: `INE : salaires 2025` },
  'src.median': { en: `Simula: median wage 2024`, nl: `Simula: mediaan loon 2024`, fr: `Simula : salaire médian 2024` },
  'src.politicalPay': { en: `Lei 4/85 (political salaries)`, nl: `Lei 4/85 (politieke lonen)`, fr: `la Lei 4/85 (rémunérations politiques)` },
  'src.politicalCuts': { en: `ECO: end of the 5% cut`, nl: `ECO: einde van de verlaging met 5%`, fr: `ECO : fin de la baisse de 5%` },
  'gap.rateCut': {
    en: `Income tax rates: we use the cut to 12.2% up to 34.6% in brackets 1 to 6, back-dated to January. Parliament approved it on 9 Oct 2026 but the official decree is not published yet.`,
    nl: `Inkomstenbelasting: we gebruiken de verlaging naar 12,2% tot 34,6% in schijven 1 tot 6, met terugwerkende kracht tot januari. Het parlement keurde ze goed op 9 okt 2026, maar het officiële decreet is nog niet verschenen.`,
    fr: `Taux de l'impôt : nous utilisons la baisse à 12,2% jusqu'à 34,6% des tranches 1 à 6, rétroactive à janvier. Le Parlement l'a votée le 9 oct. 2026, mais le décret officiel n'est pas encore publié.`,
  },
  'gap.mexRate': {
    en: `Low-income protection (mínimo de existência): worked out with the new 12.2% first-bracket rate. We don't know yet if the decree also changes the rate used here.`,
    nl: `Bescherming voor lage inkomens (mínimo de existência): berekend met het nieuwe tarief van 12,2% van de eerste schijf. We weten nog niet of het decreet ook het tarief verandert dat hier gebruikt wordt.`,
    fr: `Protection des bas revenus (mínimo de existência) : calculée avec le nouveau taux de 12,2% de la première tranche. On ne sait pas encore si le décret change aussi le taux utilisé ici.`,
  },
  'gap.madeira': {
    en: `Madeira: we keep its own 2026 table (8.75% to 33.6%) as it is. We don't know yet if Madeira will follow the October cut.`,
    nl: `Madeira: we houden de eigen tabel voor 2026 (8,75% tot 33,6%) zoals ze is. We weten nog niet of Madeira de verlaging van oktober volgt.`,
    fr: `Madère : nous gardons son propre barème 2026 (8,75% à 33,6%) tel quel. On ne sait pas encore si Madère suivra la baisse d'octobre.`,
  },
  'gap.azores': {
    en: `Azores: every national rate minus 30%, applied to the new rates. Taken from an accountants' summary of the 2026 budget, not from the regional law.`,
    nl: `Azoren: elk nationaal tarief min 30%, toegepast op de nieuwe tarieven. Overgenomen uit een samenvatting van de begroting 2026 door boekhouders, niet uit de regionale wet.`,
    fr: `Açores : chaque taux national moins 30%, appliqué aux nouveaux taux. Tiré d'un résumé du budget 2026 par des experts-comptables, pas de la loi régionale.`,
  },
  'gap.fgct': {
    en: `Employer cost: nothing added for the wage guarantee funds (FCT, FGCT). The FCT is closed and FGCT payments are paused until the end of 2026, according to a payroll simulator, not the official decree.`,
    nl: `Werkgeverskost: niets bijgeteld voor de loongarantiefondsen (FCT, FGCT). Het FCT is gesloten en de FGCT-bijdragen zijn opgeschort tot eind 2026, volgens een loonsimulator, niet het officiële decreet.`,
    fr: `Coût employeur : rien d'ajouté pour les fonds de garantie des salaires (FCT, FGCT). Le FCT est fermé et les versements au FGCT sont suspendus jusqu'à fin 2026, selon un simulateur de paie, pas le décret officiel.`,
  },
  'gap.dependants': {
    en: `Child deductions (€600, +€126 under 3, +€300 for later children up to 6) come from a legal information website, not the official text of the tax code.`,
    nl: `Kinderaftrek (€ 600, +€ 126 onder 3 jaar, +€ 300 voor volgende kinderen tot 6 jaar) komt van een juridische informatiesite, niet uit de officiële tekst van het belastingwetboek.`,
    fr: `Déductions pour enfants (600 €, +126 € avant 3 ans, +300 € pour les enfants suivants jusqu'à 6 ans) : tirées d'un site d'information juridique, pas du texte officiel du code des impôts.`,
  },
  'gap.familyExp': {
    en: `Household costs: we assume you spend enough to get the full €250 per taxpayer (€335 for a single parent).`,
    nl: `Gezinskosten: we gaan ervan uit dat je genoeg uitgeeft voor de volle € 250 per belastingplichtige (€ 335 voor een alleenstaande ouder).`,
    fr: `Dépenses du foyer : nous supposons que vous dépensez assez pour obtenir les 250 € complets par contribuable (335 € pour un parent seul).`,
  },
  'gap.abono': {
    en: `Child benefit (abono de família): we set your step from this year's gross pay. Social Security really uses the household's income of the year before, including other income. Amounts from a newspaper summary of Portaria 60/2026/1.`,
    nl: `Kinderbijslag (abono de família): we bepalen je trap op basis van het brutoloon van dit jaar. De sociale zekerheid gebruikt eigenlijk het gezinsinkomen van het jaar ervoor, ander inkomen inbegrepen. Bedragen uit een krantensamenvatting van Portaria 60/2026/1.`,
    fr: `Allocation familiale (abono de família) : nous fixons votre palier d'après le salaire brut de cette année. La Sécurité sociale prend en réalité le revenu du foyer de l'année précédente, autres revenus compris. Montants tirés d'un résumé de presse de la Portaria 60/2026/1.`,
  },
  'gap.municipal': {
    en: `Town's share of income tax: 12 of the 308 towns had not sent their 2026 rate, so we use the default 5% set by law for them.`,
    nl: `Deel van de gemeente in de inkomstenbelasting: 12 van de 308 gemeenten hadden hun tarief voor 2026 niet doorgegeven, dus gebruiken we voor hen de standaard 5% uit de wet.`,
    fr: `Part municipale de l'impôt : 12 des 308 municipalités n'avaient pas envoyé leur taux 2026, nous utilisons donc pour elles les 5% prévus par défaut par la loi.`,
  },
  'gap.wages': {
    en: `Typical pay: half of employees earned more than €1 186 a month in October 2024 (Quadros de Pessoal), found on a secondary website. Average pay: INE 2025, converted from 12 to 14 payments a year.`,
    nl: `Gangbare lonen: de helft van de werknemers verdiende meer dan € 1.186 per maand in oktober 2024 (Quadros de Pessoal), gevonden op een secundaire website. Gemiddeld loon: INE 2025, omgerekend van 12 naar 14 betalingen per jaar.`,
    fr: `Salaires courants : la moitié des salariés gagnaient plus de 1 186 € par mois en octobre 2024 (Quadros de Pessoal), trouvé sur un site secondaire. Salaire moyen : INE 2025, converti de 12 à 14 versements par an.`,
  },
  'gap.repAllowance': {
    en: `Political jobs: we assume the money for expenses is paid 12 times a year, taxed like a salary, with no social security taken. Not confirmed in the law.`,
    nl: `Politieke functies: we gaan ervan uit dat het geld voor onkosten 12 keer per jaar betaald wordt, belast als loon, zonder sociale bijdragen. Niet bevestigd in de wet.`,
    fr: `Fonctions politiques : nous supposons que l'argent pour frais est versé 12 fois par an, imposé comme un salaire, sans cotisations sociales. Non confirmé dans la loi.`,
  },
  'gap.mpAllowance': {
    en: `MPs: the 10% for expenses is worked out from a reported figure of €4 604 a month, not read in the law.`,
    nl: `Parlementsleden: de 10% voor onkosten is afgeleid uit een gerapporteerd bedrag van € 4.604 per maand, niet uit de wet gelezen.`,
    fr: `Députés : les 10% pour frais sont déduits d'un montant rapporté de 4 604 € par mois, pas lus dans la loi.`,
  },
  'gap.publicPay': {
    en: `The President's base pay (€8 370.14) and the central bank governor's pay come from newspaper articles. The CGD boss's pay is the 2025 figure.`,
    nl: `Het basisloon van de president (€ 8.370,14) en het loon van de gouverneur van de centrale bank komen uit krantenartikels. Het loon van de topman van CGD is dat van 2025.`,
    fr: `Le traitement de base du Président (8 370,14 €) et le salaire du gouverneur de la banque centrale viennent d'articles de presse. La rémunération du patron de la CGD est celle de 2025.`,
  },
  'gap.notIncl': {
    en: `Meal allowance, deductions for health, school and housing, and children aged 3 to 6 counted as older ones: see What's not included.`,
    nl: `Maaltijdvergoeding, aftrekken voor gezondheid, school en woning, en kinderen van 3 tot 6 die als ouder meetellen: zie Wat niet is meegerekend.`,
    fr: `Indemnité repas, déductions santé, école et logement, et enfants de 3 à 6 ans comptés comme plus âgés : voir Ce qui n'est pas inclus.`,
  },
};
