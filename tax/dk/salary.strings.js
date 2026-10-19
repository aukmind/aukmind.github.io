window.TAX_STRINGS = {
  title: { en: `Danish Buying Power`, nl: `Deense koopkracht`, fr: `Pouvoir d'achat danois` },
  eyebrow: { en: `Denmark · income year 2026 · private-sector employee`, nl: `Denemarken · inkomstenjaar 2026 · werknemer in de privésector`, fr: `Danemark · revenus 2026 · salarié du secteur privé` },
  eyebrowMinister: { en: `Denmark · income year 2026 · minister`, nl: `Denemarken · inkomstenjaar 2026 · minister`, fr: `Danemark · revenus 2026 · ministre` },
  lead: {
    en: `Every tax on a Danish salary in 2026, from what your employer pays to what you can buy.`,
    nl: `Alle belastingen op een Deens loon in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen.`,
    fr: `Tous les impôts sur un salaire danois en 2026, de ce que paie votre employeur à ce que vous pouvez acheter.`,
  },
  salaryPh: { en: `e.g. 45000`, nl: `bv. 45000`, fr: `p. ex. 45000` },
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul` },
  coupleHint: {
    en: `Married. Unmarried couples are taxed as two singles.`,
    nl: `Gehuwd. Ongehuwde koppels worden belast als twee alleenstaanden.`,
    fr: `Mariés. Les couples non mariés sont imposés comme deux personnes seules.`,
  },
  includePa: { en: `Member of the Church of Denmark`, nl: `Lid van de Deense Volkskerk`, fr: `Membre de l'Église du Danemark` },
  commune: { en: `Municipality (kommune)`, nl: `Gemeente (kommune)`, fr: `Commune (kommune)` },
  searchCommune: { en: `Search a municipality`, nl: `Zoek een gemeente`, fr: `Rechercher une commune` },
  searchN: { en: n => `Search ${n} municipalities`, nl: n => `Zoek in ${n} gemeenten`, fr: n => `Rechercher parmi ${n} communes` },
  communesError: {
    en: `Couldn't load the municipality list (communes.js next to this page). Set the rate by hand below.`,
    nl: `Kon de lijst met gemeenten niet laden (communes.js naast deze pagina). Stel het tarief hieronder zelf in.`,
    fr: `Impossible de charger la liste des communes (communes.js à côté de cette page). Réglez le taux à la main ci-dessous.`,
  },
  komLabel: { en: `Municipal tax:`, nl: `Gemeentebelasting:`, fr: `Impôt communal :` },
  komHint: {
    en: (k, c) => `Municipal tax ${k} · church tax ${c}`,
    nl: (k, c) => `Gemeentebelasting ${k} · kerkbelasting ${c}`,
    fr: (k, c) => `Impôt communal ${k} · impôt d'Église ${c}`,
  },
  vatStandard: { en: `(Denmark has a single 25% rate)`, nl: `(Denemarken heeft één tarief van 25%)`, fr: `(le Danemark a un taux unique de 25%)` },
  lowWageTrap: { en: `Work deductions grow`, nl: `Arbeidsaftrekken groeien`, fr: `Déductions liées au travail` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Impôts et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux d'imposition par salaire` },

  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'minRole.fin': { en: `Finance, Foreign, No. 2`, nl: `Financiën, Buitenlandse Zaken, nr. 2`, fr: `Finances, Affaires étrangères, n° 2` },
  'minRole.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Premier ministre` },
  ministerHint: {
    en: `Danish minister rules: taxed like a salary with AM-bidrag, no ATP, plus a tax-free expense allowance.`,
    nl: `Regels voor Deense ministers: belast als een loon met AM-bidrag, geen ATP, plus een belastingvrije onkostenvergoeding.`,
    fr: `Règles des ministres danois : imposés comme un salaire avec l'AM-bidrag, sans ATP, plus une indemnité de frais exonérée.`,
  },
  minSalaryHint: {
    en: `Yearly ministerial pay from 1 April 2026 (pre-2026 scheme), without the tax-free allowance.`,
    nl: `Jaarlijkse ministerswedde vanaf 1 april 2026 (regeling van vóór 2026), zonder de belastingvrije vergoeding.`,
    fr: `Rémunération annuelle de ministre au 1er avril 2026 (ancien régime), sans l'indemnité exonérée.`,
  },
  'tip.ministerRules': {
    en: `Ministers appointed before the March 2026 election, or who had already been an MP, stay on the old scheme: kr 1,624,503 a year, 110% for the finance and foreign ministers and number two in the government, 125% for the Prime Minister. A minister who is also an MP gets the same total, split between the two. Pay is taxed as personal income with the 8% AM-bidrag, and there is no ATP. On top comes a tax-free expense allowance of kr 73,304 a year. Ministers new to politics after the election are paid more (kr 2,128,961, kr 2,620,499 for the Prime Minister) and get no tax-free allowance. Their pension is paid by the state and isn't counted here.`,
    nl: `Ministers die vóór de verkiezingen van maart 2026 benoemd werden, of al Kamerlid waren, blijven in de oude regeling: kr 1.624.503 per jaar, 110% voor de ministers van Financiën en Buitenlandse Zaken en de nummer twee van de regering, 125% voor de premier. Een minister die ook Kamerlid is, krijgt hetzelfde totaal, verdeeld over beide. Het loon wordt belast als persoonlijk inkomen met de AM-bidrag van 8%, zonder ATP. Daarbovenop komt een belastingvrije onkostenvergoeding van kr 73.304 per jaar. Nieuwkomers na de verkiezingen verdienen meer (kr 2.128.961, kr 2.620.499 voor de premier) maar krijgen geen belastingvrije vergoeding. Hun pensioen betaalt de staat en is hier niet meegerekend.`,
    fr: `Les ministres nommés avant les élections de mars 2026, ou déjà députés, restent sous l'ancien régime : 1 624 503 kr par an, 110% pour les ministres des Finances et des Affaires étrangères et le numéro deux du gouvernement, 125% pour le chef du gouvernement. Un ministre aussi député touche le même total, réparti entre les deux. La rémunération est imposée comme revenu personnel avec l'AM-bidrag de 8%, sans ATP. S'y ajoute une indemnité de frais exonérée de 73 304 kr par an. Les nouveaux venus après les élections sont mieux payés (2 128 961 kr, 2 620 499 kr pour le chef du gouvernement) mais sans indemnité exonérée. Leur pension est payée par l'État et n'est pas comptée ici.`,
  },
  'bd.minGross': { en: `Ministerial pay`, nl: `Ministerswedde`, fr: `Rémunération de ministre` },
  'bd.allow': { en: `Tax-free expense allowance`, nl: `Belastingvrije onkostenvergoeding`, fr: `Indemnité de frais exonérée` },
  'bd.stateCost': { en: `Total paid by the state`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, fin, min) => `Yearly pay from 1 April 2026: Prime Minister ${pm}, finance and foreign ministers and number two ${fin}, other ministers ${min}.`,
    nl: (pm, fin, min) => `Jaarloon vanaf 1 april 2026: premier ${pm}, ministers van Financiën en Buitenlandse Zaken en nummer twee ${fin}, andere ministers ${min}.`,
    fr: (pm, fin, min) => `Rémunération annuelle au 1er avril 2026 : chef du gouvernement ${pm}, ministres des Finances, des Affaires étrangères et numéro deux ${fin}, autres ministres ${min}.`,
  },
  'tip.allow': {
    en: a => `Paid on top of the pay, not taxed: ${a} a year, the same amount MPs on the old scheme receive.`,
    nl: a => `Bovenop het loon betaald, niet belast: ${a} per jaar, hetzelfde bedrag als Kamerleden in de oude regeling.`,
    fr: a => `Versée en plus de la rémunération, non imposée : ${a} par an, le même montant que les députés de l'ancien régime.`,
  },
  'tip.stateCost': {
    en: `Pay + tax-free allowance. The state pays no ATP or employer funds on a minister, so this is the whole cost (the pension is paid later from the budget).`,
    nl: `Loon + belastingvrije vergoeding. De staat betaalt geen ATP of werkgeversbijdragen op een minister, dus dit is de volledige kost (het pensioen komt later uit de begroting).`,
    fr: `Rémunération + indemnité exonérée. L'État ne paie ni ATP ni contributions patronales sur un ministre : c'est donc le coût total (la pension est payée plus tard sur le budget).`,
  },
  'tip.minEr': {
    en: `None: ministers aren't employees, so no ATP, AUB or other employer funds are paid.`,
    nl: `Geen: ministers zijn geen werknemers, dus er wordt geen ATP, AUB of andere werkgeversbijdrage betaald.`,
    fr: `Aucune : les ministres ne sont pas salariés, donc ni ATP, ni AUB, ni autre contribution patronale.`,
  },
  'tip.minEe': { en: `No ATP is paid on ministerial pay.`, nl: `Op de ministerswedde wordt geen ATP betaald.`, fr: `Aucune cotisation ATP sur la rémunération de ministre.` },

  'stat.pm': { en: `Prime Minister`, nl: `Premier`, fr: `Chef du gouvernement` },
  'stat.fin': { en: `Finance or Foreign Minister`, nl: `Minister van Financiën of Buitenlandse Zaken`, fr: `Ministre des Finances ou des Affaires étrangères` },
  'stat.minister': { en: `Minister`, nl: `Minister`, fr: `Ministre` },
  'stat.mp': { en: `MP (elected before 2026)`, nl: `Kamerlid (verkozen vóór 2026)`, fr: `Député (élu avant 2026)` },
  'stat.mpNew': { en: `MP (first elected in 2026)`, nl: `Kamerlid (voor het eerst verkozen in 2026)`, fr: `Député (élu pour la première fois en 2026)` },
  'pol.stat.pm': { en: `Statutory pay from 1 April 2026, pre-2026 scheme`, nl: `Wettelijk loon vanaf 1 april 2026, oude regeling`, fr: `Rémunération légale au 1er avril 2026, ancien régime` },
  'pol.stat.fin': { en: `Statutory pay from 1 April 2026 (110%), pre-2026 scheme`, nl: `Wettelijk loon vanaf 1 april 2026 (110%), oude regeling`, fr: `Rémunération légale au 1er avril 2026 (110%), ancien régime` },
  'pol.stat.minister': { en: `Statutory pay from 1 April 2026, pre-2026 scheme`, nl: `Wettelijk loon vanaf 1 april 2026, oude regeling`, fr: `Rémunération légale au 1er avril 2026, ancien régime` },
  'pol.stat.mp': { en: `Taxable pay from 1 April 2026 plus a tax-free kr 73,304.`, nl: `Belastbaar loon vanaf 1 april 2026 plus belastingvrij kr 73.304.`, fr: `Indemnité imposable au 1er avril 2026 plus 73 304 kr exonérés` },
  'pol.stat.mpNew': { en: `New scheme: higher pay, all of it taxed`, nl: `Nieuwe regeling: hoger loon, volledig belast`, fr: `Nouveau régime : indemnité plus élevée, entièrement imposée` },
  'polTitle.gov': { en: `Public offices, 2025 pay`, nl: `Openbare ambten, loon 2025`, fr: `Fonctions publiques, rémunération 2025` },
  'polTitle.corp': { en: `Heads of state-owned companies, 2025 pay`, nl: `Topmensen van staatsbedrijven, loon 2025`, fr: `Dirigeants d'entreprises publiques, rémunération 2025` },
  'pol.nb': { en: `Governor, Danmarks Nationalbank`, nl: `Gouverneur, Danmarks Nationalbank`, fr: `Gouverneur, Danmarks Nationalbank` },
  'pol.dsb': { en: `CEO, DSB (state railways)`, nl: `CEO, DSB (staatsspoorwegen)`, fr: `PDG, DSB (chemins de fer de l'État)` },
  'pol.orsted': { en: `CEO, Ørsted (50.1% state-owned)`, nl: `CEO, Ørsted (50,1% in handen van de staat)`, fr: `PDG, Ørsted (détenue à 50,1% par l'État)` },
  'polNote.pm': {
    en: `Taxed like a salary (AM-bidrag, income tax), no ATP, plus the tax-free kr 73,304 allowance. The head sits at the employee salary with the same net, with your household and municipality. The dot is their actual pay.`,
    nl: `Belast als een loon (AM-bidrag, inkomstenbelasting), geen ATP, plus de belastingvrije vergoeding van kr 73.304. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw gezin en gemeente. Het bolletje is hun echte loon.`,
    fr: `Imposé comme un salaire (AM-bidrag, impôt sur le revenu), sans ATP, plus l'indemnité exonérée de 73 304 kr. La tête est placée au salaire d'un salarié qui aurait le même net, avec votre ménage et votre commune. Le point est leur vraie rémunération.`,
  },
  'polNote.fin': {
    en: `Taxed like a salary (AM-bidrag, income tax), no ATP, plus the tax-free kr 73,304 allowance. The head sits at the employee salary with the same net; the dot is their actual pay.`,
    nl: `Belast als een loon (AM-bidrag, inkomstenbelasting), geen ATP, plus de belastingvrije vergoeding van kr 73.304. Het hoofdje staat bij het werknemersloon met hetzelfde netto; het bolletje is hun echte loon.`,
    fr: `Imposé comme un salaire (AM-bidrag, impôt sur le revenu), sans ATP, plus l'indemnité exonérée de 73 304 kr. La tête est placée au salaire d'un salarié au même net ; le point est leur vraie rémunération.`,
  },
  'polNote.minister': {
    en: `Taxed like a salary (AM-bidrag, income tax), no ATP, plus the tax-free kr 73,304 allowance. The head sits at the employee salary with the same net; the dot is their actual pay.`,
    nl: `Belast als een loon (AM-bidrag, inkomstenbelasting), geen ATP, plus de belastingvrije vergoeding van kr 73.304. Het hoofdje staat bij het werknemersloon met hetzelfde netto; het bolletje is hun echte loon.`,
    fr: `Imposé comme un salaire (AM-bidrag, impôt sur le revenu), sans ATP, plus l'indemnité exonérée de 73 304 kr. La tête est placée au salaire d'un salarié au même net ; le point est leur vraie rémunération.`,
  },
  'polNote.mp': {
    en: `Taxable pay of kr 830,675 plus a tax-free kr 73,304 expense allowance. Housing in Copenhagen can also be provided tax-free. The head sits at the employee salary with the same net; the dot is their actual pay.`,
    nl: `Belastbaar loon van kr 830.675 plus een belastingvrije onkostenvergoeding van kr 73.304. Huisvesting in Kopenhagen kan ook belastingvrij worden gegeven. Het hoofdje staat bij het werknemersloon met hetzelfde netto; het bolletje is hun echte loon.`,
    fr: `Indemnité imposable de 830 675 kr plus 73 304 kr de frais exonérés. Un logement à Copenhague peut aussi être fourni en franchise d'impôt. La tête est placée au salaire d'un salarié au même net ; le point est leur vraie rémunération.`,
  },
  'polNote.mpNew': {
    en: `MPs first elected in March 2026 get kr 1,140,700, all taxed, and no tax-free allowance. The head sits at the employee salary with the same net; the dot is their actual pay.`,
    nl: `Kamerleden die in maart 2026 voor het eerst verkozen werden, krijgen kr 1.140.700, volledig belast, zonder belastingvrije vergoeding. Het hoofdje staat bij het werknemersloon met hetzelfde netto; het bolletje is hun echte loon.`,
    fr: `Les députés élus pour la première fois en mars 2026 touchent 1 140 700 kr, entièrement imposés, sans indemnité exonérée. La tête est placée au salaire d'un salarié au même net ; le point est leur vraie rémunération.`,
  },
  'polTipNote.nb': {
    en: `Salary, then salary with the bank's pension contribution, from the 2025 annual report. The board also gets a free car.`,
    nl: `Loon, daarna loon met de pensioenbijdrage van de bank, uit het jaarverslag 2025. De directie krijgt ook een gratis wagen.`,
    fr: `Salaire, puis salaire avec la cotisation de retraite de la banque, d'après le rapport annuel 2025. La direction dispose aussi d'une voiture de fonction.`,
  },
  'polTipNote.dsb': {
    en: `Fixed pay, then fixed pay with pension and benefits, from DSB's 2025 remuneration report.`,
    nl: `Vast loon, daarna vast loon met pensioen en voordelen, uit het vergoedingsrapport 2025 van DSB.`,
    fr: `Rémunération fixe, puis avec retraite et avantages, d'après le rapport de rémunération 2025 de DSB.`,
  },
  'polTipNote.orsted': {
    en: `CEO since 1 February 2025. Fixed salary, then total awarded including bonus and shares, both scaled from 11 months to a full year.`,
    nl: `CEO sinds 1 februari 2025. Vast loon, daarna totaal toegekend inclusief bonus en aandelen, beide omgerekend van 11 maanden naar een volledig jaar.`,
    fr: `PDG depuis le 1er février 2025. Salaire fixe, puis total attribué avec bonus et actions, tous deux ramenés de 11 mois à une année entière.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly pay, shown on the chart as yearly ÷ months paid. Ministers and MPs are placed where an employee would get the same net. Sources: ${links} and each company's report.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarloon, op de grafiek als jaarbedrag ÷ betaalde maanden. Ministers en Kamerleden staan waar een werknemer hetzelfde netto zou krijgen. Bronnen: ${links} en het verslag van elk bedrijf.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer dessus. Rémunération annuelle, placée sur le graphique en montant annuel ÷ mois payés. Ministres et députés sont placés là où un salarié aurait le même net. Sources : ${links} et le rapport de chaque entreprise.`,
  },

  bracketTop: { en: `mellemskat`, nl: `mellemskat`, fr: `mellemskat` },
  trapTitle: {
    en: (a, b) => `Why is the rate lower between ${a} and ${b}?`,
    nl: (a, b) => `Waarom is het tarief lager tussen ${a} en ${b}?`,
    fr: (a, b) => `Pourquoi le taux est-il plus bas entre ${a} et ${b} ?`,
  },
  trapBody: {
    en: (a, b, job, max) => `Below ${a} your pay stays under the personal allowance and only AM-bidrag is due. Above it, two work deductions grow with your pay: the employment deduction (12.75%) and, from ${job}, the job deduction (4.5%). Each extra krone is partly deducted, so it's taxed a little less. At ${b} the employment deduction reaches its cap of ${max} and the rate on the next krone steps up. Fixed employer contributions (ATP, AUB, Barsel.dk) weigh more on low pay, which is why the full rate is higher at the very bottom.`,
    nl: (a, b, job, max) => `Onder ${a} blijft je loon onder de persoonlijke aftrek en betaal je alleen AM-bidrag. Daarboven groeien twee arbeidsaftrekken mee met je loon: de beskæftigelsesfradrag (12,75%) en vanaf ${job} de jobfradrag (4,5%). Elke extra kroon wordt dus deels afgetrokken en iets minder belast. Bij ${b} bereikt de beskæftigelsesfradrag zijn plafond van ${max} en stijgt het tarief op de volgende kroon. Vaste werkgeversbijdragen (ATP, AUB, Barsel.dk) wegen zwaarder op lage lonen, daarom is het totale tarief helemaal onderaan hoger.`,
    fr: (a, b, job, max) => `Sous ${a}, votre salaire reste sous l'abattement personnel et seul l'AM-bidrag est dû. Au-delà, deux déductions liées au travail augmentent avec votre salaire : la déduction pour emploi (12,75%) et, à partir de ${job}, la déduction « job » (4,5%). Chaque couronne supplémentaire est donc en partie déduite et un peu moins imposée. À ${b}, la déduction pour emploi atteint son plafond de ${max} et le taux sur la couronne suivante augmente. Les contributions patronales fixes (ATP, AUB, Barsel.dk) pèsent plus sur les bas salaires, d'où un taux total plus élevé tout en bas.`,
  },
  topTitle: {
    en: (mel, top) => `Why the steps at ${mel}${top ? ` and ${top}` : ''}?`,
    nl: (mel, top) => `Waarom de sprongen bij ${mel}${top ? ` en ${top}` : ''}?`,
    fr: (mel, top) => `Pourquoi les marches à ${mel}${top ? ` et ${top}` : ''} ?`,
  },
  topBody: {
    en: (mel, top, tt, amt) => `From ${mel} your personal income after AM-bidrag passes ${amt} and the 7.5% mellemskat starts.${top ? ` From ${top} the new 7.5% topskat adds to it.` : ''}${tt ? ` From ${tt} the 5% toptopskat comes on top.` : ''} The tax ceiling only caps municipal tax + bundskat + mellemskat at 44.57%; topskat and toptopskat come on top of it.`,
    nl: (mel, top, tt, amt) => `Vanaf ${mel} komt je persoonlijk inkomen na AM-bidrag boven ${amt} en begint de mellemskat van 7,5%.${top ? ` Vanaf ${top} komt de nieuwe topskat van 7,5% erbij.` : ''}${tt ? ` Vanaf ${tt} komt daar nog de toptopskat van 5% bij.` : ''} Het belastingplafond begrenst alleen gemeentebelasting + bundskat + mellemskat op 44,57%; topskat en toptopskat komen daarbovenop.`,
    fr: (mel, top, tt, amt) => `À partir de ${mel}, votre revenu personnel après AM-bidrag dépasse ${amt} et la mellemskat de 7,5% commence.${top ? ` À partir de ${top}, la nouvelle topskat de 7,5% s'y ajoute.` : ''}${tt ? ` À partir de ${tt}, la toptopskat de 5% vient en plus.` : ''} Le plafond d'imposition ne limite que impôt communal + bundskat + mellemskat à 44,57% ; topskat et toptopskat s'ajoutent par-dessus.`,
  },

  'comp.er': { en: `Employer contributions`, nl: `Werkgeversbijdragen`, fr: `Contributions patronales` },
  'comp.ee': { en: `ATP (your share)`, nl: `ATP (jouw deel)`, fr: `ATP (votre part)` },
  'comp.am': { en: `Labour market contribution (AM-bidrag)`, nl: `Arbeidsmarktbijdrage (AM-bidrag)`, fr: `Contribution au marché du travail (AM-bidrag)` },
  'comp.stat': { en: `State income tax`, nl: `Rijksinkomstenbelasting`, fr: `Impôt d'État sur le revenu` },
  'comp.kom': { en: `Municipal tax`, nl: `Gemeentebelasting`, fr: `Impôt communal` },
  'comp.kirke': { en: `Church tax`, nl: `Kerkbelasting`, fr: `Impôt d'Église` },
  'comp.fam': { en: `Child benefits lost to your pay`, nl: `Kinderbijslag die je loon kost`, fr: `Allocations familiales perdues` },
  'er.atp': { en: `ATP (employer share, kr 198/month)`, nl: `ATP (werkgeversdeel, kr 198/maand)`, fr: `ATP (part patronale, 198 kr/mois)` },
  'er.aub': { en: `AUB (training fund)`, nl: `AUB (opleidingsfonds)`, fr: `AUB (fonds de formation)` },
  'er.barsel': { en: `Barsel.dk (parental leave fund)`, nl: `Barsel.dk (fonds ouderschapsverlof)`, fr: `Barsel.dk (fonds de congé parental)` },
  'er.aes': { en: `AES (occupational disease, office work)`, nl: `AES (beroepsziekten, kantoorwerk)`, fr: `AES (maladies professionnelles, bureau)` },
  'er.fin': { en: `Financing contribution and holiday admin`, nl: `Financieringsbijdrage en vakantieadministratie`, fr: `Contribution de financement et gestion des congés` },
  'bd.pi': { en: `Personal income`, nl: `Persoonlijk inkomen`, fr: `Revenu personnel` },
  'bd.beskAll': { en: `Employment and job deductions`, nl: `Arbeids- en jobaftrek`, fr: `Déductions pour emploi et « job »` },
  'bd.besk': { en: `Work deductions`, nl: `Arbeidsaftrekken`, fr: `Déductions liées au travail` },
  'bd.beskOnly': { en: `Employment deduction (beskæftigelsesfradrag)`, nl: `Arbeidsaftrek (beskæftigelsesfradrag)`, fr: `Déduction pour emploi (beskæftigelsesfradrag)` },
  'bd.beskSingle': { en: `Extra deduction for single parents`, nl: `Extra aftrek voor alleenstaande ouders`, fr: `Déduction supplémentaire pour parent isolé` },
  'bd.job': { en: `Job deduction (jobfradrag)`, nl: `Jobaftrek (jobfradrag)`, fr: `Déduction « job » (jobfradrag)` },
  'bd.taxable': { en: `Taxable income`, nl: `Belastbaar inkomen`, fr: `Revenu imposable` },
  'tax.bund': { en: `Bundskat`, nl: `Bundskat`, fr: `Bundskat` },
  'tax.mellem': { en: `Mellemskat`, nl: `Mellemskat`, fr: `Mellemskat` },
  'tax.top': { en: `Topskat`, nl: `Topskat`, fr: `Topskat` },
  'tax.toptop': { en: `Toptopskat`, nl: `Toptopskat`, fr: `Toptopskat` },

  'tip.f12': {
    en: `12 monthly salaries. Paid holiday is part of them.`,
    nl: `12 maandlonen. Betaalde vakantie zit erin.`,
    fr: `12 salaires mensuels. Les congés payés en font partie.`,
  },
  'tip.f1212': {
    en: `12 months + the 1% special holiday allowance (særlig feriegodtgørelse) most salaried employees get.`,
    nl: `12 maanden + de bijzondere vakantietoeslag van 1% (særlig feriegodtgørelse) die de meeste bedienden krijgen.`,
    fr: `12 mois + la prime de vacances spéciale de 1% (særlig feriegodtgørelse) que reçoivent la plupart des salariés mensualisés.`,
  },
  'tip.jointH': { en: `Married couples`, nl: `Gehuwde koppels`, fr: `Couples mariés` },
  'tip.joint': {
    en: pf => `Spouses are taxed separately. The one link: a personal allowance (${pf}) one spouse can't use moves to the other. Child benefit is split in two and each half is cut on that parent's own income. Mellemskat, topskat and toptopskat thresholds can't be shared.`,
    nl: pf => `Echtgenoten worden apart belast. De enige band: een persoonlijke aftrek (${pf}) die de ene niet kan gebruiken, gaat naar de andere. Kinderbijslag wordt in twee gedeeld en elke helft wordt verminderd op het eigen inkomen van die ouder. De drempels van mellemskat, topskat en toptopskat kunnen niet gedeeld worden.`,
    fr: pf => `Les époux sont imposés séparément. Seul lien : l'abattement personnel (${pf}) qu'un époux ne peut pas utiliser passe à l'autre. Les allocations familiales sont partagées en deux et chaque moitié est réduite selon le revenu de ce parent. Les seuils de mellemskat, topskat et toptopskat ne se partagent pas.`,
  },
  'tip.jointCalc': {
    en: `Your share = the couple's tax with your pay − the couple's tax if you earned nothing. Your unused personal allowance would otherwise lower your spouse's tax.`,
    nl: `Jouw deel = de belasting van het koppel met jouw loon − de belasting van het koppel als jij niets verdiende. Je onbenutte persoonlijke aftrek zou anders de belasting van je partner verlagen.`,
    fr: `Votre part = l'impôt du couple avec votre salaire − l'impôt du couple si vous ne gagniez rien. Votre abattement personnel inutilisé réduirait sinon l'impôt de votre conjoint.`,
  },
  'tip.church': {
    en: avg => `Members of the Church of Denmark pay church tax on taxable income above the personal allowance, at their municipality's rate (${avg} on average). Non-members pay nothing.`,
    nl: avg => `Leden van de Deense Volkskerk betalen kerkbelasting op het belastbaar inkomen boven de persoonlijke aftrek, tegen het tarief van hun gemeente (gemiddeld ${avg}). Niet-leden betalen niets.`,
    fr: avg => `Les membres de l'Église du Danemark paient l'impôt d'Église sur le revenu imposable au-delà de l'abattement personnel, au taux de leur commune (${avg} en moyenne). Les non-membres ne paient rien.`,
  },
  'tip.komRule': {
    en: (lo, hi) => `Each municipality sets its own rate on taxable income above the personal allowance, from ${lo} to ${hi} in 2026. It's the biggest tax on a Danish salary.`,
    nl: (lo, hi) => `Elke gemeente kiest haar eigen tarief op het belastbaar inkomen boven de persoonlijke aftrek, van ${lo} tot ${hi} in 2026. Het is de grootste belasting op een Deens loon.`,
    fr: (lo, hi) => `Chaque commune fixe son taux sur le revenu imposable au-delà de l'abattement personnel, de ${lo} à ${hi} en 2026. C'est le plus gros impôt sur un salaire danois.`,
  },
  'tip.costShort': {
    en: `Gross salary + employer contributions.`,
    nl: `Brutoloon + werkgeversbijdragen.`,
    fr: `Salaire brut + contributions patronales.`,
  },
  'tip.er': {
    en: `Danish employers pay no percentage social security. They pay fixed yearly amounts per full-time employee, the same at any salary.`,
    nl: `Deense werkgevers betalen geen procentuele sociale bijdragen. Ze betalen vaste jaarbedragen per voltijdse werknemer, bij elk loon hetzelfde.`,
    fr: `Les employeurs danois ne paient pas de cotisations en pourcentage. Ils paient des montants annuels fixes par salarié à temps plein, identiques quel que soit le salaire.`,
  },
  'tip.erM': {
    en: `AES depends on the sector; this uses finance and business services (kr 457). Compulsory work-accident insurance and the usual labour-market pension are left out.`,
    nl: `AES hangt af van de sector; hier financiële en zakelijke diensten (kr 457). De verplichte arbeidsongevallenverzekering en het gebruikelijke arbeidsmarktpensioen zijn weggelaten.`,
    fr: `L'AES dépend du secteur ; ici finance et services aux entreprises (457 kr). L'assurance accidents du travail obligatoire et la retraite professionnelle habituelle sont exclues.`,
  },
  'tip.ee': {
    en: (ee, er) => `The supplementary pension ATP: ${ee} a month from you, ${er} from your employer, for 117 hours a month or more. It's deducted before AM-bidrag and tax.`,
    nl: (ee, er) => `Het aanvullend pensioen ATP: ${ee} per maand van jou, ${er} van je werkgever, vanaf 117 uur per maand. Het wordt afgetrokken vóór AM-bidrag en belasting.`,
    fr: (ee, er) => `La retraite complémentaire ATP : ${ee} par mois de votre part, ${er} de votre employeur, dès 117 heures par mois. Elle est déduite avant l'AM-bidrag et l'impôt.`,
  },
  'tip.am': {
    en: `8% of your gross pay (after ATP), taken before any other tax. No allowance, no cap.`,
    nl: `8% van je brutoloon (na ATP), ingehouden vóór elke andere belasting. Geen vrijstelling, geen plafond.`,
    fr: `8% de votre salaire brut (après ATP), prélevés avant tout autre impôt. Sans abattement ni plafond.`,
  },
  'tip.pi': {
    en: calc => `Gross − ATP − AM-bidrag${calc}. Bundskat, mellemskat, topskat and toptopskat are charged on this.`,
    nl: calc => `Bruto − ATP − AM-bidrag${calc}. Bundskat, mellemskat, topskat en toptopskat worden hierop geheven.`,
    fr: calc => `Brut − ATP − AM-bidrag${calc}. Bundskat, mellemskat, topskat et toptopskat sont calculées sur ce montant.`,
  },
  'tip.besk': {
    en: (max, jobLo, jobMax, single) => `Employment deduction: 12.75% of pay, up to ${max}. Job deduction: 4.5% of pay above ${jobLo}, up to ${jobMax}. Single parents get 11.5% more, up to ${single}. They lower municipal and church tax only, worth about 25% of their value.`,
    nl: (max, jobLo, jobMax, single) => `Arbeidsaftrek: 12,75% van het loon, tot ${max}. Jobaftrek: 4,5% van het loon boven ${jobLo}, tot ${jobMax}. Alleenstaande ouders krijgen 11,5% extra, tot ${single}. Ze verlagen alleen de gemeente- en kerkbelasting, ongeveer 25% van hun waarde.`,
    fr: (max, jobLo, jobMax, single) => `Déduction pour emploi : 12,75% du salaire, jusqu'à ${max}. Déduction « job » : 4,5% du salaire au-delà de ${jobLo}, jusqu'à ${jobMax}. Les parents isolés ont 11,5% de plus, jusqu'à ${single}. Elles ne réduisent que l'impôt communal et d'Église, soit environ 25% de leur montant.`,
  },
  'tip.taxable': {
    en: calc => `Personal income − work deductions${calc}. Municipal and church tax are charged on this, above the personal allowance.`,
    nl: calc => `Persoonlijk inkomen − arbeidsaftrekken${calc}. Gemeente- en kerkbelasting worden hierop geheven, boven de persoonlijke aftrek.`,
    fr: calc => `Revenu personnel − déductions liées au travail${calc}. Impôt communal et d'Église portent sur ce montant, au-delà de l'abattement personnel.`,
  },
  'tip.kom': {
    en: (name, rate, pf) => `${name ? `${name} charges ${rate}` : `Rate ${rate}`} of taxable income above the personal allowance of ${pf}.`,
    nl: (name, rate, pf) => `${name ? `${name} heft ${rate}` : `Tarief ${rate}`} op het belastbaar inkomen boven de persoonlijke aftrek van ${pf}.`,
    fr: (name, rate, pf) => `${name ? `${name} prélève ${rate}` : `Taux de ${rate}`} du revenu imposable au-delà de l'abattement personnel de ${pf}.`,
  },
  'tip.statShort': {
    en: `Bundskat 12.01% above the personal allowance, then mellemskat, topskat and toptopskat on high incomes.`,
    nl: `Bundskat 12,01% boven de persoonlijke aftrek, daarna mellemskat, topskat en toptopskat op hoge inkomens.`,
    fr: `Bundskat de 12,01% au-delà de l'abattement personnel, puis mellemskat, topskat et toptopskat sur les hauts revenus.`,
  },
  'tip.statM': {
    en: (m, tp, tt) => `On personal income: bundskat above the personal allowance, mellemskat above ${m}, topskat above ${tp}, toptopskat above ${tt}.`,
    nl: (m, tp, tt) => `Op het persoonlijk inkomen: bundskat boven de persoonlijke aftrek, mellemskat boven ${m}, topskat boven ${tp}, toptopskat boven ${tt}.`,
    fr: (m, tp, tt) => `Sur le revenu personnel : bundskat au-delà de l'abattement personnel, mellemskat au-delà de ${m}, topskat au-delà de ${tp}, toptopskat au-delà de ${tt}.`,
  },
  'tip.yourShare': { en: `Your share for the couple`, nl: `Jouw deel voor het koppel`, fr: `Votre part pour le couple` },
  'tip.loft': {
    en: (loft, r) => `Your municipal rate pushes municipal tax + bundskat + mellemskat over the ${loft} ceiling, so mellemskat drops to ${r}.`,
    nl: (loft, r) => `Door je gemeentetarief komt gemeentebelasting + bundskat + mellemskat boven het plafond van ${loft}, dus zakt de mellemskat naar ${r}.`,
    fr: (loft, r) => `Votre taux communal fait dépasser le plafond de ${loft} à impôt communal + bundskat + mellemskat : la mellemskat tombe donc à ${r}.`,
  },
  'tip.fam': {
    en: (child, lo, green, greenLo) => `Child benefit (børne- og ungeydelse, here ${child} a year per child aged 7 to 14) shrinks by 2% of your income above ${lo}. The parents' green check (${green} per child, two at most) shrinks by 7.5% of your income above ${greenLo}. A couple gets half each, cut on each parent's own income. What your pay takes away counts as tax.`,
    nl: (child, lo, green, greenLo) => `Kinderbijslag (børne- og ungeydelse, hier ${child} per jaar per kind van 7 tot 14) daalt met 2% van je inkomen boven ${lo}. De groene cheque voor ouders (${green} per kind, maximaal twee) daalt met 7,5% van je inkomen boven ${greenLo}. Een koppel krijgt elk de helft, verminderd op het eigen inkomen. Wat je loon wegneemt, telt als belasting.`,
    fr: (child, lo, green, greenLo) => `Les allocations familiales (børne- og ungeydelse, ici ${child} par an par enfant de 7 à 14 ans) baissent de 2% de votre revenu au-delà de ${lo}. Le chèque vert des parents (${green} par enfant, deux au plus) baisse de 7,5% de votre revenu au-delà de ${greenLo}. Un couple en touche chacun la moitié, réduite selon son propre revenu. Ce que votre salaire fait perdre compte comme un impôt.`,
  },
  'tip.famBenefit': { en: `Your child benefit`, nl: `Jouw kinderbijslag`, fr: `Vos allocations familiales` },
  'tip.famGreen': { en: `Your green check for children`, nl: `Jouw groene cheque voor kinderen`, fr: `Votre chèque vert pour enfants` },
  'tip.famCut': { en: `lost to your income`, nl: `verloren door je inkomen`, fr: `perdu à cause de votre revenu` },
  'tip.vatM': {
    en: `Denmark has a single 25% rate. VAT-free spending such as rent, healthcare and public transport is left out, so this is an upper bound.`,
    nl: `Denemarken heeft één tarief van 25%. Btw-vrije uitgaven zoals huur, gezondheidszorg en openbaar vervoer zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Le Danemark a un taux unique de 25%. Les dépenses exonérées comme le loyer, la santé et les transports publics ne sont pas prises en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross salary − ATP − AM-bidrag − state, municipal and church tax − child benefits you lose.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Brutoloon − ATP − AM-bidrag − rijks-, gemeente- en kerkbelasting − kinderbijslag die je verliest.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Salaire brut − ATP − AM-bidrag − impôts d'État, communal et d'Église − allocations familiales perdues.`,
  },

  refEyebrow: { en: `Rules used · income year 2026`, nl: `Gebruikte regels · inkomstenjaar 2026`, fr: `Règles utilisées · revenus 2026` },
  'ref.er': {
    en: { h: `1 · Employer contributions`, li: [
      `No percentage social security. Fixed amounts per full-time employee per year: ATP <span class="num">kr 2,376</span>, AUB <span class="num">kr 2,821</span>, Barsel.dk <span class="num">kr 2,200</span>, financing contribution <span class="num">kr 328</span>, holiday admin <span class="num">kr 20</span>, AES (office) <span class="num">kr 457</span>`,
      `Total <span class="num">kr 8,202</span> a year, whatever the salary.`,
    ] },
    nl: { h: `1 · Werkgeversbijdragen`, li: [
      `Geen procentuele sociale bijdragen. Vaste bedragen per voltijdse werknemer per jaar: ATP <span class="num">kr 2.376</span>, AUB <span class="num">kr 2.821</span>, Barsel.dk <span class="num">kr 2.200</span>, financieringsbijdrage <span class="num">kr 328</span>, vakantieadministratie <span class="num">kr 20</span>, AES (kantoor) <span class="num">kr 457</span>`,
      `Totaal <span class="num">kr 8.202</span> per jaar, ongeacht het loon.`,
    ] },
    fr: { h: `1 · Contributions patronales`, li: [
      `Pas de cotisations en pourcentage. Montants fixes par salarié à temps plein et par an : ATP <span class="num">2 376 kr</span>, AUB <span class="num">2 821 kr</span>, Barsel.dk <span class="num">2 200 kr</span>, contribution de financement <span class="num">328 kr</span>, gestion des congés <span class="num">20 kr</span>, AES (bureau) <span class="num">457 kr</span>`,
      `Total <span class="num">8 202 kr</span> par an, quel que soit le salaire.`,
    ] },
  },
  'ref.am': {
    en: { h: `2 · ATP and AM-bidrag`, li: [
      `ATP: <span class="num">kr 99</span> a month from the employee, kr 198 from the employer (117+ hours a month).`,
      `AM-bidrag: <span class="num">8%</span> of gross pay after ATP. What's left is personal income.`,
    ] },
    nl: { h: `2 · ATP en AM-bidrag`, li: [
      `ATP: <span class="num">kr 99</span> per maand van de werknemer, kr 198 van de werkgever (vanaf 117 uur per maand).`,
      `AM-bidrag: <span class="num">8%</span> van het brutoloon na ATP. Wat overblijft, is het persoonlijk inkomen.`,
    ] },
    fr: { h: `2 · ATP et AM-bidrag`, li: [
      `ATP : <span class="num">99 kr</span> par mois pour le salarié, 198 kr pour l'employeur (117 heures par mois ou plus).`,
      `AM-bidrag : <span class="num">8%</span> du salaire brut après ATP. Le reste forme le revenu personnel.`,
    ] },
  },
  'ref.taxable': {
    en: br => ({ h: `3 · Deductions and state tax`, li: [
      `Personal allowance <span class="num">kr 54,100</span>, for municipal, church and bundskat.`,
      `Employment deduction <span class="num">12.75%</span> up to kr 63,300; job deduction 4.5% above kr 235,200, up to kr 3,100; single parents +11.5% up to kr 50,600.`,
      `State tax on personal income after AM-bidrag (bundskat, then + mellemskat, + topskat, + toptopskat):${br}`,
    ] }),
    nl: br => ({ h: `3 · Aftrekken en rijksbelasting`, li: [
      `Persoonlijke aftrek <span class="num">kr 54.100</span>, voor gemeente-, kerkbelasting en bundskat.`,
      `Arbeidsaftrek <span class="num">12,75%</span> tot kr 63.300; jobaftrek 4,5% boven kr 235.200, tot kr 3.100; alleenstaande ouders +11,5% tot kr 50.600.`,
      `Rijksbelasting op persoonlijk inkomen na AM-bidrag (bundskat, dan + mellemskat, + topskat, + toptopskat):${br}`,
    ] }),
    fr: br => ({ h: `3 · Déductions et impôt d'État`, li: [
      `Abattement personnel <span class="num">54 100 kr</span>, pour l'impôt communal, d'Église et la bundskat.`,
      `Déduction pour emploi <span class="num">12,75%</span> jusqu'à 63 300 kr ; déduction « job » 4,5% au-delà de 235 200 kr, jusqu'à 3 100 kr ; parents isolés +11,5% jusqu'à 50 600 kr.`,
      `Impôt d'État sur le revenu personnel après AM-bidrag (bundskat, puis + mellemskat, + topskat, + toptopskat) :${br}`,
    ] }),
  },
  'ref.levels': {
    en: { h: `4 · Municipal and church tax, tax ceiling`, li: [
      `Municipal tax from <span class="num">23.39%</span> (Copenhagen) to <span class="num">26.30%</span>, 25.05% on average; church tax 0.38% to 1.30% for members. Rates for all 98 municipalities from Statistics Denmark (PSKAT).`,
      `Tax ceiling <span class="num">44.57%</span> on municipal tax + bundskat + mellemskat (church tax excluded): above it, mellemskat is cut. Topskat and toptopskat are outside the ceiling, so the top rate is 57.07% before AM-bidrag.`,
    ] },
    nl: { h: `4 · Gemeente- en kerkbelasting, belastingplafond`, li: [
      `Gemeentebelasting van <span class="num">23,39%</span> (Kopenhagen) tot <span class="num">26,30%</span>, gemiddeld 25,05%; kerkbelasting 0,38% tot 1,30% voor leden. Tarieven van alle 98 gemeenten van Statistics Denmark (PSKAT).`,
      `Belastingplafond <span class="num">44,57%</span> op gemeentebelasting + bundskat + mellemskat (zonder kerkbelasting): daarboven wordt de mellemskat verlaagd. Topskat en toptopskat vallen buiten het plafond, dus het toptarief is 57,07% vóór AM-bidrag.`,
    ] },
    fr: { h: `4 · Impôt communal et d'Église, plafond`, li: [
      `Impôt communal de <span class="num">23,39%</span> (Copenhague) à <span class="num">26,30%</span>, 25,05% en moyenne ; impôt d'Église de 0,38% à 1,30% pour les membres. Taux des 98 communes selon Statistics Denmark (PSKAT).`,
      `Plafond de <span class="num">44,57%</span> sur impôt communal + bundskat + mellemskat (sans impôt d'Église) : au-delà, la mellemskat est réduite. Topskat et toptopskat sont hors plafond : le taux maximal est donc de 57,07% avant AM-bidrag.`,
    ] },
  },
  'ref.couple': {
    en: { h: `5 · Couples`, li: [
      `Spouses are taxed separately. Only the unused personal allowance moves from one spouse to the other.`,
      `Here, your tax = the couple's tax − what the couple would pay if you earned nothing. Unmarried couples are two singles.`,
    ] },
    nl: { h: `5 · Koppels`, li: [
      `Echtgenoten worden apart belast. Alleen de onbenutte persoonlijke aftrek gaat van de ene naar de andere.`,
      `Hier is jouw belasting = de belasting van het koppel − wat het koppel zou betalen als jij niets verdiende. Ongehuwde koppels zijn twee alleenstaanden.`,
    ] },
    fr: { h: `5 · Couples`, li: [
      `Les époux sont imposés séparément. Seul l'abattement personnel inutilisé passe d'un époux à l'autre.`,
      `Ici, votre impôt = l'impôt du couple − ce que paierait le couple si vous ne gagniez rien. Les couples non mariés sont deux personnes seules.`,
    ] },
  },
  'ref.fam': {
    en: { h: `6 · Children`, li: [
      `No tax relief for children. Child benefit per year: <span class="num">kr 21,480</span> (0 to 2), kr 16,992 (3 to 6), kr 13,368 (7 to 17); this page uses kr 13,368.`,
      `It shrinks by <span class="num">2%</span> of each parent's income above kr 961,100. The green check for parents (kr 240 per child, two at most) shrinks by 7.5% above kr 498,200.`,
    ] },
    nl: { h: `6 · Kinderen`, li: [
      `Geen belastingvoordeel voor kinderen. Kinderbijslag per jaar: <span class="num">kr 21.480</span> (0 tot 2), kr 16.992 (3 tot 6), kr 13.368 (7 tot 17); deze pagina gebruikt kr 13.368.`,
      `Hij daalt met <span class="num">2%</span> van het inkomen van elke ouder boven kr 961.100. De groene cheque voor ouders (kr 240 per kind, maximaal twee) daalt met 7,5% boven kr 498.200.`,
    ] },
    fr: { h: `6 · Enfants`, li: [
      `Aucun avantage fiscal pour les enfants. Allocations familiales par an : <span class="num">21 480 kr</span> (0 à 2 ans), 16 992 kr (3 à 6 ans), 13 368 kr (7 à 17 ans) ; cette page utilise 13 368 kr.`,
      `Elles baissent de <span class="num">2%</span> du revenu de chaque parent au-delà de 961 100 kr. Le chèque vert des parents (240 kr par enfant, deux au plus) baisse de 7,5% au-delà de 498 200 kr.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Single rate <span class="num">25%</span>, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × 25 / 125 = <span class="num">20%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Eén tarief van <span class="num">25%</span>, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × 25 / 125 = <span class="num">20%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux unique de <span class="num">25%</span>, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × 25 / 125 = <span class="num">20%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Ministers and MPs`, li: [
      `Ministers (pre-2026 scheme, from 1 April 2026): <span class="num">kr 1,624,503</span>, kr 1,786,953 for finance, foreign and number two, kr 2,030,629 for the Prime Minister, plus a tax-free kr 73,304. Taxed like a salary, no ATP.`,
      `MPs elected before 2026: <span class="num">kr 830,675</span> taxable + kr 73,304 tax-free. First elected in 2026: <span class="num">kr 1,140,700</span>, all taxable.`,
    ] },
    nl: { h: `8 · Ministers en Kamerleden`, li: [
      `Ministers (oude regeling, vanaf 1 april 2026): <span class="num">kr 1.624.503</span>, kr 1.786.953 voor Financiën, Buitenlandse Zaken en nummer twee, kr 2.030.629 voor de premier, plus belastingvrij kr 73.304. Belast als een loon, geen ATP.`,
      `Kamerleden verkozen vóór 2026: <span class="num">kr 830.675</span> belastbaar + kr 73.304 belastingvrij. Voor het eerst verkozen in 2026: <span class="num">kr 1.140.700</span>, volledig belastbaar.`,
    ] },
    fr: { h: `8 · Ministres et députés`, li: [
      `Ministres (ancien régime, au 1er avril 2026) : <span class="num">1 624 503 kr</span>, 1 786 953 kr pour les Finances, les Affaires étrangères et le numéro deux, 2 030 629 kr pour le chef du gouvernement, plus 73 304 kr exonérés. Imposés comme un salaire, sans ATP.`,
      `Députés élus avant 2026 : <span class="num">830 675 kr</span> imposables + 73 304 kr exonérés. Élus pour la première fois en 2026 : <span class="num">1 140 700 kr</span>, entièrement imposables.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Labour-market pension (usually 12% to 17% of pay, partly paid by you and tax-deductible), work-accident insurance, union and unemployment fund fees, commuting deduction, capital income and property taxes.`,
      `The one-off 2026 tax-free check for families, which is based on 2025 income.`,
      `Figures are your final annual tax, not the monthly withholding.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Arbeidsmarktpensioen (meestal 12% tot 17% van het loon, deels door jou betaald en aftrekbaar), arbeidsongevallenverzekering, vakbonds- en werkloosheidskasbijdragen, aftrek voor woon-werkverkeer, kapitaalinkomen en vastgoedbelastingen.`,
      `De eenmalige belastingvrije cheque 2026 voor gezinnen, die op het inkomen van 2025 gebaseerd is.`,
      `De bedragen zijn je uiteindelijke jaarbelasting, niet de maandelijkse voorheffing.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Retraite professionnelle (en général 12% à 17% du salaire, en partie à votre charge et déductible), assurance accidents du travail, cotisations syndicales et de caisse de chômage, déduction pour trajets, revenus du capital et impôts fonciers.`,
      `Le chèque exonéré ponctuel de 2026 pour les familles, calculé sur les revenus 2025.`,
      `Les montants sont votre impôt annuel final, pas la retenue mensuelle.`,
    ] },
  },
  inheritLink: {
    en: `What you'd pay on what you inherit, by relationship →`,
    nl: `Wat je zou betalen op wat je erft, per verwantschap →`,
    fr: `Ce que vous paieriez sur un héritage, par lien de parenté →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your actual tax assessment (årsopgørelse) decides.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je echte belastingafrekening (årsopgørelse) is bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seul votre avis d'imposition (årsopgørelse) fait foi.`,
  },
  'src.skatRates': { en: `Skattestyrelsen: state tax rates 2026`, nl: `Skattestyrelsen: rijksbelasting 2026`, fr: `Skattestyrelsen : impôt d'État 2026` },
  'src.rsm': { en: `RSM: rates and limits 2025/2026`, nl: `RSM: tarieven en grenzen 2025/2026`, fr: `RSM : taux et seuils 2025/2026` },
  'src.themis': { en: `Themis: amounts in tax law 2026`, nl: `Themis: bedragen in de belastingwet 2026`, fr: `Themis : montants fiscaux 2026` },
  'src.besk': { en: `Ministry of Taxation: employment deduction`, nl: `Ministerie van Belastingen: arbeidsaftrek`, fr: `Ministère des Impôts : déduction pour emploi` },
  'src.pskat': { en: `Statistics Denmark: municipal and church tax (PSKAT)`, nl: `Statistics Denmark: gemeente- en kerkbelasting (PSKAT)`, fr: `Statistics Denmark : impôt communal et d'Église (PSKAT)` },
  'src.atp': { en: `borger.dk: ATP rates 2026`, nl: `borger.dk: ATP-tarieven 2026`, fr: `borger.dk : taux ATP 2026` },
  'src.sb': { en: `Virk: employer contribution rates 2026`, nl: `Virk: werkgeversbijdragen 2026`, fr: `Virk : contributions patronales 2026` },
  'src.aes': { en: `Virk: AES rates 2026`, nl: `Virk: AES-tarieven 2026`, fr: `Virk : taux AES 2026` },
  'src.bu': { en: `borger.dk: child benefit`, nl: `borger.dk: kinderbijslag`, fr: `borger.dk : allocations familiales` },
  'src.green': { en: `Skattestyrelsen: green check`, nl: `Skattestyrelsen: groene cheque`, fr: `Skattestyrelsen : chèque vert` },
  'src.vat': { en: `Skattestyrelsen: VAT`, nl: `Skattestyrelsen: btw`, fr: `Skattestyrelsen : TVA` },
  'src.wages': { en: `Statistics Denmark: earnings 2025`, nl: `Statistics Denmark: lonen 2025`, fr: `Statistics Denmark : salaires 2025` },
  'src.minPay': { en: `Prime Minister's Office: ministers' pay`, nl: `Kabinet van de premier: loon van ministers`, fr: `Services du Premier ministre : rémunération des ministres` },
  'src.mpPay': { en: `Folketinget: MPs' terms`, nl: `Folketinget: voorwaarden van Kamerleden`, fr: `Folketinget : conditions des députés` },
  'src.nb': { en: `Danmarks Nationalbank: annual report 2025`, nl: `Danmarks Nationalbank: jaarverslag 2025`, fr: `Danmarks Nationalbank : rapport annuel 2025` },
  'src.dsb': { en: `DSB: remuneration report 2025`, nl: `DSB: vergoedingsrapport 2025`, fr: `DSB : rapport de rémunération 2025` },
  'src.orsted': { en: `Ørsted: remuneration report 2025`, nl: `Ørsted: vergoedingsrapport 2025`, fr: `Ørsted : rapport de rémunération 2025` },
};
