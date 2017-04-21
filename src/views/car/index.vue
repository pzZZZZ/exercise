<template>
	<div  class="car_wrap">
		<div class="header">
			<mt-header background="pink" fixed title="购物车">
				
				<div slot='left' @click='back'>
					<mt-button icon="back">返回</mt-button>
				</div>
			</mt-header>
		</div>
		<div  class='car_box'>
			<!-- <div class="test">{{abc}}</div> -->
			<ul>
				<li v-for="(item,index) in carList">
					<div class="select_one">
						<input v-on:click="SelectOne(index)"  type="checkbox" class='checkbox' name="" value="">
					</div>
					<div class="img_box">
						<img :src="item.img" alt="">
					</div>
					<div class="detail_show">
						<p>￥{{item.price}}</p>
						<div class="count_change">
							<span v-on:click="Reduce(item,index)">-</span>
							<input type="text" name="" v-model="item.count" value="">
							<span v-on:click="Add(item,index)">+</span>
						</div>
					</div>
					<div v-on:click="Delete(item,index)" class="delete"></div>
				</li>
			</ul>
		</div>
		<div class="select">
			<div class="select_box">
				<input v-on:click='selectAllPro' type="checkbox" id="checkbox" value="">
				<label for="checkbox">全选</label>
			</div>
			<b>已选商品<em>{{count}}</em>件</b>
			<b>共计<em>{{price}}</em>元</b>
			<p>去结算</p>
		</div>
		<!-- <div class="footer">
			footer
		</div> -->
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue';
	import { Header} from 'mint-ui';
	Vue.component(Header);
	export default{
		data(){
			return{
				carList:[],
				count:0,
				checkAll:false,
				selectPro:[],
				price:0,
				abc:'123456'
			}
		},
		mounted(){
			this.carList = this.$store.getters.getcarlist;
			//this.carList = this.$store.getters.getcarlist;
			// this.carList = JSON.parse(decodeURIComponent(localStorage.carList));
			// console.log(this.carList);
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			selectAllPro(){
				var that =this;
				this.count = 0;
				that.checkAll = ! that.checkAll;
				document.querySelectorAll('.checkbox').forEach(function(item,index){
					if(that.checkAll){
						item.checked = true;
						if(item.checked){
							that.count += that.carList[index].count;
							that.price += that.carList[index].count * that.carList[index].price;
						}
					}else{
						item.checked = false;
						that.count = 0;
						that.price = 0;
					}
				})
			},
			SelectOne(index){
					var checkbox = document.querySelectorAll('.checkbox')[index];
					if(checkbox.checked){
						this.count += this.carList[index].count;
						this.price += this.carList[index].count * this.carList[index].price;
					}else{
						this.count -= this.carList[index].count;
						this.price -= this.carList[index].count * this.carList[index].price;
					}
					var flag = true;
					document.querySelectorAll('.checkbox').forEach(function(item,index){
						if(!item.checked){
							flag = false;
						}
					})
					if(flag){
						document.querySelectorAll('#checkbox')[0].checked = true;
						this.checkAll = true;
					}else{
						document.querySelectorAll('#checkbox')[0].checked = false;
						this.checkAll = false;
					}
			},
			Reduce(item,index){
				if(item.count > 1){
					this.carList[index].count --;
					localStorage.carList = encodeURIComponent(JSON.stringify(this.carList));
				}else{
					this.carList.splice(index,1);
					localStorage.carList = encodeURIComponent(JSON.stringify(this.carList));
				}
				if(document.querySelectorAll('.checkbox')[index].checked){
					this.count --;
				}
			},
			Add(item,index){
				this.carList[index].count ++;
				localStorage.carList = encodeURIComponent(JSON.stringify(this.carList));
				if(document.querySelectorAll('.checkbox')[index].checked){
					this.count ++;
				}
			},
			Delete(item,index){
				this.carList.splice(index,1);
				localStorage.carList = encodeURIComponent(JSON.stringify(this.carList));
			}
		}
		
	}
</script>
<style lang="scss"  scoped>
	.car_wrap{
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
		.select{
			height: 44px;
			line-height: 44px;
			color: #666;
			font-size: 14px;
			display: flex;
			background: #fbf8f8;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			border-top: 1px solid #f7f7f7;
			padding: 0 10px;
			.select_box{
				display: flex;
				align-items: center;
			}
			b{
				color: #666;
				font-size: 14px;
				font-weight: normal;
				em{
					font-style: normal;
					color: #ff6600;
					margin: 0 5px;
				}
			}
			p{
				width: 80px;
				height: 40px;
				background: #ff6600;
				color: #fff;
				font-size: 14px;
				border: 0;
				border-radius: 5px;
				text-align: center;
			}
		}
		.car_box{
			width: 100%;
			flex: 1;
			overflow: scroll;
			box-sizing: border-box;
			padding: 0 10px;
			ul{
				width: 100%;
				border-top: 1px solid #f7f7f7;
				li{
					width: 100%;
					display: flex;
					box-sizing: border-box;
					justify-content: space-between;
					align-items: center;
					padding: 10px 0;
					border-bottom: 1px solid #f7f7f7;
					.img_box{
						width: 60px;
						img{
							width: 100%;
						}
					}
					.detail_show{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						p{
							color: #666;
							font-size: 14px;
						}
						.count_change{
							display: flex;
							margin-top: 10px;
							span{
								height: 23px;
						    width: 17px;
						    border: 1px solid #e5e5e5;
						    background: #f0f0f0;
						    text-align: center;
						    line-height: 23px;
						    color: #444;
							}
							input{
								width: 39px;
						    height: 23px;
						    line-height: 15px;
						    border: 1px solid #aaa;
						    color: #343434;
						    text-align: center;
						    padding: 4px 0;
						    background-color: #fff;
							}
						}
					}
					.delete{
						width: 20px;
				    height: 20px;
				    background: url(../../assets/images/ljt.png) no-repeat center;
				    background-size: 15px;
					}
				}
			}
		}
		.footer{
			width: 100%;
			height: 50px;
			display: flex;
			border-top: 1px solid #f7f7f7;
		}
	}
</style>
