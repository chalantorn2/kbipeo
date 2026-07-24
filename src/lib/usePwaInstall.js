import { useEffect, useState } from 'react'

// จัดการการติดตั้ง PWA
// - Chrome/Android/Edge: จับ event beforeinstallprompt แล้วเรียก prompt() เอง
// - iOS Safari: ไม่มี event -> ต้องบอกวิธี (แชร์ > เพิ่มไปยังหน้าจอโฮม)
export function usePwaInstall() {
  const [deferred, setDeferred] = useState(null)
  const [installed, setInstalled] = useState(false)

  const isIOS =
    typeof navigator !== 'undefined' &&
    /iphone|ipad|ipod/i.test(navigator.userAgent) &&
    !/crios|fxios/i.test(navigator.userAgent)

  const isStandalone =
    typeof window !== 'undefined' &&
    (window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true)

  useEffect(() => {
    const onPrompt = (e) => {
      e.preventDefault() // กัน browser เด้ง prompt เอง เก็บไว้เรียกตอนกดปุ่ม
      setDeferred(e)
    }
    const onInstalled = () => {
      setInstalled(true)
      setDeferred(null)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  const promptInstall = async () => {
    if (!deferred) return false
    deferred.prompt()
    const { outcome } = await deferred.userChoice
    if (outcome === 'accepted') setDeferred(null)
    return outcome === 'accepted'
  }

  return {
    canInstall: !!deferred, // ติดตั้งได้ทันทีด้วยปุ่ม
    isIOS,
    isStandalone: isStandalone || installed,
    promptInstall,
  }
}
