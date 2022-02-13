import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        // backgroundColor:'#896E69',
        height: 70,
        paddingHorizontal: 10
    },
    textTitle:{
        fontSize:40,
        fontWeight:'700',
        // color: 'black'
    }
});