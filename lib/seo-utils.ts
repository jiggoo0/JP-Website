/** @format */
import { Metadata } from 'next'

/**
 * 🛰️ SEO_PROTOCOL: METADATA_GENERATION_ENGINE
 * VERSION: 1.0.0
 * ✅ Strategy: Unified Brand Authority & Dynamic OpenGraph
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jpvisouldocs.online'
  const siteName = 'JP Visuals & Docs'
  const fullTitle = `${title} | ${siteName}`

  const canonical = canonicalUrlRelative ? `${baseUrl}${canonicalUrlRelative}` : baseUrl

  return {
    title: fullTitle,
    description: description,
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
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `Official Archive - ${title}`,
        },
      ],
      locale: 'th_TH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description,
      images: [ogImage],
      creator: '@jpvisuals',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    // 🛡️ SECURITY_EXTENSIONS
    verification: {
      google: 'google-site-verification-id', // ใส่ ID จาก Search Console
    },
  }
}
