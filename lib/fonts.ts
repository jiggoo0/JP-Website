/** @format */
import { Inter, IBM_Plex_Sans_Thai, JetBrains_Mono } from 'next/font/google'

/**
 * 🛰️ SYSTEM_PROTOCOL: TYPOGRAPHY_ENGINE
 * VERSION: 1.2.0
 * ✅ Strategy: รองรับการเข้าถึง (WCAG AA) และความสวยงามที่ตรวจสอบได้
 */

// 🌍 ฟอนต์หลักสำหรับเนื้อหาภาษาไทยและสากล
export const thaiFont = IBM_Plex_Sans_Thai({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-thai',
  display: 'swap',
})

// 🌍 ฟอนต์สำหรับหัวข้อและภาษาอังกฤษทั่วไป
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// 🌍 ฟอนต์สำหรับรหัส Log, CaseID และ TicketID (เพื่อให้ตรวจสอบได้แม่นยำ)
export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
