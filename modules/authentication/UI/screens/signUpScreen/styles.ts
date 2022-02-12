import { Dimensions, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const IMAGE_HEIGHT = SCREEN_WIDTH / 1.78
const FORM_WRAPPER_HEIGHT = SCREEN_HEIGHT - IMAGE_HEIGHT - 40

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    signEmailWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signEmailText: {
        color: '#626262',
        fontSize: 14,
        fontWeight: '600'
    },
    image: {
        width: SCREEN_WIDTH,
        height: IMAGE_HEIGHT,
    },
    formWrapper: {
        display:"flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height: FORM_WRAPPER_HEIGHT
    },
    buttonWrapp:{
        marginBottom: 15
    },
    forgotPassWrapp:{
        marginBottom: 5
    }
});