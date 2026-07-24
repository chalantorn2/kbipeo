import { Link } from 'react-router-dom'

export default function SectionHead({ eyebrow, title, sub, moreTo, moreLabel }) {
  return (
    <div className="flex items-end justify-between gap-4 mt-10 mb-[18px]">
      <div>
        {eyebrow && (
          <div className="font-mono text-xs tracking-[0.14em] uppercase text-teal-700 dark:text-teal font-bold">
            {eyebrow}
          </div>
        )}
        <h2 className="text-[23px] font-extrabold tracking-tight text-ink mt-1">{title}</h2>
        {sub && <div className="text-sm text-muted mt-1">{sub}</div>}
      </div>
      {moreTo && (
        <Link to={moreTo} className="text-sm text-blue font-semibold whitespace-nowrap">
          {moreLabel} →
        </Link>
      )}
    </div>
  )
}
