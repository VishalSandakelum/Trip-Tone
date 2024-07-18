import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {  useFonts, Inter_600SemiBold, Inter_300Light, Inter_400Regular } from '@expo-google-fonts/inter';
import { Input } from './../components/input';
import { RememberMe } from './../components/RememberMe';
import { SocialBtn } from './../components/SocialMediaBtn';
import { PageDots } from "@/components/PageDots";

const { width, height } = Dimensions.get('window');

export default function SignIN(){
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_300Light,
        Inter_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    padding: 15,
                }}
            >
                <View style = {styles.firstcontainer}>
                    <Text style = {{
                        fontSize: 22,
                        fontFamily: 'Inter_600SemiBold',
                        textAlign: 'center',
                    }}>WELCOME BACK</Text>
                    <Text style = {{
                        fontSize: 14,
                        fontFamily: 'Inter_600SemiBold',
                        textAlign: 'center',
                        color: '#706C6C',
                        marginTop: height*0.01
                    }}>Welcome back! Please enter you details.</Text>
                </View>
                <View style = {styles.secondcontainer}>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <View style = {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <RememberMe/>
                        <Pressable>
                            <Text style={{
                                fontSize: 11,
                                fontFamily: 'Inter_400Regular',
                                color: '#706C6C',
                                textAlign: 'center',
                            }}>Forgot password ?</Text>
                        </Pressable>
                    </View>
                </View>
                <View style = {styles.thirdcontainer}>
                    <Pressable style={styles.signinbutton}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: 'Inter_600SemiBold',
                            color: '#FFFFFF',
                            textAlign: 'center',
                        }}>Sign in</Text>
                    </Pressable>
                    <SocialBtn btnText = 'Sign in with facebook' bg_color = '#31394C' socialType = 'facebook'/>
                    <SocialBtn btnText = 'Sign in with Google' bg_color = '#31394C' socialType = 'google'/>

                    <View style = {{
                        alignItems: 'center'
                    }}>
                        <PageDots 
                            color="#D9D9D9"
                            se_color="#D9D9D9"
                            thir_color="#34C2E1"
                            for_color="#D9D9D9"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    firstcontainer:{
        flex: 0.7,
        width: '100%',
        justifyContent: 'center',
    },

    secondcontainer:{
        flex: 2,
        width: '100%',
        justifyContent: 'space-around',
    },

    thirdcontainer:{
        flex: 1.5,
        width: '100%',
        justifyContent: 'space-around'
    },

    signinbutton:{
        backgroundColor: '#356EFF',
        width: '100%',
        height: height*0.06,
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: height*0.03,
    },
})