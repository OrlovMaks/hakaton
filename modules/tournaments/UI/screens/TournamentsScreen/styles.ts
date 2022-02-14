import { Dimensions, PushNotificationIOS, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center'
    },
    selector: {
        width: 200,
        height: 30,
        backgroundColor: 'white', ////////////////////////////
        borderWidth: 2
    },
    filterButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
    },
    footer: {
        alignItems: 'center',
        position: 'absolute',
        bottom: windowHeight / 35,
        width: windowWidth / 1.1,
        height: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
        zIndex: 1,
        paddingRight: 5
    },
    paginationButtons: {
        alignItems: 'center',
        bottom: '1%',
        width: '40%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 1
    },
    textPage: {
        color: 'white',
        fontSize: 20
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
        height: 70,
        paddingHorizontal: 10
    },
    textTitle: {
        fontSize: 25,
        fontWeight: '700',
        color: 'black'
    },
    pageButtons: {
        backgroundColor: 'green',
        width: 30,
        height: 30
    }
})