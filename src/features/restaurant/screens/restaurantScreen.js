import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

// Custom Components
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';

// React native paper searchbar
import { Searchbar } from 'react-native-paper';

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
       <Searchbar />
    </View>
  
    <View style={styles.list}>
     <RestaurantInfoCard />
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  search: {
    padding: 16
  },
  list: {
    backgroundColor: "green",
    padding: 16,
    flex: 1
  }
 });