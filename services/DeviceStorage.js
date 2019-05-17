import {AsyncStorage} from 'react-native';

/**
 * Methods to store and get data from the device
 * @type {{saveItem(*=, *=): Promise<void>, getItem(*=): Promise<void>}}
 */
const deviceStorage = {
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },

    async getValue(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if(value !== null) {
                return value
            }
        } catch(error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }
};

export default deviceStorage;