import {combineReducers} from 'redux';
import theme from './theme/index';
// 2. 创建并合并reducer
const index = combineReducers({
    theme
});
export default index;