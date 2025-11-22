{ 
  "title": "HERMES progress update 2", 
  "description": "17-11-2025", 
  "url": "https://www.fiit.stuba.sk/", 
  "topics": [],
  "date": "17-11-2025"
} 

%%%

# HERMES Progress Update 2

Doska uvedená v predchádzajúcom progress reporte bola v priebehu týždňa testovaná a používaná. Ukázalo sa zopár nedostatkov. Konkrétnejšie nedostatočná šírka spojov (traces), čo spôsobovalo úbytok napätia (voltage drop) a prehrievanie medených vodičov. Dodatočne, vyfrézované diery na uchytenie mali priemer 4mm namiesto 2mm, nakoľko bol do frézy zadaný údaj dier ako polomer a nie priemer. Ako prvotný prototyp avšak doska poslúžila veľmi dobre.

Vykonané zmeny v doske je vidieť v nasledujúcich obrázkoch:

![](/report-images/prog-update2-hermes/pcb-layout.png)

![](/report-images/prog-update2-hermes/pcb-preview1.png)

Proces výroby dosky na CNC fréze nasledoval rovnaké kroky, aké boli ukázané v prvom progress reporte. Avšak, tentokrát bola doska kvôli možnému produkčnému nasadeniu obohatená o proces prípravy tzv. "solder mask" a potlače (silkscreen). Na prípravu solder masky bola najprv nanesená na dosku tenká vrstva živice, ktorá bola vytvrdená UV lampou:

![](/report-images/prog-update2-hermes/pcb-zivica.png)

![](/report-images/prog-update2-hermes/pcb-curing.png)

Po tomto kroku bola živica vyrezaná z dosky využitím "pružne uloženej V frézy" (spring loaded V bit), aby boli odhalené iba potrebné medené plôšky pre spájkovanie:

<video controls>
  <source src="/report-images/prog-update2-hermes/cnc-frezovanie-video1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Po vykonaní tohto kroku vyzerala doska nasledovne:

![](/report-images/prog-update2-hermes/doska.png)

Ako bolo spomenuté skôr, na dokončenie dosky bola aplikovaná potlač, tzv. silkscreen. Opäť ide o živicu, ktorá je na dosku nanesená a následne selektívne vytvrdzovaná laserom na vytvorenie tvarov a textu.

![](/report-images/prog-update2-hermes/pcb-silkscreen.png)

<video controls>
  <source src="/report-images/prog-update2-hermes/cnc-frezovanie-video2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Po dokončení laserovej operácie stačí použiť alkoholové utierky na zotretie zvyšku živice. Výsledkom je nasledovná (takmer použiteľná) doska:

![](/report-images/prog-update2-hermes/pcb-final.png)

Doska je plne funkčná s výnimkou zopár pinov, z ktorých bola pri šmirgľovaní (krok pred aplikovaním silkscreenu) omylom odstránená medená vrstva vodiča. Našťastie, toto bolo ľahko napraviteľné. Stačilo manuálne zoškrabať trochu masky a na vodivú cestu, resp. spoj naspájkovať prepojovací káblik. Dodatočne, aplikácia silkscreenu nie je perfektná. Hlavným problémom bola identifikovaná hrúbka silkscreenu, nakoľko kvôli nerovnomernému naneseniu bola niekde vrstva väčšia ako inde, čo spôsobilo nerovnomerné vytvrdzovanie.

Celkovo možno povedať, že vývoj dosky dosiahol svoj cieľ – otestovať funkcionalitu s možnosťou rýchleho prototypovania a iterovania vývoja plošných spojov. Doska bola teda poslednýkrát aktualizovaná (jednoduché posunutie pozícií komponentov na zmenšenie rozmerov, vedenie spojov ostalo všade rovnaké) a odoslaná na profesionálnu výrobu:

![](/report-images/prog-update2-hermes/pcb-ordered.png)
