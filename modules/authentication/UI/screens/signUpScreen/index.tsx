import { NavigationProp } from '@react-navigation/native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Text, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { userRegistration } from '../../../useCases/signUp';
import { isValidEmail, isValidName, isValidPassword } from '../../../useCases/signUpValidation';
import { SignButton } from '../../components/signButton';
import { SignInput } from '../../components/signInput';
import { SignHeader } from '../../components/signHeader';
import { styles } from './styles';
import { SignUpHeader } from '../../components/signUpHeader';

interface IProps {
    navigation: NavigationProp<any>
}

export const SignUpScreen: FC<IProps> = ({ navigation }) => {
    const [name, setName] = useState<string>('');
    const [nameValid, setNameValid] = useState<boolean>(false);
    const [lastName, setLastName] = useState<string>('');
    const [lastNameValid, setLastNameValid] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passwordValid, setPasswordValid] = useState<boolean>(false);
    const [buttonDisable, setButtonDisable] = useState<boolean>(false);

    const registration = useCallback(async () => {
        const user = await userRegistration(name, lastName, email, password)
        if (user) {
            navigation.navigate('SignIn')
        }
    }, [name, lastName, email, password])

    useEffect(() => {
        const validationEmail = isValidEmail(email)
        if (validationEmail) {
            setEmailValid(true)
        } else {
            setEmailValid(false)
        }
    }, [email])

    useEffect(() => {
        const validationPassword = isValidPassword(password)
        if (validationPassword) {
            setPasswordValid(true)
        } else {
            setPasswordValid(false)
        }
    }, [password])

    useEffect(() => {
        const validationFirstName = isValidName(name)
        if (validationFirstName) {
            setNameValid(true)
        } else {
            setNameValid(false)
        }
    }, [name])

    useEffect(() => {
        const validationLastName = isValidName(lastName)
        if (validationLastName) {
            setLastNameValid(true)
        } else {
            setLastNameValid(false)
        }
    }, [lastName])

    useEffect(() => {
        if (nameValid && lastNameValid && emailValid && passwordValid) {
            setButtonDisable(true)
        } else {
            setButtonDisable(false)
        }
    }, [nameValid, lastNameValid, emailValid, passwordValid])


    return (
        <ScrollView>

            <View style={styles.container}>
                <SignUpHeader navigation={navigation} />
                <View style={styles.formWrapper}>
                        <SignInput title={'EMAIL'} placeholder={'ally.watsan@gmail.com'} autoComplete={'email'} secureTextEntry={false} value={email} setValue={setEmail} titleColor={"#626262"} backgroundColor={'rgba(0, 0, 0, 0.05)'} isValid={emailValid} />
                        <SignInput title={'PASSWORD'} placeholder={'Password'} autoComplete={'password'} secureTextEntry={true} value={password} setValue={setPassword} titleColor={"#626262"} backgroundColor={'rgba(0, 0, 0, 0.05)'} isValid={passwordValid} />
                        <SignInput title={'CONFIRM PASSWORD'} placeholder={'Confirm password'} autoComplete={'password'} secureTextEntry={true} value={confirmPassword} setValue={setConfirmPassword} titleColor={"#626262"} backgroundColor={'rgba(0, 0, 0, 0.05)'} isValid={passwordValid} />
                        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                            <SignButton title={'SIGN UP'} backgroundColor={'#3366ff'} color={'white'} signFunc={registration} disabled={buttonDisable} />
                        </KeyboardAvoidingView>
                    
                </View>
            </View>

        </ScrollView >
    );
};