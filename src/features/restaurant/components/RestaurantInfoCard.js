import React from 'react';
import { View } from 'react-native';

// Custom components
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { SpacerComponent } from '../../../components/Spacer/SpacerComponent';
import { Text } from '../../../components/Typography/TextComponent';

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

// Address styled component
const Address = styled(Text)`
 font-family: ${(props) => props.theme.fonts.body};
 font-size: ${(props) => props.theme.fontSizes.caption};
`;

// Info styled component
const Info = styled(View)`
 padding: ${(props) => props.theme.space[3]};
`;

// Rating styled component
const Rating = styled(View)`
 flex-direction: row;
 padding-top: ${(props) => props.theme.space[2]};
 padding-bottom: ${(props) => props.theme.space[2]};
`;

// Section styled component
const Section = styled(View)`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

// SectionEnd styled component
const SectionEnd = styled(View)`
 flex-direction: row;
 align-items: center;
 justify-content: center;
`;

// Icon styled component
const Icon = styled.Image`
 width: 15px;
 height: 15px;
`;

export const RestaurantInfoCard = ({ restaurant = {}}) => {
  const { 
    name = "Some restaurant", 
    photos = [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThERwRjXi7hXOYN-g_JSjSL-5J6O6aZsyJ1OxBWn_wWySzCt8Jy9Q6ngKuCH41ZouXtDo&usqp=CAU"
    ], 
    icon = [
      "https://cdn.onlinewebfonts.com/svg/img_556082.png"
    ], 
    address = "100 some street", 
    isOpenNow = true, 
    rating = 4, 
    isClosedTemporarily = true
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

 return (
   <RestaurantCard elevation={5}>
     <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
     
     <Info>
     <Text variant={"label"}>{name}</Text>
    

   <Section>
   <Rating>
    {
       ratingArray.map(() => (
        <SvgXml xml={star} width={20} height={20}/>
       ))
     }
    </Rating>
    <SectionEnd>
      {
        isClosedTemporarily && (
          <Text variant={"error"}>CLOSED TEMPORARILY</Text>
        )
      }
      <SpacerComponent position={"left"} size={"large"}>
      {
       isOpenNow && <SvgXml xml={open} width={20} height={20} />
      }
      </SpacerComponent>

     <SpacerComponent position={"left"} size={"large"}>
       <Icon source={{ uri: icon[0] }} />
       </SpacerComponent>
    </SectionEnd>
   </Section>

     <Address>{address}</Address>
     </Info>
   </RestaurantCard>
 )
}


