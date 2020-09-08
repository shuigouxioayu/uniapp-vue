<template>
	<view>
		<!-- 使用了 mescroll的uni版本 用于下拉刷新 上拉加载-->
		<!-- 文档地址 http://www.mescroll.com/uni.html?v=20200315 -->
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption" :up="upOption">
			<view v-for="data in dataList">

			</view>
		</mescroll-body>


	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		name: 'list',
		mixins: [MescrollMixin], // 使用mixin
		data() {
			return {
				mescroll: null, // mescroll实例对象 (此行可删,mixins已默认)
				// 下拉刷新的配置(可选, 绝大部分情况无需配置)
				downOption: {
					/* 主要用于多语种切换 没有语种切换 可以删了 */
					// textInOffset:this.$t('text')['下拉刷新'],
					// textOutOffset:this.$t('text')['释放更新'],
					// textLoading:this.$t('text')['加载中'],
				},
				// 上拉加载的配置(可选, 绝大部分情况无需配置)
				upOption: {
					page: {
						size: 10 // 每页数据的数量,默认10
					},
					noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据',
						icon: null, // 空布局的图标路径 (支持网络路径)
					},
					// textLoading:this.$t('text')['加载中'] // 可以删了
				},
				// 列表数据
				dataList: [],
				findForm:{
					page:1,
					limit:20
				}
			}
		},
		methods: {
			downCallback() {
				this.mescroll.resetUpScroll(); // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			},
			/*上拉加载的回调*/
			upCallback(page) {
				this.findForm.page = page.num; // 页码, 默认从1开始
				this.findForm.limit = page.size; // 页长, 默认每页10条
				
				this.$api.charge_log(this.findform).then(res => {
					console.log(res);
					//设置列表数据
					if (page.num == 1) this.dataList = []; //如果是第一页需手动置空列表
					this.dataList = this.dataList.concat(res.data.list); //追加新数据
					
					this.mescroll.endBySize(res.data.list.length, res.data.total) 
					// this.mescroll.endBySize(res.data.list.length, res.data.list.length) //如果就一页数据 ，可以写死
				}).catch(err=>{
					this.mescroll.endErr()
				})
			}
		}
	}
</script>

<style>

</style>
