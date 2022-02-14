import React, { FC, useState } from "react";
import { View, TouchableOpacity, Text, Image, Keyboard, Modal, TextInput } from "react-native";
import { styles } from "./styles";

interface IProps {
    modalVisible: boolean,
    setModalVisible: (modalVisible: boolean) => void,
    match: {
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


export const SetScoreModal: FC<IProps> = ({ modalVisible, setModalVisible, match }) => {
    const [scoreFirstPlayer, setScoreFirstPlayer] = useState('')
    const [scoreSecondPlayer, setScoreSecondPlayer] = useState('')
    console.log(match)


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.inputsWrapper}>
                        <View style={styles.playerWrapper}>
                            <Text style={styles.playerText}>{match.user_1}</Text>
                            <TextInput
                                style={styles.scoreInput}
                                onChangeText={setScoreFirstPlayer}
                                value={scoreFirstPlayer}
                                keyboardType="numeric"
                            />
                        </View>
                        <View style={styles.playerWrapper}>
                            <Text style={styles.playerText}>{match.user_2}</Text>
                            <TextInput
                                style={styles.scoreInput}
                                onChangeText={setScoreSecondPlayer}
                                value={scoreSecondPlayer}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Add score</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}