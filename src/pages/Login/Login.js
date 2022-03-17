import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView } from 'react-native';
import {Tips, NavBar} from "../../ServiceComponent/Login/Login";
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import Ionicons from "react-native-vector-icons/Ionicons";
const LoginPage = (props) => {
    const [msg, setMsg] = useState('');
    const [currentPage, setCurrenPage] = useState('login');
    return (
        <SafeAreaView style={styles.root}>
          <NavBar 
            title={currentPage === 'login' ? '登录' : '注册'} 
            subTitle={currentPage === 'login' ? '注册' : '登录'} 
            subPress={() => {
              if (currentPage === 'login') {
                  setCurrenPage('register');
              } else {
                setCurrenPage('login');
              }
            }}>
          </NavBar> 
          {
            currentPage === 'login' && <LoginForm setMsg={setMsg} ></LoginForm>
          }
          {
            currentPage === 'register' && <RegisterForm setMsg={setMsg}></RegisterForm>
          }
          <Tips msg={msg} helpUrl={'https://www.baidu.com'}></Tips>
          <Text style={styles.msg}>{msg}</Text>
          <Ionicons name={'md-trending-up'} size={26} style={{color: 'red'}}></Ionicons>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        // flex: 1,
        backgroundColor: '#fff'
    },
    msg: {
      textAlign: 'center',
      paddingTop: 20,
      color: 'red'
    }
});
export default LoginPage;
