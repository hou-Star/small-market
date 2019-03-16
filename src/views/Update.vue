<template>
  <div class="update">
  	<Headbar></Headbar>
	<h3>我已上传商品：<span>{{myProducts.length}}个</span></h3>	
	<ul class="myUploadedProducts">
		<li v-for="data in myProducts">
			<img :src='$store.state.imgReq + data.productImg' alt="">
			<span>{{data.productName}}</span>
			<button @click="ModifyProd(data._id)">修改</button>
			<button @click="delProd(data._id)">删除</button>
		</li>
	</ul>
  	

  	
  	<el-row>
  		<el-button type="primary" @click="onSubmit">立即创建</el-button>
  		<el-button>取消</el-button>  		
  	</el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Button,  Row } from 'element-ui';
import axios from 'axios';

import Headbar from '@/components/Headbar';
Vue.component('Headbar', Headbar);

Vue.component(Button.name, Button);
Vue.component(Row.name, Row);

export default {
	data() {
	  return {
	  	myProducts:[]
	  };
	},
	mounted(){
		this.$store.commit("changeTabbarShow", false);
		axios({
			url:`/getMyProducts?userid=${JSON.parse(sessionStorage.getItem('person'))._id}`
		}).then(res=>{
			this.myProducts = res.data;
			console.log('res==',res)
		}).catch(error=>{
			console.log(error);
		});
	},
	beforeDestroy(){
		this.$store.commit("changeTabbarShow", true);
	},
	methods: {

	  //提交表单的方法
	  onSubmit() {
		this.$router.push('/upload');		
	  },
	  delProd(index){
	  	axios({
	  		url:'/delProd',
	  		method: 'post',
	  		data:{_id: index }
	  	}).then(res=>{
	  		this.myProducts.splice(index+1, 1);
	  		console.log("删除成功");
	  	});
	  },
	  ModifyProd(index){
	  	this.$router.push(`/modifyProd/${index}`);
	  }
	} 
}
</script>

<style scoped lang="scss">

.myUploadedProducts{
	list-style:none;
	li{
		height:60px;
		img{
			width:40px;
			height:40px;
		}
	}
}
el-form{
	height:600px;
}	
</style>
