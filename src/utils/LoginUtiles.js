// import {post} from '../api/index';
import {loginApi} from '../api/apiList';
import {saveBoarding} from './TokenUtiles';
export default class LoginUtils {
    constructor(){
        this.instance;
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new LoginUtils();
        }
        return this.instance;
    }
    login(userName, password) {
        return new Promise((resolve, reject) => {
            // loginApi({userName: });
            let params = new FormData();
            params.append('userName', userName);
            params.append('password', password);
            loginApi(params).then(({result, resp}) => {
                const {code, data, msg} = resp;
                if (code === 0) {
                    saveBoarding(data);
                    resolve(resp);
                } else {
                    reject(resp);
                }
            }).catch((e) => {
                reject({code: -1, msg: '哎呀，登录出错啦'})
            });
        })
    }

}