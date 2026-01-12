/** @format */
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
// 🛰️ นำเข้าความสามารถส่วนกลางเพื่อความถูกต้องและตรวจสอบได้
import { mainNavLinks } from '@/lib/links'
import Logo from '@/components/logo'
import { Menu, X, ChevronRight, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * 🛰️ SYSTEM_PROTOCOL: HEADER_COMMAND_INTERFACE
 * VERSION: 1.6.0 (Component Integration & Optimization)
 * ✅ Strategy: ปรับปรุงโครงสร้างให้รวมศูนย์ เพื่อความไว้วางใจได้ของระบบ
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // 🛠️ ตรวจสอบการเลื่อนหน้าจอเพื่อปรับเปลี่ยน UI ให้เหมาะสม
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 🛠️ กระบวนการราบรื่น: ปิดเมนูอัตโนมัติเมื่อมีการเปลี่ยนเส้นทาง
  useEffect(() => setIsOpen(false), [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b-2 transition-all duration-300',
        scrolled
          ? 'h-16 border-[#020617] bg-white/95 shadow-md backdrop-blur-md'
          : 'h-20 border-transparent bg-[#FAFAF9]',
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* 🏛️ LOGO_UNIT: เรียกใช้คอมโพเนนต์ส่วนกลางเพื่อความถูกต้องของแบรนด์ */}
        <Logo iconSize={scrolled ? 18 : 22} />

        {/* 🖥️ DESKTOP_NAVIGATION: จัดการเส้นทางที่ตรวจสอบได้ */}
        <nav className="hidden items-center gap-6 md:flex">
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center gap-2 px-2 py-1 text-[11px] font-bold uppercase tracking-widest transition-all',
                  isActive
                    ? 'bg-[#FCDE09]/10 text-[#020617]'
                    : 'text-slate-500 hover:text-[#020617]',
                )}
              >
                {link.label}
                {isActive && (
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FCDE09]" />
                )}
              </Link>
            )
          })}

          <div className="mx-2 h-4 w-px bg-slate-200" />

          <Button className="h-9 rounded-none border-2 border-[#020617] bg-[#020617] px-5 text-[10px] font-bold uppercase italic text-[#FCDE09] transition-all hover:bg-white hover:text-[#020617]">
            Access_Pass
          </Button>
        </nav>

        {/* 📱 MOBILE_TOGGLE */}
        <button
          aria-label="เปิดเมนูนำทาง"
          className="p-2 text-[#020617] transition-transform active:scale-95 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🌑 MOBILE_MENU_OVERLAY: การเข้าถึงที่ไว้วางใจได้ในทุกอุปกรณ์ */}
      <div
        className={cn(
          'fixed inset-0 top-[64px] z-40 bg-[#FAFAF9] transition-all duration-500 md:hidden',
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
        )}
      >
        <div className="flex h-full flex-col border-t border-slate-200 p-6">
          <div className="mb-8 border-b pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Navigation_Portal
          </div>
          <div className="flex flex-col gap-8">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between text-4xl font-black uppercase italic tracking-tighter text-[#020617]"
              >
                <span>{link.label}</span>
                <ChevronRight className="text-[#FCDE09]" size={28} />
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-6 border-t border-slate-200 pt-10">
            <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase text-[#059669]">
              <Activity size={14} className="animate-pulse" /> Live_Verification_Active
            </div>
            <Button className="h-14 w-full rounded-none bg-[#020617] text-lg font-black uppercase italic text-[#FCDE09] shadow-[6px_6px_0px_0px_rgba(252,222,9,1)] transition-all active:translate-y-1 active:shadow-none">
              Enter_Protocol
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
