import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Dimensions, Image } from "react-native";
import {  useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';

const { width, height } = Dimensions.get('window');

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
        fontSize: 13, 
        fontFamily: 'Inter_600SemiBold',
        marginBottom: height*0.02,
      },
      tabBarActiveTintColor: '#34C2E1', // Color when tab is active
      tabBarInactiveTintColor: '#B0B0B0', // Color when tab is inactive

      tabBarStyle: {
        //backgroundColor: 'red', // Change this to your desired color
        paddingTop: height*0.04,
        height: height*0.15,
        borderTopLeftRadius: width*0.08,
        borderTopRightRadius: width*0.08,
      },
    }}>
      <Tabs.Screen name="History" options={{ headerTitle: 'History',
        tabBarIcon: ({ color }) => (
          <Image
              source={require('../../assets/images/tabsimage/history.png')}
              style={{ width: 29, height: 29, tintColor: color }}
          ></Image>
        ),headerShown:false
       }} />

      <Tabs.Screen name="index" options={{ headerTitle: 'Home',
      tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Image
              source={require('../../assets/images/tabsimage/maps.png')}
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
        ), headerShown:false
       }} />
    </Tabs>
  );
}