import {get} from './index';
import CONSTANT from './const';
const {test} = CONSTANT;
export function testApi (params) {
    return get(test.api, params);
}
