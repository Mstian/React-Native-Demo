import CONSTANT from './const';

let {headers, url} = CONSTANT;
/**
 * 数据请求get方法
 * @param {*} api
 * @param {*} params
 * @returns
 */
export function get(api, params) {
    console.log(api, params, '----');
    return dealWithResult(fetch(dealWithParams(url + api, params), {
        headers: {
            ...headers,
        },
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
            resolve(result);
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
