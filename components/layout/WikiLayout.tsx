/** @format */
import React from 'react'
import { BookOpen, ListTree, Share2, Printer, ShieldCheck } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

/**
 * 🛰️ SYSTEM_PROTOCOL: WIKI_LAYOUT_ENGINE
 * ROLE: โครงสร้างหลักสำหรับหน้าคลังความรู้และคู่มือการใช้งาน
 * ✅ Strategy: จัดวางองค์ประกอบให้ค้นหาง่ายและตรวจสอบความถูกต้องได้ทันที
 */

interface WikiLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode // สำหรับใส่สารบัญ (Table of Contents)
  infobox?: React.ReactNode // สำหรับใส่ข้อมูลสรุป (Quick Info)
}

export default function WikiLayout({ children, sidebar, infobox }: WikiLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FAFAF9] pb-20 font-thai">
      {/* 🧭 NAVIGATION_BAR: แถบเครื่องมือช่วยสำหรับการอ่าน */}
      <div className="sticky top-16 z-30 w-full border-y border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-[#0F172A] p-2 text-[#FCDE09]">
              <BookOpen size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A]">
                ศูนย์เรียนรู้ด้านเอกสาร
              </span>
              <span className="text-[9px] font-medium text-slate-400">
                ข้อมูลตรวจสอบแล้วฉบับล่าสุด
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              title="แชร์เนื้อหานี้"
              className="rounded-md p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-[#0F172A]"
            >
              <Share2 size={18} />
            </button>
            <button
              title="พิมพ์เอกสาร"
              className="rounded-md p-2 text-slate-400 transition-all hover:bg-slate-100 hover:text-[#0F172A]"
            >
              <Printer size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* 📂 LEFT_SIDEBAR: สารบัญนำทาง */}
          {sidebar && (
            <aside className="sticky top-32 hidden h-fit w-72 shrink-0 lg:block">
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-2 text-[#0F172A]">
                  <ListTree size={18} className="text-[#059669]" />
                  <span className="text-xs font-bold uppercase tracking-wider">สารบัญเนื้อหา</span>
                </div>
                <ShieldCheck size={14} className="text-emerald-500" />
              </div>
              <Separator className="mb-6 bg-slate-200" />
              <div className="custom-scrollbar max-h-[70vh] overflow-y-auto pr-4 text-sm">
                {sidebar}
              </div>
            </aside>
          )}

          {/* 📄 MAIN_ARTICLE: พื้นที่เนื้อหาหลัก */}
          <main className="min-w-0 flex-1">
            <article className="relative overflow-hidden border border-slate-200 bg-white p-6 shadow-sm md:rounded-xl md:p-14">
              {/* ตราประทับตรวจสอบความถูกต้อง (Watermark) */}
              <div className="pointer-events-none absolute right-0 top-0 opacity-[0.03]">
                <ShieldCheck size={200} className="-mr-10 -mt-10" />
              </div>

              <div className="prose prose-slate relative z-10 max-w-none prose-headings:text-[#0F172A] prose-a:text-[#059669]">
                {children}
              </div>
            </article>
          </main>

          {/* 🏛️ RIGHT_SIDEBAR: ข้อมูลจำเพาะและสถานะระบบ */}
          {infobox && (
            <aside className="w-full shrink-0 lg:w-80">
              <div className="space-y-6 lg:sticky lg:top-32">
                {infobox}

                {/* สถานะการอัปเดตข้อมูล */}
                <div className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm">
                  <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    ข้อมูลการยืนยัน
                  </h4>
                  <div className="space-y-2 font-medium">
                    <p className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>สถานะเนื้อหา:</span>
                      <span className="text-[#059669]">ตรวจสอบแล้ว</span>
                    </p>
                    <p className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>อัปเดตล่าสุด:</span>
                      <span>{new Date().toLocaleDateString('th-TH')}</span>
                    </p>
                    <p className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>ความปลอดภัย:</span>
                      <span className="text-[#0F172A]">สูงสุด (SSL)</span>
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
