/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "body-text": {
          DEFAULT: colors.zinc[200],
          light: colors.zinc[200],
          dark: colors.zinc[800]
        },
        header: {
          DEFAULT: colors.zinc[800],
          light: colors.zinc[800],
          dark: colors.zinc[200]
        }
      }
    }
  },
  plugins: [],
}
