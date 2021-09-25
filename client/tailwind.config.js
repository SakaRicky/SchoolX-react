module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7785C7',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#E3E6F4',
          '300': '#BFC6E5',
          '400': '#9BA5D6',
          '500': '#7785C7',
          '600': '#5365B8',
          '700': '#3F4F99',
          '800': '#303C75',
          '900': '#212A51'
        },
        secondary: '#c3b8af'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
