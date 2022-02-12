import React, { FC, } from 'react';
import { styles } from './style';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

interface IProps {
    onPress: () => void;
}

export const SearchButton: FC<IProps> = ({ onPress }) => {

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text>Apply filters</Text>
        </Pressable>
    );
};