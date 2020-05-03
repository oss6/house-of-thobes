module.exports = {
  purge: {
    enabled: true,
    content: ['./*.html'],
  },
  theme: {
    extend: {
      colors: {
        gold: {
          '100': '#fffff0',
          '200': '#fffaf0',
          '300': '#e3caab',
          '700': '#93845e',
          '800': '#7b341e',
          '900': '#453f3c'
        }
      }
    }
  }
};
