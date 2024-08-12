import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, {Marker} from 'react-native-maps';
import { useState, useRef } from "react";
import MapViewDirections from "react-native-maps-directions";
import imagePath from "../imagePath";
import { ChooseLocation } from './../../components/ChooseLocation';

export default function Index(){
    const [state, setState] = useState({
        pickupCords:{
            latitude: 30.7046,
            longitude: 76.7179,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },

        droplocationCors:{
            latitude: 30.7333,
            longitude: 76.7794,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    })

    const mapRef = useRef<MapView>(null);
    const {pickupCords, droplocationCors} = state
    const GOOGLE_MAPS_APIKEY = '';

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={StyleSheet.absoluteFill}>
                <MapView ref={mapRef}
                    style={StyleSheet.absoluteFill}
                    initialRegion={pickupCords}
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
                <ChooseLocation/>
            </View>
        </SafeAreaView>
    )
}