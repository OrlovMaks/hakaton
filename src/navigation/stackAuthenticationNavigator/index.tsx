import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../../../modules/authentication/UI/screens/signInScreen';
import { SignUpScreen } from '../../../modules/authentication/UI/screens/signUpScreen';

export const StackAuthenticationNavigator: FC = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    );
};