/** @format */
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
// 🛰️ เชื่อมต่อข้อมูลเมนูหลักเพื่อให้การใช้งานราบรื่นและตรวจสอบได้
import { mainNavLinks } from '@/lib/links'
import Logo from '@/components/logo'
import { Menu, X, ChevronRight, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * 🛰️ AI-CONTEXT: JP-VisualDocs – Header Component
 * @version 1.6.1
 * ✅ โทน: สุภาพ มืออาชีพ เป็นมิตร
 * ✅ คำสำคัญ: ตรวจสอบได้, ถูกต้อง, กระบวนการราบรื่น, ไว้วางใจได้
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // 🛠️ ตรวจสอบการเลื่อนหน้าจอเพื่อปรับการแสดงผลให้เหมาะสมกับผู้ใช้งาน
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🛠️ ปิดเมนูอัตโนมัติเมื่อมีการเปลี่ยนหน้าเพื่อให้การใช้งานต่อเนื่อง
  useEffect(() => setIsOpen(false), [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'h-16 border-slate-200 bg-white/95 shadow-sm backdrop-blur-md'
          : 'h-20 border-transparent bg-[#FAFAF9]',
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* 🏛️ โลโก้และอัตลักษณ์ของบริการที่ไว้วางใจได้ */}
        <Logo iconSize={scrolled ? 18 : 22} />

        {/* 🖥️ เมนูนำทางสำหรับคอมพิวเตอร์: ออกแบบมาเพื่อให้ข้อมูลที่ถูกต้องและเข้าถึงง่าย */}
        <nav className="hidden items-center gap-8 md:flex">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-[#0F172A]',
                  isActive ? 'text-[#0F172A]' : 'text-slate-500',
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#059669] transition-all" />
                )}
              </Link>
            )
          })}

          <div className="h-4 w-px bg-slate-200" />

          <Button
            variant="default"
            className="rounded-md bg-[#0F172A] px-6 text-sm font-medium text-white transition-all hover:bg-[#1E293B]"
          >
            เริ่มตรวจสอบเอกสาร
          </Button>
        </nav>

        {/* 📱 ปุ่มเมนูสำหรับโทรศัพท์มือถือ */}
        <button
          aria-label="เปิดเมนูนำทาง"
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🌑 เมนูนำทางสำหรับมือถือ: เข้าถึงข้อมูลได้อย่างรวดเร็วและถูกต้อง */}
      <div
        className={cn(
          'fixed inset-0 top-[64px] z-40 bg-white transition-all duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-6 border-b pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            เมนูหลัก
          </div>
          <div className="flex flex-col gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between text-xl font-semibold text-[#0F172A]"
              >
                <span>{link.label}</span>
                <ChevronRight className="text-slate-300" size={20} />
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-6 border-t border-slate-100 pt-8">
            <div className="flex items-center gap-2 text-sm font-medium text-[#059669]">
              <Activity size={16} className="animate-pulse" />
              ระบบทำงานปกติ: ข้อมูลถูกต้องและตรวจสอบได้
            </div>
            <Button className="h-12 w-full rounded-md bg-[#0F172A] text-base font-semibold text-white shadow-md">
              ตรวจสอบสถานะเอกสาร
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
