/** @format */
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 🛰️ SYSTEM_PROTOCOL: STYLE_UTILITY_CORE
 * VERSION: 1.0.1 (Tailwind_Optimization)
 * ✅ Purpose: ผสาน Class คลีนสไตล์ให้ถูกต้อง และตรวจสอบได้ง่าย
 */

export function cn(...inputs: ClassValue[]) {
  // 🛡️ twMerge ช่วยจัดการปัญหา Tailwind class conflicts (เช่น p-4 ทับกับ p-2)
  // 🛡️ clsx ช่วยจัดการเงื่อนไข Boolean classes ได้อย่างราบรื่น
  return twMerge(clsx(inputs))
}
