import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        display: "flex",
        flexDirection: 'column',
    },
    signEmailWrapper:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 50
    },
    signEmailText:{
        color: '#626262',
        fontSize: 14,
        fontWeight: '600'
    },
    formWrapper:{
        paddingHorizontal:20
    }
});