import { NavigationProp } from '@react-navigation/native';
import React, { FC, useContext } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { LocalizationContext } from '../../../../../src/localization';
import { ILocalizationContext } from '../../../../../src/localization/entities/ILocalizationContext';
import { ThemesContext } from '../../../../../src/themes';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { ChampionshipTable } from '../../components/championshipTable';
import { CupTableItem } from '../../components/cupTableItem';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TournamentsButton } from '../../components/tournamentsButton';
import { styles } from './styles';
// import { styles } from './styles';



const TEMP_STAGS: Array<any> = [
    {
        id: '0',
        title: 'AAA',
        win: 4,
        draw: 0,
        loss: 1,

    },
    {
        id: '1',
        title: 'BBB',
        win: 4,
        draw: 1,
        loss: 1,
    },
    {
        id: '2',
        title: 'CCC',
        win: 3,
        draw: 2,
        loss: 1,
    },
    {
        id: '3',
        title: 'DDD',
        win: 4,
        draw: 0,
        loss: 1,
    },
    {
        id: '4',
        title: 'EEE',
        win: 4,
        draw: 0,
        loss: 1,
    },
    {
        id: '5',
        title: 'FFF',
        win: 4,
        draw: 0,
        loss: 1,
    },
    {
        id: '6',
        title: 'GGG',
        win: 4,
        draw: 0,
        loss: 1,
    }
]

interface IProps {
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const ChampionshipTableScreen: FC<IProps> = ({ navigation }) => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const theme = useContext<IThemesContext>(ThemesContext);

    const renderStage: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
        return (
            // <ChampionshipTableItem title={item.title} />
            <Text>item.title</Text>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND_COLOR }]}>
            <HeaderComponent title={LocalContext.translations.CHAMPIONSHIP_TITLE} />
            <View style={styles.resultsList}>
                
            </View>
            <TournamentsButton onPress={() => { navigation.navigate('Matches') }} title={LocalContext.translations.BACK_BUTTON_TITLE} />
        </View>
    );
};