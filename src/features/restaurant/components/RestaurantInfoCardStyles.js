// Styled components
import styled from 'styled-components/native';

// React native paper Card
import { Card } from 'react-native-paper';

// RestaurantCard styled component
export const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

// RestaurantCardCover styled component
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

// Address styled component
export const Address = styled.Text`
 font-family: ${(props) => props.theme.fonts.body};
 font-size: ${(props) => props.theme.fontSizes.caption};
`;

// Info styled component
export const Info = styled.View`
 padding: ${(props) => props.theme.space[3]};
`;

// Rating styled component
export const Rating = styled.View`
 flex-direction: row;
 padding-top: ${(props) => props.theme.space[2]};
 padding-bottom: ${(props) => props.theme.space[2]};
`;

// Section styled component
export const Section = styled.View`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

// SectionEnd styled component
export const SectionEnd = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: center;
`;

// Icon styled component
export const Icon = styled.Image`
 width: 15px;
 height: 15px;
`;