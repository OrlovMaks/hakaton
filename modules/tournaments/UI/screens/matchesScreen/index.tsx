import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../../src/localization';
import { GoBackButton } from '../../components/goBackButton';
import { InfoButton } from '../../components/tournamentInfoButton';
import { FlatList } from 'react-native-gesture-handler';
import { MatchItem } from '../../components/matchItem';
import { TableButton } from '../../components/tableButton';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { TournamentDescriptionModal } from '../../components/tournamentModalDescription';
import { setUserDataAction } from '../../../../../src/appStore/redux/authenticationState/authenticationStateActions';
import { selectUserData } from '../../../../../src/appStore/redux/authenticationState/authenticationStateSelector';

import { selectTableInformation } from '../../../../../src/appStore/redux/tableInformationState/tableInformationSelector';
import { sendFindMatchesRequest } from '../../../useCases/getMatches';

import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { ThemesContext } from '../../../../../src/themes';


interface IProps {
    navigation: NavigationProp<any>
}

interface MatchItemProps {
    item: {
        id: string,
        firstPlayer: string,
        secondPlayer: string,
        date: string,
        place: string,
        scoreFirstPlayer: string,
        scoreSecondPlayer: string,
        status: string
    }
}

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstPlayer: 'Vasya',
        secondPlayer: 'Petya',
        date: '23.5.2022',
        place: 'Dnipro-arena',
        scoreFirstPlayer: '3',
        scoreSecondPlayer: '1',
        status: 'finished'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        firstPlayer: 'Vasya',
        secondPlayer: 'Petya',
        date: '23.5.2022',
        place: 'Dnipro-arena',
        scoreFirstPlayer: '3',
        scoreSecondPlayer: '1',
        status: 'finished'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        firstPlayer: 'Vasya',
        secondPlayer: 'Petya',
        date: '23.5.2022',
        place: 'Dnipro-arena',
        scoreFirstPlayer: '3',
        scoreSecondPlayer: '1',
        status: 'finished'
    },
];

export const MatchesScreen: FC<IProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false)
    const LocalContext = useContext(LocalizationContext);
    const currentUserData = useSelector(selectUserData)
    const tournamentInfo = useSelector(selectTableInformation)
    const [matchData, setMatchData] = useState([])
    const theme = useContext<IThemesContext>(ThemesContext);


    useEffect(() => {

        if (currentUserData.role === 'admin') {
            setIsAdmin(true)
        }
        else {
            setIsAdmin(false)
        }
    }, [])

    useFocusEffect(useCallback(() => {
        getMatchesData();
    }, [tournamentInfo]))

    const getMatchesData = async () => {
        const responseMatches = await sendFindMatchesRequest(tournamentInfo.id);
        console.log('aaaaaaaaaaaaaaaaaa', responseMatches);
        setMatchData(responseMatches)
    };

    const renderItem: FC<MatchItemProps> = ({ item }) => (
        <MatchItem item={item} disable={!isAdmin}/>
    );

    return (
        <View style={styles.container}>
            <View style={[styles.header, {backgroundColor: theme.colors.TITLE_BACKGROUND_COLOR}]}>
                <GoBackButton navigation={navigation} />
                <Text style={[styles.textTitle, {color: theme.colors.TEXT_COLOR}]}>{LocalContext.translations.MATCHES_TITLE}</Text>
                <InfoButton onPress={() => setModalVisible(true)} />
            </View>
            <SafeAreaView style={styles.container}>
                <View style={{ paddingHorizontal: 5 }}>
                    <FlatList
                        data={matchData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
            <TableButton navigation={navigation} tournamentInfo={tournamentInfo}/>
            <TournamentDescriptionModal modalVisible={modalVisible} setModalVisible={setModalVisible} tournamentInfo={tournamentInfo}/>
        </View>
    );
};