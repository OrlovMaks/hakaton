import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalInput: {
        minWidth: 150,
        marginBottom: 15,
        textAlign: "center"
    },
    inputsWrapper:{
        display:'flex',
        flexDirection:'column',
    },
    playerWrapper:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5
    },
    scoreInput:{
        borderWidth:2,
        borderColor: 'black',
        minWidth: 55,
        textAlign: 'center'
    },
    playerText:{
        fontSize:25,
        fontWeight: '500',
        color: 'black',
        marginRight: 10
    }

});