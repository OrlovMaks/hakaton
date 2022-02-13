import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignInScreen } from '../../../modules/authentication/UI/screens/signInScreen';
import { LoadingScreen } from '../../../modules/authentication/UI/screens/loadingScreen';

export const LoadingStackNavigator: FC = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="loading" component={LoadingScreen} />
        </Stack.Navigator>
    );
};