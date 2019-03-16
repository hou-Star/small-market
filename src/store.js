import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	tabbarShow:true,
  	uploadShow:false,
    // imgReq: "http://39.97.162.11:8000"
    imgReq: "http://localhost:3000"
  },
  mutations: {
  	changeTabbarShow(state, payLoad){
  		state.tabbarShow = payLoad;
  	}
  },
  actions: {

  }
})
