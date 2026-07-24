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
      <section className="relative overflow-hidden bg-navy text-white border-b-4 border-teal">
        {/* พื้นหลังลายจางๆ — grid + คลื่น teal */}
        <div className="absolute inset-0 pointer-events-none text-teal" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" preserveAspectRatio="none">
            <defs>
              <pattern id="hero-grid" width="34" height="34" patternUnits="userSpaceOnUse">
                <path d="M34 0H0V34" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
          <svg
            className="absolute -bottom-8 left-0 w-full h-40 opacity-[0.12]"
            viewBox="0 0 1120 160"
            preserveAspectRatio="none"
          >
            <path d="M0 120 Q280 60 560 110 T1120 90" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M0 150 Q280 90 560 140 T1120 120" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative max-w-[720px] mx-auto px-5 py-16 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.12em] uppercase text-teal-soft border border-teal/40 rounded-full px-3.5 py-1.5">
            Education Innovation Area · กระบี่
          </span>
          <h1 className="font-head font-extrabold text-[clamp(27px,4.6vw,42px)] leading-[1.18] mt-5 mb-4 text-balance">
            ศูนย์กลางข่าวสารและนวัตกรรม ของโรงเรียนนำร่องทั้งจังหวัด
          </h1>
          <p className="text-[16.5px] text-white/75 max-w-[52ch] mb-7">
            รวมข่าวกิจกรรม ผลงานนวัตกรรม และข้อมูลของโรงเรียนนำร่องทั้ง 27 แห่ง ไว้ในที่เดียว
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
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
        </div>
      </section>

      <div className="max-w-[1120px] mx-auto px-5">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 -mt-7 mb-2 relative">
          {STATS.map((s) => (
            <div key={s.l} className="bg-surface border border-line rounded-2xl px-4 py-4 shadow-sm">
              <b className="font-head text-[26px] font-extrabold tabular-nums text-navy dark:text-blue">
                {s.n}
              </b>
              <span className="block text-[12.5px] text-muted">{s.l}</span>
            </div>
          ))}
        </div>

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
