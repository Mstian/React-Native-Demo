import React, {Component} from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import keys from '../res/data/keys.json';

import {tabNav} from '../navigator/NavigationDelegate';

import NavigationBar from 'react-native-navbar-plus';

import { connect } from "react-redux";
import actions from '../action/index'
class Index extends Component {
    render(){
        return (
            <View style={styles.container}>
                <NavigationBar title='最热' />
                {
                    keys.length ? tabNav({Component: PopularTabPage, theme: {themeColor: this.props.theme || '#2196f3'}, keys }) : null
                }
            </View>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        theme: state.theme.theme
    }
}

const wrapIndex = connect(mapStateToProps, null)(Index); 
export default wrapIndex;

class PopularTab extends Component {
    render() {
        const {tabLabel} = this.props;
        return (
            <>
             <Text>{tabLabel + 'dididi'}</Text>
             <Button title="改变主题" onPress={() => {
                 this.props.onThemeChange('pink');
             }}></Button>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onThemeChange:(theme) => dispatch(actions.onThemeChange(theme))
    }
}
const PopularTabPage = connect(null, mapDispatchToProps)(PopularTab);

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});