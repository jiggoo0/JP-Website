/** @format */
'use client'

import React, { useState, useEffect } from 'react'
import { getWikiPostsAction, type WikiPost } from '@/app/actions/wiki-actions'

// 🛰️ IMPORT_PROTOCOL: จัดการส่วนประกอบหน้าจอและลิงก์เชื่อมต่อ
import ArticleCard from '@/components/wiki/ArticleCard'
import { WikiCategory } from '@/components/wiki/WikiCategory'
import { Skeleton } from '@/components/ui/skeleton'
import { socialLinks } from '@/lib/links'
import { BookOpen, Search, Info, Zap, MessageCircle } from 'lucide-react'

/**
 * 🛠️ TYPE_AUGMENTATION: ขยายขอบเขตข้อมูลสำหรับ ArticleCard
 * แก้ไขปัญหา ESLint no-explicit-any โดยการระบุโครงสร้างที่ชัดเจน
 */
interface ExtendedWikiPost extends WikiPost {
  image?: string
  description?: string
  excerpt?: string
}

/**
 * 🛰️ VIEW_PROTOCOL: WIKI_KNOWLEDGE_REPOSITORY (Enhanced_v1.2.2_NoAny)
 * ROLE: ศูนย์รวมข้อมูลและระบบจัดการเอกสารมาตรฐานสากล
 * ✅ Location: app/(main)/wiki/page.tsx
 */

export default function WikiPage() {
  const [posts, setPosts] = useState<WikiPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<WikiPost[]>([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      try {
        const response = await getWikiPostsAction()
        if (response.success && response.posts) {
          setPosts(response.posts)
          setFilteredPosts(response.posts)
        }
      } catch (error) {
        console.error('🚨 REPOSITORY_ERROR:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchPosts()
  }, [])

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
      {/* 📔 HERO_SECTION */}
      <section className="border-b-4 border-[#020617] bg-[#020617] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#FCDE09] text-[#020617] shadow-[4px_4px_0px_0px_#FFFFFF] mx-auto">
            <BookOpen size={32} />
          </div>
          <h1 className="mb-4 font-sans text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
            Knowledge_Base
          </h1>
          <p className="max-w-2xl text-lg text-slate-400 mx-auto">
            วิศวกรรมเอกสารและแนวทางการเตรียมโปรไฟล์ระดับสากล เพื่อความถูกต้องและกระบวนการที่ตรวจสอบได้จริง
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-10 lg:flex-row">
          <aside className="w-full lg:w-64">
            <div className="sticky top-24 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b-2 border-[#020617] pb-2 text-[#020617]">
                  <Search size={16} />
                  <span className="font-sans text-[10px] font-black uppercase tracking-widest">Repository_Filters</span>
                </div>
                <WikiCategory activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
              </div>

              <div className="border-2 border-[#020617] bg-[#FCDE09] p-5 shadow-[4px_4px_0px_0px_#020617]">
                <div className="mb-3 flex items-center gap-2 text-[#020617]">
                  <Zap size={18} fill="#020617" />
                  <span className="text-xs font-black uppercase italic">Urgent_Support</span>
                </div>
                <p className="mb-4 text-[11px] font-bold leading-tight text-[#020617]">ต้องการแก้ไขประวัติเร่งด่วน? (SLA: 1-3 ชม.)</p>
                <a
                  href={socialLinks.links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#020617] py-2 font-sans text-[10px] font-black uppercase tracking-tighter text-white transition-transform hover:scale-105"
                >
                  <MessageCircle size={14} /> Contact_Operator
                </a>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-8 flex items-end justify-between border-b-2 border-slate-200 pb-4">
              <h2 className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-[#020617]">
                Service_Catalog ({filteredPosts.length})
              </h2>
            </div>

            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="h-[320px] w-full rounded-none border-4 border-slate-100" />
                ))}
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => {
                    // ✅ ใช้ ExtendedWikiPost แทนการใช้ any เพื่อความปลอดภัยและแก้ Lint Error
                    const extendedPost = post as ExtendedWikiPost;
                    
                    return (
                      <ArticleCard
                        key={post.slug}
                        post={{
                          ...post,
                          image: extendedPost.image || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800',
                          description: extendedPost.description || extendedPost.excerpt || 'รายละเอียดวิศวกรรมข้อมูลเชิงลึก',
                          publishedAt: post.updatedAt || post.publishedAt || new Date().toISOString(),
                        }}
                      />
                    );
                  })
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center border-4 border-dashed border-slate-200 py-24 text-slate-400">
                    <Info size={48} className="mb-4 opacity-20" />
                    <p className="font-sans text-[10px] font-black uppercase tracking-widest">Data_Not_Found_In_This_Sector</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="mt-20 border-t-2 border-slate-200 bg-white py-12">
        <div className="container mx-auto px-4 text-center text-slate-300">
          <p className="font-sans text-[9px] font-black uppercase tracking-[0.3em]">JP-VisualDocs Protocol v1.2.2 — No_Any_Compliance</p>
        </div>
      </footer>
    </div>
  )
}
