<template>
  <div class="tabbar" v-show="$store.state.tabbarShow">
  	<ul>
  	  <router-link tag='li' to="/home" activeClass="myactive">
        <div>
          <span class="iconfont icon-shouye2"></span>         
        </div>
        <div>
          <span>首页</span>          
        </div>
      </router-link>

  	  <!-- activeClass是属性 -->
  	  <router-link tag='li' to="/classify" activeClass="myactive">
        <div>
          <span class="iconfont icon-fenlei2"></span>
        </div>
        <div>
          <span>分类</span>
        </div>
      </router-link>

  	  <router-link tag='li' to="/mine" activeClass="myactive">
        <div>
          <span class="iconfont icon-wode1"></span>
        </div>
        <div>
          <span>我的</span>
        </div>       
      </router-link> 
  	</ul>
  </div>
</template>

<script src="../assets/font/iconfont.js">
// @ is an alias to /src


export default {
 
}
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
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

    div:nth-of-type(1){
      height:30px;
      span{
        
      font-size:22px;
      line-height:30px;
      }
    }
    div:nth-of-type(2){
      height:20px;
      font-size:12px;
      line-height:20px;
    }
  }
}
.myactive{
  color:red;
}	
</style>

<style src="../assets/font/iconfont.css"></style>

