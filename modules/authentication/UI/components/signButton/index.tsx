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
        <View>
            <TouchableOpacity onPress={signFunc} disabled={!disabled}>
                <View style={disabled ? { backgroundColor: backgroundColor } : { backgroundColor: '#b3c6ff' }}>
                    <Text style={{ color: color || 'black' }}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};