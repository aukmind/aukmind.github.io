// Swiss salary rules for income year 2026. Loaded by ../index.html?country=ch.
// Income tax follows the ESTV tax calculator: its exported scales and deductions (DATA, rebuilt by update_communes.py ch)
// plus the cantonal rules it applies that the exports don't carry (DATA.cantons[*].x).
window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => {
  const DATA = {"fed":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"BUND","s":0,"r":[[0,0,0],[15200,0.77,0],[33200,0.88,138.6],[43500,2.64,229.2],[58000,2.97,612],[76200,5.94,1152.5],[82100,6.6,1502.95],[108900,8.8,3271.75],[141500,11,6140.55],[185100,13.2,10936.55],[793900,13.2,91298.15],[794000,11.5,91310]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"BUND","s":0,"r":[[0,0,0],[29700,1,0],[53400,2,237],[61300,3,395],[79100,4,929],[94900,5,1561],[108700,6,2251],[120600,7,2965],[130500,8,3658],[138400,9,4290],[144300,10,4821],[148300,11,5221],[150400,12,5452],[152400,13,5692],[941300,13,108249],[941400,11.5,108261]]}],"fedDed":{"Fahrkosten":["MAXIMUM",0,0,0,3300],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,3700],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,5550],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,1800],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,2700],"KKSparProKind":["MAXIMUM",0,0,0,700],"ZweitVerdiener":["PERCENT,MINIMUM,MAXIMUM",0,50,8600,14100],"FremdBetr":["MAXIMUM",0,0,0,25800],"SozKind":["STANDARDIZED",6800,0,0,0],"SozVerheiratet":["STANDARDIZED",2800,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"fedKid":263,"cantons":{"AG":{"k":[{"g":"ALLE","t":"ZUERICH","s":2,"r":[[4300,0,0],[3800,1,0],[3900,2,0],[4200,3,0],[4300,4,0],[5200,5,0],[7400,6,0],[8600,7,0],[9600,8,0],[11800,8.5,0],[11700,9,0],[35300,9.5,0],[66300,10,0],[176300,10.5,0],[9999999999,11,0]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,7000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,7600],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,7600],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,3800],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3800],"ZweitVerdiener":["MAXIMUM",0,0,0,600],"FremdBetr":["MAXIMUM",0,0,0,25000],"SozKinderAlterUnter14":["STANDARDIZED",9300,0,0,0],"SozKinderAlterZwischen14und17":["STANDARDIZED",10300,0,0,0],"SozvolljKinder":["STANDARDIZED",12400,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"stepBase":"all","steps":{"single":[[0,12000],[15000,7500],[20000,3000],[25000,2000],[30000,1000],[35000,0]],"family":[[0,12000],[15000,7500],[20000,3000],[25000,2000],[30000,1000],[35000,0]]}},"rate":103,"fz":[225,225],"fak":[1.45,0]},"AI":{"k":[{"g":"ALLE","t":"ZUERICH","s":2,"r":[[3000,0,0],[3000,1,0],[3000,2,0],[3000,3,0],[3000,4,0],[3000,5,0],[4000,6,0],[4000,7,0],[4000,7.5,0],[10000,8,0],[34000,8.5,0],[66000,9,0],[60000,8.5,0],[99999999,8,0]]}],"gem":[],"ded":{"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["STANDARDIZED,PERCENT,MAXIMUM",1000,5,0,5000],"AbzEigenmietwert":["PERCENT",0,30,0,0],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,20,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,5800],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,6800],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2900],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3400],"KKSparProKind":["MAXIMUM",0,0,0,600],"ZweitVerdiener":["MAXIMUM",0,0,0,500],"FremdBetr":["MAXIMUM",0,0,0,18000],"SozKinderAuswAusbildung":["MAXIMUM",0,0,0,8000],"SozKinderAnzahl1Oder2":["STANDARDIZED",6000,0,0,0],"SozKinderAnzahlUeber2":["STANDARDIZED",8000,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{},"rate":96,"fz":[245,245],"fak":[1.6,0]},"AR":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"ZUERICH","s":0,"r":[[8300,0,0],[1600,0.6,0],[1600,1,0],[4200,1.5,0],[11500,1.8,0],[14600,2.2,0],[12500,2.4,0],[19800,2.6,0],[14600,2.7,0],[36500,2.8,0],[135600,2.9,0],[999999999,2.6,0]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"ZUERICH","s":0,"r":[[16700,0,0],[2100,0.5,0],[3100,0.9,0],[5200,1.4,0],[9400,1.7,0],[15600,1.9,0],[15600,2.2,0],[20900,2.5,0],[26100,2.7,0],[62600,2.8,0],[239900,2.9,0],[999999999,2.6,0]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,6000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["STANDARDIZED,PERCENT,MAXIMUM",700,10,0,2400],"AbzEigenmietwert":["PERCENT",0,20,0,0],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,5400],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,5400],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2700],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,2700],"KKSparProKind":["MAXIMUM",0,0,0,1000],"ZweitVerdiener":["PERCENT,MINIMUM,MAXIMUM",0,10,2500,5200],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.3,0,6000],"FremdBetr":["MAXIMUM",0,0,0,25000],"SozvolljKinder":["STANDARDIZED",11600,0,0,0],"SozKinderAlterUnter5":["STANDARDIZED",5300,0,0,0],"SozKinderAlterZwischen5und15":["STANDARDIZED",7400,0,0,0],"SozKinderAlterUeber15":["STANDARDIZED",11600,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{},"rate":330,"fz":[230,230],"fak":[1.6,0]},"BE":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"ZUERICH","s":0,"r":[[3300,1.95,0],[3300,2.9,0],[9800,3.6,0],[16100,4.15,0],[26900,4.45,0],[26900,5,0],[26900,5.6,0],[26900,5.75,0],[26900,5.9,0],[26900,6.05,0],[37700,6.15,0],[86900,6.3,0],[152100,6.4,0],[999999999,6.5,0]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"ZUERICH","s":0,"r":[[3300,1.55,0],[3300,1.65,0],[9800,2.85,0],[16100,3.65,0],[26900,3.8,0],[26900,4.3,0],[26900,4.85,0],[26900,5.2,0],[41700,5.7,0],[54300,5.85,0],[54300,5.95,0],[54300,6.2,0],[141300,6.4,0],[999999999,6.5,0]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,7000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,4900],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,7200],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2450],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3600],"KKSparProKind":["MAXIMUM",0,0,0,700],"ZweitVerdiener":["PERCENT,MAXIMUM",0,2,0,9500],"FremdBetr":["MAXIMUM",0,0,0,16000],"SozKinderAuswAusbildung":["MAXIMUM",0,0,0,6400],"SozKind":["STANDARDIZED",8300,0,0,0],"SozKindAlleinerzieher":["STANDARDIZED",1300,0,0,0],"SozVerheiratet":["STANDARDIZED",5300,0,0,0],"SozLedig":["STANDARDIZED",5300,0,0,0],"SozZusAbzug":["STANDARDIZED",5300,0,0,0],"SozAlleinEigenemHaushalt":["STANDARDIZED",2400,0,0,0],"SozBeschEKledig":["STANDARDIZED",1100,0,0,0],"SozBeschEKverheiratet":["STANDARDIZED",2200,0,0,0],"SozBeschEKKind":["STANDARDIZED",600,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"zusMarried":true,"zvSum":true,"parentSingle":true,"relief":{"full":{"single":1100,"married":2200,"parent":1700,"kid":600},"T":{"single":24000,"married":31700},"kidT":8800,"W":{"single":16000,"other":25000}}},"rate":297.5,"fz":[250,250],"fak":[1.5,0]},"BL":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"FORMEL","s":0,"r":[[0,0,0],[16731,0,0,[-0.827548,0.089722,830.223746]],[44615,0,0,[-0.328507,0.043108,-1249.444454]],[111538,0,0,[0.051153,0.010441,-4893.077017]],[1282692,0,0,[0.1862,0,-3149.7094]]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"FORMEL","s":2,"r":[[0,0,0],[8366,0,0,[0.0049,0,0]],[16731,0,0,[-0.827548,0.089722,830.223746]],[44615,0,0,[-0.328507,0.043108,-1249.444454]],[111538,0,0,[0.051153,0.010441,-4893.077017]],[1282692,0,0,[0.1862,0,-3149.7094]]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,6000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["MAXIMUM",0,0,0,500],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,20,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,25,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,4000],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,4000],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2000],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,2000],"KKSparProKind":["MAXIMUM",0,0,0,450],"ZweitVerdiener":["MAXIMUM",0,0,0,1000],"FremdBetr":["MAXIMUM",0,0,0,10000],"SozvolljKinderAusserHaus":["STANDARDIZED",2000,0,0,0],"SozAHVIVRentnerOhneKinder":["PERCENT",0,40,0,0],"SozAHVIVRentner":["PERCENT",0,60,0,0],"StErmässigungProKind":["STANDARDIZED",750,0,0,0],"SozAHVIVRentnerOhneKinderSchwellwert":["STANDARDIZED",32760,0,0,0],"SozAHVIVRentnerSchwellwert":["STANDARDIZED",49140,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"simpleKid":750},"rate":100,"fz":[215,215],"fak":[1.3,0]},"BS":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"BUND","s":0,"r":[[0,21,0],[212500,27.25,44625],[316300,28.25,72910.5]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"BUND","s":0,"r":[[0,21,0],[424900,27.25,89229],[632500,28.25,145800]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,3200],"NebenErw":["MAXIMUM",0,0,0,800],"HauptErw":["MAXIMUM",0,0,0,4200],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,8400],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,8400],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,4200],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,4200],"ZweitVerdiener":["MAXIMUM",0,0,0,1100],"FremdBetr":["MAXIMUM",0,0,0,26000],"SozKind":["STANDARDIZED",9000,0,0,0],"SozvolljKinderAusserHaus":["STANDARDIZED",5800,0,0,0],"SozVerheiratet":["STANDARDIZED",38000,0,0,0],"SozAlleinerzieher":["STANDARDIZED",32600,0,0,0],"SozLedig":["STANDARDIZED",19500,0,0,0],"SozAHVIVRentnerOhneKinder":["STANDARDIZED",3500,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{},"rate":50,"fz":[275,275],"fak":[1.65,0]},"FR":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"FREIBURG","s":2,"r":[[0,0,0],[5199,0,0],[5200,1,0],[17500,4.1745,0],[31400,6.2139,0],[48300,8.0352,0],[63800,9.1042,0],[77600,9.9846,0],[102100,10.8662,0],[128700,11.7172,0],[156000,12.5355,0],[181000,13.1097,0],[207100,13.5,0]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"FREIBURG","s":0,"r":[[0,0,0],[5199,0,0],[5200,1,0],[10500,1,0],[35000,4.1745,0],[62800,6.2139,0],[96600,8.0352,0],[127600,9.1042,0],[155200,9.9846,0],[204200,10.8662,0],[257400,11.7172,0],[312000,12.5355,0],[362000,13.1097,0],[414200,13.5,0]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,12000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKVerheiratet":["MAXIMUM",0,0,0,9620],"KKLedig":["MAXIMUM",0,0,0,4810],"KKProMinderjKind":["MAXIMUM",0,0,0,1140],"KKProVolljKind":["MAXIMUM",0,0,0,4210],"SparzinsenVerheiratet":["MAXIMUM",0,0,0,300],"SparzinsenLedig":["MAXIMUM",0,0,0,150],"PrivVersVerheiratet":["MAXIMUM",0,0,0,1500],"PrivVersLedig":["MAXIMUM",0,0,0,750],"ZweitVerdiener":["MAXIMUM",0,0,0,500],"FremdBetr":["MAXIMUM",0,0,0,12000],"SozKinderAnzahl1Oder2":["MINIMUM,MAXIMUM",0,0,7100,8600],"SozKinderAnzahlUeber2":["MINIMUM,MAXIMUM",0,0,8100,9600],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"kidPhase":{"from":67000,"step":5000,"cut":500},"steps":{"single":[[0,4100],[20301,3900],[21301,3700],[22301,3500],[23301,3300],[24301,3100],[25301,2900],[26301,2700],[27301,2500],[28301,2300],[29301,2100],[30301,1900],[31301,1700],[32301,1500],[33301,1300],[34301,1100],[35301,900],[36301,700],[37301,500],[38301,300],[39301,100],[40301,0]],"family":[[0,5100],[24301,4900],[25301,4700],[26301,4500],[27301,4300],[28301,4100],[29301,3900],[30301,3700],[31301,3500],[32301,3300],[33301,3100],[34301,2900],[35301,2700],[36301,2500],[37301,2300],[38301,2100],[39301,1900],[40301,1700],[41301,1500],[42301,1300],[43301,1100],[44301,900],[45301,700],[46301,500],[47301,300],[48301,100],[49301,0]]}},"rate":96,"fz":[265,285],"fak":[2.35,0]},"GE":{"k":[{"g":"ALLE","t":"BUND","s":2,"r":[[0,0,0],[18700,7.3,0],[22530,8.2,279.6],[24784,9.1,464.4],[27036,10,669.35],[29290,10.9,894.75],[34922,11.3,1508.65],[39428,12.3,2017.8],[43935,12.8,2572.2],[48441,13.2,3148.95],[77730,14.2,7015.1],[127297,15,14053.6],[171231,15.6,20643.7],[193762,15.8,24158.55],[277125,16,37329.9],[295150,16.8,40213.9],[415688,17.6,60464.3],[651131,18,101902.25]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,536],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,810,2429],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,641,1817],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,15,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,25,0,0],"PrivVersSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,3528],"PrivVersSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2352],"PrivVersSparProKind":["MAXIMUM",0,0,0,962],"FaktPrivVersSparzVerhBeideOhneBVGS3a":["STANDARDIZED",2,0,0,0],"FaktPrivVersSparzVerhEineOhneBVGS3a":["STANDARDIZED",1.5,0,0,0],"FaktPrivVersSparzLedigOhneBVGS3a":["STANDARDIZED",2,0,0,0],"ZweitVerdiener":["MAXIMUM",0,0,0,1054],"FremdBetr":["MAXIMUM",0,0,0,26392],"SozKind":["STANDARDIZED",13698,0,0,0],"KKDurchschnittsprämieMindjhrg":["MAXIMUM",0,0,0,4147],"KKDurchschnittsprämieJungErw":["MAXIMUM",0,0,0,13063],"KKDurchschnittsprämieErw":["MAXIMUM",0,0,0,17520],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[25,0],"canMul":0.88,"canAdd":0.01},"rate":147.5,"fz":[311,411],"fak":[2.372,0]},"GL":{"k":[{"g":"ALLE","t":"BUND","s":1.7,"r":[[0,0,0],[10300,8,0],[20600,11,824],[30900,13,1957],[51600,15,4648],[103200,16,12388],[154700,17.5,20628],[257900,19,38688],[412600,21,68081],[464200,17,78917]]}],"gem":[],"ded":{"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,6200],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,9300],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,3100],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,4650],"KKSparProKind":["MAXIMUM",0,0,0,1000],"ZweitVerdiener":["PERCENT,MINIMUM,MAXIMUM",0,10,3600,10300],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.2,0,6000],"FremdBetr":["MAXIMUM",0,0,0,25800],"SozKinderAuswAusbildung":["STANDARDIZED",7200,0,0,0],"SozKind":["STANDARDIZED",7200,0,0,0],"SozAHVIVRentner":["STANDARDIZED",2100,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{},"rate":59.7,"fz":[215,215],"fak":[1.4,0]},"GR":{"k":[{"g":"ALLE","t":"BUND","s":1.9,"r":[[0,0,0],[16895,2.5,0],[17985,4,27.25],[19075,5,70.85],[20165,6,125.35],[21255,6.5,190.75],[22345,7,261.6],[24525,8,414.2],[31065,8.5,937.4],[35425,9,1308],[39785,9.5,1700.4],[44145,10.3,2114.6],[65945,10.6,4360],[87745,10.7,6670.8],[109545,11.2,9003.4],[218545,11.3,21211.4],[327545,11.4,33528.4],[436545,11.6,45954.4],[780440,11,85846.22],[780441,11,85848.51]]}],"gem":[],"ded":{"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,10,1400,3300],"AbzEigenmietwert":["PERCENT",0,30,0,0],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,9200],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,11600],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,4600],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,5800],"KKSparProKind":["MAXIMUM",0,0,0,1000],"ZweitVerdiener":["MAXIMUM",0,0,0,2200],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.25,0,9000],"FremdBetr":["MAXIMUM",0,0,0,27300],"SozKinderAuswAusbildung":["STANDARDIZED",24600,0,0,0],"SozKinderAlterUnter7":["STANDARDIZED",9900,0,0,0],"SozKinderAlterUeber6":["STANDARDIZED",13700,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{},"rate":92,"fz":[240,240],"fak":[1.5,0]},"JU":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"ZUERICH","s":0,"r":[[6900,0,0],[7800,1.66702,0],[14000,3.14902,0],[21800,4.02902,0],[42200,4.90902,0],[112500,5.558,0],[9999999999,5.78902,0]]},{"g":"LEDIG_ALLEINE,VERHEIRATET,LEDIG_MIT_KINDER","t":"ZUERICH","s":0,"r":[[12600,0,0],[6200,0.88,0],[9300,2.26902,0],[20300,3.242,0],[42200,4.122,0],[112500,4.77102,0],[234500,5.69702,0],[9999999999,5.78902,0]]},{"g":"LEDIG_KONKUBINAT,LEDIG_MIT_KINDER","t":"ZUERICH","s":0,"r":[[6900,0,0],[7800,1.66702,0],[14000,3.14902,0],[21800,4.02902,0],[42200,4.90902,0],[112500,5.558,0],[9999999999,5.78902,0]]}],"gem":[],"ded":{"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MAXIMUM",0,20,0,4100],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,3400],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,4190],"KKSparProminderjKind":["MAXIMUM",0,0,0,1020],"KKSparProvolljKind":["MAXIMUM",0,0,0,3400],"ZweitVerdiener":["MAXIMUM",0,0,0,2700],"FremdBetr":["MAXIMUM",0,0,0,10600],"SozKinderAuswAusbildung":["STANDARDIZED",10600,0,0,0],"SozKinderAnzahl1Oder2":["STANDARDIZED",5700,0,0,0],"SozKinderAnzahlUeber2":["STANDARDIZED",6400,0,0,0],"SozvolljKinderAusserHaus":["STANDARDIZED",2400,0,0,0],"SozVerheiratet":["STANDARDIZED",3700,0,0,0],"SozAlleinerzieher":["STANDARDIZED",2700,0,0,0],"SozLedig":["STANDARDIZED",1800,0,0,0],"KKSparzVerhBeideMitBVGS3a":["MAXIMUM",0,0,0,6800],"KKSparzVerhBeideOhneBVGS3a":["MAXIMUM",0,0,0,8380],"KKSparzVerhEineOhneBVGS3a":["MAXIMUM",0,0,0,7590],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"churchOnCanton":true},"rate":285,"fz":[275,275],"fak":[2.85,0]},"LU":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"BUND","s":0,"r":[[0,0,0],[9900,0.5,0],[12300,1,12],[15500,2,44],[16700,3,68],[17900,4,104],[20800,4.5,220],[25100,5,413.5],[110100,5.25,4663.5],[163900,5.5,7488],[190100,5.8,8929],[2096800,5.7,119517.6]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"BUND","s":0,"r":[[0,0,0],[19900,0.5,0],[24000,1.5,20.5],[25000,2.5,35.5],[26200,3,65.5],[28300,3.5,128.5],[32500,4.5,275.5],[99200,5,3277],[138100,5.5,5222],[159200,5.8,6382.5],[1425500,5.6,79827.9]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,6500],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"AbzEigenmietwert":["PERCENT",0,30,0,0],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,5200],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,6700],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2600],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3300],"KKSparProKind":["MAXIMUM",0,0,0,700],"ZweitVerdiener":["MAXIMUM",0,0,0,5000],"FremdBetr":["MAXIMUM",0,0,0,18200],"EigenBetr":["STANDARDIZED",2000,0,0,0],"SozKinderAuswAusbildung":["STANDARDIZED",13200,0,0,0],"SozKind":["STANDARDIZED",8100,0,0,0],"EntlAlleinstehendeSchwellwert":["STANDARDIZED",50400,0,0,0],"EntlVerheirateteSchwellwert":["STANDARDIZED",80700,0,0,0],"SozBeschEK":["PERCENT",0,14,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[50,0],"relief":{"rate":0.14,"T":{"single":50400,"married":80700}}},"rate":145,"fz":[215,215],"fak":[1.355,0]},"NE":{"k":[{"g":"ALLE","t":"BUND","s":1.923077,"r":[[0,0,0],[7700,1.98,0],[10300,3.96,51],[15500,7.92,257],[20600,11.484,661],[30900,11.781,1844],[41200,12.177,3058],[51500,12.672,4312],[61800,13.167,5617],[72100,13.662,6973],[82400,14.058,8380],[92700,14.355,9828],[103000,14.652,11307],[113300,14.949,12816],[123600,15.246,14356],[133900,15.345,15926],[144200,15.444,17507],[154500,15.543,19097],[164800,15.741,20698],[175100,15.939,22320],[185400,16.038,23961],[195700,16.038,25613],[206000,13.365,27265],[309000,13.6125,41031],[412000,13.86,55052]]}],"gem":[],"ded":{"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT,MAXIMUM",0,10,0,7200],"ImmoUnterhaltUeber10Jahre":["PERCENT,MAXIMUM",0,20,0,12000],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,4900],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,6125],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2500],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3125],"KKSparProKind":["MAXIMUM",0,0,0,800],"ZweitVerdiener":["PERCENT,MAXIMUM",0,25,0,1200],"FremdBetr":["MAXIMUM",0,0,0,20400],"SozKinderAlterUeber14":["STANDARDIZED",8200,0,0,0],"SozKinderAlterUnter4":["STANDARDIZED",6200,0,0,0],"SozKinderAlterZwischen4und13":["STANDARDIZED",6700,0,0,0],"SozvolljKinderAusserHaus":["STANDARDIZED",3100,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"cantonKid":200,"stepBase":"netProf","stepsParentSingle":true,"steps":{"single":[[0,2100],[26001,2000],[27001,1900],[28001,1800],[29001,1700],[30001,1600],[31001,1500],[32001,1400],[33001,1300],[34001,1200],[35001,1100],[36001,1000],[37001,900],[38001,800],[39001,700],[40001,600],[41001,500],[42001,400],[43001,300],[44001,200],[45001,100],[46001,0]],"family":[[0,3800],[48001,3600],[49001,3400],[50001,3200],[51001,3000],[52001,2800],[53001,2600],[54001,2400],[55001,2200],[56001,2000],[57001,1800],[58001,1600],[59001,1400],[60001,1200],[61001,1000],[62001,800],[63001,600],[64001,400],[65001,200],[66001,0]]}},"rate":124,"fz":[240,270],"fak":[2.487,0]},"NW":{"k":[{"g":"ALLE","t":"ZUERICH","s":1.85,"r":[[11600,0,0],[2400,0.5,0],[1200,1,0],[1200,1.2,0],[1200,1.4,0],[1200,1.6,0],[1200,1.8,0],[1200,2,0],[1200,2.2,0],[1200,2.4,0],[1200,2.6,0],[8000,2.8,0],[17300,2.9,0],[31200,3,0],[34700,3.1,0],[32800,3.2,0],[17200,3.3,0],[999999999,2.75,0]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,6000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MAXIMUM",0,5,0,7000],"AbzEigenmietwert":["PERCENT",0,40,0,0],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,3700],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,5550],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,1800],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,2700],"KKSparProKind":["MAXIMUM",0,0,0,700],"ZweitVerdiener":["MAXIMUM",0,0,0,1200],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.3,0,9000],"FremdBetr":["MAXIMUM",0,0,0,8400],"EigenBetr":["STANDARDIZED",3200,0,0,0],"SozKinderAuswAusbMitWochenaufenthAnzahl1":["STANDARDIZED",5800,0,0,0],"SozKinderAuswAusbMitWochenaufenthAnzahlUeber1":["STANDARDIZED",8000,0,0,0],"SozKinderAuswAusbOhneWochenaufentausKt":["STANDARDIZED",1800,0,0,0],"SozKind":["STANDARDIZED",6400,0,0,0],"AbzAlleinstUeber65Jahre":["MAXIMUM",0,0,0,4000],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[50,0]},"rate":261,"fz":[258,258],"fak":[1.5,0]},"OW":{"k":[{"g":"ALLE","t":"FLATTAX","s":0,"r":[[0,1.8,1]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,10000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,3300],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,4950],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,1700],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,2550],"KKSparProKind":["MAXIMUM",0,0,0,700],"ZweitVerdiener":["MAXIMUM",0,0,0,3400],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.3,0,6000],"FremdBetr":["MAXIMUM",0,0,0,10000],"SozKinderAuswAusbildung":["STANDARDIZED",5100,0,0,0],"SozKind":["STANDARDIZED",6200,0,0,0],"SozvolljUnterstpflKinderImHaus":["STANDARDIZED",2400,0,0,0],"SozVerheiratet":["PERCENT,MINIMUM,MAXIMUM",0,20,4300,10000],"SozAlleinerzieher":["PERCENT,MINIMUM,MAXIMUM",0,20,4300,10000],"SozZusAbzug":["STANDARDIZED",10000,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"relief":{"rate":0.1,"T":{"single":50000,"married":75000,"marriedKids":100000,"parent":100000}}},"rate":325,"fz":[220,220],"fak":[1.4,0]},"SG":{"k":[{"g":"ALLE","t":"ZUERICH","s":2,"r":[[11600,0,0],[4200,4,0],[18000,6,0],[26500,8,0],[38100,9.2,0],[166100,9.4,0],[999999999,8.5,0]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,8000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["STANDARDIZED,PERCENT,MAXIMUM",700,10,0,2400],"AbzEigenmietwert":["PERCENT",0,30,0,0],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,20,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,6800],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,7900],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,3400],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3900],"KKSparProKind":["MAXIMUM",0,0,0,1100],"ZweitVerdiener":["MAXIMUM",0,0,0,500],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.2,0,6000],"FremdBetr":["MAXIMUM",0,0,0,26800],"SozKinderZusAusbEigenbeitrag":["STANDARDIZED",3200,0,0,0],"SozKinderZusAusb":["MAXIMUM",0,0,0,13800],"SozKinderAlterUnter7":["STANDARDIZED",7600,0,0,0],"SozKinderAlterUeber6":["STANDARDIZED",10800,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{},"rate":105,"fz":[245,245],"fak":[1.8,0]},"SH":{"k":[{"g":"ALLE","t":"BUND","s":1.9,"r":[[0,0,0],[6300,1,0],[6600,2,3],[8300,3,37],[10400,4,100],[12700,5,192],[20600,6,587],[28500,7,1061],[36400,8,1614],[44300,9,2246],[56900,10,3380],[69500,11,4640],[141000,12,12505],[210100,9.9,20797],[210200,9.9,20806.9]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,6000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,15,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,25,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,7500],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,7500],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,3750],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3750],"KKSparProKind":["MAXIMUM",0,0,0,1000],"ZweitVerdiener":["MAXIMUM",0,0,0,800],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.25,0,3000],"FremdBetr":["MAXIMUM",0,0,0,9400],"SozKind":["STANDARDIZED",8400,0,0,0],"SozKinderAlterUnter5":["STANDARDIZED",3000,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[60,0],"creditKid":320,"steps":{"single":[[0,3525],[16801,3375],[17601,3225],[18401,3075],[19201,2925],[20001,2775],[20801,2625],[21601,2475],[22401,2325],[23201,2175],[24001,2025],[24801,1875],[25601,1725],[26401,1575],[27201,1425],[28001,1275],[28801,1125],[29601,975],[30401,825],[31201,675],[32001,525],[32801,375],[33601,225],[34401,75],[35201,0]],"family":[[0,7050],[25201,6900],[26001,6750],[26801,6600],[27601,6450],[28401,6300],[29201,6150],[30001,6000],[30801,5850],[31601,5700],[32401,5550],[33201,5400],[34001,5250],[34801,5100],[35601,4950],[36401,4800],[37201,4650],[38001,4500],[38801,4350],[39601,4200],[40401,4050],[41201,3900],[42001,3750],[42801,3600],[43601,3450],[44401,3300],[45201,3150],[46001,3000],[46801,2850],[47601,2700],[48401,2550],[49201,2400],[50001,2250],[50801,2100],[51601,1950],[52401,1800],[53201,1650],[54001,1500],[54801,1350],[55601,1200],[56401,1050],[57201,900],[58001,750],[58801,600],[59601,450],[60401,300],[61201,150],[62001,0]]}},"rate":76,"fz":[230,230],"fak":[1.38,0.04]},"SO":{"k":[{"g":"ALLE","t":"BUND","s":1.9,"r":[[0,0,0],[12400,4.5,0],[16500,5,184.5],[20600,6.5,389.5],[23700,8,591],[25800,9,759],[28900,9.5,1038],[40200,10,2111.5],[55700,10.5,3661.5],[101100,11.5,8428.5],[319900,10.5,33590.5]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,7200],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,5200],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,7800],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2600],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3900],"KKSparProKindMitBVGS3a":["MAXIMUM",0,0,0,700],"KKSparProKindOhneBVGS3a":["MAXIMUM",0,0,0,1050],"ZweitVerdiener":["MAXIMUM",0,0,0,1000],"FremdBetr":["MAXIMUM",0,0,0,25800],"SozKind":["STANDARDIZED",9300,0,0,0],"SozAHVIVRentner":["STANDARDIZED",5200,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[50,50]},"rate":104,"fz":[215,215],"fak":[1.25,0]},"SZ":{"k":[{"g":"VERHEIRATET","t":"ZUERICH","s":1.9,"r":[[1500,0.25,0],[1300,0.5,0],[1100,0.75,0],[1000,1,0],[1000,1.25,0],[1100,1.5,0],[1300,1.75,0],[1800,2,0],[2400,2.25,0],[3600,2.5,0],[5900,2.75,0],[8200,3,0],[10500,3.25,0],[11600,3.5,0],[9300,3.65,0],[197200,3.9,0],[174700,7,0],[999999999,5,0]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT","t":"ZUERICH","s":0,"r":[[1500,0.25,0],[1300,0.5,0],[1100,0.75,0],[1000,1,0],[1000,1.25,0],[1100,1.5,0],[1300,1.75,0],[1800,2,0],[2400,2.25,0],[3600,2.5,0],[5900,2.75,0],[8200,3,0],[10500,3.25,0],[11600,3.5,0],[9300,3.65,0],[197200,3.9,0],[174700,7,0],[999999999,5,0]]}],"gem":[{"g":"VERHEIRATET","t":"ZUERICH","s":1.9,"r":[[1500,0.25,0],[1300,0.5,0],[1100,0.75,0],[1000,1,0],[1000,1.25,0],[1100,1.5,0],[1300,1.75,0],[1800,2,0],[2400,2.25,0],[3600,2.5,0],[5900,2.75,0],[8200,3,0],[10500,3.25,0],[11600,3.5,0],[9300,3.65,0],[197200,3.9,0],[999999999,3.65,0]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT","t":"ZUERICH","s":0,"r":[[1500,0.25,0],[1300,0.5,0],[1100,0.75,0],[1000,1,0],[1000,1.25,0],[1100,1.5,0],[1300,1.75,0],[1800,2,0],[2400,2.25,0],[3600,2.5,0],[5900,2.75,0],[8200,3,0],[10500,3.25,0],[11600,3.5,0],[9300,3.65,0],[197200,3.9,0],[999999999,3.65,0]]}],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,8000],"HauptErw":["PERCENT,MAXIMUM",0,20,0,6900],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,8400],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,12600],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,4200],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,6300],"KKSparProKind":["MAXIMUM",0,0,0,500],"ZweitVerdiener":["MAXIMUM",0,0,0,2100],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.3,0,6000],"FremdBetr":["MAXIMUM",0,0,0,8000],"SozminderjKinder":["STANDARDIZED",10000,0,0,0],"SozvolljKinder":["STANDARDIZED",12000,0,0,0],"SozVerheiratet":["STANDARDIZED",8400,0,0,0],"SozAlleinerzieher":["STANDARDIZED",7800,0,0,0],"SozLedig":["STANDARDIZED",4200,0,0,0],"SozAHVIVRentner":["STANDARDIZED",4000,0,0,0],"EntlAlleinstehendeSchwellwert":["STANDARDIZED",35000,0,0,0],"EntlVerheirateteSchwellwert":["STANDARDIZED",70000,0,0,0],"EntlKindSchwellwert":["STANDARDIZED",25000,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"parentSingle":true,"relief":{"rate":0.3,"T":{"single":35000,"married":70000,"parent":35000},"kid":25000}},"rate":110,"fz":[230,230],"fak":[1.3,0]},"TG":{"k":[{"g":"ALLE","t":"BUND","s":2,"r":[[0,0,0],[12200,2,0],[14600,3,48],[16800,4,114],[18900,5,198],[21000,6,303],[36800,7,1251],[84400,7.5,4583],[158400,8,10133]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,6000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"AbzEigenmietwert":["PERCENT",0,40,0,0],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,7000],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,7000],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,3500],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3500],"KKSparProKind":["MAXIMUM",0,0,0,1000],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.2,0,6000],"FremdBetr":["PERCENT,MAXIMUM",0,75,0,10100],"SozKinderAlter18oder19":["STANDARDIZED",8500,0,0,0],"SozKinderAlterUeber19":["STANDARDIZED",10600,0,0,0],"SozminderjKinder":["STANDARDIZED",7400,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"creditKid":100},"rate":109,"fz":[215,215],"fak":[1.4,0]},"TI":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"BUND","s":0,"r":[[0,0,0],[12500,0.16,0],[12600,5.232,20],[17500,5.949,276.4],[20900,3.923,478.65],[26100,7.499,682.65],[30200,9.461,990.1],[40000,10.377,1917.25],[52800,10.988,3245.5],[58800,11.8,3838.85],[73100,11.597,5597.05],[91500,12.47,7730.95],[114000,13.08,10536.6],[227900,14.04,25435],[380700,14,46888.1]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"BUND","s":0,"r":[[0,0,0],[20400,0.145,0],[20500,3.923,29.6],[24900,4.36,202.25],[28300,2.616,350.5],[33200,3.923,478.65],[42400,6.54,839.6],[47900,7.848,1199.3],[60700,10.116,2203.85],[79900,11.074,4146.05],[90500,12.645,5319.9],[122700,12.034,9391.45],[141100,12.906,11605.7],[183300,13.777,17052.1],[227900,14.302,23196.85],[304000,14.65,34080.35],[761500,14,101102.5]]}],"gem":[],"ded":{"NebenErw":["MAXIMUM",0,0,0,800],"HauptErw":["MAXIMUM",0,0,0,3500],"AbzEigenmietwert":["PERCENT",0,10,0,0],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,10900],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,15400],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,5500],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,7800],"KKSparProKind":["MAXIMUM",0,0,0,1200],"ZweitVerdiener":["MAXIMUM",0,0,0,8100],"FremdBetr":["MAXIMUM",0,0,0,26200],"SozKinderAuswAusbMitWochenaufentausKt":["STANDARDIZED",13900,0,0,0],"SozKinderAuswAusbOhneWochenaufentausKt":["STANDARDIZED",6600,0,0,0],"SozKinderAuswAusbMitWochenaufentimKt":["STANDARDIZED",4800,0,0,0],"SozKinderAuswAusbOhneWochenaufent":["STANDARDIZED",2000,0,0,0],"SozKind":["STANDARDIZED",11500,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[20,20]},"rate":100,"fz":[215,215],"fak":[1.9,0]},"UR":{"k":[{"g":"ALLE","t":"FLATTAX","s":0,"r":[[0,7.1,0]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,13000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"AbzEigenmietwert":["PERCENT,MAXIMUM",0,25,0,7900],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,3700],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,5550],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,1800],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,2700],"KKSparProKind":["MAXIMUM",0,0,0,700],"ZweitVerdiener":["MAXIMUM",0,0,0,3700],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.3,0,5000],"FremdBetr":["MAXIMUM",0,0,0,25800],"SozKinderAuswAusbMitWochenaufenth":["MAXIMUM",0,0,0,13500],"SozKinderAuswAusbOhneWochenaufent":["MAXIMUM",0,0,0,4600],"SozKind":["STANDARDIZED",8500,0,0,0],"SozvolljKinder":["STANDARDIZED",3200,0,0,0],"SozVerheiratet":["STANDARDIZED",26900,0,0,0],"SozAlleinerzieher":["STANDARDIZED",21200,0,0,0],"SozLedig":["STANDARDIZED",15300,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[70,0]},"rate":100,"fz":[240,240],"fak":[1.7,0]},"VD":{"k":[{"g":"VERHEIRATET","t":"BUND","s":1.8,"r":[[100,1,1],[1600,2,16],[3400,3,52],[5100,4,103],[8300,5,231],[11900,6,411],[15100,7,603],[23600,8,1198],[40500,9,2550],[57200,10,4053],[74400,11,5773],[91200,12,7621],[108100,12.5,9649],[135000,13,13011.5],[162000,13.5,16521.5],[192500,14,20639],[223000,14.5,24909],[256000,15,29694],[291700,15.5,35049]]},{"g":"LEDIG_ALLEINE,LEDIG_MIT_KINDER","t":"BUND","s":1.3,"r":[[100,1,1],[1600,2,16],[3400,3,52],[5100,4,103],[8300,5,231],[11900,6,411],[15100,7,603],[23600,8,1198],[40500,9,2550],[57200,10,4053],[74400,11,5773],[91200,12,7621],[108100,12.5,9649],[135000,13,13011.5],[162000,13.5,16521.5],[192500,14,20639],[223000,14.5,24909],[256000,15,29694],[291700,15.5,35049]]},{"g":"LEDIG_KONKUBINAT,LEDIG_MIT_KINDER","t":"BUND","s":1,"r":[[100,1,1],[1600,2,16],[3400,3,52],[5100,4,103],[8300,5,231],[11900,6,411],[15100,7,603],[23600,8,1198],[40500,9,2550],[57200,10,4053],[74400,11,5773],[91200,12,7621],[108100,12.5,9649],[135000,13,13011.5],[162000,13.5,16521.5],[192500,14,20639],[223000,14.5,24909],[256000,15,29694],[291700,15.5,35049]]}],"gem":[],"ded":{"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"AbzEigenmietwert":["PERCENT",0,35,0,0],"SparzinsenVerheiratet":["MAXIMUM",0,0,0,3300],"SparzinsenLedig":["MAXIMUM",0,0,0,1600],"SparzinsenProKind":["MAXIMUM",0,0,0,300],"KKPrivVersVerheiratet":["MAXIMUM",0,0,0,9900],"KKPrivVersLedig":["MAXIMUM",0,0,0,5000],"KKPrivVersProKind":["MAXIMUM",0,0,0,1300],"ZweitVerdiener":["MAXIMUM",0,0,0,1700],"FremdBetr":["MAXIMUM",0,0,0,15200],"SozKindAlleinerzieher":["MAXIMUM",0,0,0,2800],"SozminderjKinder":["MAXIMUM",0,0,0,1000],"SozVerheiratet":["MAXIMUM",0,0,0,1300],"ImmoUnterhaltSelbsbewUeber20Jahre":["PERCENT",0,30,0,0],"SozBeschEKledig":["STANDARDIZED",17000,0,0,0],"SozBeschEKverheiratet":["STANDARDIZED",22700,0,0,0],"SozBeschEKKind":["STANDARDIZED",3500,0,0,0],"AbzMietePauschalVerheiratet":["MAXIMUM",0,0,0,13700],"AbzMietePauschalLedig":["MAXIMUM",0,0,0,11100],"AbzMietePauschalKind":["MAXIMUM",0,0,0,3700],"MaxAbzMiete":["MAXIMUM",0,0,0,6800],"ImmoUnterhaltSelbsbewBIS20Jahre":["PERCENT",0,20,0,0],"ImmoUnterhaltVermietetBIS20Jahre":["MAXIMUM",0,0,0,15000],"ImmoUnterhaltVermietetUeber20Jahre":["MAXIMUM",0,0,0,30000],"SozBeschEKAlleinerzMitK":["STANDARDIZED",23700,0,0,0],"SozFamAbzugSchwellwertAus1":["STANDARDIZED",126400,0,0,0],"SozFamAbzugSchwellwertAus2":["STANDARDIZED",164200,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"canMul":0.95,"simpleCap":0.13289,"quot":{"single":1,"married":1.8,"parent":1.3,"kid":0.5,"cap":22180,"capFirst":43000},"relief":{"rate":0.5,"full":{"single":17000,"married":22700,"parent":23700,"kid":3500}},"rent":{"share":0.25,"pct":1,"minus":0.2,"max":6800,"flat":{"single":11100,"family":13700,"kid":3700}},"famPhase":{"from":126400,"to":164200,"step":2000,"cut":100}},"rate":155,"fz":[322,365],"fak":[2.71,0.09]},"VS":{"k":[{"g":"ALLE","t":"FREIBURG","s":0,"r":[[0,2,0],[5000,2,0],[10000,2.8,0],[20000,4.6,0],[30000,6,0],[40000,7.4,0],[50000,8.7,0],[60000,10.2,0],[70000,11.5,0],[80000,13,0],[90000,13.3,0],[100000,13.5,0],[200000,14,0]]}],"gem":[{"g":"ALLE","t":"FREIBURG","s":0,"r":[[0,2,0],[5000,2,0],[10000,2.7,0],[15000,3.6,0],[20000,4.4,0],[30000,5.8,0],[40000,6.8,0],[50000,7.5,0],[60000,8,0],[80000,8.8,0],[90000,9,0],[180000,9.9,0],[200000,10,0]]}],"ded":{"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,7600],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,7600],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,3800],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,3800],"KKSparProKind":["MAXIMUM",0,0,0,1130],"ZweitVerdiener":["MAXIMUM",0,0,0,7000],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.1,0,1000],"FremdBetr":["MAXIMUM",0,0,0,10000],"EigenBetr":["STANDARDIZED",3130,0,0,0],"SozKinderAuswAusbildung":["STANDARDIZED",10000,0,0,0],"SozKinderAltervon17Jahren":["STANDARDIZED",11930,0,0,0],"SozKinderAlterUnter7":["STANDARDIZED",7860,0,0,0],"SozvolljKinder":["STANDARDIZED",11930,0,0,0],"SozZusKinderabzugAbAnzahl3":["STANDARDIZED",1240,0,0,0],"SozKinderAlterZwischen7und16":["STANDARDIZED",8940,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[24,0],"churchOnCanton":true,"idx":2.0071,"idxGem":2.0657,"rebate":{"rate":0.35,"min":680,"max":4900},"cantonKid":300,"cantonMin":10,"steps":{"single":[[0,21250],[21251,19125],[22831,17000],[24411,14875],[25991,12750],[27571,10625],[29151,8500],[30731,6375],[32311,4250],[33891,2125],[35471,0]]}},"rate":100,"fz":[327,435],"fak":[2.78,0.131]},"ZG":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"BUND","s":0,"r":[[0,0.5,0],[1100,1,5.5],[3300,2,27.5],[6100,3,83.5],[10100,3.25,203.5],[15300,3.5,372.5],[21100,4,575.5],[26900,4.5,807.5],[34900,5.5,1167.5],[46400,5.5,1800],[59700,6.5,2531.5],[74700,8,3506.5],[94800,10,5114.5],[120100,9,7644.5],[149900,8,10326.5]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"BUND","s":0,"r":[[0,0.5,0],[2200,1,11],[6600,2,55],[12200,3,167],[20200,3.25,407],[30600,3.5,745],[42200,4,1151],[53800,4.5,1615],[69800,5.5,2335],[92800,5.5,3600],[119400,6.5,5063],[149400,8,7013],[189600,10,10229],[240200,9,15289],[299800,8,20653]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,6000],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,10,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,9200],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,13800],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,4600],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,6900],"KKSparProKind":["MAXIMUM",0,0,0,1600],"ZweitVerdiener":["MAXIMUM",0,0,0,4600],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.3,0,9000],"FremdBetr":["MAXIMUM",0,0,0,25400],"EigenBetr":["STANDARDIZED",12200,0,0,0],"SozKinderAlterUnter15":["STANDARDIZED",12600,0,0,0],"SozKinderAlterUeber14":["STANDARDIZED",24800,0,0,0],"SozVerheiratet":["STANDARDIZED",24000,0,0,0],"SozAlleinerzieher":["STANDARDIZED",24000,0,0,0],"SozLedig":["STANDARDIZED",12000,0,0,0],"SozAHVIVRentner":["STANDARDIZED",6000,0,0,0],"MaxAbzMiete":["MAXIMUM",0,0,0,10800],"SozAHVIVRentnerOhneKinderSchwellwert":["STANDARDIZED",60000,0,0,0],"SozAHVIVRentnerSchwellwert":["STANDARDIZED",120000,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"rent":{"share":0.25,"pct":0.3,"minus":0,"max":10800}},"rate":78,"fz":[330,330],"fak":[1.35,0]},"ZH":{"k":[{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,LEDIG_OHNE_KINDER","t":"ZUERICH","s":0,"r":[[7000,0,0],[5000,2,0],[4800,3,0],[8000,4,0],[9700,5,0],[11200,6,0],[13100,7,0],[17600,8,0],[34000,9,0],[33700,10,0],[53300,11,0],[69300,12,0],[99999999,13,0]]},{"g":"LEDIG_ALLEINE,LEDIG_KONKUBINAT,VERHEIRATET,LEDIG_MIT_KINDER","t":"ZUERICH","s":0,"r":[[14100,0,0],[6400,2,0],[8100,3,0],[9800,4,0],[11200,5,0],[14500,6,0],[32200,7,0],[32400,8,0],[48500,9,0],[57900,10,0],[62900,11,0],[72600,12,0],[99999999,13,0]]}],"gem":[],"ded":{"Fahrkosten":["MAXIMUM",0,0,0,5200],"NebenErw":["PERCENT,MINIMUM,MAXIMUM",0,20,800,2400],"HauptErw":["PERCENT,MINIMUM,MAXIMUM",0,3,2000,4000],"ImmoUnterhaltUnter11Jahre":["PERCENT",0,20,0,0],"ImmoUnterhaltUeber10Jahre":["PERCENT",0,20,0,0],"KKSparzVerhMitBVGS3a":["MAXIMUM",0,0,0,5800],"KKSparVerhOhneBVGS3a":["MAXIMUM",0,0,0,8700],"KKSparLedigMitBVGS3a":["MAXIMUM",0,0,0,2900],"KKSparLedigOhneBVGS3a":["MAXIMUM",0,0,0,4350],"KKSparProKind":["MAXIMUM",0,0,0,1300],"ZweitVerdiener":["MAXIMUM",0,0,0,6200],"VMVerwaltungsKosten":["PERCENT,MAXIMUM",0,0.3,0,6000],"FremdBetr":["MAXIMUM",0,0,0,25300],"SozKind":["STANDARDIZED",9400,0,0,0],"S3aMax_mitVorsorge":["MAXIMUM",0,0,0,7258],"S3aMax_ohneVorsorge":["MAXIMUM",0,0,0,36288],"MaxTechnZinssatzEE_CHF_FINMA1000":["PERCENT",0,350,0,0],"VerpflOhneVerb":["MAXIMUM",0,0,0,3200],"VerpflMitVerb":["MAXIMUM",0,0,0,1600]},"x":{"personal":[24,24]},"rate":95,"fz":[215,215],"fak":[1.125,0]}}};

  // Tax on x for one ESTV scale. ZUERICH rows are [width, %]; BUND rows are [from, %, tax at from];
  // FREIBURG rows are [from, average %] interpolated; FORMEL rows carry [a, b, c] for a·x + b·x·(ln x − 1) + c.
  function scaleTax(sc, x) {
    const r = sc.r;
    if (x <= 0) return 0;
    if (sc.t === 'FLATTAX') return x * r[0][1] / 100;
    if (sc.t === 'ZUERICH') {
      let tot = 0, lo = 0;
      for (const [w, p] of r) { if (x > lo) tot += (Math.min(x, lo + w) - lo) * p / 100; lo += w; }
      return tot;
    }
    let i = r.length - 1;
    while (i > 0 && r[i][0] > x) i--;
    const row = r[i];
    if (sc.t === 'BUND') return row[2] + (x - row[0]) * row[1] / 100;
    if (sc.t === 'FREIBURG') {
      const nx = r[i + 1];
      const p = nx ? row[1] + (nx[1] - row[1]) * (x - row[0]) / (nx[0] - row[0]) : row[1];
      return x * p / 100;
    }
    const [a, b, c] = row[3] || [0, 0, 0];
    return a * x + b * x * (Math.log(x) - 1) + c;
  }

  const pickScale = (list, st) => {
    const want = st === 'married' ? 'VERHEIRATET' : st === 'parent' ? 'LEDIG_MIT_KINDER' : 'LEDIG_OHNE_KINDER';
    return list.find(sc => sc.g === 'ALLE' || sc.g.split(',').includes(want)) || list.find(sc => sc.g.includes('LEDIG_ALLEINE'));
  };
  // Simple tax ("einfache Steuer", 100%) for a cantonal or communal scale, with the canton's splitting or quotient.
  function simpleTax(list, x, st, kids, idx, quot) {
    if (x <= 0) return 0;
    const sc = pickScale(list, st);
    let div = st !== 'single' && sc.s > 0 ? sc.s : 1;
    let y;
    if (quot) {
      const base = quot[st];
      y = Math.max(x / (base + quot.kid * kids), x / base - (kids ? (st === 'married' ? quot.cap * kids : quot.capFirst + quot.cap * (kids - 1)) : 0));
    } else y = x / div / (idx || 1);
    return y > 0 ? x * scaleTax(sc, y) / y : 0;
  }

  const stepVal = (rows, x) => { let v = 0; for (const [from, val] of rows) if (x >= from) v = val; return v; };
  // One ESTV deduction entry against a base amount.
  function dedVal(e, base) {
    if (!e) return 0;
    const [fmt, amt, p, mn, mx] = e;
    const f = fmt.split(',');
    let v = f.includes('STANDARDIZED') ? amt : 0;
    if (f.includes('PERCENT')) v += base * p / 100;
    if (f.includes('MINIMUM')) v = Math.max(v, mn);
    if (f.includes('MAXIMUM')) v = f.length === 1 ? mx : Math.min(v, mx);
    return v;
  }

  const KID_KEYS = ['SozKind', 'SozKinderAlterUnter14', 'SozKinderAlterZwischen5und15', 'SozKinderAlterUeber6', 'SozKinderAlterZwischen4und13',
    'SozKinderAlterZwischen7und16', 'SozKinderAlterUnter15', 'SozminderjKinder', 'SozKinderAnzahl1Oder2'];
  const INS_KID = ['KKSparProKind', 'KKSparProKindMitBVGS3a', 'KKSparProminderjKind', 'KKProMinderjKind', 'KKDurchschnittsprämieMindjhrg'];
  const PREMIUM = { adult: 4560, kid: 1200 };
  const mx = e => e ? e[4] : 0;

  // Insurance premiums actually paid, capped by the canton's flat maximum (ESTV assumes 4 560 a year per adult, 1 200 per child).
  function insurance(d, st, kids, ers) {
    const married = st === 'married', withBvg = ers.some(e => e.bvg > 0);
    let cap;
    if (d.KKLedig) cap = married ? mx(d.KKVerheiratet) + mx(d.SparzinsenVerheiratet) + mx(d.PrivVersVerheiratet) : mx(d.KKLedig) + mx(d.SparzinsenLedig) + mx(d.PrivVersLedig);
    else if (d.KKPrivVersLedig) cap = married ? mx(d.KKPrivVersVerheiratet) + mx(d.SparzinsenVerheiratet) : mx(d.KKPrivVersLedig) + mx(d.SparzinsenLedig);
    else if (d.KKDurchschnittsprämieErw) cap = mx(d.KKDurchschnittsprämieErw) * (married ? 2 : 1);
    else if (married && d.KKSparzVerhBeideMitBVGS3a) {
      const n = ers.filter(e => e.bvg > 0).length;
      cap = mx(n >= 2 ? d.KKSparzVerhBeideMitBVGS3a : n === 1 ? d.KKSparzVerhEineOhneBVGS3a : d.KKSparzVerhBeideOhneBVGS3a);
    } else if (married) cap = mx(withBvg ? d.KKSparzVerhMitBVGS3a : d.KKSparVerhOhneBVGS3a);
    else cap = mx(withBvg ? d.KKSparLedigMitBVGS3a : d.KKSparLedigOhneBVGS3a);
    const kidKey = INS_KID.find(k => d[k]);
    if (kidKey) cap += kids * mx(d[kidKey]);
    else if (d.KKPrivVersProKind) cap += kids * (mx(d.KKPrivVersProKind) + mx(d.SparzinsenProKind));
    return Math.min(cap, PREMIUM.adult * (married ? 2 : 1) + PREMIUM.kid * kids);
  }

  // Taxable income at one level (federal when x is null), with every line kept for the tooltips.
  function taxable(d, x, st, kids, ers) {
    const L = [], add = (k, v) => { if (v > 0) L.push([k, v]); return v; };
    const married = st === 'married', net = ers.reduce((s, e) => s + e.net + (e.other || 0), 0);
    const prof = ers.map(e => Math.min(e.net, dedVal(d.HauptErw, e.net)));
    const profSum = add('prof', prof.reduce((s, v) => s + v, 0));
    const ins = add('ins', insurance(d, st, kids, ers));
    const b0 = net - L.reduce((s, [, v]) => s + v, 0);
    if (married && ers.length > 1 && ers[1].net > 0 && ers[0].net > 0 && d.ZweitVerdiener) {
      const lower = Math.min(...ers.map((e, i) => e.net - prof[i]));
      add('second', Math.min(lower, dedVal(d.ZweitVerdiener, x && x.zvSum ? net : lower)));
    }
    const pre = () => net - L.reduce((s, [, v]) => s + v, 0);
    // Relief for modest incomes: rate × (threshold − income), or a full amount phased out above itself (VD, BE).
    const r = x && x.relief;
    if (r) {
      const b = pre();
      const pick = o => married ? (kids && o.marriedKids) || o.married : kids ? o.parent ?? o.married : o.single;
      if (r.W) {
        const D = pick(r.full) + r.full.kid * Math.max(0, kids - (married ? 0 : 1));
        const T = (married ? r.T.married : r.T.single) + r.kidT * kids, W = married || kids ? r.W.other : r.W.single;
        add('relief', D * Math.min(1, Math.max(0, 1 - (b - T) / W)));
      } else if (r.full) {
        const D = pick(r.full) + (r.full.kid || 0) * Math.max(0, kids - (married ? 0 : 1));
        add('relief', Math.min(D, Math.max(0, D - r.rate * (b - (r.start ? pick(r.start) : D)))));
      } else add('relief', Math.max(0, r.rate * (pick(r.T) + (r.kid || 0) * kids - b)));
    }
    // ESTV assumes you rent, paying a quarter of your net pay (VD caps it at a flat rent per household).
    const rent = x && x.rent;
    if (rent) {
      const R = Math.min(rent.flat ? (married || kids ? rent.flat.family : rent.flat.single) + rent.flat.kid * kids : Infinity, rent.share * net);
      add('rent', Math.min(rent.max, Math.max(0, rent.pct * R - rent.minus * b0)));
    }
    const famStart = L.length;
    const kidKey = KID_KEYS.find(k => d[k]);
    if (kids && kidKey) {
      const first = d.SozKinderAnzahlUeber2 ? Math.min(kids, 2) : kids;
      let v = first * dedVal(d[kidKey], net) + (kids - first) * dedVal(d.SozKinderAnzahlUeber2, net);
      if (d.SozZusKinderabzugAbAnzahl3) v += Math.max(0, kids - 2) * dedVal(d.SozZusKinderabzugAbAnzahl3, net);
      if (x && x.kidPhase) v = Math.max(kids * mx(d[kidKey]) - kids * x.kidPhase.cut * Math.ceil(Math.max(0, b0 - x.kidPhase.from) / x.kidPhase.step), kids * d[kidKey][3]);
      add('kids', v);
    }
    if (kids && d.EigenBetr) add('care', kids * dedVal(d.EigenBetr, net));
    if (married) add('pers', dedVal(d.SozVerheiratet, b0) + (x && x.zusMarried ? dedVal(d.SozZusAbzug, net) : 0));
    else if (kids && d.SozAlleinerzieher) add('pers', dedVal(d.SozAlleinerzieher, b0) + (x && x.parentSingle ? dedVal(d.SozLedig, net) : 0));
    else add('pers', dedVal(d.SozLedig, net));
    if (!married) add('pers2', dedVal(d.SozAlleinEigenemHaushalt, net) + (kids ? dedVal(d.SozKindAlleinerzieher, net) : 0));
    if (x && x.famPhase) {
      const f = x.famPhase, cut = b0 > f.to ? Infinity : f.cut * Math.floor(Math.max(0, b0 - f.from) / f.step);
      let left = cut;
      for (const l of L.slice(famStart)) { const c = Math.min(l[1], left); l[1] -= c; left -= c; }
    }
    if (x && !x.zusMarried) add('zus', dedVal(d.SozZusAbzug, net));
    if (x && x.steps) {
      const rows = married || (kids && !x.stepsParentSingle) ? x.steps.family : x.steps.single;
      if (rows) add('modest', stepVal(rows, x.stepBase === 'netProf' ? net - profSum : x.stepBase === 'all' ? pre() : net - profSum - ins));
    }
    return { ti: Math.max(0, pre()), lines: L };
  }

  // Federal, cantonal, communal and church tax of one household. ers: each earner's net pay and BVG contribution.
  function householdTax(D, can, loc, st, kids, ers, church) {
    const C = D.cantons[can], x = C.x || {};
    const fedT = taxable(D.fedDed, null, st, kids, ers);
    const fedBase = Math.floor(fedT.ti / 100) * 100;
    const fedScale = pickScale(D.fed, st === 'single' ? 'single' : 'married');
    let fed = Math.max(0, scaleTax(fedScale, fedBase) - D.fedKid * kids);
    if (fed < 25) fed = 0;

    const canT = taxable(C.ded, x, st, kids, ers);
    const ti = canT.ti;
    let simple = simpleTax(C.k, ti, st, kids, x.idx, x.quot);
    if (x.simpleKid) simple = Math.max(0, simple - x.simpleKid * kids);
    let simpleCity = C.gem.length ? simpleTax(C.gem, ti, st, kids, x.idxGem, x.quot) : simple;
    if (x.simpleCap) { simple = Math.min(simple, x.simpleCap * ti); simpleCity = Math.min(simpleCity, x.simpleCap * ti); }
    let canton = simple * (loc.canton / 100 * (x.canMul ?? 1) + (x.canAdd ?? 0));
    let city = simpleCity * loc.city / 100;
    if (x.rebate && st !== 'single') {
      const rb = v => Math.min(x.rebate.max, Math.max(x.rebate.min, x.rebate.rate * v));
      canton = Math.max(0, canton - rb(canton));
      city = Math.max(0, city - rb(city));
    }
    if (x.cantonKid) canton = Math.max(0, canton - x.cantonKid * kids);
    if (x.cantonMin) canton = Math.max(x.cantonMin, canton);
    const chu = church ? (x.churchOnCanton ? canton : simple) * loc.church / 100 : 0;
    const persons = st === 'married' ? 2 : 1;
    const personal = x.personal ? x.personal[0] + (persons - 1) * x.personal[1] : 0;
    const credit = (x.creditKid || 0) * kids;
    return { fed, fedTi: fedT.ti, fedLines: fedT.lines, ti, lines: canT.lines, simple, simpleCity, canton, city, church: chu, personal, credit,
      total: Math.max(0, fed + canton + city + chu + personal - credit) };
  }

  const CANTONS = Object.keys(DATA.cantons).sort();
  const AGES = ['25', '35', '45', '55'];
  const MIN_ROLES = ['minister', 'pm'];

  const P = {
    ahv: .053, alv: .011, alvCap: 148200, nbu: .004,
    // Mandatory BVG minimum: savings credit by age on the coordinated salary, split evenly with the employer.
    bvg: { entry: 22680, coord: 26460, max: 90720, minCoord: 3780, rate: { 25: .07, 35: .10, 45: .15, 55: .18 } },
    fzMin: 7560,
    fedTop: { single: 793900, married: 941300 },
    brackets: [],
  };

  // Monthly gross, full-time: Geneva's minimum wage (CHF 24.48 an hour, 2025, 40 h a week) and the BFS median (2022).
  const REF_WAGES = [
    { key: 'min', m: 24.48 * 40 * 52 / 12, year: 2025, color: '--w-min' },
    { key: 'med', m: 6788, year: 2022, color: '--w-med' },
  ];

  // Federal Council pay from 1 Jan 2026; its 30 000 representation allowance and the President's 12 000 are tax-free.
  // Federal Assembly: 2023 averages from the Parliamentary Services, taxable pay and tax-free expense allowances.
  const GOV = { salary: 478166, expenses: 30000, president: 12000, nr: { pay: 76138, free: 61782 }, sr: { pay: 89023, free: 66584 }, parlBvg: 14516 };
  const DOC_GOV = 'https://www.fedlex.admin.ch/eli/cc/1989/1157_1157_1157/de';
  const DOC_PARL = 'https://de.wikipedia.org/wiki/Abgeordnetenentsch%C3%A4digung';
  const POLITICIANS = [
    { kind: 'stat', key: 'pm', icon: '⭐', regime: 'pm', lo: GOV.salary, hi: GOV.salary, url: DOC_GOV },
    { kind: 'stat', key: 'minister', icon: '💼', regime: 'minister', lo: GOV.salary, hi: GOV.salary, url: DOC_GOV },
    { kind: 'stat', key: 'senator', icon: '🎩', regime: 'senator', lo: GOV.sr.pay, hi: GOV.sr.pay, url: DOC_PARL },
    { kind: 'stat', key: 'mp', icon: '🏛️', regime: 'mp', lo: GOV.nr.pay, hi: GOV.nr.pay, url: DOC_PARL },
  ];

  const SRC = {
    estv: 'https://swisstaxcalculator.estv.admin.ch/',
    ahv: 'https://www.ahv-iv.ch/p/2.01.e',
    fz: 'https://www.bsv.admin.ch/dam/de/sd-web/acU7RgJgeisY/Arten%20und%20Ans%C3%A4tze%20der%20Familienzulagen_2026.pdf',
    fzMemo: 'https://www.ahv-iv.ch/p/6.08.d',
    bvv2: 'https://www.fedlex.admin.ch/eli/cc/1984/543_543_543/de',
    vat: 'https://www.estv.admin.ch/estv/de/home/mehrwertsteuer/mwst-steuersaetze.html',
    wages: 'https://www.bfs.admin.ch/bfs/de/home/statistiken/arbeit-erwerb/loehne-erwerbseinkommen-arbeitskosten.html',
    govPay: DOC_GOV,
    parlPay: 'https://www.fedlex.admin.ch/eli/cc/1988/1872_1872_1872/de',
    parlAvg: DOC_PARL,
  };

  // Commune rows by name, for the church rate (filled when communes.js loads).
  const COMMUNE = {};
  const cantonOf = s => DATA.cantons[s.region] ? s.region : 'ZH';

  // One earner's social contributions. FAK levies are the canton's family allowance fund and its other payroll levies.
  function social(G, can, age) {
    const c = DATA.cantons[can], b = P.bvg;
    const ahv = P.ahv * G, alv = P.alv * Math.min(G, P.alvCap), nbu = P.nbu * Math.min(G, P.alvCap);
    const coord = G < b.entry ? 0 : Math.max(b.minCoord, Math.min(G, b.max) - b.coord);
    const bvg = coord * (b.rate[age] || b.rate[35]) / 2;
    const fakEe = c.fak[1] / 100 * G, fakEr = c.fak[0] / 100 * G;
    return { G, ahv, alv, nbu, fakEe, fakEr, coord, bvg, bvgEr: bvg, ee: ahv + alv + nbu + fakEe, er: ahv + alv + fakEr, net: G - ahv - alv - nbu - fakEe - bvg };
  }

  const allowance = (can, kids) => { const [a, b] = DATA.cantons[can].fz; return 12 * (Math.min(kids, 2) * a + Math.max(0, kids - 2) * b); };
  const status = s => s.household === 'joint' ? 'married' : s.children ? 'parent' : 'single';
  const churchRate = s => { const c = COMMUNE[s.commune]; return c && c.region === cantonOf(s) ? c.rom : 0; };
  const location = s => ({ canton: DATA.cantons[cantonOf(s)].rate, city: s.local, church: churchRate(s) });

  // Your share = the household with your pay minus the household without it, so per-head taxes owed anyway drop out.
  // The family allowance goes to whoever earns enough to claim it: it's yours only when your partner can't claim it.
  function incomeTaxes(u, s, env) {
    const can = cantonOf(s), st = status(s), kids = s.children, p = st === 'married' ? env.partner : null;
    const loc = location(s), fz = allowance(can, kids);
    const run = me => {
      const ers = [{ G: me ? me.G : 0, net: me ? me.net : 0, bvg: me ? me.bvg : 0 }];
      if (p) ers.push({ G: p.G, net: p.net, bvg: p.bvg });
      const claimer = ers.find(e => e.G >= P.fzMin);
      const kz = kids && claimer ? fz : 0;
      if (kz) claimer.other = kz;
      return { ...householdTax(DATA, can, loc, st, kids, ers, s.cadre), kz };
    };
    const w = run(u), wo = run(null);
    const d = k => w[k] - wo[k];
    return {
      w, wo, st, loc, fz,
      fed: d('fed'), can: d('canton') + d('personal') - d('credit'), com: d('city'), church: d('church'), kz: d('kz'),
      total: d('total'),
    };
  }

  const vatOf = (net, s) => s.vat ? Math.max(0, net) * s.vatRate / (100 + s.vatRate) : 0;
  const partsOf = (u, tax, vat) => ({ er: u.er, bvgEr: u.bvgEr, ee: u.ee, bvg: u.bvg, fed: tax.fed, can: tax.can, com: tax.com, church: tax.church, kz: -tax.kz, vat });

  // Federal Council: AHV/IV/EO and ALV like an employee, no BVG (their pension is paid by the Confederation), taxed as a salary.
  function computeMinister(G, s, env, role = s.minRole) {
    const ahv = P.ahv * G, alv = P.alv * Math.min(G, P.alvCap);
    const u = { G, m: G / 12, ahv, alv, nbu: 0, fakEe: 0, fakEr: 0, coord: 0, bvg: 0, bvgEr: 0, ee: ahv + alv, er: ahv + alv, net: G - ahv - alv, role };
    const tax = incomeTaxes(u, s, env);
    const allow = G > 0 ? GOV.expenses + (role === 'pm' ? GOV.president : 0) : 0;
    const cost = G + u.er + allow;
    const net = G - u.ee - tax.total + tax.kz + allow;
    const vat = vatOf(net, s);
    return { G, cost, net, u, tax, allow, regime: 'minister', parts: partsOf(u, tax, vat) };
  }

  // Federal Assembly: AHV/IV/EO on the allowances, a quarter of the federal BVG contribution paid by the member,
  // the federal BVG contribution taxed as income; expense allowances are tax-free.
  function computeParl(kind, s, env) {
    const g = GOV[kind], ahv = P.ahv * (g.pay - GOV.parlBvg), own = GOV.parlBvg / 4;
    const u = { G: g.pay, net: g.pay - ahv - own, bvg: own };
    const tax = incomeTaxes(u, { ...s, cadre: false }, env);
    return { net: g.pay - GOV.parlBvg - ahv - tax.total + tax.kz + g.free, allow: g.free };
  }

  function compute(G, s, env) {
    if (s.regime === 'minister') return computeMinister(G, s, env);
    const u = social(G, cantonOf(s), s.size);
    u.m = G / s.factor;
    const tax = incomeTaxes(u, s, env);
    const cost = G + u.er + u.bvgEr;
    const net = G - u.ee - u.bvg - tax.total + tax.kz;
    const vat = vatOf(net, s);
    return { G, cost, net, u, tax, parts: partsOf(u, tax, vat) };
  }

  const COMP_KEYS = ['er', 'bvgEr', 'ee', 'bvg', 'fed', 'can', 'com', 'church', 'kz', 'vat'];
  const COMP_COLORS = {
    er: 'var(--k-er)', bvgEr: 'var(--k-vm)', ee: 'var(--k-ee)', bvg: 'var(--k-vm)', fed: 'var(--k-fed)', can: 'var(--k-reg)',
    com: 'var(--k-com)', church: 'var(--k-bbsz)', kz: 'var(--k-pa)', vat: 'var(--k-vat)',
  };
  const TAXES = ['fed', 'can', 'com', 'church', 'kz'];
  const ROW_DEFS = [
    { key: 'full', color: 'var(--c-full)', set: ['er', 'bvgEr', 'ee', 'bvg', ...TAXES, 'vat'], base: 'cost' },
    { key: 'work', color: 'var(--c-work)', set: ['er', 'bvgEr', 'ee', 'bvg', ...TAXES], base: 'cost' },
    { key: 'employee', color: 'var(--c-emp)', set: ['ee', 'bvg', ...TAXES], base: 'G' },
  ];
  const BASE_TIP = { cost: 'cost', G: 'gross' };

  const n0 = v => num(v, v % 1 ? 2 : 0);
  const LINE_KEYS = { prof: 'ded.prof', ins: 'ded.ins', second: 'ded.second', relief: 'ded.relief', rent: 'ded.rent', kids: 'ded.kids', care: 'ded.care', pers: 'ded.pers', pers2: 'ded.pers2', zus: 'ded.zus', modest: 'ded.modest' };
  const dedRows = lines => lines.map(([k, v]) => `<tr><td>− ${t(LINE_KEYS[k])}</td><td>−${eur(v)}</td></tr>`).join('');

  function tips(x) {
    const s = x.s;
    const canName = () => t('canton.' + cantonOf(s));
    const hh = r => r && r.tax.w;
    const ministerTips = {
      gross: r => `<h4>${t('bd.minGross')}</h4><p>${t('tip.minGross')}</p>${sources('govPay')}`,
      cost: r => `<h4>${t('bd.stateCost')}</h4><p>${t('tip.stateCost')}</p>${r ? `<table>
        <tr><td>${t('bd.minGross')}</td><td>${eur(r.G)}</td></tr>
        <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
        <tr><td>${t('bd.allow')}</td><td>${eur(r.allow)}</td></tr>
        <tr class="t"><td>${t('total')}</td><td>${eur(r.cost)}</td></tr></table>` : ''}`,
      allow: r => `<h4>${t('bd.allow')}</h4><p>${t('tip.allow')}</p>${sources('govPay')}`,
      bvg: () => `<h4>${t('comp.bvg')}</h4><p>${t('tip.minBvg')}</p>`,
      bvgEr: () => `<h4>${t('comp.bvgEr')}</h4><p>${t('tip.minBvg')}</p>`,
    };
    const tipBuilders = {
      ministerRules: () => `<h4>${t('ministerOn')}</h4><p>${t('tip.ministerRules')}</p>${sources('govPay', 'parlPay', 'parlAvg')}`,
      factor12: () => `<h4>${t('tip.monthsPaid', 12)}</h4><p>${t('tip.f12')}</p>`,
      factor13: () => `<h4>${t('tip.monthsPaid', 13)}</h4><p>${t('tip.f13')}</p>`,
      cadre: () => `<h4>${t('cadre')}</h4><p>${t('tip.church')}</p>${sources('estv')}`,
      joint: () => `<h4>${t('tip.jointH')}</h4><p>${t('tip.joint')}</p>${sources('estv')}`,
      reg: () => `<h4>${t('region')}</h4><p>${t('tip.reg')}</p>${sources('estv')}`,
      localRule: () => `<h4>${t('localLabel')}</h4><p>${t('tip.local', canName())}</p>${sources('estv')}`,
      size: () => `<h4>${t('employerSize')}</h4><p>${t('tip.size', eur(P.bvg.entry), eur(P.bvg.coord), eur(P.bvg.max), eur(P.bvg.minCoord))}</p>${sources('bvv2', 'estv')}`,
      gross: r => `<h4>${t('bd.gross')}</h4><p>${r ? t('tip.grossCalc', eur2(r.u.m), s.factor, eur(r.G)) : ''} ${t('tip.gross')}</p>`,
      cost: r => {
        if (!r) return `<h4>${t('tip.costH')}</h4><p>${t('tip.costShort')}</p>`;
        return `<h4>${t('bd.cost')}</h4><table>
          <tr><td>${t('bd.gross')}</td><td>${eur(r.G)}</td></tr>
          <tr><td>${t('comp.er')}</td><td>${eur(r.parts.er)}</td></tr>
          <tr><td>${t('comp.bvgEr')}</td><td>${eur(r.parts.bvgEr)}</td></tr>
          <tr class="t"><td>${t('tip.costH')}</td><td>${eur(r.cost)}</td></tr></table>
          <p class="m">${t('tip.costM')}</p>`;
      },
      er: r => {
        const c = DATA.cantons[cantonOf(s)];
        return `<h4>${t('comp.er')}</h4><p>${t('tip.er')}</p>${r ? `<table>
          <tr><td>AHV/IV/EO ${pct(P.ahv, 1)}</td><td>${eur(r.u.ahv)}</td></tr>
          <tr><td>${t('tip.alv', eur(P.alvCap))}</td><td>${eur(r.u.alv)}</td></tr>
          <tr><td>${t('tip.fak', canName())} ${pct(c.fak[0] / 100, 2)}</td><td>${eur(r.u.fakEr)}</td></tr>
          <tr class="t"><td>${t('total')}</td><td>${eur(r.parts.er)}</td></tr></table>` : ''}
          <p class="m">${t('tip.erM')}</p>${sources('ahv', 'fz')}`;
      },
      bvgEr: r => `<h4>${t('comp.bvgEr')}</h4><p>${t('tip.bvgEr')}</p>${r ? `<p>${pct(P.bvg.rate[s.size] / 2, 1)} × ${eur(r.u.coord)} = <b>${eur(r.parts.bvgEr)}</b></p>` : ''}${sources('bvv2')}`,
      ee: r => {
        const c = DATA.cantons[cantonOf(s)];
        return `<h4>${t('comp.ee')}</h4><p>${t('tip.ee')}</p>${r ? `<table>
          <tr><td>AHV/IV/EO ${pct(P.ahv, 1)}</td><td>${eur(r.u.ahv)}</td></tr>
          <tr><td>${t('tip.alv', eur(P.alvCap))}</td><td>${eur(r.u.alv)}</td></tr>
          ${r.u.nbu ? `<tr><td>${t('tip.nbu')} ${pct(P.nbu, 1)}</td><td>${eur(r.u.nbu)}</td></tr>` : ''}
          ${r.u.fakEe ? `<tr><td>${t('tip.fak', canName())} ${pct(c.fak[1] / 100, 3)}</td><td>${eur(r.u.fakEe)}</td></tr>` : ''}
          <tr class="t"><td>${t('youPay')}</td><td>${eur(r.parts.ee)}</td></tr></table>` : ''}
          <p class="m">${t('tip.eeM')}</p>${sources('ahv', 'estv')}`;
      },
      bvg: r => `<h4>${t('comp.bvg')}</h4><p>${t('tip.bvg', eur(P.bvg.entry), eur(P.bvg.coord), eur(P.bvg.max))}</p>
        ${r && r.u.coord ? `<p>${t('tip.bvgCalc', eur(r.u.coord), pct(P.bvg.rate[s.size] || .1, 0), eur(r.parts.bvg))}</p>` : ''}<p class="m">${t('tip.bvgM')}</p>${sources('bvv2', 'estv')}`,
      netSalary: r => `<h4>${t('bd.netSalary')}</h4><p>${t('tip.netSalary', r ? ` <b>${eur(r.u.net)}</b>, ${eur(r.u.net / s.factor)} × ${s.factor}` : '')}</p>`,
      taxable: r => {
        const h = hh(r);
        return `<h4>${t('bd.taxableCan')}</h4><p>${t('tip.taxable', canName())}</p>${h ? `<table>
          <tr><td>${t('tip.hhNet')}</td><td>${eur(h.lines.reduce((a, [, v]) => a + v, h.ti))}</td></tr>
          ${dedRows(h.lines)}
          <tr class="t"><td>${t('bd.taxableCan')}</td><td>${eur(h.ti)}</td></tr></table>` : ''}<p class="m">${t('tip.taxableM')}</p>${sources('estv')}`;
      },
      fedTaxable: r => {
        const h = hh(r);
        return `<h4>${t('bd.taxableFed')}</h4><p>${t('tip.taxableFed')}</p>${h ? `<table>
          <tr><td>${t('tip.hhNet')}</td><td>${eur(h.fedLines.reduce((a, [, v]) => a + v, h.fedTi))}</td></tr>
          ${dedRows(h.fedLines)}
          <tr class="t"><td>${t('bd.taxableFed')}</td><td>${eur(h.fedTi)}</td></tr></table>` : ''}${sources('estv')}`;
      },
      fed: r => {
        const T = r && r.tax;
        return `<h4>${t('comp.fed')}</h4><p>${t('tip.fed', eur(DATA.fedKid))}</p>${T ? `<table>
          <tr><td>${t('tip.taxOn', eur(T.w.fedTi))}</td><td>${eur(T.w.fed)}</td></tr>
          ${T.wo.fed ? `<tr><td>− ${t('tip.without')}</td><td>−${eur(T.wo.fed)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.yours')}</td><td>${eur(r.parts.fed)}</td></tr></table>` : ''}<p class="m">${t('tip.fedM')}</p>${sources('estv')}`;
      },
      can: r => {
        const T = r && r.tax, w = T && T.w;
        return `<h4>${t('comp.can')}</h4><p>${t('tip.can', canName(), n0(DATA.cantons[cantonOf(s)].rate))}</p>${w ? `<table>
          <tr><td>${t('tip.simple', eur(w.ti))}</td><td>${eur(w.simple)}</td></tr>
          <tr><td>${t('tip.canTax')}</td><td>${eur(w.canton)}</td></tr>
          ${w.personal ? `<tr><td>+ ${t('tip.personal')}</td><td>${eur(w.personal)}</td></tr>` : ''}
          ${w.credit ? `<tr><td>− ${t('tip.credit')}</td><td>−${eur(w.credit)}</td></tr>` : ''}
          ${T.wo.canton || T.wo.personal ? `<tr><td>− ${t('tip.without')}</td><td>−${eur(T.wo.canton + T.wo.personal - T.wo.credit)}</td></tr>` : ''}
          <tr class="t"><td>${t('tip.yours')}</td><td>${eur(r.parts.can)}</td></tr></table>` : ''}<p class="m">${t('tip.canM')}</p>${sources('estv')}`;
      },
      com: r => {
        const T = r && r.tax, c = x.commune();
        return `<h4>${t('comp.com')}</h4><p>${t('tip.com', c ? esc(c.name) : canName(), n0(s.local), num(x.localRange()[0], 0) + '%', num(x.localRange()[1], 0) + '%')}</p>
          ${T ? `<p>${eur(T.w.simpleCity)} × ${n0(s.local)}% = <b>${eur(T.w.city)}</b>${T.wo.city ? ` − ${eur(T.wo.city)} ${t('tip.withoutShort')} = <b>${eur(r.parts.com)}</b>` : ''}</p>` : ''}${sources('estv')}`;
      },
      church: r => `<h4>${t('comp.church')}</h4><p>${t('tip.church')}</p>${r && s.cadre ? `<p>${n0(r.tax.loc.church)}% → <b>${eur(r.parts.church)}</b></p>` : ''}${sources('estv')}`,
      kz: r => {
        const c = DATA.cantons[cantonOf(s)];
        return `<h4>${t('comp.kz')}</h4><p>${t('tip.kz', canName(), eur(c.fz[0]), eur(c.fz[1]), eur(P.fzMin))}</p>
          ${r && r.tax.w.kz ? `<p>${t('tip.kzCalc', eur(r.tax.w.kz), eur(-r.parts.kz))}</p>` : ''}${sources('fz', 'fzMemo')}`;
      },
      vat: r => `<h4>${t('tip.vatH')}</h4>
        <p>${t('tip.vat1', vr(s.vatRate) + '%', eur(100), eur(100 + s.vatRate, 2), eur(s.vatRate, 2))}</p>
        <p>${t('tip.vat2', vr(s.vatRate), vr(100 + s.vatRate), pct(x.vatShare(), 2))}</p>
        ${r ? `<p>${t('tip.vat3', eur(r.net), pct(x.vatShare(), 2), eur(r.parts.vat))}</p>` : ''}
        <p class="m">${t('tip.vatM')}</p>${sources('vat')}`,
      net: r => `<h4>${t('bd.net')}</h4><p>${t('tip.net', r ? t('tip.netCalc', eur(r.net), eur(r.net / 12)) : '')}</p>`,
      yours: r => `<h4>${s.vat ? t('tip.yoursH') : t('yourNetPay')}</h4><p>${s.vat ? t('tip.yoursVat') : t('tip.yoursNoVat')}${r ? t('tip.yoursCalc', eur(r.net - r.parts.vat), pct((r.net - r.parts.vat) / r.cost)) : ''}</p>`,
    };
    return { tipBuilders, ministerTips };
  }

  function breakdown(r, x) {
    const s = x.s, p = r.parts, u = r.u, T = r.tax, c = x.commune(), min = r.regime === 'minister';
    const L = [{ op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G }];
    L.push({ op: '+', k: 'er', label: t('comp.er'), v: p.er, tax: p.er, cls: 'sub' });
    if (p.bvgEr) L.push({ op: '+', k: 'bvgEr', label: t('comp.bvgEr'), v: p.bvgEr, tax: p.bvgEr, cls: 'sub' });
    if (min) L.push({ op: '+', k: 'allow', label: t('bd.allow'), v: r.allow, cls: 'sub' });
    L.push(
      { op: '=', k: 'cost', label: t(min ? 'bd.stateCost' : 'bd.cost'), v: r.cost, cls: 'tot' },
      { op: '', k: 'gross', label: t(min ? 'bd.minGross' : 'bd.gross'), v: r.G },
      { op: '−', k: 'ee', label: t('comp.ee'), v: p.ee, tax: p.ee },
    );
    if (p.bvg) L.push({ op: '−', k: 'bvg', label: t('comp.bvg'), v: p.bvg, tax: p.bvg });
    L.push({ op: '=', k: 'netSalary', label: t('bd.netSalary'), v: u.net, cls: 'tot' });
    if (Math.abs(p.kz) > .5) L.push({ op: '+', k: 'kz', label: t('comp.kz'), v: -p.kz, tax: p.kz });
    L.push(
      { op: '', k: 'taxable', label: t('bd.taxableCan'), v: T.w.ti, cls: 'sub' },
      { op: '', k: 'fedTaxable', label: t('bd.taxableFed'), v: T.w.fedTi, cls: 'sub' },
      { op: '−', k: 'fed', label: t('comp.fed'), v: p.fed, tax: p.fed },
      { op: '−', k: 'can', label: `${t('comp.can')} (${cantonOf(s)})`, v: p.can, tax: p.can },
      { op: '−', k: 'com', label: `${t('comp.com')} (${n0(s.local)}%${c ? ', ' + c.name : ''})`, v: p.com, tax: p.com },
    );
    if (s.cadre) L.push({ op: '−', k: 'church', label: t('comp.church'), v: p.church, tax: p.church });
    if (min) L.push({ op: '+', k: 'allow', label: t('bd.allow'), v: r.allow, cls: 'sub' });
    L.push({ op: '=', k: 'net', label: t('bd.net'), v: r.net, cls: 'tot' });
    return L;
  }

  // Low-wage zone: the BVG starts at its entry threshold on a minimum coordinated salary, and cantonal reliefs for
  // modest incomes phase out.
  function trap(x) {
    const s = x.s, b = P.bvg, band = [b.entry / s.factor, (b.coord + b.minCoord) / s.factor];
    return { band, text: [x.fmtM(band[0], 10), x.fmtM(band[1], 10) + x.perUnit(), eur(b.minCoord), eur(b.minCoord * (b.rate[s.size] || .1) / 2)] };
  }

  // Above this the federal tax is a flat 11.5% of all taxable income, so the marginal rate drops.
  function top(x) {
    const s = x.s, st = status(s), cap = st === 'single' ? P.fedTop.single : P.fedTop.married;
    const at = x.firstMonthly(m => compute(m * s.factor, s, x.env()).tax.w.fedTi > cap, 1000, 200000);
    if (!at) return null;
    return { at, text: [x.fmtM(at, 100) + x.perUnit(), eur(cap)] };
  }

  const localRange = (list, s) => {
    const own = s ? list.filter(c => c.region === cantonOf(s)) : list;
    const rates = (own.length ? own : list).map(c => c.rate);
    return rates.length ? [Math.min(...rates), Math.max(...rates)] : [0, 200];
  };

  return {
    P, SRC, REF_WAGES, POLITICIANS, ROW_DEFS, COMP_KEYS, COMP_COLORS, BASE_TIP,
    currency: 'CHF', nextStep: 100,
    regions: CANTONS, sizes: AGES, minRoles: MIN_ROLES, factors: [12, 13], factorDigits: 0, vatStandard: 8.1,
    features: { cadre: true },
    state: { salary: 6500, factor: 13, minRole: 'minister', cadre: false, commune: 'Zürich', region: 'ZH', local: 119, vatRate: 8.1, size: '35' },
    urlFields: {
      months: ['factor', 'num', [12, 13]], church: ['cadre', 'bool'],
      commune: ['commune', 'str'], canton: ['region', 'str', CANTONS], communal: ['local', 'num'],
      age: ['size', 'str', AGES], role: ['minRole', 'str', MIN_ROLES],
    },
    local: { label: 'localLabel', tip: 'localRule', digits: 1, step: 1, range: localRange, notDue: () => false, hideInMinister: false },
    parseCommunes: list => list.map(([name, region, rate, rom, ref]) => (COMMUNE[name] = { name, rate, region, sub: region, id: name, rom, ref })),
    communeLabel: c => `${c.name} (${c.region})`,
    communeTag: c => `${n0(c.rate)}%`,
    communeHint: c => t('communeHint', t('canton.' + c.region), n0(c.rate) + '%'),
    minSalary: () => GOV.salary,
    env: s => ({ partner: social(Math.max(0, s.partnerGross || 0), cantonOf(s), s.size) }),
    compute,
    own: (p, plain, env) => p.regime === 'mp' ? computeParl('nr', plain, env) : p.regime === 'senator' ? computeParl('sr', plain, env)
      : (r => ({ net: r.net, allow: r.allow }))(computeMinister(p.lo, { ...plain, regime: 'minister' }, env, p.regime)),
    segLabels: { kz: 'kzLost' }, recvLabels: { kz: 'kzReceived' },
    polNote: p => 'polNote.' + p.regime,
    polTipNote: p => 'polTipNote.' + p.key,
    polSrc: p => t('src.pol.' + p.key),
    polNoteLink: 'parlAvg',
    refKeys: ['social', 'bvg', 'fed', 'canton', 'deductions', 'family', 'vat', 'minister', 'notIncl'],
    tips, breakdown, trap, top,
  };
};
