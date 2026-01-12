/** @format */
import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * 🛰️ UI_PROTOCOL: DATA_ENTRY_FIELD
 * VERSION: 1.3.1 (Refined_Integrity)
 * ✅ ROLE: จัดการการกรอกข้อมูลเอกสารสำคัญให้ถูกต้องและชัดเจน
 * ✅ STRATEGY: High_Contrast, Zero_Ambiguity, Brand_Alignment
 * 📂 Location: components/ui/input.tsx
 */

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean // 🛡️ เพิ่มสถานะตรวจสอบความถูกต้อง (Validity State)
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // 🏛️ BASE_STYLES: ดีไซน์เหลี่ยมคม (Sharp-Edge) สะท้อนความน่าเชื่อถือแบบอุตสาหกรรม
          'flex h-12 w-full rounded-none border-2 bg-white px-4 py-2 text-base transition-all duration-200',
          // 📄 TYPOGRAPHY: ผสมผสาน Font-Sans สำหรับทั่วไป และ Font-Mono สำหรับรหัส/ID
          'font-sans font-medium tracking-tight text-[#020617] placeholder:font-normal placeholder:italic placeholder:text-slate-400',

          // 📂 FILE_STYLING: ปรับแต่งปุ่มเลือกไฟล์ให้มีความเป็นทางการ (Official Look)
          'file:mr-4 file:h-full file:cursor-pointer file:border-0 file:bg-[#020617] file:px-4 file:text-[10px] file:font-black file:uppercase file:italic file:text-[#FCDE09]',

          // ⚡ INTERACTION: การตอบสนองเมื่อผู้ใช้โต้ตอบ (Focus & Hover)
          'hover:border-slate-400 focus-visible:border-[#FCDE09] focus-visible:outline-none focus-visible:ring-0',

          // 🚫 STATE_MANAGEMENT: การจัดการสถานะ Error และ Disabled
          error ? 'border-red-500 bg-red-50/30 focus-visible:border-red-600' : 'border-[#020617]',
          'disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:opacity-50',

          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
