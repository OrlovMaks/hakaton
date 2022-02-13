import { NavigationProp } from '@react-navigation/native';
import React, { FC, memo, useContext, useEffect, useMemo, useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, Image, Pressable, SafeAreaView } from 'react-native';
import { ThemesContext } from '../../../../../src/themes';
import { LocalizationContext } from '../../../../../src/localization';


import { styles } from './style';

const axios = require("axios");

interface IProps {
    navigation: NavigationProp<any>
}

interface PropsItem {
    title: {
        id: string,
        title: string
    }
}

export const TournamentsList: FC<IProps> = memo(({ navigation }) => {
    const [userRoomsListState, setUserRoomsListState] = useState([])
    const LocalContext = useContext(LocalizationContext)
    const theme = useContext(ThemesContext);

    const data = [
        {
            id: 'bd7acea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Cup',
        },
        {
            id: '3ac68fc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa7f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e9d72',
            title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3a53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a48-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-b96-145571e29d72',
            title: 'Third Item',
        },
    ]


    const Item = ({ title }) => (
        <TouchableOpacity style={[styles.item, { backgroundColor: theme.colors.LIST_ITEMS }]} onPress={() => navigation.navigate('Matches')}>

            <View style={styles.tournamentInfoButton}>
                <View>
                    <Text style={styles.itemText}>{title}</Text>
                    <Text style={styles.itemText}>{title}</Text>
                </View>
                <View>
                    <Text style={styles.itemText}>{title}</Text>
                    <Text style={styles.itemText}>{title}</Text>
                </View>
            </View>
            <TouchableOpacity style={[styles.registrationButton, { backgroundColor: theme.colors.BUTTON_COLOR }]} >
                <Text style={ { color: theme.colors.TEXT_COLOR }}>{LocalContext.translations.PARTICIPATE_TITLE}</Text>
            </TouchableOpacity>
        </TouchableOpacity >
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
       
            <View style={styles.list}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
  
    );
});