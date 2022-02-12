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
import { getData } from '../../../../../src/appStore/asyncStorage/getData';
import { storeData } from '../../../../../src/appStore/asyncStorage/storeData';
import { AppDispatch } from '../../../../../src/appStore/redux/store';

interface IProps {
    navigation: NavigationProp<any>
}

export const SignInScreen: FC<IProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch: AppDispatch = useDispatch()

    const onGoToSignUp = () => {
        navigation.navigate('SignUp');
    }

    useEffect(() => {
        const checkUserAuthorization = async (): Promise<void> => {
            const getDataUser: { [key: string]: string } | undefined = await getData('userData');
            if (getDataUser) {
                dispatch(setUserData(getDataUser));
                dispatch(setIsAuthorizeAction(true));
            }
        }
        checkUserAuthorization();
    }, []);

    const authorization = useCallback(async (): Promise<void> => {
        const user: { [key: string]: any } | undefined = await userAuthorization(email, password)
        if (user) {
            await storeData(JSON.stringify(user.data.data))
            dispatch(setUserData(user.data))
            dispatch(setIsAuthorizeAction(true))
        }
    }, [email, password]);

    return (
        <View style={styles.container}>
            <Image source={require("../../../../../assets/signInBackground.jpg")} resizeMode='cover' style={styles.image} />
            <View style={styles.componentsWrap}>
                <SignHeader title={'SIGN IN'} nextScreen={"Sign Up"} onPress={onGoToSignUp} />
                <SignInput title={'EMAIL'} placeholder={'Email'} autoComplete={'email'} secureTextEntry={false} value={email} setValue={setEmail} titleColor={'white'} backgroundColor={'rgba(255, 255, 255, 0.3)'} isValid={true} />
                <SignInput title={'PASSWORD'} placeholder={'Password'} autoComplete={'password'} secureTextEntry={true} value={password} setValue={setPassword} titleColor={'white'} backgroundColor={'rgba(255, 255, 255, 0.3)'} isValid={true} />
            </View>
            <View style={styles.componentsWrap}>
                <SignButton title={'SIGN IN'} backgroundColor={'white'} color={'black'} signFunc={authorization} disabled={true} />
            </View>
        </View>
    );
};