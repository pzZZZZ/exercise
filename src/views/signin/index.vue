<template>
	<div class="signin">
		<mt-field label="用户名" placeholder="请输入用户名" v-model='username'></mt-field>
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email" ></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model='password'></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
		<mt-button @click.native="openPicker" type="default" size='large'>点击设置生日 </mt-button>
		<mt-field label="生日" v-model='pickerValue' disabled></mt-field>
		<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
		<mt-button @click.native="signin" type="primary" size='large'>立即注册 </mt-button>
<mt-datetime-picker
    ref="picker"
    type="date"
    v-model="pickerValue"
    @confirm="handleConfirm"
    :startDate='startDate'
    >
  </mt-datetime-picker>
 
	</div>
</template>
<script type="text/javascript">
	import { Field } from 'mint-ui';
	import Vue from 'vue';
	import { DatetimePicker } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Field.name, Field);
	export default{
		
			data(){
				return{
					pickerValue:'',
					username:'',
					password:''
				}
			},
			mounted(){
				console.log(new Date(0))
				this.startDate = new Date(0);

			}
			,
			methods: {
		      openPicker() {
		        this.$refs.picker.open();
		      },
		      handleConfirm(data) {
		      	var str = `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`
		      	console.log(str)
		      	this.pickerValue = str;
		      },
		      signin() {
		      	console.log(this.username+this.password)
		      	if((this.username&this.password)!=''){
		      		localStorage.setItem('username', this.username);
		      		localStorage.setItem('password', this.password);
		      		console.log(localStorage.getItem('username'))
		      		MessageBox('提示', '操作成功');
		      		this.$router.push({path:'/login'})
		      	}else{
		      			Toast({
					  message: '账号密码不能为空',
					  position: 'top',
					  duration: 5000
					});
		      	}
		      		
		      
		      	}
		    }
		}
	
</script>