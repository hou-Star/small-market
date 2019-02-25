<template>
  <div class="info">
  	<el-form ref="form" :model="form" label-width="80px">
  	  <el-form-item label="商品名称">
  	    <el-input v-model="form.name"></el-input>
  	  </el-form-item>
		<el-form-item label="商品类别">
		    <el-select v-model="form.region" placeholder="请选择商品类别">
		      <el-option label="衣服" value="shanghai"></el-option>
		      <el-option label="书籍" value="beijing"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="几成新">
		      <el-select v-model="form.region" placeholder="请选择商品类别">
		        <el-option label="1" value="shanghai"></el-option>
		        <el-option label="2" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>
		  <el-form-item label="商品描述">
		     <el-input type="textarea" v-model="form.desc"></el-input>
		   </el-form-item>
  	  <el-form-item>
  	    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  	    <el-button>取消</el-button>
  	  </el-form-item>

  	</el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select,Input, Form, FormItem,Option } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
// Vue.component(Upload.name, Upload);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Option.name, Option);

export default {
	data() {
	  return {
	  	//上传图片的数据
	    // dialogImageUrl: '',
	    // dialogVisible: false,

	    //提交表单的数据
	    form: {
	      name: '',
	      region: '',
	      date1: '',
	      date2: '',
	      delivery: false,
	      type: [],
	      resource: '',
	      desc: ''
	    }
	  };
	},
	methods: {
		//上传图片的方法
	  handleRemove(file, fileList) {
	    console.log(file, fileList);
	  },
	  handlePictureCardPreview(file) {
	    this.dialogImageUrl = file.url;
	    this.dialogVisible = true;
	  },

	  //提交表单的方法
	  onSubmit() {
	    console.log('submit!');
	  }
	} 
}
</script>

<style scoped lang="scss">
el-form{
	height:600px;
}	
</style>
