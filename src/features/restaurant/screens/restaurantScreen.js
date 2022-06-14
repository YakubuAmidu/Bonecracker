import React from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';

// Custom Components
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';

// React native paper searchbar
import { Searchbar } from 'react-native-paper';

// Styled components
import styled from 'styled-components/native';

// SafeArea styled component
const SafeArea= styled(SafeAreaView)`
 flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

// SearchContainer styled component
const SearchContainer = styled(View)`
 padding: ${(props) => props.theme.space[3]};
`;

// RestaurantListContainer styled component
const RestaurantListContainer = styled(View)`
 flex: 1;
 padding: ${(props) => props.theme.space[3]}
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
    <SearchContainer>
       <Searchbar />
    </SearchContainer>
  
    <RestaurantListContainer>
     <RestaurantInfoCard />
    </RestaurantListContainer>
   </SafeArea>
  )
}
