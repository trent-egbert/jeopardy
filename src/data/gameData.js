// Game content for the board.
//
// Each category has five clues, one per point value (100–500).
// `clue` is what's shown first; `answer` is revealed on the next click.
// Transcribed from the printed host cards (pages 3–7).
//
// The host cards also include Daily Double 1 & 2, Final Jeopardy, a
// Tie-Breaker, and a Host Note. Those aren't board squares, so they're not
// here yet.

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
      {
        value: 100,
        clue: 'This young Jewish woman became queen.',
        answer: 'Esther.',
      },
      {
        value: 200,
        clue: "This man was Esther's cousin and helped raise her.",
        answer: 'Mordecai.',
      },
      {
        value: 300,
        clue: 'This wicked man made a plan to destroy the Jewish people.',
        answer: 'Haman.',
      },
      {
        value: 400,
        clue: 'Esther risked her life by going to see this person without being invited.',
        answer: 'The king.',
      },
      {
        value: 500,
        clue: 'Before Esther approached the king, she asked her people to do this for three days.',
        answer: 'Fast.',
      },
    ],
  },
  {
    id: 'who-said-it',
    name: 'Who Said It?',
    clues: [
      {
        value: 100,
        clue: '“Who knoweth whether thou art come to the kingdom for such a time as this?”',
        answer: 'Mordecai.',
      },
      {
        value: 200,
        clue: '“Go, gather together all the Jews… and fast ye for me.”',
        answer: 'Esther.',
      },
      {
        value: 300,
        clue: '“If I perish, I perish.”',
        answer: 'Esther.',
      },
      {
        value: 400,
        clue: 'This person warned Esther that staying silent would not necessarily protect her.',
        answer: 'Mordecai.',
      },
      {
        value: 500,
        clue: 'Finish the phrase: Who knoweth whether thou art come to the ________ for such a time as this?',
        answer: 'Kingdom.',
      },
    ],
  },
  {
    id: 'courage-today',
    name: 'Courage Today',
    clues: [
      {
        value: 100,
        clue: 'Your friends start gossiping about someone. Name one courageous thing you could do.',
        answer:
          'Examples: change the subject, say something kind, ask them to stop, or walk away.',
      },
      {
        value: 200,
        clue: 'You see a girl sitting alone at an activity. What could an Esther-like choice look like?',
        answer: 'Sit with her, invite her in, or help her feel included.',
      },
      {
        value: 300,
        clue: 'A friend pressures you to do something you know is wrong. What does courage look like?',
        answer: 'Say no and stand by your standards.',
      },
      {
        value: 400,
        clue: 'Someone is being mocked at school. What are two ways you could show courage?',
        answer:
          'Examples: defend them, get help, include them, tell people to stop, or check on them afterward.',
      },
      {
        value: 500,
        clue: 'You made a mistake that no one knows about. What might courage require you to do?',
        answer:
          'Tell the truth, admit the mistake, apologize, repent, or make it right.',
      },
    ],
  },
  {
    id: 'faith-and-fasting',
    name: 'Faith & Fasting',
    clues: [
      {
        value: 100,
        clue: 'Esther combined fasting with this important way of communicating with Heavenly Father.',
        answer: 'Prayer.',
      },
      {
        value: 200,
        clue: 'True or false: Fasting is simply skipping meals.',
        answer: 'False.',
      },
      {
        value: 300,
        clue: 'Name one reason a person might fast.',
        answer:
          'Examples: guidance, strength, peace, help for someone, revelation, healing, or an important decision.',
      },
      {
        value: 400,
        clue: 'Why do you think Esther asked other people to fast with her?',
        answer:
          'She wanted spiritual strength and united faith as she prepared to approach the king.',
      },
      {
        value: 500,
        clue: 'Esther teaches us that before facing something difficult, we can prepare ourselves in this way.',
        answer: 'Spiritually, through fasting, prayer, and faith.',
      },
    ],
  },
  {
    id: 'for-such-a-time',
    name: 'For Such a Time',
    clues: [
      {
        value: 100,
        clue: "Esther's story teaches that Heavenly Father can use us to do this for other people.",
        answer: 'Bless, help, protect, or serve them.',
      },
      {
        value: 200,
        clue: 'Name one place where a young woman can have a positive influence right now.',
        answer:
          'Examples: home, school, church, sports, activities, online, or with friends.',
      },
      {
        value: 300,
        clue: 'True or false: You need to have an important title like queen before you can have influence.',
        answer: 'False.',
      },
      {
        value: 400,
        clue: 'Complete the idea: Maybe Heavenly Father has placed me ________ so I can ________.',
        answer: 'Any thoughtful answer earns the points.',
      },
      {
        value: 500,
        clue: "What do you think ‘for such a time as this’ means for us today?",
        answer:
          'Heavenly Father has placed us in this time, in our circumstances, with opportunities to use our gifts and influence to do good.',
      },
    ],
  },
]

export const DEFAULT_TEAMS = [
  { id: 'team-1', name: 'Team 1', score: 0 },
  { id: 'team-2', name: 'Team 2', score: 0 },
]
