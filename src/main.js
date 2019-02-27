import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,//es6对象简写
  store, //vuex
  render: h => h(App)
}).$mount('#app')
