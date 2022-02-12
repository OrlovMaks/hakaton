import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackAuthenticationNavigator } from '../stackAuthenticationNavigator';
import { styles } from './styles';
import { DrawerNavigator } from '../drawerNavigator';
import { useSelector } from 'react-redux';
import { selectAuthorizationState } from '../../appStore/redux/authenticationState/authenticationStateSelector';



export const ContainerNavigation: FC = () => {
    const isUserSign = useSelector(selectAuthorizationState);

    return (
        <SafeAreaView style={styles.safeArea}>
            <NavigationContainer>
                {isUserSign ? <DrawerNavigator /> : <StackAuthenticationNavigator />}
            </NavigationContainer>
        </SafeAreaView>
    );
};