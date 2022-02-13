import React, { FC, useContext, } from 'react';
import { styles } from './style';
import { Text, TouchableOpacity, View } from 'react-native';
import { ThemesContext } from '../../../../../src/themes';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';

interface IProps {
    onPress: () => void;
    title: string;
}

export const TournamentsButton: FC<IProps> = ({ onPress, title }) => {
    const theme = useContext<IThemesContext>(ThemesContext);

    return (
        //<View style={[ { backgroundColor: theme.colors.BUTTON_COLOR }]}>
            <TouchableOpacity onPress={onPress}>
                <View style={[styles.titleContainer, { backgroundColor: theme.colors.BUTTON_COLOR }]}>
                    <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{title}</Text>
                </View>
            </TouchableOpacity>
       //</View>
    );
};