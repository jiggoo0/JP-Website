/** @format */
import React from 'react'
import { RefreshCcw, ShieldCheck, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react'

/*
🛰️ AI-CONTEXT: JP-VisualDocs – Refund Policy Page
@version 2026.1.12
✅ โทน: สุภาพ ชัดเจน เป็นธรรม
✅ คำสำคัญ: ตรวจสอบได้, ถูกต้อง, กระบวนการราบรื่น, ไว้วางใจได้
*/

export default function RefundPage() {
  const refundSteps = [
    {
      title: 'แจ้งความประสงค์',
      description: 'ติดต่อเจ้าหน้าที่ผ่านช่องทางหลักเพื่อแจ้งรายละเอียดและเหตุผลในการขอรับเงินคืน',
    },
    {
      title: 'ตรวจสอบสถานะงาน',
      description: 'ทีมงานจะตรวจสอบความคืบหน้าของเอกสารและข้อมูลในระบบเพื่อให้ได้ข้อสรุปที่ถูกต้อง',
    },
    {
      title: 'ดำเนินการคืนเงิน',
      description:
        'หากเข้าเงื่อนไข ระบบจะดำเนินการโอนเงินคืนตามช่องทางที่ท่านชำระเข้ามาภายใน 7-14 วันทำการ',
    },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAF9] py-16 font-thai">
      <div className="container mx-auto max-w-4xl px-4">
        {/* ส่วนหัว: นโยบายการคืนเงิน */}
        <header className="mb-12 border-b border-slate-200 pb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-orange-700">
            <RefreshCcw size={18} />
            <span className="text-xs font-bold uppercase tracking-wider">Refund Policy</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
            นโยบายการคืนเงิน
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-slate-500">
            เรามุ่งมั่นที่จะให้บริการที่{' '}
            <span className="font-semibold text-[#0F172A]">ถูกต้อง</span> และมีคุณภาพสูงสุด
            อย่างไรก็ตาม หากเกิดข้อผิดพลาดจากทางระบบหรือบริการ
            เราพร้อมดูแลเพื่อให้ท่านได้รับความยุติธรรมและ{' '}
            <span className="font-semibold text-[#0F172A]">ไว้วางใจได้</span> ในทุกการใช้จ่าย
          </p>
        </header>

        {/* เนื้อหาหลัก: เงื่อนไขการคืนเงิน */}
        <div className="grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-[#0F172A]">
              <CheckCircle2 className="text-[#059669]" /> เงื่อนไขที่สามารถคืนเงินได้
            </h2>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                <span>
                  กรณีระบบไม่สามารถออกเอกสารที่ <strong>ตรวจสอบได้</strong> ตามที่ตกลงกันไว้
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                <span>มีการชำระเงินซ้ำซ้อนจากข้อผิดพลาดของระบบชำระเงิน</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                <span>
                  บริการไม่สามารถดำเนินการให้เสร็จสิ้นตามกรอบเวลาที่แจ้งไว้ (ยกเว้นเหตุสุดวิสัย)
                </span>
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-[#0F172A]">
              <AlertCircle className="text-orange-500" /> ข้อยกเว้นการคืนเงิน
            </h2>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                <span>
                  กรณีงานดำเนินการเสร็จสิ้นและส่งมอบข้อมูลที่ <strong>ถูกต้อง</strong> ครบถ้วนแล้ว
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                <span>การแจ้งยกเลิกหลังจากที่ทีมงานเริ่มกระบวนการจัดทำเอกสารไปแล้วเกิน 50%</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                <span>
                  ความล่าช้าที่เกิดจากการส่งข้อมูลล่าช้าหรือไม่ครบถ้วนจากตัวผู้ใช้บริการเอง
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* ขั้นตอนการขอคืนเงิน */}
        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 md:p-12">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#0F172A]">
            ขั้นตอนการขอคืนเงิน
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {refundSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-bold text-[#0F172A]">
                  {index + 1}
                </div>
                <h3 className="mb-2 font-bold text-[#0F172A]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
                {index < 2 && (
                  <div className="absolute right-[-20%] top-6 hidden w-[40%] border-t-2 border-dashed border-slate-200 md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ส่วนท้าย: ติดต่อสอบถาม */}
        <footer className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-slate-50 p-8 text-center">
          <div className="flex items-center gap-2 text-slate-600">
            <HelpCircle size={20} className="text-[#0F172A]" />
            <span className="font-bold">มีข้อสงสัยเกี่ยวกับนโยบาย?</span>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            ทีมงานของเราพร้อมให้คำปรึกษาเพื่อให้ทุกท่านได้รับประสบการณ์ที่ราบรื่นที่สุด
            หากท่านต้องการความช่วยเหลือเพิ่มเติม สามารถติดต่อฝ่ายบริการลูกค้าได้ตลอดเวลาทำการ
          </p>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <ShieldCheck size={14} className="text-[#059669]" />
            <span>Integrity Guaranteed by JP-VisualDocs</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
