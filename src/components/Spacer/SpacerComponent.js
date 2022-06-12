import React from 'react';
import { View, Text } from 'react-native';

// Styled components
import styled from 'styled-components/native';

const TopSmall = styled(View)`
 marginTop: ${(props) => props.theme.sapace[2]};
`;

const TopMedium = styled(View)`
 marginTop: ${(props) => props.theme.sapace[3]};
`;

const TopLarge = styled(View)`
 marginTop: ${(props) => props.theme.space[4]};
`;

const LeftSmall = styled(View)`
 margin-left: ${(props) => props.theme.space[2]};
`;

const LeftMedium = styled(View)`
 margin-left: ${(props) => props.theme.space[3]};
`;

const LeftLarge = styled(View)`
 margin-left: ${(props) => props.theme.space[4]};
`;

export const SpacerComponent = ({ variant }) => {
  if(variant === 'top.small'){
    return <TopSmall />
  } 
  if(variant === 'top.medium'){
    return <TopMedium />
  } 
  if(variant === 'top.large'){
    return <TopLarge />
  }
  if (variant === 'left.small'){
    return <LeftSmall />
  }
  if(variant === 'left.medium'){
    return <LeftMedium />
  }
   if(variant === 'left.large'){
     return <LeftLarge />
   }
}