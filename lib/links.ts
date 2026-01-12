/** @format */
import {
  ShieldCheck,
  BookOpen,
  MessageSquare,
  LayoutDashboard,
  Search,
  LucideIcon,
} from 'lucide-react'

/**
 * 🛰️ SYSTEM_PROTOCOL: NAVIGATION_CENTRAL_REGISTRY
 * VERSION: 1.0.1 (Strict_Type_Fixed)
 * ✅ ROLE: จัดการเส้นทางเดินข้อมูล (Routing) แบบรวมศูนย์
 * ✅ STRATEGY: ถูกต้อง, ตรวจสอบได้, กระบวนการราบรื่น
 * 📂 Location: lib/links.ts
 */

export interface NavLink {
  label: string
  href: string
  description?: string
  // ✅ FIXED: เปลี่ยนจาก any เป็น LucideIcon เพื่อความปลอดภัยของข้อมูล (Fix TS:no-explicit-any)
  icon?: LucideIcon
  status?: 'ACTIVE' | 'MAINTENANCE' | 'EXPERIMENTAL'
}

/**
 * 🌐 MAIN_NAVIGATION: เมนูหลักสำหรับผู้ใช้งานทั่วไป (Public_Access)
 * บันทึก: ข้อมูลชุดนี้ได้รับการตรวจสอบความถูกต้องแล้ว
 */
export const mainNavLinks: NavLink[] = [
  {
    label: 'ตรวจสอบเอกสาร',
    href: '/verify',
    icon: ShieldCheck,
    description: 'Verify_Identity & Document_Check',
  },
  {
    label: 'คลังความรู้',
    href: '/wiki',
    icon: BookOpen,
    description: 'Knowledge_Archive_v3.3.1',
  },
  {
    label: 'ติดต่อเจ้าหน้าที่',
    href: '/contact',
    icon: MessageSquare,
    description: 'Support_Center_Inquiry',
  },
]

/**
 * 📑 COMPLIANCE_LINKS: ลิงก์สำหรับเอกสารทางกฎหมายและนโยบายความปลอดภัย
 * คุณค่า: ไว้วางใจได้, โปร่งใส, ตรวจสอบย้อนกลับได้
 */
export const footerLinks: NavLink[] = [
  { label: 'Privacy_Policy', href: '/legal/privacy' },
  { label: 'Terms_Of_Service', href: '/legal/terms' },
  { label: 'Audit_Log_Public', href: '/audit' },
  { label: 'Security_Disclosure', href: '/security' },
]

/**
 * 📡 FALLBACK_ACTIONS: ลิงก์ด่วนสำหรับระบบกู้คืนสถานะ (System_Recovery)
 */
export const fallbackActions: NavLink[] = [
  { label: 'Try_Again', href: '/verify', icon: Search },
  { label: 'Back_to_HQ', href: '/', icon: LayoutDashboard },
]
