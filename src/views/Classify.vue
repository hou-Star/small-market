<template>
  <div class="classify">
		<Headbar></Headbar>        
	  <ul  class="list">
	    <li arrow="horizontal" @click="handleClick(1)">
	       <a ref={this.id}>服装</a>
	       <a-icon type="right" class="myicon"/>
	    </li>
	    <li arrow="horizontal" @click="handleClick(2)">
	      <a ref="mycontent">学习用品</a>
	      <a-icon type="right" class="myicon"/>
	    </li>
	    <li arrow="horizontal" @click="handleClick(3)">
	      <a ref="mycontent">日用品</a>
	      <a-icon type="right" class="myicon"/>
	    </li>
	    <li arrow="horizontal" @click="handleClick(4)">
	      <a ref="mycontent">美妆</a>
	      <a-icon type="right" class="myicon"/>
	    </li>
	    <li arrow="horizontal" @click="handleClick(5)">
	      <a ref={this.id}>电器</a>
	      <a-icon type="right" class="myicon"/>
	    </li>
	    <li arrow="horizontal" @click="handleClick(6)">
	      <a ref="mycontent">食品</a>
	      <a-icon type="right" class="myicon"/>
	    </li>
	    <li arrow="horizontal" @click="handleClick(7)">
	      <a ref="mycontent">其它</a>
	      <a-icon type="right" class="myicon"/>
	    </li>
	  </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Icon from "ant-design-vue/lib/icon";
Vue.component(Icon.name, Icon);
// import { List } from 'antd-mobile';

// Vue.component(li,List.li);
export default {
	methods:{
		handleClick(index){
            this.$router.push(`/list/${index}`);       
		}
	}
}
</script>

<style scoped lang="scss">
*{
	margin:0;
	padding:0;
}
a{
	color:#666;	
}
.list{
	list-style:none;
	width:100%;
	li{
		width:100%;
		height:60px;
		border-bottom: 1px solid gray;
		line-height:60px;
		text-indent: 30px;
		position:relative;
		.myicon{
			position:absolute;
			right:0;
			top:0;
			line-height:60px;
			font-size: 16px;
			padding-right: 12px;
		}
	}
}
	
</style>
