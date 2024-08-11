import { ChooseLocation } from "@/components/ChooseLocation";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History(){
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Text>History</Text>
                <ChooseLocation/>
            </View>
        </SafeAreaView>
    )
}