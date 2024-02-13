## Übungen

http://wiki.itbs.selfhost.co/doku.php?id=ibex:kursinhalte:christian:aufgaben

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# vite-projectStefan see run file
Main Branch https://dynamic-creponne-ac55d9.netlify.app/

## Source Code
https://github.com/itbsStefan/vite-projectStefan
Branch main /home/intrepid-ibex/2bhCode/vite-projectStefan_reactuebung

### die Dokuwiki Kursinformationsablage
http://wiki.itbs.selfhost.co/doku.php?id=ibex:kursinhalte:start


# Wochenprojekt Übungsaufgaben

im folgenden sind die README's hier aufgelistet

----

### kw4-schnatterly-app-[part1]

## TO-DO

- [ ] Erstelle die UI aus dem Video mit React
- [ ] Nutze für das Styling, CSS (Modules / Styled Components)
- [ ] Erstelle Object Arrays für das dynamische Rendern von Daten
- [ ] Implementiere die Schnatter (Kommentier-) Funktion
- [ ] Achte darauf, dass kommentieren nur nach Eingabe möglich ist
- [ ] Achte bei den intialen Kommentaren auf die Like & Comment Daten
- [ ] Die Zahlen in den Trens werden mittels Intl Api & Runden angepasst.
- [ ] Commite deine Entwicklungsschritte
- [ ] Deploy deine App auf Netlify

## Projekt Styles
+ Nutze die mitgelieferte Vite index.css & app.css und entferne was nicht gebraucht wird
+ --buttonColor: rgba(94, 94, 235, 0.956)
+ --boxBackground: #2b2b2b - (Trend-Box)
+ --borderRadius: 10px
+ --borderColor: rgb(78, 78, 78)


## Nützliche Links
+ https://react-icons.github.io/react-icons/
+ https://styled-components.com/
+ https://pravatar.cc/


## Server Infos

+ Vite App Command: "npm create vite@latest"
+ Vite App Server Start: "npm run dev"
+ Vite App Build erstellen: "npm run build"

----

### kw3 Countries App2

## TO-DO

- [ ] Implementiere den Color-Mode Switcher (Html-Tag Data Attribute)
- [ ] Implementiere einen Loading Spinner Indicator
- [ ] Verbinde Such- & Filter-Funktion
- [ ] Implementiere eine "Load More" & "Load Less" Funktion
- [ ] Implementiere eine Country-Detail Seite
- [ ] Lagere deine Funktionen aus (z.B. Objects)
- [ ] BONUS: Implementiere eine Zeitzonen Live-Uhr
- [ ] Commite deine Entwicklungsschritte
- [ ] Deploy deine App auf Netlify


## Nützliche Links
+ https://cssloaders.github.io/
+ https://developers.google.com/maps/documentation/javascript?hl=de
+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl?retiredLocale=de
+ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC


## Server Infos

+ Vite App Command: "npm create vite@latest"
+ Vite App Server Start: "npm run dev"
+ Vite App Build erstellen: "npm run build"


### Generelles Vorgehen

1. Starte immer mit dem HTML & CSS und versuche gedanklich
dein HTML so zu strukturieren, dass du schon weißt, welche
Elemente du später mit JavaScript manipulieren willst.

2. Mach deine App / Website responsiv, sodass sie auf allen
Geräten funktioniert und gut aussieht.

3. Implementiere JavaScript und beginne mit den Dingen, die
du am einfachsten findest. So hast du schnelle Erfolgserlebnisse.

4. Kopiere niemals Code von ChatGPT o.Ä. wenn du nicht 100%
sicher bist, dasss du den generierten Code verstanden hast.

----
### kw2 countries App1
# General Infos

Wenn ihr das Projekt Video nicht abspielen könnt, installiert
den VLC Player über den Ubuntu Store und löschen die Standard
"Video"-App, dann werden alle Videos immer mit dem VLC Player
geöffnet


### Generelles Vorgehen

1. Starte immer mit dem HTML & CSS und versuche gedanklich
dein HTML so zu strukturieren, dass du schon weißt, welche
Elemente du später mit JavaScript manipulieren willst.

2. Mach deine App / Website responsiv, sodass sie auf allen
Geräten funktioniert und gut aussieht.

3. Implementiere JavaScript und beginne mit den Dingen, die
du am einfachsten findest. So hast du schnelle Erfolgserlebnisse.

4. Kopiere niemals Code von ChatGPT o.Ä. wenn du nicht 100%
sicher bist, dasss du den generierten Code verstanden hast.


## TO-DO

- [x] Erstelle ein GitHub Repo
- [x] Erstelle einen Netlify Account
- [x] Connecte GitHub Repo mit Netlify https://github.com/onlineCodes/ibex-spielwiese https://relaxed-otter-9ccf40.netlify.app
- [ ] Connecte GitHub Repo mit Netlify https://github.com/itbsStefan/solid-netlify
- [1] Nutze Vite für deine App
- [ ] Commite deine Entwicklungsschritte
- [ ] Erstelle das Webdesign
- [ ] Mache das Webdesign responsiv
- [ ] Implementiere die JavaScript Funktionalität
- [ ] Nutze JS Modules
- [ ] Lagere ein Object oder Functions aus
- [ ] Deploy deine App auf Netlify


## Server Infos

+ Vite App Command: "npm create vite@latest"
+ Vite App Server Start: "npm run dev"
+ Vite App Build erstellen: "npm run build"


## Styling Infos

+ Nutze die Vite mitgelieferte style.css in erster Interation
+ Nutze Grid für die Country-Items
+ Ihr müsst nicht pixel-perfect arbeiten, aber folgendes berücksichtigen:

+ Scrollbar Selectoren: ::-webkit-scrollbar, ::-webkit-scrollbar-thumb, ::-webkit-scrollbar-track

+ scrollbar-thumb border-radius: 10px;
+ scrollbar-track background-color: #242424

+ document background-color: #242424;
+ document font-color: rgba(255, 255, 255, 0.87);

+ input & select font-color: rgb(169, 167, 167);
+ input & select border-radius: 10px;
+ input padding-inline: 2rem;

+ country-item background-color: #213547;
+ grid-template-columns für Desktop: 5


## Nützliche Links
+ https://restcountries.com/
+ https://www.w3schools.com/howto/howto_css_switch.asp
+ https://de.vitejs.dev/
+ https://www.netlify.com/
+ https://icon-sets.iconify.design/clarity/search-line/

----

### projekt-online-shop assets



