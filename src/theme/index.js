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
        fontSize: "calc(1.5rem + 0.7vw)",
        lineHeight: "140%",
        fontFamily: "Roboto",
      },
      h2: {
        fontWeight: 500,
        fontSize: "calc(0.7rem + 0.5vw)",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "calc(0.85rem + 0.5vw)",
        lineHeight: "140%",
        fontFamily: "Roboto",
      },
      bodyLargeBold: {
        fontWeight: 900,
        fontSize: "calc(0.6rem + 0.5vw)",
        lineHeight: "160%",
        fontFamily: "Roboto",
      },

      bodyMediumBold: {
        fontWeight: 700,
        fontSize: "calc(0.7rem + 0.4vw)",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },
    tablet: {
      h1: {
        fontWeight: 900,
        fontSize: "calc(0.8rem + 1.5vw)",
        lineHeight: "140%",
        fontFamily: "Roboto",
      },
      h2: {
        fontWeight: 500,
        fontSize: "calc(0.22rem + 1.5vw)",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "calc(0.23rem + 1.5vw)",
        lineHeight: "140%",
        fontFamily: "Roboto",
      },
      bodyLargeBold: {
        fontWeight: 900,
        fontSize: "calc(0.02rem + 1.5vw)",
        lineHeight: "170%",
        fontFamily: "Roboto",
      },

      bodyMediumBold: {
        fontWeight: 700,
        fontSize: "calc(0.1rem + 1.5vw)",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },

    mobile: {
      h1: {
        fontWeight: 900,
        fontSize: "calc(1.7rem + 1.5vw)",
        lineHeight: "140%",
        fontFamily: "Roboto",
      },
      h2: {
        fontWeight: 700,
        fontSize: "calc(0.8rem + 1.5vw)",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "calc(0.83rem + 1.5vw)",
        lineHeight: "150%",
        fontFamily: "Roboto",
      },
      bodyLargeBold: {
        fontWeight: 900,
        fontSize: "calc(0.6rem + 1.4vw)",
        lineHeight: "170%",
        fontFamily: "Roboto",
      },
      bodyMediumBold: {
        fontWeight: 700,
        fontSize: "calc(0.7rem + 1.5vw)",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },
  },
  breakpoints: getBreakpoints({
    sm: 587,
    md: 640,
    lg: 992,
    xl: 1200,
  }),
};

export default theme;
