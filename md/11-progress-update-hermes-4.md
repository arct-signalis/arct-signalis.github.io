{
    "title": "HERMES progress update 4",
    "description": "25-11-2025",
    "url": "https://www.fiit.stuba.sk/",
    "topics": [],
    "date": "25-11-2025"
}

%%%

# Webový dashboard pre telemetriu

Celý systém je postavený na mikrokontroléri **ESP32**, ktorý v tomto riešení preberá úlohu:

-   LoRa prijímača (telemetrické rámce budú doručené cez LoRa),
-   WiFi Access Pointu pre pozemnú stanicu,
-   HTTP servera poskytujúceho webové rozhranie,
-   real‑time distribútora binárnych dát vo formáte používanom v UI.

Cieľom modulu je zobrazovať **GPS**, **eleváciu**, **orientáciu
(yaw/pitch/roll)** a ďalšie odvodené údaje v prehľadnej a okamžite
reagujúcej webovej aplikácii.


## 1. WiFi AP a sieťová infraštruktúra

ESP32 je nakonfigurovaný do režimu **WIFI_AP**. Zariadenie vytvára
privátnu sieť s pevnými parametrami:

-   SSID: `arct-signalis.local`
-   IP: `192.168.4.1`
-   maska: `255.255.255.0`

K zabezpečeniu plynulého prístupu slúži viacero nastavení:

-   vypnutý power-save (`esp_wifi_set_ps(WIFI_PS_NONE)`),
-   pevne nastavená šírka kanála `HT20`,
-   zvýšený vysielací výkon `WIFI_POWER_19_5dBm`,
-   beacon interval upravený na hodnotu 100 ms.


Indikačná LED na pine **GPIO2** poskytuje jednoduchú diagnostiku:

-   **svieti trvalo** → aspoň jeden klient je pripojený,
-   **bliká** → žiadny klient nie je pripojený.


## 2. HTTP server a routing

Zariadenie používa knižnicu `WebServer` a poskytuje tri kľúčové
endpointy:

### `/`

Landing page.\
Obsahuje jediné tlačidlo **„Open dashboard"**.

![](/report-images/web-dashboard-v1/default-page-v1.png)

### `/app`

Hlavný dashboard, implementovaný ako čisté HTML/CSS/JavaScript.\
Neobsahuje žiadne externé knižnice.

![](/report-images/web-dashboard-v1/dashboard-v1.png)

### `/data`

Najdôležitejšia časť.\
Endpoint vracia **28-bajtový binárny rámec** v presne definovanej
štruktúre.\
UI tento rámec spracuje ako telemetriu.

Dashboard je dostupný cez:

-   `http://arct-signalis.local/app`
-   alebo `http://192.168.4.1/app`

mDNS sa stará o názvové rozlíšenie.


## 3. Binárny dátový rámec (28 B)

Telemetrické dáta dorazia cez LoRa v identickom formáte, aký UI očakáva.
ESP32 ich bez úprav zabalí do HTTP odpovede.

Formát:

| Offset | Typ          | Hodnota                |
|-------:|--------------|-------------------------|
| 0      | `u8`         | typ správy (`0x03`)     |
| 4–7    | `float32 LE` | longitude               |
| 8–11   | `float32 LE` | latitude                |
| 12–15  | `float32 LE` | elevation (m)           |
| 16–19  | `float32 LE` | roll                    |
| 20–23  | `float32 LE` | pitch                   |
| 24–27  | `float32 LE` | yaw                     |


Príklad dekódovania v UI:

    0004: xx xx xx xx  | lon (float32 LE) = 17.107700
    0008: xx xx xx xx  | lat (float32 LE) = 48.148600
    000c: xx xx xx xx  | elev (float32 LE) = 534.2
    0010: xx xx xx xx  | roll (float32 LE) = -2.1
    0014: xx xx xx xx  | pitch (float32 LE) = 14.7
    0018: xx xx xx xx  | yaw (float32 LE) = 87.3

Vďaka tomu je možné:

-   rýchlo overiť správnosť prichádzajúcich paketov,
-   kontrolovať skutočné hodnoty senzorov.


## 4. Webový dashboard

Frontend je napísaný ako čisté HTML + CSS + JS, bez frameworkov.

Dashboard obsahuje:

-   3D WebGL plátno (model nosiča, dymová stopa, trail, mriežka),
-   pravý panel s číselnými hodnotami,
-   raw hex dump prijatých dát,
-   live grafy (GPS, výška, orientácia).

Používateľské rozhranie je rozdelené na tri celky:

### 4.1. 3D vizualizácia

Zobrazuje:

-   model nosiča,
-   dynamickú orientáciu podľa `yaw/pitch/roll`,
-   animovanú stopu,
-   dymové častice,
-   zemskú mriežku.

Kamera je plne interaktívna:

-   **otáčanie myšou**,
-   **zoom kolieskom**,
-   **dotykové gestá** (drag, pinch).

UI používa aj **smoothing**, takže pohyb modelu je plynulý aj pri
kolísajúcej frekvencii paketov.

### 4.2. Hodnoty v pravom paneli

Zobrazovaný obsah:

-   latitude
-   longitude
-   elevation
-   yaw
-   pitch
-   roll

Hodnoty sa aktualizujú pri každom fetch-i `/data`.

Pod nimi sa nachádza **hex dump**, ktorý je rozbitý podľa offsetov.

### 4.3. Live grafy

Každý parameter má vlastný časový graf vykreslený na `<canvas>`:

-   priebežné min/max,
-   adaptívny rozsah,

Tieto grafy slúžia na odhalenie:

-   driftu,
-   oscilácií,
-   náhlych zmien kurzov a výšky.


## 5. Stavové logy ESP32

Zariadenie priebežne zaznamenáva:

-   pripojenia/odpojenia klientov (MAC adresy),
-   stav pamäte (`ESP.getFreeHeap()` každých 5 sekúnd).



## 6. Celkové zhrnutie

-   vytvára vlastné WiFi AP pre pozemnú stanicu,
-   prijíma telemetriu cez LoRa,
-   poskytuje dáta priamo v 28‑bajtovom binárnom rámci,
-   vizualizuje hodnoty v 3D aj v číselnej forme,
-   poskytuje live grafy aj raw hex debug panel,
-   funguje bez akýchkoľvek externých JS knižníc.
