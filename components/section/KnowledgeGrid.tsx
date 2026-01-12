/** @format */
import React from 'react'
import Link from 'next/link'
import { wikiData } from '@/data/wikiData'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, BookOpen, Layers, Terminal } from 'lucide-react'

/**
 * 🛰️ SYSTEM_PROTOCOL: KNOWLEDGE_GRID_HUB
 * VERSION: 1.1.1 (Production_Stable)
 * ✅ Purpose: การจัดวางคลังความรู้ที่ตรวจสอบได้ เพื่อการเข้าถึงข้อมูลที่รวดเร็ว
 * ✅ Strategy: ใช้สไตล์ Industrial เพื่อแสดงถึงมาตรฐานและความแม่นยำของข้อมูล
 */

export default function KnowledgeGrid() {
  // 📥 DATA_FETCHING: ดึงบทความล่าสุด 6 รายการมาแสดงเพื่อให้ข้อมูลทันสมัยและตรวจสอบได้
  const featuredArticles = wikiData?.slice(0, 6) || []

  if (featuredArticles.length === 0) {
    return (
      <div className="border-4 border-dashed border-slate-200 py-20 text-center">
        <p className="font-black uppercase italic tracking-widest text-slate-300">
          No_Archived_Data_Found
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-12 font-thai">
      {/* 📊 GRID_CONTAINER: โครงสร้างตารางข้อมูลเพื่อความชัดเจน */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredArticles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/wiki/${article.slug}`}
            className="group block h-full"
            aria-label={`เข้าชมบทความ: ${article.title}`}
          >
            <Card className="relative h-full overflow-hidden rounded-none border-4 border-[#020617] bg-white p-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0px_0px_#FCDE09]">
              {/* 🧩 DECORATIVE_INDEX: รหัสอ้างอิงเอกสารเพื่อความถูกต้อง */}
              <div className="absolute right-0 top-0 bg-[#020617] px-4 py-1.5 font-mono text-[10px] font-black italic tracking-tighter text-[#FCDE09]">
                REF_{index.toString().padStart(3, '0')}
              </div>

              <div className="space-y-5 p-8">
                <div className="flex items-center gap-2">
                  <div className="border border-slate-200 bg-slate-50 p-1.5 text-[#020617]">
                    <Terminal size={14} />
                  </div>
                  <Badge className="rounded-none bg-[#020617] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-[#FCDE09] hover:bg-[#020617]">
                    {article.category}
                  </Badge>
                </div>

                <h3 className="text-2xl font-black uppercase italic leading-[1.1] tracking-tighter text-[#020617] decoration-[#FCDE09] decoration-4 underline-offset-4 group-hover:underline">
                  {article.title}
                </h3>

                <p className="line-clamp-3 text-sm font-medium leading-relaxed text-slate-500">
                  {article.description}
                </p>

                <div className="flex items-center justify-between border-t-2 border-slate-50 pt-6">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <Layers size={14} className="text-slate-300" />
                    <span>Protocol_Access</span>
                  </div>
                  <div className="text-[#020617] transition-transform duration-300 group-hover:translate-x-2">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>

              {/* 🧪 INTERGRITY_STRIP: แถบสถานะความถูกต้องท้ายการ์ด */}
              <div className="h-1 w-full bg-slate-100 transition-colors group-hover:bg-[#FCDE09]" />
            </Card>
          </Link>
        ))}
      </div>

      {/* 🚀 CALL_TO_ACTION: ปุ่มเข้าถึงคลังข้อมูลทั้งหมดอย่างราบรื่น */}
      <div className="flex justify-center pt-8">
        <Link href="/wiki">
          <button className="group relative overflow-hidden bg-[#020617] px-12 py-5 text-sm font-black uppercase italic tracking-[0.3em] text-[#FCDE09] shadow-[8px_8px_0px_0px_rgba(2,6,23,0.1)] transition-all hover:bg-[#1E293B] active:translate-y-1 active:shadow-none">
            <span className="relative z-10 flex items-center gap-3">
              Access_Full_Archive
              <BookOpen size={18} className="transition-transform group-hover:rotate-12" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}
