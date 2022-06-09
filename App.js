import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

// Custom Components
import { RestaurantScreen } from "./src/features/restaurant/Screens/RestaurantScreen";

export default function App() {
  return (
    <>
    <RestaurantScreen />

    <ExpoStatusBar style="auto" />
    </>
  );
}


