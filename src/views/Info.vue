
<template>
  <div class="info">
  	<Headbar></Headbar>
	我收到了哪些消息
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
	
</style>
