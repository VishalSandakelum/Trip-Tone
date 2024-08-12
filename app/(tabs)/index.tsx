import { View, Text, StyleSheet, Dimensions, Alert, Vibration } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, {Marker} from 'react-native-maps';
import { useState, useRef, useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";
import imagePath from "../imagePath";
import { ChooseLocation } from './../../components/ChooseLocation';
import ApiKey from "@/ApiKey";

import * as Location from 'expo-location';
import { getDistance } from 'geolib';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width/screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function Index(){
    const [pickupCords, setPickupCords] = useState({
        latitude: 30.7333,
        longitude: 76.7794,
    });
    
    const [droplocationCors, setDroplocationCors] = useState({
        latitude: 0,
        longitude: 76.7179,
    });

    const [distance, setDistance] = useState<number>(0);

    const mapRef = useRef<MapView>(null);
    const GOOGLE_MAPS_APIKEY = ApiKey.GOOGLE_MAPS_APIKEY;
    useEffect(() => {
        const requestLocationPermission = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission Denied', 'Location permission is required to show your current location');
                return;
            }

            Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 5000, // Update every 5 seconds
                    distanceInterval: 10, // Update every 10 meters
                },
                (location) => {
                    const { latitude, longitude } = location.coords;
                    setPickupCords({ latitude, longitude });
                    mapRef.current?.animateCamera({
                        center: { latitude, longitude },
                        pitch: 0,
                        heading: 0,
                        altitude: 1000,
                        zoom: 15, // Adjust the zoom level as needed
                    }, { duration: 1000 }); // Smooth animation duration
                }
            );
        };

        requestLocationPermission();
    }, []);

    useEffect(() => {
        const calculatedDistance = getDistance(pickupCords, droplocationCors);
        setDistance(calculatedDistance);
        console.log(distance);

        if(distance<=900){
            Vibration.vibrate(10000); 
        }else{
            console.log('Oops');
        }

    }, [pickupCords, droplocationCors]);

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={StyleSheet.absoluteFill}>
                <MapView ref={mapRef}
                    style={StyleSheet.absoluteFill}
                    initialRegion={{
                        ...pickupCords,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                >
                    <Marker coordinate={pickupCords} image={imagePath.isGoldMarker}/>
                    <Marker coordinate={droplocationCors}/>

                    <MapViewDirections
                        origin={pickupCords}
                        destination={droplocationCors}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={3}
                        strokeColor="hotpink"
                        optimizeWaypoints={true}
                        onReady={result => {
                            if (mapRef.current) {
                                mapRef.current.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: 30,
                                        left: 30,
                                        top: 100,
                                        bottom: 300
                                    }
                                });
                            }
                        }}
                    />
                </MapView>
                <ChooseLocation setDroplocationCors={setDroplocationCors}/>
            </View>
        </SafeAreaView>
    )
}