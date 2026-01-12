/** @format */
import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AuditStamp } from '@/components/ui/audit-stamp'
import { User, Fingerprint, Calendar, ShieldCheck, Hash, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 🛰️ VIEW_PROTOCOL: VERIFICATION_RESULT_CARD
 * VERSION: 1.3.1 (Fixed Syntax & Layout Refinement)
 * ✅ Strategy: Clear Information Hierarchy & Authority Presence
 */

interface ResultData {
  id: string
  fullName: string
  category: string
  status: 'verified' | 'pending' | 'rejected'
  issuedAt: string
  expiryDate?: string
  identificationNumber: string
}

interface ResultCardProps {
  data: ResultData
}

export const ResultCard = ({ data }: ResultCardProps) => {
  return (
    <Card className="w-full overflow-hidden rounded-none border-4 border-[#020617] bg-white shadow-[16px_16px_0px_0px_rgba(2,6,23,1)] transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(2,6,23,1)]">
      {/* 🟦 TOP_HEADER: IDENTITY_STRIP */}
      <div className="flex flex-col items-start justify-between gap-4 bg-[#020617] p-6 text-white md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#FCDE09] p-2 text-[#020617]">
            <Fingerprint size={28} />
          </div>
          <div>
            <h2 className="font-sans text-2xl font-black uppercase italic leading-none tracking-tighter">
              Identity_Report
            </h2>
            <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Ref_ID: {data.id}
            </p>
          </div>
        </div>
        <Badge className="rounded-none border-none bg-[#FCDE09] px-4 py-1 font-black uppercase italic text-[#020617] hover:bg-[#FCDE09]/90">
          {data.category}
        </Badge>
      </div>

      <div className="flex flex-col gap-10 p-8 md:p-10 lg:flex-row">
        {/* 📄 DATA_CONTENT_ZONE */}
        <div className="flex-1 space-y-8">
          {/* Section: Basic Info */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-1">
              <label className="flex items-center gap-1 font-sans text-[10px] font-black uppercase text-slate-400">
                <User size={12} /> Full_Name_Archive
              </label>
              <p className="font-thai text-xl font-black uppercase italic text-[#020617]">
                {data.fullName}
              </p>
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-1 font-sans text-[10px] font-black uppercase text-slate-400">
                <Hash size={12} /> Registration_Number
              </label>
              <p className="font-mono text-xl font-bold text-[#020617]">
                {data.identificationNumber}
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-slate-100" />

          {/* Section: Temporal Data */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-1">
              <label className="flex items-center gap-1 font-sans text-[10px] font-black uppercase text-slate-400">
                <Calendar size={12} /> Date_Of_Issue
              </label>
              <p className="font-mono text-lg font-bold text-[#020617]">{data.issuedAt}</p>
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-1 font-sans text-[10px] font-black uppercase text-slate-400">
                <ShieldCheck size={12} /> Expiry_Term
              </label>
              <p
                className={cn(
                  'font-mono text-lg font-bold uppercase',
                  data.status === 'verified' ? 'text-[#020617]' : 'text-red-500',
                )}
              >
                {data.expiryDate || 'N/A'}
              </p>
            </div>
          </div>

          {/* 🔍 COMPLIANCE_NOTICE */}
          <div className="flex items-start gap-3 border-l-4 border-[#FCDE09] bg-slate-50 p-4">
            <FileText size={20} className="mt-0.5 shrink-0 text-slate-400" />
            <p className="font-thai text-[11px] font-medium uppercase leading-relaxed text-slate-500">
              เอกสารนี้ถูกตรวจสอบผ่านการเข้ารหัส 256-bit และได้รับรองสถานะตามมาตรฐาน JP Protocol
              v3.3.1 ข้อมูลมีความถูกต้อง ณ เวลาที่ตรวจสอบเท่านั้น
            </p>
          </div>
        </div>

        {/* 🏛️ AUTHORITY_STAMP_ZONE */}
        <div className="flex min-w-[240px] flex-col items-center justify-center lg:border-l lg:border-slate-100 lg:pl-10">
          <AuditStamp
            status={data.status}
            date={data.issuedAt}
            className="scale-110 transition-transform duration-500 md:scale-125"
          />
          <div className="mt-8 text-center">
            <p className="font-mono text-[9px] uppercase leading-tight tracking-[0.2em] text-slate-400">
              Verification_Node_JP-01
            </p>
            <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#059669]">
              Digital_Signature_Applied
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
