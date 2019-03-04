<template>
  <div class="classify">
		<Headbar></Headbar>        
	  <ul  class="list">
	    <li arrow="horizontal" @click="handleClick">
	       <a ref={this.id}>服装</a>
	    </li>
	    <li arrow="horizontal" @click="handleClick">
	      <a ref="mycontent">学习用品</a>
	    </li>
	    <li arrow="horizontal" @click="handleClick">
	      <a ref="mycontent">日用品</a>
	    </li>
	    <li arrow="horizontal" @click="handleClick">
	      <a ref="mycontent">美妆</a>
	    </li>
	    <li arrow="horizontal" @click="handleClick">
	      <a ref={this.id}>电器</a>
	    </li>
	    <li arrow="horizontal" @click="handleClick">
	      <a ref="mycontent">食品</a>
	    </li>
	    <li arrow="horizontal" @click="handleClick">
	      <a ref="mycontent">其它</a>
	    </li>
	  </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
// import { List } from 'antd-mobile';

// Vue.component(li,List.li);
export default {
	methods:{
		handleClick(){

            this.$router.push(`/list`)
        
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
	}
}
	
</style>
