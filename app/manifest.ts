/** @format */
import { MetadataRoute } from 'next'

/**
 * 🛰️ SYSTEM_PROTOCOL: PWA_MANIFEST_CONFIG
 * VERSION: 1.2.0 (Domain_Website_Alignment)
 * ✅ Strategy: รองรับการติดตั้งแอปเพื่อตรวจสอบเอกสาร (Verification Hub)
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'JP Visual Docs | Verification Center',
    short_name: 'JP_VERIFY', // ปรับให้สื่อถึงหน้าที่หลักคือการตรวจสอบ
    description: 'ศูนย์กลางตรวจสอบเอกสารและคลังความรู้มาตรฐาน v3.3.1 (jpvisouldocs.website)',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FAFAF9',
    theme_color: '#020617',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png', // เพิ่มการรองรับ Apple Devices โดยตรง
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192x192.png', // ตรวจสอบว่ามีไฟล์นี้ใน public/ หรือยัง
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
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
