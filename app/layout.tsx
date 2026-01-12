/** @format */
import type { Metadata, Viewport } from 'next'
// 🛰️ นำเข้าฟอนต์จากศูนย์กลางเพื่อให้ตรวจสอบได้ง่าย
import { inter, thaiFont, monoFont } from '@/lib/fonts'
import './globals.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * 🛰️ SYSTEM_PROTOCOL: ROOT_ARCHITECTURE
 * VERSION: 1.6.2 (Font Integration & Accessibility Patch)
 * ✅ Strategy: ทุกขั้นตอนตรวจสอบได้ เพื่อความไว้วางใจได้ของระบบ
 */

export const metadata: Metadata = {
  title: {
    default: 'JP Visual & Docs | ตรวจสอบเอกสารอย่างถูกต้อง',
    template: '%s | JP Visual & Docs',
  },
  description:
    'แพลตฟอร์มจัดการและตรวจสอบเอกสารสำคัญอย่างรวดเร็วและไว้วางใจได้ มาตรฐานระบบ Protocol v3.3.1',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://jpvisuals.online',
    siteName: 'JP Visual & Docs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'JP Visual & Docs Official Portal',
      },
    ],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jpvisuals.online'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-[#FAFAF9] font-thai antialiased selection:bg-[#FCDE09] selection:text-[#020617]',
          // 🏛️ ผสมผสานตัวแปรฟอนต์ทั้งหมดเข้าด้วยกัน
          inter.variable,
          thaiFont.variable,
          monoFont.variable,
        )}
      >
        <Providers>
          {/* ♿ Skip to Content เพื่อมาตรฐาน WCAG AA */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:bg-[#FCDE09] focus:p-4 focus:font-black focus:uppercase focus:italic focus:text-[#020617]"
          >
            ข้ามไปที่เนื้อหาหลัก (Skip to Content)
          </a>

          <div className="relative flex min-h-screen flex-col">
            <Header />

            <main id="main-content" className="flex-1 outline-none">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
