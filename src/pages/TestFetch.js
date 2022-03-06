import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, AsyncStorage } from 'react-native';
import { testApi } from '../api/apiList';
export default (props) => {

    const [msg, setMsg] = useState('');

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

    return (
        <View style={styles.root}>
            <Text> Text </Text>
            <TouchableHighlight onPress={() => {
                // setMsg();
                doFetch();
            }}>
                <Text> Text </Text>
            </TouchableHighlight>

            <Text>{msg}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
