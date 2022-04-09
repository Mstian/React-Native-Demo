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

export const NavBar = (props) => {
    const {title, subTitle, subPress} = props;
    return (
        <View style={styles.navWrapper}>
            <View/>
            <View style={styles.middleWrap}>
               <Text style={styles.navTitle}>{title}</Text>
            </View>
            <TouchableOpacity onPress={subPress}>
                <Text style={styles.navSubTitle}>{subTitle}</Text>
            </TouchableOpacity>
        </View>
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
    },
    navWrapper: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        height: 44,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    middleWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    navTitle: {
        fontSize: 20,
        color: '#000'
    },
    navSubTitle: {
        fontSize: 14,
        color: '#007aff',
        paddingRight: 10,
    }
});