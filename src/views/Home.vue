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
    <div>
      <mt-header title="跳蚤市场" class="top">
        <router-link to="/clothing/[object%20Object]" slot="left">
         <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

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
      <ul class="product-list">
          <li v-for="data in products">
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
  </div>
</template>

<script>
// @ is an alias to /src
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios'



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
  },
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
.top{
  width:100%;

  background-color: red;
  font-size:120px;
}
.mint-header.top{
  background-color:white;
  height:49px;
  color:black;
  font-size:16px;
  border-bottom:1px #e5e5e5 solid;
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

.active{
  border-bottom:5px solid #f60;
}
</style>
