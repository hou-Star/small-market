<template>
  <div class="home">
  	home--大轮播
  	<swipe class="my-swipe">
  		<!-- 注册后才能使用 -->
  		<swipe-item v-for="data in looplist" >
        <img :src="data.imgUrl"/>  
      </swipe-item>
  	</swipe>
  	home
    <List></List>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios'
import List from '@/components/List'

Vue.component('List', List);

export default {
  data() {
    return {
      looplist: [],    //轮播图
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
			url:"https://m.maizuo.com/gateway?type=2&cityId=440300&k=6554172",
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"1551011231165626823837809"}',
        'X-Host': 'mall.cfg.common-banner'
			}
		}).then(res=>{
			console.log('ook');
			console.log(res.data);
      this.looplist = res.data.data;
		});

    axios({
      url:"/getProducts",
    }).then(res=>{
      console.log('请求得到所有商品');
      console.log(res.data);
      // this.looplist = res.data.data;
      this.products = res.data;      
    });
	},
	components:{
		"swipe":Swipe,
		"swipe-item":SwipeItem
	},
  methods: {
          handleClick (index) {
              this.$router.push(`/detail/${index}`)
          },
          getProduct() {
            axios.post('server.html?rpc&method=ClassifyRpc.getCategoryProductRank&f=www&_=1550281435251',{"method":"ClassifyRpc.getCategoryProductRank","params":{"page":"classify-list-130519-0-0-0-0-1-20.html","np":1,"ep":20,"category_id":"130519","brand_store_sn":"","filter":"","sort":this.sortRule,"minPrice":"","maxPrice":"","categoryId":"130519","isWarmup":0,"brandStoreSn":"","priceRange":"","pageOffset":null,"query":""},"id":1550281276774,"jsonrpc":"2.0"}).then(res => {
                // console.log('得到产品id',res);
                // console.log(res.data["0"].result.data.productIds);
                this.productIds = res.data["0"].result.data.productIds;
              }).then(res => {
                let productIdStr = "";
                productIdStr = this.productIds[this.normalCount];
                for(let i=this.normalCount+1; i<this.normalCount+20; i++){
                  productIdStr = productIdStr + ',' + this.productIds[i];
                }

                axios.post('server.html?rpc&method=ClassifyRpc.getCategoryProductInfo&f=www&_=1550288361507', {"method":"ClassifyRpc.getCategoryProductInfo","params":{"productIds":productIdStr,"page":"classify-list-130519-0-0-0-0-1-20.html","query":""},"id":1550281276794,"jsonrpc":"2.0"}).then(res => {
                    // console.log('每次得到20个数据', res);
                    this.products = res.data["0"].result.data.products

                })
              });
          },        
          loadMore () {
            axios.post('server.html?rpc&method=ClassifyRpc.getCategoryProductRank&f=www&_=1550281435251',{"method":"ClassifyRpc.getCategoryProductRank","params":{"page":"classify-list-130519-0-0-0-0-1-20.html","np":1,"ep":20,"category_id":"130519","brand_store_sn":"","filter":"","sort":this.sortRule,"minPrice":"","maxPrice":"","categoryId":"130519","isWarmup":0,"brandStoreSn":"","priceRange":"","pageOffset":null,"query":""},"id":1550281276774,"jsonrpc":"2.0"}).then(res => {
                // console.log('得到产品id',res);
                // console.log(res.data["0"].result.data.productIds);
                this.productIds = res.data["0"].result.data.productIds;
              }).then(res => {

                let productIdStr = this.productIds[this.normalCount];
                for(let i=this.normalCount+1; i<this.normalCount+20; i++){
                  productIdStr = productIdStr + ',' + this.productIds[i];
                }
                this.normalCount += 20;
                // console.log(productIdStr);
                
                axios.post('server.html?rpc&method=ClassifyRpc.getCategoryProductInfo&f=www&_=1550288361507', {"method":"ClassifyRpc.getCategoryProductInfo","params":{"productIds":productIdStr,"page":"classify-list-130519-0-0-0-0-1-20.html","query":""},"id":1550281276794,"jsonrpc":"2.0"}).then(res => {
                    // console.log('得到了前20个数据', res);
                    // this.products = res.data["0"].result.data.products
                    this.products = [...this.products, ...res.data["0"].result.data.products];

                })
              });
          },
          sortByPrice() {
            this.sortRule++;
            this.sortRule = this.sortRule%3;
            console.log("排序规则：", this.sortRule);
            this.getProduct();
            this.isActive.a = true;
            this.isActive.b = false;
          },
          sortByDiscount() {
            this.isActive.b = true;
            this.isActive.a = false;
          }
  }
}
</script>

<style scoped lang="scss">
*{
  margin:0px;
  padding:0px;
}
.my-swipe {
  width:100%;
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}	

ul{
  list-style:none;
}
router-link{
  text-decoration:none !important;
}
.active{
  border-bottom:5px solid #f60;
}
</style>
