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
import { getData } from '../../../../../src/appStore/asyncStorage/getData';
import { IThems } from '../../../../../src/themes/entities/IThems';

export const DrawerScreen: FC = () => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const theme: IThemesContext = useContext<IThemesContext>(ThemesContext);
    const dispatch: AppDispatch = useDispatch();
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    const toggleSwitch = (): void => {
        const themeName: IThems = (theme.theme === 'LIGHT') ? 'DARK' : 'LIGHT';
        theme.setTheme(themeName);
        async () => {
            await storeData('theme', themeName);
        }
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
        <View style={[styles.container, { backgroundColor: theme.colors.sideMenuBackground }]}>
            <View style={styles.themeWrapper}>
                <Text style={{ color: theme.colors.color }}>{LocalContext.translations.THEME_SWITCH_TITLE}</Text>
                <Switch
                    trackColor={{ false: theme.colors.trackColor, true: theme.colors.trackColor }}
                    thumbColor={theme.colors.backgroundColor}
                    ios_backgroundColor={theme.colors.backgroundColor}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View>
                <Text style={{ color: theme.colors.color }}>{LocalContext.translations.LANGUAGE_RADIO_BUTTON_TITLE}</Text>
                <RadioForm
                    radio_props={LocalContext.translations.LANGUAGES_NAMES}
                    initial={LocalContext.language}
                    onPress={(value: ILanguages) => { setLanguage(value); }}
                />
            </View>
            <View >
                <TouchableOpacity onPress={setSignOut}>
                    <Text style={{ color: theme.colors.color }}>
                        {LocalContext.translations.LOG_OUT_BUTTON_TITLE}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
    // const themesContext = useContext(ThemesContext);
    // const LocalContext = useContext(LocalizationContext);
    // const [isThemeEnabled, setThemeIsEnabled] = useState(false);



    // const signOut = async () => {
    //     removeUserData()
    //     dispatch(setUserData(null))
    //     dispatch(signInUser(false))
    // }

    // return (
    //     <View style={[styles.container, { backgroundColor: colorTheme.background }]}>
    //         <View style={styles.themeWrapper}>
    //             <Text style={{ color: colorTheme.color }}>
    //                 {LocalContext.translations.THEME_SWITCH_TITLE}
    //             </Text>
    //             <Switch
    //                 trackColor={{ false: '#767577', true: '#81b0ff' }}
    //                 thumbColor={isThemeEnabled ? '#f5dd4b' : '#f4f3f4'}
    //                 ios_backgroundColor="#3e3e3e"
    //                 onValueChange={toggleThemeSwitch}
    //                 value={isThemeEnabled}
    //             />
    //         </View>
    //         <View>
    //             <RadioForm
    //                 radio_props={LocalContext.translations.LANGUAGES_NAMES}
    //                 initial={LocalContext.language}
    //                 onPress={(value: ILanguages) => {
    //                     LocalContext.setLanguage(value);
    //                 }}
    //                 buttonColor={'#000'}
    //                 selectedButtonColor={'#000'}
    //             />
    //         </View>
    //         <View style={{ width: '50%' }}>
    //             <SignButton
    //                 title={'SIGN OUT'}
    //                 backgroundColor={'#3366ff'}
    //                 color={'black'}
    //                 signFunc={() => signOut()}
    //                 disabled={true}
    //             />
    //         </View>
    //     </View>
    // );
};
