/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        bgColor:'rgb(245, 242, 255)',
        brightPurple: '#5123CB',
        darkGrayishBlue: '#2F3F52',
        myDarkBlue:'#000066',
        postBg:'#0B2855',
        postIconBg:'#525086',
        reactionIconBg:'#F1F5F9',
        reactionText:'#334155'
      },
      fontFamily: {
        poppins:['Poppins']
      },
    },
  },
  plugins: [],
}
