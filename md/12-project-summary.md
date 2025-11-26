{ "title": "Súhrn projektu SIGNALIS", "description": "26-11-2025", "url":
"https://www.fiit.stuba.sk/", "topics": [], "date": "25-11-2025" }

%%%

# Súhrn projektu SIGNALIS

Projekt SIGNALIS je systém určený na kounikáciu, zber a vizualizáciu údajov z
raketových letov. Systém pozostáva z dvoch hlavných komponentov - palubný
datalogger **IRIS** a pozemnú stanicu **HERMES**.

## Koncept a ciele projektu

### IRIS - Palubný datalogger

- **Hardvér**: Arduino Nano 33 BLE Sense Rev2
- **Senzory**:
  - 9DOF IMU (BMI270 + BMM150) - akcelerometer, gyroskop, magnetometer
  - Barometer (LPS22HB) - tlak a teplota
  - GPS modul (GPS + BDS BeiDou)
- **Komunikácia**: LoRa rádio (E220-900T22D) so zatiaľ nameraným dosahom až 2 km
- **Napájanie**: 3.7V LiPo batéria (min. 30 minút prevádzky)
- **Záznam dát**:
  - Lokálne ukladanie na SD kartu (CSV formát)
  - Real-time telemetria cez LoRa
  - Kapacita pre dáta z posledných 3 letov
- **Mechanika**: 3D tlačiteľné držiaky (FDM), kompatibilné s BT-80 nosičmi
- **Hmotnosť**: Max. 200g vrátane batérie

### HERMES - Pozemná stanica

- **Hardvér**: ESP32
- **Komunikácia**:
  - LoRa prijímač (E220-900T22D)
  - WiFi Access Point pre web aplikáciu
- **Napájanie**: Batéria s min. 45 minút prevádzky
- **Rozhranie**:
  - USB-C programovací port
  - LED indikátory stavu (napr. GPS lock)
  - Webový dashboard pre vizualizáciu telemetrie
- **Mechanika**: 3D tlačiteľný dizajn, ľahko rozobratené

## Dosiahnuté míľniky

### 1. Prvotné prototypy a overenie konceptu

- Vytvorenie funkčných prototypov oboch komponentov
- Úspešné testovanie LoRa komunikácie
- Detekcia LoRa správ pomocou SDR prijímača
- Testovanie práce so senzormi

### 2. HERMES - Vývoj plošnej dosky (PCB)

#### Iterácia 1 - CNC prototyp

- Návrh PCB v KiCad
- Jednovrstvová doska pre jednoduchú výrobu
- Výroba na CNC fréze (vyrezávanie spojov, vŕtanie, vyrezávanie obrysu)
- Identifikácia problémov s šírkou spojov a rozmermi dier

#### Iterácia 2 - Vylepšená CNC doska

- Rozšírenie vodivých spojov pre elimináciu úbytku napätia
- Oprava rozmerov dier (4mm → 2mm)
- Aplikácia solder masky (UV živica)
- Pridanie silkscreenu (laserovo vytvrdovaná živica)
- Funkčná doska s drobnými nedostatkami

#### Iterácia 3 - Profesionálna výroba

- Finálna optimalizácia rozloženia komponentov
- Objednávka profesionálnej výroby PCB

#### Iterácia 3 - Update

![](/report-images/project-summary/IMG_4052.jpg)
![](/report-images/project-summary/IMG_4053.jpg)

### 3. HERMES - 3D dizajn

#### Prvotný návrh (v1)

- Rozmery: 85×100×45 mm
- Problémy: nadmerné použitie supports, cie textu, príliš veľké rozmery

#### Finálny návrh (v2)

- Rozmery: 91×84×35 mm
- Optimalizovaný pre 3D tlač bez podpor
- Tlač z PETG materiálu na BambuLab P1S
- Ľahko reprodukovateľný dizajn
- Všetky komponenty presne zapadajú

### 4. HERMES - Softvérový systém

#### WiFi infraštruktúra

- ESP32 v režime Access Point
- SSID: `arct-signalis.local`
- IP: `192.168.4.1`
- Optimalizované nastavenia pre stabilitu (vypnutý power-save, HT20, 19.5dBm
  výkon)
