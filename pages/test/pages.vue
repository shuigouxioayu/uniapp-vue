<template>
	<view class="页面名">
		<cu-custom bgColor="" :isBack="true">
			<template v-slot:backText>
				<text class="margin-lr-lg text-bold">返回</text>
			</template>
			<template v-slot:content>
				<text class="margin-lr-lg text-bold">标题</text>
			</template>
			<template v-slot:right>
				<text class="margin-lr-lg text-bold">➕</text>
			</template>
		</cu-custom>
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
