/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tech: {
          dark: '#000000',
          surface: '#0A0A0A',
          card: '#111111',
          border: 'rgba(255, 255, 255, 0.08)',
          gray: '#A1A1A1',
          muted: '#71717A',
          white: '#FFFFFF',
          accent: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        subtleGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtleGlow': 'subtleGlow 5s ease-in-out infinite'
      }
    }
  },
  plugins: [],
}
