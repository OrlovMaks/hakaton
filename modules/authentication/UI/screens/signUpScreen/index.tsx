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
import { ForgotPass } from '../../components/forgotPasswordButton';

interface IProps {
    navigation: NavigationProp<any>
}

export const SignUpScreen: FC<IProps> = ({ navigation }) => {
    const [name, setName] = useState<string>('');
    const [nameValid, setNameValid] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passwordValid, setPasswordValid] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [confirmPasswordValid, setConfirmPasswordValid] = useState<boolean>(false);
    const [buttonDisable, setButtonDisable] = useState<boolean>(false);

    const registration = useCallback(async () => {
        const user = await userRegistration(email, password)
        if (user) {
            navigation.navigate('SignIn')
        }
    }, [email, password])

    useEffect(() => {
        const validationFirstName = isValidName(name)
        if (validationFirstName) {
            setNameValid(true)
        } else {
            setNameValid(false)
        }
    }, [name])

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
        const validationPassword = isValidPassword(confirmPassword)
        if (validationPassword && password === confirmPassword) {
            setConfirmPasswordValid(true)
        } else {
            setConfirmPasswordValid(false)
        }
    }, [confirmPassword])

    useEffect(() => {
        if (emailValid && passwordValid && confirmPasswordValid && nameValid) {
            setButtonDisable(true)
        } else {
            setButtonDisable(false)
        }
    }, [emailValid, passwordValid, confirmPasswordValid, nameValid])


    return (
        <ScrollView>

            <View style={styles.container}>
                <SignUpHeader navigation={navigation} />
                <View style={styles.formWrapper}>
                    <View>
                        <SignInput title={'NAME'} placeholder={'Ally'} autoComplete={'name'} secureTextEntry={false} value={name} setValue={setName} titleColor={"#626262"} backgroundColor={'rgba(0, 0, 0, 0.05)'} isValid={nameValid} />
                        <SignInput title={'EMAIL'} placeholder={'ally.watsan@gmail.com'} autoComplete={'email'} secureTextEntry={false} value={email} setValue={setEmail} titleColor={"#626262"} backgroundColor={'rgba(0, 0, 0, 0.05)'} isValid={emailValid} />
                        <SignInput title={'PASSWORD'} placeholder={'Password'} autoComplete={'password'} secureTextEntry={true} value={password} setValue={setPassword} titleColor={"#626262"} backgroundColor={'rgba(0, 0, 0, 0.05)'} isValid={passwordValid} />
                        <SignInput title={'CONFIRM PASSWORD'} placeholder={'Confirm password'} autoComplete={'password'} secureTextEntry={true} value={confirmPassword} setValue={setConfirmPassword} titleColor={"#626262"} backgroundColor={'rgba(0, 0, 0, 0.05)'} isValid={confirmPasswordValid} />
                    </View>
                    <View>
                        <View style={styles.buttonWrapp}>
                            <SignButton title={'SIGN UP'} backgroundColor={'#3366ff'} color={'white'} signFunc={registration} disabled={buttonDisable} />
                        </View>
                        <View style={styles.forgotPassWrapp}>
                            <ForgotPass color={'#626262'} />
                        </View>
                    </View>
                </View>
            </View>

        </ScrollView >
    );
};