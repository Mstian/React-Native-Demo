import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {registerApi} from '../../../api/apiList';
import {ConfirmButton} from "../../../ServiceComponent/Login/Login";
import Input from "../../../UIComponents/Input";
export default (props) => {
  const [registerInfo, setRegisterInfo] = useState({
      userName:'',
      password: '',
      moocId: '',
      orderId: ''
  });
  const {setMsg} = props;
    return (
        <View style={styles.root}>
          <Input
            label={'用户名'}
            placeholder={'请输入用户名'}
            shortline
            onChange={(username) => {
                setRegisterInfo((prevState) => {
                    return {
                        ...prevState,
                        userName: username
                    }
                })
            }}
          ></Input>
          <Input
            label={'密码'}
            secure
            placeholder={'请输入密码'}
            onChange={(password) => {
                setRegisterInfo((prevState) => {
                    return {
                        ...prevState,
                        password: password
                    }
                })
            }}
          ></Input>
           <Input
            label={'慕课网ID'}
            secure
            placeholder={'请输入ID'}
            onChange={(moocId) => {
                setRegisterInfo((prevState) => {
                    return {
                        ...prevState,
                        moocId: moocId
                    }
                })
            }}
          ></Input>
           <Input
            label={'课程订单号'}
            placeholder={'请输入订单号'}
            onChange={(orderId) => {
                setRegisterInfo((prevState) => {
                    return {
                        ...prevState,
                        orderId: orderId
                    }
                })
            }}
          ></Input>
          <ConfirmButton 
            title="注册" 
            onClick={() => {
                for (let key in registerInfo) {
                    if (!registerInfo[key]) {
                        setMsg('请填写完整信息！');
                        return;
                    }
                }
                let params = new FormData();
                params.append('userName', registerInfo.userName);
                params.append('password', registerInfo.password);
                params.append('imoocId', registerInfo.moocId);
                params.append('orderId', registerInfo.orderId);
                params.append('courseFlag', 'rn');
                setMsg('');
                registerApi(params).then((result, resp) => {
                    const {code} = resp;
                    console.log(resp, '注册信息')
                    if (code === 0) {
                        setMsg('注册成功');
                    }
                }).catch((err) => {
                    setMsg('注册失败');
                });
            }}>
          </ConfirmButton>
        </View>
    );
}
const styles = StyleSheet.create({
    root: {
        // flex: 1,
    }
});