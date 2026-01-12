/** @format */
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, ShieldX, ArrowLeft, RefreshCcw } from 'lucide-react'

/**
 * 🛰️ VIEW_PROTOCOL: SYSTEM_ERROR_NOT_FOUND
 * VERSION: 1.1.2 (Lint_Integrity_Fixed)
 * ✅ ROLE: แสดงผลหน้า Error 404 เมื่อไม่พบทรัพยากรในระบบ
 * ✅ Strategy: แจ้งผลทันทีด้วยคำแนะนำที่ชัดเจนและตรวจสอบได้
 * 📂 Location: app/not-found.tsx
 */

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAF9] px-6 font-thai">
      <div className="w-full max-w-xl text-center">
        {/* 🚨 ERROR_ICON_UNIT: Visual feedback ที่ชัดเจนและไว้วางใจได้ */}
        <div className="relative mb-10 inline-block">
          <div className="absolute inset-0 scale-110 bg-[#020617] opacity-5 blur-2xl" />
          <div className="relative border-4 border-[#020617] bg-[#020617] p-8 text-[#FCDE09] shadow-[8px_8px_0px_0px_rgba(252,222,9,1)]">
            <ShieldX size={64} strokeWidth={2} />
          </div>
          <div className="absolute -right-3 -top-3 bg-red-600 p-1.5 text-white shadow-sm">
            <AlertTriangle size={24} />
          </div>
        </div>

        {/* 📄 ERROR_MESSAGE: สื่อสารอย่างมืออาชีพและสุภาพ */}
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter text-[#020617] md:text-7xl font-sans">
            404_NOT_FOUND
          </h1>
          <div className="inline-block bg-[#020617] px-4 py-1.5 text-[10px] font-black uppercase italic tracking-[0.3em] text-[#FCDE09] font-sans">
            Entry_Invalid_or_Expunged
          </div>
          <div className="mx-auto max-w-md space-y-4">
            <p className="text-lg font-bold leading-snug text-[#1E293B]">
              ขออภัย ไม่พบหน้าที่คุณต้องการตรวจสอบ
            </p>
            <p className="text-sm font-medium leading-relaxed text-slate-500">
              รหัสอ้างอิงหรือลิงก์ที่คุณเรียกดูไม่มีอยู่ในระบบฐานข้อมูลกลาง
              หรืออาจมีการเปลี่ยนแปลงข้อมูลเพื่อความปลอดภัย โปรดตรวจสอบข้อมูลให้ **ถูกต้อง**
              อีกครั้งเพื่อให้กระบวนการเป็นไปอย่าง **ราบรื่น**
            </p>
          </div>
        </div>

        {/* 🛠️ ACTION_SUITE: ปุ่มนำทางเพื่อความราบรื่นในการใช้งาน */}
        <div className="mx-auto grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-none border-2 border-[#020617] font-black uppercase italic transition-all hover:bg-slate-50 active:translate-y-0.5 font-sans"
          >
            <Link href="/verify">
              <RefreshCcw size={18} className="mr-2" />
              ตรวจสอบใหม่
            </Link>
          </Button>

          <Button
            asChild
            className="h-14 rounded-none bg-[#020617] font-black uppercase italic text-[#FCDE09] shadow-[4px_4px_0px_0px_rgba(252,222,9,1)] transition-all hover:bg-[#1E293B] active:translate-y-0.5 active:shadow-none font-sans"
          >
            <Link href="/">
              <ArrowLeft size={18} className="mr-2" />
              กลับหน้าหลัก
            </Link>
          </Button>
        </div>

        {/* 🔍 TECHNICAL_FOOTER: รายละเอียดทางเทคนิคที่ตรวจสอบได้ */}
        <footer className="mt-20 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center gap-2">
            <p className="font-mono text-[10px] uppercase leading-loose tracking-widest text-slate-400">
              Error_Log: RESOURCE_NOT_LOCATED // System_Protocol: v3.3.1-Unified
            </p>
            <div className="flex items-center gap-4">
              <span className="h-1 w-8 bg-[#FCDE09]" />
              <span className="text-[9px] font-black uppercase italic text-slate-300 font-sans">
                Security_Node: JP-WEB-SEC-01
              </span>
              <span className="h-1 w-8 bg-[#020617]" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
