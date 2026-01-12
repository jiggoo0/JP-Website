/** @format */
import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Info, ShieldCheck, Clock, FileText, Globe } from 'lucide-react'

/**
 * 🛰️ UI_PROTOCOL: WIKI_EXECUTIVE_SUMMARY_BOX
 * VERSION: 1.0.2 (Production_Ready)
 * ✅ Strategy: สรุปข้อมูลที่ถูกต้องและไว้วางใจได้ เพื่อการตรวจสอบที่รวดเร็ว
 * 📂 Location: components/wiki/WikiInfobox.tsx
 */

interface InfoboxRowProps {
  label: string
  value: React.ReactNode
  icon?: React.ReactNode
}

// 🧩 INTERNAL_COMPONENT: จัดวางข้อมูลแต่ละแถวให้ตรวจสอบได้ง่าย
const InfoboxRow = ({ label, value, icon }: InfoboxRowProps) => (
  <div className="flex flex-col gap-1 py-3">
    <dt className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
      {icon && <span className="text-slate-300">{icon}</span>}
      {label}
    </dt>
    <dd className="text-sm font-bold text-[#020617]">{value}</dd>
  </div>
)

// 🛠️ INTERNAL_UTILITY: ไอคอนแสดงระดับความยากในสไตล์ Industrial
const ActivityIcon = ({ size }: { size?: number }) => (
  <svg
    width={size || 16}
    height={size || 16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)

interface WikiInfoboxProps {
  data: {
    title: string
    category: string
    lastUpdated: string
    difficulty?: string
    estimatedReadTime: string
    author?: string
    protocolVersion?: string
  }
}

const WikiInfobox = ({ data }: WikiInfoboxProps) => {
  return (
    <Card className="sticky top-24 w-full shrink-0 overflow-hidden rounded-none border-4 border-[#020617] bg-white shadow-[8px_8px_0px_0px_#020617] lg:w-80">
      {/* 📟 HEADER: ระบุชื่อเอกสารและประเภท */}
      <div className="bg-[#020617] p-5 text-[#FCDE09]">
        <div className="mb-2 flex items-center gap-2">
          <Info size={14} className="opacity-70" />
          <span className="text-[9px] font-black uppercase italic tracking-[0.3em]">
            Information_Portal
          </span>
        </div>
        <h3 className="text-xl font-black uppercase italic leading-[1.1] tracking-tighter">
          {data.title}
        </h3>
      </div>

      <div className="divide-y-2 divide-slate-50 p-5">
        <InfoboxRow
          label="Category"
          value={
            <Badge className="rounded-none border-none bg-[#FCDE09] px-2 py-0.5 text-[10px] font-black text-[#020617] shadow-[2px_2px_0px_0px_#020617] hover:bg-[#FCDE09]">
              {data.category}
            </Badge>
          }
          icon={<Globe size={12} />}
        />

        {data.difficulty && (
          <InfoboxRow
            label="Complexity"
            value={data.difficulty}
            icon={<ActivityIcon size={12} />}
          />
        )}

        <InfoboxRow
          label="Est_Read_Time"
          value={data.estimatedReadTime}
          icon={<Clock size={12} />}
        />

        <InfoboxRow label="Last_Audit" value={data.lastUpdated} icon={<ShieldCheck size={12} />} />

        <InfoboxRow
          label="System_Standard"
          value={
            <span className="border border-slate-100 bg-slate-50 px-2 py-1 font-mono text-[11px] italic">
              {data.protocolVersion || 'v3.3.1-STABLE'}
            </span>
          }
          icon={<FileText size={12} />}
        />
      </div>

      {/* 📜 FOOTER: ข้อมูลยืนยันความถูกต้อง */}
      <div className="flex items-center justify-between border-t-2 border-slate-100 bg-slate-50 p-4">
        <p className="font-mono text-[8px] font-bold uppercase tracking-widest text-slate-400">
          JP_KNOWLEDGE_ARCHIVE
        </p>
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 bg-[#020617]" />
          <div className="h-1.5 w-1.5 bg-[#FCDE09]" />
        </div>
      </div>
    </Card>
  )
}

// 🏛️ EXPORT_PROTOCOL: บรรทัดสำคัญที่สุดเพื่อแก้ปัญหา Import Error
export default WikiInfobox
