import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width,
        paddingTop:70,
        paddingBottom:20 ,
    }
});