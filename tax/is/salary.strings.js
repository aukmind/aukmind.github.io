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
    en: `Married, or a registered cohabitation that qualifies for joint taxation.`,
    nl: `Gehuwd, of geregistreerd samenwonend met recht op gezamenlijke aanslag.`,
    fr: `Mariés, ou concubins enregistrés pouvant être imposés ensemble.`,
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
    en: `Icelandic minister rules: pay set by law and taxed like any salary, with the 4% pension contribution.`,
    nl: `Regels voor IJslandse ministers: loon vastgelegd bij wet en belast als elk loon, met de pensioenbijdrage van 4%.`,
    fr: `Règles des ministres islandais : rémunération fixée par la loi et imposée comme un salaire, avec la cotisation retraite de 4%.`,
  },
  minSalaryHint: {
    en: `Estimated yearly pay from 1 July 2026, including the MP salary most ministers also hold.`,
    nl: `Geschat jaarloon vanaf 1 juli 2026, inclusief het parlementsloon dat de meeste ministers ook hebben.`,
    fr: `Rémunération annuelle estimée au 1er juillet 2026, y compris l'indemnité de député que la plupart des ministres touchent aussi.`,
  },
  'tip.ministerRules': {
    en: `The pay of ministers, MPs and top officials is set by law (no. 79/2019) and updated every 1 July. In 2026 Parliament limited the update to 3.5% instead of the 9.7% the old formula gave. A minister who is also an MP gets one total salary. It is taxed like any salary: 4% pension, state income tax and útsvar, the personal credit. The state pays the employer pension and tryggingagjald on it. The amounts here are estimates built from the 2023 figures and the later updates.`,
    nl: `Het loon van ministers, parlementsleden en topambtenaren is bij wet vastgelegd (nr. 79/2019) en wordt elk jaar op 1 juli bijgewerkt. In 2026 beperkte het parlement de aanpassing tot 3,5% in plaats van de 9,7% van de oude formule. Een minister die ook parlementslid is, krijgt één totaalloon. Het wordt belast als elk loon: 4% pensioen, rijksinkomstenbelasting en útsvar, de persoonlijke korting. De staat betaalt het werkgeverspensioen en de tryggingagjald erop. De bedragen hier zijn schattingen op basis van de cijfers van 2023 en de latere aanpassingen.`,
    fr: `La rémunération des ministres, députés et hauts fonctionnaires est fixée par la loi (n° 79/2019) et mise à jour chaque 1er juillet. En 2026, le Parlement a limité la hausse à 3,5% au lieu des 9,7% de l'ancienne formule. Un ministre aussi député touche un seul salaire total. Il est imposé comme tout salaire : 4% de retraite, impôt d'État et útsvar, crédit personnel. L'État paie dessus la retraite patronale et le tryggingagjald. Les montants sont des estimations établies à partir des chiffres de 2023 et des mises à jour suivantes.`,
  },
  'bd.minGross': { en: `Ministerial pay`, nl: `Ministerswedde`, fr: `Rémunération de ministre` },
  'bd.stateCost': { en: `Total paid by the state`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, min, mp) => `Estimated monthly pay from 1 July 2026: Prime Minister ${pm}, minister ${min}, MP ${mp}.`,
    nl: (pm, min, mp) => `Geschat maandloon vanaf 1 juli 2026: premier ${pm}, minister ${min}, parlementslid ${mp}.`,
    fr: (pm, min, mp) => `Rémunération mensuelle estimée au 1er juillet 2026 : chef du gouvernement ${pm}, ministre ${min}, député ${mp}.`,
  },

  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Chef du gouvernement` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `Member of the Althing`, nl: `Lid van de Althing`, fr: `Député à l'Althing` },
  'pol.stat.pm': { en: `Pay set by law, estimate from 1 July 2026`, nl: `Loon bij wet vastgelegd, schatting vanaf 1 juli 2026`, fr: `Rémunération fixée par la loi, estimation au 1er juillet 2026` },
  'pol.stat.minister': { en: `Pay set by law, estimate from 1 July 2026`, nl: `Loon bij wet vastgelegd, schatting vanaf 1 juli 2026`, fr: `Rémunération fixée par la loi, estimation au 1er juillet 2026` },
  'pol.stat.mp': { en: `Þingfararkaup, estimate from 1 July 2026`, nl: `Þingfararkaup, schatting vanaf 1 juli 2026`, fr: `Þingfararkaup, estimation au 1er juillet 2026` },
  'polTitle.gov': { en: `Public offices`, nl: `Openbare ambten`, fr: `Fonctions publiques` },
  'pol.cb': { en: `Governor, Central Bank of Iceland`, nl: `Gouverneur, Centrale Bank van IJsland`, fr: `Gouverneur, Banque centrale d'Islande` },
  'polNote.stat': {
    en: `Taxed like any salary. The dot is their pay.`,
    nl: `Belast als elk loon. Het bolletje is hun loon.`,
    fr: `Imposé comme tout salaire. Le point est leur rémunération.`,
  },
  'polTipNote.pm': {
    en: `Estimate: 2023 pay plus the 2024 and 2025 updates and 3.5% on 1 July 2026. Taxed like any salary, no tax-free allowance.`,
    nl: `Schatting: loon 2023 plus de aanpassingen van 2024 en 2025 en 3,5% op 1 juli 2026. Belast als elk loon, zonder belastingvrije vergoeding.`,
    fr: `Estimation : rémunération 2023 plus les hausses de 2024 et 2025 et 3,5% au 1er juillet 2026. Imposée comme tout salaire, sans indemnité exonérée.`,
  },
  'polTipNote.minister': {
    en: `Estimate: 2023 pay plus the 2024 and 2025 updates and 3.5% on 1 July 2026. Includes the MP salary when the minister sits in the Althing.`,
    nl: `Schatting: loon 2023 plus de aanpassingen van 2024 en 2025 en 3,5% op 1 juli 2026. Inclusief het parlementsloon als de minister in de Althing zetelt.`,
    fr: `Estimation : rémunération 2023 plus les hausses de 2024 et 2025 et 3,5% au 1er juillet 2026. Comprend l'indemnité de député quand le ministre siège à l'Althing.`,
  },
  'polTipNote.mp': {
    en: `Estimate of the base MP salary. Speakers, committee chairs and party leaders get a supplement. Travel and housing costs are reimbursed on top.`,
    nl: `Schatting van het basisloon van een parlementslid. De voorzitter, commissievoorzitters en partijleiders krijgen een toeslag. Reis- en huisvestingskosten worden daarbovenop vergoed.`,
    fr: `Estimation de l'indemnité de base d'un député. Le président, les présidents de commission et les chefs de parti touchent un supplément. Les frais de déplacement et de logement sont remboursés en plus.`,
  },
  'polTipNote.cb': {
    en: `Governor since 2019. Estimate from the 2023 pay set for the post, updated like the MPs'.`,
    nl: `Gouverneur sinds 2019. Schatting op basis van het loon van 2023 voor de functie, bijgewerkt zoals dat van parlementsleden.`,
    fr: `Gouverneur depuis 2019. Estimation à partir de la rémunération 2023 du poste, mise à jour comme celle des députés.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly pay, shown on the chart as yearly ÷ 12. Their pay is taxed like yours, so each sits at their own gross. Sources: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarloon, op de grafiek als jaarbedrag ÷ 12. Hun loon wordt belast zoals het jouwe, dus elk staat bij het eigen brutoloon. Bronnen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer dessus. Rémunération annuelle, placée sur le graphique en montant annuel ÷ 12. Elle est imposée comme la vôtre : chacun est placé à son propre brut. Sources : ${links}.`,
  },

  bracketTop: { en: `step 2`, nl: `schijf 2`, fr: `tranche 2` },
  trapTitle: {
    en: a => `Why is the rate so low below ${a}?`,
    nl: a => `Waarom is het tarief zo laag onder ${a}?`,
    fr: a => `Pourquoi le taux est-il si bas sous ${a} ?`,
  },
  trapBody: {
    en: (a, pf, fees) => `The personal tax credit of ${pf} a year is taken off the income tax and útsvar you owe. Below ${a} it covers all of it and only the 4% pension is due. Above, the credit stays the same while the tax grows, so the average rate keeps climbing towards the marginal rate. From ${fees} the broadcasting and elderly fund fees come in at once.`,
    nl: (a, pf, fees) => `De persoonlijke belastingkorting van ${pf} per jaar gaat af van de inkomstenbelasting en útsvar die je verschuldigd bent. Onder ${a} dekt ze alles en betaal je enkel de 4% pensioen. Daarboven blijft de korting gelijk terwijl de belasting stijgt, dus het gemiddelde tarief klimt naar het marginale. Vanaf ${fees} komen de omroep- en ouderenfondsbijdrage er in één keer bij.`,
    fr: (a, pf, fees) => `Le crédit d'impôt personnel de ${pf} par an est déduit de l'impôt sur le revenu et de l'útsvar dus. Sous ${a}, il couvre tout et seule la retraite de 4% est due. Au-delà, le crédit reste fixe pendant que l'impôt augmente : le taux moyen se rapproche du taux marginal. À partir de ${fees}, les redevances audiovisuelle et du fonds pour les aînés s'ajoutent d'un coup.`,
  },
  topTitle: {
    en: (b2, b3) => `Why the steps at ${b2}${b3 ? ` and ${b3}` : ''}?`,
    nl: (b2, b3) => `Waarom de sprongen bij ${b2}${b3 ? ` en ${b3}` : ''}?`,
    fr: (b2, b3) => `Pourquoi les marches à ${b2}${b3 ? ` et ${b3}` : ''} ?`,
  },
  topBody: {
    en: (b2, b3, a2, a3) => `From ${b2} your taxable income passes ${a2} a year and the state rate goes from 16.55% to 23.05%.${b3 ? ` From ${b3} it passes ${a3} and goes to 31.35%.` : ''} Útsvar is flat, so the top marginal rate is 31.35% + your municipality's rate, 46.32% in Reykjavík.`,
    nl: (b2, b3, a2, a3) => `Vanaf ${b2} komt je belastbaar inkomen boven ${a2} per jaar en stijgt het rijkstarief van 16,55% naar 23,05%.${b3 ? ` Vanaf ${b3} komt het boven ${a3} en wordt het 31,35%.` : ''} Útsvar is vlak, dus het hoogste marginale tarief is 31,35% + het tarief van je gemeente, 46,32% in Reykjavík.`,
    fr: (b2, b3, a2, a3) => `À partir de ${b2}, votre revenu imposable dépasse ${a2} par an et le taux de l'État passe de 16,55% à 23,05%.${b3 ? ` À partir de ${b3}, il dépasse ${a3} et passe à 31,35%.` : ''} L'útsvar est proportionnel : le taux marginal maximal est donc 31,35% + le taux de votre commune, 46,32% à Reykjavík.`,
  },

  'comp.er': { en: `Employer pension and payroll tax`, nl: `Werkgeverspensioen en loonheffing`, fr: `Retraite patronale et taxe sur les salaires` },
  'comp.ee': { en: `Pension contribution (4%)`, nl: `Pensioenbijdrage (4%)`, fr: `Cotisation retraite (4%)` },
  'comp.stat': { en: `State income tax`, nl: `Rijksinkomstenbelasting`, fr: `Impôt d'État sur le revenu` },
  'comp.kom': { en: `Municipal tax (útsvar)`, nl: `Gemeentebelasting (útsvar)`, fr: `Impôt communal (útsvar)` },
  'comp.fees': { en: `Broadcasting and elderly fund fees`, nl: `Omroep- en ouderenfondsbijdrage`, fr: `Redevances audiovisuelle et fonds pour les aînés` },
  'comp.fam': { en: `Child benefit lost to your pay`, nl: `Kinderbijslag die je loon kost`, fr: `Allocations familiales perdues` },
  'er.pen': { en: `Employer pension contribution`, nl: `Pensioenbijdrage werkgever`, fr: `Cotisation retraite patronale` },
  'er.tg': { en: `Tryggingagjald (social security tax)`, nl: `Tryggingagjald (sociale zekerheid)`, fr: `Tryggingagjald (sécurité sociale)` },
  'bd.taxable': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'bd.stateGross': { en: `State tax before the credit`, nl: `Rijksbelasting vóór de korting`, fr: `Impôt d'État avant le crédit` },
  'bd.utsGross': { en: `Útsvar before the credit`, nl: `Útsvar vóór de korting`, fr: `Útsvar avant le crédit` },
  'bd.credit': { en: `Personal tax credit used`, nl: `Gebruikte persoonlijke korting`, fr: `Crédit d'impôt personnel utilisé` },
  'tax.b1': { en: `Step 1`, nl: `Schijf 1`, fr: `Tranche 1` },
  'tax.b2': { en: `Step 2`, nl: `Schijf 2`, fr: `Tranche 2` },
  'tax.b3': { en: `Step 3`, nl: `Schijf 3`, fr: `Tranche 3` },

  'tip.f12': {
    en: `12 monthly salaries. Most collective agreements add a fixed holiday bonus (orlofsuppbót) and December bonus (desemberuppbót), not counted here.`,
    nl: `12 maandlonen. De meeste cao's voegen een vaste vakantiepremie (orlofsuppbót) en decemberpremie (desemberuppbót) toe, hier niet meegerekend.`,
    fr: `12 salaires mensuels. La plupart des conventions collectives ajoutent une prime de vacances (orlofsuppbót) et une prime de décembre (desemberuppbót) fixes, non comptées ici.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: pf => `Spouses are taxed separately, but a personal credit (${pf}) one of them can't use moves in full to the other in 2026. Child benefit is tested on the couple's joint income and split in two.`,
    nl: pf => `Echtgenoten worden apart belast, maar een persoonlijke korting (${pf}) die de ene niet kan gebruiken, gaat in 2026 volledig naar de andere. Kinderbijslag wordt getoetst aan het gezamenlijke inkomen en in twee gedeeld.`,
    fr: pf => `Les époux sont imposés séparément, mais le crédit personnel (${pf}) que l'un ne peut pas utiliser passe entièrement à l'autre en 2026. Les allocations familiales dépendent du revenu commun et sont partagées en deux.`,
  },
  'tip.jointCalc': {
    en: `Your share = the couple's tax with your pay − the couple's tax if you earned nothing. Your unused credit would otherwise lower your partner's tax.`,
    nl: `Jouw deel = de belasting van het koppel met jouw loon − de belasting van het koppel als jij niets verdiende. Je onbenutte korting zou anders de belasting van je partner verlagen.`,
    fr: `Votre part = l'impôt du couple avec votre salaire − l'impôt du couple si vous ne gagniez rien. Votre crédit inutilisé réduirait sinon l'impôt de votre conjoint.`,
  },
  'tip.komRule': {
    en: (lo, hi, avg) => `Each municipality sets its útsvar between ${lo} and ${hi} in 2026; the legal maximum is 14.97% and almost all of them use it. Employers withhold the average ${avg}; the difference is settled in the yearly assessment.`,
    nl: (lo, hi, avg) => `Elke gemeente kiest haar útsvar tussen ${lo} en ${hi} in 2026; het wettelijke maximum is 14,97% en bijna alle gemeenten gebruiken het. Werkgevers houden het gemiddelde ${avg} in; het verschil wordt in de jaarlijkse aanslag verrekend.`,
    fr: (lo, hi, avg) => `Chaque commune fixe son útsvar entre ${lo} et ${hi} en 2026 ; le maximum légal est de 14,97% et presque toutes l'appliquent. L'employeur retient la moyenne de ${avg} ; la différence est régularisée à l'imposition annuelle.`,
  },
  'tip.costShort': {
    en: `Gross salary + employer pension + tryggingagjald.`,
    nl: `Brutoloon + werkgeverspensioen + tryggingagjald.`,
    fr: `Salaire brut + retraite patronale + tryggingagjald.`,
  },
  'tip.er': {
    en: `The employer pays at least 11.5% of pay into your pension fund, and 6.35% tryggingagjald to the state (general social security 4.90%, unemployment insurance 1.35%, wage guarantee fund and market charge 0.05% each).`,
    nl: `De werkgever stort minstens 11,5% van het loon in je pensioenfonds en betaalt 6,35% tryggingagjald aan de staat (algemene sociale zekerheid 4,90%, werkloosheidsverzekering 1,35%, loongarantiefonds en marktbijdrage elk 0,05%).`,
    fr: `L'employeur verse au moins 11,5% du salaire à votre caisse de retraite et 6,35% de tryggingagjald à l'État (sécurité sociale générale 4,90%, assurance chômage 1,35%, fonds de garantie des salaires et contribution de marché 0,05% chacun).`,
  },
  'tip.erM': {
    en: `Collective agreements add employer payments to union funds (sickness, holiday homes, training, about 1.5%) and often a 2% match on voluntary pension savings; left out.`,
    nl: `Cao's voegen werkgeversbijdragen aan vakbondsfondsen toe (ziekte, vakantiewoningen, opleiding, ongeveer 1,5%) en vaak 2% bovenop vrijwillig pensioensparen; niet meegerekend.`,
    fr: `Les conventions collectives ajoutent des versements patronaux aux fonds syndicaux (maladie, maisons de vacances, formation, environ 1,5%) et souvent 2% sur l'épargne retraite volontaire ; non inclus.`,
  },
  'tip.ee': {
    en: `Every employee pays 4% of gross pay into a pension fund. It is deducted before income tax.`,
    nl: `Elke werknemer stort 4% van het brutoloon in een pensioenfonds. Het wordt afgetrokken vóór de inkomstenbelasting.`,
    fr: `Chaque salarié verse 4% de son salaire brut à une caisse de retraite. Elle est déduite avant l'impôt sur le revenu.`,
  },
  'tip.taxable': {
    en: calc => `Gross − 4% pension${calc}. Both state tax and útsvar are charged on this.`,
    nl: calc => `Bruto − 4% pensioen${calc}. Rijksbelasting en útsvar worden hierop geheven.`,
    fr: calc => `Brut − 4% de retraite${calc}. L'impôt d'État et l'útsvar portent sur ce montant.`,
  },
  'tip.statShort': {
    en: `Three steps: 16.55%, 23.05% and 31.35%, on top of útsvar, minus the personal tax credit.`,
    nl: `Drie schijven: 16,55%, 23,05% en 31,35%, bovenop útsvar, min de persoonlijke korting.`,
    fr: `Trois tranches : 16,55%, 23,05% et 31,35%, en plus de l'útsvar, moins le crédit personnel.`,
  },
  'tip.statM': {
    en: (b1, b2) => `On taxable income: step 2 above ${b1}, step 3 above ${b2} a year. The personal credit goes against this tax first.`,
    nl: (b1, b2) => `Op het belastbaar inkomen: schijf 2 boven ${b1}, schijf 3 boven ${b2} per jaar. De persoonlijke korting gaat eerst van deze belasting af.`,
    fr: (b1, b2) => `Sur le revenu imposable : tranche 2 au-delà de ${b1}, tranche 3 au-delà de ${b2} par an. Le crédit personnel s'impute d'abord sur cet impôt.`,
  },
  'tip.yourShare': { en: `Your share for the couple`, nl: `Jouw deel voor het koppel`, fr: `Votre part pour le couple` },
  'tip.kom': {
    en: (name, rate) => `${name ? `${name} charges ${rate}` : `Rate ${rate}`} of taxable income, with no allowance. The part of the personal credit left after state tax is taken off it.`,
    nl: (name, rate) => `${name ? `${name} heft ${rate}` : `Tarief ${rate}`} op het belastbaar inkomen, zonder vrijstelling. Wat na de rijksbelasting overblijft van de persoonlijke korting, gaat ervan af.`,
    fr: (name, rate) => `${name ? `${name} prélève ${rate}` : `Taux de ${rate}`} du revenu imposable, sans abattement. La part du crédit personnel restant après l'impôt d'État s'y impute.`,
  },
  'tip.creditLeft': { en: `Credit left after state tax`, nl: `Korting over na rijksbelasting`, fr: `Crédit restant après l'impôt d'État` },
  'tip.credit': {
    en: (y, m) => `Every resident aged 16 or more gets ${y} a year (${m} a month), taken off state tax, then off útsvar. It is never paid out. Unused credit moves to a spouse.`,
    nl: (y, m) => `Elke inwoner vanaf 16 jaar krijgt ${y} per jaar (${m} per maand), eerst afgetrokken van de rijksbelasting, dan van útsvar. Ze wordt nooit uitbetaald. Onbenutte korting gaat naar de echtgenoot.`,
    fr: (y, m) => `Tout résident de 16 ans ou plus a droit à ${y} par an (${m} par mois), imputés sur l'impôt d'État puis sur l'útsvar. Il n'est jamais remboursé. Le crédit inutilisé passe au conjoint.`,
  },
  'tip.fees': {
    en: (utv, fra, lo) => `Two flat fees per person aged 16 to 69, charged with the yearly assessment once income passes ${lo}: the broadcasting fee (${utv}) and the elderly care construction fund (${fra}). Amounts set for 2026.`,
    nl: (utv, fra, lo) => `Twee vaste bijdragen per persoon van 16 tot 69, aangerekend bij de jaarlijkse aanslag zodra het inkomen boven ${lo} komt: de omroepbijdrage (${utv}) en het bouwfonds voor ouderenzorg (${fra}). Bedragen van 2026.`,
    fr: (utv, fra, lo) => `Deux redevances fixes par personne de 16 à 69 ans, prélevées à l'imposition annuelle dès que le revenu dépasse ${lo} : la redevance audiovisuelle (${utv}) et le fonds de construction pour les aînés (${fra}). Montants de 2026.`,
  },
  'tip.fam': {
    en: (single, lo, couple, loC) => `Child benefit (barnabætur) for a child aged 7 or more: ${single} a year for a single parent, cut by 4% of income above ${lo}; ${couple} for a couple, cut by 4% of joint income above ${loC} and split in two. Children under 7 get kr 130,000 more. What your pay takes away counts as tax.`,
    nl: (single, lo, couple, loC) => `Kinderbijslag (barnabætur) voor een kind vanaf 7 jaar: ${single} per jaar voor een alleenstaande ouder, verminderd met 4% van het inkomen boven ${lo}; ${couple} voor een koppel, verminderd met 4% van het gezamenlijke inkomen boven ${loC} en in twee gedeeld. Kinderen onder 7 krijgen kr 130.000 meer. Wat je loon wegneemt, telt als belasting.`,
    fr: (single, lo, couple, loC) => `Allocations familiales (barnabætur) pour un enfant de 7 ans ou plus : ${single} par an pour un parent seul, réduites de 4% du revenu au-delà de ${lo} ; ${couple} pour un couple, réduites de 4% du revenu commun au-delà de ${loC} et partagées en deux. Les enfants de moins de 7 ans reçoivent 130 000 kr de plus. Ce que votre salaire fait perdre compte comme un impôt.`,
  },
  'tip.famBenefit': { en: `Child benefit before the income test`, nl: `Kinderbijslag vóór de inkomenstoets`, fr: `Allocations avant le critère de revenu` },
  'tip.famCut': { en: `lost to income`, nl: `verloren door inkomen`, fr: `perdu à cause du revenu` },
  'tip.vatM': {
    en: `Iceland's standard VAT is 24%, 11% on food, books, hotels and some other items. VAT-free spending such as rent and healthcare is left out, so this is an upper bound.`,
    nl: `Het normale btw-tarief in IJsland is 24%, 11% op voeding, boeken, hotels en enkele andere zaken. Btw-vrije uitgaven zoals huur en gezondheidszorg zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Le taux normal de TVA en Islande est de 24%, 11% sur l'alimentation, les livres, l'hôtellerie et quelques autres biens. Les dépenses exonérées comme le loyer et la santé ne sont pas prises en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − 4% pension − state tax − útsvar − fees − child benefit you lose.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − 4% pensioen − rijksbelasting − útsvar − bijdragen − kinderbijslag die je verliest.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − 4% de retraite − impôt d'État − útsvar − redevances − allocations perdues.`,
  },

  refEyebrow: { en: `Rules used · income year 2026`, nl: `Gebruikte regels · inkomstenjaar 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Pension and employer charges`, li: [
      `Pension: <span class="num">4%</span> from the employee (tax-deductible), at least <span class="num">11.5%</span> from the employer.`,
      `Tryggingagjald <span class="num">6.35%</span> of wages, paid by the employer.`,
    ] },
    nl: { h: `1 · Pensioen en werkgeverslasten`, li: [
      `Pensioen: <span class="num">4%</span> van de werknemer (aftrekbaar), minstens <span class="num">11,5%</span> van de werkgever.`,
      `Tryggingagjald <span class="num">6,35%</span> van het loon, betaald door de werkgever.`,
    ] },
    fr: { h: `1 · Retraite et charges patronales`, li: [
      `Retraite : <span class="num">4%</span> pour le salarié (déductible), au moins <span class="num">11,5%</span> pour l'employeur.`,
      `Tryggingagjald de <span class="num">6,35%</span> des salaires, payé par l'employeur.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `2 · State income tax`, li: [
      `Taxable income = gross − 4% pension.`,
      `State tax on taxable income, before the credit:${br}`,
      `Monthly steps for withholding: kr 498,122 and kr 1,398,450.`,
    ] }),
    nl: br => ({ h: `2 · Rijksinkomstenbelasting`, li: [
      `Belastbaar inkomen = bruto − 4% pensioen.`,
      `Rijksbelasting op het belastbaar inkomen, vóór de korting:${br}`,
      `Maandelijkse schijven voor de inhouding: kr 498.122 en kr 1.398.450.`,
    ] }),
    fr: br => ({ h: `2 · Impôt d'État sur le revenu`, li: [
      `Revenu imposable = brut − 4% de retraite.`,
      `Impôt d'État sur le revenu imposable, avant le crédit :${br}`,
      `Tranches mensuelles pour la retenue : 498 122 kr et 1 398 450 kr.`,
    ] }),
  },
  'ref.levels': {
    en: { h: `3 · Útsvar`, li: [
      `Flat municipal tax from <span class="num">12.44%</span> (Fljótsdalshreppur) to the legal maximum <span class="num">14.97%</span>, used by Reykjavík and most others; average 14.94%. Rates for all 62 municipalities from the Association of Local Authorities.`,
      `Top marginal rate: 31.35% + 14.97% = <span class="num">46.32%</span>.`,
    ] },
    nl: { h: `3 · Útsvar`, li: [
      `Vlakke gemeentebelasting van <span class="num">12,44%</span> (Fljótsdalshreppur) tot het wettelijke maximum van <span class="num">14,97%</span>, dat Reykjavík en de meeste andere gebruiken; gemiddeld 14,94%. Tarieven van alle 62 gemeenten van de Vereniging van Lokale Besturen.`,
      `Hoogste marginale tarief: 31,35% + 14,97% = <span class="num">46,32%</span>.`,
    ] },
    fr: { h: `3 · Útsvar`, li: [
      `Impôt communal proportionnel de <span class="num">12,44%</span> (Fljótsdalshreppur) au maximum légal de <span class="num">14,97%</span>, appliqué par Reykjavík et la plupart des autres ; moyenne 14,94%. Taux des 62 communes selon l'Association des collectivités locales.`,
      `Taux marginal maximal : 31,35% + 14,97% = <span class="num">46,32%</span>.`,
    ] },
  },
  'ref.credit': {
    en: { h: `4 · Personal credit and fees`, li: [
      `Personal tax credit <span class="num">kr 869,898</span> a year (kr 72,492 a month), against state tax then útsvar. Nothing is due on pay up to about kr 240,000 a month.`,
      `Broadcasting fee kr 22,200 and elderly fund fee kr 14,614 per person aged 16 to 69 with income above kr 2,617,618.`,
    ] },
    nl: { h: `4 · Persoonlijke korting en bijdragen`, li: [
      `Persoonlijke belastingkorting <span class="num">kr 869.898</span> per jaar (kr 72.492 per maand), eerst op de rijksbelasting, dan op útsvar. Tot ongeveer kr 240.000 per maand is niets verschuldigd.`,
      `Omroepbijdrage kr 22.200 en ouderenfondsbijdrage kr 14.614 per persoon van 16 tot 69 met een inkomen boven kr 2.617.618.`,
    ] },
    fr: { h: `4 · Crédit personnel et redevances`, li: [
      `Crédit d'impôt personnel de <span class="num">869 898 kr</span> par an (72 492 kr par mois), sur l'impôt d'État puis l'útsvar. Rien n'est dû jusqu'à environ 240 000 kr par mois.`,
      `Redevance audiovisuelle de 22 200 kr et redevance du fonds pour les aînés de 14 614 kr par personne de 16 à 69 ans dont le revenu dépasse 2 617 618 kr.`,
    ] },
  },
  'ref.couple': {
    en: { h: `5 · Couples`, li: [
      `Spouses and registered cohabitants are taxed separately. In 2026, 100% of an unused personal credit moves to the other.`,
      `Here, your tax = the couple's tax − what the couple would pay if you earned nothing.`,
    ] },
    nl: { h: `5 · Koppels`, li: [
      `Echtgenoten en geregistreerde samenwonenden worden apart belast. In 2026 gaat 100% van een onbenutte persoonlijke korting naar de andere.`,
      `Hier is jouw belasting = de belasting van het koppel − wat het koppel zou betalen als jij niets verdiende.`,
    ] },
    fr: { h: `5 · Couples`, li: [
      `Époux et concubins enregistrés sont imposés séparément. En 2026, 100% du crédit personnel inutilisé passe à l'autre.`,
      `Ici, votre impôt = l'impôt du couple − ce que paierait le couple si vous ne gagniez rien.`,
    ] },
  },
  'ref.fam': {
    en: { h: `6 · Children`, li: [
      `No tax relief for children. Child benefit per child: <span class="num">kr 514,500</span> a year for a single parent, kr 345,000 for a couple, plus kr 130,000 under 7; this page uses a child aged 7 or more.`,
      `Cut by <span class="num">4%</span> of income above kr 5,844,000 (single) or kr 11,688,000 (couple, joint income).`,
    ] },
    nl: { h: `6 · Kinderen`, li: [
      `Geen belastingvoordeel voor kinderen. Kinderbijslag per kind: <span class="num">kr 514.500</span> per jaar voor een alleenstaande ouder, kr 345.000 voor een koppel, plus kr 130.000 onder 7; deze pagina rekent met een kind vanaf 7 jaar.`,
      `Verminderd met <span class="num">4%</span> van het inkomen boven kr 5.844.000 (alleenstaand) of kr 11.688.000 (koppel, gezamenlijk inkomen).`,
    ] },
    fr: { h: `6 · Enfants`, li: [
      `Aucun avantage fiscal pour les enfants. Allocations par enfant : <span class="num">514 500 kr</span> par an pour un parent seul, 345 000 kr pour un couple, plus 130 000 kr avant 7 ans ; cette page utilise un enfant de 7 ans ou plus.`,
      `Réduites de <span class="num">4%</span> du revenu au-delà de 5 844 000 kr (seul) ou 11 688 000 kr (couple, revenu commun).`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">24%</span>, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × 24 / 124 = <span class="num">19.35%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">24%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × 24 / 124 = <span class="num">19,35%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal de <span class="num">24%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × 24 / 124 = <span class="num">19,35%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Ministers and MPs`, li: [
      `Pay set by law 79/2019, updated each 1 July: +3.5% in 2026 (law 60/2026). Estimates from 1 July 2026: Prime Minister <span class="num">kr 3.33 million</span> a month, minister kr 3.01 million, MP kr 1.65 million.`,
      `Taxed like any salary. MPs' travel and housing costs are reimbursed separately.`,
    ] },
    nl: { h: `8 · Ministers en parlementsleden`, li: [
      `Loon vastgelegd bij wet 79/2019, elk jaar op 1 juli bijgewerkt: +3,5% in 2026 (wet 60/2026). Schattingen vanaf 1 juli 2026: premier <span class="num">kr 3,33 miljoen</span> per maand, minister kr 3,01 miljoen, parlementslid kr 1,65 miljoen.`,
      `Belast als elk loon. Reis- en huisvestingskosten van parlementsleden worden apart vergoed.`,
    ] },
    fr: { h: `8 · Ministres et députés`, li: [
      `Rémunération fixée par la loi 79/2019, mise à jour chaque 1er juillet : +3,5% en 2026 (loi 60/2026). Estimations au 1er juillet 2026 : chef du gouvernement <span class="num">3,33 millions kr</span> par mois, ministre 3,01 millions kr, député 1,65 million kr.`,
      `Imposée comme tout salaire. Les frais de déplacement et de logement des députés sont remboursés à part.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Holiday and December bonuses, union fees (about 1%), voluntary pension savings (up to 4%, tax-deductible, with a 2% employer match) and union funds paid by the employer.`,
      `Interest relief, housing benefit, capital income tax (22%) and the children's tax of 6% on income under 16.`,
      `Figures are your final annual tax, not the monthly withholding at the average útsvar.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Vakantie- en decemberpremie, vakbondsbijdrage (ongeveer 1%), vrijwillig pensioensparen (tot 4%, aftrekbaar, met 2% van de werkgever) en vakbondsfondsen betaald door de werkgever.`,
      `Rentesteun, huurtoeslag, belasting op kapitaalinkomen (22%) en de kinderbelasting van 6% op inkomen onder 16 jaar.`,
      `De bedragen zijn je uiteindelijke jaarbelasting, niet de maandelijkse inhouding tegen het gemiddelde útsvar.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Primes de vacances et de décembre, cotisation syndicale (environ 1%), épargne retraite volontaire (jusqu'à 4%, déductible, avec 2% de l'employeur) et fonds syndicaux payés par l'employeur.`,
      `Aide aux intérêts d'emprunt, allocation logement, impôt sur les revenus du capital (22%) et impôt des enfants de 6% sur les revenus avant 16 ans.`,
      `Les montants sont votre impôt annuel final, pas la retenue mensuelle à l'útsvar moyen.`,
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
};
