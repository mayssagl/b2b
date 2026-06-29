import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sidebar: {
          bg:     '#1e293b',  // dark slate
          hover:  '#334155',
          active: '#475569',
          text:   '#cbd5e1',
          muted:  '#64748b',
        },
        accent: {
          DEFAULT: '#f59e0b',  // amber-400 — primary action
          hover:   '#d97706',
          light:   '#fef3c7',
        },
        status: {
          pending:   { bg: '#fef3c7', text: '#92400e', dot: '#f59e0b' },
          scheduled: { bg: '#dbeafe', text: '#1e40af', dot: '#3b82f6' },
          active:    { bg: '#dcfce7', text: '#166534', dot: '#22c55e' },
          completed: { bg: '#f3f4f6', text: '#374151', dot: '#9ca3af' },
          cancelled: { bg: '#fee2e2', text: '#991b1b', dot: '#ef4444' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config