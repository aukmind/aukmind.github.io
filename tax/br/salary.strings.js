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
    en: `Living together, married or not. Each partner files their own tax return. Each child is counted by one of you, whichever saves the most tax.`,
    nl: `Samenwonend, getrouwd of niet. Elke partner doet zijn eigen aangifte. Elk kind telt bij één van jullie, bij wie het de meeste belasting bespaart.`,
    fr: `En couple, marié ou non. Chacun fait sa propre déclaration. Chaque enfant est déclaré par l'un des deux, celui qui économise le plus d'impôt.`,
  },
  employerSize: { en: `Employer's tax regime`, nl: `Belastingregime van de werkgever`, fr: `Régime fiscal de l'employeur` },
  'size.general': { en: `Standard`, nl: `Standaard`, fr: `Normal` },
  'size.simples': { en: `Simples Nacional`, nl: `Simples Nacional`, fr: `Simples Nacional` },
  vatStandard: {
    en: `(Brazil has no single rate: about 28% is the target rate of the new IBS/CBS taxes coming in)`,
    nl: `(Brazilië heeft geen enkel tarief: ongeveer 28% is het richttarief van de nieuwe IBS/CBS-belastingen die eraan komen)`,
    fr: `(le Brésil n'a pas de taux unique : environ 28% est le taux visé des nouvelles taxes IBS/CBS à venir)`,
  },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.min': { en: `Minister of State`, nl: `Minister`, fr: `Ministre d'État` },
  'minRole.pres': { en: `President`, nl: `President`, fr: `Président` },
  ministerHint: {
    en: `R$ 46,366.19 a month since February 2025, paid 13 times a year. Taxed like a salary. No FGTS (the savings account employers fill for workers).`,
    nl: `R$ 46.366,19 per maand sinds februari 2025, 13 keer per jaar uitbetaald. Belast zoals een loon. Geen FGTS (de spaarrekening die werkgevers voor werknemers vullen).`,
    fr: `46 366,19 R$ par mois depuis février 2025, versés 13 fois par an. Imposé comme un salaire. Pas de FGTS (le compte d'épargne que l'employeur alimente pour le salarié).`,
  },
  minSalaryHint: {
    en: `Yearly pay: the monthly amount × 13, with the Christmas bonus. By default, the amount set by law.`,
    nl: `Jaarloon: het maandbedrag × 13, met de kerstbonus. Standaard het bedrag dat de wet vastlegt.`,
    fr: `Rémunération annuelle : le montant mensuel × 13, avec le 13e mois. Par défaut, le montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: pay => `Congress sets one single pay for deputies, senators, the President, the Vice-President and ministers: ${pay} a month since February 2025. That is the same as a Supreme Court judge, and no federal employee may earn more. It is taxed like a salary, with income tax (IRPF) and social security (INSS). Here the State pays 20% employer social security and no FGTS.`,
    nl: pay => `Het Congres legt één enkel loon vast voor kamerleden, senatoren, de president, de vicepresident en ministers: ${pay} per maand sinds februari 2025. Dat is evenveel als een rechter van het Hooggerechtshof, en geen enkele federale werknemer mag meer verdienen. Het wordt belast zoals een loon, met inkomstenbelasting (IRPF) en sociale zekerheid (INSS). Hier betaalt de staat 20% sociale zekerheid als werkgever en geen FGTS.`,
    fr: pay => `Le Congrès fixe une seule paie pour les députés, les sénateurs, le Président, le vice-président et les ministres : ${pay} par mois depuis février 2025. C'est autant qu'un juge de la Cour suprême, et aucun agent fédéral ne peut gagner plus. Elle est imposée comme un salaire, avec l'impôt sur le revenu (IRPF) et la sécurité sociale (INSS). Ici, l'État paie 20% de sécurité sociale patronale et pas de FGTS.`,
  },

  // Politicians on the chart
  'stat.pres': { en: `President`, nl: `President`, fr: `Président` },
  'stat.min': { en: `Minister of State`, nl: `Minister`, fr: `Ministre d'État` },
  'stat.mp': { en: `Deputy or senator`, nl: `Kamerlid of senator`, fr: `Député ou sénateur` },
  'pol.stat.pres': { en: `Same pay as a minister or deputy`, nl: `Zelfde loon als een minister of kamerlid`, fr: `Même rémunération qu'un ministre ou un député` },
  'pol.stat.min': { en: `R$ 46,366.19 a month, × 13`, nl: `R$ 46.366,19 per maand, × 13`, fr: `46 366,19 R$ par mois, × 13` },
  'pol.stat.mp': { en: `R$ 46,366.19 a month, × 13, without office allowances`, nl: `R$ 46.366,19 per maand, × 13, zonder ambtsvergoedingen`, fr: `46 366,19 R$ par mois, × 13, hors frais de mandat` },
  'polNote.stat': {
    en: `Taxed like any salary. The face sits at their gross pay.`,
    nl: `Belast zoals elk loon. Het hoofdje staat op hun brutoloon.`,
    fr: `Imposé comme tout salaire. La tête est placée à leur salaire brut.`,
  },
  'polTipNote.pres': {
    en: `Luiz Inácio Lula da Silva. Same R$ 46,366.19 a month as ministers and members of Congress, plus the official residence and staff.`,
    nl: `Luiz Inácio Lula da Silva. Dezelfde R$ 46.366,19 per maand als ministers en parlementsleden, plus de ambtswoning en personeel.`,
    fr: `Luiz Inácio Lula da Silva. Les mêmes 46 366,19 R$ par mois que les ministres et les parlementaires, plus la résidence officielle et le personnel.`,
  },
  'polTipNote.min': {
    en: `R$ 46,366.19 a month, the same for every minister. A minister who is also a civil servant can't combine both pays above the federal maximum.`,
    nl: `R$ 46.366,19 per maand, voor elke minister gelijk. Een minister die ook ambtenaar is, kan beide lonen niet samentellen boven het federale maximum.`,
    fr: `46 366,19 R$ par mois, pareil pour tous les ministres. Un ministre aussi fonctionnaire ne peut pas cumuler les deux paies au-delà du maximum fédéral.`,
  },
  'polTipNote.mp': {
    en: `R$ 46,366.19 a month for deputies and senators, as listed on the Chamber's pages for each deputy in 2026. Money for housing, an office and staff comes on top and is not counted.`,
    nl: `R$ 46.366,19 per maand voor kamerleden en senatoren, zoals vermeld op de pagina's van de Kamer per kamerlid in 2026. Geld voor woning, kantoor en personeel komt erbovenop en telt niet mee.`,
    fr: `46 366,19 R$ par mois pour les députés et sénateurs, comme indiqué sur la page de chaque député de la Chambre en 2026. L'argent pour le logement, le bureau et le personnel s'ajoute et n'est pas compté.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. Pay is yearly gross with the 13th month, shown on the chart as the yearly amount divided by the months paid. Brazilian politicians are taxed like employees, so each one sits at their own gross pay. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Het loon is jaarlijks bruto met de 13e maand, op de grafiek getoond als jaarbedrag gedeeld door het aantal betaalde maanden. Braziliaanse politici worden belast als werknemers, dus iedereen staat op zijn eigen brutoloon. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La paie est un brut annuel avec le 13e mois, placé sur le graphique en montant annuel divisé par les mois payés. Les politiciens brésiliens sont imposés comme des salariés : chacun est placé à son propre brut. Sources : ${links}.`,
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
    en: (a, b, sf) => `Since 2026, a new law (Lei 15.270) removes income tax on taxable pay up to R$ 5,000 a month (R$ 60,000 a year). From the minimum wage of ${a}${b ? ` up to ${b}` : ''}, only social security (INSS, 7.5% to 14%) comes off your pay. Your employer still pays about 28% on top, plus 8% into your FGTS savings account. The holiday bonus (a third of a month's pay) pushes the year's taxable pay over R$ 60,000 a little before R$ 5,000 a month.${sf ? ` The child benefit (salário-família) stops all at once above ${sf} a month: earning one real more loses the payment for every child.` : ''}`,
    nl: (a, b, sf) => `Sinds 2026 schrapt een nieuwe wet (Lei 15.270) de inkomstenbelasting op belastbaar loon tot R$ 5.000 per maand (R$ 60.000 per jaar). Van het minimumloon van ${a}${b ? ` tot ${b}` : ''} gaat er enkel sociale zekerheid (INSS, 7,5% tot 14%) van je loon af. Je werkgever betaalt wel ongeveer 28% bovenop, plus 8% op je FGTS-spaarrekening. Door de vakantiebonus (een derde van een maandloon) komt het belastbare jaarloon al iets onder R$ 5.000 per maand boven R$ 60.000.${sf ? ` De kinderbijslag (salário-família) valt in één keer weg boven ${sf} per maand: één real meer verdienen kost de bijslag voor elk kind.` : ''}`,
    fr: (a, b, sf) => `Depuis 2026, une nouvelle loi (Lei 15.270) supprime l'impôt sur le revenu jusqu'à 5 000 R$ de salaire imposable par mois (60 000 R$ par an). Du salaire minimum de ${a}${b ? ` jusqu'à ${b}` : ''}, seule la sécurité sociale (INSS, 7,5% à 14%) est retirée de votre paie. L'employeur paie quand même environ 28% en plus, plus 8% sur votre compte d'épargne FGTS. La prime de vacances (un tiers d'un mois de salaire) fait passer le revenu imposable de l'année au-dessus de 60 000 R$ un peu avant 5 000 R$ par mois.${sf ? ` L'allocation pour enfant (salário-família) s'arrête d'un coup au-delà de ${sf} par mois : gagner un real de plus fait perdre l'allocation de chaque enfant.` : ''}`,
  },
  topTitle: {
    en: top => `Why the steep stretch up to ${top}?`,
    nl: top => `Waarom het steile stuk tot ${top}?`,
    fr: top => `Pourquoi la pente raide jusqu'à ${top} ?`,
  },
  topBody: {
    en: (top, ceil) => `Above R$ 60,000 a year, the 2026 tax cut shrinks by 9.56 centavos for each extra real, until it is gone at R$ 88,200 (about ${top}). In that zone each extra real pays the normal rate plus the lost tax cut, so it costs more. Above it, each extra real pays 27.5% income tax. Social security stops growing once monthly pay passes its maximum of ${ceil}.`,
    nl: (top, ceil) => `Boven R$ 60.000 per jaar krimpt de belastingverlaging van 2026 met 9,56 centavos per extra real, tot ze weg is bij R$ 88.200 (ongeveer ${top}). In die zone betaalt elke extra real het gewone tarief plus de verloren verlaging, dus kost hij meer. Daarboven betaalt elke extra real 27,5% inkomstenbelasting. De sociale zekerheid stijgt niet meer zodra het maandloon het maximum van ${ceil} passeert.`,
    fr: (top, ceil) => `Au-delà de 60 000 R$ par an, la baisse d'impôt de 2026 fond de 9,56 centavos par real en plus, jusqu'à disparaître à 88 200 R$ (environ ${top}). Dans cette zone, chaque real en plus paie le taux normal plus la baisse perdue : il coûte donc plus. Au-delà, chaque real en plus paie 27,5% d'impôt. La sécurité sociale cesse de monter quand le salaire mensuel dépasse son maximum de ${ceil}.`,
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
    en: `12 monthly salaries, without the 13th month and without the holiday bonus. Only for comparison: every employee with a formal contract (CLT) gets both.`,
    nl: `12 maandlonen, zonder 13e maand en zonder vakantiebonus. Enkel ter vergelijking: elke werknemer met een formeel contract (CLT) krijgt beide.`,
    fr: `12 salaires mensuels, sans 13e mois ni prime de vacances. Pour comparaison seulement : tout salarié sous contrat formel (CLT) a droit aux deux.`,
  },
  'tip.f13': {
    en: `12 monthly salaries plus a 13th one, paid in November and December. The 13th has its own social security and its own income tax, taken straight from it with the monthly table.`,
    nl: `12 maandlonen plus een 13e, betaald in november en december. Het 13e loon heeft zijn eigen sociale zekerheid en eigen inkomstenbelasting, er meteen van afgehouden met de maandtabel.`,
    fr: `12 salaires mensuels plus un 13e, versé en novembre et décembre. Le 13e a sa propre sécurité sociale et son propre impôt, retenus directement avec le barème mensuel.`,
  },
  'tip.f1333': {
    en: `The normal year for a formal employee: 12 salaries, the 13th, and a holiday bonus of one third of a month's pay, guaranteed by the Constitution. The bonus is taxed with the year's pay; the 13th is taxed on its own.`,
    nl: `Het gewone jaar voor een formele werknemer: 12 lonen, de 13e maand, en een vakantiebonus van een derde maandloon, gewaarborgd door de grondwet. De bonus wordt belast met het jaarloon; de 13e maand apart.`,
    fr: `L'année normale d'un salarié formel : 12 salaires, le 13e, et une prime de vacances d'un tiers de mois, garantie par la Constitution. La prime est imposée avec le salaire de l'année ; le 13e à part.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `In Brazil each person is taxed alone. Only children are shared: each one counts for one parent, and the couple picks the split that costs the least tax. Here, your tax is what the couple pays minus what your partner would pay if they counted all the children.`,
    nl: `In Brazilië wordt elke persoon apart belast. Alleen de kinderen worden gedeeld: elk kind telt bij één ouder, en het koppel kiest de verdeling met de minste belasting. Hier is jouw belasting wat het koppel betaalt min wat je partner zou betalen met alle kinderen ten laste.`,
    fr: `Au Brésil, chacun est imposé seul. Seuls les enfants sont partagés : chacun compte pour un parent, et le couple choisit la répartition la moins chère. Ici, votre impôt est ce que paie le couple moins ce que paierait votre partenaire avec tous les enfants à charge.`,
  },
  'tip.size': {
    en: `Most employers pay 20% for social security (INSS), about 2% for work accident insurance (RAT: 1 to 3%, times a factor based on the firm's record), and about 5.8% for training and support bodies (SESC/SENAC or SESI/SENAI, SEBRAE, INCRA, education). Small firms in the Simples Nacional system pay these inside one monthly tax on their sales instead (annexes I, II, III and V), so a salary only costs them the 8% FGTS.`,
    nl: `De meeste werkgevers betalen 20% voor sociale zekerheid (INSS), ongeveer 2% voor de verzekering arbeidsongevallen (RAT: 1 tot 3%, maal een factor op basis van het verleden van het bedrijf), en ongeveer 5,8% voor opleidings- en steunorganisaties (SESC/SENAC of SESI/SENAI, SEBRAE, INCRA, onderwijs). Kleine bedrijven in het Simples Nacional-systeem betalen die in één maandelijkse belasting op hun omzet (bijlagen I, II, III en V), dus kost een loon hen enkel de 8% FGTS.`,
    fr: `La plupart des employeurs paient 20% de sécurité sociale (INSS), environ 2% d'assurance accidents du travail (RAT : 1 à 3%, fois un facteur selon l'historique de l'entreprise), et environ 5,8% pour des organismes de formation et d'appui (SESC/SENAC ou SESI/SENAI, SEBRAE, INCRA, éducation). Les petites entreprises au Simples Nacional les paient à la place dans un impôt mensuel unique sur leurs ventes (annexes I, II, III et V) : un salaire ne leur coûte donc que les 8% de FGTS.`,
  },
  'tip.costShort': { en: `Gross salary plus the employer's social security, accident insurance, training levies and FGTS.`, nl: `Brutoloon plus de sociale zekerheid van de werkgever, de ongevallenverzekering, de opleidingsbijdragen en FGTS.`, fr: `Salaire brut plus la sécurité sociale patronale, l'assurance accidents, les contributions formation et le FGTS.` },
  'tip.er': {
    en: `What your employer pays on top of all your pay, 13th month and holiday bonus included, with no upper limit: 20% social security, about 2% accident insurance and about 5.8% for training bodies. Firms in Simples Nacional pay none of this on salaries.`,
    nl: `Wat je werkgever betaalt bovenop je hele loon, 13e maand en vakantiebonus inbegrepen, zonder bovengrens: 20% sociale zekerheid, ongeveer 2% ongevallenverzekering en ongeveer 5,8% voor opleidingsorganisaties. Bedrijven in de Simples Nacional betalen daarvan niets op lonen.`,
    fr: `Ce que l'employeur paie en plus de tout votre salaire, 13e mois et prime de vacances compris, sans plafond : 20% de sécurité sociale, environ 2% d'assurance accidents et environ 5,8% pour les organismes de formation. Les entreprises au Simples Nacional n'en paient rien sur les salaires.`,
  },
  'tip.fgts': {
    en: `Your employer puts 8% of all your pay into a savings account in your name at the bank Caixa. You can't spend it freely. You get it if you are fired without a valid reason (plus a 40% penalty paid by the employer), when you retire, buy a home or fall seriously ill. So it is part of what you cost, but it is neither tax nor take-home pay.`,
    nl: `Je werkgever stort 8% van je hele loon op een spaarrekening op jouw naam bij de bank Caixa. Je kunt het niet vrij uitgeven. Je krijgt het als je zonder geldige reden ontslagen wordt (plus een boete van 40% die de werkgever betaalt), bij je pensioen, als je een woning koopt of ernstig ziek wordt. Het hoort dus bij wat je kost, maar is geen belasting en geen nettoloon.`,
    fr: `L'employeur verse 8% de tout votre salaire sur un compte d'épargne à votre nom à la banque Caixa. Vous ne pouvez pas le dépenser librement. Vous le touchez si vous êtes licencié sans motif valable (plus une pénalité de 40% payée par l'employeur), à la retraite, pour acheter un logement ou en cas de maladie grave. Il fait donc partie de ce que vous coûtez, sans être un impôt ni du salaire net.`,
  },
  'tip.ee': {
    en: `Taken from your pay each month, slice by slice: 7.5% up to R$ 1,621, 9% up to R$ 2,902.84, 12% up to R$ 4,354.27, 14% up to R$ 8,475.55. Nothing above that, so at most R$ 988.09 a month. The 13th month pays its own; the holiday bonus counts with that month's pay.`,
    nl: `Elke maand van je loon afgehouden, schijf per schijf: 7,5% tot R$ 1.621, 9% tot R$ 2.902,84, 12% tot R$ 4.354,27, 14% tot R$ 8.475,55. Niets daarboven, dus hoogstens R$ 988,09 per maand. De 13e maand betaalt apart; de vakantiebonus telt mee met het loon van die maand.`,
    fr: `Retirée de votre paie chaque mois, tranche par tranche : 7,5% jusqu'à 1 621 R$, 9% jusqu'à 2 902,84 R$, 12% jusqu'à 4 354,27 R$, 14% jusqu'à 8 475,55 R$. Rien au-delà, donc au plus 988,09 R$ par mois. Le 13e paie à part ; la prime de vacances compte avec le salaire de ce mois.`,
  },
  'tip.inssMonths': { en: `12 months, holiday bonus included`, nl: `12 maanden, vakantiebonus inbegrepen`, fr: `12 mois, prime de vacances comprise` },
  'tip.inss13': { en: `On the 13th salary`, nl: `Op het 13e loon`, fr: `Sur le 13e salaire` },
  'tip.deduct': {
    en: `In the yearly tax return you pick whichever lowers your tax more: a flat 20% off taxable pay (at most R$ 17,640), or your real costs. Here that means social security plus R$ 2,275.08 per child you support.`,
    nl: `In de jaarlijkse aangifte kies je wat je belasting het meest verlaagt: een vaste 20% van het belastbare loon (hoogstens R$ 17.640), of je echte kosten. Hier is dat sociale zekerheid plus R$ 2.275,08 per kind ten laste.`,
    fr: `Dans la déclaration annuelle, vous choisissez ce qui baisse le plus votre impôt : 20% forfaitaires du revenu imposable (au plus 17 640 R$), ou vos frais réels. Ici, cela veut dire la sécurité sociale plus 2 275,08 R$ par enfant à charge.`,
  },
  'tip.legal': {
    en: n => `INSS${n ? ` + ${n} dependent${n > 1 ? 's' : ''}` : ''}`,
    nl: n => `INSS${n ? ` + ${n} ten laste` : ''}`,
    fr: n => `INSS${n ? ` + ${n} à charge` : ''}`,
  },
  'tip.simp': { en: `Flat 20% discount`, nl: `Vaste aftrek van 20%`, fr: `Abattement forfaitaire de 20%` },
  'tip.taxable': {
    en: calc => `The part of your pay that is taxed: the year's pay without the 13th month, minus whichever deduction is better${calc}.`,
    nl: calc => `Het deel van je loon dat belast wordt: het jaarloon zonder de 13e maand, min de beste aftrek${calc}.`,
    fr: calc => `La part de votre paie qui est imposée : le salaire de l'année sans le 13e mois, moins la meilleure déduction${calc}.`,
  },
  'tip.ir': {
    en: `Taken from your pay each month, then corrected in the yearly tax return using the yearly table (0 to 27.5%). New in 2026: a tax cut that wipes out the tax up to R$ 60,000 of taxable income a year, then fades away until R$ 88,200. The 13th month is taxed on its own, with the monthly table and the same kind of cut up to R$ 5,000.`,
    nl: `Elke maand van je loon afgehouden, daarna rechtgezet in de jaarlijkse aangifte met de jaartabel (0 tot 27,5%). Nieuw in 2026: een belastingverlaging die de belasting wegveegt tot R$ 60.000 belastbaar inkomen per jaar, en dan afneemt tot R$ 88.200. De 13e maand wordt apart belast, met de maandtabel en dezelfde soort verlaging tot R$ 5.000.`,
    fr: `Retenu sur votre paie chaque mois, puis corrigé dans la déclaration annuelle avec le barème annuel (0 à 27,5%). Nouveau en 2026 : une baisse qui efface l'impôt jusqu'à 60 000 R$ de revenu imposable par an, puis diminue jusqu'à 88 200 R$. Le 13e est imposé à part, avec le barème mensuel et le même type de baisse jusqu'à 5 000 R$.`,
  },
  'tip.irTable': { en: `Yearly table`, nl: `Jaartabel`, fr: `Barème annuel` },
  'tip.red': { en: `2026 tax cut (Lei 15.270)`, nl: `Belastingverlaging 2026 (Lei 15.270)`, fr: `Baisse d'impôt 2026 (Lei 15.270)` },
  'tip.irYear': { en: `IRPF on the year's pay`, nl: `IRPF op het jaarloon`, fr: `IRPF sur le salaire de l'année` },
  'tip.ir13': { en: base => `IRPF on the 13th (base ${base})`, nl: base => `IRPF op het 13e loon (basis ${base})`, fr: base => `IRPF sur le 13e (base ${base})` },
  'tip.irJoint': { en: `Difference from splitting the children`, nl: `Verschil door het verdelen van de kinderen`, fr: `Écart dû à la répartition des enfants` },
  'tip.fam': {
    en: (q, lim) => `A child benefit paid with the salary to employees who earn up to ${lim} a month: ${q} a month for each child under 14. If both parents qualify, both get it. Above the limit it stops all at once.`,
    nl: (q, lim) => `Een kinderbijslag uitbetaald met het loon aan werknemers die tot ${lim} per maand verdienen: ${q} per maand voor elk kind jonger dan 14. Komen beide ouders in aanmerking, dan krijgen ze het allebei. Boven de grens valt het in één keer weg.`,
    fr: (q, lim) => `Une allocation pour enfant versée avec le salaire aux salariés qui gagnent jusqu'à ${lim} par mois : ${q} par mois pour chaque enfant de moins de 14 ans. Si les deux parents y ont droit, les deux la touchent. Au-delà du plafond, elle s'arrête d'un coup.`,
  },
  'tip.vatM': {
    en: `Brazil has no VAT yet. Instead, several taxes are hidden in prices: ICMS (17 to 23% depending on the state), PIS/Cofins (9.25%), ISS and IPI, each charged on a price that already includes them. A 2023 reform replaces them with two new taxes, IBS and CBS, by 2033. The government expects a combined rate near 28%, used here by default. Basic food is taxed less, so this is the most it could be.`,
    nl: `Brazilië heeft nog geen btw. In de plaats zitten er verschillende belastingen verstopt in de prijzen: ICMS (17 tot 23% naargelang de staat), PIS/Cofins (9,25%), ISS en IPI, elk berekend op een prijs die ze al bevat. Een hervorming van 2023 vervangt ze tegen 2033 door twee nieuwe belastingen, IBS en CBS. De overheid verwacht samen ongeveer 28%, hier de standaard. Basisvoeding wordt minder belast, dus dit is het maximum.`,
    fr: `Le Brésil n'a pas encore de TVA. À la place, plusieurs taxes sont cachées dans les prix : l'ICMS (17 à 23% selon l'État), le PIS/Cofins (9,25%), l'ISS et l'IPI, chacun calculé sur un prix qui les contient déjà. Une réforme de 2023 les remplace d'ici 2033 par deux nouvelles taxes, l'IBS et la CBS. L'État prévoit un taux combiné proche de 28%, pris ici par défaut. Les produits de base sont moins taxés : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross pay minus social security (INSS), minus income tax (IRPF), plus child benefit if you get it. FGTS goes to your savings account and is not included.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon min sociale zekerheid (INSS), min inkomstenbelasting (IRPF), plus kinderbijslag als je die krijgt. FGTS gaat naar je spaarrekening en zit er niet in.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Salaire brut moins la sécurité sociale (INSS), moins l'impôt sur le revenu (IRPF), plus l'allocation pour enfant si vous la touchez. Le FGTS va sur votre compte d'épargne et n'est pas inclus.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Social security (INSS) <span class="num">20%</span>, accident insurance (RAT) <span class="num">2%</span> (1 to 3% × a factor for the firm, FAP), training bodies <span class="num">5.8%</span>: <span class="num">27.8%</span> of all pay, no upper limit. Firms in Simples Nacional: none of this on salaries.`,
      `FGTS <span class="num">8%</span>, paid into the employee's own savings account.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Sociale zekerheid (INSS) <span class="num">20%</span>, ongevallenverzekering (RAT) <span class="num">2%</span> (1 tot 3% × een factor voor het bedrijf, FAP), opleidingsorganisaties <span class="num">5,8%</span>: <span class="num">27,8%</span> van het hele loon, zonder bovengrens. Bedrijven in de Simples Nacional: niets daarvan op lonen.`,
      `FGTS <span class="num">8%</span>, gestort op de eigen spaarrekening van de werknemer.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Sécurité sociale (INSS) <span class="num">20%</span>, assurance accidents (RAT) <span class="num">2%</span> (1 à 3% × un facteur propre à l'entreprise, FAP), organismes de formation <span class="num">5,8%</span> : <span class="num">27,8%</span> de tout le salaire, sans plafond. Entreprises au Simples Nacional : rien de cela sur les salaires.`,
      `FGTS <span class="num">8%</span>, versé sur le compte d'épargne du salarié.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee social security (INSS)`, li: [`Each slice of monthly pay has its own rate: <span class="num">7.5%</span> up to R$ 1,621.00, <span class="num">9%</span> up to R$ 2,902.84, <span class="num">12%</span> up to R$ 4,354.27, <span class="num">14%</span> up to R$ 8,475.55. Nothing above.`] },
    nl: { h: `2 · Sociale zekerheid werknemer (INSS)`, li: [`Elke schijf van het maandloon heeft haar eigen tarief: <span class="num">7,5%</span> tot R$ 1.621,00, <span class="num">9%</span> tot R$ 2.902,84, <span class="num">12%</span> tot R$ 4.354,27, <span class="num">14%</span> tot R$ 8.475,55. Niets daarboven.`] },
    fr: { h: `2 · Sécurité sociale salariale (INSS)`, li: [`Chaque tranche du salaire mensuel a son propre taux : <span class="num">7,5%</span> jusqu'à 1 621,00 R$, <span class="num">9%</span> jusqu'à 2 902,84 R$, <span class="num">12%</span> jusqu'à 4 354,27 R$, <span class="num">14%</span> jusqu'à 8 475,55 R$. Rien au-delà.`] },
  },
  'ref.ir': {
    en: br => ({ h: `3 · Income tax (IRPF), yearly table`, li: [br, `R$ 2,275.08 a year off per child or other dependant, or instead a flat 20% off, up to R$ 17,640. The 13th month uses the monthly table (no tax up to R$ 2,428.80, 27.5% above R$ 4,664.68).`] }),
    nl: br => ({ h: `3 · Inkomstenbelasting (IRPF), jaartabel`, li: [br, `R$ 2.275,08 per jaar aftrek per kind of andere persoon ten laste, of in de plaats een vaste 20% aftrek, tot R$ 17.640. De 13e maand gebruikt de maandtabel (geen belasting tot R$ 2.428,80, 27,5% boven R$ 4.664,68).`] }),
    fr: br => ({ h: `3 · Impôt sur le revenu (IRPF), barème annuel`, li: [br, `2 275,08 R$ par an de déduction par enfant ou autre personne à charge, ou à la place 20% forfaitaires, jusqu'à 17 640 R$. Le 13e utilise le barème mensuel (pas d'impôt jusqu'à 2 428,80 R$, 27,5% au-delà de 4 664,68 R$).`] }),
  },
  'ref.red': {
    en: { h: `4 · 2026 tax cut (Lei 15.270/2025)`, li: [
      `Yearly: no tax on taxable income up to <span class="num">R$ 60,000</span>. Between that and R$ 88,200 the cut is R$ 8,429.73 − 0.095575 × income.`,
      `13th month and monthly payroll: no tax up to <span class="num">R$ 5,000</span>. Then the cut is R$ 978.62 − 0.133145 × income, gone at R$ 7,350.`,
      `From 2027, people with total income above R$ 600,000 a year must pay at least up to 10%. For someone living on wages, the income tax already paid covers it.`,
    ] },
    nl: { h: `4 · Belastingverlaging 2026 (Lei 15.270/2025)`, li: [
      `Per jaar: geen belasting op belastbaar inkomen tot <span class="num">R$ 60.000</span>. Tussen dat bedrag en R$ 88.200 is de verlaging R$ 8.429,73 − 0,095575 × inkomen.`,
      `13e maand en maandelijkse inhouding: geen belasting tot <span class="num">R$ 5.000</span>. Daarna is de verlaging R$ 978,62 − 0,133145 × inkomen, weg bij R$ 7.350.`,
      `Vanaf 2027 moet wie meer dan R$ 600.000 per jaar verdient minstens tot 10% betalen. Voor wie van een loon leeft, dekt de al betaalde inkomstenbelasting dat.`,
    ] },
    fr: { h: `4 · Baisse d'impôt 2026 (Lei 15.270/2025)`, li: [
      `À l'année : pas d'impôt jusqu'à <span class="num">60 000 R$</span> de revenu imposable. Entre ce montant et 88 200 R$, la baisse vaut 8 429,73 R$ − 0,095575 × revenu.`,
      `13e mois et retenue mensuelle : pas d'impôt jusqu'à <span class="num">5 000 R$</span>. Ensuite la baisse vaut 978,62 R$ − 0,133145 × revenu, nulle à 7 350 R$.`,
      `Dès 2027, qui gagne plus de 600 000 R$ par an au total doit payer au moins jusqu'à 10%. Pour qui vit d'un salaire, l'impôt déjà payé couvre cela.`,
    ] },
  },
  'ref.fam': {
    en: { h: `5 · Child benefit (salário-família)`, li: [`<span class="num">R$ 67.54</span> a month per child under 14, for employees earning up to <span class="num">R$ 1,980.38</span>.`] },
    nl: { h: `5 · Kinderbijslag (salário-família)`, li: [`<span class="num">R$ 67,54</span> per maand per kind jonger dan 14, voor werknemers die tot <span class="num">R$ 1.980,38</span> verdienen.`] },
    fr: { h: `5 · Allocation pour enfant (salário-família)`, li: [`<span class="num">67,54 R$</span> par mois par enfant de moins de 14 ans, pour les salariés qui gagnent jusqu'à <span class="num">1 980,38 R$</span>.`] },
  },
  'ref.vat': {
    en: { h: `6 · Taxes on spending`, li: [
      `No VAT yet: ICMS, PIS/Cofins, ISS and IPI are hidden in prices. By default <span class="num">28%</span>, close to the expected rate of the new IBS and CBS, applied to all of your net pay as if you spent all of it.`,
      `The tax hidden in a price = price × r / (100 + r). At 28% that is 28 / 128 = <span class="num">21.88%</span> of what you pay.`,
    ] },
    nl: { h: `6 · Belastingen op uitgaven`, li: [
      `Nog geen btw: ICMS, PIS/Cofins, ISS en IPI zitten verstopt in de prijzen. Standaard <span class="num">28%</span>, dicht bij het verwachte tarief van de nieuwe IBS en CBS, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `De belasting verstopt in een prijs = prijs × r / (100 + r). Bij 28% is dat 28 / 128 = <span class="num">21,88%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · Taxes sur les dépenses`, li: [
      `Pas encore de TVA : ICMS, PIS/Cofins, ISS et IPI sont cachés dans les prix. Par défaut <span class="num">28%</span>, proche du taux attendu des nouvelles IBS et CBS, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `La taxe cachée dans un prix = prix × r / (100 + r). À 28%, cela fait 28 / 128 = <span class="num">21,88%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and Congress`, li: [
      `President, Vice-President, ministers, deputies and senators: <span class="num">R$ 46,366.19</span> a month since February 2025, 13 times a year. No federal employee may earn more.`,
      `Taxed like any salary.`,
    ] },
    nl: { h: `7 · Regering en Congres`, li: [
      `President, vicepresident, ministers, kamerleden en senatoren: <span class="num">R$ 46.366,19</span> per maand sinds februari 2025, 13 keer per jaar. Geen enkele federale werknemer mag meer verdienen.`,
      `Belast zoals elk loon.`,
    ] },
    fr: { h: `7 · Gouvernement et Congrès`, li: [
      `Président, vice-président, ministres, députés et sénateurs : <span class="num">46 366,19 R$</span> par mois depuis février 2025, 13 fois par an. Aucun agent fédéral ne peut gagner plus.`,
      `Imposés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Meal and transport vouchers (the employee pays up to 6% of pay for transport), health plans, profit sharing (PLR, which has its own tax table), Bolsa Família and the PIS/PASEP yearly wage bonus, which depend on household income and work history.`,
      `Health, school and private pension costs you can deduct in the yearly tax return. The tax shown is the final income tax for the year, not what is taken from each payslip.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Maaltijd- en vervoerbonnen (de werknemer betaalt tot 6% van het loon voor vervoer), zorgplannen, winstdeling (PLR, met een eigen belastingtabel), Bolsa Família en de jaarlijkse PIS/PASEP-loonbonus, die afhangen van het gezinsinkomen en de loopbaan.`,
      `Kosten voor gezondheid, school en privépensioen die je in de jaarlijkse aangifte kunt aftrekken. De getoonde belasting is de uiteindelijke inkomstenbelasting van het jaar, niet wat van elke loonstrook gaat.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Tickets repas et bons de transport (le salarié paie jusqu'à 6% du salaire pour le transport), plans de santé, participation aux bénéfices (PLR, avec son propre barème), Bolsa Família et la prime salariale annuelle PIS/PASEP, qui dépendent des revenus du foyer et de la carrière.`,
      `Les frais de santé, d'école et de retraite privée déductibles dans la déclaration annuelle. L'impôt affiché est l'impôt final de l'année, pas ce qui est retenu sur chaque fiche de paie.`,
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

  // Known gaps and caveats
  'gap.noCheck': {
    en: `Researched without searching the web, and no take-home pay was checked against an official or payroll calculator.`,
    nl: `Opgezocht zonder op het web te zoeken, en geen enkel nettoloon is nagerekend met een officiële rekentool of een loonrekentool.`,
    fr: `Recherché sans recherche web, et aucun salaire net n'a été vérifié avec un simulateur officiel ou de paie.`,
  },
  'gap.rat': {
    en: `Work accident insurance (RAT) is set at 2%, from memory. The real rate is 1 to 3% depending on how risky the work is, times a factor of 0.5 to 2 based on the firm's accident record.`,
    nl: `De verzekering arbeidsongevallen (RAT) staat op 2%, uit het geheugen. Het echte tarief is 1 tot 3% naargelang hoe riskant het werk is, maal een factor van 0,5 tot 2 op basis van de ongevallen in het bedrijf.`,
    fr: `L'assurance accidents du travail (RAT) est fixée à 2%, de mémoire. Le vrai taux va de 1 à 3% selon le risque du métier, fois un facteur de 0,5 à 2 selon les accidents dans l'entreprise.`,
  },
  'gap.third': {
    en: `The training levies are 5.8%, the rate for a shop or trading firm, from memory. Industry, farming and other sectors pay a different mix.`,
    nl: `De opleidingsbijdragen zijn 5,8%, het tarief voor een winkel of handelszaak, uit het geheugen. Industrie, landbouw en andere sectoren betalen een andere mix.`,
    fr: `Les contributions formation sont de 5,8%, le taux d'un commerce, de mémoire. L'industrie, l'agriculture et d'autres secteurs paient un autre mélange.`,
  },
  'gap.simples': {
    en: `Here a Simples Nacional employer pays no tax on salaries. Its tax on sales is not counted. Firms in annex IV, which still pay 20% social security, are not covered.`,
    nl: `Hier betaalt een werkgever in de Simples Nacional geen belasting op lonen. Zijn belasting op de omzet telt niet mee. Bedrijven in bijlage IV, die toch 20% sociale zekerheid betalen, vallen erbuiten.`,
    fr: `Ici, un employeur au Simples Nacional ne paie rien sur les salaires. Son impôt sur les ventes n'est pas compté. Les entreprises de l'annexe IV, qui paient quand même 20% de sécurité sociale, ne sont pas couvertes.`,
  },
  'gap.simp13': {
    en: `The monthly flat discount (R$ 607.20) is also applied to the 13th month. We have not confirmed that it applies there.`,
    nl: `De maandelijkse vaste aftrek (R$ 607,20) wordt ook op de 13e maand toegepast. We hebben niet bevestigd dat hij daar geldt.`,
    fr: `L'abattement forfaitaire mensuel (607,20 R$) est aussi appliqué au 13e mois. Nous n'avons pas confirmé qu'il s'y applique.`,
  },
  'gap.consumption': {
    en: `The 28% default for taxes on spending is the expected rate of the new IBS and CBS, from memory. Today's mix of ICMS, PIS/Cofins, ISS and IPI differs by state and by product.`,
    nl: `De standaard van 28% belasting op uitgaven is het verwachte tarief van de nieuwe IBS en CBS, uit het geheugen. De huidige mix van ICMS, PIS/Cofins, ISS en IPI verschilt per staat en per product.`,
    fr: `Les 28% par défaut de taxes sur les dépenses sont le taux attendu des nouvelles IBS et CBS, de mémoire. Le mélange actuel d'ICMS, PIS/Cofins, ISS et IPI varie selon l'État et le produit.`,
  },
  'gap.pol': {
    en: `Only the deputies' pay (R$ 46,366.19 a month) was read on camara.leg.br. That the President, ministers and senators get the same is from memory of the 2022 decrees.`,
    nl: `Alleen het loon van de kamerleden (R$ 46.366,19 per maand) is gelezen op camara.leg.br. Dat de president, ministers en senatoren hetzelfde krijgen, komt uit het geheugen van de decreten van 2022.`,
    fr: `Seule la paie des députés (46 366,19 R$ par mois) a été lue sur camara.leg.br. Que le Président, les ministres et les sénateurs touchent autant vient de mémoire des décrets de 2022.`,
  },
  'gap.polCost': {
    en: `For politicians we assume the State pays 20% employer social security and no FGTS, on 13 payments a year. Their real system was not checked.`,
    nl: `Voor politici nemen we aan dat de staat 20% sociale zekerheid als werkgever betaalt en geen FGTS, op 13 betalingen per jaar. Hun echte stelsel is niet nagekeken.`,
    fr: `Pour les politiciens, on suppose que l'État paie 20% de sécurité sociale patronale et pas de FGTS, sur 13 versements par an. Leur vrai régime n'a pas été vérifié.`,
  },
  'gap.median': {
    en: `There is no median wage line (the pay that half of employees are above): only the IBGE average income (R$ 3,621, Q2 2026) was found.`,
    nl: `Er is geen lijn voor het mediaanloon (het loon waar de helft van de werknemers boven zit): alleen het gemiddelde inkomen van IBGE (R$ 3.621, K2 2026) is gevonden.`,
    fr: `Pas de ligne pour le salaire médian (celui au-dessus duquel se trouve la moitié des salariés) : seul le revenu moyen de l'IBGE (3 621 R$, T2 2026) a été trouvé.`,
  },
  'gap.notIncl': {
    en: `Vouchers, health plans, profit sharing, yearly deductions and the rest of "What's not included" are left out.`,
    nl: `Bonnen, zorgplannen, winstdeling, jaarlijkse aftrekposten en de rest van "Wat niet is meegerekend" ontbreken.`,
    fr: `Tickets, plans de santé, participation aux bénéfices, déductions annuelles et le reste de « Ce qui n'est pas inclus » sont laissés de côté.`,
  },
};
