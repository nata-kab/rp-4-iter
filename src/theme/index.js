const getBreakpoints = (bp) => {
  const obj = {};

  Object.keys(bp).forEach((key) => {
    obj[key] = `@media (max-width: ${bp[key]}px)`;
  });

  return obj;
};

const theme = {
  // fontStyles: {
  //   primaryFontFamily: "",
  // },
  colors: {
    primary: {
      100: "#FCDDDF",
    },
    neutrals: {
      100: "#FFFEFE",
    },
    grey: {
      100: "#EBEBEB",
      600: "#020202",
    },
  },

  typography: {
    desktop: {
      h1: {
        fontWeight: 300,
        fontSize: "40px",
        lineHeight: "100%",
        // fontFamily: ,
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "32px",
        lineHeight: "100%",
        // fontFamily: ,
      },

      bodySmall: {
        fontWeight: 300,
        fontSize: "22px",
        lineHeight: "100%",
        // fontFamily: ,
      },
    },

    mobile: {
      h1: {
        fontWeight: 300,
        fontSize: "30px",
        lineHeight: "100%",
        // fontFamily: ,
      },

      bodyLarge: {
        fontWeight: 300,
        fontSize: "32px",
        lineHeight: "100%",
        // fontFamily: ,
      },
      bodySmall: {
        fontWeight: 300,
        fontSize: "22px",
        lineHeight: "100%",
        // fontFamily: ,
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
