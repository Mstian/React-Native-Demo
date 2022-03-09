import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, AsyncStorage, Button, TextInput, Dimensions } from 'react-native';
import { testApi, loginApi } from '../api/apiList';

const { width, height } = Dimensions.get('window');

export default (props) => {

    const [msg, setMsg] = useState('');

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');

    let doFetch = () => {
        // setMsg()
        // fetch('https://www.wanandroid.com/article/list/0/json').then((res) => {
        //     console.log(res, 'ppp333333');
        //     return res.json();
        // }).then((res) => {
        //     console.log(res, 'pppppppppp');
        //     setMsg(JSON.stringify(res));
        // }).catch((e) => {
        //     console.log(e.toString());
        // });

        let formData = new FormData();
        formData.append('requestPrams', 'rn');
        testApi(formData).then(({ result, resp }) => {
            console.log(result, resp, '这是接口返回的数据啊aa');
        });
        // AsyncStorage
    };


    let handleLogin = () => {
        // console.log(userName, passWord, 'info');
        let formData = new FormData();
        formData.append('userName', userName);
        formData.append('password', passWord);

        console.log(formData, 'formDataformData');

        loginApi(formData).then(({ result, resp }) => {
            console.log(result, resp, '00000');
        });
    };


    return (
        <View style={styles.root}>
            <Text> Text </Text>
            <TouchableHighlight onPress={() => {
                // setMsg();
                doFetch();
            }}>
                <Text> Text </Text>
            </TouchableHighlight>

            <TextInput style={styles.input} value={userName} onChangeText={(text) => {
                setUserName(text);
            }} />
            <TextInput style={styles.input} value={passWord} onChangeText={(text) => {
                setPassWord(text);
            }} />

            <Button title="登录" onPress={() => {
                handleLogin();
            }} />
            <Text>{msg}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    input: {
        width: width,
        height: 50,
        borderWidth: 1,
        borderColor: '#333',
    },
});
