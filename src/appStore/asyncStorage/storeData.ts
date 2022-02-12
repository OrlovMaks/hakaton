import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, data: string): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, data)
    } catch (e) {
        
    }
}
