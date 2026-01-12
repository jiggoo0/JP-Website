#!/bin/bash

# สคริปต์สร้างโครงสร้างโปรเจกต์ JP-Website (Knowledge & Verification)
# แก้ไข Syntax เรื่องวงเล็บ (Route Groups) เรียบร้อยแล้ว

echo "🏛️ Starting JP-Website project structure creation..."

# 1. สร้างโฟลเดอร์หลัก (ใช้ "" ครอบเพื่อป้องกัน Error จากวงเล็บ)
mkdir -p "app/(legal)/privacy"
mkdir -p "app/(legal)/terms"
mkdir -p "app/(main)/verify/[id]"
mkdir -p "app/(main)/wiki/[slug]"
mkdir -p "app/(main)/contact"
mkdir -p "app/actions"
mkdir -p "app/pass/[id]"

# 2. สร้างโฟลเดอร์สำหรับ Components
mkdir -p "components/verify"
mkdir -p "components/wiki"
mkdir -p "components/layout"
mkdir -p "components/section"
mkdir -p "components/ui"

# 3. สร้างโฟลเดอร์สำหรับ Lib, Public และ Data
mkdir -p "lib/supabase"
mkdir -p "public/images/wiki"
mkdir -p "data"

# 4. สร้างไฟล์พื้นฐานใน app/
touch "app/favicon.ico" "app/globals.css" "app/layout.tsx" "app/manifest.ts" "app/not-found.tsx" 
touch "app/providers.tsx" "app/robots.ts" "app/sitemap.ts"

# 5. สร้างไฟล์ใน Route Groups
touch "app/(legal)/layout.tsx"
touch "app/(legal)/privacy/page.tsx" "app/(legal)/terms/page.tsx"
touch "app/(main)/layout.tsx" "app/(main)/loading.tsx" "app/(main)/page.tsx"
touch "app/(main)/verify/page.tsx" "app/(main)/verify/[id]/page.tsx"
touch "app/(main)/wiki/page.tsx" "app/(main)/wiki/[slug]/page.tsx"
touch "app/(main)/contact/page.tsx"
touch "app/pass/[id]/page.tsx"

# 6. สร้างไฟล์ใน actions/ (Server Actions)
echo "// Verification logic with Supabase" > "app/actions/verify-actions.ts"
echo "// Wiki search and filter logic" > "app/actions/wiki-actions.ts"

# 7. สร้างไฟล์ใน components/
touch "components/Footer.tsx" "components/Header.tsx"
touch "components/verify/SearchBar.tsx" "components/verify/StatusBadge.tsx" "components/verify/ResultCard.tsx"
touch "components/wiki/ArticleCard.tsx" "components/wiki/WikiCategory.tsx" "components/wiki/TableOfContent.tsx"
touch "components/layout/WikiLayout.tsx"
touch "components/section/HeroVerify.tsx" "components/section/FAQSection.tsx" "components/section/KnowledgeGrid.tsx"

# 8. สร้างไฟล์ UI เฉพาะทาง
touch "components/ui/audit-stamp.tsx" "components/ui/input-otp.tsx"

# 9. สร้างไฟล์ใน lib/, data/ และ public/
touch "lib/supabase/server.ts"
echo "// Schema Markup & JSON-LD Utils" > "lib/seo-utils.ts"
echo "// General utilities" > "lib/utils.ts"
touch "public/images/verification-shield.svg"

echo "// Wiki content & SEO tags data" > "data/wikiData.ts"
echo "// Knowledge base FAQ data" > "data/faqData.ts"

# แสดงผลสำเร็จ
echo "------------------------------------------"
echo "✅ JP-Website structure created successfully!"
echo "------------------------------------------"
ls -R "app/(main)"

