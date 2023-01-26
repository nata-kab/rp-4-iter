import styled from "@emotion/styled";

export const Image = styled.img`
  display: flex;
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "auto" }) => height};
`;
