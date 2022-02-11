import 'react-native-gesture-handler';
import React from 'react';
import { ContainerNavigation } from './navigation/containerNavigator/index';
import { LogBox } from 'react-native';
import { AppContextProvider } from './theme/ui';
import { LocalizationProvider } from './localization/ui';
import { Provider } from 'react-redux'
import { store } from './appStore/redux/store';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export const App = () => {

    return (
        <Provider store={store}>
            <LocalizationProvider>
                <AppContextProvider>
                    <ContainerNavigation />
                </AppContextProvider>
            </LocalizationProvider>
        </Provider>
    );
};
