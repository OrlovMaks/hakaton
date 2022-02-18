import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        width:width,
        flexDirection: 'column',
        justifyContent:'center',
        paddingBottom:20,
    },
    numberWrapper:{
        flexDirection: 'row',
        justifyContent:'center'
    },
    numberText:{
        color:'green',
        fontSize:18,
        fontWeight:'500',
        marginRight: 10
    },
    cityText:{
        color:'grey',
        fontSize:18,
        fontWeight:'500',
        marginLeft: 10
    }
});