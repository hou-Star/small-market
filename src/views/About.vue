<template>
  <div class="about">
  	<el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import axios from 'axios';
import { Upload } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.component(Upload.name, Upload);

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
export default {
	data() {
      return {
        imageUrl: ''
      };
    },
	methods:{
		handleClick(){
			console.log('headImg', this.$refs);
			
		},
		//上传头像
		  handleAvatarSuccess(res, file) {
		    this.imageUrl = URL.createObjectURL(file.raw);
		    console.log(this.imageUrl,'woshiURL');
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
		  upLoad(event, file, fileList){
		  	console.log("event", event);
		  	console.log("file", file);
		  	console.log("fileList", fileList);
		  }
	} 
}
</script>

<style scoped lang="scss">
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

<!-- <template>
  <div class="about">
  	<Headbar></Headbar>
	关于我们
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Headbar from '@/components/Headbar';

Vue.component('Headbar', Headbar);


export default {
 
}
</script>

<style scoped lang="scss">
	
</style> -->

