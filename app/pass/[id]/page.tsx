/** @format */
import { notFound } from 'next/navigation'
import { verifyDocumentAction } from '@/app/actions/verify-actions'

// 🛰️ IMPORT_PROTOCOL: นำเข้าส่วนประกอบที่ผ่านการรับรองความถูกต้อง
import { AuditStamp } from '@/components/ui/audit-stamp'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ShieldCheck, Calendar, User, FileText, Activity, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

/**
 * 🛰️ VIEW_PROTOCOL: OFFICIAL_VERIFICATION_PORTAL
 * VERSION: 1.1.2 (Type_Mismatch_Fixed)
 * ✅ ROLE: หน้าแสดงผลการตรวจสอบเอกสาร (Official Pass)
 * ✅ STRATEGY: ตรวจสอบย้อนกลับได้, ปลอดภัย, กระบวนการราบรื่น
 * 📂 Location: app/pass/[id]/page.tsx
 */

interface VerifyPageProps {
  params: Promise<{ id: string }>
}

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { id } = await params
  
  // 📥 DATA_FETCHING: ดึงข้อมูลผ่าน Server Action ที่เป็นระบบ Strict Type
  const response = await verifyDocumentAction(id)

  // 🛡️ SECURITY_CHECK: หากไม่พบข้อมูลเอกสารในสารบบ ให้แสดงหน้า 404 ทันที
  if (!response.success || !response.documentData) {
    return notFound()
  }

  const { documentData } = response
  const isVerified = documentData.status === 'verified'

  return (
    <div className="min-h-screen bg-[#FAFAF9] px-4 py-16 font-thai sm:px-6">
      <div className="mx-auto max-w-3xl">
        
        {/* 🧭 NAVIGATION: ปุ่มย้อนกลับเพื่อความราบรื่นของผู้ใช้ */}
        <Link
          href="/verify"
          className="group mb-10 inline-flex items-center text-[10px] font-black uppercase italic tracking-widest text-slate-400 transition-colors hover:text-[#020617] font-sans"
        >
          <ArrowLeft size={14} className="mr-2 transition-transform group-hover:-translate-x-1" />
          Back_to_Portal
        </Link>

        {/* 🎫 HEADER_SECTION: Identity & Integrity (High-Contrast Style) */}
        <div className="mb-0 border-4 border-[#020617] bg-[#020617] p-8 text-[#FCDE09] shadow-[8px_8px_0px_0px_rgba(2,6,23,0.1)]">
          <div className="flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1 w-6 bg-[#FCDE09]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70 font-sans">Official_Record</span>
              </div>
              <h1 className="text-4xl font-black uppercase italic leading-none tracking-tighter font-sans md:text-5xl">
                Pass_Verification
              </h1>
              <div className="mt-4 inline-flex items-center gap-2 bg-white/10 px-3 py-1 font-mono text-[10px] opacity-80">
                <span>REF_ID:</span>
                <span>{documentData.ticketId}</span>
              </div>
            </div>
            <div className="bg-[#FCDE09] p-3 text-[#020617]">
              <ShieldCheck className="h-10 w-10" />
            </div>
          </div>
        </div>

        {/* 🛡️ MAIN_RESULT: ส่วนแสดงข้อมูลที่ผ่านการตรวจสอบแล้ว */}
        <div className="relative overflow-hidden border-x-4 border-b-4 border-[#020617] bg-white p-8 md:p-12">
          {/* Background Watermark เพื่อความไว้วางใจได้ */}
          <ShieldCheck className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 -rotate-12 text-slate-50 opacity-[0.05]" />

          <div className="relative z-10 grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <section>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans">
                  Subject_Owner
                </label>
                <div className="flex items-center gap-3">
                  <div className="bg-slate-50 p-2 border border-slate-100">
                    <User size={20} className="text-[#020617]" />
                  </div>
                  <span className="text-2xl font-black uppercase italic tracking-tight text-[#020617] font-sans">
                    {documentData.owner}
                  </span>
                </div>
              </section>

              <section>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans">
                  Service_Catalog
                </label>
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-slate-400" />
                  <span className="font-bold text-[#020617]">{documentData.service}</span>
                </div>
              </section>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans">
                    Issue_Date
                  </label>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
                    <Calendar size={16} className="text-slate-300" />
                    {new Date(documentData.issuedAt).toLocaleDateString('th-TH', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans">
                    Verification_Status
                  </label>
                  <Badge
                    className={`rounded-none border-2 px-3 py-1 font-mono text-[10px] font-bold uppercase ${
                      isVerified 
                        ? 'border-green-600 bg-green-50 text-green-600' 
                        : 'border-red-600 bg-red-50 text-red-600'
                    }`}
                  >
                    ● {documentData.status}
                  </Badge>
                </div>
              </div>
            </div>

            {/* 🎯 THE_STAMP: การยืนยันตัวตนดิจิทัล */}
            <div className="flex justify-center md:justify-end">
              {/* ✅ FIXED: นำ ticketId ออกเพื่อให้ตรงกับ AuditStampProps (แก้ไข TS2322) */}
              <AuditStamp
                status={documentData.status}
                date={new Date(documentData.issuedAt).toISOString()}
              />
            </div>
          </div>

          <Separator className="my-10 h-[2px] bg-slate-100" />

          {/* 🔍 FOOTER_LOG: Metadata สำหรับการตรวจสอบย้อนกลับ */}
          <div className="flex flex-col justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-tighter text-slate-400 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-50 px-2 py-1">
                <Activity size={12} className="text-green-500" />
                <span>Protocol: {documentData.protocol || 'SSL_SECURE_V4'}</span>
              </div>
              <span className={isVerified ? "text-green-600" : "text-red-600"}>
                Integrity_Check: {isVerified ? 'PASSED' : 'FAILED'}
              </span>
            </div>
            <div className="text-slate-300">
              Timestamp: {new Date().toISOString()}
            </div>
          </div>
        </div>

        {/* 📢 DISCLAIMER */}
        <p className="mt-8 text-center text-[9px] font-bold uppercase leading-relaxed tracking-[0.2em] text-slate-300 font-sans">
          This document is electronically verified by JP_VisualDocs. <br />
          Official Audit Stamp ensures the data integrity at the time of inquiry.
        </p>
      </div>
    </div>
  )
}
