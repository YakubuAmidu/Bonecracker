import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
     <View style={styles.search}>
        <Text>Search</Text>
     </View>

     <View style={styles.list}>
      <Text>List</Text>
     </View>
    </SafeAreaView>

    <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   marginTop: StatusBar.currentHeight
 },
 search: {
   backgroundColor: "blue",
   padding: 16
 },
 list: {
   backgroundColor: "green",
   padding: 16,
   flex: 1
 }
});
