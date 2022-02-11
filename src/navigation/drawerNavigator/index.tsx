import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerScreen } from '../../../modules/home/UI/screens/drawerScreen';
import { TabHomeNavigator } from '../tabHomeNavigator';

export const DrawerNavigator: FC = () => {
    const Drawer = createDrawerNavigator();
    return (

        <Drawer.Navigator drawerContent={() => <DrawerScreen />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={'TabHome'} component={TabHomeNavigator} />
        </Drawer.Navigator>
    )
}