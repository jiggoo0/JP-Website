/** @format */
import type { Metadata } from 'next'
import { inter, thaiFont, monoFont } from '@/lib/fonts'
import './globals.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * 🛰️ STATIC_METADATA_ENGINE
 * บังคับใช้ Absolute URL เพื่อแก้ปัญหา Facebook ไม่ดึงภาพ
 * สำหรับหน้า Dynamic Wiki ระบบจะใช้ Metadata จาก page.tsx ของหน้านั้นๆ แทน
 */
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://jpvisouldocs.website'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'JP Visual Docs | ระบบตรวจสอบและคลังความรู้',
    template: '%s | JP Visual Docs',
  },
  description:
    'แพลตฟอร์มศูนย์กลางการตรวจสอบเอกสารและคลังความรู้สำคัญ มาตรฐานระบบ Protocol v3.3.1 สำหรับ jpvisouldocs.website',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: BASE_URL,
    siteName: 'JP Visual Docs Website',
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'JP Visual Docs Verification Portal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`${BASE_URL}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-[#FAFAF9] font-thai antialiased selection:bg-[#FCDE09] selection:text-[#020617]',
          inter.variable,
          thaiFont.variable,
          monoFont.variable,
        )}
      >
        <Providers>
          {/* Skip to Content for Accessibility */}
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
