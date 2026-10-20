window.TAX_STRINGS = {
  title: { en: 'Liechtenstein Inheritance Tax', nl: 'Erfbelasting in Liechtenstein', fr: 'Droits de succession au Liechtenstein' },
  eyebrow: { en: 'Liechtenstein · deaths in 2026 · no inheritance tax since 2011', nl: 'Liechtenstein · overlijdens in 2026 · geen erfbelasting sinds 2011', fr: 'Liechtenstein · décès en 2026 · pas de droits de succession depuis 2011' },
  lead: {
    en: 'What you pay on what you inherit in Liechtenstein: nothing. The 2011 Tax Act scrapped inheritance and gift tax for every heir and every amount. Once it is yours, what you inherit counts as part of your savings and property, which are taxed a little each year through your income tax.',
    nl: 'Wat je betaalt op wat je erft in Liechtenstein: niets. De belastingwet van 2011 schafte erf- en schenkbelasting af voor elke erfgenaam en elk bedrag. Daarna telt wat je erft mee bij je spaargeld en bezit, waarop je elk jaar een beetje betaalt via je inkomstenbelasting.',
    fr: 'Ce que vous payez sur ce dont vous héritez au Liechtenstein : rien. La loi fiscale de 2011 a supprimé les droits de succession et de donation pour tous les héritiers et tous les montants. Ensuite, ce dont vous héritez s\'ajoute à votre épargne et à vos biens, sur lesquels vous payez un peu chaque année via l\'impôt sur le revenu.',
  },
  'rel.partner': { en: 'Spouse or registered partner', nl: 'Echtgeno(o)t(e) of geregistreerde partner', fr: 'Conjoint ou partenaire enregistré' },
  'rel.cohab': { en: 'Unmarried partner', nl: 'Ongehuwde partner', fr: 'Concubin' },
  'rel.child': { en: 'Child or stepchild', nl: 'Kind of stiefkind', fr: 'Enfant ou beau-fils/belle-fille' },
  'rel.grandchild': { en: 'Grandchild', nl: 'Kleinkind', fr: 'Petit-enfant' },
  'rel.parent': { en: 'Parent', nl: 'Ouder', fr: 'Parent' },
  'rel.sibling': { en: 'Brother or sister', nl: 'Broer of zus', fr: 'Frère ou sœur' },
  'rel.other': { en: 'Someone else (friend, charity…)', nl: 'Iemand anders (vriend, goed doel…)', fr: 'Quelqu\'un d\'autre (ami, association…)' },
  more: { en: 'More situations', nl: 'Meer situaties', fr: 'Autres situations' },
  totalTax: { en: 'Inheritance tax', nl: 'Erfbelasting', fr: 'Droits de succession' },
  otherRels: { en: 'The same amount for every heir', nl: 'Hetzelfde bedrag voor elke erfgenaam', fr: 'Le même montant pour chaque héritier' },
  relation: { en: 'Relationship', nl: 'Verwantschap', fr: 'Lien' },
  chartTitle: { en: 'Average rate by amount inherited: 0% for everyone', nl: 'Gemiddeld tarief volgens geërfd bedrag: 0% voor iedereen', fr: 'Taux moyen selon le montant hérité : 0% pour tous' },
  refEyebrow: { en: 'Rules used · deaths in 2026', nl: 'Gebruikte regels · overlijdens in 2026', fr: 'Règles utilisées · décès en 2026' },

  'line.none': { en: 'No inheritance tax since 2011', nl: 'Geen erfbelasting sinds 2011', fr: 'Pas de droits de succession depuis 2011' },
  'line.wealth': {
    en: r => `Added to your taxable income each year, as if it earned ${r}`,
    nl: r => `Elk jaar bij je belastbaar inkomen geteld, alsof het ${r} opbrengt`,
    fr: r => `Ajouté chaque année à votre revenu imposable, comme s'il rapportait ${r}`,
  },
  'line.cohab': {
    en: 'An unmarried partner only inherits if there is a will. Either way, there is no tax to pay.',
    nl: 'Een ongehuwde partner erft alleen als er een testament is. Hoe dan ook betaal je geen belasting.',
    fr: 'Un concubin n\'hérite que s\'il y a un testament. Dans tous les cas, il n\'y a pas d\'impôt à payer.',
  },

  refNoneH: { en: 'What still applies', nl: 'Wat nog wel geldt', fr: 'Ce qui s\'applique encore' },
  'who.abolished': {
    en: 'The Tax Act of 2010, in force since 1 January 2011, scrapped the old inheritance and gift tax. Money or things you receive once through an inheritance, a bequest in a will or a gift don\'t count as income either (SteG Art. 15). You must still list them in your tax return.',
    nl: 'De belastingwet van 2010, van kracht sinds 1 januari 2011, schafte de oude erf- en schenkbelasting af. Geld of goederen die je één keer krijgt via een erfenis, een legaat in een testament of een schenking tellen ook niet als inkomen (SteG art. 15). Je moet ze wel vermelden in je belastingaangifte.',
    fr: 'La loi fiscale de 2010, en vigueur depuis le 1er janvier 2011, a supprimé les anciens droits de succession et de donation. L\'argent ou les biens reçus une fois par héritage, legs dans un testament ou donation ne comptent pas non plus comme revenu (SteG art. 15). Vous devez quand même les inscrire dans votre déclaration.',
  },
  'who.income': {
    en: 'What the inherited money and property earn (interest, dividends, rent) is not taxed on its own either. The yearly tax on your savings and property already covers it.',
    nl: 'Wat het geërfde geld en bezit opbrengt (rente, dividend, huur) wordt ook niet apart belast. De jaarlijkse belasting op je spaargeld en bezit dekt dat al.',
    fr: 'Ce que rapportent l\'argent et les biens hérités (intérêts, dividendes, loyers) n\'est pas non plus imposé à part. L\'impôt annuel sur votre épargne et vos biens le couvre déjà.',
  },
  'who.wealth': {
    en: 'Savings and property are taxed through income tax. Each year, 4% of what you own minus your debts (the Sollertrag) is added to your taxable income, as if it had earned that. It is then taxed at your highest rate plus the municipal surcharge. Inheriting CHF 100,000 adds CHF 4,000 to your taxable income, so about CHF 100 to CHF 800 of tax a year.',
    nl: 'Spaargeld en bezit worden belast via de inkomstenbelasting. Elk jaar wordt 4% van wat je bezit min je schulden (de Sollertrag) bij je belastbaar inkomen geteld, alsof het dat had opgebracht. Dat wordt dan belast aan je hoogste tarief plus de gemeentetoeslag. CHF 100.000 erven voegt CHF 4.000 toe aan je belastbaar inkomen, dus ongeveer CHF 100 tot CHF 800 belasting per jaar.',
    fr: 'L\'épargne et les biens sont imposés via l\'impôt sur le revenu. Chaque année, 4% de ce que vous possédez moins vos dettes (le Sollertrag) s\'ajoutent à votre revenu imposable, comme s\'ils avaient rapporté cela. Ce montant est imposé à votre taux le plus haut plus la surtaxe communale. Hériter de CHF 100 000 ajoute CHF 4 000 à votre revenu imposable, soit environ CHF 100 à CHF 800 d\'impôt par an.',
  },
  'who.property': {
    en: 'Inheriting land or a home doesn\'t trigger the tax on property profits. That tax is put off: if you sell later, your profit is counted from the price the deceased originally paid (SteG Art. 36).',
    nl: 'Een grond of woning erven brengt geen belasting op winst uit vastgoed mee. Die belasting wordt uitgesteld: verkoop je later, dan wordt je winst berekend vanaf de prijs die de overledene destijds betaalde (SteG art. 36).',
    fr: 'Hériter d\'un terrain ou d\'un logement ne déclenche pas l\'impôt sur les gains immobiliers. Il est reporté : si vous vendez plus tard, votre gain est calculé à partir du prix payé à l\'origine par le défunt (SteG art. 36).',
  },
  'who.foundation': {
    en: 'Money paid out to you by a foundation or trust counts as taxable income, unless you were already paying tax on those assets as your own savings and property.',
    nl: 'Geld dat een stichting of trust aan jou uitkeert, telt als belastbaar inkomen, tenzij je op dat vermogen al belasting betaalde als je eigen spaargeld en bezit.',
    fr: 'L\'argent versé par une fondation ou un trust compte comme revenu imposable, sauf si vous payiez déjà l\'impôt sur ces biens comme votre propre épargne.',
  },
  'who.insurance': {
    en: 'A private life insurance that pays out at death and could have been cashed in early is tax-free. Pension savings paid out as a lump sum, and pensions for surviving family from AHV (the state pension) or a pension fund, are taxed as income.',
    nl: 'Een private levensverzekering die bij overlijden uitkeert en vooraf afgekocht had kunnen worden, is belastingvrij. Pensioenspaargeld in één keer uitbetaald, en nabestaandenpensioenen van de AHV (het staatspensioen) of een pensioenfonds, worden belast als inkomen.',
    fr: 'Une assurance-vie privée versée au décès, et qui aurait pu être rachetée avant, est exonérée. Le capital retraite versé en une fois et les rentes de survivant de l\'AHV (la retraite publique) ou d\'une caisse de pension sont imposés comme revenu.',
  },
  'who.abroad': {
    en: 'If the deceased lived abroad, or owned things there, that country\'s inheritance tax can still apply. Next door, Austria has none, while most Swiss cantons tax heirs who are not close family.',
    nl: 'Woonde de overledene in het buitenland, of had die daar bezittingen, dan kan de erfbelasting van dat land nog gelden. Bij de buren heeft Oostenrijk er geen, terwijl de meeste Zwitserse kantons erfgenamen belasten die geen naaste familie zijn.',
    fr: 'Si le défunt vivait à l\'étranger, ou y possédait des biens, les droits de succession de ce pays peuvent s\'appliquer. Chez les voisins, l\'Autriche n\'en a pas, alors que la plupart des cantons suisses imposent les héritiers qui ne sont pas de la famille proche.',
  },
  refNote: {
    en: 'Before 2011, Liechtenstein taxed inheritances and gifts, more or less depending on how close the heir was. Like Austria and Sweden, it now has no such tax. The yearly tax on savings and property does that job instead.',
    nl: 'Vóór 2011 belastte Liechtenstein erfenissen en schenkingen, meer of minder naargelang hoe nauw de erfgenaam verwant was. Net als Oostenrijk en Zweden heeft het die belasting nu niet meer. De jaarlijkse belasting op spaargeld en bezit neemt die rol over.',
    fr: 'Avant 2011, le Liechtenstein taxait les héritages et les donations, plus ou moins selon la proximité de l\'héritier. Comme l\'Autriche et la Suède, il n\'a plus cet impôt. L\'impôt annuel sur l\'épargne et les biens joue ce rôle à la place.',
  },

  'src.steg': { en: 'Tax Act (SteG) Art. 5, 15, 36', nl: 'Belastingwet (SteG) art. 5, 15, 36', fr: 'Loi fiscale (SteG) art. 5, 15, 36' },
  'src.stev': { en: 'Tax Ordinance (SteV)', nl: 'Belastingverordening (SteV)', fr: 'Ordonnance fiscale (SteV)' },
  disclaimer: {
    en: 'This is an estimate for orientation only. Check with the Steuerverwaltung or a lawyer for your estate.',
    nl: 'Dit is enkel een schatting ter oriëntatie. Vraag de Steuerverwaltung of een jurist naar jouw nalatenschap.',
    fr: 'Ceci n\'est qu\'une estimation indicative. Renseignez-vous auprès de la Steuerverwaltung ou d\'un juriste pour votre succession.',
  },

  // Known gaps and caveats
  'gap.wealthTax': {
    en: `We don't calculate the yearly tax on what you inherit. The page only shows the 4% added to your income each year. The real tax depends on your other income and your municipality.`,
    nl: `We berekenen de jaarlijkse belasting op wat je erft niet. De pagina toont alleen de 4% die elk jaar bij je inkomen komt. De echte belasting hangt af van je andere inkomen en je gemeente.`,
    fr: `Nous ne calculons pas l'impôt annuel sur ce dont vous héritez. La page montre seulement les 4% ajoutés chaque année à votre revenu. L'impôt réel dépend de vos autres revenus et de votre commune.`,
  },
  'gap.sollertrag': {
    en: `The 4% (the Sollertrag) is set each year in the budget law. 4% is the recent figure; the 2026 one isn't confirmed.`,
    nl: `De 4% (de Sollertrag) wordt elk jaar in de begrotingswet vastgelegd. 4% is het recente cijfer; dat voor 2026 is niet bevestigd.`,
    fr: `Les 4% (le Sollertrag) sont fixés chaque année dans la loi de finances. 4% est le chiffre récent ; celui de 2026 n'est pas confirmé.`,
  },
  'gap.payouts': {
    en: `Money paid out by a foundation or trust, and pension savings paid at death, are taxed as income. We don't calculate them here.`,
    nl: `Geld uitgekeerd door een stichting of trust, en pensioenspaargeld uitbetaald bij overlijden, worden als inkomen belast. We berekenen ze hier niet.`,
    fr: `L'argent versé par une fondation ou un trust, et le capital retraite versé au décès, sont imposés comme revenu. Nous ne les calculons pas ici.`,
  },
  'gap.heirship': {
    en: `By law, close family is guaranteed a minimum part of the estate. That limits what a will can leave to an unmarried partner or anyone else. This isn't shown.`,
    nl: `De wet garandeert naaste familie een minimumdeel van de nalatenschap. Dat beperkt wat een testament kan nalaten aan een ongehuwde partner of iemand anders. Dat wordt niet getoond.`,
    fr: `La loi garantit à la famille proche une part minimale de l'héritage. Cela limite ce qu'un testament peut laisser à un concubin ou à quelqu'un d'autre. Ce n'est pas présenté ici.`,
  },
};
