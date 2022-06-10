import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// React native paper Card
import { Card } from 'react-native-paper';

// Styled components
import styled from 'styled-components/native';

// RestaurantCard styled component
const RestaurantCard = styled(Card)`
background-color: white;
`;

// RestaurantCardCover styled component
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 20px;
`;

// Title styled component
const Title = styled(Text)`
 padding: 16px;
 color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {}}) => {
  const { 
    name = "Some restaurant", 
    photos = [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThERwRjXi7hXOYN-g_JSjSL-5J6O6aZsyJ1OxBWn_wWySzCt8Jy9Q6ngKuCH41ZouXtDo&usqp=CAU"
    ], 
    icon, 
    address = "100 some street", 
    isOpenNow = true, 
    rating = 4, 
    isClosedTemporarily = true
  } = restaurant;

 return (
   <RestaurantCard>
     <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>

     <Title>{name}</Title>
   </RestaurantCard>
 )
}


