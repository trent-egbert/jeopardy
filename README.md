# Jeopardy Game Board

An interactive Jeopardy board for a church lesson, styled after the printed
board: five categories, five point values each, with clue cards that open
full screen and reveal their answer on the next click.

## Running it

```bash
npm install
npm run dev
```

Vite prints a local address (usually http://localhost:5173) and opens it in
your browser. Press `F11` (Windows) or `Ctrl+Cmd+F` (Mac) for full screen
before class starts.

To run it without the dev server:

```bash
npm run build
npm run preview
```

## Using it during the lesson

- **Click a point value** to open the clue full screen.
- **Click anywhere on the clue**, press `Space`, or use **Reveal Answer** to
  show the answer.
- **`Space` again** (or **Back to Board** / `Esc`) returns to the board. The
  square you played is marked with a ✦ so you can see what's left.
- **✕ in the corner of the clue** closes it *without* marking the square
  played — for when you open the wrong square. Opening an already-played
  square and closing with ✕ also clears its ✦, so it doubles as an undo.
- **Award points** right from the clue with the `+`/`−` buttons for each team.
- **Team names are editable** — click a name on a scorecard and type.
  **Add Team** adds another; **✕** on the card removes one.
- **Reset Game** clears every played square and zeroes the scores.

Played squares and scores are saved in the browser, so an accidental refresh
mid-lesson doesn't lose the game.

## Editing the clues

All the content lives in [`src/data/gameData.js`](src/data/gameData.js) —
category names, the five clues per category, and the title text. Edit the
`clue` and `answer` strings; the board updates as soon as you save.

```js
{
  id: 'esthers-story',
  name: "Esther's Story",
  clues: [
    { value: 100, clue: 'This queen refused to appear before the king.', answer: 'Vashti' },
    ...
  ],
}
```

## Built with

React 19 + Vite, with plain CSS (no framework) for the vintage board styling.
Fonts are Cinzel and EB Garamond from Google Fonts, with serif fallbacks if
the machine is offline.
