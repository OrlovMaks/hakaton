import React, { FC, useContext, useState, } from 'react';
import { styles } from './styles';
import { Image,Text,TouchableOpacity, View } from 'react-native';
import { LocalizationContext } from '../../../../../src/localization';
import { NavigationProp } from '@react-navigation/native';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { ThemesContext } from '../../../../../src/themes';

interface IProps{
    navigation: NavigationProp<any>
}

export const TableButton:FC<IProps> = ({navigation}) => {
    const LocalContext = useContext(LocalizationContext);
    const [isCup, setIsCup] = useState<boolean>(false);
    const theme = useContext<IThemesContext>(ThemesContext);

    return (
        <TouchableOpacity onPress={()=>navigation.navigate(isCup? 'CupStages' : 'ChampionshipTable')}>
            <View style={[styles.container, {backgroundColor: theme.colors.BUTTON_COLOR}]}>
                <Text style={[styles.buttonText, {color: theme.colors.TEXT_COLOR}]}>{LocalContext.translations.TABLE_BUTTON_TITLE}</Text>
            </View>
        </TouchableOpacity>
    );
};