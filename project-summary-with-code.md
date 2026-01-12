# 📑 รายงานสรุปโปรเจกต์และบริบท AI (Full Context)

_สร้างเมื่อ: 2026-01-12 17:33:04_

> **Status:** Fresh Scan | รวมข้อมูลวิเคราะห์ Route & Code

## 🔴 1. สถานะสุขภาพโปรเจกต์ล่าสุด

✅ **READY FOR DEPLOY** (ผ่านการตรวจสอบทุกขั้นตอน)

### 📍 Production Route Map

````text
```text
Route (app)                                 Size  First Load JS
┌ ○ /                                      135 B         174 kB
├ ○ /_not-found                            146 B         102 kB
├ ƒ /api/verify/[id]                       146 B         102 kB
├ ○ /contact                             3.99 kB         125 kB
├ ○ /legal/privacy                         146 B         102 kB
├ ○ /legal/refund                          146 B         102 kB
├ ○ /legal/terms                           146 B         102 kB
├ ○ /manifest.webmanifest                  146 B         102 kB
├ ƒ /pass/[id]                           2.82 kB         153 kB
├ ○ /robots.txt                            146 B         102 kB
├ ○ /security                              146 B         102 kB
├ ○ /sitemap.xml                           146 B         102 kB
├ ○ /verify                              3.36 kB         127 kB
├ ƒ /verify/[id]                         3.34 kB         127 kB
├ ○ /wiki                                11.6 kB         125 kB
└ ƒ /wiki/[slug]                         1.68 kB         115 kB
+ First Load JS shared by all             102 kB
  ├ chunks/184-1ade366ae9681126.js       45.6 kB
  ├ chunks/73ff4069-0d76bd41846f2242.js  54.2 kB
  └ other shared chunks (total)          1.93 kB
○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
````

````

## 📊 2. สถิติไฟล์แบ่งตามนามสกุล
```text
     43 tsx
     18 ts
      6 jpg
      4 sh
      3 png
      1 svg
      1 ico
      1 css
````

## 📁 3. โครงสร้างโฟลเดอร์ (Tree)

```text
📂 app
  📂 api
    📂 verify
      📂 [id]
        📄 route.ts
  📂 (main)
    📂 verify
      📂 [id]
        📄 page.tsx
      📄 page.tsx
    📂 wiki
      📂 [slug]
        📄 page.tsx
      📄 page.tsx
    📂 contact
      📄 page.tsx
    📄 layout.tsx
    📄 loading.tsx
    📄 page.tsx
    📂 security
      📄 page.tsx
  📂 actions
    📄 verify-actions.ts
    📄 wiki-actions.ts
  📂 pass
    📂 [id]
      📄 page.tsx
  📄 globals.css
  📄 layout.tsx
  📄 manifest.ts
  📄 not-found.tsx
  📄 providers.tsx
  📄 robots.ts
  📄 sitemap.ts
  📂 legal
    📂 privacy
      📄 page.tsx
    📂 terms
      📄 page.tsx
    📄 layout.tsx
    📂 refund
      📄 page.tsx
📂 components
  📂 verify
    📄 SearchBar.tsx
    📄 StatusBadge.tsx
    📄 ResultCard.tsx
  📂 wiki
    📄 ArticleCard.tsx
    📄 WikiCategory.tsx
    📄 TableOfContent.tsx
    📄 WikiInfobox.tsx
  📂 layout
    📄 WikiLayout.tsx
  📂 section
    📄 HeroVerify.tsx
    📄 FAQSection.tsx
    📄 KnowledgeGrid.tsx
  📂 ui
    📄 badge.tsx
    📄 button.tsx
    📄 card.tsx
    📄 input.tsx
    📄 separator.tsx
    📄 sonner.tsx
    📄 audit-stamp.tsx
    📄 input-otp.tsx
    📄 accordion.tsx
    📄 textarea.tsx
    📄 skeleton.tsx
  📄 Footer.tsx
  📄 Header.tsx
  📂 contact
    📄 ContactForm.tsx
  📄 logo.tsx
📂 lib
  📂 supabase
    📄 server.ts
  📄 seo-utils.ts
  📄 utils.ts
  📄 fonts.ts
  📄 links.ts
📂 scripts
  📄 generate-ai-context.ts
  📂 dev
    📄 backup-project.sh
    📄 project-summary.sh
    📄 tree-projects.sh
  📄 pre-deploy-check.sh
📂 public
  📂 images
    📂 wiki
      📄 visa-verification-guide.jpg
      📄 imm-system.jpg
      📄 finance-srv.jpg
      📄 card-replication.jpg
      📄 doc-reconstruct.jpg
    📄 verification-shield.svg
  📄 favicon.ico
  📄 apple-touch-icon.png
  📄 og-image.jpg
  📄 icon-512x512.png
  📄 icon-192x192.png
📂 data
  📄 wikiData.ts
  📄 faqData.ts
  📂 wiki
    📄 finance.ts
    📄 immigration.ts
    📄 documentation.ts
    📄 systems.ts
📂 config
```

