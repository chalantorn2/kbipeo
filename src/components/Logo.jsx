// โลโก้ ศธจ.กระบี่ — ใช้ไฟล์ logo.png
export default function Logo({ size = 38 }) {
  return (
    <img
      src="/logo.png"
      width={size}
      height={size}
      alt="โลโก้ ศธจ.กระบี่"
      className="rounded-[10px] object-contain"
    />
  )
}
