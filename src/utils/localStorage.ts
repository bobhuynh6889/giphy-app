import AsyncStorage from '@react-native-async-storage/async-storage';

const saveObject = async (key: string, obj: object): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (e) {
    console.error('Error saving object', e);
  }
};

const getObject = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error retrieving object', e);
    return null;
  }
};

const StorageService = {
  saveObject,
  getObject,
};

export default StorageService;
