/** @format */
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Hash, Loader2, X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 🛰️ UI_PROTOCOL: SEARCH_INTERFACE_ENGINE
 * VERSION: 1.4.1 (Lint_Optimization_Fixed)
 * ✅ ROLE: ส่วนค้นหาเอกสารอ้างอิง (Ticket Search)
 * ✅ STRATEGY: ถูกต้อง, รวดเร็ว, ตรวจสอบได้
 * 📂 Location: components/verify/SearchBar.tsx
 */

interface SearchBarProps {
  initialValue?: string
  placeholder?: string
  className?: string
  variant?: 'default' | 'compact'
}

export const SearchBar = ({
  initialValue = '',
  placeholder = 'ใส่รหัส Ticket (เช่น JPV-XXXXXX)',
  className,
  variant = 'default',
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialValue)
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()

  /**
   * 🛠️ AUTO_FORMATTER: ช่วยเติม JPV- ให้อัตโนมัติเพื่อให้ข้อมูล "ถูกต้อง" ตามมาตรฐาน
   * ช่วยให้กระบวนการกรอกข้อมูลของผู้ใช้งาน "ราบรื่น" ยิ่งขึ้น
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase()
    // ตรวจสอบและเติม Prefix อัตโนมัติเพื่อป้องกันความผิดพลาด
    if (value && !value.startsWith('JPV-') && !'JPV-'.startsWith(value)) {
      value = `JPV-${value}`
    }
    setQuery(value)
  }

  const executeSearch = (e?: React.FormEvent) => {
    e?.preventDefault()
    // ป้องกันการส่งค่าว่างหรือมีแค่ Prefix เข้าสู่ระบบ
    if (!query.trim() || query === 'JPV-') return

    setIsSearching(true)
    const finalId = query.trim().toUpperCase()
    
    // 🛰️ NAVIGATION: ส่งผู้ใช้ไปหน้าตรวจสอบตัวตนที่เกี่ยวข้อง
    router.push(`/verify/${finalId}`)
  }

  return (
    <form
      onSubmit={executeSearch}
      className={cn(
        'relative flex w-full items-center gap-0 transition-all',
        variant === 'default' ? 'max-w-2xl' : 'max-w-md',
        className,
      )}
    >
      <div className="group relative flex-1">
        {/* 📟 DECORATIVE_ICON: บ่งบอกถึงการกรอกรหัส (Mono Style) */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#020617]">
          <Hash size={18} strokeWidth={2.5} />
        </div>

        <Input
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={isSearching}
          className={cn(
            'h-14 w-full rounded-none border-4 border-[#020617] bg-white pl-12 pr-12 font-mono text-lg font-bold tracking-tight',
            'transition-all focus-visible:border-[#FCDE09] focus-visible:bg-slate-50/50 focus-visible:ring-0',
            'placeholder:italic placeholder:text-slate-200',
          )}
        />

        {/* ❌ CLEAR_ACTION: ช่วยให้การล้างข้อมูล "รวดเร็ว" และ "ไว้วางใจได้" */}
        {query && !isSearching && (
          <button
            type="button"
            onClick={() => setQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 transition-colors hover:text-red-500"
            aria-label="ล้างข้อมูลการค้นหา"
          >
            <X size={18} />
          </button>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSearching || !query || query === 'JPV-'}
        className={cn(
          'h-14 rounded-none bg-[#020617] px-8 font-black uppercase italic text-[#FCDE09]',
          'shadow-none transition-all hover:bg-[#020617] hover:shadow-[4px_4px_0px_0px_rgba(252,222,9,1)] active:translate-x-0.5 active:translate-y-0.5',
          'border-y-4 border-r-4 border-[#020617]',
        )}
      >
        {isSearching ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <div className="flex items-center">
            <Search className="mr-2" size={20} strokeWidth={3} />
            {variant === 'default' && <span>Search</span>}
          </div>
        )}
      </Button>

      {/* 🛡️ SECURITY_GLOW: Feedback ทางสายตาเมื่อมีการใช้งานส่วนนี้ */}
      <div className="absolute -inset-1 -z-10 bg-[#FCDE09] opacity-0 blur-lg transition-opacity group-focus-within:opacity-10" />
    </form>
  )
}
