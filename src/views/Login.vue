<template>
  <div class="login">
	<div class="logo">
		<img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png">			
	</div>
	<div class="loginDiv">
		<mt-field label="用户名" placeholder="请输入用户名" v-model="username" @input="registerCheck">
		</mt-field>
		<span class="error" v-show="registered">
			该用户名已被占用
		</span>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-button type="primary" size="large" @click="handleClick" class="loginBtn">提交</mt-button>	
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
	data(){
		return{
			username: "",
			password: ""			
		}
	},
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
					username: this.username,
					password: this.password
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
.login{
	overflow: hidden;
	.logo{
		height:200px;
		overflow: hidden;
		img{
			display: block;
			width:60px;
			height:60px;
			margin: 70px auto;  
		}
	}
	.loginDiv{
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		.loginBtn{
			margin-top: 18px;
			background-color: #ff5f16;
		}
	}
}	
</style>




<!-- <template>
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
	
</style> -->
