// Small decorative SVGs that give the board its hand-lettered, vintage look.
// They're purely presentational, so they stay out of the accessibility tree.

const hidden = { 'aria-hidden': true, focusable: 'false' }

export function Crown({ className = '' }) {
  return (
    <svg className={`ornament crown ${className}`} viewBox="0 0 120 78" {...hidden}>
      <path
        d="M10 62 L4 20 L30 40 L60 8 L90 40 L116 20 L110 62 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M10 62 H110" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <circle cx="4" cy="17" r="5" fill="currentColor" />
      <circle cx="116" cy="17" r="5" fill="currentColor" />
      <circle cx="60" cy="5" r="5" fill="currentColor" />
      <path
        d="M60 56 C52 46 44 42 44 34 C44 28 49 25 53 25 C56 25 59 27 60 30 C61 27 64 25 67 25 C71 25 76 28 76 34 C76 42 68 46 60 56 Z"
        className="heart"
      />
    </svg>
  )
}

export function Diamond({ className = '' }) {
  return (
    <svg className={`ornament diamond ${className}`} viewBox="0 0 40 60" {...hidden}>
      <path d="M20 2 L38 30 L20 58 L2 30 Z" fill="currentColor" />
      <path
        d="M20 10 L31 30 L20 50 L9 30 Z"
        fill="none"
        stroke="var(--cream)"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function Sprig({ className = '' }) {
  return (
    <svg className={`ornament sprig ${className}`} viewBox="0 0 140 26" {...hidden}>
      <g stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M8 13 C24 13 34 7 46 5" />
        <path d="M46 5 C36 5 30 9 28 15" />
        <path d="M8 13 C22 15 30 19 36 23" />
        <path d="M132 13 C116 13 106 7 94 5" />
        <path d="M94 5 C104 5 110 9 112 15" />
        <path d="M132 13 C118 15 110 19 104 23" />
      </g>
      <path d="M70 4 L74 12 L82 13 L74 14 L70 22 L66 14 L58 13 L66 12 Z" className="star" />
    </svg>
  )
}

export function Flourish({ className = '' }) {
  return (
    <svg className={`ornament flourish ${className}`} viewBox="0 0 220 40" {...hidden}>
      <g stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M4 20 C40 20 60 4 92 6 C104 7 108 16 100 21 C94 25 84 22 84 14" />
        <path d="M4 20 C36 24 58 32 84 34" />
        <path d="M216 20 C180 20 160 4 128 6 C116 7 112 16 120 21 C126 25 136 22 136 14" />
        <path d="M216 20 C184 24 162 32 136 34" />
      </g>
      <path d="M110 8 L114 17 L123 20 L114 23 L110 32 L106 23 L97 20 L106 17 Z" className="star" />
    </svg>
  )
}

export function Heart({ className = '' }) {
  return (
    <svg className={`ornament heart-icon ${className}`} viewBox="0 0 32 30" {...hidden}>
      <path d="M16 28 C6 19 2 14 2 9.5 C2 5 5.5 2 9.5 2 C12.3 2 14.8 3.7 16 6.2 C17.2 3.7 19.7 2 22.5 2 C26.5 2 30 5 30 9.5 C30 14 26 19 16 28 Z" />
    </svg>
  )
}
