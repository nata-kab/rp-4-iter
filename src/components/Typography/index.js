import { string, oneOf, node } from "prop-types";
import React from "react";
import { useTheme } from "@emotion/react";

import * as Styled from "./Typography.styled";
import theme from "../../theme";

const variants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyLarge: "p",
  bodySmall: "p",
};

const Typography = ({ variant, color, children, letterSpacing }) => {
  const theme = useTheme();
  return (
    <Styled.Typography
      as={variants[variant]}
      variant={variant}
      color={color}
      letterSpacing={letterSpacing}
    >
      {children}
    </Styled.Typography>
  );
};

Typography.propTypes = {
  variant: oneOf(Object.keys(variants)),
  color: string,
  children: string,
  letterSpacing: string,
};

Typography.defaultProps = {
  color: "black",
  variant: "bodyLarge",
  letterSpacing: null,
};

export default Typography;
