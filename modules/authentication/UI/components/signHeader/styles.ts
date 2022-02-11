import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 23,
        fontWeight: '400',
        color: 'white'
    },
    nextScreen: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
    },
    nextScreenArea: {
        display: 'flex',
        flexDirection: 'row'
    },
    arrow: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white'
    }
});