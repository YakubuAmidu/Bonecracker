import React, { useContext } from 'react';
import { FlatList } from 'react-native';

// Custom Components
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { SpacerComponent } from '../../../components/Spacer/SpacerComponent';
import { SafeArea } from '../../../components/Utility/SafeAreaComponent';
import { RestaurantsContext } from '../../../components/Services/Restaurants/RestaurantsContext';

// React native paper searchbar
import { Searchbar } from 'react-native-paper';

// Styled components
import styled from 'styled-components/native';

// SearchContainer styled component
const SearchContainer = styled.View`
 padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
    <SearchContainer>
       <Searchbar />
    </SearchContainer>
     <FlatList 
     data={restaurants}
     renderItem={({ item }) => {
       console.log(item);
        return (
    <SpacerComponent position={"bottom"} size={"large"}>
     <RestaurantInfoCard restaurant={item}/>
    </SpacerComponent>
      )
    }}
    keyExtractor={( item ) => item.name}
     />
   </SafeArea>
  )
}
