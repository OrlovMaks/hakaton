import { Dimensions, StyleSheet } from 'react-native';
const widthScreen = Dimensions.get('screen').width
const heightScreen = Dimensions.get('screen').height


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    image: {
        width: widthScreen,
        height: heightScreen,
        justifyContent: "center",
        position: 'absolute',
    },
    componentsWrap: {
        marginTop:15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: heightScreen * 30 / 100,
    },
    buttonWrapper: {
        marginBottom:20,
    }
});