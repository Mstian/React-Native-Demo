import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/Login/Login';
import HomePage from '../pages/HomePage';
import AboutMePage from '../pages/AboutMePage';
import AboutPage from '../pages/AboutPage';
import CodePushPage from '../pages/CodePushPage';
import CustomKeyPage from '../pages/CustomKeyPage';
import DetailPage from '../pages/DetailPage';
import PopularPage from '../pages/PopularPage';
import SearchPage from '../pages/SearchPage';
import SortKeyPage from '../pages/SortKeyPage';
import WebViewPage from '../pages/WebViewPage';
import WelcomePage from '../pages/WelcomePage';

const Stack = createNativeStackNavigator();
// 在这里配置除tab页以外的页面

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='WelcomePage' component={WelcomePage} options={{headerShown: false}} />
                <Stack.Screen name='LoginPage' component={LoginPage} options={{headerShown: false}}/>
                <Stack.Screen name='HomePage' component={HomePage} options={{headerShown: false}} />
                <Stack.Screen name='AboutMePage' component={AboutMePage} options={{headerShown: false}} />
                <Stack.Screen name='CodePushPage' component={CodePushPage} options={{headerShown: false}} />
                <Stack.Screen name='AboutPage' component={AboutPage} options={{headerShown: false}} />
                <Stack.Screen name='CustomKeyPage' component={CustomKeyPage} options={{headerShown: false}} />
                <Stack.Screen name='DetailPage' component={DetailPage} options={{headerShown: false}} />
                <Stack.Screen name='PopularPage' component={PopularPage} options={{headerShown: false}} />
                <Stack.Screen name='SearchPage' component={SearchPage} options={{headerShown: false}} />
                <Stack.Screen name='SortKeyPage' component={SortKeyPage} options={{headerShown: false}} />
                <Stack.Screen name='WebViewPage' component={WebViewPage} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}