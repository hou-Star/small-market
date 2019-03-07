<template>
  <div class="register">
	<Headbar></Headbar>
	<mt-field label="用户名" placeholder="请输入用户名" v-model="username" @input="registerCheck">
	</mt-field>
	<span class="error" v-show="registered">
		该用户名已被占用
	</span>
	<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
	<mt-field label="联系方式" placeholder="联系方式" type="tel" v-model="phone"></mt-field>
	<mt-field label="寝室号" placeholder="请输入寝室号" type="url" v-model="website"></mt-field>
	<mt-field label="个性签名" placeholder="个性签名" type="textarea" rows="4" v-model="introduction"></mt-field>
	<el-upload
	  class="avatar-uploader"
	  action="http://localhost:3000/public/headImgs"
	  :auto-upload="false"
	  :show-file-list="false"
	  :on-change="imgPreview"
	  
	  :before-upload="beforeAvatarUpload"
	  :on-remove="handleRemove"   
	  >
	  <img v-if="imageUrl" :src="imageUrl" class="avatar">
	  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
	</el-upload>
<!-- 	<el-upload
	  action="https://jsonplaceholder.typicode.com/posts/"

	  list-type="picture-card"
	  :on-preview="handlePictureCardPreview"
	  :on-remove="handleRemove"
	  :limit=1>
	  <i class="el-icon-plus"></i>
	</el-upload>
	<el-dialog :visible.sync="dialogVisible">
	  <img width="100%" :src="dialogImageUrl" alt="">
	</el-dialog> -->

	<mt-button type="primary" size="large" @click="handleClick">提交</mt-button>
<!-- 	<div>
	<input type="file" name="we" ref="inputfile"/>
</div> -->
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

import { Upload } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.component(Upload.name, Upload);

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
			introduction:"",

			registered:0,
			dialogImageUrl: '',
			dialogVisible: false,
			imageUrl:''
		}
	},
	mounted(){
		this.$store.commit("changeTabbarShow", false);		
	},
	beforeDestroy(){
		this.$store.commit("changeTabbarShow", true);		
	},
	methods:{
		imgPreview (file, fileList) {
			console.log("file", file);
			console.log("fileURL", file.url);
			console.log("fileList", fileList);
			
		    this.imageUrl = URL.createObjectURL(file.raw);
		    console.log(this.imageUrl,'缩略图');

        },
		handleClick(){
			var input = document.querySelector('.el-upload__input');
			console.log('input',input);
			// console.log('send!!!!');
			console.log('headImg', input.value);
			// console.log('headImgjlklklkl', this.$refs.$children[0].$refs);
			var formData = new FormData();
			formData.append('username', this.username);
			formData.append('password', this.password);
			formData.append('phone', this.phone);
			formData.append('website', this.website);
			formData.append('introduction', this.introduction);
			// formData.append('productImg', this.$refs.inputfile);
			// formData.append('headImg', this.$refs.inputfile.files[0]);
			formData.append('headImg', input.files[0]);
			axios({
				url:'/register',
				method:'post',
				data:formData,
				cache: false,
				contentType: false,
				processData:false			
			}).then(res=>{

				if(res.data.ok===3){
					this.$router.push('/mine');
					// this.$store.state.uploadShow = true;
					// console.log('显示',this.$store.state.uploadShow);
				}
				// this.$router.push('/mine');
				// console.log(res.data);
				console.log('从数据库返回');
			}
			);
		},
		registerCheck(){
			axios({
				url:'/register/check',	
				method:'post',
				data:{
					username:this.username
				}		
			}).then(res=>{
				this.registered = res.data.ok;
				// if(res.data.ok===3){
				// 	this.$router.push('/mine');
				// 	// this.$store.state.uploadShow = true;
				// 	// console.log('显示',this.$store.state.uploadShow);
				// }
				// this.$router.push('/mine');
				// console.log(res.data);
				console.log('从数据库返回');
			}
			);
		},
		//上传头像
		  handleAvatarSuccess(res, file) {
		    this.imageUrl = URL.createObjectURL(file.raw);
		    console.log(this.imageUrl);
		  },
		  beforeAvatarUpload(file) {
		    const isJPG = file.type === 'image/jpeg';
		    const isLt126M = file.size / 1024 / 1024 < 126;

		    if (!isJPG) {
		      this.$message.error('上传头像图片只能是 JPG 格式!');
		    }
		    if (!isLt126M) {
		      this.$message.error('上传头像图片大小不能超过 2MB!');
		    }
		    return isJPG && isLt126M;
		  },


		  handleRemove(file, fileList) {
		    console.log(file, fileList);
		  },
		  handlePictureCardPreview(file) {
		    this.dialogImageUrl = file.url;
		    this.dialogVisible = true;
		  }
		
	}
}
</script>

<style scoped lang="scss">
.error{
	display:block;
	width: 100%;
	color:red;
	text-indent: 115px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}	
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
