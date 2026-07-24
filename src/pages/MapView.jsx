import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import SectionHead from '../components/SectionHead'
import { SCHOOLS, pal, MAP_POINTS } from '../data/schools'

export default function MapView() {
  const navigate = useNavigate()
  return (
    <div className="max-w-[1120px] mx-auto px-5">
      <SectionHead
        eyebrow="Map"
        title="แผนที่โรงเรียน"
        sub="ตำแหน่งโรงเรียนนำร่องทั่วจังหวัดกระบี่ (ตัวอย่างจำลอง)"
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-5">
        {/* Map */}
        <div className="bg-surface border border-line rounded-2xl overflow-hidden shadow-sm min-h-[420px]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full block"
            style={{ background: 'linear-gradient(160deg, var(--color-sky), var(--color-surface))' }}
          >
            <path
              d="M18 20 Q30 12 46 18 Q62 24 70 16 Q84 22 82 40 Q86 58 74 68 Q66 84 48 82 Q30 86 22 70 Q10 58 16 40 Q14 28 18 20Z"
              fill="color-mix(in srgb, var(--color-teal) 12%, transparent)"
              stroke="var(--color-teal)"
              strokeWidth="0.5"
              opacity="0.7"
            />
            {MAP_POINTS.map((pt) => {
              const [, c1] = pal(pt.i)
              return (
                <g key={pt.i} className="cursor-pointer" onClick={() => navigate(`/schools/${pt.i}`)}>
                  <circle cx={pt.x} cy={pt.y} r="4" fill="transparent" />
                  <circle cx={pt.x} cy={pt.y} r="3.4" fill="none" stroke={c1} strokeWidth="0.4" opacity="0.5" />
                  <circle cx={pt.x} cy={pt.y} r="1.9" fill={c1} stroke="#fff" strokeWidth="0.5" />
                </g>
              )
            })}
          </svg>
        </div>

        {/* List */}
        <div className="bg-surface border border-line rounded-2xl p-2 shadow-sm max-h-[420px] overflow-y-auto">
          {SCHOOLS.map((s, i) => {
            const [c0, c1] = pal(i)
            return (
              <div
                key={i}
                onClick={() => navigate(`/schools/${i}`)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer hover:bg-sky transition-colors"
              >
                <div
                  className="w-[26px] h-[26px] rounded-lg grid place-items-center text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${c0}, ${c1})` }}
                >
                  <Icon name="pin" className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-ink">โรงเรียน{s.n}</div>
                  <div className="text-xs text-muted">
                    อ.{s.am} · {s.t}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
