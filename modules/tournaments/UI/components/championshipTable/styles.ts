import { Dimensions, StyleSheet } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('screen').width;
const WINNER_WIDTH = WINDOW_WIDTH - 220;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 210,
        height: 210,
    },
    upperTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: 200,
        borderWidth: 4,
        borderBottomWidth: 2

    },
    lowerTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 100,
        width: 200,
        borderWidth: 4,
        borderTopWidth: 2

    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    winner: {
        height: 200,
        width: WINNER_WIDTH,
        alignItems: 'center',
        borderWidth: 4,
        borderLeftWidth: 2
    }
});