import styled from "@emotion/styled";
import theme from "../../theme";

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
  letter-spacing: -0.03em;
`;

export const ButtonText = styled.span`
  color: ${({ colorVariant }) => colors[colorVariant].textColor};
  ${({ theme }) => theme.typography.desktop.bodyMediumBold};

  ${({ theme }) => theme.breakpoints.lg} {
    ${({ theme, variant }) => theme.typography.tablet.bodyMediumBold}
  }
  ${({ theme }) => theme.breakpoints.sm} {
    ${({ theme, variant }) => theme.typography.mobile.bodyMediumBold}
  }
`;
