import React, { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SetScoreModal } from "../setScoreModal";
import { styles } from "./styles";

interface MatchItemProps {
    item: {
        id: string,
        firstPlayer: string,
        secondPlayer: string,
        date: string,
        place: string,
        scoreFirstPlayer: string,
        scoreSecondPlayer: string,
        status: string
    },
    disable: boolean
}

export const MatchItem: FC<MatchItemProps> = ({ item, disable }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [match, setMatch] = useState(false)

    const setScore = (item)=>{
        setMatch(item)
        setModalVisible(true)
    }

    return (
        <View>
            <TouchableOpacity disabled={disable} onPress={() => setScore(item)}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.scoreText}>{item.firstPlayer}</Text>
                        <Text style={styles.dataText}>{item.place}</Text>
                    </View>
                    <View>
                        <View style={styles.scoreWrapper}>
                            <Text style={styles.scoreText}>{item.scoreFirstPlayer}</Text>
                            <Text style={styles.scoreText}>:</Text>
                            <Text style={styles.scoreText}>{item.scoreSecondPlayer}</Text>
                        </View>
                        <View>
                            <Text style={styles.dataText}>{item.status}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.scoreText}>{item.secondPlayer}</Text>
                        <Text style={styles.dataText}>{item.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <SetScoreModal modalVisible={modalVisible} setModalVisible={setModalVisible} match={match}/>
        </View>
    )
};