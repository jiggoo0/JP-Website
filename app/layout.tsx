/** @format */
import type { Metadata } from 'next'
import { inter, thaiFont, monoFont } from '@/lib/fonts'
import './globals.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { wikiData, generateSEOMeta, type WikiPost } from '@/data/wikiData'

interface RootLayoutProps {
  children: React.ReactNode
  postSlug?: string // สำหรับ dynamic wiki page
}

export default function RootLayout({ children, postSlug }: RootLayoutProps) {
  // ดึงข้อมูล post สำหรับ SEO
  const post: WikiPost | null = postSlug ? wikiData.find((p) => p.slug === postSlug) || null : null
  const seo = post ? generateSEOMeta(post) : null

  const metadata: Metadata = {
    title: seo?.title || 'JP Visual Docs | ระบบตรวจสอบและคลังความรู้',
    description:
      seo?.description ||
      'แพลตฟอร์มศูนย์กลางการตรวจสอบเอกสารและคลังความรู้สำคัญ มาตรฐานระบบ Protocol v3.3.1 สำหรับ jpvisouldocs.website',
    openGraph: {
      type: 'website',
      locale: 'th_TH',
      url: seo?.url || 'https://jpvisouldocs.website',
      siteName: 'JP Visual Docs Website',
      images: [
        {
          url: seo?.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: seo?.title || 'JP Visual Docs Verification Portal',
        },
      ],
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jpvisouldocs.website'),
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/icon.png', type: 'image/png' },
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/manifest.webmanifest',
  }

  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data สำหรับ SEO */}
        {post && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: post.title,
                description: post.description || '',
                image: post.image || '/og-image.jpg',
                author: {
                  '@type': 'Person',
                  name:
                    typeof post.author === 'string' ? post.author : post.author?.name || 'Unknown',
                },
                datePublished: post.publishedAt,
                dateModified: post.updatedAt,
                mainEntityOfPage: seo?.url,
              }),
            }}
          />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description || ''} />
        <link rel="canonical" href={seo?.url || 'https://jpvisouldocs.website'} />
      </head>
      <body
        className={cn(
          'min-h-screen bg-[#FAFAF9] font-thai antialiased selection:bg-[#FCDE09] selection:text-[#020617]',
          inter.variable,
          thaiFont.variable,
          monoFont.variable,
        )}
      >
        <Providers>
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
