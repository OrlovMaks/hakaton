import React, { FC, useCallback, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { SignHeader } from '../../components/signHeader';
import { SignInput } from '../../components/signInput';
import { SignButton } from '../../components/signButton';
import { styles } from './styles';
// import { NavigationProp } from '@react-navigation/native';
import { signInUser } from '../../../../../src/appStore/redux/actions/signActions'
import { useDispatch } from 'react-redux';
import { userAuthorization } from '../../../useCases/signIn';
import { getUserData, storeUserData } from '../../../../../src/appStore/asyncStorage/setUserData';
import { setUserData } from '../../../../../src/appStore/redux/actions/signActions'
import { NavigationProp } from '@react-navigation/native';
import { ForgotPass } from '../../components/forgotPasswordButton'

interface IProps {
    navigation: NavigationProp<any>
}

export const SignInScreen: FC<IProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch()

    const onGoToSignUp = () => {
        navigation.navigate('SignUp')
    }

    useEffect(() => {
        const checkUserAuthorization = async () => {
            const getDataUser = await getUserData()
            if (getDataUser) {
                dispatch(setUserData(getDataUser))
                dispatch(signInUser(true))
            }
        }
        checkUserAuthorization()
    }, [])

    const authorization = useCallback(async () => {
        const user = await userAuthorization(email, password)
        if (user) {
            await storeUserData(JSON.stringify(user.data.data))
            dispatch(setUserData(user.data))
            dispatch(signInUser(true))
        }

    }, [email, password])

    return (
        <View style={styles.container}>
            <Image source={require("../../../../../assets/signBackground.jpg")} resizeMode='cover' style={styles.image} />
            <View style={styles.componentsWrap}>
                <View>
                    <SignHeader title={'SIGN IN'} nextScreen={"Sign Up"} onPress={onGoToSignUp} />
                </View>
                <View>
                    <SignInput title={'EMAIL'} placeholder={'Email'} autoComplete={'email'} secureTextEntry={false} value={email} setValue={setEmail} titleColor={'white'} backgroundColor={'rgba(255, 255, 255, 0.3)'} isValid={true} />
                    <SignInput title={'PASSWORD'} placeholder={'Password'} autoComplete={'password'} secureTextEntry={true} value={password} setValue={setPassword} titleColor={'white'} backgroundColor={'rgba(255, 255, 255, 0.3)'} isValid={true} />
                </View>
            </View>
            <View>
                <View style={styles.buttonWrapper}>
                    <SignButton title={'SIGN IN'} backgroundColor={'#3366ff'} color={'white'} signFunc={authorization} disabled={true} />
                </View>
                <ForgotPass color={'white'} />
            </View>
        </View>
    );
};