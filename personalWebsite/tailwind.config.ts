import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)', 'Space Grotesk', 'sans-serif'],
        secondary: ['var(--font-secondary)', 'Inter', 'sans-serif'],
      },
      colors: {
        sharp: {
          primary: '#FF4D4D',
          'primary-hover': '#E64545',
          secondary: '#0A0A0A',
          accent: '#FF4D4D',
          black: '#0A0A0A',
          white: '#FFFFFF',
          border: '#E5E5E5',
          'border-dark': '#0A0A0A',
          'border-subtle': '#F0F0F0',
          'bg-secondary': '#FAFAFA',
          'bg-tertiary': '#F5F5F5',
          'text-secondary': '#666666',
          'text-muted': '#999999',
        },
      },
      fontSize: {
        display: ['96px', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'h1': ['64px', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        'h3': ['32px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h4': ['20px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'small': ['14px', { lineHeight: '1.5' }],
        'micro': ['11px', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '40px',
        '2xl': '64px',
        '3xl': '80px',
        '4xl': '120px',
        'section': '96px',
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        md: '4px',
      },
      transitionDuration: {
        fast: '100ms',
        normal: '200ms',
        slow: '300ms',
      },
      boxShadow: {
        'sharp-sm': '0 1px 2px rgba(0,0,0,0.05)',
        'sharp-md': '0 4px 12px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
