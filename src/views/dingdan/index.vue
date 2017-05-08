<template>
	<div class="dingdan">
			<mt-header title="订单管理">
	<mt-button  slot="left" @click='backindex'>首页</mt-button>
	<mt-button  slot="right" @click='backtop'>退出登录</mt-button>
	</mt-header>
	<div class="name2">name</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		methods:{
			backtop(){
				this.$router.push('/');
				localStorage.user =''
			},
			backindex(){
				this.$router.push('/');
			}
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

	.mint-header{
	height:12.5vw;
	background: #ff6600;
}
	@mixin bgblue{
		background:blue!important;
	}
	.name2{
		@include bgblue;
	}
</style>