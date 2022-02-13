import { Dimensions, StyleSheet } from "react-native";
import { BackgroundImage } from "react-native-elements/dist/config";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: windowWidth,
        height: 100,
        backgroundColor: 'rgb(0, 30, 66)',
        marginTop: 5
    },
    itemText: {
        color: 'white',
        fontSize: 20,
    },
    list: {
        height: windowHeight / 1.15,
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
    registrationButton: {
        width: '100%',
        height: '40%',
        backgroundColor: 'rgb(10, 200, 66)',
        zIndex: 2
    },
    tournamentInfoButton: {
        width: '80%',
        height: '100%'
    }
});