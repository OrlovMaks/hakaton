import { Dimensions, StyleSheet } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth / 1.1,
        height: 100,
        backgroundColor: 'rgb(0, 30, 66)',
        marginTop: 10

    },
    itemText: {
        color: 'white',
        fontSize: 20,
    },
    list: {
        height: windowHeight / 1.3,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: windowWidth,
    },
    updateButton: {
        bottom: 30,
        position: 'absolute'
    },
    registrationButton: {
        marginRight: 30,
        width: 100,
        height: '40%',
        backgroundColor: 'rgb(10, 200, 66)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    tournamentInfoButton: {
        width: '70%',
        height: '100%'
    },
    buttonText: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});