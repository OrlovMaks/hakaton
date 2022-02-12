import React, { useContext } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../../src/localization';

export const MatchesScreen = () => {
    const LocalContext = useContext(LocalizationContext);

    return (
        <Text>{LocalContext.translations.TITLE}</Text>
    );
};