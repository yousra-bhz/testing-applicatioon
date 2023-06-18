//** @type {import('tailwindcss').Confg} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '80': '80%',
        '60' : '60%',
        '70' : '70%',
        '55' : '50%',
        '50' : '50%',
        '90' : '90%',
        '7': '70rem',
        '8': '60rem',
      }
    },

    textUnderlineOffset: {
      10: '10px',
    },
   
  },
  plugins: [],
  
};
