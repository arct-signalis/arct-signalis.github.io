{ 
  "title": "HERMES progress update 1", 
  "description": "Progress update 1 pre HERMES komponent", 
  "url": "https://www.fiit.stuba.sk/", 
  "topics": [],
  "date": "12-11-2025"
} 

%%%

# HERMES Progress Update 1

Na základe prvotných konceptov sme sa rozhodli vytvoriť prvú PCB verziu HERMES komponentu. PCB sme sa rozhodli vytvoriť pre uľahčenie tvorby ďalších prototypov, nakoľko pre efektívne testovanie musí každý člen mať svoj vlastný komponent. Manuálne káblovať, spájkovať a pod. sa ukázalo ako časovo náročné a vo veľkom množstve nerealizovateľné. 

Ako prvý bol navrhnutý samotný layout PCB (v programe `KiCad`):

![](/report-images/prog-update1-hermes/pcb-layout.png)

Tu je vidieť prehľad danej dosky:

![](/report-images/prog-update1-hermes/pcb-preview1.png)

![](/report-images/prog-update1-hermes/pcb-preview2.png)

Jedná sa o veľmi jednoduchú jednovrstvovú dosku. Dôvodom je jednoduchosť výroby a nízka cena. Vďaka jednoduchosti tejto dosky sme sa pokúsili vyrobiť ju osobne, bez outsourcingu, pomocou CNC frézy. V nasledujúcich prílohách je vidno programovanie frézy.

![](/report-images/prog-update1-hermes/cnc-program-static.png)

<video controls>
  <source src="/report-images/prog-update1-hermes/cnc-program-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video controls>
  <source src="/report-images/prog-update1-hermes/cnc-program-video2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Ako je vidno v simulácii, vykonávané sú tri hlavné operácie - vyrezávanie vodivých ciest (traces), vŕtanie dier a vyrezávanie samotnej dosky z FR-4 materiálu. V ďalších prílohách je vidno zábery priamo z frézy:

<video controls>
  <source src="/report-images/prog-update1-hermes/cnc-frezovanie-video1.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video controls>
  <source src="/report-images/prog-update1-hermes/cnc-frezovanie-video2.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video controls>
  <source src="/report-images/prog-update1-hermes/cnc-frezovanie-video3.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Výsledná, vyrobená doska vyzerá nasledovne:

![](/report-images/prog-update1-hermes/pcb-self-produced1.png)


Nakoniec boli k doske naspájkované komponenty a funkčnosť dosky bola overená:

![](/report-images/prog-update1-hermes/pcb-self-produced-assembled.png)

Samotná doska funguje veľmi dobre. Samozrejme, môže byť implementovaných viacero vylepšení, ako napr. použitie silkscreenu alebo solder masky. Z tohto vyplýva, že produkčná kvalita dosky podstatne zaostáva za doskami, ktoré by mohli byť vytvorené profesionálnymi firmami. Avšak pre momentálne účely je viac ako dostatočná.
