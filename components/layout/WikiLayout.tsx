/** @format */
import React from 'react'
import { BookOpen, ListTree, Share2, Printer, ShieldCheck } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

/**
 * 🛰️ SYSTEM_PROTOCOL: WIKI_LAYOUT_ENGINE
 * VERSION: 1.2.6 (Integrity_Focus)
 * ✅ Purpose: Article containment & Structural Navigation
 * ✅ Strategy: จัดวางองค์ประกอบให้ตรวจสอบได้ง่ายและรองรับการใช้งานที่ต่อเนื่อง
 */

interface WikiLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode // สำหรับใส่ TableOfContent.tsx หรือหมวดหมู่
  infobox?: React.ReactNode // สำหรับใส่ WikiInfobox.tsx
}

export default function WikiLayout({ children, sidebar, infobox }: WikiLayoutProps) {
  return (
    <div className="min-h-screen bg-[#FAFAF9] pb-20 font-thai">
      {/* 🧭 ARTICLE_SUB_HEADER: แถบนำทางย่อยเพื่อการเข้าถึงที่รวดเร็ว */}
      <div className="sticky top-16 z-30 w-full border-y-2 border-[#020617]/5 bg-white/90 backdrop-blur-md">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#020617] p-1.5 text-[#FCDE09]">
              <BookOpen size={14} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#020617]">
                Knowledge_Archive
              </span>
              <span className="font-mono text-[8px] text-slate-400">PROTOCOL_V3.3.1-STABLE</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="border border-transparent p-2 text-slate-400 transition-all hover:border-slate-100 hover:bg-slate-50 hover:text-[#020617]">
              <Share2 size={16} />
            </button>
            <button className="border border-transparent p-2 text-slate-400 transition-all hover:border-slate-100 hover:bg-slate-50 hover:text-[#020617]">
              <Printer size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* 📂 LEFT_SIDEBAR: สารบัญนำทาง (Navigation Tree) */}
          {sidebar && (
            <aside className="sticky top-36 hidden h-fit w-72 shrink-0 lg:block">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#020617]">
                  <ListTree size={18} className="fill-[#020617] text-[#FCDE09]" />
                  <span className="text-[11px] font-black uppercase italic tracking-widest">
                    Table_of_Contents
                  </span>
                </div>
                <ShieldCheck size={14} className="text-emerald-500" />
              </div>
              <Separator className="mb-6 h-[2px] bg-[#020617]" />
              <div className="custom-scrollbar max-h-[65vh] overflow-y-auto pr-4">{sidebar}</div>
            </aside>
          )}

          {/* 📄 MAIN_ARTICLE_CANVAS: พื้นที่แสดงเนื้อหาหลักที่ตรวจสอบได้ */}
          <main className="min-w-0 flex-1">
            <div className="relative border-4 border-[#020617] bg-white p-6 shadow-[12px_12px_0px_0px_rgba(2,6,23,0.05)] md:p-14">
              {/* Decoration Corner */}
              <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 border-b-4 border-l-4 border-[#020617]/5" />

              <div className="relative z-10">{children}</div>
            </div>
          </main>

          {/* 🏛️ RIGHT_SIDEBAR: ข้อมูลจำเพาะ (Summary Box) */}
          {infobox && (
            <aside className="w-full shrink-0 lg:w-80">
              <div className="space-y-6 lg:sticky lg:top-36">
                {infobox}

                {/* 🧪 SYSTEM_FEEDBACK_INDICATOR */}
                <div className="rounded-none border-2 border-dashed border-slate-200 bg-slate-50/50 p-4">
                  <p className="font-mono text-[8px] uppercase leading-relaxed tracking-tighter text-slate-400">
                    Status: Verified_Content <br />
                    Last_Sync: {new Date().toISOString().split('T')[0]} <br />
                    Integrity: 100% Secure
                  </p>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  )
}
