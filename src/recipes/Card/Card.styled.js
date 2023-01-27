import styled from "@emotion/styled";

export const Card = styled.div`
  display: flex;
  width: 30%;
  height: 489px;
  max-width: 360px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  border-radius: 30px;
  overflow: hidden;
`;
export const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 45%;
  margin-bottom: 40px;
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
  padding: 0 40px;
  height: 55%;
  width: 100%;
  gap: 40px;
  padding-bottom: 40px;
`;
