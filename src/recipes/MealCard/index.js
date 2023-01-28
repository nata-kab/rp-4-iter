import React from "react";
import { string, node, func, oneOf } from "prop-types";
import { useTheme } from "@emotion/react";

import * as Styled from "./MealCard.styled";
import Typography from "../../components/Typography";
import Button from "../../components/Button";

const MealCard = ({
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
          {description} Are fun and &#10; melts in your mouth thing!
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

MealCard.propTypes = {
  title: string.isRequired,
  description: string,
  children: node,
  href: string,
  onClick: func,
  imageAlt: string,
  imageSrc: string,
  buttonText: string,
  colorVariant: oneOf(["pink", "green", "yellow"]),
};

MealCard.defaultProps = {
  children: null,
  colorVariant: "pink",
  description: null,
  buttonText: null,
  href: null,
  onClick: null,
  imageAlt: null,
  imageSrc:
    "https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973_960_720.jpg",
};

export default MealCard;
