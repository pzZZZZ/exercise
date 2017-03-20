<template>

	<div class="page-index">
	<!-- header -->

	<mt-header title="flower">
	<mt-button  slot="right" @click='change_serch_box'>
		<svg class="icon header-icon" aria-hidden="true">
 			 <use xlink:href="#icon-search" ></use>
		</svg>
	</mt-button>
	<mt-button  slot="right">
		<svg class="icon header-icon" aria-hidden="true">
 			 <use xlink:href="#icon-cart" ></use>
		</svg>
	</mt-button>
	<mt-button  slot="right" to='login'>
		<router-link to="login">
			<svg class="icon header-icon" aria-hidden="true">
 			 <use xlink:href="#icon-my" ></use>
			</svg>
		</router-link>
	</mt-button>
	</mt-header>
		<mt-search
	v-show='serch_box'
  v-model="value"
  cancel-text="取消">
</mt-search>
	<!-- banner -->
	<mt-swipe :auto="4000" class='banner'>
	  <mt-swipe-item>
		<img src="../../assets/images/banner1.jpg">
	  </mt-swipe-item>
	  <mt-swipe-item>
		<img src="../../assets/images/banner2.jpg">
	  </mt-swipe-item>
	</mt-swipe>
	<div class="classification">
		<ul>
			<li ><router-link to='/flowerlist'><i><img src="../../assets/images/flower_1.png"></i><span>鲜花</span></router-link></li>
			<li><router-link to='cake'><i><img src="../../assets/images/cake_2.png" ></i><span>蛋糕</span></router-link></li>
			<li><i><img src="../../assets/images/flowersong_1.png" ></i><span>永生花</span></li>
			<li><i><img src="../../assets/images/gifts_2.png" ></i><span>特色礼品</span></li>
			<li><i><img src="../../assets/images/Plant_2.png" ></i><span>更多分类</span></li>
		</ul>
	</div>
	<div class="desc">
		<ul>
			<li><span>新品鲜花速递</span><i>新款驾到</i></li>
			<li><span>美味巧克力</span><i>最最甜蜜的宠爱</i></li>
			<li><span>漫画选花</span><i>浪漫以画代话</i></li>
		</ul>
	</div>
	<div class="flower_list">
		<ul>
			<template v-for="(i,index) in flower_list">
		    <li>
		    	<div>
		    		<img v-bind:src="i.img">
					<p>{{i.title}}</p>
					<span>{{i.price}}</span>
		    	</div>
			</li>
		    </template>
		</ul>
	</div>
	<div class="cake">
		<mt-header>
		  <router-link to="/" slot="left">
		   生日蛋糕
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<h1><img src="../../assets/images/home_nav_01.png"></h1>
		<ul >

			<li v-for="i in cake_list">
				<img :src="i.img">
				<h2>{{i.title}}</h2>
			</li>
		</ul>
	</div>
	<div class="gifts">
		<mt-header>
		  <router-link to="/" slot="left">
		   特色礼品
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<ul>
			<li>
				<h3>金箔花</h3>
				<p>999金箔玫瑰</p>
				<img src="http://m.hua.com/images/home_nav_008.png" alt="">
			</li>
			<li>
				<h3>水晶钢琴</h3>
				<p>送女友最佳礼物</p>
				<img src="http://m.hua.com/images/home_nav_009.png" alt="">
			</li>
			<li>
				<h3>永生花</h3>
				<p>进口厄瓜多尔玫瑰</p>
				<img src="http://img02.hua.com/tuijian/teselipin_3_m.png" alt="">
			</li>
		</ul>
	</div>
	</div>

</template>
<script type="text/javascript">
import Vue from 'vue';
import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
	export default{
		data(){
			return {
				flower_list:[],
				cake_list:[],
				serch_box:false
			}
		},
		methods: {
	      fetch_flower(){
	      	var that = this;
	      	fetch('/api/indexflower',{
	      		method:'get',
	      		dataType:'json'
	      	})
	      	.then(function(response){
	      		return  response.json();
	      	}).then(function(json){
	      		//console.log('parsed json', json)
	      		that.flower_list = json;
	      		console.log(that.flower_list)
	      	}).catch(function(ex){
	      		console.log('parsing failed', ex)
	      	})
	      },
	      fetch_cake(){
	      	var that = this;
	      	fetch('/api/indexcake',{
	      		method:'get',
	      		dataType:'json'
	      	})
	      	.then(function(response){
	      		return  response.json();
	      	}).then(function(json){
	      		//console.log('parsed json', json)
	      		that.cake_list = json;
	      		console.log(that.cake_list)
	      	}).catch(function(ex){
	      		console.log('parsing failed', ex)
	      	})
	      },
	      change_serch_box(){
	      	this.serch_box = !this.serch_box;
	      }

	    },
		mounted(){
      		this.fetch_flower(),
      		this.fetch_cake()
		}
	}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

