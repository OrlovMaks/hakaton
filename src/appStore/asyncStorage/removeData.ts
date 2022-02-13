import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        Alert.alert('Can\'t remove data'); 
    }
}