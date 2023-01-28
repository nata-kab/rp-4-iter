import styled from "@emotion/styled";

export const Typography = styled.p`
  margin: 0;
  text-align: center;
  ${({ variant, theme }) => theme.typography.desktop[variant]};

  ${({ theme }) => theme.breakpoints.lg} {
    ${({ theme, variant }) => theme.typography.tablet[variant]}
  }
  ${({ theme }) => theme.breakpoints.sm} {
    ${({ theme, variant }) => theme.typography.mobile[variant]}
  }
  color: ${({ color }) => color};
  letter-spacing: ${({ letterSpacing = "normal" }) => `${letterSpacing}em`};
`;
