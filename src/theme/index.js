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
    },
    pink: {
      100: "#ff4967",
    },
  },

  typography: {
    desktop: {
      h1: {
        fontWeight: 500,
        fontSize: "2.7rem",
        lineHeight: "150%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "2.9rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },

      bodyMediumBold: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },
    tablet: {
      h1: {
        fontWeight: 500,
        fontSize: "2rem",
        lineHeight: "150%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "2.1rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },

      bodyMediumBold: {
        fontWeight: 500,
        fontSize: "1.7rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },

    mobile: {
      h1: {
        fontWeight: 500,
        fontSize: "1.5rem",
        lineHeight: "150%",
        fontFamily: "Roboto",
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "1.7rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
      bodyMediumBold: {
        fontWeight: 500,
        fontSize: "1rem",
        lineHeight: "110%",
        fontFamily: "Roboto",
      },
    },
  },
  breakpoints: getBreakpoints({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
  }),
};

export default theme;
