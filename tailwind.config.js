/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'display': ['"SF Pro Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['"SF Pro Text"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['"SF Mono"', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        ios: {
          bg: '#F2F2F7',
          card: '#FFFFFF',
          separator: '#C6C6C8',
          label: '#3C3C43',
          secondary: '#8E8E93',
          tertiary: '#AEAEB2',
          blue: '#007AFF',
          yellow: '#FFD60A',
          orange: '#FF9500',
          green: '#34C759',
          gray: {
            1: '#8E8E93',
            2: '#AEAEB2',
            3: '#C7C7CC',
            4: '#D1D1D6',
            5: '#E5E5EA',
            6: '#F2F2F7',
          },
          dark: {
            bg: '#000000',
            elevated: '#1C1C1E',
            card: '#2C2C2E',
            separator: '#38383A',
            label: '#FFFFFF',
            secondary: '#98989D',
          }
        }
      },
      borderRadius: {
        'ios': '12px',
        'ios-lg': '16px',
        'ios-xl': '20px',
      },
      boxShadow: {
        'ios': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'ios-md': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        'ios-lg': '0 8px 24px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)',
        'ios-hover': '0 12px 32px rgba(0,0,0,0.14), 0 6px 12px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
