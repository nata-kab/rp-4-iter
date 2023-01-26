import { string } from "prop-types";
import * as Styled from "./Image.styled";

const Image = ({ src, alt, width, height }) => {
  <Styled.Image src={src} alt={alt} width={width} height={height} />;
};

Image.propTypes = {
  src: string.isRequired,
  alt: string,
  width: string,
  height: string,
};
Image.defaultProps = {
  alt: "",
  width: null,
  height: null,
};
export default Image;
