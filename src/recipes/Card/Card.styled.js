import styled from "@emotion/styled";

export const Card = styled.div`
  display: inline-flex;
  flex-grow: 0;
  height: 100%;
  width: 100%;
  ${"" /* aspect-ratio: auto 1 / 1; */}
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  border-radius: 30px;
  overflow: hidden;
`;
export const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 42%;
`;
export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: inherit;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10%;
  height: 58%;
  width: 100%;
  gap: 50px;
  margin: 12% 0px;
  ${({ theme }) => theme.breakpoints.md} {
    gap: 40px;
    margin: 12% 0px;
  }
  ${({ theme }) => theme.breakpoints.md} {
    gap: 30px;
    margin: 10% 0px;
  }
`;
