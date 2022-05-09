import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";
import SafeAreaViewPlus from 'react-native-safe-area-plus';

import {connect} from 'react-redux'; 

class Index extends Component {
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return (
            <SafeAreaViewPlus topColor={this.props.theme}>
                <DynamicTabNavigator></DynamicTabNavigator>
            </SafeAreaViewPlus>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    }
}
export default connect(mapStateToProps, null)(Index);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
})