import React, { FC, memo, useEffect, useMemo, useState, } from 'react';
import { View, TouchableOpacity, Text, FlatList, Image, Pressable } from 'react-native';
import { findUserRooms } from '../../../useCases/findUserRooms';
import { SignButton } from '../signButton';
import { styles } from './style';

const axios = require("axios");

interface IProps {
    value: string;

}

export const UserRoomsList: FC = memo(() => {
    const [userRoomsListState, setUserRoomsListState] = useState([])

    const Item = ({ title }) => (
        <TouchableOpacity style={styles.item} >
            <Text style={styles.itemText}>{title}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item title={item.name} />
    );

    useMemo(() => {
        () => findUserRooms(setUserRoomsListState)
    }, [userRoomsListState])

    useEffect(() => {
        findUserRooms(setUserRoomsListState)
    }, [])

    return (
        <View style={styles.list}>
            <FlatList
                data={userRoomsListState}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.updateButton}>
                <SignButton title={'UpdateRooms'} buttonFunction={() => findUserRooms(setUserRoomsListState)} />
            </View >
        </View>
    );
});