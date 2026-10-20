window.TAX_STRINGS = {
  title: { en: `Indian Buying Power`, nl: `Koopkracht in India`, fr: `Pouvoir d'achat en Inde` },
  eyebrow: { en: `India · tax year 2026-27 · employee`, nl: `India · belastingjaar 2026-27 · werknemer`, fr: `Inde · année fiscale 2026-27 · salarié` },
  eyebrowMinister: { en: `India · tax year 2026-27 · minister`, nl: `India · belastingjaar 2026-27 · minister`, fr: `Inde · année fiscale 2026-27 · ministre` },
  lead: {
    en: `Every compulsory charge on a salary in India from 1 April 2026 to 31 March 2027, from what your employer pays to what you can buy. Income tax under the new or the old regime, provident fund, state insurance and professional tax.`,
    nl: `Alle verplichte heffingen op een loon in India van 1 april 2026 tot 31 maart 2027, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Inkomstenbelasting in het nieuwe of het oude stelsel, provident fund, staatsverzekering en beroepsbelasting.`,
    fr: `Tous les prélèvements obligatoires sur un salaire en Inde du 1er avril 2026 au 31 mars 2027, de ce que paie votre employeur à ce que vous pouvez acheter. Impôt sur le revenu dans le nouveau ou l'ancien régime, provident fund, assurance d'État et taxe professionnelle.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Living together. In India each person is taxed alone. Couples never file together, and the new system gives no tax break for children, so nothing here depends on your household.`,
    nl: `Samenwonend. In India wordt elke persoon apart belast. Koppels doen nooit samen aangifte, en het nieuwe stelsel geeft geen belastingvoordeel voor kinderen, dus niets hier hangt af van je gezin.`,
    fr: `En couple. En Inde, chacun est imposé seul. Les couples ne déclarent jamais ensemble, et le nouveau régime n'offre aucun avantage pour les enfants : rien ici ne dépend de votre foyer.`,
  },
  cadre: { en: `Professional tax (Maharashtra rates)`, nl: `Beroepsbelasting (tarieven Maharashtra)`, fr: `Taxe professionnelle (barème du Maharashtra)` },
  region: { en: `Tax regime`, nl: `Belastingstelsel`, fr: `Régime fiscal` },
  'region.new': { en: `New (default)`, nl: `Nieuw (standaard)`, fr: `Nouveau (par défaut)` },
  'region.old': { en: `Old`, nl: `Oud`, fr: `Ancien` },
  employerSize: { en: `Provident fund`, nl: `Provident fund`, fr: `Provident fund` },
  'size.cap': { en: `On ₹15,000 max`, nl: `Op max. ₹ 15.000`, fr: `Sur 15 000 ₹ max.` },
  'size.full': { en: `On full basic`, nl: `Op volledig basisloon`, fr: `Sur tout le salaire de base` },
  'size.none': { en: `None (under 20 staff)`, nl: `Geen (minder dan 20 werknemers)`, fr: `Aucun (moins de 20 salariés)` },
  vatStandard: { en: `(India's standard GST rate is 18%)`, nl: `(het normale GST-tarief in India is 18%)`, fr: `(le taux normal de GST en Inde est de 18%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.mos': { en: `Minister of State`, nl: `Staatsminister`, fr: `Ministre d'État` },
  'minRole.cabinet': { en: `Cabinet minister`, nl: `Kabinetsminister`, fr: `Ministre du Cabinet` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `MP salary plus a small hospitality allowance. The tax office treats it as "other income", not salary: no ₹75,000 flat deduction and no provident fund (retirement savings).`,
    nl: `Loon als parlementslid plus een kleine representatievergoeding. De belastingdienst behandelt het als "ander inkomen", niet als loon: geen vaste aftrek van ₹ 75.000 en geen provident fund (pensioensparen).`,
    fr: `Salaire de député plus une petite indemnité de représentation. Le fisc le traite comme « autre revenu », pas comme salaire : pas d'abattement fixe de 75 000 ₹ ni de provident fund (épargne retraite).`,
  },
  minSalaryHint: {
    en: `Yearly MP salary plus the hospitality allowance. By default, the amount set by law.`,
    nl: `Jaarloon als parlementslid plus de representatievergoeding. Standaard het bedrag dat de wet vastlegt.`,
    fr: `Salaire annuel de député plus l'indemnité de représentation. Par défaut, le montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: `National ministers get the MP salary, ₹124,000 a month since the 2025 update, plus a small hospitality allowance (Prime Minister ₹3,000, Cabinet ₹2,000, Minister of State ₹1,000 a month). The tax office treats MPs' pay as "other income", not salary. So there is no ₹75,000 flat deduction, no provident fund and no state health insurance. Money for their constituency, office and daily costs is tax-free and left out, as are their official home and their pension (which they pay nothing into). Not confirmed: the hospitality amounts and whether they are taxed.`,
    nl: `Nationale ministers krijgen het loon van een parlementslid, ₹ 124.000 per maand sinds de aanpassing van 2025, plus een kleine representatievergoeding (premier ₹ 3.000, kabinet ₹ 2.000, staatsminister ₹ 1.000 per maand). De belastingdienst behandelt het loon van parlementsleden als "ander inkomen", niet als loon. Dus geen vaste aftrek van ₹ 75.000, geen provident fund en geen staatsziekteverzekering. Geld voor hun kiesdistrict, kantoor en dagelijkse kosten is belastingvrij en weggelaten, net als hun ambtswoning en hun pensioen (waarvoor ze niets bijdragen). Niet bevestigd: de bedragen van de representatievergoeding en of die belast worden.`,
    fr: `Les ministres nationaux touchent le salaire de député, 124 000 ₹ par mois depuis la mise à jour de 2025, plus une petite indemnité de représentation (Premier ministre 3 000 ₹, Cabinet 2 000 ₹, ministre d'État 1 000 ₹ par mois). Le fisc traite la paie des députés comme « autre revenu », pas comme salaire. Donc pas d'abattement fixe de 75 000 ₹, pas de provident fund ni d'assurance santé publique. L'argent pour leur circonscription, leur bureau et leurs frais quotidiens est exonéré et laissé de côté, tout comme leur logement de fonction et leur pension (à laquelle ils ne cotisent pas). Non confirmé : les montants de l'indemnité de représentation et leur imposition.`,
  },
  'bd.minGross': { en: `Taxable pay (MP salary + allowance)`, nl: `Belastbaar loon (parlementslid + vergoeding)`, fr: `Paie imposable (député + indemnité)` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The MP salary plus the minister's hospitality allowance. Money for the constituency and the office pays for the job, so it is left out.`,
    nl: `Het loon als parlementslid plus de representatievergoeding van de minister. Geld voor het kiesdistrict en het kantoor betaalt de kosten van het werk en is dus weggelaten.`,
    fr: `Le salaire de député plus l'indemnité de représentation du ministre. L'argent pour la circonscription et le bureau paie les frais du mandat : il est laissé de côté.`,
  },
  'tip.stateCost': {
    en: `Just the pay: the State pays nothing extra for retirement savings or insurance on it.`,
    nl: `Enkel het loon: de staat betaalt er niets extra op voor pensioensparen of verzekering.`,
    fr: `Seulement la paie : l'État ne paie rien en plus pour l'épargne retraite ou l'assurance.`,
  },
  'tip.minEr': { en: `None: MPs and ministers are not in the provident fund or the state health insurance.`, nl: `Geen: parlementsleden en ministers zitten niet in het provident fund of de staatsziekteverzekering.`, fr: `Aucune : députés et ministres ne sont ni au provident fund ni à l'assurance santé publique.` },
  'tip.minEe': { en: `None: MPs get a pension from the State without paying into it.`, nl: `Geen: parlementsleden krijgen een pensioen van de staat zonder ervoor te betalen.`, fr: `Aucune : les députés reçoivent une pension de l'État sans y cotiser.` },
  'tip.minPt': { en: `Not charged on MPs' pay here.`, nl: `Hier niet aangerekend op het loon van parlementsleden.`, fr: `Non appliquée ici à la paie des députés.` },
  'tip.minStd': { en: `None: the ₹75,000 flat deduction is only for income taxed as salary.`, nl: `Geen: de vaste aftrek van ₹ 75.000 geldt alleen voor inkomen dat als loon belast wordt.`, fr: `Aucune : l'abattement fixe de 75 000 ₹ ne vaut que pour les revenus imposés comme salaire.` },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.cabinet': { en: `Cabinet minister`, nl: `Kabinetsminister`, fr: `Ministre du Cabinet` },
  'stat.mos': { en: `Minister of State`, nl: `Staatsminister`, fr: `Ministre d'État` },
  'stat.mp': { en: `Member of Parliament`, nl: `Parlementslid`, fr: `Député` },
  'pol.stat.pm': { en: `MP salary + hospitality allowance`, nl: `Loon parlementslid + representatievergoeding`, fr: `Salaire de député + indemnité de représentation` },
  'pol.stat.cabinet': { en: `MP salary + hospitality allowance`, nl: `Loon parlementslid + representatievergoeding`, fr: `Salaire de député + indemnité de représentation` },
  'pol.stat.mos': { en: `MP salary + hospitality allowance`, nl: `Loon parlementslid + representatievergoeding`, fr: `Salaire de député + indemnité de représentation` },
  'pol.stat.mp': { en: `Salary only, without the tax-free money for constituency, office and daily costs`, nl: `Enkel het loon, zonder het belastingvrije geld voor kiesdistrict, kantoor en dagelijkse kosten`, fr: `Salaire seul, sans l'argent exonéré pour la circonscription, le bureau et les frais quotidiens` },
  'polTitle.gov': { en: `Other public offices, gross pay`, nl: `Andere openbare ambten, brutoloon`, fr: `Autres fonctions publiques, rémunération brute` },
  'pol.cji': { en: `Chief Justice of India`, nl: `Opperrechter van India`, fr: `Président de la Cour suprême` },
  'pol.cabsec': { en: `Cabinet Secretary, the country's top civil servant`, nl: `Cabinet Secretary, de hoogste ambtenaar van het land`, fr: `Cabinet Secretary, le plus haut fonctionnaire du pays` },
  'polNote.minister': {
    en: `MP salary plus hospitality allowance, taxed as "other income" under the new system. Housing, travel and tax-free money not counted. The face sits at the employee salary that would leave the same take-home pay; the dot is their real gross pay.`,
    nl: `Loon parlementslid plus representatievergoeding, belast als "ander inkomen" in het nieuwe stelsel. Woning, reizen en belastingvrij geld niet meegeteld. Het hoofdje staat bij het werknemersloon dat hetzelfde netto zou overlaten; het bolletje is hun echte brutoloon.`,
    fr: `Salaire de député plus indemnité de représentation, imposés comme « autre revenu » dans le nouveau régime. Logement, déplacements et argent exonéré non comptés. La tête est placée au salaire d'un salarié qui laisserait le même net ; le point est leur vrai salaire brut.`,
  },
  'polNote.mp': {
    en: `Taxed as "other income" under the new system, without the ₹75,000 flat deduction. Money for the constituency (₹87,000 a month), office and daily costs is tax-free and not counted. The face sits at the employee salary that would leave the same take-home pay.`,
    nl: `Belast als "ander inkomen" in het nieuwe stelsel, zonder de vaste aftrek van ₹ 75.000. Geld voor het kiesdistrict (₹ 87.000 per maand), kantoor en dagelijkse kosten is belastingvrij en niet meegeteld. Het hoofdje staat bij het werknemersloon dat hetzelfde netto zou overlaten.`,
    fr: `Imposé comme « autre revenu » dans le nouveau régime, sans l'abattement fixe de 75 000 ₹. L'argent pour la circonscription (87 000 ₹ par mois), le bureau et les frais quotidiens est exonéré et non compté. La tête est placée au salaire d'un salarié qui laisserait le même net.`,
  },
  'polTipNote.cji': {
    en: `Basic pay ₹280,000 a month since 2018. The top of the range adds a 58% cost-of-living allowance (the July 2025 rate). Surya Kant has been Chief Justice since 24 November 2025. The official home is not counted.`,
    nl: `Basisloon ₹ 280.000 per maand sinds 2018. De bovenkant van de vork telt er een toelage voor de levensduurte van 58% bij (het tarief van juli 2025). Surya Kant is opperrechter sinds 24 november 2025. De ambtswoning telt niet mee.`,
    fr: `Traitement de base 280 000 ₹ par mois depuis 2018. Le haut de la fourchette ajoute une indemnité de vie chère de 58% (le taux de juillet 2025). Surya Kant préside la Cour depuis le 24 novembre 2025. Le logement de fonction n'est pas compté.`,
  },
  'polTipNote.cabsec': {
    en: `The highest civil service pay level (18), ₹250,000 a month. The top of the range adds a 58% cost-of-living allowance (the July 2025 rate). T. V. Somanathan has held the post since 30 August 2024.`,
    nl: `De hoogste loonschaal voor ambtenaren (18), ₹ 250.000 per maand. De bovenkant van de vork telt er een toelage voor de levensduurte van 58% bij (het tarief van juli 2025). T. V. Somanathan bekleedt de functie sinds 30 augustus 2024.`,
    fr: `Le plus haut échelon de la fonction publique (18), 250 000 ₹ par mois. Le haut de la fourchette ajoute une indemnité de vie chère de 58% (le taux de juillet 2025). T. V. Somanathan occupe le poste depuis le 30 août 2024.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. Pay is yearly gross, shown on the chart as the yearly amount divided by 12. Ministers and MPs sit where an employee would take home the same net pay; the others sit at their gross. See ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Het loon is jaarlijks bruto, op de grafiek getoond als jaarbedrag gedeeld door 12. Ministers en parlementsleden staan waar een werknemer hetzelfde netto zou overhouden; de anderen staan op hun bruto. Zie ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La paie est un brut annuel, placé sur le graphique en montant annuel divisé par 12. Ministres et députés sont placés là où un salarié toucherait le même net ; les autres à leur brut. Voir ${links}.`,
  },
  'src.pol.pm': { en: `Lok Sabha: MPs' pay`, nl: `Lok Sabha: loon parlementsleden`, fr: `Lok Sabha : salaire des députés` },
  'src.pol.cabinet': { en: `Lok Sabha: MPs' pay`, nl: `Lok Sabha: loon parlementsleden`, fr: `Lok Sabha : salaire des députés` },
  'src.pol.mos': { en: `Lok Sabha: MPs' pay`, nl: `Lok Sabha: loon parlementsleden`, fr: `Lok Sabha : salaire des députés` },
  'src.pol.mp': { en: `Lok Sabha: MPs' pay`, nl: `Lok Sabha: loon parlementsleden`, fr: `Lok Sabha : salaire des députés` },
  'src.pol.cji': { en: `Chief Justice of India`, nl: `Opperrechter van India`, fr: `Président de la Cour suprême de l'Inde` },
  'src.pol.cabsec': { en: `Cabinet Secretary of India`, nl: `Cabinet Secretary van India`, fr: `Cabinet Secretary de l'Inde` },
  bracketTop: { en: `10% surcharge`, nl: `toeslag van 10%`, fr: `surtaxe de 10%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why so high between ${a} and ${b}?` : `What happens at ${a}?`,
    nl: (a, b) => b ? `Waarom zo hoog tussen ${a} en ${b}?` : `Wat gebeurt er bij ${a}?`,
    fr: (a, b) => b ? `Pourquoi si élevé entre ${a} et ${b} ?` : `Que se passe-t-il à ${a} ?`,
  },
  trapBody: {
    en: (a, b, reg) => reg === 'old'
      ? `In the old system, a tax discount wipes out the tax up to ₹500,000 of taxable income, then disappears all at once: earn one rupee more and about ₹13,000 of tax is due. Up to that point you only pay into your provident fund (retirement savings), state health insurance if you earn under ₹21,000 a month, and professional tax.`
      : b
        ? `A tax discount brings income tax to zero up to ₹1,200,000 of taxable income (₹1,275,000 of salary). Just above, a rule stops the tax from jumping: you never pay more tax than what you earn above that line. So every extra rupee goes to tax (plus the 4% extra charge) until the normal tax becomes lower, at ${b}.`
        : `A tax discount brings income tax to zero up to ₹1,200,000 of taxable income (₹1,275,000 of salary). Below that, you only pay into your provident fund (retirement savings), state health insurance if you earn under ₹21,000 a month, and professional tax.`,
    nl: (a, b, reg) => reg === 'old'
      ? `In het oude stelsel veegt een belastingkorting de belasting weg tot ₹ 500.000 belastbaar inkomen, en verdwijnt dan in één keer: verdien één roepie meer en er is ongeveer ₹ 13.000 belasting verschuldigd. Tot daar betaal je enkel je provident fund (pensioensparen), de staatsziekteverzekering als je minder dan ₹ 21.000 per maand verdient, en beroepsbelasting.`
      : b
        ? `Een belastingkorting brengt de inkomstenbelasting op nul tot ₹ 1.200.000 belastbaar inkomen (₹ 1.275.000 loon). Net daarboven voorkomt een regel dat de belasting springt: je betaalt nooit meer belasting dan wat je boven die grens verdient. Dus gaat elke extra roepie naar belasting (plus de extra heffing van 4%) tot de gewone belasting lager wordt, bij ${b}.`
        : `Een belastingkorting brengt de inkomstenbelasting op nul tot ₹ 1.200.000 belastbaar inkomen (₹ 1.275.000 loon). Daaronder betaal je enkel je provident fund (pensioensparen), de staatsziekteverzekering als je minder dan ₹ 21.000 per maand verdient, en beroepsbelasting.`,
    fr: (a, b, reg) => reg === 'old'
      ? `Dans l'ancien régime, une réduction efface l'impôt jusqu'à 500 000 ₹ de revenu imposable, puis disparaît d'un coup : gagnez une roupie de plus et environ 13 000 ₹ d'impôt sont dus. Jusque-là, vous ne payez que votre provident fund (épargne retraite), l'assurance santé publique si vous gagnez moins de 21 000 ₹ par mois, et la taxe professionnelle.`
      : b
        ? `Une réduction ramène l'impôt à zéro jusqu'à 1 200 000 ₹ de revenu imposable (1 275 000 ₹ de salaire). Juste au-dessus, une règle évite que l'impôt saute : vous ne payez jamais plus d'impôt que ce que vous gagnez au-delà de ce seuil. Chaque roupie en plus part donc à l'impôt (plus le supplément de 4%) jusqu'à ce que l'impôt normal devienne plus bas, à ${b}.`
        : `Une réduction ramène l'impôt à zéro jusqu'à 1 200 000 ₹ de revenu imposable (1 275 000 ₹ de salaire). En dessous, vous ne payez que votre provident fund (épargne retraite), l'assurance santé publique si vous gagnez moins de 21 000 ₹ par mois, et la taxe professionnelle.`,
  },
  topTitle: {
    en: (top, end) => `Why the jump between ${top} and ${end}?`,
    nl: (top, end) => `Waarom de sprong tussen ${top} en ${end}?`,
    fr: (top, end) => `Pourquoi la hausse entre ${top} et ${end} ?`,
  },
  topBody: {
    en: (top, end, reg) => `Above ₹5,000,000 (50 lakh) of taxable income, an extra 10% is added to your whole tax, not just to the part above. To avoid a sudden jump, the extra tax can never be more than what you earn above the line. So each extra rupee is fully taxed (plus the 4% extra charge) until the full 10% is reached at ${end}. The same happens at ₹1 crore (10 million, 15%), ₹2 crore (25%)${reg === 'old' ? ' and ₹5 crore (37%, old system only)' : ''}.`,
    nl: (top, end, reg) => `Boven ₹ 5.000.000 (50 lakh) belastbaar inkomen komt er 10% bij op je hele belasting, niet alleen op het deel erboven. Om een plotse sprong te vermijden, mag die extra belasting nooit meer zijn dan wat je boven de grens verdient. Dus wordt elke extra roepie volledig belast (plus de extra heffing van 4%) tot de volle 10% bereikt is bij ${end}. Hetzelfde gebeurt bij ₹ 1 crore (10 miljoen, 15%), ₹ 2 crore (25%)${reg === 'old' ? ' en ₹ 5 crore (37%, enkel oud stelsel)' : ''}.`,
    fr: (top, end, reg) => `Au-delà de 5 000 000 ₹ (50 lakh) de revenu imposable, 10% s'ajoutent à tout votre impôt, pas seulement à la part au-dessus. Pour éviter un saut brutal, ce supplément ne peut jamais dépasser ce que vous gagnez au-delà du seuil. Chaque roupie en plus est donc entièrement imposée (plus le supplément de 4%) jusqu'à atteindre les 10% pleins à ${end}. Pareil à 1 crore ₹ (10 millions, 15%), 2 crore ₹ (25%)${reg === 'old' ? ' et 5 crore ₹ (37%, ancien régime seulement)' : ''}.`,
  },

  // Tax components
  'comp.er': { en: `Employer contributions`, nl: `Werkgeversbijdragen`, fr: `Cotisations employeur` },
  'comp.ee': { en: `Provident fund and ESI`, nl: `Provident fund en ESI`, fr: `Provident fund et ESI` },
  'comp.ir': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'comp.pt': { en: `Professional tax`, nl: `Beroepsbelasting`, fr: `Taxe professionnelle` },
  'bd.erPf': { en: `Employer provident fund, pension and insurance`, nl: `Provident fund, pensioen en verzekering van de werkgever`, fr: `Provident fund, pension et assurance employeur` },
  'bd.esiEr': { en: `Employer state insurance (ESI)`, nl: `Staatsverzekering werkgever (ESI)`, fr: `Assurance d'État employeur (ESI)` },
  'bd.eePf': { en: `Your provident fund (EPF)`, nl: `Jouw provident fund (EPF)`, fr: `Votre provident fund (EPF)` },
  'bd.esiEe': { en: `Your state insurance (ESI)`, nl: `Jouw staatsverzekering (ESI)`, fr: `Votre assurance d'État (ESI)` },
  'bd.eps': { en: `Pension scheme (EPS)`, nl: `Pensioenregeling (EPS)`, fr: `Régime de pension (EPS)` },
  'bd.epf': { en: `Provident fund (EPF)`, nl: `Provident fund (EPF)`, fr: `Provident fund (EPF)` },
  'bd.edli': { en: `Life insurance (EDLI)`, nl: `Levensverzekering (EDLI)`, fr: `Assurance-vie (EDLI)` },
  'bd.admin': { en: `EPFO admin charge`, nl: `Beheerskosten EPFO`, fr: `Frais de gestion EPFO` },
  'bd.esi': { en: `State insurance (ESI)`, nl: `Staatsverzekering (ESI)`, fr: `Assurance d'État (ESI)` },
  'bd.std': { en: `Flat deduction`, nl: `Vaste aftrek`, fr: `Abattement fixe` },
  'bd.c80': { en: `Section 80C (your retirement savings)`, nl: `Sectie 80C (je pensioensparen)`, fr: `Section 80C (votre épargne retraite)` },
  'bd.ptDed': { en: `Professional tax deducted`, nl: `Afgetrokken beroepsbelasting`, fr: `Taxe professionnelle déduite` },
  'bd.rebate': { en: `Tax discount (section 87A)`, nl: `Belastingkorting (sectie 87A)`, fr: `Réduction d'impôt (section 87A)` },
  'bd.surcharge': { en: `Extra tax for high incomes`, nl: `Extra belasting voor hoge inkomens`, fr: `Supplément pour hauts revenus` },
  'bd.cess': { en: `Extra 4% for health and education`, nl: `Extra 4% voor gezondheid en onderwijs`, fr: `Supplément de 4% santé et éducation` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries. Bonuses and the yearly variable pay common in India are taxed like normal salary.`,
    nl: `12 maandlonen. Bonussen en de jaarlijkse variabele verloning die in India gewoon is, worden belast als gewoon loon.`,
    fr: `12 salaires mensuels. Les primes et la part variable annuelle courante en Inde sont imposées comme du salaire normal.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Each person files alone, married or not. The new system has no tax break for a spouse or children. The old one allows a few (school fees under section 80C), which are not counted here.`,
    nl: `Elke persoon doet apart aangifte, getrouwd of niet. Het nieuwe stelsel heeft geen belastingvoordeel voor een partner of kinderen. Het oude laat er enkele toe (schoolgeld onder sectie 80C), die hier niet meetellen.`,
    fr: `Chacun déclare seul, marié ou non. Le nouveau régime n'a aucun avantage pour un conjoint ou des enfants. L'ancien en permet quelques-uns (frais de scolarité en section 80C), non comptés ici.`,
  },
  'tip.pt': {
    en: `A small state tax on having a job, never more than ₹2,500 a year (the Constitution caps it). Shown here with Maharashtra's rates (Mumbai, Pune): ₹175 a month from ₹7,501, ₹200 a month above ₹10,000, and ₹300 in February. Karnataka, West Bengal, Tamil Nadu and others charge similar amounts; Delhi charges nothing. It lowers your taxable income only in the old system.`,
    nl: `Een kleine staatsbelasting op het hebben van een job, nooit meer dan ₹ 2.500 per jaar (de grondwet legt dat maximum op). Hier met de tarieven van Maharashtra (Mumbai, Pune): ₹ 175 per maand vanaf ₹ 7.501, ₹ 200 per maand boven ₹ 10.000, en ₹ 300 in februari. Karnataka, West-Bengalen, Tamil Nadu en andere rekenen gelijkaardige bedragen; Delhi niets. Ze verlaagt je belastbaar inkomen enkel in het oude stelsel.`,
    fr: `Une petite taxe des États sur le fait d'avoir un emploi, jamais plus de 2 500 ₹ par an (plafond fixé par la Constitution). Montrée ici avec les taux du Maharashtra (Mumbai, Pune) : 175 ₹ par mois dès 7 501 ₹, 200 ₹ par mois au-delà de 10 000 ₹, et 300 ₹ en février. Le Karnataka, le Bengale-Occidental, le Tamil Nadu et d'autres demandent des montants proches ; Delhi rien. Elle ne réduit votre revenu imposable que dans l'ancien régime.`,
  },
  'tip.reg': {
    en: `India has two tax systems and employees can pick one each year. The new one is the default: lower rates, ₹75,000 of salary tax-free, and no tax at all up to ₹12 lakh (1.2 million) of taxable income, but almost no other deductions. The old one has higher rates and only ₹50,000 tax-free, but lets you deduct many costs. Here it only gets your retirement savings (section 80C) and professional tax, so it rarely wins.`,
    nl: `India heeft twee belastingstelsels en werknemers mogen er elk jaar één kiezen. Het nieuwe is de standaard: lagere tarieven, ₹ 75.000 loon belastingvrij, en helemaal geen belasting tot ₹ 12 lakh (1,2 miljoen) belastbaar inkomen, maar bijna geen andere aftrekposten. Het oude heeft hogere tarieven en maar ₹ 50.000 belastingvrij, maar laat je veel kosten aftrekken. Hier krijgt het enkel je pensioensparen (sectie 80C) en de beroepsbelasting, dus wint het zelden.`,
    fr: `L'Inde a deux régimes d'impôt et les salariés peuvent en choisir un chaque année. Le nouveau est celui par défaut : taux plus bas, 75 000 ₹ de salaire exonérés, et aucun impôt jusqu'à 12 lakh (1,2 million) de revenu imposable, mais presque aucune autre déduction. L'ancien a des taux plus élevés et seulement 50 000 ₹ exonérés, mais permet de déduire beaucoup de frais. Ici il n'a que votre épargne retraite (section 80C) et la taxe professionnelle : il gagne donc rarement.`,
  },
  'tip.size': {
    en: `Firms with 20 or more staff must put 12% of your wages into a retirement savings fund (the provident fund) and take another 12% from your pay for it. The law only requires this on wages up to ₹15,000 a month, but many large employers pay it on your full basic salary. Basic salary is taken as half of gross, the lowest the labour laws allow.`,
    nl: `Bedrijven met 20 of meer werknemers moeten 12% van je loon in een pensioenspaarfonds (het provident fund) storten en er nog eens 12% voor van je loon afhouden. De wet vraagt dat enkel op lonen tot ₹ 15.000 per maand, maar veel grote werkgevers doen het op je volledige basisloon. Het basisloon is hier de helft van het bruto, het laagste dat de arbeidswetten toelaten.`,
    fr: `Les entreprises de 20 salariés ou plus doivent verser 12% de votre salaire dans un fonds d'épargne retraite (le provident fund) et en retenir 12% de plus sur votre paie. La loi ne l'impose que jusqu'à 15 000 ₹ de salaire par mois, mais beaucoup de grands employeurs le font sur tout votre salaire de base. Le salaire de base est pris à la moitié du brut, le minimum permis par le droit du travail.`,
  },
  'tip.costShort': { en: `Gross salary plus the employer's provident fund, pension, insurance and state health insurance (ESI).`, nl: `Brutoloon plus provident fund, pensioen, verzekering en staatsziekteverzekering (ESI) van de werkgever.`, fr: `Salaire brut plus le provident fund, la pension, l'assurance et l'assurance santé publique (ESI) de l'employeur.` },
  'tip.er': {
    en: `What your employer pays on top of your gross. 12% of your provident fund wages: 8.33% goes to a pension plan (on at most ₹15,000 a month) and the rest to your own savings account. Plus 0.5% for life insurance, 0.5% for running costs, and 3.25% for state health insurance (ESI) if your gross is ₹21,000 a month or less. In India this is usually included in your "CTC", the total cost to the company.`,
    nl: `Wat je werkgever bovenop je bruto betaalt. 12% van je provident-fundloon: 8,33% gaat naar een pensioenregeling (op hoogstens ₹ 15.000 per maand) en de rest naar je eigen spaarrekening. Plus 0,5% voor levensverzekering, 0,5% beheerskosten, en 3,25% voor de staatsziekteverzekering (ESI) als je bruto ₹ 21.000 per maand of minder is. In India zit dit meestal in je "CTC", de totale kost voor het bedrijf.`,
    fr: `Ce que l'employeur paie en plus de votre brut. 12% de votre salaire soumis au provident fund : 8,33% vont à un régime de pension (sur 15 000 ₹ par mois au plus) et le reste à votre propre compte d'épargne. Plus 0,5% d'assurance-vie, 0,5% de frais de gestion, et 3,25% d'assurance santé publique (ESI) si votre brut est de 21 000 ₹ par mois ou moins. En Inde, c'est en général compris dans votre « CTC », le coût total pour l'entreprise.`,
  },
  'tip.pfWage': { en: `Wages counted for the provident fund`, nl: `Loon dat telt voor het provident fund`, fr: `Salaire compté pour le provident fund` },
  'tip.ee': {
    en: `Taken from your pay: 12% of your provident fund wages into your own EPF account (savings that earn interest, which you can take out at retirement or in some set cases), and 0.75% for state health insurance (ESI) if your gross is ₹21,000 a month or less.`,
    nl: `Van je loon afgehouden: 12% van je provident-fundloon op je eigen EPF-rekening (spaargeld met rente, dat je bij je pensioen of in bepaalde gevallen kunt opnemen), en 0,75% voor de staatsziekteverzekering (ESI) als je bruto ₹ 21.000 per maand of minder is.`,
    fr: `Retenu sur votre paie : 12% de votre salaire soumis au provident fund sur votre propre compte EPF (une épargne qui rapporte des intérêts, que vous pouvez retirer à la retraite ou dans certains cas), et 0,75% pour l'assurance santé publique (ESI) si votre brut est de 21 000 ₹ par mois ou moins.`,
  },
  'tip.std': {
    en: `A fixed part of your salary that is never taxed: ₹75,000 in the new system, ₹50,000 in the old one.`,
    nl: `Een vast deel van je loon dat nooit belast wordt: ₹ 75.000 in het nieuwe stelsel, ₹ 50.000 in het oude.`,
    fr: `Une part fixe du salaire jamais imposée : 75 000 ₹ dans le nouveau régime, 50 000 ₹ dans l'ancien.`,
  },
  'tip.c80': {
    en: `Old system only: what you pay into your provident fund counts toward the ₹150,000 you can deduct under section 80C. Insurance, home loan repayments and school fees could fill the rest, but they are not counted here.`,
    nl: `Enkel oud stelsel: wat je in je provident fund stort, telt mee voor de ₹ 150.000 die je onder sectie 80C mag aftrekken. Verzekeringen, aflossingen van een woonlening en schoolgeld kunnen de rest vullen, maar tellen hier niet mee.`,
    fr: `Ancien régime seulement : ce que vous versez au provident fund compte dans les 150 000 ₹ déductibles en section 80C. Assurances, remboursement d'un prêt immobilier et frais de scolarité pourraient compléter, mais ne sont pas comptés ici.`,
  },
  'tip.ptDed': { en: `Old system only: the professional tax you paid is taken off your taxable salary.`, nl: `Enkel oud stelsel: de betaalde beroepsbelasting gaat van je belastbaar loon af.`, fr: `Ancien régime seulement : la taxe professionnelle payée est retirée du salaire imposable.` },
  'tip.taxable': {
    en: calc => `The part of your pay that is taxed: gross minus the flat deduction (and, in the old system, minus professional tax and section 80C)${calc}. What your employer puts in the provident fund is not taxed, up to ₹750,000 a year.`,
    nl: calc => `Het deel van je loon dat belast wordt: bruto min de vaste aftrek (en in het oude stelsel min beroepsbelasting en sectie 80C)${calc}. Wat je werkgever in het provident fund stort, wordt niet belast, tot ₹ 750.000 per jaar.`,
    fr: calc => `La part de votre paie qui est imposée : brut moins l'abattement fixe (et dans l'ancien régime, moins la taxe professionnelle et la section 80C)${calc}. Ce que l'employeur verse au provident fund n'est pas imposé, jusqu'à 750 000 ₹ par an.`,
  },
  'tip.irShort': {
    en: `Each slice of taxable income is taxed at its own rate. Then the tax discount (87A) comes off, the extra tax for high incomes is added if due, and finally an extra 4% for health and education.`,
    nl: `Elke schijf van het belastbaar inkomen wordt aan haar eigen tarief belast. Dan gaat de belastingkorting (87A) eraf, komt de extra belasting voor hoge inkomens erbij als die verschuldigd is, en ten slotte een extra 4% voor gezondheid en onderwijs.`,
    fr: `Chaque tranche du revenu imposable est taxée à son propre taux. Puis la réduction (87A) est retirée, le supplément pour hauts revenus ajouté s'il est dû, et enfin 4% de plus pour la santé et l'éducation.`,
  },
  'tip.irM': {
    en: r => `Rates for tax year 2026-27, ${r} system. A new Income-tax Act (2025) replaced the 1961 law on 1 April 2026, with the same rates.`,
    nl: r => `Tarieven voor belastingjaar 2026-27, stelsel: ${r}. Een nieuwe Income-tax Act (2025) verving de wet van 1961 op 1 april 2026, met dezelfde tarieven.`,
    fr: r => `Taux de l'année fiscale 2026-27, régime : ${r}. Une nouvelle loi, l'Income-tax Act 2025, a remplacé celle de 1961 le 1er avril 2026, avec les mêmes taux.`,
  },
  'tip.scRelief': { en: `− cap so tax doesn't jump`, nl: `− plafond zodat de belasting niet springt`, fr: `− plafond pour éviter un saut d'impôt` },
  'tip.vatM': {
    en: `Since September 2025, GST (the tax on what you buy) has two main rates: 5% for everyday goods and 18% for most other things, plus 40% on luxury goods, tobacco and the like. Fresh food, education and health care have none. We apply 18% to everything, so this is the most it could be.`,
    nl: `Sinds september 2025 heeft GST (de belasting op wat je koopt) twee hoofdtarieven: 5% voor dagelijkse goederen en 18% voor de meeste andere dingen, plus 40% op luxegoederen, tabak en dergelijke. Verse voeding, onderwijs en zorg hebben er geen. We passen 18% op alles toe, dus dit is het maximum.`,
    fr: `Depuis septembre 2025, la GST (la taxe sur vos achats) a deux taux principaux : 5% pour les biens courants et 18% pour la plupart du reste, plus 40% sur le luxe, le tabac et autres. Les aliments frais, l'éducation et la santé n'en ont pas. On applique 18% à tout : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross minus provident fund, minus state health insurance (ESI), minus professional tax, minus income tax. Your provident fund savings are still yours, just locked away.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto min provident fund, min staatsziekteverzekering (ESI), min beroepsbelasting, min inkomstenbelasting. Je provident-fundspaargeld blijft van jou, het staat alleen vast.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut moins le provident fund, moins l'assurance santé publique (ESI), moins la taxe professionnelle, moins l'impôt. Votre épargne provident fund reste à vous, juste bloquée.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · tax year 2026-27 (1 April 2026 to 31 March 2027)`,
    nl: `Gebruikte regels · belastingjaar 2026-27 (1 april 2026 tot 31 maart 2027)`,
    fr: `Règles utilisées · année fiscale 2026-27 (1er avril 2026 au 31 mars 2027)`,
  },
  'ref.er': {
    en: { h: `1 · Employer`, li: [
      `Provident fund (retirement savings) <span class="num">12%</span> of wages: <span class="num">8.33%</span> to the pension plan on at most ₹15,000 a month, the rest to your EPF savings account. Life insurance (EDLI) <span class="num">0.5%</span> (on at most ₹15,000), running costs <span class="num">0.5%</span>. Required from 20 employees.`,
      `State health insurance (ESI) <span class="num">3.25%</span> of gross while it is ₹21,000 a month or less.`,
    ] },
    nl: { h: `1 · Werkgever`, li: [
      `Provident fund (pensioensparen) <span class="num">12%</span> van het loon: <span class="num">8,33%</span> naar de pensioenregeling op hoogstens ₹ 15.000 per maand, de rest naar je EPF-spaarrekening. Levensverzekering (EDLI) <span class="num">0,5%</span> (op hoogstens ₹ 15.000), beheerskosten <span class="num">0,5%</span>. Verplicht vanaf 20 werknemers.`,
      `Staatsziekteverzekering (ESI) <span class="num">3,25%</span> van het bruto zolang dat ₹ 21.000 per maand of minder is.`,
    ] },
    fr: { h: `1 · Employeur`, li: [
      `Provident fund (épargne retraite) <span class="num">12%</span> du salaire : <span class="num">8,33%</span> au régime de pension sur 15 000 ₹ par mois au plus, le reste sur votre compte d'épargne EPF. Assurance-vie (EDLI) <span class="num">0,5%</span> (sur 15 000 ₹ au plus), frais de gestion <span class="num">0,5%</span>. Obligatoire dès 20 salariés.`,
      `Assurance santé publique (ESI) <span class="num">3,25%</span> du brut tant qu'il ne dépasse pas 21 000 ₹ par mois.`,
    ] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [
      `Provident fund (EPF) <span class="num">12%</span> of wages, on at most ₹15,000 a month unless the employer pays on more. Wages = basic salary, taken as 50% of gross.`,
      `State health insurance (ESI) <span class="num">0.75%</span> of gross, up to ₹21,000 a month.`,
    ] },
    nl: { h: `2 · Werknemersbijdragen`, li: [
      `Provident fund (EPF) <span class="num">12%</span> van het loon, op hoogstens ₹ 15.000 per maand tenzij de werkgever op meer stort. Loon = basisloon, hier 50% van het bruto.`,
      `Staatsziekteverzekering (ESI) <span class="num">0,75%</span> van het bruto, tot ₹ 21.000 per maand.`,
    ] },
    fr: { h: `2 · Cotisations salariales`, li: [
      `Provident fund (EPF) <span class="num">12%</span> du salaire, sur 15 000 ₹ par mois au plus sauf si l'employeur cotise sur davantage. Salaire = salaire de base, pris à 50% du brut.`,
      `Assurance santé publique (ESI) <span class="num">0,75%</span> du brut, jusqu'à 21 000 ₹ par mois.`,
    ] },
  },
  'ref.ir': {
    en: br => ({ h: `3 · Income tax, new system`, li: [
      `Each slice of taxable income has its own rate, after ₹75,000 of salary is taken off:${br}`,
      `Tax discount (87A) of up to ₹60,000: no tax up to ₹1,200,000 of taxable income, with a cap just above so the tax doesn't jump.`,
      `Extra tax for high incomes, as a share of the tax: 10% above ₹50 lakh (5 million), 15% above ₹1 crore (10 million), 25% above ₹2 crore, again capped so it doesn't jump. Then an extra 4% for health and education.`,
    ] }),
    nl: br => ({ h: `3 · Inkomstenbelasting, nieuw stelsel`, li: [
      `Elke schijf van het belastbaar inkomen heeft haar eigen tarief, nadat ₹ 75.000 van het loon is afgetrokken:${br}`,
      `Belastingkorting (87A) tot ₹ 60.000: geen belasting tot ₹ 1.200.000 belastbaar inkomen, met een plafond net daarboven zodat de belasting niet springt.`,
      `Extra belasting voor hoge inkomens, als deel van de belasting: 10% boven ₹ 50 lakh (5 miljoen), 15% boven ₹ 1 crore (10 miljoen), 25% boven ₹ 2 crore, weer met een plafond zodat ze niet springt. Daarna een extra 4% voor gezondheid en onderwijs.`,
    ] }),
    fr: br => ({ h: `3 · Impôt sur le revenu, nouveau régime`, li: [
      `Chaque tranche du revenu imposable a son propre taux, après retrait de 75 000 ₹ du salaire :${br}`,
      `Réduction (87A) jusqu'à 60 000 ₹ : aucun impôt jusqu'à 1 200 000 ₹ de revenu imposable, avec un plafond juste au-dessus pour éviter un saut.`,
      `Supplément pour hauts revenus, en part de l'impôt : 10% au-delà de 50 lakh ₹ (5 millions), 15% au-delà de 1 crore (10 millions), 25% au-delà de 2 crore, là aussi plafonné pour éviter un saut. Puis 4% de plus pour la santé et l'éducation.`,
    ] }),
  },
  'ref.old': {
    en: { h: `4 · Old system`, li: [
      `No tax up to ₹250,000, <span class="num">5%</span> up to ₹500,000, <span class="num">20%</span> up to ₹1,000,000, <span class="num">30%</span> above (under age 60).`,
      `₹50,000 of salary tax-free; professional tax and section 80C (up to ₹150,000, here only your EPF savings) are taken off. Tax discount of up to ₹12,500 for taxable income up to ₹500,000, with no cap above it, so the tax jumps. Extra tax for high incomes as in the new system, plus 37% above ₹5 crore.`,
    ] },
    nl: { h: `4 · Oud stelsel`, li: [
      `Geen belasting tot ₹ 250.000, <span class="num">5%</span> tot ₹ 500.000, <span class="num">20%</span> tot ₹ 1.000.000, <span class="num">30%</span> daarboven (jonger dan 60).`,
      `₹ 50.000 loon belastingvrij; beroepsbelasting en sectie 80C (tot ₹ 150.000, hier enkel je EPF-spaargeld) gaan eraf. Belastingkorting tot ₹ 12.500 voor belastbaar inkomen tot ₹ 500.000, zonder plafond erboven, dus de belasting springt. Extra belasting voor hoge inkomens zoals in het nieuwe stelsel, plus 37% boven ₹ 5 crore.`,
    ] },
    fr: { h: `4 · Ancien régime`, li: [
      `Pas d'impôt jusqu'à 250 000 ₹, <span class="num">5%</span> jusqu'à 500 000 ₹, <span class="num">20%</span> jusqu'à 1 000 000 ₹, <span class="num">30%</span> au-delà (moins de 60 ans).`,
      `50 000 ₹ de salaire exonérés ; taxe professionnelle et section 80C (jusqu'à 150 000 ₹, ici seulement votre épargne EPF) retirées. Réduction jusqu'à 12 500 ₹ pour un revenu imposable jusqu'à 500 000 ₹, sans plafond au-dessus : l'impôt saute. Supplément pour hauts revenus comme dans le nouveau régime, plus 37% au-delà de 5 crore ₹.`,
    ] },
  },
  'ref.pt': {
    en: { h: `5 · Professional tax`, li: [
      `A state tax, at most ₹2,500 a year. Maharashtra: ₹175 a month from ₹7,501, ₹200 above ₹10,000, ₹300 in February. Switch it off for Delhi and other states that don't have it.`,
    ] },
    nl: { h: `5 · Beroepsbelasting`, li: [
      `Een staatsbelasting, hoogstens ₹ 2.500 per jaar. Maharashtra: ₹ 175 per maand vanaf ₹ 7.501, ₹ 200 boven ₹ 10.000, ₹ 300 in februari. Zet ze uit voor Delhi en andere staten die ze niet hebben.`,
    ] },
    fr: { h: `5 · Taxe professionnelle`, li: [
      `Une taxe des États, au plus 2 500 ₹ par an. Maharashtra : 175 ₹ par mois dès 7 501 ₹, 200 ₹ au-delà de 10 000 ₹, 300 ₹ en février. Désactivez-la pour Delhi et les autres États qui ne l'ont pas.`,
    ] },
  },
  'ref.vat': {
    en: { h: `6 · GST on spending`, li: [
      `Standard rate <span class="num">18%</span>, applied to all of your net pay as if you spent all of it. Use the slider to try 5% or other rates.`,
      `The GST hidden in a price = price × r / (100 + r). At 18% that is 18 / 118 = <span class="num">15.25%</span> of what you pay.`,
    ] },
    nl: { h: `6 · GST op uitgaven`, li: [
      `Normaal tarief <span class="num">18%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft. Gebruik de schuifregelaar om 5% of andere tarieven te proberen.`,
      `De GST verstopt in een prijs = prijs × r / (100 + r). Bij 18% is dat 18 / 118 = <span class="num">15,25%</span> van wat je betaalt.`,
    ] },
    fr: { h: `6 · GST sur les dépenses`, li: [
      `Taux normal <span class="num">18%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement. Utilisez le curseur pour essayer 5% ou d'autres taux.`,
      `La GST cachée dans un prix = prix × r / (100 + r). À 18%, cela fait 18 / 118 = <span class="num">15,25%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `7 · Government and Parliament`, li: [
      `MP salary <span class="num">₹124,000</span> a month. Ministers add a small hospitality allowance: Prime Minister ₹3,000, Cabinet ₹2,000, Minister of State ₹1,000.`,
      `Taxed as "other income" (no ₹75,000 flat deduction), new system. Tax-free money, housing and pension not counted.`,
    ] },
    nl: { h: `7 · Regering en parlement`, li: [
      `Loon parlementslid <span class="num">₹ 124.000</span> per maand. Ministers krijgen er een kleine representatievergoeding bij: premier ₹ 3.000, kabinet ₹ 2.000, staatsminister ₹ 1.000.`,
      `Belast als "ander inkomen" (geen vaste aftrek van ₹ 75.000), nieuw stelsel. Belastingvrij geld, woning en pensioen niet meegeteld.`,
    ] },
    fr: { h: `7 · Gouvernement et Parlement`, li: [
      `Salaire de député <span class="num">124 000 ₹</span> par mois. Les ministres ajoutent une petite indemnité de représentation : Premier ministre 3 000 ₹, Cabinet 2 000 ₹, ministre d'État 1 000 ₹.`,
      `Imposés comme « autre revenu » (sans abattement fixe de 75 000 ₹), nouveau régime. Argent exonéré, logement et pension non comptés.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Gratuity (a lump sum the employer owes you when you leave after 5 years), the NPS pension plan, rent allowance and other old-system tax breaks, health insurance (80D), perks, and the tax on employer retirement payments above ₹750,000.`,
      `Lower rates for people over 60, income taxed at special rates, and smaller state charges. The figures are the year's tax for the same pay every month, not rounded to ₹10.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Gratuity (een bedrag dat de werkgever je verschuldigd is als je na 5 jaar vertrekt), het NPS-pensioenplan, huurtoelage en andere voordelen van het oude stelsel, ziekteverzekering (80D), voordelen in natura, en de belasting op pensioenbijdragen van de werkgever boven ₹ 750.000.`,
      `Lagere tarieven voor 60-plussers, inkomen tegen bijzondere tarieven, en kleinere staatsheffingen. De bedragen zijn de belasting van het jaar bij elke maand hetzelfde loon, niet afgerond op ₹ 10.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Gratuity (une somme que l'employeur vous doit quand vous partez après 5 ans), le plan de retraite NPS, l'allocation logement et les autres avantages de l'ancien régime, l'assurance santé (80D), les avantages en nature, et l'impôt sur les versements retraite de l'employeur au-delà de 750 000 ₹.`,
      `Taux réduits pour les plus de 60 ans, revenus à taux spéciaux, et petites taxes des États. Les montants sont l'impôt de l'année pour la même paie chaque mois, sans arrondi à 10 ₹.`,
    ] },
  },

  inheritLink: {
    en: `What an estate pays when it's passed on, by who inherits →`,
    nl: `Wat een nalatenschap betaalt bij overdracht, volgens wie erft →`,
    fr: `Ce que paie une succession, selon qui hérite →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and the Income Tax Department decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en het Income Tax Department zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et l'Income Tax Department font foi.`,
  },

  'src.rates': { en: `PwC: India personal income tax`, nl: `PwC: inkomstenbelasting India`, fr: `PwC : impôt sur le revenu en Inde` },
  'src.slabs': { en: `ClearTax: income tax slabs`, nl: `ClearTax: belastingschijven`, fr: `ClearTax : tranches d'impôt` },
  'src.other': { en: `PwC: India other taxes`, nl: `PwC: andere belastingen India`, fr: `PwC : autres impôts en Inde` },
  'src.pf': { en: `EPFO contribution rates`, nl: `Bijdragen EPFO`, fr: `Taux de cotisation EPFO` },
  'src.ceiling': { en: `SCC Online: ₹15,000 wage ceiling (May 2026)`, nl: `SCC Online: loonplafond ₹ 15.000 (mei 2026)`, fr: `SCC Online : plafond de 15 000 ₹ (mai 2026)` },
  'src.codes': { en: `Code on Social Security, 2020`, nl: `Code on Social Security, 2020`, fr: `Code on Social Security, 2020` },
  'src.esi': { en: `Employees' State Insurance`, nl: `Employees' State Insurance`, fr: `Employees' State Insurance` },
  'src.pt': { en: `Professional tax`, nl: `Beroepsbelasting`, fr: `Taxe professionnelle` },
  'src.minWage': { en: `Delhi minimum wages, April 2025`, nl: `Minimumlonen Delhi, april 2025`, fr: `Salaires minimums de Delhi, avril 2025` },
  'src.mp': { en: `MPs' pay`, nl: `loon parlementsleden`, fr: `salaire des députés` },
  'src.vat': { en: `PwC: GST`, nl: `PwC: GST`, fr: `PwC : GST` },

  // Known gaps and caveats
  'gap.noCheck': {
    en: `Researched without searching the web, and no take-home pay was checked against the tax office's calculator.`,
    nl: `Opgezocht zonder op het web te zoeken, en geen enkel nettoloon is nagerekend met de rekentool van de belastingdienst.`,
    fr: `Recherché sans recherche web, et aucun salaire net n'a été vérifié avec le simulateur du fisc.`,
  },
  'gap.act2025': {
    en: `The rules are those of the 1961 law (tax discount 87A, section 80C). We assume the new 2025 law, in force since 1 April 2026, kept the same rates and amounts; its text was not read.`,
    nl: `De regels zijn die van de wet van 1961 (belastingkorting 87A, sectie 80C). We nemen aan dat de nieuwe wet van 2025, van kracht sinds 1 april 2026, dezelfde tarieven en bedragen behield; de tekst is niet gelezen.`,
    fr: `Les règles sont celles de la loi de 1961 (réduction 87A, section 80C). On suppose que la nouvelle loi de 2025, en vigueur depuis le 1er avril 2026, a gardé les mêmes taux et montants ; son texte n'a pas été lu.`,
  },
  'gap.pt': {
    en: `Professional tax uses Maharashtra's rates from memory (₹175 and ₹200 a month, ₹2,500 a year). Other states charge different amounts, and some charge nothing.`,
    nl: `De beroepsbelasting gebruikt de tarieven van Maharashtra uit het geheugen (₹ 175 en ₹ 200 per maand, ₹ 2.500 per jaar). Andere staten rekenen andere bedragen aan, en sommige niets.`,
    fr: `La taxe professionnelle utilise les taux du Maharashtra de mémoire (175 ₹ et 200 ₹ par mois, 2 500 ₹ par an). Les autres États demandent d'autres montants, et certains rien.`,
  },
  'gap.basic': {
    en: `The provident fund is worked out on a basic salary of 50% of gross, the lowest the labour laws allow. Many payslips split pay differently, which changes both your and your employer's payments.`,
    nl: `Het provident fund wordt berekend op een basisloon van 50% van het bruto, het laagste dat de arbeidswetten toelaten. Veel loonstroken verdelen het loon anders, wat zowel jouw bijdrage als die van je werkgever verandert.`,
    fr: `Le provident fund est calculé sur un salaire de base de 50% du brut, le minimum permis par le droit du travail. Beaucoup de fiches de paie répartissent autrement, ce qui change votre versement et celui de l'employeur.`,
  },
  'gap.esi': {
    en: `State health insurance rates (0.75% you, 3.25% employer, for pay up to ₹21,000 a month) come from Wikipedia, not from the insurer (ESIC).`,
    nl: `De tarieven van de staatsziekteverzekering (0,75% jij, 3,25% werkgever, voor een loon tot ₹ 21.000 per maand) komen van Wikipedia, niet van de verzekeraar (ESIC).`,
    fr: `Les taux de l'assurance santé publique (0,75% pour vous, 3,25% pour l'employeur, pour une paie jusqu'à 21 000 ₹ par mois) viennent de Wikipédia, pas de l'assureur (ESIC).`,
  },
  'gap.sumptuary': {
    en: `Ministers' hospitality allowances (₹3,000, ₹2,000, ₹1,000 a month) and whether they are taxed are not confirmed.`,
    nl: `De representatievergoedingen van ministers (₹ 3.000, ₹ 2.000, ₹ 1.000 per maand) en of ze belast worden, zijn niet bevestigd.`,
    fr: `Les indemnités de représentation des ministres (3 000 ₹, 2 000 ₹, 1 000 ₹ par mois) et leur imposition ne sont pas confirmées.`,
  },
  'gap.mp': {
    en: `MPs' pay (₹124,000 a month since the 2025 update) comes from Wikipedia. That it is taxed as "other income" under the new system is assumed.`,
    nl: `Het loon van parlementsleden (₹ 124.000 per maand sinds de aanpassing van 2025) komt van Wikipedia. Dat het belast wordt als "ander inkomen" in het nieuwe stelsel, is aangenomen.`,
    fr: `La paie des députés (124 000 ₹ par mois depuis la mise à jour de 2025) vient de Wikipédia. Son imposition comme « autre revenu » dans le nouveau régime est supposée.`,
  },
  'gap.da': {
    en: `The cost-of-living allowance for the Chief Justice and Cabinet Secretary is 58%, the July 2025 rate from memory. A 2026 rise is not applied.`,
    nl: `De toelage voor de levensduurte van de opperrechter en de kabinetssecretaris is 58%, het tarief van juli 2025 uit het geheugen. Een verhoging in 2026 is niet toegepast.`,
    fr: `L'indemnité de vie chère du président de la Cour suprême et du secrétaire du cabinet est de 58%, le taux de juillet 2025 de mémoire. Une hausse en 2026 n'est pas appliquée.`,
  },
  'gap.wages': {
    en: `The only reference wage is Delhi's minimum for unskilled work from April 2025 (₹18,456 a month). Minimum wages differ by state, and there is no median line (the pay that half of employees are above) or average line.`,
    nl: `Het enige referentieloon is het minimumloon voor ongeschoold werk in Delhi van april 2025 (₹ 18.456 per maand). Minimumlonen verschillen per staat, en er is geen lijn voor het mediaanloon (het loon waar de helft van de werknemers boven zit) of het gemiddelde.`,
    fr: `Le seul salaire de référence est le minimum pour travail non qualifié à Delhi d'avril 2025 (18 456 ₹ par mois). Les minimums varient selon l'État, et il n'y a ni ligne du salaire médian (celui au-dessus duquel se trouve la moitié des salariés) ni ligne du salaire moyen.`,
  },
  'gap.oldRegime': {
    en: `The old system only gets the ₹50,000 flat deduction, professional tax and your provident fund under section 80C. Rent allowance and the rest of "What's not included" are left out, so it often looks worse than it really is.`,
    nl: `Het oude stelsel krijgt alleen de vaste aftrek van ₹ 50.000, de beroepsbelasting en je provident fund onder sectie 80C. De huurtoelage en de rest van "Wat niet is meegerekend" ontbreken, dus het lijkt vaak slechter dan het echt is.`,
    fr: `L'ancien régime n'a que l'abattement fixe de 50 000 ₹, la taxe professionnelle et votre provident fund en section 80C. L'allocation logement et le reste de « Ce qui n'est pas inclus » sont laissés de côté : il paraît souvent moins bon qu'il n'est vraiment.`,
  },
};
