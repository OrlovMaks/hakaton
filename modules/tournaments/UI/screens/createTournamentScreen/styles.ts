import { Dimensions, PushNotificationIOS, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    inputs:{
        width: '100%',
        height: '20%',
        backgroundColor: 'green'
    },
    inputsBlock:{
        width: '100%',
        height: '50%',
        backgroundColor: 'green'
    },
    selectorsBlock:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
       width: '100%',
       backgroundColor: 'black',
       height: windowHeight
    }
})