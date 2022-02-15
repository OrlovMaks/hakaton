import React, { FC, useContext, useState, } from 'react';
import { styles } from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { LocalizationContext } from '../../../../../src/localization';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { ThemesContext } from '../../../../../src/themes';

interface IProps {
    navigation: NavigationProp<any>;
    tournamentInfo: { [key: string]: string };
}

export const TableButton: FC<IProps> = ({ navigation, tournamentInfo }) => {
    const LocalContext = useContext(LocalizationContext);
    const [isCup, setIsCup] = useState<boolean>(false);
    const theme = useContext<IThemesContext>(ThemesContext);

    useFocusEffect(() => {
        setIsCup(tournamentInfo.mode === 'cup');
    })

    return (
        <TouchableOpacity onPress={() => navigation.navigate(isCup ? 'CupStages' : 'ChampionshipTable')}>
            <View style={[styles.container, { backgroundColor: theme.colors.BUTTON_COLOR }]}>
                <Text style={[styles.buttonText, { color: theme.colors.TEXT_COLOR }]}>{LocalContext.translations.TABLE_BUTTON_TITLE}</Text>
            </View>
        </TouchableOpacity>
    );
};