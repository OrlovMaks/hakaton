import React, { FC, useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { LocalizationContext } from '../../../../../src/localization';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp } from '@react-navigation/native';

interface IProps {
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const MatchesScreen: FC<IProps> = ({ navigation }) => {
    const LocalContext = useContext(LocalizationContext);

    return (
        <View>
            <TouchableOpacity onPress={() => { navigation.navigate('CupStages') }}>
                <Text>GO GRAF</Text>
            </TouchableOpacity>
        </View>
    );
};