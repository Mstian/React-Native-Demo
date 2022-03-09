import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from "../UIComponents/Input";
const LoginPage = (props) => {

    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');

    return (
        <View style={styles.root}>
          <Input
            label={'用户名'}
            placeholder={'请输入用户名'}
            shortline
            onChange={(username) => {
                setUserName(username);
            }}
          ></Input>
          <Input
            label={'密码'}
            secure
            placeholder={'请输入密码'}
            onChange={(password) => {
                setPassWord(password);
            }}
          ></Input>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff'
    },
});
export default LoginPage;
