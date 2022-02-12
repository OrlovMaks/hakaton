import { StyleSheet,Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const IMAGE_HEIGHT = SCREEN_WIDTH / 1.78

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:25
    },
    contentWrapper:{
        paddingTop: 35,
        position: 'absolute',
        width: SCREEN_WIDTH,
        paddingHorizontal:20
    },
    image: {
        width: SCREEN_WIDTH,
        height: IMAGE_HEIGHT,
    },
});