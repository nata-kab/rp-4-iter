import styled from "@emotion/styled";

export const MainPage = styled.div`
  padding: 0.1rem;
  ${({ theme }) => theme.breakpoints.sm} {
    padding: 0;
  }
`;
