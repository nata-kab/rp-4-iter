import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;
  border-radius: 40px;
  overflow: hidden;
  width: 100%;
  ${({ theme }) => theme.breakpoints.sm} {
    height: 350px;
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
  bottom: 7%;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const TitleContainer = styled.div`
  position: absolute;
  top: 7%;
  right: 8%;
  z-index: 2;
`;
