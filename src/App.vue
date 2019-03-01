<template>
  <div id="box">
    <Tabbar></Tabbar>
    <router-view></router-view>
    <!-- 路由容器 -->
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue';
  import Tabbar from './components/Tabbar';
  Vue.component('Tabbar', Tabbar);
  export default {
    data() {
      return {
        mytext:""
      }
    }
  }
</script>

<style scoped lang="scss">
// #box{
//   padding-bottom:80px;
// }
</style>
