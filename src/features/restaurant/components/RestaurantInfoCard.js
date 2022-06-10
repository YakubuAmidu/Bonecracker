import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Custom components
import star from '../../../../assets/star';

// Svg
import { SvgXml } from 'react-native-svg';

// React native paper Card
import { Card } from 'react-native-paper';

// Styled components
import styled from 'styled-components/native';

// RestaurantCard styled component
const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

// RestaurantCardCover styled component
const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

// Title styled component
const Title = styled(Text)`
 font-family: ${(props) => props.theme.fonts.heading};
 font-size: ${(props) => props.theme.fontSizes.body};
 color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
 font-family: ${(props) => props.theme.fonts.body};
 font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled(View)`
 padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
 padding-top: ${(props) => props.theme.space[2]};
 padding-bottom: ${(props) => props.theme.space[2]};
 flex-direction: row;
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

 return (
   <RestaurantCard>
     <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
     
     <Info>
     <Title>{name}</Title>
    
    <Rating>
    {
       ratingArray.map(() => (
        <SvgXml xml={star} width={20} height={20}/>
       ))
     }
    </Rating>

     <Address>{address}</Address>
     </Info>
   </RestaurantCard>
 )
}