## 📄 4. เนื้อหาโค้ดและบริบททางเทคนิค

#### 🔍 Path: ai-context.md

```markdown
#!/usr/bin/env ts-node
/\*\*

- AI-Context Auto-Generator + Template
- ***
- Prepend strict AI-Context block to all .tsx pages/components
- JP-VisualDocs – Global Page Template
  \*/

import fs from 'fs'
import path from 'path'
import glob from 'glob'

// CONFIG
const PROJECT\*ROOT = process.cwd()
const FILE_PATTERN = '\*\*/\_.tsx'
const VERSION = '2026.1.12'

// Utility: Convert file path to page/component name
const getPageName = (filePath: string) => {
const base = path.basename(filePath, '.tsx')
return base.replace(/\[|\]/g, '') || 'UnknownPage'
}

// Generate AI-Context block
const generateContext = (pageName: string) => {
const timestamp = new Date().toISOString()
return `/\*
🛰️ AI-CONTEXT: JP-VisualDocs – Global Page Template
@version ${VERSION}
@timestamp ${timestamp}
🛑 STRICT MODE: AI must follow rules exactly, no interpretation allowed
✅ Tone: Professional, Calm, Supportive
✅ Output must use Strategic Keywords only: Evidence-Based, Digital Integrity, Seamless Process, Trust by Design
✅ Reject speculative, unverifiable, or invented content

📌 PAGE METADATA

- PageName: ${pageName} // ตัวอย่าง: ShowcasePage, ServicesPage
- Role: [PAGE_ROLE_HERE] // ตัวอย่าง: Document Hub, Service Portal
- Version: ${VERSION}
- Checked: True
- Audience: Internal & End-user
- Purpose: [SHORT_DESCRIPTION_HERE] // ตัวอย่าง: แสดงสถานะเอกสาร, ให้บริการ workflow

🧩 1. CORE MISSION

- Platform: JP-VisualDocs – High-End Documentation Hub
- Supported Documents: Visa, Financial, Certificates, Business Docs
- Value: Integrity, Efficiency, Trustworthiness
- Outcome: เอกสารต้องตรวจสอบย้อนกลับและรับรองผลได้ทันที
- Real-Time Feedback: Mandatory

🎨 2. DESIGN & UX PRINCIPLES

- Style: Modern Enterprise Minimal
- Colors:
  - primary: #0F172A
  - secondary: #1E293B
  - accent: #059669
  - background: #FAFAF9
- Typography:
  - Font-Sans: H1-H2
  - Font-Thai: Body Text
  - Font-Mono: IDs, Logs
- UI Components:
  - Glassmorphism for Cards/Certificates
  - Micro-interactions via Framer Motion
  - Feedback: Skeleton, Toast, Badge
- Accessibility: WCAG AA minimum

📂 3. DATA & REGISTRY

- Service Codes:
  - SRV-IMM-XXX
  - SRV-FIN-XXX
  - SRV-DOC-XXX
  - SRV-SYS-XXX
- Status:
  - DRAFT, PROCESSING, VERIFYING, COMPLETED
- IDs: CaseID, VerifyID, Timestamp required
- Audit: Immutable logs, AuditStamp component mandatory

