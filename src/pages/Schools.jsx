import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionHead from '../components/SectionHead'
import { SCHOOLS, SCHOOL_TYPES, pal, initials } from '../data/schools'

export default function Schools() {
  const [filter, setFilter] = useState('ทั้งหมด')
  const navigate = useNavigate()

  const list = SCHOOLS.map((s, i) => ({ s, i })).filter(
    ({ s }) => filter === 'ทั้งหมด' || s.t === filter,
  )

  return (
    <div className="max-w-[1120px] mx-auto px-5">
      <SectionHead
        eyebrow="Directory"
        title="โรงเรียนนำร่อง 27 แห่ง"
        sub="แตะที่โรงเรียนเพื่อดูโปรไฟล์ ข่าว และผลงาน"
      />

      <div className="flex gap-2 flex-wrap mb-[18px]">
        {SCHOOL_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`text-[13px] px-3.5 py-[7px] rounded-full border font-medium transition-colors ${
              filter === t
                ? 'bg-navy text-white border-navy'
                : 'bg-surface text-muted border-line hover:border-blue'
            }`}
          >
            {t === 'ทั้งหมด' ? 'ทั้งหมด · 27' : t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map(({ s, i }) => {
          const [c0, c1] = pal(i)
          return (
            <div
              key={i}
              onClick={() => navigate(`/schools/${i}`)}
              className="bg-surface border border-line rounded-2xl p-[18px] flex gap-3.5 items-center cursor-pointer shadow-sm hover:shadow-lg hover:border-blue transition-all"
            >
              <div
                className="w-[52px] h-[52px] rounded-[13px] shrink-0 grid place-items-center text-white font-extrabold text-xl font-head"
                style={{ background: `linear-gradient(135deg, ${c0}, ${c1})` }}
              >
                {initials(s.n)}
              </div>
              <div>
                <div className="font-bold text-[15px] leading-tight text-ink">โรงเรียน{s.n}</div>
                <div className="text-[12.5px] text-muted mt-0.5">
                  {s.g} · {s.t} · อ.{s.am}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
