import { Dimensions, StyleSheet } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100,
    },
    itemText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 20,
    },
    list: {
        height: windowHeight/1.15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: windowWidth,
 
    },
    updateButton: {
        bottom: 30,
        position: 'absolute'
    },
});