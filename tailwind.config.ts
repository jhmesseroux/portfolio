import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './features/**/*.{js,ts,jsx,tsx,mdx}', './shared/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand-color)',
        brand2: 'var(--brand-color-2)'
      },
      backgroundColor: {
        brand: 'var(--brand-color)',
        brand2: 'var(--brand-color-2)'
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear'
      },
      boxShadow: {
        '1': 'var(--shadow-1)',
        '2': 'var(--shadow-2)'
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%'
          }
        }
      }
    }
  },
  plugins: []
}
export default config
