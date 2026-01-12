/** @format */
import {
  ShieldCheck,
  BookOpen,
  MessageSquare,
  Search,
  LucideIcon,
  MessageCircle, // สำหรับ Line
  Facebook,
  ExternalLink,
  Zap, // สำหรับงานด่วน Fast Track
} from 'lucide-react'

/**
 * 🛰️ SYSTEM_PROTOCOL: NAVIGATION_CENTRAL_REGISTRY
 * VERSION: 1.1.1 (Lint_Cleaned)
 * ✅ ROLE: จัดการเส้นทางเดินข้อมูลและการเชื่อมต่อภายนอก
 * 📂 Location: lib/links.ts
 */

export interface NavLink {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
  status?: 'ACTIVE' | 'MAINTENANCE' | 'EXPERIMENTAL' | 'VIP_ONLY'
}

/**
 * 🌐 MAIN_NAVIGATION: เมนูหลักสำหรับผู้ใช้งานทั่วไป (Public_Access)
 */
export const mainNavLinks: NavLink[] = [
  {
    label: 'ตรวจสอบสถานะ',
    href: '/verify',
    icon: ShieldCheck,
    description: 'Verify_Identity & Live_System_Check',
    status: 'ACTIVE',
  },
  {
    label: 'คลังบริการสากล',
    href: '/wiki',
    icon: BookOpen,
    description: 'Service_Archive_v3.3.1',
    status: 'ACTIVE',
  },
  {
    label: 'ศูนย์ควบคุม VIP',
    href: '/contact',
    icon: MessageSquare,
    description: 'High_Priority_Inquiry',
    status: 'ACTIVE',
  },
]

/**
 * 🔐 SOCIAL_REGISTRY: ช่องทางติดต่อเข้ารหัส (Encrypted_Communication)
 */
export const socialLinks = {
  lineId: '@462fqtfc',
  links: [
    {
      label: 'Line Official',
      href: 'https://lin.ee/ZYTzBaIE',
      icon: MessageCircle,
      description: 'Main_Support_Channel',
    },
    {
      label: 'Facebook Page',
      href: 'https://www.facebook.com/profile.php?id=61575050976562',
      icon: Facebook,
      description: 'Official_Updates',
    },
    {
      label: 'Messenger',
      href: 'https://m.me/61575050976562',
      icon: ExternalLink,
      description: 'Direct_Consultation',
    },
  ],
}

/**
 * 📑 COMPLIANCE_LINKS: ลิงก์นโยบายและความปลอดภัย
 */
export const footerLinks: NavLink[] = [
  { label: 'Privacy_Protection', href: '/legal/privacy' },
  { label: 'System_Terms', href: '/legal/terms' },
  { label: 'Nodes_Status', href: '/status' },
  { label: 'Security_Policy', href: '/security' },
]

/**
 * ⚡ FAST_TRACK_ACTIONS: ลิงก์ด่วนสำหรับงานเร่งด่วน (Urgent_Cases)
 */
export const quickActions: NavLink[] = [
  {
    label: 'ส่งคำขอแก้ไขด่วน',
    href: 'https://lin.ee/ZYTzBaIE',
    icon: Zap,
    description: 'SLA_1-3_Hours_Process',
  },
  {
    label: 'ตรวจสอบสถานะ PNR',
    href: '/verify',
    icon: Search,
    description: 'Global_Database_Search',
  },
]
