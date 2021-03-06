import Vue from 'vue'
import App from './App'

import store from '@/store'
Vue.prototype.$store = store;

import i18n from '@/plugins/i18n/i18n.js';
Vue.prototype._i18n = i18n;

import api from '@/plugins/api/api.js';
Vue.prototype.$api = api;

import cuCustom from '@/plugins/colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom); //自定义头部导航

import uView from "@/plugins/uview-ui";
Vue.use(uView);

import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
