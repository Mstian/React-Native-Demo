import CONSTANT from './const';
import {getBoading} from '../utils/TokenUtiles';
let {headers, url} = CONSTANT;
/**
 * 数据请求get方法
 * @param {*} api
 * @param {*} params
 * @returns
 */
export async function get(api, params) {
    let boarding;
    try {
        boarding = await getBoading();
    } catch (error) {
        console.log('获取本地token失败');
    }
    return dealWithResult(fetch(dealWithParams(url + api, params), {
        headers: {
            ...headers,
            "boarding-pass": boarding || ''
        },
    }));
}


export async function post(api, params) {
    let data = params instanceof FormData ? params : JSON.stringify(params);
    let contentType = params instanceof FormData ? 'multipart/form-data' : 'application/json';
    let boarding;
    try {
        boarding = await getBoading();
    } catch (error) {
        console.log('获取本地token失败');
    }
    return dealWithResult(fetch(dealWithParams(url + api), {
        headers: {
            'content-type': contentType,
            ...headers,
            "boarding-pass": boarding || ''
        },
        method: 'POST',
        body: data,
    }));
}


/**
 * 处理fetch返回数据
 * @param {Promise} doAction
 */
function dealWithResult (doAction) {
    return new Promise((resolve, reject) => {
        doAction.then((res) => {
           const type = res.headers.get('Content-Type');
           if (type.indexOf('json') !== -1) {
             return res.json();
           }
           return res.text();
        }).then((result) => {
            if (typeof result === 'string') {
                throw new Error(result);
            }

            const {code, msg, data} = result;

            if (code === 401) {
                // todo: 未登录状态处理 - 跳转首页 唤起登录等
                return;
            }
            resolve({result: data, resp: result});
        }).catch((err) => {
            reject(err);
        });
    });
}


/**
 * 拼接完整的url
 * @param {String} url
 * @param {String | Object} params
 */

function dealWithParams (baseUrl, params) {
    console.log(baseUrl, 'baseUrlbaseUrl');
    let newUrl = new URL(baseUrl), finaleUrl;
    if (typeof params === 'object') {
        for (let [key, value] of Object.entries(params)) {
            newUrl.searchParams.append(key, value);
        }
        console.log(newUrl, 'newUrlnewUrlnewUrl');
        finaleUrl = newUrl.toString();
    } else if (typeof params === 'string') {
        finaleUrl = baseUrl.endsWith('/') ? baseUrl + params : baseUrl + '/' + params;
    } else {
        finaleUrl = newUrl.toString();
    }
    console.log(finaleUrl, 'dealWithParamsdealWithParamsdealWithParams');
    return finaleUrl;
}
