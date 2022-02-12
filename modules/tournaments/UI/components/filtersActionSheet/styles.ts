import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'black'
    },
    visibleContainer: {
        width: windowWidth,
        height: windowHeight / 2,
        backgroundColor: 'aqua', ////////////////////////////
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selector: {
        width: 200,
        height: 30,
        backgroundColor: 'white', ////////////////////////////
        borderColor: 'black',
        borderWidth: 2
    },
    hideButton: {
        width: windowWidth,
        height: windowHeight,
    }
})