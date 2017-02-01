<template>
<div class="flower">
<div class="loading" v-show='loading'>
	<mt-spinner type="double-bounce" color="#26a2ff" :size="60"></mt-spinner>
	<p>加载中...</p>
</div>
	<mt-header title="蛋糕">
	  <router-link to="/" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right" @click='change_nav'></mt-button>
	</mt-header>
	<div class="nav" v-show='navshow'>
		<ul>
			<li>
				<router-link to='/'>
					<span></span>
					<p>首页</p>
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<span></span>
					<p>分类搜索</p>
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<span></span>
					<p>购物车</p>
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<span></span>
					<p>我的</p>
				</router-link>
			</li>
		</ul>
	</div>
	<div class="flower_list">
		<!-- <ul>
			<template v-for="(i,index) in flower_list">
		    <li>
		    	<div>
		    		<img v-bind:src="i.img">
					<p>{{i.title}}</p>
					<span>{{i.price}}</span>
		    	</div>
			</li>
		    </template>
		</ul> -->
		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
		  <ul>
		    <li v-for="(i,index) in flower_list">
		    	<div>
		    		<img v-bind:src="i.img">
					<p>{{i.title}}</p>
					<span>{{i.price}}</span>
		    	</div>
		    </li>
		  </ul>
		</mt-loadmore>
	</div>
</div>
</template>
<script type="text/javascript">
import { Header } from 'mint-ui';
import Vue from 'vue';
import { Loadmore } from 'mint-ui';
import { Spinner } from 'mint-ui';

Vue.component(Spinner.name, Spinner);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Header.name, Header);
	export default{
		data(){
			return{
				navshow:false,
				flower_list:[],
				loading:true
			}
		},
		methods:{
			change_nav(){
				this.navshow = !this.navshow;
			},
			fetch_flower(){
	      	var that = this;
	      	fetch('/api/flower',{
	      		method:'get',
	      		dataType:'json'
	      	})
	      	.then(function(response){
	      		return  response.json();
	      	}).then(function(json){
	      		console.log('parsed json', json)
	      		that.flower_list = json;
	      		that.loading = false;
	      		console.log(that.flower_list)
	      	}).catch(function(ex){
	      		console.log('parsing failed', ex)
	      	})
	      },
	      loadTop() {
		      	var that = this;
		      	setTimeout(function(){
		      		that.$refs.loadmore.onTopLoaded();
		      	},2000)
			}
		},
		mounted(){
			this.fetch_flower();
			console.log(this.flower_list)
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.loading{
	position: absolute;
	background:rgba(0,0,0,.6);
	z-index: 999;
	height:100%;
	width: 100%;
	display:flex;
	align-items: center;  
    justify-content: center;  
	p{
		color:#fff;
	}
}
.mint-header{
	height:12.5vw;
	background: #ff6600;
}
.mint-header-title{
	font-size: 36px;
}
.header-icon{
	font-size: 28px;
}
.nav{
	ul{
		display: flex;
		border-bottom: 1px solid #e4e4e4;
		padding:10px 0;
		li{
			flex:1;
			&:nth-child(1){
				span{
					background:url('../../assets/images/icon2b.png') -60px -25px no-repeat;
					background-size: 180px 180px;
					margin:0 auto;
				}
			}
			&:nth-child(2){
				span{
					width: 26px;
					height: 22px;
					background:url('../../assets/images/icon2b.png') 0px -25px no-repeat;
					background-size: 180px 180px;
					margin:0 auto;
				}
			}
			&:nth-child(3){
				span{
					width: 25px;
					height: 22px;
					background:url('../../assets/images/icon2b.png') -29px -25px no-repeat;
					background-size: 180px 180px;
					margin:0 auto;
				}
			}
			&:nth-child(4){
				span{
					background:url('../../assets/images/icon2b.png') -85px -25px no-repeat;
					background-size: 180px 180px;
					margin:0 auto;
				}
			}
			span{
				width: 22px;
				height: 22px;
				display:block;
			}
			p{
				text-align: center;
				color:#666666;
				font-size:12px;
				padding-top: 2px;
			}
		}
	}
}
.flower_list{
	padding:10px 10px;
	ul{
		display:flex;
		flex-wrap:wrap;
		li{
			width: 50%;
			padding-bottom:10px;
			
			div{
			border:1px solid #e5e5e5;
			text-align:center;
			}
			img{
				width: 90%;
			}
			&:nth-child(2n){
				padding-left:5px;
			}
			&:nth-child(2n-1){
				padding-right:5px;
			}
			p{
				padding-top:10px;
			}
			span{
				display:block;
				padding:10px 0;
				color:#ff0000;
				font-size:14px;
			}


		}
	}
}
</style>