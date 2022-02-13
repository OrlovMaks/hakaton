import React, { FC, PropsWithChildren, } from 'react';
import { styles } from './styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface IProps{
    navigation: NavigationProp<any>
}

export const GoBackButton:FC<PropsWithChildren<IProps>> = ({navigation}) => {

    return (
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View>
                <Image
                style={styles.image}
                    source={require('../../../../../assets/goBackArrow.png')}
                />
            </View>
        </TouchableOpacity>
    );
};