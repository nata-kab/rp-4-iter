import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width = "100%" }) => width};
  height: ${({ height = "100%" }) => height};
`;
