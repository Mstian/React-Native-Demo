import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, Linking } from 'react-native';
export const ConfirmButton = (props) => {
    const {title, onClick} = props;
    return (
        <TouchableOpacity style={styles.confirmButton} onPress={onClick}>
            <Text style={styles.confirmText}>{title}</Text>
        </TouchableOpacity>    
    );
}
export const Tips = (props) => {
    const {helpUrl} = props;
    return (
       <Button style={styles.tips} title='查看帮助' onPress={() => {
        Linking.canOpenURL(helpUrl).then((res) => {
            console.log(res, 'okoko');
            Linking.openURL(helpUrl)
        }).catch((err) => {
            console.log(err, 'errerr')
        })
       }}/>  
    );
}
const styles = StyleSheet.create({
    confirmButton: {
        margin: 20,
        padding: 10,
        backgroundColor: '#2196f3',
        alignItems: 'center',
        borderRadius: 5
    },
    confirmText: {
        color: '#fff',
        fontSize: 16
    },
    tips: {
        alignItems: 'center'
    }
});