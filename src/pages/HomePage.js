import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import SafeAreaViewPlus from 'react-native-safe-area-plus';
export default class Index extends Component {
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return (
            <SafeAreaViewPlus topColor='#2196f3'>
                <DynamicTabNavigator></DynamicTabNavigator>
            </SafeAreaViewPlus>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})