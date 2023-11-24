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
      // modal window specific styles
      zIndex: {
        'modal-open': 50,
      },
      maxHeight: {
        'modal-open': 'calc(100vh - 6rem)',
      },
    },
  },
  plugins: [],
}

