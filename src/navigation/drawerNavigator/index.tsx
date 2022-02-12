import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerScreen } from '../../../modules/tournaments/UI/screens/drawerScreen';
import { TournamentsScreen } from '../../../modules/tournaments/UI/screens/TournamentsScreen';
import { MatchesScreen } from '../../../modules/tournaments/UI/screens/matchesScreen';

export const DrawerNavigator: FC = () => {
    const Drawer = createDrawerNavigator();
    
    return (
        <Drawer.Navigator drawerContent={() => <DrawerScreen />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={'Tournaments'} component={TournamentsScreen} />
            <Drawer.Screen name={'Matches'} component={MatchesScreen} />
        </Drawer.Navigator>
    )
}