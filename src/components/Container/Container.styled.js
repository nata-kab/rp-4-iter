import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  max-width: ${({ maxWidth = 1200 }) => `${maxWidth}px`};
  margin: 2.5rem auto;
  ${({ theme }) => theme.breakpoints.lg} {
    gap: 2rem;
    margin: 2rem auto;
  }
  ${({ theme }) => theme.breakpoints.md} {
    margin: 3rem auto;
    padding: 0 3rem;
    flex-direction: column;
    gap: 3rem;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    padding: 0 2rem;
  }
`;