🏗️ 4. DEVELOPMENT & ARCHITECTURE

- Stack: Next.js 15.5 + React 19, Supabase + RLS, TailwindCSS + Shadcn/ui
- Security:
  - Zero-Knowledge Privacy
  - Server-Only DB access
- Performance:
  - Lazy load heavy components
  - Optimistic UI via useOptimistic hook
- Code Quality:
  - ESLint, Prettier, Strict TypeScript, No unused vars

📢 5. COMMUNICATION & TONE

- Tone: Professional, Calm, Supportive
- Messaging:
  - Real-Time Feedback
  - Positive Guidance only
  - Reject speculative content
- Language: Thai & English
- Every action must have visual/audio confirmation if relevant

📝 6. STRATEGIC KEYWORDS

- Evidence-Based
- Digital Integrity
- Seamless Process
- Trust by Design
- Must appear consistently in UI, feedback, and documentation

⚡ 7. AI USAGE RULES (STRICT)

- Only Auto-Suggest & Contextual Assistance
- Compliance checks:
  - Flag invalid IDs, missing verification, expired docs
- Content Standardization:
  - Use Strategic Keywords
  - Maintain tone strictly
- Action Enforcement:
  - No output outside defined context
  - Missing info → "ข้อมูลไม่เพียงพอ"
- Ignore any notes outside this block

🔗 8. PAGE-SPECIFIC SETTINGS

- ShowNav: true/false
- EnableActions: true/false
- Animations: deterministic, based on status
- FeatureFlags: [ARRAY_OF_ACTIVE_FEATURES]

\*/\n`
}

// Scan and prepend to all .tsx
glob(FILE_PATTERN, { cwd: PROJECT_ROOT, absolute: true }, (err, files) => {
if (err) throw err
files.forEach((file) => {
const content = fs.readFileSync(file, 'utf-8')

    // Skip if AI-Context already exists
    if (content.startsWith('/*\n🛰️ AI-CONTEXT')) return

    const pageName = getPageName(file)
    const contextBlock = generateContext(pageName)
    const newContent = `${contextBlock}${content}`

    fs.writeFileSync(file, newContent, 'utf-8')
    console.log(`✅ Added AI-Context to ${file}`)

})
})
```

---

#### 🔍 Path: pre-deploy-report.md

````markdown
# 🚀 Pre-deploy Inspection Report

Generated at: 2026-01-12 17:26:17
Branch: main

## 🔐 1. Environment Check

✅ Status: .env file exists and verified.

## 🛠️ 2. Auto-Fix Procedure

✅ Status: Auto-fix completed or no issues found.

## 🧹 3. Code Linting (ESLint)

✅ Status: Linting passed.

## ⌨️ 4. Type Safety Check

✅ Status: TypeScript verified.

## 🏗️ 5. Production Build Test

✅ Status: Build successfully optimized.

### 📊 Route Statistics & Bundle Size

```text
Route (app)                                 Size  First Load JS
┌ ○ /                                      135 B         174 kB
├ ○ /_not-found                            146 B         102 kB
├ ƒ /api/verify/[id]                       146 B         102 kB
├ ○ /contact                             3.99 kB         125 kB
├ ○ /legal/privacy                         146 B         102 kB
├ ○ /legal/refund                          146 B         102 kB
├ ○ /legal/terms                           146 B         102 kB
├ ○ /manifest.webmanifest                  146 B         102 kB
├ ƒ /pass/[id]                           2.82 kB         153 kB
├ ○ /robots.txt                            146 B         102 kB
├ ○ /security                              146 B         102 kB
├ ○ /sitemap.xml                           146 B         102 kB
├ ○ /verify                              3.36 kB         127 kB
├ ƒ /verify/[id]                         3.34 kB         127 kB
├ ○ /wiki                                11.6 kB         125 kB
└ ƒ /wiki/[slug]                         1.68 kB         115 kB
+ First Load JS shared by all             102 kB
  ├ chunks/184-1ade366ae9681126.js       45.6 kB
  ├ chunks/73ff4069-0d76bd41846f2242.js  54.2 kB
  └ other shared chunks (total)          1.93 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```
````

---

## 🏆 Summary Result

