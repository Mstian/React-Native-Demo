import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput} from 'react-native';
export default (props) => {
    const { label, placeholder, secure, shortline, onChange } = props;
    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secure ? true : false}
                    autoCapitalize={'none'}
                    onChangeText={(text) => {
                        onChange(text);
                    }}
                 />
            </View>
            <View
                style={[styles.shortline, {
                marginLeft: shortline ? 10 : 0,
            }]}></View>
           
        </View>
    );
};
const styles = StyleSheet.create({
    root: {
        // flex: 1,
    },
    label: {
        width: 90,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 16
    },
    row: {
        flexDirection:'row',
        backgroundColor: '#fff'
    },
    input: {
        // backgroundColor: 'red',
        flex: 1,
        paddingLeft: 5,
        fontSize: 14
    },
    shortline: {
        height: 0.5,
        backgroundColor: '#ddd',
    },
});
