import React, {Component} from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigator';
import store  from './store';
// 3. 使用store
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator></AppNavigator>
            </Provider>
        );
    }
}