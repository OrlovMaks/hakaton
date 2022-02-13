import { NavigationProp } from '@react-navigation/native';
import React, { FC, useContext } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { LocalizationContext } from '../../../../../src/localization';
import { ILocalizationContext } from '../../../../../src/localization/entities/ILocalizationContext';
import { ThemesContext } from '../../../../../src/themes';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { CupTableItem } from '../../components/cupTableItem';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TournamentsButton } from '../../components/tournamentsButton';
import { styles } from './styles';



const TEMP_STAGS: Array<{ id: string, title: string, title2: string }> = [
    {
        id: '0',
        title: 'AAA',
        title2: 'BBBB',
    },
    {
        id: '1',
        title: 'AAA',
        title2: 'BBBB',
    },
    {
        id: '2',
        title: 'AAA',
        title2: 'BBBB',
    },
    {
        id: '3',
        title: 'AAA',
        title2: 'BBBB',
    },
    {
        id: '4',
        title: 'AAA',
        title2: 'BBBB',
    },
    {
        id: '5',
        title: 'AAA',
        title2: 'BBBB',
    },
    {
        id: '6',
        title: 'AAA',
        title2: 'BBBB',
    }
]

interface IProps {
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const CupTablesScreen: FC<IProps> = ({ navigation }) => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const theme = useContext<IThemesContext>(ThemesContext);

    const renderStage: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
        return (
            <CupTableItem title={item.title} title2={item.title2} />
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND_COLOR }]}>
            <HeaderComponent title={LocalContext.translations.RESULT_MATCH_TITLE} />
            <View style={styles.resultsList}>
                <FlatList
                    data={TEMP_STAGS}
                    renderItem={renderStage}
                    keyExtractor={item => item.id}
                />
            </View>
            <TournamentsButton onPress={() => { navigation.navigate('CupStages') }} title={LocalContext.translations.BACK_BUTTON_TITLE} />
        </View>
    );
};