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
