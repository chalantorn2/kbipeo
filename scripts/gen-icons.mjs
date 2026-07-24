// สร้าง PWA icons จากโลโก้ CI -> public/icons/*.png
// รัน: bun scripts/gen-icons.mjs
import sharp from 'sharp'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '../public/icons')
mkdirSync(outDir, { recursive: true })

const NAVY = '#10294A'
const TEAL = '#0FB5A6'

// full-bleed icon (โลโก้อยู่ใน safe zone ~80% กลางภาพ สำหรับ maskable)
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${NAVY}"/>
  <g transform="translate(51,51) scale(4.1)" stroke-linecap="round" fill="none">
    <path d="M24 68 H52" stroke="#fff" stroke-width="9"/>
    <path d="M30 52 H64" stroke="#fff" stroke-width="9"/>
    <path d="M36 36 H72" stroke="${TEAL}" stroke-width="9"/>
    <circle cx="80" cy="28" r="5.5" fill="${TEAL}" stroke="none"/>
  </g>
</svg>`

const buf = Buffer.from(svg)
const targets = [
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'maskable-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
]

for (const t of targets) {
  await sharp(buf).resize(t.size, t.size).png().toFile(resolve(outDir, t.name))
  console.log('generated', t.name)
}
