/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'header1': '#13bcfd',
        'header2': '#529ef8',
        'header3': '#9d79f3',
        'footer1': '#242e52',
        'footer2': '#1f3a4d',
        'footer3': '#194747',
      },
      height:{
        '18':'72px',
        '370':'370px'
      },
      width: {
        '44':'44px',
        '76':'76px',
        '134':'134px', 
        '138':'138px', 
        '268':'268px',
        '320':'320px',
        '340':'340px',
        '402':'402px',
        '500':'500px',
        '1096':'1096px', 
        '1232':'1232px',
        '1242':'1242px',
        '1280':'1280px',
        '1878':'1878px',
      }
    },
  },
  plugins: [],
}
