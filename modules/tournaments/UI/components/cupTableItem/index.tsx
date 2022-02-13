import { NavigationProp } from "@react-navigation/native";
import React, { FC, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemesContext } from "../../../../../src/themes";
import { styles } from "./styles";


interface IProps {
    title: string;
    title2: string;
}

export const CupTableItem: FC<IProps> = ({ title, title2 }) => {
    const theme = useContext(ThemesContext);

    return (
        <View style={styles.container}>
            <View>
                <View style={[styles.upperTitleContainer, { backgroundColor: theme.colors.LIST_ITEMS, borderColor: theme.colors.TEXT_COLOR }]}>
                    <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{title}</Text>
                    <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>10</Text>
                </View>
                <View style={[styles.lowerTitleContainer, { backgroundColor: theme.colors.LIST_ITEMS, borderColor: theme.colors.TEXT_COLOR }]}>
                    <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{title2}</Text>
                    <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>10</Text>
                </View>
            </View>
            <View style={[styles.winner, { backgroundColor: theme.colors.LIST_ITEMS, borderColor: theme.colors.TEXT_COLOR }]}>
                <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{title}</Text>
            </View>
        </View>
    );
}