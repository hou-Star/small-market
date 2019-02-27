<template>
  <div class="headbar">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);

export default {
 
}
</script>

<style scoped lang="scss">

</style>

