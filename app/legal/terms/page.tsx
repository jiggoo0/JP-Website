/** @format */
import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, Scale, Award, UserCheck, Users } from 'lucide-react'

/*
🛰️ AI-CONTEXT: JP-VisualDocs – Team Page
@version 2026.1.12
✅ โทน: สุภาพ มืออาชีพ เป็นกันเอง
✅ คำสำคัญ: ตรวจสอบได้, ถูกต้อง, กระบวนการราบรื่น, ไว้วางใจได้
*/

interface TeamMember {
  name: string
  role: string
  specialty: string
  certification: string
  code: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'คุณเจ้าป่า',
    role: 'ผู้บริหารและผู้ก่อตั้ง',
    specialty: 'ประสบการณ์ในวงการถือว่ารู้กัน',
    certification: 'การันตีผลงานเข้าสู่ปีที่ 9',
    code: 'Team-01',
  },
  {
    name: 'คุณฐาปกรณ์ สุวินล',
    role: 'ที่ปรึกษากฎหมาย (NAVIGATOR)',
    specialty: 'ระเบียบการเดินทางและกฎหมายเข้าเมือง',
    certification: 'ผู้เชี่ยวชาญด้านกฎหมายและการให้คำปรึกษา',
    code: 'Team-02',
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] px-4 py-20 font-thai sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* 🏛️ ส่วนหัวข้อ: แนะนำทีมงานด้วยความโปร่งใส */}
        <header className="mb-16 border-l-4 border-[#0F172A] pl-8">
          <div className="mb-3 flex items-center gap-2 text-[#059669]">
            <Users size={20} />
            <span className="text-sm font-bold tracking-wide">ทีมงานผู้เชี่ยวชาญ</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            บุคลากรหลักของเรา
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
            พบกับทีมงานที่พร้อมดูแลคุณด้วยความ{' '}
            <span className="font-semibold text-[#0F172A]">ถูกต้อง</span>{' '}
            เราใส่ใจในทุกรายละเอียดเพื่อให้{' '}
            <span className="font-semibold text-[#0F172A]">กระบวนการราบรื่น</span>{' '}
            และสร้างผลลัพธ์ที่ทุกท่านสามารถ{' '}
            <span className="font-semibold text-[#0F172A]">ไว้วางใจได้</span> อย่างแท้จริง
          </p>
        </header>

        {/* 👥 รายชื่อทีมงาน */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-0 transition-all hover:border-[#0F172A] hover:shadow-xl"
            >
              {/* พื้นที่จำลองรูปภาพทีมงาน */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                <div className="absolute right-4 top-4 z-20">
                  <Badge
                    variant="outline"
                    className="rounded-md border-slate-300 bg-white/80 font-mono text-xs text-slate-600 backdrop-blur-sm"
                  >
                    {member.code}
                  </Badge>
                </div>

                <div className="flex h-full flex-col items-center justify-center p-8 text-center text-slate-300">
                  <UserCheck size={60} className="mb-4 opacity-20" />
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    เจ้าหน้าที่ได้รับอนุญาต
                  </span>
                </div>
              </div>

              {/* ข้อมูลรายละเอียดบุคลากร */}
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A]">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#059669]">{member.role}</p>
                </div>

                <div className="space-y-3 border-t border-slate-100 pt-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 text-slate-400 group-hover:text-[#0F172A]"
                    />
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-slate-400">
                        ความเชี่ยวชาญ
                      </span>
                      <span className="text-sm text-slate-600">{member.specialty}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={18} className="mt-0.5 text-slate-400 group-hover:text-[#0F172A]" />
                    <div>
                      <span className="block text-[10px] font-bold uppercase text-slate-400">
                        การรับรอง
                      </span>
                      <span className="text-sm text-slate-600">{member.certification}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* 🛡️ การ์ดคำมั่นสัญญา */}
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50/50 p-8 text-center">
            <Scale size={44} className="mb-6 text-slate-300" />
            <h4 className="mb-2 text-sm font-bold text-slate-500">มาตรฐานบริการมืออาชีพ</h4>
            <p className="text-sm leading-relaxed text-slate-400">
              "เป้าหมายของเราคือการส่งมอบงานที่ตรวจสอบได้จริง
              เพื่อให้ลูกค้าทุกท่านก้าวไปข้างหน้าได้อย่างมั่นใจและไร้อุปสรรค"
            </p>
          </div>
        </div>

        {/* 🏛️ ส่วนสรุปสถิติ */}
        <footer className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'งานที่สำเร็จแล้ว', val: '2,500+' },
            { label: 'ความพึงพอใจ', val: '98.5%' },
            { label: 'ประสบการณ์', val: '10+ ปี' },
            { label: 'เครือข่ายทั่วโลก', val: '15 ประเทศ' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-slate-100 bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="text-3xl font-bold text-[#0F172A]">{stat.val}</div>
              <div className="mt-1 text-xs font-medium text-slate-400">{stat.label}</div>
            </div>
          ))}
        </footer>
      </div>
    </div>
  )
}
