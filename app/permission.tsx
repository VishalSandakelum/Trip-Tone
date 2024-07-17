import { Text, View, StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {  useFonts, Inter_600SemiBold, Inter_300Light } from '@expo-google-fonts/inter';
import { A } from '@expo/html-elements';
import { PageDots } from '@/components/PageDots';

const { width, height } = Dimensions.get('window');

export default function Permission(){
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
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 15,
                }}
            >
                <View style = {styles.firstContainer}>
                    <Image style = {{
                        marginRight: width*0.07
                    }} source={require('../assets/images/permissionpage/travelworld.png')}/>

                    <View style = {styles.permissionDetailsContainer}>
                        <Text style = {{
                            fontSize: 20,
                            fontFamily: 'Inter_600SemiBold',
                        }}>Allow Location Access</Text>
                        <Text style = {{
                            fontSize: 14,
                            fontFamily: 'Inter_600SemiBold',
                            color: '#706C6C',
                            textAlign: 'center',
                            marginTop: height*0.03
                        }}>We use this to track your live location.you can edit access in your phone’s settings.</Text>
                    </View>
                </View>
                <View style = {styles.secondContainer}>
                    <Text style = {{
                        fontSize: 11,
                        fontFamily: 'Inter_300Light',
                        marginHorizontal: width*0.17,
                        textAlign: 'center',
                    }}>By allowing access,you consent to share your personal info with Google Maps as stated in the 
                    <A href="https://google.com" style = {{
                        textDecorationLine: 'underline', color: '#000000',
                    }}> Privacy Policy</A>
                    </Text>

                    <Pressable style={styles.allowbutton}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'Inter_600SemiBold',
                            color: '#FFFFFF',
                            textAlign: 'center',
                        }}>Allow access</Text>
                    </Pressable>

                    <PageDots 
                        color="#D9D9D9"
                        se_color="#34C2E1"
                        thir_color="#D9D9D9"
                        for_color="#D9D9D9"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    firstContainer:{
        height: height*0.38,
        width: '100%',
        alignItems: 'center',
        marginTop: height*0.07,
        justifyContent: 'space-between'
    },

    secondContainer:{
        height: height*0.20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    permissionDetailsContainer:{
        alignItems: 'center',
        marginBottom: height*0.02,
        marginHorizontal: width*0.15,
    },

    allowbutton:{
        backgroundColor: '#356EFF',
        width: '100%',
        height: height*0.06,
        justifyContent: 'center',
        borderRadius: 7,
    }
})