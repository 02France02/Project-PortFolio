# Implementazione sezione "Games" — Portfolio

**Progetto:** Project-PortFolio
**Data:** 2026-08-27
**Versione:** v1
**Stato:** documento di pianificazione — nessun codice ancora scritto

## Obiettivo

Aggiungere alla navbar un tasto "Games" che porta a una pagina `/games` con una griglia di card, una per gioco, ciascuna con uno screenshot/preview reale del gioco. Al click su una card si apre il gioco corrispondente in una pagina dedicata. BugHunt (già esistente, oggi inline in Homepage) viene spostato qui insieme a 4 nuovi giochi arcade generici: Snake, Tris, Memory, Reaction Test, 2048.

I punteggi/record vengono salvati in `localStorage`, così restano tra una visita e l'altra senza bisogno di un backend.

## Struttura pagine e routing

Due nuove route in `src/main.jsx`, entrambe lazy-loaded come le pagine esistenti:

- `/games` → `GamesHub.jsx`: griglia di 6 card (BugHunt, Snake, Tris, Memory, Reaction Test, 2048), ognuna con screenshot/preview.
- `/games/:slug` → `GamePage.jsx`: pagina che monta il componente del gioco corrispondente allo slug, con titolo, pulsante "torna ai giochi" e record salvato.

Gli slug proposti: `bug-hunt`, `snake`, `tris`, `memory`, `reaction-test`, `2048`.

## Modifiche a file esistenti (da fare in fase di sviluppo, non in questa fase)

- `src/Components/Navbar.jsx`: aggiungere `{ name: "Games", href: "/games" }` all'array `navigation`.
- `src/main.jsx`: aggiungere le due route lazy `/games` e `/games/:slug`.
- `src/Pages/Homepage.jsx`: rimuovere il rendering inline di `<BugHunt />` (o sostituirlo con un piccolo banner/CTA che rimanda a `/games`).
- `src/Components/BugHunt.jsx`: adattare l'uso di `best` (record) per leggere/scrivere da `localStorage` invece che da stato React locale.

## Nuovi file previsti

```
src/Pages/GamesHub.jsx
src/Pages/GamePage.jsx
src/Components/games/GameCard.jsx
src/Components/games/Snake.jsx
src/Components/games/Tris.jsx
src/Components/games/Memory.jsx
src/Components/games/ReactionTest.jsx
src/Components/games/TwoZeroFourEight.jsx
src/Components/games/gamesRegistry.js
src/hooks/useHighScore.js
src/assets/games/bug-hunt.png
src/assets/games/snake.png
src/assets/games/tris.png
src/assets/games/memory.png
src/assets/games/reaction-test.png
src/assets/games/2048.png
```

`gamesRegistry.js` centralizza id, titolo, screenshot, descrizione breve e componente di ogni gioco: sia `GamesHub` che `GamePage` leggono da qui, così aggiungere un gioco futuro richiede una sola riga in più.

`useHighScore.js` è un hook condiviso: `const [best, setBest] = useHighScore("bug-hunt")`, legge/scrive `localStorage` con chiave prefissata (es. `portfolio-game-bug-hunt-best`) e gestisce il fallback se `localStorage` non è disponibile (privacy mode, ecc.).

## Screenshot/preview delle card

Ogni card in `/games` mostra uno screenshot reale del gioco, non un'icona generica. Questo richiede uno scatto per gioco una volta che il gioco è funzionante (non prima): screenshot presi a gioco fermo/iniziale, formato consigliato 16:9 o 4:3, salvati in `src/assets/games/`. Finché un gioco non è stato costruito e testato, la card userà un placeholder (sfondo colorato + titolo) per non bloccare la pianificazione su asset non ancora esistenti.

## Note tecniche per gioco

**BugHunt** — già pronto, griglia 3x3, 20 secondi, click sulla cella giusta. Unica modifica: record su localStorage.

**Snake** — canvas HTML5 o griglia CSS con `setInterval`, controllo da tastiera (frecce/WASD) e swipe su mobile. Game over su collisione con muro o con se stesso. Punteggio = lunghezza serpente.

**Tris (Tic-Tac-Toe)** — griglia 3x3, contro CPU con mossa random o minimax semplice (livello facile). Punteggio = vittorie totali.

**Memory** — griglia di carte con emoji/icone da capovolgere a coppie, timer o conteggio mosse. Punteggio = meno mosse per completare = meglio.

**Reaction Test** — schermo che cambia colore a un tempo casuale, l'utente clicca appena vede il cambio; misura i millisecondi di reazione. Record = tempo minimo.

**2048** — griglia 4x4, merge di tile con le stesse frecce di Snake. È il gioco più complesso lato logica (gestione merge, spawn casuale, game over): va implementato per ultimo.

## Ordine di implementazione consigliato (per quando si passerà al codice)

1. `useHighScore.js` + `gamesRegistry.js` (base condivisa)
2. `GamesHub.jsx` + `GameCard.jsx` con placeholder + route `/games`
3. `GamePage.jsx` + route `/games/:slug`
4. Migrazione BugHunt (rimozione da Homepage, aggiunta a registry, record su localStorage) → screenshot BugHunt
5. Reaction Test e Tris (i più semplici, per validare il pattern) → screenshot
6. Memory → screenshot
7. Snake → screenshot
8. 2048 → screenshot
9. Verifica navbar (voce "Games" attiva/evidenziata su `/games` e `/games/:slug`) e responsive/mobile su tutti i giochi

## Nota sullo stato di questo documento

Questo file è solo pianificazione. Non è stato scritto codice: implementazione, test e screenshot restano da fare in una fase successiva, su tua richiesta esplicita.
