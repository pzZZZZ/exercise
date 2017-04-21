<template>
	<div  v-show="loading" class="flower_wrap">
		<div class="header">
			<mt-header background="pink" fixed title="详情">
				<!-- <router-link   @click='backrouter'> -->
					<div slot='left'  @click='backrouter'>
					<mt-button icon="back">返回</mt-button>
					</div>
				<!-- </router-link> -->
			</mt-header>
		</div>
		<div   class='flower_box'>
			<div class="flwer_img_show">
				<div class="img_box">
					<img :src="flower.img" alt="">
				</div>
				<h5>{{flower.title}}</h5>
				<p>￥{{flower.price}}</p>
			</div>
			<div class="stuff_box">
				<ul >
					<li>
						<span>材料：</span>{{flower.stuff}}
					</li>
					<li>
						<span>备注：</span><i v-html='flower.desc' style="font-style:normal"></i>
					</li>
					<li><span>附送：</span>{{flower.fusong}}</li>
					<li><span>配送：</span>{{flower.peisong}}</li>
					<li><span>说明：</span>巧克力产品不支持7天无理由退货，请谨慎选择！</li>
				</ul>
			</div>
			<div class="appraise">
				 <h4>评价</h4>
				 <ul>
					<li v-for="item in flower.appraise ">
						<div class="img_box">
							<div>
								<img src="../../assets/images/user.png" alt="">
								<b>jsualka</b>
							</div>
							 <span></span>
						</div>
						<p>{{item.detail}}</p>
					</li>
				 </ul>
<!-- 				 <div class="see_more">
				 	 查看更多 >
				 </div> -->
			</div>
			<div class="flower_detail">
				<h4>图片详情</h4>
				<ul>
					<li v-for="item in flower.img_list">
						<img :src="item.img" alt="">
					</li>
				</ul>
			</div>
		</div>
		<div class="footer">
			<ul>
				<li>
					<span></span>
					<b>客服</b>
				</li>
				<li>
					<span></span>
					<b>关注</b>
				</li>
				<li v-on:click="GotoCar">
					<span></span>
					<em>{{count}}</em>
					<b>购物车</b>
				</li>
				<li v-on:click="JoinCar">
					 加入购物车
				</li>
				<li>
					 立即购买
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue';
import { Header,Toast } from 'mint-ui';
Vue.component(Header);
Vue.component(Toast);
	export default{
		data(){
			return{
				flower: [],
				loading : false,
				count:0,
			}
		},
		methods:{
			backrouter(){
				this.$router.go(-1)
			},
			JoinCar(){
					var flag = true;
					var carList = [];
					this.count = 0;
					if(localStorage.carList){
						carList = JSON.parse(decodeURIComponent(localStorage.carList));
					}
					if(carList.length > 0){
						for(var i =0 ; i < carList.length ; i ++){
							if(carList[i].id == this.flower.id){
								 carList[i].count ++;
								 flag = false;
							}
							this.count += carList[i].count;
						}
					}
					if(flag){
						this.flower.count = 1;
						this.count += 1;
						carList.push(this.flower);
					}
					localStorage.carList = encodeURIComponent(JSON.stringify(carList));
					// console.log(carList)
					Toast('已加入购物车');
					carList[0].num = 1;
					this.$store.dispatch('add_car',carList[0])
					console.log(this.$store.getters.getcarlist)
				//this.$store.dispatch('change_car', this.flower);
			},
			getFlowerList(){
				this.flower = JSON.parse(decodeURIComponent(localStorage.flower));
				this.loading = true;
				console.log(this.flower);
			},
			GotoCar(){
				this.$router.push('/car');
			}

		},
		mounted(){
			this.getFlowerList();
			var carList = [];
			if(localStorage.carList){
				carList = JSON.parse(decodeURIComponent(localStorage.carList));
				for(var i =0 ; i < carList.length ; i ++){
					this.count += carList[i].count;
				}
			}

		}
	}
