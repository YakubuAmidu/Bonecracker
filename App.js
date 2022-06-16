import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Fonts
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

// Custom Components
import { theme } from './src/Infrastructure/Theme';
import { RestaurantScreen } from "./src/Features/Restaurant/Screens/RestaurantScreen";
import { SafeArea } from './src/components/Utility/SafeAreaComponent';
import RestaurantRequest from './src/components/Services/Restaurants/RestaurantsServices';

// ThemeProvider
import { ThemeProvider } from 'styled-components/native';
// import { Settings } from 'react-native';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurant: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
};

const Settings = () => {
  return <SafeArea>
        <Text>Settings</Text>
        </SafeArea>
};

const Map = () => {
  return <SafeArea>
    <Text>Map</Text>
    </SafeArea>

}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
 return {
   tabBarIcon: ({ size, color }) => (
     <Ionicons name={iconName} size={size} color={color} />
   ),
 }
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
      <Tab.Navigator
      screenOptions= {createScreenOptions}
      tabBarOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
      >
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


