import React, { FC } from 'react';
import { HomeScreen } from '../../../modules/tournaments/UI/screens/TournamentsScreen';
import { SettingsScreen } from '../../../modules/tournaments/UI/screens/settingsScreen';
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