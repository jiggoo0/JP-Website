/** @format */
import { Metadata } from 'next'

/**
 * 🛰️ SEO_PROTOCOL: METADATA_GENERATION_ENGINE
 * VERSION: 1.1.0 (Patched for Social Crawler Integrity)
 * ✅ Strategy: Unified Brand Authority & Absolute Path Resolution
 * 🛡️ Security: Server-Side URL Validation
 */

interface PageSeoProps {
  title: string
  description?: string
  canonicalUrlRelative?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description = 'ศูนย์กลางการตรวจสอบอัตลักษณ์และคลังข้อมูลดิจิทัล ภายใต้มาตรฐานความปลอดภัยสูงสุด JP Protocol v3.3.1',
  canonicalUrlRelative,
  ogImage = '/images/og-main-shield.jpg',
  noIndex = false,
}: PageSeoProps): Metadata {
  // 🌐 BASE_URL RESOLUTION: บังคับใช้ Absolute URL เพื่อให้ Social Media ดึงภาพได้
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jpvisouldocs.online'
  const siteName = 'JP Visuals & Docs'
  const fullTitle = `${title} | ${siteName}`

  // สร้าง Full Path สำหรับ Canonical และ Images
  const canonical = canonicalUrlRelative
    ? `${baseUrl}${canonicalUrlRelative.startsWith('/') ? '' : '/'}${canonicalUrlRelative}`
    : baseUrl

  // ตรวจสอบและสร้าง Full URL สำหรับ OG Image (สำคัญมากสำหรับ Facebook)
  const fullOgImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${baseUrl}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`

  return {
    title: fullTitle,
    description: description,
    metadataBase: new URL(baseUrl), // กำหนดฐานเพื่อรองรับการประมวลผล Metadata ภายใน Next.js
    alternates: {
      canonical: canonical,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonical,
      siteName: siteName,
      images: [
        {
          url: fullOgImageUrl,
          width: 1200,
          height: 630,
          alt: `JP VisualDocs - ${title}`,
        },
      ],
      locale: 'th_TH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      images: [fullOgImageUrl],
      creator: '@jpvisuals',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    // 🛡️ SECURITY_VERIFICATION
    verification: {
      google: 'google-site-verification-id', // กรุณาเปลี่ยนเป็น ID ของระบบจริง
    },
  }
}
