import { useEffect, useRef, useState } from 'react'
import { defaultContent, isEdited, isValidContent } from '../content.js'

export default function AdminPanel({ categories, onChange, onRestore, onClose }) {
  const [activeId, setActiveId] = useState(categories[0]?.id)
  const [notice, setNotice] = useState(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  // Notices ("Imported", "Restored") are transient status, not state to keep.
  useEffect(() => {
    if (!notice) return undefined
    const timer = setTimeout(() => setNotice(null), 2600)
    return () => clearTimeout(timer)
  }, [notice])

  const active = categories.find((category) => category.id === activeId) ?? categories[0]

  const renameCategory = (name) => {
    onChange(
      categories.map((category) =>
        category.id === active.id ? { ...category, name } : category,
      ),
    )
  }

  const editClue = (value, field, text) => {
    onChange(
      categories.map((category) =>
        category.id === active.id
          ? {
              ...category,
              clues: category.clues.map((clue) =>
                clue.value === value ? { ...clue, [field]: text } : clue,
              ),
            }
          : category,
      ),
    )
  }

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(categories, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'jeopardy-board.json'
    link.click()
    URL.revokeObjectURL(url)
    setNotice('Downloaded jeopardy-board.json')
  }

  const importJson = async (event) => {
    const file = event.target.files?.[0]
    event.target.value = '' // Let the same file be picked again after a failure.
    if (!file) return
    try {
      const parsed = JSON.parse(await file.text())
      if (!isValidContent(parsed)) {
        setNotice("That file isn't a board export — nothing changed.")
        return
      }
      onChange(parsed)
      setActiveId(parsed[0].id)
      setNotice(`Imported ${file.name}`)
    } catch {
      setNotice("That file couldn't be read as JSON — nothing changed.")
    }
  }

  const restore = () => {
    if (
      !window.confirm(
        'Discard every edit and restore the clues from the printed cards?',
      )
    ) {
      return
    }
    onRestore()
    setActiveId(defaultContent()[0].id)
    setNotice('Restored the original clue cards')
  }

  return (
    <div className="admin-overlay" role="dialog" aria-modal="true" aria-label="Edit the board">
      <div className="admin-panel">
        <header className="admin-header">
          <div>
            <h2 className="admin-title">Edit the Board</h2>
            <p className="admin-subtitle">
              {isEdited(categories)
                ? 'Showing your edits · saved in this browser as you type'
                : 'Showing the original clue cards · saved in this browser as you type'}
            </p>
          </div>
          <button
            type="button"
            className="dismiss-button admin-close"
            aria-label="Close the editor"
            onClick={onClose}
          >
            ✕
          </button>
        </header>

        <nav className="admin-tabs" aria-label="Categories">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`admin-tab ${category.id === active.id ? 'is-active' : ''}`}
              onClick={() => setActiveId(category.id)}
              aria-current={category.id === active.id}
            >
              {category.name || 'Untitled'}
            </button>
          ))}
        </nav>

        <label className="admin-field admin-category-field">
          <span className="admin-label">Category name</span>
          <input
            className="admin-input"
            value={active.name}
            placeholder="Category name"
            onChange={(event) => renameCategory(event.target.value)}
          />
        </label>

        <div className="admin-clues">
          {active.clues.map((clue) => (
            <section className="admin-clue" key={clue.value}>
              <h3 className="admin-clue-value">{clue.value}</h3>
              <label className="admin-field">
                <span className="admin-label">Clue</span>
                <textarea
                  className="admin-input admin-textarea"
                  value={clue.clue}
                  rows={3}
                  placeholder="What the class sees first"
                  onChange={(event) => editClue(clue.value, 'clue', event.target.value)}
                />
              </label>
              <label className="admin-field">
                <span className="admin-label">Answer</span>
                <textarea
                  className="admin-input admin-textarea"
                  value={clue.answer}
                  rows={3}
                  placeholder="What's revealed next"
                  onChange={(event) => editClue(clue.value, 'answer', event.target.value)}
                />
              </label>
            </section>
          ))}
        </div>

        <footer className="admin-footer">
          <div className="admin-actions">
            <button type="button" onClick={exportJson}>
              Download Board
            </button>
            <button type="button" onClick={() => fileInputRef.current?.click()}>
              Load Board File
            </button>
            <button type="button" onClick={restore}>
              Restore Original
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json,.json"
              className="admin-file-input"
              onChange={importJson}
            />
          </div>
          <button type="button" className="close-button" onClick={onClose}>
            Done
          </button>
        </footer>

        <p className="admin-notice" role="status">
          {notice ?? ''}
        </p>
      </div>
    </div>
  )
}
