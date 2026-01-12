/** @format */
import { notFound } from 'next/navigation'
import { getWikiPostBySlugAction, type WikiPost, type WikiAuthor } from '@/app/actions/wiki-actions'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Clock, FileText, ChevronLeft, User } from 'lucide-react'
import Link from 'next/link'

/**
 * 🛰️ SYSTEM_PROTOCOL: WIKI_DYNAMIC_ROUTING
 * VERSION: 1.2.7 (Lint_Fixed_Unused_Vars)
 * ✅ Strategy: ลบตัวแปร unused และเพิ่มส่วนแสดงผล Author เพื่อความสมบูรณ์ของ SEO
 */

// 🔧 Type augmentation
type ExtendedWikiPost = Omit<WikiPost, 'author'> & {
  author?: string | WikiAuthor
  description?: string
  image?: string
}

interface WikiPageProps {
  params: Promise<{ slug: string }>
}

export default async function WikiArticlePage({ params }: WikiPageProps) {
  const { slug } = await params
  const response = await getWikiPostBySlugAction(slug)

  if (!response.success || !response.post) return notFound()
  const post = response.post as ExtendedWikiPost

  const dateString = post.updatedAt || post.publishedAt || new Date().toISOString()
  const displayDate = new Date(dateString)

  // ✅ FIXED: นำ authorName มาใช้งานในส่วนแสดงผลข้อมูลบทความ
  const authorName =
    typeof post.author === 'string' ? post.author : post.author?.name || 'Unknown Architect'

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-thai">
      {/* 🧭 NAVIGATION_NODE */}
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
              <span>Last_Update: {displayDate.toLocaleDateString('th-TH')}</span>
            </div>
            {/* ✅ FIXED: เพิ่มการแสดงชื่อผู้ดูแลระบบ/ผู้เขียน เพื่อใช้ประโยชน์จาก authorName */}
            <div className="flex items-center gap-2">
              <User size={14} className="text-[#020617]" />
              <span>Auth: {authorName}</span>
            </div>
            <div className="flex items-center gap-2 text-[#22c55e]">
              <FileText size={14} />
              <span>Verified_Knowledge</span>
            </div>
          </div>
        </header>

        {/* 📄 CONTENT_BUFFER */}
        <main
          className="prose prose-slate max-w-none prose-headings:font-black prose-headings:italic prose-headings:tracking-tighter prose-headings:text-[#020617] prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-[#020617] prose-img:border-4 prose-img:border-[#020617]"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <Separator className="my-16 h-1 bg-slate-100" />

        <footer className="rounded-none border-4 border-dashed border-slate-200 p-8 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
            Official_Document_Protocol_v3.3.1
          </p>
          <p className="mt-2 text-xs italic text-slate-400">
            ข้อมูลนี้ถูกจัดทำขึ้นเพื่อเป็นแนวทางตัวอย่าง (JPVISOULDOCS Example)
            กรุณาตรวจสอบการอัปเดตล่าสุดจากระบบหลัก
          </p>
        </footer>
      </article>
    </div>
  )
}

/**
 * 🛰️ METADATA_ENGINE: Generate SEO dynamically
 */
export async function generateMetadata({ params }: WikiPageProps) {
  const { slug } = await params
  const response = await getWikiPostBySlugAction(slug)
  if (!response.success || !response.post) return {}

  const post = response.post as ExtendedWikiPost
  return {
    title: `${post.title} | JP Visual Docs`,
    description: post.description || 'รายละเอียดวิศวกรรมข้อมูลเชิงลึก',
    openGraph: {
      title: post.title,
      description: post.description || '',
      images: [post.image || '/og-image.jpg'],
      url: `https://jpvisouldocs.website/wiki/${slug}`,
      type: 'article',
    },
    alternates: {
      canonical: `https://jpvisouldocs.website/wiki/${slug}`,
    },
  }
}
