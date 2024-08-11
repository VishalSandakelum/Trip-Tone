import { Dimensions, View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const { width, height } = Dimensions.get('window');
const GOOGLE_MAPS_APIKEY = 'AIzaSyCXsGWWknJtE9W7Ti432XFuhCcBy6uZs2Q';

export function ChooseLocation(){
    
    return(
        <View style={{top: height*0.05, width: width*0.90, alignSelf: "center", flex: 1}}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en',
                }}
            />
        </View>
    );
}