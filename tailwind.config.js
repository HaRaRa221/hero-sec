/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: { 'nat-image': "url('src/collection/Nature.jpg')" },
        
    },
  },
  plugins: [],
}