### ✅ READY FOR DEPLOY

All protocols verified: Lint passed, Types safe, and Build successful. Deployment is highly recommended.

````
---

#### 🔍 Path: app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/**
 * 🛰️ STYLE_PROTOCOL: GLOBAL_CORE_SYSTEM
 * VERSION: 2.2.0 (Branding Alignment, Thai Support & Print Optimized)
 * ✅ Theme: ถูกต้อง, ตรวจสอบได้, กระบวนการราบรื่น
 * ✅ Strategy: Neubrutalism Design กับการจัดการ Output สำหรับงานเอกสาร
 */

@layer base {
  :root {
    /* 🏛️ CORE_VARIABLES (Light Mode) - JP Palette */
    --background: 40 33% 98%; /* #FAFAF9 */
    --foreground: 222.2 84% 4.9%; /* #020617 */

    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;

    --primary: 222.2 47.4% 11.2%; /* #020617 */
    --primary-foreground: 48 96% 52%; /* #FCDE09 Yellow */

    --secondary: 48 96% 52%; /* #FCDE09 Yellow */
    --secondary-foreground: 222.2 47.4% 11.2%;

    /* 🛡️ Accent สำหรับสถานะ VERIFIED/SUCCESS */
    --accent: 161 94% 30%; /* #059669 Green */
    --accent-foreground: 0 0% 100%;

    --border: 222.2 47.4% 11.2%; /* บังคับขอบเข้มเพื่อความชัดเจน */
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;

    --radius: 0px; /* Neubrutalism: ใช้เหลี่ยมมุมเพื่อความดุดัน */
  }

  /* 🏛️ TYPOGRAPHY & INTERFACE */
  * {
    @apply border-border;
  }

  body {
    @apply bg-background font-thai text-foreground antialiased;
    font-feature-settings:
      'rlig' 1,
      'calt' 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-black uppercase italic leading-none tracking-tighter;
  }
}

@layer components {
  /* 🛡️ NEUBRUTALISM_COMPONENTS */
  .border-heavy {
    @apply border-4 border-primary shadow-[8px_8px_0px_0px_rgba(2,6,23,0.1)];
  }

  .btn-industrial {
    @apply flex items-center justify-center gap-2 bg-primary px-6 py-3 font-black uppercase italic text-secondary shadow-[6px_6px_0px_0px_rgba(252,222,9,1)] transition-all hover:opacity-90 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none;
  }

  /* 📑 AUDIT_STAMP_VISUAL */
  .audit-badge {
    @apply border-2 border-dashed border-primary/30 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary/60;
  }
}

/* 🖨️ PRINT_PROTOCOL: OPTIMIZED_DOCUMENT_OUTPUT */
@media print {
  /* ซ่อนปุ่มนำทาง ส่วนประกอบ UI และพื้นหลังที่ไม่จำเป็น */
  nav,
  button,
  .no-print,
  footer:not(.article-footer),
  a[href='/verify'] {
    display: none !important;
  }

  /* ปรับพื้นหลังให้เป็นสีขาวสะอาดตาเพื่อประหยัดหมึก */
  body {
    background: white !important;
    padding: 0 !important;
    color: black !important;
  }

  .min-h-screen {
    min-height: auto !important;
    padding: 20px !important;
  }

  /* รักษาความชัดเจนของขอบและเส้นแบ่ง */
  .border-4 {
    border-width: 2px !important;
    border-color: #000 !important;
  }

  .border-x-4,
  .border-b-4 {
    border-width: 0 2px 2px 2px !important;
    border-color: #000 !important;
  }

  /* บังคับให้พิมพ์สีพื้นหลัง (เช่น Header สีดำ) ให้ยังคงความถูกต้อง */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* จัดตำแหน่งให้อยู่กลางหน้ากระดาษ A4 */
  .mx-auto {
    margin: 0 auto !important;
    max-width: 100% !important;
  }

  /* ปิด Watermark เพื่อให้ข้อมูลอ่านง่ายที่สุด */
  .pointer-events-none {
    display: none !important;
  }
}

