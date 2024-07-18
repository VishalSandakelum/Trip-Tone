import { View, StyleSheet, Dimensions } from 'react-native'
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('window');

export function PageDots({ color = "#D9D9D9" , se_color = "#D9D9D9", thir_color = "#D9D9D9", for_color = "#D9D9D9", topto = 0}) {
    return(
        <View style = {[styles.dotcontainer, {marginTop: height*topto}]}>
            <View style = {[styles.dot, { backgroundColor: color }]}>
                <Link href="/index"></Link>
            </View>
            <View style = {[styles.dot, { backgroundColor: se_color }]}>
                <Link href="/permission"></Link>
            </View>
            <View style = {[styles.dot, { backgroundColor: thir_color }]}>
                <Link href="/signin"></Link>
            </View>
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
    },

    dot:{
        width: 12,
        height: 12,
        borderRadius: 100,
    }
})