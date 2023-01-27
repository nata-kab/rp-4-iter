import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey[100]};
`;
