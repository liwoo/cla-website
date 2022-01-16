module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '1024px',
        xl: '1210px',
        ul: '1350px',
        sl: '1450px',
        xxl: '1800px',
        xxxl: '2800px',
      },
      colors: {
        primary: '#710071',
        alternate: '#FECD04',
        secondary: '#1D3557',
      },
      fontFamily: {
        'apple-system': ['-apple-system', 'Roboto', 'sans-serif', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: [
      {
        cla: {
          primary: '#710071',
          'primary-focus': '#530071',
          'primary-content': '#ffffff',
          secondary: '#1d3557',
          'secondary-focus': '#0d2241',
          'secondary-content': '#ffffff',
          accent: '#fecd31',
          'accent-focus': '#e6c229',
          'accent-content': '#ffffff',
          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#F0F0F5',
          'base-200': '#f5f5f5',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
        },
      },
    ],
  },
};
