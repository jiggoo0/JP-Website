/** @format */
'use server'

import { createClient } from '@/lib/supabase/server'
import { PostgrestSingleResponse } from '@supabase/supabase-js'

/**
 * 🛰️ ACTION_PROTOCOL: VERIFY_DOCUMENT_IDENTITY
 * VERSION: 1.2.0 (Full_Strict_Type_Safe)
 * ✅ ROLE: ตรวจสอบความถูกต้องของเอกสารผ่านระบบฐานข้อมูลมาตรฐาน JP-VisualDocs
 * ✅ STRATEGY: Explicit_Type_Contract, Metadata_Integrity
 * 📂 Location: app/actions/verify-actions.ts
 */

// 🛡️ DEFINITION: โครงสร้าง Metadata ภายในฐานข้อมูล (Traceable Structure)
interface DocumentMetadata {
  ticket_id?: string
  protocol_version?: string
  verification_node?: string
  issuer_signature?: string
}

// 🛡️ DEFINITION: โครงสร้างข้อมูล Lead จาก Supabase
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

/**
 * 🛰️ CORE_FUNCTION: ทำการตรวจสอบ Ticket ID กับฐานข้อมูลกลาง
 * แก้ไขปัญหา 'Unexpected any' (ESLint Error) อย่างสมบูรณ์
 */
export async function verifyDocumentAction(ticketId: string): Promise<VerifyResponse> {
  try {
    // 1. Validation: ตรวจสอบความถูกต้องเบื้องต้นของ Input
    if (!ticketId || ticketId.trim() === '') {
      return { success: false, error: 'MISSING_TICKET_ID' }
    }

    const supabase = await createClient()

    /**
     * 🔍 QUERY_STRATEGY: JSONB_CONTAINMENT
     * ค้นหาข้อมูลโดยใช้เงื่อนไขภายในก้อน JSON เพื่อความปลอดภัยสูงสุด
     */
    const { data, error: dbError }: PostgrestSingleResponse<LeadRecord> = await supabase
      .from('leads')
      .select('name, category, status, metadata, created_at')
      .contains('metadata', { ticket_id: ticketId })
      .single()

    // 2. Handling Response: หากไม่พบข้อมูลหรือเกิดข้อผิดพลาด
    if (dbError || !data) {
      console.warn(`⚠️ VERIFY_ATTEMPT_FAILED: Invalid Token [${ticketId}]`)
      return { success: false, error: 'INVALID_TICKET_ID' }
    }

    // 3. Status Mapping: แปลง Internal Status เป็น UI-Ready Status
    const mappedStatus = (dbStatus: string): 'verified' | 'pending' | 'rejected' => {
      const s = dbStatus.toLowerCase()
      if (s === 'verified' || s === 'completed' || s === 'approved') return 'verified'
      if (s === 'rejected' || s === 'invalid' || s === 'failed') return 'rejected'
      return 'pending'
    }

    // 4. Traceable Response: ส่งออกข้อมูลที่ผ่านการตรวจสอบแล้ว
    return {
      success: true,
      documentData: {
        ticketId: data.metadata.ticket_id || ticketId,
        owner: data.name,
        service: data.category,
        issuedAt: data.created_at,
        status: mappedStatus(data.status),
        protocol: data.metadata.protocol_version || 'SSL_SECURE_V4',
      },
    }
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'UNKNOWN_SYSTEM_ERROR'
    console.error('🚨 VERIFY_CRITICAL_FAILURE:', errorMessage)

    return {
      success: false,
      error: 'SYSTEM_VERIFICATION_ERROR',
    }
  }
}
