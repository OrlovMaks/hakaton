import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerScreen } from '../../../modules/tournaments/UI/screens/drawerScreen';
import { TournamentsScreen } from '../../../modules/tournaments/UI/screens/TournamentsScreen';
import { MatchesScreen } from '../../../modules/tournaments/UI/screens/matchesScreen';
import { CupStagesScreen } from '../../../modules/tournaments/UI/screens/cupStagesScreen';
import { CupTablesScreen } from '../../../modules/tournaments/UI/screens/cupTablesScreen';
import { CreateTournamentsScreen } from '../../../modules/tournaments/UI/screens/createTournamentScreen';
import { ChampionshipTableScreen } from '../../../modules/tournaments/UI/screens/championshipTableScreen';
import { AddScoreScreen } from '../../../modules/tournaments/UI/screens/addScoreForAdmin';

export const DrawerNavigator: FC = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={() => <DrawerScreen />} screenOptions={{ headerShown: false }}>
            <Drawer.Screen name={'Tournaments'} component={TournamentsScreen} />
            <Drawer.Screen name={'Matches'} component={MatchesScreen} />
            <Drawer.Screen name={'CupStages'} component={CupStagesScreen} />
            <Drawer.Screen name={'MatchesTables'} component={CupTablesScreen} />
            <Drawer.Screen name={'CreateTournaments'} component={CreateTournamentsScreen} />
            <Drawer.Screen name={'ChampionshipTable'} component={ChampionshipTableScreen} />
            <Drawer.Screen name={'AddScore'} component={AddScoreScreen} />
        </Drawer.Navigator>
    )
}