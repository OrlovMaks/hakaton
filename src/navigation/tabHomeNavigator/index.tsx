import React, { FC } from 'react';
import { HomeScreen } from '../../../modules/home/UI/screens/homeScreen';
import { SettingsScreen } from '../../../modules/home/UI/screens/settingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const TabHomeNavigator: FC = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};