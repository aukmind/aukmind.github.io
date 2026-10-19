window.TAX_STRINGS = {
  title: { en: `Thai Buying Power`, nl: `Thaise koopkracht`, fr: `Pouvoir d'achat en Thaïlande` },
  eyebrow: { en: `Thailand · tax year 2026 · employee`, nl: `Thailand · belastingjaar 2026 · werknemer`, fr: `Thaïlande · année fiscale 2026 · salarié` },
  eyebrowMinister: { en: `Thailand · tax year 2026 · public office`, nl: `Thailand · belastingjaar 2026 · openbaar ambt`, fr: `Thaïlande · année fiscale 2026 · fonction publique` },
  lead: {
    en: `Every compulsory charge on a Thai salary in 2026, from what your employer pays to what you can buy. Income tax starts late thanks to a generous expense deduction and allowances; social security is capped low.`,
    nl: `Alle verplichte heffingen op een Thais loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. De inkomstenbelasting begint laat dankzij een ruime kostenaftrek en vrijstellingen; de sociale zekerheid heeft een laag plafond.`,
    fr: `Tous les prélèvements obligatoires sur un salaire thaïlandais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. L'impôt commence tard grâce à une large déduction de frais et aux abattements ; la sécurité sociale est plafonnée bas.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married. Each spouse files alone; a spouse with no income gives the other a 60,000 baht allowance. Each earning parent claims the children.`,
    nl: `Gehuwd. Elke partner doet apart aangifte; een partner zonder inkomen geeft de andere een vrijstelling van 60.000 baht. Elke ouder met inkomen trekt de kinderen af.`,
    fr: `Marié(e). Chaque conjoint déclare seul ; un conjoint sans revenu donne à l'autre un abattement de 60 000 bahts. Chaque parent qui a un revenu déduit les enfants.`,
  },
  vatStandard: { en: `(Thai rate is 7%, cut from 10% until September 2027)`, nl: `(Thais tarief is 7%, verlaagd van 10% tot september 2027)`, fr: `(le taux thaïlandais est de 7%, réduit de 10% jusqu'en septembre 2027)` },
  'refWage.min': { en: `Minimum (400 baht a day)`, nl: `Minimum (400 baht per dag)`, fr: `Minimum (400 bahts par jour)` },

  // Minister mode
  ministerOn: { en: `💼 I HOLD PUBLIC OFFICE`, nl: `💼 IK BEKLEED EEN OPENBAAR AMBT`, fr: `💼 J'OCCUPE UNE FONCTION PUBLIQUE` },
  'minRole.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.dpm': { en: `Deputy PM`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Monthly salary + position allowance set by royal decree, taxed as employment income. Political office holders don't pay social security.`,
    nl: `Maandloon + ambtstoelage vastgelegd bij koninklijk besluit, belast als arbeidsinkomen. Politieke ambtsdragers betalen geen sociale zekerheid.`,
    fr: `Salaire mensuel + indemnité de fonction fixés par décret royal, imposés comme un salaire. Les élus et ministres ne cotisent pas à la sécurité sociale.`,
  },
  minSalaryHint: {
    en: `Yearly salary + position allowance. Statutory amount by default.`,
    nl: `Jaarloon + ambtstoelage. Standaard het wettelijke bedrag.`,
    fr: `Salaire annuel + indemnité de fonction. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `Pay for political office is set by the 2011 royal decree on political officials' salaries: a monthly salary plus a position allowance. Prime Minister 75,590 + 50,000 baht, Deputy Prime Minister 74,420 + 45,500, minister 73,240 + 42,500, MP 71,230 + 42,330. Both parts are taxed as employment income with the same deduction and allowances as any employee. Political officials are outside the Social Security Act, so nothing goes to the Social Security Fund. Not confirmed against the decree itself: only the Prime Minister's figure is checked (Bangkok Post, 2021).`,
    nl: `Het loon voor politieke ambten is vastgelegd in het koninklijk besluit van 2011 over de lonen van politieke ambtsdragers: een maandloon plus een ambtstoelage. Premier 75.590 + 50.000 baht, vicepremier 74.420 + 45.500, minister 73.240 + 42.500, parlementslid 71.230 + 42.330. Beide delen worden belast als arbeidsinkomen, met dezelfde aftrek en vrijstellingen als elke werknemer. Politieke ambtsdragers vallen buiten de socialezekerheidswet, dus er gaat niets naar het Social Security Fund. Niet nagekeken in het besluit zelf: enkel het bedrag van de premier is bevestigd (Bangkok Post, 2021).`,
    fr: `La rémunération des fonctions politiques est fixée par le décret royal de 2011 sur les traitements des élus : un salaire mensuel plus une indemnité de fonction. Premier ministre 75 590 + 50 000 bahts, vice-Premier ministre 74 420 + 45 500, ministre 73 240 + 42 500, député 71 230 + 42 330. Les deux sont imposés comme un salaire, avec la même déduction et les mêmes abattements qu'un salarié. Les élus et ministres sont hors du champ de la loi sur la sécurité sociale : rien ne va au Social Security Fund. Non vérifié dans le décret lui-même : seul le montant du Premier ministre est confirmé (Bangkok Post, 2021).`,
  },
  'bd.minGross': { en: `Salary + position allowance`, nl: `Loon + ambtstoelage`, fr: `Salaire + indemnité de fonction` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: `The monthly salary and position allowance set by royal decree, × 12.`,
    nl: `Het maandloon en de ambtstoelage vastgelegd bij koninklijk besluit, × 12.`,
    fr: `Le salaire mensuel et l'indemnité de fonction fixés par décret royal, × 12.`,
  },
  'tip.stateCost': {
    en: `The pay itself: there is no employer social security on political office. The work and full tax rates are measured against it.`,
    nl: `Het loon zelf: op een politiek ambt is er geen werkgeversbijdrage voor sociale zekerheid. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `La rémunération elle-même : aucune cotisation patronale sur une fonction politique. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },
  'tip.minSs': {
    en: `None: political office holders are not insured under the Social Security Act.`,
    nl: `Geen: politieke ambtsdragers zijn niet verzekerd onder de socialezekerheidswet.`,
    fr: `Aucune : les élus et ministres ne sont pas assurés au titre de la loi sur la sécurité sociale.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.dpm': { en: `Deputy Prime Minister`, nl: `Vicepremier`, fr: `Vice-Premier ministre` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'pol.stat.pm': { en: `Salary + position allowance`, nl: `Loon + ambtstoelage`, fr: `Salaire + indemnité de fonction` },
  'pol.stat.dpm': { en: `Salary + position allowance`, nl: `Loon + ambtstoelage`, fr: `Salaire + indemnité de fonction` },
  'pol.stat.minister': { en: `Salary + position allowance`, nl: `Loon + ambtstoelage`, fr: `Salaire + indemnité de fonction` },
  'pol.stat.mp': { en: `Salary + position allowance, without staff and travel budgets`, nl: `Loon + ambtstoelage, zonder budgetten voor personeel en reizen`, fr: `Salaire + indemnité de fonction, hors budgets de personnel et de déplacement` },
  'polNote.office': {
    en: `Salary + position allowance taxed as employment income, no social security. Official residence, car and staff not counted. The head sits at the employee salary with the same net, with your household; the dot is their actual gross.`,
    nl: `Loon + ambtstoelage belast als arbeidsinkomen, geen sociale zekerheid. Ambtswoning, wagen en personeel niet meegeteld. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin; het bolletje is hun echte bruto.`,
    fr: `Salaire + indemnité de fonction imposés comme un salaire, sans sécurité sociale. Résidence, voiture et personnel non comptés. La tête est au salaire d'un salarié au même net, avec votre foyer ; le point est leur vrai brut.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. Office holders are placed where an employee would earn the same net. Pay from the 2011 royal decree, see ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Ambtsdragers staan waar een werknemer hetzelfde netto zou verdienen. Lonen uit het koninklijk besluit van 2011, zie ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. Les élus sont placés là où un salarié gagnerait le même net. Rémunérations du décret royal de 2011, voir ${links}.`,
  },
  'src.pol.pm': { en: `Wikipedia: Prime Minister of Thailand`, nl: `Wikipedia: premier van Thailand`, fr: `Wikipédia : Premier ministre de Thaïlande` },
  'src.pol.dpm': { en: `Royal decree on political officials' pay, 2011`, nl: `Koninklijk besluit over lonen van politieke ambtsdragers, 2011`, fr: `Décret royal sur les traitements des élus, 2011` },
  'src.pol.minister': { en: `Royal decree on political officials' pay, 2011`, nl: `Koninklijk besluit over lonen van politieke ambtsdragers, 2011`, fr: `Décret royal sur les traitements des élus, 2011` },
  'src.pol.mp': { en: `Royal decree on political officials' pay, 2011`, nl: `Koninklijk besluit over lonen van politieke ambtsdragers, 2011`, fr: `Décret royal sur les traitements des élus, 2011` },
  bracketTop: { en: `35% bracket`, nl: `schijf van 35%`, fr: `tranche à 35%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: () => `What happens at low pay?`,
    nl: () => `Wat gebeurt er bij een laag loon?`,
    fr: () => `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, free) => `There is no in-work benefit to lose. At the minimum wage (${a}) you pay only 5% social security, and so does your employer. Half your pay (up to 100,000 baht a year), the 60,000 baht personal allowance, your social security and the first 150,000 baht of net income are tax-free, so income tax starts only around ${free || '-'}.`,
    nl: (a, free) => `Er is geen inkomensaanvulling die wegvalt. Op het minimumloon (${a}) betaal je enkel 5% sociale zekerheid, net als je werkgever. De helft van je loon (tot 100.000 baht per jaar), de persoonlijke vrijstelling van 60.000 baht, je sociale bijdragen en de eerste 150.000 baht netto-inkomen zijn belastingvrij, dus de inkomstenbelasting begint pas rond ${free || '-'}.`,
    fr: (a, free) => `Aucune prestation liée au travail ne disparaît. Au salaire minimum (${a}), vous ne payez que 5% de sécurité sociale, comme votre employeur. La moitié du salaire (jusqu'à 100 000 bahts par an), l'abattement personnel de 60 000 bahts, vos cotisations et les 150 000 premiers bahts de revenu net sont exonérés : l'impôt ne commence que vers ${free || '-'}.`,
  },
  topTitle: {
    en: top => `What changes above ${top}?`,
    nl: top => `Wat verandert er boven ${top}?`,
    fr: top => `Que change-t-il au-delà de ${top} ?`,
  },
  topBody: {
    en: (top, end, cap) => `Above ${top} your net income passes 5 million baht a year and each extra baht is taxed at the top rate of 35%. Social security stopped growing long before, at ${cap} a month, so from there on the marginal rate is income tax alone.`,
    nl: (top, end, cap) => `Boven ${top} gaat je netto-inkomen over 5 miljoen baht per jaar en wordt elke extra baht belast aan het toptarief van 35%. De sociale bijdrage groeit al veel eerder niet meer, vanaf ${cap} per maand, dus vanaf dan is het marginale tarief enkel inkomstenbelasting.`,
    fr: (top, end, cap) => `Au-delà de ${top}, votre revenu net dépasse 5 millions de bahts par an et chaque baht en plus est taxé au taux maximal de 35%. La sécurité sociale a cessé d'augmenter bien plus bas, à ${cap} par mois : à partir de là, le taux marginal n'est plus que l'impôt.`,
  },

  // Tax components
  'comp.er': { en: `Employer social security`, nl: `Sociale zekerheid werkgever`, fr: `Sécurité sociale employeur` },
  'comp.ee': { en: `Employee social security`, nl: `Sociale zekerheid werknemer`, fr: `Sécurité sociale salariale` },
  'comp.ir': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'bd.expense': { en: `Expense deduction (50%)`, nl: `Kostenaftrek (50%)`, fr: `Déduction de frais (50%)` },
  'bd.allow': { en: `Allowances`, nl: `Vrijstellingen`, fr: `Abattements` },
  'bd.taxable': { en: `Net income (taxable)`, nl: `Netto-inkomen (belastbaar)`, fr: `Revenu net imposable` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries. Many Thai employers add a yearly bonus: pick 13 or 14 months to include one.`,
    nl: `12 maandlonen. Veel Thaise werkgevers betalen een jaarlijkse bonus: kies 13 of 14 maanden om die mee te tellen.`,
    fr: `12 salaires mensuels. Beaucoup d'employeurs thaïlandais versent une prime annuelle : choisissez 13 ou 14 mois pour l'inclure.`,
  },
  'tip.fBonus': {
    en: `12 monthly salaries plus a bonus worth one or two months. The bonus is taxed like salary but, as a one-off payment, isn't counted for social security, which is capped anyway.`,
    nl: `12 maandlonen plus een bonus van een of twee maanden. De bonus wordt belast zoals loon, maar telt als eenmalige betaling niet mee voor de sociale zekerheid, die toch al begrensd is.`,
    fr: `12 salaires mensuels plus une prime d'un ou deux mois. La prime est imposée comme le salaire mais, versée en une fois, n'entre pas dans la sécurité sociale, de toute façon plafonnée.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Thailand taxes each spouse separately. If your spouse has no income you get a 60,000 baht spouse allowance. Each parent with income deducts 30,000 baht for the first child and 60,000 for each later child born from 2018 (assumed here). Your tax = the household's tax − what it would pay if you earned nothing.`,
    nl: `Thailand belast elke partner apart. Heeft je partner geen inkomen, dan krijg je een partnervrijstelling van 60.000 baht. Elke ouder met inkomen trekt 30.000 baht af voor het eerste kind en 60.000 voor elk volgend kind geboren vanaf 2018 (hier verondersteld). Jouw belasting = de belasting van het gezin − wat het zou betalen als jij niets verdiende.`,
    fr: `La Thaïlande impose chaque conjoint séparément. Si votre conjoint n'a pas de revenu, vous avez un abattement de conjoint de 60 000 bahts. Chaque parent qui a un revenu déduit 30 000 bahts pour le premier enfant et 60 000 pour chaque enfant suivant né depuis 2018 (supposé ici). Votre impôt = l'impôt du foyer − ce qu'il paierait sans vos revenus.`,
  },
  'tip.costShort': { en: `Gross salary + employer social security.`, nl: `Brutoloon + werkgeversbijdrage sociale zekerheid.`, fr: `Salaire brut + sécurité sociale employeur.` },
  'tip.er': {
    en: `Paid by your employer on top of your gross salary: 5% of the monthly wage up to 17,500 baht, so at most 875 baht a month. The State also pays in. The Workmen's Compensation Fund (0.2% to 1% by industry) is left out.`,
    nl: `Betaald door je werkgever bovenop je brutoloon: 5% van het maandloon tot 17.500 baht, dus hoogstens 875 baht per maand. De staat draagt ook bij. Het Workmen's Compensation Fund (0,2% tot 1% volgens sector) is niet meegeteld.`,
    fr: `Payée par votre employeur en plus du salaire brut : 5% du salaire mensuel jusqu'à 17 500 bahts, soit 875 bahts par mois au plus. L'État cotise aussi. Le Workmen's Compensation Fund (0,2% à 1% selon le secteur) n'est pas compté.`,
  },
  'tip.ee': {
    en: `Withheld from your pay: 5% of the monthly wage up to 17,500 baht (875 baht a month at most, the ceiling raised from 15,000 in 2026). It covers sickness, maternity, disability, death, child allowance, old age and unemployment, and is deductible from income tax.`,
    nl: `Ingehouden op je loon: 5% van het maandloon tot 17.500 baht (hoogstens 875 baht per maand, het plafond ging in 2026 omhoog van 15.000). Het dekt ziekte, moederschap, invaliditeit, overlijden, kinderbijslag, ouderdom en werkloosheid, en is aftrekbaar van de inkomstenbelasting.`,
    fr: `Retenue sur votre paie : 5% du salaire mensuel jusqu'à 17 500 bahts (875 bahts par mois au plus, plafond relevé de 15 000 en 2026). Elle couvre maladie, maternité, invalidité, décès, allocations familiales, vieillesse et chômage, et se déduit de l'impôt sur le revenu.`,
  },
  'tip.expense': {
    en: calc => `Employees deduct 50% of their pay as expenses, up to 100,000 baht a year, without receipts. Yours:${calc}`,
    nl: calc => `Werknemers trekken forfaitair 50% van hun loon af als kosten, tot 100.000 baht per jaar, zonder bewijsstukken. Die van jou:${calc}`,
    fr: calc => `Les salariés déduisent 50% de leur salaire au titre des frais, jusqu'à 100 000 bahts par an, sans justificatif. La vôtre :${calc}`,
  },
  'tip.allow': {
    en: `60,000 baht for you, 60,000 for a spouse with no income, 30,000 for the first child and 60,000 for each later child born from 2018.`,
    nl: `60.000 baht voor jezelf, 60.000 voor een partner zonder inkomen, 30.000 voor het eerste kind en 60.000 voor elk volgend kind geboren vanaf 2018.`,
    fr: `60 000 bahts pour vous, 60 000 pour un conjoint sans revenu, 30 000 pour le premier enfant et 60 000 pour chaque enfant suivant né depuis 2018.`,
  },
  'tip.allowPers': { en: `Personal allowance`, nl: `Persoonlijke vrijstelling`, fr: `Abattement personnel` },
  'tip.allowSpouse': { en: `Spouse with no income`, nl: `Partner zonder inkomen`, fr: `Conjoint sans revenu` },
  'tip.allowKids': {
    en: n => `${n} child${n > 1 ? 'ren' : ''}`,
    nl: n => `${n} kind${n > 1 ? 'eren' : ''}`,
    fr: n => `${n} enfant${n > 1 ? 's' : ''}`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − expense deduction − allowances − social security contributions${calc}.`,
    nl: calc => `Brutoloon − kostenaftrek − vrijstellingen − sociale bijdragen${calc}.`,
    fr: calc => `Salaire brut − déduction de frais − abattements − cotisations sociales${calc}.`,
  },
  'tip.irShort': {
    en: `Net income through the brackets: 0% to 150,000 baht, then 5% to 35%.`,
    nl: `Netto-inkomen door de schijven: 0% tot 150.000 baht, daarna 5% tot 35%.`,
    fr: `Revenu net passé au barème : 0% jusqu'à 150 000 bahts, puis de 5% à 35%.`,
  },
  'tip.irIncome': { en: `Employment income`, nl: `Inkomen uit arbeid`, fr: `Revenu salarial` },
  'tip.irPerson': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt` },
  'tip.irYou': { en: `You`, nl: `Jij`, fr: `Vous` },
  'tip.irPartner': { en: `Your spouse`, nl: `Je partner`, fr: `Votre conjoint` },
  'tip.irHousehold': { en: `Household tax`, nl: `Belasting van het gezin`, fr: `Impôt du foyer` },
  'tip.irWithout': { en: `Household tax if you earned nothing`, nl: `Belasting als jij niets verdiende`, fr: `Impôt du foyer sans vos revenus` },
  'tip.irYours': { en: `Your share`, nl: `Jouw deel`, fr: `Votre part` },
  'tip.vatM': {
    en: `Fresh food, rent, healthcare and education are exempt, so this is an upper bound. The legal rate is 10%; a royal decree has kept it at 7% since 1999, now until 30 September 2027.`,
    nl: `Verse voeding, huur, gezondheidszorg en onderwijs zijn vrijgesteld, dus dit is een bovengrens. Het wettelijke tarief is 10%; een koninklijk besluit houdt het sinds 1999 op 7%, nu tot 30 september 2027.`,
    fr: `Les produits frais, les loyers, la santé et l'enseignement sont exonérés : c'est donc un maximum. Le taux légal est de 10% ; un décret royal le maintient à 7% depuis 1999, désormais jusqu'au 30 septembre 2027.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − social security − income tax.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − sociale zekerheid − inkomstenbelasting.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − sécurité sociale − impôt.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · tax year 2026 (1 January to 31 December)`,
    nl: `Gebruikte regels · belastingjaar 2026 (1 januari tot 31 december)`,
    fr: `Règles utilisées · année fiscale 2026 (1er janvier au 31 décembre)`,
  },
  'ref.ss': {
    en: { h: `1 · Social security`, li: [
      `Employee <span class="num">5%</span> and employer <span class="num">5%</span> of the monthly wage, capped at 17,500 baht: at most <span class="num">875 baht</span> each a month. The State also pays in.`,
      `Employee contributions are deductible from income tax.`,
    ] },
    nl: { h: `1 · Sociale zekerheid`, li: [
      `Werknemer <span class="num">5%</span> en werkgever <span class="num">5%</span> van het maandloon, begrensd op 17.500 baht: hoogstens <span class="num">875 baht</span> elk per maand. De staat draagt ook bij.`,
      `De werknemersbijdragen zijn aftrekbaar van de inkomstenbelasting.`,
    ] },
    fr: { h: `1 · Sécurité sociale`, li: [
      `Salarié <span class="num">5%</span> et employeur <span class="num">5%</span> du salaire mensuel, plafonné à 17 500 bahts : au plus <span class="num">875 bahts</span> chacun par mois. L'État cotise aussi.`,
      `Les cotisations salariales se déduisent de l'impôt sur le revenu.`,
    ] },
  },
  'ref.ir': {
    en: br => ({ h: `2 · Personal income tax`, li: [
      `Brackets on net income:${br}`,
      `Net income = pay − 50% expense deduction (max 100,000 baht) − allowances − social security.`,
      `Allowances: <span class="num">60,000</span> personal, <span class="num">60,000</span> spouse with no income, <span class="num">30,000</span> first child, <span class="num">60,000</span> each later child born from 2018.`,
    ] }),
    nl: br => ({ h: `2 · Personenbelasting`, li: [
      `Schijven op het netto-inkomen:${br}`,
      `Netto-inkomen = loon − 50% kostenaftrek (max. 100.000 baht) − vrijstellingen − sociale zekerheid.`,
      `Vrijstellingen: <span class="num">60.000</span> persoonlijk, <span class="num">60.000</span> partner zonder inkomen, <span class="num">30.000</span> eerste kind, <span class="num">60.000</span> elk volgend kind geboren vanaf 2018.`,
    ] }),
    fr: br => ({ h: `2 · Impôt sur le revenu`, li: [
      `Barème sur le revenu net :${br}`,
      `Revenu net = salaire − déduction de frais de 50% (max. 100 000 bahts) − abattements − sécurité sociale.`,
      `Abattements : <span class="num">60 000</span> personnel, <span class="num">60 000</span> conjoint sans revenu, <span class="num">30 000</span> premier enfant, <span class="num">60 000</span> chaque enfant suivant né depuis 2018.`,
    ] }),
  },
  'ref.vat': {
    en: { h: `3 · VAT on spending`, li: [
      `Rate <span class="num">7%</span> (legal rate 10%, reduced until 30 September 2027), applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × r / (100 + r): at 7% that's 7 / 107 = <span class="num">6.54%</span> of what you pay.`,
    ] },
    nl: { h: `3 · Btw op uitgaven`, li: [
      `Tarief <span class="num">7%</span> (wettelijk 10%, verlaagd tot 30 september 2027), toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 7% is dat 7 / 107 = <span class="num">6,54%</span> van wat je betaalt.`,
    ] },
    fr: { h: `3 · TVA sur les dépenses`, li: [
      `Taux <span class="num">7%</span> (taux légal 10%, réduit jusqu'au 30 septembre 2027), appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 7%, cela fait 7 / 107 = <span class="num">6,54%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `4 · Government and Parliament`, li: [
      `Monthly salary + position allowance: Prime Minister <span class="num">125,590</span>, Deputy Prime Minister <span class="num">119,920</span>, minister <span class="num">115,740</span>, MP <span class="num">113,560</span> baht.`,
      `Taxed as employment income, no social security.`,
    ] },
    nl: { h: `4 · Regering en parlement`, li: [
      `Maandloon + ambtstoelage: premier <span class="num">125.590</span>, vicepremier <span class="num">119.920</span>, minister <span class="num">115.740</span>, parlementslid <span class="num">113.560</span> baht.`,
      `Belast als arbeidsinkomen, geen sociale zekerheid.`,
    ] },
    fr: { h: `4 · Gouvernement et Parlement`, li: [
      `Salaire mensuel + indemnité de fonction : Premier ministre <span class="num">125 590</span>, vice-Premier ministre <span class="num">119 920</span>, ministre <span class="num">115 740</span>, député <span class="num">113 560</span> bahts.`,
      `Imposés comme un salaire, sans sécurité sociale.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Optional deductions: provident fund, retirement and Thai ESG funds, life and health insurance, mortgage interest, parents' allowance, donations, Easy E-Receipt spending.`,
      `The Workmen's Compensation Fund (employer, 0.2% to 1%), the state welfare card and the child support grant for poor households. Income tax is the year's final tax, assuming even monthly pay.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Vrijwillige aftrekposten: provident fund, pensioen- en Thai ESG-fondsen, levens- en ziekteverzekering, hypotheekrente, vrijstelling voor ouders, giften, uitgaven via Easy E-Receipt.`,
      `Het Workmen's Compensation Fund (werkgever, 0,2% tot 1%), de welzijnskaart en de kindertoelage voor arme gezinnen. De inkomstenbelasting is die voor het hele jaar, met een gelijk maandloon.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Déductions facultatives : provident fund, fonds retraite et Thai ESG, assurance vie et santé, intérêts d'emprunt immobilier, abattement pour les parents, dons, dépenses Easy E-Receipt.`,
      `Le Workmen's Compensation Fund (employeur, 0,2% à 1%), la carte d'aide sociale et l'allocation pour enfant des foyers pauvres. L'impôt est celui de l'année, pour un salaire mensuel régulier.`,
    ] },
  },

  inheritLink: {
    en: `What heirs pay on very large inheritances →`,
    nl: `Wat erfgenamen betalen op zeer grote erfenissen →`,
    fr: `Ce que paient les héritiers sur les très gros héritages →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and the Revenue Department decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en het Revenue Department zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et le Revenue Department font foi.`,
  },

  'src.pit': { en: `PwC: Thailand personal income tax`, nl: `PwC: Thaise personenbelasting`, fr: `PwC : impôt sur le revenu en Thaïlande` },
  'src.ded': { en: `PwC: Thailand deductions`, nl: `PwC: Thaise aftrekposten`, fr: `PwC : déductions en Thaïlande` },
  'src.ss': { en: `PwC: Thailand social security`, nl: `PwC: Thaise sociale zekerheid`, fr: `PwC : sécurité sociale en Thaïlande` },
  'src.sso': { en: `Social Security Office`, nl: `Social Security Office`, fr: `Social Security Office` },
  'src.rd': { en: `Revenue Department`, nl: `Revenue Department`, fr: `Revenue Department` },
  'src.vat': { en: `PwC: Thailand VAT`, nl: `PwC: Thaise btw`, fr: `PwC : TVA en Thaïlande` },
  'src.minWage': { en: `Trading Economics: minimum wage`, nl: `Trading Economics: minimumloon`, fr: `Trading Economics : salaire minimum` },
  'src.pol': { en: `political office pay`, nl: `lonen van politieke ambten`, fr: `les rémunérations politiques` },
};
