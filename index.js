/**
 * @format
 */
// test
import {AppRegistry} from 'react-native';
// import App from './App';
// import AppNavigator from './src/navigator/AppNavigator';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => App);
