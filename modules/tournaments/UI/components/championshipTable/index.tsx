import { NavigationProp } from "@react-navigation/native";
import React, { FC, useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemesContext } from "../../../../../src/themes";
import { styles } from "./styles";


interface IProps {
    title: string;
    win: number;
    draw: number;
    loss: number;
}

export const ChampionshipTable: FC<IProps> = ({ title, win, draw, loss }) => {
    const theme = useContext(ThemesContext);

    return (
        <View style={styles.container}>
                            
        </View>
    );
}