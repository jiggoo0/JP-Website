/** @format */

import React from 'react'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 🛰️ COMPONENT_PROTOCOL: BRAND_IDENTITY_LOGO
 * VERSION: 1.1.0
 * ✅ Strategy: แสดงผลอัตลักษณ์ที่ชัดเจน ตรวจสอบได้ และสอดคล้องกับระบบ
 */

interface LogoProps {
  className?: string
  iconSize?: number
  showTagline?: boolean
  variant?: 'default' | 'minimal' | 'light'
}

export default function Logo({
  className,
  iconSize = 24,
  showTagline = true,
  variant = 'default',
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('group flex select-none items-center gap-3', className)}
      aria-label="JP Visual & Docs Home"
    >
      {/* 🛡️ ICON_UNIT: สัญลักษณ์แห่งความปลอดภัยและความถูกต้อง */}
      <div
        className={cn(
          'p-2 transition-all duration-300 group-hover:-rotate-12',
          variant === 'light'
            ? 'bg-[#FCDE09] text-[#020617]'
            : 'bg-[#020617] text-[#FCDE09] shadow-[3px_3px_0px_0px_rgba(252,222,9,1)]',
        )}
      >
        <ShieldCheck size={iconSize} strokeWidth={2.5} />
      </div>

      {/* 📄 TEXT_UNIT: ข้อมูลระบุตัวตนระบบ */}
      <div className="flex flex-col justify-center">
        <h1
          className={cn(
            'text-xl font-black uppercase italic leading-none tracking-tighter transition-colors',
            variant === 'light' ? 'text-white' : 'text-[#020617]',
          )}
        >
          JP_VisualDocs
        </h1>

        {showTagline && (
          <span
            className={cn(
              'mt-1 font-mono text-[9px] font-bold uppercase tracking-widest opacity-80',
              variant === 'light' ? 'text-slate-300' : 'text-slate-500',
            )}
          >
            Verification_Protocol_v3.3.1
          </span>
        )}
      </div>
    </Link>
  )
}
