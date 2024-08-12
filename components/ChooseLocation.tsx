import ApiKey from "@/ApiKey";
import { useState } from "react";
import { Dimensions, View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {  useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Sora_400Regular, Sora_600SemiBold } from '@expo-google-fonts/sora';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = ApiKey.GOOGLE_MAPS_APIKEY;

interface Coordinates {
    latitude: number;
    longitude: number;
}

interface ChooseLocationProps {
    //setPickupCords: (coords: Coordinates) => void;
    setDroplocationCors: (coords: Coordinates) => void;
}

export function ChooseLocation({setDroplocationCors }:ChooseLocationProps){

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
        Sora_400Regular,
        Sora_600SemiBold,
      });
    
      if (!fontsLoaded) {
        return null;
      }

    /*const [state, setState] = useState({
        pickupCords:{},
        destinationCords:{}
    })*/

    //const {pickupCords,destinationCords}= state

    const onPressAddress = (data:any, details:any) => {
        console.log('Dertail fetched ==>',details);
        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        //setPickupCords({ latitude: lat, longitude: lng });
        setDroplocationCors({ latitude: lat, longitude: lng });
    }

    /*const fetchAddressCords = (lat:any,lng:any) =>{
        setState({
            ...state, pickupCords:{
                latitude:lat,
                longitude:lng
            }
        })
    }*/

    /*const fetchDestinationsCords = (lat:any,lng:any) =>{
        setState({
            ...state, destinationCords:{
                latitude:lat,
                longitude:lng
            }
        })
    }*/
    
    return(
        <View style={{top: height*0.05, width: width*0.90, alignSelf: "center", flex: 1}}>
            <GooglePlacesAutocomplete
                placeholder='Enter Location'
                onPress={onPressAddress}
                fetchDetails = {true}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: {
                        position: 'relative',
                        borderRadius: 200,
                        borderWidth: 2,
                        borderColor: '#34C2E1',
                        backgroundColor: '#fff',
                        paddingHorizontal: 20
                    },

                    textInput: {
                        borderRadius: 200,
                        height: '100%',
                        color: '#5d5d5d',
                        fontSize: 16,
                        fontFamily: 'Sora_600SemiBold',
                    },
                }}
            />
        </View>
    );
}