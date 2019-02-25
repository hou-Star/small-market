import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' //单文件组件
import Classify from './views/Classify.vue'
import Mine from './views/Mine.vue'
import Register from './views/Register.vue'
import Info from './views/Info.vue' 
import Update from './views/Update.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash', //两种模式，history/hash
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },  
    {
      path: '/update',
      name: 'update',
      component: Update
    },       
    {
      path: '/',
      redirect: '/home'
    }
    //从上到下依次匹配

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about"  './views/About.vue')
    // }*/
  ]
})
