/*
🛰️ AI-CONTEXT: JP-VisualDocs – Global Page Template
@version 2026.1.12
@timestamp 2026-01-12T05:25:37.350Z
🛑 กฎเข้มงวด: AI ต้องทำตามนี้เท่านั้น ไม่ตีความเพิ่ม
✅ โทน: มืออาชีพ สุภาพ ช่วยเหลือ
✅ ใช้คำสำคัญเชิงกลยุทธ์เท่านั้น: ตรวจสอบได้, ถูกต้อง, กระบวนการราบรื่น, ไว้วางใจได้
✅ ห้ามสร้างข้อมูลที่คาดเดาหรือไม่สามารถตรวจสอบได้

⚠️ ห้ามใช้คำหรือโทนที่ฟังดูหุ่นยนต์/บริหารจัดเต็ม เช่น:
- "กลยุทธ์", "ศูนย์ปฏิบัติการ", "Operation Hub", "Strategic", "Leverage" , "ภารกิจ" 
- หลีกเลี่ยงศัพท์เทคนิคจัดเต็มหรือคำบริหารที่อ่านยาก
- ต้องใช้ภาษาที่คนทุกฐานะเข้าใจ แต่ยังคงมืออาชีพ

📌 ข้อมูลหน้าปัจจุบัน
- ชื่อหน้า: WikiCategory
- บทบาทของหน้า: [PAGE_ROLE_HERE]
- ผู้รับผิดชอบ: [AUTHOR_NAME_HERE]
- ทีม: [TEAM_NAME_HERE]
- เวอร์ชัน: 2026.1.12
- ตรวจสอบแล้ว: ✅
- กลุ่มผู้ชม: ทีมงานภายใน & ผู้ใช้งานทั่วไป
- จุดประสงค์: [SHORT_DESCRIPTION_HERE]
- Environment: production/staging/development
- URL ตัวอย่าง: [PAGE_URL_HERE]

🧩 1. ภารกิจหลัก
- แพลตฟอร์มจัดการเอกสารสำคัญแบบมืออาชีพ
- รองรับเอกสาร: วีซ่า, การเงิน, ใบรับรอง, เอกสารธุรกิจ
- คุณค่า: ถูกต้อง รวดเร็ว ไว้วางใจได้
- ผลลัพธ์: เอกสารตรวจสอบย้อนกลับได้ รับรองผลทันที
- Feedback แบบเรียลไทม์: ต้องมี

🎨 2. การออกแบบ & ประสบการณ์ผู้ใช้
- สไตล์: เรียบ มืออาชีพ โปร่งใส
- สีหลัก: primary #0F172A, secondary #1E293B, accent #059669, background #FAFAF9
- ฟอนต์: Sans หัวข้อ, Thai เนื้อหา, Mono รหัส/Log
- UI: การ์ดโปร่งแสง, แอนิเมชันเล็กๆ, Feedback (Skeleton, Toast, Badge)
- การเข้าถึง: รองรับมาตรฐาน WCAG AA

📂 3. ข้อมูล & การลงทะเบียน
- รหัสบริการ: SRV-IMM-XXX, SRV-FIN-XXX, SRV-DOC-XXX, SRV-SYS-XXX
- สถานะเอกสาร: DRAFT, PROCESSING, VERIFYING, COMPLETED
- ต้องมี: CaseID, VerifyID, Timestamp
- Audit: บันทึกไม่แก้ไขได้, ต้องมี AuditStamp component
- Data Sensitivity: Low/Medium/High
- Privacy Notes: Zero-Knowledge enforced
- Audit Required: true/false

🏗️ 4. พัฒนา & สถาปัตยกรรม
- เทคโนโลยี: Next.js + React, Supabase + RLS, TailwindCSS + Shadcn/ui
- ความปลอดภัย: ข้อมูลสำคัญไม่ถูกเปิดเผย, Database เข้าถึงได้เฉพาะ Server
- ประสิทธิภาพ: โหลดชิ้นส่วนหนักแบบ Lazy, ใช้ Optimistic UI
- คุณภาพโค้ด: ESLint, Prettier, Strict TypeScript, ไม่มีตัวแปรไม่ได้ใช้
- Dependencies: [ARRAY_OF_DEPENDENCIES]

📢 5. การสื่อสาร & โทน
- โทน: มืออาชีพ สุภาพ ช่วยเหลือ
- ข้อความ: แจ้งผลทันที, คำแนะนำชัดเจน, ห้ามคาดเดา
- ภาษา: ไทย & อังกฤษ
- ทุกการกระทำต้องมี feedback เห็นหรือฟังได้

📝 6. คำสำคัญเชิงกลยุทธ์
- ตรวจสอบได้
- ถูกต้อง
- กระบวนการราบรื่น
- ไว้วางใจได้
- ต้องปรากฏใน UI, feedback, เอกสาร

⚡ 7. กฎการใช้งาน AI (STRICT)
- ช่วยเสนอขั้นตอนถัดไปและตรวจสอบ context เท่านั้น
- ตรวจสอบ ID, การยืนยัน, เอกสารหมดอายุ
- ปฏิบัติตามโทนและคำสำคัญเคร่งครัด
- หากขาดข้อมูล → แสดง "ข้อมูลไม่เพียงพอ"
- Expected User Actions: [ARRAY_OF_ACTIONS]
- Expected System Feedback: [ARRAY_OF_FEEDBACKS]

📈 8. การวัดผล & Monitoring
- Metrics: LoadTime, UserClicks, FormSubmissions
- Tracking: Enabled/Disabled

🛠️ 9. การจัดการข้อผิดพลาด & Fallback
- ErrorHandling: Skeleton/Toast/ErrorPage
- Fallback: DefaultContent/Redirect

🔗 10. การตั้งค่าเฉพาะหน้า
- แสดงเมนู: true/false
- เปิดการกระทำ: true/false
- แอนิเมชัน: deterministic ตาม status
- ฟีเจอร์พิเศษ: [ARRAY_OF_ACTIVE_FEATURES]

*/
/** @format */
'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { LayoutGrid, ShieldAlert, FileText, Scale, Globe, Zap } from 'lucide-react'

