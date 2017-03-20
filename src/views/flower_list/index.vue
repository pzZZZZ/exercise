<template>
	<div class="flower_wrap">
		<mt-header title="鲜花列表">
		  <router-link to="/index" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="flower_con"
		 v-infinite-scroll="loadMore"
		 infinite-scroll-disabled="loading"
		 infinite-scroll-distance="10">
			<ul class='flower_box'>
				<li v-for="(i,index) in flower_list">
					<div class='link_box' v-on:click="GoDetail(i)">
						<div class='img_box'>
							<img v-bind:src="i.img">
						</div>
						<h4>{{i.title}}</h4>
						<h5>￥{{i.price}}</h5>
					</div>
				</li>
			</ul>
			<div class="page-infinite-loading" v-show="loading" >
				<div class="loading_box">
					<mt-spinner class='load_img' color="#444" type="fading-circle"></mt-spinner>
					<span>加载中...</span>
				</div>
	    </div>
			<p class="page-infinite-loading" v-show="loadEnd">
				<span>没有更多了~</span>
			</p>
		</div>
		<!--   回到顶部 -->
			<v-touch tag='div' v-on:tap="handleScroll" class="backTop">
					<img src="../../assets/images/back.png" alt="">
			</v-touch>
	</div>
</template>
<script type="text/javascript">
import { Header , InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);
Vue.component(Header.name, Header);
	export default{
		data(){
			return{
				flower_list:[],
				index:1,
				firstFlag:false,
				loading: false,
				loadEnd: false,
			}
		},
		methods:{
			GoDetail(item){
			  localStorage.flower = encodeURIComponent(JSON.stringify(item));
				this.$router.push('/flowerdeatil')
			},
			handleScroll () {
				//回到顶部
				let scrollIndex =0;
				//回到顶部
					let scroll_box = document.querySelectorAll('.flower_con');
					let scrolldistance = scroll_box[scrollIndex].scrollTop-20;
					let speed = scrolldistance/40;
					let that = this;
					let timer =  setInterval(function(){
						scroll_box[scrollIndex].scrollTop = scroll_box[scrollIndex].scrollTop - speed ;
						if(scroll_box[scrollIndex].scrollTop <= 10){
							clearInterval(timer)
						}
					},10)

			},
			getFlowerList(){
				var that = this;
				fetch('/api/flowerlist',{
					method:'get',
					dataType:'json'
				})
				.then(function(response){
					return  response.json();
				}).then(function(res){
					//console.log('parsed json', json)
					that.flower_list = res;
				}).catch(function(ex){
					console.log('parsing failed', ex)
				})
			},
			getMoreFlower(){
				var that =this;
				fetch('/api/flowermore'+that.index,{
					method:'get',
					dataType:'json'
				})
				.then(function(response){
					return  response.json();
				}).then(function(res){
					//console.log('parsed json', json)
					that.flower_list = that.flower_list.concat(res);
					that.index ++;
					that.loading = false;
					console.log(that.flower_list)
				}).catch(function(ex){
					console.log('parsing failed', ex)
				})
			},
			loadMore(){
				if(this.firstFlag){
					if(this.index >4){
						this.loadEnd = true;
					}else{
						this.loading = true;
						this.getMoreFlower();
						console.log('more');
					}
				}else{
					this.firstFlag = true;
				}
			}
		},
		mounted(){
			this.getFlowerList();
			//console.log(this.flower_list)
		}
	}
</script>
<style lang="scss"  scoped>
	.flower_wrap{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
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
		.flower_con{
			width: 100%;
			flex: 1;
			overflow: scroll;
			-webkit-overflow-scrolling: touch;
		.flower_box{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			box-sizing: border-box;
			padding-left: 10px;
			li{
				width: 50%;
				height: 252px;
				box-sizing: border-box;
				padding-right: 10px;
				margin-top: 10px;
				display: flex;
				flex-direction: column;
				.link_box{
					width: 100%;
					height: 100%;
					 border: 1px solid #e2e2e2;
					 border-radius: 5px;
					.img_box{
						width: 100%;
						img{
							width: 100%;
						}
					}
					h4{
						font-size: 12px;
						margin-top: 10px;
						box-sizing: border-box;
						text-align: center;
						padding: 0 10px;
						display: -webkit-box !important;
						overflow: hidden;
						text-overflow: ellipsis;
						word-break: break-all;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 1;
					}
					h5{
						width: 100%;
						margin-top: 5px;
						text-align: center;
						color: red;
					}
				}
			}
		}
		.page-infinite-loading {
	    width: 100%;
	    height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			.loading_box{
				width: 100%;
				height: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.load_img{
				float: left;
			}
			span{
				float: left;
				margin-left: 10px;
			}
		}
	}
		.backTop{
			position: fixed;
			right: 20px;
			bottom: 70px;
			z-index: 999;
			img{
				width: 40px;
				height: 40px;
			}
		}
	}
</style>
