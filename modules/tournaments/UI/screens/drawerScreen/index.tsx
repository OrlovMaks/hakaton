import React, { FC, useContext, useEffect, useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from './styles';
import { AppContext } from '../../../../../src/theme/ui';
import { LocalizationContext } from '../../../../../src/localization/ui/index';
import { ILanguages } from '../../../../../src/localization/entities/ILanguages';
import RadioForm from 'react-native-simple-radio-button'
import { SignButton } from '../../../../authentication/UI/components/signButton';
import { removeUserData } from '../../../../../src/appStore/asyncStorage/setUserData';
import { setUserData, signInUser } from '../../../../../src/appStore/redux/actions/signActions';
import { useDispatch } from 'react-redux';

export const DrawerScreen: FC = () => {
    const { changeTheme, colorTheme } = useContext(AppContext);
    const LocalContext = useContext(LocalizationContext);

    const [isThemeEnabled, setThemeIsEnabled] = useState(false);
    const toggleThemeSwitch = () => {
        setThemeIsEnabled((previousState: any) => !previousState);
        changeTheme();
    };

    const dispatch = useDispatch()

    const signOut = async () => {
        removeUserData()
        dispatch(setUserData(null))
        dispatch(signInUser(false))
    }

    return (
        <View style={[styles.container, { backgroundColor: colorTheme.background }]}>
            <View style={styles.themeWrapper}>
                <Text style={{ color: colorTheme.color }}>
                    {LocalContext.translations.THEME_SWITCH_TITLE}
                </Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={isThemeEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleThemeSwitch}
                    value={isThemeEnabled}
                />
            </View>
            <View>
                <RadioForm
                    radio_props={LocalContext.translations.LANGUAGES_NAMES}
                    initial={LocalContext.language}
                    onPress={(value: ILanguages) => {
                        LocalContext.setLanguage(value);
                    }}
                    buttonColor={'#000'}
                    selectedButtonColor={'#000'}
                />
            </View>
            <View style={{ width: '50%' }}>
                <SignButton
                    title={'SIGN OUT'}
                    backgroundColor={'#3366ff'}
                    color={'black'}
                    signFunc={() => signOut()}
                    disabled={true}
                />
            </View>
        </View>
    );
};
