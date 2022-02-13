import { Dimensions, PushNotificationIOS, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#005B4C'
    },
    inputs:{
      
        width: '100%',
        height: '20%',
        backgroundColor: 'white'
    },
    textArea:{
        width: '100%',
        height: '40%',
        backgroundColor: 'white'
    }
})