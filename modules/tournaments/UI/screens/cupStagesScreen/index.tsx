import { NavigationProp } from '@react-navigation/native';
import React, { FC, useContext } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { LocalizationContext } from '../../../../../src/localization';
import { ThemesContext } from '../../../../../src/themes';
import { CupStageItem } from '../../components/cupStageItem';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TournamentsButton } from '../../components/tournamentsButton';
import { styles } from './styles';

const TEMP_STAGS: Array<{ [key: string]: string }> = [
    {
        id: '0',
        title: '1 stage',
    },
    {
        id: '1',
        title: '2 stage',
    },
    {
        id: '2',
        title: '3 stage',
    },
    {
        id: '3',
        title: '4 stage',
    },
    {
        id: '4',
        title: '5 stage',
    },
    {
        id: '5',
        title: '6 stage',
    },
    {
        id: '6',
        title: '7 stage',
    }
]

interface IProps {
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const CupStagesScreen: FC<IProps> = ({ navigation }) => {
    const LocalContext = useContext(LocalizationContext);
    const theme = useContext(ThemesContext);


    const renderStage: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
        return (
            <CupStageItem title={item.title} navigation={navigation} />
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND_COLOR }]}>
            <HeaderComponent title={LocalContext.translations.CUP_STAGES_TITLE}/>
            <FlatList
                style={styles.stagesList}
                data={TEMP_STAGS}
                renderItem={renderStage}
                keyExtractor={item => item.id}
            />
            <TournamentsButton onPress={() => { navigation.navigate('Matches') }} title={LocalContext.translations.BACK_BUTTON_TITLE} />
        </View>
    );
};