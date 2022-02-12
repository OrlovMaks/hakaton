import React, { FC } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles';

interface IProps {
    color: string,
};

export const ForgotPass:FC<IProps> = ({color}) => {

    return (
        <TouchableOpacity>
                <Text style={[styles.textButton,{ color: color || 'black' }]}>Forgot password ?</Text>
        </TouchableOpacity>
    );
};