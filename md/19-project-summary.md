{ 
  "title": "Finálny Súhrn", 
  "description": "13-01-2026", 
  "url": "https://www.fiit.stuba.sk/", 
  "topics": [],
  "date": "13-01-2026"
} 

%%%

# Finálny Súhrn

**ID projektu:** 2025_PRJ_008  
**Názov projektu:** SIGNALIS  

## Popis projektu
SIGNALIS je produkt skladajúci sa z dvoch hlavných komponentov – **IRIS** a **HERMES**.  
IRIS je palubný komponent umiestnený v rakete, ktorý zaznamenáva a spracúva telemetrické údaje zo senzorov, ako sú napríklad dosiahnutá výška, teplota, tlak a ďalšie fyzikálne veličiny.  
HERMES je základná stanica, ktorá tieto telemetrické dáta prijíma bezdrôtovou komunikáciou a umožňuje ich ďalšiu analýzu a vyhodnocovanie.

---

## Rozdelenie tímu

| ID           | Meno              | Pozícia                                                                 | Kontakt |
|--------------|-------------------|-------------------------------------------------------------------------|---------|
| 2025_ST_015  | Adam Hladík       | LoRa, rádio komunikácia, vedúci developer                               | [GitHub](https://github.com/Hladikes), [Email](mailto:adi.hladik@gmail.com) |
| 2025_ST_033  | Dominik Mifkovič  | Board prototyper, PCB dizajnér, dátový analytik                          | [GitHub](https://github.com/dominikmifkovic), [Email](mailto:dominikmifkovic@gmail.com) |
| 2025_ST_044  | Ján Sližik        | Softvérový inžinier, marketing, EA expert                                          | [GitHub](https://github.com/Mushishy), [Email](mailto:xslizik@stuba.sk) |
| 2025_ST_053  | UR                | Tímový vedúci, projektový manažér, mechanický inžinier, CAD modelár     | [GitHub](https://github.com/xurger), [Email](mailto:linens-nova.5z@icloud.com) |

---

## Motivácia

Začínajúci raketoví modelári si často vopred navrhnú raketu a vypočítajú jej letovú dráhu. Na overenie týchto výpočtov alebo na podrobnejšiu analýzu skutočných letov sa používajú pokročilé meracie zariadenia.

Tieto systémy sú však pomerne drahé (napr. okolo 500 €) a pre začínajúcich modelárov predstavujú značné finančné riziko. V prípade neúspešného letu môže dôjsť k strate zariadenia, čo môže viesť k výraznému finančnému zaťaženiu a odradeniu od ďalšieho experimentovania.

Práve preto prichádzame s riešením v podobe rádovo lacnejšej a dostupnejšej alternatívy, ktorá umožní aj začínajúcim nadšencom bezpečne testovať a analyzovať lety ich rakiet. Dodatočne, vďaka pokročilým senzorom, ktoré naše riešenie ponúka, môže byť systém využitý aj na meranie atmosférického tlaku, teploty a ďalších fyzikálnych veličín.

Tento projekt sme si vybrali, nakoľko nás zaujíma tematika modelových rakiet a jej prepojenie s modernými informačnými systémami. Zároveň vnímame, že súčasný trh s elektronikou pre tieto zariadenia je výrazne predražený, a naším cieľom je túto medzeru zaplniť.

---

## Cieľ a pridaná hodnota

Finálnym cieľom projektu je vytvorenie dvoch plne funkčných komponentov (IRIS a HERMES), ktoré budú schopné spoľahlivo zaznamenávať potrebné údaje a komunikovať medzi sebou na vzdialenosť minimálne 3 km.

Pridanou hodnotou riešenia je nízka cena v porovnaní s existujúcimi komerčnými riešeniami, otvorenosť a možnosť ďalšieho rozširovania, ako aj edukatívny prínos pre začínajúcich raketových modelárov, ktorí získajú prístup k detailným letovým dátam bez vysokých vstupných nákladov.

---

## Zákazník a hodnoty

Cieľovými zákazníkmi sú predovšetkým raketoví modelári, študenti technických odborov a technologickí nadšenci, ktorí majú záujem o analýzu letových dát, experimentovanie a vzdelávanie v oblasti elektroniky, senzoriky a bezdrôtovej komunikácie. Hodnotou pre zákazníka je dostupnosť, spoľahlivosť, modularita a možnosť ďalšieho vývoja systému podľa individuálnych potrieb.

---

## Popis riešenia

Detailný popis riešenia jednotlivých komponentov, ako aj práce vykonanej počas semestra jednotlivými členmi tímu, je evidovaný v samostatných zápisniciach a článkoch, ktoré sú dostupné prostredníctvom prehliadania našej projektovej stránky.

---

## Projektový plán

- **Odhadovaný čas na prácu:** priemerne 14 hodín týždenne na každého člena tímu (ide o priemerný odhad; v niektorých týždňoch prebiehali stretnutia aj 3× týždenne, inokedy, napríklad počas sviatkov, len krátke 30-minútové konzultácie)
- **Predpokladaný stav v čase prezentácie MVP:** funkčný produkt ✅
- **Hlavné míľniky:**
  - Príprava ✅  
  - Implementácia ✅  
  - Testovanie ✅  
  - Prezentácia ✅  

---

## Míľniky a výstupy

Do januára budú dodané:
- Prototyp ✅  
- Prezentácia ✅  
- Dokumentácia ✅  

---

## Očakávané výstupy

- Dokumentácia v podobe tejto stránky – KNIFE články, popisy výrobných procesov (napr. PCB), popisy vzniknutých problémov a ich riešení, EA diagramy
- Komponent IRIS (vrátane PCB, 3D tlačených komponentov a softvéru)

![](/report-images/prog-update1-iris/fit1.jpeg)

- Komponent HERMES (vrátane PCB, 3D tlačených komponentov a softvéru)

![](/report-images/prog-update5-hermes/assembly2.png)

---

## Riziká a závislosti

Riziká projektu spočívali primárne v príliš ambiciózne nastavenom rozsahu projektu, čo so sebou nieslo riziko, že sa nepodarí dokončiť všetky stanovené ciele v stanovenom čase. Ďalším významným rizikom boli dodacie lehoty jednotlivých komponentov, keďže sme objednávali viacero dielov zo zahraničia (napr. z Číny), vrátane plošných dosiek. Dlhé dodacie lehoty spomaľovali rýchly a iteratívny vývojový proces a predstavovali riziko nedodržania termínov.

Z hľadiska závislostí bola hlavnou závislosťou dostupnosť hardvéru a nástrojov potrebných na realizáciu projektu, ako sú spájkovačky, 3D tlačiarne, frézy a podobne. Z tohto dôvodu sme sa museli pravidelne (približne každý týždeň) stretávať u jedného z členov tímu, aby sme mohli na projekte efektívne pracovať.

---

## Reflexia

Pre každého z nás mal tento projekt výrazný prínos a umožnil nám naučiť sa množstvo nových praktických zručností. Naučili sme sa pracovať s 3D tlačiarňami, modelovať v CAD softvéri, pripravovať modely na tlač (slicing) alebo programovať CNC frézy. Získali sme skúsenosti s rôznymi typmi vrtákov a fréz, spájkovaním väčších aj menších komponentov, ako aj s rozoberaním osadených plošných dosiek pomocou teplovzdušnej stanice. Zároveň sme si prakticky overili viaceré fyzikálne zákony a koncepty ich implementáciou do softvéru a meraním pomocou senzorov.

Z hľadiska ďalšieho rozvoja je projekt v súčasnosti plne funkčný. Existuje však priestor na rozvoj mimo samotného prototypu. V prípade uvedenia projektu do sériovej výroby by bolo potrebné prepracovať niektoré časti dizajnu, napríklad s ohľadom na výrobný proces injection molding, alebo zvážiť outsourcing 3D tlače, keďže lokálna výroba nie je dobre škálovateľná. Dodatočne by oba komponenty mohli byť rozšírené o programovateľné rozhranie, ktoré by pokročilým používateľom umožnilo nastavovať rôzne limity a parametre systému.

---

## Kontext

**Inšpirácie:**
- https://www.youtube.com/@LafayetteSystems  
- https://www.youtube.com/@BPSspace  
- https://ieeexplore.ieee.org/document/11267717  
- https://github.com/SparkyVT/HPR-Rocket-Flight-Computer  
