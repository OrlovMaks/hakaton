import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { getData } from '../../../../../src/appStore/asyncStorage/getData';
import { setIsAuthorizeAction, setUserDataAction } from '../../../../../src/appStore/redux/authenticationState/authenticationStateActions';
import { AppDispatch } from '../../../../../src/appStore/redux/store';
import { LocalizationContext } from '../../../../../src/localization';
import { ILanguages } from '../../../../../src/localization/entities/ILanguages';
import { ILocalizationContext } from '../../../../../src/localization/entities/ILocalizationContext';
import { ThemesContext } from '../../../../../src/themes';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { styles } from './styles'


export const LoadingScreen: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const ThemeContext = useContext<IThemesContext>(ThemesContext);
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);

    useEffect((): void => {
        const checkUserAuthorization = async () => {
            const userData = await getData('userData');
            if (userData) {
                dispatch(setUserDataAction(JSON.parse(userData)));
                dispatch(setIsAuthorizeAction(true));
            };
            const previousLanguage: string | undefined = await getData('localization');
            const previousTheme: string | undefined = await getData('theme');
            if ((previousLanguage === 'RU' || previousLanguage === 'EN') && (previousTheme === 'LIGHT' || previousTheme === 'DARK')) {
                LocalContext.setLanguage(previousLanguage);
                ThemeContext.setTheme(previousTheme);
            };
        };
        checkUserAuthorization();

    }, []);

    return (
        <View style={styles.container}></View>
    );
};