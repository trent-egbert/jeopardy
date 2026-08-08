import { Heart } from './Ornaments.jsx'

export default function Scoreboard({ teams, onRename, onScore, onAddTeam, onRemoveTeam }) {
  return (
    <section className="scoreboard" aria-label="Team scores">
      <div className="scoreboard-teams">
        {teams.map((team) => (
          <div className="team-card" key={team.id}>
            <label className="team-name-field">
              <span className="team-name-pencil" aria-hidden="true">
                ✎
              </span>
              <input
                className="team-name"
                value={team.name}
                placeholder="Team name"
                title="Click to rename this team"
                onChange={(event) => onRename(team.id, event.target.value)}
                onFocus={(event) => event.target.select()}
                aria-label="Team name"
              />
            </label>
            <p className="team-score">{team.score}</p>
            <div className="team-controls">
              <button type="button" onClick={() => onScore(team.id, -100)} aria-label={`Subtract 100 from ${team.name}`}>
                −100
              </button>
              <button type="button" onClick={() => onScore(team.id, 100)} aria-label={`Add 100 to ${team.name}`}>
                +100
              </button>
              <button
                type="button"
                className="team-remove"
                onClick={() => onRemoveTeam(team.id)}
                aria-label={`Remove ${team.name}`}
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        <button type="button" className="add-team" onClick={onAddTeam}>
          <Heart />
          <span>Add Team</span>
        </button>
      </div>
    </section>
  )
}
