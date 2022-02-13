import 'react-native-gesture-handler';
import React from 'react';
import { ContainerNavigation } from './navigation/containerNavigator/index';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './appStore/redux/store';
import { LocalizationProvider } from './localization';
import { ThemesProvider } from './themes';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export const App = () => {

    return (
        <Provider store={store}>
            <LocalizationProvider>
                <ThemesProvider>
                    <ContainerNavigation />
                </ThemesProvider>
            </LocalizationProvider>
        </Provider>
    );
};
