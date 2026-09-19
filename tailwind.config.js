/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gallery: {
          50: '#FDFCF9',
          100: '#FBF9F5', // Primary background (warm ivory)
          200: '#F3EFE6', // Secondary background
          300: '#E8E3D7', // Hairline borders
          400: '#D5CEC0',
          500: '#9E988D',
          600: '#6E6960', // Muted secondary text
          700: '#47433C',
          800: '#2A2724',
          900: '#161513', // Deep carbon charcoal
        },
        terracotta: {
          DEFAULT: '#A84D32',
          light: '#BD5C40',
          dark: '#873B23',
          muted: '#C47A65',
        },
        ochre: {
          DEFAULT: '#9E6B38',
          light: '#B57E45',
          dark: '#7A5228',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.035em',
        'widest-editorial': '0.18em',
        'archival': '0.24em',
      },
      fontSize: {
        '2xs': '0.6875rem', // 11px
        'masthead': ['clamp(3rem, 9vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'headline': ['clamp(2.2rem, 5.5vw, 5.2rem)', { lineHeight: '1.02', letterSpacing: '-0.025em' }],
        'subheadline': ['clamp(1.5rem, 3.2vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
      }
    },
  },
  plugins: [],
}

