import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#f4ca54',
        gold: '#f4ca54',
        dark: '#0a0a0a',
        surface: '#1a1a1a',
      },
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backdropBlur: {
        xl: '1.5rem',
      },
      borderRadius: {
        full: '9999px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config