.mint-search{
	height:44px;
	background:#ff6600;
}
.mint-header{
	height:12.5vw;
	background: #ff6600;
}
.header-icon{
	font-size: 28px;
	color:#fff;
}
.banner{
	height: 120px;
	img{
		width: 100%;
	}
}
.classification{
	ul{
		display: flex;
		justify-content:space-between;
		padding:10px ;
		li{
			text-align:center;
			i{
				display:block;
				width: 45px;
				height:45px;
				border-radius: 50%;
				text-align: center;
				padding-top:10px;
			}
			img{

				width: 25px;
				height:26px;

			}
			span{
				font-size:12px;
			}
			&:nth-child(1){

				i{
					background:#fb8989;

				}
			}

			&:nth-child(2){
				i{
					background:#de8dc5;
				}
			}
			&:nth-child(3){
				i{
					background:#77bae6;
				}
			}
			&:nth-child(4){
				i{
					background:#f6b365;
				}
			}
			&:nth-child(5){
				i{
					background:#88d4c0;
				}
			}

		}
	}
}
.desc{
	background:#F1F1F5;
	padding: 20px 0;
	ul{
		display:flex;
		border-bottom: 1px solid #E5E5E5;
		border-top: 1px solid #E5E5E5;
		justify-content:space-between;
		background:#fff;
		li{
			text-align:center;
			padding-bottom: 110px;
			padding-top:20px;
			font-size:12px;
			flex:1;
			span{
				display:block;
			}
			i{
				font-style: normal;
				color:#b9b9b9;
			}

			&:nth-child(1){
				background:url('../../assets/images/xinpin03_m.png') no-repeat;
				background-size: contain;
				background-position:0 10px;
				span{
					color:#f00;
				}

			}
			&:nth-child(2){
				background:url('../../assets/images/xpsd_06.jpg') no-repeat;
				background-size: contain;
				background-position:0 20px;
				border-left: 1px solid #E5E5E5;
				border-right: 1px solid #E5E5E5;
				span{
					color:#ff8588;
				}
			}
			&:nth-child(3){
				background:url('../../assets/images/mhxh_001.png') no-repeat;
				background-size: contain;
				background-position:0 20px;
				span{
					color:#f2b354;
				}
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
.cake{
	padding-top:10px;
	padding-bottom:10px;
	background:#F1F1F5;
	border-top:1px solid #E5E5E5;
	.mint-header{
		background:#fff;
		color:#666;
	}
	h1{
		img{
			width: 100%;
		}
	}
	ul{
		display:flex;
		flex-wrap:wrap;
		li{
			width: 33.3%;
			border-bottom:1px solid #E5E5E5;
			border-right:1px solid #E5E5E5;
			&:nth-child(3n){
				border-right:0;
			}
			img{
				width: 100%;
			}
			h2{
				font-size:12px;
				text-align:center;
				background:#fff;
				color:#999;
				padding:5px 0;
			}
		}
	}
}
.gifts{
	padding-bottom:10px;
	background:#F1F1F5;
	.mint-header{
		background:#fff;
		color:#666;
		border-bottom:1px solid #E5E5E5;
	}
	ul{
		display:flex;
		flex-wrap:wrap;
		li{
			width: 33.3%;
			background:#fff;
			text-align:center;
			&:nth-child(2){
				border-left:1px solid #E5E5E5;
				border-right:1px solid #E5E5E5;
			}
			h3{
				color:#666;
				font-size:14px;
				position: relative;
				top:10px;

			}
			p{
				color:#b9b9b9;
				font-size:12px;position: relative;
				top:20px;

			}
			img{
				width: 100%;


			}
			}

	}
}
</style>
