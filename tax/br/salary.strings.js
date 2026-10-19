window.TAX_STRINGS = {
  title: { en: `Brazilian Buying Power`, nl: `Braziliaanse koopkracht`, fr: `Pouvoir d'achat au Brésil` },
  eyebrow: { en: `Brazil · income 2026 · CLT employee`, nl: `Brazilië · inkomen 2026 · CLT-werknemer`, fr: `Brésil · revenus 2026 · salarié CLT` },
  eyebrowMinister: { en: `Brazil · income 2026 · minister`, nl: `Brazilië · inkomen 2026 · minister`, fr: `Brésil · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Brazilian salary in 2026, from what your employer pays to what you can buy. Heavy employer charges, no income tax up to R$ 5,000 a month since January, and taxes on spending hidden inside every price.`,
    nl: `Alle belastingen op een Braziliaans loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Zware werkgeverslasten, geen inkomstenbelasting tot R$ 5.000 per maand sinds januari, en belastingen op uitgaven verstopt in elke prijs.`,
    fr: `Tous les prélèvements sur un salaire brésilien en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. De lourdes charges patronales, pas d'impôt sur le revenu jusqu'à 5 000 R$ par mois depuis janvier, et des taxes sur la consommation cachées dans chaque prix.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Living together, married or not. Each partner files alone; children are dependents of one of you, whoever saves more.`,
    nl: `Samenwonend, gehuwd of niet. Elke partner doet apart aangifte; de kinderen staan ten laste van een van beiden, wie het meest bespaart.`,
    fr: `En couple, marié ou non. Chacun déclare séparément ; les enfants sont à la charge de l'un des deux, celui qui économise le plus.`,
  },
  employerSize: { en: `Employer's tax regime`, nl: `Belastingregime van de werkgever`, fr: `Régime fiscal de l'employeur` },
  'size.general': { en: `Standard`, nl: `Standaard`, fr: `Normal` },
  'size.simples': { en: `Simples Nacional`, nl: `Simples Nacional`, fr: `Simples Nacional` },
  vatStandard: {
    en: `(Brazil has no single rate: about 28% is the reference rate of the coming IBS/CBS)`,
    nl: `(Brazilië heeft geen enkel tarief: ongeveer 28% is het referentietarief van de komende IBS/CBS)`,
    fr: `(le Brésil n'a pas de taux unique : environ 28% est le taux de référence de la future IBS/CBS)`,
  },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.min': { en: `Minister of State`, nl: `Minister`, fr: `Ministre d'État` },
  'minRole.pres': { en: `President`, nl: `President`, fr: `Président` },
  ministerHint: {
    en: `R$ 46,366.19 a month since February 2025, 13 times a year. Taxed like a salary; no FGTS.`,
    nl: `R$ 46.366,19 per maand sinds februari 2025, 13 keer per jaar. Belast zoals een loon; geen FGTS.`,
    fr: `46 366,19 R$ par mois depuis février 2025, 13 fois par an. Imposé comme un salaire ; pas de FGTS.`,
  },
  minSalaryHint: {
    en: `Yearly pay, monthly amount × 13 with the Christmas bonus. Statutory amount by default.`,
    nl: `Jaarloon, maandbedrag × 13 met de kerstbonus. Standaard het wettelijke bedrag.`,
    fr: `Rémunération annuelle, montant mensuel × 13 avec le 13e mois. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: pay => `Congress sets one amount for deputies, senators, the President, the Vice-President and ministers: ${pay} a month since February 2025, in line with a Supreme Court justice, which is also the ceiling for all federal pay. It is taxed like a salary: IRPF and INSS on the pay. Here the State pays 20% employer INSS and no FGTS.`,
    nl: pay => `Het Congres legt één bedrag vast voor kamerleden, senatoren, de president, de vicepresident en ministers: ${pay} per maand sinds februari 2025, gelijk aan een rechter van het Hooggerechtshof, wat ook het plafond is voor alle federale lonen. Het wordt belast zoals een loon: IRPF en INSS op het loon. Hier betaalt de staat 20% werkgevers-INSS en geen FGTS.`,
    fr: pay => `Le Congrès fixe un seul montant pour les députés, les sénateurs, le Président, le vice-président et les ministres : ${pay} par mois depuis février 2025, comme un juge de la Cour suprême, ce qui est aussi le plafond de toute rémunération fédérale. Il est imposé comme un salaire : IRPF et INSS sur la rémunération. Ici, l'État paie 20% d'INSS patronal et pas de FGTS.`,
  },

  // Politicians on the chart
  'stat.pres': { en: `President`, nl: `President`, fr: `Président` },
  'stat.min': { en: `Minister of State`, nl: `Minister`, fr: `Ministre d'État` },
  'stat.mp': { en: `Deputy or senator`, nl: `Kamerlid of senator`, fr: `Député ou sénateur` },
  'pol.stat.pres': { en: `Same pay as a minister or deputy`, nl: `Zelfde loon als een minister of kamerlid`, fr: `Même rémunération qu'un ministre ou un député` },
  'pol.stat.min': { en: `R$ 46,366.19 a month, × 13`, nl: `R$ 46.366,19 per maand, × 13`, fr: `46 366,19 R$ par mois, × 13` },
  'pol.stat.mp': { en: `R$ 46,366.19 a month, × 13, without office allowances`, nl: `R$ 46.366,19 per maand, × 13, zonder ambtsvergoedingen`, fr: `46 366,19 R$ par mois, × 13, hors frais de mandat` },
  'polNote.stat': {
    en: `Taxed like any salary. The head sits at its gross.`,
    nl: `Belast zoals elk loon. Het hoofdje staat op het bruto.`,
    fr: `Imposé comme tout salaire. La tête est placée à son brut.`,
  },
  'polTipNote.pres': {
    en: `Luiz Inácio Lula da Silva. Same R$ 46,366.19 a month as ministers and members of Congress, plus the official residence and staff.`,
    nl: `Luiz Inácio Lula da Silva. Dezelfde R$ 46.366,19 per maand als ministers en parlementsleden, plus de ambtswoning en personeel.`,
    fr: `Luiz Inácio Lula da Silva. Les mêmes 46 366,19 R$ par mois que les ministres et les parlementaires, plus la résidence officielle et le personnel.`,
  },
  'polTipNote.min': {
    en: `R$ 46,366.19 a month, the same for every minister. Ministers who are also civil servants can't add both pays above the federal ceiling.`,
    nl: `R$ 46.366,19 per maand, voor elke minister gelijk. Ministers die ook ambtenaar zijn, kunnen beide lonen niet boven het federale plafond optellen.`,
    fr: `46 366,19 R$ par mois, identique pour tous les ministres. Un ministre fonctionnaire ne peut pas cumuler les deux rémunérations au-delà du plafond fédéral.`,
  },
  'polTipNote.mp': {
    en: `R$ 46,366.19 a month for deputies and senators, as shown on the Chamber's deputy pages in 2026. Housing, office and staff budgets come on top and aren't counted.`,
    nl: `R$ 46.366,19 per maand voor kamerleden en senatoren, zoals vermeld op de pagina's van de Kamer in 2026. Budgetten voor woning, kantoor en personeel komen erbovenop en tellen niet mee.`,
    fr: `46 366,19 R$ par mois pour les députés et les sénateurs, comme indiqué sur les pages de la Chambre en 2026. Les budgets de logement, de bureau et de personnel s'ajoutent et ne sont pas comptés.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross with the 13th salary, shown on the chart as yearly ÷ months paid. Brazilian office holders are taxed like employees, so everyone sits at their gross. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto met het 13e loon, op de grafiek als jaarbedrag ÷ aantal uitbetaalde maanden. Braziliaanse ambtsdragers worden belast als werknemers, dus iedereen staat op het eigen bruto. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel avec le 13e mois, placé sur le graphique en montant annuel ÷ mois payés. Les élus brésiliens sont imposés comme des salariés : chacun est placé à son brut. Sources : ${links}.`,
  },
  'src.pol.pres': { en: `Senate: federal pay schedule`, nl: `Senaat: federaal loonschema`, fr: `Sénat : barème de rémunération fédéral` },
  'src.pol.min': { en: `Senate: federal pay schedule`, nl: `Senaat: federaal loonschema`, fr: `Sénat : barème de rémunération fédéral` },
  'src.pol.mp': { en: `Chamber of Deputies: a deputy's page`, nl: `Kamer van Afgevaardigden: pagina van een kamerlid`, fr: `Chambre des députés : page d'un député` },
  bracketTop: { en: `end of the 2026 relief`, nl: `einde van de verlaging van 2026`, fr: `fin de la réduction de 2026` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why no income tax up to ${b}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom geen inkomstenbelasting tot ${b}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi pas d'impôt sur le revenu jusqu'à ${b} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, sf) => `From 2026, Lei 15.270 cancels the income tax on taxable pay up to R$ 5,000 a month (R$ 60,000 a year). From the minimum wage of ${a}${b ? ` up to ${b}` : ''} only INSS is withheld (7.5% to 14%), while the employer pays about 28% plus 8% FGTS on top. With the vacation third, the year's taxable pay crosses R$ 60,000 a little before R$ 5,000 a month.${sf ? ` Salário-família stops at once above ${sf} a month: one real more costs every child's quota.` : ''}`,
    nl: (a, b, sf) => `Vanaf 2026 schrapt Lei 15.270 de inkomstenbelasting op belastbaar loon tot R$ 5.000 per maand (R$ 60.000 per jaar). Van het minimumloon van ${a}${b ? ` tot ${b}` : ''} wordt enkel INSS ingehouden (7,5% tot 14%), terwijl de werkgever ongeveer 28% plus 8% FGTS bovenop betaalt. Met het vakantiederde komt het belastbare jaarloon iets onder R$ 5.000 per maand al boven R$ 60.000.${sf ? ` Salário-família valt meteen weg boven ${sf} per maand: één real meer kost de toelage van elk kind.` : ''}`,
    fr: (a, b, sf) => `Depuis 2026, la Lei 15.270 annule l'impôt sur le revenu jusqu'à 5 000 R$ de revenu imposable par mois (60 000 R$ par an). Du salaire minimum de ${a}${b ? ` jusqu'à ${b}` : ''}, seule l'INSS est retenue (7,5% à 14%), tandis que l'employeur paie environ 28% plus 8% de FGTS en plus. Avec le tiers de vacances, le revenu imposable de l'année dépasse 60 000 R$ un peu avant 5 000 R$ par mois.${sf ? ` Le salário-família s'arrête net au-delà de ${sf} par mois : un real de plus coûte l'allocation de chaque enfant.` : ''}`,
  },
  topTitle: {
    en: top => `Why the steep stretch up to ${top}?`,
    nl: top => `Waarom het steile stuk tot ${top}?`,
    fr: top => `Pourquoi la pente raide jusqu'à ${top} ?`,
  },
  topBody: {
    en: (top, ceil) => `Above R$ 60,000 a year the 2026 relief shrinks by 9.56 centavos per extra real, until it's gone at R$ 88,200 (about ${top}). In that stretch each extra real pays the bracket rate plus the lost relief. Above it, IRPF is 27.5% at the margin, and INSS stops growing once the monthly pay passes the ceiling of ${ceil}.`,
    nl: (top, ceil) => `Boven R$ 60.000 per jaar krimpt de verlaging van 2026 met 9,56 centavos per extra real, tot ze verdwenen is bij R$ 88.200 (ongeveer ${top}). In dat stuk betaalt elke extra real het schijftarief plus de verloren verlaging. Daarboven is de IRPF 27,5% op de marge, en de INSS stijgt niet meer zodra het maandloon het plafond van ${ceil} passeert.`,
    fr: (top, ceil) => `Au-delà de 60 000 R$ par an, la réduction de 2026 diminue de 9,56 centavos par real en plus, jusqu'à disparaître à 88 200 R$ (environ ${top}). Dans cette zone, chaque real en plus paie le taux de la tranche plus la réduction perdue. Au-delà, l'IRPF est de 27,5% à la marge, et l'INSS cesse d'augmenter quand le salaire mensuel dépasse le plafond de ${ceil}.`,
  },

  // Tax components
  'comp.er': { en: `Employer INSS, RAT and third parties`, nl: `Werkgevers-INSS, RAT en derden`, fr: `INSS patronale, RAT et tiers` },
  'comp.ee': { en: `Social security (INSS)`, nl: `Sociale zekerheid (INSS)`, fr: `Sécurité sociale (INSS)` },
  'comp.ir': { en: `Income tax (IRPF)`, nl: `Inkomstenbelasting (IRPF)`, fr: `Impôt sur le revenu (IRPF)` },
  'comp.fam': { en: `Salário-família`, nl: `Salário-família`, fr: `Salário-família` },
  'comp.fgts': { en: `FGTS, into your own account`, nl: `FGTS, op je eigen rekening`, fr: `FGTS, sur votre propre compte` },
  famReceived: { en: `+ Salário-família received`, nl: `+ Ontvangen salário-família`, fr: `+ Salário-família reçu` },
  famLost: { en: `Salário-família lost`, nl: `Verloren salário-família`, fr: `Salário-família perdu` },
  'bd.simp': { en: `Simplified discount (20%, capped)`, nl: `Vereenvoudigde aftrek (20%, begrensd)`, fr: `Abattement simplifié (20%, plafonné)` },
  'bd.legal': { en: `INSS and dependents deducted`, nl: `Afgetrokken INSS en personen ten laste`, fr: `INSS et personnes à charge déduites` },
  'bd.deduct': { en: `Deductions`, nl: `Aftrekposten`, fr: `Déductions` },
  'bd.taxable': { en: `Taxable for IRPF (year, without the 13th)`, nl: `Belastbaar voor IRPF (jaar, zonder 13e maand)`, fr: `Imposable à l'IRPF (année, hors 13e mois)` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, no 13th and no vacation third: only for comparison, every CLT employee gets both.`,
    nl: `12 maandlonen, zonder 13e maand en zonder vakantiederde: enkel ter vergelijking, elke CLT-werknemer krijgt beide.`,
    fr: `12 salaires mensuels, sans 13e mois ni tiers de vacances : pour comparaison seulement, tout salarié CLT a droit aux deux.`,
  },
  'tip.f13': {
    en: `12 monthly salaries + the 13th salary paid in November and December. The 13th has its own INSS and is taxed apart, at source, with the monthly table.`,
    nl: `12 maandlonen + het 13e loon, betaald in november en december. Het 13e loon heeft een eigen INSS en wordt apart belast, aan de bron, met de maandtabel.`,
    fr: `12 salaires mensuels + le 13e salaire versé en novembre et décembre. Le 13e a sa propre INSS et est imposé à part, à la source, avec le barème mensuel.`,
  },
  'tip.f1333': {
    en: `The usual CLT year: 12 salaries, the 13th, and the constitutional third on top of the vacation month's pay. The third is taxed with the year's pay; the 13th apart.`,
    nl: `Het gewone CLT-jaar: 12 lonen, het 13e loon, en het grondwettelijke derde bovenop het loon van de vakantiemaand. Het derde wordt belast met het jaarloon; het 13e apart.`,
    fr: `L'année CLT habituelle : 12 salaires, le 13e, et le tiers constitutionnel en plus du salaire du mois de vacances. Le tiers est imposé avec le salaire de l'année ; le 13e à part.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Brazil taxes each person alone. Only children are shared: each is a dependent of one parent, and the couple picks the split that costs least. Here, your tax = the couple's IRPF − what your partner would pay claiming every child.`,
    nl: `Brazilië belast elke persoon apart. Alleen de kinderen worden gedeeld: elk kind staat ten laste van één ouder, en het koppel kiest de goedkoopste verdeling. Hier is jouw belasting = de IRPF van het koppel − wat je partner zou betalen met alle kinderen ten laste.`,
    fr: `Le Brésil impose chaque personne séparément. Seuls les enfants sont partagés : chacun est à la charge d'un parent, et le couple choisit la répartition la moins chère. Ici, votre impôt = l'IRPF du couple − ce que paierait votre partenaire avec tous les enfants à charge.`,
  },
  'tip.size': {
    en: `Most employers pay 20% INSS, about 2% RAT (work accidents, 1 to 3% times a factor) and about 5.8% to third parties (education, SESC/SENAC or SESI/SENAI, SEBRAE, INCRA). Small firms in the Simples Nacional regime pay these inside their single monthly tax on revenue instead (annexes I, II, III and V), so payroll costs only the 8% FGTS.`,
    nl: `De meeste werkgevers betalen 20% INSS, ongeveer 2% RAT (arbeidsongevallen, 1 tot 3% maal een factor) en ongeveer 5,8% aan derden (onderwijs, SESC/SENAC of SESI/SENAI, SEBRAE, INCRA). Kleine bedrijven in het Simples Nacional-regime betalen die in hun ene maandelijkse belasting op de omzet (bijlagen I, II, III en V), dus kost het loon enkel de 8% FGTS.`,
    fr: `La plupart des employeurs paient 20% d'INSS, environ 2% de RAT (accidents du travail, 1 à 3% fois un facteur) et environ 5,8% aux tiers (éducation, SESC/SENAC ou SESI/SENAI, SEBRAE, INCRA). Les petites entreprises au Simples Nacional les paient dans leur impôt mensuel unique sur le chiffre d'affaires (annexes I, II, III et V) : la paie ne coûte alors que les 8% de FGTS.`,
  },
  'tip.costShort': { en: `Gross salary + employer INSS, RAT, third parties and FGTS.`, nl: `Brutoloon + werkgevers-INSS, RAT, derden en FGTS.`, fr: `Salaire brut + INSS patronale, RAT, tiers et FGTS.` },
  'tip.er': {
    en: `Paid by your employer on top of all your pay, 13th and vacation third included, with no ceiling: 20% INSS + about 2% RAT + about 5.8% third parties. Nothing for Simples Nacional firms.`,
    nl: `Betaald door je werkgever bovenop je hele loon, 13e maand en vakantiederde inbegrepen, zonder plafond: 20% INSS + ongeveer 2% RAT + ongeveer 5,8% derden. Niets voor bedrijven in de Simples Nacional.`,
    fr: `Payé par votre employeur en plus de tout votre salaire, 13e mois et tiers de vacances compris, sans plafond : 20% d'INSS + environ 2% de RAT + environ 5,8% de tiers. Rien pour les entreprises au Simples Nacional.`,
  },
  'tip.fgts': {
    en: `8% of all your pay, paid by the employer into an account in your name at Caixa. You can't spend it freely: it pays out on dismissal without cause (with a 40% fine on top), retirement, buying a home or serious illness. So it's part of what you cost, but neither tax nor take-home pay.`,
    nl: `8% van je hele loon, door de werkgever gestort op een rekening op jouw naam bij Caixa. Je kunt het niet vrij uitgeven: het wordt uitbetaald bij ontslag zonder reden (met 40% boete erbovenop), pensioen, aankoop van een woning of ernstige ziekte. Het hoort dus bij wat je kost, maar is geen belasting en geen nettoloon.`,
    fr: `8% de tout votre salaire, versés par l'employeur sur un compte à votre nom à la Caixa. Vous ne pouvez pas le dépenser librement : il est débloqué en cas de licenciement sans motif (avec une amende de 40% en plus), de retraite, d'achat d'un logement ou de maladie grave. Il fait donc partie de ce que vous coûtez, sans être un impôt ni du salaire net.`,
  },
  'tip.ee': {
    en: `Withheld each month by slice of pay: 7.5% up to R$ 1,621, 9% up to R$ 2,902.84, 12% up to R$ 4,354.27, 14% up to the ceiling of R$ 8,475.55. At most R$ 988.09 a month. The 13th pays its own INSS; the vacation third counts with that month's pay.`,
    nl: `Elke maand ingehouden per schijf van het loon: 7,5% tot R$ 1.621, 9% tot R$ 2.902,84, 12% tot R$ 4.354,27, 14% tot het plafond van R$ 8.475,55. Hoogstens R$ 988,09 per maand. Het 13e loon betaalt een eigen INSS; het vakantiederde telt mee met het loon van die maand.`,
    fr: `Retenue chaque mois par tranche de salaire : 7,5% jusqu'à 1 621 R$, 9% jusqu'à 2 902,84 R$, 12% jusqu'à 4 354,27 R$, 14% jusqu'au plafond de 8 475,55 R$. Au plus 988,09 R$ par mois. Le 13e paie sa propre INSS ; le tiers de vacances compte avec le salaire de ce mois.`,
  },
  'tip.inssMonths': { en: `12 months, vacation third included`, nl: `12 maanden, vakantiederde inbegrepen`, fr: `12 mois, tiers de vacances compris` },
  'tip.inss13': { en: `On the 13th salary`, nl: `Op het 13e loon`, fr: `Sur le 13e salaire` },
  'tip.deduct': {
    en: `In the yearly return you pick the better of two: the simplified discount, 20% of taxable pay up to R$ 17,640, or the legal deductions, here INSS + R$ 2,275.08 per dependent child.`,
    nl: `In de jaarlijkse aangifte kies je de beste van twee: de vereenvoudigde aftrek, 20% van het belastbare loon tot R$ 17.640, of de wettelijke aftrekposten, hier INSS + R$ 2.275,08 per kind ten laste.`,
    fr: `Dans la déclaration annuelle, vous choisissez le meilleur des deux : l'abattement simplifié, 20% du revenu imposable jusqu'à 17 640 R$, ou les déductions légales, ici l'INSS + 2 275,08 R$ par enfant à charge.`,
  },
  'tip.legal': {
    en: n => `INSS${n ? ` + ${n} dependent${n > 1 ? 's' : ''}` : ''}`,
    nl: n => `INSS${n ? ` + ${n} ten laste` : ''}`,
    fr: n => `INSS${n ? ` + ${n} à charge` : ''}`,
  },
  'tip.simp': { en: `Simplified discount`, nl: `Vereenvoudigde aftrek`, fr: `Abattement simplifié` },
  'tip.taxable': {
    en: calc => `The year's pay without the 13th, minus the better deduction${calc}.`,
    nl: calc => `Het jaarloon zonder het 13e loon, min de beste aftrek${calc}.`,
    fr: calc => `Le salaire de l'année hors 13e mois, moins la meilleure déduction${calc}.`,
  },
  'tip.ir': {
    en: `Withheld each month, then settled in the yearly return with the annual table (0 to 27.5%). New in 2026: a reduction that cancels the tax up to R$ 60,000 of taxable income a year and fades out at R$ 88,200. The 13th is taxed apart, with the monthly table and the same kind of reduction up to R$ 5,000.`,
    nl: `Elke maand ingehouden, daarna afgerekend in de jaarlijkse aangifte met de jaartabel (0 tot 27,5%). Nieuw in 2026: een verlaging die de belasting schrapt tot R$ 60.000 belastbaar inkomen per jaar en uitdooft bij R$ 88.200. Het 13e loon wordt apart belast, met de maandtabel en dezelfde soort verlaging tot R$ 5.000.`,
    fr: `Retenu chaque mois, puis régularisé dans la déclaration annuelle avec le barème annuel (0 à 27,5%). Nouveau en 2026 : une réduction qui annule l'impôt jusqu'à 60 000 R$ de revenu imposable par an et s'éteint à 88 200 R$. Le 13e est imposé à part, avec le barème mensuel et le même type de réduction jusqu'à 5 000 R$.`,
  },
  'tip.irTable': { en: `Annual table`, nl: `Jaartabel`, fr: `Barème annuel` },
  'tip.red': { en: `2026 reduction (Lei 15.270)`, nl: `Verlaging 2026 (Lei 15.270)`, fr: `Réduction 2026 (Lei 15.270)` },
  'tip.irYear': { en: `IRPF on the year's pay`, nl: `IRPF op het jaarloon`, fr: `IRPF sur le salaire de l'année` },
  'tip.ir13': { en: base => `IRPF on the 13th (base ${base})`, nl: base => `IRPF op het 13e loon (basis ${base})`, fr: base => `IRPF sur le 13e (base ${base})` },
  'tip.irJoint': { en: `Change from sharing the children`, nl: `Verschil door het delen van de kinderen`, fr: `Écart dû au partage des enfants` },
  'tip.fam': {
    en: (q, lim) => `Paid with the salary to employees earning up to ${lim} a month: ${q} a month per child under 14. Both parents get it if both qualify. Above the limit it stops at once.`,
    nl: (q, lim) => `Uitbetaald met het loon aan werknemers die tot ${lim} per maand verdienen: ${q} per maand per kind jonger dan 14. Beide ouders krijgen het als ze er allebei recht op hebben. Boven de grens valt het meteen weg.`,
    fr: (q, lim) => `Versé avec le salaire aux salariés gagnant jusqu'à ${lim} par mois : ${q} par mois par enfant de moins de 14 ans. Les deux parents le perçoivent s'ils y ont droit. Au-delà du plafond, il s'arrête net.`,
  },
  'tip.vatM': {
    en: `Brazil has no VAT yet. ICMS (17 to 23% by state), PIS/Cofins (9.25%), ISS and IPI sit inside prices, charged on a price that already includes them. The 2023 reform replaces them with IBS and CBS by 2033, at a reference rate the Treasury puts near 28%: used here as the default. Basic food is cheaper, so this is an upper bound.`,
    nl: `Brazilië heeft nog geen btw. ICMS (17 tot 23% volgens de staat), PIS/Cofins (9,25%), ISS en IPI zitten in de prijzen, berekend op een prijs die ze al bevat. De hervorming van 2023 vervangt ze tegen 2033 door IBS en CBS, met een referentietarief dat het ministerie rond 28% schat: hier de standaard. Basisvoeding is goedkoper, dus dit is een bovengrens.`,
    fr: `Le Brésil n'a pas encore de TVA. L'ICMS (17 à 23% selon l'État), le PIS/Cofins (9,25%), l'ISS et l'IPI sont inclus dans les prix, calculés sur un prix qui les contient déjà. La réforme de 2023 les remplace d'ici 2033 par l'IBS et la CBS, à un taux de référence que le ministère situe vers 28% : la valeur par défaut ici. Les produits de base sont moins taxés, c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − INSS − IRPF + salário-família. FGTS isn't included.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − INSS − IRPF + salário-família. FGTS is niet inbegrepen.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − INSS − IRPF + salário-família. Le FGTS n'est pas inclus.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `INSS <span class="num">20%</span>, RAT <span class="num">2%</span> (1 to 3% × FAP), third parties <span class="num">5.8%</span>: <span class="num">27.8%</span> of all pay, no ceiling. Simples Nacional firms: none of it on payroll.`,
      `FGTS <span class="num">8%</span> into the employee's own account.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `INSS <span class="num">20%</span>, RAT <span class="num">2%</span> (1 tot 3% × FAP), derden <span class="num">5,8%</span>: <span class="num">27,8%</span> van het hele loon, zonder plafond. Bedrijven in de Simples Nacional: niets daarvan op het loon.`,
      `FGTS <span class="num">8%</span> op de eigen rekening van de werknemer.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `INSS <span class="num">20%</span>, RAT <span class="num">2%</span> (1 à 3% × FAP), tiers <span class="num">5,8%</span> : <span class="num">27,8%</span> de tout le salaire, sans plafond. Entreprises au Simples Nacional : rien de cela sur la paie.`,
      `FGTS <span class="num">8%</span> sur le compte propre du salarié.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee INSS`, li: [`By slice of monthly pay: <span class="num">7.5%</span> to R$ 1,621.00, <span class="num">9%</span> to R$ 2,902.84, <span class="num">12%</span> to R$ 4,354.27, <span class="num">14%</span> to R$ 8,475.55. Nothing above.`] },
    nl: { h: `2 · Werknemers-INSS`, li: [`Per schijf van het maandloon: <span class="num">7,5%</span> tot R$ 1.621,00, <span class="num">9%</span> tot R$ 2.902,84, <span class="num">12%</span> tot R$ 4.354,27, <span class="num">14%</span> tot R$ 8.475,55. Niets daarboven.`] },
    fr: { h: `2 · INSS salariale`, li: [`Par tranche de salaire mensuel : <span class="num">7,5%</span> jusqu'à 1 621,00 R$, <span class="num">9%</span> jusqu'à 2 902,84 R$, <span class="num">12%</span> jusqu'à 4 354,27 R$, <span class="num">14%</span> jusqu'à 8 475,55 R$. Rien au-delà.`] },
  },
  'ref.ir': {
    en: br => ({ h: `3 · Income tax (IRPF), annual table`, li: [br, `Deduction per dependent R$ 2,275.08 a year, or the simplified discount of 20% up to R$ 17,640. The 13th uses the monthly table (exempt up to R$ 2,428.80, 27.5% above R$ 4,664.68).`] }),
    nl: br => ({ h: `3 · Inkomstenbelasting (IRPF), jaartabel`, li: [br, `Aftrek per persoon ten laste R$ 2.275,08 per jaar, of de vereenvoudigde aftrek van 20% tot R$ 17.640. Het 13e loon gebruikt de maandtabel (vrijgesteld tot R$ 2.428,80, 27,5% boven R$ 4.664,68).`] }),
    fr: br => ({ h: `3 · Impôt sur le revenu (IRPF), barème annuel`, li: [br, `Déduction par personne à charge 2 275,08 R$ par an, ou l'abattement simplifié de 20% jusqu'à 17 640 R$. Le 13e utilise le barème mensuel (exonéré jusqu'à 2 428,80 R$, 27,5% au-delà de 4 664,68 R$).`] }),
  },
  'ref.red': {
    en: { h: `4 · 2026 reduction (Lei 15.270/2025)`, li: [
      `Year: tax cancelled for taxable income up to <span class="num">R$ 60,000</span>; between that and R$ 88,200 the reduction is R$ 8,429.73 − 0.095575 × income.`,
      `13th and monthly withholding: tax cancelled up to <span class="num">R$ 5,000</span>; then R$ 978.62 − 0.133145 × income, gone at R$ 7,350.`,
      `From 2027 a minimum tax of up to 10% applies on total income above R$ 600,000 a year; on wages alone the IRPF already paid covers it.`,
    ] },
    nl: { h: `4 · Verlaging 2026 (Lei 15.270/2025)`, li: [
      `Jaar: belasting geschrapt voor belastbaar inkomen tot <span class="num">R$ 60.000</span>; tussen dat bedrag en R$ 88.200 is de verlaging R$ 8.429,73 − 0,095575 × inkomen.`,
      `13e loon en maandelijkse inhouding: belasting geschrapt tot <span class="num">R$ 5.000</span>; daarna R$ 978,62 − 0,133145 × inkomen, weg bij R$ 7.350.`,
      `Vanaf 2027 geldt een minimumbelasting tot 10% op het totale inkomen boven R$ 600.000 per jaar; op enkel loon dekt de al betaalde IRPF die.`,
    ] },
    fr: { h: `4 · Réduction 2026 (Lei 15.270/2025)`, li: [
      `Année : impôt annulé jusqu'à <span class="num">60 000 R$</span> de revenu imposable ; entre ce montant et 88 200 R$, la réduction vaut 8 429,73 R$ − 0,095575 × revenu.`,
      `13e et retenue mensuelle : impôt annulé jusqu'à <span class="num">5 000 R$</span> ; puis 978,62 R$ − 0,133145 × revenu, nulle à 7 350 R$.`,
      `Dès 2027, un impôt minimum jusqu'à 10% s'applique au revenu total au-delà de 600 000 R$ par an ; sur un salaire seul, l'IRPF déjà payé le couvre.`,
    ] },
  },
  'ref.fam': {
    en: { h: `5 · Salário-família`, li: [`<span class="num">R$ 67.54</span> a month per child under 14 for employees earning up to <span class="num">R$ 1,980.38</span>.`] },
    nl: { h: `5 · Salário-família`, li: [`<span class="num">R$ 67,54</span> per maand per kind jonger dan 14 voor werknemers die tot <span class="num">R$ 1.980,38</span> verdienen.`] },
    fr: { h: `5 · Salário-família`, li: [`<span class="num">67,54 R$</span> par mois par enfant de moins de 14 ans pour les salariés gagnant jusqu'à <span class="num">1 980,38 R$</span>.`] },
  },
  'ref.vat': {
    en: { h: `6 · Taxes on spending`, li: [
      `No VAT yet: ICMS, PIS/Cofins, ISS and IPI inside prices. Default <span class="num">28%</span>, near the reference rate of the coming IBS and CBS, applied to all of your net pay as if you spent it.`,
      `Tax inside a price = price × r / (100 + r): at 28% that's 28 / 128 = <span class="num">21.88%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Belastingen op uitgaven`, li: [
      `Nog geen btw: ICMS, PIS/Cofins, ISS en IPI zitten in de prijzen. Standaard <span class="num">28%</span>, dicht bij het referentietarief van de komende IBS en CBS, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Belasting in een prijs = prijs × r / (100 + r): bij 28% is dat 28 / 128 = <span class="num">21,88%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · Taxes sur les dépenses`, li: [
      `Pas encore de TVA : ICMS, PIS/Cofins, ISS et IPI inclus dans les prix. Par défaut <span class="num">28%</span>, proche du taux de référence de la future IBS et CBS, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `Taxe comprise dans un prix = prix × r / (100 + r) : à 28%, cela fait 28 / 128 = <span class="num">21,88%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and Congress`, li: [
      `President, Vice-President, ministers, deputies and senators: <span class="num">R$ 46,366.19</span> a month since February 2025, 13 times a year, the federal pay ceiling.`,
      `Taxed like any salary.`,
    ] },
    nl: { h: `7 · Regering en Congres`, li: [
      `President, vicepresident, ministers, kamerleden en senatoren: <span class="num">R$ 46.366,19</span> per maand sinds februari 2025, 13 keer per jaar, het federale loonplafond.`,
      `Belast zoals elk loon.`,
    ] },
    fr: { h: `7 · Gouvernement et Congrès`, li: [
      `Président, vice-président, ministres, députés et sénateurs : <span class="num">46 366,19 R$</span> par mois depuis février 2025, 13 fois par an, le plafond des rémunérations fédérales.`,
      `Imposés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Meal and transport vouchers (the employee pays up to 6% of pay for transport), health plans, profit sharing (PLR, taxed on its own table), Bolsa Família and the PIS/PASEP wage bonus, which depend on household income and work history.`,
      `Deductions for health, education and private pensions in the yearly return. The tax shown is the year's final IRPF after the return, not the monthly withholding.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Maaltijd- en vervoerbonnen (de werknemer betaalt tot 6% van het loon voor vervoer), zorgplannen, winstdeling (PLR, met een eigen tabel), Bolsa Família en de PIS/PASEP-loonbonus, die afhangen van het gezinsinkomen en de loopbaan.`,
      `Aftrekposten voor gezondheid, onderwijs en privépensioen in de jaarlijkse aangifte. De getoonde belasting is de definitieve IRPF van het jaar na de aangifte, niet de maandelijkse inhouding.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Tickets repas et bons de transport (le salarié paie jusqu'à 6% du salaire pour le transport), plans de santé, participation aux bénéfices (PLR, avec son propre barème), Bolsa Família et la prime salariale PIS/PASEP, qui dépendent des revenus du foyer et de la carrière.`,
      `Les déductions pour santé, éducation et retraite privée dans la déclaration annuelle. L'impôt affiché est l'IRPF définitif de l'année après déclaration, pas la retenue mensuelle.`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance, by state →`,
    nl: `Wat een erfgenaam betaalt op een erfenis, per staat →`,
    fr: `Ce que paie un héritier sur une succession, selon l'État →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and the Receita Federal decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en de Receita Federal zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et la Receita Federal font foi.`,
  },

  'src.irpf': { en: `Receita Federal: IRPF tables 2026`, nl: `Receita Federal: IRPF-tabellen 2026`, fr: `Receita Federal : barèmes IRPF 2026` },
  'src.lei': { en: `Lei 15.270/2025`, nl: `Lei 15.270/2025`, fr: `Lei 15.270/2025` },
  'src.inss': { en: `INSS: contribution table 2026`, nl: `INSS: bijdragetabel 2026`, fr: `INSS : barème des cotisations 2026` },
  'src.sf': { en: `INSS: salário-família 2026`, nl: `INSS: salário-família 2026`, fr: `INSS : salário-família 2026` },
  'src.pwc': { en: `PwC: Brazil, other taxes`, nl: `PwC: Brazilië, andere belastingen`, fr: `PwC : Brésil, autres impôts` },
  'src.l8212': { en: `Lei 8.212/1991: social security funding`, nl: `Lei 8.212/1991: financiering sociale zekerheid`, fr: `Lei 8.212/1991 : financement de la sécurité sociale` },
  'src.fgts': { en: `Lei 8.036/1990: FGTS`, nl: `Lei 8.036/1990: FGTS`, fr: `Lei 8.036/1990 : FGTS` },
  'src.simples': { en: `LC 123/2006: Simples Nacional`, nl: `LC 123/2006: Simples Nacional`, fr: `LC 123/2006 : Simples Nacional` },
  'src.ibge': { en: `IBGE PNAD: average income, Q2 2026`, nl: `IBGE PNAD: gemiddeld inkomen, K2 2026`, fr: `IBGE PNAD : revenu moyen, T2 2026` },
  'src.reform': { en: `LC 214/2025: IBS and CBS`, nl: `LC 214/2025: IBS en CBS`, fr: `LC 214/2025 : IBS et CBS` },
  'src.depPay': { en: `Chamber of Deputies: a deputy's pay`, nl: `Kamer van Afgevaardigden: loon van een kamerlid`, fr: `Chambre des députés : rémunération d'un député` },
  'src.govPay': { en: `Senate: federal pay schedule`, nl: `Senaat: federaal loonschema`, fr: `Sénat : barème de rémunération fédéral` },
};
