// Game content for the board.
//
// Each category has five clues, one per point value (100–500).
// `clue` is what's shown first; `answer` is revealed on the next click.
// Placeholder text below is waiting on the clue cards — replace the strings
// and the board picks the changes up immediately.

export const TITLE_TOP = 'Jeopardy'
export const TITLE_BOTTOM = 'Game Board'
export const GAME_SUBTITLE = 'Choose a Category and Point Value'
export const FOOTER_NOTE = 'Use the clue cards for each square.'

export const VALUES = [100, 200, 300, 400, 500]

export const categories = [
  {
    id: 'esthers-story',
    name: "Esther's Story",
    clues: [
      { value: 100, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 200, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 300, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 400, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 500, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
    ],
  },
  {
    id: 'who-said-it',
    name: 'Who Said It?',
    clues: [
      { value: 100, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 200, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 300, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 400, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 500, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
    ],
  },
  {
    id: 'courage-today',
    name: 'Courage Today',
    clues: [
      { value: 100, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 200, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 300, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 400, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 500, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
    ],
  },
  {
    id: 'faith-and-fasting',
    name: 'Faith & Fasting',
    clues: [
      { value: 100, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 200, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 300, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 400, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 500, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
    ],
  },
  {
    id: 'for-such-a-time',
    name: 'For Such a Time',
    clues: [
      { value: 100, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 200, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 300, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 400, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
      { value: 500, clue: 'Clue coming soon.', answer: 'Answer coming soon.' },
    ],
  },
]

export const DEFAULT_TEAMS = [
  { id: 'team-1', name: 'Team 1', score: 0 },
  { id: 'team-2', name: 'Team 2', score: 0 },
]
