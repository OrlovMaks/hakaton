import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectMatch } from '../../../../../src/appStore/redux/matchState/matchSelector';
import { RootState } from '../../../../../src/appStore/redux/store';
import { LocalizationContext } from '../../../../../src/localization';
import { ILocalizationContext } from '../../../../../src/localization/entities/ILocalizationContext';
import { ThemesContext } from '../../../../../src/themes';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { CupStageItem } from '../../components/cupStageItem';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TournamentsButton } from '../../components/tournamentsButton';
import { styles } from './styles';

interface IProps {
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const CupStagesScreen: FC<IProps> = ({ navigation }) => {
    const LocalContext = useContext<ILocalizationContext>(LocalizationContext);
    const theme = useContext<IThemesContext>(ThemesContext);
    const [stages, setStages] = useState<Array<number>>([0])
    const matchInfo = useSelector<RootState>(selectMatch);

    useFocusEffect(useCallback(() => {
        const newStages: Set<number> = new Set(matchInfo.map((element: { [key: string]: number }) => element.stage));
        setStages([
            ...newStages
        ]);
    }, [matchInfo]));

    const renderStage: ListRenderItem<number> = ({ item }) => {
        return (
            <CupStageItem title={++item} navigation={navigation} />
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND_COLOR }]}>
            <HeaderComponent title={LocalContext.translations.CUP_STAGES_TITLE} />
            <FlatList
                style={styles.stagesList}
                data={stages}
                renderItem={renderStage}
            // keyExtractor={item => item}
            />
            <TournamentsButton onPress={() => { navigation.navigate('Matches') }} title={LocalContext.translations.BACK_BUTTON_TITLE} />
        </View>
    );
};