//引入vue
import Vue from "vue";
//引入i18n语言包
import VueI18n from "vue-i18n";
//引入定义好的中英文语言
import messages from "./langs";
//在vue中使用i18n
Vue.use(VueI18n);
import {Langs} from "@/service.js";
var keylangs = uni.getStorageSync(Langs);

//初始化设置默认语言
const i18n = new VueI18n({
	locale: keylangs?keylangs:'cn',
	messages
});

export default i18n;
