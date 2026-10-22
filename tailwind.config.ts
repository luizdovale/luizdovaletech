/** @type {import('tailwindcss').Config} */
// Cores como "tokens" semânticos (valores em index.css, :root). Trocar a aparência do site = mudar lá, em um lugar só.
const token = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./contratos/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: token('surface'),
        tint: token('tint'),
        line: token('line'),
        ink: token('ink'),
        muted: token('muted'),
        faint: token('faint'),
        ok: token('ok'),
        accent: {
          DEFAULT: token('accent'),
          hover: token('accent-hover'),
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20, 24, 33, 0.04), 0 12px 32px -12px rgba(20, 24, 33, 0.12)',
        lift: '0 1px 2px rgba(20, 24, 33, 0.04), 0 26px 48px -20px rgba(20, 24, 33, 0.22)',
        float: '0 1px 2px rgba(20, 24, 33, 0.05), 0 22px 44px -22px rgba(20, 24, 33, 0.32)',
        glow: '0 10px 22px -10px rgba(47, 102, 240, 0.7)',
      },
      borderRadius: {
        card: '20px',
      },
      // "tight" mais suave que o padrão do Tailwind (-0.025em), que deixava as palavras dos títulos quase coladas
      letterSpacing: {
        tight: '-0.015em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out forwards',
      }
    }
  },
  plugins: [],
}
