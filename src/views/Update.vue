<template>
  <div class="info">
  	<el-form ref="form" :model="form" label-width="80px">
  	  <el-form-item label="商品名称">
  	    <el-input v-model="form.name"></el-input>
  	  </el-form-item>
		<el-form-item label="商品类别">
		    <el-select v-model="form.region1" placeholder="请选择商品类别">
		      <el-option label="服装" value="服装"></el-option>
		      <el-option label="学习用品" value="学习用品"></el-option>
		      <el-option label="日用品" value="日用品"></el-option>
		      <el-option label="美妆" value="美妆"></el-option>
		      <el-option label="电器" value="电器"></el-option>
		      <el-option label="食品" value="食品"></el-option>
		      <el-option label="其它" value="其它"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="几成新">
		      <el-select v-model="form.region2" placeholder="请选择商品类别">
		        <el-option label="1" value="1"></el-option>
		        <el-option label="2" value="2"></el-option>
		        <el-option label="3" value="3"></el-option>
		        <el-option label="4" value="4"></el-option>
		        <el-option label="5" value="5"></el-option>
		        <el-option label="6" value="6"></el-option>
		        <el-option label="7" value="7"></el-option>
		        <el-option label="8" value="8"></el-option>
		        <el-option label="9" value="9"></el-option>
		        <el-option label="10" value="10"></el-option>
		      </el-select>
		    </el-form-item>
		    <el-form-item label="商品价格">
		      <el-input v-model="form.price"></el-input>
		    </el-form-item>
		  <el-form-item label="商品描述">
		     <el-input type="textarea" v-model="form.desc"></el-input>
		   </el-form-item>
  	  <!-- <el-form-item> -->
<!--   	  	<el-upload
  	  	  action="https://jsonplaceholder.typicode.com/posts/"
  	  	  list-type="picture-card"
  	  	  :on-preview="handlePictureCardPreview"
  	  	  :on-remove="handleRemove">
  	  	  <i class="el-icon-plus"></i>
  	  	</el-upload>
  	  	<el-dialog :visible.sync="dialogVisible">
  	  	  <img width="100%" :src="dialogImageUrl" alt="">
  	  	</el-dialog> -->
  	  	
		<!-- </el-form-item> -->
<!--   	  <el-form-item>
  	    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  	    <el-button>取消</el-button>
  	  </el-form-item> -->

  	</el-form>
<!--   	<el-upload
  	  action="https://jsonplaceholder.typicode.com/posts/"
  	  list-type="picture-card"
  	  :on-preview="handlePictureCardPreview"
  	  :on-remove="handleRemove">
  	  <i class="el-icon-plus"></i>
  	</el-upload>
  	<el-dialog :visible.sync="dialogVisible">
  	  <img width="100%" :src="dialogImageUrl" alt="">
  	</el-dialog> -->
  	<input type="file" name="we" ref="inputfile"/>
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
import { Button, Select,Input, Form, FormItem,Option, Upload, Dialog, Row } from 'element-ui';
import axios from 'axios';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Upload.name, Upload);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Option.name, Option);
Vue.component(Dialog.name, Dialog);
Vue.component(Row.name, Row);

export default {
	data() {
	  return {
	  	//上传图片的数据
	    dialogImageUrl: 'aa',
	    dialogVisible: false,

	    //提交表单的数据
	    form: {
	      name: '',
	      region1: '',
	      region2: '',
	      date1: '',
	      date2: '',
	      delivery: false,
	      type: [],
	      resource: '',
	      desc: '',
	      price:''
	      // dialogImageUrl: '',
	      // dialogVisible: false,
	    }
	  };
	},
	methods: {
		//上传图片的方法
	  handleRemove(file, fileList) {
	    console.log(file, fileList);
	  },
	  handlePictureCardPreview(file) {
	  	console.log(file);
	    this.dialogImageUrl = file.url;
	    this.dialogVisible = true;
	  },

	  //提交表单的方法
	  onSubmit() {
			// console.log('send!!!!');
			// console.log('productName', this.form.name);
			// console.log('region1', this.form.region1);
			// console.log('region2', this.form.region2);
			// console.log('desc', this.form.desc);
			// console.log('dialogImageUrl', this.dialogImageUrl);
			// console.log('dialogVisible', this.dialogVisible);
			// 
			var formData = new FormData();
			formData.append('productName', this.form.name);
			formData.append('productType', this.form.region1);
			formData.append('newDegree', this.form.region2);
			formData.append('productDescription', this.form.desc);
			formData.append('productPrice', this.form.price);
			// formData.append('productImg', this.$refs.inputfile);
			formData.append('productImg', this.$refs.inputfile.files[0]);
			console.log(this.$refs.inputfile.value);
			console.log('cookie', document.cookie);
			axios({
				url:'/upload',
				method:'post',
				data: formData,
				cache: false,
				contentType: false,
				processData:false

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
	} 
}
</script>

<style scoped lang="scss">
el-form{
	height:600px;
}	
</style>
