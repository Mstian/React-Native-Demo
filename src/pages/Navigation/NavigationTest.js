import React, { useState } from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons"

function Tab1() {
    return <Text>Java</Text>
}

function Tab2() {
    return <Text>PHP</Text>
}

const TopTab = createMaterialTopTabNavigator();
function PopularScreen() {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name='index1' component={Tab1}
                options={{
                    title: 'RN'
                }}
            />
            <TopTab.Screen name='index2' component={Tab2}
                options={{
                    title: 'Flutter'
                }}
            />
        </TopTab.Navigator>
    );
}

function TrendingScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>趋势</Text>
        </View>
    );
}


const Tab = createBottomTabNavigator();
function MainScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='popular' component={PopularScreen}
                options={{
                    tabBarLabel: '最热',
                    headerShown: 'false',
                    tabBarIcon: ({color, focused}) => {
                        <MaterialIcons name={'whatshot'} size={26} style={{color: color}}/>
                    }
                }}
            />
            <Tab.Screen name='trending' component={TrendingScreen}
                options={{
                    tabBarLabel: '趋势',
                    headerShown: 'false',
                    tabBarIcon: ({color, focused}) => {
                        <Ionicons name={'md-trending-up'} size={26} style={{color: color}}/>
                    }
                }}
            />
        </Tab.Navigator>
    );
}


function WelcomePage(props) {
    const {navigation} = props;
    return (
        <View>
            <Text>欢迎页</Text>
            <Button title='跳转首页' onPress={() => {
                navigation.navigate('main');
            }}></Button>
        </View>
    );
}




const Stack = createNativeStackNavigator();
export default (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='index' component={WelcomePage} options={{headerShown: false}}/>
                <Stack.Screen name='main' component={MainScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    root: {
        flex: 1,
    }
});