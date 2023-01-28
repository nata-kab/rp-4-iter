import { string, oneOf, node, number, oneOfType } from "prop-types";
import React from "react";

import * as Styled from "./Typography.styled";

const variants = {
  h1: "h1",
  h2: "h2",
  bodyLarge: "p",
  bodyLargeBold: "p",
  bodyMediumBold: "p",
};

const Typography = ({ variant, color, children, letterSpacing }) => {
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
  children: oneOfType([string, node]),
  letterSpacing: number,
};

Typography.defaultProps = {
  color: "black",
  variant: "bodyLarge",
  letterSpacing: null,
  children: null,
};

export default Typography;
