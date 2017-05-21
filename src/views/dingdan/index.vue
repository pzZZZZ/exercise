<template>
	<div class="dingdan">
			<mt-header title="订单管理">
	<mt-button  slot="left" @click='backindex'>首页</mt-button>
	<mt-button  slot="right" @click='backtop'>退出登录</mt-button>
	</mt-header>
	<div class="dingdanbox">
		<ul>
			<li v-for='i in items' class="list">
				<p class="id">&nbsp;订单编号：{{i.id}}</p>
				<hr>
				<div>
					<img class="img" v-bind:src="i.img" alt="">
					<h3 class="title">{{i.title}}</h3>
					<p class="desc">{{i.desc}}</p>
					<p class="price">￥{{i.price}} <span class="pr">x1</span></p>
				</div>
			</li>
		</ul>
	</div>
	</div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
	.list{
		margin: 5px;
		overflow: hidden;
		.img{
			float: left;
			width: 100px;
			margin-right: 5px;
		}
		.desc{
			height: 55px;
		}
		.price{
			color: red;
			padding-right: 5px;
			.pr{
				float: right;
			}
		}
	}
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
<script type="text/javascript">
	export default{
		data(){
			return{
				time:'',
				items:[
					{
				      title:'元祖 清风有信(8寸)',
				      price:288,
				      img:'http://img01.hua.com/uploadpic/newpic/5302071.jpg_220x240.jpg',
				      id:"cake1",
				      stuff:"8寸,清风有信慕斯蛋糕",
				      peisong:'顺丰快递上海发货：周一到周日18:00前订单当天发货，超过这个时间第二天发货；',
				      fusong:'免费送精美贺卡，代打印您的祝福。(下单时填了留言才赠送)',
				      desc:'慕思的美味，加上巧克力的香醇，如一屡清风，抚过唇边，划过心底。',
				      img_list:[
				        {
				          img:"http://img01.hua.com/uploadpic/images/201511241646343050158.jpg"
				        }
				      ],
				      appraise:[
				        {
				          id:'1589',
				          detail:'客服服务非常好 ，打电话来很耐心的给我解答并解决问题。'
				        }
				      ]
				  },{
					title:'元祖 清风有信(8寸)',
					price:288,
					img:'http://img01.hua.com/uploadpic/newpic/5302071.jpg_220x240.jpg',
					id:"cake1",
					stuff:"8寸,清风有信慕斯蛋糕",
					peisong:'顺丰快递上海发货：周一到周日18:00前订单当天发货，超过这个时间第二天发货；',
					fusong:'免费送精美贺卡，代打印您的祝福。(下单时填了留言才赠送)',
					desc:'慕思的美味，加上巧克力的香醇，如一屡清风，抚过唇边，划过心底。',
					img_list:[
					  {
						img:"http://img01.hua.com/uploadpic/images/201511241646343050158.jpg"
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
		},
		created(){
		let _this = this;

		}
	}
</script>
