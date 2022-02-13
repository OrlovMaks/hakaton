import { Dimensions, PushNotificationIOS, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#005B4C'
    },
    header: {
        backgroundColor: 'aqua',  ////////////////////////////////
        width: windowWidth,
        height: '10%',
        display: 'flex',
        flexDirection: 'row'
    },
    selector: {
        width: 200,
        height: 30,
        backgroundColor: 'white', ////////////////////////////
        borderWidth: 2
    },
    filterButton: {
        backgroundColor: 'black',
        width: 70,
        height: 70,
        borderRadius: 50
    },
    footer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 5,
        width: windowWidth,
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 1
    },
    paginationButtons: {
        alignItems: 'center',
        bottom: 5,
        width: '50%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 1
    },
    textPage:{
        color: 'white',
        fontSize: 20
    }
})