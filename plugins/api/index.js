import Request from './request';
import i18n from '@/plugins/i18n/i18n.js';
import {
	networkUrl,
	port,
	USERS_TOKEN,
	Langs
} from '@/service.js';
import store from '@/store/index.js';

const http = new Request()
let langs = {
	en:'en-US',
	cn:'zh-CN',
	tw:'zh-TW',
	de:'de',
	ja:'ja',
	ko:'ko',
	th:'th',
	it:'it',
	'ru-RU':'ru-RU',
	fr:'fr',
}

http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = networkUrl.apiURL+':'+port /* 根域名不同 */
	config.header = {
		...config.header
	}
	return config
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */
http.validateStatus = (statusCode) => {
	console.log('自定义验证器:',statusCode);
	return statusCode === 200
}

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	let keylangs = uni.getStorageSync(Langs);
	config.header = {
		"Authorization": uni.getStorageSync(USERS_TOKEN), //验证token
		"Accept-Language": langs[keylangs]?langs[keylangs]:'zh-CN', //国际化，
		...config.header,
	}
	console.log("请求之前拦截器",config);
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
	  cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
	}
	*/
	return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
	console.log("请求之后拦截器",response);
	return response.data;
	
}, (err) => { // 请求错误做点什么
	console.log("请求有误：",err);
	switch (err.statusCode){
		case -1:
			uni.showToast({
				icon:"none",
				title:i18n.t("text")['网络连接失败']
			})
			return -1;
		case 401:
			uni.showToast({
				icon:"none",
				title:i18n.t("text")['未登录']
			})
			store.dispatch('login/Logout');
			return 401;
		default:
			uni.showToast({
				icon:"none",
				title:err.statusCode? i18n.t("content")['ConnectionError'](err.statusCode):err.message
			})
			return '请确认网路连接是否正常';
	}
	
})

export {
	http,
}
