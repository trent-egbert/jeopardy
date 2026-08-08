import { Diamond, Sprig } from './Ornaments.jsx'

// Columns alternate red / green the way the printed board does.
const toneFor = (index) => (index % 2 === 0 ? 'red' : 'green')

export default function Board({ categories, usedClues, onSelectClue }) {
  return (
    <div className="board" role="grid" aria-label="Jeopardy game board">
      {categories.map((category, columnIndex) => {
        const tone = toneFor(columnIndex)
        return (
          <div className="board-column" role="row" key={category.id}>
            <div className={`category-card tone-${tone}`} role="columnheader">
              <h2 className="category-name">{category.name}</h2>
              <div className="category-ornament">
                <Sprig />
                <Diamond className="category-diamond" />
              </div>
            </div>

            {category.clues.map((clue) => {
              const used = usedClues.has(`${category.id}:${clue.value}`)
              return (
                <button
                  key={clue.value}
                  type="button"
                  role="gridcell"
                  className={`value-tile tone-${tone} ${used ? 'is-used' : ''}`}
                  onClick={() => onSelectClue(category.id, clue.value)}
                  aria-label={`${category.name} for ${clue.value} points${used ? ', already played' : ''}`}
                >
                  <span className="value-number">{clue.value}</span>
                  <Sprig className="tile-sprig" />
                  <span className="used-mark" aria-hidden="true">
                    ✦
                  </span>
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
