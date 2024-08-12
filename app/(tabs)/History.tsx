import { ChooseLocation } from "@/components/ChooseLocation";
import HistoryDetails from "@/components/HistoryDetail";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function History(){
    return(
        <SafeAreaView style={{ flex: 1 , padding: 20}}>
            <ScrollView>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Colombo'} distance={'40'}></HistoryDetails>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Pandura'} distance={'40'}></HistoryDetails>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Hapugala'} distance={'40'}></HistoryDetails>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Wakwella'} distance={'40'}></HistoryDetails>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Kandy'} distance={'40'}></HistoryDetails>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Jaffna'} distance={'40'}></HistoryDetails>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Waduramba'} distance={'40'}></HistoryDetails>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Baddegama'} distance={'40'}></HistoryDetails>
                <HistoryDetails date={'08/12/2024'} time={'08:30'} from={'Galle'} to={'Thalgaswala'} distance={'40'}></HistoryDetails>
            </ScrollView>
        </SafeAreaView>
    )
}