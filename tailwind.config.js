/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#080808',
          900: '#080808',
          800: '#0b0b0b',
          700: '#111111',
          600: '#161616',
          500: '#1c1c1c',
          400: '#222222',
        },
        bone: {
          DEFAULT: '#F5F5F5',
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E8E8E8',
          400: '#A1A1A1',
          500: '#777777',
        },
        accent: {
          DEFAULT: '#FF2E2E',
          400: '#FF5A5A',
          500: '#FF2E2E',
          600: '#E02020',
          700: '#B01818',
          800: '#8B0000',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
