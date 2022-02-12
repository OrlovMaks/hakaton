import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackAuthenticationNavigator } from '../stackAuthenticationNavigator';
import { styles } from './styles';
import { DrawerNavigator } from '../drawerNavigator';
import { isUserSignSelector } from '../../appStore/redux/selectors/userSignSelector';
import { useSelector } from 'react-redux';



export const ContainerNavigation: FC = () => {
    const isUserSign = useSelector(isUserSignSelector);

    return (
        <SafeAreaView style={styles.safeArea}>
            <NavigationContainer>
                {true ? <DrawerNavigator /> : <StackAuthenticationNavigator />}
            </NavigationContainer>
        </SafeAreaView>
    );
};