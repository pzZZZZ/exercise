<template>
	<div class="login">
		<mt-header title="请先登陆">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="login_text">
			<mt-field label="用户名" placeholder="请输入用户名"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type='password'></mt-field>
		</div>
		<div class="btns">
			<mt-button >确定登陆</mt-button>
			<router-link to="signin"><mt-button >注册</mt-button></router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
import { Field } from 'mint-ui';
import Vue from 'vue';
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Field.name, Field);
	export default{
		data(){
			return{

			}
		},
		methods:{
			
			 getlogin(){
				if(localStorage.getItem('username').length!=0){
					console.log('登陆')
				}
			}
		},
		mounted(){
			 this.getlogin()
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.mint-header{
	height:12.5vw;
	background: #ff6600;
}
.btns{
	padding-top: 30px;
	display: flex;
	justify-content:center;
	.mint-button{
		color:#fff;
		&:nth-child(1){
			background:lightgreen;
			margin-right: 5px;
		}
		&:nth-child(2){
			background:lightblue;
			margin-left: 5px;
		}
	}
}
</style>