/** @format */
'use server'

import { createClient } from '@/lib/supabase/server'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

/**
 * 🛰️ ACTION_PROTOCOL: VERIFY_DOCUMENT_IDENTITY
 * VERSION: 1.2.1 (Production_Ready_Integrity)
 * ✅ ROLE: ตรวจสอบความถูกต้องและทำ Data Masking เพื่อความปลอดภัย
 * 📂 Location: app/actions/verify-actions.ts
 */

interface DocumentMetadata {
  ticket_id?: string
  protocol_version?: string
  verification_node?: string
  issuer_signature?: string
}

interface LeadRecord {
  name: string
  category: string
  status: string
  metadata: DocumentMetadata
  created_at: string
}

export interface VerifyResponse {
  success: boolean
  documentData?: {
    ticketId: string
    owner: string
    service: string
    issuedAt: string
    status: 'verified' | 'pending' | 'rejected'
    protocol: string
  }
  error?: string
}

// 🛡️ HELPER: ฟังก์ชันสำหรับปิดบังข้อมูลส่วนบุคคล (PDPA Compliance)
function maskName(name: string): string {
  const parts = name.trim().split(' ')
  if (parts.length < 1) return '***'

  const mask = (s: string) => s[0] + 'x'.repeat(Math.max(s.length - 1, 3))

  if (parts.length === 1) return mask(parts[0])
  return `${mask(parts[0])} ${mask(parts[parts.length - 1])}`
}

export async function verifyDocumentAction(ticketId: string): Promise<VerifyResponse> {
  try {
    if (!ticketId || ticketId.trim() === '') {
      return { success: false, error: 'MISSING_TICKET_ID' }
    }

    const supabase = await createClient()

    // 🔍 QUERY: ค้นหาด้วย ticket_id ภายใน metadata
    const { data, error: dbError }: PostgrestSingleResponse<LeadRecord> = await supabase
      .from('leads')
      .select('name, category, status, metadata, created_at')
      .contains('metadata', { ticket_id: ticketId })
      .single()

    if (dbError || !data) {
      return { success: false, error: 'INVALID_TICKET_ID' }
    }

    // 🛡️ SECURITY_AUDIT: บันทึกประวัติการตรวจสอบ (Optional - สามารถเพิ่มตาราง audit_logs ได้)
    // await supabase.from('audit_logs').insert({ action: 'VERIFY', target: ticketId })

    const mappedStatus = (dbStatus: string): 'verified' | 'pending' | 'rejected' => {
      const s = dbStatus.toLowerCase()
      if (['verified', 'completed', 'approved', 'active'].includes(s)) return 'verified'
      if (['rejected', 'invalid', 'failed', 'expired'].includes(s)) return 'rejected'
      return 'pending'
    }

    return {
      success: true,
      documentData: {
        ticketId: data.metadata.ticket_id || ticketId,
        owner: maskName(data.name), // ✅ ส่งข้อมูลที่ Mask แล้วออกไปเท่านั้น
        service: data.category,
        issuedAt: data.created_at,
        status: mappedStatus(data.status),
        protocol: data.metadata.protocol_version || 'SSL_SECURE_V4',
      },
    }
  } catch (error: unknown) {
    console.error('🚨 CRITICAL_FAILURE:', error)
    return { success: false, error: 'SYSTEM_VERIFICATION_ERROR' }
  }
}
