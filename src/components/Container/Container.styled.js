import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  max-width: ${({ maxWidth = 1400 }) => `${maxWidth}px`};
  margin: 0 auto;
  padding: 3rem 2rem;
  ${({ theme }) => theme.breakpoints.lg} {
    gap: 1rem;
  }
  ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;
  }
`;
