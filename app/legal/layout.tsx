/** @format */
import React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { ShieldCheck, Scale, FileText, ChevronRight } from 'lucide-react'

/*
🛰️ AI-CONTEXT: JP-VisualDocs – Legal Layout Template
@version 2026.1.12
@timestamp 2026-01-12T15:52:00.000Z
✅ โทน: มืออาชีพ สุภาพ ช่วยเหลือ
✅ คำสำคัญ: ตรวจสอบได้, ถูกต้อง, กระบวนการราบรื่น, ไว้วางใจได้
*/

/**
 * 🛰️ LAYOUT_PROTOCOL: LEGAL_UNIFIED_CONTAINER
 * ROLE: จัดการโครงสร้างหน้าข้อมูลทางระเบียบและนโยบายเพื่อให้ผู้ใช้งานเข้าถึงข้อมูลที่ถูกต้อง
 * VERSION: 1.0.1 (Route_Fixed)
 */

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { name: 'นโยบายความเป็นส่วนตัว', href: '/legal/privacy', icon: <ShieldCheck size={16} /> },
    { name: 'ข้อกำหนดการใช้งาน', href: '/legal/terms', icon: <Scale size={16} /> },
    { name: 'นโยบายการคืนเงิน', href: '/legal/refund', icon: <FileText size={16} /> },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAF9] px-4 py-12 font-thai sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row">
        {/* 📑 SIDE_NAV: รายการระเบียบปฏิบัติเพื่อให้กระบวนการราบรื่น */}
        <aside className="w-full shrink-0 md:w-64">
          <div className="sticky top-24 space-y-4">
            {/* Header Box */}
            <div className="border-b-4 border-[#FCDE09] bg-[#0F172A] p-6 text-white">
              <h2 className="font-sans text-xl font-black italic tracking-tighter">LEGAL_INFO</h2>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#FCDE09]">
                Compliance_Standard
              </p>
            </div>

            {/* Navigation Menu */}
            <nav className="border border-slate-200 bg-white p-2 shadow-sm">
              <p className="mb-2 px-4 pt-2 font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400">
                หมวดหมู่ข้อมูล
              </p>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between px-4 py-3 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 hover:text-[#0F172A]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 group-hover:text-[#059669]">{item.icon}</span>
                    {item.name}
                  </div>
                  <ChevronRight
                    size={14}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>

            {/* Support Box */}
            <div className="rounded-none border border-emerald-100 bg-emerald-50/50 p-4">
              <p className="text-[11px] leading-relaxed text-emerald-800">
                ข้อมูลชุดนี้จัดทำขึ้นเพื่อให้การใช้งานของท่านเป็นไปอย่าง <strong>ถูกต้อง</strong>{' '}
                และ <strong>ไว้วางใจได้</strong>
              </p>
            </div>
          </div>
        </aside>

        {/* 📄 CONTENT_AREA: พื้นที่แสดงข้อมูลที่ตรวจสอบได้ */}
        <main className="flex-1 border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="prose prose-slate max-w-none prose-headings:font-sans prose-headings:italic prose-headings:tracking-tighter">
            {children}
          </div>

          <Separator className="my-12 bg-slate-100" />

          {/* Footer Stamp */}
          <footer className="flex flex-col items-center justify-between gap-4 font-sans text-[10px] font-bold uppercase tracking-widest text-slate-400 sm:flex-row">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#059669]" />
              <span>Verified_Standard_Protocol v3.3.1</span>
            </div>
            <span>อัปเดตล่าสุด: มกราคม 2026</span>
          </footer>
        </main>
      </div>
    </div>
  )
}
