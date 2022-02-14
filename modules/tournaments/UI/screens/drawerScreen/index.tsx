import React, { FC, useContext, useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ILanguages } from '../../../../../src/localization/entities/ILanguages';
import RadioForm from 'react-native-simple-radio-button';
import { useDispatch } from 'react-redux';
import { ILocalizationContext } from '../../../../../src/localization/entities/ILocalizationContext';
import { AppDispatch } from '../../../../../src/appStore/redux/store';
import { signOutAction } from '../../../../../src/appStore/redux/authenticationState/authenticationStateActions';
import { removeData } from '../../../../../src/appStore/asyncStorage/removeData';
import { LocalizationContext } from '../../../../../src/localization';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { ThemesContext } from '../../../../../src/themes';
import { storeData } from '../../../../../src/appStore/asyncStorage/storeData';
import { IThems } from '../../../../../src/themes/entities/IThems';

export const DrawerScreen: FC = () => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const theme: IThemesContext = useContext<IThemesContext>(ThemesContext);
    const dispatch: AppDispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    const setTheme = async (themeName: IThems) => {
        await storeData('theme', themeName);
    }

    const toggleSwitch = (): void => {
        const themeName: IThems = (theme.theme === 'LIGHT') ? 'DARK' : 'LIGHT';
        theme.setTheme(themeName);
        setTheme(themeName);
        return setIsEnabled(previousState => !previousState);
    };

    const setSignOut = async (): Promise<void> => {
        removeData('userData');
        dispatch(signOutAction());
    }

    const setLanguage = async (value: ILanguages) => {
        LocalContext.setLanguage(value);
        await storeData('localization', value);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.TITLE_BACKGROUND_COLOR }]}>
            <View style={styles.themeWrapper}>
                <Text style={{ color: theme.colors.BACKGROUND_COLOR }}>{LocalContext.translations.THEME_SWITCH_TITLE}</Text>
                <Switch
                    trackColor={{ false: theme.colors.SWITCH_COLOR, true: theme.colors.SWITCH_COLOR }}
                    thumbColor={theme.colors.BACKGROUND_COLOR}
                    ios_backgroundColor={theme.colors.backgroundColor}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View>
                <Text style={{ color: theme.colors.BACKGROUND_COLOR }}>{LocalContext.translations.LANGUAGE_RADIO_BUTTON_TITLE}</Text>
                <RadioForm
                    radio_props={LocalContext.translations.LANGUAGES_NAMES}
                    initial={LocalContext.language}
                    onPress={(value: ILanguages) => { setLanguage(value); }}
                    labelColor={theme.colors.BACKGROUND_COLOR}
                    selectedButtonColor={theme.colors.BUTTON_COLOR}
                    buttonColor={theme.colors.BUTTON_COLOR}
                />
            </View>
            <View>
                <TouchableOpacity onPress={setSignOut}>
                    <Text style={{ color: theme.colors.BACKGROUND_COLOR }}>
                        {LocalContext.translations.LOG_OUT_BUTTON_TITLE}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
