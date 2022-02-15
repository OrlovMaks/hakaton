import React, { FC, useContext } from "react";
import { View } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import { ThemesContext } from "../../../../../src/themes";
import { IThemesContext } from "../../../../../src/themes/entities/IThemesContext";
import { styles } from "./styles";


interface IProps {
    tableHeader: Array<string>;
    tableRows: Array<Array<string | number>>;
}

export const ChampionshipTable: FC<IProps> = ({ tableHeader, tableRows }) => {
    const theme = useContext<IThemesContext>(ThemesContext);

    return (
        <View style={styles.container}>
            <Table borderStyle={styles.table}>
                <Row data={tableHeader} style={styles.head} textStyle={styles.text} />
                <Rows data={tableRows} style={styles.rows} textStyle={styles.text} />
            </Table>
        </View>
    );
}