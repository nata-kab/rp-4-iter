import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  width: 100%;
  max-height: calc(20rem + 5vw);
  ${({ theme }) => theme.breakpoints.lg} {
    height: calc(12rem + 8vw);
  }
  ${({ theme }) => theme.breakpoints.md} {
    height: calc(24rem + 10vw);
  }
  ${({ theme }) => theme.breakpoints.sm} {
    height: calc(20rem + 10vw);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 8%;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const TitleContainer = styled.div`
  position: absolute;
  top: 8%;
  right: 10%;
  z-index: 2;
`;
