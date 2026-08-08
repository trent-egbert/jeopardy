import { useCallback, useEffect, useMemo, useState } from 'react'
import Board from './components/Board.jsx'
import ClueModal from './components/ClueModal.jsx'
import Scoreboard from './components/Scoreboard.jsx'
import { Crown, Flourish, Heart } from './components/Ornaments.jsx'
import {
  categories,
  DEFAULT_TEAMS,
  FOOTER_NOTE,
  GAME_SUBTITLE,
  TITLE_BOTTOM,
  TITLE_TOP,
} from './data/gameData.js'

const STORAGE_KEY = 'jeopardy-board-state-v1'

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null')
    if (!saved) return null
    return {
      usedClues: Array.isArray(saved.usedClues) ? saved.usedClues : [],
      teams: Array.isArray(saved.teams) ? saved.teams : DEFAULT_TEAMS,
    }
  } catch {
    return null
  }
}

export default function App() {
  const [saved] = useState(loadState)
  const [usedClues, setUsedClues] = useState(() => new Set(saved?.usedClues ?? []))
  const [teams, setTeams] = useState(() => saved?.teams ?? DEFAULT_TEAMS)
  const [activeClue, setActiveClue] = useState(null)
  const [showScoreboard, setShowScoreboard] = useState(true)

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ usedClues: [...usedClues], teams }),
    )
  }, [usedClues, teams])

  const selectClue = useCallback((categoryId, value) => {
    setActiveClue({ categoryId, value })
    setUsedClues((previous) => new Set(previous).add(`${categoryId}:${value}`))
  }, [])

  // Closing with the ✕ backs out of a square opened by mistake, so the tile
  // goes back to unplayed rather than staying marked.
  const dismissClue = useCallback(() => {
    if (activeClue) {
      const key = `${activeClue.categoryId}:${activeClue.value}`
      setUsedClues((previous) => {
        const next = new Set(previous)
        next.delete(key)
        return next
      })
    }
    setActiveClue(null)
  }, [activeClue])

  const scoreTeam = useCallback((teamId, delta) => {
    setTeams((previous) =>
      previous.map((team) =>
        team.id === teamId ? { ...team, score: team.score + delta } : team,
      ),
    )
  }, [])

  const renameTeam = useCallback((teamId, name) => {
    setTeams((previous) =>
      previous.map((team) => (team.id === teamId ? { ...team, name } : team)),
    )
  }, [])

  const addTeam = useCallback(() => {
    setTeams((previous) => [
      ...previous,
      { id: `team-${crypto.randomUUID()}`, name: `Team ${previous.length + 1}`, score: 0 },
    ])
  }, [])

  const removeTeam = useCallback((teamId) => {
    setTeams((previous) => previous.filter((team) => team.id !== teamId))
  }, [])

  const resetGame = useCallback(() => {
    if (!window.confirm('Clear every played square and reset all scores to zero?')) return
    setUsedClues(new Set())
    setTeams((previous) => previous.map((team) => ({ ...team, score: 0 })))
    setActiveClue(null)
  }, [])

  const active = useMemo(() => {
    if (!activeClue) return null
    const category = categories.find((item) => item.id === activeClue.categoryId)
    const clue = category?.clues.find((item) => item.value === activeClue.value)
    return category && clue ? { category, clue } : null
  }, [activeClue])

  return (
    <div className="page">
      <div className="frame">
        <header className="masthead">
          <Crown />
          <h1 className="title">
            <span className="title-jeopardy">{TITLE_TOP}</span>
            <span className="title-board">{TITLE_BOTTOM}</span>
          </h1>
          <p className="subtitle">
            <span className="subtitle-star">★</span>
            {GAME_SUBTITLE}
            <span className="subtitle-star">★</span>
          </p>
        </header>

        <Board categories={categories} usedClues={usedClues} onSelectClue={selectClue} />

        <footer className="footer">
          <Flourish />
          <p className="footer-note">{FOOTER_NOTE}</p>
          <Heart className="footer-heart" />
        </footer>
      </div>

      <div className="controls">
        <button type="button" onClick={() => setShowScoreboard((shown) => !shown)}>
          {showScoreboard ? 'Hide Scores' : 'Show Scores'}
        </button>
        <button type="button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      {showScoreboard && (
        <Scoreboard
          teams={teams}
          onRename={renameTeam}
          onScore={scoreTeam}
          onAddTeam={addTeam}
          onRemoveTeam={removeTeam}
        />
      )}

      {active && (
        <ClueModal
          category={active.category}
          clue={active.clue}
          teams={teams}
          onScore={scoreTeam}
          onClose={() => setActiveClue(null)}
          onDismiss={dismissClue}
        />
      )}
    </div>
  )
}
