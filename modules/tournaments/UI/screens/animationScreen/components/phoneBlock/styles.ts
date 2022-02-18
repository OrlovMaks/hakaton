import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height,
        width,
        position: 'absolute',
        backgroundColor: 'gray',
    }
});
