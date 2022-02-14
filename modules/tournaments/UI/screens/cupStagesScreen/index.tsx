import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { selectMatch } from '../../../../../src/appStore/redux/matchState/matchSelector';
import { LocalizationContext } from '../../../../../src/localization';
import { ThemesContext } from '../../../../../src/themes';
import { CupStageItem } from '../../components/cupStageItem';
import { HeaderComponent } from '../../components/HeaderComponent';
import { TournamentsButton } from '../../components/tournamentsButton';
import { styles } from './styles';

interface IProps {
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const CupStagesScreen: FC<IProps> = ({ navigation }) => {
    const LocalContext = useContext(LocalizationContext);
    const theme = useContext(ThemesContext);
    const [stages, setStages] = useState<Array<any>>([{ id: 0, stage: 1 }])
    const matchInfo = useSelector(selectMatch);

    useFocusEffect(useCallback(() => {
        const newStages = new Set(matchInfo.map(element => element.stage));
        //const formattedStages = newStages.map((element) => {return {id: element, stage: ++element}});

        // setStages([
        // ]);
        // console.log('====================================');
        // console.log(newStages);
        // console.log('====================================');
    }, [matchInfo]))

    const renderStage: ListRenderItem<{ [key: string]: string; }> = ({ item }) => {
        return (
            <CupStageItem title={item.stage} navigation={navigation} />
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.BACKGROUND_COLOR }]}>
            <HeaderComponent title={LocalContext.translations.CUP_STAGES_TITLE} />
            <FlatList
                style={styles.stagesList}
                data={stages}
                renderItem={renderStage}
                keyExtractor={item => item.id}
            />
            <TournamentsButton onPress={() => { navigation.navigate('Matches') }} title={LocalContext.translations.BACK_BUTTON_TITLE} />
        </View>
    );
};