import {get, post} from './index';
import CONSTANT from './const';
const {test, login} = CONSTANT;
export function testApi (params) {
    return post(test.api, params);
}

export function loginApi (params) {
    return post(login.api, params);
}
