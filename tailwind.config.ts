import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: '#14355A',
          dark: '#0e243d',
          light: '#1d487b',
        },
        primary: {
          DEFAULT: '#1F66B5',
          hover: '#195496',
          light: '#e8f1fb',
        },
        soft: '#EEF6FD',
        ink: {
          DEFAULT: '#2B2F36',
          light: '#4B5563',
        },
        muted: '#6B7280',
      },
      borderRadius: {
        '24': '24px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

