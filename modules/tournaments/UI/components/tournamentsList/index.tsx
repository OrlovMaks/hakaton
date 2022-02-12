import React, { FC, memo, useEffect, useMemo, useState, } from 'react';
import { View, TouchableOpacity, Text, FlatList, Image, Pressable } from 'react-native';
import { findUserRooms } from '../../../useCases/findUserRooms';
import { SignButton } from '../signButton';
import { styles } from './style';

const axios = require("axios");

interface IProps {
    value: string;

}

export const TournamentsList: FC = memo(() => {
    const [userRoomsListState, setUserRoomsListState] = useState([])


    const data = [
        {
            id: 'bd7acea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
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
        <TouchableOpacity style={styles.item} >
            <Text style={styles.itemText}>{title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    useMemo(() => {
    }, [userRoomsListState])

    useEffect(() => {

    }, [])

    return (
        <View style={styles.list}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
});