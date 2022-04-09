import React, {Component} from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";

import NavigationUtil from "../navigator/NavigationUtil";
import { getBoading } from "../utils/TokenUtiles";

export default class Index extends Component {

    componentDidMount() {
        this.doLaunch();
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    async doLaunch() {
        const boarding = await getBoading();
        const {navigation} = this.props;

        this.timer = setTimeout(() => {
            if (boarding) {
                // 登录态 跳转首页
                NavigationUtil.resetToHomePage({navigation});
            } else {
                // 非登录态跳转登录页
                NavigationUtil.resetToLoginPage({navigation});
            }
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.wcImg} resizeMode={'cover'} source={require('../Assets/Images/welcomeBg.jpeg')}>
                    <Image style={styles.loading} source={require('../Assets/Images/loading.gif')}></Image>
                </ImageBackground>
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wcImg: {
        // flex: 1
        width: '100%',
        height: '100%'
    },
    loading: {
        position: 'absolute',
        width: 64,
        height: 64,
        bottom: 100,
        left: '50%',
        marginLeft: -32,
        borderRadius: 64
    }
})