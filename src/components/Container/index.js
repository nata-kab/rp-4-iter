import { node, number } from "prop-types";
import * as Styled from "./Container.styled";

const Container = ({ maxWidth, children }) => (
  <Styled.Container maxWidth={maxWidth}>{children}</Styled.Container>
);

Container.propTypes = {
  maxWidth: number,
  children: node.isRequired,
};

Container.defaultProps = {
  maxWidth: 1200,
};

export default Container;
