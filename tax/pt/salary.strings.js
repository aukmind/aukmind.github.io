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
    en: `Married or in a de facto union: joint or separate returns, whichever is cheaper.`,
    nl: `Gehuwd of feitelijk samenwonend: gezamenlijke of aparte aangifte, de goedkoopste.`,
    fr: `Mariés ou en union de fait : déclaration commune ou séparée, la moins chère des deux.`,
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
    en: `Government rules: a share of the President's salary plus a representation allowance, social security on the salary only, taxed like any pay.`,
    nl: `Regels voor regeringsleden: een deel van het loon van de president plus een representatievergoeding, sociale zekerheid enkel op het loon, belast als elk loon.`,
    fr: `Règles du gouvernement : une part du traitement du Président plus des frais de représentation, sécurité sociale sur le seul traitement, imposés comme tout salaire.`,
  },
  minSalaryHint: {
    en: `Yearly salary × 14 + representation allowance × 12, all taxable. Statutory amount by default.`,
    nl: `Jaarloon × 14 + representatievergoeding × 12, alles belastbaar. Standaard het wettelijke bedrag.`,
    fr: `Traitement × 14 + frais de représentation × 12, tout imposable. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `Lei 4/85 ties every political salary to the President's base pay (€8 370 a month in 2026, paid 14 times): Prime Minister 75%, minister 65%, secretary of State 60%, MP 50%. A representation allowance comes on top: 40%, 40%, 35% and 10% (MPs in full-time exclusivity). The 5% cut of 2010 ended in January 2025. Not confirmed: that the allowance is paid 12 times, is taxed as employment income and carries no social security; those are the assumptions here.`,
    nl: `Lei 4/85 koppelt elk politiek loon aan het basisloon van de president (€ 8.370 per maand in 2026, 14 keer betaald): premier 75%, minister 65%, staatssecretaris 60%, parlementslid 50%. Daarbovenop komt een representatievergoeding: 40%, 40%, 35% en 10% (parlementsleden met exclusiviteit). De verlaging met 5% van 2010 eindigde in januari 2025. Niet bevestigd: dat de vergoeding 12 keer betaald wordt, als arbeidsinkomen belast is en zonder sociale bijdragen; dat zijn hier de aannames.`,
    fr: `La Lei 4/85 lie chaque rémunération politique au traitement de base du Président (8 370 € par mois en 2026, versé 14 fois) : Premier ministre 75%, ministre 65%, secrétaire d'État 60%, député 50%. S'y ajoutent des frais de représentation : 40%, 40%, 35% et 10% (députés en exclusivité). La baisse de 5% de 2010 a pris fin en janvier 2025. Non confirmé : que ces frais sont versés 12 fois, imposés comme un salaire et sans cotisations sociales ; ce sont les hypothèses retenues.`,
  },
  'bd.minGross': { en: `Taxable pay (salary + representation)`, nl: `Belastbaar loon (loon + representatie)`, fr: `Rémunération imposable (traitement + représentation)` },
  'bd.minEr': { en: `State social security (23.75%)`, nl: `Sociale bijdrage van de staat (23,75%)`, fr: `Cotisation de l'État (23,75%)` },
  'bd.minEe': { en: `Social security on the salary (11%)`, nl: `Sociale bijdrage op het loon (11%)`, fr: `Sécurité sociale sur le traitement (11%)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The office's share of the President's base salary, 14 times a year, plus the monthly representation allowance.`,
    nl: `Het aandeel van het ambt in het basisloon van de president, 14 keer per jaar, plus de maandelijkse representatievergoeding.`,
    fr: `La part du traitement de base du Président propre à la fonction, 14 fois par an, plus les frais de représentation mensuels.`,
  },
  'tip.minBase': { en: `Salary × 14`, nl: `Loon × 14`, fr: `Traitement × 14` },
  'tip.minRep': { en: `Representation allowance × 12`, nl: `Representatievergoeding × 12`, fr: `Frais de représentation × 12` },
  'tip.stateCost': {
    en: `Taxable pay + the State's 23.75% social security on the salary. The work and full tax rates are measured against it.`,
    nl: `Belastbaar loon + de sociale bijdrage van 23,75% van de staat op het loon. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `Rémunération imposable + la cotisation de 23,75% de l'État sur le traitement. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },
  'tip.minEr': {
    en: `The State pays the employer rate of the general scheme, 23.75%, on the salary, as for any employee. Assumed: nothing on the representation allowance.`,
    nl: `De staat betaalt het werkgeverstarief van het algemene stelsel, 23,75%, op het loon, zoals voor elke werknemer. Aangenomen: niets op de representatievergoeding.`,
    fr: `L'État paie le taux employeur du régime général, 23,75%, sur le traitement, comme pour tout salarié. Hypothèse : rien sur les frais de représentation.`,
  },
  'tip.minEe': {
    en: `11% on the salary. Members who are civil servants may stay in the CGA scheme instead, at the same rate.`,
    nl: `11% op het loon. Leden die ambtenaar zijn, kunnen in het CGA-stelsel blijven, aan hetzelfde tarief.`,
    fr: `11% sur le traitement. Les membres fonctionnaires peuvent rester à la CGA, au même taux.`,
  },
  'tip.minAb': { en: `Not paid at this income.`, nl: `Niet uitbetaald bij dit inkomen.`, fr: `Non versé à ce niveau de revenu.` },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.se': { en: `Secretary of State`, nl: `Staatssecretaris`, fr: `Secrétaire d'État` },
  'stat.mp': { en: `MP (deputado)`, nl: `Parlementslid (deputado)`, fr: `Député` },
  'stat.pr': { en: `President of the Republic`, nl: `President van de Republiek`, fr: `Président de la République` },
  'stat.par': { en: `President of the Assembly`, nl: `Voorzitter van het parlement`, fr: `Président de l'Assemblée` },
  'pol.stat.pm': { en: `75% of the President's salary + 40% representation`, nl: `75% van het loon van de president + 40% representatie`, fr: `75% du traitement du Président + 40% de représentation` },
  'pol.stat.minister': { en: `65% of the President's salary + 40% representation`, nl: `65% van het loon van de president + 40% representatie`, fr: `65% du traitement du Président + 40% de représentation` },
  'pol.stat.se': { en: `60% of the President's salary + 35% representation`, nl: `60% van het loon van de president + 35% representatie`, fr: `60% du traitement du Président + 35% de représentation` },
  'pol.stat.mp': { en: `50% of the President's salary + 10% for full-time MPs, without tax-free travel allowances`, nl: `50% van het loon van de president + 10% voor voltijdse leden, zonder belastingvrije reisvergoedingen`, fr: `50% du traitement du Président + 10% en exclusivité, hors indemnités de déplacement exonérées` },
  'pol.stat.pr': { en: `Base salary + 40% representation`, nl: `Basisloon + 40% representatie`, fr: `Traitement de base + 40% de représentation` },
  'pol.stat.par': { en: `80% of the President's salary + 40% representation`, nl: `80% van het loon van de president + 40% representatie`, fr: `80% du traitement du Président + 40% de représentation` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'polTitle.corp': { en: `Head of a state-owned company, 2025 gross pay`, nl: `Topman van een staatsbedrijf, brutoloon 2025`, fr: `Dirigeant d'une entreprise publique, rémunération brute 2025` },
  'pol.bdp': { en: `Governor, Banco de Portugal (since Oct 2025)`, nl: `Gouverneur, Banco de Portugal (sinds okt 2025)`, fr: `Gouverneur de la Banco de Portugal (depuis oct. 2025)` },
  'pol.cgd': { en: `CEO, Caixa Geral de Depósitos (100% state-owned)`, nl: `CEO, Caixa Geral de Depósitos (100% van de staat)`, fr: `Directeur général de la Caixa Geral de Depósitos (100% publique)` },
  'polNote.pm': {
    en: `Social security on the salary, everything taxed as pay. The official residence isn't counted. The head sits at the employee salary with the same net, with your household; the dot is their actual gross.`,
    nl: `Sociale bijdragen op het loon, alles belast als loon. De ambtswoning telt niet mee. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin; het bolletje is hun echte bruto.`,
    fr: `Sécurité sociale sur le traitement, tout imposé comme un salaire. La résidence officielle n'est pas comptée. La tête est au salaire d'un salarié au même net, avec votre foyer ; le point est leur vrai brut.`,
  },
  'polNote.minister': {
    en: `Social security on the salary, everything taxed as pay. The head sits at the employee salary with the same net, with your household; the dot is their actual gross.`,
    nl: `Sociale bijdragen op het loon, alles belast als loon. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin; het bolletje is hun echte bruto.`,
    fr: `Sécurité sociale sur le traitement, tout imposé comme un salaire. La tête est au salaire d'un salarié au même net, avec votre foyer ; le point est leur vrai brut.`,
  },
  'polNote.se': {
    en: `Same rules as a minister, on 60% of the President's salary. The head sits at the employee salary with the same net; the dot is their actual gross.`,
    nl: `Dezelfde regels als een minister, op 60% van het loon van de president. Het hoofdje staat bij het werknemersloon met hetzelfde netto; het bolletje is hun echte bruto.`,
    fr: `Mêmes règles qu'un ministre, sur 60% du traitement du Président. La tête est au salaire d'un salarié au même net ; le point est leur vrai brut.`,
  },
  'polNote.mp': {
    en: `Taxed as pay, social security on the salary. Travel and subsistence allowances are tax-free and not counted. The head sits at the employee salary with the same net.`,
    nl: `Belast als loon, sociale bijdragen op het loon. Reis- en verblijfsvergoedingen zijn belastingvrij en tellen niet mee. Het hoofdje staat bij het werknemersloon met hetzelfde netto.`,
    fr: `Imposé comme un salaire, sécurité sociale sur le traitement. Les indemnités de déplacement et de séjour sont exonérées et non comptées. La tête est au salaire d'un salarié au même net.`,
  },
  'polTipNote.pr': {
    en: `€8 370 a month × 14 + 40% representation × 12. The President has their own regime, so this one sits at the gross.`,
    nl: `€ 8.370 per maand × 14 + 40% representatie × 12. De president heeft een eigen stelsel, dus dit staat op het bruto.`,
    fr: `8 370 € par mois × 14 + 40% de représentation × 12. Le Président a son propre régime : la tête est placée au brut.`,
  },
  'polTipNote.par': {
    en: `80% of the President's salary × 14 + 40% representation × 12, placed at the gross.`,
    nl: `80% van het loon van de president × 14 + 40% representatie × 12, op het bruto geplaatst.`,
    fr: `80% du traitement du Président × 14 + 40% de représentation × 12, placé au brut.`,
  },
  'polTipNote.bdp': {
    en: `€19 915.57 a month × 14 in 2026, set by the bank's pay committee, with no variable pay. The central bank isn't bound by the public pay ceiling.`,
    nl: `€ 19.915,57 per maand × 14 in 2026, vastgelegd door het looncomité van de bank, zonder variabel loon. De centrale bank valt niet onder het plafond voor overheidslonen.`,
    fr: `19 915,57 € par mois × 14 en 2026, fixé par la commission des rémunérations de la banque, sans variable. La banque centrale échappe au plafond des rémunérations publiques.`,
  },
  'polTipNote.cgd': {
    en: `2025: €433 000 fixed; the top of the range adds €423 000 variable pay and €110 000 of other benefits. CGD is exempt from the rule that public managers earn no more than the Prime Minister.`,
    nl: `2025: € 433.000 vast; de bovenkant van de vork telt € 423.000 variabel loon en € 110.000 andere voordelen mee. CGD is vrijgesteld van de regel dat openbare bestuurders niet meer verdienen dan de premier.`,
    fr: `2025 : 433 000 € de fixe ; le haut de la fourchette ajoute 423 000 € de variable et 110 000 € d'autres avantages. La CGD échappe à la règle qui limite les gestionnaires publics au salaire du Premier ministre.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ months paid. Members of government and MPs are placed where an employee would earn the same net; the others sit at their gross. Political pay follows ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ betaalde maanden. Regeringsleden en parlementsleden staan waar een werknemer hetzelfde netto zou verdienen; de anderen staan op hun bruto. Politieke lonen volgen ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ mois payés. Les membres du gouvernement et les députés sont placés là où un salarié gagnerait le même net ; les autres à leur brut. Les rémunérations politiques suivent ${links}.`,
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
    en: (a, b, kids) => `At the minimum wage (${a}) the mínimo de existência leaves no income tax at all. Above it, that relief shrinks by €2.60 of taxable income per extra euro of gross, then by €1.35, and is gone at ${b}. Together with the 11% social security, each extra euro there loses close to half.${kids ? ` With children, the abono de família also drops by a whole step when the household's income per person crosses a threshold, so a small raise can cost more than it brings.` : ''}`,
    nl: (a, b, kids) => `Op het minimumloon (${a}) laat het mínimo de existência helemaal geen inkomstenbelasting over. Daarboven krimpt die vrijstelling met € 2,60 belastbaar inkomen per extra euro bruto, daarna met € 1,35, en is ze weg bij ${b}. Samen met de 11% sociale bijdrage verlies je daar bijna de helft van elke extra euro.${kids ? ` Met kinderen zakt ook de abono de família een hele trap wanneer het gezinsinkomen per persoon een drempel overschrijdt, zodat een kleine opslag meer kan kosten dan hij oplevert.` : ''}`,
    fr: (a, b, kids) => `Au salaire minimum (${a}), le mínimo de existência efface tout l'impôt sur le revenu. Au-delà, cet abattement diminue de 2,60 € de revenu imposable par euro brut supplémentaire, puis de 1,35 €, et disparaît à ${b}. Avec les 11% de sécurité sociale, chaque euro supplémentaire y perd près de la moitié.${kids ? ` Avec des enfants, l'abono de família baisse aussi d'une marche entière quand le revenu du foyer par personne franchit un seuil : une petite hausse peut coûter plus qu'elle ne rapporte.` : ''}`,
  },
  topTitle: {
    en: (sol, top) => `Why the step${sol ? ` at ${sol}` : ''}${sol && top ? ' and' : ''}${top ? ` at ${top}` : ''}?`,
    nl: (sol, top) => `Waarom de sprong${sol ? ` bij ${sol}` : ''}${sol && top ? ' en' : ''}${top ? ` bij ${top}` : ''}?`,
    fr: (sol, top) => `Pourquoi la marche${sol ? ` à ${sol}` : ''}${sol && top ? ' et' : ''}${top ? ` à ${top}` : ''} ?`,
  },
  topBody: {
    en: (sol, top, solAmt, brAmt, couple) => `${sol ? `From ${sol} your taxable income${couple ? ' (per spouse, in a joint return)' : ''} passes ${solAmt}: the solidarity surcharge adds 2.5% on top of the brackets, 5% from €250 000. ` : ''}${top ? `From ${top} it passes ${brAmt}, where the top 48% bracket starts.` : ''}`,
    nl: (sol, top, solAmt, brAmt, couple) => `${sol ? `Vanaf ${sol} komt je belastbaar inkomen${couple ? ' (per partner, bij een gezamenlijke aangifte)' : ''} boven ${solAmt}: de solidariteitstoeslag telt 2,5% bij de schijven op, 5% vanaf € 250.000. ` : ''}${top ? `Vanaf ${top} komt het boven ${brAmt}, waar de hoogste schijf van 48% begint.` : ''}`,
    fr: (sol, top, solAmt, brAmt, couple) => `${sol ? `À partir de ${sol}, votre revenu imposable${couple ? ' (par conjoint, en déclaration commune)' : ''} dépasse ${solAmt} : la surtaxe de solidarité ajoute 2,5% au barème, 5% au-delà de 250 000 €. ` : ''}${top ? `À partir de ${top}, il dépasse ${brAmt}, où commence la tranche à 48%.` : ''}`,
  },

  // Tax components
  'comp.er': { en: `Employer social security`, nl: `Werkgeversbijdrage`, fr: `Cotisations patronales` },
  'comp.ee': { en: `Employee social security`, nl: `Werknemersbijdrage`, fr: `Cotisations salariales` },
  'comp.ir': { en: `Income tax (IRS)`, nl: `Inkomstenbelasting (IRS)`, fr: `Impôt sur le revenu (IRS)` },
  'comp.com': { en: `Municipal share of IRS`, nl: `Gemeentelijk aandeel in de IRS`, fr: `Part municipale de l'IRS` },
  'comp.ab': { en: `Abono de família`, nl: `Abono de família`, fr: `Abono de família` },
  abReceived: { en: `+ Abono de família, paid by Social Security`, nl: `+ Abono de família, betaald door de sociale zekerheid`, fr: `+ Abono de família, versé par la Sécurité sociale` },
  abLost: { en: `Abono de família your pay costs the household`, nl: `Abono de família die je loon het gezin kost`, fr: `Abono de família que votre salaire fait perdre au foyer` },
  'bd.jovem': { en: `IRS Jovem exempt income`, nl: `Vrijgesteld inkomen IRS Jovem`, fr: `Revenu exonéré IRS Jovem` },
  'bd.de': { en: `Specific deduction`, nl: `Specifieke aftrek`, fr: `Déduction spécifique` },
  'bd.mex': { en: `Mínimo de existência relief`, nl: `Vrijstelling mínimo de existência`, fr: `Abattement mínimo de existência` },
  'bd.rc': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },

  // Tooltips
  'tip.f14': {
    en: `12 monthly salaries + the holiday and Christmas subsidies, one month each. That's the legal default in Portugal.`,
    nl: `12 maandlonen + de vakantie- en kersttoelage, elk een maand. Dat is in Portugal de wettelijke regel.`,
    fr: `12 salaires mensuels + les subsides de vacances et de Noël, un mois chacun. C'est la règle légale au Portugal.`,
  },
  'tip.f12': {
    en: `The same yearly pay spread over 12 months. Contributions and tax are worked out on the year, so only the monthly figure changes.`,
    nl: `Hetzelfde jaarloon gespreid over 12 maanden. Bijdragen en belasting worden op het jaar berekend, dus enkel het maandbedrag verandert.`,
    fr: `Le même salaire annuel réparti sur 12 mois. Cotisations et impôt se calculent sur l'année : seul le montant mensuel change.`,
  },
  'tip.jointH': { en: `Joint or separate return`, nl: `Gezamenlijke of aparte aangifte`, fr: `Déclaration commune ou séparée` },
  'tip.joint': {
    en: `Spouses and partners in a de facto union file separately unless they opt for a joint return, where their taxable incomes are added, halved, taxed and doubled. Here the household takes the cheaper of the two, and your tax = the household's tax − what it would pay if you earned nothing.`,
    nl: `Echtgenoten en feitelijk samenwonenden dienen apart aangifte in, tenzij ze voor een gezamenlijke aangifte kiezen: dan worden hun belastbare inkomens opgeteld, gehalveerd, belast en verdubbeld. Hier neemt het gezin de goedkoopste van de twee, en jouw belasting = de belasting van het gezin − wat het zou betalen als jij niets verdiende.`,
    fr: `Les conjoints et partenaires en union de fait déclarent séparément, sauf s'ils optent pour la déclaration commune : leurs revenus imposables sont additionnés, divisés par deux, imposés puis multipliés par deux. Ici le foyer prend la moins chère des deux, et votre impôt = impôt du foyer − ce qu'il paierait si vous ne gagniez rien.`,
  },
  'tip.paToggle': {
    en: `A monthly child benefit from Social Security. It depends on the household's gross income per person (children + 1), in four steps; above the fourth, nothing. It's not a tax, but losing it as your pay grows works like one. In real life it uses the income of an earlier year; here it follows your current pay.`,
    nl: `Een maandelijkse kinderbijslag van de sociale zekerheid. Ze hangt af van het bruto gezinsinkomen per persoon (kinderen + 1), in vier trappen; boven de vierde niets. Geen belasting, maar ze verliezen als je loon stijgt, werkt als een belasting. In werkelijkheid telt het inkomen van een vroeger jaar; hier volgt ze je huidige loon.`,
    fr: `Une allocation mensuelle de la Sécurité sociale par enfant. Elle dépend du revenu brut du foyer par personne (enfants + 1), en quatre paliers ; au-delà du quatrième, rien. Ce n'est pas un impôt, mais la perdre quand le salaire monte agit comme tel. En réalité elle se base sur le revenu d'une année antérieure ; ici elle suit votre salaire actuel.`,
  },
  'tip.reg': {
    en: `Madeira and the Azores set their own income tax rates, up to 30% below the mainland: Madeira uses its own table (8.75% to 33.6%), the Azores take 30% off every national rate. Social security is the same everywhere. VAT is 22% in Madeira and 16% in the Azores: set it with the slider.`,
    nl: `Madeira en de Azoren bepalen hun eigen tarieven, tot 30% lager dan op het vasteland: Madeira heeft een eigen tabel (8,75% tot 33,6%), de Azoren halen 30% van elk nationaal tarief af. De sociale bijdragen zijn overal gelijk. De btw is 22% op Madeira en 16% op de Azoren: stel ze in met de schuifregelaar.`,
    fr: `Madère et les Açores fixent leurs propres taux d'IRS, jusqu'à 30% sous ceux du continent : Madère a son propre barème (8,75% à 33,6%), les Açores retirent 30% de chaque taux national. La sécurité sociale est la même partout. La TVA est de 22% à Madère et de 16% aux Açores : réglez-la avec le curseur.`,
  },
  'tip.mun': {
    en: `Each municipality may keep up to 5% of its residents' income tax. Most keep less and hand the rest back as a credit on the tax bill: at 0% you pay 5% less IRS, at 5% nothing comes back. The slider is the share your municipality keeps.`,
    nl: `Elke gemeente mag tot 5% van de inkomstenbelasting van haar inwoners houden. De meeste houden minder en geven de rest terug als korting op de aanslag: bij 0% betaal je 5% minder IRS, bij 5% krijg je niets terug. De schuifregelaar is het deel dat je gemeente houdt.`,
    fr: `Chaque municipalité peut garder jusqu'à 5% de l'IRS de ses habitants. La plupart en gardent moins et rendent le reste en crédit sur l'avis d'imposition : à 0% vous payez 5% d'IRS en moins, à 5% rien ne revient. Le curseur est la part que garde votre municipalité.`,
  },
  'tip.munCalc': {
    en: (rate, liq, com, back) => `${rate} × ${liq} = <b>${com}</b> goes to the municipality; the other ${back} comes back to you.`,
    nl: (rate, liq, com, back) => `${rate} × ${liq} = <b>${com}</b> gaat naar de gemeente; de andere ${back} krijg je terug.`,
    fr: (rate, liq, com, back) => `${rate} × ${liq} = <b>${com}</b> va à la municipalité ; les ${back} restants vous reviennent.`,
  },
  'tip.munM': {
    en: `Rates for 2026 income as sent to the tax authority by 31 December 2025. 12 municipalities sent nothing, so they keep the full 5%.`,
    nl: `Tarieven voor het inkomen 2026 zoals uiterlijk 31 december 2025 aan de belastingdienst gemeld. 12 gemeenten meldden niets en houden dus de volle 5%.`,
    fr: `Taux des revenus 2026 tels que communiqués au fisc au 31 décembre 2025. 12 municipalités n'ont rien envoyé : elles gardent les 5%.`,
  },
  'tip.jovem': {
    en: cap => `Under 35 and not a dependant: part of your first 10 years of work income is tax-free: 100% the first year, 75% years 2 to 4, 50% years 5 to 7, 25% years 8 to 10, at most ${cap} a year. Social security is still due, and the exempt part still sets the rate on the rest.`,
    nl: cap => `Jonger dan 35 en niet ten laste: een deel van je arbeidsinkomen in de eerste 10 jaar is belastingvrij: 100% het eerste jaar, 75% jaar 2 tot 4, 50% jaar 5 tot 7, 25% jaar 8 tot 10, hoogstens ${cap} per jaar. Sociale bijdragen blijven verschuldigd, en het vrijgestelde deel bepaalt nog het tarief op de rest.`,
    fr: cap => `Moins de 35 ans et pas à charge : une partie des revenus de vos 10 premières années de travail est exonérée : 100% la première année, 75% les années 2 à 4, 50% les années 5 à 7, 25% les années 8 à 10, au plus ${cap} par an. La sécurité sociale reste due, et la part exonérée fixe toujours le taux du reste.`,
  },
  'tip.capped': { en: `capped`, nl: `begrensd`, fr: `plafonné` },
  'tip.costShort': { en: `Gross salary + employer social security.`, nl: `Brutoloon + werkgeversbijdrage.`, fr: `Salaire brut + cotisations patronales.` },
  'tip.er': {
    en: `Your employer pays 23.75% of your whole gross pay, holiday and Christmas subsidies included, with no ceiling (taxa social única).`,
    nl: `Je werkgever betaalt 23,75% van je hele brutoloon, vakantie- en kersttoelage inbegrepen, zonder plafond (taxa social única).`,
    fr: `Votre employeur paie 23,75% de tout votre salaire brut, subsides de vacances et de Noël compris, sans plafond (taxa social única).`,
  },
  'tip.erM': {
    en: `Work accident insurance is compulsory but private insurance, so it's left out. The wage guarantee fund (FGCT) payments are suspended until the end of 2026. Some hires get a temporary 50% cut (first job, long-term unemployed).`,
    nl: `De arbeidsongevallenverzekering is verplicht maar privé, dus niet meegeteld. De stortingen aan het loongarantiefonds (FGCT) zijn opgeschort tot eind 2026. Sommige aanwervingen krijgen tijdelijk 50% korting (eerste job, langdurig werklozen).`,
    fr: `L'assurance accidents du travail est obligatoire mais privée : elle n'est pas comptée. Les versements au fonds de garantie (FGCT) sont suspendus jusqu'à fin 2026. Certaines embauches ont une réduction temporaire de 50% (premier emploi, chômeurs de longue durée).`,
  },
  'tip.ee': {
    en: `11% of your whole gross pay, withheld every month, for pensions, sickness, unemployment and family benefits. No ceiling.`,
    nl: `11% van je hele brutoloon, elke maand ingehouden, voor pensioen, ziekte, werkloosheid en gezinsbijslag. Geen plafond.`,
    fr: `11% de tout votre salaire brut, retenus chaque mois, pour la retraite, la maladie, le chômage et les prestations familiales. Pas de plafond.`,
  },
  'tip.de': {
    en: de => `Taken off employment income before tax: ${de} (8.54 × IAS), or your social security contributions if they're higher.`,
    nl: de => `Afgetrokken van het arbeidsinkomen vóór belasting: ${de} (8,54 × IAS), of je sociale bijdragen als die hoger zijn.`,
    fr: de => `Retirée des revenus du travail avant impôt : ${de} (8,54 × IAS), ou vos cotisations sociales si elles sont plus élevées.`,
  },
  'tip.mex': {
    en: (ref, excl) => `Nobody earning up to ${ref} gross a year (14 × the minimum wage) pays income tax. Above it, the relief fades by €2.60, then €1.35, for each extra euro, so it's gone at about €15 900. It doesn't apply when the return's gross income passes ${excl} per taxpayer.`,
    nl: (ref, excl) => `Wie tot ${ref} bruto per jaar verdient (14 × het minimumloon), betaalt geen inkomstenbelasting. Daarboven krimpt de vrijstelling met € 2,60, daarna € 1,35, per extra euro, dus ze is weg rond € 15.900. Ze geldt niet als het bruto inkomen van de aangifte boven ${excl} per belastingplichtige ligt.`,
    fr: (ref, excl) => `Personne ne paie d'IRS jusqu'à ${ref} brut par an (14 × le salaire minimum). Au-delà, l'abattement baisse de 2,60 €, puis de 1,35 €, par euro supplémentaire, et disparaît vers 15 900 €. Il ne s'applique pas si le revenu brut de la déclaration dépasse ${excl} par contribuable.`,
  },
  'tip.mexExcl': { en: `not applied: the return's income is too high`, nl: `niet toegepast: het inkomen van de aangifte is te hoog`, fr: `non appliqué : revenu de la déclaration trop élevé` },
  'tip.rc': {
    en: calc => `Gross − IRS Jovem exempt part − specific deduction − mínimo de existência${calc}. The brackets apply to this.`,
    nl: calc => `Bruto − vrijgesteld deel IRS Jovem − specifieke aftrek − mínimo de existência${calc}. De schijven gelden hierop.`,
    fr: calc => `Brut − part exonérée IRS Jovem − déduction spécifique − mínimo de existência${calc}. Le barème s'applique à ce montant.`,
  },
  'tip.irShort': {
    en: `Taxable income through the brackets, minus €600 per child and €250 of household expenses per taxpayer, plus the solidarity surcharge on high incomes.`,
    nl: `Belastbaar inkomen door de schijven, min € 600 per kind en € 250 gezinsuitgaven per belastingplichtige, plus de solidariteitstoeslag op hoge inkomens.`,
    fr: `Revenu imposable passé au barème, moins 600 € par enfant et 250 € de dépenses du foyer par contribuable, plus la surtaxe de solidarité sur les hauts revenus.`,
  },
  'tip.irM': {
    en: `Rates of the first six brackets cut by 0.3 to 0.5 points for all of 2026, as approved by Parliament on 9 October 2026; the decree-law setting them isn't published yet. Brackets from the 2026 budget (Lei 73-A/2025). The state keeps 95% here; the municipal share is shown separately.`,
    nl: `Tarieven van de eerste zes schijven verlaagd met 0,3 tot 0,5 punt voor heel 2026, zoals op 9 oktober 2026 door het parlement goedgekeurd; het decreet dat ze vastlegt, is nog niet gepubliceerd. Schijven uit de begroting 2026 (Lei 73-A/2025). De staat houdt hier 95%; het gemeentelijke aandeel staat apart.`,
    fr: `Taux des six premières tranches baissés de 0,3 à 0,5 point pour tout 2026, comme voté par le Parlement le 9 octobre 2026 ; le décret-loi qui les fixe n'est pas encore publié. Tranches du budget 2026 (Lei 73-A/2025). L'État garde ici 95% ; la part municipale est montrée à part.`,
  },
  'tip.irReturn': { en: `Your return`, nl: `Jouw aangifte`, fr: `Votre déclaration` },
  'tip.irJoint': { en: sep => `Joint return (separate: ${sep})`, nl: sep => `Gezamenlijke aangifte (apart: ${sep})`, fr: sep => `Déclaration commune (séparée : ${sep})` },
  'tip.irSepYou': { en: joint => `Your separate return (joint: ${joint})`, nl: joint => `Jouw aparte aangifte (gezamenlijk: ${joint})`, fr: joint => `Votre déclaration séparée (commune : ${joint})` },
  'tip.irSepPartner': { en: `Your partner's return`, nl: `Aangifte van je partner`, fr: `Déclaration de votre conjoint` },
  'tip.irRc': { en: q => q > 1 ? `Taxable income, halved` : `Taxable income`, nl: q => q > 1 ? `Belastbaar inkomen, gehalveerd` : `Belastbaar inkomen`, fr: q => q > 1 ? `Revenu imposable, divisé par deux` : `Revenu imposable` },
  'tip.irColeta': { en: `Tax from the brackets`, nl: `Belasting volgens de schijven`, fr: `Impôt selon le barème` },
  'tip.irJovemRate': { en: `(rate set with the exempt part)`, nl: `(tarief bepaald met het vrijgestelde deel)`, fr: `(taux fixé avec la part exonérée)` },
  'tip.irDeps': { en: `Children`, nl: `Kinderen`, fr: `Enfants` },
  'tip.irDgf': { en: `Household expenses`, nl: `Gezinsuitgaven`, fr: `Dépenses du foyer` },
  'tip.irLiq': { en: `Net tax`, nl: `Netto belasting`, fr: `Impôt net` },
  'tip.irSolid': { en: `Solidarity surcharge`, nl: `Solidariteitstoeslag`, fr: `Surtaxe de solidarité` },
  'tip.irState': { en: `State's 95% + surcharge`, nl: `95% voor de staat + toeslag`, fr: `95% pour l'État + surtaxe` },
  'tip.irWithout': { en: `Household tax if you earned nothing`, nl: `Belasting als jij niets verdiende`, fr: `Impôt du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.ab': {
    en: `Paid monthly per child by Social Security. Your step depends on the household's yearly gross income ÷ (children + 1): up to 0.5, 1, 1.7 and 2.5 × 14 × IAS. Young children get more; from age 6 the fourth step gets nothing. Single parents get 50% more.`,
    nl: `Maandelijks per kind betaald door de sociale zekerheid. Je trap hangt af van het bruto jaarinkomen van het gezin ÷ (kinderen + 1): tot 0,5, 1, 1,7 en 2,5 × 14 × IAS. Jonge kinderen krijgen meer; vanaf 6 jaar krijgt de vierde trap niets. Alleenstaande ouders krijgen 50% meer.`,
    fr: `Versé chaque mois par enfant par la Sécurité sociale. Votre palier dépend du revenu brut annuel du foyer ÷ (enfants + 1) : jusqu'à 0,5, 1, 1,7 et 2,5 × 14 × IAS. Les jeunes enfants touchent plus ; dès 6 ans, le quatrième palier ne touche rien. Les parents isolés touchent 50% de plus.`,
  },
  'tip.abRef': { en: `Income per person`, nl: `Inkomen per persoon`, fr: `Revenu par personne` },
  'tip.abEsc': { en: `Step (5 = none)`, nl: `Trap (5 = niets)`, fr: `Palier (5 = rien)` },
  'tip.abMonth': { en: `Abono per month`, nl: `Abono per maand`, fr: `Abono par mois` },
  'tip.abWithout': { en: `Abono if you earned nothing`, nl: `Abono als jij niets verdiende`, fr: `Abono sans vos revenus` },
  'tip.abYear': { en: `Your share, per year`, nl: `Jouw deel, per jaar`, fr: `Votre part, par an` },
  'tip.abM': {
    en: `2026 amounts (+2.2%). Children aged 3 to 6 are counted as older ones, and the extras for large families, disability and the September double payment are left out.`,
    nl: `Bedragen 2026 (+2,2%). Kinderen van 3 tot 6 worden als oudere kinderen geteld; de toeslagen voor grote gezinnen, handicap en de dubbele uitbetaling in september zijn niet meegerekend.`,
    fr: `Montants 2026 (+2,2%). Les enfants de 3 à 6 ans sont comptés comme plus âgés ; les majorations familles nombreuses et handicap et le double versement de septembre ne sont pas pris en compte.`,
  },
  'tip.vatM': {
    en: `The 13% and 6% rates (restaurants, food, energy, books, medicines) and VAT-free spending such as rent are left out, so this is an upper bound.`,
    nl: `De tarieven van 13% en 6% (restaurants, voeding, energie, boeken, geneesmiddelen) en btw-vrije uitgaven zoals huur zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Les taux de 13% et 6% (restauration, alimentation, énergie, livres, médicaments) et les dépenses sans TVA comme le loyer ne sont pas pris en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − social security − income tax, + abono de família if counted.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − sociale bijdrage − inkomstenbelasting, + abono de família als die meetelt.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − sécurité sociale − IRS, + abono de família s'il est compté.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026 (taxed in 2027)`,
    nl: `Gebruikte regels · inkomstenjaar 2026 (belast in 2027)`,
    fr: `Règles utilisées · revenus 2026 (imposés en 2027)`,
  },
  'ref.ss': {
    en: { h: `1 · Social security`, li: [
      `Employee <span class="num">11%</span>, employer <span class="num">23.75%</span>, on all gross pay including the holiday and Christmas subsidies. No ceiling.`,
      `Minimum wage <span class="num">€920</span> a month × 14 in 2026. IAS (social benefits index) <span class="num">€537.13</span>.`,
    ] },
    nl: { h: `1 · Sociale zekerheid`, li: [
      `Werknemer <span class="num">11%</span>, werkgever <span class="num">23,75%</span>, op het hele brutoloon inclusief vakantie- en kersttoelage. Geen plafond.`,
      `Minimumloon <span class="num">€ 920</span> per maand × 14 in 2026. IAS (index van de sociale uitkeringen) <span class="num">€ 537,13</span>.`,
    ] },
    fr: { h: `1 · Sécurité sociale`, li: [
      `Salarié <span class="num">11%</span>, employeur <span class="num">23,75%</span>, sur tout le brut, subsides de vacances et de Noël compris. Pas de plafond.`,
      `Salaire minimum <span class="num">920 €</span> par mois × 14 en 2026. IAS (indice des aides sociales) <span class="num">537,13 €</span>.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `2 · Income tax (IRS)`, li: [
      `Gross − specific deduction (<span class="num">€4 587.09</span> or social security if higher).`,
      `Brackets for 2026 income, with the October 2026 cut:${br}`,
      `The cut isn't law until its decree-law is published; the 2026 budget rates were 12.5%, 15.7%, 21.2%, 24.1%, 31.1% and 34.9% for the first six brackets.`,
      `Solidarity surcharge: <span class="num">2.5%</span> of taxable income from €80 000, <span class="num">5%</span> from €250 000.`,
    ] }),
    nl: br => ({ h: `2 · Inkomstenbelasting (IRS)`, li: [
      `Bruto − specifieke aftrek (<span class="num">€ 4.587,09</span> of de sociale bijdragen als die hoger zijn).`,
      `Schijven voor het inkomen 2026, met de verlaging van oktober 2026:${br}`,
      `De verlaging is pas wet als het decreet gepubliceerd is; de tarieven van de begroting 2026 waren 12,5%, 15,7%, 21,2%, 24,1%, 31,1% en 34,9% voor de eerste zes schijven.`,
      `Solidariteitstoeslag: <span class="num">2,5%</span> van het belastbaar inkomen vanaf € 80.000, <span class="num">5%</span> vanaf € 250.000.`,
    ] }),
    fr: br => ({ h: `2 · Impôt sur le revenu (IRS)`, li: [
      `Brut − déduction spécifique (<span class="num">4 587,09 €</span> ou les cotisations sociales si plus élevées).`,
      `Barème des revenus 2026, avec la baisse d'octobre 2026 :${br}`,
      `La baisse n'a force de loi qu'à la publication de son décret-loi ; les taux du budget 2026 étaient 12,5%, 15,7%, 21,2%, 24,1%, 31,1% et 34,9% pour les six premières tranches.`,
      `Surtaxe de solidarité : <span class="num">2,5%</span> du revenu imposable dès 80 000 €, <span class="num">5%</span> dès 250 000 €.`,
    ] }),
  },
  'ref.mex': {
    en: { h: `3 · Mínimo de existência`, li: [
      `No income tax up to <span class="num">€12 880</span> gross a year; the relief then shrinks by 2.60 and 1.35 per euro and ends around <span class="num">€15 900</span>.`,
      `Not applied when the return's gross income passes 2.2 × 14 × IAS (<span class="num">€16 544</span>) per taxpayer.`,
    ] },
    nl: { h: `3 · Mínimo de existência`, li: [
      `Geen inkomstenbelasting tot <span class="num">€ 12.880</span> bruto per jaar; daarna krimpt de vrijstelling met 2,60 en 1,35 per euro en eindigt rond <span class="num">€ 15.900</span>.`,
      `Niet toegepast als het bruto inkomen van de aangifte boven 2,2 × 14 × IAS (<span class="num">€ 16.544</span>) per belastingplichtige ligt.`,
    ] },
    fr: { h: `3 · Mínimo de existência`, li: [
      `Pas d'IRS jusqu'à <span class="num">12 880 €</span> brut par an ; l'abattement baisse ensuite de 2,60 puis 1,35 par euro et s'éteint vers <span class="num">15 900 €</span>.`,
      `Non appliqué si le revenu brut de la déclaration dépasse 2,2 × 14 × IAS (<span class="num">16 544 €</span>) par contribuable.`,
    ] },
  },
  'ref.deductions': {
    en: { h: `4 · Deductions and household`, li: [
      `<span class="num">€600</span> per child, +€126 up to age 3, +€300 for the second and later children up to age 6. Split 50/50 in separate returns.`,
      `Household expenses: <span class="num">€250</span> per taxpayer (€335 for a single parent), assumed maxed out. Health, education, housing and rent deductions are left out.`,
      `Couples: the cheaper of a joint return (income halved, taxed, doubled) and two separate ones. Your tax = the household's − the household's without your pay.`,
      `IRS Jovem: 100% / 75% / 50% / 25% of pay exempt in years 1 / 2-4 / 5-7 / 8-10, up to <span class="num">€29 542</span> a year.`,
    ] },
    nl: { h: `4 · Aftrekken en gezin`, li: [
      `<span class="num">€ 600</span> per kind, +€ 126 tot 3 jaar, +€ 300 voor het tweede en volgende kinderen tot 6 jaar. 50/50 verdeeld bij aparte aangiften.`,
      `Gezinsuitgaven: <span class="num">€ 250</span> per belastingplichtige (€ 335 voor een alleenstaande ouder), als volledig benut aangenomen. Aftrekken voor gezondheid, onderwijs, woning en huur zijn niet meegerekend.`,
      `Koppels: de goedkoopste van een gezamenlijke aangifte (inkomen gehalveerd, belast, verdubbeld) en twee aparte. Jouw belasting = die van het gezin − die van het gezin zonder jouw loon.`,
      `IRS Jovem: 100% / 75% / 50% / 25% van het loon vrijgesteld in jaar 1 / 2-4 / 5-7 / 8-10, tot <span class="num">€ 29.542</span> per jaar.`,
    ] },
    fr: { h: `4 · Déductions et foyer`, li: [
      `<span class="num">600 €</span> par enfant, +126 € jusqu'à 3 ans, +300 € pour le deuxième enfant et les suivants jusqu'à 6 ans. Partagé 50/50 en déclarations séparées.`,
      `Dépenses du foyer : <span class="num">250 €</span> par contribuable (335 € pour un parent isolé), supposées au maximum. Santé, éducation, logement et loyer ne sont pas pris en compte.`,
      `Couples : la moins chère entre déclaration commune (revenu divisé par deux, imposé, doublé) et deux séparées. Votre impôt = celui du foyer − celui du foyer sans votre salaire.`,
      `IRS Jovem : 100% / 75% / 50% / 25% du salaire exonéré les années 1 / 2-4 / 5-7 / 8-10, jusqu'à <span class="num">29 542 €</span> par an.`,
    ] },
  },
  'ref.mun': {
    en: { h: `5 · Municipal share`, li: [
      `Rates of all 308 municipalities for 2026 income, from the tax authority's table. 44 keep nothing (Lisbon, Funchal among them), 99 keep the full 5%, 12 of them because they sent no decision.`,
      `The municipality's share is a part of your IRS: what it doesn't keep comes off your bill.`,
    ] },
    nl: { h: `5 · Gemeentelijk aandeel`, li: [
      `Tarieven van alle 308 gemeenten voor het inkomen 2026, uit de tabel van de belastingdienst. 44 houden niets (o.a. Lissabon en Funchal), 99 houden de volle 5%, waarvan 12 omdat ze geen beslissing stuurden.`,
      `Het gemeentelijke aandeel is een deel van je IRS: wat de gemeente niet houdt, gaat van je aanslag af.`,
    ] },
    fr: { h: `5 · Part municipale`, li: [
      `Taux des 308 municipalités pour les revenus 2026, d'après la table du fisc. 44 ne gardent rien (dont Lisbonne et Funchal), 99 gardent les 5%, dont 12 faute d'avoir envoyé une décision.`,
      `La part municipale est une partie de votre IRS : ce que la municipalité ne garde pas est déduit de votre impôt.`,
    ] },
  },
  'ref.regions': {
    en: { h: `6 · Madeira and the Azores`, li: [
      `Madeira 2026: <span class="num">8.75%</span> to <span class="num">33.6%</span> on the same brackets (DLR 8/2025/M), not yet adjusted to the October cut.`,
      `Azores: every national rate − 30%. VAT 22% (Madeira) and 16% (Azores).`,
    ] },
    nl: { h: `6 · Madeira en de Azoren`, li: [
      `Madeira 2026: <span class="num">8,75%</span> tot <span class="num">33,6%</span> op dezelfde schijven (DLR 8/2025/M), nog niet aangepast aan de verlaging van oktober.`,
      `Azoren: elk nationaal tarief − 30%. Btw 22% (Madeira) en 16% (Azoren).`,
    ] },
    fr: { h: `6 · Madère et Açores`, li: [
      `Madère 2026 : <span class="num">8,75%</span> à <span class="num">33,6%</span> sur les mêmes tranches (DLR 8/2025/M), pas encore ajusté à la baisse d'octobre.`,
      `Açores : chaque taux national − 30%. TVA 22% (Madère) et 16% (Açores).`,
    ] },
  },
  'ref.abono': {
    en: { h: `7 · Abono de família`, li: [
      `Per child per month, steps 1 to 4: under 3 <span class="num">€190.98 / 161.65 / 132.07 / 88.43</span>; older <span class="num">€75.13 / 75.13 / 54.35 / 0</span>.`,
      `Steps by gross income ÷ (children + 1): up to €3 760, €7 520, €12 784 and €18 800 a year. Single parents +50%.`,
    ] },
    nl: { h: `7 · Abono de família`, li: [
      `Per kind per maand, trap 1 tot 4: onder 3 <span class="num">€ 190,98 / 161,65 / 132,07 / 88,43</span>; ouder <span class="num">€ 75,13 / 75,13 / 54,35 / 0</span>.`,
      `Trappen volgens bruto inkomen ÷ (kinderen + 1): tot € 3.760, € 7.520, € 12.784 en € 18.800 per jaar. Alleenstaande ouders +50%.`,
    ] },
    fr: { h: `7 · Abono de família`, li: [
      `Par enfant et par mois, paliers 1 à 4 : moins de 3 ans <span class="num">190,98 / 161,65 / 132,07 / 88,43 €</span> ; plus âgés <span class="num">75,13 / 75,13 / 54,35 / 0 €</span>.`,
      `Paliers selon le revenu brut ÷ (enfants + 1) : jusqu'à 3 760 €, 7 520 €, 12 784 € et 18 800 € par an. Parents isolés +50%.`,
    ] },
  },
  'ref.vat': {
    en: { h: `8 · VAT on spending`, li: [
      `Standard rate <span class="num">23%</span> on the mainland, applied to all of your net pay as if you spent it. Use the slider for other rates.`,
      `VAT inside a price = price × r / (100 + r): at 23% that's 23 / 123 = <span class="num">18.70%</span> of what you pay.`,
    ] },
    nl: { h: `8 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">23%</span> op het vasteland, toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar voor andere tarieven.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 23% is dat 23 / 123 = <span class="num">18,70%</span> van wat je betaalt.`,
    ] },
    fr: { h: `8 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">23%</span> sur le continent, appliqué à tout votre salaire net comme si vous le dépensiez. Utilisez le curseur pour d'autres taux.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 23%, cela fait 23 / 123 = <span class="num">18,70%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `9 · Government and parliament`, li: [
      `President <span class="num">€8 370</span>/month × 14 + 40% representation. Prime Minister 75%, minister 65%, secretary of State 60%, MP 50% of it.`,
      `Representation: 40%, 40%, 35%, 10% (full-time MPs). Public managers can't earn more than the Prime Minister, except at CGD and the central bank.`,
    ] },
    nl: { h: `9 · Regering en parlement`, li: [
      `President <span class="num">€ 8.370</span>/maand × 14 + 40% representatie. Premier 75%, minister 65%, staatssecretaris 60%, parlementslid 50% daarvan.`,
      `Representatie: 40%, 40%, 35%, 10% (voltijdse parlementsleden). Openbare bestuurders mogen niet meer verdienen dan de premier, behalve bij CGD en de centrale bank.`,
    ] },
    fr: { h: `9 · Gouvernement et Parlement`, li: [
      `Président <span class="num">8 370 €</span>/mois × 14 + 40% de représentation. Premier ministre 75%, ministre 65%, secrétaire d'État 60%, député 50% de ce montant.`,
      `Représentation : 40%, 40%, 35%, 10% (députés en exclusivité). Les gestionnaires publics ne peuvent gagner plus que le Premier ministre, sauf à la CGD et à la banque centrale.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Work accident insurance, meal allowance (tax-free up to €6 a day in cash, €10.20 on a card), overtime, profit-sharing, tax-free bonuses, and the health, education, housing and rent deductions.`,
      `Children aged 3 to 6 are counted as older ones. Figures are your final yearly tax, not the monthly withholding.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Arbeidsongevallenverzekering, maaltijdvergoeding (belastingvrij tot € 6 per dag cash, € 10,20 op een kaart), overuren, winstdeling, belastingvrije premies, en de aftrekken voor gezondheid, onderwijs, woning en huur.`,
      `Kinderen van 3 tot 6 worden als oudere kinderen geteld. De bedragen zijn je uiteindelijke jaarbelasting, niet de maandelijkse inhouding.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Assurance accidents du travail, indemnité repas (exonérée jusqu'à 6 € par jour en espèces, 10,20 € sur carte), heures supplémentaires, intéressement, primes exonérées, et les déductions santé, éducation, logement et loyer.`,
      `Les enfants de 3 à 6 ans sont comptés comme plus âgés. Les montants sont votre impôt annuel définitif, pas la retenue mensuelle.`,
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
};
