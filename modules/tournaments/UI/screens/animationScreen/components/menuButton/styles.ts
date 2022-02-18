import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 48,
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        right: 15,
        top: 15,
        shadowColor: '#000',
        elevation: 4,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});
