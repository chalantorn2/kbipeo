// โลโก้ตาม CI — 3 เส้นก้าวขึ้น (คลื่น/เติบโต) เส้นบน+จุดประกายสี teal
export default function Logo({ size = 38, variant = 'primary' }) {
  const badge = variant === 'reversed' ? '#fff' : 'var(--color-navy)'
  const line = variant === 'reversed' ? 'var(--color-navy)' : '#fff'
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="โลโก้">
      <rect x="4" y="4" width="92" height="92" rx="24" fill={badge} />
      <path d="M24 68 H52" stroke={line} strokeWidth="9" strokeLinecap="round" />
      <path d="M30 52 H64" stroke={line} strokeWidth="9" strokeLinecap="round" />
      <path d="M36 36 H72" stroke="var(--color-teal)" strokeWidth="9" strokeLinecap="round" />
      <circle cx="80" cy="28" r="5.5" fill="var(--color-teal)" />
    </svg>
  )
}
