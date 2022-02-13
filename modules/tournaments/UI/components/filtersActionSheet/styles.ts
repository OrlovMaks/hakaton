import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        position: 'absolute',
        zIndex: 1,
    },
    visibleContainer: {
        width: windowWidth,
        height: windowHeight / 2,
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
        width: windowWidth,
        height: windowHeight,
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