/* 📊 CUSTOM_SCROLLBAR */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  @apply bg-background;
}
::-webkit-scrollbar-thumb {
  @apply rounded-none bg-primary;
}
````

---

#### 🔍 Path: app/layout.tsx

```typescript
/** @format */
import type { Metadata, Viewport } from 'next'
// 🛰️ นำเข้าฟอนต์จากศูนย์กลางเพื่อให้ตรวจสอบได้ง่าย
import { inter, thaiFont, monoFont } from '@/lib/fonts'
import './globals.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/**
 * 🛰️ SYSTEM_PROTOCOL: ROOT_ARCHITECTURE
 * VERSION: 1.6.3 (Domain Migration & Website Alignment)
 * ✅ Strategy: ปรับปรุงข้อมูลพื้นฐานให้ตรงกับโดเมนตรวจสอบเอกสาร (Website)
 */

export const metadata: Metadata = {
  title: {
    default: 'JP Visual Docs | ระบบตรวจสอบและคลังความรู้เอกสาร',
    template: '%s | JP Visual Docs',
  },
  description:
    'แพลตฟอร์มศูนย์กลางการตรวจสอบเอกสารและคลังความรู้สำคัญ มาตรฐานระบบ Protocol v3.3.1 สำหรับ jpvisouldocs.website',
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://jpvisouldocs.website', // 🌐 อัปเดต URL ใหม่
    siteName: 'JP Visual Docs Website',
    images: [
      {
        url: '/og-image.jpg', // 📸 อัปเดตตามไฟล์ที่มีในโครงสร้าง (og-image.jpg)
        width: 1200,
        height: 630,
        alt: 'JP Visual Docs Verification Portal',
      },
    ],
  },
  // 🛰️ ตรวจสอบค่า NEXT_PUBLIC_SITE_URL ใน .env ให้เป็น https://jpvisouldocs.website
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jpvisouldocs.website'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#020617',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <body
        className={cn(
          'min-h-screen bg-[#FAFAF9] font-thai antialiased selection:bg-[#FCDE09] selection:text-[#020617]',
          // 🏛️ ผสมผสานตัวแปรฟอนต์ทั้งหมดเข้าด้วยกัน
          inter.variable,
          thaiFont.variable,
          monoFont.variable,
        )}
      >
        <Providers>
          {/* ♿ Skip to Content เพื่อมาตรฐาน WCAG AA */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:bg-[#FCDE09] focus:p-4 focus:font-black focus:uppercase focus:italic focus:text-[#020617]"
          >
            ข้ามไปที่เนื้อหาหลัก (Skip to Content)
          </a>

          <div className="relative flex min-h-screen flex-col">
            <Header />

            <main id="main-content" className="flex-1 outline-none">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
```

---

#### 🔍 Path: scripts/generate-ai-context.ts

