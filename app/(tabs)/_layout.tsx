import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image } from "react-native";
import {  useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function TabLayout() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs screenOptions={{
      tabBarLabelStyle: { 
        fontSize: 10, 
        fontFamily: 'Inter_600SemiBold',
      },
      tabBarActiveTintColor: '#34C2E1', // Color when tab is active
      tabBarInactiveTintColor: '#B0B0B0', // Color when tab is inactive
    }}>
      <Tabs.Screen name="History" options={{ headerTitle: 'History',
        tabBarIcon: ({ color }) => (
          <Image
              source={require('../../assets/images/tabsimage/history.png')}
              style={{ width: 29, height: 29, tintColor: color }}
          ></Image>
        ),
       }} />

      <Tabs.Screen name="index" options={{ headerTitle: 'Home',
      tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Image
              source={require('../../assets/images/tabsimage/home.png')}
              style={{ width: 29, height: 29, tintColor: color }}
          ></Image>
        ), headerShown:false
       }} />

      <Tabs.Screen name="Settings" options={{ headerTitle: 'Profile',
        tabBarIcon: ({ color }) => (
          <Image
              source={require('../../assets/images/tabsimage/settings.png')}
              style={{ width: 29, height: 29, tintColor: color }}
          ></Image>
        ),
       }} />
    </Tabs>
  );
}