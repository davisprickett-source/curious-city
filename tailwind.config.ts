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
        // Signature accent - terracotta/rust for warmth and exploration
        accent: {
          50: '#fef6f3',
          100: '#fdeae4',
          200: '#fbd5c9',
          300: '#f7b5a0',
          400: '#f08b6b',
          500: '#e56b45',
          600: '#c65d3b', // Primary accent
          700: '#a54a30',
          800: '#883f2b',
          900: '#713828',
          950: '#3d1a11',
        },
        // Teal for secondary accents (maps, locations)
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontSize: {
        // Mobile-first readable sizes
        'body': ['1rem', { lineHeight: '1.625' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
      },
      spacing: {
        // Touch-friendly spacing
        'tap': '44px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '60': '60', // Premium mobile menu (above header z-50)
      },
    },
  },
  plugins: [],
}

export default config
