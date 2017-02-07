<template>
	<div class="signin">
		<mt-field label="用户名" placeholder="请输入用户名"></mt-field>
		<mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
		<button @click='openPicker'>生日</button>
		<mt-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></mt-field>
<mt-datetime-picker
    ref="picker"
    type="date"
    v-model="pickerValue"
    @confirm="handleConfirm">
  </mt-datetime-picker>
  <input type="text" v-model='pickerValue' >
	</div>
</template>
<script type="text/javascript">
	import { Field } from 'mint-ui';
	import Vue from 'vue';
	import { DatetimePicker } from 'mint-ui';

Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Field.name, Field);
	export default{
		
			data(){
				return{
					pickerValue:''
				}
			},
			methods: {
		      openPicker() {
		        this.$refs.picker.open();
		      },
		      handleConfirm(data){
		      	var str = `${data.getFullYear()}-${data.getMonth()+1}-${data.getDate()}`
		      	console.log(str)
		      	this.pickerValue = str;
		      }
		    }
		}
	
</script>