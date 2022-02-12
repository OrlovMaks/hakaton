import React, { FC, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackAuthenticationNavigator } from '../stackAuthenticationNavigator';
import { styles } from './styles';
import { DrawerNavigator } from '../drawerNavigator';
import { useSelector } from 'react-redux';
import { selectAuthorizationState } from '../../appStore/redux/authenticationState/authenticationStateSelector';
import { LoadingStackNavigator } from '../loadingStackNavigator';



export const ContainerNavigation: FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    const isUserSign = useSelector(selectAuthorizationState);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    }, [])

    return (
        <SafeAreaView style={styles.safeArea}>
            <NavigationContainer>
                {isLoading ? <LoadingStackNavigator /> : isUserSign ? <DrawerNavigator /> :<StackAuthenticationNavigator />}
            </NavigationContainer>
        </SafeAreaView>
    );
};