import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

// Custom Components
import { theme } from './src/Infrastructure/Theme';
import { RestaurantScreen } from "./src/Features/Restaurant/Screens/RestaurantScreen";

// ThemeProvider
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <RestaurantScreen />
    </ThemeProvider>

    <ExpoStatusBar style="auto" />
    </>
  );
}


