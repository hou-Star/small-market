<template>
  <div class="about">
  	<Headbar></Headbar>
	<h3>关于我们</h3>
	<p>我们是专为辽师西山学子提供二手商品交易信息的平台</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Headbar from '@/components/Headbar';

Vue.component('Headbar', Headbar);


export default {
	mounted(){
		this.$store.commit("changeTabbarShow", false);
	},
	beforeDestroy(){
		this.$store.commit("changeTabbarShow", true);
	}
}
</script>

<style scoped lang="scss">
h3, p{
	text-align:center;
}	
</style>

