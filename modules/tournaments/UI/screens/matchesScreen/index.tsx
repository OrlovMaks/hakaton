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
        const responseMatches = await sendFindMatchesRequest(tournamentInfo.id, currentUserData.uid, currentUserData.client, currentUserData);
        console.log('aaaaaaaaaaaaaaaaaa', responseMatches);
        await setMatchData(responseMatches)
    };

    const renderItem: FC<MatchItemProps> = ({ item }) => (
        <MatchItem item={item} disable={!isAdmin} tournamentInfo={tournamentInfo} updateScore={()=>getMatchesData()}/>
    );

    return (

        <View style={[styles.container, {backgroundColor: theme.colors.BACKGROUND_COLOR}]}>
            <View style={[styles.header, {backgroundColor: theme.colors.TITLE_BACKGROUND_COLOR}]}>
                <GoBackButton navigation={navigation} />
                <Text style={[styles.textTitle, { color: theme.colors.TEXT_COLOR }]}>{LocalContext.translations.MATCHES_TITLE}</Text>
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