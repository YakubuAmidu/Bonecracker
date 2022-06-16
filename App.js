import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Fonts
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// Custom Components
import { theme } from './src/Infrastructure/Theme';
import { RestaurantScreen } from "./src/Features/Restaurant/Screens/RestaurantScreen";

// ThemeProvider
import { ThemeProvider } from 'styled-components/native';
// import { Settings } from 'react-native';

const Tab = createBottomTabNavigator();

const Settings = () => {
  return <Text>Setting</Text>
};

const Map = () => {
  return <Text>Map</Text>
}

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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={"Restaurant"} component={RestaurantScreen}/>
        <Tab.Screen name={"Map"} component={Map}/>
        <Tab.Screen name={"Settings"} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </ThemeProvider>

    <ExpoStatusBar style="auto" />
    </>
  );
}


