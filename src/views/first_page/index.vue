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
			<li><router-link to='cakelist'><i><img src="../../assets/images/cake_2.png" ></i><span>蛋糕</span></router-link></li>
			<li><i><img src="../../assets/images/flowersong_1.png" ></i><span>永生花</span></li>
			<router-link to='/gift' tag='li'>
					<i><img src="../../assets/images/gifts_2.png" ></i><span>特色礼品</span>
			</router-link>
			<!-- <li><i><img src="../../assets/images/gifts_2.png" ></i><span>特色礼品</span></li> -->
			<li><i><img src="../../assets/images/Plant_2.png" ></i><span>更多分类</span></li>
		</ul>
	</div>
	<div class="desc">
		<ul>
			<router-link to='/flowerlist' tag='li'><span>新品鲜花速递</span><i>新款驾到</i></router-link>
			<router-link to='/gift' tag='li'><span>美味巧克力</span><i>最最甜蜜的宠爱</i></router-link>
			
			<li><span>漫画选花</span><i>浪漫以画代话</i></li>
		</ul>
	</div>
	<div class="flower_list">
		<ul>
			<template v-for="(i,index) in flower_list">
		    <li @click='GoDetail(i)'>
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
			<li @click='giftchange(0)'>
				<h3>金箔花</h3>
				<p>999金箔玫瑰</p>
				<img src="http://m.hua.com/images/home_nav_008.png" alt="">
			</li>
			<li @click='giftchange(1)'>
				<h3>水晶钢琴</h3>
				<p>送女友最佳礼物</p>
				<img src="http://m.hua.com/images/home_nav_009.png" alt="">
			</li>
			<li @click='giftchange(2)'>
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
			giftchange(el){
				let arr =[
				 {
    title:'金箔花/999纯金箔玫瑰+陶瓷花瓶-千足金箔玫瑰 最佳送女友送爱人礼物 结婚纪念礼物 ',
    price:138,
    img:'http://img01.hua.com/uploadpic/newpic/1061006.jpg',
    id:1,
    stuff:"金箔玫瑰采用纯度99.9%千足金箔制作，花朵、叶片为纯金箔，内部有一个透明骨架作为支撑，绝非镀金工艺，花杆为聚乙烯镀金，轻盈、不易折。",
    peisong:'全国（本商品通过快递公司或邮政EMS寄送，全国可达，包邮',
    fusong:'免费送精美贺卡，代打印您的祝福。(下单时填了留言才赠送)',
    desc:'畅销榜商品，优惠价！',
    img_list:[
      {
        img:"http://img01.hua.com/uploadpic/images/201512231841138070361.jpg"
      },{
        img:'http://img01.hua.com/uploadpic/images/201512231841217659198.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/2017412175818127109.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/20114291615276031985.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/2016519143665162005.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/20174121758268443347.jpg'
      }
    ],
    appraise:[
      {
        id:'1589',
        detail:'客服服务非常好 ，打电话来很耐心的给我解答并解决问题。'
      }
    ]
  },
  {
    title:'音乐盒/十八音水晶钢琴-水晶音乐盒 韵升精品机芯 精选送女友礼物 ',
    price:228,
    img:"http://img01.hua.com/uploadpic/newpic/1064005.jpg",
    id:2,
    stuff:"内置18音精品机芯，机芯纯铜镀金制作，音质和质量都属上乘。采用通透性好的水晶材料制做，外形透亮美观，是赠送或收藏的上佳礼品。",
    peisong:'顺丰快递上海发货：周一到周日18:00前订单当天发货，超过这个时间第二天发货；',
    fusong:'免费送精美贺卡，代打印您的祝福。(下单时填了留言才赠送)',
    desc:'浪漫永恒，经典重温。只愿能一辈子这样的静静地聆听：一个个跳动的音符诉说着一份份淳淳的爱意。',
    img_list:[
      {
        img:"http://img01.hua.com/uploadpic/images/20121131647168202334.jpg"
      },{
        img:'http://img01.hua.com/uploadpic/images/2012113164726839297.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/2012681637152890033.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/2016126165151928317.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/20127311421114693438.jpg'
      }
    ],
    appraise:[
      {
        id:'1589',
        detail:'客服服务非常好 ，打电话来很耐心的给我解答并解决问题。'
      }
    ]
  },
  {
    title:'永生花/公主的水晶鞋·粉-进口粉色永生玫瑰1枝，小玫瑰1枝，搭配粉色白色绣球、小满天星 ',
    price:198,
    img:'http://img01.hua.com/uploadpic/newpic/1073125.jpg',
    id:1,
    stuff:"进口粉色永生玫瑰1枝，小玫瑰1枝，搭配康乃馨，粉色白色绣球、小满天星",
    peisong:'顺丰快递上海发货：周一到周日18:00前订单当天发货，超过这个时间第二天发货；',
    fusong:'免费送精美贺卡，代打印您的祝福。(下单时填了留言才赠送)',
    desc:'水晶鞋的七色光，闪烁迷人的光芒，拥有它的姑娘，是最美丽的公主！',
    img_list:[
      {
        img:"http://img01.hua.com/uploadpic/images/201736183158623141.jpg"
      },{
        img:'http://img01.hua.com/uploadpic/images/201736183237612094.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/2017361832143972598.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/2017361832295759936.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/2017361832375762820.jpg'
      },{
        img:'http://img01.hua.com/uploadpic/images/20149218346502887.jpg'
      }
    ],
    appraise:[
      {
        id:'1589',
        detail:'客服服务非常好 ，打电话来很耐心的给我解答并解决问题。'
      }
    ]
  }
				]
			  localStorage.flower = encodeURIComponent(JSON.stringify(arr[el]));
				this.$router.push('/detail')

			},
			GoDetail(item){
			  localStorage.flower = encodeURIComponent(JSON.stringify(item));
				this.$router.push('/flowerdeatil')
			},
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
	height: 140px;
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
