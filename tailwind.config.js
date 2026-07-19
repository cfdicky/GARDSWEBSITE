/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF4FF',
          100: '#DBE6FE',
          200: '#BFD4FE',
          300: '#93B4FC',
          400: '#5B8DEF',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          300: '#C4A6F7',
          400: '#9B6BF2',
          500: '#7C3AED',
          600: '#6C2CD9',
        },
        accent: {
          DEFAULT: '#38BDF8',
          400: '#38BDF8',
          500: '#0EA5E9',
        },
        light: '#F8FAFC',
        dark: '#0F172A',
        ink: {
          DEFAULT: '#0F172A',
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#64748B',
          500: '#475569',
          600: '#334155',
          700: '#1E293B',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(15, 23, 42, 0.12)',
        'soft-lg': '0 20px 60px -15px rgba(37, 99, 235, 0.25)',
        glass: '0 8px 32px 0 rgba(15, 23, 42, 0.1)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(124,58,237,0.1) 100%)',
        'aurora': 'radial-gradient(60% 60% at 20% 20%, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0) 60%), radial-gradient(50% 50% at 80% 30%, rgba(124,58,237,0.3) 0%, rgba(124,58,237,0) 60%), radial-gradient(50% 60% at 50% 90%, rgba(56,189,248,0.25) 0%, rgba(56,189,248,0) 60%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(8deg)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1)' },
          '50%': { transform: 'translate(3%, -3%) scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        aurora: 'aurora 14s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'scroll-dot': 'scroll-dot 1.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
