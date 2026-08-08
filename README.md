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

### From the app — **Edit Board**

Click **Edit Board** under the scoreboard. Pick a category tab, then edit its
name and any of its five clues and answers. Changes apply to the board
immediately and save to this browser as you type, so they survive a refresh
and are still there next Sunday. There's no password — it's a button anyone at
the laptop can press.

The buttons along the bottom:

- **Download Board** saves the whole board as `jeopardy-board.json`.
- **Load Board File** reads one of those files back in — that's how you move a
  board to another computer, or keep several lessons side by side. A file that
  isn't a board export is rejected and leaves the current board alone.
- **Restore Original** discards your edits and reloads the clues transcribed
  from the printed cards.

### From the code

[`src/data/gameData.js`](src/data/gameData.js) holds the original clue cards —
category names, five clues each, and the title text. Editing it changes what
**Restore Original** restores to, and what a browser sees if it has never been
edited. A browser that already has edits keeps showing them until you restore.

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
