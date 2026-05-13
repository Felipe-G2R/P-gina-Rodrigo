import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#1F5E5C',
          deep: '#0F3D3B',
          darker: '#0A2C2A',
        },
        brass: {
          DEFAULT: '#C99A6B',
          bright: '#DDB388',
          dark: '#A6764B',
        },
        // Verde-floresta da logo oficial — usado em harmonia com o teal
        forest: {
          DEFAULT: '#2D3F2B',
          deep: '#1F2D1E',
          soft: '#4A5E48',
        },
        // Bege/creme do fundo da logo oficial
        cream: {
          DEFAULT: '#F0E6CC',
          warm: '#E8DDB8',
        },
        ivory: '#F2E9D8',
        parchment: {
          DEFAULT: '#F5EFE3',
          dark: '#ECE3CF',
        },
        paper: {
          DEFAULT: '#F5EFE3',
          dark: '#0A2C2A',
        },
        charcoal: '#1A1A1A',
        rose: {
          DEFAULT: '#9B3B47',
          soft: '#C57680',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        caslon: ['"Libre Caslon Text"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        ultra: '0.32em',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 154, 107, 0.45)' },
          '50%': { boxShadow: '0 0 0 14px rgba(201, 154, 107, 0)' },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
