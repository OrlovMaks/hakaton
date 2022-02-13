import { Dimensions, StyleSheet } from 'react-native';
const widthScreen = Dimensions.get('screen').width
const heightScreen = Dimensions.get('screen').height


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    image: {
        width: widthScreen,
        height: heightScreen,
        justifyContent: "center",
        position: 'absolute',
    },
});