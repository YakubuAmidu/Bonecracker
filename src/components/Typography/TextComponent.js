import styled from 'styled-components/native';

// defaultTextStyles styled component function
const defaultTextStyles  = (theme) => `
 font-family: ${theme.fonts.body};
 font-weight: ${theme.fontWeights.regular};
 color: ${theme.colors.text.primary};
 flex-wrap: wrap;
 margin-top: 0px;
 margin-bottom: 0px;
`;

// body styled component function
const body = (theme) => `
 font-size: ${theme.fontSizes.body};
`;

// hint styled component function
const hint = (theme) => `
 font-size: ${theme.fontSizes.body};
`;

// error styled component function
const error = (theme) => `
 color: ${theme.colors.text.error};
`;

// caption styled component function
const caption = (theme) => `
  font-family: ${theme.fontSizes.caption};
  font=weight: ${theme.fontWeights.bold};
`;

// label styled component function
const label = (theme) => `
 font-family: ${theme.fonts.heading};
 font-size: ${theme.fontSizes.body};
 font-weight: ${theme.fontWeights.medium};
`;

// variant object
const variants = {
  body,
  hint,
  error,
  caption,
  label
};

// Text styld component
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)};
  ${({ variant, theme }) => variants[variant](theme)};
`;

Text.defaultProps = {
  variant: "body"
};