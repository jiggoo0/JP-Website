/** @format */
'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext, type SlotProps } from 'input-otp'
import { Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * 🛰️ UI_PROTOCOL: SECURE_OTP_ENTRY
 * VERSION: 1.1.0 (Type_Stability_Fixed)
 * ✅ ROLE: จัดการการกรอกรหัสยืนยันตัวตน (2FA/Verification Code)
 * ✅ STRATEGY: High_Visibility, Industrial_Focus, Zero_Lag
 * 📂 Location: components/ui/input-otp.tsx
 */

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName,
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
))
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)

  // 🛡️ TYPE_GUARD: แก้ไขปัญหา TS18046 โดยการตรวจสอบ Context และทำ Type Assertion
  const slot = inputOTPContext?.slots[index] as SlotProps | undefined

  if (!slot) return null

  const { char, hasFakeCaret, isActive } = slot

  return (
    <div
      ref={ref}
      className={cn(
        // 🏛️ BASE_STYLES: ดีไซน์ช่องกรอกแบบเหลี่ยมเข้มข้น
        'relative flex h-14 w-12 items-center justify-center border-2 border-[#020617] bg-white font-mono text-xl font-black transition-all',
        // ⚡ ACTIVE_STATE: เน้นช่องที่กำลังกรอกด้วยสีเหลืองแบรนด์
        isActive && 'z-10 border-[#FCDE09] ring-2 ring-[#FCDE09]/20',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-6 w-1 bg-[#020617] duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus className="text-[#020617]" />
  </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
