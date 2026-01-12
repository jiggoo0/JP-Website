/** @format */
'use server'

import { wikiData } from '@/data/wikiData'

/**
 * 🛰️ ACTION_PROTOCOL: WIKI_DATA_FETCHER
 * VERSION: 1.2.3 (Lint_Integrity_Fixed)
 * ✅ ROLE: จัดการการดึงข้อมูลคลังความรู้ (Wiki) จาก Data Source
 * ✅ STRATEGY: Zero_Unused_Vars, Strict_Type_Safety, Verified_Integrity
 * 📂 Location: app/actions/wiki-actions.ts
 */

export interface WikiAuthor {
  name: string
  role: string
  avatar?: string
}

export interface WikiPost {
  slug: string
  title: string
  category: string
  content: string
  updatedAt: string
  publishedAt?: string
  author: WikiAuthor | string
  excerpt?: string
  imageUrl?: string
  metadata?: Record<string, string | number | boolean>
}

interface WikiResponse<T> {
  success: boolean
  posts?: T
  post?: T
  timestamp: string
  error?: string
  integrity: 'VERIFIED' | 'COMPROMISED'
}

/**
 * 📥 ACTION: ดึงรายการบทความทั้งหมด
 */
export async function getWikiPostsAction(): Promise<WikiResponse<WikiPost[]>> {
  try {
    return {
      success: true,
      posts: wikiData as unknown as WikiPost[],
      timestamp: new Date().toISOString(),
      integrity: 'VERIFIED',
    }
  } catch (error: unknown) {
    // ใช้ console.error เพื่อการทำ Logging ที่ตรวจสอบได้
    console.error('❌ WIKI_FETCH_ERROR:', error instanceof Error ? error.message : 'Unknown')
    return {
      success: false,
      posts: [],
      timestamp: new Date().toISOString(),
      integrity: 'COMPROMISED',
      error: 'ไม่สามารถเข้าถึงฐานข้อมูลคลังความรู้ได้',
    }
  }
}

/**
 * 📥 ACTION: ดึงข้อมูลบทความรายชิ้นตาม Slug
 */
export async function getWikiPostBySlugAction(
  slug: string,
): Promise<WikiResponse<WikiPost | null>> {
  try {
    const post = wikiData.find((p) => p.slug === slug)
    if (!post) throw new Error('NOT_FOUND')

    return {
      success: true,
      post: post as unknown as WikiPost,
      timestamp: new Date().toISOString(),
      integrity: 'VERIFIED',
    }
  } catch {
    // ✅ FIXED: ลบ (error) ที่ไม่ได้ใช้งานออกเพื่อแก้ Lint Error (71:12)
    // การใช้ Empty catch เป็นมาตรฐานสำหรับเคสที่ไม่ต้องการประมวลผล Error Object ต่อ
    return {
      success: false,
      post: null,
      timestamp: new Date().toISOString(),
      integrity: 'COMPROMISED',
      error: 'ไม่พบเอกสารที่ระบุในสารบบ',
    }
  }
}
