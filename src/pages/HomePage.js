import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
export default class Index extends Component {
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator></DynamicTabNavigator>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})