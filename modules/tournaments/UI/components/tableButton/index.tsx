import React, { FC, useContext, useState, } from 'react';
import { styles } from './styles';
import { Image,Text,TouchableOpacity, View } from 'react-native';
import { LocalizationContext } from '../../../../../src/localization';
import { NavigationProp } from '@react-navigation/native';

interface IProps{
    navigation: NavigationProp<any>
}

export const TableButton:FC<IProps> = ({navigation}) => {
    const LocalContext = useContext(LocalizationContext);
    const [isCup, setIsCup] = useState<boolean>(false);

    return (
        <TouchableOpacity onPress={()=>navigation.navigate(isCup? 'CupStages' : 'ChampionshipTable')}>
            <View style={styles.container}>
                <Text style={styles.buttonText}>{LocalContext.translations.TABLE_BUTTON_TITLE}</Text>
            </View>
        </TouchableOpacity>
    );
};