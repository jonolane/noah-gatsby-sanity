/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['Kalam', 'Kalam'],
        uni: ['UnifrakturMaguntia', 'UnifrakturMaguntia'],
        poppins: ['Poppins', 'Poppins']
      },
      colors: {
        gray: {
          50: '#fcfcfc'
        }
      },
    },
  },
  plugins: [],
}

