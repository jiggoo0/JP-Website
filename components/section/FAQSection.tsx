/** @format */
'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqData } from '@/data/faqData'
import { HelpCircle, MessageSquareQuote, ShieldQuestion } from 'lucide-react'

/**
 * 🛰️ SYSTEM_PROTOCOL: FAQ_SECTION_ENGINE
 * VERSION: 1.0.3 (Clarity_Focus)
 * ✅ Purpose: แสดงรายการคำถามที่ตรวจสอบได้บ่อยเพื่อความไว้วางใจได้
 * ✅ Strategy: ใช้ High-Contrast Design เพื่อเน้นย้ำความชัดเจนของข้อมูล
 */

export default function FAQSection() {
  // 🛡️ DATA_VALIDATION: ตรวจสอบข้อมูลก่อนแสดงผลเพื่อให้ระบบราบรื่น
  if (!faqData || faqData.length === 0) {
    return (
      <div className="border-4 border-dashed border-slate-200 p-8 text-center">
        <p className="text-xs font-black uppercase tracking-widest text-slate-300">
          No_System_Knowledge_Records_Found
        </p>
      </div>
    )
  }

  return (
    <div className="font-thai">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
        {/* 📝 SECTION_TITLE_UNIT: ส่วนระบุหัวข้อที่ตรวจสอบได้ */}
        <div className="space-y-6 lg:w-1/3">
          <div className="inline-flex bg-[#020617] p-4 text-[#FCDE09] shadow-[6px_6px_0px_0px_rgba(252,222,9,0.3)]">
            <ShieldQuestion size={32} />
          </div>
          <div className="space-y-3">
            <h2 className="text-4xl font-black uppercase italic leading-none tracking-tighter text-[#020617]">
              FAQ <br />
              <span className="text-slate-400">Database</span>
            </h2>
            <p className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.2em] text-slate-400">
              คำถามที่พบบ่อยเกี่ยวกับระบบตรวจสอบ <br />
              และมาตรฐานข้อมูล Protocol v3.3.1
            </p>
          </div>

          <div className="border-l-8 border-[#020617] bg-white p-6 text-sm italic leading-relaxed text-slate-600 shadow-sm">
            <MessageSquareQuote className="mb-3 fill-[#FCDE09] text-[#FCDE09]" size={24} />
            "ความโปร่งใสคือรากฐานของความเชื่อมั่น
            เราจึงรวบรวมทุกข้อสงสัยเพื่อให้คุณมั่นใจในทุกขั้นตอน"
          </div>
        </div>

        {/* 🛠️ ACCORDION_UNIT: รายการคำถาม-ตอบที่เข้าถึงได้ง่าย */}
        <div className="lg:w-2/3">
          <Accordion type="single" collapsible className="w-full space-y-5">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-4 border-[#020617] bg-white px-6 transition-all data-[state=open]:-translate-x-1 data-[state=open]:-translate-y-1 data-[state=open]:shadow-[10px_10px_0px_0px_#FCDE09]"
              >
                <AccordionTrigger className="group py-7 hover:no-underline">
                  <div className="flex items-center gap-5 text-left">
                    <span className="shrink-0 bg-[#020617] px-2 py-0.5 font-mono text-[10px] font-black tracking-tighter text-[#FCDE09]">
                      REF_{(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-lg font-black uppercase italic leading-tight tracking-tight text-[#020617] transition-colors group-hover:text-slate-600">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="border-t-2 border-slate-50 pb-8 pt-6 leading-loose text-slate-600">
                  <div className="flex gap-5">
                    <div className="mt-1.5 h-fit shrink-0 bg-[#FCDE09] p-1">
                      <HelpCircle className="text-[#020617]" size={16} />
                    </div>
                    <div className="space-y-4">
                      <p className="text-sm font-medium italic leading-relaxed">{faq.answer}</p>
                      {/* ✅ Feedback Tag เพื่อความไว้วางใจได้ */}
                      <div className="inline-flex items-center gap-2 border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-emerald-700">
                        Verified_Answer
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* 🔍 DISCOVERY_FOOTER: ช่องทางสนับสนุนที่ราบรื่น */}
          <div className="mt-12 border-t border-dashed border-slate-200 pt-8 text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              ไม่พบคำตอบที่คุณต้องการ?
            </p>
            <a
              href="/contact"
              className="mt-2 inline-block px-1 text-[11px] font-black uppercase tracking-widest text-[#020617] underline decoration-[#FCDE09] decoration-4 underline-offset-4 transition-all hover:bg-[#FCDE09]"
            >
              ติดต่อสอบถามทีมงานโดยตรง // Get_Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
