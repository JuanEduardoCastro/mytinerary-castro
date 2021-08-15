module.exports = {
     purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'border': 'border radius'
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
    },
  },
  variants: {
    extend: {
      padding: ['group-hover'],
      scale: ['group-hover'],
      borderRadius: ['hover', 'focus'],
      objectFit: ['hover', 'focus'],
      fontsize: ['hover'],
    },
  },
  plugins: [],
}
