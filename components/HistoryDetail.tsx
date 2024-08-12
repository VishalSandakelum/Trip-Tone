import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import {  useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Sora_400Regular, Sora_600SemiBold } from '@expo-google-fonts/sora';

interface historyData{
    date:String
    time:String
    from:String
    to:String
    distance: String
}

export default function HistoryDetails(props:historyData){
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Sora_400Regular,
        Sora_600SemiBold,
    });
    
    if (!fontsLoaded) {
        return null;
    }
    
    return(
        <View style = {style.Container}>
            <View style = {{
                display: 'flex', 
                flexDirection: 'row', 
                position: 'relative', 
                width: '100%', 
                //backgroundColor: 'red', 
                flexWrap: 'wrap', 
                justifyContent: 'space-between'
            }}>
                <Text style = {style.DateText}>{props.date}</Text>
                <Text style = {style.DateText}>{props.time}</Text>
            </View>
            <View style = {{
                display: 'flex',
                flexDirection: 'row',
                //backgroundColor: 'green',
                marginTop: 15
            }}>
                <Text style = {style.Places}>{props.from}</Text>
                <Text style = {style.Places}>to</Text>
                <Text style = {style.Places}>{props.to}</Text>
            </View>

            <View style = {{
                display: 'flex',
                flexDirection: 'row',
                //backgroundColor: 'green',
                marginTop: 15,
                justifyContent: 'center'
            }}>
                <Text style = {style.Distance}>{props.distance}</Text>
                <Text style = {style.Distance}>KM</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 10,
        marginBottom: 20
    },

    DateText:{
        color: '#FFFFFF',
        fontSize: 13,
        fontFamily: 'Inter_600SemiBold',
        //backgroundColor: 'green',
    },

    Places:{
        fontSize: 18,
        fontFamily: 'Sora_600SemiBold',
        marginRight: 7,
        color: '#FFFFFF'
    },

    Distance:{
        fontSize: 16,
        fontFamily: 'Sora_600SemiBold',
        marginRight: 7,
        color: '#FFFFFF'
    }
})