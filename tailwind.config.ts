import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-forest': '#0F2A22',
        'deep-moss': '#12352A', 
        'olive': '#3E593F',
        'sand': '#C9BFAF',
        'off-white': '#F2F3EE',
        'copper': '#B07A36',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Times New Roman', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          md: '2rem',
          lg: '2.5rem',
          xl: '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px', 
          lg: '1024px',
          xl: '1200px',
          '2xl': '1400px',
        },
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        // Mobile-first breakpoints
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'laptop-l': '1440px',
        'desktop': '2560px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '104': '26rem',
        '128': '32rem',
      },
      keyframes: {
        ambientFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        waveFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1', 
            transform: 'translateY(0)'
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 0 0 rgba(176,122,54,0.45)' },
          '70%': { boxShadow: '0 0 0 14px rgba(176,122,54,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(176,122,54,0)' }
        },
        ripple: {
          '0%': { transform: 'scale(0.85)', opacity: '0.6' },
          '70%': { transform: 'scale(1.15)', opacity: '0' },
          '100%': { transform: 'scale(1.15)', opacity: '0' }
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        'ambient-float': 'ambientFloat 6s ease-in-out infinite',
        'wave-flow': 'waveFlow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        shimmer: 'shimmer 3.5s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        ripple: 'ripple 3.4s ease-out infinite',
        'gradient-x': 'gradientX 8s ease-in-out infinite'
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
