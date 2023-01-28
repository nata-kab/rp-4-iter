import React from "react";
import { string, node, func, oneOf } from "prop-types";

import * as Styled from "./CityCardStyle";
import Typography from "../../components/Typography";
import Button from "../../components/Button";

const CityCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  colorVariant,
  onClick,
}) => {
  return (
    <Styled.Card>
      <Styled.Image src={imageSrc} alt={imageAlt} />
    </Styled.Card>
  );
};

CityCard.propTypes = {
  title: string.isRequired,
  button: node,
  imageAlt: string,
  imageSrc: string,
};

CityCard.defaultProps = {
  button: null,
  imageAlt: null,
  imageSrc:
    "https://cdn.pixabay.com/photo/2021/09/07/17/26/sultan-ahmet-mosque-6604492_960_720.jpg",
};

export default CityCard;
