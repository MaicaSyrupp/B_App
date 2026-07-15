/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F6B68',
          hover: '#0B5A57',
          emphasis: '#2A8A86',
          selected: '#DFF5F2',
        },
        accent: {
          soft: '#DFF5F2',
          illustration: '#CBEFEB',
          card: '#EAF6FF',
          tint: '#F2EEFF',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        neutral: {
          bg: '#FAFBFC',
          panel: '#F8FAFB',
          surface: '#F3F5F7',
          border: '#E8ECEF',
          borderDisabled: '#C9D1D9',
          textSecondary: '#8B95A5',
          textBody: '#5B6472',
          label: '#374151',
          heading: '#1F2937',
          surfaceCard: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
