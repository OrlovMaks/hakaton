import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserData = async (userData: string) => {
    try {
        await AsyncStorage.setItem('userData', userData)
    } catch (e) {
        return
    }
}

export const getUserData = async () => {
    try {
        const value = await AsyncStorage.getItem('userData')
        if (value !== null) {
            return value
        }
    } catch (e) {
        return
    }
}

export const removeUserData = async () => {
    try {
        await AsyncStorage.removeItem('userData')
    } catch (e) {
        return
    }
}