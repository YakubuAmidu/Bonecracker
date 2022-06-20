import React, { startTransition } from 'react';

// Custom components
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { SpacerComponent } from '../../../components/Spacer/SpacerComponent';
import { Text } from '../../../components/Typography/TextComponent';
import { 
  RestaurantCard, 
  RestaurantCardCover, 
  Address, 
  Info, 
  Rating,
  Section,
  SectionEnd,
  Icon, 
 } from './RestaurantInfoCardStyles';

// Svg
import { SvgXml } from 'react-native-svg';

// RestaurantInfoCard function
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
       ratingArray.map((id) => (
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


