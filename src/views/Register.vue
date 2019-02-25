<template>
  <div class="register">
	注册页
	<mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
	  <router-link to="/mine" slot="left">
	    <mt-button icon="back">返回</mt-button>
	  </router-link>
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
	<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
	<mt-field label="微信号" placeholder="请输入微信号" type="tel" v-model="phone"></mt-field>
	<mt-field label="寝室号" placeholder="请输入寝室号" type="url" v-model="website"></mt-field>
	<mt-field label="个性签名" placeholder="个性签名" type="textarea" rows="4" v-modal="introduction"></mt-field>
	<mt-button type="primary" size="large">提交</mt-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);

export default {
 
}
</script>

<style scoped lang="scss">
	
</style>
