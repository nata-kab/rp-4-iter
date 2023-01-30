import { node } from "prop-types";
import * as Styled from "./Container.styled";

const Container = ({ children }) => (
  <Styled.Container>{children}</Styled.Container>
);

Container.propTypes = {
  children: node.isRequired,
};

export default Container;
