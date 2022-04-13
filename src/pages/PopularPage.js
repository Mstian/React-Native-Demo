import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";

import keys from '../res/data/keys.json';

import {tabNav} from '../navigator/NavigationDelegate';

import NavigationBar from 'react-native-navbar-plus';

export default class Index extends Component {
    render(){
        
        return (
            <View style={styles.container}>
                <NavigationBar title='最热' />
                {
                    keys.length ? tabNav({Component: PopularTab, theme: {themeColor: '#2196f3'}, keys }) : null
                }
            </View>    
        );
    }
}

class PopularTab extends Component {
    render() {
        const {tabLabel} = this.props;
        return <Text>{tabLabel + 'dididi'}</Text>
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});