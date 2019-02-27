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
</template>

<script>
// @ is an alias to /src

import "ant-design-vue/dist/antd.css";
import Vue from 'vue'
import Icon from "ant-design-vue/lib/icon";
import Avatar from "ant-design-vue/lib/avatar";
import "ant-design-vue/dist/antd.css";

Vue.component(Icon.name, Icon);
Vue.component(Avatar.name, Avatar);

Vue.config.productionTip = false;


Vue.config.productionTip = false;
export default {
	methods:{
		handleClick(){
			console.log('aaa');
		}
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
</style>
