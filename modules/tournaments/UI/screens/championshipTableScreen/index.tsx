import { NavigationProp } from '@react-navigation/native';
import React, { FC, useContext } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTableInformation } from '../../../../../src/appStore/redux/tableInformationState/tableInformationSelector';
import { LocalizationContext } from '../../../../../src/localization';
import { ILocalizationContext } from '../../../../../src/localization/entities/ILocalizationContext';
import { ThemesContext } from '../../../../../src/themes';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { ChampionshipTable } from '../../components/championshipTable';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TournamentsButton } from '../../components/tournamentsButton';
import { styles } from './styles';

const TEMP_STAGS = {
    tableHead: [
        'title',
        'win',
        'draw',
        'less',
        'total'
    ],
    tableData: [
        [
            'AAA',
            4,
            0,
            1,
            12

        ],
        [
            'BBB',
            4,
            1,
            1,
            11
        ],
        [
            'CCC',
            3,
            2,
            1,
            10
        ],
        [
            'DDD',
            4,
            0,
            1,
            9
        ],
        [
            'EEE',
            4,
            0,
            1,
            8
        ],
        [
            'FFF',
            4,
            0,
            1,
            7
        ],
        [
            'GGG',
            4,
            0,
            1,
            6
        ]
    ]
};

interface IProps {
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const ChampionshipTableScreen: FC<IProps> = ({ navigation }) => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const theme = useContext<IThemesContext>(ThemesContext);
    

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND_COLOR }]}>
            <HeaderComponent title={LocalContext.translations.CHAMPIONSHIP_TITLE} />
            <View style={styles.resultsList}>
                <ChampionshipTable tableHeader={TEMP_STAGS.tableHead} tableRows={TEMP_STAGS.tableData}/>
            </View>
            <TournamentsButton onPress={() => { navigation.navigate('Matches') }} title={LocalContext.translations.BACK_BUTTON_TITLE} />
        </View>
    );
};