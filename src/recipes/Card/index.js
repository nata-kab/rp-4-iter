import React from "react";
import { string, node } from "prop-types";

import * as Styled from "./Card.styled";
import Typography from "../../components/Typography";
import Image from "../../components/Image";

const Card = ({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
  button,
  children,
}) => {
  return (
    <Styled.Card as={href ? `a` : `button`} href={href}>
      <Image src={imageSrc} alt={imageAlt} />
      <Typography variant="h1">{title}</Typography>
      <Typography variant="bodyLarge">{description}</Typography>
      {children}
    </Styled.Card>
  );
};

Card.propTypes = {
  title: string,
  children: node,
  href: string,
  imageAlt: string,
  imageSrc: string,
};

Card.defaultProps = {
  children: null,
  href: null,
  imageAlt: null,
  imageSrc:
    "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export default Card;
