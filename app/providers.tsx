/** @format */
'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'

/**
 * 🛰️ SYSTEM_PROTOCOL: GLOBAL_PROVIDERS_HUB
 * VERSION: 1.2.1 (Performance & Feedback Consistency)
 * ✅ Strategy: ทุกการกระทำมีผลลัพธ์ที่ตรวจสอบได้และไว้วางใจได้
 */

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {/* 🟢 MAIN_CONTENT */}
      {children}

      {/* 🔔 NOTIFICATION_SYSTEM: แจ้งผลการตรวจสอบทันทีด้วยคำแนะนำที่ชัดเจน */}
      <Toaster
        position="top-right"
        expand={true} // ปรับเป็น true เพื่อให้ผู้ใช้งานเห็นประวัติการแจ้งเตือนที่ตรวจสอบได้
        richColors
        closeButton
        theme="light"
        toastOptions={{
          style: {
            borderRadius: '0px',
            border: '2px solid #020617', // ปรับความหนาให้ดูเป็นมืออาชีพแต่ไม่หนักจนเกินไป
            background: '#ffffff',
            color: '#020617',
            fontFamily: 'var(--font-thai), var(--font-inter), sans-serif',
          },
          className: 'font-bold tracking-tight shadow-[4px_4px_0px_0px_rgba(2,6,23,1)]',
        }}
      />
    </NextThemesProvider>
  )
}
