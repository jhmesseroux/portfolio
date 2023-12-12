import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand-color)',
        brand2: 'var(--brand-color-2)',
        dark: 'var(--dark-color)',
        darkbox: 'var(--dark-color-box)',
        darktext: 'var(--dark-text)',
      },
      backgroundColor: {
        brand: 'var(--brand-color)',
        brand2: 'var(--brand-color-2)',
      },
    },
  },
  plugins: [],
}
export default config
