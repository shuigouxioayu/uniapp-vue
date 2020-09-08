<template>
	<view class="main">
		
	</view>
</template>

<script>
	export default{
		name:"test",  //组件名 必填  组件模板示范
		components:{},
		props:{
			name:String,
			list:{
				type:Array,
				default:function(){
					return [];
				}
			}
			item:{
				type:Object,
				default:function(){
					return {};
				}
			}
		},
		data() {
			return {
				key: 'value'
			}
		},
		computed:{},
		created() {
			
		},
		mounted() {
			
		},
		watch:{
			
		},
		methods:{
			/* 用于请求 用户列表请求 api_ + 接口名 */
			api_userList(){
				
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		
	}
</style>
