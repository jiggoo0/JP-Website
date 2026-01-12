/** * JP Visual Docs - Wiki Data Master Configuration
 * รวมศูนย์ข้อมูลบริการทั้งหมดจาก Registry UID: SRV-FIN, SRV-IMM, SRV-DOC, SRV-SYS
 */

import { financeData } from './wiki/finance'
import { immigrationData } from './wiki/immigration'
import { documentationData } from './wiki/documentation'
import { systemsData } from './wiki/systems'

// 1. กำหนดโครงสร้างข้อมูลพื้นฐาน (Interface)
export type WikiCategory =
  | 'Verification'
  | 'Legal'
  | 'Privacy'
  | 'Guidelines'
  | 'Technical'
  | 'Security'
  | 'Systems'

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

// 2. รวบรวมข้อมูลจาก 4 ไฟล์หลักเพื่อ Export ไปยังหน้าเว็บไซต์
export const wikiData: WikiPost[] = [
  ...financeData, // งานกู้/สินเชื่อ (SRV-FIN-01)
  ...immigrationData, // งานตั๋ว/วีซ่า/ตม. (SRV-IMM-01, SRV-IMM-02)
  ...documentationData, // งานแก้เอกสาร/สร้างหน้าเว็บตรวจสอบ (SRV-DOC-01, SRV-DOC-02)
  ...systemsData, // งานผลิตบัตรพลาสติกทุกแบบ/Vifily (SRV-INF-01, SRV-SYS-01)
]

// ฟังก์ชันช่วยดึงข้อมูล (Optional)
export const getPostBySlug = (slug: string) => wikiData.find((post) => post.slug === slug)
export const getPostsByCategory = (cat: WikiCategory) =>
  wikiData.filter((post) => post.category === cat)
