import React, { useContext } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import { AppContext } from '../../../../../src/theme/ui';
import { LocalizationContext } from '../../../../../src/localization/ui';
import { useSelector } from 'react-redux';
import { userData } from '../../../../../src/appStore/redux/selectors/userSignSelector';

export const HomeScreen = () => {
    const currentUserData = useSelector(userData)
    const { colorTheme } = useContext(AppContext);
    const LocalContext = useContext(LocalizationContext);

    return (
        <Text>{LocalContext.translations.TITLE}</Text>
    );
};
