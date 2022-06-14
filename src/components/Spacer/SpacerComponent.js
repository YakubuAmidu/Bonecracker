import React from 'react';

// Styled component
import styled, { useTheme } from 'styled-components/native';

// sizesVariant styled component
const sizeVariant = {
 small: 1,
 medium: 2,
 large: 3
};

// positionVariant styled component
const positionVariant = {
 top: "marginTop",
 bottom: "marginBottom",
 left: "marginLeft",
 right: "marginRight",
}

// getVariant function
const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
}

// SpacerView function
const SpacerView = styled.View`
 ${({ variant }) => variant}
`;

// SpacerComponent function
export const SpacerComponent = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>
}

SpacerComponent.defaultProps = {
  position: 'top',
  size: 'small'
}