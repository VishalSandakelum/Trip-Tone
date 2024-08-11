import { View, Text, TextInput, Dimensions } from "react-native";
import {  useFonts, Inter_600SemiBold, Inter_300Light } from '@expo-google-fonts/inter';
import { useState } from "react";

const { width, height } = Dimensions.get('window');

const[email, setEmail]=useState("");
const[password, setPassword]=useState("");

export function Input({placeholder = ""}){
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Inter_300Light,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    let toSimple = placeholder.toLowerCase();
    let placeholderText = `Enter your ${toSimple}`;

    return(
        <View>
            <Text style = {{
               fontSize: 16,
               fontFamily: 'Inter_600SemiBold',
               color: '#706C6C',
               marginLeft: width*0.02, 
            }}>{placeholder}</Text>
            <TextInput value={email} onChangeText={setEmail} style = {{
                backgroundColor: '#D9D9D9',
                height: height*0.07,
                borderRadius: 10,
                paddingHorizontal: width*0.07,
                fontSize: 13,
                fontFamily: 'Inter_600SemiBold',
                color: '#000000',
                textDecorationLine: "none",
                marginTop: height*0.01,
            }}
            placeholder={placeholderText}
            placeholderTextColor="#000000"
            />
        </View>
    )
}