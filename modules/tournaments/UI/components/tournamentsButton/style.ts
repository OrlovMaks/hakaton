import { Dimensions, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get('screen').width;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    titleContainer: {
        height: 65,
        width: SCREEN_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    }
});