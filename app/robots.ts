/** @format */
import { MetadataRoute } from 'next'

/**
 * 🛰️ METADATA_PROTOCOL: ROBOTS_CONFIG
 * VERSION: 1.0.1 (Production_Ready)
 * ✅ Purpose: กำหนดขอบเขตการเข้าถึงของ Crawler เพื่อความปลอดภัย
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/actions/',    // 🔐 ป้องกันการเข้าถึง Server Actions โดยตรง
        '/lib/',        // 🔐 ป้องกันการ Scan โครงสร้างระบบภายใน
        '/(main)/verify/[id]', // 🔐 ไม่ให้ Search Engine เก็บผลลัพธ์การตรวจสอบส่วนบุคคล
      ],
    },
    sitemap: 'https://your-domain.com/sitemap.xml',
  }
}
