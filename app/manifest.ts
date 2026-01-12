/** @format */
import { MetadataRoute } from 'next'

/**
 * 🛰️ SYSTEM_PROTOCOL: PWA_MANIFEST_CONFIG
 * VERSION: 1.1.0
 * ✅ Strategy: ทุกขั้นตอนตรวจสอบได้ รองรับการใช้งานแบบ Multi-Platform
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JP Visual & Docs',
    short_name: 'JP_VISUALS',
    description: 'ระบบตรวจสอบเอกสารและฐานข้อมูลความรู้ที่ไว้วางใจได้ มาตรฐาน v3.3.1',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait', // บังคับแนวตั้งเพื่อความสวยงามของ UI
    background_color: '#FAFAF9', // ใช้สีพื้นหลังตาม Palette ที่กำหนด
    theme_color: '#020617', // ใช้สี Primary เพื่อความเป็นมืออาชีพ
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable', // ช่วยให้ไอคอนปรับตามรูปทรงของแต่ละ OS ได้อย่างราบรื่น
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
