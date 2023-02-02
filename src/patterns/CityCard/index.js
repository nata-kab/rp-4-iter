import React from "react";
import { string, node } from "prop-types";

import * as Styled from "./CityCardStyle";
import Typography from "../../components/Typography";
import { useTheme } from "@emotion/react";

const CityCard = ({ title, imageSrc, href, imageAlt, button }) => {
  const theme = useTheme();
  return (
    <Styled.Card as={href ? `a` : `div`}>
      <Styled.Image src={imageSrc} alt={imageAlt} />
      <Styled.TitleContainer>
        <Typography
          variant="h1"
          color={theme.colors.neutrals[100]}
          letterSpacing={-0.02}
        >
          {title}
        </Typography>
      </Styled.TitleContainer>
      <Styled.ButtonContainer>{button && button}</Styled.ButtonContainer>
    </Styled.Card>
  );
};

CityCard.propTypes = {
  title: string.isRequired,
  button: node,
  imageAlt: string,
  imageSrc: string,
  href: string,
};

CityCard.defaultProps = {
  image: null,
  button: null,
  href: null,
};

export default CityCard;