```typescript
#!/usr/bin/env ts-node
/**
 * JP-VisualDocs AI-Context Auto-Generator (TypeScript + ESM)
 * ------------------------------------------------------------
 * Prepend full Thai AI-Context block to all .tsx pages/components
 * เพิ่มคำเตือนห้ามใช้คำหุ่นยนต์/บริหาร เช่น กลยุทธ์, ศูนย์ปฏิบัติการ
 * Compatible: Node 25+, ESM mode
 */

import fs from 'fs'
import path from 'path'
import { glob } from 'glob' // glob ESM แบบ Promise-ready

// CONFIG
const PROJECT_ROOT = process.cwd()
const FILE_PATTERN = '**/*.tsx'

// เวอร์ชัน context
const VERSION = '2026.1.12'

// ฟังก์ชันช่วย: แปลง path เป็นชื่อหน้า
const getPageName = (filePath: string) => {
  const base = path.basename(filePath, '.tsx')
  return base.replace(/\[|\]/g, '') || 'UnknownPage'
}

// ฟังก์ชันช่วย: สร้าง AI-Context block ภาษาไทยเต็มรูปแบบ พร้อมคำเตือนห้ามใช้คำหุ่นยนต์
const generateContext = (pageName: string) => {
  const timestamp = new Date().toISOString()
  return `/*
🛰️ AI-CONTEXT: JP-VisualDocs – Global Page Template
@version ${VERSION}
@timestamp ${timestamp}
🛑 กฎเข้มงวด: AI ต้องทำตามนี้เท่านั้น ไม่ตีความเพิ่ม
✅ โทน: มืออาชีพ สุภาพ ช่วยเหลือ
✅ ใช้คำสำคัญเชิงกลยุทธ์เท่านั้น: ตรวจสอบได้, ถูกต้อง, กระบวนการราบรื่น, ไว้วางใจได้
✅ ห้ามสร้างข้อมูลที่คาดเดาหรือไม่สามารถตรวจสอบได้

⚠️ ห้ามใช้คำหรือโทนที่ฟังดูหุ่นยนต์/บริหารจัดเต็ม เช่น:
- "กลยุทธ์", "ศูนย์ปฏิบัติการ", "Operation Hub", "Strategic", "Leverage" , "ภารกิจ" 
- หลีกเลี่ยงศัพท์เทคนิคจัดเต็มหรือคำบริหารที่อ่านยาก
- ต้องใช้ภาษาที่คนทุกฐานะเข้าใจ แต่ยังคงมืออาชีพ

📌 ข้อมูลหน้าปัจจุบัน
- ชื่อหน้า: ${pageName}
- บทบาทของหน้า: [PAGE_ROLE_HERE]
- ผู้รับผิดชอบ: [AUTHOR_NAME_HERE]
- ทีม: [TEAM_NAME_HERE]
- เวอร์ชัน: ${VERSION}
- ตรวจสอบแล้ว: ✅
- กลุ่มผู้ชม: ทีมงานภายใน & ผู้ใช้งานทั่วไป
- จุดประสงค์: [SHORT_DESCRIPTION_HERE]
- Environment: production/staging/development
- URL ตัวอย่าง: [PAGE_URL_HERE]

🧩 1. ภารกิจหลัก
- แพลตฟอร์มจัดการเอกสารสำคัญแบบมืออาชีพ
- รองรับเอกสาร: วีซ่า, การเงิน, ใบรับรอง, เอกสารธุรกิจ
- คุณค่า: ถูกต้อง รวดเร็ว ไว้วางใจได้
- ผลลัพธ์: เอกสารตรวจสอบย้อนกลับได้ รับรองผลทันที
- Feedback แบบเรียลไทม์: ต้องมี

🎨 2. การออกแบบ & ประสบการณ์ผู้ใช้
- สไตล์: เรียบ มืออาชีพ โปร่งใส
- สีหลัก: primary #0F172A, secondary #1E293B, accent #059669, background #FAFAF9
- ฟอนต์: Sans หัวข้อ, Thai เนื้อหา, Mono รหัส/Log
- UI: การ์ดโปร่งแสง, แอนิเมชันเล็กๆ, Feedback (Skeleton, Toast, Badge)
- การเข้าถึง: รองรับมาตรฐาน WCAG AA

📂 3. ข้อมูล & การลงทะเบียน
- รหัสบริการ: SRV-IMM-XXX, SRV-FIN-XXX, SRV-DOC-XXX, SRV-SYS-XXX
- สถานะเอกสาร: DRAFT, PROCESSING, VERIFYING, COMPLETED
- ต้องมี: CaseID, VerifyID, Timestamp
- Audit: บันทึกไม่แก้ไขได้, ต้องมี AuditStamp component
- Data Sensitivity: Low/Medium/High
- Privacy Notes: Zero-Knowledge enforced
- Audit Required: true/false

🏗️ 4. พัฒนา & สถาปัตยกรรม
- เทคโนโลยี: Next.js + React, Supabase + RLS, TailwindCSS + Shadcn/ui
- ความปลอดภัย: ข้อมูลสำคัญไม่ถูกเปิดเผย, Database เข้าถึงได้เฉพาะ Server
- ประสิทธิภาพ: โหลดชิ้นส่วนหนักแบบ Lazy, ใช้ Optimistic UI
- คุณภาพโค้ด: ESLint, Prettier, Strict TypeScript, ไม่มีตัวแปรไม่ได้ใช้
- Dependencies: [ARRAY_OF_DEPENDENCIES]

📢 5. การสื่อสาร & โทน
- โทน: มืออาชีพ สุภาพ ช่วยเหลือ
- ข้อความ: แจ้งผลทันที, คำแนะนำชัดเจน, ห้ามคาดเดา
- ภาษา: ไทย & อังกฤษ
- ทุกการกระทำต้องมี feedback เห็นหรือฟังได้

📝 6. คำสำคัญเชิงกลยุทธ์
- ตรวจสอบได้
- ถูกต้อง
- กระบวนการราบรื่น
- ไว้วางใจได้
- ต้องปรากฏใน UI, feedback, เอกสาร

⚡ 7. กฎการใช้งาน AI (STRICT)
- ช่วยเสนอขั้นตอนถัดไปและตรวจสอบ context เท่านั้น
- ตรวจสอบ ID, การยืนยัน, เอกสารหมดอายุ
- ปฏิบัติตามโทนและคำสำคัญเคร่งครัด
- หากขาดข้อมูล → แสดง "ข้อมูลไม่เพียงพอ"
- Expected User Actions: [ARRAY_OF_ACTIONS]
- Expected System Feedback: [ARRAY_OF_FEEDBACKS]

📈 8. การวัดผล & Monitoring
- Metrics: LoadTime, UserClicks, FormSubmissions
- Tracking: Enabled/Disabled

🛠️ 9. การจัดการข้อผิดพลาด & Fallback
- ErrorHandling: Skeleton/Toast/ErrorPage
- Fallback: DefaultContent/Redirect

🔗 10. การตั้งค่าเฉพาะหน้า
- แสดงเมนู: true/false
- เปิดการกระทำ: true/false
- แอนิเมชัน: deterministic ตาม status
- ฟีเจอร์พิเศษ: [ARRAY_OF_ACTIVE_FEATURES]

*/
`
}

// MAIN
async function run() {
  try {
    const files = await glob(FILE_PATTERN, { cwd: PROJECT_ROOT, absolute: true })

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8')

      // ข้ามไฟล์ที่มี AI-Context แล้ว
      if (content.startsWith('/*\n🛰️ AI-CONTEXT')) continue

      const pageName = getPageName(file)
      const contextBlock = generateContext(pageName)
      const newContent = `${contextBlock}${content}`

      fs.writeFileSync(file, newContent, 'utf-8')
      console.log(`✅ Added AI-Context to ${file}`)
    }
  } catch (err) {
    console.error('❌ Error:', err)
    process.exit(1)
  }
}

run()
```

