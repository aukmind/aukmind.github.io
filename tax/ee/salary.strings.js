window.TAX_STRINGS = {
  title: { en: `Estonian Buying Power`, nl: `Estse koopkracht`, fr: `Pouvoir d'achat en Estonie` },
  eyebrow: { en: `Estonia · income 2026 · employee`, nl: `Estland · inkomen 2026 · werknemer`, fr: `Estonie · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Estonia · income 2026 · minister`, nl: `Estland · inkomen 2026 · minister`, fr: `Estonie · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on an Estonian salary in 2026, from what your employer pays to what you can buy. One flat 22% income tax, and since January the same 700 € tax-free amount for everyone: the old "tax hump" is gone.`,
    nl: `Alle belastingen op een Ests loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen. Eén vlakke inkomstenbelasting van 22% en sinds januari dezelfde belastingvrije som van € 700 voor iedereen: de oude "belastingbult" is weg.`,
    fr: `Tous les prélèvements sur un salaire estonien en 2026, de ce que paie votre employeur à ce que vous pouvez acheter. Un impôt unique de 22%, et depuis janvier le même abattement de 700 € pour tout le monde : l'ancienne « bosse fiscale » a disparu.`,
  },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Estonia taxes each person alone. Since 2025 a partner's unused tax-free amount can no longer be transferred, so a partner or children don't change your taxes here.`,
    nl: `Estland belast elke persoon apart. Sinds 2025 kan de ongebruikte belastingvrije som van een partner niet meer worden overgedragen, dus een partner of kinderen veranderen hier niets aan je belastingen.`,
    fr: `L'Estonie impose chaque personne séparément. Depuis 2025, l'abattement inutilisé d'un conjoint n'est plus transférable : un conjoint ou des enfants ne changent rien à vos impôts ici.`,
  },
  region: { en: `Funded pension (II pillar)`, nl: `Pensioenfonds (II pijler)`, fr: `Retraite par capitalisation (IIe pilier)` },
  'region.p2': { en: `2%`, nl: `2%`, fr: `2%` },
  'region.p4': { en: `4%`, nl: `4%`, fr: `4%` },
  'region.p6': { en: `6%`, nl: `6%`, fr: `6%` },
  'region.p0': { en: `Left / none`, nl: `Uitgestapt / geen`, fr: `Sorti / aucun` },
  employerSize: { en: `Your age`, nl: `Je leeftijd`, fr: `Votre âge` },
  'size.work': { en: `Working age`, nl: `Beroepsactief`, fr: `Âge actif` },
  'size.pension': { en: `Pension age`, nl: `Pensioenleeftijd`, fr: `Âge de la retraite` },
  vatStandard: { en: `(Estonia's standard rate is 24%)`, nl: `(het Estse normale tarief is 24%)`, fr: `(le taux normal estonien est de 24%)` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.mp': { en: `Riigikogu member`, nl: `Lid van de Riigikogu`, fr: `Député au Riigikogu` },
  'minRole.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'minRole.pres': { en: `President`, nl: `President`, fr: `Président` },
  ministerHint: {
    en: `Pay from 1 April 2026. Taxed like a salary but outside unemployment insurance: 22% income tax, II pillar, 33% social tax paid by the State.`,
    nl: `Loon vanaf 1 april 2026. Belast zoals een loon, maar buiten de werkloosheidsverzekering: 22% inkomstenbelasting, II pijler, 33% sociale belasting betaald door de staat.`,
    fr: `Rémunération depuis le 1er avril 2026. Imposée comme un salaire mais hors assurance chômage : impôt de 22%, IIe pilier, taxe sociale de 33% payée par l'État.`,
  },
  minSalaryHint: {
    en: `Yearly pay, current monthly amount × 12. Statutory amount by default.`,
    nl: `Jaarloon, huidig maandbedrag × 12. Standaard het wettelijke bedrag.`,
    fr: `Rémunération annuelle, montant mensuel actuel × 12. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: `Pay follows the Higher State Servants' Salaries Act: a top rate times a coefficient, indexed every 1 April. From April 2026 the top rate is 10 239.71 € (President, Speaker of the Riigikogu) and a lower temporary rate of 9 256.41 € applies to the government until 2028. Prime Minister ×1, ministers ×0.85, Riigikogu members ×0.65 of the top rate. The President, Riigikogu and government members aren't insured against unemployment, so no 1.6% or 0.8% premium; everything else is taxed like a salary.`,
    nl: `Het loon volgt de wet op de lonen van hoge staatsambtenaren: een hoogste tarief maal een coëfficiënt, geïndexeerd op elke 1 april. Vanaf april 2026 is het hoogste tarief € 10.239,71 (president, voorzitter van de Riigikogu) en geldt voor de regering tot 2028 een lager tijdelijk tarief van € 9.256,41. Premier ×1, ministers ×0,85, leden van de Riigikogu ×0,65 van het hoogste tarief. De president, de Riigikogu en de regering zijn niet verzekerd tegen werkloosheid, dus geen premie van 1,6% of 0,8%; al de rest wordt belast zoals een loon.`,
    fr: `La rémunération suit la loi sur les traitements des hauts serviteurs de l'État : un taux maximal multiplié par un coefficient, indexé chaque 1er avril. Depuis avril 2026, le taux maximal est de 10 239,71 € (Président, président du Riigikogu) et un taux temporaire réduit de 9 256,41 € s'applique au gouvernement jusqu'en 2028. Premier ministre ×1, ministres ×0,85, députés ×0,65 du taux maximal. Le Président, le Riigikogu et le gouvernement ne sont pas assurés contre le chômage : pas de prime de 1,6% ni de 0,8% ; tout le reste est imposé comme un salaire.`,
  },
  'bd.minGross': { en: `Official pay`, nl: `Ambtsloon`, fr: `Traitement de fonction` },

  // Politicians on the chart
  'stat.pres': { en: `President`, nl: `President`, fr: `Président` },
  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  'stat.dep': { en: `Riigikogu deputy speaker or committee chair`, nl: `Ondervoorzitter of commissievoorzitter van de Riigikogu`, fr: `Vice-président ou président de commission du Riigikogu` },
  'stat.min': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `Riigikogu member`, nl: `Lid van de Riigikogu`, fr: `Député au Riigikogu` },
  'pol.stat.pres': { en: `Top rate × 1, also the Speaker and the Chief Justice`, nl: `Hoogste tarief × 1, ook de voorzitter van de Riigikogu en van het Hooggerechtshof`, fr: `Taux maximal × 1, aussi le président du Riigikogu et de la Cour suprême` },
  'pol.stat.pm': { en: `Temporary lower rate × 1`, nl: `Tijdelijk lager tarief × 1`, fr: `Taux temporaire réduit × 1` },
  'pol.stat.dep': { en: `Top rate × 0.85`, nl: `Hoogste tarief × 0,85`, fr: `Taux maximal × 0,85` },
  'pol.stat.min': { en: `Temporary lower rate × 0.85`, nl: `Tijdelijk lager tarief × 0,85`, fr: `Taux temporaire réduit × 0,85` },
  'pol.stat.mp': { en: `Top rate × 0.65`, nl: `Hoogste tarief × 0,65`, fr: `Taux maximal × 0,65` },
  'polNote.official': {
    en: `Taxed like a salary, without unemployment insurance. The head sits at the employee salary with the same net.`,
    nl: `Belast zoals een loon, zonder werkloosheidsverzekering. Het hoofdje staat bij het werknemersloon met hetzelfde netto.`,
    fr: `Imposé comme un salaire, sans assurance chômage. La tête est placée au salaire qui donne le même net.`,
  },
  'polTipNote.pres': {
    en: `10 239.71 € a month from April 2026. The President, the Speaker of the Riigikogu and the Chief Justice of the Supreme Court get the same.`,
    nl: `€ 10.239,71 per maand vanaf april 2026. De president, de voorzitter van de Riigikogu en de voorzitter van het Hooggerechtshof krijgen hetzelfde.`,
    fr: `10 239,71 € par mois depuis avril 2026. Le Président, le président du Riigikogu et le président de la Cour suprême touchent le même montant.`,
  },
  'polTipNote.pm': {
    en: `9 256.41 € a month from April 2026, on the temporary lower index until March 2028 (9 013.06 € before).`,
    nl: `€ 9.256,41 per maand vanaf april 2026, op de tijdelijk lagere index tot maart 2028 (eerst € 9.013,06).`,
    fr: `9 256,41 € par mois depuis avril 2026, sur l'indice temporaire réduit jusqu'en mars 2028 (9 013,06 € avant).`,
  },
  'polTipNote.dep': {
    en: `8 703.75 € a month: deputy speakers, committee and group chairs, also the Auditor General and the Chancellor of Justice.`,
    nl: `€ 8.703,75 per maand: ondervoorzitters, commissie- en fractievoorzitters, ook de rekenkamervoorzitter en de kanselier van justitie.`,
    fr: `8 703,75 € par mois : vice-présidents, présidents de commission et de groupe, aussi le contrôleur d'État et le chancelier de justice.`,
  },
  'polTipNote.min': {
    en: `7 867.95 € a month from April 2026, the same for every minister.`,
    nl: `€ 7.867,95 per maand vanaf april 2026, voor elke minister gelijk.`,
    fr: `7 867,95 € par mois depuis avril 2026, identique pour chaque ministre.`,
  },
  'polTipNote.mp': {
    en: `6 655.81 € a month from April 2026. Expense compensation (up to 40% of the pay, against receipts) isn't counted.`,
    nl: `€ 6.655,81 per maand vanaf april 2026. De onkostenvergoeding (tot 40% van het loon, op bewijsstukken) telt niet mee.`,
    fr: `6 655,81 € par mois depuis avril 2026. Le remboursement de frais (jusqu'à 40% de l'indemnité, sur justificatifs) n'est pas compté.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ 12. Without unemployment insurance they net a bit more than an employee with the same gross, so each head sits at the employee salary with the same net. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ 12. Zonder werkloosheidsverzekering houden ze iets meer over dan een werknemer met hetzelfde bruto, dus elk hoofdje staat bij het werknemersloon met hetzelfde netto. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ 12. Sans assurance chômage, ils gardent un peu plus qu'un salarié au même brut : chaque tête est placée au salaire qui donne le même net. Sources : ${links}.`,
  },
  bracketTop: { en: `flat rate`, nl: `vlak tarief`, fr: `taux unique` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  trapTitle: {
    en: free => `Why no income tax up to ${free}?`,
    nl: free => `Waarom geen inkomstenbelasting tot ${free}?`,
    fr: free => `Pourquoi aucun impôt sur le revenu jusqu'à ${free} ?`,
  },
  trapBody: {
    en: (free, min, pension, wage) => `Everyone has the same tax-free amount, so up to ${free} gross only the contributions are withheld. ${pension ? `At pension age it is 776 € a month, no unemployment premium is withheld, and the employer pays social tax only on the real pay.` : `Below ${min} the employer still owes social tax on ${min} (292.38 € a month) unless the employee is a pensioner, a student, works elsewhere or is in another listed group: that is why the employer's rate shoots up at low pay. The full-time minimum wage is ${wage}.`} Above that, each extra euro is taxed at the same marginal rate whatever you earn.`,
    nl: (free, min, pension, wage) => `Iedereen heeft dezelfde belastingvrije som, dus tot ${free} bruto worden alleen de bijdragen ingehouden. ${pension ? `Op pensioenleeftijd is die € 776 per maand, wordt geen werkloosheidspremie ingehouden en betaalt de werkgever sociale belasting alleen op het echte loon.` : `Onder ${min} betaalt de werkgever toch sociale belasting op ${min} (€ 292,38 per maand), tenzij de werknemer gepensioneerd of student is, elders werkt of tot een andere vermelde groep hoort: daarom schiet het tarief van de werkgever omhoog bij een laag loon. Het voltijdse minimumloon is ${wage}.`} Daarboven wordt elke extra euro tegen hetzelfde marginale tarief belast, wat je ook verdient.`,
    fr: (free, min, pension, wage) => `Tout le monde a le même abattement : jusqu'à ${free} brut, seules les cotisations sont retenues. ${pension ? `À l'âge de la retraite, il vaut 776 € par mois, aucune prime chômage n'est retenue et l'employeur ne paie la taxe sociale que sur le salaire réel.` : `Sous ${min}, l'employeur doit quand même la taxe sociale sur ${min} (292,38 € par mois), sauf si le salarié est retraité, étudiant, travaille ailleurs ou relève d'un autre groupe prévu : d'où le taux employeur qui s'envole aux bas salaires. Le salaire minimum à temps plein est de ${wage}.`} Au-delà, chaque euro en plus est taxé au même taux marginal, quel que soit le salaire.`,
  },
  topTitle: { en: top => `Why the jump at ${top}?`, nl: top => `Waarom de sprong bij ${top}?`, fr: top => `Pourquoi le saut à ${top} ?` },
  topBody: { en: top => `${top}`, nl: top => `${top}`, fr: top => `${top}` },

  // Tax components
  'comp.er': { en: `Social tax (sotsiaalmaks)`, nl: `Sociale belasting (sotsiaalmaks)`, fr: `Taxe sociale (sotsiaalmaks)` },
  'comp.eru': { en: `Unemployment insurance, employer`, nl: `Werkloosheidsverzekering, werkgever`, fr: `Assurance chômage, employeur` },
  'comp.ee': { en: `Unemployment insurance, employee`, nl: `Werkloosheidsverzekering, werknemer`, fr: `Assurance chômage, salarié` },
  'comp.ii': { en: `Funded pension (II pillar)`, nl: `Pensioenfonds (II pijler)`, fr: `Retraite par capitalisation (IIe pilier)` },
  'comp.ir': { en: `Income tax (tulumaks)`, nl: `Inkomstenbelasting (tulumaks)`, fr: `Impôt sur le revenu (tulumaks)` },
  'bd.exempt': { en: `Tax-free amount used`, nl: `Gebruikte belastingvrije som`, fr: `Abattement utilisé` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries, the norm in Estonia. Bonuses are taxed like any pay.`,
    nl: `12 maandlonen, de norm in Estland. Bonussen worden belast zoals elk loon.`,
    fr: `12 salaires mensuels, la norme en Estonie. Les primes sont imposées comme tout salaire.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Estonia taxes each person alone. Until 2024 spouses could move up to 2 160 € of unused tax-free amount to each other; that was abolished, as was the extra tax-free amount for a second child. Family benefits are paid whatever you earn, so they don't change your tax rate and aren't counted.`,
    nl: `Estland belast elke persoon apart. Tot 2024 konden echtgenoten tot € 2.160 ongebruikte belastingvrije som aan elkaar overdragen; dat is afgeschaft, net als de extra belastingvrije som voor een tweede kind. Gezinsbijslagen worden betaald ongeacht je loon, dus veranderen je belastingtarief niet en tellen niet mee.`,
    fr: `L'Estonie impose chaque personne séparément. Jusqu'en 2024, les époux pouvaient se transférer jusqu'à 2 160 € d'abattement inutilisé ; c'est supprimé, comme l'abattement supplémentaire pour un deuxième enfant. Les allocations familiales sont versées quel que soit le salaire : elles ne changent pas votre taux et ne sont pas comptées.`,
  },
  'tip.reg': {
    en: `Members of the II pillar pay 2% of gross into their own pension account, or 4% or 6% if they asked for it; the rate can change on 1 January, 1 May and 1 September. Those who left the pillar (or never joined, born before 1983) pay nothing. Contributions are deducted before income tax. The State adds 4 points of the 33% social tax on top, which doesn't change the cost.`,
    nl: `Leden van de II pijler storten 2% van het bruto op hun eigen pensioenrekening, of 4% of 6% als ze daarom vroegen; het tarief kan wijzigen op 1 januari, 1 mei en 1 september. Wie uitstapte (of nooit instapte, geboren vóór 1983) betaalt niets. De bijdragen worden afgetrokken vóór de inkomstenbelasting. De staat voegt er 4 punten van de sociale belasting van 33% aan toe, wat de kost niet verandert.`,
    fr: `Les affiliés au IIe pilier versent 2% du brut sur leur propre compte de retraite, ou 4% ou 6% s'ils l'ont demandé ; le taux peut changer au 1er janvier, 1er mai et 1er septembre. Ceux qui en sont sortis (ou n'y sont jamais entrés, nés avant 1983) ne paient rien. Les cotisations sont déduites avant l'impôt. L'État y ajoute 4 points de la taxe sociale de 33%, ce qui ne change pas le coût.`,
  },
  'tip.size': {
    en: `At old-age pension age the tax-free amount is 776 € a month instead of 700 €, no 1.6% unemployment premium is withheld (the employer still pays its 0.8%), and the employer owes social tax only on the real pay.`,
    nl: `Op pensioenleeftijd is de belastingvrije som € 776 per maand in plaats van € 700, wordt geen werkloosheidspremie van 1,6% ingehouden (de werkgever betaalt nog zijn 0,8%) en betaalt de werkgever sociale belasting alleen op het echte loon.`,
    fr: `À l'âge de la retraite, l'abattement vaut 776 € par mois au lieu de 700 €, aucune prime chômage de 1,6% n'est retenue (l'employeur paie toujours ses 0,8%) et l'employeur ne doit la taxe sociale que sur le salaire réel.`,
  },
  'tip.costShort': { en: `Gross salary + 33% social tax + 0.8% unemployment insurance.`, nl: `Brutoloon + 33% sociale belasting + 0,8% werkloosheidsverzekering.`, fr: `Salaire brut + 33% de taxe sociale + 0,8% d'assurance chômage.` },
  'tip.er': {
    en: `Paid by your employer on top of your gross: 33% with no ceiling. It funds state pensions (20%) and health insurance (13%). Each month it is due on at least 886 €, last July's minimum wage, unless the employee is exempt from that minimum.`,
    nl: `Betaald door je werkgever bovenop je bruto: 33% zonder plafond. Het financiert de staatspensioenen (20%) en de ziekteverzekering (13%). Elke maand is ze verschuldigd op minstens € 886, het minimumloon van juli vorig jaar, tenzij de werknemer van dat minimum is vrijgesteld.`,
    fr: `Payée par votre employeur en plus du brut : 33% sans plafond. Elle finance les retraites d'État (20%) et l'assurance maladie (13%). Chaque mois, elle est due sur au moins 886 €, le salaire minimum de juillet dernier, sauf si le salarié est exempté de ce minimum.`,
  },
  'tip.socMin': { en: `Minimum base (886 € × 12)`, nl: `Minimumbasis (€ 886 × 12)`, fr: `Base minimale (886 € × 12)` },
  'tip.eru': {
    en: `Paid by your employer on top of your gross: 0.8% with no ceiling, also for workers past pension age. The President, Riigikogu and government members are outside the scheme.`,
    nl: `Betaald door je werkgever bovenop je bruto: 0,8% zonder plafond, ook voor werknemers voorbij de pensioenleeftijd. De president, de Riigikogu en de regering vallen erbuiten.`,
    fr: `Payée par votre employeur en plus du brut : 0,8% sans plafond, y compris après l'âge de la retraite. Le Président, le Riigikogu et le gouvernement en sont exclus.`,
  },
  'tip.ee': {
    en: `Withheld from your pay: 1.6% with no ceiling, deducted before income tax. Not withheld from the month after you reach old-age pension age. Rates are fixed for 2025 to 2028.`,
    nl: `Ingehouden op je loon: 1,6% zonder plafond, afgetrokken vóór de inkomstenbelasting. Niet meer ingehouden vanaf de maand nadat je de pensioenleeftijd bereikt. De tarieven liggen vast voor 2025 tot 2028.`,
    fr: `Retenue sur votre paie : 1,6% sans plafond, déduite avant l'impôt. Plus retenue à partir du mois suivant l'âge de la retraite. Les taux sont fixés pour 2025 à 2028.`,
  },
  'tip.ii': {
    en: `Withheld from your pay into your own pension fund: 2%, 4% or 6% of gross, deducted before income tax. It is your savings, but compulsory once you joined, so it counts as a deduction here.`,
    nl: `Ingehouden op je loon voor je eigen pensioenfonds: 2%, 4% of 6% van het bruto, afgetrokken vóór de inkomstenbelasting. Het is je eigen spaargeld, maar verplicht zodra je instapte, dus telt hier als inhouding.`,
    fr: `Retenue sur votre paie pour votre propre fonds de retraite : 2%, 4% ou 6% du brut, déduite avant l'impôt. C'est votre épargne, mais obligatoire une fois affilié : elle compte ici comme un prélèvement.`,
  },
  'tip.exempt': {
    en: `From 2026 the tax-free amount is 700 € a month (8 400 € a year) whatever you earn; 776 € at pension age. In 2025 it shrank from 654 € to zero between 1 200 € and 2 100 € a month, the "tax hump". You claim it from one employer; the yearly return settles the rest.`,
    nl: `Vanaf 2026 is de belastingvrije som € 700 per maand (€ 8.400 per jaar), wat je ook verdient; € 776 op pensioenleeftijd. In 2025 daalde ze van € 654 naar nul tussen € 1.200 en € 2.100 per maand, de "belastingbult". Je vraagt ze aan bij één werkgever; de jaarlijkse aangifte regelt de rest.`,
    fr: `Depuis 2026, l'abattement vaut 700 € par mois (8 400 € par an) quel que soit le salaire ; 776 € à l'âge de la retraite. En 2025, il baissait de 654 € à zéro entre 1 200 € et 2 100 € par mois : la « bosse fiscale ». Il se demande à un seul employeur ; la déclaration annuelle règle le reste.`,
  },
  'tip.exemptYear': { en: `Tax-free amount for the year`, nl: `Belastingvrije som voor het jaar`, fr: `Abattement de l'année` },
  'tip.exemptUsed': { en: `Used`, nl: `Gebruikt`, fr: `Utilisé` },
  'tip.taxable': {
    en: calc => `Gross − unemployment premium − II pillar − tax-free amount${calc}.`,
    nl: calc => `Bruto − werkloosheidspremie − II pijler − belastingvrije som${calc}.`,
    fr: calc => `Brut − prime chômage − IIe pilier − abattement${calc}.`,
  },
  'tip.ir': {
    en: `One flat rate of 22% on taxable pay. The rise to 24% planned for 2026 was cancelled, and so was the 2% "security tax".`,
    nl: `Eén vlak tarief van 22% op het belastbare loon. De voor 2026 geplande verhoging naar 24% is geschrapt, net als de "veiligheidsbelasting" van 2%.`,
    fr: `Un taux unique de 22% sur le salaire imposable. La hausse à 24% prévue pour 2026 a été annulée, tout comme la « taxe de sécurité » de 2%.`,
  },
  'tip.vatM': {
    en: `Accommodation is at 13%, press and medicines at 9%, and rent is exempt, so this is an upper bound. The standard rate went from 22% to 24% in July 2025.`,
    nl: `Logies heeft 13%, pers en geneesmiddelen 9%, en huur is vrijgesteld, dus dit is een bovengrens. Het normale tarief ging in juli 2025 van 22% naar 24%.`,
    fr: `L'hébergement est à 13%, la presse et les médicaments à 9%, et les loyers exonérés : c'est donc un maximum. Le taux normal est passé de 22% à 24% en juillet 2025.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − unemployment premium − II pillar − income tax.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − werkloosheidspremie − II pijler − inkomstenbelasting.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − prime chômage − IIe pilier − impôt.`,
  },

  // Rules used
  refEyebrow: { en: `Rules used · income 2026`, nl: `Gebruikte regels · inkomen 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer`, li: [`Social tax <span class="num">33%</span> of gross, no ceiling, on at least <span class="num">886 €</span> a month.`, `Unemployment insurance <span class="num">0.8%</span>.`] },
    nl: { h: `1 · Werkgever`, li: [`Sociale belasting <span class="num">33%</span> van het bruto, zonder plafond, op minstens <span class="num">€ 886</span> per maand.`, `Werkloosheidsverzekering <span class="num">0,8%</span>.`] },
    fr: { h: `1 · Employeur`, li: [`Taxe sociale <span class="num">33%</span> du brut, sans plafond, sur au moins <span class="num">886 €</span> par mois.`, `Assurance chômage <span class="num">0,8%</span>.`] },
  },
  'ref.ee': {
    en: { h: `2 · Employee contributions`, li: [`Unemployment insurance <span class="num">1.6%</span>, none at pension age.`, `II pillar <span class="num">2%</span>, <span class="num">4%</span> or <span class="num">6%</span>, or none after leaving. Both deducted before income tax.`] },
    nl: { h: `2 · Werknemersbijdragen`, li: [`Werkloosheidsverzekering <span class="num">1,6%</span>, niet op pensioenleeftijd.`, `II pijler <span class="num">2%</span>, <span class="num">4%</span> of <span class="num">6%</span>, of niets na uitstappen. Beide afgetrokken vóór de inkomstenbelasting.`] },
    fr: { h: `2 · Cotisations salariales`, li: [`Assurance chômage <span class="num">1,6%</span>, aucune à l'âge de la retraite.`, `IIe pilier <span class="num">2%</span>, <span class="num">4%</span> ou <span class="num">6%</span>, ou rien après en être sorti. Les deux sont déduites avant l'impôt.`] },
  },
  'ref.ir': {
    en: { h: `3 · Income tax`, li: [`<span class="num">22%</span> flat, after a tax-free amount of <span class="num">700 €</span> a month (<span class="num">776 €</span> at pension age) for every income level.`] },
    nl: { h: `3 · Inkomstenbelasting`, li: [`<span class="num">22%</span> vlak, na een belastingvrije som van <span class="num">€ 700</span> per maand (<span class="num">€ 776</span> op pensioenleeftijd) voor elk inkomen.`] },
    fr: { h: `3 · Impôt sur le revenu`, li: [`<span class="num">22%</span> unique, après un abattement de <span class="num">700 €</span> par mois (<span class="num">776 €</span> à l'âge de la retraite) pour tous les revenus.`] },
  },
  'ref.pension': {
    en: { h: `4 · Pension age`, li: [`Higher tax-free amount, no employee unemployment premium, no social tax minimum. The employer's 0.8% stays.`] },
    nl: { h: `4 · Pensioenleeftijd`, li: [`Hogere belastingvrije som, geen werkloosheidspremie voor de werknemer, geen minimum voor de sociale belasting. De 0,8% van de werkgever blijft.`] },
    fr: { h: `4 · Âge de la retraite`, li: [`Abattement plus élevé, pas de prime chômage salariale, pas de minimum de taxe sociale. Les 0,8% de l'employeur restent dus.`] },
  },
  'ref.vat': {
    en: { h: `5 · VAT on spending`, li: [
      `Standard rate <span class="num">24%</span> since July 2025, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × r / (100 + r): at 24% that's 24 / 124 = <span class="num">19.35%</span> of what you pay.`,
    ] },
    nl: { h: `5 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">24%</span> sinds juli 2025, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 24% is dat 24 / 124 = <span class="num">19,35%</span> van wat je betaalt.`,
    ] },
    fr: { h: `5 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">24%</span> depuis juillet 2025, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 24%, cela fait 24 / 124 = <span class="num">19,35%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `6 · State and Parliament`, li: [
      `From April 2026: President <span class="num">10,239.71 €</span>, Prime Minister <span class="num">9,256.41 €</span>, ministers <span class="num">7,867.95 €</span>, Riigikogu members <span class="num">6,655.81 €</span> a month.`,
      `Taxed like a salary, without unemployment insurance.`,
    ] },
    nl: { h: `6 · Staat en parlement`, li: [
      `Vanaf april 2026: president <span class="num">€ 10.239,71</span>, premier <span class="num">€ 9.256,41</span>, ministers <span class="num">€ 7.867,95</span>, leden van de Riigikogu <span class="num">€ 6.655,81</span> per maand.`,
      `Belast zoals een loon, zonder werkloosheidsverzekering.`,
    ] },
    fr: { h: `6 · État et Parlement`, li: [
      `Depuis avril 2026 : Président <span class="num">10 239,71 €</span>, Premier ministre <span class="num">9 256,41 €</span>, ministres <span class="num">7 867,95 €</span>, députés <span class="num">6 655,81 €</span> par mois.`,
      `Imposés comme un salaire, sans assurance chômage.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Family benefits (paid whatever you earn), III pillar and training deductions claimed on the return, disability reliefs, and the exemptions from the social tax minimum other than pension age.`,
      `The minimum wage was 886 € until March 2026 and 946 € from April. Figures are the year's tax, assuming even monthly pay.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Gezinsbijslagen (betaald ongeacht je loon), aftrek voor de III pijler en opleidingen via de aangifte, kortingen bij handicap, en de vrijstellingen van het minimum voor de sociale belasting buiten de pensioenleeftijd.`,
      `Het minimumloon was € 886 tot maart 2026 en € 946 vanaf april. De bedragen zijn de belasting voor het jaar, met een gelijk maandloon.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Les allocations familiales (versées quel que soit le salaire), les déductions du IIIe pilier et de formation demandées dans la déclaration, les allègements pour handicap et les exemptions du minimum de taxe sociale autres que l'âge de la retraite.`,
      `Le salaire minimum était de 886 € jusqu'en mars 2026 et de 946 € depuis avril. Les montants sont l'impôt de l'année, pour un salaire mensuel régulier.`,
    ] },
  },

  inheritLink: {
    en: `What an heir pays on an inheritance, by relationship →`,
    nl: `Wat een erfgenaam betaalt op een erfenis, volgens verwantschap →`,
    fr: `Ce que paie un héritier sur une succession, selon le lien →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your payslip and the Tax and Customs Board (EMTA) decide.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je loonstrook en de belastingdienst (EMTA) zijn bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seuls votre fiche de paie et l'administration fiscale (EMTA) font foi.`,
  },

  'src.rates': { en: `EMTA: tax rates 2026`, nl: `EMTA: belastingtarieven 2026`, fr: `EMTA : taux 2026` },
  'src.changes': { en: `EMTA: tax changes in 2026`, nl: `EMTA: belastingwijzigingen 2026`, fr: `EMTA : changements fiscaux 2026` },
  'src.example': { en: `EMTA: withholding example`, nl: `EMTA: rekenvoorbeeld inhouding`, fr: `EMTA : exemple de retenue` },
  'src.rate22': { en: `Grant Thornton: 22% kept, flat exemption`, nl: `Grant Thornton: 22% blijft, vaste vrijstelling`, fr: `Grant Thornton : 22% maintenu, abattement fixe` },
  'src.ui': { en: `EMTA: unemployment insurance`, nl: `EMTA: werkloosheidsverzekering`, fr: `EMTA : assurance chômage` },
  'src.soc': { en: `EMTA: social tax minimum`, nl: `EMTA: minimum sociale belasting`, fr: `EMTA : minimum de taxe sociale` },
  'src.transfer': { en: `EMTA: transfers between spouses ended`, nl: `EMTA: einde overdracht tussen echtgenoten`, fr: `EMTA : fin des transferts entre époux` },
  'src.minWage': { en: `ERR: minimum wage 2026`, nl: `ERR: minimumloon 2026`, fr: `ERR : salaire minimum 2026` },
  'src.wages': { en: `ERR: Statistics Estonia wages, Q2 2026`, nl: `ERR: lonen Statistics Estonia, Q2 2026`, fr: `ERR : salaires de Statistics Estonia, T2 2026` },
  'src.govPay': { en: `Ministry of Finance: higher state servants' pay 2026`, nl: `Ministerie van Financiën: lonen hoge staatsambtenaren 2026`, fr: `Ministère des Finances : traitements des hauts serviteurs de l'État 2026` },
};
