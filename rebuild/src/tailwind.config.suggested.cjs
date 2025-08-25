/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#00AA65',
          'primary-hover': '#009558',
          surface: '#F2F2F2',
          'surface-hover': '#E9ECEF',
          text: '#606060',
          'text-dark': '#080D14',
          'text-muted': '#919294',
          border: '#E5E7EB',
          'border-light': '#CECECE',
          success: '#00AA65',
          warning: '#FFA500',
          error: '#DC2626',
          rating: '#FFD700',
        }
      },
      fontFamily: {
        'aeonik': ['Aeonik', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'effra': ['Effra', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '108': '27rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'soft': '0 1px 2px 0 rgba(8, 13, 20, 0.08)',
        'medium': '0 2px 24px 0 rgba(8, 13, 20, 0.08)',
        'strong': '0 10px 15px -3px rgba(8, 13, 20, 0.1), 0 4px 6px -2px rgba(8, 13, 20, 0.05)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      width: {
        '310': '310px',
      },
      gridTemplateColumns: {
        'layout': '310px 1fr',
      }
    },
  },
  plugins: [],
}