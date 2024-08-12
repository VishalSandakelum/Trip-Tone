import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {  useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';

export default function Settings(){
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <SafeAreaView style={{ flex: 1 , padding: 20}}>
            <View>
                <View style={{display: 'flex', flexWrap: "wrap", flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: 'Inter_600SemiBold',
                        position: 'relative',
                    }}>Under The Construction</Text>
                </View>
                <Image
                    source={require('../../assets/images/settings/underconstruction.gif')}
                    style={{ width: '100%', height: 500, marginTop: 50 }}
                ></Image>
            </View>
        </SafeAreaView>
    )
}