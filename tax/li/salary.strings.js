window.TAX_STRINGS = {
  title: { en: `Liechtenstein Buying Power`, nl: `Koopkracht in Liechtenstein`, fr: `Pouvoir d'achat au Liechtenstein` },
  eyebrow: { en: `Liechtenstein · income year 2026 · employee`, nl: `Liechtenstein · inkomstenjaar 2026 · werknemer`, fr: `Liechtenstein · revenus 2026 · salarié` },
  eyebrowMinister: { en: `Liechtenstein · income year 2026 · member of government`, nl: `Liechtenstein · inkomstenjaar 2026 · regeringslid`, fr: `Liechtenstein · revenus 2026 · membre du gouvernement` },
  lead: {
    en: `Every tax on a Liechtenstein salary in 2026, from what your employer pays to what you can buy.`,
    nl: `Alle belastingen op een loon in Liechtenstein in 2026, van wat je werkgever betaalt tot wat jij ermee kunt kopen.`,
    fr: `Tous les prélèvements sur un salaire au Liechtenstein en 2026, de ce que paie votre employeur à ce que vous pouvez acheter.`,
  },
  salaryPh: { en: `e.g. 7401`, nl: `bv. 7401`, fr: `p. ex. 7401` },

  // Inputs panel
  single: { en: `Single`, nl: `Alleenstaand`, fr: `Seul(e)` },
  coupleHint: {
    en: `Married couples and registered partners file one joint return on the married tariff. Your share is the tax with your pay minus the tax without it.`,
    nl: `Gehuwden en geregistreerde partners doen één gezamenlijke aangifte volgens het tarief voor gehuwden. Jouw deel is de belasting met jouw loon min die zonder.`,
    fr: `Les couples mariés et partenaires enregistrés font une déclaration commune au tarif des mariés. Votre part est l'impôt avec votre salaire moins l'impôt sans.`,
  },
  includePa: { en: `Count child allowance (Kinderzulage)`, nl: `Kinderbijslag (Kinderzulage) meetellen`, fr: `Compter les allocations familiales (Kinderzulage)` },
  commune: { en: `Municipality (Gemeinde)`, nl: `Gemeente (Gemeinde)`, fr: `Commune (Gemeinde)` },
  searchCommune: { en: `Search a municipality`, nl: `Zoek een gemeente`, fr: `Rechercher une commune` },
  searchN: { en: n => `Search ${n} municipalities`, nl: n => `Zoek in ${n} gemeenten`, fr: n => `Rechercher parmi ${n} communes` },
  communesError: {
    en: `Couldn't load the municipality list (communes.js next to this page). Set the surcharge by hand below.`,
    nl: `Kon de lijst met gemeenten niet laden (communes.js naast deze pagina). Stel de toeslag hieronder zelf in.`,
    fr: `Impossible de charger la liste des communes (communes.js à côté de cette page). Réglez la surtaxe à la main ci-dessous.`,
  },
  'area.Oberland': { en: `Oberland`, nl: `Oberland`, fr: `Oberland` },
  'area.Unterland': { en: `Unterland`, nl: `Unterland`, fr: `Unterland` },
  communeHint: {
    en: (r, a) => `Municipal surcharge ${r} of the national tax · ${a}`,
    nl: (r, a) => `Gemeentetoeslag ${r} van de landsbelasting · ${a}`,
    fr: (r, a) => `Surtaxe communale ${r} de l'impôt national · ${a}`,
  },
  localLabel: { en: `Municipal surcharge:`, nl: `Gemeentetoeslag:`, fr: `Surtaxe communale :` },
  vatStandard: { en: `(the standard rate, shared with Switzerland, is 8.1%)`, nl: `(het normale tarief, gedeeld met Zwitserland, is 8,1%)`, fr: `(le taux normal, commun avec la Suisse, est de 8,1%)` },
  lowWageTrap: { en: `Pension plan starts, tax-free minimum ends`, nl: `Pensioenplan start, belastingvrij minimum stopt`, fr: `Début du 2e pilier, fin du minimum exonéré` },
  chartTitle: { en: `Tax and buying power at each salary level`, nl: `Belasting en koopkracht per loonniveau`, fr: `Prélèvements et pouvoir d'achat à chaque niveau de salaire` },
  chartAria: { en: `Tax rate per salary chart`, nl: `Grafiek van het belastingtarief per loon`, fr: `Graphique du taux de prélèvement par salaire` },
  bracketTop: { en: `top rate 8% + surcharge`, nl: `toptarief 8% + toeslag`, fr: `taux maximal 8% + surtaxe` },

  // Minister mode
  ministerOn: { en: `💼 I AM A MINISTER`, nl: `💼 IK BEN MINISTER`, fr: `💼 JE SUIS MINISTRE` },
  'minRole.minister': { en: `Government councillor`, nl: `Regeringsraad`, fr: `Conseiller de gouvernement` },
  'minRole.deputy': { en: `Deputy head of government`, nl: `Vicepremier`, fr: `Vice-chef du gouvernement` },
  'minRole.pm': { en: `Head of government`, nl: `Regeringsleider`, fr: `Chef du gouvernement` },
  ministerHint: {
    en: `Members of the government are paid a salary under the civil service pay law, taxed and insured like any other.`,
    nl: `Regeringsleden krijgen een loon volgens de bezoldigingswet van het overheidspersoneel, belast en verzekerd zoals elk ander loon.`,
    fr: `Les membres du gouvernement touchent un traitement fixé par la loi sur les salaires de la fonction publique, imposé et assuré comme tout salaire.`,
  },
  minSalaryHint: {
    en: `Yearly salary at the 2026 rate, without the expense allowance. Statutory amount by default.`,
    nl: `Jaarloon aan het tarief van 2026, zonder onkostenvergoeding. Standaard het wettelijke bedrag.`,
    fr: `Traitement annuel au taux 2026, sans le forfait de frais. Montant légal par défaut.`,
  },
  'tip.ministerRules': {
    en: top => `The Besoldungsgesetz sets government pay as a share of the top fixed salary of civil service class 20 (${top} in 2026): 123% for the head of government, 116% for the deputy, 108.5% for the other councillors and 101.5% for the government secretary. The salary is taxed like any other, with AHV and pension contributions. The expense allowance set by the Landtag is not counted.`,
    nl: top => `De Besoldungsgesetz legt het loon van de regering vast als deel van het hoogste vaste loon van klasse 20 van het overheidspersoneel (${top} in 2026): 123% voor de regeringsleider, 116% voor de vicepremier, 108,5% voor de andere regeringsraden en 101,5% voor de regeringssecretaris. Het loon wordt belast als elk ander, met AHV- en pensioenbijdragen. De onkostenvergoeding die de Landtag vastlegt, telt niet mee.`,
    fr: top => `La Besoldungsgesetz fixe le traitement du gouvernement en pourcentage du salaire fixe maximal de la classe 20 de la fonction publique (${top} en 2026) : 123% pour le chef du gouvernement, 116% pour son suppléant, 108,5% pour les autres conseillers et 101,5% pour le secrétaire du gouvernement. Le traitement est imposé comme tout salaire, avec les cotisations AHV et de prévoyance. Le forfait de frais fixé par le Landtag n'est pas compté.`,
  },
  'bd.minGross': { en: `Government salary`, nl: `Regeringsloon`, fr: `Traitement gouvernemental` },
  'bd.stateCost': { en: `Total paid by the State`, nl: `Totaal betaald door de staat`, fr: `Total payé par l'État` },
  'tip.minGross': {
    en: (pm, dep, min) => `${pm} a year for the head of government, ${dep} for the deputy, ${min} for the other councillors.`,
    nl: (pm, dep, min) => `${pm} per jaar voor de regeringsleider, ${dep} voor de vicepremier, ${min} voor de andere regeringsraden.`,
    fr: (pm, dep, min) => `${pm} par an pour le chef du gouvernement, ${dep} pour son suppléant, ${min} pour les autres conseillers.`,
  },
  'tip.stateCost': {
    en: `The salary + the employer contributions and pension share the State pays on it, + its health insurance contribution. The work and full tax rates are measured against it.`,
    nl: `Het loon + de werkgeversbijdragen en het pensioendeel die de staat erop betaalt, + zijn bijdrage aan de ziekteverzekering. De belasting op arbeid en de totale belasting worden hieraan afgemeten.`,
    fr: `Le traitement + les cotisations patronales et la part de prévoyance que l'État paie dessus, + sa contribution à l'assurance maladie. La taxation du travail et la taxation totale sont calculées sur ce montant.`,
  },

  // Politicians on the chart
  'stat.pm': { en: `Head of government`, nl: `Regeringsleider`, fr: `Chef du gouvernement` },
  'stat.deputy': { en: `Deputy head of government`, nl: `Vicepremier`, fr: `Vice-chef du gouvernement` },
  'stat.minister': { en: `Government councillor`, nl: `Regeringsraad`, fr: `Conseiller de gouvernement` },
  'stat.secretary': { en: `Government secretary`, nl: `Regeringssecretaris`, fr: `Secrétaire du gouvernement` },
  'pol.stat.pm': { en: `123% of the top of pay class 20`, nl: `123% van de top van loonklasse 20`, fr: `123% du maximum de la classe 20` },
  'pol.stat.deputy': { en: `116% of the top of pay class 20`, nl: `116% van de top van loonklasse 20`, fr: `116% du maximum de la classe 20` },
  'pol.stat.minister': { en: `108.5% of the top of pay class 20`, nl: `108,5% van de top van loonklasse 20`, fr: `108,5% du maximum de la classe 20` },
  'pol.stat.secretary': { en: `101.5% of the top of pay class 20`, nl: `101,5% van de top van loonklasse 20`, fr: `101,5% du maximum de la classe 20` },
  'polNote.minister': {
    en: `Taxed exactly like a salary: same contributions and deductions. The head sits at the employee salary with the same net, with your settings; the dot is the actual salary.`,
    nl: `Belast precies zoals een loon: dezelfde bijdragen en aftrekken. Het hoofdje staat bij het werknemersloon met hetzelfde netto, met jouw instellingen; het bolletje is het echte loon.`,
    fr: `Imposé exactement comme un salaire : mêmes cotisations et déductions. La tête est au salaire d'un salarié au même net, avec vos réglages ; le point est le traitement réel.`,
  },
  'polTipNote.pm': {
    en: `Statutory maximum salary under the Besoldungsgesetz, Art. 34. The expense allowance is not included.`,
    nl: `Wettelijk maximumloon volgens de Besoldungsgesetz, art. 34. De onkostenvergoeding zit er niet in.`,
    fr: `Traitement maximal légal selon la Besoldungsgesetz, art. 34. Le forfait de frais n'est pas inclus.`,
  },
  'polTipNote.deputy': {
    en: `Statutory maximum salary under the Besoldungsgesetz, Art. 34. The expense allowance is not included.`,
    nl: `Wettelijk maximumloon volgens de Besoldungsgesetz, art. 34. De onkostenvergoeding zit er niet in.`,
    fr: `Traitement maximal légal selon la Besoldungsgesetz, art. 34. Le forfait de frais n'est pas inclus.`,
  },
  'polTipNote.minister': {
    en: `Statutory maximum salary under the Besoldungsgesetz, Art. 34. A councillor with a reduced workload is paid pro rata.`,
    nl: `Wettelijk maximumloon volgens de Besoldungsgesetz, art. 34. Een regeringsraad met een verminderde opdracht krijgt naar rato.`,
    fr: `Traitement maximal légal selon la Besoldungsgesetz, art. 34. Un conseiller à temps réduit est payé au prorata.`,
  },
  'polTipNote.secretary': {
    en: `The government secretary heads the government chancery; statutory maximum salary under the Besoldungsgesetz, Art. 34.`,
    nl: `De regeringssecretaris leidt de regeringskanselarij; wettelijk maximumloon volgens de Besoldungsgesetz, art. 34.`,
    fr: `Le secrétaire du gouvernement dirige la chancellerie ; traitement maximal légal selon la Besoldungsgesetz, art. 34.`,
  },
  polNote: {
    en: links => `Hover a name for details, click to zoom to them. Yearly gross, shown on the chart as yearly ÷ months paid. Members of the government are taxed like employees, so they sit where an employee earns the same net. Landtag members are paid per sitting and are not shown. Pay: ${links}.`,
    nl: links => `Beweeg over een naam voor details, klik om ernaar te zoomen. Jaarlijks bruto, op de grafiek als jaarbedrag ÷ betaalde maanden. Regeringsleden worden belast als werknemers en staan dus waar een werknemer hetzelfde netto verdient. Leden van de Landtag krijgen zitpenningen en staan er niet op. Lonen: ${links}.`,
    fr: links => `Survolez un nom pour les détails, cliquez pour zoomer. Brut annuel, placé sur le graphique en montant annuel ÷ mois payés. Les membres du gouvernement sont imposés comme des salariés : ils sont placés là où un salarié gagne le même net. Les députés du Landtag sont payés à la séance et ne figurent pas ici. Traitements : ${links}.`,
  },

  trapTitle: { en: (a, b) => `Why so high between ${a} and ${b}?`, nl: (a, b) => `Waarom zo hoog tussen ${a} en ${b}?`, fr: (a, b) => `Pourquoi si élevé entre ${a} et ${b} ?` },
  trapBody: {
    en: (a, b, fee) => `From ${a} your employer must insure you in an occupational pension plan, on your whole wage from the first franc: at the legal minimum that is about ${fee} a year at once from you, and as much from the employer. Up to ${b} your whole income stays tax-free (the Existenzminimum); one franc above it, the full tax applies at once.`,
    nl: (a, b, fee) => `Vanaf ${a} moet je werkgever je verzekeren in een bedrijfspensioenplan, op je hele loon vanaf de eerste frank: op het wettelijke minimum is dat in één keer ongeveer ${fee} per jaar van jou, en evenveel van de werkgever. Tot ${b} blijft je hele inkomen belastingvrij (het Existenzminimum); één frank daarboven geldt meteen de volle belasting.`,
    fr: (a, b, fee) => `À partir de ${a}, votre employeur doit vous assurer dans un plan de prévoyance professionnelle, sur tout le salaire dès le premier franc : au minimum légal, cela fait d'un coup environ ${fee} par an de votre part, et autant pour l'employeur. Jusqu'à ${b}, tout votre revenu reste exonéré (l'Existenzminimum) ; un franc de plus et l'impôt complet s'applique d'un coup.`,
  },
  topTitle: { en: top => `Why the step at ${top}?`, nl: top => `Waarom de sprong bij ${top}?`, fr: top => `Pourquoi la marche à ${top} ?` },
  topBody: {
    en: (top, r, br) => `From ${top} your taxable income passes ${br} and the national tax reaches its top rate of 8%. With the municipal surcharge on top, each extra franc of taxable income pays ${r} in income tax. Above this, the rate on the next franc stays flat.`,
    nl: (top, r, br) => `Vanaf ${top} komt je belastbaar inkomen boven ${br} en bereikt de landsbelasting haar toptarief van 8%. Met de gemeentetoeslag erbovenop betaalt elke extra frank belastbaar inkomen ${r} inkomstenbelasting. Daarboven blijft het tarief op de volgende frank gelijk.`,
    fr: (top, r, br) => `À partir de ${top}, votre revenu imposable dépasse ${br} et l'impôt national atteint son taux maximal de 8%. Avec la surtaxe communale, chaque franc imposable en plus paie ${r} d'impôt sur le revenu. Au-delà, le taux sur le franc suivant reste fixe.`,
  },

  // Tax components
  'comp.er': { en: `Employer AHV/IV/FAK/ALV`, nl: `Werkgeversbijdragen AHV/IV/FAK/ALV`, fr: `Cotisations patronales AHV/IV/FAK/ALV` },
  'comp.bpvgEr': { en: `Employer pension plan (BPVG)`, nl: `Werkgeversdeel bedrijfspensioen (BPVG)`, fr: `Part patronale de prévoyance (BPVG)` },
  'comp.ee': { en: `Employee AHV/IV/FAK/ALV`, nl: `Werknemersbijdragen AHV/IV/FAK/ALV`, fr: `Cotisations salariales AHV/IV/FAK/ALV` },
  'comp.bpvg': { en: `Your pension plan (BPVG)`, nl: `Jouw bedrijfspensioen (BPVG)`, fr: `Votre prévoyance professionnelle (BPVG)` },
  'comp.land': { en: `National income tax (Landessteuer)`, nl: `Landsbelasting (Landessteuer)`, fr: `Impôt national (Landessteuer)` },
  'comp.gem': { en: `Municipal surcharge (Gemeindezuschlag)`, nl: `Gemeentetoeslag (Gemeindezuschlag)`, fr: `Surtaxe communale (Gemeindezuschlag)` },
  'comp.kz': { en: `Child allowance (Kinderzulage)`, nl: `Kinderbijslag (Kinderzulage)`, fr: `Allocations familiales (Kinderzulage)` },
  kzReceived: { en: `+ Child allowance, paid by the FAK`, nl: `+ Kinderbijslag, betaald door de FAK`, fr: `+ Allocations familiales, versées par la FAK` },
  'bd.kk': { en: `Employer health insurance contribution`, nl: `Werkgeversbijdrage ziekteverzekering`, fr: `Contribution patronale à l'assurance maladie` },
  'bd.grossHh': { en: `Household gross pay`, nl: `Brutoloon van het gezin`, fr: `Salaire brut du ménage` },
  'bd.prof': { en: `Work expenses, flat`, nl: `Beroepskosten, forfait`, fr: `Frais professionnels, forfait` },
  'bd.contrib': { en: `Own AHV/ALV and pension contributions`, nl: `Eigen AHV/ALV- en pensioenbijdragen`, fr: `Cotisations AHV/ALV et prévoyance propres` },
  'bd.ins': { en: `Insurance premiums`, nl: `Verzekeringspremies`, fr: `Primes d'assurance` },
  'bd.kids': { en: `Child deduction`, nl: `Aftrek voor kinderen`, fr: `Déduction pour enfants` },
  'bd.taxable': { en: `Taxable income (Erwerb)`, nl: `Belastbaar inkomen (Erwerb)`, fr: `Revenu imposable (Erwerb)` },
  'bd.taxableHh': { en: `Taxable income of the household`, nl: `Belastbaar inkomen van het gezin`, fr: `Revenu imposable du ménage` },
  'bd.exempt': { en: `Below the tax-free minimum: no tax`, nl: `Onder het belastingvrije minimum: geen belasting`, fr: `Sous le minimum exonéré : pas d'impôt` },
  'bd.landShare': { en: `National income tax, your share`, nl: `Landsbelasting, jouw deel`, fr: `Impôt national, votre part` },
  'bd.gemShare': { en: `Municipal surcharge, your share`, nl: `Gemeentetoeslag, jouw deel`, fr: `Surtaxe communale, votre part` },

  // Tooltips
  'tip.f12': {
    en: `12 monthly salaries. Many employers in Liechtenstein pay a 13th salary instead: the yearly total is what counts for tax and contributions.`,
    nl: `12 maandlonen. Veel werkgevers in Liechtenstein betalen een 13e maand: voor belasting en bijdragen telt het jaartotaal.`,
    fr: `12 salaires mensuels. Beaucoup d'employeurs au Liechtenstein versent un 13e salaire : c'est le total annuel qui compte pour l'impôt et les cotisations.`,
  },
  'tip.f13': {
    en: `13 monthly salaries, the 13th usually paid in November or December. Same yearly rules.`,
    nl: `13 maandlonen, de 13e meestal betaald in november of december. Dezelfde jaarregels.`,
    fr: `13 salaires mensuels, le 13e versé en général en novembre ou décembre. Mêmes règles annuelles.`,
  },
  'tip.jointH': { en: `Couples`, nl: `Koppels`, fr: `Couples` },
  'tip.joint': {
    en: `Spouses and registered partners are assessed together on the married tariff, with a double tax-free amount (CHF 31,710) and brackets twice as wide. Unmarried couples file separately. A single parent gets its own tariff with a 50% wider band.`,
    nl: `Echtgenoten en geregistreerde partners worden samen belast volgens het tarief voor gehuwden, met een dubbel belastingvrij bedrag (CHF 31.710) en dubbel zo brede schijven. Ongehuwde koppels doen elk een aangifte. Een alleenstaande ouder krijgt een eigen tarief met 50% bredere schijven.`,
    fr: `Les époux et partenaires enregistrés sont imposés ensemble au tarif des mariés, avec un montant exonéré doublé (CHF 31 710) et des tranches deux fois plus larges. Les couples non mariés déclarent séparément. Un parent seul a son propre tarif, avec des tranches 50% plus larges.`,
  },
  'tip.kzToggle': {
    en: `The family compensation fund pays the child allowance for every child of a resident, whatever your income. It doesn't change with your pay, so it lowers your average rate but not the rate on the next franc.`,
    nl: `Het gezinsfonds betaalt de kinderbijslag voor elk kind van een inwoner, ongeacht je inkomen. Het verandert niet met je loon: het verlaagt je gemiddelde tarief, niet het tarief op de volgende frank.`,
    fr: `La caisse de compensation familiale verse les allocations pour chaque enfant d'un résident, quel que soit le revenu. Elles ne varient pas avec le salaire : elles baissent votre taux moyen, pas le taux sur le franc suivant.`,
  },
  'tip.localRule': {
    en: `Each municipality adds a surcharge to the national income tax, set every year by its council between 150% and 250% of the national tax. In practice all 11 are between 150% and 160%. Pick your municipality above or set it here.`,
    nl: `Elke gemeente heft een toeslag op de landsbelasting, elk jaar door de gemeenteraad bepaald tussen 150% en 250% van de landsbelasting. In de praktijk liggen alle 11 tussen 150% en 160%. Kies je gemeente hierboven of stel ze hier in.`,
    fr: `Chaque commune ajoute une surtaxe à l'impôt national, fixée chaque année par son conseil entre 150% et 250% de l'impôt national. En pratique, les 11 communes sont entre 150% et 160%. Choisissez votre commune ci-dessus ou réglez-la ici.`,
  },
  'tip.costShort': { en: `Gross salary + employer contributions + employer health insurance contribution.`, nl: `Brutoloon + werkgeversbijdragen + werkgeversbijdrage ziekteverzekering.`, fr: `Salaire brut + cotisations patronales + contribution patronale à l'assurance maladie.` },
  'tip.er': {
    en: cap => `Paid by your employer on top of your gross salary: AHV 4.225%, IV 0.675%, family fund (FAK) 1.9% and administration 0.585% on the whole wage, plus unemployment insurance (ALV) 0.5% up to ${cap}.`,
    nl: cap => `Betaald door je werkgever bovenop je brutoloon: AHV 4,225%, IV 0,675%, gezinsfonds (FAK) 1,9% en administratie 0,585% op het hele loon, plus werkloosheidsverzekering (ALV) 0,5% tot ${cap}.`,
    fr: cap => `Payées par votre employeur en plus du salaire brut : AHV 4,225%, IV 0,675%, caisse familiale (FAK) 1,9% et frais d'administration 0,585% sur tout le salaire, plus l'assurance chômage (ALV) 0,5% jusqu'à ${cap}.`,
  },
  'tip.ee': {
    en: cap => `Withheld from your pay: AHV 4.025%, IV 0.675% and, new in 2026 to fund paid parental leave, FAK 0.2% on the whole wage, plus ALV 0.5% up to ${cap}. They are fully deductible from taxable income.`,
    nl: cap => `Ingehouden op je loon: AHV 4,025%, IV 0,675% en, nieuw in 2026 voor het betaalde ouderschapsverlof, FAK 0,2% op het hele loon, plus ALV 0,5% tot ${cap}. Ze zijn volledig aftrekbaar van het belastbaar inkomen.`,
    fr: cap => `Retenues sur votre salaire : AHV 4,025%, IV 0,675% et, nouveauté 2026 pour financer le congé parental payé, FAK 0,2% sur tout le salaire, plus ALV 0,5% jusqu'à ${cap}. Elles sont entièrement déductibles du revenu imposable.`,
  },
  'tip.bpvg': {
    en: (entry, cap) => `Occupational pension (2nd pillar) is compulsory from ${entry} a year. Unlike Switzerland, there is no coordination deduction: the whole AHV wage is insured, up to at least ${cap}. The law requires at least 8% for retirement savings, half paid by the employer; risk premiums come on top and vary by fund. Your share is deductible from taxable income.`,
    nl: (entry, cap) => `Het bedrijfspensioen (2e pijler) is verplicht vanaf ${entry} per jaar. Anders dan in Zwitserland is er geen coördinatieaftrek: het hele AHV-loon is verzekerd, tot minstens ${cap}. De wet vraagt minstens 8% voor het pensioensparen, de helft betaald door de werkgever; risicopremies komen erbovenop en verschillen per fonds. Jouw deel is aftrekbaar van het belastbaar inkomen.`,
    fr: (entry, cap) => `La prévoyance professionnelle (2e pilier) est obligatoire dès ${entry} par an. Contrairement à la Suisse, il n'y a pas de déduction de coordination : tout le salaire AHV est assuré, jusqu'à au moins ${cap}. La loi impose au moins 8% d'épargne retraite, dont la moitié à charge de l'employeur ; les primes de risque s'y ajoutent et varient selon la caisse. Votre part est déductible du revenu imposable.`,
  },
  'tip.bpvgEr': {
    en: `The employer pays at least half of the pension plan contributions. Shown at the legal minimum of 8% split evenly; many plans pay more.`,
    nl: `De werkgever betaalt minstens de helft van de pensioenbijdragen. Getoond aan het wettelijke minimum van 8%, gelijk verdeeld; veel plannen betalen meer.`,
    fr: `L'employeur paie au moins la moitié des cotisations de prévoyance. Montré au minimum légal de 8%, réparti à parts égales ; beaucoup de plans paient davantage.`,
  },
  'tip.kk': {
    en: (m, y) => `Employers must pay half of the national average health insurance premium to each employee: ${m} a month for adults in 2026 (${y} a year full-time). It is not salary: no AHV, no income tax. It goes towards your compulsory health insurance premium, which is not counted here, so it shows as part of your net.`,
    nl: (m, y) => `Werkgevers moeten elke werknemer de helft van de gemiddelde ziekteverzekeringspremie betalen: ${m} per maand voor volwassenen in 2026 (${y} per jaar voltijds). Het is geen loon: geen AHV, geen inkomstenbelasting. Het dient voor je verplichte ziekteverzekeringspremie, die hier niet meetelt, dus het staat bij je netto.`,
    fr: (m, y) => `L'employeur doit verser à chaque salarié la moitié de la prime moyenne d'assurance maladie : ${m} par mois pour un adulte en 2026 (${y} par an à temps plein). Ce n'est pas du salaire : ni AHV, ni impôt. Elle sert à payer votre prime d'assurance maladie obligatoire, non comptée ici, et apparaît donc dans votre net.`,
  },
  'tip.prof': {
    en: v => `A flat ${v} for work expenses per employee. Higher actual commuting and meal costs can be claimed instead, not modelled here.`,
    nl: v => `Een forfait van ${v} voor beroepskosten per werknemer. Hogere werkelijke kosten voor woon-werkverkeer en maaltijden kunnen in de plaats, niet gemodelleerd.`,
    fr: v => `Un forfait de ${v} pour frais professionnels par salarié. Des frais réels de trajet et de repas plus élevés peuvent être déduits à la place, non modélisés ici.`,
  },
  'tip.contrib': {
    en: `Your own AHV, IV, FAK and ALV contributions and your pension plan contributions are deducted in full (pension: up to 18% of income).`,
    nl: `Je eigen AHV-, IV-, FAK- en ALV-bijdragen en je pensioenbijdragen worden volledig afgetrokken (pensioen: tot 18% van het inkomen).`,
    fr: `Vos cotisations AHV, IV, FAK et ALV et vos cotisations de prévoyance sont entièrement déduites (prévoyance : jusqu'à 18% du revenu).`,
  },
  'tip.ins': {
    en: (one, two) => `Health, life and accident premiums you pay, up to ${one} a year, ${two} for a married couple. Health premiums for an adult are above the cap, so the full amount is assumed. Children under 16 pay no premium.`,
    nl: (one, two) => `Premies voor ziekte-, levens- en ongevallenverzekering die je betaalt, tot ${one} per jaar, ${two} voor een gehuwd koppel. De ziektepremie van een volwassene ligt boven het plafond, dus het volle bedrag wordt aangenomen. Kinderen onder 16 betalen geen premie.`,
    fr: (one, two) => `Primes d'assurance maladie, vie et accident payées, jusqu'à ${one} par an, ${two} pour un couple marié. La prime maladie d'un adulte dépasse le plafond, le montant entier est donc retenu. Les enfants de moins de 16 ans ne paient pas de prime.`,
  },
  'tip.kids': {
    en: v => `${v} per minor child, or adult child in education, taken from taxable income.`,
    nl: v => `${v} per minderjarig kind, of meerderjarig kind in opleiding, afgetrokken van het belastbaar inkomen.`,
    fr: v => `${v} par enfant mineur, ou majeur en formation, déduits du revenu imposable.`,
  },
  'tip.taxable': {
    en: `Gross pay − flat work expenses − own contributions − insurance premiums − child deduction. For a married couple, both incomes together. Wealth would add a notional 4% yield here; it is left out.`,
    nl: `Brutoloon − forfaitaire beroepskosten − eigen bijdragen − verzekeringspremies − aftrek voor kinderen. Voor een gehuwd koppel beide inkomens samen. Vermogen zou hier een fictief rendement van 4% toevoegen; dat is weggelaten.`,
    fr: `Salaire brut − forfait de frais − cotisations propres − primes d'assurance − déduction pour enfants. Pour un couple marié, les deux revenus ensemble. La fortune ajouterait ici un rendement fictif de 4% ; elle est laissée de côté.`,
  },
  'tip.exempt': {
    en: (a, b, c, k) => `If your gross income is no more than the subsistence minimum, it is entirely tax-free: ${a} a month for a single person, ${b} for a single parent, ${c} for a married couple, plus ${k} per child (aged 6 to 11 assumed). Above it the normal tariff applies to all of it.`,
    nl: (a, b, c, k) => `Is je bruto-inkomen niet hoger dan het bestaansminimum, dan is het volledig belastingvrij: ${a} per maand voor een alleenstaande, ${b} voor een alleenstaande ouder, ${c} voor een gehuwd koppel, plus ${k} per kind (6 tot 11 jaar aangenomen). Daarboven geldt het gewone tarief op alles.`,
    fr: (a, b, c, k) => `Si votre revenu brut ne dépasse pas le minimum vital, il est entièrement exonéré : ${a} par mois pour une personne seule, ${b} pour un parent seul, ${c} pour un couple marié, plus ${k} par enfant (âge de 6 à 11 ans supposé). Au-delà, le tarif normal s'applique à tout.`,
  },
  'tip.exemptCalc': {
    en: (g, lim) => `Gross ${g} a year, limit ${lim}.`,
    nl: (g, lim) => `Bruto ${g} per jaar, grens ${lim}.`,
    fr: (g, lim) => `Brut ${g} par an, limite ${lim}.`,
  },
  'tip.land.a': {
    en: `Single tariff: nothing up to CHF 15,855 of taxable income, then 1%, 3%, 4%, 5%, 6%, 6.5% and 7% by band, and 8% above CHF 211,400.`,
    nl: `Tarief voor alleenstaanden: niets tot CHF 15.855 belastbaar inkomen, daarna 1%, 3%, 4%, 5%, 6%, 6,5% en 7% per schijf, en 8% boven CHF 211.400.`,
    fr: `Tarif des personnes seules : rien jusqu'à CHF 15 855 de revenu imposable, puis 1%, 3%, 4%, 5%, 6%, 6,5% et 7% par tranche, et 8% au-delà de CHF 211 400.`,
  },
  'tip.land.b': {
    en: `Single-parent tariff: the same rates on bands 1.5 times wider, nothing up to CHF 23,783, 8% above CHF 317,100.`,
    nl: `Tarief voor alleenstaande ouders: dezelfde tarieven op 1,5 keer bredere schijven, niets tot CHF 23.783, 8% boven CHF 317.100.`,
    fr: `Tarif des parents seuls : les mêmes taux sur des tranches 1,5 fois plus larges, rien jusqu'à CHF 23 783, 8% au-delà de CHF 317 100.`,
  },
  'tip.land.c': {
    en: `Married tariff: the same rates on bands twice as wide, nothing up to CHF 31,710, 8% above CHF 422,800.`,
    nl: `Tarief voor gehuwden: dezelfde tarieven op dubbel zo brede schijven, niets tot CHF 31.710, 8% boven CHF 422.800.`,
    fr: `Tarif des mariés : les mêmes taux sur des tranches deux fois plus larges, rien jusqu'à CHF 31 710, 8% au-delà de CHF 422 800.`,
  },
  'tip.landCalc': {
    en: (ti, r, v) => `On ${ti}, marginal rate ${r}: <b>${v}</b>.`,
    nl: (ti, r, v) => `Op ${ti}, marginaal tarief ${r}: <b>${v}</b>.`,
    fr: (ti, r, v) => `Sur ${ti}, taux marginal ${r} : <b>${v}</b>.`,
  },
  'tip.share': {
    en: v => `Your share (household with your pay minus without it): <b>${v}</b>.`,
    nl: v => `Jouw deel (gezin met jouw loon min zonder): <b>${v}</b>.`,
    fr: v => `Votre part (ménage avec votre salaire moins sans) : <b>${v}</b>.`,
  },
  'tip.gem': {
    en: (name, r) => `${name ? name + ': ' : ''}${r} of the national tax, paid on top of it. A 150% surcharge turns the 8% top rate into 20%.`,
    nl: (name, r) => `${name ? name + ': ' : ''}${r} van de landsbelasting, erbovenop betaald. Een toeslag van 150% maakt van het toptarief van 8% 20%.`,
    fr: (name, r) => `${name ? name + ' : ' : ''}${r} de l'impôt national, payés en plus. Une surtaxe de 150% porte le taux maximal de 8% à 20%.`,
  },
  'tip.kz': {
    en: (a, b, c) => `${a} a month per child, ${b} from age 10 or for every child once there are three. Single parents get ${c} more per child. Tax-free, paid whatever your income; a couple counts half here.`,
    nl: (a, b, c) => `${a} per maand per kind, ${b} vanaf 10 jaar of voor elk kind vanaf drie kinderen. Alleenstaande ouders krijgen ${c} extra per kind. Belastingvrij, ongeacht je inkomen; een koppel telt hier de helft.`,
    fr: (a, b, c) => `${a} par mois par enfant, ${b} dès 10 ans ou pour chaque enfant à partir de trois. Les parents seuls touchent ${c} de plus par enfant. Exonérées, versées quel que soit le revenu ; un couple en compte la moitié ici.`,
  },
  'tip.vatM': {
    en: `The 2.6% rate (food, books, medicine), 3.8% on hotels and VAT-free spending such as rent are left out, so this is an upper bound.`,
    nl: `Het tarief van 2,6% (voeding, boeken, geneesmiddelen), 3,8% op hotels en btw-vrije uitgaven zoals huur zijn niet meegerekend, dus dit is een bovengrens.`,
    fr: `Le taux de 2,6% (alimentation, livres, médicaments), 3,8% sur l'hôtellerie et les dépenses sans TVA comme le loyer ne sont pas pris en compte : c'est donc un maximum.`,
  },
  'tip.net': {
    en: calc => `What lands in your bank account over the year${calc}. Gross − contributions − income tax + child allowance if counted + the employer's health insurance contribution.`,
    nl: calc => `Wat er over het jaar op je rekening komt${calc}. Bruto − bijdragen − inkomstenbelasting + kinderbijslag als die meetelt + de werkgeversbijdrage voor de ziekteverzekering.`,
    fr: calc => `Ce qui arrive sur votre compte sur l'année${calc}. Brut − cotisations − impôt sur le revenu + allocations familiales si comptées + la contribution patronale à l'assurance maladie.`,
  },

  // Rules used
  refEyebrow: {
    en: `Rules used · income year 2026 (assessed in 2027)`,
    nl: `Gebruikte regels · inkomstenjaar 2026 (aanslag in 2027)`,
    fr: `Règles utilisées · revenus 2026 (imposés en 2027)`,
  },
  'ref.social': {
    en: { h: `1 · AHV, IV, FAK, ALV`, li: [
      `Employee <span class="num">5.4%</span>: AHV 4.025%, IV 0.675%, FAK 0.2% (new in 2026), ALV 0.5%.`,
      `Employer <span class="num">7.885%</span>: AHV 4.225%, IV 0.675%, FAK 1.9%, administration 0.585%, ALV 0.5%.`,
      `No ceiling, except ALV on pay up to CHF 126,000. Employer health insurance contribution CHF 180.50 a month.`,
    ] },
    nl: { h: `1 · AHV, IV, FAK, ALV`, li: [
      `Werknemer <span class="num">5,4%</span>: AHV 4,025%, IV 0,675%, FAK 0,2% (nieuw in 2026), ALV 0,5%.`,
      `Werkgever <span class="num">7,885%</span>: AHV 4,225%, IV 0,675%, FAK 1,9%, administratie 0,585%, ALV 0,5%.`,
      `Geen plafond, behalve ALV op het loon tot CHF 126.000. Werkgeversbijdrage ziekteverzekering CHF 180,50 per maand.`,
    ] },
    fr: { h: `1 · AHV, IV, FAK, ALV`, li: [
      `Salarié <span class="num">5,4%</span> : AHV 4,025%, IV 0,675%, FAK 0,2% (nouveau en 2026), ALV 0,5%.`,
      `Employeur <span class="num">7,885%</span> : AHV 4,225%, IV 0,675%, FAK 1,9%, administration 0,585%, ALV 0,5%.`,
      `Sans plafond, sauf l'ALV sur le salaire jusqu'à CHF 126 000. Contribution patronale à l'assurance maladie CHF 180,50 par mois.`,
    ] },
  },
  'ref.bpvg': {
    en: { h: `2 · Occupational pension (BPVG)`, li: [
      `Compulsory from <span class="num">CHF 14,700</span> a year, on the whole wage up to at least CHF 88,200.`,
      `At least <span class="num">8%</span> for retirement savings, employer at least half: 4% + 4% modelled. Risk premiums not included.`,
    ] },
    nl: { h: `2 · Bedrijfspensioen (BPVG)`, li: [
      `Verplicht vanaf <span class="num">CHF 14.700</span> per jaar, op het hele loon tot minstens CHF 88.200.`,
      `Minstens <span class="num">8%</span> pensioensparen, werkgever minstens de helft: 4% + 4% gemodelleerd. Risicopremies niet meegerekend.`,
    ] },
    fr: { h: `2 · Prévoyance professionnelle (BPVG)`, li: [
      `Obligatoire dès <span class="num">CHF 14 700</span> par an, sur tout le salaire jusqu'à au moins CHF 88 200.`,
      `Au moins <span class="num">8%</span> d'épargne retraite, dont la moitié au moins par l'employeur : 4% + 4% modélisés. Primes de risque non comprises.`,
    ] },
  },
  'ref.tax': {
    en: br => ({ h: `3 · National income tax (Landessteuer)`, li: [
      `Single tariff on taxable income, marginal rates:${br}`,
      `Single parents: bands × 1.5 (tax-free CHF 23,783). Married couples: bands × 2 (tax-free CHF 31,710).`,
      `Whole income tax-free if gross pay is at most CHF 2,100 a month (single), 2,600 (single parent), 3,200 (couple), + 300 to 600 per child.`,
    ] }),
    nl: br => ({ h: `3 · Landsbelasting (Landessteuer)`, li: [
      `Tarief voor alleenstaanden op het belastbaar inkomen, marginale tarieven:${br}`,
      `Alleenstaande ouders: schijven × 1,5 (belastingvrij CHF 23.783). Gehuwden: schijven × 2 (belastingvrij CHF 31.710).`,
      `Hele inkomen belastingvrij als het brutoloon hoogstens CHF 2.100 per maand is (alleenstaand), 2.600 (alleenstaande ouder), 3.200 (koppel), + 300 tot 600 per kind.`,
    ] }),
    fr: br => ({ h: `3 · Impôt national (Landessteuer)`, li: [
      `Tarif des personnes seules sur le revenu imposable, taux marginaux :${br}`,
      `Parents seuls : tranches × 1,5 (exonéré jusqu'à CHF 23 783). Couples mariés : tranches × 2 (exonéré jusqu'à CHF 31 710).`,
      `Revenu entièrement exonéré si le salaire brut ne dépasse pas CHF 2 100 par mois (seul), 2 600 (parent seul), 3 200 (couple), + 300 à 600 par enfant.`,
    ] }),
  },
  'ref.deductions': {
    en: { h: `4 · Deductions`, li: [
      `Work expenses flat <span class="num">CHF 1,600</span> per employee. Own AHV/IV/FAK/ALV in full; pension contributions up to 18% of income.`,
      `Insurance premiums up to <span class="num">CHF 3,700</span> (CHF 7,400 for a married couple). <span class="num">CHF 12,700</span> per child.`,
    ] },
    nl: { h: `4 · Aftrekken`, li: [
      `Forfaitaire beroepskosten <span class="num">CHF 1.600</span> per werknemer. Eigen AHV/IV/FAK/ALV volledig; pensioenbijdragen tot 18% van het inkomen.`,
      `Verzekeringspremies tot <span class="num">CHF 3.700</span> (CHF 7.400 voor een gehuwd koppel). <span class="num">CHF 12.700</span> per kind.`,
    ] },
    fr: { h: `4 · Déductions`, li: [
      `Forfait de frais professionnels <span class="num">CHF 1 600</span> par salarié. AHV/IV/FAK/ALV propres en entier ; prévoyance jusqu'à 18% du revenu.`,
      `Primes d'assurance jusqu'à <span class="num">CHF 3 700</span> (CHF 7 400 pour un couple marié). <span class="num">CHF 12 700</span> par enfant.`,
    ] },
  },
  'ref.communes': {
    en: { h: `5 · Municipal surcharge`, li: [
      `Each council sets it between <span class="num">150%</span> and <span class="num">250%</span> of the national tax. For tax year 2025: 150% in Vaduz, Schaan, Balzers, Triesen, Triesenberg, Planken, Gamprin and Schellenberg; <span class="num">160%</span> in Eschen, Mauren and Ruggell.`,
      `Councils fix the rate for a tax year in November of that year, with the next budget: the 2026 rates are not known yet, so the 2025 ones are used. Ruggell plans 155% next, Eschen 150% from 2027.`,
    ] },
    nl: { h: `5 · Gemeentetoeslag`, li: [
      `Elke gemeenteraad bepaalt hem tussen <span class="num">150%</span> en <span class="num">250%</span> van de landsbelasting. Voor belastingjaar 2025: 150% in Vaduz, Schaan, Balzers, Triesen, Triesenberg, Planken, Gamprin en Schellenberg; <span class="num">160%</span> in Eschen, Mauren en Ruggell.`,
      `De raden leggen het tarief voor een belastingjaar vast in november van dat jaar, met de volgende begroting: de tarieven voor 2026 zijn nog niet bekend, dus die van 2025 worden gebruikt. Ruggell plant 155% hierna, Eschen 150% vanaf 2027.`,
    ] },
    fr: { h: `5 · Surtaxe communale`, li: [
      `Chaque conseil la fixe entre <span class="num">150%</span> et <span class="num">250%</span> de l'impôt national. Pour l'année fiscale 2025 : 150% à Vaduz, Schaan, Balzers, Triesen, Triesenberg, Planken, Gamprin et Schellenberg ; <span class="num">160%</span> à Eschen, Mauren et Ruggell.`,
      `Les conseils fixent le taux d'une année fiscale en novembre de cette année, avec le budget suivant : les taux 2026 ne sont pas encore connus, ceux de 2025 sont donc utilisés. Ruggell prévoit 155% ensuite, Eschen 150% dès 2027.`,
    ] },
  },
  'ref.family': {
    en: { h: `6 · Child allowance`, li: [
      `<span class="num">CHF 310</span> a month per child, CHF 360 from age 10 or for each child from the third. Single parents + CHF 120 per child. Tax-free.`,
    ] },
    nl: { h: `6 · Kinderbijslag`, li: [
      `<span class="num">CHF 310</span> per maand per kind, CHF 360 vanaf 10 jaar of voor elk kind vanaf het derde. Alleenstaande ouders + CHF 120 per kind. Belastingvrij.`,
    ] },
    fr: { h: `6 · Allocations familiales`, li: [
      `<span class="num">CHF 310</span> par mois par enfant, CHF 360 dès 10 ans ou pour chaque enfant dès le troisième. Parents seuls + CHF 120 par enfant. Exonérées.`,
    ] },
  },
  'ref.vat': {
    en: { h: `7 · VAT on spending`, li: [
      `Standard rate <span class="num">8.1%</span>, the Swiss rate under the customs union, applied to all of your net pay as if you spent it.`,
      `VAT inside a price = price × r / (100 + r): at 8.1% that's <span class="num">7.49%</span> of what you pay.`,
    ] },
    nl: { h: `7 · Btw op uitgaven`, li: [
      `Normaal tarief <span class="num">8,1%</span>, het Zwitserse tarief via de douane-unie, toegepast op je hele nettoloon alsof je het helemaal uitgeeft.`,
      `Btw in een prijs = prijs × r / (100 + r): bij 8,1% is dat <span class="num">7,49%</span> van wat je betaalt.`,
    ] },
    fr: { h: `7 · TVA sur les dépenses`, li: [
      `Taux normal <span class="num">8,1%</span>, le taux suisse en vertu de l'union douanière, appliqué à tout votre salaire net comme si vous le dépensiez entièrement.`,
      `TVA comprise dans un prix = prix × r / (100 + r) : à 8,1%, cela fait <span class="num">7,49%</span> de ce que vous payez.`,
    ] },
  },
  'ref.minister': {
    en: { h: `8 · Government`, li: [
      `Head of government <span class="num">CHF 296,090</span> a year, deputy CHF 279,240, councillors <span class="num">CHF 261,180</span>, government secretary CHF 244,330 (shares of pay class 20).`,
      `Taxed and insured like salaries. Landtag members are paid per sitting plus CHF 25,000 for expenses, not shown.`,
    ] },
    nl: { h: `8 · Regering`, li: [
      `Regeringsleider <span class="num">CHF 296.090</span> per jaar, vicepremier CHF 279.240, regeringsraden <span class="num">CHF 261.180</span>, regeringssecretaris CHF 244.330 (delen van loonklasse 20).`,
      `Belast en verzekerd als lonen. Leden van de Landtag krijgen zitpenningen plus CHF 25.000 voor onkosten, niet getoond.`,
    ] },
    fr: { h: `8 · Gouvernement`, li: [
      `Chef du gouvernement <span class="num">CHF 296 090</span> par an, suppléant CHF 279 240, conseillers <span class="num">CHF 261 180</span>, secrétaire du gouvernement CHF 244 330 (parts de la classe 20).`,
      `Imposés et assurés comme des salaires. Les députés du Landtag touchent des jetons de présence plus CHF 25 000 de frais, non montrés.`,
    ] },
  },
  'ref.notIncl': {
    en: { h: `What's not included`, li: [
      `Health insurance premiums (compulsory, about CHF 361 a month for an adult), non-occupational accident and sickness pay insurance, pension risk premiums, wealth (taxed through a notional 4% yield added to income), extra work expenses and cross-border workers, who pay 4% withholding plus 150% instead.`,
      `Figures are the final annual tax, smoothed: the tax office rounds taxable income down to CHF 10. No statutory minimum wage exists, so none is shown.`,
    ] },
    nl: { h: `Wat niet is meegerekend`, li: [
      `Ziekteverzekeringspremies (verplicht, ongeveer CHF 361 per maand voor een volwassene), verzekering tegen niet-beroepsongevallen en loonverlies bij ziekte, risicopremies voor het pensioen, vermogen (belast via een fictief rendement van 4% bij het inkomen), extra beroepskosten en grensarbeiders, die in de plaats 4% bronheffing plus 150% betalen.`,
      `De bedragen zijn de uiteindelijke jaarbelasting, afgevlakt: de fiscus rondt het belastbaar inkomen af naar beneden op CHF 10. Er bestaat geen wettelijk minimumloon, dus er wordt er geen getoond.`,
    ] },
    fr: { h: `Ce qui n'est pas inclus`, li: [
      `Primes d'assurance maladie (obligatoires, environ CHF 361 par mois pour un adulte), assurance accidents non professionnels et indemnités journalières maladie, primes de risque de la prévoyance, fortune (imposée via un rendement fictif de 4% ajouté au revenu), frais professionnels supplémentaires et frontaliers, qui paient à la place 4% à la source plus 150%.`,
      `Les montants sont l'impôt annuel définitif, lissé : le fisc arrondit le revenu imposable aux CHF 10 inférieurs. Il n'existe pas de salaire minimum légal, aucun n'est donc affiché.`,
    ] },
  },

  inheritLink: {
    en: `Liechtenstein has no inheritance tax: see what that means →`,
    nl: `Liechtenstein heeft geen erfbelasting: zie wat dat betekent →`,
    fr: `Le Liechtenstein n'a pas de droits de succession : voyez ce que cela implique →`,
  },
  disclaimer: {
    en: `This is an estimate for orientation only. Your final assessment from the Steuerverwaltung decides.`,
    nl: `Dit is enkel een schatting ter oriëntatie. Je definitieve aanslag van de Steuerverwaltung is bepalend.`,
    fr: `Ceci n'est qu'une estimation indicative. Seule votre taxation définitive par la Steuerverwaltung fait foi.`,
  },

  'src.steg': { en: `Tax Act (SteG), version of 1 July 2026`, nl: `Belastingwet (SteG), versie van 1 juli 2026`, fr: `Loi fiscale (SteG), version du 1er juillet 2026` },
  'src.stev': { en: `Tax Ordinance (SteV)`, nl: `Belastingverordening (SteV)`, fr: `Ordonnance fiscale (SteV)` },
  'src.ahv': { en: `AHV-IV-FAK: contributions 2026`, nl: `AHV-IV-FAK: bijdragen 2026`, fr: `AHV-IV-FAK : cotisations 2026` },
  'src.lohn': { en: `Government: payroll fact sheet 2026`, nl: `Regering: fiche loonberekening 2026`, fr: `Gouvernement : fiche sur le calcul des salaires 2026` },
  'src.bpvg': { en: `Occupational Pensions Act (BPVG)`, nl: `Wet op het bedrijfspensioen (BPVG)`, fr: `Loi sur la prévoyance professionnelle (BPVG)` },
  'src.fak': { en: `FAK: family allowances`, nl: `FAK: gezinsbijslagen`, fr: `FAK : allocations familiales` },
  'src.gem': { en: `Municipal councils: surcharge decisions 2025 (Balzers shown)`, nl: `Gemeenteraden: beslissingen over de toeslag 2025 (Balzers)`, fr: `Conseils communaux : décisions de surtaxe 2025 (Balzers)` },
  'src.vat': { en: `Swiss FTA: VAT rates`, nl: `Zwitserse belastingdienst: btw-tarieven`, fr: `AFC suisse : taux de TVA` },
  'src.wages': { en: `Statistics office: wage statistics 2024`, nl: `Bureau voor de statistiek: loonstatistiek 2024`, fr: `Office de la statistique : statistique des salaires 2024` },
  'src.govPay': { en: `Civil Service Pay Act (BesG)`, nl: `Bezoldigingswet (BesG)`, fr: `Loi sur les traitements (BesG)` },
};
