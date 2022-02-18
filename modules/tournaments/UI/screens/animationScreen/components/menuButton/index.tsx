import React, { FC, } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';

interface IProps {
    onPress: () => void;
}

export const MenuButton: FC<IProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text>Call</Text>
            </TouchableOpacity >
        </View >
    )
};