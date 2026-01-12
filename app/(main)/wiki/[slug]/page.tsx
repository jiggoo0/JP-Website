/** @format */
import { notFound } from 'next/navigation'
import { getWikiPostBySlugAction } from '@/app/actions/wiki-actions'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Clock, FileText, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

/**
 * 🛰️ VIEW_PROTOCOL: WIKI_DOCUMENT_VIEWER
 * ROLE: แสดงเนื้อหาบทความความรู้และแนวทางการจัดการเอกสาร
 * VERSION: 1.0.2 (Data_Integrity_Standard)
 * ✅ Strategy: อ่านง่าย, ข้อมูลครบถ้วน, ตรวจสอบที่มาได้
 * 📂 Location: app/(main)/wiki/[slug]/page.tsx
 */

export default async function WikiArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const response = await getWikiPostBySlugAction(slug)

  // 🛡️ SECURITY_CHECK: หากไม่พบเอกสารในฐานข้อมูล ให้ส่งไปหน้า 404 ทันที
  if (!response.success || !response.post) return notFound()
  const { post } = response

  // ✅ DATA_INTEGRITY: จัดการวันที่ให้ถูกต้องเพื่อป้องกัน Runtime Error
  const dateString = post.updatedAt || post.publishedAt || new Date().toISOString()
  const displayDate = new Date(dateString)

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-thai">
      {/* 🧭 NAVIGATION_BAR */}
      <nav className="border-b-2 border-slate-200 bg-white px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/wiki"
            className="group inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 transition-colors hover:text-[#020617]"
          >
            <ChevronLeft
              size={14}
              className="mr-1 transition-transform group-hover:-translate-x-1"
            />
            Back_to_Repository
          </Link>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-16 sm:px-8">
        {/* 🏛️ ARTICLE_HEADER: ข้อมูลทางบรรณานุกรมของเอกสาร */}
        <header className="mb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="rounded-none border-2 border-[#020617] bg-[#FCDE09] px-3 py-1 font-sans font-black uppercase text-[#020617]">
              {post.category}
            </Badge>
            <span className="font-mono text-[10px] font-bold text-slate-400">
              REF_ID: {post.slug.toUpperCase()}
            </span>
          </div>

          <h1 className="text-4xl font-black italic leading-tight tracking-tighter text-[#020617] md:text-6xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 border-y-2 border-slate-100 py-4 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#020617]" />
              <span>Last_Updated: {displayDate.toLocaleDateString('th-TH')}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={14} className="text-[#020617]" />
              <span>Status: Verified_Knowledge</span>
            </div>
          </div>
        </header>

        {/* 📄 ARTICLE_BODY: เนื้อหาหลักที่ผ่านการกรองความถูกต้อง */}
        <main
          className="prose prose-slate max-w-none prose-headings:font-black prose-headings:italic prose-headings:tracking-tighter prose-headings:text-[#020617] prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-[#020617] prose-img:border-4 prose-img:border-[#020617]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="my-16 h-1 bg-slate-100" />

        {/* 📜 FOOTER_NOTES: การยืนยันความถูกต้องของข้อมูล */}
        <footer className="rounded-none border-4 border-dashed border-slate-200 p-8 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
            Official_Document_Protocol_v3.3.1
          </p>
          <p className="mt-2 text-xs italic text-slate-400">
            ข้อมูลนี้ถูกจัดทำขึ้นเพื่อเป็นแนวทางเท่านั้น
            กรุณาตรวจสอบการอัปเดตล่าสุดจากหน่วยงานที่เกี่ยวข้อง
          </p>
        </footer>
      </article>
    </div>
  )
}
