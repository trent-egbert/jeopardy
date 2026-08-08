import { categories as defaultCategories } from './data/gameData.js'

// The board content the game actually renders. It starts as the clue cards
// transcribed in data/gameData.js, and admin-mode edits are layered on top and
// kept in localStorage — so gameData.js always stays the "factory" copy you can
// restore back to.

const CONTENT_KEY = 'jeopardy-board-content-v1'

export function defaultContent() {
  return structuredClone(defaultCategories)
}

// Anything hand-edited or imported has to look like board content before we
// trust it; a malformed file should leave the lesson working, not blank.
export function isValidContent(value) {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(
      (category) =>
        category &&
        typeof category.id === 'string' &&
        category.id.length > 0 &&
        typeof category.name === 'string' &&
        Array.isArray(category.clues) &&
        category.clues.length > 0 &&
        category.clues.every(
          (clue) =>
            clue &&
            Number.isFinite(clue.value) &&
            typeof clue.clue === 'string' &&
            typeof clue.answer === 'string',
        ),
    )
  )
}

export function loadContent() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONTENT_KEY) ?? 'null')
    return isValidContent(saved) ? saved : defaultContent()
  } catch {
    return defaultContent()
  }
}

export function saveContent(categories) {
  try {
    localStorage.setItem(CONTENT_KEY, JSON.stringify(categories))
  } catch {
    // A full or blocked localStorage shouldn't interrupt the game.
  }
}

export function clearSavedContent() {
  try {
    localStorage.removeItem(CONTENT_KEY)
  } catch {
    // Nothing to do — the in-memory content is still correct.
  }
}

// True when the board differs from the printed clue cards, so admin mode can
// say whether it's showing edits.
export function isEdited(categories) {
  return JSON.stringify(categories) !== JSON.stringify(defaultCategories)
}
