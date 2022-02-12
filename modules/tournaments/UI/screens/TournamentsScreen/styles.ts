import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    header:{
    backgroundColor: 'aqua',  ////////////////////////////////
    width: windowWidth,
    height: '10%'
    },
    container:{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'red', ////////////////////////////
    }
})