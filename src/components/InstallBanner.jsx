import { useState } from 'react'
import Icon from './Icon'
import { usePwaInstall } from '../lib/usePwaInstall'

export default function InstallBanner() {
  const { canInstall, isIOS, isStandalone, promptInstall } = usePwaInstall()
  const [showTip, setShowTip] = useState(false)

  // ติดตั้งเป็นแอปแล้ว -> ไม่ต้องโชว์
  if (isStandalone) return null

  const onClick = () => {
    if (canInstall) promptInstall()
    else setShowTip((v) => !v) // iOS หรือ browser ที่ยังไม่พร้อม -> โชว์วิธี
  }

  const tip = isIOS
    ? 'บน iPhone/iPad: แตะปุ่ม แชร์ (Share) ด้านล่าง แล้วเลือก “เพิ่มไปยังหน้าจอโฮม”'
    : 'เปิดเมนู ⋮ ของเบราว์เซอร์ แล้วเลือก “ติดตั้งแอป” หรือ “Add to Home screen”'

  return (
    <div className="bg-navy text-white rounded-2xl px-5 py-[18px] mt-8">
      <div className="flex items-center gap-3.5 flex-wrap">
        <div className="w-[42px] h-[42px] rounded-xl grid place-items-center shrink-0 bg-teal/20">
          <Icon name="phone" className="w-[22px] h-[22px] text-teal" />
        </div>
        <div>
          <b className="text-[15px]">ติดตั้งเป็นแอปบนมือถือได้</b>
          <p className="text-[13px] text-white/75 mt-0.5">
            เพิ่มลงหน้าจอหลัก เปิดใช้เหมือนแอป ไม่ต้องโหลดจาก Store
          </p>
        </div>
        <button
          onClick={onClick}
          className="sm:ml-auto inline-flex items-center gap-2 font-semibold rounded-xl px-5 py-3 text-[15px] bg-teal text-[#05201d] hover:bg-teal-700 hover:text-white transition-colors"
        >
          {canInstall ? 'ติดตั้งแอป' : 'วิธีติดตั้ง'}
        </button>
      </div>
      {showTip && !canInstall && (
        <p className="text-[13px] text-teal-soft mt-3 pt-3 border-t border-white/15">{tip}</p>
      )}
    </div>
  )
}
