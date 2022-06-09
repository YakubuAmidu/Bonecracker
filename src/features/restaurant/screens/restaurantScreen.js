import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

// Custom Components
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';

// React native paper searchbar
import { Searchbar } from 'react-native-paper';

// Styled components
import styled from 'styled-components/native';

// SafeArea styled component
const SafeArea= styled(SafeAreaView)`
 flex: 1;
 margin-top: ${StatusBar.currenHeight}px;
`;

// SearchContainer styled component
const SearchContainer = styled(View)`
 padding: 16px;
`;

// RestaurantListContainer styled component
const RestaurantListContainer = styled(View)`
 flex: 1;
 background-color: blue;
 padding: 16px;
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
