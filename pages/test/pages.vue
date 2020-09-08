<template>
	<view class="页面名">
		<!-- 在所有页面和组件中 对象一定要判断是否为假 如下 -->
		<view class="">
			{{data && data.user ? data.user : '无数据'}}
			<!-- 或者使用 uveiw 中的骨架屏 用来改善页面打开没有数据的情况 -->
		</view>
	</view>
</template>

<script>
	export default {
		name:'页面名', // 必填
		components:{},
		data() {
			return {
				data:{
					user:'',
					id:''
				}
			};
		},
		computed:{},
		onLoad() {
			
		},
		onReady() {
			
		},
		watch:{},
		methods:{
			
		}
		
	}
</script>

<style lang="scss">

</style>
