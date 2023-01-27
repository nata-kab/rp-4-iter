import styled from "@emotion/styled";

// export const Wrapper = styled.div`
//   max-width: 100%;
//   width: 100%;
// `;

export const Card = styled.div`
  display: inline-flex;
  flex-grow: 0;
  height: 100%;
  width: 100%;

  ${"" /* height: 80vw; */}

  ${"" /* aspect-ratio: 3/5; */}
  ${"" /* height: 489px; */}
  ${"" /* aspect-ratio: auto 1 / 1; */}
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutrals[100]};
  border-radius: 30px;
  overflow: hidden;
  ${"" /* border: 1px solid; */}
`;
export const ImageContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  height: 45%;
  ${"" /* border: 1px solid; */}
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
  height: 55%;
  width: 100%;
  gap: 40px;
  ${"" /* border: 1px solid green; */}
  margin: 40px 0px;
`;
