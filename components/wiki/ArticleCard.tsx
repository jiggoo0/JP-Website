/** @format */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowUpRight, BookOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 🛰️ UI_PROTOCOL: WIKI_ARTICLE_CARD_ENGINE
 * VERSION: 1.2.1 (Stability_Optimized)
 * ✅ Strategy: การแสดงผลต้องถูกต้อง สวยงาม และตรวจสอบข้อมูลเบื้องต้นได้ทันที
 * 📂 Location: components/wiki/ArticleCard.tsx
 */

interface ArticleCardProps {
  post: {
    title: string
    description: string
    slug: string
    category: string
    publishedAt: string | Date
    content: string
    imageUrl?: string
  }
  className?: string
}

const ArticleCard = ({ post, className }: ArticleCardProps) => {
  // ⏱️ CALCULATE_READ_TIME: คำนวณเวลาอ่านเพื่อให้ผู้ใช้ได้รับข้อมูลที่ถูกต้อง
  const readTime = `${Math.ceil(post.content.length / 500)} min read`

  // 📅 DATE_NORMALIZATION: จัดรูปแบบวันที่ให้เป็นมาตรฐานสากล
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <Link href={`/wiki/${post.slug}`} className={cn('group block h-full', className)}>
      <Card className="flex h-full flex-col overflow-hidden rounded-none border-4 border-[#020617] bg-white transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[12px_12px_0px_0px_#FCDE09]">
        {/* 🖼️ IMAGE_PREVIEW_ZONE: พื้นที่แสดงภาพประกอบบทความ */}
        <div className="relative h-48 w-full overflow-hidden border-b-4 border-[#020617] bg-slate-100">
          {post.imageUrl ? (
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-slate-50 text-slate-200">
              <BookOpen size={48} strokeWidth={1} />
            </div>
          )}

          {/* 🏷️ CATEGORY_TAG: ระบุหมวดหมู่ที่ตรวจสอบได้ */}
          <div className="absolute bottom-4 left-4">
            <Badge className="rounded-none border-none bg-[#020617] px-2 py-1 text-[9px] font-black uppercase text-[#FCDE09] shadow-[2px_2px_0px_0px_#FCDE09]">
              {post.category}
            </Badge>
          </div>
        </div>

        {/* 📝 CONTENT_ZONE: ข้อมูลบทความเบื้องต้น */}
        <div className="flex flex-1 flex-col space-y-4 p-6">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-1">
              <Calendar size={12} className="text-[#020617]" /> {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} className="text-[#020617]" /> {readTime}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-black uppercase italic leading-tight tracking-tighter text-[#020617] group-hover:text-[#020617]/80">
              {post.title}
            </h3>
            <p className="line-clamp-2 text-sm font-medium leading-relaxed text-slate-500">
              {post.description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between pt-4 text-[#020617]">
            <span className="text-[10px] font-black uppercase tracking-widest underline decoration-[#FCDE09] decoration-2 underline-offset-4">
              Access_Document
            </span>
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </div>
        </div>

        {/* 📟 SYSTEM_DECORATION: แถบสถานะอนิเมชันเพื่อ Feedback ที่ราบรื่น */}
        <div className="h-1 w-full origin-left scale-x-0 bg-[#020617] transition-transform duration-500 group-hover:scale-x-100" />
      </Card>
    </Link>
  )
}

// 🏛️ EXPORT_PROTOCOL: ใช้ Default Export เพื่อให้ระบบนำไปใช้งานได้อย่างถูกต้อง
export default ArticleCard
