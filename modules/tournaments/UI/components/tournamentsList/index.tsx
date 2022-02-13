import { NavigationProp } from '@react-navigation/native';
import React, { FC, memo, useContext, useEffect, useMemo, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, Image, Pressable, SafeAreaView } from 'react-native';
import { ThemesContext } from '../../../../../src/themes';
import { LocalizationContext } from '../../../../../src/localization';
import { styles } from './style';
import { useDispatch } from 'react-redux';
import { selectTableInformation } from '../../../../../src/appStore/redux/tableInformationState/tableInformationSelector';
import { setTableInfoAction } from '../../../../../src/appStore/redux/tableInformationState/tableInformationActions';

const axios = require("axios");

interface IProps {
    navigation: NavigationProp<any>
    data: []
}



export const TournamentsList: FC<IProps> = memo(({ navigation, data },) => {
    const [userRoomsListState, setUserRoomsListState] = useState([])
    const LocalContext = useContext(LocalizationContext)
    const theme = useContext(ThemesContext);
    const dispatch = useDispatch()

    const setInformation = (tournament) => {
        dispatch(setTableInfoAction(tournament))
        navigation.navigate('Matches')
    }


    const Item = ({ tournament }) => (
        <TouchableOpacity style={[styles.item, { backgroundColor: theme.colors.LIST_ITEMS }]} onPress={() => setInformation(tournament)}>
            <View style={styles.tournamentInfoButton}>
                <View>
                    <Text style={styles.itemText}>{tournament.name}</Text>

                </View>
                <View>

                </View>
            </View>
            <TouchableOpacity style={[styles.registrationButton, { backgroundColor: theme.colors.BUTTON_COLOR }]} >
                <Text style={{ color: theme.colors.TEXT_COLOR }}>{LocalContext.translations.PARTICIPATE_TITLE}</Text>
            </TouchableOpacity>
        </TouchableOpacity >
    );

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