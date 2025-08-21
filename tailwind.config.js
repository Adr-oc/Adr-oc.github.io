/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme colors
        light: {
          bg: '#ffffff',
          text: '#24292d',
          accent: '#2fbf50',
          'accent-hover': '#259e42',
          'accent-text': '#ffffff',
          border: 'rgba(36, 41, 45, 0.2)',
          shadow: 'rgba(36, 41, 45, 0.1)',
          overlay: 'rgba(36, 41, 45, 0.05)',
        },
        // Dark theme colors
        dark: {
          bg: '#24292d',
          text: '#ffffff',
          accent: '#5bd779',
          'accent-hover': '#4bc266',
          'accent-text': '#24292d',
          border: 'rgba(255, 255, 255, 0.2)',
          shadow: 'rgba(0, 0, 0, 0.3)',
          overlay: 'rgba(255, 255, 255, 0.05)',
        },
        // Dynamic theme colors (using CSS variables)
        theme: {
          bg: 'var(--bg-color)',
          text: 'var(--text-color)',
          accent: 'var(--accent-color)',
          'accent-hover': 'var(--accent-hover)',
          'accent-text': 'var(--accent-text)',
          border: 'var(--border-color)',
          shadow: 'var(--shadow-color)',
          overlay: 'var(--overlay-color)',
        }
      },
      fontFamily: {
        'brand': ['Cascadia Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'accent': ['Cascadia Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        'mono': ['Cascadia Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      transitionProperty: {
        'theme': 'background-color, color, border-color, box-shadow',
      },
      transitionDuration: {
        'theme': '300ms',
      },
      transitionTimingFunction: {
        'theme': 'ease-in-out',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
