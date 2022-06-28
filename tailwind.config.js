const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      linearBorderGradients: ({theme }) => ({
        colors: {
          'light-blue': [colors.indigo[200], colors.lime[300]],
    },
    background: theme('colors'),
      }),
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      slate: colors.slate,
      black: colors.black,
      white: colors.white,
      teal: colors.teal,
      purple: colors.purple,
      zinc: colors.zinc,
      pink: colors.pink,
      yellow: colors.yellow,
      stone: colors.stone,
    
    },
    fontFamily:{
      roboto: ['Roboto'],
      waterbrush: ['Water Brush']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-border-gradient-radius')],
}
}
