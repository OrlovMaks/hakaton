import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async (key: string): Promise<{ [key: string]: string } | undefined> => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (e) {
        return undefined;
    }
}