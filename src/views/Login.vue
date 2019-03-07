<template>
  <div class="login">
	注册页
	<div>
		<input type="text" placeholder="用户名" ref="username">
		<input type="password" placeholder="密码" ref="password"><br>
		<button @click="handleClick">提交</button>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import axios from 'axios';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Field } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);

export default {
	mounted(){
		this.$store.commit("changeTabbarShow", false);		
	},
	beforeDestroy(){
		this.$store.commit("changeTabbarShow", true);		
	},
	methods:{
		handleClick(){
			console.log('send!!!!');
			console.log(this.$refs);
			axios({
				url:'/login',
				method:'post',
				data:{
					username: this.$refs.username.value,
					password: this.$refs.password.value
				}

			}).then(res=>{
				console.log('登录返回');
				console.log('res=====', res);
				console.log('session===', res.session);
				// document.cookie = "person="+res.data.person.username;
				sessionStorage.setItem('person',JSON.stringify(res.data.person));
				// sessionStorage.setItem('person',JSON.stringify(res.session.whatever));
				if(res.data.ok===1){
					this.$store.state.uploadShow = true;
					console.log('显示',this.$store.state.uploadShow);
				}
				this.$router.push('/mine');
				console.log(res.data);
			}
			);
		}
	}
}
</script>

<style scoped lang="scss">
	
</style>
