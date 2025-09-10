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
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px', 
          lg: '1024px',
          xl: '1200px',
        },
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
      },
      animation: {
        'ambient-float': 'ambientFloat 6s ease-in-out infinite',
        'wave-flow': 'waveFlow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