/**
 * 🛰️ UI_PROTOCOL: WIKI_CATEGORY_FILTER_SYSTEM
 * VERSION: 1.1.5
 * ✅ Feature: Dynamic_Icons, Active_State_Shadow, Scroll_Hint
 */

// 🛠️ CATEGORY_DEFINITION
const CATEGORIES = [
  { id: 'all', label: 'All_Archive', icon: <LayoutGrid size={16} /> },
  { id: 'guideline', label: 'Guidelines', icon: <FileText size={16} /> },
  { id: 'security', label: 'Security', icon: <ShieldAlert size={16} /> },
  { id: 'legal', label: 'Legal_Acts', icon: <Scale size={16} /> },
  { id: 'international', label: 'Global_Standards', icon: <Globe size={16} /> },
  { id: 'updates', label: 'Protocol_Updates', icon: <Zap size={16} /> },
]

interface WikiCategoryProps {
  activeCategory: string
  onCategoryChange: (id: string) => void
  className?: string
}

export const WikiCategory = ({
  activeCategory,
  onCategoryChange,
  className,
}: WikiCategoryProps) => {
  return (
    <div className={cn('w-full space-y-4', className)}>
      {/* 🏷️ LABEL_UNIT */}
      <div className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        <span className="h-[2px] w-8 bg-slate-200" />
        <span>Classification_Filter</span>
      </div>

      {/* 🔘 CATEGORY_GRID */}
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                'group relative flex items-center gap-3 border-4 px-5 py-3 transition-all duration-200',
                'text-xs font-black uppercase italic tracking-tight',
                isActive
                  ? '-translate-x-1 -translate-y-1 border-[#020617] bg-[#020617] text-[#FCDE09] shadow-[6px_6px_0px_0px_rgba(252,222,9,1)]'
                  : 'border-[#020617] bg-white text-[#020617] hover:bg-slate-50 hover:shadow-[4px_4px_0px_0px_rgba(2,6,23,1)]',
              )}
            >
              <span
                className={cn(
                  'transition-transform group-hover:scale-110',
                  isActive ? 'text-[#FCDE09]' : 'text-slate-400',
                )}
              >
                {cat.icon}
              </span>

              <span className="relative">
                {cat.label}
                {isActive && (
                  <span className="absolute -right-2 -top-1 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FCDE09] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FCDE09]"></span>
                  </span>
                )}
              </span>
            </button>
          )
        })}
      </div>

      {/* 🧪 SYSTEM_INFO */}
      <div className="flex items-center gap-4 pt-4">
        <div className="font-mono text-[9px] uppercase text-slate-300">
          Filter_Engine: v2.0 // Total_Categories: {CATEGORIES.length}
        </div>
        <div className="h-[1px] flex-1 border-t border-dashed border-slate-200 bg-slate-100" />
      </div>
    </div>
  )
}
