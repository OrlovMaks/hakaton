import 'react-native-gesture-handler';
import React from 'react';
import { ContainerNavigation } from './navigation/containerNavigator/index';
import { LogBox, ToastAndroid} from 'react-native';
import { Provider } from 'react-redux'
import { store } from './appStore/redux/store';
import { LocalizationProvider } from './localization';
import { ThemesProvider } from './themes';
import NetInfo from "@react-native-community/netinfo";


LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export const App = () => {

  
    const showToast = () => {
        ToastAndroid.show("Check your internet connection!", ToastAndroid.SHORT);
      };

      NetInfo.fetch().then(state => {
        console.log("Is connected?", );
        if (!state.isConnected){showToast()}
      });

    
  

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
