import { Image, StyleSheet, Text, View ,Dimensions } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  useFonts, Inter_600SemiBold, Inter_300Light } from '@expo-google-fonts/inter';
import { PageDots } from '@/components/PageDots';

const { width, height } = Dimensions.get('window');
export default function Index() {
  let [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 10,
        paddingBottom: 10,
      }}
      >
        <Image
          style={styles.maplogo}
          source={require('../assets/images/firstpage/googlemaps.png')}
        />
        <Image
          style={styles.mapimg}
          source={require('../assets/images/firstpage/firstpageimg.png')}
        />
        <View
        style = {{
          marginTop:height*0.17,
          height: "9%",
          width: "55%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Text style={styles.mutultext}>Mutual Support</Text>
          <Text style={styles.mutulParagraph}>Millions of trusted travellers serving the community</Text>
        </View>
        <View style = {styles.recomandationConatiner}>
          <Image
            source={require('../assets/images/firstpage/checkmark.png')}
          />
          <View style = {styles.recomandationparagraph}>
            <Text style={styles.recomandationtitle}>Personalized Recommendations</Text>
            <Text style={styles.recomandationdetails}>Allow us to recommend content to you, including experience optimization, scene linkage, and best usage advice for devices. </Text>
          </View>
        </View>
        <PageDots 
                color="#34C2E1"
                se_color="#D9D9D9"
                thir_color="#D9D9D9"
                for_color="#D9D9D9"
                topto={0.06}
        />
        {/*
        <Link href="/login">View details</Link>
       */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maplogo:{
    position:"absolute",
    top: "5%"
  },

  mapimg:{
    position: "relative",
    top: "20%"
  },

  mutultext:{
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold',
  },

  mutulParagraph:{
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold',
    textAlign: "center",
    color: "#706C6C"
  },

  recomandationConatiner:{
    backgroundColor: "#D9D9D9",
    opacity: 32,
    width: width*0.90,
    borderRadius: 8,
    marginTop: height*0.07,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingVertical: height*0.03,
  },

  recomandationparagraph:{
    display: "flex",
    width: "80%",
    flexDirection: "column",
    marginLeft: width*0.05,
  },

  recomandationtitle:{
    fontSize: 12,
    fontFamily: 'Inter_600SemiBold',
    color: '#828282',
  },

  recomandationdetails:{
    fontSize: 13,
    fontFamily: 'Inter_300Light',
    color: '#8A8A8A',
  }
})
