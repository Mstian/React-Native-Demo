import {get, post} from './index';
import CONSTANT from './const';
const {test} = CONSTANT;
export function testApi (params) {
    return post(test.api, params);
}
