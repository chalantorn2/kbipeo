import { useNavigate } from 'react-router-dom'
import SectionHead from '../components/SectionHead'
import { SCHOOLS, pal, INNOVATIONS, NEWS_EXCERPT } from '../data/schools'

export default function Innovation() {
  const navigate = useNavigate()
  return (
    <div className="max-w-[1120px] mx-auto px-5">
      <SectionHead
        eyebrow="Innovation Showcase"
        title="คลังนวัตกรรม"
        sub="ผลงานเด่นจากโรงเรียนนำร่อง เรียนรู้และนำไปปรับใช้ได้"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {INNOVATIONS.map((x, k) => {
          const sc = SCHOOLS[x.s]
          const [, c1] = pal(x.s)
          return (
            <article
              key={k}
              onClick={() => navigate(`/schools/${x.s}`)}
              className="bg-surface border border-line rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="h-2" style={{ background: c1 }} />
              <div className="p-[18px] flex flex-col gap-2.5">
                <span className="self-start text-[11.5px] font-semibold px-2.5 py-1 rounded-full bg-teal-soft text-teal-700 dark:text-teal">
                  {x.c}
                </span>
                <h3 className="text-[16.5px] font-bold leading-snug text-ink">{x.t}</h3>
                <div className="text-[12.5px] text-muted flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                  โรงเรียน{sc.n}
                </div>
                <p className="text-[13.5px] text-muted">{NEWS_EXCERPT}</p>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
