import AsyncStorage from '@react-native-community/async-storage';

export const setStorageData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        return false;
    }
};

export const getStorageData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return JSON.parse(value);
    } catch (e) {
        return false;
    }
};
