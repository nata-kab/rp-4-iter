import React from "react";
import { string, oneOf, func, number } from "prop-types";
import * as Styled from "./Button.styled";
import Typography from "../Typography";
import { useTheme } from "@emotion/react";

const Button = ({
  text,
  colorVariant,
  onClick,
  href,
  textVariant,
  letterSpacing,
}) => {
  const theme = useTheme();
  return (
    <Styled.Button
      as={href ? `a` : `button`}
      onClick={onClick}
      colorVariant={colorVariant}
    >
      <Typography
        variant={textVariant}
        color={theme.colors.neutrals[100]}
        letterSpacing={letterSpacing}
      >
        {text}
      </Typography>
    </Styled.Button>
  );
};
export default Button;

Button.propTypes = {
  text: string.isRequired,
  colorVariant: oneOf(["pink", "green", "yellow", "aqua", "darkBlue", "red"]),
  onClick: func,
  href: string,
  textVariant: string,
  letterSpacing: number,
};
Button.defaultProps = {
  colorVariant: "green",
  onClick: null,
  href: null,
  textVariant: "bodyLargeBold",
  letterSpacing: null,
};
