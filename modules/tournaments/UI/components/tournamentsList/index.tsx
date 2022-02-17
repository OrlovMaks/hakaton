import { NavigationProp } from '@react-navigation/native';
import React, { FC, memo, useContext, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { ThemesContext } from '../../../../../src/themes';
import { LocalizationContext } from '../../../../../src/localization';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setTableInfoAction } from '../../../../../src/appStore/redux/tableInformationState/tableInformationActions';
import { selectUserData } from '../../../../../src/appStore/redux/authenticationState/authenticationStateSelector';

const axios = require("axios");

interface IProps {
    navigation: NavigationProp<any>
    data: [],
}

export const TournamentsList: FC<IProps> = memo(({ navigation, data }) => {
    const [userRoomsListState, setUserRoomsListState] = useState([])
    const LocalContext = useContext(LocalizationContext)
    const theme = useContext(ThemesContext);
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)

    const setInformation = (tournament) => {
        dispatch(setTableInfoAction(tournament))
        navigation.navigate('Matches')
    }

    const Item = ({ tournament }) => {
        const [isRegTOtournament, setIsRegTOtournament] = useState(false)
        const registrationToTournament = async (tournamentId, uid, client, accessToken) => {
            console.log(tournamentId, uid, client, accessToken)
            setIsRegTOtournament(true)

            try {
                let response = await axios.post(`https://tournament-t.herokuapp.com/users_tournaments`,
                    {
                        headers: {
                            'access-token': accessToken,
                            'client': client,
                            'uid': uid,
                        }
                    },
                    {
                        tournament_id: tournamentId
                    }
                );
            } catch (error) {
                console.log(error)
            }
        }

        return (
            <TouchableOpacity style={[styles.item, { backgroundColor: theme.colors.LIST_ITEMS }]} onPress={() => setInformation(tournament)}>
                <View style={styles.tournamentInfoButton}>
               
                    <View>
                    </View>
                    <View style={styles.itemTitle}>
                        <Text style={styles.itemTitleText} numberOfLines={1}>{tournament.name}</Text>
                    </View >
                    <View style={styles.itemTextBlock}>
                        <View>
                            <Text style={styles.itemText}>{tournament.mode}</Text>
                            <Text style={styles.itemText}>{tournament.scenario}</Text>
                            <Text style={styles.itemText}>{tournament.status}</Text>
                        </View>
                        <View>
                            <Text style={styles.itemText}>participants: {tournament.participants}</Text>
                            <Text style={styles.itemText} numberOfLines={1}>place: {tournament.place}</Text>
                        </View>
                    </View>
                </View>
                {isRegTOtournament ? <Text>Already registrate </Text> :
                    <TouchableOpacity style={[styles.registrationButton, { backgroundColor: theme.colors.BUTTON_COLOR }]} onPress={() => registrationToTournament(tournament.id, userData.uid, userData.client, userData.accessToken)}>
                        <Text style={{ color: theme.colors.TEXT_COLOR }}>{LocalContext.translations.PARTICIPATE_TITLE}</Text>
                    </TouchableOpacity>}
            </TouchableOpacity >
        )
    };

    const renderItem = ({ item }) => (
        <Item tournament={item} />
    );

    return (
        <View style={styles.list}>
            <FlatList
                data={data.tournament}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
});