import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Icon from '../components/Icon'
import WavePattern from '../components/WavePattern'
import { SCHOOLS, pal, initials, NEWS_TITLES, fakeDate } from '../data/schools'

export default function SchoolDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const i = Number(id)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  if (!Number.isInteger(i) || i < 0 || i >= SCHOOLS.length) {
    return <Navigate to="/schools" replace />
  }

  const s = SCHOOLS[i]
  const [c0] = pal(i)
  const teachers = Math.max(6, Math.round(s.st / 16))
  const rooms = Math.max(8, Math.round(s.st / 22))

  const stats = [
    { b: s.st.toLocaleString(), l: 'นักเรียน' },
    { b: teachers, l: 'ครูและบุคลากร' },
    { b: rooms, l: 'ห้องเรียน' },
    { b: 3 + (i % 6), l: 'ผลงานนวัตกรรม' },
  ]

  const info = [
    ['ที่ตั้ง', `อำเภอ${s.am} จังหวัดกระบี่ 811xx`],
    ['สังกัด', `${s.t} (พื้นที่นวัตกรรม)`],
    ['ระดับ', s.g],
    ['โทรศัพท์', '0-75xx-xxxx'],
  ]

  return (
    <div className="max-w-[1120px] mx-auto px-5">
      <button
        onClick={() => navigate('/schools')}
        className="inline-flex items-center gap-1.5 text-sm text-muted font-semibold mt-[22px] hover:text-blue transition-colors"
      >
        <Icon name="back" /> กลับไปรายชื่อโรงเรียน
      </button>

      {/* Profile hero */}
      <div className="rounded-[18px] overflow-hidden border border-line shadow-lg mt-3">
        <div className="relative h-[150px]" style={{ background: c0 }}>
          <WavePattern />
        </div>
        <div className="bg-surface px-6 pb-[22px] flex gap-[18px] items-end flex-wrap">
          <div
            className="w-[88px] h-[88px] rounded-[20px] -mt-11 grid place-items-center text-white font-extrabold text-[34px] font-head border-4 border-surface shrink-0"
            style={{ background: c0 }}
          >
            {initials(s.n)}
          </div>
          <div className="flex-1 min-w-[200px] pt-3.5">
            <h2 className="text-[22px] font-extrabold text-ink">โรงเรียน{s.n}</h2>
            <div className="text-[13.5px] text-muted mt-1 flex gap-4 flex-wrap items-center">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="pin" className="w-[15px] h-[15px]" />
                อำเภอ{s.am} จ.กระบี่
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="school" className="w-[15px] h-[15px]" />
                {s.g}
              </span>
              <span className="text-[11.5px] font-semibold px-2.5 py-1 rounded-full bg-sky text-blue-700 dark:text-blue">
                {s.t}
              </span>
            </div>
          </div>
          <div className="flex gap-2.5 pt-3.5 flex-wrap">
            <button className="inline-flex items-center gap-2 font-semibold rounded-xl px-5 py-3 text-[15px] bg-blue text-white hover:bg-blue-700 transition-colors">
              ติดตามโรงเรียน
            </button>
            <button className="inline-flex items-center gap-2 font-semibold rounded-xl px-5 py-3 text-[15px] bg-surface text-blue border border-line hover:border-blue transition-colors">
              เว็บ / เพจโรงเรียน
            </button>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 mt-[22px]">
        <div className="flex flex-col gap-5">
          <div className="bg-surface border border-line rounded-2xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-ink mb-3">ข้อมูลโรงเรียน</h3>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((st) => (
                <div key={st.l} className="bg-paper border border-line rounded-xl px-4 py-3.5">
                  <b className="text-[22px] tabular-nums text-blue font-head">{st.b}</b>
                  <span className="block text-xs text-muted">{st.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-line rounded-2xl p-5 shadow-sm">
            <h3 className="text-base font-bold text-ink mb-3">ข่าวและกิจกรรมล่าสุด</h3>
            <div className="flex flex-col gap-3">
              {Array.from({ length: 3 }, (_, k) => {
                const [p0] = pal(i + k)
                return (
                  <div key={k} className="flex gap-3">
                    <div
                      className="w-14 h-14 rounded-xl shrink-0"
                      style={{ background: p0 }}
                    />
                    <div>
                      <div className="text-sm font-semibold leading-snug text-ink">
                        {NEWS_TITLES[(i + k) % NEWS_TITLES.length]}
                      </div>
                      <div className="text-[11.5px] text-muted font-mono mt-0.5">{fakeDate(i + k)}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="bg-surface border border-line rounded-2xl p-5 shadow-sm self-start">
          <h3 className="text-base font-bold text-ink mb-3">ข้อมูลติดต่อ</h3>
          <div className="flex flex-col gap-3">
            {info.map(([k, v]) => (
              <div key={k} className="flex gap-3 text-sm items-start">
                <span className="text-muted min-w-[74px] shrink-0">{k}</span>
                <span className="text-ink">{v}</span>
              </div>
            ))}
            <div className="flex gap-3 text-sm items-start">
              <span className="text-muted min-w-[74px] shrink-0">ช่องทาง</span>
              <span className="text-blue font-medium">Facebook · เว็บไซต์</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
