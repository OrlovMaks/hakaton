import { NavigationProp } from "@react-navigation/native";
import React, { FC, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemesContext } from "../../../../../src/themes";
import { styles } from "./styles";


interface IProps {
    title: string
    navigation: NavigationProp<{ [key: string]: unknown }>
}

export const CupStageItem: FC<IProps> = ({ title, navigation }) => {
    const theme = useContext(ThemesContext);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('MatchesTables')}>
            <View style={[styles.container, { backgroundColor: theme.colors.LIST_ITEMS }]}>
                <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}