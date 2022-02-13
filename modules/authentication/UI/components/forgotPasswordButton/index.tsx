import React, { FC, useContext } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { LocalizationContext } from '../../../../../src/localization';
import { ILocalizationContext } from '../../../../../src/localization/entities/ILocalizationContext';
import { styles } from './styles';

interface IProps {
    color: string,
};

export const ForgotPass:FC<IProps> = ({color}) => {
    const Localization = useContext<ILocalizationContext>(LocalizationContext);
    
    return (
        <TouchableOpacity>
                <Text style={[styles.textButton,{ color: color || 'black' }]}>{Localization.translations.FORGOT_PASSWORD_TITLE}</Text>
        </TouchableOpacity>
    );
};