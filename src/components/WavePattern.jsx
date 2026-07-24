// ลายคลื่นไล่สีสำหรับพื้นหลังการ์ด/ปก
export default function WavePattern({ from, to, id }) {
  const gid = `wg-${id}`
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-60"
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill={`url(#${gid})`} />
      <path d="M0 150 Q100 120 200 150 T400 150 V200 H0Z" fill="rgba(255,255,255,.08)" />
      <path d="M0 170 Q100 145 200 170 T400 170 V200 H0Z" fill="rgba(255,255,255,.10)" />
    </svg>
  )
}
