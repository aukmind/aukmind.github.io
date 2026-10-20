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
    en: `Married or in a civil partnership. You file one tax form together, but each of you is taxed on your own pay. You both get the lower rates and the tax cut for your children.`,
    nl: `Getrouwd of met samenlevingscontract. Jullie vullen samen één belastingaangifte in, maar elk wordt belast op het eigen loon. Jullie krijgen allebei de lagere tarieven en de belastingkorting voor de kinderen.`,
    fr: `Marié ou pacsé. Vous remplissez une seule déclaration ensemble, mais chacun est imposé sur son propre salaire. Vous avez tous les deux les taux réduits et la baisse d'impôt pour vos enfants.`,
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
    en: `What a minister without a seat in Parliament earns, set in January 2024 and paid 12 times a year. It is taxed like any other salary.`,
    nl: `Wat een minister zonder zetel in het parlement verdient, vastgelegd in januari 2024 en 12 keer per jaar betaald. Het wordt belast zoals elk ander loon.`,
    fr: `Ce que gagne un ministre sans siège au Parlement, fixé en janvier 2024 et versé 12 fois par an. C'est imposé comme n'importe quel salaire.`,
  },
  minSalaryHint: {
    en: `Pay for the whole year: the monthly amount × 12. It starts at the amount set by law.`,
    nl: `Loon voor het hele jaar: het maandbedrag × 12. Het begint bij het bedrag dat de wet vastlegt.`,
    fr: `Rémunération pour toute l'année : le montant mensuel × 12. On part du montant fixé par la loi.`,
  },
  'tip.ministerRules': {
    en: `Since January 2024, a minister without a seat in Parliament earns 90% of what the President of the Supreme Court (Areios Pagos) earns. A deputy minister earns 80%. That is about €7,583 and €6,740 a month before tax. Ministers who are also MPs keep their MP pay instead. The public sector has no 13th or 14th month. These are the 2024 amounts; if judges get a raise later, these go up too.`,
    nl: `Sinds januari 2024 verdient een minister zonder zetel in het parlement 90% van wat de voorzitter van het Hooggerechtshof (Areios Pagos) verdient. Een onderminister verdient 80%. Dat is ongeveer € 7.583 en € 6.740 per maand vóór belasting. Ministers die ook parlementslid zijn, houden in de plaats hun parlementsloon. De publieke sector heeft geen 13de of 14de maand. Dit zijn de bedragen van 2024; krijgen rechters later opslag, dan stijgen deze mee.`,
    fr: `Depuis janvier 2024, un ministre sans siège au Parlement gagne 90% de ce que gagne le président de la Cour de cassation (Areios Pagos). Un vice-ministre gagne 80%. Cela fait environ 7 583 € et 6 740 € par mois avant impôts. Les ministres qui sont aussi députés gardent à la place leur indemnité de député. Le secteur public n'a pas de 13e ni de 14e mois. Ce sont les montants de 2024 ; si les juges sont augmentés plus tard, ceux-ci montent aussi.`,
  },

  // Politicians on the chart
  'stat.min': { en: `Minister (no seat)`, nl: `Minister (geen zetel)`, fr: `Ministre (sans siège)` },
  'stat.dep': { en: `Deputy minister (no seat)`, nl: `Onderminister (geen zetel)`, fr: `Vice-ministre (sans siège)` },
  'stat.mp': { en: `MP`, nl: `Parlementslid`, fr: `Député` },
  'stat.gs': { en: `Ministry secretary-general`, nl: `Secretaris-generaal ministerie`, fr: `Secrétaire général de ministère` },
  'pol.stat.min': { en: `90% of the Supreme Court President's pay`, nl: `90% van het loon van de voorzitter van het Hooggerechtshof`, fr: `90% de la rémunération du président de la Cour de cassation` },
  'pol.stat.dep': { en: `80% of the Supreme Court President's pay`, nl: `80% van het loon van de voorzitter van het Hooggerechtshof`, fr: `80% de la rémunération du président de la Cour de cassation` },
  'pol.stat.mp': { en: `Base pay, without the tax-free money for expenses`, nl: `Basisloon, zonder het belastingvrije geld voor onkosten`, fr: `Indemnité de base, sans l'argent non imposé pour les frais` },
  'pol.stat.gs': { en: `Since January 2024`, nl: `Sinds januari 2024`, fr: `Depuis janvier 2024` },
  'polNote.stat': {
    en: `Taxed like any salary. The face on the chart sits at their pay before tax.`,
    nl: `Belast zoals elk loon. Het gezichtje op de grafiek staat op hun loon vóór belasting.`,
    fr: `Imposé comme tout salaire. Le visage sur le graphique est placé à leur salaire avant impôts.`,
  },
  'polTipNote.min': {
    en: `About €7,583 a month before tax since January 2024, €4,416 after tax. Ministers who are also MPs get the MP pay instead.`,
    nl: `Ongeveer € 7.583 per maand vóór belasting sinds januari 2024, € 4.416 na belasting. Ministers die ook parlementslid zijn, krijgen in de plaats het parlementsloon.`,
    fr: `Environ 7 583 € par mois avant impôts depuis janvier 2024, 4 416 € après impôts. Les ministres qui sont aussi députés touchent à la place l'indemnité de député.`,
  },
  'polTipNote.dep': {
    en: `About €6,740 a month before tax since January 2024.`,
    nl: `Ongeveer € 6.740 per maand vóór belasting sinds januari 2024.`,
    fr: `Environ 6 740 € par mois avant impôts depuis janvier 2024.`,
  },
  'polTipNote.mp': {
    en: `Base pay of about €5,135 a month. On top, they get €1,865 to €3,388 for rent, an office and post, which is not counted here. Most MPs also give part of their pay to their party.`,
    nl: `Basisloon van ongeveer € 5.135 per maand. Daarbovenop krijgen ze € 1.865 tot € 3.388 voor huur, een kantoor en post, wat hier niet meetelt. De meeste parlementsleden geven ook een deel van hun loon aan hun partij.`,
    fr: `Indemnité de base d'environ 5 135 € par mois. En plus, ils reçoivent de 1 865 € à 3 388 € pour le loyer, un bureau et le courrier, non compté ici. La plupart des députés donnent aussi une partie de leur paie à leur parti.`,
  },
  'polTipNote.gs': {
    en: `About €5,121 a month before tax since January 2024. It was €4,631 before.`,
    nl: `Ongeveer € 5.121 per maand vóór belasting sinds januari 2024. Daarvoor was het € 4.631.`,
    fr: `Environ 5 121 € par mois avant impôts depuis janvier 2024. C'était 4 631 € avant.`,
  },
  polNote: {
    en: links => `Point at a name to see details, click it to zoom in. Pay is for the year before tax, paid 12 times. On the chart it is shown per month: the year's pay ÷ the number of payments. Greek politicians are taxed like normal employees, so each one sits at their pay before tax. Amounts from January 2024. Sources: ${links}.`,
    nl: links => `Wijs een naam aan voor details, klik om in te zoomen. Het loon is voor het jaar vóór belasting, 12 keer betaald. Op de grafiek staat het per maand: het jaarloon ÷ het aantal betalingen. Griekse politici worden belast als gewone werknemers, dus elk staat op het eigen loon vóór belasting. Bedragen van januari 2024. Bronnen: ${links}.`,
    fr: links => `Pointez un nom pour voir les détails, cliquez pour zoomer. La paie est celle de l'année avant impôts, versée 12 fois. Sur le graphique, elle est montrée par mois : la paie de l'année ÷ le nombre de versements. Les politiciens grecs sont imposés comme des salariés ordinaires : chacun est placé à son salaire avant impôts. Montants de janvier 2024. Sources : ${links}.`,
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
      ? `You get ${red} a year off your income tax. Together with the lower rates for your age or your children, this wipes out all income tax up to ${b}. You only pay the EFKA contributions (social security for pension, health and unemployment). Earn more and income tax starts at your bracket's rate. Above €12,000 of taxable income, the discount also gets smaller: 2 cents less for each extra euro.`
      : `Greece has no tax-free amount. Instead you get ${red} a year off your income tax, which is enough to cancel the tax on about the first €8,600 of taxable income. So at the minimum wage of ${a}, paid 14 times, you already pay a little income tax, on top of the 13.37% EFKA contribution (social security for pension, health and unemployment).`,
    nl: (a, b, red) => b
      ? `Je krijgt ${red} per jaar korting op je inkomstenbelasting. Samen met de lagere tarieven voor je leeftijd of je kinderen valt zo alle inkomstenbelasting weg tot ${b}. Je betaalt alleen de EFKA-bijdragen (sociale zekerheid voor pensioen, gezondheid en werkloosheid). Verdien je meer, dan begint de belasting aan het tarief van je schijf. Boven € 12.000 belastbaar inkomen wordt de korting ook kleiner: 2 cent minder per extra euro.`
      : `Griekenland heeft geen belastingvrij bedrag. In de plaats krijg je ${red} per jaar korting op je inkomstenbelasting, genoeg om de belasting op ongeveer de eerste € 8.600 belastbaar inkomen weg te werken. Op het minimumloon van ${a}, 14 keer betaald, betaal je dus al wat inkomstenbelasting, bovenop de EFKA-bijdrage van 13,37% (sociale zekerheid voor pensioen, gezondheid en werkloosheid).`,
    fr: (a, b, red) => b
      ? `Vous avez ${red} par an en moins sur votre impôt sur le revenu. Avec les taux réduits liés à votre âge ou à vos enfants, cela efface tout l'impôt jusqu'à ${b}. Vous ne payez que les cotisations EFKA (sécurité sociale pour la retraite, la santé et le chômage). Si vous gagnez plus, l'impôt commence au taux de votre tranche. Au-dessus de 12 000 € de revenu imposable, la remise baisse aussi : 2 centimes de moins par euro en plus.`
      : `La Grèce n'a pas de montant libre d'impôt. À la place, vous avez ${red} par an en moins sur votre impôt, de quoi annuler l'impôt sur environ les 8 600 premiers euros de revenu imposable. Au salaire minimum de ${a}, versé 14 fois, vous payez donc déjà un peu d'impôt, en plus de la cotisation EFKA de 13,37% (sécurité sociale pour la retraite, la santé et le chômage).`,
  },
  topTitle: {
    en: top => `Why the jump at ${top}?`,
    nl: top => `Waarom de sprong bij ${top}?`,
    fr: top => `Pourquoi le saut à ${top} ?`,
  },
  topBody: {
    en: top => `From ${top}, your taxable income goes over €60,000. Each euro above that is taxed at 44%, the highest rate, whatever your age or number of children. Much higher, at €7,761.94 per payment, the EFKA contributions stop growing because they have a ceiling, so the total rate drops again.`,
    nl: top => `Vanaf ${top} komt je belastbare inkomen boven € 60.000. Elke euro daarboven wordt belast aan 44%, het hoogste tarief, ongeacht je leeftijd of aantal kinderen. Veel hoger, bij € 7.761,94 per betaling, stoppen de EFKA-bijdragen met stijgen omdat ze een plafond hebben, dus het totale tarief daalt weer.`,
    fr: top => `À partir de ${top}, votre revenu imposable dépasse 60 000 €. Chaque euro au-delà est imposé à 44%, le taux le plus haut, quels que soient votre âge et votre nombre d'enfants. Bien plus haut, à 7 761,94 € par versement, les cotisations EFKA cessent d'augmenter car elles sont plafonnées : le taux total redescend.`,
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
    en: `Most Greek employees are paid 14 times a year: 12 monthly salaries, plus a Christmas bonus (one month's pay), an Easter bonus and a summer holiday bonus (half a month each). The bonuses are taxed and pay contributions just like normal pay.`,
    nl: `De meeste Griekse werknemers worden 14 keer per jaar betaald: 12 maandlonen, plus een kerstpremie (één maandloon), een paaspremie en vakantiegeld (elk een halve maand). Op de premies betaal je belasting en bijdragen zoals op gewoon loon.`,
    fr: `La plupart des salariés grecs sont payés 14 fois par an : 12 salaires mensuels, plus une prime de Noël (un mois de salaire), une prime de Pâques et une prime de vacances d'été (un demi-mois chacune). Les primes sont imposées et cotisées comme un salaire normal.`,
  },
  'tip.f12': {
    en: `12 payments a year. This is the case in the public sector, or when the bonuses are already spread over the monthly pay.`,
    nl: `12 betalingen per jaar. Zo gaat het in de publieke sector, of als de premies al over het maandloon verspreid zijn.`,
    fr: `12 versements par an. C'est le cas dans le secteur public, ou quand les primes sont déjà réparties sur le salaire mensuel.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Married and civil partners fill in one tax form together, but the tax is worked out for each person on their own pay. Your partner's pay does not change your tax. You both get the lower rates and the bigger tax cut for the children you support.`,
    nl: `Getrouwden en partners met samenlevingscontract vullen samen één aangifte in, maar de belasting wordt voor elk apart berekend op het eigen loon. Het loon van je partner verandert jouw belasting niet. Jullie krijgen allebei de lagere tarieven en de grotere korting voor de kinderen die jullie onderhouden.`,
    fr: `Les époux et partenaires pacsés remplissent une seule déclaration, mais l'impôt est calculé pour chacun sur son propre salaire. Le salaire de votre partenaire ne change pas votre impôt. Vous avez tous les deux les taux réduits et la plus grosse baisse d'impôt pour les enfants à votre charge.`,
  },
  'tip.reg': {
    en: `Since 2026, young people pay less income tax. Up to age 25: 0% on the first €20,000 of taxable income. From 26 to 30: 9% instead of 20% on the part between €10,000 and €20,000. Above that, the normal rates apply. Social contributions (EFKA) and VAT stay the same.`,
    nl: `Sinds 2026 betalen jongeren minder inkomstenbelasting. Tot 25 jaar: 0% op de eerste € 20.000 belastbaar inkomen. Van 26 tot 30: 9% in plaats van 20% op het deel tussen € 10.000 en € 20.000. Daarboven gelden de gewone tarieven. De sociale bijdragen (EFKA) en de btw blijven gelijk.`,
    fr: `Depuis 2026, les jeunes paient moins d'impôt sur le revenu. Jusqu'à 25 ans : 0% sur les 20 000 premiers euros de revenu imposable. De 26 à 30 ans : 9% au lieu de 20% sur la part entre 10 000 € et 20 000 €. Au-delà, les taux normaux s'appliquent. Les cotisations sociales (EFKA) et la TVA ne changent pas.`,
  },
  'tip.costShort': { en: `Your gross salary plus the 21.79% your employer pays on top to social security (EFKA).`, nl: `Je brutoloon plus de 21,79% die je werkgever er bovenop aan de sociale zekerheid (EFKA) betaalt.`, fr: `Votre salaire brut plus les 21,79% que votre employeur verse en plus à la sécurité sociale (EFKA).` },
  'tip.er': {
    en: cap => `Your employer pays this on top of your gross salary. It is 21.79% and goes to your pension, extra pension, health care and unemployment benefits. It only counts on pay up to ${cap} per payment.`,
    nl: cap => `Je werkgever betaalt dit bovenop je brutoloon. Het is 21,79% en gaat naar je pensioen, aanvullend pensioen, gezondheidszorg en werkloosheidsuitkering. Het telt alleen op loon tot ${cap} per betaling.`,
    fr: cap => `Votre employeur paie ceci en plus de votre salaire brut. C'est 21,79%, pour votre retraite, votre retraite complémentaire, la santé et le chômage. Cela ne compte que sur la paie jusqu'à ${cap} par versement.`,
  },
  'tip.ee': {
    en: cap => `Taken from your pay: 13.37% for your pension, extra pension, health care and unemployment benefits. It only counts on pay up to ${cap} per payment. You don't pay income tax on this part.`,
    nl: cap => `Afgehouden van je loon: 13,37% voor je pensioen, aanvullend pensioen, gezondheidszorg en werkloosheidsuitkering. Het telt alleen op loon tot ${cap} per betaling. Op dit deel betaal je geen inkomstenbelasting.`,
    fr: cap => `Pris sur votre paie : 13,37% pour votre retraite, votre retraite complémentaire, la santé et le chômage. Cela ne compte que sur la paie jusqu'à ${cap} par versement. Vous ne payez pas d'impôt sur le revenu sur cette part.`,
  },
  'tip.capped': {
    en: cap => `You earn more than ${cap} per payment. Contributions stop there: the part above it pays none.`,
    nl: cap => `Je verdient meer dan ${cap} per betaling. De bijdragen stoppen daar: op het deel erboven betaal je niets.`,
    fr: cap => `Vous gagnez plus de ${cap} par versement. Les cotisations s'arrêtent là : la part au-dessus n'en paie pas.`,
  },
  'tip.taxable': {
    en: calc => `The part of your pay that income tax is charged on: gross pay minus your EFKA contributions${calc}.`,
    nl: calc => `Het deel van je loon waarop inkomstenbelasting wordt geheven: brutoloon min je EFKA-bijdragen${calc}.`,
    fr: calc => `La part de votre salaire sur laquelle l'impôt est calculé : salaire brut moins vos cotisations EFKA${calc}.`,
  },
  'tip.scale': {
    en: `Income tax goes up in steps: 9%, 20%, 26%, 34%, 39%, and 44% on the part above €60,000. Each rate only applies to the slice of income in its step. Children lower the rates between €10,000 and €30,000, and being young lowers the first two. Your own rates are below.`,
    nl: `Inkomstenbelasting stijgt in stappen: 9%, 20%, 26%, 34%, 39%, en 44% op het deel boven € 60.000. Elk tarief geldt alleen voor het stuk inkomen in die stap. Kinderen verlagen de tarieven tussen € 10.000 en € 30.000, jong zijn verlaagt de eerste twee. Jouw eigen tarieven staan hieronder.`,
    fr: `L'impôt monte par paliers : 9%, 20%, 26%, 34%, 39%, et 44% sur la part au-delà de 60 000 €. Chaque taux ne touche que la part du revenu dans son palier. Les enfants baissent les taux entre 10 000 € et 30 000 €, être jeune baisse les deux premiers. Vos propres taux sont ci-dessous.`,
  },
  'tip.red': {
    en: `Employees get a fixed amount off their tax, more if they have children: €777 with no children, up to €1,780 with five, and €220 more for each extra child. Above €12,000 of taxable income, it gets €20 smaller for every €1,000 you earn (not with five or more children). If it is bigger than your tax, you don't get the rest back.`,
    nl: `Werknemers krijgen een vast bedrag korting op hun belasting, meer als ze kinderen hebben: € 777 zonder kinderen, tot € 1.780 met vijf, en € 220 extra per kind daarna. Boven € 12.000 belastbaar inkomen wordt het € 20 kleiner per € 1.000 die je verdient (niet met vijf of meer kinderen). Is het groter dan je belasting, dan krijg je de rest niet terug.`,
    fr: `Les salariés ont un montant fixe en moins sur leur impôt, plus élevé avec des enfants : 777 € sans enfant, jusqu'à 1 780 € avec cinq, et 220 € de plus par enfant en plus. Au-dessus de 12 000 € de revenu imposable, il baisse de 20 € pour chaque tranche de 1 000 € gagnée (pas à partir de cinq enfants). S'il dépasse votre impôt, le reste n'est pas remboursé.`,
  },
  'tip.redBase': {
    en: n => n ? `Reduction with ${n} child${n > 1 ? 'ren' : ''}` : `Reduction without children`,
    nl: n => n ? `Vermindering met ${n} kind${n > 1 ? 'eren' : ''}` : `Vermindering zonder kinderen`,
    fr: n => n ? `Réduction avec ${n} enfant${n > 1 ? 's' : ''}` : `Réduction sans enfant`,
  },
  'tip.redPhase': { en: a => `− 2% of ${a} above €12,000`, nl: a => `− 2% van ${a} boven € 12.000`, fr: a => `− 2% de ${a} au-delà de 12 000 €` },
  'tip.redUsed': { en: `Reduction used`, nl: `Gebruikte vermindering`, fr: `Réduction utilisée` },
  'tip.ir': {
    en: `The tax from the rates above, minus your tax discount. It is taken from each payment, then corrected on your yearly tax return.`,
    nl: `De belasting volgens de tarieven hierboven, min je belastingkorting. Ze wordt van elke betaling afgehouden en daarna rechtgezet in je jaarlijkse aangifte.`,
    fr: `L'impôt selon les taux ci-dessus, moins votre baisse d'impôt. Il est retenu sur chaque versement, puis corrigé lors de votre déclaration annuelle.`,
  },
  'tip.vatM': {
    en: `Food, medicine, books and some services have lower VAT (13% or 6%), rent has none, and some Aegean islands pay 30% less. So the real VAT you pay is probably lower than this.`,
    nl: `Voeding, geneesmiddelen, boeken en sommige diensten hebben minder btw (13% of 6%), op huur zit geen btw en sommige Egeïsche eilanden betalen 30% minder. De echte btw die je betaalt, ligt dus waarschijnlijk lager.`,
    fr: `L'alimentation, les médicaments, les livres et certains services ont une TVA plus basse (13% ou 6%), les loyers n'en ont pas et certaines îles de l'Égée paient 30% de moins. La TVA réelle que vous payez est donc sans doute plus basse.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross pay minus EFKA contributions minus income tax.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon min EFKA-bijdragen min inkomstenbelasting.`,
    fr: calc => `Ce qui arrive sur votre compte en banque sur l'année${calc}. Salaire brut moins cotisations EFKA moins impôt sur le revenu.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [`Your employer pays <span class="num">21.79%</span> of your gross pay to social security (EFKA), on pay up to <span class="num">€7,761.94</span> per payment (the 2026 ceiling).`] },
    nl: { h: `1 · Werkgever`, li: [`Je werkgever betaalt <span class="num">21,79%</span> van je brutoloon aan de sociale zekerheid (EFKA), op loon tot <span class="num">€ 7.761,94</span> per betaling (het plafond van 2026).`] },
    fr: { h: `1 · Employeur`, li: [`Votre employeur verse <span class="num">21,79%</span> de votre salaire brut à la sécurité sociale (EFKA), sur la paie jusqu'à <span class="num">7 761,94 €</span> par versement (le plafond 2026).`] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [`You pay <span class="num">13.37%</span> of your gross pay to EFKA, up to the same ceiling. No income tax is charged on that part. The rate has been 1 point lower since January 2025.`] },
    nl: { h: `2 · Werknemersbijdragen`, li: [`Je betaalt <span class="num">13,37%</span> van je brutoloon aan EFKA, tot hetzelfde plafond. Op dat deel betaal je geen inkomstenbelasting. Het tarief ligt sinds januari 2025 1 punt lager.`] },
    fr: { h: `2 · Cotisations salariales`, li: [`Vous versez <span class="num">13,37%</span> de votre salaire brut à l'EFKA, jusqu'au même plafond. Cette part n'est pas soumise à l'impôt sur le revenu. Le taux a baissé d'un point en janvier 2025.`] },
  },
  'ref.ir': {
    en: br => ({ h: `3 · Income tax scale`, li: [`Rates on taxable income, for someone aged 31 or more with no children (law 5246/2025). Each rate only applies to the slice of income in its step:${br}`] }),
    nl: br => ({ h: `3 · Belastingschaal`, li: [`Tarieven op het belastbare inkomen, voor iemand van 31 of ouder zonder kinderen (wet 5246/2025). Elk tarief geldt alleen voor het stuk inkomen in die stap:${br}`] }),
    fr: br => ({ h: `3 · Barème de l'impôt`, li: [`Taux sur le revenu imposable, pour une personne de 31 ans ou plus sans enfant (loi 5246/2025). Chaque taux ne touche que la part du revenu dans son palier :${br}`] }),
  },
  'ref.kids': {
    en: { h: `4 · Lower rates with children`, li: [
      `On income between €10,000 and €20,000: <span class="num">18%</span> with one child, <span class="num">16%</span> with two, <span class="num">9%</span> with three, <span class="num">0%</span> with four or more (and then 0% on the first €10,000 too).`,
      `On income between €20,000 and €30,000: <span class="num">24%</span>, <span class="num">22%</span>, <span class="num">20%</span>, <span class="num">18%</span> with one to four children, then 2 points less for each extra child.`,
    ] },
    nl: { h: `4 · Lagere tarieven met kinderen`, li: [
      `Op inkomen tussen € 10.000 en € 20.000: <span class="num">18%</span> met één kind, <span class="num">16%</span> met twee, <span class="num">9%</span> met drie, <span class="num">0%</span> met vier of meer (en dan ook 0% op de eerste € 10.000).`,
      `Op inkomen tussen € 20.000 en € 30.000: <span class="num">24%</span>, <span class="num">22%</span>, <span class="num">20%</span>, <span class="num">18%</span> met één tot vier kinderen, daarna 2 punten minder per extra kind.`,
    ] },
    fr: { h: `4 · Taux réduits avec enfants`, li: [
      `Sur le revenu entre 10 000 € et 20 000 € : <span class="num">18%</span> avec un enfant, <span class="num">16%</span> avec deux, <span class="num">9%</span> avec trois, <span class="num">0%</span> avec quatre ou plus (et alors 0% aussi sur les 10 000 premiers euros).`,
      `Sur le revenu entre 20 000 € et 30 000 € : <span class="num">24%</span>, <span class="num">22%</span>, <span class="num">20%</span>, <span class="num">18%</span> avec un à quatre enfants, puis 2 points de moins par enfant en plus.`,
    ] },
  },
  'ref.young': {
    en: { h: `5 · Young people`, li: [`Up to age 25: <span class="num">0%</span> on the first €20,000. From 26 to 30: <span class="num">9%</span> on the part between €10,000 and €20,000. Above that, the normal rates apply.`] },
    nl: { h: `5 · Jongeren`, li: [`Tot 25 jaar: <span class="num">0%</span> op de eerste € 20.000. Van 26 tot 30: <span class="num">9%</span> op het deel tussen € 10.000 en € 20.000. Daarboven gelden de gewone tarieven.`] },
    fr: { h: `5 · Jeunes`, li: [`Jusqu'à 25 ans : <span class="num">0%</span> sur les 20 000 premiers euros. De 26 à 30 ans : <span class="num">9%</span> sur la part entre 10 000 € et 20 000 €. Au-delà, les taux normaux s'appliquent.`] },
  },
  'ref.red': {
    en: { h: `6 · Tax discount for employees`, li: [
      `Taken off your tax: <span class="num">€777</span> with no children, €900 with one, €1,120 with two, €1,340 with three, €1,580 with four, €1,780 with five, and €220 more for each extra child.`,
      `It gets €20 smaller for every €1,000 of taxable income above €12,000 (not with five or more children). It can bring your tax down to zero, but not below.`,
    ] },
    nl: { h: `6 · Belastingkorting voor werknemers`, li: [
      `Af van je belasting: <span class="num">€ 777</span> zonder kinderen, € 900 met één, € 1.120 met twee, € 1.340 met drie, € 1.580 met vier, € 1.780 met vijf, en € 220 extra per kind meer.`,
      `Ze wordt € 20 kleiner per € 1.000 belastbaar inkomen boven € 12.000 (niet met vijf of meer kinderen). Ze kan je belasting tot nul brengen, maar niet lager.`,
    ] },
    fr: { h: `6 · Baisse d'impôt pour les salariés`, li: [
      `Retiré de votre impôt : <span class="num">777 €</span> sans enfant, 900 € avec un, 1 120 € avec deux, 1 340 € avec trois, 1 580 € avec quatre, 1 780 € avec cinq, et 220 € de plus par enfant en plus.`,
      `Elle baisse de 20 € pour chaque tranche de 1 000 € de revenu imposable au-delà de 12 000 € (pas à partir de cinq enfants). Elle peut ramener votre impôt à zéro, mais pas en dessous.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `VAT is the tax hidden in shop prices. Normal rate <span class="num">24%</span>, counted here as if you spent all your net pay.`,
      `The VAT part of a price = price × r / (100 + r). At 24%, that's 24 / 124 = <span class="num">19.35%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Btw is de belasting die in winkelprijzen zit. Normaal tarief <span class="num">24%</span>, hier gerekend alsof je je hele nettoloon uitgeeft.`,
      `Het btw-deel van een prijs = prijs × r / (100 + r). Bij 24% is dat 24 / 124 = <span class="num">19,35%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `La TVA est la taxe cachée dans les prix. Taux normal <span class="num">24%</span>, compté ici comme si vous dépensiez tout votre salaire net.`,
      `La part de TVA dans un prix = prix × r / (100 + r). À 24%, cela fait 24 / 124 = <span class="num">19,35%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government and Parliament`, li: [
      `Since January 2024, per month before tax: ministers without a seat <span class="num">€7,583</span>, deputy ministers <span class="num">€6,740</span>, MPs <span class="num">€5,135</span> base pay plus money for expenses. Paid 12 times a year.`,
      `Taxed like any salary.`,
    ] },
    nl: { h: `8 · Regering en parlement`, li: [
      `Sinds januari 2024, per maand vóór belasting: ministers zonder zetel <span class="num">€ 7.583</span>, onderministers <span class="num">€ 6.740</span>, parlementsleden <span class="num">€ 5.135</span> basisloon plus geld voor onkosten. 12 keer per jaar betaald.`,
      `Belast zoals elk loon.`,
    ] },
    fr: { h: `8 · Gouvernement et Parlement`, li: [
      `Depuis janvier 2024, par mois avant impôts : ministres sans siège <span class="num">7 583 €</span>, vice-ministres <span class="num">6 740 €</span>, députés <span class="num">5 135 €</span> d'indemnité de base plus de l'argent pour les frais. Versés 12 fois par an.`,
      `Imposés comme tout salaire.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Child benefit (depends on family income), special rates for hard and unhealthy jobs (BAE), the card spending rule (spend 30% of your income by card, or pay a 22% fine on what's missing), the rent refund, and tax breaks for small islands and border areas.`,
      `The amounts are the tax for the whole year, with the same pay at every payment. The €920 minimum wage applies from April 2026.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Kinderbijslag (hangt af van het gezinsinkomen), speciale tarieven voor zwaar en ongezond werk (BAE), de kaartregel (30% van je inkomen met de kaart uitgeven, anders 22% boete op wat ontbreekt), de huurterugbetaling en belastingvoordelen voor kleine eilanden en grensgebieden.`,
      `De bedragen zijn de belasting voor het hele jaar, met hetzelfde loon bij elke betaling. Het minimumloon van € 920 geldt vanaf april 2026.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les allocations familiales (selon les revenus du foyer), les taux spéciaux des métiers durs et insalubres (BAE), la règle de la carte (dépenser 30% de son revenu par carte, sinon une amende de 22% sur ce qui manque), le remboursement de loyer et les avantages fiscaux des petites îles et zones frontalières.`,
      `Les montants sont l'impôt de toute l'année, avec le même salaire à chaque versement. Le salaire minimum de 920 € s'applique depuis avril 2026.`,
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

  'gap.polPay': {
    en: `Pay of ministers, deputy ministers, MPs and secretaries-general is the January 2024 amount, from a single newspaper report (Parapolitika). We found no 2026 figure. If judges got a raise since, these would be higher.`,
    nl: `Het loon van ministers, onderministers, parlementsleden en secretarissen-generaal is het bedrag van januari 2024, uit één krantenartikel (Parapolitika). We vonden geen bedrag voor 2026. Kregen rechters sindsdien opslag, dan liggen deze hoger.`,
    fr: `La paie des ministres, vice-ministres, députés et secrétaires généraux est le montant de janvier 2024, tiré d'un seul article de presse (Parapolitika). Nous n'avons pas trouvé de chiffre 2026. Si les juges ont été augmentés depuis, ces montants seraient plus élevés.`,
  },
  'gap.mpAllow': {
    en: `MPs are shown at their €5,135 base pay. The extra €1,865 to €3,388 a month they get for expenses is left out.`,
    nl: `Parlementsleden staan op hun basisloon van € 5.135. De extra € 1.865 tot € 3.388 per maand die ze voor onkosten krijgen, telt niet mee.`,
    fr: `Les députés sont placés à leur indemnité de base de 5 135 €. Les 1 865 € à 3 388 € par mois en plus qu'ils reçoivent pour leurs frais ne sont pas comptés.`,
  },
  'gap.polEfka': {
    en: `Here, ministers and MPs pay the same EFKA contributions as employees. We did not check which insurance scheme they really belong to.`,
    nl: `Hier betalen ministers en parlementsleden dezelfde EFKA-bijdragen als werknemers. We hebben niet nagekeken bij welk verzekeringsstelsel ze echt horen.`,
    fr: `Ici, les ministres et députés paient les mêmes cotisations EFKA que les salariés. Nous n'avons pas vérifié de quel régime d'assurance ils relèvent vraiment.`,
  },
  'gap.efka': {
    en: `The EFKA rates (13.37% for you, 21.79% for your employer) come from PwC's summary of the 2025 cut. We found no change for 2026, but did not read an official 2026 text.`,
    nl: `De EFKA-tarieven (13,37% voor jou, 21,79% voor je werkgever) komen uit de samenvatting van PwC over de verlaging van 2025. We vonden geen wijziging voor 2026, maar lazen geen officiële tekst van 2026.`,
    fr: `Les taux EFKA (13,37% pour vous, 21,79% pour l'employeur) viennent du résumé de PwC sur la baisse de 2025. Nous n'avons trouvé aucun changement pour 2026, mais pas lu de texte officiel de 2026.`,
  },
  'gap.spouses': {
    en: `That both working partners get the lower rates and the tax cut for children comes from tax office guidance from 2016. We assume it still holds for the 2026 rates.`,
    nl: `Dat beide werkende partners de lagere tarieven en de korting voor kinderen krijgen, komt uit een richtlijn van de belastingdienst uit 2016. We gaan ervan uit dat die nog geldt voor de tarieven van 2026.`,
    fr: `Le fait que les deux partenaires qui travaillent aient les taux réduits et la baisse d'impôt pour enfants vient d'une note du fisc de 2016. Nous supposons qu'elle vaut encore pour les taux 2026.`,
  },
  'gap.kids1': {
    en: `One news site says that with one child, the rate on income between €30,000 and €40,000 is also 2 points lower. The law itself only changes the rates up to €30,000, so that's what we use.`,
    nl: `Eén nieuwssite zegt dat met één kind ook het tarief op inkomen tussen € 30.000 en € 40.000 2 punten lager ligt. De wet zelf wijzigt alleen de tarieven tot € 30.000, dus dat gebruiken we.`,
    fr: `Un site d'information dit qu'avec un enfant, le taux sur le revenu entre 30 000 € et 40 000 € baisse aussi de 2 points. La loi elle-même ne change que les taux jusqu'à 30 000 €, c'est donc ce que nous utilisons.`,
  },
  'gap.phase': {
    en: `The tax discount drops by €20 for each full €1,000 of taxable income above €12,000. We spread that out evenly as 2%, so the result can be off by up to €20.`,
    nl: `De belastingkorting daalt met € 20 per volle € 1.000 belastbaar inkomen boven € 12.000. Wij spreiden dat gelijkmatig uit als 2%, dus de uitkomst kan tot € 20 afwijken.`,
    fr: `La baisse d'impôt diminue de 20 € par tranche complète de 1 000 € de revenu imposable au-delà de 12 000 €. Nous l'étalons en 2% continus, donc le résultat peut varier de 20 € au plus.`,
  },
  'gap.wages': {
    en: `The average wage (€1,516) is the 2025 ERGANI figure, as reported in the press. We found no median wage (the pay that half of workers earn more than), so there is no line for it.`,
    nl: `Het gemiddelde loon (€ 1.516) is het ERGANI-cijfer van 2025, zoals de pers het meldde. We vonden geen mediaanloon (het loon waarboven de helft van de werknemers zit), dus daar is geen lijn voor.`,
    fr: `Le salaire moyen (1 516 €) est le chiffre ERGANI 2025, tel que rapporté par la presse. Nous n'avons pas trouvé de salaire médian (celui au-dessus duquel gagne la moitié des salariés), donc il n'a pas de ligne.`,
  },
  'gap.netCheck': {
    en: `We checked only one take-home amount: the €920 minimum wage gives about €772 a month, close to the €770 the press reports. We did not use an official calculator.`,
    nl: `We controleerden maar één nettobedrag: het minimumloon van € 920 geeft ongeveer € 772 per maand, dicht bij de € 770 die de pers meldt. We gebruikten geen officiële rekenmodule.`,
    fr: `Nous n'avons vérifié qu'un seul net : le salaire minimum de 920 € donne environ 772 € par mois, proche des 770 € annoncés par la presse. Nous n'avons pas utilisé de simulateur officiel.`,
  },
  'gap.notIncl': {
    en: `Child benefit, special rates for hard jobs, the card spending rule and island tax breaks are left out. See "What's not included" below.`,
    nl: `Kinderbijslag, speciale tarieven voor zwaar werk, de kaartregel en belastingvoordelen voor eilanden tellen niet mee. Zie "Wat niet is meegerekend" hieronder.`,
    fr: `Les allocations familiales, les taux spéciaux des métiers durs, la règle de la carte et les avantages fiscaux des îles ne sont pas comptés. Voir « Ce qui n'est pas inclus » plus bas.`,
  },
};
