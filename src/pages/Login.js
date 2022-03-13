import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Input from "../UIComponents/Input";
import {ConfirmButton, Tips, NavBar} from "../ServiceComponent/Login/Login";
import LoginUtils from '../utils/LoginUtiles';
const LoginPage = (props) => {

    const [username, setUserName] = useState('');
    const [password, setPassWord] = useState('');
    const [msg, setMsg] = useState('');
    return (
        <SafeAreaView style={styles.root}>
          <NavBar title={'登录'} subTitle={'注册'}></NavBar> 
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
          <ConfirmButton 
            title="登录" 
            onClick={() => {

              if (!username || !password) {
                setMsg('请输入用户名或密码！！！');
                return;
              }
              setMsg('');
              LoginUtils.getInstance().login(username, password).then((res) => {
                console.log(res, '123');
                setMsg('登录成功');
              }).catch((e) => {
                const {msg="登录失败"} = e;
                setMsg(msg);
              })
            }}>
          </ConfirmButton>
          <Tips msg={msg} helpUrl={'https://www.baidu.com'}></Tips>
          <Text style={styles.msg}>{msg}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#fff'
    },
    msg: {
      textAlign: 'center',
      paddingTop: 20,
      color: 'red'
    }
});
export default LoginPage;
