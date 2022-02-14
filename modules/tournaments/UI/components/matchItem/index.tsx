import React, { FC, useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ThemesContext } from "../../../../../src/themes";
import { IThemesContext } from "../../../../../src/themes/entities/IThemesContext";
import { SetScoreModal } from "../setScoreModal";
import { styles } from "./styles";

interface MatchItemProps {
    item: {
        id: string,
        user_1_id: string,
        user_2_id: string,
        date: string,
        place: string,
        score_user_1: string,
        score_user_2: string,
        status: string
    },
    disable: boolean
}

export const MatchItem: FC<MatchItemProps> = ({ item, disable, tournamentInfo }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [match, setMatch] = useState(false);
    const theme = useContext<IThemesContext>(ThemesContext);

    const setScore = (item)=>{
        setMatch(item)
        setModalVisible(true)
    }

    return (
        <View>
            <TouchableOpacity disabled={disable} onPress={() => setScore(item)}>
                <View style={[styles.container, {backgroundColor: theme.colors.LIST_ITEMS}]}>
                    <View>
                        <Text style={styles.scoreText}>{item.user_1}</Text>
                        <Text style={styles.dataText}>sfgh</Text>
                    </View>
                    <View>
                        <View style={styles.scoreWrapper}>
                            <Text style={styles.scoreText}>{item.score_user_1}</Text>
                            <Text style={styles.scoreText}>:</Text>
                            <Text style={styles.scoreText}>{item.score_user_2}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataText}>{item.status}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.scoreText}>{item.user_2}</Text>
                        <Text style={styles.dataText}>Stage {item.stage}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <SetScoreModal modalVisible={modalVisible} setModalVisible={setModalVisible} match={match} tournamentInfo={tournamentInfo}/>
        </View>
    )
};