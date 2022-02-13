import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
    }
}

export const MatchItem: FC<MatchItemProps> = ({ item }) => (
    <TouchableOpacity>
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
);