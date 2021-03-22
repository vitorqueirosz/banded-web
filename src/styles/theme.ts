export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsm: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xlg: '2.0rem',
      '2xlg': '3.2rem',
    },
  },
  colors: {
    primary: '#1DB98A',
    secondary: '#FF5005',
    dark: {
      light: '#292929',
      darker: '#1C1C1C',
      info: '#212121',
    },
    light: {
      lighter: '#DEDEEA',
      gray: '#B6B6B6',
      darkGray: '#CCC',
    },
    neutral: {
      light: '#FFF',
      black: '#000',
    },
    bgModal: 'rgba(0, 0, 0, 0.5)',
  },
  spacings: {
    '2xs': '0.8rem',
    xsm: '1.6rem',
    sm: '2.4rem',
    md: '3.2rem',
    lg: '4.0rem',
    xlg: '4.8rem',
    '2xlg': '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
} as const;