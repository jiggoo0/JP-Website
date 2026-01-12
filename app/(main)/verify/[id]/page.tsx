/** @format */

import { notFound } from 'next/navigation'
import { verifyDocumentAction } from '@/app/actions/verify-actions'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ShieldCheck, User, Calendar, FileText, Activity, ArrowLeft, Hash } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

/**
 * 🛰️ VIEW_PROTOCOL: DOCUMENT_INTEGRITY_REPORT
 * VERSION: 1.2.4 (Stability_Refactor)
 * ✅ ROLE: แสดงผลการตรวจสอบเอกสารราย Case พร้อมสถานะความปลอดภัย
 * ✅ STRATEGY: Zero_Ambiguity, Type_Safe_Conditionals, High_Contrast_UI
 * 📂 Location: app/(main)/verify/[id]/page.tsx
 */

interface VerifyDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: VerifyDetailPageProps): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Verification Report: ${id} | JP VisualDocs`,
    description: `รายงานการตรวจสอบเอกสารรหัส ${id} ผ่านระบบ Audit มาตรฐานสากล`,
  }
}

export default async function VerifyDetailPage({ params }: VerifyDetailPageProps) {
  const { id } = await params
  const response = await verifyDocumentAction(id)

  // 🛡️ SECURITY_CHECK: ป้องกันการเข้าถึงข้อมูลที่ไม่มีอยู่จริง
  if (!response.success || !response.documentData) {
    return notFound()
  }

  const { documentData } = response

  // 🛠️ FIXED: แก้ไขปัญหา TS2367 โดยใช้สถานะที่เป็นไปได้จริงจาก VerificationStatus Enum
  // ตรวจสอบว่าสถานะเป็น 'verified' (ตัวเล็ก) ตามมาตรฐานของระบบ
  const isVerified = documentData.status.toLowerCase() === 'verified'

  return (
    <div className="min-h-screen bg-[#FAFAF9] px-4 py-16 font-thai sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* 🧭 NAVIGATION: กลับสู่หน้าค้นหา */}
        <Link
          href="/verify"
          className="group mb-10 inline-flex items-center text-[10px] font-black uppercase italic tracking-widest text-slate-400 transition-colors hover:text-[#020617]"
        >
          <ArrowLeft size={14} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back_to_Search_Portal
        </Link>

        {/* 🎫 HEADER: Identity & Security Status */}
        <div className="border-4 border-[#020617] bg-[#020617] p-8 text-[#FCDE09] shadow-[8px_8px_0px_0px_rgba(2,6,23,0.1)] md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="h-1 w-8 bg-[#FCDE09]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-70">
                  Official_Audit_Report
                </span>
              </div>
              <h1 className="text-4xl font-black uppercase italic leading-none tracking-tighter md:text-5xl">
                Verified_Result
              </h1>
              <div className="mt-4 inline-block flex items-center gap-2 bg-white/10 px-3 py-1.5 font-mono text-xs opacity-80">
                <Hash size={14} />
                <span>REF_ID: {documentData.ticketId || id.slice(0, 8).toUpperCase()}</span>
              </div>
            </div>
            <div className="bg-[#FCDE09] p-4 text-[#020617] shadow-[4px_4px_0px_0px_#FFFFFF]">
              <ShieldCheck className="h-12 w-12" />
            </div>
          </div>
        </div>

        {/* 📄 MAIN_CONTENT: รายละเอียดเอกสาร */}
        <div className="relative overflow-hidden border-x-4 border-b-4 border-[#020617] bg-white p-8 md:p-12">
          {/* Watermark Logo เพื่อสร้าง Trust Visual */}
          <ShieldCheck className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 -rotate-12 text-[#FAFAF9]" />

          <div className="relative z-10 space-y-12">
            <div className="grid gap-12 md:grid-cols-2">
              <section className="space-y-8">
                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Subject_Owner
                  </label>
                  <div className="flex items-center gap-3">
                    <div className="border border-slate-100 bg-slate-50 p-2">
                      <User size={20} className="text-[#020617]" />
                    </div>
                    <span className="text-2xl font-black uppercase italic tracking-tight text-[#020617]">
                      {documentData.owner}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Category
                  </label>
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-slate-400" />
                    <span className="font-bold uppercase tracking-tighter text-[#020617]">
                      {documentData.service}
                    </span>
                  </div>
                </div>
              </section>

              <section className="space-y-8">
                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Audit_Status
                  </label>
                  <Badge
                    variant="outline"
                    className={`rounded-none border-2 px-4 py-2 font-mono text-[10px] font-bold ${
                      isVerified
                        ? 'border-green-600 bg-green-50 text-green-600'
                        : 'border-red-600 bg-red-50 text-red-600'
                    }`}
                  >
                    ● {documentData.status.toUpperCase()}
                  </Badge>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Issued_Date
                  </label>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase text-slate-600">
                    <Calendar size={18} className="text-slate-300" />
                    {documentData.issuedAt 
                      ? new Date(documentData.issuedAt).toLocaleDateString('th-TH', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                      : 'N/A'}
                  </div>
                </div>
              </section>
            </div>

            <Separator className="h-[2px] bg-slate-100" />

            {/* 🛠️ FOOTER_STATS: ข้อมูลเชิงเทคนิค (Integrity Metadata) */}
            <div className="flex flex-col justify-between gap-6 font-mono text-[10px] font-bold uppercase tracking-tighter text-slate-400 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-slate-50 px-3 py-1">
                  <Activity size={12} className="text-green-500" />
                  <span>Protocol: {documentData.protocol || 'SSL_SECURE_V4'}</span>
                </div>
                <span className={isVerified ? "text-green-600" : "text-red-600"}>
                  Integrity: {isVerified ? 'VERIFIED' : 'FAILED'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>Verification_Time:</span>
                <span className="text-slate-900">{new Date().toISOString().replace('T', ' ').slice(0, 19)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 📜 DISCLAIMER */}
        <p className="mt-8 text-center text-[9px] font-bold uppercase leading-relaxed tracking-[0.2em] text-slate-300">
          This document is electronically verified by JP VisualDocs Protocol. <br />
          Any modification to this report will render the verification void and may lead to legal action.
        </p>
      </div>
    </div>
  )
}
