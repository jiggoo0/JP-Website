/**
 * JP Visual Docs - Wiki Data Master Configuration (SEO & Filter Ready)
 * รวมศูนย์ข้อมูลบริการทั้งหมดจาก Registry UID: SRV-FIN, SRV-IMM, SRV-DOC, SRV-SYS, SRV-REP
 */

import { financeData } from './wiki/finance'
import { immigrationData } from './wiki/immigration'
import { documentationData } from './wiki/documentation'
import { systemsData } from './wiki/systems'
import { reputationData } from './wiki/reputation'

// 1. กำหนดโครงสร้างข้อมูลพื้นฐาน (Interface)
export type WikiCategory =
  | 'Verification'
  | 'Legal'
  | 'Privacy'
  | 'Guidelines'
  | 'Technical'
  | 'Security'
  | 'Systems'
  | 'Reputation'

export interface WikiPost {
  id: string
  slug: string
  title: string
  description: string
  content: string
  category: WikiCategory
  author: {
    name: string
    role: string
    avatar?: string
  }
  tags: string[]
  publishedAt: string
  updatedAt: string
  image: string
  isDraft: boolean
  visibility: 'public' | 'restricted' | 'private'
}

// 2. รวบรวมข้อมูลจากทุกไฟล์หลักและเรียงล่าสุดขึ้นก่อน
export const wikiData: WikiPost[] = [
  ...financeData,
  ...immigrationData,
  ...documentationData,
  ...systemsData,
  ...reputationData,
].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

// 3. ฟังก์ชันช่วยดึงข้อมูล
export const getPostBySlug = (slug: string) => wikiData.find((post) => post.slug === slug)

export const getPostsByCategory = (cat: WikiCategory) =>
  wikiData.filter((post) => post.category === cat)

// 4. ฟังก์ชันดึงโพสต์ตาม Category + Keyword (SEO-friendly)
export const getPostsByCategoryAndKeyword = (cat: WikiCategory, keyword: string) =>
  wikiData.filter(
    (post) =>
      post.category === cat &&
      (post.title.includes(keyword) ||
        post.description.includes(keyword) ||
        post.tags.some((tag) => tag.includes(keyword))),
  )

// 5. ฟังก์ชันสร้าง SEO Meta อัตโนมัติ
export const generateSEOMeta = (post: WikiPost) => ({
  title: post.title,
  description: post.description,
  keywords: post.tags.join(', '),
  url: `/wiki/${post.slug}`,
  image: post.image,
})

// 6. ฟังก์ชันดึงโพสต์ล่าสุด (Limit N)
export const getLatestPosts = (limit: number = 5) => wikiData.slice(0, limit)
