window.TAX_STRINGS = {
  title: { en: `Greek Buying Power`, nl: `Griekse koopkracht`, fr: `Pouvoir d'achat en Grèce` },
  eyebrow: { en: `Greece · income 2026 · employee`, nl: `Griekenland · inkomen 2026 · werknemer`, fr: `Grèce · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Greece · income 2026 · minister`, nl: `Griekenland · inkomen 2026 · minister`, fr: `Grèce · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Greek salary in 2026, from what your employer pays to what you can buy. Fourteen payments a year, EFKA contributions up to a ceiling, and the new 2026 scale with lower rates for parents and for people under 30.`,
    nl: `Alle belastingen op een Grieks loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Veertien betalingen per jaar, EFKA-bijdragen tot een plafond, en de nieuwe schaal van 2026 met lagere tarieven voor ouders en voor wie jonger is dan 30.`,
    fr: `Tous les prélèvements sur un salaire grec en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Quatorze versements par an, des cotisations EFKA plafonnées, et le nouveau barème 2026 avec des taux réduits pour les parents et les moins de 30 ans.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married or in a civil partnership. Spouses file one return but each is taxed on their own pay, and both get the rates and reduction for their children.`,
    nl: `Gehuwd of met samenlevingscontract. Partners dienen één aangifte in, maar elk wordt belast op het eigen loon, en beiden krijgen de tarieven en vermindering voor hun kinderen.`,
    fr: `Marié ou en pacte de vie commune. Les conjoints déposent une seule déclaration, mais chacun est imposé sur son propre salaire, et tous deux bénéficient des taux et de la réduction pour leurs enfants.`,
  },
  region: { en: `Your age in 2026`, nl: `Je leeftijd in 2026`, fr: `Votre âge en 2026` },
  'region.none': { en: `31 or more`, nl: `31 of ouder`, fr: `31 ans ou plus` },
  'region.u25': { en: `Up to 25`, nl: `Tot 25`, fr: `Jusqu'à 25 ans` },
  'region.u30': { en: `26 to 30`, nl: `26 tot 30`, fr: `26 à 30 ans` },
  vatStandard: { en: `(Greece's standard rate is 24%)`, nl: `(het Griekse normale tarief is 24%)`, fr: `(le taux normal grec est de 24%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.dep': { en: `Deputy minister`, nl: `Onderminister`, fr: `Vice-ministre` },
  'minRole.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  ministerHint: {
    en: `Pay of a minister without a seat in Parliament, set in January 2024, paid 12 times a year. Taxed like any salary.`,
    nl: `Loon van een minister zonder zetel in het parlement, vastgelegd in januari 2024, 12 keer per jaar betaald. Belast zoals elk loon.`,
    fr: `Rémunération d'un ministre sans siège au Parlement, fixée en janvier 2024, versée 12 fois par an. Imposée comme tout salaire.`,
  },
  minSalaryHint: {
    en: `Yearly pay, monthly amount × 12. Statutory amount by default.`,
    nl: `Jaarloon, maandbedrag × 12. Standaard het wettelijke bedrag.`,
    fr: `Rémunération annuelle, montant mensuel × 12. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `Since January 2024 a minister without a seat in Parliament gets 90% of the pay of the President of the Supreme Court (Areios Pagos), a deputy minister 80%: about €7,583 and €6,740 gross a month. Ministers who are MPs keep the MP pay instead. No 13th or 14th month in the public sector. Figures are the 2024 amounts; later judicial pay rises would lift them.`,
    nl: `Sinds januari 2024 krijgt een minister zonder zetel in het parlement 90% van het loon van de voorzitter van het Hooggerechtshof (Areios Pagos), een onderminister 80%: ongeveer € 7.583 en € 6.740 bruto per maand. Ministers die parlementslid zijn, houden in de plaats het parlementsloon. Geen 13de of 14de maand in de publieke sector. Het zijn de bedragen van 2024; latere loonsverhogingen voor rechters tillen ze op.`,
    fr: `Depuis janvier 2024, un ministre sans siège au Parlement touche 90% de la rémunération du président de la Cour de cassation (Areios Pagos), un vice-ministre 80% : environ 7 583 € et 6 740 € brut par mois. Les ministres députés gardent à la place l'indemnité de député. Pas de 13e ni de 14e mois dans le secteur public. Ce sont les montants de 2024 ; les hausses ultérieures des salaires des juges les relèvent.`,
  },

  // Politicians on the chart
  'stat.min': { en: `Minister (no seat)`, nl: `Minister (geen zetel)`, fr: `Ministre (sans siège)` },
  'stat.dep': { en: `Deputy minister (no seat)`, nl: `Onderminister (geen zetel)`, fr: `Vice-ministre (sans siège)` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'stat.gs': { en: `Ministry secretary-general`, nl: `Secretaris-generaal ministerie`, fr: `Secrétaire général de ministère` },
  'pol.stat.min': { en: `90% of the Supreme Court President's pay`, nl: `90% van het loon van de voorzitter van het Hooggerechtshof`, fr: `90% de la rémunération du président de la Cour de cassation` },
  'pol.stat.dep': { en: `80% of the Supreme Court President's pay`, nl: `80% van het loon van de voorzitter van het Hooggerechtshof`, fr: `80% de la rémunération du président de la Cour de cassation` },
  'pol.stat.mp': { en: `Base pay, without the tax-free expense allowances`, nl: `Basisloon, zonder de belastingvrije onkostenvergoedingen`, fr: `Indemnité de base, hors indemnités de frais non imposables` },
  'pol.stat.gs': { en: `Since January 2024`, nl: `Sinds januari 2024`, fr: `Depuis janvier 2024` },
  'polNote.stat': {
    en: `Taxed like any salary. The head sits at its gross.`,
    nl: `Belast zoals elk loon. Het hoofdje staat op het bruto.`,
    fr: `Imposé comme tout salaire. La tête est placée à son brut.`,
  },
  'polTipNote.min': {
    en: `About €7,583 gross a month since January 2024, €4,416 net. Ministers with a seat get the MP pay instead.`,
    nl: `Ongeveer € 7.583 bruto per maand sinds januari 2024, € 4.416 netto. Ministers met een zetel krijgen in de plaats het parlementsloon.`,
    fr: `Environ 7 583 € brut par mois depuis janvier 2024, 4 416 € net. Les ministres députés touchent à la place l'indemnité de député.`,
  },
  'polTipNote.dep': {
    en: `About €6,740 gross a month since January 2024.`,
    nl: `Ongeveer € 6.740 bruto per maand sinds januari 2024.`,
    fr: `Environ 6 740 € brut par mois depuis janvier 2024.`,
  },
  'polTipNote.mp': {
    en: `Base pay of about €5,135 a month. Rent, office and postage allowances of €1,865 to €3,388 come on top and aren't counted. Most MPs also pay a share to their party.`,
    nl: `Basisloon van ongeveer € 5.135 per maand. Vergoedingen voor huur, kantoor en post van € 1.865 tot € 3.388 komen erbovenop en tellen niet mee. De meeste parlementsleden storten ook een deel aan hun partij.`,
    fr: `Indemnité de base d'environ 5 135 € par mois. Les indemnités de loyer, de bureau et de courrier, de 1 865 € à 3 388 €, s'ajoutent et ne sont pas comptées. La plupart des députés reversent aussi une part à leur parti.`,
  },
  'polTipNote.gs': {
    en: `About €5,121 gross a month since January 2024, up from €4,631.`,
    nl: `Ongeveer € 5.121 bruto per maand sinds januari 2024, eerst € 4.631.`,
    fr: `Environ 5 121 € brut par mois depuis janvier 2024, contre 4 631 € avant.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, paid 12 times a year, shown on the chart as yearly ÷ the months paid. Greek politicians are taxed like employees, so everyone sits at their gross. Amounts from January 2024. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, 12 keer per jaar betaald, op de grafiek als jaarbedrag ÷ de betaalde maanden. Griekse politici worden belast als werknemers, dus iedereen staat op het eigen bruto. Bedragen van januari 2024. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, versé 12 fois par an, placé sur le graphique en montant annuel ÷ les mois payés. Les politiciens grecs sont imposés comme des salariés : chacun est placé à son brut. Montants de janvier 2024. Sources : ${links}.`,
  },
  'src.pol.min': { en: `Parapolitika: public office pay 2024`, nl: `Parapolitika: lonen openbare ambten 2024`, fr: `Parapolitika : rémunérations publiques 2024` },
  'src.pol.dep': { en: `Parapolitika: public office pay 2024`, nl: `Parapolitika: lonen openbare ambten 2024`, fr: `Parapolitika : rémunérations publiques 2024` },
  'src.pol.mp': { en: `Parapolitika: public office pay 2024`, nl: `Parapolitika: lonen openbare ambten 2024`, fr: `Parapolitika : rémunérations publiques 2024` },
  'src.pol.gs': { en: `Parapolitika: public office pay 2024`, nl: `Parapolitika: lonen openbare ambten 2024`, fr: `Parapolitika : rémunérations publiques 2024` },
  bracketTop: { en: `44% bracket`, nl: `schijf van 44%`, fr: `tranche à 44%` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: (a, b) => b ? `Why no income tax up to ${b}?` : `What happens at low pay?`,
    nl: (a, b) => b ? `Waarom geen inkomstenbelasting tot ${b}?` : `Wat gebeurt er bij een laag loon?`,
    fr: (a, b) => b ? `Pourquoi aucun impôt sur le revenu jusqu'à ${b} ?` : `Que se passe-t-il aux bas salaires ?`,
  },
  trapBody: {
    en: (a, b, red) => b
      ? `Your tax reduction of ${red} a year, plus the lower rates for your age or your children, cancels the income tax up to ${b}. Only the EFKA contributions are taken. Above that, income tax comes in at the rate of your bracket, and above €12,000 of taxable income the reduction also shrinks by 2% of each extra euro.`
      : `Greece has no tax-free amount but a tax reduction of ${red} a year, enough to cancel the tax on about the first €8,600 of taxable income. At the minimum wage of ${a}, paid 14 times, you already pay a little income tax on top of the 13.37% EFKA contribution.`,
    nl: (a, b, red) => b
      ? `Je belastingvermindering van ${red} per jaar, samen met de lagere tarieven voor je leeftijd of je kinderen, wist de inkomstenbelasting uit tot ${b}. Alleen de EFKA-bijdragen worden ingehouden. Daarboven komt de belasting erbij aan het tarief van je schijf, en boven € 12.000 belastbaar inkomen krimpt de vermindering ook met 2% van elke extra euro.`
      : `Griekenland heeft geen belastingvrije som, maar een belastingvermindering van ${red} per jaar, genoeg om de belasting op ongeveer de eerste € 8.600 belastbaar inkomen weg te werken. Op het minimumloon van ${a}, 14 keer betaald, betaal je al wat inkomstenbelasting bovenop de EFKA-bijdrage van 13,37%.`,
    fr: (a, b, red) => b
      ? `Votre réduction d'impôt de ${red} par an, avec les taux réduits liés à votre âge ou à vos enfants, annule l'impôt sur le revenu jusqu'à ${b}. Seules les cotisations EFKA sont retenues. Au-delà, l'impôt s'applique au taux de votre tranche, et au-dessus de 12 000 € de revenu imposable la réduction diminue en plus de 2% de chaque euro supplémentaire.`
      : `La Grèce n'a pas d'abattement mais une réduction d'impôt de ${red} par an, qui annule l'impôt sur environ les 8 600 premiers euros de revenu imposable. Au salaire minimum de ${a}, versé 14 fois, vous payez déjà un peu d'impôt en plus de la cotisation EFKA de 13,37%.`,
  },
  topTitle: {
    en: top => `Why the jump at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi le saut à ${top} ?`,
  },
  topBody: {
    en: top => `From ${top}, taxable income passes €60,000 and each extra euro is taxed at 44%, the top rate, whatever your age or children. Higher up, at €7,761.94 a payment, EFKA contributions stop at their ceiling and the rate falls back.`,
    nl: top => `Vanaf ${top} komt het belastbare inkomen boven € 60.000 en wordt elke extra euro belast aan 44%, het toptarief, ongeacht je leeftijd of kinderen. Hoger, bij € 7.761,94 per betaling, stoppen de EFKA-bijdragen aan hun plafond en daalt het tarief weer.`,
    fr: top => `À partir de ${top}, le revenu imposable dépasse 60 000 € et chaque euro en plus est imposé à 44%, le taux maximal, quels que soient votre âge et vos enfants. Plus haut, à 7 761,94 € par versement, les cotisations EFKA atteignent leur plafond et le taux redescend.`,
  },

  // Tax components
  'comp.er': { en: `Employer EFKA contributions`, nl: `EFKA-bijdragen werkgever`, fr: `Cotisations patronales EFKA` },
  'comp.ee': { en: `Employee EFKA contributions`, nl: `EFKA-bijdragen werknemer`, fr: `Cotisations salariales EFKA` },
  'comp.ir': { en: `Income tax`, nl: `Inkomstenbelasting`, fr: `Impôt sur le revenu` },
  'bd.taxableGr': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.scale': { en: `Tax on the scale`, nl: `Belasting volgens de schaal`, fr: `Impôt selon le barème` },
  'bd.red': { en: `Tax reduction`, nl: `Belastingvermindering`, fr: `Réduction d'impôt` },

  // Tooltips
  'tip.f14': {
    en: `14 payments, the norm for Greek employees: 12 monthly salaries plus a Christmas bonus (one month), an Easter bonus and a summer leave allowance (half a month each). The bonuses are taxed and insured like pay.`,
    nl: `14 betalingen, de norm voor Griekse werknemers: 12 maandlonen plus een kerstpremie (één maand), een paaspremie en een vakantiegeld (elk een halve maand). De premies worden belast en verzekerd zoals loon.`,
    fr: `14 versements, la norme pour les salariés grecs : 12 salaires mensuels plus une prime de Noël (un mois), une prime de Pâques et une allocation de congé d'été (un demi-mois chacune). Les primes sont imposées et cotisées comme un salaire.`,
  },
  'tip.f12': {
    en: `12 payments, as in the public sector or when the bonuses are folded into the monthly pay.`,
    nl: `12 betalingen, zoals in de publieke sector of als de premies in het maandloon zijn verwerkt.`,
    fr: `12 versements, comme dans le secteur public ou quand les primes sont intégrées au salaire mensuel.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Spouses and civil partners file a joint return, but the tax is worked out for each on their own pay. Your partner's pay doesn't change your tax. Both of you get the lower rates and the higher tax reduction for your dependent children.`,
    nl: `Gehuwden en partners met samenlevingscontract dienen samen aangifte in, maar de belasting wordt voor elk apart op het eigen loon berekend. Het loon van je partner verandert jouw belasting niet. Jullie krijgen allebei de lagere tarieven en de hogere vermindering voor de kinderen ten laste.`,
    fr: `Les conjoints et partenaires de pacte déposent une déclaration commune, mais l'impôt est calculé pour chacun sur son propre salaire. Le salaire de votre conjoint ne change pas votre impôt. Tous deux bénéficient des taux réduits et de la réduction majorée pour les enfants à charge.`,
  },
  'tip.reg': {
    en: `Since 2026, people up to 25 pay 0% on the first €20,000 of taxable income, and people aged 26 to 30 pay 9% instead of 20% from €10,000 to €20,000. Above that the normal scale applies. EFKA and VAT are unchanged.`,
    nl: `Sinds 2026 betalen wie tot 25 is 0% op de eerste € 20.000 belastbaar inkomen, en wie 26 tot 30 is 9% in plaats van 20% tussen € 10.000 en € 20.000. Daarboven geldt de gewone schaal. EFKA en btw blijven gelijk.`,
    fr: `Depuis 2026, les jeunes jusqu'à 25 ans paient 0% sur les 20 000 premiers euros de revenu imposable, et les 26 à 30 ans 9% au lieu de 20% entre 10 000 € et 20 000 €. Au-delà, le barème normal s'applique. EFKA et TVA inchangées.`,
  },
  'tip.costShort': { en: `Gross salary + 21.79% employer EFKA contributions.`, nl: `Brutoloon + 21,79% EFKA-bijdragen werkgever.`, fr: `Salaire brut + 21,79% de cotisations patronales EFKA.` },
  'tip.er': {
    en: cap => `Paid by your employer on top of your gross salary: 21.79% for pension, supplementary pension, health and unemployment, on pay up to ${cap} a payment.`,
    nl: cap => `Betaald door je werkgever bovenop je brutoloon: 21,79% voor pensioen, aanvullend pensioen, gezondheid en werkloosheid, op loon tot ${cap} per betaling.`,
    fr: cap => `Payées par votre employeur en plus de votre salaire brut : 21,79% pour la retraite, la retraite complémentaire, la santé et le chômage, sur la paie jusqu'à ${cap} par versement.`,
  },
  'tip.ee': {
    en: cap => `Withheld from your pay: 13.37% for pension, supplementary pension, health and unemployment, on pay up to ${cap} a payment. Deductible from taxable income.`,
    nl: cap => `Ingehouden op je loon: 13,37% voor pensioen, aanvullend pensioen, gezondheid en werkloosheid, op loon tot ${cap} per betaling. Aftrekbaar van het belastbare inkomen.`,
    fr: cap => `Retenues sur votre paie : 13,37% pour la retraite, la retraite complémentaire, la santé et le chômage, sur la paie jusqu'à ${cap} par versement. Déductibles du revenu imposable.`,
  },
  'tip.capped': {
    en: cap => `Your pay is above the ceiling of ${cap} a payment: the part above it pays no contributions.`,
    nl: cap => `Je loon ligt boven het plafond van ${cap} per betaling: het deel daarboven betaalt geen bijdragen.`,
    fr: cap => `Votre salaire dépasse le plafond de ${cap} par versement : la part au-delà ne cotise pas.`,
  },
  'tip.taxable': {
    en: calc => `Gross pay − employee EFKA contributions${calc}.`,
    nl: calc => `Brutoloon − EFKA-bijdragen werknemer${calc}.`,
    fr: calc => `Salaire brut − cotisations salariales EFKA${calc}.`,
  },
  'tip.scale': {
    en: `The 2026 scale: 9%, 20%, 26%, 34%, 39% and 44% above €60,000. Children lower the 10,000 to 30,000 brackets, age lowers the first two. Your rates are below.`,
    nl: `De schaal van 2026: 9%, 20%, 26%, 34%, 39% en 44% boven € 60.000. Kinderen verlagen de schijven van 10.000 tot 30.000, leeftijd de eerste twee. Jouw tarieven staan hieronder.`,
    fr: `Le barème 2026 : 9%, 20%, 26%, 34%, 39% et 44% au-delà de 60 000 €. Les enfants abaissent les tranches de 10 000 à 30 000, l'âge les deux premières. Vos taux sont ci-dessous.`,
  },
  'tip.red': {
    en: `Wage earners take a fixed amount off their tax, more with children: €777 with none up to €1,780 with five, +€220 per child after that. It shrinks by €20 per €1,000 of taxable income above €12,000, except with five or more children, and is never paid out.`,
    nl: `Werknemers trekken een vast bedrag af van hun belasting, meer met kinderen: € 777 zonder tot € 1.780 met vijf, +€ 220 per kind daarna. Het daalt met € 20 per € 1.000 belastbaar inkomen boven € 12.000, behalve met vijf of meer kinderen, en wordt nooit uitbetaald.`,
    fr: `Les salariés déduisent un montant fixe de leur impôt, plus élevé avec des enfants : 777 € sans enfant jusqu'à 1 780 € avec cinq, +220 € par enfant au-delà. Il baisse de 20 € par tranche de 1 000 € de revenu imposable au-dessus de 12 000 €, sauf à partir de cinq enfants, et n'est jamais versé.`,
  },
  'tip.redBase': {
    en: n => n ? `Reduction with ${n} child${n > 1 ? 'ren' : ''}` : `Reduction without children`,
    nl: n => n ? `Vermindering met ${n} kind${n > 1 ? 'eren' : ''}` : `Vermindering zonder kinderen`,
    fr: n => n ? `Réduction avec ${n} enfant${n > 1 ? 's' : ''}` : `Réduction sans enfant`,
  },
  'tip.redPhase': { en: a => `− 2% of ${a} above €12,000`, nl: a => `− 2% van ${a} boven € 12.000`, fr: a => `− 2% de ${a} au-delà de 12 000 €` },
  'tip.redUsed': { en: `Reduction used`, nl: `Gebruikte vermindering`, fr: `Réduction utilisée` },
  'tip.ir': {
    en: `Tax on the 2026 scale, minus the tax reduction. Withheld from each payment, settled on the yearly return.`,
    nl: `Belasting volgens de schaal van 2026, min de belastingvermindering. Ingehouden op elke betaling, verrekend in de jaarlijkse aangifte.`,
    fr: `Impôt selon le barème 2026, moins la réduction d'impôt. Retenu sur chaque versement, régularisé dans la déclaration annuelle.`,
  },
  'tip.vatM': {
    en: `Food, medicines, books and some services are at 13% or 6%, rent is exempt, and some Aegean islands pay 30% less, so this is an upper bound.`,
    nl: `Voeding, geneesmiddelen, boeken en sommige diensten hebben 13% of 6%, huur is vrijgesteld en sommige Egeïsche eilanden betalen 30% minder, dus dit is een bovengrens.`,
    fr: `L'alimentation, les médicaments, les livres et certains services sont à 13% ou 6%, les loyers sont exonérés et certaines îles de l'Égée paient 30% de moins : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − EFKA − income tax.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − EFKA − inkomstenbelasting.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − EFKA − impôt sur le revenu.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [`EFKA contributions <span class="num">21.79%</span> of gross pay, up to <span class="num">€7,761.94</span> a payment (2026 ceiling).`] },
    nl: { h: `1 · Werkgever`, li: [`EFKA-bijdragen <span class="num">21,79%</span> van het brutoloon, tot <span class="num">€ 7.761,94</span> per betaling (plafond 2026).`] },
    fr: { h: `1 · Employeur`, li: [`Cotisations EFKA <span class="num">21,79%</span> du salaire brut, jusqu'à <span class="num">7 761,94 €</span> par versement (plafond 2026).`] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [`EFKA <span class="num">13.37%</span> of gross pay up to the same ceiling, deductible from taxable income. Rates since the 1-point cut of January 2025.`] },
    nl: { h: `2 · Werknemersbijdragen`, li: [`EFKA <span class="num">13,37%</span> van het brutoloon tot hetzelfde plafond, aftrekbaar van het belastbare inkomen. Tarieven sinds de verlaging met 1 punt in januari 2025.`] },
    fr: { h: `2 · Cotisations salariales`, li: [`EFKA <span class="num">13,37%</span> du salaire brut jusqu'au même plafond, déductibles du revenu imposable. Taux depuis la baisse d'un point de janvier 2025.`] },
  },
  'ref.ir': {
    en: br => ({ h: `3 · Income tax scale`, li: [`On taxable income, without children and from age 31 (law 5246/2025):${br}`] }),
    nl: br => ({ h: `3 · Belastingschaal`, li: [`Op het belastbare inkomen, zonder kinderen en vanaf 31 jaar (wet 5246/2025):${br}`] }),
    fr: br => ({ h: `3 · Barème de l'impôt`, li: [`Sur le revenu imposable, sans enfant et à partir de 31 ans (loi 5246/2025) :${br}`] }),
  },
  'ref.kids': {
    en: { h: `4 · Lower rates with children`, li: [
      `€10,000 to €20,000: <span class="num">18%</span> with one child, <span class="num">16%</span> with two, <span class="num">9%</span> with three, <span class="num">0%</span> with four or more (and 0% on the first €10,000 too).`,
      `€20,000 to €30,000: <span class="num">24%</span>, <span class="num">22%</span>, <span class="num">20%</span>, <span class="num">18%</span> with one to four children, 2 points less per child after that.`,
    ] },
    nl: { h: `4 · Lagere tarieven met kinderen`, li: [
      `€ 10.000 tot € 20.000: <span class="num">18%</span> met één kind, <span class="num">16%</span> met twee, <span class="num">9%</span> met drie, <span class="num">0%</span> met vier of meer (en ook 0% op de eerste € 10.000).`,
      `€ 20.000 tot € 30.000: <span class="num">24%</span>, <span class="num">22%</span>, <span class="num">20%</span>, <span class="num">18%</span> met één tot vier kinderen, 2 punten minder per kind daarna.`,
    ] },
    fr: { h: `4 · Taux réduits avec enfants`, li: [
      `De 10 000 € à 20 000 € : <span class="num">18%</span> avec un enfant, <span class="num">16%</span> avec deux, <span class="num">9%</span> avec trois, <span class="num">0%</span> avec quatre ou plus (et 0% aussi sur les 10 000 premiers euros).`,
      `De 20 000 € à 30 000 € : <span class="num">24%</span>, <span class="num">22%</span>, <span class="num">20%</span>, <span class="num">18%</span> avec un à quatre enfants, 2 points de moins par enfant au-delà.`,
    ] },
  },
  'ref.young': {
    en: { h: `5 · Young people`, li: [`Up to 25: <span class="num">0%</span> on the first €20,000. From 26 to 30: <span class="num">9%</span> from €10,000 to €20,000. The normal scale applies above.`] },
    nl: { h: `5 · Jongeren`, li: [`Tot 25: <span class="num">0%</span> op de eerste € 20.000. Van 26 tot 30: <span class="num">9%</span> tussen € 10.000 en € 20.000. Daarboven de gewone schaal.`] },
    fr: { h: `5 · Jeunes`, li: [`Jusqu'à 25 ans : <span class="num">0%</span> sur les 20 000 premiers euros. De 26 à 30 ans : <span class="num">9%</span> de 10 000 € à 20 000 €. Barème normal au-delà.`] },
  },
  'ref.red': {
    en: { h: `6 · Tax reduction for wages`, li: [
      `<span class="num">€777</span> without children, €900 with one, €1,120 with two, €1,340 with three, €1,580 with four, €1,780 with five, +€220 per further child.`,
      `Minus €20 per €1,000 of taxable income above €12,000 (not with five or more children). Capped at the tax due.`,
    ] },
    nl: { h: `6 · Belastingvermindering op loon`, li: [
      `<span class="num">€ 777</span> zonder kinderen, € 900 met één, € 1.120 met twee, € 1.340 met drie, € 1.580 met vier, € 1.780 met vijf, +€ 220 per kind meer.`,
      `Min € 20 per € 1.000 belastbaar inkomen boven € 12.000 (niet met vijf of meer kinderen). Begrensd tot de verschuldigde belasting.`,
    ] },
    fr: { h: `6 · Réduction d'impôt sur les salaires`, li: [
      `<span class="num">777 €</span> sans enfant, 900 € avec un, 1 120 € avec deux, 1 340 € avec trois, 1 580 € avec quatre, 1 780 € avec cinq, +220 € par enfant en plus.`,
      `Moins 20 € par tranche de 1 000 € de revenu imposable au-delà de 12 000 € (pas à partir de cinq enfants). Limitée à l'impôt dû.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">24%</span>, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × r / (100 + r): at 24% that's 24 / 124 = <span class="num">19.35%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">24%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 24% is dat 24 / 124 = <span class="num">19,35%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">24%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 24%, cela fait 24 / 124 = <span class="num">19,35%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government and Parliament`, li: [
      `Ministers without a seat <span class="num">€7,583</span> gross a month, deputy ministers <span class="num">€6,740</span>, MPs <span class="num">€5,135</span> base pay plus expense allowances, since January 2024. Paid 12 times a year.`,
      `Taxed like any salary.`,
    ] },
    nl: { h: `8 · Regering en parlement`, li: [
      `Ministers zonder zetel <span class="num">€ 7.583</span> bruto per maand, onderministers <span class="num">€ 6.740</span>, parlementsleden <span class="num">€ 5.135</span> basisloon plus onkostenvergoedingen, sinds januari 2024. 12 keer per jaar betaald.`,
      `Belast zoals elk loon.`,
    ] },
    fr: { h: `8 · Gouvernement et Parlement`, li: [
      `Ministres sans siège <span class="num">7 583 €</span> brut par mois, vice-ministres <span class="num">6 740 €</span>, députés <span class="num">5 135 €</span> d'indemnité de base plus indemnités de frais, depuis janvier 2024. Versés 12 fois par an.`,
      `Imposés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Child benefit (means-tested on family income), heavy and unhealthy work (BAE) rates, the e-payment spending rule (30% of income spent by card, or a 22% penalty on the shortfall), the rent refund, and regional reliefs for small islands and border areas.`,
      `Figures are the year's tax, assuming the same pay at every payment; the €920 minimum wage applies from April 2026.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Kinderbijslag (afhankelijk van het gezinsinkomen), tarieven voor zwaar en ongezond werk (BAE), de regel over elektronische uitgaven (30% van het inkomen per kaart uitgeven, anders 22% boete op het tekort), de huurterugbetaling en regionale voordelen voor kleine eilanden en grensgebieden.`,
      `De bedragen zijn de belasting voor het jaar, met hetzelfde loon bij elke betaling; het minimumloon van € 920 geldt vanaf april 2026.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `L'allocation familiale (sous condition de revenus du foyer), les taux des métiers pénibles et insalubres (BAE), la règle des dépenses électroniques (30% du revenu dépensé par carte, sinon une pénalité de 22% sur l'écart), le remboursement de loyer et les allègements régionaux pour les petites îles et zones frontalières.`,
      `Les montants sont l'impôt de l'année, pour un même salaire à chaque versement ; le salaire minimum de 920 € s'applique depuis avril 2026.`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance, by relationship →`,
    nl: `Wat een erfgenaam betaalt op een erfenis, volgens verwantschap →`,
    fr: `Ce que paie un héritier sur une succession, selon le lien →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and AADE decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en de AADE zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et l'AADE font foi.`,
  },

  'src.scale': { en: `Law 5246/2025: the 2026 scale`, nl: `Wet 5246/2025: de schaal van 2026`, fr: `Loi 5246/2025 : le barème 2026` },
  'src.red': { en: `Income Tax Code, art. 16: tax reduction`, nl: `Wetboek inkomstenbelasting, art. 16: vermindering`, fr: `Code de l'impôt sur le revenu, art. 16 : réduction` },
  'src.spouses': { en: `Tax administration: spouses and children`, nl: `Belastingdienst: partners en kinderen`, fr: `Administration fiscale : conjoints et enfants` },
  'src.efka': { en: `PwC: Greek social security rates`, nl: `PwC: Griekse sociale bijdragen`, fr: `PwC : cotisations sociales grecques` },
  'src.ceil': { en: `Decision D.15/D/1865/2026: 2026 ceiling`, nl: `Besluit D.15/D/1865/2026: plafond 2026`, fr: `Décision D.15/D/1865/2026 : plafond 2026` },
  'src.minWage': { en: `Powergame: minimum wage April 2026`, nl: `Powergame: minimumloon april 2026`, fr: `Powergame : salaire minimum avril 2026` },
  'src.ergani': { en: `ERGANI 2025 via Skai: average wage`, nl: `ERGANI 2025 via Skai: gemiddeld loon`, fr: `ERGANI 2025 via Skai : salaire moyen` },
  'src.vat': { en: `AADE: VAT`, nl: `AADE: btw`, fr: `AADE : TVA` },
  'src.govPay': { en: `Parapolitika: public office pay`, nl: `Parapolitika: lonen openbare ambten`, fr: `Parapolitika : rémunérations publiques` },
  'src.govLaw': { en: `Law 5079/2023, art. 107: ministers' pay`, nl: `Wet 5079/2023, art. 107: loon ministers`, fr: `Loi 5079/2023, art. 107 : rémunération des ministres` },
};
