import React, { FC } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';

interface IProps {
    title: string,
    backgroundColor: string,
    color: string,
    signFunc: () => void,
    disabled: boolean
};

export const SignButton: FC<IProps> = ({ title, backgroundColor, color, signFunc, disabled }) => {

    return (
        <TouchableOpacity onPress={signFunc} disabled={!disabled}>
            <View style={[styles.container, disabled ? { backgroundColor: backgroundColor } : { backgroundColor: '#b3c6ff' }]}>
                <Text style={[styles.textButton,{ color: color || 'black' }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};