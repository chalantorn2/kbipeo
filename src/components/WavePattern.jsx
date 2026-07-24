// ลายคลื่นขาวบางๆ สำหรับพื้นหลังปก (พื้นสีทึบ ไม่ใช้ gradient)
export default function WavePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 150 Q100 120 200 150 T400 150 V200 H0Z" fill="rgba(255,255,255,.08)" />
      <path d="M0 170 Q100 145 200 170 T400 170 V200 H0Z" fill="rgba(255,255,255,.10)" />
    </svg>
  )
}
