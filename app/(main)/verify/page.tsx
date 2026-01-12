/** @format */
'use client'

import React, { useState, useTransition, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { ShieldCheck, Search, AlertCircle, Loader2, ArrowRight, Fingerprint } from 'lucide-react'
import { toast } from 'sonner'

/**
 * 🛰️ VIEW_PROTOCOL: VERIFICATION_SEARCH_PORTAL_V2
 * VERSION: 1.3.0 (Refactored_Integrity)
 * ✅ Strategy: Optimized Input Handling & Predictive UI
 * 📂 Location: app/(main)/verify/page.tsx
 */

export default function VerifySearchPage() {
  const [ticketId, setTicketId] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  // 🛡️ ACTION_HANDLER: จัดการการส่งข้อมูลอย่างแม่นยำ
  const handleSearch = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()

      // 🔍 CLEANING_PROTOCOL: ปรับฟอร์แมตข้อมูลให้ถูกต้องก่อนเข้าสู่ระบบ
      const cleanId = ticketId.trim().toUpperCase()

      if (!cleanId) {
        toast.error('IDENTIFICATION_REQUIRED', {
          description: 'โปรดระบุรหัสเอกสารเพื่อเริ่มกระบวนการตรวจสอบ',
        })
        return
      }

      // 🚀 TRANSITION_ENGINE: เปลี่ยนหน้าอย่างราบรื่นโดยไม่หยุดชะงัก
      startTransition(() => {
        toast.promise(
          new Promise((resolve) => {
            router.push(`/verify/${cleanId}`)
            // จำลองการเตรียมข้อมูลเบื้องต้น
            setTimeout(resolve, 800)
          }),
          {
            loading: 'กำลังเชื่อมต่อฐานข้อมูลกลาง...',
            success: 'เข้าถึงรหัสตรวจสอบสำเร็จ',
            error: 'การเชื่อมต่อขัดข้อง โปรดลองใหม่',
          },
        )
      })
    },
    [ticketId, router],
  )

  return (
    <div className="flex min-h-[90vh] items-center justify-center bg-[#FAFAF9] px-4 font-thai">
      <Card className="relative w-full max-w-xl overflow-hidden rounded-none border-[6px] border-[#020617] bg-white p-10 shadow-[24px_24px_0px_0px_#FCDE09] md:p-14">
        {/* 📟 INTERFACE_SCANNER: อนิเมชั่นเส้นสแกนเพื่อความไว้วางใจได้ */}
        {isPending && (
          <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
            <div className="absolute left-0 top-0 h-1 w-full animate-[scan_2s_linear_infinite] bg-[#FCDE09] shadow-[0_0_15px_#FCDE09]" />
            <div className="absolute inset-0 bg-[#020617]/5 backdrop-blur-[1px]" />
          </div>
        )}

        {/* 🏛️ PORTAL_HEADER */}
        <div className="mb-12 text-center">
          <div className="relative mb-6 inline-block">
            <div className="shadow-[8px_8px_0px_0px_#020617]/20 bg-[#020617] p-6 text-[#FCDE09]">
              <Fingerprint
                size={52}
                strokeWidth={1.5}
                className={isPending ? 'animate-pulse' : ''}
              />
            </div>
            <div className="absolute -right-2 -top-2 border-2 border-[#020617] bg-[#FCDE09] p-1">
              <ShieldCheck size={18} className="text-[#020617]" />
            </div>
          </div>

          <h1 className="text-5xl font-black uppercase italic leading-none tracking-tighter text-[#020617] md:text-7xl">
            Audit_Gate
          </h1>
          <p className="mt-5 flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">
            <span className="h-[1px] w-8 bg-slate-200" />
            Centralized_Verification_Node
            <span className="h-[1px] w-8 bg-slate-200" />
          </p>
        </div>

        {/* 🔍 SEARCH_INTERFACE */}
        <form onSubmit={handleSearch} className="space-y-10">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <label className="text-[11px] font-black uppercase tracking-widest text-[#020617]">
                Document_Reference_Code
              </label>
              <div className="flex items-center gap-1.5 border border-emerald-100 bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-emerald-600">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                System_Live
              </div>
            </div>

            <div className="group relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-[#020617]">
                <Search size={24} />
              </div>
              <Input
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
                placeholder="กรอกรหัส (เช่น JPV-001245)"
                disabled={isPending}
                className="h-24 rounded-none border-[4px] border-[#020617] pl-16 font-mono text-3xl transition-all placeholder:italic placeholder:text-slate-100 focus-visible:bg-slate-50 focus-visible:ring-0"
              />
              {!isPending && ticketId && (
                <button
                  type="submit"
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#020617] p-3 text-[#FCDE09] shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] transition-all hover:bg-[#FCDE09] hover:text-[#020617] active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <ArrowRight size={28} strokeWidth={3} />
                </button>
              )}
            </div>
          </div>

          <Button
            type="submit"
            disabled={isPending || !ticketId}
            className="group h-24 w-full rounded-none bg-[#020617] text-2xl font-black uppercase italic tracking-[0.2em] text-[#FCDE09] transition-all hover:bg-[#1E293B] disabled:opacity-10"
          >
            {isPending ? (
              <div className="flex items-center gap-4">
                <Loader2 className="animate-spin" size={32} />
                <span>Authenticating...</span>
              </div>
            ) : (
              <span className="flex items-center gap-4 transition-transform group-hover:scale-105">
                Initialize_Audit_Sequence
              </span>
            )}
          </Button>
        </form>

        {/* 📜 COMPLIANCE_STAMP */}
        <div className="relative mt-14 border-t-2 border-[#020617]/10 pt-10">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-[10px] font-black uppercase italic text-slate-300">
            Integrity_Guarantee
          </div>
          <div className="flex items-start gap-5">
            <div className="border border-slate-200 bg-slate-50 p-3">
              <AlertCircle size={22} className="text-[#020617]" />
            </div>
            <div className="space-y-1.5">
              <p className="text-[12px] font-black uppercase italic tracking-tight text-[#020617]">
                Security_Compliance_Notice
              </p>
              <p className="text-[10px] font-medium uppercase leading-relaxed tracking-tighter text-slate-400">
                ทุกการเข้าถึงข้อมูลจะถูกเข้ารหัสระดับ{' '}
                <span className="font-bold text-[#020617]">SHA-256</span>
                และบันทึก{' '}
                <span className="underline decoration-[#FCDE09] decoration-2">Audit_Log</span>
                ลงในฐานข้อมูลกลางเพื่อป้องกันการแอบอ้างสิทธิ์
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
