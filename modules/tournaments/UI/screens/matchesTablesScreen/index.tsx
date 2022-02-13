import { NavigationProp } from '@react-navigation/native';
import React, { FC, useContext } from 'react';
import { FlatList, ListRenderItem, Text, TouchableOpacity, View } from 'react-native';
import { LocalizationContext } from '../../../../../src/localization';
import { styles } from './styles';

interface IProps {
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const MatchesTablesScreen: FC<IProps> = ({ navigation }) => {
    const LocalContext = useContext(LocalizationContext);

    return (
        <View style={styles.container}>
            <Text>tabbbbbb</Text>
            
        </View>
    );
};