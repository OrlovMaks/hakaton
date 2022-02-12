import { NavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import { SignHeader } from '../signHeader';
import { styles } from './styles';

interface IProps {
    navigation: NavigationProp<any>
};

export const SignUpHeader: FC<IProps> = ({ navigation }) => {

    const onGoToSignIn = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            <Image source={require("../../../../../assets/futbol.jpg")} resizeMode='contain' style={styles.image} />
            <View style={styles.contentWrapper}>
                <SignHeader title={"SIGN UP"} nextScreen={"Sign In"} onPress={onGoToSignIn} />
            </View>
        </View>
    );
};