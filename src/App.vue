<template>
  <div id="box">
    <ul>
      <router-link tag='li' to="/home" activeClass="myactive">home</router-link>
      <!-- activeClass是属性 -->
      <router-link tag='li' to="/classify" activeClass="myactive">classify</router-link>
      <router-link tag='li' to="/mine" activeClass="myactive">mine</router-link> 
    </ul>
    <router-view></router-view>
    <!-- 路由容器 -->
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        mytext:""
      }
    }
  }
</script>

<style scoped lang="scss">
*{
  margin:0px;
  padding:0px;
}
#box{
  background-color:#eee;
}
ul{
  width:100%;
  height:50px;
  display:flex;
  list-style:none;
  position:fixed;
  left:0;
  bottom: 0;
  color:gray;

  background-color:white;

  li{
    flex:1;
    text-align: center;
  }
}
.myactive{
  color:red;
}


</style>
