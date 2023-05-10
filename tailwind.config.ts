import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '900px',
        lg: '900px',
        xl: '900px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      screens: {
        sm: '600px',
        md: '900px',
        lg: '1200px',
      },
      supports: {
        'backdrop-blur-md': 'backdrop-filter: blur(12px)',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        wave: 'wave 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
