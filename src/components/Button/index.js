import React from "react";
import { string, oneOf, func } from "prop-types";
import * as Styled from "./Button.styled";

const Button = ({ text, colorVariant, onClick, href }) => {
  return (
    <Styled.Button
      as={href ? `a` : `button`}
      onClick={onClick}
      colorVariant={colorVariant}
    >
      <Styled.ButtonText colorVariant={colorVariant}>{text}</Styled.ButtonText>
    </Styled.Button>
  );
};
export default Button;

Button.propTypes = {
  text: string.isRequired,
  colorVariant: oneOf(["pink", "green", "yellow"]),
  onClick: func,
};
Button.defaultProps = {
  colorVariant: "green",
  onClick: null,
};
