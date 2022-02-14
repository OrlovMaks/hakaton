import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        minHeight: 60,
        width: "100%"
    },
    scoreWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    scoreText: {
        maxWidth: "90%",
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
        marginHorizontal: 3
    },
    dataText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
    }
});