/** @format */
import React from 'react'
import Link from 'next/link'
// 🛰️ นำเข้าข้อมูลและคอมโพเนนต์ส่วนกลางเพื่อความถูกต้องและตรวจสอบได้
import { mainNavLinks, footerLinks } from '@/lib/links'
import Logo from '@/components/logo'
import { Mail, Phone, MapPin, Globe, ArrowUpRight, Github, Twitter, Activity } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

/**
 * 🛰️ SYSTEM_PROTOCOL: FOOTER_TERMINAL_INTERFACE
 * VERSION: 1.3.0 (Component Integration & Optimization)
 * ✅ Strategy: รักษามาตรฐานความโปร่งใสที่ตรวจสอบได้ และเข้าถึงง่าย
 */

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t-8 border-[#FCDE09] bg-[#020617] pb-10 pt-20 font-thai text-white">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* 🏛️ BRAND_IDENTITY_UNIT: ข้อมูลที่บ่งบอกถึงความไว้วางใจได้ */}
          <div className="space-y-6">
            <Logo variant="light" showTagline={false} iconSize={28} />
            <p className="text-xs font-medium uppercase leading-relaxed text-slate-400">
              ศูนย์กลางการจัดการเอกสารและตรวจสอบอัตลักษณ์ ที่ให้ผลลัพธ์ **ถูกต้อง** และรวดเร็ว
              ภายใต้มาตรฐานความปลอดภัยระดับสูง <br />
              <span className="font-black italic text-white">PROTOCOL_V3.3.1</span>
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="#"
                className="transition-colors hover:text-[#FCDE09]"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link href="#" className="transition-colors hover:text-[#FCDE09]" aria-label="Github">
                <Github size={18} />
              </Link>
              <Link
                href="#"
                className="transition-colors hover:text-[#FCDE09]"
                aria-label="Website"
              >
                <Globe size={18} />
              </Link>
            </div>
          </div>

          {/* 🔗 QUICK_ACCESS_HUB: กระบวนการนำทางที่ราบรื่น */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase italic tracking-widest text-[#FCDE09]">
              Main_Navigation
            </h4>
            <nav className="flex flex-col gap-3 text-xs font-bold uppercase tracking-tight">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-1 transition-all hover:translate-x-1 hover:text-[#FCDE09]"
                >
                  <ArrowUpRight size={14} className="text-[#FCDE09]" /> {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* ⚖️ LEGAL_PROTOCOL: มาตรฐานความโปร่งใสที่ตรวจสอบได้ */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase italic tracking-widest text-[#FCDE09]">
              Compliance_Docs
            </h4>
            <nav className="flex flex-col gap-3 text-xs font-bold uppercase tracking-tight">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 📞 COMMAND_CENTER_CONTACT: ข้อมูลติดต่อที่ชัดเจนและสุภาพ */}
          <div className="space-y-6 border-l-2 border-[#FCDE09] bg-white/5 p-6">
            <h4 className="text-sm font-black uppercase italic tracking-widest text-[#FCDE09]">
              Secure_Contact
            </h4>
            <div className="space-y-4 font-mono text-[10px] font-bold uppercase tracking-wider text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="shrink-0 text-[#FCDE09]" />
                <span>
                  Industrial District, Sector 7 <br />
                  Bangkok, TH 10XXX
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#FCDE09]" />
                <span>+66 (0) 2-XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#FCDE09]" />
                <span className="lowercase">ops@jpvisuals.online</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10" />

        {/* 📜 COPYRIGHT_ZONE: การยืนยันสถานะระบบที่ไว้วางใจได้ */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            © {currentYear} JP_VISUALS_DOCS // สิทธิการใช้งานถูกต้องตามกฎหมาย
          </p>
          <div className="flex items-center gap-8 text-[9px] font-black uppercase italic tracking-widest text-slate-500">
            <span className="flex items-center gap-2">
              <Activity size={12} className="animate-pulse text-green-500" />
              System_Live: Encryption_Active
            </span>
            <span className="hidden border-l border-white/10 pl-8 sm:inline">
              Build_Node: v1.5.1-STABLE
            </span>
          </div>
        </div>
      </div>

      {/* 🧩 BACKGROUND_DECORATION: ตอกย้ำอัตลักษณ์อย่างสุภาพ */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 -mb-10 -mr-10 select-none opacity-[0.03]">
        <h2 className="text-[15rem] font-black italic leading-none text-white">JP</h2>
      </div>
    </footer>
  )
}
