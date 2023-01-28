import styled from "@emotion/styled";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  border-radius: 40px;
`;
export const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 45%;
  border-radius: 40px 40px 0 0;
  overflow: hidden;
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 55%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  padding: 2.5rem 2.2rem;
  border-radius: 0 0 40px 40px;
  gap: 1.5rem;
  ${({ theme }) => theme.breakpoints.lg} {
    padding: 1.4rem 1.3rem;
    gap: 1.2rem;
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: 1.7rem;
  }
`;
