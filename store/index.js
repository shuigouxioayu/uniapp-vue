import Vue from 'vue'
import Vuex from 'vuex'

import userInfo from './modules/userInfo.js'; //用户信息
import coinInfo from './modules/coinInfo.js'; // 币种信息
import system from './modules/system.js'; //系统信息

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
	userInfo,
	coinInfo,
	system
  }
})

export default store
