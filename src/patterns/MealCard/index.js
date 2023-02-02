import React from "react";
import { string, node, func, oneOf } from "prop-types";
import { useTheme } from "@emotion/react";

import * as Styled from "./MealCard.styled";
import Typography from "../../components/Typography";

const MealCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  colorVariant,
  href,
  button,
}) => {
  const theme = useTheme();
  return (
    <Styled.Card as={href ? `a` : `div`} link={!!href}>
      <Styled.ImageContainer>
        <Styled.Image src={imageSrc} alt={imageAlt} />
      </Styled.ImageContainer>
      <Styled.Content>
        <Typography
          variant="h2"
          color={theme.colors[colorVariant][100]}
          letterSpacing={0.06}
        >
          {title.toUpperCase()}
        </Typography>
        <Typography
          variant="bodyLarge"
          color={theme.colors.blue[100]}
          letterSpacing={0.01}
        >
          {description}
        </Typography>
        {button && button}
      </Styled.Content>
    </Styled.Card>
  );
};

MealCard.propTypes = {
  title: string.isRequired,
  description: string,
  children: node,
  href: string,
  onClick: func,
  imageAlt: string,
  imageSrc: string,
  colorVariant: oneOf(["pink", "green", "yellow"]),
  button: node,
};

MealCard.defaultProps = {
  children: null,
  colorVariant: "pink",
  description: null,
  href: null,
  onClick: null,
  button: null,
  imageAlt: null,
  imageSrc:
    "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg",
};

export default MealCard;
