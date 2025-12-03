{ "title": "Komunikačný protokol ARCT-Signalis", "description": "01-12-2025",
"url": "https://github.com/arct-signalis", "topics": [], "date": "01-12-2025" }

%%%

# Komunikačný protokol ARCT-Signalis

Tento dokument popisuje komunikačný protokol medzi raketou (IRIS) a pozemnou
stanicou (HERMES) využívajúci LoRa moduly. Protokol je navrhnutý pre
poloduplexnú komunikáciu, kde raketa primárne odosiela dáta a príležitostne
prijíma príkazy.

## Základné princípy

### Kľúčové obmedzenia

- **Poloduplexná komunikácia**: LoRa moduly nemôžu prijímať a vysielať súčasne
- **Retry mechanizmus**: Každý paket sa po nepotvrdení opakuje 3x, potom sa
  zahodí
- **CRC validácia**: Hardvérová detekcia chýb zapnutá na LoRa module
- **RSSI reporting**: Každý paket obsahuje informáciu o sile signálu
- **Priorita**: Maximálna vzdialenosť pred šírkou pásma (vysoký spreading
  factor)

### Architektúra protokolu

Protokol používa **polling-based** prístup s príležitostnými event-driven
správami:

1. **Polling**: Raketa pravidelne posiela telemetriu a čaká na ACK s možným
   príkazom
2. **Events**: Pri špeciálnych udalostiach (štart, apogee, pristátie) posiela
   dedikované pakety
3. **Commands**: Pozemná stanica môže odpovedať príkazmi (GET_STATUS, CALIBRATE)

## Stavový automat

### Stavy rakety (IRIS)

| Stav           | Popis                            | Frekvencia komunikácie                 |
| -------------- | -------------------------------- | -------------------------------------- |
| **UNPAIRED**   | Hľadá pozemnu stanicu            | Pairing request každých 5s             |
| **PAIRING**    | Čaká na potvrdenie (30s timeout) | -                                      |
| **PRE_LAUNCH** | Na zemi, monitoring senzorov     | Status update pri zmene                |
| **IN_FLIGHT**  | Aktívny let                      | Telemetria každú 1s, GPS každých 500ms |
| **APOGEE**     | Dosiahnutý vrchol, voľný pád     | -                                      |
| **LANDED**     | Na zemi po pristátí              | Pozícia každých 30s                    |
| **ERROR**      | Chyba komunikácie/senzorov       | -                                      |

### Stavy pozemnej stanice (HERMES)

| Stav          | Popis                      | Akcia                     |
| ------------- | -------------------------- | ------------------------- |
| **LISTENING** | Čaká na pairing request    | Odosiela pairing ACK      |
| **PAIRED**    | Pripojená k rakete         | Prijíma status updates    |
| **TRACKING**  | Sleduje let rakety         | Loguje telemetriu         |
| **IDLE**      | Žiadna aktívna komunikácia | Timeout po 60s neaktivity |

## Ďalšie kroky

1. Implementácia packet encoding/decoding funkcií
2. Integrácia stavového automatu do IRIS firmware
3. Rozšírenie HERMES servera o nové packet typy

![](/report-images/comm/IMG_4028.jpg)