---

#### 🔍 Path: tailwind.config.ts

```typescript
/** @format */
import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/**
 * 🛰️ CONFIG_PROTOCOL: UI_FOUNDATION_SYSTEM
 * VERSION: 2.1.1 (Optimized Plugins & Font Integration)
 * ✅ Strategy: ทุกขั้นตอนตรวจสอบได้ เพื่อความไว้วางใจได้ของระบบ
 */

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // 🏛️ เพิ่มการตั้งค่าฟอนต์เพื่อให้ระบบแสดงผลได้ถูกต้องตามสถาปัตยกรรม
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        thai: ['var(--font-thai)', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        none: '0',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'stamp-in': {
          '0%': { transform: 'scale(2)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'stamp-in': 'stamp-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#334155', // Slate-700 เพื่อความสบายตา
            h1: {
              fontWeight: '900',
              textTransform: 'uppercase',
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              color: '#020617',
            },
            h2: {
              fontWeight: '800',
              borderLeftWidth: '6px', // หนาขึ้นเพื่อความชัดเจน
              borderLeftColor: '#FCDE09',
              paddingLeft: '1rem',
              color: '#020617',
            },
            strong: {
              color: '#020617',
              fontWeight: '700',
            },
            code: {
              backgroundColor: '#f1f5f9',
              padding: '0.2rem 0.4rem',
              borderRadius: '0px', // ให้เข้ากับสไตล์ Industrial
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [tailwindAnimate, typography], // ✅ แก้ไขความซ้ำซ้อนของปลั๊กอิน
}

export default config
```

---

#### 🔍 Path: tsconfig.json

