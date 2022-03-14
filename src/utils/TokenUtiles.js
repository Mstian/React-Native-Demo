import { AsyncStorage } from "react-native";
const KEY_BOADRDING_PASS = 'boarding-pass';

/**
 * 保存登录态
 * @param {*} data 
 */
export function saveBoarding(data) {
    AsyncStorage.setItem(KEY_BOADRDING_PASS, data);
}

/**
 * 获取登录态
 */

export async function getBoading() {
    return await AsyncStorage.getItem(KEY_BOADRDING_PASS);
}