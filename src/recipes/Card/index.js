import React from "react";
import { string, node, func, oneOf } from "prop-types";
import { useTheme } from "@emotion/react";

import * as Styled from "./Card.styled";
import Typography from "../../components/Typography";
import Button from "../../components/Button";

const Card = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  colorVariant,
  onClick,
}) => {
  const theme = useTheme();
  return (
    <Styled.Card>
      <Styled.ImageContainer>
        <Styled.Image src={imageSrc} alt={imageAlt} />
      </Styled.ImageContainer>
      <Styled.Content>
        <Typography
          variant="h1"
          color={theme.colors.pink[100]}
          letterSpacing={0.1}
        >
          {title.toUpperCase()}
        </Typography>
        <Typography variant="bodyLarge" color={theme.colors.blue[100]}>
          {description}
        </Typography>
        <Button
          text={buttonText}
          colorVariant={colorVariant}
          onClick={onClick}
        />
      </Styled.Content>
    </Styled.Card>
  );
};

Card.propTypes = {
  title: string.isRequired,
  description: string,
  children: node,
  href: string,
  onClick: func,
  imageAlt: string,
  imageSrc: string,
  buttonText: string,
  colorVariant: oneOf(["pink"]),
};

Card.defaultProps = {
  children: null,
  colorVariant: "pink",
  description: null,
  buttonText: null,
  href: null,
  onClick: null,
  imageAlt: null,
  imageSrc:
    "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default Card;
