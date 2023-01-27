import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  max-width: ${({ size }) => `${size}px`};

  margin: 0 auto;
`;
