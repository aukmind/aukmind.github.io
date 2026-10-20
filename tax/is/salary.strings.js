window.TAX_STRINGS = {
  title: { en: `Icelandic Buying Power`, nl: `IJslandse koopkracht`, fr: `Pouvoir d'achat islandais` },
  eyebrow: { en: `Iceland · income year 2026 · employee`, nl: `IJsland · inkomstenjaar 2026 · werknemer`, fr: `Islande · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Iceland · income year 2026 · minister`, nl: `IJsland · inkomstenjaar 2026 · minister`, fr: `Islande · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on an Icelandic salary in 2026, from what your employer pays to what you can buy.`,
    nl: `Alle belastingen op een IJslands loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen.`,
    fr: `Tous les impôts sur un salaire islandais en 2026, de ce que paie votre employeur à ce que vous pouvez acheter.`,
  },
  salaryPh: { en: `e.g. 900000`, nl: `bv. 900000`, fr: `p. ex. 900000` },
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul` },
  coupleHint: {
    en: `Married, or living together as a registered couple that can be taxed together.`,
    nl: `Getrouwd, of samenwonend als geregistreerd koppel dat samen belast kan worden.`,
    fr: `Mariés, ou en couple enregistré pouvant être imposé ensemble.`,
  },
  commune: { en: `Municipality (sveitarfélag)`, nl: `Gemeente (sveitarfélag)`, fr: `Commune (sveitarfélag)` },
  searchCommune: { en: `Search a municipality`, nl: `Zoek een gemeente`, fr: `Rechercher une commune` },
  searchN: { en: n => `Search ${n} municipalities`, nl: n => `Zoek in ${n} gemeenten`, fr: n => `Rechercher parmi ${n} communes` },
  communesError: {
    en: `Couldn't load the municipality list (communes.js next to this page). Set the rate by hand below.`,
    nl: `Kon de lijst met gemeenten niet laden (communes.js naast deze pagina). Stel het tarief hieronder zelf in.`,
    fr: `Impossible de charger la liste des communes (communes.js à côté de cette page). Réglez le taux à la main ci-dessous.`,
  },
  komLabel: { en: `Municipal tax (útsvar):`, nl: `Gemeentebelasting (útsvar):`, fr: `Impôt communal (útsvar) :` },
  komHint: {
    en: (k, reg) => `Útsvar ${k} · ${reg}`,
    nl: (k, reg) => `Útsvar ${k} · ${reg}`,
    fr: (k, reg) => `Útsvar ${k} · ${reg}`,
  },
  vatStandard: { en: `(11% on food, books and lodging)`, nl: `(11% op voeding, boeken en logies)`, fr: `(11% sur l'alimentation, les livres et l'hébergement)` },
  lowWageTrap: { en: `Covered by the tax credit`, nl: `Gedekt door de belastingkorting`, fr: `Couvert par le crédit d'impôt` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Impôts et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux d'imposition par salaire` },

  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Icelandic ministers: pay set by law and taxed like any salary, including the 4% that goes to a pension fund.`,
    nl: `IJslandse ministers: loon vastgelegd bij wet en belast zoals elk loon, inclusief de 4% die naar een pensioenfonds gaat.`,
    fr: `Ministres islandais : paie fixée par la loi et imposée comme tout salaire, y compris les 4% versés à une caisse de retraite.`,
  },
  minSalaryHint: {
    en: `Estimated yearly pay from 1 July 2026, including the MP salary that most ministers also get.`,
    nl: `Geschat jaarloon vanaf 1 juli 2026, inclusief het parlementsloon dat de meeste ministers ook krijgen.`,
    fr: `Paie annuelle estimée au 1er juillet 2026, y compris l'indemnité de député que la plupart des ministres touchent aussi.`,
  },
  'tip.ministerRules': {
    en: `The pay of ministers, MPs and top officials is set by law (no. 79/2019) and updated every 1 July. In 2026 parliament limited the rise to 3.5%, instead of the 9.7% the old formula would have given. A minister who is also an MP gets one combined salary. It is taxed like any salary: 4% to a pension fund, state and town income tax, minus the tax discount everyone gets. The state also pays the employer's pension share and social security tax (tryggingagjald) on it. The amounts here are estimates built from the 2023 figures and the rises since.`,
    nl: `Het loon van ministers, parlementsleden en topambtenaren is bij wet vastgelegd (nr. 79/2019) en wordt elk jaar op 1 juli bijgewerkt. In 2026 beperkte het parlement de stijging tot 3,5%, in plaats van de 9,7% die de oude formule zou geven. Een minister die ook parlementslid is, krijgt één samengevoegd loon. Het wordt belast zoals elk loon: 4% naar een pensioenfonds, inkomstenbelasting voor staat en gemeente, min de belastingkorting die iedereen krijgt. De staat betaalt er ook het werkgeversdeel van het pensioen en de socialezekerheidsbelasting (tryggingagjald) op. De bedragen hier zijn schattingen op basis van de cijfers van 2023 en de stijgingen sindsdien.`,
    fr: `La paie des ministres, des députés et des hauts fonctionnaires est fixée par la loi (n° 79/2019) et mise à jour chaque 1er juillet. En 2026, le parlement a limité la hausse à 3,5%, au lieu des 9,7% que l'ancienne formule aurait donnés. Un ministre aussi député touche un seul salaire combiné. Il est imposé comme tout salaire : 4% à une caisse de retraite, impôt de l'État et de la commune, moins la réduction d'impôt que tout le monde reçoit. L'État paie aussi dessus la part patronale de retraite et la taxe de sécurité sociale (tryggingagjald). Les montants sont des estimations à partir des chiffres de 2023 et des hausses depuis.`,
  },
  'bd.minGross': { en: `Ministerial pay`, nl: `Ministerswedde`, fr: `Rémunération de ministre` },
  'bd.stateCost': { en: `Total paid by the state`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, min, mp) => `Estimated monthly pay from 1 July 2026: Prime Minister ${pm}, minister ${min}, MP ${mp}.`,
    nl: (pm, min, mp) => `Geschat maandloon vanaf 1 juli 2026: premier ${pm}, minister ${min}, parlementslid ${mp}.`,
    fr: (pm, min, mp) => `Paie mensuelle estimée au 1er juillet 2026 : chef du gouvernement ${pm}, ministre ${min}, député ${mp}.`,
  },

  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Chef du gouvernement` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `Member of the Althing`, nl: `Lid van de Althing`, fr: `Député à l'Althing` },
  'pol.stat.pm': { en: `Pay set by law, estimate from 1 July 2026`, nl: `Loon bij wet vastgelegd, schatting vanaf 1 juli 2026`, fr: `Rémunération fixée par la loi, estimation au 1er juillet 2026` },
  'pol.stat.minister': { en: `Pay set by law, estimate from 1 July 2026`, nl: `Loon bij wet vastgelegd, schatting vanaf 1 juli 2026`, fr: `Rémunération fixée par la loi, estimation au 1er juillet 2026` },
  'pol.stat.mp': { en: `MP base pay (þingfararkaup), estimate from 1 July 2026`, nl: `Basisloon parlementslid (þingfararkaup), schatting vanaf 1 juli 2026`, fr: `Paie de base de député (þingfararkaup), estimation au 1er juillet 2026` },
  'polTitle.gov': { en: `Public offices`, nl: `Openbare ambten`, fr: `Fonctions publiques` },
  'pol.cb': { en: `Governor, Central Bank of Iceland`, nl: `Gouverneur, Centrale Bank van IJsland`, fr: `Gouverneur, Banque centrale d'Islande` },
  'polNote.stat': {
    en: `Taxed like any salary. The dot is their pay.`,
    nl: `Belast zoals elk loon. Het bolletje is hun loon.`,
    fr: `Imposé comme tout salaire. Le point est leur paie.`,
  },
  'polTipNote.pm': {
    en: `Estimate: the 2023 pay plus the 2024 and 2025 rises and 3.5% on 1 July 2026. Taxed like any salary; no part of it is tax-free.`,
    nl: `Schatting: het loon van 2023 plus de stijgingen van 2024 en 2025 en 3,5% op 1 juli 2026. Belast zoals elk loon; geen enkel deel is belastingvrij.`,
    fr: `Estimation : la paie de 2023 plus les hausses de 2024 et 2025 et 3,5% au 1er juillet 2026. Imposée comme tout salaire ; aucune partie n'est exonérée.`,
  },
  'polTipNote.minister': {
    en: `Estimate: the 2023 pay plus the 2024 and 2025 rises and 3.5% on 1 July 2026. Includes the MP salary when the minister sits in parliament (the Althing).`,
    nl: `Schatting: het loon van 2023 plus de stijgingen van 2024 en 2025 en 3,5% op 1 juli 2026. Inclusief het parlementsloon als de minister in het parlement (de Althing) zetelt.`,
    fr: `Estimation : la paie de 2023 plus les hausses de 2024 et 2025 et 3,5% au 1er juillet 2026. Comprend l'indemnité de député quand le ministre siège au parlement (l'Althing).`,
  },
  'polTipNote.mp': {
    en: `Estimate of an MP's base pay. The Speaker, committee chairs and party leaders get extra. Travel and housing costs are paid back on top.`,
    nl: `Schatting van het basisloon van een parlementslid. De voorzitter, commissievoorzitters en partijleiders krijgen extra. Reis- en woonkosten worden er bovenop terugbetaald.`,
    fr: `Estimation de la paie de base d'un député. Le président, les présidents de commission et les chefs de parti touchent un supplément. Les frais de déplacement et de logement sont remboursés en plus.`,
  },
  'polTipNote.cb': {
    en: `Governor since 2019. Estimate from the 2023 pay for the job, raised the same way as MPs' pay.`,
    nl: `Gouverneur sinds 2019. Schatting op basis van het loon van 2023 voor de functie, op dezelfde manier verhoogd als het loon van parlementsleden.`,
    fr: `Gouverneur depuis 2019. Estimation à partir de la paie 2023 du poste, augmentée comme celle des députés.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom in on it. Pay is yearly, shown on the chart as the yearly amount divided by 12. Their pay is taxed like yours, so each one sits at their own gross pay. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om in te zoomen. Het loon is jaarlijks, op de grafiek getoond als jaarbedrag gedeeld door 12. Hun loon wordt belast zoals het jouwe, dus iedereen staat op zijn eigen brutoloon. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. La paie est annuelle, placée sur le graphique en montant annuel divisé par 12. Elle est imposée comme la vôtre : chacun est placé à son propre brut. Sources : ${links}.`,
  },

  bracketTop: { en: `step 2`, nl: `schijf 2`, fr: `tranche 2` },
  trapTitle: {
    en: a => `Why is the rate so low below ${a}?`,
    nl: a => `Waarom is het tarief zo laag onder ${a}?`,
    fr: a => `Pourquoi le taux est-il si bas sous ${a} ?`,
  },
  trapBody: {
    en: (a, pf, fees) => `Everyone gets a tax discount of ${pf} a year, taken off the state and town income tax you owe. Below ${a} it cancels all of it, so you only pay the 4% to your pension fund. Above that, the discount stays the same while the tax grows, so your overall rate keeps climbing toward the rate on each extra krona. From ${fees}, two flat fees (for public broadcasting and for building elderly care homes) come in all at once.`,
    nl: (a, pf, fees) => `Iedereen krijgt een belastingkorting van ${pf} per jaar, afgetrokken van de inkomstenbelasting voor staat en gemeente die je verschuldigd bent. Onder ${a} heft ze alles op, dus betaal je enkel de 4% voor je pensioenfonds. Daarboven blijft de korting gelijk terwijl de belasting stijgt, dus klimt je totale tarief naar het tarief op elke extra kroon. Vanaf ${fees} komen er in één keer twee vaste bijdragen bij (voor de publieke omroep en voor de bouw van ouderenzorg).`,
    fr: (a, pf, fees) => `Tout le monde a une réduction d'impôt de ${pf} par an, retirée de l'impôt de l'État et de la commune que vous devez. Sous ${a}, elle efface tout : vous ne payez que les 4% pour votre caisse de retraite. Au-delà, la réduction reste fixe pendant que l'impôt monte : votre taux global grimpe vers le taux sur chaque couronne en plus. À partir de ${fees}, deux redevances fixes (pour l'audiovisuel public et pour construire des maisons de retraite) arrivent d'un coup.`,
  },
  topTitle: {
    en: (b2, b3) => `Why the steps at ${b2}${b3 ? ` and ${b3}` : ''}?`,
    nl: (b2, b3) => `Waarom de sprongen bij ${b2}${b3 ? ` en ${b3}` : ''}?`,
    fr: (b2, b3) => `Pourquoi les marches à ${b2}${b3 ? ` et ${b3}` : ''} ?`,
  },
  topBody: {
    en: (b2, b3, a2, a3) => `From ${b2}, your taxable income passes ${a2} a year and the state rate on each extra krona goes from 16.55% to 23.05%.${b3 ? ` From ${b3} it passes ${a3} and goes to 31.35%.` : ''} The town tax (útsvar) is the same rate on all income, so the highest rate on each extra krona is 31.35% plus your town's rate: 46.32% in Reykjavík.`,
    nl: (b2, b3, a2, a3) => `Vanaf ${b2} komt je belastbaar inkomen boven ${a2} per jaar en stijgt het staatstarief op elke extra kroon van 16,55% naar 23,05%.${b3 ? ` Vanaf ${b3} komt het boven ${a3} en wordt het 31,35%.` : ''} De gemeentebelasting (útsvar) heeft één tarief op al het inkomen, dus het hoogste tarief op elke extra kroon is 31,35% plus het tarief van je gemeente: 46,32% in Reykjavík.`,
    fr: (b2, b3, a2, a3) => `À partir de ${b2}, votre revenu imposable dépasse ${a2} par an et le taux de l'État sur chaque couronne en plus passe de 16,55% à 23,05%.${b3 ? ` À partir de ${b3}, il dépasse ${a3} et passe à 31,35%.` : ''} L'impôt communal (útsvar) a un seul taux sur tout le revenu : le taux le plus haut sur chaque couronne en plus est donc 31,35% plus celui de votre commune, soit 46,32% à Reykjavík.`,
  },

  'comp.er': { en: `Employer pension and social security tax`, nl: `Werkgeverspensioen en socialezekerheidsbelasting`, fr: `Retraite patronale et taxe de sécurité sociale` },
  'comp.ee': { en: `Pension contribution (4%)`, nl: `Pensioenbijdrage (4%)`, fr: `Cotisation retraite (4%)` },
  'comp.stat': { en: `State income tax`, nl: `Rijksinkomstenbelasting`, fr: `Impôt d'État sur le revenu` },
  'comp.kom': { en: `Town income tax (útsvar)`, nl: `Gemeentelijke inkomstenbelasting (útsvar)`, fr: `Impôt communal (útsvar)` },
  'comp.fees': { en: `Broadcasting and elderly care fees`, nl: `Omroep- en ouderenzorgbijdrage`, fr: `Redevances audiovisuel et maisons de retraite` },
  'comp.fam': { en: `Child benefit lost because of your pay`, nl: `Kinderbijslag verloren door je loon`, fr: `Allocations familiales perdues à cause de votre paie` },
  'er.pen': { en: `Employer pension contribution`, nl: `Pensioenbijdrage werkgever`, fr: `Cotisation retraite patronale` },
  'er.tg': { en: `Tryggingagjald (social security tax)`, nl: `Tryggingagjald (socialezekerheidsbelasting)`, fr: `Tryggingagjald (taxe de sécurité sociale)` },
  'bd.taxable': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.stateGross': { en: `State tax before the discount`, nl: `Staatsbelasting vóór de korting`, fr: `Impôt d'État avant la réduction` },
  'bd.utsGross': { en: `Town tax before the discount`, nl: `Gemeentebelasting vóór de korting`, fr: `Impôt communal avant la réduction` },
  'bd.credit': { en: `Tax discount used`, nl: `Gebruikte belastingkorting`, fr: `Réduction d'impôt utilisée` },
  'tax.b1': { en: `Step 1`, nl: `Schijf 1`, fr: `Tranche 1` },
  'tax.b2': { en: `Step 2`, nl: `Schijf 2`, fr: `Tranche 2` },
  'tax.b3': { en: `Step 3`, nl: `Schijf 3`, fr: `Tranche 3` },

  'tip.f12': {
    en: `12 monthly salaries. Most union agreements add a fixed holiday bonus (orlofsuppbót) and a December bonus (desemberuppbót); they are not counted here.`,
    nl: `12 maandlonen. De meeste cao's voegen een vaste vakantiepremie (orlofsuppbót) en een decemberpremie (desemberuppbót) toe; die tellen hier niet mee.`,
    fr: `12 salaires mensuels. La plupart des conventions collectives ajoutent une prime de vacances (orlofsuppbót) et une prime de décembre (desemberuppbót) fixes ; elles ne sont pas comptées ici.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: pf => `Married people are taxed separately. But in 2026, if one of them can't use all of their tax discount (${pf}), the rest goes to the other. Child benefit depends on the couple's combined income and is split in two.`,
    nl: pf => `Getrouwde mensen worden apart belast. Maar in 2026 gaat, als de ene zijn belastingkorting (${pf}) niet volledig kan gebruiken, de rest naar de andere. Kinderbijslag hangt af van het samengetelde inkomen van het koppel en wordt in twee gedeeld.`,
    fr: pf => `Les personnes mariées sont imposées séparément. Mais en 2026, si l'un ne peut pas utiliser toute sa réduction d'impôt (${pf}), le reste passe à l'autre. Les allocations familiales dépendent du revenu total du couple et sont partagées en deux.`,
  },
  'tip.jointCalc': {
    en: `Your share is what the couple pays with your pay, minus what the couple would pay if you earned nothing. That is because otherwise your unused discount would lower your partner's tax.`,
    nl: `Jouw deel is wat het koppel betaalt met jouw loon, min wat het koppel zou betalen als jij niets verdiende. Anders zou je ongebruikte korting immers de belasting van je partner verlagen.`,
    fr: `Votre part est ce que paie le couple avec votre paie, moins ce qu'il paierait si vous ne gagniez rien. Sinon, votre réduction inutilisée baisserait l'impôt de votre partenaire.`,
  },
  'tip.komRule': {
    en: (lo, hi, avg) => `Each town sets its own income tax (útsvar), between ${lo} and ${hi} in 2026. The legal maximum is 14.97% and almost all towns charge it. Employers take the average, ${avg}, from each payslip; the difference is settled in the yearly tax bill.`,
    nl: (lo, hi, avg) => `Elke gemeente legt haar eigen inkomstenbelasting (útsvar) vast, tussen ${lo} en ${hi} in 2026. Het wettelijke maximum is 14,97% en bijna alle gemeenten vragen dat. Werkgevers houden het gemiddelde, ${avg}, in op elke loonstrook; het verschil wordt in de jaarlijkse aanslag verrekend.`,
    fr: (lo, hi, avg) => `Chaque commune fixe son impôt sur le revenu (útsvar), entre ${lo} et ${hi} en 2026. Le maximum légal est de 14,97% et presque toutes l'appliquent. L'employeur retient la moyenne, ${avg}, sur chaque fiche de paie ; la différence est réglée dans l'avis d'impôt annuel.`,
  },
  'tip.costShort': {
    en: `Gross salary plus the employer's pension share and social security tax (tryggingagjald).`,
    nl: `Brutoloon plus het pensioendeel van de werkgever en de socialezekerheidsbelasting (tryggingagjald).`,
    fr: `Salaire brut plus la part patronale de retraite et la taxe de sécurité sociale (tryggingagjald).`,
  },
  'tip.er': {
    en: `Your employer puts at least 11.5% of your pay into your pension fund, and pays 6.35% social security tax (tryggingagjald) to the state: 4.90% general social security, 1.35% unemployment insurance, and 0.05% each for a fund that guarantees unpaid wages and a market fee.`,
    nl: `Je werkgever stort minstens 11,5% van je loon in je pensioenfonds, en betaalt 6,35% socialezekerheidsbelasting (tryggingagjald) aan de staat: 4,90% algemene sociale zekerheid, 1,35% werkloosheidsverzekering, en elk 0,05% voor een fonds dat onbetaalde lonen waarborgt en een marktbijdrage.`,
    fr: `L'employeur verse au moins 11,5% de votre paie à votre caisse de retraite, et paie 6,35% de taxe de sécurité sociale (tryggingagjald) à l'État : 4,90% de sécurité sociale générale, 1,35% d'assurance chômage, et 0,05% chacun pour un fonds qui garantit les salaires impayés et une contribution de marché.`,
  },
  'tip.erM': {
    en: `Union agreements also make employers pay into union funds (sick pay, holiday homes, training, about 1.5%), and often add 2% when you save extra for your pension. These are left out.`,
    nl: `Cao's laten werkgevers ook betalen aan vakbondsfondsen (ziekte, vakantiewoningen, opleiding, ongeveer 1,5%), en vaak 2% bijleggen als je extra spaart voor je pensioen. Die zijn weggelaten.`,
    fr: `Les conventions collectives font aussi payer à l'employeur des fonds syndicaux (maladie, maisons de vacances, formation, environ 1,5%), et souvent 2% en plus quand vous épargnez davantage pour la retraite. Ils sont laissés de côté.`,
  },
  'tip.ee': {
    en: `Every employee pays 4% of gross pay into a pension fund. This part is taken off before income tax is worked out.`,
    nl: `Elke werknemer stort 4% van het brutoloon in een pensioenfonds. Dat deel gaat eraf voordat de inkomstenbelasting berekend wordt.`,
    fr: `Chaque salarié verse 4% de son brut à une caisse de retraite. Cette part est retirée avant le calcul de l'impôt sur le revenu.`,
  },
  'tip.taxable': {
    en: calc => `The part of your pay that is taxed: gross minus the 4% pension${calc}. Both the state tax and the town tax are charged on this.`,
    nl: calc => `Het deel van je loon dat belast wordt: bruto min de 4% pensioen${calc}. Zowel de staats- als de gemeentebelasting worden hierop berekend.`,
    fr: calc => `La part de votre paie qui est imposée : brut moins les 4% de retraite${calc}. L'impôt de l'État et celui de la commune portent sur ce montant.`,
  },
  'tip.statShort': {
    en: `Three slices taxed at 16.55%, 23.05% and 31.35%, on top of the town tax, minus the tax discount everyone gets.`,
    nl: `Drie schijven belast aan 16,55%, 23,05% en 31,35%, bovenop de gemeentebelasting, min de belastingkorting die iedereen krijgt.`,
    fr: `Trois tranches taxées à 16,55%, 23,05% et 31,35%, en plus de l'impôt communal, moins la réduction d'impôt de tout le monde.`,
  },
  'tip.statM': {
    en: (b1, b2) => `On taxable income: the second rate applies above ${b1}, the third above ${b2} a year. The tax discount comes off this tax first.`,
    nl: (b1, b2) => `Op het belastbaar inkomen: het tweede tarief geldt boven ${b1}, het derde boven ${b2} per jaar. De belastingkorting gaat eerst van deze belasting af.`,
    fr: (b1, b2) => `Sur le revenu imposable : le deuxième taux s'applique au-delà de ${b1}, le troisième au-delà de ${b2} par an. La réduction d'impôt est d'abord retirée de cet impôt.`,
  },
  'tip.yourShare': { en: `Your share for the couple`, nl: `Jouw deel voor het koppel`, fr: `Votre part pour le couple` },
  'tip.kom': {
    en: (name, rate) => `${name ? `${name} charges ${rate}` : `Rate ${rate}`} of taxable income, with no tax-free part. Whatever is left of your tax discount after the state tax comes off it.`,
    nl: (name, rate) => `${name ? `${name} rekent ${rate}` : `Tarief ${rate}`} van het belastbaar inkomen, zonder belastingvrij deel. Wat er na de staatsbelasting overblijft van je belastingkorting, gaat ervan af.`,
    fr: (name, rate) => `${name ? `${name} prélève ${rate}` : `Taux de ${rate}`} du revenu imposable, sans part exonérée. Ce qui reste de votre réduction d'impôt après l'impôt d'État est retiré ici.`,
  },
  'tip.creditLeft': { en: `Discount left after state tax`, nl: `Korting over na staatsbelasting`, fr: `Réduction restant après l'impôt d'État` },
  'tip.credit': {
    en: (y, m) => `Every resident aged 16 or over gets ${y} a year (${m} a month) off their tax: first off the state tax, then off the town tax. It is never paid out as cash. Any unused part goes to a spouse.`,
    nl: (y, m) => `Elke inwoner van 16 jaar of ouder krijgt ${y} per jaar (${m} per maand) korting op zijn belasting: eerst op de staatsbelasting, dan op de gemeentebelasting. Ze wordt nooit in geld uitbetaald. Wat niet gebruikt wordt, gaat naar de echtgenoot.`,
    fr: (y, m) => `Tout résident de 16 ans ou plus a ${y} par an (${m} par mois) de réduction d'impôt : d'abord sur l'impôt d'État, puis sur l'impôt communal. Elle n'est jamais versée en argent. La part non utilisée passe au conjoint.`,
  },
  'tip.fees': {
    en: (utv, fra, lo) => `Two fixed fees for everyone aged 16 to 69, added to the yearly tax bill once income is above ${lo}: the public broadcasting fee (${utv}) and the fund for building elderly care homes (${fra}). Amounts for 2026.`,
    nl: (utv, fra, lo) => `Twee vaste bijdragen voor iedereen van 16 tot 69, toegevoegd aan de jaarlijkse aanslag zodra het inkomen boven ${lo} ligt: de bijdrage voor de publieke omroep (${utv}) en het fonds voor de bouw van ouderenzorg (${fra}). Bedragen van 2026.`,
    fr: (utv, fra, lo) => `Deux redevances fixes pour tous de 16 à 69 ans, ajoutées à l'avis d'impôt annuel dès que le revenu dépasse ${lo} : la redevance de l'audiovisuel public (${utv}) et le fonds pour construire des maisons de retraite (${fra}). Montants de 2026.`,
  },
  'tip.fam': {
    en: (single, lo, couple, loC) => `Child benefit (barnabætur) for a child aged 7 or older: ${single} a year for a single parent, reduced by 4% of income above ${lo}; ${couple} for a couple, reduced by 4% of their combined income above ${loC}, and split in two. Children under 7 get kr 130,000 more. The benefit your pay makes you lose counts as tax here.`,
    nl: (single, lo, couple, loC) => `Kinderbijslag (barnabætur) voor een kind van 7 jaar of ouder: ${single} per jaar voor een alleenstaande ouder, verminderd met 4% van het inkomen boven ${lo}; ${couple} voor een koppel, verminderd met 4% van hun samengeteld inkomen boven ${loC}, en in twee gedeeld. Kinderen jonger dan 7 krijgen kr 130.000 meer. De bijslag die je door je loon verliest, telt hier als belasting.`,
    fr: (single, lo, couple, loC) => `Allocations familiales (barnabætur) pour un enfant de 7 ans ou plus : ${single} par an pour un parent seul, réduites de 4% du revenu au-delà de ${lo} ; ${couple} pour un couple, réduites de 4% du revenu total du couple au-delà de ${loC}, et partagées en deux. Les enfants de moins de 7 ans reçoivent 130 000 kr de plus. Ce que votre paie vous fait perdre compte ici comme un impôt.`,
  },
  'tip.famBenefit': { en: `Child benefit before the income cut`, nl: `Kinderbijslag vóór de vermindering door inkomen`, fr: `Allocations avant la baisse liée au revenu` },
  'tip.famCut': { en: `lost to income`, nl: `verloren door inkomen`, fr: `perdu à cause du revenu` },
  'tip.vatM': {
    en: `Iceland's normal VAT is 24%, and 11% on food, books, hotels and a few other things. Some spending, like rent and healthcare, has no VAT. We apply 24% to everything anyway, so this is the most it could be.`,
    nl: `De normale btw in IJsland is 24%, en 11% op voeding, boeken, hotels en enkele andere dingen. Sommige uitgaven, zoals huur en gezondheidszorg, hebben geen btw. We passen toch 24% op alles toe, dus dit is het maximum.`,
    fr: `La TVA normale en Islande est de 24%, et 11% sur l'alimentation, les livres, les hôtels et quelques autres choses. Certaines dépenses, comme le loyer et la santé, n'en ont pas. On applique quand même 24% à tout : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What reaches your bank account over the year${calc}. Gross pay minus the 4% pension, minus state tax, minus town tax, minus the two fees, minus any child benefit you lose.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon min de 4% pensioen, min staatsbelasting, min gemeentebelasting, min de twee bijdragen, min de kinderbijslag die je verliest.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Salaire brut moins les 4% de retraite, moins l'impôt d'État, moins l'impôt communal, moins les deux redevances, moins les allocations perdues.`,
  },

  refEyebrow: { en: `Rules used · income year 2026`, nl: `Gebruikte regels · inkomstenjaar 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Pension and employer charges`, li: [
      `Pension: <span class="num">4%</span> from you (not taxed), at least <span class="num">11.5%</span> from your employer.`,
      `Social security tax (tryggingagjald) <span class="num">6.35%</span> of wages, paid by the employer.`,
    ] },
    nl: { h: `1 · Pensioen en werkgeverslasten`, li: [
      `Pensioen: <span class="num">4%</span> van jou (niet belast), minstens <span class="num">11,5%</span> van je werkgever.`,
      `Socialezekerheidsbelasting (tryggingagjald) <span class="num">6,35%</span> van het loon, betaald door de werkgever.`,
    ] },
    fr: { h: `1 · Retraite et charges patronales`, li: [
      `Retraite : <span class="num">4%</span> pour vous (non imposés), au moins <span class="num">11,5%</span> pour l'employeur.`,
      `Taxe de sécurité sociale (tryggingagjald) de <span class="num">6,35%</span> des salaires, payée par l'employeur.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `2 · State income tax`, li: [
      `Taxable income = gross pay minus the 4% pension.`,
      `State tax on each slice of taxable income, before the discount:${br}`,
      `Monthly limits used on payslips: kr 498,122 and kr 1,398,450.`,
    ] }),
    nl: br => ({ h: `2 · Staatsinkomstenbelasting`, li: [
      `Belastbaar inkomen = brutoloon min de 4% pensioen.`,
      `Staatsbelasting op elke schijf van het belastbaar inkomen, vóór de korting:${br}`,
      `Maandgrenzen op de loonstrook: kr 498.122 en kr 1.398.450.`,
    ] }),
    fr: br => ({ h: `2 · Impôt d'État sur le revenu`, li: [
      `Revenu imposable = brut moins les 4% de retraite.`,
      `Impôt d'État sur chaque tranche du revenu imposable, avant la réduction :${br}`,
      `Seuils mensuels utilisés sur la fiche de paie : 498 122 kr et 1 398 450 kr.`,
    ] }),
  },
  'ref.levels': {
    en: { h: `3 · Town income tax (útsvar)`, li: [
      `One rate on all income, from <span class="num">12.44%</span> (Fljótsdalshreppur) to the legal maximum of <span class="num">14.97%</span>, charged by Reykjavík and most others; average 14.94%. Rates for all 62 towns from the Association of Local Authorities.`,
      `Highest rate on each extra krona: 31.35% + 14.97% = <span class="num">46.32%</span>.`,
    ] },
    nl: { h: `3 · Gemeentelijke inkomstenbelasting (útsvar)`, li: [
      `Eén tarief op al het inkomen, van <span class="num">12,44%</span> (Fljótsdalshreppur) tot het wettelijke maximum van <span class="num">14,97%</span>, dat Reykjavík en de meeste andere vragen; gemiddeld 14,94%. Tarieven van alle 62 gemeenten van de Vereniging van Lokale Besturen.`,
      `Hoogste tarief op elke extra kroon: 31,35% + 14,97% = <span class="num">46,32%</span>.`,
    ] },
    fr: { h: `3 · Impôt communal (útsvar)`, li: [
      `Un seul taux sur tout le revenu, de <span class="num">12,44%</span> (Fljótsdalshreppur) au maximum légal de <span class="num">14,97%</span>, appliqué par Reykjavík et la plupart des autres ; moyenne 14,94%. Taux des 62 communes selon l'Association des collectivités locales.`,
      `Taux le plus haut sur chaque couronne en plus : 31,35% + 14,97% = <span class="num">46,32%</span>.`,
    ] },
  },
  'ref.credit': {
    en: { h: `4 · Tax discount and fees`, li: [
      `Tax discount for everyone: <span class="num">kr 869,898</span> a year (kr 72,492 a month), off state tax first, then town tax. Nothing is due on pay up to about kr 240,000 a month.`,
      `Broadcasting fee kr 22,200 and elderly care fund fee kr 14,614, per person aged 16 to 69 with income above kr 2,617,618.`,
    ] },
    nl: { h: `4 · Belastingkorting en bijdragen`, li: [
      `Belastingkorting voor iedereen: <span class="num">kr 869.898</span> per jaar (kr 72.492 per maand), eerst van de staatsbelasting, dan van de gemeentebelasting. Tot ongeveer kr 240.000 loon per maand is niets verschuldigd.`,
      `Omroepbijdrage kr 22.200 en ouderenzorgbijdrage kr 14.614, per persoon van 16 tot 69 met een inkomen boven kr 2.617.618.`,
    ] },
    fr: { h: `4 · Réduction d'impôt et redevances`, li: [
      `Réduction d'impôt pour tous : <span class="num">869 898 kr</span> par an (72 492 kr par mois), d'abord sur l'impôt d'État, puis sur l'impôt communal. Rien n'est dû jusqu'à environ 240 000 kr de paie par mois.`,
      `Redevance audiovisuelle de 22 200 kr et redevance maisons de retraite de 14 614 kr, par personne de 16 à 69 ans dont le revenu dépasse 2 617 618 kr.`,
    ] },
  },
  'ref.couple': {
    en: { h: `5 · Couples`, li: [
      `Married and registered couples are taxed separately. In 2026, all of an unused tax discount goes to the other partner.`,
      `Here, your tax is what the couple pays minus what the couple would pay if you earned nothing.`,
    ] },
    nl: { h: `5 · Koppels`, li: [
      `Getrouwde en geregistreerde koppels worden apart belast. In 2026 gaat een ongebruikte belastingkorting volledig naar de andere partner.`,
      `Hier is jouw belasting wat het koppel betaalt min wat het koppel zou betalen als jij niets verdiende.`,
    ] },
    fr: { h: `5 · Couples`, li: [
      `Les couples mariés et enregistrés sont imposés séparément. En 2026, toute la réduction d'impôt inutilisée passe à l'autre partenaire.`,
      `Ici, votre impôt est ce que paie le couple moins ce qu'il paierait si vous ne gagniez rien.`,
    ] },
  },
  'ref.fam': {
    en: { h: `6 · Children`, li: [
      `No tax break for children. Child benefit per child: <span class="num">kr 514,500</span> a year for a single parent, kr 345,000 for a couple, plus kr 130,000 under age 7; this page uses a child aged 7 or older.`,
      `Reduced by <span class="num">4%</span> of income above kr 5,844,000 (single) or kr 11,688,000 (couple, combined income).`,
    ] },
    nl: { h: `6 · Kinderen`, li: [
      `Geen belastingvoordeel voor kinderen. Kinderbijslag per kind: <span class="num">kr 514.500</span> per jaar voor een alleenstaande ouder, kr 345.000 voor een koppel, plus kr 130.000 onder 7 jaar; deze pagina rekent met een kind van 7 jaar of ouder.`,
      `Verminderd met <span class="num">4%</span> van het inkomen boven kr 5.844.000 (alleenstaand) of kr 11.688.000 (koppel, samengeteld inkomen).`,
    ] },
    fr: { h: `6 · Enfants`, li: [
      `Aucun avantage fiscal pour les enfants. Allocations par enfant : <span class="num">514 500 kr</span> par an pour un parent seul, 345 000 kr pour un couple, plus 130 000 kr avant 7 ans ; cette page utilise un enfant de 7 ans ou plus.`,
      `Réduites de <span class="num">4%</span> du revenu au-delà de 5 844 000 kr (seul) ou 11 688 000 kr (couple, revenu total).`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">24%</span>, applied to all of your net pay as if you spent all of it.`,
      `The VAT hidden in a price = price × 24 / 124 = <span class="num">19.35%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">24%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `De btw verstopt in een prijs = prijs × 24 / 124 = <span class="num">19,35%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal de <span class="num">24%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `La TVA cachée dans un prix = prix × 24 / 124 = <span class="num">19,35%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Ministers and MPs`, li: [
      `Pay set by law 79/2019 and raised every 1 July: +3.5% in 2026 (law 60/2026). Estimates from 1 July 2026: Prime Minister <span class="num">kr 3.33 million</span> a month, minister kr 3.01 million, MP kr 1.65 million.`,
      `Taxed like any salary. MPs' travel and housing costs are paid back separately.`,
    ] },
    nl: { h: `8 · Ministers en parlementsleden`, li: [
      `Loon vastgelegd bij wet 79/2019 en elk jaar op 1 juli verhoogd: +3,5% in 2026 (wet 60/2026). Schattingen vanaf 1 juli 2026: premier <span class="num">kr 3,33 miljoen</span> per maand, minister kr 3,01 miljoen, parlementslid kr 1,65 miljoen.`,
      `Belast zoals elk loon. Reis- en woonkosten van parlementsleden worden apart terugbetaald.`,
    ] },
    fr: { h: `8 · Ministres et députés`, li: [
      `Paie fixée par la loi 79/2019 et augmentée chaque 1er juillet : +3,5% en 2026 (loi 60/2026). Estimations au 1er juillet 2026 : chef du gouvernement <span class="num">3,33 millions kr</span> par mois, ministre 3,01 millions kr, député 1,65 million kr.`,
      `Imposée comme tout salaire. Les frais de déplacement et de logement des députés sont remboursés à part.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Holiday and December bonuses, union fees (about 1%), extra pension savings (up to 4%, not taxed, with 2% added by the employer) and the union funds the employer pays into.`,
      `Help with loan interest, housing benefit, tax on savings and investment income (22%), and the 6% tax on income of children under 16.`,
      `The figures are your final tax for the year, not what is taken from each payslip using the average town tax.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Vakantie- en decemberpremie, vakbondsbijdrage (ongeveer 1%), extra pensioensparen (tot 4%, niet belast, met 2% bijgelegd door de werkgever) en de vakbondsfondsen waarin de werkgever stort.`,
      `Steun voor rente op leningen, huurtoeslag, belasting op spaar- en beleggingsinkomen (22%), en de belasting van 6% op inkomen van kinderen onder 16.`,
      `De bedragen zijn je uiteindelijke belasting voor het jaar, niet wat van elke loonstrook gaat volgens de gemiddelde gemeentebelasting.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Primes de vacances et de décembre, cotisation syndicale (environ 1%), épargne retraite en plus (jusqu'à 4%, non imposée, avec 2% ajoutés par l'employeur) et les fonds syndicaux payés par l'employeur.`,
      `L'aide aux intérêts d'emprunt, l'allocation logement, l'impôt sur l'épargne et les placements (22%), et l'impôt de 6% sur les revenus des enfants de moins de 16 ans.`,
      `Les montants sont votre impôt final de l'année, pas ce qui est retenu sur chaque fiche de paie avec l'impôt communal moyen.`,
    ] },
  },
  inheritLink: {
    en: `What you'd pay on what you inherit, by relationship →`,
    nl: `Wat je zou betalen op wat je erft, per verwantschap →`,
    fr: `Ce que vous paieriez sur un héritage, par lien de parenté →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your yearly assessment (álagning) from Skatturinn decides.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je jaarlijkse aanslag (álagning) van Skatturinn is bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seule votre imposition annuelle (álagning) par Skatturinn fait foi.`,
  },
  'src.brackets': { en: `Skatturinn: tax steps 2026`, nl: `Skatturinn: belastingschijven 2026`, fr: `Skatturinn : tranches 2026` },
  'src.withholding': { en: `Skatturinn: withholding 2026`, nl: `Skatturinn: inhouding 2026`, fr: `Skatturinn : retenue à la source 2026` },
  'src.utsvar': { en: `Association of Local Authorities: útsvar rates`, nl: `Vereniging van Lokale Besturen: útsvar-tarieven`, fr: `Association des collectivités locales : taux d'útsvar` },
  'src.pwc': { en: `PwC: Iceland, other taxes`, nl: `PwC: IJsland, andere belastingen`, fr: `PwC : Islande, autres impôts` },
  'src.utv': { en: `island.is: broadcasting fee`, nl: `island.is: omroepbijdrage`, fr: `island.is : redevance audiovisuelle` },
  'src.fra': { en: `island.is: elderly fund fee`, nl: `island.is: ouderenfondsbijdrage`, fr: `island.is : fonds pour les aînés` },
  'src.bb': { en: `island.is: child benefit amounts`, nl: `island.is: bedragen kinderbijslag`, fr: `island.is : montants des allocations familiales` },
  'src.vat': { en: `PwC: Iceland, VAT`, nl: `PwC: IJsland, btw`, fr: `PwC : Islande, TVA` },
  'src.wages': { en: `Statistics Iceland: earnings 2025`, nl: `Statistics Iceland: lonen 2025`, fr: `Statistics Iceland : salaires 2025` },
  'src.minPay': { en: `Government: officials' pay update 2026`, nl: `Regering: loonaanpassing ambtsdragers 2026`, fr: `Gouvernement : hausse des rémunérations 2026` },
  'src.pay2023': { en: `Wikipedia: officials' pay in Iceland`, nl: `Wikipedia: lonen van ambtsdragers in IJsland`, fr: `Wikipédia : rémunérations publiques en Islande` },

  // Known gaps and caveats
  'gap.noCheck': {
    en: `Researched without searching the web, and no take-home pay was checked against the tax office's (Skatturinn) calculator.`,
    nl: `Opgezocht zonder op het web te zoeken, en geen enkel nettoloon is nagerekend met de rekentool van de belastingdienst (Skatturinn).`,
    fr: `Recherché sans recherche web, et aucun salaire net n'a été vérifié avec le simulateur du fisc (Skatturinn).`,
  },
  'gap.polPay': {
    en: `The pay of politicians and of the central bank governor is estimated: 2023 amounts raised by the 2024 and 2025 updates and 3.5% in July 2026. The parliament website (althingi.is) could not be read to confirm them.`,
    nl: `Het loon van politici en van de gouverneur van de centrale bank is geschat: bedragen van 2023 verhoogd met de aanpassingen van 2024 en 2025 en 3,5% in juli 2026. De website van het parlement (althingi.is) was niet leesbaar om ze te bevestigen.`,
    fr: `La paie des politiciens et du gouverneur de la banque centrale est estimée : montants 2023 augmentés par les mises à jour de 2024 et 2025 et 3,5% en juillet 2026. Le site du parlement (althingi.is) était illisible pour les confirmer.`,
  },
  'gap.cap35': {
    en: `The 3.5% limit on the July 2026 rise comes from the government's April 2026 proposal; we assume parliament passed it unchanged.`,
    nl: `De grens van 3,5% op de stijging van juli 2026 komt uit het regeringsvoorstel van april 2026; we nemen aan dat het parlement het ongewijzigd goedkeurde.`,
    fr: `La limite de 3,5% de la hausse de juillet 2026 vient de la proposition du gouvernement d'avril 2026 ; on suppose que le parlement l'a adoptée telle quelle.`,
  },
  'gap.polYear': {
    en: `The estimated pay from 1 July 2026 is used for the whole year, though January to June was paid at the lower 2025 amount.`,
    nl: `Het geschatte loon vanaf 1 juli 2026 wordt voor het hele jaar gebruikt, hoewel januari tot juni aan het lagere bedrag van 2025 werd betaald.`,
    fr: `La paie estimée au 1er juillet 2026 est utilisée pour toute l'année, alors que de janvier à juin c'était le montant plus bas de 2025.`,
  },
  'gap.famRate': {
    en: `Child benefit is reduced by 4% of income above the limit, whatever the number of children. The law may use a higher rate for two or more children (not confirmed here).`,
    nl: `De kinderbijslag wordt verminderd met 4% van het inkomen boven de grens, ongeacht het aantal kinderen. De wet gebruikt mogelijk een hoger percentage vanaf twee kinderen (hier niet bevestigd).`,
    fr: `Les allocations sont réduites de 4% du revenu au-delà du seuil, quel que soit le nombre d'enfants. La loi prévoit peut-être un taux plus élevé dès deux enfants (non confirmé ici).`,
  },
  'gap.under7': {
    en: `All children are taken as aged 7 or more. The kr 130,000 extra for a child under 7 is not added.`,
    nl: `Alle kinderen worden als 7 jaar of ouder beschouwd. De kr 130.000 extra voor een kind jonger dan 7 wordt niet bijgeteld.`,
    fr: `Tous les enfants sont supposés avoir 7 ans ou plus. Les 130 000 kr supplémentaires pour un enfant de moins de 7 ans ne sont pas ajoutés.`,
  },
  'gap.pension': {
    en: `The employer's pension share is 11.5% of pay, the usual rate in the private sector, also for politicians. Public sector funds and some union agreements use other rates.`,
    nl: `Het pensioendeel van de werkgever is 11,5% van het loon, het gewone tarief in de privésector, ook voor politici. Overheidsfondsen en sommige cao's gebruiken andere tarieven.`,
    fr: `La part patronale de retraite est de 11,5% du salaire, le taux habituel du privé, y compris pour les politiciens. Les caisses publiques et certaines conventions appliquent d'autres taux.`,
  },
  'gap.wages': {
    en: `The median wage (half of employees earn more, half less) and the average wage are 2025 figures from Statistics Iceland, a year older than the tax rules.`,
    nl: `Het mediaanloon (de helft van de werknemers verdient meer, de helft minder) en het gemiddelde loon zijn cijfers van 2025 van Statistics Iceland, een jaar ouder dan de belastingregels.`,
    fr: `Le salaire médian (la moitié des salariés gagne plus, l'autre moitié moins) et le salaire moyen sont des chiffres 2025 de Statistics Iceland, un an plus anciens que les règles fiscales.`,
  },
  'gap.notIncl': {
    en: `Holiday and December bonuses, union fees, extra pension savings and the rest of "What's not included" are left out.`,
    nl: `Vakantie- en decemberpremie, vakbondsbijdragen, extra pensioensparen en de rest van "Wat niet is meegerekend" ontbreken.`,
    fr: `Primes de vacances et de décembre, cotisations syndicales, épargne retraite en plus et le reste de « Ce qui n'est pas inclus » sont laissés de côté.`,
  },
};
