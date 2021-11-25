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
      },
      fontFamily: {
        'apple-system': ['-apple-system', 'Roboto', 'sans-serif', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
