import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import action from '../action';
import reducer from './reducer/index';

// 中间件
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatching', action);
    }
    const result = next(action);
    console.log('nextState', store.getState())
    return result;
}

const middlewares = [thunk, logger];

// 1. 创建store

export default createStore(reducer, applyMiddleware(...middlewares));
