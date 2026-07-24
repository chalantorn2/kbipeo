import { Link } from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import SectionHead from '../components/SectionHead'
import InstallBanner from '../components/InstallBanner'

const STATS = [
  { n: '27', l: 'โรงเรียนนำร่อง' },
  { n: '4', l: 'สังกัดต้นทาง' },
  { n: '140+', l: 'ผลงานนวัตกรรม' },
  { n: '18,600', l: 'นักเรียนในพื้นที่' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-700 to-blue-700 text-white">
        <div
          className="absolute -right-[10%] -top-[40%] w-3/5 h-[180%] pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(34,211,192,.35), transparent)' }}
        />
        <div className="relative max-w-[1120px] mx-auto px-5 pt-[52px] pb-14">
          <span className="inline-flex items-center gap-2 font-mono text-[12.5px] tracking-[0.1em] uppercase text-teal-soft border border-white/20 px-3 py-1.5 rounded-full">
            Education Innovation Area · กระบี่
          </span>
          <h1 className="font-head font-extrabold text-[clamp(27px,4.6vw,42px)] leading-[1.16] mt-[18px] mb-3 text-balance max-w-[18ch]">
            ศูนย์กลางข่าวสารและนวัตกรรม ของโรงเรียนนำร่องทั้งจังหวัด
          </h1>
          <p className="text-[17px] text-white/80 max-w-[56ch] mb-6">
            รวมข่าวกิจกรรม ผลงานนวัตกรรม และข้อมูลของโรงเรียนนำร่องทั้ง 27 แห่ง ไว้ในที่เดียว
            ติดตามง่าย เข้าถึงได้ทุกอุปกรณ์
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/innovation"
              className="inline-flex items-center gap-2 font-semibold rounded-xl px-5 py-3 text-[15px] bg-teal text-[#05201d] hover:bg-teal-700 hover:text-white transition-colors"
            >
              ดูคลังนวัตกรรม
            </Link>
            <Link
              to="/schools"
              className="inline-flex items-center gap-2 font-semibold rounded-xl px-5 py-3 text-[15px] bg-white/12 border border-white/25 hover:bg-white/20 transition-colors"
            >
              โรงเรียนนำร่อง 27 แห่ง
            </Link>
          </div>
          <div className="flex gap-7 flex-wrap mt-8 pt-6 border-t border-white/15">
            {STATS.map((s) => (
              <div key={s.l}>
                <b className="font-head text-[26px] font-extrabold tabular-nums">{s.n}</b>
                <span className="block text-[12.5px] text-white/70">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[1120px] mx-auto px-5">
        <SectionHead
          eyebrow="อัปเดตล่าสุด"
          title="ข่าวและกิจกรรมโรงเรียน"
          sub="โพสต์โดยแต่ละโรงเรียน รวมเข้าหน้านี้อัตโนมัติ"
          moreTo="/schools"
          moreLabel="ดูรายโรงเรียน"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {Array.from({ length: 9 }, (_, i) => (
            <NewsCard key={i} i={i} />
          ))}
        </div>

        {/* Install app banner (PWA) */}
        <InstallBanner />
      </div>
    </>
  )
}
