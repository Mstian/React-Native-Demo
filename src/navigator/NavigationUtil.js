import { StackActions } from "@react-navigation/native";

export default class NavigationUtil {
    static goPage(params, page) {
        const navigation = NavigationUtil.navigation || (params || {}).navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null');
            return;
        }
        navigation.navigate(page, {
            ...params,
            navigation: undefined
        })
    }
    /**
     * 返回到上一页
     * @param {*} navigation 
     */
    static goBack(navigation) {
        navigation.goBack();
    }
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.dispatch(StackActions.replace('HomePage', {}));
    }
    static resetToLoginPage(params) {
        const {navigation} = params;
        if (!navigation) {
            navigation = NavigationUtil.navigation;
        }
        navigation.dispatch(StackActions.replace('LoginPage', {}));
    }
}