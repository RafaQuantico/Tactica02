/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        section: '#F9FAFB',
        primary: {
          900: '#0F172A',
          800: '#1E293B',
        },
        accent: {
          light: '#D97706',
          dark: '#B45309',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      keyframes: {
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        slowZoom: 'slowZoom 20s ease-in-out infinite alternate',
      }
    },
  },
  plugins: [],
}
