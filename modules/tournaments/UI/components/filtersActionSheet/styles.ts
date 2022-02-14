import { Dimensions, StyleSheet } from "react-native";
const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        position: 'absolute',
        zIndex: 1,
    },
    visibleContainer: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT / 2,
        backgroundColor: 'rgb(0, 63, 68)',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    hideButton: {
        width: WINDOW_WIDTH,
        height: WINDOW_HEIGHT,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    checkBoxBlock: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    searchButton: {
        marginTop: 20,
        width: '40%',
        height: '15%',

    }
})