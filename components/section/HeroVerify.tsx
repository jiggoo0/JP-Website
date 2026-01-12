/** @format */
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShieldCheck, Search, Zap, ArrowRight, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

/**
 * 🛰️ SYSTEM_PROTOCOL: HERO_VERIFY_ENGINE
 * VERSION: 1.5.1 (Integrity_Ready)
 * ✅ Purpose: ส่วนเริ่มต้นกระบวนการตรวจสอบเอกสารที่รวดเร็วและถูกต้อง
 * ✅ Strategy: ใช้รหัสอ้างอิงเพื่อเข้าถึงฐานข้อมูลกลางอย่างไว้วางใจได้
 */

export default function HeroVerify() {
  const [ticketId, setTicketId] = useState('')
  const [isPending, setIsPending] = useState(false)
  const router = useRouter()

  const handleQuickSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    // 🛡️ VALIDATION_CHECK: ตรวจสอบความถูกต้องเบื้องต้นก่อนส่งเข้าโปรโตคอล
    if (!ticketId.trim()) {
      toast.error('กรุณาระบุรหัสอ้างอิงเพื่อตรวจสอบ')
      return
    }

    setIsPending(true)

    try {
      // 🛰️ NAVIGATION_PROTOCOL: นำทางไปยังหน้าผลการตรวจสอบที่ระบุตัวตนได้
      router.push(`/verify/${ticketId.trim().toUpperCase()}`)
    } catch (error) {
      console.error('Verification_Error:', error)
      toast.error('เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล')
      setIsPending(false)
    }
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 font-thai lg:py-32">
      {/* 🧩 BACKGROUND_PATTERN: ลายตารางเชิงวิศวกรรมเพื่อความไว้วางใจได้ */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23020617' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* 📢 CONTENT_COLUMN: ข้อมูลมาตรฐานการทำงาน */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 border-2 border-[#020617] bg-[#FCDE09] px-3 py-1 shadow-[4px_4px_0px_0px_#020617]"
            >
              <Zap size={14} className="fill-[#020617]" />
              <span className="text-[10px] font-black uppercase tracking-tighter">
                System_Status: Operational
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-[#020617] md:text-7xl lg:text-8xl"
            >
              Verify_ <br />
              <span className="text-[#FCDE09] drop-shadow-[4px_4px_0px_#020617]">Integrity.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-lg font-medium uppercase leading-tight text-slate-500"
            >
              เข้าถึงฐานข้อมูลกลางเพื่อตรวจสอบความถูกต้องของเอกสารและสถานะบุคคล ภายใต้มาตรฐาน{' '}
              <span className="font-black italic text-[#020617] underline decoration-[#FCDE09] decoration-4">
                Protocol v3.3.1
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                <ShieldCheck size={16} className="text-emerald-600" /> Secure_Data_Access
              </div>
              <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400">
                <ShieldCheck size={16} className="text-emerald-600" /> Real-time_Audit
              </div>
            </motion.div>
          </div>

          {/* 🔍 SEARCH_BOX_COLUMN: ส่วนปฏิสัมพันธ์ที่ราบรื่น */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-lg"
          >
            <div className="relative border-8 border-[#020617] bg-white p-8 shadow-[20px_20px_0px_0px_#FCDE09] md:p-10">
              <div className="mb-6">
                <h3 className="text-2xl font-black uppercase italic text-[#020617]">Rapid_Check</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  ระบุรหัส Ticket เพื่อเริ่มกระบวนการตรวจสอบ
                </p>
              </div>

              <form onSubmit={handleQuickSearch} className="space-y-4">
                <div className="relative">
                  <Input
                    placeholder="รหัสอ้างอิง (เช่น JPV-XXXXXX)"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    disabled={isPending}
                    className="h-16 rounded-none border-4 border-[#020617] pl-12 font-mono text-lg transition-all placeholder:text-slate-300 focus-visible:border-[#FCDE09] focus-visible:ring-0 disabled:opacity-50"
                  />
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-16 w-full rounded-none bg-[#020617] text-xl font-black uppercase italic text-[#FCDE09] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:bg-slate-400"
                >
                  {isPending ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>
                      Start_Audit <ArrowRight className="ml-2" size={24} />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                <span>Encryption: AES-256_STABLE</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />{' '}
                  Live_Cloud_Sync
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
