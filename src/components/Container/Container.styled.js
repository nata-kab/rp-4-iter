import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 2.5rem auto;
  padding: 1.5rem;
  ${({ theme }) => theme.breakpoints.lg} {
    gap: 2rem;
    margin: 2rem auto;
    padding: 0 2rem;
  }
  ${({ theme }) => theme.breakpoints.md} {
    width: 100%;
    margin: 1.5rem 0.5rem;
    flex-direction: column;
    gap: 1.5rem;
  }
  ${({ theme }) => theme.breakpoints.sm} {
    margin: 1.8rem 0.2rem;
    gap: 1.8rem;
  }
  ${({ theme }) => theme.breakpoints.xs} {
    margin: 1rem 0.02rem;
    gap: 1rem;
  }
`;
