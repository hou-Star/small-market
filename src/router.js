import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue' //单文件组件
import Classify from './views/Classify.vue'
import Mine from './views/Mine.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Info from './views/Info.vue' 
import Complaint from './views/Complaint.vue'
import Update from './views/Update.vue'
import Upload from './views/Upload.vue'
import ModifyProd from './views/ModifyProd.vue'
import About from './views/About.vue'
import List from './components/List.vue'
import Detail from './views/Detail.vue'

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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/complaint',
      name: 'complaint',
      component: Complaint
    },   
    {
      path: '/update',
      name: 'update',
      component: Update
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }, 
    {
      path: '/modifyProd/:id',
      name: 'modifyProd',
      component: ModifyProd
    },  
    {
      path: '/about',
      name: 'about',
      component: About
    },   
    {
      path: '/list/:type',
      name: 'list',
      component: List
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
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
