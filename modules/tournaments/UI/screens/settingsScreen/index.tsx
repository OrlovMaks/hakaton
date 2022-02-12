import React, { useContext } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { AppContext } from '../../../../../src/theme/ui';
import { LocalizationContext } from '../../../../../src/localization/ui';
import { userData } from '../../../../../src/appStore/redux/selectors/userSignSelector'
import { useSelector } from 'react-redux';

export const SettingsScreen = () => {
    const currentUserData = useSelector(userData)
    const { colorTheme } = useContext(AppContext);
    const LocalContext = useContext(LocalizationContext);

    return (
        <Text>{LocalContext.translations.TITLE_SETTINGS}</Text>
    );
};
