import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0F4C81',
          50: '#EEF4FB',
          100: '#D6E4F2',
          200: '#A9C5E2',
          300: '#7CA5D2',
          400: '#4F86C2',
          500: '#2C6AAA',
          600: '#0F4C81',
          700: '#0C3D67',
          800: '#082E4E',
          900: '#051F34',
        },
        gold: {
          DEFAULT: '#F59E0B',
          50: '#FEF5E7',
          100: '#FDE9C8',
          200: '#FBD58E',
          300: '#F9C055',
          400: '#F7AC1F',
          500: '#F59E0B',
          600: '#D17F06',
          700: '#9F6005',
          800: '#6D4103',
          900: '#3B2302',
        },
        ink: {
          DEFAULT: '#1F2937',
          soft: '#4B5563',
          muted: '#6B7280',
        },
        canvas: '#FAFAF7',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '28px',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.08)',
        'soft-lg': '0 20px 60px rgba(0,0,0,0.12)',
        gold: '0 10px 40px rgba(245,158,11,0.25)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0F4C81 0%, #082E4E 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D17F06 100%)',
        'hero-overlay':
          'linear-gradient(180deg, rgba(8,46,78,0.25) 0%, rgba(8,46,78,0.55) 60%, rgba(8,46,78,0.85) 100%)',
      },
      transitionTimingFunction: {
        elegant: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      letterSpacing: {
        'widest-2': '0.22em',
      },
    },
  },
  plugins: [],
};

export default config;
