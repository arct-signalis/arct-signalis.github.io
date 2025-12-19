{ 
  "title": "HERMES progress update 5", 
  "description": "19-12-2025", 
  "url": "https://www.fiit.stuba.sk/", 
  "topics": [],
  "date": "19-12-2025"
} 

%%%

# HERMES Progress Update 5

V rámci finalizácie komponentu HERMES boli vyvinuté posledné hardvérové prvky komponentu. Primárne sa jedná o druhú hlavnú (celkovo štvrtú) revíziu plošnej dosky. Návrh tejto dosky môžeme vidieť nižšie.

![](/report-images/prog-update5-hermes/v4-schema.png)

![](/report-images/prog-update5-hermes/pcbfront.png)

![](/report-images/prog-update5-hermes/pcbback.png)

Samotné vyhotovenie dosky (externým dodávateľom) môžeme vidieť na nasledujúcich obrázkoch:

![](/report-images/prog-update5-hermes/actualfront.jpg)

![](/report-images/prog-update5-hermes/actualback.jpg)

Po obdržaní plošnej dosky boli na ňu naspájkované potrebné komponenty (vrátane malých SMD komponentov):

![](/report-images/prog-update5-hermes/soldered1.png)

![](/report-images/prog-update5-hermes/soldered2.png)

Na spájkovanie predošle spomenutých SMD komponentov bolo použité spájkovanie pomocou horúceho vzduchu (viď. `SMD spájkovanie - Workshop`), čo bolo pre mnohých našich členov prvou možnosťou si túto techniku vyskúšať v reálnom projekte:

<video controls>
  <source src="/report-images/prog-update5-hermes/hotair.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Po vyhotovení plošnej dosky bola nainštalovaná do vytlačeného krytu (viď. `HERMES Progress Update 3`) spolu s ostatnými súčiastkami (batéria, tlačidlo, anténa...):

![](/report-images/prog-update5-hermes/assembly1.png)

![](/report-images/prog-update5-hermes/assembly2.png)

Tentoraz sa naozaj jedná o poslednú revíziu HERMES komponentu v rámci hardvéru (snáď). Táto revízia bola nutná, nakoľko boli v predošle vyvinutej doske identifikované viaceré chyby, ako napríklad miešanie analógových a digitálnych signálov, chýbajúci obvod na meranie napätia batérie, chýbajúci obvod regulácie napätia a niektoré ďalšie drobnejšie nedostatky. Samotný softvér sa medzitým pomaličky posúva tiež, avšak pre neho bude vytvorený separátny progress report neskôr.