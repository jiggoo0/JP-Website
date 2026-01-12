/** @format */
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

/**
 * 🛰️ SYSTEM_PROTOCOL: SUPABASE_SERVER_CLIENT
 * VERSION: 1.1.2 (Lint_Integrity_Fixed)
 * ✅ ROLE: สร้างการเชื่อมต่อกับฐานข้อมูล Supabase ภายใต้สภาพแวดล้อม Server
 * ✅ STRATEGY: ถูกต้อง, ปลอดภัย, ตรวจสอบได้
 * 📂 Location: lib/supabase/server.ts
 */

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        /**
         * 📥 ดึงข้อมูลคุกกี้ทั้งหมดเพื่อการตรวจสอบสิทธิ์ที่ "ถูกต้อง"
         */
        getAll() {
          return cookieStore.getAll()
        },
        /**
         * 📤 ตั้งค่าคุกกี้แบบกลุ่มเพื่อให้กระบวนการ Authentication "ราบรื่น"
         * กำหนด Type สำหรับพารามิเตอร์เพื่อให้ระบบมีความ "ไว้วางใจได้" 100%
         */
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // ✅ FIXED: ลบตัวแปร _error ที่ไม่ได้ใช้งานออกเพื่อแก้ไข Lint Error (22:20)
            // หมายเหตุ: ใน Server Components (RSC) การเซ็ตคุกกี้อาจมีข้อจำกัดบางประการ
            // ซึ่งระบบจะข้ามไปโดยไม่ทำให้เกิดข้อผิดพลาดที่ส่งผลต่อผู้ใช้
          }
        },
      },
    }
  )
}
