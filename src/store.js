import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	tabbarShow:true,
  	uploadShow:false
  },
  mutations: {
  	changeTabbarShow(state, payLoad){
  		state.tabbarShow = payLoad;
  	}
  },
  actions: {

  }
})
