/** @format */
import { MetadataRoute } from 'next'
import { getWikiPostsAction } from '@/app/actions/wiki-actions'

/**
 * 🛰️ SEO_PROTOCOL: DYNAMIC_SITEMAP_GENERATOR
 * VERSION: 1.3.0 (Automation Focus)
 * ✅ Strategy: Auto-indexing of Wiki Content & Static Routing
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jpvisouldocs.online'

  // 1. ✨ STATIC_ROUTES: เส้นทางหลักของระบบ
  const staticRoutes = ['', '/verify', '/wiki', '/contact', '/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. 📚 DYNAMIC_WIKI_ROUTES: ดึงข้อมูลจาก Database/Data File อัตโนมัติ
  let wikiRoutes: MetadataRoute.Sitemap = []

  try {
    const response = await getWikiPostsAction()
    if (response.success && response.posts) {
      wikiRoutes = response.posts.map((post) => ({
        url: `${baseUrl}/wiki/${post.slug}`,
        lastModified: new Date(post.publishedAt || new Date()).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    }
  } catch (error) {
    console.error('Sitemap_Sync_Error:', error)
  }

  // 🏛️ MERGE_PROTOCOLS: รวมเส้นทางทั้งหมดเข้าด้วยกัน
  return [...staticRoutes, ...wikiRoutes]
}
