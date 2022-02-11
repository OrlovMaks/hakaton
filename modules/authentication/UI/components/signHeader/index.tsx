import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

interface IProps {
    title: string,
    nextScreen: string,
    onPress: () => void;
};

export const SignHeader: FC<IProps> = ({ title, nextScreen, onPress }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.nextScreenArea}>
                    <Text style={styles.nextScreen}>{nextScreen}</Text>
                    <Text style={styles.arrow}>➔</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};