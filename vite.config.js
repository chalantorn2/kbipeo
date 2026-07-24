import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate', // อัปเดต service worker อัตโนมัติเมื่อ deploy ใหม่
      includeAssets: ['favicon.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        name: 'พื้นที่นวัตกรรมการศึกษา จังหวัดกระบี่',
        short_name: 'นวัตกรรมกระบี่',
        description:
          'ศูนย์กลางข่าวสารและนวัตกรรมของโรงเรียนนำร่องพื้นที่นวัตกรรมการศึกษา จังหวัดกระบี่',
        lang: 'th',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#F6F8FC',
        theme_color: '#10294A',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icons/maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // cache ไฟล์ static ทั้งหมด -> เปิดแอปแบบ offline ได้
        globPatterns: ['**/*.{js,css,html,svg,png,woff,woff2}'],
        navigateFallback: '/index.html',
      },
    }),
  ],
})
