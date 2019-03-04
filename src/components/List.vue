<template>
  <div class="list">
  	<Headbar></Headbar>
  	<ul class="topbar">
  	    <router-link to="" tag="li" class="topbar-cell" @click.native="sortByPrice()" :style="isActive.a?'color:red':'color:black'">
  	      价格
  	    </router-link>    
  	    <router-link to="javascript:;" tag="li" class="topbar-cell" @click.native="sortByDiscount()" :style="isActive.b?'color:red':'color:black'">
  	      折扣
  	    </router-link>
  	    <router-link to="javascript:;" tag="li" class="topbar-cell" @click.native="" :style="isActive?'color:black':'color:red'">
  	      品牌
  	    </router-link>
  	    <router-link to="javascript:;" tag="li" class="topbar-cell" @click.native="" :style="isActive?'color:black':'color:red'">
  	      筛选
  	    </router-link>
  	</ul>
  	<ul class="product-list" v-if="products.length!==0">
  	    <li v-for="data in products" @click="handleClick(data._id)">
  	      <img :src='"http://localhost:3000/" + data.productImg'/>
  	      <div class="describe-1">
  	        <span>{{data.productType}}</span>
  	        <span>￥{{data.productPrice}}</span>
  	        <span class="hui">{{data.newDegree}}成新</span>
  	      </div>
  	      <div class="describe-2">
  	        <span>{{data.userid.website}} |</span>
  	        <span>
  	          {{data.productName}}
  	       
  	        </span>
  	      </div>
  	    </li>
  	</ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import axios from 'axios'
import Headbar from '@/components/Headbar';

Vue.component('Headbar', Headbar);
export default {
	data() {
	    return {
	      products: [],    //盛放返回的大数组

	      loading:false,
	      isActive:{a:false, b:false},
	      productIds: [],  //盛放返回的，排序后的产品id
	      normalCount:0,
	      sortRule:0,      //排序规则
	      detailist: ['潮人潮牌', 'aoo', 'app']
	    }
	},
	mounted() {
		axios({
	      url:"/getProducts",
	    }).then(res=>{
	      console.log('请求得到所有商品');
	      console.log(res.data);
	      // this.looplist = res.data.data;
	      this.products = res.data;      
	    });
	}, 
	methods: {
        handleClick (index) {
            this.$router.push(`/detail/${index}`)
        }
	}
}
</script>

<style scoped lang="scss">
*{
	margin:0;
	padding:0;
}
ul{
  list-style:none;
}
.topbar{
  width:100%;
  height:39px;
  display:flex;
  border-bottom:1px solid #e5e5e5;
}
.topbar li{
  flex:1;
  text-align:center;
  line-height:39px;
}
.topbar li:nth-of-type(3){
  border-right:1px solid #e5e5e5;
}
.topbar-cell{
  text-decoration:none;
  color:black;
}
.product-list{
  display:flex;
  flex-wrap:wrap;
  margin-bottom: 50px;
}
.product-list li{
  width:47%;
  background-color:-pink;
  margin:5px auto;
}
.product-list li img{
  display:block;
  width:100%;
}
.product-list .describe-1{
  width:100%;
  margin:5px 2px 0;
}
.product-list .describe-2{
  width:100%;
  font-size: 14px;
  color:#585c64;
  margin:3px 2px 5px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.product-list .hui{
  font-size:12px;
  color:#98989f;
  margin:0 2px;
}	
</style>
