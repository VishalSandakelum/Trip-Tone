import { View, Text, Pressable, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get('window');

type SocialIcons = {
    [key: string]: any;
    facebook: any;
    google: any;
};

const socialIcons: SocialIcons = {
    facebook: require('../assets/images/signinpage/facebook.png'),
    google: require('../assets/images/signinpage/google.png'),
};

export function SocialBtn({btnText = '', bg_color = '', socialType = 'facebook'}){
    const iconSource = socialIcons[socialType];
    
    return(
        <View>
            <Pressable style={{
                backgroundColor: bg_color,
                width: '100%',
                height: height*0.06,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                flexDirection: 'row',
            }}>
                <Image style = {{
                    width: width*0.06,
                    height: height*0.03,
                    position: 'absolute',
                    left: '7%',
                }} source={iconSource}></Image>
                <Text style={{
                    fontSize: 17,
                    fontFamily: 'Inter_600SemiBold',
                    color: '#FFFFFF',
                    textAlign: 'center',
                }}>{btnText}</Text>
            </Pressable>
        </View>
    )
}