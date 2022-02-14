import { Dimensions, StyleSheet } from 'react-native';

const WINDOW_HEIGHT = Dimensions.get('screen').height;
const LIST_HEIGHT = WINDOW_HEIGHT - 210;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resultsList: {
        height: LIST_HEIGHT,
        width: '100%',
        padding: 10
    }
});