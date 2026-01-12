/** @format */

import React, { Suspense } from 'react'
import HeroVerify from '@/components/section/HeroVerify'
import KnowledgeGrid from '@/components/section/KnowledgeGrid'
import FAQSection from '@/components/section/FAQSection'
import { Separator } from '@/components/ui/separator'

/**
 * 🛰️ VIEW_PROTOCOL: LANDING_MASTER_HUB
 * VERSION: 1.6.0 (Architecture Sync)
 * ✅ Strategy: จัดลำดับการเข้าถึงข้อมูลให้ถูกต้องและตรวจสอบได้ทันที
 * 📂 Location: app/(main)/page.tsx
 * 🛠️ Status: Scanning process completed successfully.
 */

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden font-thai">
      {/* 🎯 ACTION_ZONE: ส่วนการตรวจสอบเอกสารและอัตลักษณ์
          เน้นความรวดเร็วเพื่อให้กระบวนการราบรื่นและเห็นผลลัพธ์ทันที */}
      <section className="relative bg-white" aria-label="ส่วนตรวจสอบเอกสารระดับโปรโตคอล">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-20">
              <div className="h-[400px] w-full animate-pulse rounded-3xl bg-slate-50" />
            </div>
          }
        >
          <HeroVerify />
        </Suspense>
      </section>

      <div className="container mx-auto px-4">
        <Separator className="h-[2px] bg-slate-100" />
      </div>

      {/* 📚 KNOWLEDGE_ZONE: คลังข้อมูลระเบียบปฏิบัติ
          นำเสนอข้อมูลที่ถูกต้องและตรวจสอบได้ เพื่อสร้างความไว้วางใจได้สูงสุด */}
      <section className="bg-[#F8FAFC] py-24" aria-label="คลังความรู้และระเบียบปฏิบัติ">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-[#020617] md:text-5xl">
              Knowledge_Archive
            </h2>
            <div className="mt-4 flex flex-col items-center gap-3">
              <span className="h-1.5 w-16 bg-[#FCDE09]" />
              <p className="max-w-md text-xs font-bold uppercase leading-relaxed tracking-[0.2em] text-slate-400">
                ศูนย์กลางรวบรวมข้อมูลระเบียบปฏิบัติและมาตรฐานการตรวจสอบ <br />
                เวอร์ชันล่าสุดที่ผ่านการรับรองจากเจ้าหน้าที่
              </p>
            </div>
          </div>

          <KnowledgeGrid />
        </div>
      </section>

      {/* ❓ SUPPORT_ZONE: ถาม-ตอบ และการสนับสนุนทางเทคนิค
          แจ้งคำแนะนำที่ชัดเจนและครอบคลุมทุกประเด็นสำคัญ */}
      <section className="bg-white py-24" aria-label="ศูนย์ช่วยเหลือและคำถามที่พบบ่อย">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <h3 className="border-l-8 border-[#FCDE09] pl-6 text-2xl font-black uppercase italic tracking-tight text-[#020617]">
              System_Inquiry // ถาม-ตอบ
            </h3>
            <div className="hidden items-center gap-2 font-mono text-[10px] tracking-widest text-slate-300 md:flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              DOC_REF: FAQ_V1.2.1
            </div>
          </div>

          <FAQSection />
        </div>
      </section>
    </div>
  )
}
