import { View, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export function PageDots({ color = "#D9D9D9" , se_color = "#D9D9D9", thir_color = "#D9D9D9", for_color = "#D9D9D9"}) {
    return(
        <View style = {styles.dotcontainer}>
            <View style = {[styles.dot, { backgroundColor: color }]}></View>
            <View style = {[styles.dot, { backgroundColor: se_color }]}></View>
            <View style = {[styles.dot, { backgroundColor: thir_color }]}></View>
            <View style = {[styles.dot, { backgroundColor: for_color }]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    dotcontainer:{
        padding:10,
        display: "flex",
        flexDirection: "row",
        gap: 8,
        marginTop: height*0.06
    },

    dot:{
        width: 12,
        height: 12,
        borderRadius: 100,
    }
})