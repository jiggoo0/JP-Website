/** @format */
'use client'

import React, { useState, useEffect } from 'react'
import { getWikiPostsAction, type WikiPost } from '@/app/actions/wiki-actions'

// 🛰️ IMPORT_PROTOCOL: จัดการส่วนประกอบส่วนติดต่อผู้ใช้ (UI)
import ArticleCard from '@/components/wiki/ArticleCard'
import { WikiCategory } from '@/components/wiki/WikiCategory'
import { Skeleton } from '@/components/ui/skeleton'
import { BookOpen, Search, Info } from 'lucide-react'

/**
 * 🛰️ VIEW_PROTOCOL: WIKI_KNOWLEDGE_REPOSITORY
 * ROLE: ศูนย์รวมข้อมูลและแนวทางการจัดการเอกสารสำคัญตามมาตรฐานสากล
 * VERSION: 1.1.1 (Lint_Optimization_Fixed)
 * ✅ Strategy: เข้าถึงง่าย, กรองข้อมูลได้แม่นยำ, ไว้วางใจได้
 * 📂 Location: app/(main)/wiki/page.tsx
 */

export default function WikiPage() {
  const [posts, setPosts] = useState<WikiPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<WikiPost[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  // 📥 DATA_LOAD_PROTOCOL: ดึงข้อมูลจาก Server Action
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await getWikiPostsAction()
        if (response.success && response.posts) {
          setPosts(response.posts)
          setFilteredPosts(response.posts)
        }
      } catch {
        // ✅ FIXED: ลบตัวแปร _error ที่ไม่ได้ใช้งานออกเพื่อแก้ Lint Error (37:16)
        console.error('🚨 WIKI_FETCH_FAILURE: การเชื่อมต่อฐานข้อมูลล้มเหลว')
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

  // 🔍 FILTER_PROTOCOL: จัดการการกรองหมวดหมู่เอกสารให้ถูกต้อง
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    if (categoryId === 'all') {
      setFilteredPosts(posts)
    } else {
      setFilteredPosts(posts.filter((post) => post.category === categoryId))
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-thai">
      {/* 📔 HERO_SECTION: ศูนย์การเรียนรู้มาตรฐานอุตสาหกรรม */}
      <section className="border-b-4 border-[#020617] bg-[#020617] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#FCDE09] text-[#020617] shadow-[4px_4px_0px_0px_#FFFFFF]">
              <BookOpen size={32} />
            </div>
            <h1 className="mb-4 text-4xl font-black uppercase italic tracking-tighter md:text-6xl font-sans">
              Knowledge_Base
            </h1>
            <p className="max-w-2xl text-lg text-slate-400">
              แหล่งรวบรวมข้อมูลเชิงลึกและแนวทางการเตรียมเอกสาร เพื่อความถูกต้องและกระบวนการที่ราบรื่นที่สุด
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* 📂 SIDEBAR: หมวดหมู่ (Filter Section) */}
          <aside className="w-full lg:w-64">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center gap-2 border-b-2 border-[#020617] pb-2 text-[#020617]">
                <Search size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest font-sans">Repository_Filters</span>
              </div>
              <WikiCategory 
                activeCategory={activeCategory} 
                onCategoryChange={handleCategoryChange} 
              />
            </div>
          </aside>

          {/* 📄 CONTENT_GRID: รายการบทความที่ตรวจสอบแล้ว */}
          <div className="flex-1">
            <div className="mb-8 flex items-end justify-between border-b-2 border-slate-200 pb-4">
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#020617] font-sans">
                Document_Catalog ({filteredPosts.length})
              </h2>
            </div>

            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-[280px] w-full rounded-none border-2 border-slate-100" />
                ))}
              </div>
            ) : (
              <>
                {filteredPosts.length > 0 ? (
                  <div className="grid gap-8 md:grid-cols-2">
                    {filteredPosts.map((post) => (
                      <ArticleCard 
                        key={post.slug} 
                        post={{
                          ...post,
                          description: post.excerpt || "คู่มือและรายละเอียดเชิงลึกเกี่ยวกับระเบียบการจัดการเอกสาร",
                          publishedAt: post.updatedAt || post.publishedAt || new Date().toISOString()
                        }} 
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center border-4 border-dashed border-slate-200 py-24 text-slate-400">
                    <Info size={48} className="mb-4 opacity-20" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Data_Not_Found_In_This_Sector</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      {/* 🏛️ FOOTER_STAMP: การรับรองความถูกต้องของระบบ */}
      <footer className="mt-20 border-t-2 border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 font-sans">
            JP-VisualDocs Knowledge Protocol v1.1.1 — Verified Repository
          </p>
        </div>
      </footer>
    </div>
  )
}
