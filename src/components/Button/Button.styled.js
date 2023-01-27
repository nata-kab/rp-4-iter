import styled from "@emotion/styled";
import theme from "../../theme";

const colors = {
  pink: {
    mainColor: theme.colors.pink[100],
    textColor: theme.colors.neutrals[100],
  },
};
export const Button = styled.a`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;

  cursor: pointer;
  text-decoration: none;
  border-radius: 30px;
  padding: 15px 20px;
  border: none;

  background-color: ${({ colorVariant }) => colors[colorVariant].mainColor};
`;

export const ButtonText = styled.span`
  color: ${({ colorVariant }) => colors[colorVariant].textColor};
  ${({ theme }) => theme.typography.desktop.bodyMediumBold};

  ${({ theme }) => theme.breakpoints.md} {
    ${({ theme, variant }) => theme.typography.tablet.bodyMediumBold}
  }
  ${({ theme }) => theme.breakpoints.sm} {
    ${({ theme, variant }) => theme.typography.mobile.bodyMediumBold}
  }
`;
