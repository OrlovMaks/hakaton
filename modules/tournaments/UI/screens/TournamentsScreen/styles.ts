import { Dimensions, StyleSheet } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'red', ////////////////////////////
    }, 
    header:{
    backgroundColor: 'aqua',  ////////////////////////////////
    width: windowWidth,
    height: '10%',
    display: 'flex',
    flexDirection: 'row'
    },
   selector:{
        width: 200,
        height: 30,
        backgroundColor: 'white', ////////////////////////////
        borderColor: 'black',
        borderWidth: 2
    }
})