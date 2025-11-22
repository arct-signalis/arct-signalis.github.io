{ 
  "title": "HERMES progress update 3", 
  "description": "22-11-2025", 
  "url": "https://www.fiit.stuba.sk/", 
  "topics": [],
  "date": "22-11-2025"
} 

%%%

# HERMES Progress Update 3

V predošlom progress reporte bol spomenutý vývoj jednoduchej plošnej dosky. Keďže teda už máme osadenie plošnej dosky a jej konkrétne rozmery, začali sme v CAD softvéri *Autodesk Fusion* modelovať základný 3D model komponentu. Prvotný model vyzeral nasledovne:

![](/report-images/prog-update3-hermes/hermes_v1-1.png)

![](/report-images/prog-update3-hermes/hermes_v1-2.png)

![](/report-images/prog-update3-hermes/hermes_v1-3.png)

Zvolená technika pre produkciu bola FDM 3D tlač na tlačiarni BambuLab P1S. Prototypy boli tlačené materiálom PETG. Pri prvotnej produkcii sa ukázalo však viacero problémov.

![](/report-images/prog-update3-hermes/printed_initial.png)

![](/report-images/prog-update3-hermes/printed_initial_bad1.png)

![](/report-images/prog-update3-hermes/printed_initial_bad2.png)

Problémy vychádzajú hlavne zo zlého dizajnu. Keďže popri dizajnovaní nebol braný ohľad na 3D tlač, bolo treba použiť napríklad veľmi veľké množstvo supports (podpier). Tieto sa relatívne ťažko odstraňovali a taktiež zhoršili kvalitu produktu ako takého, nakoľko zanechali viditeľné stopy po odlomení. Ďalšou zlou voľbou bolo napríklad umiestnenie textu na strany komponentu, nakoľko pri tlači tento text nemal byť ako riadne podporovaný (kvôli veľkosti), čo spôsobilo jeho deformácie. Dodatočne, rozmery komponentu ako takého boli zbytočne priveľké (85x100x45mm). Ako prvotný prototyp na overenie dimenzií poslúžil tento prototyp fajn, ale samozrejme treba navrhnúť niečo lepšie.

Vyvinuli sme viacero prototypov (zisťovanie na báze pokus a omyl), z ktorých finálny prototyp vyzerá nasledovne:

![](/report-images/prog-update3-hermes/hermes_v2-1.PNG)

![](/report-images/prog-update3-hermes/hermes_v2-2.PNG)

![](/report-images/prog-update3-hermes/hermes_v2-3.PNG)

![](/report-images/prog-update3-hermes/hermes_v2-4.PNG)

Tento návrh je nielenže menší z hľadiska rozmerov (91x84x35), ale taktiež ľahko tlačiteľný bez použitia akýchkoľvek podpier. Proces návrhu a dizajnu je vidieť v nasledovnom videu:

<video controls>
  <source src="/report-images/prog-update3-hermes/hermes_v2-build.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Vytlačený finálny prototyp vyzerá nasledovne:

![](/report-images/prog-update3-hermes/final1.png)

![](/report-images/prog-update3-hermes/final2.png)

![](/report-images/prog-update3-hermes/final3.png)

Samozrejme, jednotlivé komponenty ešte treba navzájom prepojiť, s čím sme sa však ešte rozhodli počkať, nakoľko produkčná plošná doska stále nebola dodaná. Avšak, vďaka podrobnému procesu testovania a iterovania vieme s istotou povedať, že z hľadiska rozmerov všetko sedí podľa očakávaní, prototyp je ľahko reprodukovateľný na hocijakej 3D tlačiarni a plošná doska je funkčná (overená výrobou identickej dosky na fréze CNC, viď. progress update 2 pre Hermes).

V rámci tohto HERMES komponentu nám teda ostávajú na implementáciu čisto softvérové prvky, ako napríklad rádiový komunikačný protokol, webové rozhranie a podobne.