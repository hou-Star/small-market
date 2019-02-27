<template>
  <div class="register">
	注册页
	<Headbar></Headbar>
	<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
	<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
	<mt-field label="联系方式" placeholder="联系方式" type="tel" v-model="phone"></mt-field>
	<mt-field label="寝室号" placeholder="请输入寝室号" type="url" v-model="website"></mt-field>
	<mt-field label="个性签名" placeholder="个性签名" type="textarea" rows="4" v-model="introduction"></mt-field>
	<mt-button type="primary" size="large" @click="handleClick">提交</mt-button>
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
import Headbar from '@/components/Headbar';

Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Header.name, Header);
Vue.component('Headbar', Headbar);

export default {
	data(){
		return{
			username: "",
			password: "",
			phone:"",
			website:"",
			introduction:""
		}
	},
	mounted(){
		this.$store.state.tabbarShow = false;		
	},
	beforeDestroy(){
		this.$store.state.tabbarShow = true;		
	},
	methods:{
		handleClick(){
			// console.log('send!!!!');
			console.log('introduction', this.introduction);
			axios({
				url:'/register',
				method:'post',
				data:{
					// aa:123
					username: this.username,
					password: this.password,
					phone: this.phone,
					website: this.website,
					introduction: this.introduction				
				}

			}).then(res=>{

				// if(res.data.ok===3){
				// 	// this.$store.state.uploadShow = true;
				// 	// console.log('显示',this.$store.state.uploadShow);
				// }
				// this.$router.push('/mine');
				// console.log(res.data);
				console.log('从数据库返回');
			}
			);
		}
		// handleClick(){
		// 	console.log(this.username);
		// }
	}
}
</script>

<style scoped lang="scss">
	
</style>







<!--  <template>
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
 		this.$store.state.tabbarShow = false;		
 	},
 	beforeDestroy(){
 		this.$store.state.tabbarShow = true;		
 	},
 	methods:{
 		handleClick(){
 			console.log('send!!!!');
 			console.log(this.$refs);
 			axios({
 				url:'/register',
 				method:'post',
 				data:{
 					username: this.$refs.username.value,
 					password: this.$refs.password.value
 				}

 			}).then(res=>{

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
