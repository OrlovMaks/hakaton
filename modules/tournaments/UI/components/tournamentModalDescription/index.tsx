import React, { FC, useState } from "react";
import { View, TouchableOpacity, Text, Image, Keyboard, Modal } from "react-native";
import { styles } from "./styles";

interface IProps {
    modalVisible: boolean,
    setModalVisible: (modalVisible: boolean) => void,
}

const tournamentInfo = 'difhgduhgduhfguhdfghghghghghghghghghghghghghghghghghghghghghghghghghghgh gggggggggggggggg ggggggggggggg gggggggggggggggggggggggggggggggg gggggggggggggggggggggggggg gggggggggggggggggggggggggggggg hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhh'

export const TournamentDescriptionModal: FC<IProps> = ({ modalVisible, setModalVisible, tournamentInfo }) => {
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
                    <Text>{tournamentInfo.description}</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}