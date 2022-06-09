import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';

export const RestaurantInfoCardComponent = ({ restaurant = {}}) => {
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
  <Card elevation={5} style={styles.card}>
    <Card.Cover key={name} source={{ uri: photos[1] }} style={styles.cover}/>

    <Text style={styles.title}>{name}</Text>
  </Card>
 )
}

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { backgroundColor: 'white', padding: 20 },
  title: { padding: 16 }
})

