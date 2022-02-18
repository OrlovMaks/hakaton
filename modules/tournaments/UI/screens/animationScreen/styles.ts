import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1
    },
    kub: {
        height: 200, 
        width: 200, 
        justifyContent: 'center', 
        backgroundColor: '#4649ad'
    },
    kub2: {
        height: 200, 
        width: 200, 
        justifyContent: 'center', 
        backgroundColor: '#4649af'
    },
    fadeWrapp:{
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        with:'100%'
    },
    burger:{
        width:60,
        height:60,
        backgroundColor: 'green',
    },
    burgerMenu:{
        backgroundColor: 'red',
        position: 'absolute',
        paddingTop:90,
        zIndex: 1
    },
    burgerWrapp:{
        flexDirection:'row',
        justifyContent: 'flex-end',
        paddingHorizontal:10,
        paddingVertical:10
    }
});