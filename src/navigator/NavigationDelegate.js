import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBarIndicator } from 'react-native-tab-view';
const Tab = createMaterialTopTabNavigator();

export function tabNav ({Component, keys, theme, extra={}}) {
    return (
        <Tab.Navigator
            screenOptions={{
                lazy: true, // 懒加载导航栏
                tabBarItemStyle: styles.tabStyle,
                tabBarScrollEnabled: true, // 是否支持选项卡滚动 默认不支持
                tabBarActiveTintColor: '#fff', // 激活文本颜色
                tabBarInactiveTintColor: '#fff', // 非激活文本颜色
                tabBarStyle: {
                    backgroundColor: theme.themeColor // tabBar背景色
                },
                tabBarIndicatorStyle: styles. indicatorStyle, // 标签指示器样式
                tabBarLabelStyle: styles.labelStyle // 文本样式
            }}
        >
            {
                Object.entries(_genTabs({Component, keys, theme, extra})).map((item, index) => {
                    return (
                        <Tab.Screen 
                            key={item[0]}
                            name={item[1].navagationOptions.title}
                            component={item[1].Screen}
                            options={item[1].navigationOptions}
                        />
                    );
                })
            }
        </Tab.Navigator>
    );
}
function _genTabs({Component, keys, theme, extra = {}}) {
    const tabs = {};
    keys.forEach((item, index) => {
            if (item.checked) {
                tabs[`tab${index}`] = {
                    Screen: (props) => (<Component {...props} {...extra} tabLabel={item.name} theme={theme}/>),
                    navagationOptions: {
                        title: item.name
                    }
                }
            }
    });
    return tabs;
}

const styles = StyleSheet.create({
    tabStyle: {
        padding: 0
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: '#fff'
    },
    labelStyle: {
        textTransform: 'none',
        margin: 0
    }
})
