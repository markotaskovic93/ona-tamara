/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': "green"
      },
      fontSize: {
        large:   '2rem',
        xxl:     '2.5rem',
        normal:  '1rem'
      },
      textColor: {
        primary:    '#E36A2E',
        secondary:  '#005c95',
      },
      fontFamily: {
        effra:    ['Effra', 'Arial', 'sans-serif'],
        display:  ['Gilroy', 'sans-serif'],
        body:     ['Graphik', 'sans-serif']
      },
      margin: {
        xxs:   '.5rem',
        xxxs:  '.3125rem',
        xs:    '.75rem',
        sm:    '1rem',
        xl:    '9rem',
      },
      padding: {
        10.8:   '2.7em',
        '2px':  '2px',
      },
      borderRadius: {
        'xl':   '0.75rem',
        '2xl':  '1rem',
        '3xl':  '1.5rem',
      },
      zIndex: {
        1:  1,
        2:  2,
        3:  3,
      },
      opacity: {
        '10':  '0.1',
        '20':  '0.2',
        '30':  '0.3',
      },
      letterSpacing: {
        tightest:  '-.075em',
        tighter:   '-.05em',
        tight:     '-.025em',
        normal:    '0',
        wide:      '.025em',
        wider:     '.05em',
        widest:    '.1em',
      },
      colors: {
        blue:   'blue'
      }
    },
  },
  plugins: [],
}
