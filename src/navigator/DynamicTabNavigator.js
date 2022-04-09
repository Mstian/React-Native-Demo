import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import PopularPage from '../pages/PopularPage';
import TrendingPage from '../pages/TrendingPage';
import MinePage from '../pages/MinePage';
import FavoritePage from '../pages/FavoritePage';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Component } from 'react/cjs/react.production.min';

const Tab = createBottomTabNavigator();
const BottomTabs = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel : '最热',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <MaterialIcons name={'whatshot'} size={26} style={{color: color}}/>
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel : '趋势',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <Ionicon name={'md-trending-up'} size={26} style={{color: color}}/>
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel : '收藏',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <MaterialIcons name={'favorite'} size={26} style={{color: color}}/>
            )
        }
    },
    MinePage: {
        screen: MinePage,
        navigationOptions: {
            tabBarLabel : '我的',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
                <Entypo name={'user'} size={26} style={{color: color}}/>
            )
        }
    }
}

export default class DynamicTabNavigator extends Component {
    _tabNavigator() {
        const {PopularPage, TrendingPage, FavoritePage, MinePage} = BottomTabs;
        const tabs = {PopularPage, TrendingPage, FavoritePage, MinePage};
        // PopularPage.navigationOptions.tabBarLabel='最热1';  // 这里可以动态修改tab属性

        return (
            <Tab.Navigator>
                {
                    Object.entries(tabs).map((item) => {
                        return (
                            <Tab.Screen
                                key={item[0]}
                                name={item[0]}
                                component={item[1].screen}
                                options={item[1].navigationOptions}
                            />
                        )
                    })
                }
            </Tab.Navigator>
        );
    }
    render() {
        const Tab = this._tabNavigator();
        return Tab;
    }
}
