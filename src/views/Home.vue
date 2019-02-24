<template>
  <div class="home">
  	home--大轮播
  	<swipe class="my-swipe">
  		<!-- 注册后才能使用 -->
  		<swipe-item class="slide1"></swipe-item>
  		<swipe-item class="slide2"></swipe-item>
  		<swipe-item class="slide3"></swipe-item>
  	</swipe>
  	home
  </div>
</template>

<script>
// @ is an alias to /src
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from 'axios'

export default {
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
		});
	},
	components:{
		"swipe":Swipe,
		"swipe-item":SwipeItem
	}
}
</script>

<style scoped lang="scss">
.my-swipe {
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
</style>
