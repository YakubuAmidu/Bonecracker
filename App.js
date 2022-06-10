import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

// Fonts
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// Custom Components
import { theme } from './src/Infrastructure/Theme';
import { RestaurantScreen } from "./src/Features/Restaurant/Screens/RestaurantScreen";

// ThemeProvider
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  let [latoLoaded] = useOswald({
    Lato_400Regular,
  });
  let [oswaldLoaded] = useLato({
    Oswald_400Regular,
  });

  if(!latoLoaded || !oswaldLoaded){
    return null;
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <RestaurantScreen />
    </ThemeProvider>

    <ExpoStatusBar style="auto" />
    </>
  );
}