- LED indikátor pripojenia klientov

#### HTTP server a endpointy

- `/` - Landing page s tlačidlom na dashboard
- `/app` - Hlavný dashboard (čisté HTML/CSS/JS)
- `/data` - Binárny telemetrický rámec (28 bajtov)

#### Telemetrický protokol

Štruktúra 28-bajtového rámca:

- Byte 0: Typ správy (0x03)
- Bytes 4-7: Longitude (float32 LE)
- Bytes 8-11: Latitude (float32 LE)
- Bytes 12-15: Elevation v metroch (float32 LE)
- Bytes 16-19: Roll (float32 LE)
- Bytes 20-23: Pitch (float32 LE)
- Bytes 24-27: Yaw (float32 LE)

#### Webový dashboard

- **3D vizualizácia**: WebGL plátno s modelom nosiča, dymovou stopou, animovanou
  trajektóriou a zemskou mriežkou
- **Interaktívna kamera**: Otáčanie myšou, zoom kolieskom, dotykové gestá
- **Real-time údaje**: GPS súradnice, elevácia, orientácia (yaw/pitch/roll)
- **Hex dump**: Raw zobrazenie prijatých dát
- **Live grafy**: Časové grafy pre všetky parametre s adaptívnym rozsahom
- **Smoothing**: Plynulá animácia aj pri kolísajúcej frekvencii paketov
- **Žiadne závislosti**: Implementované bez externých JavaScript knižníc

### 5. IRIS - Nedávny pokrok

V poslednom období sa nám podarilo vytvoriť plne funkčný IRIS modul s
nasledujúcimi komponentmi:

- **LoRa rádio**: Úspešne fungujúca bezdrôtová komunikácia s HERMES stanicou
- **SD karta modul**: Funkčné ukladanie dát pre offline záznam letových údajov
- **Senzorová integrácia**: Plne funkčné čítanie dát zo všetkých senzorov:
  - 9-osový IMU (3-osový akcelerometer, 3-osový gyroskop, 3-osový magnetometer)
  - Barometer (tlak a teplota)
  - GPS modul (longitude, latitude, elevácia)

Tento míľnik predstavuje dokončenie základnej hardvérovej platformy IRIS modulu
a umožňuje nám prejsť k testovaniu celého systému v reálnych podmienkach.

![](/report-images/project-summary/IMG_4037.jpg)
![](/report-images/project-summary/IMG_4043.jpg)

## Aktuálny stav projektu

### Dokončené

- HERMES PCB dizajn a výroba
- HERMES 3D mechanika a prototypy
- HERMES webový dashboard s kompletnou vizualizáciou
- HERMES WiFi AP a HTTP server
- Telemetrický protokol (28-bajtový binárny formát)
- IRIS modul s funkčným rádiom, SD kartou a senzormi
- LoRa komunikačné testy

### Prebieha

- Integrácia všetkých komponentov do finálnych zostáv
- Testovanie kompletného systému IRIS + HERMES
- Optimalizácia softvéru pre záznam dát na SD kartu
- Kalibrácia a testovanie presnosti senzorov

### Budúce kroky

- Finálne zostavenie HERMES modulu s profesionálnou PCB
- Kompletizácia IRIS mechanického dizajnu
- Testovanie systému v simulovaných letových podmienkach
- Implementácia logovania

## Technické špecifikácie

### Záznam dát

- **IRIS lokálne**: CSV formát na SD karte, kapacita pre 3 lety
- **HERMES real-time**: 28-bajtové binárne rámce cez WiFi
- **Frekvencia vzorkovania**: Plánované testovanie optimálnej frekvencie

### Výdrž batérie

- IRIS: min. 30 minút (požiadavka splnená)
- HERMES: min. 45 minút (požiadavka splnená)

## Zhrnutie

Projekt SIGNALIS dosiahol zatiaľ pokrok vo všetkých kľúčových oblastiach. HERMES
pozemná stanica je takmer dokončená s plne funkčným web dashboardom a kvalitnou
mechanickou konštrukciou. IRIS modul má funkčné všetky kritické komponenty
vrátane rádiovej komunikácie, ukladania dát a snímania zo senzorov.
