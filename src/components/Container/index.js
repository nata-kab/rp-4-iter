import { node, numb } from "prop-types";
import * as Styled from "./Container.styled";

const Container = ({ size, children }) => (
  <Styled.Container size={size}>{children}</Styled.Container>
);

Container.propTypes = {
  size: numb,
  children: node.isRequired,
};

Container.defaultProps = {
  size: 1000,
};

export default Container;
