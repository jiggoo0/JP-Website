/** @format */
'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ListIcon, ChevronRight } from 'lucide-react'

/**
 * 🛰️ VIEW_PROTOCOL: DYNAMIC_ARTICLE_INDEXING
 * VERSION: 1.0.7 (Type_Stability_Fixed)
 * ✅ Purpose: ระบบสารบัญอัตโนมัติ ช่วยให้การเข้าถึงข้อมูลรวดเร็วและถูกต้อง
 * ✅ Strategy: ใช้ Intersection Observer เพื่อ Feedback ตำแหน่งการอ่านแบบเรียลไทม์
 * 📂 Location: components/wiki/TableOfContent.tsx
 */

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TOCProps {
  contentId: string // ID ของ container ที่ห่อหุ้มเนื้อหาบทความ
}

export const TableOfContent: React.FC<TOCProps> = ({ contentId }) => {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // 1. SCANNING_PROTOCOL: ค้นหาหัวข้อภายใน Content Area เพื่อสร้างดัชนี
    const contentElement = document.getElementById(contentId)
    if (!contentElement) return

    const headingElements = Array.from(contentElement.querySelectorAll('h2, h3'))

    // 🛡️ FIXED: กำหนด Type เป็น TOCItem[] เพื่อแก้ปัญหา TS2739
    const items: TOCItem[] = headingElements.map((el, index) => {
      // 🆔 IDENTITY_GENERATION: หากหัวข้อไม่มี id ให้สร้าง slug อัตโนมัติ
      if (!el.id) {
        const slug =
          el.textContent
            ?.toLowerCase()
            .trim()
            .replace(/[^a-z0-9ก-๙]/g, '-')
            .replace(/-+/g, '-') || `section-${index}`
        el.id = slug
      }
      return {
        id: el.id,
        text: el.textContent || '',
        level: Number(el.tagName.replace('H', '')),
      }
    })

    setHeadings(items)

    // 2. OBSERVATION_PROTOCOL: ติดตามความเคลื่อนไหวของผู้ใช้เพื่ออัปเดตสถานะ Active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-10% 0px -75% 0px' },
    )

    headingElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [contentId])

  if (headings.length === 0) return null

  return (
    <nav
      className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto border-4 border-[#020617] bg-white p-6 shadow-[4px_4px_0px_0px_#020617] font-thai"
      aria-label="สารบัญบทความ"
    >
      <div className="mb-6 flex items-center gap-2 border-b-2 border-[#020617] pb-3">
        <div className="bg-[#020617] p-1 text-[#FCDE09]">
          <ListIcon size={14} />
        </div>
        <h3 className="text-[11px] font-black uppercase italic tracking-[0.2em] text-[#020617] font-sans">
          Article_Index
        </h3>
      </div>

      <ul className="space-y-4">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              'border-l-4 pl-3 transition-all duration-300',
              heading.level === 3
                ? 'ml-4 text-[12px]'
                : 'text-[13px] font-black uppercase tracking-tight font-sans',
              activeId === heading.id
                ? 'translate-x-1 border-[#FCDE09] text-[#020617]'
                : 'border-slate-100 text-slate-400 hover:border-slate-300 hover:text-slate-600',
            )}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault()
                // 🚀 SMOOTH_NAVIGATION: กระบวนการเลื่อนหน้าที่ถูกต้องและราบรื่น
                const target = document.getElementById(heading.id)
                if (target) {
                  const offset = 100 
                  const bodyRect = document.body.getBoundingClientRect().top
                  const elementRect = target.getBoundingClientRect().top
                  const elementPosition = elementRect - bodyRect
                  const offsetPosition = elementPosition - offset

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                  })
                }
              }}
              className="group flex items-center gap-2"
            >
              {heading.level === 2 && (
                <ChevronRight
                  size={12}
                  className={cn(
                    'transition-transform shrink-0',
                    activeId === heading.id
                      ? 'translate-x-0 opacity-100'
                      : '-translate-x-2 opacity-0',
                  )}
                />
              )}
              <span className="truncate leading-relaxed">{heading.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// 🏛️ EXPORT_PROTOCOL: ใช้ Named Export เพื่อให้สอดคล้องกับมาตรฐาน Wiki Directory
export default TableOfContent
