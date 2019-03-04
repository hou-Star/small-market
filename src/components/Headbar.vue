<template>
  <div class="headbar">
    <mt-header title="跳蚤市场" class="top">
      <span slot="left" @click="handleClick">
        <mt-button icon="back">返回</mt-button>
      </span>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);

export default {
	methods:{
		handleClick(){
			history.go(-1);
		}
	}
}
</script>

<style scoped lang="scss">
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
</style>

