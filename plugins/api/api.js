import {
	http as request
} from './index.js'
	
const api = {
	updata:(data) => request.get('/app/checkVersion',{params:data}), //app版本更新
}

export default api;