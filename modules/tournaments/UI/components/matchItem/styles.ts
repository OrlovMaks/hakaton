import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:'center',
        // backgroundColor:'#FFA577',
        marginVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        minHeight: 60 
    },
    scoreWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems:'center',
    },
    scoreText:{
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
        marginHorizontal: 2
    },
    dataText:{
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
    }
});