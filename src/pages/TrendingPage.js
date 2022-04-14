import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
import NavigationBar from 'react-native-navbar-plus';
import keys from '../res/data/langs.json';
import { tabNav } from "../navigator/NavigationDelegate";
export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavigationBar title='趋势' />
                {
                    keys.length ? tabNav({Component: TrendingTab, theme: {themeColor: '#2196f3'}, keys}) : null
                }
            </View>    
        );
    }
}

function TrendingTab(props) {
    const {tabLabel} = props;
    return <Text>{tabLabel + 'dadada'}</Text>;
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})