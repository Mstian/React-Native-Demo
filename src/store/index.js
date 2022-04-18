import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer/index';

const middlewares = [thunk];

// 创建store

export default createStore(reducer, applyMiddleware(...middlewares));
