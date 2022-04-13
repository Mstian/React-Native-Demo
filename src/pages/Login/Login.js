import React, { useState } from 'react';
import {StyleSheet, Text, SafeAreaView, View } from 'react-native';
import {Tips, NavBar} from "../../ServiceComponent/Login/Login";
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
// import Ionicons from "react-native-vector-icons/Ionicons";
import NavigationUtil from '../../navigator/NavigationUtil';
const LoginPage = (props) => {
    const {navigation} = props;
    const [msg, setMsg] = useState('');
    const [currentPage, setCurrenPage] = useState('login');

    const handleloginCB = (flag) => {
      if (!flag) {
        // 登录失败
        console.log('登录失败，请稍后重试！');
        return;
      }
      NavigationUtil.resetToHomePage({navigation});
    }

    return (
        <SafeAreaView style={styles.root}>
          <NavBar 
            title={currentPage === 'login' ? '登录' : '注册'} 
            subTitle={currentPage === 'login' ? '注册' : '登录'} 
            subPress={() => {
              setMsg('');
              if (currentPage === 'login') {
                  setCurrenPage('register');
              } else {
                setCurrenPage('login');
              }
            }}>
          </NavBar> 
          <View style={styles.formWrapper}>
            <View>
              {
                currentPage === 'login' && <LoginForm setMsg={setMsg} handleloginCB={handleloginCB}></LoginForm>
              }
              {
                currentPage === 'register' && <RegisterForm setMsg={setMsg}></RegisterForm>
              }
              <Tips msg={msg} helpUrl={'https://www.baidu.com'}></Tips>
              <Text style={styles.msg}>{msg}</Text>
            </View>
          </View>
          {/* <Ionicons name={'md-trending-up'} size={26} style={{color: 'red'}}></Ionicons> */}
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
    },
    formWrapper: {
      flex: 1,
      // justifyContent: 'c/xsscenter',
      // alignItems: 'center'
    }
});
export default LoginPage;
