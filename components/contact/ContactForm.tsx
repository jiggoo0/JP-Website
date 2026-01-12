/*
🛰️ AI-CONTEXT: JP-VisualDocs – Global Page Template
@version 2026.1.12
@timestamp 2026-01-12T05:25:37.388Z
🛑 กฎเข้มงวด: AI ต้องทำตามนี้เท่านั้น ไม่ตีความเพิ่ม
✅ โทน: มืออาชีพ สุภาพ ช่วยเหลือ
✅ ใช้คำสำคัญเชิงกลยุทธ์เท่านั้น: ตรวจสอบได้, ถูกต้อง, กระบวนการราบรื่น, ไว้วางใจได้
✅ ห้ามสร้างข้อมูลที่คาดเดาหรือไม่สามารถตรวจสอบได้

⚠️ ห้ามใช้คำหรือโทนที่ฟังดูหุ่นยนต์/บริหารจัดเต็ม เช่น:
- "กลยุทธ์", "ศูนย์ปฏิบัติการ", "Operation Hub", "Strategic", "Leverage" , "ภารกิจ" 
- หลีกเลี่ยงศัพท์เทคนิคจัดเต็มหรือคำบริหารที่อ่านยาก
- ต้องใช้ภาษาที่คนทุกฐานะเข้าใจ แต่ยังคงมืออาชีพ

📌 ข้อมูลหน้าปัจจุบัน
- ชื่อหน้า: ContactForm
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

import React, { useState, useTransition } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Send, Loader2, ShieldCheck } from 'lucide-react'

/**
 * 🛰️ COMPONENT_PROTOCOL: CONTACT_FORM_ENGINE
 * VERSION: 1.2.0
 * ✅ Strategy: Managed_Input & Visual_Feedback
 */

export function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🔍 VALIDATION_PROTOCOL
    if (!formData.email || !formData.message) {
      toast.error('REQUIRED_FIELDS_MISSING', {
        description: 'กรุณาระบุอีเมลและข้อความเพื่อดำเนินการ',
      })
      return
    }

    startTransition(async () => {
      // 🚀 EXECUTE_TRANSMISSION
      // จำลองการส่งข้อมูล (คุณสามารถเชื่อมต่อ Server Action ได้ที่นี่)
      await new Promise((res) => setTimeout(res, 1500))

      toast.success('TRANSMISSION_SUCCESSFUL', {
        description: 'ข้อมูลของคุณถูกส่งไปยังศูนย์บัญชาการแล้ว',
      })
      setFormData({ subject: '', email: '', message: '' })
    })
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6">
      {/* 📟 STATUS_INDICATOR */}
      <div className="mb-8 flex items-center gap-2">
        <div
          className={`h-2 w-2 rounded-full ${isPending ? 'animate-pulse bg-amber-500' : 'bg-emerald-500'}`}
        />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          System_Status: {isPending ? 'Transmitting...' : 'Ready_to_Transmit'}
        </span>
      </div>

      <div className="space-y-4">
        {/* SUBJECT_INPUT */}
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-black uppercase text-[#020617]">
            Transmission_Subject
          </label>
          <Input
            placeholder="เช่น: ติดต่อสอบถามข้อมูลบริการ"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="rounded-none border-2 border-[#020617] bg-slate-50 font-bold focus-visible:border-[#FCDE09] focus-visible:ring-0"
            disabled={isPending}
          />
        </div>

        {/* EMAIL_INPUT */}
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-black uppercase text-[#020617]">
            Return_Address (Email)
          </label>
          <Input
            type="email"
            placeholder="your-id@provider.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded-none border-2 border-[#020617] bg-slate-50 font-bold focus-visible:border-[#FCDE09] focus-visible:ring-0"
            disabled={isPending}
          />
        </div>

        {/* MESSAGE_INPUT */}
        <div className="space-y-2">
          <label className="ml-1 text-[10px] font-black uppercase text-[#020617]">
            Data_Payload (Message)
          </label>
          <Textarea
            placeholder="ระบุรายละเอียดข้อความของคุณที่นี่..."
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="resize-none rounded-none border-2 border-[#020617] bg-slate-50 font-bold focus-visible:border-[#FCDE09] focus-visible:ring-0"
            disabled={isPending}
          />
        </div>
      </div>

      {/* SUBMIT_ACTION */}
      <Button
        type="submit"
        disabled={isPending}
        className="h-14 w-full rounded-none bg-[#020617] text-lg font-black italic text-[#FCDE09] shadow-[8px_8px_0px_0px_#FCDE09] transition-all hover:bg-[#020617]/90 active:translate-x-1 active:translate-y-1 active:shadow-none"
      >
        {isPending ? (
          <Loader2 className="mr-2 animate-spin" size={20} />
        ) : (
          <Send className="mr-2" size={20} />
        )}
        {isPending ? 'PROCESSING_DATA...' : 'EXECUTE_TRANSMISSION'}
      </Button>

      {/* SECURITY_FOOTER */}
      <div className="flex items-center justify-center gap-2 pt-4 text-[10px] font-bold uppercase text-slate-400">
        <ShieldCheck size={12} className="text-[#020617]" />
        Encrypted via Secure_Channel_v3
      </div>
    </form>
  )
}
