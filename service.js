
export var networkUrl = { // 默认生产环境
	apiURL:'https://kgnex.com', // 线上ip地址
	wssURL:'wss://kgnex.com'  , // 线上websocket地址
	// apiURL:'http://223.247.152.64', //
	// wssURL:'wss://223.247.152.64', //
}
if(process.env.NODE_ENV === 'development'){ //开发模式下的接口地址
	networkUrl = {
		// apiURL:'https://kgnex.com', // 线上ip地址
		// wssURL:'wss://kgnex.com'  ,// 线上ip地址
		apiURL:'http://223.247.152.64', // 开发测试ip地址
		wssURL:'ws://223.247.152.64'  ,// 开发测试websocket地址
	}
}else{
	
}

export const port = '8081'; //端口
export const AppName = '项目名称'; //AppName 项目名称 // 这里修改
export const isopenSocket = true; //是否打开socket

const USERS_INFO = 'USER_INFO';
export const USERS_TOKEN = 'TOKEN';
export const Langs = 'Langs';

/* 获取用户本地用户信息 */
export const getUsers = function () {
    let ret = '';
    ret = uni.getStorageSync(USERS_INFO);
    if (!ret) {
        ret = '[]';
    }
	console.log('用户信息',ret);
    return ret;
}

/* 存储用户信息 */
export const addUserInfo = function (data) {
	addUserToken(data.token);
    uni.setStorage({
        key: USERS_INFO,
        data: data,
        success: function () {
            console.log('用户信息保存成功');
        }
    });
}

/* 添加或修改用户本地信息 */
export const addUserToken = function (token) {
	uni.setStorage({
	    key: USERS_TOKEN,
	    data: token,
	    success: function () {
	        console.log('token保存成功');
	    }
	});
}

/* 清除用户本地信息 */
export const clearUser = function (userInfo) {
	console.log('清除本地缓存USERS_TOKEN');
	uni.removeStorageSync(USERS_TOKEN);//从本地缓存中同步移除用户信息TOEKN
	uni.removeStorageSync(USERS_INFO);//从本地缓存中同步移除用户信息
}

/* 修改语种 */
export const setLangs = function (val) {
	console.log('修改语种',val);
	uni.setStorage({
	    key: Langs,
	    data: val,
	    success: function () {
	        console.log('修改语种成功');
	    }
	});
}

/* 修改主题 */
export const setTheme = function (val) {
	console.log('修改主题',val);
	uni.setStorage({
	    key: 'Theme',
	    data: val,
	    success: function () {
	        console.log('修改主题成功');
	    }
	});
}