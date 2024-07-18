import { View, Text, Dimensions } from "react-native";
import Checkbox from 'expo-checkbox';
import {  useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

import { useState } from 'react';
const { width, height } = Dimensions.get('window');

export function RememberMe(){
    const [isChecked, setChecked] = useState(false);

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return(
        <View style = {{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text style = {{
                fontSize: 11,
                fontFamily: 'Inter_400Regular',
                marginLeft: width*0.02,
            }}>Remember me</Text>
        </View>
    )
}