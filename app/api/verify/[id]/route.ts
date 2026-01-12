/** @format */
import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server' // ใช้ Client ที่เราตั้งค่าไว้แล้ว

/**
 * 🛰️ API_PROTOCOL: DOCUMENT_FETCH_GATEWAY
 * VERSION: 1.0.2
 * ✅ ROLE: ให้บริการข้อมูลเอกสารผ่าน JSON API พร้อมระบบ Security Masking
 */

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }, // Next.js 15 แนะนำให้ใช้ Promise สำหรับ params
) {
  try {
    const { id } = await params
    const supabase = await createClient()

    // 🔍 QUERY: ค้นหาข้อมูลจากตาราง leads โดยใช้รหัส ticket_id ใน JSONB
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .contains('metadata', { ticket_id: id })
      .single()

    if (error || !data) {
      return NextResponse.json(
        { error: 'ENTRY_NOT_FOUND', message: 'ไม่พบรหัสเอกสารในระบบ' },
        { status: 404 },
      )
    }

    // 🛡️ SECURITY_MASKING: ปิดบังข้อมูลส่วนบุคคลตามมาตรฐาน PDPA
    const maskName = (name: string) => {
      const parts = name.trim().split(' ')
      if (parts.length < 1) return '***'
      const first = parts[0][0] + 'xxxx'
      const last = parts.length > 1 ? ' ' + parts[parts.length - 1][0] + 'xxxx' : ''
      return first + last
    }

    return NextResponse.json({
      success: true,
      data: {
        ticket_id: data.metadata?.ticket_id || id,
        owner: data.name ? maskName(data.name) : 'ไม่ระบุชื่อ',
        category: data.category,
        status: data.status,
        issued_at: data.created_at,
        protocol: data.metadata?.protocol_version || 'SECURE_V4',
      },
    })
  } catch (err) {
    console.error('API_GATEWAY_ERROR:', err)
    return NextResponse.json({ error: 'INTERNAL_SERVER_ERROR' }, { status: 500 })
  }
}
