import { string, oneOf, node } from "prop-types";
import React from "react";

import * as Styled from "./Typography.styled";

const variants = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  bodyLarge: "p",
  bodySmall: "p",
};

const Typography = ({ variant, color, children }) => {
  return (
    <Styled.Typography as={variants[variant]} variant={variant} color={color}>
      {children}
    </Styled.Typography>
  );
};

Typography.propTypes = {
  variant: oneOf(Object.keys(variants)),
  color: string,
  children: node,
};

Typography.defaultProps = {
  color: null,
  children: null,
  variant: "bodyLarge",
};

export default Typography;
