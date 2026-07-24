import Icon from '../components/Icon'
import SectionHead from '../components/SectionHead'
import { DOCS } from '../data/schools'

export default function Docs() {
  return (
    <div className="max-w-[1120px] mx-auto px-5">
      <SectionHead
        eyebrow="Resources"
        title="คลังเอกสารและดาวน์โหลด"
        sub="คู่มือ แบบฟอร์ม และประกาศ สำหรับโรงเรียนนำร่อง"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {DOCS.map((d, i) => (
          <button
            key={i}
            className="flex items-center gap-3.5 bg-surface border border-line rounded-xl px-[18px] py-4 text-left shadow-sm hover:border-blue transition-colors"
          >
            <div className="w-[42px] h-[42px] rounded-lg bg-sky text-blue grid place-items-center shrink-0">
              <Icon name="doc" className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[15px] text-ink">{d.n}</div>
              <div className="text-xs text-muted font-mono mt-0.5">{d.m}</div>
            </div>
            <Icon name="download" className="w-[18px] h-[18px] text-muted" />
          </button>
        ))}
      </div>
    </div>
  )
}
