/** @format */
import React from 'react'
// import Image from 'next/image' // ✅ REMOVED: นำออกชั่วคราวจนกว่าจะมีการใช้งานจริงเพื่อเลี่ยง Lint Error
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, Scale, Award, Fingerprint } from 'lucide-react'

/**
 * 🛰️ VIEW_PROTOCOL: TEAM_AUTHORITY_PROFILE
 * ROLE: แสดงข้อมูลทีมงานผู้เชี่ยวชาญและมาตรฐานการดำเนินงาน
 * VERSION: 1.0.1 (Identity_Integrity_Fixed)
 * ✅ Strategy: โปร่งใส, ตรวจสอบได้, ไว้วางใจได้
 * 📂 Location: app/(main)/team/page.tsx
 */

interface TeamMember {
  name: string
  role: string
  specialty: string
  certification: string
  image?: string
  protocol: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'JP_ADMIN',
    role: 'Chief Executive & Founder',
    specialty: 'Case Strategy & Documentation',
    certification: 'Certified Document Specialist',
    image: '/images/team/admin.jpg',
    protocol: 'Auth-01',
  },
  {
    name: 'LEGAL_NAVIGATOR',
    role: 'Senior Consultant',
    specialty: 'Regulatory Compliance & Visa Laws',
    certification: 'Legal Expert (Consulting)',
    image: '/images/team/legal.jpg',
    protocol: 'Auth-02',
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] px-4 py-20 font-thai sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* 🏛️ SECTION_HEADER: การแสดงตัวตนภายใต้มาตรฐานความปลอดภัย */}
        <header className="mb-16 border-l-8 border-[#020617] pl-8">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter text-[#020617] font-sans md:text-6xl">
            Core_Personnel
          </h1>
          <p className="mt-4 max-w-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            ทีมผู้เชี่ยวชาญภายใต้มาตรฐาน Protocol v3.3.1 <br />
            ผู้อยู่เบื้องหลังความถูกต้องและกระบวนการที่ราบรื่นในทุกขั้นตอน
          </p>
        </header>

        {/* 👥 TEAM_GRID: รายชื่อบุคลากรที่ได้รับอนุญาต */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group relative overflow-hidden rounded-none border-4 border-[#020617] bg-white transition-all hover:shadow-[12px_12px_0px_0px_#FCDE09]"
            >
              {/* Image Container: Identity Verification Visual */}
              <div className="relative aspect-[4/5] overflow-hidden border-b-4 border-[#020617] bg-slate-100">
                <div className="absolute inset-0 z-10 bg-[#020617]/5 transition-colors group-hover:bg-transparent" />
                <div className="absolute right-4 top-4 z-20">
                  <Badge className="rounded-none border-2 border-[#020617] bg-[#FCDE09] font-black text-[#020617] font-sans">
                    {member.protocol}
                  </Badge>
                </div>
                
                {/* Identity Placeholder: รักษาความลับจนกว่าจะตรวจสอบสิทธิ์ */}
                <div className="flex h-full flex-col items-center justify-center p-8 text-center text-slate-300">
                  <Fingerprint size={64} className="mb-4 opacity-20" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Identity_Verification_Required
                  </span>
                </div>
              </div>

              {/* Info Container: รายละเอียดความเชี่ยวชาญ */}
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-2xl font-black uppercase italic leading-none text-[#020617] font-sans">
                    {member.name}
                  </h3>
                  <p className="mt-2 inline-block bg-[#020617] px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#FCDE09] font-sans">
                    {member.role}
                  </p>
                </div>

                <div className="space-y-3 border-t-2 border-slate-50 pt-4">
                  <div className="flex items-start gap-3">
                    <Fingerprint size={16} className="mt-0.5 text-[#020617]" />
                    <div>
                      <span className="block text-[9px] font-black uppercase tracking-tighter text-slate-400">Specialty</span>
                      <span className="text-sm font-bold text-[#020617]">{member.specialty}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={16} className="mt-0.5 text-[#020617]" />
                    <div>
                      <span className="block text-[9px] font-black uppercase tracking-tighter text-slate-400">Certification</span>
                      <span className="text-sm font-bold text-[#020617]">{member.certification}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Integrity Mark */}
              <ShieldCheck className="absolute -bottom-6 -right-6 h-24 w-24 opacity-5 transition-opacity group-hover:opacity-10 text-[#020617]" />
            </Card>
          ))}

          {/* 🛡️ TRUST_CARD: คำมั่นสัญญาแห่งความถูกต้อง */}
          <div className="flex min-h-[400px] flex-col items-center justify-center border-4 border-dashed border-slate-200 bg-white/50 p-8 text-center">
            <Scale size={48} className="mb-6 text-slate-300" />
            <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 font-sans">
              Ethical_Consulting_Standard
            </h4>
            <p className="text-xs italic leading-relaxed text-slate-400">
              "เราไม่ได้เพียงจัดการเอกสาร แต่เราสร้างกระบวนการที่ราบรื่น เพื่อมอบผลลัพธ์ที่ไว้วางใจได้ให้กับทุกเคส"
            </p>
          </div>
        </div>

        {/* 🏛️ FOOTER_STATS: ตัวบ่งชี้ความสำเร็จที่ตรวจสอบได้ */}
        <footer className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Cases Verified', val: '2,500+' },
            { label: 'Success Rate', val: '98.5%' },
            { label: 'Years Experience', val: '10+' },
            { label: 'Global Network', val: '15 Nations' },
          ].map((stat) => (
            <div key={stat.label} className="border-b-4 border-[#020617] bg-[#020617] p-8 text-center transition-transform hover:-translate-y-1">
              <div className="text-4xl font-black italic text-[#FCDE09] font-sans">{stat.val}</div>
              <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </footer>
      </div>
    </div>
  )
}
