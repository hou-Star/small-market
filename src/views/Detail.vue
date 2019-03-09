<template>
  <div class="detail">
	<Headbar></Headbar>
	<div class="soloDisplay" v-if="product.productName">
		<img :src='"http://39.97.162.11" +product.productImg' class="productImg"/>
		<div>
			<p id="productTitle">{{product.productName}}</p>
			<span>￥{{product.productPrice}}</span>
			<p id="productIntroduction">{{product.productDescription}}</p>
			<p>寝室号：{{product.userid.website}}</p>
			<p>手机号：{{product.userid.phone}}</p>
		</div>
	</div>			
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Headbar from '@/components/Headbar';
import axios from 'axios'

Vue.component('Headbar', Headbar);
export default {
	data() {
	  return {
	    product: [],    //盛放返回的大数组
	  }
	},
	mounted(){
		this.$store.commit("changeTabbarShow", false);
		axios({
		  url:`/getProduct?id=${this.$route.params.id}`
		}).then(res=>{
		  console.log('请求得到moude商品');
		  console.log(res.data);
		  // this.looplist = res.data.data;
		  this.product = res.data[0];      
		});
	},
	beforeDestroy(){
		this.$store.commit("changeTabbarShow", true);
	}
 
}
</script>

<style scoped lang="scss">
*{
	margin:0;
	padding:0;
}
.detail{	
	.soloDisplay{
		width:100%;
		// height:80px;
		.productImg{
			display:block;
			width:100%;
			height:400px;
		}
		div{
			padding-left:18px;
			line-height:40px;
		}
		#productTitle{
			font-size: 20px;
		}
		span{
			font-size: 20px;
			font-weight:bold;
		}
	}

	.shopbar{
		width:100%;
		height:60px;
		position:fixed;
		left:0;
		bottom:120px;
		
		ul{
			width:100%;
			height:100%;
			display:flex;
			list-style: none;
			font-size: 18px;
			text-align: center;
			line-height: 60px;
			li{
				flex:1;
			}
			li:nth-of-type(3){
				font-size: 20px;
				background-color: yellow;
			}
		}
	}
}



</style>
