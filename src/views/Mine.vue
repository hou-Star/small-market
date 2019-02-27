<template>
  <div class="mine">
		<div class="head">
			<router-link to="/login" tag="div" class="user-box">
				<!-- <a-avatar icon="user" size='100px'/> -->
				<div class="login">登录</div>				
			</router-link>
			<!-- <div class="user-box" @click="handleClick">
			</div> -->
			<router-link to="/register" tag="span">
				注册成为卖家
			</router-link>	
			<!-- <span>注册成为卖家</span> -->
		</div>
		<div class="heart">
			通告栏
			<div class="swiper-container">
			  <div class="parallax-bg" style="background-image:url(https://www.swiper.com.cn/demo/img/Parallax.jpg)" data-swiper-parallax="-23%"></div>
			  <div class="swiper-wrapper">
			    <div class="swiper-slide">
			      <div class="title" data-swiper-parallax="-300">Slide 1</div>
			      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
			      <div class="text" data-swiper-parallax="-100">
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
			      </div>
			    </div>
			    <div class="swiper-slide">
			      <div class="title" data-swiper-parallax="-300" data-swiper-parallax-opacity="0">Slide 2</div>
			      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
			      <div class="text" data-swiper-parallax="-100">
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
			      </div>
			    </div>
			    <div class="swiper-slide">
			      <div class="title" data-swiper-parallax="-300">Slide 3</div>
			      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
			      <div class="text" data-swiper-parallax="-100">
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
			      </div>
			    </div>
			  </div>
			  <!-- Add Pagination -->
			  <div class="swiper-pagination swiper-pagination-white"></div>
			  <!-- Add Navigation -->
			  <div class="swiper-button-prev swiper-button-white"></div>
			  <div class="swiper-button-next swiper-button-white"></div>
			</div>

			<ul class="fun-list">
				<router-link to="/info" tag="li">我的消息
					<a-icon type="right" class="myicon"/>
				</router-link>
				<router-link to="/info" tag="li">投诉
					<a-icon type="right" class="myicon"/>
				</router-link>
				<router-link to="/update" tag="li" v-show="$store.state.uploadShow">上传商品
					<a-icon type="right" class="myicon"/>
				</router-link>
				<router-link to="/about" tag="li">关于我们
					<a-icon type="right" class="myicon"/>
				</router-link>			
				<!-- <li><a-icon type="right" class="myicon"/>我的消息</li> -->
				<!-- <li><a-icon type="right" class="myicon"/>投诉</li> -->
			</ul>
<!-- <a-icon type="user" /> -->
  		</div>
  	</div>
</template>

<script>
// @ is an alias to /src

import "ant-design-vue/dist/antd.css";
import Vue from 'vue'
import Icon from "ant-design-vue/lib/icon";
import Avatar from "ant-design-vue/lib/avatar";
import "ant-design-vue/dist/antd.css";
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
import "swiper/dist/js/swiper.js"

Vue.component(Icon.name, Icon);
Vue.component(Avatar.name, Avatar);

Vue.config.productionTip = false;


Vue.config.productionTip = false;
export default {
	methods:{
		handleClick(){
			console.log('aaa');
		}
	},
	mounted(){
		//轮播通告栏
		var swiper = new Swiper('.swiper-container', {
		  speed: 600,
		  parallax: true,
		  loop: true, // 环路模式选项
		  autoplay:true,
		  pagination: {
		    el: '.swiper-pagination',
		    clickable: true,
		  },
		  navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		  }
		});		
	}
}




</script>

<style scoped lang="scss">
*{
	margin:0;
	padding:0;
}
.mine{

}
ul{
	list-style: none;
}
.head{
	width:100%;
	height:200px;
	background-color: orange;
	// .user-box{
	// 	width:100px;
	// 	height:100px;
	// }
}
.user-box{
	width:100px;
	height:100px;
}
.login{
	width:100px;
	height:100px;
	background-color:gray;
}
.heart{
	margin:10px 0;
	width:100%;
	height:100px;
	// display: flex;
	background-color:pink;
	// li{
	// 	flex:1;
	// 	line-height: 100px;
	// 	text-align: center;

	// }
}
.fun-list{
	width:100%;
	li{
		width:100%;
		height:50px;
		border-bottom: 1px gray solid;
		position:relative;
		.myicon{
			position:absolute;
			right:0;
			top:0;
			line-height:50px;
			font-size: 16px;
			padding-right: 12px;
		}
	}
}
.ant-avatar{
	width:100px;
	height:100px;
	margin:40px;
}
.ant-avatar.ant-avatar-icon {
	line-height:80px;
    font-size: 70px;
}


//swiper
html, body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color:#000;
  margin: 0;
  padding: 0;
}
.swiper-container {
    width: 100%;
    height: 250px;
  background: #000;
}
.swiper-slide {
  font-size: 18px;
  color:#fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}
.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}
.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}
.swiper-slide .subtitle {
  font-size: 21px;
}
.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}

</style>
