/* 复制 */
import h5Copy from './junyi-h5-copy.js'
export default function copyText(val) {
	// #ifdef APP-PLUS
	uni.setClipboardData({
		data: val,
		success: function() {
			console.log('success');
			uni.showToast({
				title: '复制成功',
				icon: "none"
			})
		},
		fail: function() {
			uni.showToast({
				title: '复制失败',
				icon: "none"
			})
		}
	});
	//#endif
	// #ifdef H5
	const result = h5Copy(val);
	if (result === true) {
		uni.showToast({
			title: '复制成功',
		})
	} else {
		uni.showToast({
			title: '复制失败',
			icon: 'none'
		})
	}
	// #endif
}
