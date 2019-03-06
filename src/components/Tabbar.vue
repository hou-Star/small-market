<template>
  <div class="tabbar" v-show="$store.state.tabbarShow">
  	<ul>
  	  <router-link tag='li' to="/home" activeClass="myactive">home</router-link>
  	  <!-- activeClass是属性 -->
  	  <router-link tag='li' to="/classify" activeClass="myactive">classify</router-link>
  	  <router-link tag='li' to="/mine" activeClass="myactive">mine</router-link> 
  	</ul>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
 
}
</script>

<style scoped lang="scss">
*{
  margin:0px;
  padding:0px;
}
// .tabbar{
//   margin-bottom:80px; 
// }
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
  background-color:#999;

  background-color:white;

  li{
    flex:1;
    text-align: center;
    line-height:50px;
  }
}
.myactive{
  color:red;
}	
</style>

