import { useNavigate } from 'react-router-dom'
import WavePattern from './WavePattern'
import { SCHOOLS, pal, CATS, NEWS_TITLES, NEWS_EXCERPT, fakeDate } from '../data/schools'

export default function NewsCard({ i }) {
  const navigate = useNavigate()
  const si = i % SCHOOLS.length
  const sc = SCHOOLS[si]
  const [c0, c1] = pal(i)
  const cat = CATS[i % CATS.length]

  return (
    <article
      onClick={() => navigate(`/schools/${si}`)}
      className="bg-surface border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
    >
      <div className="relative h-[150px] grid place-items-center" style={{ background: c0 }}>
        <WavePattern from={c0} to={c1} id={`n${i}`} />
        <span className="absolute right-3 top-3 text-[11px] font-semibold bg-white/90 text-navy px-2.5 py-1 rounded-full">
          {cat}
        </span>
        <span className="absolute left-3.5 bottom-3 z-10 text-white font-bold text-sm [text-shadow:0_1px_4px_rgba(0,0,0,.4)]">
          โรงเรียน{sc.n}
        </span>
      </div>
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <span className="font-mono text-[11px] text-muted">{fakeDate(i)}</span>
        <h3 className="text-base font-bold leading-snug text-ink">{NEWS_TITLES[i % NEWS_TITLES.length]}</h3>
        <p className="text-[13.5px] text-muted">{NEWS_EXCERPT}</p>
      </div>
    </article>
  )
}
