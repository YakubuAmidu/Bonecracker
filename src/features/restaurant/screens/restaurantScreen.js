import React, { useContext } from 'react';
import { FlatList } from 'react-native';

// Imported custom Components
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { SpacerComponent } from '../../../components/Spacer/SpacerComponent';
import { SafeArea } from '../../../components/Utility/SafeAreaComponent';
import { RestaurantsContext } from '../../../components/Services/Restaurants/RestaurantsContext';
import { Search } from '../components/SearchComponent';

// React native paper searchbar, ActivityIndicator, Colors
import { ActivityIndicator, Colors } from 'react-native-paper';

// Styled components
import styled from 'styled-components/native';

// Loading styled component
const Loading = styled(ActivityIndicator)`
 margin-left: - 25px;
`;

// LoadingContainer styled component
const LoadingContainer = styled.View`
 pasition: absolute;
 top: 50%;
 left: 50%;
`;

// RestaurantScreen function
export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
     {
      isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300}/>
        </LoadingContainer>
      )
     }

    <Search />

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