</script>
<style lang="scss"  scoped>
	[v-cloak] {
	  display: none;
	}
	.flower_wrap{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		.header{
			width: 100%;
			height: 40px;
			.mint-header{
				background: #ff6600;
			}
		}
		.flower_box{
			width: 100%;
			flex: 1;
			background: #F1F1F5;
			overflow: scroll;
			box-sizing: border-box;
			.flwer_img_show{
				background: #fff;
				width: 100%;
				height: auto;
				box-sizing: border-box;
				padding: 10px;
				border-bottom: 1px solid #f7f7f7;
				.img_box{
					width: 100%;
					display: flex;
					justify-content: center;
				}
				h5{
					font-size: 16px;
					font-weight: normal;
					color: #666;
					margin-top: 20px;
				}
				p{
					font-family: "Helvetica";
					color: #F60;
					font-size: 22px;
				  margin-top: 10px;
				}
			}
			.stuff_box{
				width: 100%;
				height: auto;
				background: #fff;
				box-sizing: border-box;
				padding: 10px;
				ul li{
					line-height: 26px;
					color: #666;
					font-size: 12px;
					span{
						color: #AD923B;
					}
				}
			}
			.appraise{
				background: #fff;
				margin-top: 15px;
				box-sizing: border-box;
				padding: 10px 10px 0;
				h4{
					font-size: 16px;
					height: 44px;
					line-height: 44px;
					color: #666;
				}
				ul{
					border-top: 1px solid #f7f7f7;
					li{
						border-bottom: 1px solid #f7f7f7;
						box-sizing: border-box;
						padding: 10px 0;
						.img_box{
							width: 100%;
							height: 40px;
							display: flex;
							align-items: center;
							justify-content: space-between;
							img{
								width: 40px;
								height: 40px;
							}
							b{
								font-size: 12px;
								color: #666;
								margin-left: 5px;
							}
							span{
						    width: 78px;
						    height: 26px;
						    background: url('../../assets/images/icon.png') -1px 3px no-repeat;
						    background-size: 190px 190px;
						    vertical-align: top;
							}
						}
				    p{
				    	margin-top: 10px;
				    	font-size: 12px;
							color: #666;
				    }
					}
				}
				.see_more{
					width: 100%;
					height: 40px;
					line-height: 40px;
					text-align: center;
					color: #666;
					font-size: 14px;
				}
			}
			.flower_detail{
				margin-top: 15px;
				background: #fff;
				box-sizing: border-box;
				padding: 10px;
				h4{
					height: 40px;
					line-height: 40px;
					color: #666;
					font-size: 16px;
				}
				ul{
					width: 100%;
					li{
						width: 100%;
						margin-bottom: 10px;
						img{
							width: 100%;
						}
					}
				}
			}
		}
		.footer{
			width: 100%;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-top: 1px solid #f7f7f7;
			box-sizing: border-box;
			padding: 4px 0;
			ul{
				flex: 1;
				height: 100%;
				display: flex;
				li{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					span{
						width: 23px;
  				  height: 23px;
					}
					b{
						font-size: 12px;
						color: #666;
					}
				}
				li:nth-child(1){
					width: 50px;
					span{
						background: url(../../assets/images/pro_service1.png) no-repeat;
						background-size: 22px 23px;
					}
				}
				li:nth-child(2){
					width: 50px;
					span{
						width: 27px;
						height: 23px;
						background: url('../../assets/images/icon3b.png')1px -150px no-repeat;
						background-size: 180px 180px;
						vertical-align: top;
						margin-bottom: 4px;
					}
				}
				li:nth-child(3){
					width: 50px;
					position: relative;
					span{
						background: url(http://img02.hua.com/m/Shopping.png) no-repeat;
						background-size: 22px 23px;
					}
					em{
						background-color: #F24B48;
						width: 15px;
						height: 15px;
						color: #FFF;
						line-height: 15px;
						border-radius: 100%;
						position: absolute;
						top: 0px;
						right: 9px;
						text-align: center;
						font-style: normal;
						font-size: 10px;
					}
				}
				li:nth-child(4){
					background: #FCB465;
					line-height: 50px;
					color: #fff;
					font-size: 15px;
					text-align: center;
					width: 100px;
				}
				li:nth-child(5){
					background: #fe6600;
					flex: 1;
					line-height: 50px;
					color: #fff;
					font-size: 15px;
					text-align: center;
					padding: 0;
				}
			}
		}
	}
</style>
