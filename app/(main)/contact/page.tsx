/** @format */
'use client'

import React, { useState } from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin, ShieldCheck, Clock } from 'lucide-react'

/**
 * 🛰️ VIEW_PROTOCOL: CONTACT_CENTRAL_COMMUNICATION
 * VERSION: 1.1.2 (Type_Stability_Fixed)
 * ✅ ROLE: ช่องทางการติดต่อสื่อสารและขอความช่วยเหลืออย่างเป็นทางการ
 * ✅ STRATEGY: Zero_Friction, High_Visibility, Prompt_Response
 * 📂 Location: app/(main)/contact/page.tsx
 */

export default function ContactPage() {
  // 🛡️ สถานะสำหรับการจำลองข้อมูลเอกสาร (กรณีมีการอ้างอิงผ่าน Contact)
  // FIXED: แก้ไข Enum ให้ตรงกับระบบตรวจสอบ (Fix TS2367)
  const [mockDocStatus] = useState<'verified' | 'pending' | 'rejected'>('verified')
  const isVerified = mockDocStatus === 'verified'

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-thai">
      {/* 🏛️ HEADER_SECTION: ความโปร่งใสและการเข้าถึง */}
      <section className="border-b-4 border-[#020617] bg-[#020617] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 font-sans text-5xl font-black uppercase italic tracking-tighter md:text-7xl">
            Contact_Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            หากคุณมีข้อสงสัยเกี่ยวกับกระบวนการตรวจสอบเอกสาร หรือต้องการความช่วยเหลือทางเทคนิค
            ทีมงานผู้เชี่ยวชาญพร้อมสนับสนุนคุณทันที
          </p>
        </div>
      </section>

      <main className="container mx-auto -mt-12 px-4 pb-24">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* 📬 FORM_SECTION: แบบฟอร์มติดต่อ */}
          <div className="lg:col-span-7">
            <div className="border-4 border-[#020617] bg-white p-8 shadow-[12px_12px_0px_0px_#020617] md:p-12">
              <div className="mb-8 border-l-4 border-[#FCDE09] pl-4">
                <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-[#020617]">
                  Inquiry_Form
                </h2>
                <p className="text-sm text-slate-500">
                  กรุณากรอกข้อมูลให้ครบถ้วนเพื่อกระบวนการที่รวดเร็ว
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* 📞 INFO_SECTION: ข้อมูลการติดต่อ */}
          <div className="space-y-8 lg:col-span-5">
            <div className="border-4 border-[#020617] bg-[#FCDE09] p-8 shadow-[8px_8px_0px_0px_rgba(2,6,23,0.1)]">
              <h3 className="mb-6 font-sans text-xl font-black uppercase italic tracking-tighter text-[#020617]">
                Official_Channels
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#020617] p-2 text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-black uppercase tracking-widest text-slate-600">
                      Email_Support
                    </p>
                    <p className="font-bold text-[#020617]">support@jp-visualdocs.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#020617] p-2 text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-black uppercase tracking-widest text-slate-600">
                      Hotline
                    </p>
                    <p className="font-bold text-[#020617]">+66 2 123 4567 (จันทร์-ศุกร์)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#020617] p-2 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-black uppercase tracking-widest text-slate-600">
                      Global_HQ
                    </p>
                    <p className="font-bold text-[#020617]">Bangkok Digital District, Thailand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🛡️ TRUST_BADGE: ตอกย้ำความปลอดภัย */}
            <div className="border-4 border-[#020617] bg-white p-8">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className={isVerified ? 'text-green-600' : 'text-red-600'} size={28} />
                <span className="font-sans text-lg font-black uppercase tracking-tighter text-[#020617]">
                  Secure_Protocol_Active
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                ทุกข้อมูลที่ส่งผ่านฟอร์มนี้จะถูกเข้ารหัสด้วยมาตรฐาน SSL_SECURE_V4
                และถูกจัดการตามนโยบาย Zero-Knowledge เพื่อความเป็นส่วนตัวสูงสุด
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <Clock size={14} />
                <span>Response Time: &lt; 24 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
