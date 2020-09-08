import Vue from 'vue'
import Vuex from 'vuex'

import web3 from './modules/web3.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
	web3
  }
})

export default store
