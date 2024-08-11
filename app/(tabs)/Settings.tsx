import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings(){
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>Settings</Text>
            </View>
        </SafeAreaView>
    )
}