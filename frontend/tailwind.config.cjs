module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#14395B',
          light: '#295781',
          pale: '#E5EDF5',
        },
        accent: {
          DEFAULT: '#F4B41A',
          soft: '#FFE7AA',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
