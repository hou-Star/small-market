<template>
  <div class="mine">
		<div class="head">
			<router-link to="/login" tag="div" class="user-box">
				<!-- <a-avatar icon="user" size='100px'/> -->
				<div class="login">
					<img :src='"http://39.97.162.11:8000" + headImg' class="headImg" v-show="uploadShow"/>
					登录
					
				</div>				
			</router-link>
			<span class="toLogout" v-show="uploadShow" @click="logout">
				注销
			</span>
			<router-link to="/register" tag="span" class="toRegister" v-show="!uploadShow">
				注册成为卖家
			</router-link>
			<span class="showName" v-show="uploadShow">
				{{username}}
			</span>

		</div>
		<div class="heart">
			<div class="swiper-container">
			  <div class="parallax-bg" style="background-image:url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552107815669&di=7a02927be05c47657ede4242536923c9&imgtype=0&src=http%3A%2F%2Fimg01.jituwang.com%2F180130%2F256718-1P13021562022.jpg)" data-swiper-parallax="-23%"></div>
			  <div class="swiper-wrapper">
			    <div class="swiper-slide">
			      <!-- <div class="title" data-swiper-parallax="-300">Slide 1</div> -->
			      <div class="subtitle" data-swiper-parallax="-200">通知一</div>
			      <div class="text" data-swiper-parallax="-100">
			        <p>注册成为卖家，才可以上传商品信息哦</p>
			      </div>
			    </div>
			    <div class="swiper-slide">
			      <!-- <div class="title" data-swiper-parallax="-300" data-swiper-parallax-opacity="0">Slide 2</div> -->
			      <div class="subtitle" data-swiper-parallax="-200">通知二</div>
			      <div class="text" data-swiper-parallax="-100">
			        <p>本网站为纯公益网站</p>
			      </div>
			    </div>
			    <div class="swiper-slide">
			      <!-- <div class="title" data-swiper-parallax="-300">Slide 3</div> -->
			      <div class="subtitle" data-swiper-parallax="-200">通知三</div>
			      <div class="text" data-swiper-parallax="-100">
			        <p>本网站只提供信息展示平台，找到心仪的商品后请自觉与卖家联系</p>
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

				<router-link to="/info" tag="li">
					<svg class="icon" aria-hidden="true">
  						<use xlink:href="#icon-wodexiaoxi5"></use>
					</svg>
					<span>我的消息</span>
					<a-icon type="right" class="myicon"/>
				</router-link>

				<router-link to="/complaint" tag="li">
					<svg class="icon" aria-hidden="true">
  						<use xlink:href="#icon-wodetousu"></use>
					</svg>
					<span>投诉</span>
					<a-icon type="right" class="myicon"/>
				</router-link>
				

				<router-link to="/update" tag="li" v-show="uploadShow">
					<svg class="icon" aria-hidden="true">
  						<use xlink:href="#icon-shangpin3"></use>
					</svg>
					<span>上传商品</span>
					<a-icon type="right" class="myicon"/>
				</router-link>

				<router-link to="/about" tag="li">
					<svg class="icon" aria-hidden="true">
  						<use xlink:href="#icon-guanyuwomen2"></use>
					</svg>
					<span>关于我们</span>
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
import axios from 'axios';
import Icon from "ant-design-vue/lib/icon";
import Avatar from "ant-design-vue/lib/avatar";
import "ant-design-vue/dist/antd.css";
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
import "swiper/dist/js/swiper.js"
import "../assets/font/iconfont.js"
Vue.component(Icon.name, Icon);
Vue.component(Avatar.name, Avatar);

Vue.config.productionTip = false;


Vue.config.productionTip = false;
export default {
	data(){
		return{
			username:"",
			headImg:"",
			uploadShow:false		
		}
	},
	methods:{
		handleClick(){
			console.log('aaa');
		},
		logout(){
			console.log("点击注销登录");
			axios({
				url:'/logout',
			}).then(res=>{
				console.log('从后端返回，成功注销');
				console.log(res);
				if(res.data.ok===1){
					this.uploadShow = false;
					sessionStorage.removeItem('person');
				}
			});
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
		// console.log(sessionStorage.getItem('person'));
		if(sessionStorage.getItem('person')!==null){
		this.username = JSON.parse(sessionStorage.getItem('person')).username;
		this.headImg = JSON.parse(sessionStorage.getItem('person')).headImg;
		this.uploadShow = JSON.parse(sessionStorage.getItem('person'));
		}
		console.log(this.headImg);
	}
}




</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
*{
	margin:0;
	padding:0;
}
ul{
	list-style: none;
}
.head{
	width:100%;
	height:150px;
	background-color: orange;
	background-image:url(https://assets.maizuo.com/h5/v5/public/app/img/bg.043a928.png);
	background-repeat:no-repeat;
	background-size:100% 100%;
	overflow: hidden;
	
	.user-box{
		float:left;
		width:88px;
		height:88px;
		border:1px solid white;
	
		border-radius:50% !important;
		overflow:hidden;
		margin:20px;
		.login{
			width:80px;
			height:80px;
			margin: 3px;
			border-radius:50% !important;
			background-color:gray;
			position:relative;
			text-align: center;
			line-height:100px;

			background-image:url('../assets/img/unlogin.png');
			background-repeat:no-repeat;
			background-size:100% 100%;
	
			.headImg{
				position:absolute;
				left:0;
				top:0;
				width:100%;
				height:100%;
				border-radius:50% !important;
			}
		}
	}
	.toRegister{
		float:right;
		margin:60px 60px 0 20px;
		color:white;
	}
	.toLogout{
		float:right;
		margin:60px 60px 0 20px;
		color:white;	
	}
	.showName{
		float:right;
		margin:60px 60px 0 -100px;
		color:white;		
	}
}
.heart{
	// margin:10px 0;
	width:100%;
	// height:100px;
	// display: flex;
	background-color:-pink;
	
	.swiper-container{
		width:100%;
		height:200px;
	}
}
.fun-list{
	width:100%;
	li{
		width:100%;
		height:50px;
		border-bottom: 1px gray solid;
		position:relative;
		font-size:20px;
		line-height:50px;
		text-indent: 20px;
		span{
			font-size:16px;
			margin-left: 10px;
		}
		.myicon{
			position:absolute;
			right:0;
			top:0;
			line-height:50px;
			font-size: 16px;
			padding-right: 12px;
		}
	}
	margin-bottom:80px;
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
