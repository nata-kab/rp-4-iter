import styled from "@emotion/styled";
import theme from "../../tokens/theme";

const colors = {
  pink: {
    mainColor: theme.colors.pink[100],
    textColor: theme.colors.neutrals[100],
  },
  green: {
    mainColor: theme.colors.green[100],
    textColor: theme.colors.neutrals[100],
  },
  yellow: {
    mainColor: theme.colors.yellow[100],
    textColor: theme.colors.neutrals[100],
  },
  red: {
    mainColor: theme.colors.red[100],
    textColor: theme.colors.neutrals[100],
  },
  darkBlue: {
    mainColor: theme.colors.blue[200],
    textColor: theme.colors.neutrals[100],
  },
  aqua: {
    mainColor: theme.colors.blue[300],
    textColor: theme.colors.neutrals[100],
  },
};

export const Button = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  border-radius: 40px;
  padding: 1.2rem 2.2rem;
  border: none;
  background-color: ${({ colorVariant }) => colors[colorVariant].mainColor};
  ${({ theme }) => theme.breakpoints.lg} {
    padding: 1rem 1.5rem;
    margin: 0 0.5rem;
  }
`;
