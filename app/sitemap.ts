/** @format */
import { MetadataRoute } from 'next'
import { getWikiPostsAction } from '@/app/actions/wiki-actions'

/**
 * 🛰️ SEO_PROTOCOL: DYNAMIC_SITEMAP_GENERATOR
 * VERSION: 1.4.1 (Type_Consistency_Fix)
 * ✅ Strategy: รวมเส้นทาง Static และดึงข้อมูล Wiki พร้อมแก้ปัญหา Property Mismatch
 * 📂 Location: app/sitemap.ts
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jpvisouldocs.website'

  // 1. ✨ STATIC_ROUTES: เส้นทางหลักในระบบ
  const staticRoutes = ['', '/verify', '/wiki', '/privacy', '/terms', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 2. 📚 DYNAMIC_WIKI_ROUTES: ซิงค์ข้อมูลบทความ
  let wikiRoutes: MetadataRoute.Sitemap = []

  try {
    const response = await getWikiPostsAction()

    if (response.success && response.posts) {
      wikiRoutes = response.posts.map((post) => ({
        url: `${baseUrl}/wiki/${post.slug}`,
        // ✅ FIXED: เปลี่ยนจาก updated_at -> updatedAt และ created_at -> publishedAt
        lastModified: new Date(post.updatedAt || post.publishedAt || new Date()).toISOString(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    }
  } catch (error) {
    console.error('Sitemap_Sync_Error:', error)
  }

  return [...staticRoutes, ...wikiRoutes]
}
