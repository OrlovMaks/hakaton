import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILanguages } from '../../localization/entities/ILanguages';

export const getData = async (key: string): Promise<string | undefined> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            console.log('getData', value);
            return value;
        }
    } catch (e) {
        console.log(e);
        return undefined;
    }
}