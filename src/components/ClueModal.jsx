import { useEffect, useRef, useState } from 'react'
import { Diamond, Flourish } from './Ornaments.jsx'

export default function ClueModal({ category, clue, teams, onScore, onClose, onDismiss }) {
  const [revealed, setRevealed] = useState(false)
  const panelRef = useRef(null)

  // A fresh clue always starts hidden, even if the panel stays mounted.
  useEffect(() => {
    setRevealed(false)
    panelRef.current?.focus()
  }, [category.id, clue.value])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      // Space / Enter walks the clue forward: reveal, then close.
      if (event.key === ' ' || event.key === 'Enter') {
        if (event.target.closest('button')) return
        event.preventDefault()
        setRevealed((wasRevealed) => {
          if (wasRevealed) onClose()
          return true
        })
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="clue-overlay" role="dialog" aria-modal="true" aria-label={`${category.name} for ${clue.value}`}>
      <div
        className="clue-panel"
        ref={panelRef}
        tabIndex={-1}
        onClick={() => setRevealed(true)}
      >
        <button
          type="button"
          className="dismiss-button"
          title="Close without marking this square as played"
          aria-label="Close without marking this square as played"
          onClick={(event) => {
            event.stopPropagation()
            onDismiss()
          }}
        >
          ✕
        </button>

        <header className="clue-header">
          <Diamond className="clue-diamond" />
          <div>
            <p className="clue-category">{category.name}</p>
            <p className="clue-value">{clue.value}</p>
          </div>
          <Diamond className="clue-diamond" />
        </header>

        <Flourish className="clue-flourish" />

        <p className="clue-text">{clue.clue}</p>

        {revealed ? (
          <div className="answer-block">
            <p className="answer-label">Answer</p>
            <p className="answer-text">{clue.answer}</p>
          </div>
        ) : (
          <button
            type="button"
            className="reveal-button"
            onClick={(event) => {
              event.stopPropagation()
              setRevealed(true)
            }}
          >
            Reveal Answer
          </button>
        )}

        {teams.length > 0 && (
          <div className="award-row" onClick={(event) => event.stopPropagation()}>
            {teams.map((team) => (
              <div className="award-team" key={team.id}>
                <span className="award-name">{team.name}</span>
                <div className="award-buttons">
                  <button type="button" onClick={() => onScore(team.id, clue.value)}>
                    +{clue.value}
                  </button>
                  <button type="button" onClick={() => onScore(team.id, -clue.value)}>
                    −{clue.value}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          className="close-button"
          onClick={(event) => {
            event.stopPropagation()
            onClose()
          }}
        >
          Back to Board
        </button>

        <p className="clue-hint">
          Space reveals the answer, then returns to the board · Esc closes ·
          ✕ closes without marking the square played
        </p>
      </div>
    </div>
  )
}
