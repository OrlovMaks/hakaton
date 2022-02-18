import React, { FC, useContext, useMemo } from "react";
import { Text, View } from "react-native";
import { ThemesContext } from "../../../../../src/themes";
import { getStyles } from "./styles";


interface IProps {
    title: string;
    score1: string;
    title2: string;
    score2: string;
}

export const CupTableItem: FC<IProps> = ({ title, score1, title2, score2 }) => {
    const theme = useContext(ThemesContext);
    const styles = useMemo(() => getStyles(theme.colors), [theme.colors]);

    const getWinner = () => {
        return score1 > score2 ? title : title2;
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={[styles.upperTitleContainer, { backgroundColor: theme.colors.LIST_ITEMS, borderColor: theme.colors.TEXT_COLOR }]}>
                    <Text style={[styles.title]}>{title}</Text>
                    <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{score1}</Text>
                </View>
                <View style={[styles.lowerTitleContainer, { backgroundColor: theme.colors.LIST_ITEMS, borderColor: theme.colors.TEXT_COLOR }]}>
                    <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{title2}</Text>
                    <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{score2}</Text>
                </View>
            </View>
            <View style={[styles.winner, { backgroundColor: theme.colors.LIST_ITEMS, borderColor: theme.colors.TEXT_COLOR }]}>
                <Text style={[styles.title, { color: theme.colors.TEXT_COLOR }]}>{getWinner()}</Text>
            </View>
        </View>
    );
}