/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3182CE',
          dark: '#2C5282',
          light: '#63B3ED',
        },
        secondary: {
          DEFAULT: '#805AD5',
          dark: '#553C9A',
          light: '#B794F4',
        },
        dark: {
          DEFAULT: '#1A202C',
          light: '#2D3748',
          lighter: '#4A5568',
        },
        light: {
          DEFAULT: '#F7FAFC',
          dark: '#EDF2F7',
          darker: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
