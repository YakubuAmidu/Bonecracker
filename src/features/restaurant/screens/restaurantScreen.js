import React from 'react';
import { StatusBar, View, SafeAreaView, FlatList } from 'react-native';

// Custom Components
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { SpacerComponent } from '../../../components/Spacer/SpacerComponent';

// React native paper searchbar
import { Searchbar } from 'react-native-paper';

// Styled components
import styled from 'styled-components/native';

// SafeArea styled component
const SafeArea = styled(SafeAreaView)`
 flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

// SearchContainer styled component
const SearchContainer = styled(View)`
 padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
    <SearchContainer>
       <Searchbar />
    </SearchContainer>
     <FlatList 
     data={[
       { name: 1 }, 
       { name: 2 },
       { name: 3 },
       { name: 4 },
       { name: 5 },
       { name: 6 },
       { name: 7 },
       { name: 8 },
       { name: 9 },
       { name: 10 },
       { name: 11 },
       { name: 12 },
       { name: 13 },
       { name: 14 }
      ]}

     renderItem={({ item }) => 
      (
    <SpacerComponent position={"bottom"} size={"large"}>
     <RestaurantInfoCard />
    </SpacerComponent>
      )
    }

    keyExtractor={( item ) => item.name}
    contentContainerStyle={{ padding: 16 }}
     />
   </SafeArea>
  )
}
