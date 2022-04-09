import React, {Component} from "react";
import { StyleSheet, View, Text } from "react-native";
export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>我的</Text>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})