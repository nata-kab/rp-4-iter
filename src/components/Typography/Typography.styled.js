import styled from "@emotion/styled";

export const Typography = styled.p`
  margin: 0;
  ${({ variant, theme }) => theme.typography[variant]};
  color: ${({ color }) => color};
`;
