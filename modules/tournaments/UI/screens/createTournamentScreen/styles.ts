import { Dimensions, PushNotificationIOS, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center'
    },
    inputs: {
        marginBottom: 10,
        width: '100%',
        height: '20%',
        backgroundColor: '#2C7873'
    },
    inputArea: {
        width: '100%',
        height: '40%',
        backgroundColor: '#2C7873'
    },
    inputsBlock: {
        width: '90%',
        height: '35%',
    },
    selectorsBlock: {
        height: '30%',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: 70,
    },
    textTitle: {
        fontSize: 25,
        fontWeight: '700',
        color: 'black'
    },
    buttons: {
        backgroundColor: '#004445',
        width: 200,
        height: '50%'
    },
    buttonsBlock: {

        alignItems: 'center',
        width: '100%',
        height: 100,
    },
    applyButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: '60%',
        backgroundColor: '#004445',
    }
})