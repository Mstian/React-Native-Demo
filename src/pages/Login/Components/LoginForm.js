import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LoginUtils from '../../../utils/LoginUtiles';
import {ConfirmButton} from "../../../ServiceComponent/Login/Login";
import Input from "../../../UIComponents/Input";
export default (props) => {
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');
  const {setMsg} = props;
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
          <ConfirmButton 
            title="登录" 
            onClick={() => {

              if (!username || !password) {
                setMsg('请输入用户名或密码！！！');
                return;
              }
              setMsg('');
              LoginUtils.getInstance().login(username, password).then((res) => {
                setMsg('登录成功');
                props.handleloginCB && props.handleloginCB(true);
              }).catch((e) => {
                console.log(e, '登录失败了吗？？？？？');
                const {msg="登录失败"} = e;
                setMsg(msg);
                props.handleloginCB && props.handleloginCB(false);
              })
            }}>
          </ConfirmButton>
        </View>
    );
}
const styles = StyleSheet.create({
    root: {
        // flex: 1,
        // height: 400
    }
});