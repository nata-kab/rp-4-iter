const getBreakpoints = (bp) => {
  const obj = {};

  Object.keys(bp).forEach((key) => {
    obj[key] = `@media (max-width: ${bp[key]}px)`;
  });

  return obj;
};

const theme = {
  fontStyles: {
    primaryFontFamily: "'Roboto', sans-serif",
  },
  colors: {
    neutrals: {
      100: "#FFFFFF",
    },
    grey: {
      100: "#E8E8E8",
      200: "#020202",
    },
    blue: {
      100: "#33558b",
      200: "#3f51b5",
      300: "#008688",
    },
    pink: {
      100: "#ff4967",
    },
    green: {
      100: "#a0c770",
    },
    yellow: {
      100: "#ffa726",
    },
    red: {
      100: "#fe6e4b",
    },
  },

  typography: {
    desktop: {
      h1: {
        fontWeight: 900,
        fontSize: "2.3rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
      h2: {
        fontWeight: 500,
        fontSize: "1.3rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "1.4rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
      bodyLargeBold: {
        fontWeight: 700,
        fontSize: "1.4rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },

      bodyMediumBold: {
        fontWeight: 700,
        fontSize: "1.2rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },
    tablet: {
      h1: {
        fontWeight: 900,
        fontSize: "1.6rem",
        lineHeight: "150%",
        fontFamily: "Roboto",
      },
      h2: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "150%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "1.1rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
      bodyLargeBold: {
        fontWeight: 700,
        fontSize: "1rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },

      bodyMediumBold: {
        fontWeight: 700,
        fontSize: "0.9rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },

    mobile: {
      h1: {
        fontWeight: 500,
        fontSize: "1.4rem",
        lineHeight: "150%",
        fontFamily: "Roboto",
      },
      h2: {
        fontWeight: 500,
        fontSize: "0.8rem",
        lineHeight: "150%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "0.9rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
      bodyLargeBold: {
        fontWeight: 700,
        fontSize: "0.9rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
      bodyMediumBold: {
        fontWeight: 700,
        fontSize: "0.7rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },
  },
  breakpoints: getBreakpoints({
    sm: 587,
    md: 744,
    lg: 992,
    xl: 1200,
  }),
};

export default theme;
