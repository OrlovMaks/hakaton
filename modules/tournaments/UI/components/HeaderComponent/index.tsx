import React, { FC, useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemesContext } from '../../../../../src/themes';
import { IThemesContext } from '../../../../../src/themes/entities/IThemesContext';
import { styles } from './styles';

interface IProps {
    title: string
}

export const HeaderComponent: FC<IProps> = ({ title }) => {
    const theme = useContext<IThemesContext>(ThemesContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.TITLE_BACKGROUND_COLOR }]}>
            <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{title}</Text>
        </View>
    );
};