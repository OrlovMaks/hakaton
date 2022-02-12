import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { SignHeader } from '../../components/signHeader';
import { SignInput } from '../../components/signInput';
import { SignButton } from '../../components/signButton';
import { styles } from './styles';
import { useDispatch } from 'react-redux';
import { userAuthorization } from '../../../useCases/signIn';
import { NavigationProp } from '@react-navigation/native';
import { setIsAuthorizeAction, setUserData } from '../../../../../src/appStore/redux/authenticationState/authenticationStateActions';
import { AppDispatch } from '../../../../../src/appStore/redux/store';
import { getData } from '../../../../../src/appStore/asyncStorage/getData';
import { storeData } from '../../../../../src/appStore/asyncStorage/storeData';
import { ForgotPass } from '../../components/forgotPasswordButton';
import { isValidEmail, isValidPassword } from '../../../useCases/signUpValidation';

interface IProps {
    navigation: NavigationProp<any>
};

export const SignInScreen: FC<IProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [emailValid, setEmailValid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [passwordValid, setPasswordValid] = useState<boolean>(false);
    const [buttonDisable, setButtonDisable] = useState<boolean>(false);

    const dispatch: AppDispatch = useDispatch();

    const onGoToSignUp = ():void => {
        navigation.navigate('SignUp');
    };
    useEffect((): void => {
        const validationEmail = isValidEmail(email);
        if (validationEmail) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        };
    }, [email])

    useEffect((): void => {
        const validationPassword = isValidPassword(password);
        if (validationPassword) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        };
    }, [password])

    useEffect((): void => {
        if (emailValid && passwordValid) {
            setButtonDisable(true);
        } else {
            setButtonDisable(false);
        };
    }, [emailValid, passwordValid]);

    useEffect((): void => {
        const checkUserAuthorization = async () => {
            const getDataUser = await getData('userData');
            if (getDataUser) {
                dispatch(setUserData(getDataUser));
                dispatch(setIsAuthorizeAction(true));
            };
        };
        checkUserAuthorization();
    }, []);

    const authorization = useCallback(async (): Promise<void> => {
        const user: { [key: string]: any } | undefined = await userAuthorization(email, password)
        if (user) {
            await storeData('userData', JSON.stringify(user.data.data))
            dispatch(setUserData(user.data))
            dispatch(setIsAuthorizeAction(true))
        }
    }, [email, password]);

    return (
        <View style={styles.container}>
            <Image source={require("../../../../../assets/signBackground.jpg")} resizeMode='cover' style={styles.image} />
            <View style={styles.componentsWrap}>
                <View>
                    <SignHeader title={'SIGN IN'} nextScreen={"Sign Up"} onPress={onGoToSignUp} />
                </View>
                <View>
                    <SignInput title={'EMAIL'} placeholder={'Email'} autoComplete={'email'} secureTextEntry={false} value={email} setValue={setEmail} titleColor={'white'} backgroundColor={'rgba(255, 255, 255, 0.3)'} isValid={emailValid} />
                    <SignInput title={'PASSWORD'} placeholder={'Password'} autoComplete={'password'} secureTextEntry={true} value={password} setValue={setPassword} titleColor={'white'} backgroundColor={'rgba(255, 255, 255, 0.3)'} isValid={passwordValid} />
                </View>
            </View>
            <View>
                <View style={styles.buttonWrapper}>
                    <SignButton title={'SIGN IN'} backgroundColor={'#3366ff'} color={'white'} signFunc={authorization} disabled={buttonDisable} />
                </View>
                <ForgotPass color={'white'} />
            </View>
        </View>
    );
};