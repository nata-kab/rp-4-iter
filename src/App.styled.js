import styled from "@emotion/styled";
import theme from "./theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  gap: 30px;
  ${theme.breakpoints.xl} {
    gap: 30px;
    flex-direction: column;
  }
`;
