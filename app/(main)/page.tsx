/** @format */
import React, { Suspense } from 'react'
import HeroVerify from '@/components/section/HeroVerify'
import KnowledgeGrid from '@/components/section/KnowledgeGrid'
import FAQSection from '@/components/section/FAQSection'
import { Separator } from '@/components/ui/separator'

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden font-thai">
      {/* 🎯 ACTION_ZONE: การตรวจสอบเอกสาร */}
      <section className="bg-white" aria-label="ส่วนตรวจสอบเอกสารระดับโปรโตคอล">
        <Suspense fallback={<div className="h-[600px] w-full animate-pulse bg-slate-50" />}>
          <HeroVerify />
        </Suspense>
      </section>

      <div className="container mx-auto px-4">
        <Separator className="h-[2px] bg-slate-100/50" />
      </div>

      {/* 📚 KNOWLEDGE_ZONE */}
      <section className="bg-[#F8FAFC] py-24" aria-label="คลังความรู้และระเบียบปฏิบัติ">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-[#020617] md:text-6xl">
              Knowledge <br className="md:hidden" />
              <span className="text-slate-300">Archive_System</span>
            </h2>
            <div className="mt-6 flex flex-col items-center gap-4">
              <span className="h-2 w-20 bg-[#FCDE09]" />
              <p className="max-w-xl text-[10px] font-bold uppercase leading-relaxed tracking-[0.3em] text-slate-400">
                ศูนย์กลางรวบรวมข้อมูลระเบียบปฏิบัติและมาตรฐานการตรวจสอบ <br />
                รหัสผ่านการรับรองมาตรฐาน: DOC-VER-2026-V1
              </p>
            </div>
          </div>

          <KnowledgeGrid />
        </div>
      </section>

      {/* ❓ SUPPORT_ZONE */}
      <section className="bg-white py-24" aria-label="ศูนย์ช่วยเหลือและคำถามที่พบบ่อย">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col justify-between gap-4 border-b-4 border-[#020617] pb-8 md:flex-row md:items-end">
            <div>
              <p className="mb-2 inline-block bg-[#020617] px-3 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-[#FCDE09]">
                Help_Center
              </p>
              <h3 className="text-3xl font-black uppercase italic tracking-tight text-[#020617] md:text-5xl">
                System_Inquiry // ถาม-ตอบ
              </h3>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-slate-400">
                DATABASE_SYNC: ACTIVE
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-300">
                REF_VERSION: FAQ_V1.2.1
              </span>
            </div>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* 🛡️ AUDIT_INDICATOR */}
      <div className="container mx-auto border-t border-dashed border-slate-200 px-4 py-8">
        <div className="flex items-center justify-between opacity-30">
          <span className="font-mono text-[8px] uppercase tracking-[0.5em]">
            System_Integrity_Verified
          </span>
          <div className="flex gap-1">
            <div className="h-1.5 w-1.5 bg-[#020617]" />
            <div className="h-1.5 w-1.5 bg-[#FCDE09]" />
          </div>
        </div>
      </div>
    </div>
  )
}
