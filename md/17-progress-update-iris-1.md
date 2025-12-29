{ 
  "title": "IRIS Progress Update 1", 
  "description": "29-12-2025", 
  "url": "https://www.fiit.stuba.sk/", 
  "topics": [],
  "date": "29-12-2025"
} 

%%%

# IRIS Progress Update 1

Ako už bolo spomenuté v úvodných reportoch, IRIS je komponent projektu SIGNALIS, ktorý je umiestnený priamo v rakete. Jeho úlohou je ukladať letové údaje (dáta zo senzorov, GPS polohu a pod.) a odosielať tieto údaje stanici HERMES vo forme telemetrických paketov.

V porovnaní s pôvodným návrhom bol zoznam súčiastok pre tento komponent mierne upravený. Nový zoznam súčiastok pre IRIS je nasledovný:
- Arduino Nano 33 BLE Sense Rev 2 (mikropočítač)
- LoRa rádio (`E220-900T22D`)
- MicroSD modul (generický, z AliExpressu) – používaný na prenos letových dát po lete
- MicroSD modul (Adafruit `XTSD 2 GB`, ID: `6038`) – používaný na záznam dát počas letu
- GPS modul (`GPS + BDS BeiDou Dual Module Flight Control` od `DFRobot`)
- 7.4 V 2S LiPo batéria, 900 mAh (generická, z AliExpressu)

Na overenie funkčnosti komponentu a správnosti výberu súčiastok bol vytvorený prvotný prototyp na breadboarde:

![](/report-images/prog-update1-iris/breadboard.png)

Samotný proces testovania (napr. využitie SDR) bol už ukázaný v predchádzajúcich reportoch. Ukázalo sa, že samotný návrh funguje bez problémov, a preto bol následne zahájený návrh PCB dosky.

Proces návrhu bol o niečo komplikovanejší ako v prípade komponentu HERMES, nakoľko táto doska sa musí zmestiť do trubice s priemerom približne 65 mm. Konkrétne ide o veľkosť BT-80 v kontexte modelárskeho raketárstva. Pre lepšiu predstavu je možné vidieť nasledujúci obrázok:

![](/report-images/prog-update1-iris/fiberglass.jpg)

Nejde o našu raketu, ale o ilustračný obrázok z nasledujúceho [zdroja](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXr_ElMImSsMGwkVw4G2l5WOmIQSFmVCj0bntUelemcJcXnTczCCggAj7EOWeOekx7KFxi8M9jWFXbV_YIszcX1cGSeDAmkC4WMGtupzfpf3nEUV9DUWrxOxmpgLY_F7iTsgcXVeBJ8-hO/s1600/Fiberglass.jpg), ktorý slúži len na jednoduchšiu vizualizáciu priestoru, do ktorého sa táto doska musí zmestiť. Väčšina obtiažnosti teda spočíva v návrhu dosky tak, aby sa do tohto priestoru vošla.

Prvotný návrh obsahoval horizontálny layout dvoch dosiek, ktoré boli umiestnené nad sebou (tzv. *stacked layout*) a prepojené konektormi. Návrhy dosiek:

![](/report-images/prog-update1-iris/iris-tb.png)

![](/report-images/prog-update1-iris/iris-bb.png)

Pred odoslaním dosiek do výroby boli najprv u nás doma vyfrézované ich tvary, aby mohol byť overený tento layout. Samotný proces frézovania bol popísaný v predchádzajúcich reportoch. Po vyfrézovaní mohli byť dosky uložené na seba, čo je možné vidieť na nasledujúcich obrázkoch:

![](/report-images/prog-update1-iris/stacked1.png)

![](/report-images/prog-update1-iris/stacked2.png)

V princípe tento koncept fungoval výborne, avšak problém nastal pri použití SMA konektora, kvôli ktorému sa zostava už nezmestila do definovaných rozmerov. Ako môžeme vidieť, bez samotného SMA konektora sa tieto dosky do tela rakety zmestia perfektne:

![](/report-images/prog-update1-iris/fit.png)

Bohužiaľ, po pridaní kábla to už možné nebolo. Keďže samotné rádio je veľmi veľké (resp. dlhé), nebolo možné ho efektívne presunúť, čo znamenalo, že tento prístup nefungoval a bolo potrebné nájsť alternatívne riešenie.

Ako alternatíva bol navrhnutý nový návrh PCB dosky s vertikálnym rozložením. Po vyfrézovaní tvaru dosky a overení jej rozmerovej správnosti bol návrh dosky odoslaný do výroby. Samotný návrh dosky je možné vidieť na nasledujúcich obrázkoch:

![](/report-images/prog-update1-iris/iris2.png)

![](/report-images/prog-update1-iris/iris1.png)

Počas čakania na dodanie dosiek (približne 3 týždne) bol navrhnutý držiak pre dosku, pomocou ktorého bude doska umiestnená v budúcej rakete:

![](/report-images/prog-update1-iris/design.png)

Po obdržaní dosiek bol tento dizajn overený:

![](/report-images/prog-update1-iris/delivered1.jpeg)

![](/report-images/prog-update1-iris/delivered2.jpeg)

![](/report-images/prog-update1-iris/fit1.jpeg)

![](/report-images/prog-update1-iris/fit2.jpeg)

Možno si všimnete niekoľko chýbajúcich komponentov pri osadení dosky do držiaka. V čase vytvárania týchto fotografií išlo primárne o rozmerové testovanie problematickejších komponentov, ako napríklad rádiový modul. GPS modul alebo samotná NAND SD karta boli zapožičané inému členovi tímu na testovanie a keďže boli sviatky a dlhší čas sme sa nemali možnosť stretnúť, nebolo možné spraviť fotografiu so všetkými komponentmi.

Na záver sa však ukázalo, že tento dizajn spĺňa všetky požiadavky. Doska sa zmestí do priestorových obmedzení a zároveň funguje tak, ako má. Samozrejme, boli odhalené aj určité nedostatky, ako napríklad chýbajúci obvod na reguláciu vstupného napätia. Tieto problémy budú (dúfajme) vyriešené v ďalšej iterácii návrhu.