```json
/** @format */
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/app/*": ["app/*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"],
      "@/actions/*": ["app/actions/*"],
      "@/data/*": ["data/*"],
      "@/public/*": ["public/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

#### 🔍 Path: package.json

```json
{
  "name": "JP-Website",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^4.1.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slot": "^1.2.4",
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.48.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.5.2",
    "framer-motion": "^12.0.6",
    "glob": "^13.0.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.474.0",
    "next": "15.5.7",
    "next-themes": "^0.4.4",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "react-hook-form": "^7.54.2",
    "resend": "^4.1.2",
    "sonner": "^1.7.4",
    "tailwind-merge": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "uuid": "^11.0.5",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@eslint/js": "^9.19.0",
    "@next/eslint-plugin-next": "15.1.6",
    "@tailwindcss/typography": "^0.5.16",
    "@types/node": "^22.13.1",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@typescript-eslint/eslint-plugin": "^8.23.0",
    "@typescript-eslint/parser": "^8.23.0",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.19.0",
    "eslint-config-next": "15.1.6",
    "eslint-plugin-react": "^7.37.4",
    "eslint-plugin-react-hooks": "^5.1.0",
    "postcss": "^8.5.1",
    "postcss-load-config": "^6.0.1",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.7.3"
  }
}
```

---

#### 🔍 Path: next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ไม่มี options ที่ไม่รองรับ
}

export default nextConfig
```

---

#### 🔍 Path: components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

---

#### 🔍 Path: .env

```text
# = "********"
# Supabase Client (Public - ใช้ใน Browser / Next.js Client)
# = "********"

# 🌐 เปลี่ยนจาก .online เป็น .website เพื่อให้สอดคล้องกับโดเมนหลักของโปรเจกต์นี้
NEXT_PUBLIC_BASE_URL= "********"

NEXT_PUBLIC_SUPABASE_URL= "********"
NEXT_PUBLIC_SUPABASE_ANON_KEY= "********"

# = "********"
# Supabase Server (Secret - ใช้ใน Server Actions / API Routes)
# = "********"
SUPABASE_URL= "********"
# Key ที่ถูกต้อง (251 ตัวอักษร) สำหรับ Service Role
SUPABASE_SERVICE_ROLE_KEY= "********"
SUPABASE_JWT_SECRET= "********"

# = "********"
# NextAuth (ถ้ามีการใช้งาน SSO ข้ามโดเมน)
# = "********"
NEXTAUTH_URL= "********"
NEXTAUTH_SECRET= "********"

# = "********"
# PostgreSQL Database URLs & Credentials
# = "********"
# มั่นใจว่า URL ที่ซับซ้อนถูกคร่อมด้วยอัญประกาศคู่เสมอ
POSTGRES_URL= "********"
POSTGRES_URL_NON_POOLING= "********"
POSTGRES_PRISMA_URL= "********"

# Credentials
POSTGRES_USER= "********"
POSTGRES_PASSWORD= "********"
POSTGRES_HOST= "********"
POSTGRES_DATABASE= "********"

# = "********"
# Application Settings (FIXED & REQUIRED for new code)
# = "********"

# 1. รหัสลับสำหรับตรวจสอบสิทธิ์ Admin (รักษาค่าเดิมไว้เพื่อความซิงค์ข้ามระบบ)
ADMIN_SECRET_ID_TOKEN= "********"

# 2. API Key สำหรับการออกเอกสาร
ADMIN_API_KEY= "********"

# 3. ชื่อ Bucket สำหรับจัดเก็บไฟล์ (อ้างอิง Bucket เดียวกันเพื่อให้ดึงไฟล์มาแสดงผลได้)
SUPABASE_BUCKET_NAME= "********"

# = "********"
# Site Specific Settings
# = "********"
# ใช้สำหรับการ Generate Sitemap และ Metadata
NEXT_PUBLIC_SITE_URL= "********"
RESEND_API_KEY= "********"
NEXT_PUBLIC_APP_URL= "********"
```

---

## 📝 บทสรุป

การสแกนเสร็จสิ้น ข้อมูลถูกจัดรูปแบบให้ AI ประมวลผลได้ทันที
. Format code in: Optimized
